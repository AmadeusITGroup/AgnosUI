const t=`import { SvelteComponentTyped } from "svelte";
import type { ModalSlots } from '@agnos-ui/svelte-headless';
declare class __sveltets_Render<Data> {
    props(): import("@agnos-ui/svelte-headless").WidgetSlotContext<import("@agnos-ui/svelte-headless").AdaptWidgetSlots<import("core/dist").ModalWidget<Data>>> & Omit<Omit<import("core/dist").ModalContext<Data>, keyof import("@agnos-ui/svelte-headless").WidgetSlotContext<any>>, \`slot\${string}\`> & {};
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): ModalSlots<Data>;
}
export type ModalDefaultStructureProps<Data> = ReturnType<__sveltets_Render<Data>['props']>;
export type ModalDefaultStructureEvents<Data> = ReturnType<__sveltets_Render<Data>['events']>;
export type ModalDefaultStructureSlots<Data> = ReturnType<__sveltets_Render<Data>['slots']>;
export default class ModalDefaultStructure<Data> extends SvelteComponentTyped<ModalDefaultStructureProps<Data>, ModalDefaultStructureEvents<Data>, ModalDefaultStructureSlots<Data>> {
}
export {};
`;export{t as default};
