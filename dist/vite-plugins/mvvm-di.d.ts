type VitePluginLike = {
    /** Имя plugin, которое Vite показывает в diagnostics. */
    name: string;
    /** Порядок исполнения plugin относительно остальных Vite plugins. */
    enforce?: "pre" | "post";
    /** Hook Vite, из которого plugin получает root проекта. */
    configResolved?(resolved: {
        root?: string;
    }): void;
    /** Hook Vite для первичной генерации DI declarations. */
    buildStart?(): void | Promise<void>;
    /** Hook Vite для incremental обновления при изменении source file. */
    handleHotUpdate?(ctx: {
        file: string;
    }): void | Promise<void>;
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
export declare function mvvmServiceDiPlugin(): VitePluginLike;
export {};
