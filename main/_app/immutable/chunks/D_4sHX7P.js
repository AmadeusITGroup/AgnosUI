const e=`import { BaseWidgetDirective } from '@agnos-ui/angular-headless';
import type { SlotContent } from '@agnos-ui/angular-headless';
import { TemplateRef } from '@angular/core';
import type { ProgressbarContext, ProgressbarWidget } from './progressbar.gen';
import type { BSContextualClass } from '@agnos-ui/core-bootstrap/types';
import * as i0 from "@angular/core";
/**
 * Directive that provides a template reference for the progress bar context.
 * This directive provides a template reference for the {@link ProgressbarContext}.
 */
export declare class ProgressbarBodyDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: ProgressbarStructureDirective, context: unknown): context is ProgressbarContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressbarBodyDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ProgressbarBodyDirective, "ng-template[auProgressbarBody]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive to define the structure of a progress bar.
 *
 * This directive provides a template reference for the {@link ProgressbarContext}.
 */
export declare class ProgressbarStructureDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: ProgressbarStructureDirective, context: unknown): context is ProgressbarContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressbarStructureDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ProgressbarStructureDirective, "ng-template[auProgressbarStructure]", never, {}, {}, never, never, true, never>;
}
/**
 * Represents the default slot structure for the progress bar component.
 */
export declare const progressbarDefaultSlotStructure: SlotContent<ProgressbarContext>;
/**
 * ProgressbarComponent is a UI component that extends the BaseWidgetDirective
 * to create a customizable progress bar widget. It provides various inputs
 * to configure the appearance and behavior of the progress bar.
 *
 */
export declare class ProgressbarComponent extends BaseWidgetDirective<ProgressbarWidget> {
    /**
     * The aria label.
     *
     * @defaultValue \`'Progressbar'\`
     */
    readonly ariaLabel: import("@angular/core").InputSignal<string | undefined>;
    /**
     * The minimum value.
     *
     * @defaultValue \`0\`
     */
    readonly min: import("@angular/core").InputSignalWithTransform<number | undefined, unknown>;
    /**
     * The maximum value.
     *
     * @defaultValue \`100\`
     */
    readonly max: import("@angular/core").InputSignalWithTransform<number | undefined, unknown>;
    /**
     * The current value.
     *
     * @defaultValue \`0\`
     */
    readonly value: import("@angular/core").InputSignalWithTransform<number | undefined, unknown>;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    readonly className: import("@angular/core").InputSignal<string | undefined>;
    /**
     * Label of the progress.
     */
    readonly children: import("@angular/core").InputSignal<SlotContent<ProgressbarContext>>;
    readonly slotDefaultFromContent: import("@angular/core").Signal<ProgressbarBodyDirective | undefined>;
    /**
     * Global template for the Progressbar.
     */
    readonly structure: import("@angular/core").InputSignal<SlotContent<ProgressbarContext>>;
    readonly slotStructureFromContent: import("@angular/core").Signal<ProgressbarStructureDirective | undefined>;
    /**
     * Height of the progressbar, can be any valid css height value.
     *
     * @defaultValue \`''\`
     */
    readonly height: import("@angular/core").InputSignal<string | undefined>;
    /**
     * If \`true\`, animates a striped progressbar.
     * Takes effect only for browsers supporting CSS3 animations, and if \`striped\` is \`true\`.
     *
     * @defaultValue \`false\`
     */
    readonly animated: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\`, shows a striped progressbar.
     *
     * @defaultValue \`false\`
     */
    readonly striped: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * Return the value for the 'aria-valuetext' attribute.
     * @param value - current value
     * @param minimum - minimum value
     * @param maximum - maximum value
     *
     * @defaultValue
     * \`\`\`ts
     * () => undefined
     * \`\`\`
     */
    readonly ariaValueTextFn: import("@angular/core").InputSignal<((value: number, minimum: number, maximum: number) => string | undefined) | undefined>;
    /**
     * Type of the progressbar, following bootstrap types.
     */
    readonly type: import("@angular/core").InputSignal<BSContextualClass | undefined>;
    readonly slotChildren: import("@angular/core").Signal<TemplateRef<void> | undefined>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressbarComponent, "[auProgressbar]", never, { "ariaLabel": { "alias": "auAriaLabel"; "required": false; "isSignal": true; }; "min": { "alias": "auMin"; "required": false; "isSignal": true; }; "max": { "alias": "auMax"; "required": false; "isSignal": true; }; "value": { "alias": "auValue"; "required": false; "isSignal": true; }; "className": { "alias": "auClassName"; "required": false; "isSignal": true; }; "children": { "alias": "auChildren"; "required": false; "isSignal": true; }; "structure": { "alias": "auStructure"; "required": false; "isSignal": true; }; "height": { "alias": "auHeight"; "required": false; "isSignal": true; }; "animated": { "alias": "auAnimated"; "required": false; "isSignal": true; }; "striped": { "alias": "auStriped"; "required": false; "isSignal": true; }; "ariaValueTextFn": { "alias": "auAriaValueTextFn"; "required": false; "isSignal": true; }; "type": { "alias": "auType"; "required": false; "isSignal": true; }; }, {}, ["slotDefaultFromContent", "slotStructureFromContent"], ["*"], true, never>;
}
`;export{e as default};
