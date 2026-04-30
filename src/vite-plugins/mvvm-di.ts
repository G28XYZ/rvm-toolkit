import fs from "node:fs/promises";
import path from "node:path";
import {
  escapeRegExp,
  formatServiceKey,
  inferInterfaceName,
  inferStoresInterfaceName,
  toImportPath,
  updateContainerContent,
} from "./mvvm-di-container";
import { extractEntries } from "./mvvm-di-extract";
import { type ContainerEntry, MVVM_MODULE } from "./mvvm-di-types";

/** Цель для генерации container.d.ts. */
type ContainerTarget = {
  /** Абсолютный путь к найденному или будущему container.d.ts. */
  containerPath: string;
  /** Был ли container.d.ts уже создан до текущего обновления. */
  existed: boolean;
};

type VitePluginLike = {
  /** Имя plugin, которое Vite показывает в diagnostics. */
  name: string;
  /** Порядок исполнения plugin относительно остальных Vite plugins. */
  enforce?: "pre" | "post";
  /** Hook Vite, из которого plugin получает root проекта. */
  configResolved?(resolved: { root?: string }): void;
  /** Hook Vite для первичной генерации DI declarations. */
  buildStart?(): void | Promise<void>;
  /** Hook Vite для incremental обновления при изменении source file. */
  handleHotUpdate?(ctx: { file: string }): void | Promise<void>;
};

/**
 * Vite-плагин для автоматического обновления container.d.ts и di.d.ts
 * на основе сервисов, отмеченных декоратором Service.
 *
 * Плагин сканирует исходники и добавляет типы сервисов в ближайший container.d.ts,
 * а также подключает контейнеры к di.d.ts проекта.
 *
 * @example
 * // vite.config.ts
 * import { mvvmServiceDiPlugin } from "rvm-toolkit/vite-plugins";
 *
 * export default defineConfig({
 *   plugins: [mvvmServiceDiPlugin()],
 * });
 *
 * @returns Vite-compatible plugin object.
 */
