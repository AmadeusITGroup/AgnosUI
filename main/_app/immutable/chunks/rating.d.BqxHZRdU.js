const t=`import type { RatingApi, RatingDirectives, StarContext, RatingState as CoreState, RatingProps as CoreProps } from '@agnos-ui/core/components/rating';
import type { SlotContent, Widget, WidgetFactory } from '@agnos-ui/core/types';
export * from '@agnos-ui/core/components/rating';
interface RatingExtraProps {
    /**
     * The template to override the way each star is displayed.
     *
     * @defaultValue
     * \`\`\`ts
     * ({fill}: StarContext) => String.fromCharCode(fill === 100 ? 9733 : 9734)
     * \`\`\`
     */
    star: SlotContent<StarContext>;
}
export interface RatingState extends CoreState, RatingExtraProps {
}
export interface RatingProps extends CoreProps, RatingExtraProps {
}
export type RatingWidget = Widget<RatingProps, RatingState, RatingApi, object, RatingDirectives>;
/**
 * Retrieve a shallow copy of the default Rating config
 * @returns the default Rating config
 */
export declare function getRatingDefaultConfig(): RatingProps;
/**
 * Create a RatingWidget with given config props
 * @param config - an optional rating config
 * @returns a RatingWidget
 */
export declare const createRating: WidgetFactory<RatingWidget>;
`;export{t as default};
