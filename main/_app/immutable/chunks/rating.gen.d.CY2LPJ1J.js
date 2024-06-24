const n=`import type { SlotContent, Widget, Directive } from '@agnos-ui/angular-headless';
export interface RatingState {
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
    /**
     * The current rating. Could be a decimal value like \`3.75\`.
     */
    rating: number;
    /**
     * The maximum rating that can be given.
     */
    maxRating: number;
    /**
     * If \`true\`, the rating is disabled.
     */
    disabled: boolean;
    /**
     * If \`true\`, the rating can't be changed.
     */
    readonly: boolean;
    /**
     * Define if the rating can be reset.
     *
     * If set to true, the user can 'unset' the rating value by cliking on the current rating value.
     */
    resettable: boolean;
    /**
     * Allows setting a custom rating tabindex.
     * If the component is disabled, \`tabindex\` will still be set to \`-1\`.
     */
    tabindex: number;
    /**
     * The aria label
     */
    ariaLabel: string;
    /**
     * The aria labelled by
     */
    ariaLabelledBy: string;
    /**
     * CSS classes to be applied on the widget main container
     */
    className: string;
    /**
     * The template to override the way each star is displayed.
     */
    star: SlotContent<StarContext>;
}
export interface RatingProps {
    /**
     * Return the value for the 'aria-valuetext' attribute.
     */
    ariaValueTextFn: (rating: number, maxRating: number) => string;
    /**
     * An event emitted when the rating is changed.
     *
     * Event payload is equal to the newly selected rating.
     */
    onRatingChange: (rating: number) => void;
    /**
     * An event emitted when the user is hovering over a given rating.
     *
     * Event payload is equal to the rating being hovered over.
     */
    onHover: (rating: number) => void;
    /**
     * An event emitted when the user stops hovering over a given rating.
     *
     * Event payload is equal to the rating of the last item being hovered over.
     */
    onLeave: (rating: number) => void;
    /**
     * The current rating. Could be a decimal value like \`3.75\`.
     */
    rating: number;
    /**
     * The maximum rating that can be given.
     */
    maxRating: number;
    /**
     * If \`true\`, the rating is disabled.
     */
    disabled: boolean;
    /**
     * If \`true\`, the rating can't be changed.
     */
    readonly: boolean;
    /**
     * Define if the rating can be reset.
     *
     * If set to true, the user can 'unset' the rating value by cliking on the current rating value.
     */
    resettable: boolean;
    /**
     * Allows setting a custom rating tabindex.
     * If the component is disabled, \`tabindex\` will still be set to \`-1\`.
     */
    tabindex: number;
    /**
     * The aria label
     */
    ariaLabel: string;
    /**
     * The aria labelled by
     */
    ariaLabelledBy: string;
    /**
     * CSS classes to be applied on the widget main container
     */
    className: string;
    /**
     * The template to override the way each star is displayed.
     */
    star: SlotContent<StarContext>;
}
export type RatingWidget = Widget<RatingProps, RatingState, object, RatingActions, RatingDirectives>;
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
export interface RatingActions {
    /**
     * Method to be used when a star is clicked.
     *
     * To be used in the onclick event of a star
     */
    click(index: number): void;
    /**
     * Method to be used when the mouse enter in a star.
     *
     * To be used in the onmouseenter of a star
     */
    hover(index: number): void;
    /**
     * Method to be used when the mouse leave the widget.
     *
     * To be used in the onmouseleave of the rating container
     */
    leave(): void;
    /**
     * Method to be used to handle the keyboard.
     *
     * To be used in the onkeydown of the rating container
     */
    handleKey(event: KeyboardEvent): void;
}
`;export{n as default};
