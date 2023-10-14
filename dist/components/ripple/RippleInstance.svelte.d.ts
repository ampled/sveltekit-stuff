import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        opacity?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type RippleInstanceProps = typeof __propDef.props;
export type RippleInstanceEvents = typeof __propDef.events;
export type RippleInstanceSlots = typeof __propDef.slots;
export default class RippleInstance extends SvelteComponentTyped<RippleInstanceProps, RippleInstanceEvents, RippleInstanceSlots> {
}
export {};
