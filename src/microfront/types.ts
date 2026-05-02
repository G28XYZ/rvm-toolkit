import type { ComponentType } from "react";

/**
 * Минимальная информация о host-приложении, которую микрофронт может показать
 * или использовать для диагностики совместимости.
 */
export type MicrofrontendHostInfo = {
  name: string;
  version: string;
};

/**
 * Базовый context микрофронта.
 *
 * `rvm-toolkit` намеренно не описывает доменные API вроде libvirt/system.
 * Host-приложение может расширять этот тип собственными полями через generic
 * параметр `TContext` у `MicrofrontendProps`, `MicrofrontendMount` и
 * `createReactMicrofrontend`.
 */
export type BaseMicrofrontendContext = {
  containerId: string;
  host: MicrofrontendHostInfo;
  [key: string]: unknown;
};

/**
 * Backward-compatible alias для старого имени host context.
 * Для новых интеграций предпочтительнее `BaseMicrofrontendContext`.
 */
export type ExtensionHostContext = BaseMicrofrontendContext;

/**
 * Props, которые host передает React-компоненту микрофронта.
 */
export type MicrofrontendProps<TContext = BaseMicrofrontendContext> = {
  context: TContext;
};

/**
 * Результат ручного mount-контракта.
 *
 * Возвращается из `mount(element, props)` и вызывается host-ом при размонтировании
 * или повторной загрузке remote-модуля.
 */
export type MicrofrontendMountResult =
  | void
  | (() => void)
  | {
      unmount?: () => void;
      dispose?: () => void;
    };

/**
 * Framework-neutral mount-контракт микрофронта.
 *
 * Host создает DOM-контейнер, вызывает `mount`, а затем вызывает cleanup из
 * `MicrofrontendMountResult`.
 */
export type MicrofrontendMount<TContext = BaseMicrofrontendContext> = (
  element: HTMLElement,
  props: MicrofrontendProps<TContext>
) => MicrofrontendMountResult;

/**
 * Метаданные remote-модуля, которые используются host-ом для фильтрации
 * dev-update событий, диагностики и будущей проверки совместимости.
 */
export type MicrofrontendMeta = {
  id: string;
  title: string;
  version: string;
  containerId: string;
  isDev?: boolean;
  remoteUrl?: string;
};

/**
 * React-компонентный контракт микрофронта.
 */
export type MicrofrontendComponent<TContext = BaseMicrofrontendContext> = ComponentType<MicrofrontendProps<TContext>>;

/**
 * Стандартный результат `createReactMicrofrontend`.
 *
 * Remote entry должен экспортировать `microfrontMeta` и `mount`, чтобы host мог
 * загрузить его через dynamic import и управлять жизненным циклом.
 */
export type MicrofrontendDefinition<TContext = BaseMicrofrontendContext> = {
  microfrontMeta: MicrofrontendMeta;
  mount: MicrofrontendMount<TContext>;
};
