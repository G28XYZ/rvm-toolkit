import type { UserConfig } from "vite";
/**
 * Описание shared-зависимостей, которое используется в примерах микрофронтов.
 *
 * Форма похожа на терминологию module federation, но этот helper настраивает
 * только Vite-level `dedupe` и `optimizeDeps`. Runtime sharing по-прежнему
 * зависит от того, как развернуты host и remote.
 */
export type MicrofrontSharedConfig = Record<string, {
    singleton?: boolean;
    requiredVersion?: string | false;
}>;
/**
 * Набор shared-пакетов по умолчанию для remote-приложений на `rvm-toolkit`.
 */
export declare const microfrontShared: MicrofrontSharedConfig;
/**
 * Опции `defineMicrofrontConfig`.
 */
export type MicrofrontViteOptions = {
    /** Remote entry файл, который экспортирует `mount` и `microfrontMeta`. */
    entry: string;
    /** Каталог для production-сборки remote bundle. */
    outDir?: string;
    /** Имя production bundle файла. */
    fileName?: string;
    /** Пакеты, для которых включается dedupe во время dev/build. */
    shared?: MicrofrontSharedConfig;
};
/**
 * Создает Vite config для внешнего пакета микрофронта.
 *
 * Config включает генерацию MVVM DI типов, CORS headers для загрузки remote,
 * строгие dev/preview ports, dedupe shared-зависимостей и ESM library build,
 * который host может загрузить по URL.
 */
export declare function defineMicrofrontConfig({ entry, outDir, fileName, shared, }: MicrofrontViteOptions): UserConfig;
