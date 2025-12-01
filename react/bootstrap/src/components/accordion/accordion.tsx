import {Slot} from '@agnos-ui/react-headless/slot';
import type {Directive} from '@agnos-ui/react-headless/types';
import {classDirective, useDirectives} from '@agnos-ui/react-headless/utils/directive';
import type {Context, ForwardedRef, JSX, PropsWithChildren, Ref} from 'react';
import {createContext, createElement, useContext, useEffect, useId, useImperativeHandle} from 'react';
import {useWidget} from '../../config';
import type {AccordionApi, AccordionItemApi, AccordionItemContext, AccordionItemProps, AccordionProps} from './accordion.gen';
import {createAccordion} from './accordion.gen';

const Header = (props: PropsWithChildren<{headingLevel: 1 | 2 | 3 | 4 | 5 | 6; directive: Directive}>) => {
	const HeadingTag = `h${props.headingLevel}` as keyof JSX.IntrinsicElements;
	return createElement(HeadingTag, {...useDirectives([classDirective, 'accordion-header'], props.directive)}, props.children);
};

const ItemContent = (slotContext: AccordionItemContext) => (
	<div {...useDirectives([classDirective, 'accordion-collapse'], slotContext.directives.bodyContainerDirective)}>
		<div {...useDirectives([classDirective, 'accordion-body'], slotContext.directives.bodyDirective)}>
			<Slot slotContent={slotContext.state.children} props={slotContext} />
		</div>
	</div>
);

const AccordionDIContext: Context<Partial<AccordionApi>> = createContext({});
/**
 * Renders the default slot structure for an accordion item.
 *
 * @param slotContext - The context containing state and directives for the accordion item.
 * @returns The JSX element representing the accordion item's default slot structure.
 */
export const AccordionItemDefaultSlotStructure = (slotContext: AccordionItemContext) => (
	<>
		<Header directive={slotContext.directives.headerDirective} headingLevel={slotContext.state.headingLevel}>
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
 * - {@link useWidget} to initialize the widget context.
 * - {@link https://react.dev/reference/react/useImperativeHandle | useImperativeHandle} to expose the `api` to the parent component.
 * - {@link https://react.dev/reference/react/useEffect | useEffect} to call `api.initDone()` after the component mounts.
 *
 * The component also uses {@link useDirectives} to apply directives to the rendered `div` element.
 *
 * @see {@link useWidget}
 * @see {@link useDirectives}
 */
export function AccordionItem({ref, ...props}: Partial<AccordionItemProps> & {ref?: Ref<AccordionItemApi>}) {
	const {registerItem} = useContext(AccordionDIContext);
	const id = useId();
	const widgetContext = useWidget(registerItem!, props, {
		structure: AccordionItemDefaultSlotStructure,
		id,
	});
	const {state, api, directives} = widgetContext;
	useImperativeHandle(ref, () => api, [api]);
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
 * It leverages the {@link useWidget} hook to create the accordion widget and
 * {@link https://react.dev/reference/react/useImperativeHandle | useImperativeHandle} to bind the widget API to the ref.
 *
 * @param props - The properties for the Accordion component.
 * @param props.ref - The ref to be forwarded to the Accordion API.
 *
 * @returns The rendered Accordion component.
 *
 */
export function Accordion({ref, ...props}: PropsWithChildren<Partial<AccordionProps>> & {ref?: ForwardedRef<AccordionApi>}) {
	const widget = useWidget(createAccordion, props);
	useImperativeHandle(ref, () => widget.api, [widget.api]);
	return (
		<AccordionDIContext value={widget.api}>
			<div {...useDirectives([classDirective, 'accordion'], widget.directives.accordionDirective)}>{props.children}</div>
		</AccordionDIContext>
	);
}
