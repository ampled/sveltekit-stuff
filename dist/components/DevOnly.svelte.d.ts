import { SvelteComponentTyped } from "svelte";
export declare function configure(varName?: string, value?: any): void;
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type DevOnlyProps = typeof __propDef.props;
export type DevOnlyEvents = typeof __propDef.events;
export type DevOnlySlots = typeof __propDef.slots;
export default class DevOnly extends SvelteComponentTyped<DevOnlyProps, DevOnlyEvents, DevOnlySlots> {
}
export {};
