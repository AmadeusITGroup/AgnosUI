const e=`import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: WidgetPropsSlots<WidgetProps<AdaptWidgetSlots<any>>>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: WidgetPropsSlots<WidgetProps<AdaptWidgetSlots<any>>>;
};
export type PaginationDefaultPagesProps = typeof __propDef.props;
export type PaginationDefaultPagesEvents = typeof __propDef.events;
export type PaginationDefaultPagesSlots = typeof __propDef.slots;
export default class PaginationDefaultPages extends SvelteComponentTyped<PaginationDefaultPagesProps, PaginationDefaultPagesEvents, PaginationDefaultPagesSlots> {
}
export {};
`;export{e as default};
