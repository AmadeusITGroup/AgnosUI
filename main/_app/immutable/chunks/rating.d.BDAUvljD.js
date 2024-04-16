const t=`import type { AdaptWidgetSlots, WidgetProps, WidgetState, WidgetFactory } from '@agnos-ui/angular-headless';
export * from '@agnos-ui/core-bootstrap/components/rating';
export type RatingWidget = AdaptWidgetSlots<import('@agnos-ui/core-bootstrap/components/rating').RatingWidget>;
export type RatingProps = WidgetProps<RatingWidget>;
export type RatingState = WidgetState<RatingWidget>;
export declare const createRating: WidgetFactory<RatingWidget>;
`;export{t as default};
