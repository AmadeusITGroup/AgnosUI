const t=`export * from '@agnos-ui/core/components/rating';
import type { AdaptWidgetSlots, WidgetFactory, WidgetProps, WidgetState } from '../../types';
export type RatingWidget = AdaptWidgetSlots<import('@agnos-ui/core/components/rating').RatingWidget>;
export type RatingProps = WidgetProps<RatingWidget>;
export type RatingState = WidgetState<RatingWidget>;
export declare const createRating: WidgetFactory<RatingWidget>;
`;export{t as default};
