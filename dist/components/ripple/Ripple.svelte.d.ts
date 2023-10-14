import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        options?: Partial<{
            id?: string | undefined;
            easing: (t: number) => number;
            spreadDuration: number;
            center: boolean;
            color: string;
            opacity: number;
            clearDelay: number;
            clearEasing: any;
        }> | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type RippleProps = typeof __propDef.props;
export type RippleEvents = typeof __propDef.events;
export type RippleSlots = typeof __propDef.slots;
/** work in progress */
export default class Ripple extends SvelteComponentTyped<RippleProps, RippleEvents, RippleSlots> {
}
export {};
