import type { Components, JSX } from "../dist/types/components";

interface LmPrototypeStencilButton extends Components.LmPrototypeStencilButton, HTMLElement {}
export const LmPrototypeStencilButton: {
    prototype: LmPrototypeStencilButton;
    new (): LmPrototypeStencilButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
