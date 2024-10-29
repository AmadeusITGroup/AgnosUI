const n=`import { createWidgetsConfig } from '@agnos-ui/core/config';
import { computed } from '@amadeus-it-group/tansu';
import { InjectionToken, Injector, Optional, SkipSelf, inject, runInInjectionContext } from '@angular/core';
import { callWidgetFactoryWithConfig } from './utils/widget';
export * from '@agnos-ui/core/config';
/**
 * A factory to create the utilities to allow widgets to be context-aware.
 *
 * It can be used when extending the core and creating new widgets.
 *
 * @template Config - The type of the widgets configuration object.
 * @param widgetsConfigInjectionToken - the widgets config injection token
 * @returns the utilities to create / manage widgets and contexts
 */
export const widgetsConfigFactory = (widgetsConfigInjectionToken = new InjectionToken('widgetsConfig')) => {
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
     *
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
    const provideWidgetsConfig = (adaptParentConfig) => ({
        provide: widgetsConfigInjectionToken,
        useFactory: (parent) => {
            if (adaptParentConfig) {
                const injector = inject(Injector);
                const originalAdaptParentConfig = adaptParentConfig;
                adaptParentConfig = (value) => runInInjectionContext(injector, () => originalAdaptParentConfig(value));
            }
            return createWidgetsConfig(parent ?? undefined, adaptParentConfig);
        },
        deps: [[new SkipSelf(), new Optional(), widgetsConfigInjectionToken]],
    });
    /**
     * Returns the widgets default configuration store that was provided in the current injection context.
     * Throws if the no widgets default configuration store was provided.
     *
     * @param defaultConfig - values to set as soon as the config is injected
     * @remarks
     * This function must be called from an injection context, such as a constructor, a factory function, a field initializer or
     * a function used with {@link https://angular.io/api/core/runInInjectionContext | runInInjectionContext}.
     *
     * @returns the widgets default configuration store.
     */
    const injectWidgetsConfig = (defaultConfig) => {
        const widgetsConfig = inject(widgetsConfigInjectionToken);
        if (defaultConfig) {
            widgetsConfig.set(defaultConfig);
        }
        return widgetsConfig;
    };
    /**
     * Injects the configuration for a specific widget.
     *
     * @template N - The key of the widget configuration in the \`Config\` type.
     * @param widgetName - The name of the widget whose configuration is to be injected.
     * @returns A \`ReadableSignal\` that provides a partial configuration of the specified widget or \`undefined\` if the configuration is not available.
     */
    const injectWidgetConfig = (widgetName) => {
        const widgetsConfig = inject(widgetsConfigInjectionToken, { optional: true });
        return computed(() => widgetsConfig?.()[widgetName]);
    };
    /**
     * Creates and initializes a widget using the provided factory and configuration options.
     *
     * @template W - The type of the widget.
     * @param params - The parameters for creating the widget.
     * @param params.factory - The factory function to create the widget.
     * @param params.widgetName - The name of the widget configuration to inject, if any.
     * @param params.defaultConfig - The default configuration for the widget.
     * @param params.events - The event handlers for the widget.
     * @param params.slotTemplates - A function that returns the slot templates for the widget.
     * @param params.slotChildren - A function that returns the slot children for the widget.
     * @param params.afterInit - A callback function to be called after the widget is initialized.
     * @returns The initialized widget.
     */
    const callWidgetFactory = ({ factory, widgetName = null, defaultConfig = {}, events, afterInit, slotTemplates, slotChildren, }) => callWidgetFactoryWithConfig({
        factory,
        widgetConfig: widgetName ? injectWidgetConfig(widgetName) : null,
        defaultConfig,
        events,
        afterInit,
        slotTemplates: slotTemplates,
        slotChildren,
    });
    return {
        /**
         * Dependency Injection token which can be used to provide or inject the widgets default configuration store.
         */
        widgetsConfigInjectionToken,
        provideWidgetsConfig,
        injectWidgetsConfig,
        injectWidgetConfig,
        callWidgetFactory,
    };
};
export const { widgetsConfigInjectionToken, provideWidgetsConfig, injectWidgetConfig, injectWidgetsConfig, callWidgetFactory } = widgetsConfigFactory();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFFakQsT0FBTyxFQUFDLGNBQWMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUscUJBQXFCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFMUcsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0QsY0FBYyx1QkFBdUIsQ0FBQztBQUt0Qzs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHLENBQ25DLDhCQUE4QixJQUFJLGNBQWMsQ0FBNkIsZUFBZSxDQUFDLEVBQzVGLEVBQUU7SUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FrREc7SUFDSCxNQUFNLG9CQUFvQixHQUFHLENBQUMsaUJBQTZDLEVBQW1CLEVBQUUsQ0FBQyxDQUFDO1FBQ2pHLE9BQU8sRUFBRSwyQkFBMkI7UUFDcEMsVUFBVSxFQUFFLENBQUMsTUFBeUMsRUFBRSxFQUFFO1lBQ3pELElBQUksaUJBQWlCLEVBQUUsQ0FBQztnQkFDdkIsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNsQyxNQUFNLHlCQUF5QixHQUFHLGlCQUFpQixDQUFDO2dCQUNwRCxpQkFBaUIsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMscUJBQXFCLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDeEcsQ0FBQztZQUNELE9BQU8sbUJBQW1CLENBQUMsTUFBTSxJQUFJLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3BFLENBQUM7UUFDRCxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO0tBQ3JFLENBQUMsQ0FBQztJQUVIOzs7Ozs7Ozs7O09BVUc7SUFDSCxNQUFNLG1CQUFtQixHQUFnQyxDQUFDLGFBQXNDLEVBQUUsRUFBRTtRQUNuRyxNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUMxRCxJQUFJLGFBQWEsRUFBRSxDQUFDO1lBQ25CLGFBQWEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUNELE9BQU8sYUFBYSxDQUFDO0lBQ3RCLENBQUMsQ0FBQztJQUVGOzs7Ozs7T0FNRztJQUNILE1BQU0sa0JBQWtCLEdBQUcsQ0FBeUIsVUFBYSxFQUFrRCxFQUFFO1FBQ3BILE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQywyQkFBMkIsRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQzVFLE9BQU8sUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDLENBQUM7SUFFRjs7Ozs7Ozs7Ozs7OztPQWFHO0lBQ0gsTUFBTSxpQkFBaUIsR0FBRyxDQUFtQixFQUM1QyxPQUFPLEVBQ1AsVUFBVSxHQUFHLElBQUksRUFDakIsYUFBYSxHQUFHLEVBQUUsRUFDbEIsTUFBTSxFQUNOLFNBQVMsRUFDVCxhQUFhLEVBQ2IsWUFBWSxHQWFaLEVBQW9CLEVBQUUsQ0FDdEIsMkJBQTJCLENBQUM7UUFDM0IsT0FBTztRQUNQLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFFLGtCQUFrQixDQUFDLFVBQVUsQ0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBQ3pFLGFBQWE7UUFDYixNQUFNO1FBQ04sU0FBUztRQUNULGFBQWEsRUFBRSxhQUFvQjtRQUNuQyxZQUFZO0tBQ1osQ0FBQyxDQUFDO0lBRUosT0FBTztRQUNOOztXQUVHO1FBQ0gsMkJBQTJCO1FBQzNCLG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtLQUNqQixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sRUFBQywyQkFBMkIsRUFBRSxvQkFBb0IsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBQyxHQUMzSCxvQkFBb0IsRUFBaUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtXaWRnZXQsIFdpZGdldEZhY3RvcnksIFdpZGdldFByb3BzfSBmcm9tICdAYWdub3MtdWkvY29yZS90eXBlcyc7XG5pbXBvcnQgdHlwZSB7UGFydGlhbDJMZXZlbHMsIFdpZGdldHNDb25maWdTdG9yZSwgV2lkZ2V0c0NvbmZpZ30gZnJvbSAnQGFnbm9zLXVpL2NvcmUvY29uZmlnJztcbmltcG9ydCB7Y3JlYXRlV2lkZ2V0c0NvbmZpZ30gZnJvbSAnQGFnbm9zLXVpL2NvcmUvY29uZmlnJztcbmltcG9ydCB0eXBlIHtSZWFkYWJsZVNpZ25hbH0gZnJvbSAnQGFtYWRldXMtaXQtZ3JvdXAvdGFuc3UnO1xuaW1wb3J0IHtjb21wdXRlZH0gZnJvbSAnQGFtYWRldXMtaXQtZ3JvdXAvdGFuc3UnO1xuaW1wb3J0IHR5cGUge0ZhY3RvcnlQcm92aWRlciwgVGVtcGxhdGVSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJbmplY3Rpb25Ub2tlbiwgSW5qZWN0b3IsIE9wdGlvbmFsLCBTa2lwU2VsZiwgaW5qZWN0LCBydW5JbkluamVjdGlvbkNvbnRleHR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUge0FuZ3VsYXJXaWRnZXQsIElzU2xvdENvbnRlbnQsIFNsb3RDb250ZW50fSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7Y2FsbFdpZGdldEZhY3RvcnlXaXRoQ29uZmlnfSBmcm9tICcuL3V0aWxzL3dpZGdldCc7XG5cbmV4cG9ydCAqIGZyb20gJ0BhZ25vcy11aS9jb3JlL2NvbmZpZyc7XG5cbnR5cGUgQWRhcHRQYXJlbnRDb25maWc8Q29uZmlnPiA9IChjb25maWc6IFBhcnRpYWwyTGV2ZWxzPENvbmZpZz4pID0+IFBhcnRpYWwyTGV2ZWxzPENvbmZpZz47XG50eXBlIEluamVjdFdpZGdldHNDb25maWc8Q29uZmlnPiA9IChjb25maWc/OiBQYXJ0aWFsMkxldmVsczxDb25maWc+KSA9PiBXaWRnZXRzQ29uZmlnU3RvcmU8Q29uZmlnPjtcblxuLyoqXG4gKiBBIGZhY3RvcnkgdG8gY3JlYXRlIHRoZSB1dGlsaXRpZXMgdG8gYWxsb3cgd2lkZ2V0cyB0byBiZSBjb250ZXh0LWF3YXJlLlxuICpcbiAqIEl0IGNhbiBiZSB1c2VkIHdoZW4gZXh0ZW5kaW5nIHRoZSBjb3JlIGFuZCBjcmVhdGluZyBuZXcgd2lkZ2V0cy5cbiAqXG4gKiBAdGVtcGxhdGUgQ29uZmlnIC0gVGhlIHR5cGUgb2YgdGhlIHdpZGdldHMgY29uZmlndXJhdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0gd2lkZ2V0c0NvbmZpZ0luamVjdGlvblRva2VuIC0gdGhlIHdpZGdldHMgY29uZmlnIGluamVjdGlvbiB0b2tlblxuICogQHJldHVybnMgdGhlIHV0aWxpdGllcyB0byBjcmVhdGUgLyBtYW5hZ2Ugd2lkZ2V0cyBhbmQgY29udGV4dHNcbiAqL1xuZXhwb3J0IGNvbnN0IHdpZGdldHNDb25maWdGYWN0b3J5ID0gPENvbmZpZyBleHRlbmRzIHtbd2lkZ2V0TmFtZTogc3RyaW5nXTogb2JqZWN0fSA9IFdpZGdldHNDb25maWc+KFxuXHR3aWRnZXRzQ29uZmlnSW5qZWN0aW9uVG9rZW4gPSBuZXcgSW5qZWN0aW9uVG9rZW48V2lkZ2V0c0NvbmZpZ1N0b3JlPENvbmZpZz4+KCd3aWRnZXRzQ29uZmlnJyksXG4pID0+IHtcblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBwcm92aWRlciBvZiB3aWRnZXRzIGRlZmF1bHQgY29uZmlndXJhdGlvbiB0aGF0IGluaGVyaXRzIGZyb20gYW55IHdpZGdldHMgZGVmYXVsdCBjb25maWd1cmF0aW9uIGFscmVhZHkgZGVmaW5lZCBhdCBhbiB1cHBlciBsZXZlbFxuXHQgKiBpbiB0aGUgQW5ndWxhciBkZXBlbmRlbmN5IGluamVjdGlvbiBzeXN0ZW0uIEl0IGNvbnRhaW5zIGl0cyBvd24gc2V0IG9mIHdpZGdldHMgY29uZmlndXJhdGlvbiBwcm9wZXJ0aWVzIHRoYXQgb3ZlcnJpZGUgdGhlIHNhbWUgcHJvcGVydGllcyBmb3JtXG5cdCAqIHRoZSBwYXJlbnQgY29uZmlndXJhdGlvbi5cblx0ICpcblx0ICogQHJlbWFya3Ncblx0ICogVGhlIGNvbmZpZ3VyYXRpb24gaXMgY29tcHV0ZWQgZnJvbSB0aGUgcGFyZW50IGNvbmZpZ3VyYXRpb24gaW4gdHdvIHN0ZXBzOlxuXHQgKiAtIGZpcnN0IHN0ZXA6IHRoZSBwYXJlbnQgY29uZmlndXJhdGlvbiBpcyB0cmFuc2Zvcm1lZCBieSB0aGUgYWRhcHRQYXJlbnRDb25maWcgZnVuY3Rpb24gKGlmIHNwZWNpZmllZCkuXG5cdCAqIElmIGFkYXB0UGFyZW50Q29uZmlnIGlzIG5vdCBzcGVjaWZpZWQsIHRoaXMgc3RlcCBpcyBza2lwcGVkLlxuXHQgKiAtIHNlY29uZCBzdGVwOiB0aGUgY29uZmlndXJhdGlvbiBmcm9tIHN0ZXAgMSBpcyBtZXJnZWQgKDItbGV2ZWxzIGRlZXApIHdpdGggdGhlIG93biQgc3RvcmUuIFRoZSBvd24kIHN0b3JlIGluaXRpYWxseSBjb250YWluc1xuXHQgKiBhbiBlbXB0eSBvYmplY3QgKGkuZS4gbm8gcHJvcGVydHkgZnJvbSB0aGUgcGFyZW50IGlzIG92ZXJyaWRkZW4pLiBJdCBjYW4gYmUgY2hhbmdlZCBieSBjYWxsaW5nIHNldCBvbiB0aGUgc3RvcmUgcmV0dXJuZWQgYnlcblx0ICoge0BsaW5rIGluamVjdFdpZGdldHNDb25maWd9LlxuXHQgKlxuXHQgKiBAcGFyYW0gYWRhcHRQYXJlbnRDb25maWcgLSBvcHRpb25hbCBmdW5jdGlvbiB0aGF0IHJlY2VpdmVzIGEgMi1sZXZlbHMgY29weSBvZiB0aGUgd2lkZ2V0cyBkZWZhdWx0IGNvbmZpZ3VyYXRpb25cblx0ICogZGVmaW5lZCBhdCBhbiB1cHBlciBsZXZlbCBpbiB0aGUgQW5ndWxhciBkZXBlbmRlbmN5IGluamVjdGlvbiBzeXN0ZW0gKG9yIGFuIGVtcHR5IG9iamVjdCBpZiB0aGVyZSBpcyBub25lKSBhbmQgcmV0dXJucyB0aGUgd2lkZ2V0c1xuXHQgKiBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gdG8gYmUgdXNlZC5cblx0ICogSXQgaXMgY2FsbGVkIG9ubHkgaWYgdGhlIGNvbmZpZ3VyYXRpb24gaXMgbmVlZGVkLCBhbmQgd2FzIG5vdCB5ZXQgY29tcHV0ZWQgZm9yIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBwYXJlbnQgY29uZmlndXJhdGlvbi5cblx0ICogSXQgaXMgY2FsbGVkIGluIGEgdGFuc3UgcmVhY3RpdmUgY29udGV4dCwgc28gaXQgY2FuIHVzZSBhbnkgdGFuc3Ugc3RvcmUgYW5kIHdpbGwgYmUgY2FsbGVkIGFnYWluIGlmIHRob3NlIHN0b3JlcyBjaGFuZ2UuXG5cdCAqIEl0IGlzIGFsc28gY2FsbGVkIGluIGFuIEFuZ3VsYXIgaW5qZWN0aW9uIGNvbnRleHQsIHNvIGl0IGNhbiBjYWxsIHRoZSBBbmd1bGFyIGluamVjdCBmdW5jdGlvbiB0byBnZXQgYW5kIHVzZSBkZXBlbmRlbmNpZXMgZnJvbSB0aGVcblx0ICogQW5ndWxhciBkZXBlbmRlbmN5IGluamVjdGlvbiBzeXN0ZW0uXG5cdCAqXG5cdCAqIEByZXR1cm5zIERJIHByb3ZpZGVyIHRvIGJlIGluY2x1ZGVkIGEgbGlzdCBvZiBgcHJvdmlkZXJzYCAoZm9yIGV4YW1wbGUgYXQgYSBjb21wb25lbnQgbGV2ZWwgb3Jcblx0ICogYW55IG90aGVyIGxldmVsIG9mIHRoZSBBbmd1bGFyIGRlcGVuZGVuY3kgaW5qZWN0aW9uIHN5c3RlbSlcblx0ICpcblx0ICogQGV4YW1wbGVcblx0ICogYGBgdHlwZXNjcmlwdFxuXHQgKiBAQ29tcG9uZW50KHtcblx0ICogICAvLyAuLi5cblx0ICogICBwcm92aWRlcnM6IFtcblx0ICogICAgIHByb3ZpZGVXaWRnZXRzQ29uZmlnKChwYXJlbnRDb25maWcpID0+IHtcblx0ICogICAgICAgLy8gZmlyc3Qgc3RlcCBjb25maWd1cmF0aW9uOiB0cmFuc2Zvcm1zIHRoZSBwYXJlbnQgY29uZmlndXJhdGlvblxuXHQgKiAgICAgICBwYXJlbnRDb25maWcucmF0aW5nID0gcGFyZW50Q29uZmlnLnJhdGluZyA/PyB7fTtcblx0ICogICAgICAgcGFyZW50Q29uZmlnLnJhdGluZy5jbGFzc05hbWUgPSBgJHtwYXJlbnRDb25maWcucmF0aW5nLmNsYXNzTmFtZSA/PyAnJ30gbXktcmF0aW5nLWV4dHJhLWNsYXNzYFxuXHQgKiAgICAgICByZXR1cm4gcGFyZW50Q29uZmlnO1xuXHQgKiAgICAgfSlcblx0ICogICBdXG5cdCAqIH0pXG5cdCAqIGNsYXNzIE15Q29tcG9uZW50IHtcblx0ICogICB3aWRnZXRzQ29uZmlnID0gaW5qZWN0V2lkZ2V0c0NvbmZpZygpO1xuXHQgKiAgIGNvbnN0cnVjdG9yKCkge1xuXHQgKiAgICAgdGhpcy53aWRnZXRzQ29uZmlnLnNldCh7XG5cdCAqICAgICAgIC8vIHNlY29uZCBzdGVwIGNvbmZpZ3VyYXRpb246IG92ZXJyaWRlcyB0aGUgcGFyZW50IGNvbmZpZ3VyYXRpb25cblx0ICogICAgICAgcmF0aW5nOiB7XG5cdCAqICAgICAgICAgc2xvdFN0YXI6IE15Q3VzdG9tU2xvdFN0YXJcblx0ICogICAgICAgfVxuXHQgKiAgICAgfSk7XG5cdCAqICAgfVxuXHQgKiAgIC8vIC4uLlxuXHQgKiB9XG5cdCAqIGBgYFxuXHQgKi9cblx0Y29uc3QgcHJvdmlkZVdpZGdldHNDb25maWcgPSAoYWRhcHRQYXJlbnRDb25maWc/OiBBZGFwdFBhcmVudENvbmZpZzxDb25maWc+KTogRmFjdG9yeVByb3ZpZGVyID0+ICh7XG5cdFx0cHJvdmlkZTogd2lkZ2V0c0NvbmZpZ0luamVjdGlvblRva2VuLFxuXHRcdHVzZUZhY3Rvcnk6IChwYXJlbnQ6IFdpZGdldHNDb25maWdTdG9yZTxDb25maWc+IHwgbnVsbCkgPT4ge1xuXHRcdFx0aWYgKGFkYXB0UGFyZW50Q29uZmlnKSB7XG5cdFx0XHRcdGNvbnN0IGluamVjdG9yID0gaW5qZWN0KEluamVjdG9yKTtcblx0XHRcdFx0Y29uc3Qgb3JpZ2luYWxBZGFwdFBhcmVudENvbmZpZyA9IGFkYXB0UGFyZW50Q29uZmlnO1xuXHRcdFx0XHRhZGFwdFBhcmVudENvbmZpZyA9ICh2YWx1ZSkgPT4gcnVuSW5JbmplY3Rpb25Db250ZXh0KGluamVjdG9yLCAoKSA9PiBvcmlnaW5hbEFkYXB0UGFyZW50Q29uZmlnKHZhbHVlKSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY3JlYXRlV2lkZ2V0c0NvbmZpZyhwYXJlbnQgPz8gdW5kZWZpbmVkLCBhZGFwdFBhcmVudENvbmZpZyk7XG5cdFx0fSxcblx0XHRkZXBzOiBbW25ldyBTa2lwU2VsZigpLCBuZXcgT3B0aW9uYWwoKSwgd2lkZ2V0c0NvbmZpZ0luamVjdGlvblRva2VuXV0sXG5cdH0pO1xuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSB3aWRnZXRzIGRlZmF1bHQgY29uZmlndXJhdGlvbiBzdG9yZSB0aGF0IHdhcyBwcm92aWRlZCBpbiB0aGUgY3VycmVudCBpbmplY3Rpb24gY29udGV4dC5cblx0ICogVGhyb3dzIGlmIHRoZSBubyB3aWRnZXRzIGRlZmF1bHQgY29uZmlndXJhdGlvbiBzdG9yZSB3YXMgcHJvdmlkZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSBkZWZhdWx0Q29uZmlnIC0gdmFsdWVzIHRvIHNldCBhcyBzb29uIGFzIHRoZSBjb25maWcgaXMgaW5qZWN0ZWRcblx0ICogQHJlbWFya3Ncblx0ICogVGhpcyBmdW5jdGlvbiBtdXN0IGJlIGNhbGxlZCBmcm9tIGFuIGluamVjdGlvbiBjb250ZXh0LCBzdWNoIGFzIGEgY29uc3RydWN0b3IsIGEgZmFjdG9yeSBmdW5jdGlvbiwgYSBmaWVsZCBpbml0aWFsaXplciBvclxuXHQgKiBhIGZ1bmN0aW9uIHVzZWQgd2l0aCB7QGxpbmsgaHR0cHM6Ly9hbmd1bGFyLmlvL2FwaS9jb3JlL3J1bkluSW5qZWN0aW9uQ29udGV4dCB8IHJ1bkluSW5qZWN0aW9uQ29udGV4dH0uXG5cdCAqXG5cdCAqIEByZXR1cm5zIHRoZSB3aWRnZXRzIGRlZmF1bHQgY29uZmlndXJhdGlvbiBzdG9yZS5cblx0ICovXG5cdGNvbnN0IGluamVjdFdpZGdldHNDb25maWc6IEluamVjdFdpZGdldHNDb25maWc8Q29uZmlnPiA9IChkZWZhdWx0Q29uZmlnPzogUGFydGlhbDJMZXZlbHM8Q29uZmlnPikgPT4ge1xuXHRcdGNvbnN0IHdpZGdldHNDb25maWcgPSBpbmplY3Qod2lkZ2V0c0NvbmZpZ0luamVjdGlvblRva2VuKTtcblx0XHRpZiAoZGVmYXVsdENvbmZpZykge1xuXHRcdFx0d2lkZ2V0c0NvbmZpZy5zZXQoZGVmYXVsdENvbmZpZyk7XG5cdFx0fVxuXHRcdHJldHVybiB3aWRnZXRzQ29uZmlnO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBJbmplY3RzIHRoZSBjb25maWd1cmF0aW9uIGZvciBhIHNwZWNpZmljIHdpZGdldC5cblx0ICpcblx0ICogQHRlbXBsYXRlIE4gLSBUaGUga2V5IG9mIHRoZSB3aWRnZXQgY29uZmlndXJhdGlvbiBpbiB0aGUgYENvbmZpZ2AgdHlwZS5cblx0ICogQHBhcmFtIHdpZGdldE5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgd2lkZ2V0IHdob3NlIGNvbmZpZ3VyYXRpb24gaXMgdG8gYmUgaW5qZWN0ZWQuXG5cdCAqIEByZXR1cm5zIEEgYFJlYWRhYmxlU2lnbmFsYCB0aGF0IHByb3ZpZGVzIGEgcGFydGlhbCBjb25maWd1cmF0aW9uIG9mIHRoZSBzcGVjaWZpZWQgd2lkZ2V0IG9yIGB1bmRlZmluZWRgIGlmIHRoZSBjb25maWd1cmF0aW9uIGlzIG5vdCBhdmFpbGFibGUuXG5cdCAqL1xuXHRjb25zdCBpbmplY3RXaWRnZXRDb25maWcgPSA8TiBleHRlbmRzIGtleW9mIENvbmZpZz4od2lkZ2V0TmFtZTogTik6IFJlYWRhYmxlU2lnbmFsPFBhcnRpYWw8Q29uZmlnW05dPiB8IHVuZGVmaW5lZD4gPT4ge1xuXHRcdGNvbnN0IHdpZGdldHNDb25maWcgPSBpbmplY3Qod2lkZ2V0c0NvbmZpZ0luamVjdGlvblRva2VuLCB7b3B0aW9uYWw6IHRydWV9KTtcblx0XHRyZXR1cm4gY29tcHV0ZWQoKCkgPT4gd2lkZ2V0c0NvbmZpZz8uKClbd2lkZ2V0TmFtZV0pO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGFuZCBpbml0aWFsaXplcyBhIHdpZGdldCB1c2luZyB0aGUgcHJvdmlkZWQgZmFjdG9yeSBhbmQgY29uZmlndXJhdGlvbiBvcHRpb25zLlxuXHQgKlxuXHQgKiBAdGVtcGxhdGUgVyAtIFRoZSB0eXBlIG9mIHRoZSB3aWRnZXQuXG5cdCAqIEBwYXJhbSBwYXJhbXMgLSBUaGUgcGFyYW1ldGVycyBmb3IgY3JlYXRpbmcgdGhlIHdpZGdldC5cblx0ICogQHBhcmFtIHBhcmFtcy5mYWN0b3J5IC0gVGhlIGZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIHRoZSB3aWRnZXQuXG5cdCAqIEBwYXJhbSBwYXJhbXMud2lkZ2V0TmFtZSAtIFRoZSBuYW1lIG9mIHRoZSB3aWRnZXQgY29uZmlndXJhdGlvbiB0byBpbmplY3QsIGlmIGFueS5cblx0ICogQHBhcmFtIHBhcmFtcy5kZWZhdWx0Q29uZmlnIC0gVGhlIGRlZmF1bHQgY29uZmlndXJhdGlvbiBmb3IgdGhlIHdpZGdldC5cblx0ICogQHBhcmFtIHBhcmFtcy5ldmVudHMgLSBUaGUgZXZlbnQgaGFuZGxlcnMgZm9yIHRoZSB3aWRnZXQuXG5cdCAqIEBwYXJhbSBwYXJhbXMuc2xvdFRlbXBsYXRlcyAtIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBzbG90IHRlbXBsYXRlcyBmb3IgdGhlIHdpZGdldC5cblx0ICogQHBhcmFtIHBhcmFtcy5zbG90Q2hpbGRyZW4gLSBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgc2xvdCBjaGlsZHJlbiBmb3IgdGhlIHdpZGdldC5cblx0ICogQHBhcmFtIHBhcmFtcy5hZnRlckluaXQgLSBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBhZnRlciB0aGUgd2lkZ2V0IGlzIGluaXRpYWxpemVkLlxuXHQgKiBAcmV0dXJucyBUaGUgaW5pdGlhbGl6ZWQgd2lkZ2V0LlxuXHQgKi9cblx0Y29uc3QgY2FsbFdpZGdldEZhY3RvcnkgPSA8VyBleHRlbmRzIFdpZGdldD4oe1xuXHRcdGZhY3RvcnksXG5cdFx0d2lkZ2V0TmFtZSA9IG51bGwsXG5cdFx0ZGVmYXVsdENvbmZpZyA9IHt9LFxuXHRcdGV2ZW50cyxcblx0XHRhZnRlckluaXQsXG5cdFx0c2xvdFRlbXBsYXRlcyxcblx0XHRzbG90Q2hpbGRyZW4sXG5cdH06IHtcblx0XHRmYWN0b3J5OiBXaWRnZXRGYWN0b3J5PFc+O1xuXHRcdHdpZGdldE5hbWU/OiBudWxsIHwga2V5b2YgQ29uZmlnO1xuXHRcdGRlZmF1bHRDb25maWc/OiBQYXJ0aWFsPFdpZGdldFByb3BzPFc+PiB8IFJlYWRhYmxlU2lnbmFsPFBhcnRpYWw8V2lkZ2V0UHJvcHM8Vz4+IHwgdW5kZWZpbmVkPjtcblx0XHRldmVudHM/OiBQYXJ0aWFsPFBpY2s8V2lkZ2V0UHJvcHM8Vz4sIGtleW9mIFdpZGdldFByb3BzPFc+ICYgYG9uJHtzdHJpbmd9YD4+O1xuXHRcdGFmdGVySW5pdD86ICh3aWRnZXQ6IEFuZ3VsYXJXaWRnZXQ8Vz4pID0+IHZvaWQ7XG5cdFx0c2xvdFRlbXBsYXRlcz86ICgpID0+IHtcblx0XHRcdFtLIGluIGtleW9mIFdpZGdldFByb3BzPFc+IGFzIElzU2xvdENvbnRlbnQ8V2lkZ2V0UHJvcHM8Vz5bS10+IGV4dGVuZHMgMCA/IG5ldmVyIDogS106IFdpZGdldFByb3BzPFc+W0tdIGV4dGVuZHMgU2xvdENvbnRlbnQ8aW5mZXIgVT5cblx0XHRcdFx0PyBUZW1wbGF0ZVJlZjxVPiB8IHVuZGVmaW5lZFxuXHRcdFx0XHQ6IG5ldmVyO1xuXHRcdH07XG5cdFx0c2xvdENoaWxkcmVuPzogKCkgPT4gVGVtcGxhdGVSZWY8dm9pZD4gfCB1bmRlZmluZWQ7XG5cdH0pOiBBbmd1bGFyV2lkZ2V0PFc+ID0+XG5cdFx0Y2FsbFdpZGdldEZhY3RvcnlXaXRoQ29uZmlnKHtcblx0XHRcdGZhY3RvcnksXG5cdFx0XHR3aWRnZXRDb25maWc6IHdpZGdldE5hbWUgPyAoaW5qZWN0V2lkZ2V0Q29uZmlnKHdpZGdldE5hbWUpIGFzIGFueSkgOiBudWxsLFxuXHRcdFx0ZGVmYXVsdENvbmZpZyxcblx0XHRcdGV2ZW50cyxcblx0XHRcdGFmdGVySW5pdCxcblx0XHRcdHNsb3RUZW1wbGF0ZXM6IHNsb3RUZW1wbGF0ZXMgYXMgYW55LFxuXHRcdFx0c2xvdENoaWxkcmVuLFxuXHRcdH0pO1xuXG5cdHJldHVybiB7XG5cdFx0LyoqXG5cdFx0ICogRGVwZW5kZW5jeSBJbmplY3Rpb24gdG9rZW4gd2hpY2ggY2FuIGJlIHVzZWQgdG8gcHJvdmlkZSBvciBpbmplY3QgdGhlIHdpZGdldHMgZGVmYXVsdCBjb25maWd1cmF0aW9uIHN0b3JlLlxuXHRcdCAqL1xuXHRcdHdpZGdldHNDb25maWdJbmplY3Rpb25Ub2tlbixcblx0XHRwcm92aWRlV2lkZ2V0c0NvbmZpZyxcblx0XHRpbmplY3RXaWRnZXRzQ29uZmlnLFxuXHRcdGluamVjdFdpZGdldENvbmZpZyxcblx0XHRjYWxsV2lkZ2V0RmFjdG9yeSxcblx0fTtcbn07XG5cbmV4cG9ydCBjb25zdCB7d2lkZ2V0c0NvbmZpZ0luamVjdGlvblRva2VuLCBwcm92aWRlV2lkZ2V0c0NvbmZpZywgaW5qZWN0V2lkZ2V0Q29uZmlnLCBpbmplY3RXaWRnZXRzQ29uZmlnLCBjYWxsV2lkZ2V0RmFjdG9yeX0gPVxuXHR3aWRnZXRzQ29uZmlnRmFjdG9yeTxXaWRnZXRzQ29uZmlnPigpO1xuIl19`;export{n as default};
