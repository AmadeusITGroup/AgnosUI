const t=`import type { AdaptWidgetSlots, WidgetPropsSlots, WidgetFactory, WidgetProps, WidgetState } from '@agnos-ui/svelte-headless/types';
export * from '@agnos-ui/core-bootstrap/components/rating';
export type RatingWidget = AdaptWidgetSlots<import('@agnos-ui/core-bootstrap/components/rating').RatingWidget>;
export type RatingProps = WidgetProps<RatingWidget>;
export type RatingState = WidgetState<RatingWidget>;
export type RatingSlots = WidgetPropsSlots<RatingProps>;
export declare const createRating: WidgetFactory<RatingWidget>;
`;export{t as default};
