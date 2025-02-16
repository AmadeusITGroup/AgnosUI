const e=`import type { SlotContent } from '@agnos-ui/angular-headless';
import { BaseWidgetDirective } from '@agnos-ui/angular-headless';
import { TemplateRef } from '@angular/core';
import type { ControlValueAccessor } from '@angular/forms';
import type { RatingWidget, StarContext } from './rating.gen';
import * as i0 from "@angular/core";
/**
 * Directive to represent a rating star.
 *
 * This directive uses a template reference to render the {@link StarContext}.
 */
export declare class RatingStarDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: RatingStarDirective, context: unknown): context is StarContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<RatingStarDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RatingStarDirective, "ng-template[auRatingStar]", never, {}, {}, never, never, true, never>;
}
/**
 * The \`RatingComponent\` is an Angular component that allows users to provide a rating.
 * It extends \`BaseWidgetDirective\` and implements \`ControlValueAccessor\` to integrate with Angular forms.
 */
export declare class RatingComponent extends BaseWidgetDirective<RatingWidget> implements ControlValueAccessor {
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
    readonly ariaValueTextFn: import("@angular/core").InputSignal<((rating: number, maxRating: number) => string) | undefined>;
    /**
     * If \`true\`, the rating is disabled.
     *
     * @defaultValue \`false\`
     */
    readonly disabled: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * The maximum rating that can be given.
     *
     * @defaultValue \`10\`
     */
    readonly maxRating: import("@angular/core").InputSignalWithTransform<number | undefined, unknown>;
    /**
     * The current rating. Could be a decimal value like \`3.75\`.
     *
     * @defaultValue \`0\`
     */
    readonly rating: import("@angular/core").InputSignalWithTransform<number | undefined, unknown>;
    /**
     * If \`true\`, the rating can't be changed.
     *
     * @defaultValue \`false\`
     */
    readonly readonly: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * Define if the rating can be reset.
     *
     * If set to true, the user can 'unset' the rating value by cliking on the current rating value.
     *
     * @defaultValue \`true\`
     */
    readonly resettable: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * The template to override the way each star is displayed.
     *
     * @defaultValue
     * \`\`\`ts
     * ({fill}: StarContext) => String.fromCharCode(fill === 100 ? 9733 : 9734)
     * \`\`\`
     */
    readonly star: import("@angular/core").InputSignal<SlotContent<StarContext>>;
    readonly slotStarFromContent: import("@angular/core").Signal<RatingStarDirective | undefined>;
    /**
     * Allows setting a custom rating tabindex.
     * If the component is disabled, \`tabindex\` will still be set to \`-1\`.
     *
     * @defaultValue \`0\`
     */
    readonly tabindex: import("@angular/core").InputSignalWithTransform<number | undefined, unknown>;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    readonly className: import("@angular/core").InputSignal<string | undefined>;
    /**
     * The aria label
     *
     * @defaultValue \`'Rating'\`
     */
    readonly ariaLabel: import("@angular/core").InputSignal<string | undefined>;
    /**
     * The aria labelled by
     *
     * @defaultValue \`''\`
     */
    readonly ariaLabelledBy: import("@angular/core").InputSignal<string | undefined>;
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
    readonly hover: import("@angular/core").OutputEmitterRef<number>;
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
    readonly leave: import("@angular/core").OutputEmitterRef<number>;
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
    readonly ratingChange: import("@angular/core").OutputEmitterRef<number>;
    writeValue(value: any): void;
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    setDisabledState(disabled: boolean): void;
    constructor();
    trackByIndex(index: number): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<RatingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RatingComponent, "[auRating]", never, { "ariaValueTextFn": { "alias": "auAriaValueTextFn"; "required": false; "isSignal": true; }; "disabled": { "alias": "auDisabled"; "required": false; "isSignal": true; }; "maxRating": { "alias": "auMaxRating"; "required": false; "isSignal": true; }; "rating": { "alias": "auRating"; "required": false; "isSignal": true; }; "readonly": { "alias": "auReadonly"; "required": false; "isSignal": true; }; "resettable": { "alias": "auResettable"; "required": false; "isSignal": true; }; "star": { "alias": "auStar"; "required": false; "isSignal": true; }; "tabindex": { "alias": "auTabindex"; "required": false; "isSignal": true; }; "className": { "alias": "auClassName"; "required": false; "isSignal": true; }; "ariaLabel": { "alias": "auAriaLabel"; "required": false; "isSignal": true; }; "ariaLabelledBy": { "alias": "auAriaLabelledBy"; "required": false; "isSignal": true; }; }, { "hover": "auHover"; "leave": "auLeave"; "ratingChange": "auRatingChange"; }, ["slotStarFromContent"], never, true, never>;
}
`;export{e as default};
