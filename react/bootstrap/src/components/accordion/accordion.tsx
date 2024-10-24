import {Slot} from '@agnos-ui/react-headless/slot';
import type {Directive} from '@agnos-ui/react-headless/types';
import {classDirective, useDirectives} from '@agnos-ui/react-headless/utils/directive';
import type {ForwardRefExoticComponent, ForwardedRef, PropsWithChildren, RefAttributes} from 'react';
import {createContext, forwardRef, useContext, useEffect, useImperativeHandle} from 'react';
import {useWidgetWithConfig} from '../../config';
import type {AccordionApi, AccordionItemApi, AccordionItemContext, AccordionItemProps, AccordionProps} from './accordion.gen';
import {createAccordion} from './accordion.gen';

type AccordionTag = `h${1 | 2 | 3 | 4 | 5 | 6}`;

const Header = (props: PropsWithChildren<{headerTag: string; directive: Directive}>) => {
	const re = new RegExp('^h[1-6]$');
	const Heading = (re.test(props.headerTag) ? props.headerTag : 'h2') as AccordionTag;
	return <Heading {...useDirectives([classDirective, 'accordion-header'], props.directive)}>{props.children}</Heading>;
};

const ItemContent = (slotContext: AccordionItemContext) => (
	<div {...useDirectives([classDirective, 'accordion-collapse'], slotContext.directives.bodyContainerDirective)}>
		<div {...useDirectives([classDirective, 'accordion-body'], slotContext.directives.bodyDirective)}>
			<Slot slotContent={slotContext.state.children} props={slotContext}></Slot>
		</div>
	</div>
);

const AccordionDIContext: React.Context<Partial<AccordionApi>> = createContext({});
const DefaultSlotStructure = (slotContext: AccordionItemContext) => (
	<>
		<Header directive={slotContext.directives.headerDirective} headerTag={slotContext.state.headingTag}>
			<button {...useDirectives([classDirective, 'accordion-button'], slotContext.directives.buttonDirective)}>
				<Slot slotContent={slotContext.state.header} props={slotContext}></Slot>
			</button>
		</Header>
		{slotContext.state.shouldBeInDOM && <ItemContent {...slotContext} />}
	</>
);

const defaultConfig: Partial<AccordionItemProps> = {
	structure: DefaultSlotStructure,
};
export const AccordionItem: ForwardRefExoticComponent<Partial<AccordionItemProps> & RefAttributes<AccordionItemApi>> = forwardRef(
	function AccordionItem(props: Partial<AccordionItemProps>, ref: ForwardedRef<AccordionItemApi>) {
		const {registerItem} = useContext(AccordionDIContext);
		const widgetContext = useWidgetWithConfig(registerItem!, props, null, defaultConfig);
		const {state, api, directives} = widgetContext;
		useImperativeHandle(ref, () => api, []);
		useEffect(() => {
			api.initDone();
		}, []);
		return (
			<div {...useDirectives([classDirective, `accordion-item ${state.className}`], directives.itemDirective)}>
				<Slot slotContent={state.structure} props={widgetContext} />
			</div>
		);
	},
);

export const Accordion: ForwardRefExoticComponent<PropsWithChildren<Partial<AccordionProps>> & RefAttributes<AccordionApi>> = forwardRef(
	function Accordion(props: PropsWithChildren<Partial<AccordionProps>>, ref: ForwardedRef<AccordionApi>) {
		const widget = useWidgetWithConfig(createAccordion, props, 'accordion');
		useImperativeHandle(ref, () => widget.api, []);
		return (
			<AccordionDIContext.Provider value={widget.api}>
				<div {...useDirectives([classDirective, 'accordion'], widget.directives.accordionDirective)}>{props.children}</div>
			</AccordionDIContext.Provider>
		);
	},
);
