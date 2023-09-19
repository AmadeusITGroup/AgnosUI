const e=`import { SvelteComponentTyped } from "svelte";
import type { ProgressbarSlots } from '@agnos-ui/svelte-headless';
declare const __propDef: {
    props: {
        state: import("@agnos-ui/svelte-headless").AdaptPropsSlots<import("@agnos-ui/core").ProgressbarState>;
        widget: Pick<import("@agnos-ui/svelte-headless").AdaptWidgetSlots<import("@agnos-ui/core").ProgressbarWidget>, "api" | "actions" | "directives" | "stores" | "state$">;
    };
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
