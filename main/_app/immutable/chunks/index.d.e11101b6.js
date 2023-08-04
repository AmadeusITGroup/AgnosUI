const t=`/// <reference types="svelte" />\r
\r
import Alert from './alert/Alert.svelte';\r
import type { ComponentType } from 'svelte';\r
import type { createAlert } from '@agnos-ui/core';\r
import type { createModal } from '@agnos-ui/core';\r
import type { createPagination } from '@agnos-ui/core';\r
import type { createRating } from '@agnos-ui/core';\r
import type { createSelect } from '@agnos-ui/core';\r
import Modal from './modal/Modal.svelte';\r
import type { ModalContext as ModalContext_2 } from '@agnos-ui/core';\r
import ModalDefaultHeader from './modal/ModalDefaultHeader.svelte';\r
import ModalDefaultStructure from './modal/ModalDefaultStructure.svelte';\r
import Pagination from './pagination/Pagination.svelte';\r
import type { PaginationContext as PaginationContext_2 } from '@agnos-ui/core';\r
import PaginationDefaultPages from './pagination/PaginationDefaultPages.svelte';\r
import type { Partial2Levels } from '@agnos-ui/core';\r
import Rating from './rating/Rating.svelte';\r
import Select from './select/Select.svelte';\r
import Slot from './slot/Slot.svelte';\r
import type { SlotContent as SlotContent_2 } from '@agnos-ui/core';\r
import type { SvelteComponent } from 'svelte';\r
import type { Widget } from '@agnos-ui/core';\r
import type { WidgetProps } from '@agnos-ui/core';\r
import type { WidgetsConfig as WidgetsConfig_2 } from '@agnos-ui/core';\r
import type { WidgetsConfigStore } from '@agnos-ui/core';\r
import type { WidgetSlotContext } from '@agnos-ui/core';\r
import type { WidgetState } from '@agnos-ui/core';\r
\r
export declare type AdaptPropsSlots<Props> = Omit<Props, \`slot\${string}\`> & {\r
    [K in keyof Props & \`slot\${string}\`]: Props[K] extends SlotContent_2<infer U> ? SlotContent<AdaptSlotContentProps<U>> : Props[K];\r
};\r
\r
export declare type AdaptSlotContentProps<Props extends Record<string, any>> = Props extends WidgetSlotContext<infer U> ? WidgetSlotContext<AdaptWidgetSlots<U>> & AdaptPropsSlots<Omit<Props, keyof WidgetSlotContext<any>>> : AdaptPropsSlots<Props>;\r
\r
export declare type AdaptWidgetSlots<W extends Widget> = Widget<AdaptPropsSlots<WidgetProps<W>>, AdaptPropsSlots<WidgetState<W>>, W['api'], W['actions'], W['directives']>;\r
\r
export { Alert }\r
\r
export declare type AlertProps = WidgetProps<AlertWidget>;\r
\r
export declare type AlertSlots = WidgetPropsSlots<AlertProps>;\r
\r
export declare type AlertWidget = AdaptWidgetSlots<ReturnType<typeof createAlert>>;\r
\r
/**\r
 * Creates in the Svelte context hierarchy a new widgets default configuration store that inherits from any widgets default configuration\r
 * store already defined at an upper level in the Svelte context hierarchy.\r
 * It contains its own set of widgets configuration properties that override the same properties form the parent configuration.\r
 *\r
 * @remarks\r
 * The configuration is computed from the parent configuration in two steps:\r
 * - first step: the parent configuration is transformed by the adaptParentConfig function (if specified).\r
 * If adaptParentConfig is not specified, this step is skipped.\r
 * - second step: the configuration from step 1 is merged (2-levels deep) with the own$ store. The own$ store initially contains\r
 * an empty object (i.e. no property from the parent is overridden). It can be changed by calling set on the store returned by this function.\r
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
 * \`\`\`ts\r
 * const widgetsConfig = createWidgetsDefaultConfig((parentConfig) => {\r
 *   // first step configuration: transforms the parent configuration\r
 *   parentConfig.rating = parentConfig.rating ?? {};\r
 *   parentConfig.rating.className = \`\${parentConfig.rating.className ?? ''} my-rating-extra-class\`\r
 *   return parentConfig;\r
 * });\r
 * widgetsConfig.set({\r
 *   // second step configuration: overrides the parent configuration\r
 *   rating: {\r
 *     slotStar: MyCustomSlotStar\r
 *   }\r
 * });\r
 * \`\`\`\r
 */\r
export declare const createWidgetsDefaultConfig: (adaptParentConfig?: ((config: Partial2Levels<WidgetsConfig>) => Partial2Levels<WidgetsConfig>) | undefined) => WidgetsConfigStore<WidgetsConfig>;\r
\r
export declare const isSvelteComponent: <Props extends object>(content: SlotContent<Props>) => content is SlotSvelteComponent<Props>;\r
\r
export { Modal }\r
\r
export declare type ModalContext = AdaptSlotContentProps<ModalContext_2>;\r
\r
export { ModalDefaultHeader }\r
\r
export { ModalDefaultStructure }\r
\r
export declare type ModalProps = WidgetProps<ModalWidget>;\r
\r
export declare type ModalSlots = WidgetPropsSlots<ModalProps>;\r
\r
export declare type ModalState = WidgetState<ModalWidget>;\r
\r
export declare type ModalWidget = AdaptWidgetSlots<ReturnType<typeof createModal>>;\r
\r
export declare const openModal: (options: Partial<ModalProps>, { context }?: {\r
    context?: Map<any, any> | undefined;\r
}) => Promise<any>;\r
\r
export { Pagination }\r
\r
export declare type PaginationContext = AdaptSlotContentProps<PaginationContext_2>;\r
\r
export { PaginationDefaultPages }\r
\r
export declare type PaginationProps = WidgetProps<PaginationWidget>;\r
\r
export declare type PaginationSlots = WidgetPropsSlots<PaginationProps>;\r
\r
export declare type PaginationState = WidgetState<PaginationWidget>;\r
\r
export declare type PaginationWidget = AdaptWidgetSlots<ReturnType<typeof createPagination>>;\r
\r
export { Rating }\r
\r
export declare type RatingProps = WidgetProps<RatingWidget>;\r
\r
export declare type RatingSlots = WidgetPropsSlots<RatingProps>;\r
\r
export declare type RatingWidget = AdaptWidgetSlots<ReturnType<typeof createRating>>;\r
\r
export { Select }\r
\r
export declare type SelectProps<Item> = WidgetProps<SelectWidget<Item>>;\r
\r
export declare type SelectWidget<Item> = AdaptWidgetSlots<ReturnType<typeof createSelect<Item>>>;\r
\r
export { Slot }\r
\r
export declare type SlotContent<Props extends object = object> = SlotContent_2<Props> | SlotSvelteComponent<Props> | typeof useSvelteSlot;\r
\r
export declare type SlotSvelteComponent<Props extends object = object> = ComponentType<SvelteComponent<Props, any, Props extends WidgetSlotContext<infer U> ? WidgetPropsSlots<WidgetProps<U>> : any>>;\r
\r
export declare const useSvelteSlot: unique symbol;\r
\r
export declare type WidgetPropsSlots<Props extends object> = {\r
    [K in keyof Props & \`slot\${string}\` as K extends \`slot\${infer U}\` ? Uncapitalize<U> : never]: Props[K] extends SlotContent<infer U> ? U : never;\r
};\r
\r
export declare type WidgetsConfig = {\r
    [WidgetName in keyof WidgetsConfig_2]: AdaptPropsSlots<WidgetsConfig_2[WidgetName]>;\r
};\r
\r
export { }\r
`;export{t as default};
