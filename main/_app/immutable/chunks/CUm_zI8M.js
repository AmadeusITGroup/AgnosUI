const e=`import type { CarouselApi, CarouselContext, CarouselProps } from './carousel.gen';
import type { Ref } from 'react';
/**
 * Renders the default slot navigation for the carousel component.
 *
 * @param widget - The widget context containing the state, api and directives for carousel.
 * @returns The rendered carousel navigation.
 */
export declare const CarouselDefaultNavigation: <SlideData extends {
    id: string;
}>(widget: CarouselContext<SlideData>) => import("react/jsx-runtime").JSX.Element;
/**
 * Renders the default slot structure for the carousel component.
 *
 * @param widget - The widget context containing the state, api and directives for carousel.
 * @returns The rendered carousel structure.
 */
export declare const CarouselDefaultStructure: <SlideData extends {
    id: string;
}>(widget: CarouselContext<SlideData>) => import("react/jsx-runtime").JSX.Element;
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