export function mvvmServiceDiPlugin(): VitePluginLike {
  let config: { root?: string };
  let srcRoot = "";
  let diPath = "";

  /**
   * Полностью просканировать src root и обновить container declarations.
   *
   * @returns Promise, который завершается после обработки всех .ts/.tsx файлов.
   */
  async function scanAndUpdateAll() {
    const files = await collectSourceFiles(srcRoot);
    for (const file of files) {
      await processFile(file);
    }
  }

  /**
   * Создать di.d.ts, если его еще нет.
   *
   * При наличии container.d.ts plugin собирает imports и extends для уже
   * существующих container interfaces. Если контейнеров нет, создает пустые
   * DiServices/DiStores declarations.
   *
   * @returns Promise, который завершается после проверки/создания di.d.ts.
   */
  async function ensureDiFile() {
    if (!diPath) return;
    const diExists = await exists(diPath);
    if (diExists) return;

    const containers = await collectContainerFiles(srcRoot);
    if (containers.length === 0) {
      const content = [
        `declare module "${MVVM_MODULE}" {`,
        "  interface DiServices {}",
        "}",
        "",
      ].join("\n");
      await fs.writeFile(diPath, content, "utf8");
      return;
    }

    const imports: string[] = [];
    const serviceInterfaces: string[] = [];
    const storeInterfaces: string[] = [];
    for (const containerPath of containers) {
      const content = await fs.readFile(containerPath, "utf8");
      const servicesName = inferInterfaceName(containerPath, srcRoot);
      const storesName = inferStoresInterfaceName(containerPath, srcRoot);
      const importPath = toImportPath(path.dirname(diPath), containerPath);
      if (content.includes(`export interface ${servicesName}`)) {
        imports.push(`import type { ${servicesName} } from "${importPath}";`);
        serviceInterfaces.push(servicesName);
      }
      if (content.includes(`export interface ${storesName}`)) {
        imports.push(`import type { ${storesName} } from "${importPath}";`);
        storeInterfaces.push(storesName);
      }
    }

    const content = [
      ...imports,
      "",
      `declare module "${MVVM_MODULE}" {`,
      serviceInterfaces.length
        ? `  interface DiServices extends ${serviceInterfaces.join(", ")} {}`
        : "  interface DiServices {}",
      storeInterfaces.length
        ? `  interface DiStores extends ${storeInterfaces.join(", ")} {}`
        : "  interface DiStores {}",
      "}",
      "",
    ].join("\n");
    await fs.writeFile(diPath, content, "utf8");
  }

  /**
   * Обработать конкретный source file и обновить связанные контейнеры.
   *
   * @param filePath Абсолютный путь к измененному или найденному source file.
   * @returns Promise, который завершается после записи нужных declarations.
   */
  async function processFile(filePath: string) {
    const entries = await extractEntries(filePath);
    for (const entry of entries) {
      await ensureEntryInContainer(entry);
    }
  }

  /**
   * Добавить одну найденную DI entry в container.d.ts и подключить ее к di.d.ts.
   *
   * @param entry Service/store entry, найденная AST scan module.
   * @returns Promise, который завершается после синхронизации container и di.
   */
  async function ensureEntryInContainer(entry: ContainerEntry) {
    const target = await findContainerTarget(entry.filePath);
    const containerExisted = target.existed;
    const entryKey = formatServiceKey(entry.entryKey);
    const interfaceName =
      entry.kind === "store"
        ? inferStoresInterfaceName(target.containerPath, srcRoot)
        : inferInterfaceName(target.containerPath, srcRoot);
    const diInterfaceName = entry.kind === "store" ? "DiStores" : "DiServices";

    if (!containerExisted) {
      const importPath = toImportPath(path.dirname(target.containerPath), entry.filePath);
      const content = [
        `import type { ${entry.className} } from "${importPath}";`,
        "",
        `export interface ${interfaceName} {`,
        `  ${entryKey}: typeof ${entry.className};`,
        "}",
        "",
      ].join("\n");
      await fs.writeFile(target.containerPath, content, "utf8");
      await ensureDiIncludesContainer(target.containerPath, interfaceName, diInterfaceName);
      return;
    }

    const existing = await fs.readFile(target.containerPath, "utf8");
    const updated = updateContainerContent(existing, target.containerPath, {
      ...entry,
      entryKey,
      interfaceName,
    });
    if (updated !== existing) {
      await fs.writeFile(target.containerPath, updated, "utf8");
    }
    await ensureDiIncludesContainer(target.containerPath, interfaceName, diInterfaceName);
  }

  /**
   * Найти ближайший container.d.ts или вычислить путь нового контейнера.
   *
   * Поиск идет вверх от файла до src root. Если контейнер не найден, новый
   * container.d.ts размещается на уровне первого сегмента внутри src, а для
   * src/modules/<name> - внутри конкретного module directory.
   *
   * @param filePath Абсолютный путь к source file с DI entry.
   * @returns Путь container.d.ts и признак существования файла.
   */
  async function findContainerTarget(filePath: string): Promise<ContainerTarget> {
    const absolute = path.resolve(filePath);
    let currentDir = path.dirname(absolute);

    while (currentDir.startsWith(srcRoot)) {
      const candidate = path.join(currentDir, "container.d.ts");
      if (await exists(candidate)) {
        return { containerPath: candidate, existed: true };
      }
      if (currentDir === srcRoot) break;
      currentDir = path.dirname(currentDir);
    }

    const relativeToSrc = path.relative(srcRoot, absolute);
    const segments = relativeToSrc.split(path.sep);
    let containerDir = srcRoot;

    if (segments[0] === "modules" && segments.length > 1) {
      containerDir = path.join(srcRoot, "modules", segments[1]);
    } else if (segments.length > 0 && segments[0]) {
      containerDir = path.join(srcRoot, segments[0]);
    }

    return { containerPath: path.join(containerDir, "container.d.ts"), existed: false };
  }

  /**
   * Убедиться, что di.d.ts содержит import контейнера и extends нужного root interface.
   *
   * @param containerPath Абсолютный путь к container.d.ts.
   * @param interfaceName Имя container interface, которое нужно подключить.
   * @param diInterfaceName Root interface для declaration merging.
   * @returns Promise, который завершается после синхронизации di.d.ts.
   */
  async function ensureDiIncludesContainer(
    containerPath: string,
    interfaceName: string,
    diInterfaceName: "DiServices" | "DiStores"
  ) {
    if (!diPath) return;

    const diExists = await exists(diPath);
    if (!diExists) {
      const importPath = toImportPath(path.dirname(diPath), containerPath);
      const importStatement = `import type { ${interfaceName} } from "${importPath}";`;
      const initialContent = [
        importStatement,
        "",
        `declare module "${MVVM_MODULE}" {`,
        `  interface ${diInterfaceName} extends ${interfaceName} {}`,
        "}",
        "",
      ].join("\n");
      await fs.writeFile(diPath, initialContent, "utf8");
      return;
    }

    const existing = await fs.readFile(diPath, "utf8");
    let updated = existing;

    const importPath = toImportPath(path.dirname(diPath), containerPath);
    const importStatement = `import type { ${interfaceName} } from "${importPath}";`;

    if (!new RegExp(`^import type \\{ ${interfaceName} \\} from \\\"${escapeRegExp(importPath)}\\\";`, "m").test(updated)) {
      updated = insertDiImport(updated, importStatement);
    }

    updated = normalizeDiDeclaration(updated, "DiServices");
    updated = normalizeDiDeclaration(updated, "DiStores");
    updated = ensureDiInterfaceDeclaration(updated, diInterfaceName);
    updated = ensureDiExtends(updated, diInterfaceName, interfaceName);

    if (updated !== existing) {
      await fs.writeFile(diPath, updated, "utf8");
    }
  }

  /**
   * Вставить import в di.d.ts после существующего блока import statements.
   *
   * @param content Текущий текст di.d.ts.
   * @param importStatement Полная строка import.
   * @returns Текст di.d.ts с добавленным import.
   */
  function insertDiImport(content: string, importStatement: string): string {
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
   * Исправить устаревший синтаксис interface DiServices, X {} на extends.
   *
   * @param content Текущий текст di.d.ts.
   * @param name Имя root DI interface.
   * @returns Текст di.d.ts с нормализованным interface declaration.
   */
  function normalizeDiDeclaration(content: string, name: "DiServices" | "DiStores") {
    const re = new RegExp(`interface ${name},\\s*([^\\{]+)\\{`, "g");
    return content.replace(re, `interface ${name} extends $1{`);
  }

  /**
   * Убедиться, что root DI interface объявлен внутри declare module.
   *
   * @param content Текущий текст di.d.ts.
   * @param name Имя root DI interface.
   * @returns Текст di.d.ts с добавленным interface, если его не было.
   */
  function ensureDiInterfaceDeclaration(content: string, name: "DiServices" | "DiStores") {
    if (new RegExp(`interface\\s+${name}\\b`).test(content)) {
      return content;
    }
    const moduleMatch = content.match(new RegExp(`declare module ["']${escapeRegExp(MVVM_MODULE)}["']\\s*\\{`));
    if (!moduleMatch || moduleMatch.index === undefined) return content;
    const moduleStart = moduleMatch.index + moduleMatch[0].length;
    const moduleEnd = findMatchingBrace(content, moduleStart);
    if (moduleEnd === -1) return content;
    const insertion = `\n  interface ${name} {}`;
    return content.slice(0, moduleEnd) + insertion + content.slice(moduleEnd);
  }

  /**
   * Найти позицию закрывающей скобки для блока, начиная после "{".
   *
   * @param content Текст, в котором выполняется поиск.
   * @param startIndex Индекс сразу после открывающей скобки блока.
   * @returns Индекс matching "}" или -1, если блок не закрыт.
   */
  function findMatchingBrace(content: string, startIndex: number) {
    let depth = 1;
    for (let i = startIndex; i < content.length; i += 1) {
      const char = content[i];
      if (char === "{") depth += 1;
      if (char === "}") depth -= 1;
      if (depth === 0) return i;
    }
    return -1;
  }

  /**
   * Добавить container interface в extends list root DI interface.
   *
   * @param content Текущий текст di.d.ts.
   * @param diInterfaceName Root interface, который нужно расширить.
   * @param interfaceName Container interface, который должен быть в extends.
   * @returns Текст di.d.ts с обновленным extends list.
   */
  function ensureDiExtends(content: string, diInterfaceName: "DiServices" | "DiStores", interfaceName: string) {
    const match = content.match(new RegExp(`interface ${diInterfaceName}(\\s+extends\\s+([^\\{]+))?\\s*\\{`));
    if (!match || match.index === undefined) return content;

    const extendsList = match[2]?.trim();
    if (extendsList && new RegExp(`\\b${escapeRegExp(interfaceName)}\\b`).test(extendsList)) {
      return content;
    }

    const insertion = extendsList ? ` extends ${extendsList}, ${interfaceName} {` : ` extends ${interfaceName} {`;
    const start = match.index;
    const end = start + match[0].length;
    return content.slice(0, start) + `interface ${diInterfaceName}${insertion}` + content.slice(end);
  }

  /**
   * Рекурсивно собрать все runtime .ts/.tsx files в директории.
   *
   * @param dir Директория, с которой начинается обход.
   * @returns Абсолютные пути к .ts/.tsx файлам без .d.ts.
   */
  async function collectSourceFiles(dir: string): Promise<string[]> {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files: string[] = [];

    for (const entry of entries) {
      if (entry.name.startsWith(".")) continue;
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        files.push(...(await collectSourceFiles(fullPath)));
      } else if (entry.isFile()) {
        if (!/\.tsx?$/.test(entry.name)) continue;
        if (entry.name.endsWith(".d.ts")) continue;
        files.push(fullPath);
      }
    }

    return files;
  }

  /**
   * Рекурсивно собрать все container.d.ts в src root.
   *
   * @param dir Директория, с которой начинается обход.
   * @returns Абсолютные пути к найденным container.d.ts.
   */
  async function collectContainerFiles(dir: string): Promise<string[]> {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files: string[] = [];

    for (const entry of entries) {
      if (entry.name.startsWith(".")) continue;
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        files.push(...(await collectContainerFiles(fullPath)));
      } else if (entry.isFile()) {
        if (entry.name === "container.d.ts") {
          files.push(fullPath);
        }
      }
    }

    return files;
  }

  /**
   * Проверить существование файла без выброса fs error наружу.
   *
   * @param filePath Абсолютный путь к файлу.
   * @returns true, если файл доступен для текущего процесса.
   */
  async function exists(filePath: string): Promise<boolean> {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }

  return {
    name: "mvvm-service-di",
    enforce: "pre",
    configResolved(resolved) {
      config = resolved;
      srcRoot = path.resolve(config.root ?? process.cwd(), "src");
      diPath = path.resolve(config.root ?? process.cwd(), "di.d.ts");
    },
    async buildStart() {
      await ensureDiFile();
      await scanAndUpdateAll();
    },
    async handleHotUpdate(ctx) {
      if (!ctx.file.startsWith(srcRoot)) return;
      if (!/\.tsx?$/.test(ctx.file) || ctx.file.endsWith(".d.ts")) return;
      await processFile(ctx.file);
    },
  };
}
