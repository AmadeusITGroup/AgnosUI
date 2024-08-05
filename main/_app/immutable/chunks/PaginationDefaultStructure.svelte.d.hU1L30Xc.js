const t=`import { SvelteComponent } from "svelte";
import type { PaginationSlots } from './pagination';
declare const __propDef: {
    props: WidgetSlotContext<Widget<import("./pagination.gen").PaginationProps, import("./pagination.gen").PaginationState, object, import("./pagination.gen").PaginationActions, import("./pagination.gen").PaginationDirectives>>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: PaginationSlots;
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type PaginationDefaultStructureProps = typeof __propDef.props;
export type PaginationDefaultStructureEvents = typeof __propDef.events;
export type PaginationDefaultStructureSlots = typeof __propDef.slots;
export default class PaginationDefaultStructure extends SvelteComponent<PaginationDefaultStructureProps, PaginationDefaultStructureEvents, PaginationDefaultStructureSlots> {
}
export {};
`;export{t as default};
