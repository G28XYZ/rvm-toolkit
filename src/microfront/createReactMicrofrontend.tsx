import { createRoot, type Root } from "react-dom/client";
import type { ComponentType } from "react";

import type {
  MicrofrontendComponent,
  MicrofrontendDefinition,
  MicrofrontendMeta,
} from "./types";

export const MICROFRONT_UPDATE_EVENT = "microfront:update";

export type CreateReactMicrofrontendOptions = {
  component: MicrofrontendComponent;
  meta: MicrofrontendMeta;
  updateEvent?: string;
};

type ImportMetaWithHot = ImportMeta & {
  hot?: {
    accept(callback: () => void): void;
  };
};

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

export function createReactMicrofrontend({
  component: Component,
  meta,
  updateEvent = MICROFRONT_UPDATE_EVENT,
}: CreateReactMicrofrontendOptions): MicrofrontendDefinition {
  const definition: MicrofrontendDefinition = {
    microfrontMeta: meta,
    mount(element, props) {
      return mountReactComponent(element, Component, { context: props.context });
    },
  };

  const hot = (import.meta as ImportMetaWithHot).hot;
  if (hot) {
    hot.accept(() => {
      window.dispatchEvent(new CustomEvent(updateEvent, {
        detail: {
          id: meta.id,
          containerId: meta.containerId,
          remoteUrl: meta.remoteUrl,
        },
      }));
    });
  }

  return definition;
}
