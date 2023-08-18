const t=`import { SvelteComponentTyped } from "svelte";
import type { ModalSlots } from './modal';
declare const __propDef: {
    props: {
        state: import("..").AdaptPropsSlots<import("core/dist/lib").ModalState>;
        widget: Pick<import("..").AdaptWidgetSlots<import("core/dist/lib").ModalWidget>, "api" | "actions" | "directives" | "state$" | "stores">;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: ModalSlots;
};
export type ModalDefaultStructureProps = typeof __propDef.props;
export type ModalDefaultStructureEvents = typeof __propDef.events;
export type ModalDefaultStructureSlots = typeof __propDef.slots;
export default class ModalDefaultStructure extends SvelteComponentTyped<ModalDefaultStructureProps, ModalDefaultStructureEvents, ModalDefaultStructureSlots> {
}
export {};
`;export{t as default};
