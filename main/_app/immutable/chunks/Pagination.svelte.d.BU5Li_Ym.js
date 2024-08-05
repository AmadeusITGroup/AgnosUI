const t=`import { SvelteComponent } from "svelte";
import type { PaginationProps, PaginationSlots } from './pagination';
declare const __propDef: {
    props: Partial<PaginationProps>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: PaginationSlots;
    exports?: {} | undefined;
    bindings?: string | undefined;
};
type PaginationProps_ = typeof __propDef.props;
export { PaginationProps_ as PaginationProps };
export type PaginationEvents = typeof __propDef.events;
type PaginationSlots_ = typeof __propDef.slots;
export { PaginationSlots_ as PaginationSlots };
export default class Pagination extends SvelteComponent<PaginationProps_, PaginationEvents, PaginationSlots_> {
}
`;export{t as default};
