const t=`import type { SlotContent } from './types';
/**
 * The React Slot component, allowing to extensively customize widgets.
 *
 * The input slotContent can be a react component, a function or jsx.
 *
 * @param parameter - the react component parameter
 * @param parameter.slotContent - the slot content
 * @param parameter.props - the react component props
 * @returns the slot component
 */
export declare const Slot: <Props extends object>({ slotContent, props }: {
    slotContent: SlotContent<Props>;
    props: Props;
}) => import("react/jsx-runtime").JSX.Element;
`;export{t as default};
