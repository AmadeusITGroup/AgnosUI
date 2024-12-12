const e=`import type { ForwardedRef, PropsWithChildren, Ref } from 'react';
import type { AccordionApi, AccordionItemApi, AccordionItemContext, AccordionItemProps, AccordionProps } from './accordion.gen';
/**
 * Renders the default slot structure for an accordion item.
 *
 * @param slotContext - The context containing state and directives for the accordion item.
 * @returns The JSX element representing the accordion item's default slot structure.
 */
export declare const AccordionItemDefaultSlotStructure: (slotContext: AccordionItemContext) => import("react/jsx-runtime").JSX.Element;
/**
 * AccordionItem component is a part of the Accordion component suite.
 *
 * @param props - The properties for the AccordionItem component.
 * @param props.ref - The forwarded ref to the AccordionItemApi.
 *
 * @returns The rendered AccordionItem component.
 * @remarks
 * This component uses several hooks:
 * - {@link https://react.dev/reference/react/useContext | useContext} to get the \`registerItem\` function from {@link AccordionDIContext}.
 * - {@link useWidgetWithConfig} to initialize the widget context.
 * - {@link https://react.dev/reference/react/useImperativeHandle | useImperativeHandle} to expose the \`api\` to the parent component.
 * - {@link https://react.dev/reference/react/useEffect | useEffect} to call \`api.initDone()\` after the component mounts.
 *
 * The component also uses {@link useDirectives} to apply directives to the rendered \`div\` element.
 *
 * @see {@link useWidgetWithConfig}
 * @see {@link useDirectives}
 */
export declare function AccordionItem(props: Partial<AccordionItemProps> & {
    ref?: Ref<AccordionItemApi>;
}): import("react/jsx-runtime").JSX.Element;
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
export declare function Accordion(props: PropsWithChildren<Partial<AccordionProps>> & {
    ref?: ForwardedRef<AccordionApi>;
}): import("react/jsx-runtime").JSX.Element;
`;export{e as default};