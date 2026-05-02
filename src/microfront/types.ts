import type { ComponentType } from "react";

export type ExtensionApiContext = {
  libvirtBaseUrl: string;
  systemBaseUrl: string;
};

export type ExtensionHostContext = {
  containerId: string;
  host: {
    name: string;
    version: string;
  };
  api: ExtensionApiContext;
};

export type MicrofrontendProps = {
  context: ExtensionHostContext;
};

export type MicrofrontendMountResult =
  | void
  | (() => void)
  | {
      unmount?: () => void;
      dispose?: () => void;
    };

export type MicrofrontendMount = (
  element: HTMLElement,
  props: MicrofrontendProps
) => MicrofrontendMountResult;

export type MicrofrontendMeta = {
  id: string;
  title: string;
  version: string;
  containerId: string;
  isDev?: boolean;
  remoteUrl?: string;
};

export type MicrofrontendComponent = ComponentType<MicrofrontendProps>;

export type MicrofrontendDefinition = {
  microfrontMeta: MicrofrontendMeta;
  mount: MicrofrontendMount;
};

export type MicrofrontResponse<TData> = {
  success?: boolean;
  errors?: unknown[];
  data?: TData;
};
