const e=`import type { PropsWithChildren } from 'react';
import type { SliderContext, SliderProps, SliderSlotHandleContext, SliderSlotTickContext } from './slider.gen';
/**
 * A functional component that renders a button element with a directive applied to it.
 * The directive is provided through the \`slotContext\` parameter.
 *
 * @param slotContext - The context object containing the directives and item for the slider handle.
 * @returns A button element with the applied directive.
 */
export declare const SliderDefaultSlotHandle: (slotContext: SliderSlotHandleContext) => import("react/jsx-runtime").JSX.Element;
/**
 * A functional component that renders a tick element with a directive applied to it.
 * The directive is provided through the \`slotContext\` parameter.
 *
 * @param slotContext - The context object containing the directives and item for the slider tick.
 * @returns A tick element with the applied directive.
 */
export declare const SliderDefaultTick: (slotContext: SliderSlotTickContext) => import("react/jsx-runtime").JSX.Element;
/**
 * Renders the default slot structure for the Slider component.
 *
 * @param slotContext - The context object containing state and directives for the slider.
 * @returns The JSX element representing the default slot structure.
 *
 */
export declare const SliderDefaultSlotStructure: (slotContext: SliderContext) => import("react/jsx-runtime").JSX.Element;
/**
 * Slider component that integrates with a widget context and renders a slot structure.
 *
 * @param props - The properties for the Slider component.
 * @returns The rendered Slider component.
 *
 * The Slider component uses the {@link useWidget} hook to create a widget context with the provided
 * configuration. It then applies the \`sliderDirective\` to a \`div\` element and renders the slot content
 * using the \`Slot\` component.
 */
export declare function Slider(props: PropsWithChildren<Partial<SliderProps>>): import("react/jsx-runtime").JSX.Element;
`;export{e as default};
