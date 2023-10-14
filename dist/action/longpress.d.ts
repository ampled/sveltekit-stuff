export declare function longpress(node: HTMLElement, time?: number): {
    destroy: () => void;
    update: (newTime: number) => void;
};
export type LongpressEvent<T = any> = CustomEvent<T>;
declare global {
    namespace svelteHTML {
        interface HTMLAttributes<T extends EventTarget> {
            'on:long'?: (event: LongpressEvent<T>) => void;
        }
    }
}
