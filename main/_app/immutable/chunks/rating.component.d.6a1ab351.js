const e=`import type { AdaptSlotContentProps, RatingState, SlotContent, StarContext } from '@agnos-ui/angular-headless';
import type { AfterContentChecked, OnChanges, Signal, SimpleChanges } from '@angular/core';
import { EventEmitter, TemplateRef } from '@angular/core';
import type { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class RatingStarDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: RatingStarDirective, context: unknown): context is StarContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<RatingStarDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RatingStarDirective, "ng-template[auRatingStar]", never, {}, {}, never, never, true, never>;
}
export declare class RatingComponent implements ControlValueAccessor, OnChanges, AfterContentChecked {
    readonly _widget: import("@agnos-ui/angular-headless").WithPatchSlots<import("@agnos-ui/core").RatingWidget>;
    readonly api: object;
    state$: Signal<RatingState>;
    onChange: (_: any) => void;
    onTouched: () => void;
    get hostAriaLabelledBy(): string | null;
    /**
     * Return the value for the 'aria-value' attribute.
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
    constructor();
    writeValue(value: any): void;
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    setDisabledState(disabled: boolean): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentChecked(): void;
    trackByIndex(index: number): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<RatingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RatingComponent, "au-rating", never, { "ariaValueTextFn": { "alias": "ariaValueTextFn"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "maxRating": { "alias": "maxRating"; "required": false; }; "rating": { "alias": "rating"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "resettable": { "alias": "resettable"; "required": false; }; "slotStar": { "alias": "slotStar"; "required": false; }; "tabindex": { "alias": "tabindex"; "required": false; }; "className": { "alias": "className"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "ariaLabelledBy": { "alias": "ariaLabelledBy"; "required": false; }; }, { "hover": "hover"; "leave": "leave"; "ratingChange": "ratingChange"; }, ["slotStarFromContent"], never, true, never>;
}
`;export{e as default};
