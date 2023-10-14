/**
 * Options for customizing ripples
 */
export declare const DEFAULT_OPTIONS: RippleOptions;
export type RippleOptions = {
    color: string;
    class: string;
    opacity: number;
    centered: boolean;
    spreadingDuration: number;
    spreadingDelay: number;
    spreadingTimingFunction: string;
    clearingDuration: number;
    clearingDelay: number;
    clearingTimingFunction: string;
};
export declare function RippleStart(e: MouseEvent | TouchEvent | KeyboardEvent, options?: Partial<RippleOptions>): HTMLDivElement;
/**
 * Destroys the ripple, slowly fading it out.
 *
 * @param {Element} ripple
 */
export declare function RippleStop(ripple: HTMLDivElement): void;
