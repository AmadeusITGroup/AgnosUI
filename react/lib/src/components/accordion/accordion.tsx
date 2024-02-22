import {createAccordion} from '@agnos-ui/react-headless/components/accordion';
import type {
	AccordionApi,
	AccordionItemApi,
	AccordionItemContext,
	AccordionItemProps,
	AccordionItemWidget,
	AccordionProps,
} from '@agnos-ui/react-headless/components/accordion';
import {Slot} from '@agnos-ui/react-headless/slot';
import type {ForwardRefExoticComponent, ForwardedRef, PropsWithChildren, RefAttributes} from 'react';
import {createContext, forwardRef, useContext, useEffect, useImperativeHandle} from 'react';
import {useWidgetWithConfig} from '@agnos-ui/react-headless/config';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import type {WidgetFactory} from '@agnos-ui/react-headless/types';

export * from '@agnos-ui/react-headless/components/accordion';

const AccordionDIContext: React.Context<Partial<AccordionApi>> = createContext({});
const DefaultSlotStructure = (slotContext: AccordionItemContext) => {
	const collapseSetRef = useDirective(slotContext.widget.directives.collapseDirective);
	const re = new RegExp('^h[1-6]$');
	const Heading: keyof JSX.IntrinsicElements = re.test(slotContext.state.itemHeadingTag)
		? (slotContext.state.itemHeadingTag as keyof JSX.IntrinsicElements)
		: 'h2';
	return (
		<>
			<Heading className={`accordion-header ${slotContext.state.itemHeaderClass}`}>
				<button
					type="button"
					id={`${slotContext.state.itemId}-toggle`}
					onClick={slotContext.widget.actions.click}
					className={`accordion-button ${slotContext.state.itemButtonClass} ${slotContext.state.itemVisible ? '' : 'collapsed'}`}
					disabled={slotContext.state.itemDisabled}
					aria-controls={`${slotContext.state.itemId}-collapse`}
					aria-disabled={slotContext.state.itemDisabled}
					aria-expanded={slotContext.state.itemVisible}
				>
					<Slot slotContent={slotContext.state.slotItemHeader} props={slotContext}></Slot>
				</button>
			</Heading>
			{slotContext.state.shouldBeInDOM ? (
				<div
					className={`accordion-collapse ${slotContext.state.itemBodyContainerClass}`}
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
export const AccordionItem: ForwardRefExoticComponent<PropsWithChildren<Partial<AccordionItemProps>> & RefAttributes<AccordionItemApi>> = forwardRef(
	function AccordionItem(props: PropsWithChildren<Partial<AccordionItemProps>>, ref: ForwardedRef<AccordionItemApi>) {
		const {registerItem} = useContext(AccordionDIContext);
		const [state, widget] = useWidgetWithConfig(registerItem as WidgetFactory<AccordionItemWidget>, props, null, {
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
	},
);

export const Accordion: ForwardRefExoticComponent<PropsWithChildren<Partial<AccordionProps>> & RefAttributes<AccordionApi>> = forwardRef(
	function Accordion(props: PropsWithChildren<Partial<AccordionProps>>, ref: ForwardedRef<AccordionApi>) {
		const [state, widget] = useWidgetWithConfig(createAccordion, props, 'accordion');
		useImperativeHandle(ref, () => widget.api, []);
		const refSetAccordion = useDirective(widget.directives.accordionDirective);
		return (
			<AccordionDIContext.Provider value={widget.api}>
				<div className={`accordion ${state.className}`} ref={refSetAccordion}>
					{props.children}
				</div>
			</AccordionDIContext.Provider>
		);
	},
);
