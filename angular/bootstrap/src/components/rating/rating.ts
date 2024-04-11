import type {AdaptWidgetSlots, WidgetProps, WidgetState, WidgetFactory} from '@agnos-ui/angular-headless';
import {createRating as coreCreateRating} from '@agnos-ui/core-bootstrap/components/rating';

export * from '@agnos-ui/core-bootstrap/components/rating';

export type RatingWidget = AdaptWidgetSlots<import('@agnos-ui/core-bootstrap/components/rating').RatingWidget>;
export type RatingProps = WidgetProps<RatingWidget>;
export type RatingState = WidgetState<RatingWidget>;
export const createRating: WidgetFactory<RatingWidget> = coreCreateRating as any;
