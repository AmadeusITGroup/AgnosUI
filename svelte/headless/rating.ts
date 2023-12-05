import type {WidgetFactory, WidgetProps, WidgetState} from '@agnos-ui/core/types';
import type {AdaptWidgetSlots, WidgetPropsSlots} from './slotTypes';

export type RatingWidget = AdaptWidgetSlots<import('@agnos-ui/core/rating').RatingWidget>;
export type RatingProps = WidgetProps<RatingWidget>;
export type RatingState = WidgetState<RatingWidget>;
export type RatingSlots = WidgetPropsSlots<RatingProps>;
import {createRating as coreCreateRating} from '@agnos-ui/core/rating';
export const createRating: WidgetFactory<RatingWidget> = coreCreateRating as any;

export type {StarContext} from '@agnos-ui/core/rating';
