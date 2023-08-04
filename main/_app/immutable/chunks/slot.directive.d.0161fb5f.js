const e=`import type { ReadableSignal } from '@amadeus-it-group/tansu';
import type { SlotContent as CoreSlotContent, WidgetsConfig as CoreWidgetsConfig, Partial2Levels, Widget, WidgetFactory, WidgetProps, WidgetSlotContext, WidgetState, WidgetsConfigStore } from '@agnos-ui/core';
import type { FactoryProvider, OnChanges, OnDestroy, SimpleChanges, Type } from '@angular/core';
import { InjectionToken, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ComponentTemplate<Props, K extends string, T extends {
    [key in K]: TemplateRef<Props>;
}> {
    readonly component: Type<T>;
    readonly templateProp: K;
    constructor(component: Type<T>, templateProp: K);
}
export type SlotContent<Props extends object = object> = CoreSlotContent<Props> | TemplateRef<Props> | Type<unknown> | ComponentTemplate<Props, any, any>;
export type AdaptSlotContentProps<Props extends Record<string, any>> = Props extends WidgetSlotContext<infer U> ? WidgetSlotContext<AdaptWidgetSlots<U>> & AdaptPropsSlots<Omit<Props, keyof WidgetSlotContext<any>>> : AdaptPropsSlots<Props>;
export type AdaptPropsSlots<Props> = Omit<Props, \`slot\${string}\`> & {
    [K in keyof Props & \`slot\${string}\`]: Props[K] extends CoreSlotContent<infer U> ? SlotContent<AdaptSlotContentProps<U>> : Props[K];
};
export type AdaptWidgetSlots<W extends Widget> = Widget<AdaptPropsSlots<WidgetProps<W>>, AdaptPropsSlots<WidgetState<W>>, W['api'], W['actions'], W['directives']>;
export type WidgetsConfig = {
    [WidgetName in keyof CoreWidgetsConfig]: AdaptPropsSlots<CoreWidgetsConfig[WidgetName]>;
};
/**
 * Dependency Injection token which can be used to provide or inject the widgets default configuration store.
 */
export declare const widgetsConfigInjectionToken: InjectionToken<WidgetsConfigStore<WidgetsConfig>>;
/**
 * Creates a provider of widgets default configuration that inherits from any widgets default configuration already defined at an upper level
 * in the Angular dependency injection system. It contains its own set of widgets configuration properties that override the same properties form
 * the parent configuration.
 *
 * @remarks
 * The configuration is computed from the parent configuration in two steps:
 * - first step: the parent configuration is transformed by the adaptParentConfig function (if specified).
 * If adaptParentConfig is not specified, this step is skipped.
 * - second step: the configuration from step 1 is merged (2-levels deep) with the own$ store. The own$ store initially contains
 * an empty object (i.e. no property from the parent is overridden). It can be changed by calling set on the store returned by
 * {@link injectWidgetsConfig}.
 *
 * @param adaptParentConfig - optional function that receives a 2-levels copy of the widgets default configuration
 * defined at an upper level in the Angular dependency injection system (or an empty object if there is none) and returns the widgets
 * default configuration to be used.
 * It is called only if the configuration is needed, and was not yet computed for the current value of the parent configuration.
 * It is called in a tansu reactive context, so it can use any tansu store and will be called again if those stores change.
 * It is also called in an Angular injection context, so it can call the Angular inject function to get and use dependencies from the
 * Angular dependency injection system.

 * @returns DI provider to be included a list of \`providers\` (for example at a component level or
 * any other level of the Angular dependency injection system)
 *
 * @example
 * \`\`\`typescript
 * @Component({
 *   // ...
 *   providers: [
 *     provideWidgetsConfig((parentConfig) => {
 *       // first step configuration: transforms the parent configuration
 *       parentConfig.rating = parentConfig.rating ?? {};
 *       parentConfig.rating.className = \`\${parentConfig.rating.className ?? ''} my-rating-extra-class\`
 *       return parentConfig;
 *     })
 *   ]
 * })
 * class MyComponent {
 *   widgetsConfig = injectWidgetsConfig();
 *   constructor() {
 *     this.widgetsConfig.set({
 *       // second step configuration: overrides the parent configuration
 *       rating: {
 *         slotStar: MyCustomSlotStar
 *       }
 *     });
 *   }
 *   // ...
 * }
 * \`\`\`
 */
export declare const provideWidgetsConfig: (adaptParentConfig?: ((config: Partial2Levels<WidgetsConfig>) => Partial2Levels<WidgetsConfig>) | undefined) => FactoryProvider;
/**
 * Returns the widgets default configuration store that was provided in the current injection context.
 * Throws if the no widgets default configuration store was provided.
 *
 * @remarks
 * This function must be called from an injection context, such as a constructor, a factory function, a field initializer or
 * a function used with {@link https://angular.io/api/core/runInInjectionContext | runInInjectionContext}.
 *
 * @returns the widgets default configuration store.
 */
export declare const injectWidgetsConfig: () => WidgetsConfigStore<WidgetsConfig>;
export type WithPatchSlots<W extends Widget> = AdaptWidgetSlots<W> & {
    patchSlots(slots: {
        [K in keyof WidgetProps<W> & \`slot\${string}\`]: WidgetProps<W>[K] extends CoreSlotContent<infer U> ? TemplateRef<AdaptSlotContentProps<U>> | undefined : never;
    }): void;
};
export declare const callWidgetFactory: <W extends Widget<object, object, object, object, object>>(factory: WidgetFactory<W>, widgetName: keyof WidgetsConfig | null, defaultConfig?: Partial<AdaptPropsSlots<WidgetProps<W>>> | ReadableSignal<Partial<AdaptPropsSlots<WidgetProps<W>>>>) => WithPatchSlots<W>;
export declare class SlotDirective<Props extends Record<string, any>> implements OnChanges, OnDestroy {
    slot: SlotContent<Props>;
    props: Props;
    private _viewContainerRef;
    private _document;
    private _slotType;
    private _slotHandler;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SlotDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SlotDirective<any>, "[auSlot]", never, { "slot": { "alias": "auSlot"; "required": false; }; "props": { "alias": "auSlotProps"; "required": false; }; }, {}, never, never, true, never>;
}
`;export{e as default};
