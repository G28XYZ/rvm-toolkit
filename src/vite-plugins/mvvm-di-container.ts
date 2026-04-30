import path from "node:path";
import type { ContainerEntry } from "./mvvm-di-types";

type InterfaceBlock = {
  /** Текст между открывающей и закрывающей скобками interface. */
  body: string;
  /** Индекс закрывающей скобки interface в исходном content. */
  endIndex: number;
  /** Отступ, который используется для строк свойств внутри interface. */
  indent: string;
  /** Индекс начала тела interface сразу после открывающей скобки. */
  startIndex: number;
};

type ContainerContentEntry = ContainerEntry & {
  /** Имя container interface, куда нужно добавить entry. */
  interfaceName: string;
  /** Уже отформатированный TypeScript property key. */
  entryKey: string;
};

/**
 * Обновить текст container.d.ts с учетом одного service/store entry.
 *
 * Функция не работает с файловой системой: она только добавляет недостающий
 * import, создает interface при его отсутствии и синхронизирует строку entry
 * внутри уже существующего interface.
 *
 * @param content Текущее содержимое container.d.ts.
 * @param containerPath Абсолютный путь к container.d.ts, нужен для import path.
 * @param entry Описание класса и целевого interface в container.d.ts.
 * @returns Обновленный текст container.d.ts.
 */
export function updateContainerContent(
  content: string,
  containerPath: string,
  entry: ContainerContentEntry
): string {
  const importPath = toImportPath(path.dirname(containerPath), entry.filePath);
  const importStatement = `import type { ${entry.className} } from "${importPath}";`;

  let updated = content;
  if (!new RegExp(`^import type \\{ ${entry.className} \\} from \\\"${escapeRegExp(importPath)}\\\";`, "m").test(content)) {
    updated = insertImport(updated, importStatement);
  }

  const interfaceBlock = findInterfaceBlock(updated, entry.interfaceName);
  if (!interfaceBlock) {
    const block = [
      "",
      `export interface ${entry.interfaceName} {`,
      `  ${entry.entryKey}: typeof ${entry.className};`,
      "}",
      "",
    ].join("\n");
    return `${updated.trimEnd()}\n${block}`;
  }

  const entryLineRe =
    /^\s*("(?:\\.|[^"])*"|'(?:\\.|[^'])*'|[^:]+)\s*:\s*typeof\s+([A-Za-z0-9_$]+)\s*;.*$/;
  const lines = interfaceBlock.body.split("\n");
  const cleanedLines: string[] = [];
  let hasEntry = false;
  let changed = false;

  for (const line of lines) {
    const match = line.match(entryLineRe);
    if (!match) {
      cleanedLines.push(line);
      continue;
    }
    const keyText = match[1].trim();
    const typeName = match[2].trim();
    if (keyText === entry.entryKey) {
      if (typeName === entry.className) {
        hasEntry = true;
        cleanedLines.push(line);
      } else {
        const entryLine = `${interfaceBlock.indent}${entry.entryKey}: typeof ${entry.className};`;
        cleanedLines.push(entryLine);
        hasEntry = true;
        changed = true;
      }
      continue;
    }
    if (typeName === entry.className) {
      changed = true;
      continue;
    }
    cleanedLines.push(line);
  }

  if (!hasEntry) {
    const entryLine = `${interfaceBlock.indent}${entry.entryKey}: typeof ${entry.className};`;
    const insertIndex =
      cleanedLines.length > 0 && cleanedLines[cleanedLines.length - 1] === ""
        ? cleanedLines.length - 1
        : cleanedLines.length;
    cleanedLines.splice(insertIndex, 0, entryLine);
    changed = true;
  }

  if (changed) {
    const newBody = cleanedLines.join("\n");
    updated = updated.slice(0, interfaceBlock.startIndex) + newBody + updated.slice(interfaceBlock.endIndex);
  }

  return updated;
}

/**
 * Сформировать имя service container interface по пути container.d.ts.
 *
 * @param containerPath Абсолютный путь к container.d.ts.
 * @param srcRoot Абсолютный путь к src root проекта.
 * @returns Имя interface для entries, которые расширяют DiServices.
 */
export function inferInterfaceName(containerPath: string, srcRoot: string): string {
  const base = inferContainerBaseName(containerPath, srcRoot);
  return `${base}Services`;
}

/**
 * Сформировать имя store container interface по пути container.d.ts.
 *
 * @param containerPath Абсолютный путь к container.d.ts.
 * @param srcRoot Абсолютный путь к src root проекта.
 * @returns Имя interface для entries, которые расширяют DiStores.
 */
export function inferStoresInterfaceName(containerPath: string, srcRoot: string): string {
  const base = inferContainerBaseName(containerPath, srcRoot);
  return `${base}Stores`;
}

/**
 * Привести DI key к валидному TypeScript property key.
 *
 * @param value Исходный DI key из декоратора или имени класса.
 * @returns Identifier без кавычек или JSON string literal для сложного ключа.
 */
export function formatServiceKey(value: string): string {
  if (/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(value)) return value;
  return JSON.stringify(value);
}

/**
 * Построить относительный путь import без TypeScript extension.
 *
 * @param fromDir Директория файла, в котором будет стоять import.
 * @param filePath Абсолютный путь к импортируемому файлу.
 * @returns Относительный module specifier, начинающийся с ".".
 */
export function toImportPath(fromDir: string, filePath: string): string {
  const relative = path.relative(fromDir, filePath).replace(/\\/g, "/");
  const withoutExt = relative.replace(/\.(tsx|ts|d\.ts)$/, "");
  return withoutExt.startsWith(".") ? withoutExt : `./${withoutExt}`;
}

/**
 * Экранировать строку для безопасной вставки в RegExp.
 *
 * @param value Строка, которая должна сравниваться как literal.
 * @returns RegExp-safe строка.
 */
export function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Получить базовое PascalCase имя container interface из расположения файла.
 *
 * @param containerPath Абсолютный путь к container.d.ts.
 * @param srcRoot Абсолютный путь к src root проекта.
 * @returns Базовое имя без суффикса Services/Stores.
 */
function inferContainerBaseName(containerPath: string, srcRoot: string): string {
  const relative = path.relative(srcRoot, containerPath).replace(/\\/g, "/");
  const segments = relative.split("/");

  let nameSegment = segments[0];
  if (segments[0] === "modules" && segments[1]) {
    nameSegment = segments[1];
  }

  return toPascalCase(nameSegment.replace(/\.d\.ts$/, ""));
}

/**
 * Преобразовать строку пути или имени модуля в PascalCase.
 *
 * @param value Исходная строка.
 * @returns PascalCase representation.
 */
function toPascalCase(value: string): string {
  return value
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
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
 * Найти тело interface и позиции, нужные для точечной замены.
 *
 * @param content Текст container.d.ts.
 * @param interfaceName Имя искомого exported interface.
 * @returns Описание блока или null, если interface не найден.
 */
function findInterfaceBlock(content: string, interfaceName: string): InterfaceBlock | null {
  const startMatch = content.match(new RegExp(`export interface ${escapeRegExp(interfaceName)}\\s*\\{`));
  if (!startMatch || startMatch.index === undefined) return null;
  const startIndex = startMatch.index + startMatch[0].length;
  const endIndex = content.indexOf("}", startIndex);
  if (endIndex === -1) return null;

  const body = content.slice(startIndex, endIndex);
  const indentMatch = body.match(/\n(\s*)\w/);
  const indent = indentMatch ? indentMatch[1] : "  ";

  return { body, endIndex, indent, startIndex };
}
