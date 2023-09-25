const e=`import { SvelteComponentTyped } from "svelte";
import type { ProgressbarSlots } from '@agnos-ui/svelte-headless';
declare const __propDef: {
    props: import("@agnos-ui/svelte-headless").WidgetSlotContext<import("@agnos-ui/svelte-headless").AdaptWidgetSlots<import("@agnos-ui/core").ProgressbarWidget>> & Omit<Omit<import("@agnos-ui/svelte-headless").ProgressbarContext, keyof import("@agnos-ui/svelte-headless").WidgetSlotContext<any>>, \`slot\${string}\`> & {};
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
