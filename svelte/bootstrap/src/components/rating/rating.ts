export * from '@agnos-ui/core-bootstrap/components/rating';

import type {AdaptWidgetSlots, WidgetFactory, WidgetProps, WidgetState, PropType} from '@agnos-ui/svelte-headless/types';
import {createRating as coreCreateRating} from '@agnos-ui/core-bootstrap/components/rating';
import type {RatingWidget as CoreWidget} from '@agnos-ui/core-bootstrap/components/rating';

// widget
export interface RatingWidget extends AdaptWidgetSlots<CoreWidget> {}
export interface RatingProps extends WidgetProps<RatingWidget> {}
export interface RatingState extends WidgetState<RatingWidget> {}
export interface RatingApi extends PropType<RatingWidget, 'api'> {}
// factory
export const createRating: WidgetFactory<RatingWidget> = coreCreateRating as any;
