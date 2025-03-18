const e=`import type { CarouselApi, CarouselProps } from './carousel.gen';
import type { Ref } from 'react';
/**
 * Carousel component that uses a forward ref to expose an API.
 *
 * This component utilizes the {@link useWidgetWithConfig} hook to create a carousel widget
 * and the {@link https://react.dev/reference/react/useImperativeHandle | useImperativeHandle} hook to expose the widget's API via the ref.
 *
 * @template SlideData - The type of data used by each slide in the carousel.
 *
 * @param props - partial properties of the CarouselProps interface.
 * @param props.ref - forwarded reference to the CarouselApi.
 * @param props.children - content of the carousel
 *
 * @returns a JSX element that renders the Carousel component with navigation arrows and indicators.
 */
export declare function Carousel<SlideData extends {
    id: string;
}>({ ref, ...props }: Partial<CarouselProps<SlideData>> & {
    ref?: Ref<CarouselApi>;
}): import("react/jsx-runtime").JSX.Element;
`;export{e as default};
