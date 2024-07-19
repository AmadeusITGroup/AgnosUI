const e=`import type { SlotContent } from '@agnos-ui/angular-headless';
import { BaseWidgetDirective } from '@agnos-ui/angular-headless';
import type { AfterContentChecked } from '@angular/core';
import { EventEmitter, TemplateRef } from '@angular/core';
import type { ControlValueAccessor } from '@angular/forms';
import type { RatingWidget, StarContext } from './rating.gen';
import * as i0 from "@angular/core";
export declare class RatingStarDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: RatingStarDirective, context: unknown): context is StarContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<RatingStarDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RatingStarDirective, "ng-template[auRatingStar]", never, {}, {}, never, never, true, never>;
}
export declare class RatingComponent extends BaseWidgetDirective<RatingWidget> implements ControlValueAccessor, AfterContentChecked {
    readonly _widget: import("@agnos-ui/angular-headless").AngularWidget<RatingWidget>;
    onChange: (_: any) => void;
    onTouched: () => void;
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
    ariaValueTextFn: ((rating: number, maxRating: number) => string) | undefined;
    /**
     * If \`true\`, the rating is disabled.
     *
     * @defaultValue \`false\`
     */
    disabled: boolean | undefined;
    /**
     * The maximum rating that can be given.
     *
     * @defaultValue \`10\`
     */
    maxRating: number | undefined;
    /**
     * The current rating. Could be a decimal value like \`3.75\`.
     *
     * @defaultValue \`0\`
     */
    rating: number | undefined;
    /**
     * If \`true\`, the rating can't be changed.
     *
     * @defaultValue \`false\`
     */
    readonly: boolean | undefined;
    /**
     * Define if the rating can be reset.
     *
     * If set to true, the user can 'unset' the rating value by cliking on the current rating value.
     *
     * @defaultValue \`true\`
     */
    resettable: boolean | undefined;
    /**
     * The template to override the way each star is displayed.
     *
     * @defaultValue
     * \`\`\`ts
     * ({fill}: StarContext) => String.fromCharCode(fill === 100 ? 9733 : 9734)
     * \`\`\`
     */
    star: SlotContent<StarContext>;
    slotStarFromContent: RatingStarDirective | undefined;
    /**
     * Allows setting a custom rating tabindex.
     * If the component is disabled, \`tabindex\` will still be set to \`-1\`.
     *
     * @defaultValue \`0\`
     */
    tabindex: number | undefined;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string | undefined;
    /**
     * The aria label
     *
     * @defaultValue \`'Rating'\`
     */
    ariaLabel: string | undefined;
    /**
     * The aria labelled by
     *
     * @defaultValue \`''\`
     */
    ariaLabelledBy: string | undefined;
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
    hover: EventEmitter<number>;
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
    leave: EventEmitter<number>;
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
    ratingChange: EventEmitter<number>;
    writeValue(value: any): void;
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    setDisabledState(disabled: boolean): void;
    ngAfterContentChecked(): void;
    trackByIndex(index: number): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<RatingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RatingComponent, "[auRating]", never, { "ariaValueTextFn": { "alias": "auAriaValueTextFn"; "required": false; }; "disabled": { "alias": "auDisabled"; "required": false; }; "maxRating": { "alias": "auMaxRating"; "required": false; }; "rating": { "alias": "auRating"; "required": false; }; "readonly": { "alias": "auReadonly"; "required": false; }; "resettable": { "alias": "auResettable"; "required": false; }; "star": { "alias": "auStar"; "required": false; }; "tabindex": { "alias": "auTabindex"; "required": false; }; "className": { "alias": "auClassName"; "required": false; }; "ariaLabel": { "alias": "auAriaLabel"; "required": false; }; "ariaLabelledBy": { "alias": "auAriaLabelledBy"; "required": false; }; }, { "hover": "auHover"; "leave": "auLeave"; "ratingChange": "auRatingChange"; }, ["slotStarFromContent"], never, true, never>;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_maxRating: unknown;
    static ngAcceptInputType_rating: unknown;
    static ngAcceptInputType_readonly: unknown;
    static ngAcceptInputType_resettable: unknown;
    static ngAcceptInputType_tabindex: unknown;
}
`;export{e as default};
