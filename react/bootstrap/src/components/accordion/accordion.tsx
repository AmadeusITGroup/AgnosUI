import {Slot} from '@agnos-ui/react-headless/slot';
import type {ForwardRefExoticComponent, ForwardedRef, PropsWithChildren, RefAttributes} from 'react';
import {createContext, forwardRef, useContext, useEffect, useImperativeHandle} from 'react';
import {useWidgetWithConfig} from '../../config';
import {useClassDirective, useDirectives} from '@agnos-ui/react-headless/utils/directive';
import type {AdaptSlotContentProps, AdaptWidgetSlots, Directive, WidgetFactory, WidgetProps, WidgetState} from '@agnos-ui/react-headless/types';
import type {AccordionItemApi} from '@agnos-ui/core-bootstrap/components/accordion';
import {createAccordion as coreCreateAccordion} from '@agnos-ui/core-bootstrap/components/accordion';

export * from '@agnos-ui/core-bootstrap/components/accordion';

export type AccordionWidget = AdaptWidgetSlots<import('@agnos-ui/core-bootstrap/components/accordion').AccordionWidget>;
export type AccordionProps = WidgetProps<AccordionWidget>;
export type AccordionState = WidgetState<AccordionWidget>;
export type AccordionApi = AccordionWidget['api'];
export type AccordionItemWidget = AdaptWidgetSlots<import('@agnos-ui/core-bootstrap/components/accordion').AccordionItemWidget>;
export type AccordionItemProps = WidgetProps<AccordionItemWidget>;
export type AccordionItemState = WidgetState<AccordionItemWidget>;
export type AccordionItemContext = AdaptSlotContentProps<import('@agnos-ui/core-bootstrap/components/accordion').AccordionItemContext>;
export const createAccordion: WidgetFactory<AccordionWidget> = coreCreateAccordion as any;

type AccordionTag = `h${1 | 2 | 3 | 4 | 5 | 6}`;

const Header = (props: PropsWithChildren<{headerTag: string; directive: Directive}>) => {
	const re = new RegExp('^h[1-6]$');
	const Heading = (re.test(props.headerTag) ? props.headerTag : 'h2') as AccordionTag;
	return <Heading {...useDirectives([useClassDirective('accordion-header'), props.directive])}>{props.children}</Heading>;
};

const ItemContent = (slotContext: AccordionItemContext) => (
	<div {...useDirectives([useClassDirective('accordion-collapse'), slotContext.widget.directives.bodyContainerDirective])}>
		<div {...useDirectives([useClassDirective('accordion-body'), slotContext.widget.directives.bodyDirective])}>
			<Slot slotContent={slotContext.state.slotItemBody} props={slotContext}></Slot>
		</div>
	</div>
);

const AccordionDIContext: React.Context<Partial<AccordionApi>> = createContext({});
const DefaultSlotStructure = (slotContext: AccordionItemContext) => (
	<>
		<Header directive={slotContext.widget.directives.headerDirective} headerTag={slotContext.state.itemHeadingTag}>
			<button {...useDirectives([useClassDirective('accordion-button'), slotContext.widget.directives.buttonDirective])}>
				<Slot slotContent={slotContext.state.slotItemHeader} props={slotContext}></Slot>
			</button>
		</Header>
		{slotContext.state.shouldBeInDOM && <ItemContent {...slotContext} />}
	</>
);

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
			<div {...useDirectives([useClassDirective(`accordion-item ${state.itemClass}`), widget.directives.accordionItemDirective])}>
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
				<div {...useDirectives([useClassDirective('accordion'), widget.directives.accordionDirective])}>{props.children}</div>
			</AccordionDIContext.Provider>
		);
	},
);
