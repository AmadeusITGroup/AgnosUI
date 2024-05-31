import type {
	AccordionApi,
	AccordionDirectives,
	AccordionItemActions,
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

export * from '@agnos-ui/core/components/accordion';

export type AccordionItemContext = WidgetSlotContext<AccordionItemWidget>;

interface AccordionExtraProps {
	/**
	 * Structure of the accordion-item. The default item structure is: accordion-item
	 * contains accordion header and accordion-item body container; the accordion header contains the accordion button
	 * (that contains `slotItemHeader`), while the accordion-item body container contains the accordion body (that contains `slotItemBody`).
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
	slotItemBody: SlotContent<AccordionItemContext>;
	/**
	 * Content present in the accordion button inside the accordion header.
	 *
	 * It is a prop of the accordion-item.
	 */
	slotItemHeader: SlotContent<AccordionItemContext>;
}

export interface AccordionState extends CoreState, AccordionExtraProps {}
export interface AccordionProps extends CoreProps, AccordionExtraProps {}

export type AccordionWidget = Widget<AccordionProps, AccordionState, AccordionApi, object, AccordionDirectives>;

export interface AccordionItemState extends CoreItemState, AccordionExtraProps {}
export interface AccordionItemProps extends CoreItemProps, AccordionExtraProps {}

export type AccordionItemWidget = Widget<AccordionItemProps, AccordionItemState, AccordionItemApi, AccordionItemActions, AccordionItemDirectives>;

const defaultConfigExtraProps: AccordionExtraProps = {
	slotItemStructure: undefined,
	slotItemBody: undefined,
	slotItemHeader: undefined,
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
	slotItemStructure: undefined,
	slotItemBody: undefined,
	slotItemHeader: undefined,
};
const accordionItemProps = Object.keys(accordionItemDefaultConfig);

/**
 * Create an AccordioItemnWidget with given config props
 * @param config - an optional alert config
 * @returns an AccordionWidget
 */
export const createAccordionItem = extendWidgetProps(createCoreAccordionItem, defaultConfigExtraProps);

const coreOverride: Partial<AccordionProps> = {
	transition: collapseVerticalTransition,
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
