export type DiInterfaceName = "DiServices" | "DiStores";
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
export declare function createInitialDiContent(entry: DiContentEntry): string;
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
export declare function updateDiContent(content: string, entry: DiContentEntry): string;
export {};
