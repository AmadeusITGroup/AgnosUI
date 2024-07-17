const n=`import type { SlotContent, Widget, Directive } from '@agnos-ui/svelte-headless/types';
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
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
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
export interface RatingProps {
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
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
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
     * @param index - Star index, starting from 1
     */
    click(index: number): void;
    /**
     * Method to be used when the mouse enter in a star.
     *
     * To be used in the onmouseenter of a star
     * @param index - Star index, starting from 1
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
