const t=`export * from '@agnos-ui/core-bootstrap/components/rating';
import type { AdaptWidgetSlots, WidgetPropsSlots, WidgetFactory, WidgetProps, WidgetState, PropType } from '@agnos-ui/svelte-headless/types';
import type { RatingWidget as CoreWidget } from '@agnos-ui/core-bootstrap/components/rating';
export interface RatingWidget extends AdaptWidgetSlots<CoreWidget> {
}
export interface RatingProps extends WidgetProps<RatingWidget> {
}
export interface RatingState extends WidgetState<RatingWidget> {
}
export interface RatingApi extends PropType<RatingWidget, 'api'> {
}
export interface RatingSlots extends WidgetPropsSlots<RatingProps> {
}
export declare const createRating: WidgetFactory<RatingWidget>;
`;export{t as default};
