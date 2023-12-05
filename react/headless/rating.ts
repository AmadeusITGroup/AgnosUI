import type {WidgetFactory, WidgetProps, WidgetState} from '@agnos-ui/core/types';
import type {AdaptWidgetSlots} from './slotTypes';

export type {StarContext} from '@agnos-ui/core/rating';

export type RatingWidget = AdaptWidgetSlots<import('@agnos-ui/core/rating').RatingWidget>;
export type RatingProps = WidgetProps<RatingWidget>;
export type RatingState = WidgetState<RatingWidget>;
import {createRating as coreCreateRating} from '@agnos-ui/core/rating';
export const createRating: WidgetFactory<RatingWidget> = coreCreateRating as any;
