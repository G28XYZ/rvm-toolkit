import path from "node:path";
import { escapeRegExp, toImportPath } from "./mvvm-di-container";
import { MVVM_MODULE } from "./mvvm-di-types";

export type DiInterfaceName = "DiServices" | "DiStores";

type DeclareModuleBlock = {
  /** Текст внутри declare module body. */
  body: string;
  /** Индекс закрывающей скобки declare module. */
  endIndex: number;
  /** Отступ для interface declarations внутри declare module. */
  indent: string;
  /** Индекс начала body сразу после открывающей скобки. */
  startIndex: number;
};

type DiContentEntry = {
  /** Абсолютный путь к container.d.ts, который подключается к root DI interface. */
  containerPath: string;
  /** Абсолютный путь к di.d.ts, в котором будет стоять import. */
  diPath: string;
  /** Root DI interface, который расширяется контейнером. */
  diInterfaceName: DiInterfaceName;
  /** Имя container interface, добавляемое в extends list. */
  interfaceName: string;
};

/**
 * Создать начальное содержимое di.d.ts для одного container interface.
 *
 * @param entry Описание container interface и целевого root DI interface.
 * @returns Текст нового di.d.ts.
 */
export function createInitialDiContent(entry: DiContentEntry): string {
  const importPath = toImportPath(path.dirname(entry.diPath), entry.containerPath);
  const importStatement = `import type { ${entry.interfaceName} } from "${importPath}";`;
  return [
    importStatement,
    "",
    `declare module "${MVVM_MODULE}" {`,
    `  interface ${entry.diInterfaceName} extends ${entry.interfaceName} {}`,
    "}",
    "",
  ].join("\n");
}

/**
 * Обновить существующий di.d.ts для одного container interface.
 *
 * Функция не работает с файловой системой. Она добавляет import, находит
 * только declare module "rvm-toolkit" и изменяет DiServices/DiStores строго
 * внутри этого module declaration. Одноименные interfaces снаружи файла не
 * участвуют в поиске и не меняются.
 *
 * @param content Текущее содержимое di.d.ts.
 * @param entry Описание container interface и целевого root DI interface.
 * @returns Обновленный текст di.d.ts.
 */
export function updateDiContent(content: string, entry: DiContentEntry): string {
  const importPath = toImportPath(path.dirname(entry.diPath), entry.containerPath);
  const importStatement = `import type { ${entry.interfaceName} } from "${importPath}";`;

  let updated = content;
  if (!new RegExp(`^import type \\{ ${entry.interfaceName} \\} from \\\"${escapeRegExp(importPath)}\\\";`, "m").test(updated)) {
    updated = insertImport(updated, importStatement);
  }

  const moduleBlock = findDeclareModuleBlock(updated);
  if (!moduleBlock) {
    return [
      updated.trimEnd(),
      "",
      `declare module "${MVVM_MODULE}" {`,
      `  interface ${entry.diInterfaceName} extends ${entry.interfaceName} {}`,
      "}",
      "",
    ].join("\n");
  }

  let body = normalizeDiDeclaration(moduleBlock.body, "DiServices");
  body = normalizeDiDeclaration(body, "DiStores");
  body = ensureDiInterfaceDeclaration(body, entry.diInterfaceName, moduleBlock.indent);
  body = ensureDiExtends(body, entry.diInterfaceName, entry.interfaceName);

  if (body === moduleBlock.body) return updated;
  return updated.slice(0, moduleBlock.startIndex) + body + updated.slice(moduleBlock.endIndex);
}

/**
 * Вставить import после существующего блока import statements.
 *
 * @param content Исходный текст файла.
 * @param importStatement Полная строка import.
 * @returns Текст файла с добавленным import.
 */
