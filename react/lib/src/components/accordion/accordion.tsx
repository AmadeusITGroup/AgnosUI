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
import {useWidgetWithConfig} from '../../config';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import type {Directive, WidgetFactory} from '@agnos-ui/react-headless/types';

export * from '@agnos-ui/react-headless/components/accordion';

type AccordionTag = `h${1 | 2 | 3 | 4 | 5 | 6}`;

const Header = (props: PropsWithChildren<{headerTag: string; directive: Directive}>) => {
	const re = new RegExp('^h[1-6]$');
	const Heading = (re.test(props.headerTag) ? props.headerTag : 'h2') as AccordionTag;
	return (
		<Heading className="accordion-header" {...useDirective(props.directive)}>
			{props.children}
		</Heading>
	);
};

const AccordionDIContext: React.Context<Partial<AccordionApi>> = createContext({});
const DefaultSlotStructure = (slotContext: AccordionItemContext) => {
	const bodyContainerSetRef = useDirective(slotContext.widget.directives.bodyContainerDirective);
	const bodySetRef = useDirective(slotContext.widget.directives.bodyDirective);
	return (
		<>
			<Header directive={slotContext.widget.directives.headerDirective} headerTag={slotContext.state.itemHeadingTag}>
				<button className="accordion-button" {...useDirective(slotContext.widget.directives.buttonDirective)}>
					<Slot slotContent={slotContext.state.slotItemHeader} props={slotContext}></Slot>
				</button>
			</Header>
			{slotContext.state.shouldBeInDOM ? (
				<div className="accordion-collapse" {...bodyContainerSetRef}>
					<div className="accordion-body" {...bodySetRef}>
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
		useImperativeHandle(ref, () => widget.api, []);
		useEffect(() => {
			widget.api.initDone();
		}, []);
		return (
			<div className={`accordion-item ${state.itemClass}`} {...useDirective(widget.directives.accordionItemDirective)}>
				<Slot slotContent={state.slotItemStructure} props={slotContext} />
			</div>
		);
	},
);

export const Accordion: ForwardRefExoticComponent<PropsWithChildren<Partial<AccordionProps>> & RefAttributes<AccordionApi>> = forwardRef(
	function Accordion(props: PropsWithChildren<Partial<AccordionProps>>, ref: ForwardedRef<AccordionApi>) {
		const widget = useWidgetWithConfig(createAccordion, props, 'accordion')[1];
		useImperativeHandle(ref, () => widget.api, []);
		return (
			<AccordionDIContext.Provider value={widget.api}>
				<div className="accordion" {...useDirective(widget.directives.accordionDirective)}>
					{props.children}
				</div>
			</AccordionDIContext.Provider>
		);
	},
);
