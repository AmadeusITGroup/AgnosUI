import type {WidgetProps, createRating} from '@agnos-ui/core';
import type {AdaptWidgetSlots} from '../slot/slot';
import type {WidgetPropsSlots} from '../utils';

export type RatingWidget = AdaptWidgetSlots<ReturnType<typeof createRating>>;
export type RatingProps = WidgetProps<RatingWidget>;
export type RatingSlots = WidgetPropsSlots<RatingProps>;
