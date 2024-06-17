const t=`import type { WidgetPropsSlots, WidgetFactory } from '@agnos-ui/svelte-headless/types';
import type { RatingWidget, RatingProps } from './rating.gen';
export type * from './rating.gen';
export declare const createRating: WidgetFactory<RatingWidget>;
export declare const getRatingDefaultConfig: () => RatingProps;
export interface RatingSlots extends WidgetPropsSlots<RatingProps> {
}
`;export{t as default};
