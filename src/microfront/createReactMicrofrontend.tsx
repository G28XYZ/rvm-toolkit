import { createRoot, type Root } from "react-dom/client";

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

export function createReactMicrofrontend({
  component: Component,
  meta,
  updateEvent = MICROFRONT_UPDATE_EVENT,
}: CreateReactMicrofrontendOptions): MicrofrontendDefinition {
  const definition: MicrofrontendDefinition = {
    microfrontMeta: meta,
    mount(element, props) {
      const root: Root = createRoot(element);
      root.render(<Component context={props.context} />);

      return () => {
        root.unmount();
      };
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
