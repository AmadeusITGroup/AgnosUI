import type {
	AccordionApi,
	AccordionDirectives,
	AccordionItemApi,
	AccordionProps as CoreProps,
	AccordionState as CoreState,
	AccordionItemState as CoreItemState,
	AccordionItemProps as CoreItemProps,
	AccordionItemDirectives,
} from '@agnos-ui/core/components/accordion';
import {
	factoryCreateAccordion,
	createAccordionItem as createCoreAccordionItem,
	getAccordionDefaultConfig as getCoreDefaultConfig,
} from '@agnos-ui/core/components/accordion';
import {collapseVerticalTransition} from '../../services/transitions';
import {extendWidgetProps} from '@agnos-ui/core/services/extendWidget';
import type {SlotContent, Widget, WidgetFactory, WidgetSlotContext} from '@agnos-ui/core/types';
import type {TransitionFn} from '@agnos-ui/core/services/transitions/baseTransitions';

export * from '@agnos-ui/core/components/accordion';

/**
 * Represents the context for an accordion item within the accordion component.
 */
export type AccordionItemContext = WidgetSlotContext<AccordionItemWidget>;

interface AccordionExtraProps {
	/**
	 * Structure of the accordion-item. The default item structure is: accordion-item
	 * contains accordion header and accordion-item body container; the accordion header contains the accordion button
	 * (that contains `header`), while the accordion-item body container contains the accordion body (that contains `children`).
	 * The itemTransition is applied on this element.
	 *
	 * It is a prop of the accordion-item.
	 */
	itemStructure: SlotContent<AccordionItemContext>;
}
interface AccordionItemExtraProps {
	/**
	 * Structure of the accordion-item. The default item structure is: accordion-item
	 * contains accordion header and accordion-item body container; the accordion header contains the accordion button
	 * (that contains `header`), while the accordion-item body container contains the accordion body (that contains `children`).
	 * The itemTransition is applied on this element.
	 *
	 * It is a prop of the accordion-item.
	 */
	structure: SlotContent<AccordionItemContext>;
	/**
	 * Content present in the accordion body.
	 *
	 * It is a prop of the accordion-item.
	 */
	children: SlotContent<AccordionItemContext>;
	/**
	 * Content present in the accordion button inside the accordion header.
	 *
	 * It is a prop of the accordion-item.
	 */
	header: SlotContent<AccordionItemContext>;
}

/**
 * Represents the state of an Accordion component.
 */
export interface AccordionState extends CoreState, AccordionExtraProps {}
/**
 * Represents the state of an AccordionItem component.
 */
export interface AccordionProps extends CoreProps, AccordionExtraProps {
	/**
	 * The transition to use for the accordion-item body-container when the accordion-item is toggled.
	 *
	 * @defaultValue
	 * ```ts
	 * collapseVerticalTransition
	 * ```
	 */
	itemTransition: TransitionFn;
}

/**
 * Represents an Accordion widget type.
 */
export type AccordionWidget = Widget<AccordionProps, AccordionState, AccordionApi, AccordionDirectives>;

/**
 * Represents the state of an accordion item, extending the core item state and additional properties specific to the accordion item.
 */
export interface AccordionItemState extends CoreItemState, AccordionItemExtraProps {}
/**
 * Represents the properties for an Accordion item component.
 */
export interface AccordionItemProps extends CoreItemProps, AccordionItemExtraProps {}

/**
 * Represents a widget for an accordion item.
 */
export type AccordionItemWidget = Widget<AccordionItemProps, AccordionItemState, AccordionItemApi, AccordionItemDirectives>;

const defaultConfigExtraProps: AccordionExtraProps = {
	itemStructure: undefined,
};
const defaultConfigItemExtraProps: AccordionItemExtraProps = {
	structure: undefined,
	children: undefined,
	header: undefined,
};

const defaultPropsWithoutOverride: AccordionProps = {
	...getCoreDefaultConfig(),
	...defaultConfigExtraProps,
} as any;
const accordionItemDefaultConfig: AccordionItemProps = {
	animated: false,
	transition: collapseVerticalTransition,
	destroyOnHide: false,
	onShown: () => {},
	onHidden: () => {},
	onVisibleChange: () => {},
	visible: false,
	disabled: false,
	id: '',
	headerClassName: '',
	buttonClassName: '',
	bodyContainerClassName: '',
	bodyClassName: '',
	headingTag: '',
	className: '',
	structure: undefined,
	children: undefined,
	header: undefined,
};
const accordionItemProps = Object.keys(accordionItemDefaultConfig);

/**
 * Create an AccordionItemWidget with given config props
 * @param config - an optional AccordionItem config
 * @returns an AccordionItemWidget
 */
export const createAccordionItem: WidgetFactory<AccordionItemWidget> = extendWidgetProps(createCoreAccordionItem, defaultConfigItemExtraProps);

const coreOverride: Partial<AccordionProps> = {
	itemTransition: collapseVerticalTransition,
};

/**
 * Retrieve a shallow copy of the default accordion config
 * @returns the default accordion config
 */
export function getAccordionDefaultConfig(): AccordionProps {
	return {...defaultPropsWithoutOverride, ...coreOverride};
}

/**
 * Create an AccordionWidget with given config props
 * @param config - an optional accordion config
 * @returns an AccordionWidget
 */
export const createAccordion: WidgetFactory<AccordionWidget> = factoryCreateAccordion(
	createAccordionItem,
	accordionItemProps,
	getAccordionDefaultConfig(),
) as any;
