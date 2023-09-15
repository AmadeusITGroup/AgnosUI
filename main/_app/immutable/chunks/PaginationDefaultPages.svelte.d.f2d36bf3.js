const e=`import { SvelteComponentTyped } from "svelte";
import type { PaginationSlots } from '@agnos-ui/svelte-headless';
declare const __propDef: {
    props: {
        state: import("@agnos-ui/svelte-headless").AdaptPropsSlots<import("@agnos-ui/core").PaginationState>;
        widget: Pick<import("@agnos-ui/svelte-headless").AdaptWidgetSlots<import("@agnos-ui/core").PaginationWidget>, "api" | "actions" | "directives" | "stores" | "state$">;
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
`;export{e as default};
