import type {
	AccordionApi,
	AccordionDirectives,
	AccordionItemActions,
	AccordionItemApi,
	AccordionProps,
	AccordionState,
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

export * from '@agnos-ui/core/components/accordion';

export type AccordionItemContext = WidgetSlotContext<AccordionItemWidget>;

interface AccordionExtraProps {
	/**
	 * Structure of the accordion-item. The default item structure is: accordion-item
	 * contains accordion header and accordion-item body container; the accordion header contains the accordion button
	 * (that contains `slotItemHeader`), while the accordion-item body container contains the accordion body (that contains `children`).
	 * The itemTransition it applied on this element.
	 *
	 * It is a prop of the accordion-item.
	 */
	slotItemStructure: SlotContent<AccordionItemContext>;
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
	slotItemHeader: SlotContent<AccordionItemContext>;
}

export type AccordionWidget = Widget<AccordionProps, AccordionState, AccordionApi, object, AccordionDirectives>;

export interface AccordionItemState extends CoreItemState, AccordionExtraProps {}
export interface AccordionItemProps extends CoreItemProps, AccordionExtraProps {}

export type AccordionItemWidget = Widget<AccordionItemProps, AccordionItemState, AccordionItemApi, AccordionItemActions, AccordionItemDirectives>;

const defaultConfigExtraProps: AccordionExtraProps = {
	slotItemStructure: undefined,
	children: undefined,
	slotItemHeader: undefined,
};

const defaultPropsWithoutOverride: AccordionProps = {
	...getCoreDefaultConfig(),
	...defaultConfigExtraProps,
} as any;
const accordionItemProps = Object.keys(defaultPropsWithoutOverride);

/**
 * Create an AccordioItemnWidget with given config props
 * @param config - an optional alert config
 * @returns an AccordionWidget
 */
export const createAccordionItem = extendWidgetProps(createCoreAccordionItem, defaultConfigExtraProps);

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

export const createAccordion: WidgetFactory<AccordionWidget> = factoryCreateAccordion(
	createAccordionItem,
	accordionItemProps,
	getAccordionDefaultConfig(),
) as any;
