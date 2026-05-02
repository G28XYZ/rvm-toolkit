import { createRoot, type Root } from "react-dom/client";
import type { ComponentType } from "react";

import type {
  BaseMicrofrontendContext,
  MicrofrontendComponent,
  MicrofrontendDefinition,
  MicrofrontendMeta,
} from "./types";

/**
 * Имя события по умолчанию для dev-запроса на перемонтирование микрофронта.
 *
 * Host-приложение может передать в `dispatchMicrofrontUpdate` свое имя события,
 * например namespaced-событие `external-mf-test:microfront-update`.
 */
export const MICROFRONT_UPDATE_EVENT = "microfront:update";

/**
 * Опции создания стандартного React-контракта микрофронта.
 */
export type CreateReactMicrofrontendOptions<TContext = BaseMicrofrontendContext> = {
  /** React-компонент, который рендерится в DOM-контейнер host-приложения. */
  component: MicrofrontendComponent<TContext>;
  /** Метаданные remote entry, которые также попадают в dev-update события. */
  meta: MicrofrontendMeta;
};

/**
 * Монтирует React-компонент в существующий DOM-элемент и возвращает cleanup.
 *
 * Подходит для standalone-preview или кастомной реализации mount-контракта.
 * В большинстве remote entry лучше использовать `createReactMicrofrontend`,
 * который оборачивает этот helper и отдает стандартный `mount(element, props)`.
 */
export function mountReactComponent<TProps>(
  element: HTMLElement,
  Component: ComponentType<TProps>,
  props: TProps
) {
  const root: Root = createRoot(element);
  root.render(<Component {...props} />);

  return () => {
    root.unmount();
  };
}

/**
 * Уведомляет host, что remote-микрофронт нужно импортировать заново.
 *
 * Helper только отправляет browser event. Сам `import.meta.hot.accept` должен
 * оставаться напрямую в remote entry файле: Vite обязан увидеть этот вызов при
 * статическом анализе, иначе он может перейти к полной перезагрузке страницы.
 *
 * @example
 * ```ts
 * if (import.meta.hot) {
 *   import.meta.hot.accept(["./src/app"], () => {
 *     dispatchMicrofrontUpdate(microfrontMeta, "external-mf-test:microfront-update");
 *   });
 * }
 * ```
 */
export function dispatchMicrofrontUpdate(
  meta: MicrofrontendMeta,
  updateEvent = MICROFRONT_UPDATE_EVENT
) {
  window.dispatchEvent(new CustomEvent(updateEvent, {
    detail: {
      id: meta.id,
      containerId: meta.containerId,
      remoteUrl: meta.remoteUrl,
    },
  }));
}

/**
 * Создает стандартный React-контракт remote entry.
 *
 * Возвращаемые `microfrontMeta` и `mount` нужно реэкспортировать из remote entry.
 * После этого host-приложение может импортировать модуль по URL и смонтировать
 * его без знания внутренней реализации remote-приложения.
 *
 * @example
 * ```ts
 * const microfront = createReactMicrofrontend({
 *   component: App,
 *   meta: {
 *     id: "topology-info",
 *     title: "Topology Info",
 *     version: "0.1.0",
 *     containerId: "external.workspace",
 *     remoteUrl: "http://127.0.0.1:5175/microfront.tsx",
 *   },
 * });
 *
 * export const microfrontMeta = microfront.microfrontMeta;
 * export const mount = microfront.mount;
 * ```
 */
export function createReactMicrofrontend<TContext = BaseMicrofrontendContext>({
  component: Component,
  meta,
}: CreateReactMicrofrontendOptions<TContext>): MicrofrontendDefinition<TContext> {
  return {
    microfrontMeta: meta,
    mount(element, props) {
      return mountReactComponent(element, Component, { context: props.context });
    },
  };
}
