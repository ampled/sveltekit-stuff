export declare function clickOutside(node: HTMLElement): {
    destroy(): void;
};
export type ClickOutsideEvent<T = any> = CustomEvent<T>;
declare global {
    namespace svelteHTML {
        interface HTMLAttributes<T extends EventTarget> {
            'on:clickOut'?: (event: ClickOutsideEvent<T>) => void;
        }
    }
}
