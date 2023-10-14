import type { EasingFunction, TransitionConfig } from 'svelte/transition';
export interface ScaleXYParams {
    delay?: number;
    duration?: number;
    easing?: EasingFunction;
    opacity?: number;
    x?: number;
    y?: number;
}
export declare function scaleXY(node: Element, { delay, duration, easing, x, y, opacity }?: ScaleXYParams): TransitionConfig;
export default scaleXY;
