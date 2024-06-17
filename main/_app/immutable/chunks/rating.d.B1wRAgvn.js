const t=`import type { WidgetFactory } from '@agnos-ui/angular-headless';
import type { RatingProps, RatingWidget } from './rating.gen';
export type * from './rating.gen';
export declare const createRating: WidgetFactory<RatingWidget>;
export declare const getRatingDefaultConfig: () => RatingProps;
`;export{t as default};
