const o=`import { SvelteComponentTyped } from "svelte";
import type { WidgetPropsEvents } from '../utils';
import type { ModalProps, ModalSlots } from './modal';
declare const __propDef: {
    props: {
        api?: import("@agnos-ui/core").ModalApi | undefined;
        animation?: boolean | undefined;
        backdrop?: boolean | undefined;
        backdropTransition?: import("@agnos-ui/core").TransitionFn | undefined;
        closeOnOutsideClick?: boolean | undefined;
        modalTransition?: import("@agnos-ui/core").TransitionFn | undefined;
        ariaCloseButtonLabel?: string | undefined;
        backdropClass?: string | undefined;
        closeButton?: boolean | undefined;
        container?: HTMLElement | null | undefined;
        modalClass?: string | undefined;
        slotDefault?: import("..").SlotContent<import("@agnos-ui/core").WidgetSlotContext<import("..").AdaptWidgetSlots<import("@agnos-ui/core").ModalWidget>> & Omit<Omit<import("@agnos-ui/core").ModalContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotFooter?: import("..").SlotContent<import("@agnos-ui/core").WidgetSlotContext<import("..").AdaptWidgetSlots<import("@agnos-ui/core").ModalWidget>> & Omit<Omit<import("@agnos-ui/core").ModalContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotHeader?: import("..").SlotContent<import("@agnos-ui/core").WidgetSlotContext<import("..").AdaptWidgetSlots<import("@agnos-ui/core").ModalWidget>> & Omit<Omit<import("@agnos-ui/core").ModalContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotStructure?: import("..").SlotContent<import("@agnos-ui/core").WidgetSlotContext<import("..").AdaptWidgetSlots<import("@agnos-ui/core").ModalWidget>> & Omit<Omit<import("@agnos-ui/core").ModalContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotTitle?: import("..").SlotContent<import("@agnos-ui/core").WidgetSlotContext<import("..").AdaptWidgetSlots<import("@agnos-ui/core").ModalWidget>> & Omit<Omit<import("@agnos-ui/core").ModalContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        visible?: boolean | undefined;
    };
    slots: ModalSlots;
    events: WidgetPropsEvents<Omit<import("@agnos-ui/core").ModalProps, \`slot\${string}\`> & {
        slotDefault: import("..").SlotContent<import("@agnos-ui/core").WidgetSlotContext<import("..").AdaptWidgetSlots<import("@agnos-ui/core").ModalWidget>> & Omit<Omit<import("@agnos-ui/core").ModalContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotFooter: import("..").SlotContent<import("@agnos-ui/core").WidgetSlotContext<import("..").AdaptWidgetSlots<import("@agnos-ui/core").ModalWidget>> & Omit<Omit<import("@agnos-ui/core").ModalContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotHeader: import("..").SlotContent<import("@agnos-ui/core").WidgetSlotContext<import("..").AdaptWidgetSlots<import("@agnos-ui/core").ModalWidget>> & Omit<Omit<import("@agnos-ui/core").ModalContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotStructure: import("..").SlotContent<import("@agnos-ui/core").WidgetSlotContext<import("..").AdaptWidgetSlots<import("@agnos-ui/core").ModalWidget>> & Omit<Omit<import("@agnos-ui/core").ModalContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
        slotTitle: import("..").SlotContent<import("@agnos-ui/core").WidgetSlotContext<import("..").AdaptWidgetSlots<import("@agnos-ui/core").ModalWidget>> & Omit<Omit<import("@agnos-ui/core").ModalContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
    }>;
};
type ModalProps_ = typeof __propDef.props;
export { ModalProps_ as ModalProps };
export type ModalEvents = typeof __propDef.events;
type ModalSlots_ = typeof __propDef.slots;
export { ModalSlots_ as ModalSlots };
export default class Modal extends SvelteComponentTyped<ModalProps, ModalEvents, ModalSlots> {
    get api(): any;
}
`;export{o as default};
