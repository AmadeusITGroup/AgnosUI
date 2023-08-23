const t=`/// <reference types="react" />
import type { AlertContext as AlertCoreContext, WidgetProps } from '@agnos-ui/core';
import { createAlert } from '@agnos-ui/core';
import type { AdaptSlotContentProps, AdaptWidgetSlots } from './Slot';
export type AlertContext = AdaptSlotContentProps<AlertCoreContext>;
export type AlertWidget = AdaptWidgetSlots<ReturnType<typeof createAlert>>;
export type AlertProps = WidgetProps<AlertWidget>;
export type AlertState = WidgetProps<AlertWidget>;
export interface AlertReactProps extends AlertProps, Omit<React.HTMLAttributes<HTMLUListElement>, 'className'> {
}
export declare const Alert: import("react").ForwardRefExoticComponent<Partial<Omit<import("@agnos-ui/core").AlertProps, \`slot\${string}\`> & {
    slotDefault: import("./Slot").SlotContent<import("@agnos-ui/core").WidgetSlotContext<AdaptWidgetSlots<import("@agnos-ui/core").AlertWidget>> & Omit<Omit<AlertCoreContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
    slotStructure: import("./Slot").SlotContent<import("@agnos-ui/core").WidgetSlotContext<AdaptWidgetSlots<import("@agnos-ui/core").AlertWidget>> & Omit<Omit<AlertCoreContext, keyof import("@agnos-ui/core").WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;
}> & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<unknown>>;
`;export{t as default};
