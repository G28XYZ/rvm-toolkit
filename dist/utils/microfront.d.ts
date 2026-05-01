import { type ComponentType, type LazyExoticComponent } from "react";
/**
 * Форма модуля микрофронта, из которого можно извлечь React-компонент.
 *
 * По умолчанию утилиты ищут компонент в `default`, `Microfront`, `App` и `Component`.
 *
 * @example
 * ```ts
 * const module: MicrofrontComponentModule = {
 *   default: ProductsMicrofront,
 *   microfrontMeta: { title: "Products" },
 * };
 * ```
 */
export type MicrofrontComponentModule<TProps = Record<string, never>> = {
    /** Компонент, экспортированный как default. */
    default?: ComponentType<TProps>;
    /** Именованный экспорт компонента микрофронта. */
    Microfront?: ComponentType<TProps>;
    /** Альтернативный именованный экспорт приложения микрофронта. */
    App?: ComponentType<TProps>;
    /** Альтернативный именованный экспорт компонента. */
    Component?: ComponentType<TProps>;
    /** Дополнительные экспорты модуля, например metadata или вспомогательные функции. */
    [key: string]: unknown;
};
/**
 * Имя экспорта компонента или список имен, которые нужно проверить по порядку.
 *
 * @example
 * ```ts
 * const exportName = ["Widget", "default"];
 * ```
 */
export type MicrofrontComponentExportName = string | readonly string[];
/**
 * Настройки безопасного получения компонента микрофронта.
 *
 * @example
 * ```ts
 * const options: MicrofrontComponentOptions = {
 *   importer: () => import("mf5ka/microfront"),
 *   fallback: EmptyMicrofront,
 *   exportName: ["Microfront", "default"],
 *   onError: console.error,
 * };
 * ```
 */
export type MicrofrontComponentOptions<TProps = Record<string, never>, TModule extends Record<string, unknown> = MicrofrontComponentModule<TProps>> = {
    /** Асинхронная загрузка remote/package-модуля микрофронта. */
    importer: () => Promise<TModule | null | undefined>;
    /** Компонент, который будет возвращен, если модуль не загрузился или не содержит компонент. */
    fallback: ComponentType<TProps>;
    /** Имя или имена экспортов для поиска компонента. Если не задано, используются стандартные имена. */
    exportName?: MicrofrontComponentExportName;
    /** Обработчик ошибки загрузки модуля. После вызова обработчика утилита вернет `fallback`. */
    onError?: (error: unknown) => void;
};
/**
 * Находит React-компонент в уже загруженном модуле микрофронта.
 *
 * @param module Модуль, полученный из dynamic import или module federation runtime.
 * @param exportName Имя или список имен экспортов для поиска компонента.
 * @returns Найденный компонент или `undefined`, если подходящего экспорта нет.
 *
 * @example
 * ```ts
 * const mod = await import("mf5ka/microfront");
 * const Component = resolveMicrofrontComponent(mod, ["Microfront", "default"]);
 *
 * if (Component) {
 *   return <Component />;
 * }
 * ```
 */
export declare const resolveMicrofrontComponent: <TProps = Record<string, never>>(module: Record<string, unknown> | null | undefined, exportName?: MicrofrontComponentExportName) => ComponentType<TProps> | undefined;
/**
 * Безопасно загружает компонент микрофронта.
 *
 * Если importer выбросил ошибку, вернул пустой модуль или модуль без подходящего компонента,
 * функция возвращает `fallback`, чтобы страница могла продолжить рендер без падения.
 *
 * @param options Настройки загрузки, fallback-компонента и выбора экспорта.
 * @returns Promise с компонентом из микрофронта или fallback-компонентом.
 *
 * @example
 * ```ts
 * const MissingMicrofront = () => <div>Microfront is unavailable</div>;
 *
 * const Component = await getMicrofrontComponent({
 *   importer: () => import("mf5ka/microfront"),
 *   fallback: MissingMicrofront,
 *   onError: (error) => console.warn("Remote failed", error),
 * });
 *
 * return <Component />;
 * ```
 */
export declare const getMicrofrontComponent: <TProps = Record<string, never>, TModule extends Record<string, unknown> = MicrofrontComponentModule<TProps>>(options: MicrofrontComponentOptions<TProps, TModule>) => Promise<ComponentType<TProps>>;
/**
 * Создает `React.lazy`-компонент для микрофронта с безопасным fallback на уровне загрузки модуля.
 *
 * Компонент все равно нужно рендерить внутри `Suspense`, как обычный `React.lazy`.
 *
 * @param options Настройки загрузки, fallback-компонента и выбора экспорта.
 * @returns Lazy-компонент, который отрендерит remote-компонент или `fallback`.
 *
 * @example
 * ```tsx
 * const MissingMicrofront = () => <div>Microfront is unavailable</div>;
 *
 * const ProductsMicrofront = lazyMicrofrontComponent({
 *   importer: () => import("mf5ka/microfront"),
 *   fallback: MissingMicrofront,
 * });
 *
 * export const Page = () => (
 *   <Suspense fallback={<div>Loading...</div>}>
 *     <ProductsMicrofront />
 *   </Suspense>
 * );
 * ```
 */
export declare const lazyMicrofrontComponent: <TProps = Record<string, never>, TModule extends Record<string, unknown> = MicrofrontComponentModule<TProps>>(options: MicrofrontComponentOptions<TProps, TModule>) => LazyExoticComponent<ComponentType<TProps>>;
