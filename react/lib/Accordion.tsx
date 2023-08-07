import type {
	AccordionItemContext as AccordionItemCoreContext,
	AccordionApi as AccordionCoreApi,
	AccordionItemWidget as AccordionItemCoreWidget,
	WidgetProps,
	WidgetFactory,
} from '@agnos-ui/core';

import type {AdaptWidgetSlots, AdaptSlotContentProps} from './Slot';
import {Slot} from './Slot';
import {useWidgetWithConfig, useDirective} from './utils';
import type {PropsWithChildren} from 'react';
import {createContext, forwardRef, useContext, useEffect, useImperativeHandle} from 'react';
import {createAccordion} from '@agnos-ui/core';

export type AccordionItemContext = AdaptSlotContentProps<AccordionItemCoreContext>;
export type AccordionItemWidget = AdaptWidgetSlots<AccordionItemCoreWidget>;
export type AccordionItemProps = WidgetProps<AccordionItemWidget>;
export type AccordionItemState = WidgetProps<AccordionItemWidget>;

export type AccordionWidget = AdaptWidgetSlots<ReturnType<typeof createAccordion>>;
export type AccordionProps = WidgetProps<AccordionWidget>;
export type AccordionState = WidgetProps<AccordionWidget>;

const AccordionDIContext: React.Context<Partial<AccordionCoreApi>> = createContext({});
const DefaultSlotStructure = (slotContext: AccordionItemContext) => {
	const collapseSetRef = useDirective(slotContext.widget.directives.collapseDirective);
	return (
		<>
			<h2 className={`accordion-header ${slotContext.state.itemHeaderClass}`}>
				<button
					type="button"
					id={`${slotContext.state.itemId}-toggle`}
					onClick={slotContext.widget.actions.click}
					className={`accordion-button ${slotContext.state.itemButtonClass} ${slotContext.state.itemCollapsed ? 'collapsed' : ''}`}
					disabled={slotContext.state.itemDisabled}
					aria-controls={`${slotContext.state.itemId}-collapse`}
					aria-disabled={slotContext.state.itemDisabled}
					aria-expanded={!slotContext.state.itemCollapsed}
				>
					<Slot slotContent={slotContext.state.slotItemHeader} props={slotContext}></Slot>
				</button>
			</h2>
			{slotContext.state.shouldBeInDOM ? (
				<div
					className={`accordion-collapse ${slotContext.state.itemCollapseClass}`}
					id={`${slotContext.state.itemId}-collapse`}
					aria-labelledby={`${slotContext.state.itemId}-toggle`}
					ref={collapseSetRef}
				>
					<div className={`accordion-body ${slotContext.state.itemBodyClass}`}>
						<Slot slotContent={slotContext.state.slotItemBody} props={slotContext}></Slot>
					</div>
				</div>
			) : null}
		</>
	);
};
const defaultConfig: Partial<AccordionItemProps> = {
	slotItemStructure: DefaultSlotStructure,
};
export const AccordionItem = forwardRef(function AccordionItem(props: PropsWithChildren<Partial<AccordionItemProps>>, ref) {
	const {registerItem} = useContext(AccordionDIContext);
	const [state, widget] = useWidgetWithConfig(registerItem as WidgetFactory<AccordionItemCoreWidget>, props, null, {
		...defaultConfig,
	});
	const slotContext: AccordionItemContext = {
		state,
		widget: widget,
	};
	const refSetAccordionItem = useDirective(widget.directives.accordionItemDirective);
	useImperativeHandle(ref, () => widget.api, []);
	useEffect(() => {
		widget.api.initDone();
	}, []);
	return (
		<div className={`accordion-item ${state.itemClass}`} id={state.itemId} ref={refSetAccordionItem}>
			<Slot slotContent={state.slotItemStructure} props={slotContext} />
		</div>
	);
});

export const Accordion = forwardRef(function Accordion(props: PropsWithChildren<Partial<AccordionProps>>, ref) {
	const [state, widget] = useWidgetWithConfig(createAccordion, props, 'accordion');
	useImperativeHandle(ref, () => widget.api, []);
	const refSetAccordion = useDirective(widget.directives.accordionDirective);
	return (
		<AccordionDIContext.Provider value={widget.api}>
			<div className={`accordion ${state.accordionClass}`} ref={refSetAccordion}>
				{props.children}
			</div>
		</AccordionDIContext.Provider>
	);
});
