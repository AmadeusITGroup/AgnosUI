const e=`import { BaseWidgetDirective, type SlotContent } from '@agnos-ui/angular-headless';
import type { CarouselContext, CarouselSlideContext, CarouselWidget } from './carousel.gen';
import { TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Directive that provides a template reference for the carousel structure using the {@link CarouselContext}.
 */
export declare class CarouselStructureDirective<SlideData extends {
    id: string;
}> {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard<SlideData extends {
        id: string;
    }>(_dir: CarouselStructureDirective<SlideData>, context: unknown): context is CarouselContext<SlideData>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CarouselStructureDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CarouselStructureDirective<any>, "ng-template[auCarouselStructure]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive that provides a template reference for the carousel navigation using the {@link CarouselContext}.
 */
export declare class CarouselNavigationDirective<SlideData extends {
    id: string;
}> {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard<SlideData extends {
        id: string;
    }>(_dir: CarouselNavigationDirective<SlideData>, context: unknown): context is CarouselContext<SlideData>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CarouselNavigationDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CarouselNavigationDirective<any>, "ng-template[auCarouselNavigation]", never, {}, {}, never, never, true, never>;
}
/**
 * Directive that provides a template reference for the carousel slide  using the {@link CarouselSlideContext}.
 */
export declare class CarouselSlideDirective<SlideData extends {
    id: string;
}> {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard<SlideData extends {
        id: string;
    }>(_dir: CarouselSlideDirective<SlideData>, context: unknown): context is CarouselSlideContext<SlideData>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CarouselSlideDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CarouselSlideDirective<any>, "ng-template[auCarouselSlide]", never, {}, {}, never, never, true, never>;
}
/**
 * The default slot for the structure
 */
export declare const carouselDefaultSlotStructure: SlotContent<CarouselContext<any>>;
/**
 * The default slot for the navigation
 */
export declare const carouselDefaultSlotNavigation: SlotContent<CarouselContext<any>>;
/**
 * CarouselComponent is an Angular Component that extends {@link BaseWidgetDirective}<{@link CarouselWidget}>
 * to create a customizable carousel widget. It provides various inputs (see {@link CarouselProps})
 * to configure the appearance and behavior of the carousel.
 */
export declare class CarouselComponent<SlideData extends {
    id: string;
}> extends BaseWidgetDirective<CarouselWidget<SlideData>> {
    /**
     * Aria label for navigation indicators
     */
    readonly ariaIndicatorLabel: import("@angular/core").InputSignal<((index: number) => string) | undefined>;
    /**
     * Aria label for previous button
     */
    readonly ariaPrevLabel: import("@angular/core").InputSignal<string | undefined>;
    /**
     * Aria label for next button
     */
    readonly ariaNextLabel: import("@angular/core").InputSignal<string | undefined>;
    /**
     * Choose content direction between \`ltr\` and \`rtl\`
     *
     * @see {@link https://www.embla-carousel.com/api/options/#direction}
     * @defaultValue \`'ltr'\`
     */
    readonly direction: import("@angular/core").InputSignal<"ltr" | "rtl" | undefined>;
    /**
     * Enables momentum scrolling
     *
     * @see {@link https://www.embla-carousel.com/api/options/#dragFree}
     * @defaultValue \`false\`
     */
    readonly dragFree: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * Drag threshold in pixels
     *
     * @see {@link https://www.embla-carousel.com/api/options/#dragThreshold}
     * @defaultValue \`10\`
     */
    readonly dragThreshold: import("@angular/core").InputSignalWithTransform<number | undefined, unknown>;
    /**
     * Set scroll duration when triggered by any of the API methods
     *
     * @see {@link https://www.embla-carousel.com/api/options/#duration}
     * @defaultValue \`25\`
     */
    readonly duration: import("@angular/core").InputSignalWithTransform<number | undefined, unknown>;
    /**
     * Enables infinite looping
     *
     * @see {@link https://www.embla-carousel.com/api/options/#loop}
     * @defaultValue \`false\`
     */
    readonly loop: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * Allow the carousel to skip scroll snaps if it's dragged vigorously
     *
     * @see {@link https://www.embla-carousel.com/api/options/#skipsnaps}
     * @defaultValue \`false\`
     */
    readonly skipSnaps: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\`, 'previous' and 'next' navigation arrows will be visible.
     */
    readonly showNavigationArrows: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\`, navigation indicators at the bottom of the slide will be visible.
     */
    readonly showNavigationIndicators: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * Plugins to extend the carousel with additional features
     * @defaultValue \`[]\`
     */
    readonly plugins: import("@angular/core").InputSignal<import("embla-carousel").CreatePluginType<import("node_modules/embla-carousel/esm/components/Plugins").LoosePluginType, {}>[] | undefined>;
    /**
     * Align the slides relative to the carousel viewport
     *
     * @see {@link https://www.embla-carousel.com/api/options/#align}
     * @defaultValue \`'center'\`
     */
    readonly align: import("@angular/core").InputSignal<"start" | "center" | "end" | undefined>;
    /**
     * Enables choosing a custom container element which holds the slides. By default, Embla will choose the first direct child element of the root element. Provide a valid CSS selector string.
     *
     * @see {@link https://www.embla-carousel.com/api/options/#container}
     */
    readonly container: import("@angular/core").InputSignal<string | null | undefined>;
    /**
     * Clear leading and trailing empty space that causes excessive scrolling
     *
     * @see {@link https://www.embla-carousel.com/api/options/#containScroll}
     * @defaultValue \`'trimSnaps'\`
     */
    readonly containScroll: import("@angular/core").InputSignal<false | "trimSnaps" | "keepSnaps" | undefined>;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    readonly className: import("@angular/core").InputSignal<string | undefined>;
    /**
     * Class name to apply to the container of the carousel.
     *
     * @defaultValue \`''\`
     */
    readonly containerClass: import("@angular/core").InputSignal<string | undefined>;
    /**
     * Class name to apply to each slide in the carousel.
     *
     * @defaultValue \`''\`
     */
    readonly slideClass: import("@angular/core").InputSignal<string | ((slideContext: {
        id: string;
        index: number;
        active: boolean;
    }) => string) | undefined>;
    /**
     * The aria-live attribute value for the carousel container.
     *
     * @defaultValue \`'polite'\`
     */
    readonly ariaLive: import("@angular/core").InputSignal<string | undefined>;
    /**
     * The data for each slide in the carousel.
     *
     * @defaultValue \`[]\`
     */
    readonly slidesData: import("@angular/core").InputSignal<SlideData[] | undefined>;
    /**
     * The structure of the carousel.
     *
     * @defaultValue \`undefined\`
     */
    readonly structure: import("@angular/core").InputSignal<SlotContent<CarouselContext<SlideData>>>;
    /**
     * The navigation layer of the carousel.
     *
     * @defaultValue \`undefined\`
     */
    readonly navigation: import("@angular/core").InputSignal<SlotContent<CarouselContext<SlideData>>>;
    /**
     * The content of each slide in the carousel.
     *
     * @defaultValue \`undefined\`
     */
    readonly slide: import("@angular/core").InputSignal<SlotContent<CarouselSlideContext<SlideData>>>;
    readonly slotSlideFromContent: import("@angular/core").Signal<CarouselSlideDirective<any> | undefined>;
    readonly slotStructureFromContent: import("@angular/core").Signal<CarouselStructureDirective<any> | undefined>;
    readonly slotNavigationFromContent: import("@angular/core").Signal<CarouselNavigationDirective<any> | undefined>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<CarouselComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CarouselComponent<any>, "[auCarousel]", never, { "ariaIndicatorLabel": { "alias": "auAriaIndicatorLabel"; "required": false; "isSignal": true; }; "ariaPrevLabel": { "alias": "auAriaPrevLabel"; "required": false; "isSignal": true; }; "ariaNextLabel": { "alias": "auAriaNextLabel"; "required": false; "isSignal": true; }; "direction": { "alias": "auDirection"; "required": false; "isSignal": true; }; "dragFree": { "alias": "auDragFree"; "required": false; "isSignal": true; }; "dragThreshold": { "alias": "auDragThreshold"; "required": false; "isSignal": true; }; "duration": { "alias": "auDuration"; "required": false; "isSignal": true; }; "loop": { "alias": "auLoop"; "required": false; "isSignal": true; }; "skipSnaps": { "alias": "auSkipSnaps"; "required": false; "isSignal": true; }; "showNavigationArrows": { "alias": "auShowNavigationArrows"; "required": false; "isSignal": true; }; "showNavigationIndicators": { "alias": "auShowNavigationIndicators"; "required": false; "isSignal": true; }; "plugins": { "alias": "auPlugins"; "required": false; "isSignal": true; }; "align": { "alias": "auAlign"; "required": false; "isSignal": true; }; "container": { "alias": "auContainer"; "required": false; "isSignal": true; }; "containScroll": { "alias": "auContainScroll"; "required": false; "isSignal": true; }; "className": { "alias": "auClassName"; "required": false; "isSignal": true; }; "containerClass": { "alias": "auContainerClass"; "required": false; "isSignal": true; }; "slideClass": { "alias": "auSlideClass"; "required": false; "isSignal": true; }; "ariaLive": { "alias": "auAriaLive"; "required": false; "isSignal": true; }; "slidesData": { "alias": "auSlidesData"; "required": false; "isSignal": true; }; "structure": { "alias": "auStructure"; "required": false; "isSignal": true; }; "navigation": { "alias": "auNavigation"; "required": false; "isSignal": true; }; "slide": { "alias": "auSlide"; "required": false; "isSignal": true; }; }, {}, ["slotSlideFromContent", "slotStructureFromContent", "slotNavigationFromContent"], never, true, never>;
}
`;export{e as default};
