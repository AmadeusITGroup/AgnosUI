import type {AccordionProps} from '@agnos-ui/core/components/accordion';
import {createAccordion as createCoreAccordion, getAccordionDefaultConfig as getCoreDefaultConfig} from '@agnos-ui/core/components/accordion';
import {collapseVerticalTransition} from '../../services/transitions';
import {extendWidgetProps} from '@agnos-ui/core/services/extendWidget';

export * from '@agnos-ui/core/components/accordion';

const coreOverride: Partial<AccordionProps> = {
	itemTransition: collapseVerticalTransition,
};

/**
 * Retrieve a shallow copy of the default accordion config
 * @returns the default accordion config
 */
export function getAccordionDefaultConfig(): AccordionProps {
	return {...getCoreDefaultConfig(), ...coreOverride} as any;
}

/**
 * Create an AccordionWidget with given config props
 * @param config - an optional alert config
 * @returns an AccordionWidget
 */
export const createAccordion = extendWidgetProps(createCoreAccordion, {}, {}, coreOverride);
