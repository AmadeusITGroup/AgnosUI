const n=`import type { Directive, Widget, WidgetFactory } from '../../types';
import type { WidgetsCommonPropsAndState } from '../commonProps';
/**
 * Represents the context for a star in a rating component.
 */
export interface StarContext {
    /**
     * indicates how much the current star is filled, from 0 to 100
     */
    fill: number;
    /**
     * the position of the star in the rating
     */
    index: number;
}
interface RatingCommonPropsAndState extends WidgetsCommonPropsAndState {
    /**
     * The current rating. Could be a decimal value like \`3.75\`.
     *
     * @defaultValue \`0\`
     */
    rating: number;
    /**
     * The maximum rating that can be given.
     *
     * @defaultValue \`10\`
     */
    maxRating: number;
    /**
     * If \`true\`, the rating is disabled.
     *
     * @defaultValue \`false\`
     */
    disabled: boolean;
    /**
     * If \`true\`, the rating can't be changed.
     *
     * @defaultValue \`false\`
     */
    readonly: boolean;
    /**
     * Define if the rating can be reset.
     *
     * If set to true, the user can 'unset' the rating value by cliking on the current rating value.
     *
     * @defaultValue \`true\`
     */
    resettable: boolean;
    /**
     * Allows setting a custom rating tabindex.
     * If the component is disabled, \`tabindex\` will still be set to \`-1\`.
     *
     * @defaultValue \`0\`
     */
    tabindex: number;
    /**
     * The aria label
     *
     * @defaultValue \`'Rating'\`
     */
    ariaLabel: string;
    /**
     * The aria labelled by
     *
     * @defaultValue \`''\`
     */
    ariaLabelledBy: string;
}
/**
 * Interface representing the properties for the Rating widget.
 */
export interface RatingProps extends RatingCommonPropsAndState {
    /**
     * Return the value for the 'aria-valuetext' attribute.
     * @param rating - Current rating value.
     * @param maxRating - maxRating value.
     *
     * @defaultValue
     * \`\`\`ts
     * (rating: number, maxRating: number) => \`\${rating} out of \${maxRating}\`
     * \`\`\`
     */
    ariaValueTextFn: (rating: number, maxRating: number) => string;
    /**
     * An event emitted when the rating is changed.
     *
     * Event payload is equal to the newly selected rating.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onRatingChange: (rating: number) => void;
    /**
     * An event emitted when the user is hovering over a given rating.
     *
     * Event payload is equal to the rating being hovered over.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onHover: (rating: number) => void;
    /**
     * An event emitted when the user stops hovering over a given rating.
     *
     * Event payload is equal to the rating of the last item being hovered over.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onLeave: (rating: number) => void;
}
/**
 * Interface representing directives for a rating component.
 */
export interface RatingDirectives {
    /**
     * A directive to be applied to the main container
     * This will handle the keydown, mouseleave, tabindex and aria attributes
     */
    containerDirective: Directive;
    /**
     * A directive to be applied on each star element
     */
    starDirective: Directive<{
        index: number;
    }>;
}
/**
 * Represents the state of a rating component.
 */
export interface RatingState extends RatingCommonPropsAndState {
    /**
     * the aria value of the rating
     */
    ariaValueText: string;
    /**
     * the visible value of the rating (it changes when hovering over the rating even though the real value did not change)
     */
    visibleRating: number;
    /**
     * is the rating interactive i.e. listening to hover, click and keyboard events
     */
    interactive: boolean;
    /**
     * the list of stars
     */
    stars: StarContext[];
}
/**
 * Interface representing the API that can be performed on a rating component.
 */
export interface RatingApi {
    /**
     * Sets the rating value.
     *
     * @param index - Star index, starting from 1
     */
    setRating(index: number): void;
    /**
     * Sets the hovered rating value.
     *
     * @param index - Star index, starting from 1
     */
    setHoveredRating(index: number): void;
    /**
     * Leave the rating, resetting the visible rating to the rating value and triggering the onLeave callback
     */
    leave(): void;
}
/**
 * Represents a Rating widget.
 */
export type RatingWidget = Widget<RatingProps, RatingState, RatingApi, RatingDirectives>;
/**
 * Returns a shallow copy of the default rating config.
 * @returns a copy of the default config
 */
export declare function getRatingDefaultConfig(): RatingProps;
/**
 * Create a RatingWidget with given config props
 * @param config - an optional alert config
 * @returns a RatingWidget
 */
export declare const createRating: WidgetFactory<RatingWidget>;
export {};
`;export{n as default};
