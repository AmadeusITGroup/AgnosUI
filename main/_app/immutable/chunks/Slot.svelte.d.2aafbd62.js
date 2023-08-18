const e=`import { SvelteComponentTyped } from "svelte";
import type { SlotContent, SlotSvelteComponent } from './slot';
declare class __sveltets_Render<Props extends object> {
    props(): {
        slotContent?: SlotContent<Props>;
        props: Props;
    };
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {
        default: {
            component: SlotSvelteComponent<Props>;
            props: Props;
        };
        slot: {
            props: Props;
        };
    };
}
export type SlotProps<Props extends object> = ReturnType<__sveltets_Render<Props>['props']>;
export type SlotEvents<Props extends object> = ReturnType<__sveltets_Render<Props>['events']>;
export type SlotSlots<Props extends object> = ReturnType<__sveltets_Render<Props>['slots']>;
export default class Slot<Props extends object> extends SvelteComponentTyped<SlotProps<Props>, SlotEvents<Props>, SlotSlots<Props>> {
}
export {};
`;export{e as default};
