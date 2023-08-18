const t=`import { SvelteComponentTyped } from "svelte";
import type { PaginationSlots } from './pagination';
declare const __propDef: {
    props: {
        state: import("..").AdaptPropsSlots<import("core/dist/lib").PaginationState>;
        widget: Pick<import("..").AdaptWidgetSlots<import("core/dist/lib").PaginationWidget>, "api" | "actions" | "directives" | "state$" | "stores">;
    };
    events: {
        click: MouseEvent;
    } & {
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
