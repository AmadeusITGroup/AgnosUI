import type {AdaptWidgetSlots, WidgetPropsSlots, WidgetFactory, WidgetProps, WidgetState} from '../../types';

export * from '@agnos-ui/core/components/rating';

export type RatingWidget = AdaptWidgetSlots<import('@agnos-ui/core/components/rating').RatingWidget>;
export type RatingProps = WidgetProps<RatingWidget>;
export type RatingState = WidgetState<RatingWidget>;
export type RatingSlots = WidgetPropsSlots<RatingProps>;
import {createRating as coreCreateRating} from '@agnos-ui/core/components/rating';
export const createRating: WidgetFactory<RatingWidget> = coreCreateRating as any;
