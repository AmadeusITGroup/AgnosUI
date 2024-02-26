const e=`import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: ProgressbarSlots;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: ProgressbarSlots;
};
export type ProgressbarDefaultContentProps = typeof __propDef.props;
export type ProgressbarDefaultContentEvents = typeof __propDef.events;
export type ProgressbarDefaultContentSlots = typeof __propDef.slots;
export default class ProgressbarDefaultContent extends SvelteComponentTyped<ProgressbarDefaultContentProps, ProgressbarDefaultContentEvents, ProgressbarDefaultContentSlots> {
}
export {};
`;export{e as default};
