const t=`/// <reference types="react" />
import type { ModalContext as ModalCoreContext, WidgetProps, WidgetState } from '@agnos-ui/core';
import { createModal } from '@agnos-ui/core';
import type { AdaptSlotContentProps, AdaptWidgetSlots } from '../Slot';
export type ModalContext = AdaptSlotContentProps<ModalCoreContext>;
export type ModalWidget = AdaptWidgetSlots<ReturnType<typeof createModal>>;
export type ModalProps = WidgetProps<ModalWidget>;
export type ModalState = WidgetState<ModalWidget>;
export declare const Modal: import("react").ForwardRefExoticComponent<Partial<Omit<import("@agnos-ui/core").ModalProps, \`slot\${string}\`> & {
    slotDefault: import("../Slot").SlotContent<import("@agnos-ui/core").WidgetSlotContext<AdaptWidgetSlots<import("@agnos-ui/core").ModalWidget>> & Omit<Omit<ModalCoreContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
    slotFooter: import("../Slot").SlotContent<import("@agnos-ui/core").WidgetSlotContext<AdaptWidgetSlots<import("@agnos-ui/core").ModalWidget>> & Omit<Omit<ModalCoreContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
    slotHeader: import("../Slot").SlotContent<import("@agnos-ui/core").WidgetSlotContext<AdaptWidgetSlots<import("@agnos-ui/core").ModalWidget>> & Omit<Omit<ModalCoreContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
    slotStructure: import("../Slot").SlotContent<import("@agnos-ui/core").WidgetSlotContext<AdaptWidgetSlots<import("@agnos-ui/core").ModalWidget>> & Omit<Omit<ModalCoreContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
    slotTitle: import("../Slot").SlotContent<import("@agnos-ui/core").WidgetSlotContext<AdaptWidgetSlots<import("@agnos-ui/core").ModalWidget>> & Omit<Omit<ModalCoreContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
}> & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<unknown>>;
`;export{t as default};
