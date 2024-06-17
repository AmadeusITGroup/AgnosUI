import type {WidgetPropsSlots, WidgetFactory} from '@agnos-ui/svelte-headless/types';
import {createRating as coreCreateRating, getRatingDefaultConfig as coreGetRatingDefaultConfig} from '@agnos-ui/core-bootstrap/components/rating';
import type {RatingWidget, RatingProps} from './rating.gen';

export type * from './rating.gen';
export const createRating: WidgetFactory<RatingWidget> = coreCreateRating as any;
export const getRatingDefaultConfig: () => RatingProps = coreGetRatingDefaultConfig as any;

export interface RatingSlots extends WidgetPropsSlots<RatingProps> {}
