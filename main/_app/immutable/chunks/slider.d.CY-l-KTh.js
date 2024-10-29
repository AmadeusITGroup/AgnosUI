const e=`import type { PropsWithChildren } from 'react';
import type { SliderContext, SliderProps, SliderSlotHandleContext } from './slider.gen';
/**
 * A functional component that renders a button element with a directive applied to it.
 * The directive is provided through the \`slotContext\` parameter.
 *
 * @param {SliderSlotHandleContext} slotContext - The context object containing the directives and item for the slider handle.
 * @returns {JSX.Element} A button element with the applied directive.
 */
export declare const SliderDefaultSlotHandle: (slotContext: SliderSlotHandleContext) => import("react/jsx-runtime").JSX.Element;
/**
 * Renders the default slot structure for the Slider component.
 *
 * @param {SliderContext} slotContext - The context object containing state and directives for the slider.
 * @returns {JSX.Element} The JSX element representing the default slot structure.
 *
 */
export declare const SliderDefaultSlotStructure: (slotContext: SliderContext) => import("react/jsx-runtime").JSX.Element;
/**
 * Slider component that integrates with a widget context and renders a slot structure.
 *
 * @param {PropsWithChildren<Partial<SliderProps>>} props - The properties for the Slider component.
 * @returns {JSX.Element} The rendered Slider component.
 *
 * The Slider component uses the {@link useWidgetWithConfig} hook to create a widget context with the provided
 * configuration. It then applies the \`sliderDirective\` to a \`div\` element and renders the slot content
 * using the \`Slot\` component.
 */
export declare function Slider(props: PropsWithChildren<Partial<SliderProps>>): import("react/jsx-runtime").JSX.Element;
`;export{e as default};
