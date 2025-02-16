const r=`import type { ProgressbarContext, ProgressbarProps } from './progressbar.gen';
/**
 * Renders a progress bar component with customizable appearance and behavior.
 *
 * @param slotContext - The context containing the state and properties for the progress bar.
 *
 * @returns The rendered progress bar component.
 */
export declare const ProgressbarDefaultSlotStructure: (slotContext: ProgressbarContext) => import("react/jsx-runtime").JSX.Element;
/**
 * Progressbar component that utilizes the {@link useWidgetWithConfig} hook to create a progress bar widget.
 *
 * @param props - The properties to configure the progress bar.
 *
 * @returns A div element containing the progress bar with appropriate ARIA directives and slot content.
 */
export declare const Progressbar: (props: Partial<ProgressbarProps>) => import("react/jsx-runtime").JSX.Element;
`;export{r as default};
