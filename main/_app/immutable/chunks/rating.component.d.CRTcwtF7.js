const e=`import type { AdaptSlotContentProps, RatingWidget, SlotContent, StarContext } from '@agnos-ui/angular-headless';
import { BaseWidgetDirective } from '@agnos-ui/angular-headless';
import type { AfterContentChecked } from '@angular/core';
import { EventEmitter, TemplateRef } from '@angular/core';
import type { ControlValueAccessor } from '@angular/forms';
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
     */
    ariaValueTextFn: ((rating: number, maxRating: number) => string) | undefined;
    /**
     * If \`true\`, the rating is disabled.
     */
    disabled: boolean | undefined;
    /**
     * The maximum rating that can be given.
     */
    maxRating: number | undefined;
    /**
     * The current rating. Could be a decimal value like \`3.75\`.
     */
    rating: number | undefined;
    /**
     * If \`true\`, the rating can't be changed.
     */
    readonly: boolean | undefined;
    /**
     * Define if the rating can be reset.
     *
     * If set to true, the user can 'unset' the rating value by cliking on the current rating value.
     */
    resettable: boolean | undefined;
    slotStar: SlotContent<AdaptSlotContentProps<StarContext>>;
    slotStarFromContent: RatingStarDirective | undefined;
    /**
     * Allows setting a custom rating tabindex.
     * If the component is disabled, \`tabindex\` will still be set to \`-1\`.
     */
    tabindex: number | undefined;
    /**
     * CSS classes to be applied on the widget main container
     */
    className: string | undefined;
    /**
     * The aria label
     */
    ariaLabel: string | undefined;
    /**
     * The aria labelled by
     */
    ariaLabelledBy: string | undefined;
    /**
     * An event emitted when the user is hovering over a given rating.
     *
     * Event payload is equal to the rating being hovered over.
     */
    hover: EventEmitter<number>;
    /**
     * An event emitted when the user stops hovering over a given rating.
     *
     * Event payload is equal to the rating of the last item being hovered over.
     */
    leave: EventEmitter<number>;
    /**
     * An event emitted when the rating is changed.
     *
     * Event payload is equal to the newly selected rating.
     */
    ratingChange: EventEmitter<number>;
    writeValue(value: any): void;
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    setDisabledState(disabled: boolean): void;
    ngAfterContentChecked(): void;
    trackByIndex(index: number): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<RatingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RatingComponent, "[auRating]", never, { "ariaValueTextFn": { "alias": "auAriaValueTextFn"; "required": false; }; "disabled": { "alias": "auDisabled"; "required": false; }; "maxRating": { "alias": "auMaxRating"; "required": false; }; "rating": { "alias": "auRating"; "required": false; }; "readonly": { "alias": "auReadonly"; "required": false; }; "resettable": { "alias": "auResettable"; "required": false; }; "slotStar": { "alias": "auSlotStar"; "required": false; }; "tabindex": { "alias": "auTabindex"; "required": false; }; "className": { "alias": "auClassName"; "required": false; }; "ariaLabel": { "alias": "auAriaLabel"; "required": false; }; "ariaLabelledBy": { "alias": "auAriaLabelledBy"; "required": false; }; }, { "hover": "auHover"; "leave": "auLeave"; "ratingChange": "auRatingChange"; }, ["slotStarFromContent"], never, true, never>;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_maxRating: unknown;
    static ngAcceptInputType_rating: unknown;
    static ngAcceptInputType_readonly: unknown;
    static ngAcceptInputType_resettable: unknown;
    static ngAcceptInputType_tabindex: unknown;
}
`;export{e as default};
