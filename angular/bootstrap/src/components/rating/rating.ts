import type {WidgetFactory} from '@agnos-ui/angular-headless';
import {createRating as coreCreateRating, getRatingDefaultConfig as coreGetRatingDefaultConfig} from '@agnos-ui/core-bootstrap/components/rating';
import type {RatingProps, RatingWidget} from './rating.gen';

export type * from './rating.gen';
export const createRating: WidgetFactory<RatingWidget> = coreCreateRating as any;
export const getRatingDefaultConfig: () => RatingProps = coreGetRatingDefaultConfig as any;
