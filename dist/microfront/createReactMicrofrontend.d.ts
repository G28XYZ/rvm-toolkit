import type { ComponentType } from "react";
import type { MicrofrontendComponent, MicrofrontendDefinition, MicrofrontendMeta } from "./types";
export declare const MICROFRONT_UPDATE_EVENT = "microfront:update";
export type CreateReactMicrofrontendOptions = {
    component: MicrofrontendComponent;
    meta: MicrofrontendMeta;
    updateEvent?: string;
};
export declare function mountReactComponent<TProps>(element: HTMLElement, Component: ComponentType<TProps>, props: TProps): () => void;
export declare function createReactMicrofrontend({ component: Component, meta, updateEvent, }: CreateReactMicrofrontendOptions): MicrofrontendDefinition;
