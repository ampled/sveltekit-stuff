import { type RippleOptions } from './ripple';
/**
 * @param node {Element}
 */
export declare function ripple(node: HTMLElement, _options?: Partial<RippleOptions>): {
    update(newOptions: Partial<RippleOptions>): void;
    destroy: () => void;
};
export default ripple;