function insertImport(content: string, importStatement: string): string {
  const lines = content.split("\n");
  let insertIndex = 0;

  for (let i = 0; i < lines.length; i += 1) {
    if (lines[i].startsWith("import ")) {
      insertIndex = i + 1;
    } else if (lines[i].trim() !== "") {
      break;
    }
  }

  lines.splice(insertIndex, 0, importStatement);
  return lines.join("\n");
}

/**
 * Найти body declare module "rvm-toolkit".
 *
 * @param content Текст di.d.ts.
 * @returns Позиции module body или null, если declaration отсутствует.
 */
function findDeclareModuleBlock(content: string): DeclareModuleBlock | null {
  const moduleMatch = content.match(new RegExp(`declare module ["']${escapeRegExp(MVVM_MODULE)}["']\\s*\\{`));
  if (!moduleMatch || moduleMatch.index === undefined) return null;
  const startIndex = moduleMatch.index + moduleMatch[0].length;
  const endIndex = findMatchingBrace(content, startIndex);
  if (endIndex === -1) return null;

  const body = content.slice(startIndex, endIndex);
  const indentMatch = body.match(/\n(\s*)interface/);
  const indent = indentMatch ? indentMatch[1] : "  ";
  return { body, endIndex, indent, startIndex };
}

/**
 * Исправить устаревший синтаксис interface DiServices, X {} на extends.
 *
 * @param body Тело declare module "rvm-toolkit".
 * @param name Имя root DI interface.
 * @returns Тело module с нормализованным declaration.
 */
function normalizeDiDeclaration(body: string, name: DiInterfaceName): string {
  const re = new RegExp(`interface ${name},\\s*([^\\{]+)\\{`, "g");
  return body.replace(re, `interface ${name} extends $1{`);
}

/**
 * Убедиться, что root DI interface объявлен внутри target module body.
 *
 * @param body Тело declare module "rvm-toolkit".
 * @param name Имя root DI interface.
 * @param indent Отступ для новой строки interface.
 * @returns Тело module с добавленным interface, если его не было.
 */
function ensureDiInterfaceDeclaration(body: string, name: DiInterfaceName, indent: string): string {
  if (new RegExp(`interface\\s+${name}\\b`).test(body)) return body;
  const prefix = body.endsWith("\n") ? "" : "\n";
  return `${body}${prefix}${indent}interface ${name} {}`;
}

/**
 * Добавить container interface в extends list root DI interface.
 *
 * @param body Тело declare module "rvm-toolkit".
 * @param diInterfaceName Root interface, который нужно расширить.
 * @param interfaceName Container interface, который должен быть в extends.
 * @returns Тело module с обновленным extends list.
 */
function ensureDiExtends(body: string, diInterfaceName: DiInterfaceName, interfaceName: string): string {
  const match = body.match(new RegExp(`interface ${diInterfaceName}(\\s+extends\\s+([^\\{]+))?\\s*\\{`));
  if (!match || match.index === undefined) return body;

  const extendsList = match[2]?.trim();
  if (extendsList && new RegExp(`\\b${escapeRegExp(interfaceName)}\\b`).test(extendsList)) {
    return body;
  }

  const insertion = extendsList ? ` extends ${extendsList}, ${interfaceName} {` : ` extends ${interfaceName} {`;
  const start = match.index;
  const end = start + match[0].length;
  return body.slice(0, start) + `interface ${diInterfaceName}${insertion}` + body.slice(end);
}

/**
 * Найти позицию закрывающей скобки для блока, начиная после "{".
 *
 * @param content Текст, в котором выполняется поиск.
 * @param startIndex Индекс сразу после открывающей скобки блока.
 * @returns Индекс matching "}" или -1, если блок не закрыт.
 */
function findMatchingBrace(content: string, startIndex: number): number {
  let depth = 1;
  for (let i = startIndex; i < content.length; i += 1) {
    const char = content[i];
    if (char === "{") depth += 1;
    if (char === "}") depth -= 1;
    if (depth === 0) return i;
  }
  return -1;
}
