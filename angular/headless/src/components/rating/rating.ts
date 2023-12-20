import type {AdaptWidgetSlots, WidgetProps, WidgetState, WidgetFactory} from '../../types';
import {createRating as coreCreateRating} from '@agnos-ui/core/components/rating';

export * from '@agnos-ui/core/components/rating';

export type RatingWidget = AdaptWidgetSlots<import('@agnos-ui/core/components/rating').RatingWidget>;
export type RatingProps = WidgetProps<RatingWidget>;
export type RatingState = WidgetState<RatingWidget>;
export const createRating: WidgetFactory<RatingWidget> = coreCreateRating as any;
