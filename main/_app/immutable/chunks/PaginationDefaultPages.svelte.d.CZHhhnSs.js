const t=`import { SvelteComponentTyped } from "svelte";
import type { PaginationContext, PaginationSlots } from './pagination';
declare const __propDef: {
    props: PaginationContext;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: PaginationSlots;
};
export type PaginationDefaultPagesProps = typeof __propDef.props;
export type PaginationDefaultPagesEvents = typeof __propDef.events;
export type PaginationDefaultPagesSlots = typeof __propDef.slots;
export default class PaginationDefaultPages extends SvelteComponentTyped<PaginationDefaultPagesProps, PaginationDefaultPagesEvents, PaginationDefaultPagesSlots> {
}
export {};
`;export{t as default};
