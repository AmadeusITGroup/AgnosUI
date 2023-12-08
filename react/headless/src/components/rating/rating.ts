export * from '@agnos-ui/core/components/rating';

import {createRating as coreCreateRating} from '@agnos-ui/core/components/rating';
import type {AdaptWidgetSlots, WidgetFactory, WidgetProps, WidgetState} from '../../types';

export type RatingWidget = AdaptWidgetSlots<import('@agnos-ui/core/components/rating').RatingWidget>;
export type RatingProps = WidgetProps<RatingWidget>;
export type RatingState = WidgetState<RatingWidget>;
export const createRating: WidgetFactory<RatingWidget> = coreCreateRating as any;
