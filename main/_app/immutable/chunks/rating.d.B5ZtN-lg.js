const t=`import type { AdaptWidgetSlots, WidgetFactory, WidgetProps, WidgetState } from '@agnos-ui/react-headless/types';
export * from '@agnos-ui/react-headless/components/rating';
export type RatingWidget = AdaptWidgetSlots<import('@agnos-ui/core-bootstrap/components/rating').RatingWidget>;
export type RatingProps = WidgetProps<RatingWidget>;
export type RatingState = WidgetState<RatingWidget>;
export declare const createRating: WidgetFactory<RatingWidget>;
export declare function Rating(props: Partial<RatingProps>): import("react/jsx-runtime").JSX.Element;
`;export{t as default};
