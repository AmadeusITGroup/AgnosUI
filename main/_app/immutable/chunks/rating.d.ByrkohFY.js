const t=`import type { RatingActions, RatingDirectives, StarContext, RatingState as CoreState, RatingProps as CoreProps } from '@agnos-ui/core/components/rating';
import type { SlotContent, Widget, WidgetFactory } from '@agnos-ui/core/types';
export * from '@agnos-ui/core/components/rating';
interface RatingExtraProps {
    /**
     * The template to override the way each star is displayed.
     */
    star: SlotContent<StarContext>;
}
export interface RatingState extends CoreState, RatingExtraProps {
}
export interface RatingProps extends CoreProps, RatingExtraProps {
}
export type RatingWidget = Widget<RatingProps, RatingState, object, RatingActions, RatingDirectives>;
/**
 * Retrieve a shallow copy of the default Rating config
 * @returns the default Rating config
 */
export declare function getRatingDefaultConfig(): RatingProps;
/**
 * Create a Progressbar with given config props
 * @param config - an optional progressbar config
 * @returns a ProgressbarWidget
 */
export declare const createRating: WidgetFactory<RatingWidget>;
`;export{t as default};
