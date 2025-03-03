import {Slot} from '@agnos-ui/react-headless/slot';
import type {Directive} from '@agnos-ui/react-headless/types';
import {classDirective, useDirectives} from '@agnos-ui/react-headless/utils/directive';
import type {ForwardedRef, PropsWithChildren, Ref} from 'react';
import {createContext, useContext, useEffect, useImperativeHandle} from 'react';
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
			<Slot slotContent={slotContext.state.children} props={slotContext} />
		</div>
	</div>
);

const AccordionDIContext: React.Context<Partial<AccordionApi>> = createContext({});
/**
 * Renders the default slot structure for an accordion item.
 *
 * @param slotContext - The context containing state and directives for the accordion item.
 * @returns The JSX element representing the accordion item's default slot structure.
 */
export const AccordionItemDefaultSlotStructure = (slotContext: AccordionItemContext) => (
	<>
		<Header directive={slotContext.directives.headerDirective} headerTag={slotContext.state.headingTag}>
			<button {...useDirectives([classDirective, 'accordion-button'], slotContext.directives.buttonDirective)}>
				<Slot slotContent={slotContext.state.header} props={slotContext} />
			</button>
		</Header>
		{slotContext.state.shouldBeInDOM && <ItemContent {...slotContext} />}
	</>
);

/**
 * AccordionItem component is a part of the Accordion component suite.
 *
 * @param props - The properties for the AccordionItem component.
 * @param props.ref - The forwarded ref to the AccordionItemApi.
 *
 * @returns The rendered AccordionItem component.
 * @remarks
 * This component uses several hooks:
 * - {@link https://react.dev/reference/react/useContext | useContext} to get the `registerItem` function from {@link AccordionDIContext}.
 * - {@link useWidgetWithConfig} to initialize the widget context.
 * - {@link https://react.dev/reference/react/useImperativeHandle | useImperativeHandle} to expose the `api` to the parent component.
 * - {@link https://react.dev/reference/react/useEffect | useEffect} to call `api.initDone()` after the component mounts.
 *
 * The component also uses {@link useDirectives} to apply directives to the rendered `div` element.
 *
 * @see {@link useWidgetWithConfig}
 * @see {@link useDirectives}
 */
export function AccordionItem(props: Partial<AccordionItemProps> & {ref?: Ref<AccordionItemApi>}) {
	const {registerItem} = useContext(AccordionDIContext);
	const widgetContext = useWidgetWithConfig(registerItem!, props, null, {
		structure: AccordionItemDefaultSlotStructure,
	});
	const {state, api, directives} = widgetContext;
	useImperativeHandle(props.ref, () => api, [api]);
	useEffect(() => {
		api.initDone();
	}, [api]);
	return (
		<div {...useDirectives([classDirective, `accordion-item ${state.className}`], directives.itemDirective)}>
			<Slot slotContent={state.structure} props={widgetContext} />
		</div>
	);
}

/**
 * Accordion component that provides a collapsible content container.
 *
 * This component uses a forward ref to expose the Accordion API to parent components.
 * It leverages the {@link useWidgetWithConfig} hook to create the accordion widget and
 * {@link https://react.dev/reference/react/useImperativeHandle | useImperativeHandle} to bind the widget API to the ref.
 *
 * @param props - The properties for the Accordion component.
 * @param props.ref - The ref to be forwarded to the Accordion API.
 *
 * @returns The rendered Accordion component.
 *
 */
export function Accordion(props: PropsWithChildren<Partial<AccordionProps>> & {ref?: ForwardedRef<AccordionApi>}) {
	const widget = useWidgetWithConfig(createAccordion, props, 'accordion');
	useImperativeHandle(props.ref, () => widget.api, [widget.api]);
	return (
		<AccordionDIContext value={widget.api}>
			<div {...useDirectives([classDirective, 'accordion'], widget.directives.accordionDirective)}>{props.children}</div>
		</AccordionDIContext>
	);
}
