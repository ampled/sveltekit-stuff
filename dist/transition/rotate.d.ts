import type { EasingFunction, TransitionConfig } from 'svelte/transition';
export interface RotateParams {
    delay?: number;
    duration?: number;
    easing?: EasingFunction;
    opacity?: number;
    rotation?: number | string;
    x?: number;
    y?: number;
}
export declare function rotate(node: Element, { delay, duration, easing, rotation, opacity, x, y }?: RotateParams): TransitionConfig;
export default rotate;
