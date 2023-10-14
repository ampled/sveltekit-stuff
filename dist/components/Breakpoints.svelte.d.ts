/** @typedef {typeof __propDef.props}  BreakpointsProps */
/** @typedef {typeof __propDef.events}  BreakpointsEvents */
/** @typedef {typeof __propDef.slots}  BreakpointsSlots */
export default class Breakpoints extends SvelteComponentTyped<{
    class?: string | undefined;
    xs?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BreakpointsProps = typeof __propDef.props;
export type BreakpointsEvents = typeof __propDef.events;
export type BreakpointsSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        xs?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
