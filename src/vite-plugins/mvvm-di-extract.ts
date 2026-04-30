import fs from "node:fs/promises";
import path from "node:path";
import ts from "typescript";
import { type ContainerEntry, MVVM_MODULE } from "./mvvm-di-types";

type ImportRef = {
  importName: string;
  sourcePath: string;
};

type ResolveState = {
  cache: Map<string, string | null>;
  resolving: Set<string>;
};

type ResolveContext = {
  filePath: string;
  localConsts: Map<string, ts.Expression>;
  importedConsts: Map<string, ImportRef>;
  localResolved: Map<string, string | null>;
  importedResolved: Map<string, string | null>;
  resolveState: ResolveState;
};

const SERVICE_DECORATOR = "Service";
const STORE_DECORATOR = "Store";

/** Извлечь Service/Store entries из одного TypeScript source file. */
export async function extractEntries(filePath: string): Promise<ContainerEntry[]> {
  const content = await fs.readFile(filePath, "utf8");
  const kind = inferScriptKind(filePath);
  const source = ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest, true, kind);
  const resolveState: ResolveState = { cache: new Map(), resolving: new Set() };
  const resolveContext = await buildResolveContext(source, filePath, resolveState);

  const serviceIdentifiers = new Set<string>();
  const storeIdentifiers = new Set<string>();

  for (const statement of source.statements) {
    if (!ts.isImportDeclaration(statement)) continue;
    const moduleName = statement.moduleSpecifier.getText(source).replace(/['"]/g, "");
    if (moduleName !== MVVM_MODULE) continue;
    const importClause = statement.importClause;
    if (!importClause?.namedBindings || !ts.isNamedImports(importClause.namedBindings)) continue;

    for (const element of importClause.namedBindings.elements) {
      const imported = element.propertyName?.text ?? element.name.text;
      const local = element.name.text;
      if (imported === SERVICE_DECORATOR) {
        serviceIdentifiers.add(local);
      }
      if (imported === STORE_DECORATOR) {
        storeIdentifiers.add(local);
      }
    }
  }

  if (serviceIdentifiers.size === 0 && storeIdentifiers.size === 0) return [];

  const results: ContainerEntry[] = [];

  for (const node of source.statements) {
    if (!ts.isClassDeclaration(node) || !node.name) continue;
    const className = node.name.text;
    const decorators = ts.getDecorators(node) ?? [];

    for (const decorator of decorators) {
      const expr = decorator.expression;
      if (ts.isIdentifier(expr)) {
        const isService = serviceIdentifiers.has(expr.text);
        const isStore = storeIdentifiers.has(expr.text);
        if (isService) {
          results.push({ className, entryKey: className, filePath, kind: "service" });
        } else if (isStore) {
          results.push({ className, entryKey: className, filePath, kind: "store" });
        }
      } else if (ts.isCallExpression(expr) && ts.isIdentifier(expr.expression)) {
        const decoratorName = expr.expression.text;
        const isService = serviceIdentifiers.has(decoratorName);
        const isStore = storeIdentifiers.has(decoratorName);
        if (!isService && !isStore) continue;
        const [firstArg] = expr.arguments;
        let key = className;
        const resolvedKey = await resolveServiceIdFromDecoratorArg(firstArg, resolveContext);
        if (resolvedKey) {
          key = resolvedKey;
        }
        results.push({ className, entryKey: key, filePath, kind: isStore ? "store" : "service" });
      }
    }
  }

  return results;
}

async function resolveServiceIdFromDecoratorArg(
  arg: ts.Expression | undefined,
  context: ResolveContext
): Promise<string | null> {
  if (!arg) return null;
  if (ts.isObjectLiteralExpression(arg)) {
    const idProp = arg.properties.find(
      (prop): prop is ts.PropertyAssignment =>
        ts.isPropertyAssignment(prop) &&
        ts.isIdentifier(prop.name) &&
        prop.name.text === "id"
    );
    if (idProp) {
      return resolveStringFromExpression(idProp.initializer, context);
    }
    return null;
  }
  return resolveStringFromExpression(arg, context);
}

async function buildResolveContext(
  source: ts.SourceFile,
  filePath: string,
  resolveState: ResolveState
): Promise<ResolveContext> {
  const localConsts = collectLocalConstInitializers(source);
  const importedConsts = await collectImportedConstRefs(source, filePath);
  return {
    filePath,
    localConsts,
    importedConsts,
    localResolved: new Map(),
    importedResolved: new Map(),
    resolveState,
  };
}

function collectLocalConstInitializers(source: ts.SourceFile): Map<string, ts.Expression> {
  const locals = new Map<string, ts.Expression>();
  for (const statement of source.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    if (!(statement.declarationList.flags & ts.NodeFlags.Const)) continue;
    for (const declaration of statement.declarationList.declarations) {
      if (!ts.isIdentifier(declaration.name) || !declaration.initializer) continue;
      locals.set(declaration.name.text, declaration.initializer);
    }
  }
  return locals;
}

async function collectImportedConstRefs(source: ts.SourceFile, filePath: string): Promise<Map<string, ImportRef>> {
  const imports = new Map<string, ImportRef>();
  for (const statement of source.statements) {
    if (!ts.isImportDeclaration(statement) || !statement.importClause) continue;
    if (!ts.isStringLiteralLike(statement.moduleSpecifier)) continue;
    const moduleName = statement.moduleSpecifier.text;
    const namedBindings = statement.importClause.namedBindings;
    if (!namedBindings || !ts.isNamedImports(namedBindings)) continue;
    const resolvedPath = await resolveImportSource(filePath, moduleName);
    if (!resolvedPath) continue;

    for (const element of namedBindings.elements) {
      const importName = element.propertyName?.text ?? element.name.text;
      const localName = element.name.text;
      imports.set(localName, { importName, sourcePath: resolvedPath });
    }
  }
  return imports;
}

async function resolveImportSource(fromFilePath: string, moduleName: string): Promise<string | null> {
  if (!moduleName.startsWith(".")) return null;
  const basePath = path.resolve(path.dirname(fromFilePath), moduleName);
  const ext = path.extname(moduleName);
  const candidates = ext
    ? [basePath]
    : [
        `${basePath}.ts`,
        `${basePath}.tsx`,
        `${basePath}.js`,
        `${basePath}.jsx`,
        `${basePath}.d.ts`,
        path.join(basePath, "index.ts"),
        path.join(basePath, "index.tsx"),
        path.join(basePath, "index.js"),
        path.join(basePath, "index.jsx"),
        path.join(basePath, "index.d.ts"),
      ];

  for (const candidate of candidates) {
    if (await exists(candidate)) return candidate;
  }

  return null;
}

async function resolveStringFromExpression(expr: ts.Expression, context: ResolveContext): Promise<string | null> {
  if (ts.isStringLiteralLike(expr)) return expr.text;
  if (ts.isNoSubstitutionTemplateLiteral(expr)) return expr.text;
  if (ts.isTemplateExpression(expr)) {
    let value = expr.head.text;
    for (const span of expr.templateSpans) {
      const resolved = await resolveStringFromExpression(span.expression, context);
      if (resolved === null) return null;
      value += resolved + span.literal.text;
    }
    return value;
  }
  if (ts.isBinaryExpression(expr) && expr.operatorToken.kind === ts.SyntaxKind.PlusToken) {
    const left = await resolveStringFromExpression(expr.left, context);
    if (left === null) return null;
    const right = await resolveStringFromExpression(expr.right, context);
    if (right === null) return null;
    return left + right;
  }
  if (ts.isIdentifier(expr)) {
    return resolveStringFromIdentifier(expr.text, context);
  }
  if (ts.isAsExpression(expr) || ts.isTypeAssertionExpression(expr)) {
    return resolveStringFromExpression(expr.expression, context);
  }
  if (ts.isParenthesizedExpression(expr)) {
    return resolveStringFromExpression(expr.expression, context);
  }
  return null;
}

async function resolveStringFromIdentifier(name: string, context: ResolveContext): Promise<string | null> {
  if (context.localResolved.has(name)) {
    return context.localResolved.get(name) ?? null;
  }
  const localInit = context.localConsts.get(name);
  if (localInit) {
    const resolved = await resolveStringFromExpression(localInit, context);
    context.localResolved.set(name, resolved);
    return resolved;
  }
  const importRef = context.importedConsts.get(name);
  if (importRef) {
    if (context.importedResolved.has(name)) {
      return context.importedResolved.get(name) ?? null;
    }
    const resolved = await resolveImportedStringConstant(importRef, context.resolveState);
    context.importedResolved.set(name, resolved);
    return resolved;
  }
  return null;
}

async function resolveImportedStringConstant(ref: ImportRef, resolveState: ResolveState): Promise<string | null> {
  const cacheKey = `${ref.sourcePath}::${ref.importName}`;
  if (resolveState.cache.has(cacheKey)) {
    return resolveState.cache.get(cacheKey) ?? null;
  }
  if (resolveState.resolving.has(cacheKey)) return null;
  resolveState.resolving.add(cacheKey);
  const resolved = await resolveExportedStringConstant(ref.sourcePath, ref.importName, resolveState);
  resolveState.resolving.delete(cacheKey);
  resolveState.cache.set(cacheKey, resolved);
  return resolved;
}

async function resolveExportedStringConstant(
  filePath: string,
  exportName: string,
  resolveState: ResolveState
): Promise<string | null> {
  const source = await readSourceFile(filePath);
  const exportNameMap = collectExportedNameMap(source);
  const localName = exportNameMap.get(exportName);
  if (!localName) return null;
  const localConsts = collectLocalConstInitializers(source);
  const initializer = localConsts.get(localName);
  if (!initializer) return null;
  const importedConsts = await collectImportedConstRefs(source, filePath);
  const context: ResolveContext = {
    filePath,
    localConsts,
    importedConsts,
    localResolved: new Map(),
    importedResolved: new Map(),
    resolveState,
  };
  return resolveStringFromExpression(initializer, context);
}

function collectExportedNameMap(source: ts.SourceFile): Map<string, string> {
  const exported = new Map<string, string>();
  for (const statement of source.statements) {
    if (ts.isVariableStatement(statement) && statement.modifiers?.some((mod) => mod.kind === ts.SyntaxKind.ExportKeyword)) {
      for (const declaration of statement.declarationList.declarations) {
        if (!ts.isIdentifier(declaration.name)) continue;
        exported.set(declaration.name.text, declaration.name.text);
      }
    } else if (ts.isExportDeclaration(statement) && statement.exportClause && ts.isNamedExports(statement.exportClause)) {
      if (statement.moduleSpecifier) continue;
      for (const element of statement.exportClause.elements) {
        const exportName = element.name.text;
        const localName = element.propertyName?.text ?? element.name.text;
        exported.set(exportName, localName);
      }
    }
  }
  return exported;
}

async function readSourceFile(filePath: string): Promise<ts.SourceFile> {
  const content = await fs.readFile(filePath, "utf8");
  const kind = inferScriptKind(filePath);
  return ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest, true, kind);
}

function inferScriptKind(filePath: string): ts.ScriptKind {
  if (filePath.endsWith(".tsx")) return ts.ScriptKind.TSX;
  if (filePath.endsWith(".ts") || filePath.endsWith(".d.ts")) return ts.ScriptKind.TS;
  if (filePath.endsWith(".jsx")) return ts.ScriptKind.JSX;
  if (filePath.endsWith(".js")) return ts.ScriptKind.JS;
  return ts.ScriptKind.TS;
}

async function exists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}
