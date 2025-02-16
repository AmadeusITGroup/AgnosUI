const t=`import { type Ref } from 'react';
import type { RatingApi, RatingProps } from './rating.gen';
/**
 * Rating component that displays a series of stars based on the provided state.
 *
 * @param props - The properties for the Rating component.
 * @returns The rendered Rating component.
 *
 * @remarks
 * This component uses the {@link useWidgetWithConfig} hook to initialize and configure the rating widget.
 * It applies directives to the container and individual stars for styling and behavior.
 *
 */
export declare function Rating(props: Partial<RatingProps> & {
    ref?: Ref<RatingApi>;
}): import("react/jsx-runtime").JSX.Element;
`;export{t as default};
