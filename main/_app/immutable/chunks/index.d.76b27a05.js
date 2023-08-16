const t=`/// <reference types="react" />\r
\r
import type { AccordionItemContext as AccordionItemContext_2 } from '@agnos-ui/core';\r
import { AccordionItemProps as AccordionItemProps_2 } from '@agnos-ui/core';\r
import type { AccordionItemWidget as AccordionItemWidget_2 } from '@agnos-ui/core';\r
import { AccordionProps as AccordionProps_2 } from '@agnos-ui/core';\r
import type { AlertContext as AlertContext_2 } from '@agnos-ui/core';\r
import { AlertProps as AlertProps_2 } from '@agnos-ui/core';\r
import { AlertWidget as AlertWidget_2 } from '@agnos-ui/core';\r
import { Context } from 'react';\r
import { createAccordion } from '@agnos-ui/core';\r
import { createAlert } from '@agnos-ui/core';\r
import { createModal } from '@agnos-ui/core';\r
import { createPagination } from '@agnos-ui/core';\r
import { createRating } from '@agnos-ui/core';\r
import { createSelect } from '@agnos-ui/core';\r
import type { Directive } from '@agnos-ui/core';\r
import { ForwardRefExoticComponent } from 'react';\r
import { JSX as JSX_2 } from 'react/jsx-runtime';\r
import type { ModalContext as ModalContext_2 } from '@agnos-ui/core';\r
import { ModalProps as ModalProps_2 } from '@agnos-ui/core';\r
import { ModalWidget as ModalWidget_2 } from '@agnos-ui/core';\r
import type { PaginationContext as PaginationContext_2 } from '@agnos-ui/core';\r
import { PaginationProps as PaginationProps_2 } from '@agnos-ui/core';\r
import type { Partial2Levels } from '@agnos-ui/core';\r
import { RatingProps as RatingProps_2 } from '@agnos-ui/core';\r
import * as React_2 from 'react';\r
import { ReactNode } from 'react';\r
import type { ReadableSignal } from '@amadeus-it-group/tansu';\r
import { RefAttributes } from 'react';\r
import type { RefCallback } from 'react';\r
import { SelectProps as SelectProps_2 } from '@agnos-ui/core';\r
import type { SlotContent as SlotContent_2 } from '@agnos-ui/core';\r
import type { Widget } from '@agnos-ui/core';\r
import type { WidgetFactory } from '@agnos-ui/core';\r
import type { WidgetProps } from '@agnos-ui/core';\r
import type { WidgetsConfig as WidgetsConfig_2 } from '@agnos-ui/core';\r
import type { WidgetsConfigStore } from '@agnos-ui/core';\r
import { WidgetSlotContext } from '@agnos-ui/core';\r
import type { WidgetState } from '@agnos-ui/core';\r
\r
export declare const Accordion: ForwardRefExoticComponent<Partial<Omit<AccordionProps_2, \`slot\${string}\`> & {\r
slotItemStructure: SlotContent<WidgetSlotContext<AdaptWidgetSlots<AccordionItemWidget_2>> & Omit<Omit<AccordionItemContext_2, keyof WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;\r
slotItemBody: SlotContent<WidgetSlotContext<AdaptWidgetSlots<AccordionItemWidget_2>> & Omit<Omit<AccordionItemContext_2, keyof WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;\r
slotItemHeader: SlotContent<WidgetSlotContext<AdaptWidgetSlots<AccordionItemWidget_2>> & Omit<Omit<AccordionItemContext_2, keyof WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;\r
}> & {\r
children?: ReactNode;\r
} & RefAttributes<unknown>>;\r
\r
export declare const AccordionItem: ForwardRefExoticComponent<Partial<Omit<AccordionItemProps_2, \`slot\${string}\`> & {\r
slotItemStructure: SlotContent<WidgetSlotContext<AdaptWidgetSlots<AccordionItemWidget_2>> & Omit<Omit<AccordionItemContext_2, keyof WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;\r
slotItemBody: SlotContent<WidgetSlotContext<AdaptWidgetSlots<AccordionItemWidget_2>> & Omit<Omit<AccordionItemContext_2, keyof WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;\r
slotItemHeader: SlotContent<WidgetSlotContext<AdaptWidgetSlots<AccordionItemWidget_2>> & Omit<Omit<AccordionItemContext_2, keyof WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;\r
}> & {\r
children?: ReactNode;\r
} & RefAttributes<unknown>>;\r
\r
export declare type AccordionItemContext = AdaptSlotContentProps<AccordionItemContext_2>;\r
\r
export declare type AccordionItemProps = WidgetProps<AccordionItemWidget>;\r
\r
export declare type AccordionItemState = WidgetProps<AccordionItemWidget>;\r
\r
export declare type AccordionItemWidget = AdaptWidgetSlots<AccordionItemWidget_2>;\r
\r
export declare type AccordionProps = WidgetProps<AccordionWidget>;\r
\r
export declare type AccordionState = WidgetProps<AccordionWidget>;\r
\r
export declare type AccordionWidget = AdaptWidgetSlots<ReturnType<typeof createAccordion>>;\r
\r
export declare type AdaptPropsSlots<Props> = Omit<Props, \`slot\${string}\`> & {\r
    [K in keyof Props & \`slot\${string}\`]: Props[K] extends SlotContent_2<infer U> ? SlotContent<AdaptSlotContentProps<U>> : Props[K];\r
};\r
\r
export declare type AdaptSlotContentProps<Props extends Record<string, any>> = Props extends WidgetSlotContext<infer U> ? WidgetSlotContext<AdaptWidgetSlots<U>> & AdaptPropsSlots<Omit<Props, keyof WidgetSlotContext<any>>> : AdaptPropsSlots<Props>;\r
\r
export declare type AdaptWidgetSlots<W extends Widget> = Widget<AdaptPropsSlots<WidgetProps<W>>, AdaptPropsSlots<WidgetState<W>>, W['api'], W['actions'], W['directives']>;\r
\r
export declare const Alert: ForwardRefExoticComponent<Partial<Omit<AlertProps_2, \`slot\${string}\`> & {\r
slotDefault: SlotContent<WidgetSlotContext<AdaptWidgetSlots<AlertWidget_2>> & Omit<Omit<AlertContext_2, keyof WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;\r
slotStructure: SlotContent<WidgetSlotContext<AdaptWidgetSlots<AlertWidget_2>> & Omit<Omit<AlertContext_2, keyof WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;\r
}> & {\r
children?: ReactNode;\r
} & RefAttributes<unknown>>;\r
\r
export declare type AlertContext = AdaptSlotContentProps<AlertContext_2>;\r
\r
export declare type AlertProps = WidgetProps<AlertWidget>;\r
\r
export declare interface AlertReactProps extends AlertProps, Omit<React.HTMLAttributes<HTMLUListElement>, 'className'> {\r
}\r
\r
export declare type AlertState = WidgetProps<AlertWidget>;\r
\r
export declare type AlertWidget = AdaptWidgetSlots<ReturnType<typeof createAlert>>;\r
\r
export declare function DefaultPages(slotContext: PaginationContext): JSX_2.Element | null;\r
\r
export declare const Modal: ForwardRefExoticComponent<Partial<Omit<ModalProps_2, \`slot\${string}\`> & {\r
slotDefault: SlotContent<WidgetSlotContext<AdaptWidgetSlots<ModalWidget_2>> & Omit<Omit<ModalContext_2, keyof WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;\r
slotFooter: SlotContent<WidgetSlotContext<AdaptWidgetSlots<ModalWidget_2>> & Omit<Omit<ModalContext_2, keyof WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;\r
slotHeader: SlotContent<WidgetSlotContext<AdaptWidgetSlots<ModalWidget_2>> & Omit<Omit<ModalContext_2, keyof WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;\r
slotStructure: SlotContent<WidgetSlotContext<AdaptWidgetSlots<ModalWidget_2>> & Omit<Omit<ModalContext_2, keyof WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;\r
slotTitle: SlotContent<WidgetSlotContext<AdaptWidgetSlots<ModalWidget_2>> & Omit<Omit<ModalContext_2, keyof WidgetSlotContext<any>>, \`slot\${string}\`> & {}>;\r
}> & {\r
children?: ReactNode;\r
} & RefAttributes<unknown>>;\r
\r
export declare type ModalContext = AdaptSlotContentProps<ModalContext_2>;\r
\r
export declare type ModalProps = WidgetProps<ModalWidget>;\r
\r
export declare type ModalState = WidgetState<ModalWidget>;\r
\r
export declare type ModalWidget = AdaptWidgetSlots<ReturnType<typeof createModal>>;\r
\r
export declare const NavButton: React_2.ForwardRefExoticComponent<PageItemProps & React_2.RefAttributes<HTMLLIElement>>;\r
\r
export declare const openModal: (options: Partial<ModalProps>) => Promise<any>;\r
\r
export declare const PageItem: React_2.ForwardRefExoticComponent<PageItemProps & React_2.RefAttributes<HTMLLIElement>>;\r
\r
export declare interface PageItemProps extends React_2.HTMLAttributes<HTMLAnchorElement> {\r
    disabled?: boolean;\r
    active?: boolean;\r
    ariaLabel?: string;\r
    activeLabel?: string;\r
}\r
\r
export declare function Pagination(props: Partial<PaginationProps>): JSX_2.Element;\r
\r
export declare type PaginationContext = AdaptSlotContentProps<PaginationContext_2>;\r
\r
export declare type PaginationProps = WidgetProps<PaginationWidget>;\r
\r
export declare type PaginationState = WidgetState<PaginationWidget>;\r
\r
export declare type PaginationWidget = AdaptWidgetSlots<ReturnType<typeof createPagination>>;\r
\r
export declare function Rating(props: Partial<RatingProps>): JSX_2.Element;\r
\r
export declare type RatingProps = WidgetProps<RatingWidget>;\r
\r
export declare type RatingWidget = AdaptWidgetSlots<ReturnType<typeof createRating>>;\r
\r
export declare function Select<Item>(props: Partial<SelectProps<Item>>): JSX_2.Element;\r
\r
export declare type SelectProps<Item> = WidgetProps<SelectWidget<Item>>;\r
\r
export declare type SelectWidget<Item> = AdaptWidgetSlots<ReturnType<typeof createSelect<Item>>>;\r
\r
export declare const Slot: <Props extends object>({ slotContent, props }: {\r
    slotContent: SlotContent<Props>;\r
    props: Props;\r
}) => JSX_2.Element;\r
\r
export declare type SlotContent<Props extends object = object> = SlotContent_2<Props> | ((props: Props) => React.ReactNode) | React.ComponentType<Props> | React.ReactNode;\r
\r
export declare function useDirective(directive: Directive<void>): RefCallback<HTMLElement>;\r
\r
export declare function useDirective<T>(directive: Directive<T>, args: T): RefCallback<HTMLElement>;\r
\r
export declare function useObservable<T>(store$: ReadableSignal<T>): T;\r
\r
export declare function useWidget<Factory extends (...arg: any[]) => Widget>(createWidget: Factory, props?: Partial<WidgetProps<ReturnType<Factory>>>, ...initProps: Parameters<Factory>): [WidgetState<ReturnType<Factory>>, ReturnType<Factory>];\r
\r
export declare const useWidgetWithConfig: <W extends Widget<object, object, object, object, object>>(factory: WidgetFactory<W>, props: Partial<AdaptPropsSlots<WidgetProps<W>>> | undefined, widgetName: keyof WidgetsConfig | null, defaultProps?: Partial<AdaptPropsSlots<WidgetProps<W>>> | undefined) => [AdaptPropsSlots<WidgetState<W>>, AdaptWidgetSlots<W>];\r
\r
export declare type WidgetsConfig = {\r
    [WidgetName in keyof WidgetsConfig_2]: AdaptPropsSlots<WidgetsConfig_2[WidgetName]>;\r
};\r
\r
/**\r
 * React context which can be used to provide or consume the widgets default configuration store.\r
 */\r
export declare const widgetsConfigContext: Context<WidgetsConfigStore<WidgetsConfig> | undefined>;\r
\r
/**\r
 * React component that provides in the React context (for all AgnosUI descendant widgets) a new widgets default configuration\r
 * store that inherits from any widgets default configuration store already defined at an upper level in the React context hierarchy.\r
 * It contains its own set of widgets configuration properties that override the same properties form the parent configuration.\r
 *\r
 * @remarks\r
 * The configuration is computed from the parent configuration in two steps:\r
 * - first step: the parent configuration is transformed by the adaptParentConfig function (if specified).\r
 * If adaptParentConfig is not specified, this step is skipped.\r
 * - second step: the configuration from step 1 is merged (2-levels deep) with the properties of the component.\r
 *\r
 * @param adaptParentConfig - optional function that receives a 2-levels copy of the widgets default configuration\r
 * defined at an upper level in the Svelte context hierarchy (or an empty object if there is none) and returns the widgets\r
 * default configuration to be used.\r
 * It is called only if the configuration is needed, and was not yet computed for the current value of the parent configuration.\r
 * It is called in a tansu reactive context, so it can use any tansu store and will be called again if those stores change.\r
 *\r
 * @returns the resulting widgets default configuration store, which contains 3 additional properties that are stores:\r
 * parent$, adaptedParent$ (containing the value computed after the first step), and own$ (that contains only overridding properties).\r
 * The resulting store is writable, its set function is actually the set function of the own$ store.\r
 *\r
 * @example\r
 * \`\`\`tsx\r
 * <WidgetsDefaultConfig\r
 *   adaptParentConfig={(parentConfig) => {\r
 *     parentConfig.rating = parentConfig.rating ?? {};\r
 *     parentConfig.rating.className = \`\${parentConfig.rating.className ?? ''} my-rating-extra-class\`\r
 *     return parentConfig;\r
 *   }}\r
 *   rating={{slotStar: MyCustomSlotStar}}\r
 * />\r
 * \`\`\`\r
 */\r
export declare const WidgetsDefaultConfig: ({ children, adaptParentConfig, ...props }: Partial<{\r
    pagination: Partial<AdaptPropsSlots<PaginationProps_2>>;\r
    rating: Partial<AdaptPropsSlots<RatingProps_2>>;\r
    select: Partial<AdaptPropsSlots<SelectProps_2<any>>>;\r
    modal: Partial<AdaptPropsSlots<ModalProps_2>>;\r
    alert: Partial<AdaptPropsSlots<AlertProps_2>>;\r
    accordion: Partial<AdaptPropsSlots<AccordionProps_2>>;\r
}> & {\r
    children?: ReactNode;\r
} & {\r
    adaptParentConfig?: ((config: Partial2Levels<WidgetsConfig>) => Partial2Levels<WidgetsConfig>) | undefined;\r
}) => JSX_2.Element;\r
\r
export { }\r
`;export{t as default};
