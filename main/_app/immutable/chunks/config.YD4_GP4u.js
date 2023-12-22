const n=`import { createWidgetsConfig } from '@agnos-ui/core/config';
import { computed } from '@amadeus-it-group/tansu';
import { InjectionToken, Injector, Optional, SkipSelf, inject, runInInjectionContext } from '@angular/core';
import { callWidgetFactoryWithConfig } from './utils/widget';
export * from '@agnos-ui/core/config';
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
     * @remarks
     * This function must be called from an injection context, such as a constructor, a factory function, a field initializer or
     * a function used with {@link https://angular.io/api/core/runInInjectionContext | runInInjectionContext}.
     *
     * @returns the widgets default configuration store.
     */
    const injectWidgetsConfig = () => inject(widgetsConfigInjectionToken);
    const injectWidgetConfig = (widgetName) => {
        const widgetsConfig = inject(widgetsConfigInjectionToken, { optional: true });
        return computed(() => widgetsConfig?.()[widgetName]);
    };
    const callWidgetFactory = ({ factory, widgetName = null, defaultConfig = {}, events, afterInit, }) => callWidgetFactoryWithConfig({
        factory,
        widgetConfig: widgetName ? injectWidgetConfig(widgetName) : null,
        defaultConfig,
        events,
        afterInit,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFFakQsT0FBTyxFQUFDLGNBQWMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUscUJBQXFCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFMUcsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0QsY0FBYyx1QkFBdUIsQ0FBQztBQU10QyxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBRyxDQUNuQyw4QkFBOEIsSUFBSSxjQUFjLENBQTZCLGVBQWUsQ0FBQyxFQUM1RixFQUFFO0lBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01Ba0RFO0lBQ0YsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLGlCQUE4RSxFQUFtQixFQUFFLENBQUMsQ0FBQztRQUNsSSxPQUFPLEVBQUUsMkJBQTJCO1FBQ3BDLFVBQVUsRUFBRSxDQUFDLE1BQXlDLEVBQUUsRUFBRTtZQUN6RCxJQUFJLGlCQUFpQixFQUFFO2dCQUN0QixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2xDLE1BQU0seUJBQXlCLEdBQUcsaUJBQWlCLENBQUM7Z0JBQ3BELGlCQUFpQixHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUN2RztZQUNELE9BQU8sbUJBQW1CLENBQUMsTUFBTSxJQUFJLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3BFLENBQUM7UUFDRCxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO0tBQ3JFLENBQUMsQ0FBQztJQUVIOzs7Ozs7Ozs7T0FTRztJQUNILE1BQU0sbUJBQW1CLEdBQUcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFFdEUsTUFBTSxrQkFBa0IsR0FBRyxDQUF5QixVQUFhLEVBQWtELEVBQUU7UUFDcEgsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLDJCQUEyQixFQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDNUUsT0FBTyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUMsQ0FBQztJQUVGLE1BQU0saUJBQWlCLEdBQUcsQ0FBbUIsRUFDNUMsT0FBTyxFQUNQLFVBQVUsR0FBRyxJQUFJLEVBQ2pCLGFBQWEsR0FBRyxFQUFFLEVBQ2xCLE1BQU0sRUFDTixTQUFTLEdBT1QsRUFBb0IsRUFBRSxDQUN0QiwyQkFBMkIsQ0FBQztRQUMzQixPQUFPO1FBQ1AsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUUsa0JBQWtCLENBQUMsVUFBVSxDQUFTLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFDekUsYUFBYTtRQUNiLE1BQU07UUFDTixTQUFTO0tBQ1QsQ0FBQyxDQUFDO0lBRUosT0FBTztRQUNOOztXQUVHO1FBQ0gsMkJBQTJCO1FBQzNCLG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtLQUNqQixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sRUFBQywyQkFBMkIsRUFBRSxvQkFBb0IsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBQyxHQUMzSCxvQkFBb0IsRUFBaUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtXaWRnZXQsIFdpZGdldEZhY3RvcnksIFdpZGdldFByb3BzfSBmcm9tICdAYWdub3MtdWkvY29yZS90eXBlcyc7XG5pbXBvcnQgdHlwZSB7UGFydGlhbDJMZXZlbHMsIFdpZGdldHNDb25maWdTdG9yZX0gZnJvbSAnQGFnbm9zLXVpL2NvcmUvY29uZmlnJztcbmltcG9ydCB7Y3JlYXRlV2lkZ2V0c0NvbmZpZ30gZnJvbSAnQGFnbm9zLXVpL2NvcmUvY29uZmlnJztcbmltcG9ydCB0eXBlIHtSZWFkYWJsZVNpZ25hbH0gZnJvbSAnQGFtYWRldXMtaXQtZ3JvdXAvdGFuc3UnO1xuaW1wb3J0IHtjb21wdXRlZH0gZnJvbSAnQGFtYWRldXMtaXQtZ3JvdXAvdGFuc3UnO1xuaW1wb3J0IHR5cGUge0ZhY3RvcnlQcm92aWRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0luamVjdGlvblRva2VuLCBJbmplY3RvciwgT3B0aW9uYWwsIFNraXBTZWxmLCBpbmplY3QsIHJ1bkluSW5qZWN0aW9uQ29udGV4dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7QWRhcHRQcm9wc1Nsb3RzLCBBbmd1bGFyV2lkZ2V0fSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7Y2FsbFdpZGdldEZhY3RvcnlXaXRoQ29uZmlnfSBmcm9tICcuL3V0aWxzL3dpZGdldCc7XG5cbmV4cG9ydCAqIGZyb20gJ0BhZ25vcy11aS9jb3JlL2NvbmZpZyc7XG5cbmV4cG9ydCB0eXBlIFdpZGdldHNDb25maWcgPSB7XG5cdFtXaWRnZXROYW1lIGluIGtleW9mIGltcG9ydCgnQGFnbm9zLXVpL2NvcmUvY29uZmlnJykuV2lkZ2V0c0NvbmZpZ106IEFkYXB0UHJvcHNTbG90czxpbXBvcnQoJ0BhZ25vcy11aS9jb3JlL2NvbmZpZycpLldpZGdldHNDb25maWdbV2lkZ2V0TmFtZV0+O1xufTtcblxuZXhwb3J0IGNvbnN0IHdpZGdldHNDb25maWdGYWN0b3J5ID0gPENvbmZpZyBleHRlbmRzIHtbd2lkZ2V0TmFtZTogc3RyaW5nXTogb2JqZWN0fSA9IFdpZGdldHNDb25maWc+KFxuXHR3aWRnZXRzQ29uZmlnSW5qZWN0aW9uVG9rZW4gPSBuZXcgSW5qZWN0aW9uVG9rZW48V2lkZ2V0c0NvbmZpZ1N0b3JlPENvbmZpZz4+KCd3aWRnZXRzQ29uZmlnJyksXG4pID0+IHtcblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBwcm92aWRlciBvZiB3aWRnZXRzIGRlZmF1bHQgY29uZmlndXJhdGlvbiB0aGF0IGluaGVyaXRzIGZyb20gYW55IHdpZGdldHMgZGVmYXVsdCBjb25maWd1cmF0aW9uIGFscmVhZHkgZGVmaW5lZCBhdCBhbiB1cHBlciBsZXZlbFxuXHQgKiBpbiB0aGUgQW5ndWxhciBkZXBlbmRlbmN5IGluamVjdGlvbiBzeXN0ZW0uIEl0IGNvbnRhaW5zIGl0cyBvd24gc2V0IG9mIHdpZGdldHMgY29uZmlndXJhdGlvbiBwcm9wZXJ0aWVzIHRoYXQgb3ZlcnJpZGUgdGhlIHNhbWUgcHJvcGVydGllcyBmb3JtXG5cdCAqIHRoZSBwYXJlbnQgY29uZmlndXJhdGlvbi5cblx0ICpcblx0ICogQHJlbWFya3Ncblx0ICogVGhlIGNvbmZpZ3VyYXRpb24gaXMgY29tcHV0ZWQgZnJvbSB0aGUgcGFyZW50IGNvbmZpZ3VyYXRpb24gaW4gdHdvIHN0ZXBzOlxuXHQgKiAtIGZpcnN0IHN0ZXA6IHRoZSBwYXJlbnQgY29uZmlndXJhdGlvbiBpcyB0cmFuc2Zvcm1lZCBieSB0aGUgYWRhcHRQYXJlbnRDb25maWcgZnVuY3Rpb24gKGlmIHNwZWNpZmllZCkuXG5cdCAqIElmIGFkYXB0UGFyZW50Q29uZmlnIGlzIG5vdCBzcGVjaWZpZWQsIHRoaXMgc3RlcCBpcyBza2lwcGVkLlxuXHQgKiAtIHNlY29uZCBzdGVwOiB0aGUgY29uZmlndXJhdGlvbiBmcm9tIHN0ZXAgMSBpcyBtZXJnZWQgKDItbGV2ZWxzIGRlZXApIHdpdGggdGhlIG93biQgc3RvcmUuIFRoZSBvd24kIHN0b3JlIGluaXRpYWxseSBjb250YWluc1xuXHQgKiBhbiBlbXB0eSBvYmplY3QgKGkuZS4gbm8gcHJvcGVydHkgZnJvbSB0aGUgcGFyZW50IGlzIG92ZXJyaWRkZW4pLiBJdCBjYW4gYmUgY2hhbmdlZCBieSBjYWxsaW5nIHNldCBvbiB0aGUgc3RvcmUgcmV0dXJuZWQgYnlcblx0ICoge0BsaW5rIGluamVjdFdpZGdldHNDb25maWd9LlxuXHQgKlxuXHQgKiBAcGFyYW0gYWRhcHRQYXJlbnRDb25maWcgLSBvcHRpb25hbCBmdW5jdGlvbiB0aGF0IHJlY2VpdmVzIGEgMi1sZXZlbHMgY29weSBvZiB0aGUgd2lkZ2V0cyBkZWZhdWx0IGNvbmZpZ3VyYXRpb25cblx0ICogZGVmaW5lZCBhdCBhbiB1cHBlciBsZXZlbCBpbiB0aGUgQW5ndWxhciBkZXBlbmRlbmN5IGluamVjdGlvbiBzeXN0ZW0gKG9yIGFuIGVtcHR5IG9iamVjdCBpZiB0aGVyZSBpcyBub25lKSBhbmQgcmV0dXJucyB0aGUgd2lkZ2V0c1xuXHQgKiBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gdG8gYmUgdXNlZC5cblx0ICogSXQgaXMgY2FsbGVkIG9ubHkgaWYgdGhlIGNvbmZpZ3VyYXRpb24gaXMgbmVlZGVkLCBhbmQgd2FzIG5vdCB5ZXQgY29tcHV0ZWQgZm9yIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBwYXJlbnQgY29uZmlndXJhdGlvbi5cblx0ICogSXQgaXMgY2FsbGVkIGluIGEgdGFuc3UgcmVhY3RpdmUgY29udGV4dCwgc28gaXQgY2FuIHVzZSBhbnkgdGFuc3Ugc3RvcmUgYW5kIHdpbGwgYmUgY2FsbGVkIGFnYWluIGlmIHRob3NlIHN0b3JlcyBjaGFuZ2UuXG5cdCAqIEl0IGlzIGFsc28gY2FsbGVkIGluIGFuIEFuZ3VsYXIgaW5qZWN0aW9uIGNvbnRleHQsIHNvIGl0IGNhbiBjYWxsIHRoZSBBbmd1bGFyIGluamVjdCBmdW5jdGlvbiB0byBnZXQgYW5kIHVzZSBkZXBlbmRlbmNpZXMgZnJvbSB0aGVcblx0ICogQW5ndWxhciBkZXBlbmRlbmN5IGluamVjdGlvbiBzeXN0ZW0uXG5cblx0KiBAcmV0dXJucyBESSBwcm92aWRlciB0byBiZSBpbmNsdWRlZCBhIGxpc3Qgb2YgYHByb3ZpZGVyc2AgKGZvciBleGFtcGxlIGF0IGEgY29tcG9uZW50IGxldmVsIG9yXG5cdCogYW55IG90aGVyIGxldmVsIG9mIHRoZSBBbmd1bGFyIGRlcGVuZGVuY3kgaW5qZWN0aW9uIHN5c3RlbSlcblx0KlxuXHQqIEBleGFtcGxlXG5cdCogYGBgdHlwZXNjcmlwdFxuXHQqIEBDb21wb25lbnQoe1xuXHQqICAgLy8gLi4uXG5cdCogICBwcm92aWRlcnM6IFtcblx0KiAgICAgcHJvdmlkZVdpZGdldHNDb25maWcoKHBhcmVudENvbmZpZykgPT4ge1xuXHQqICAgICAgIC8vIGZpcnN0IHN0ZXAgY29uZmlndXJhdGlvbjogdHJhbnNmb3JtcyB0aGUgcGFyZW50IGNvbmZpZ3VyYXRpb25cblx0KiAgICAgICBwYXJlbnRDb25maWcucmF0aW5nID0gcGFyZW50Q29uZmlnLnJhdGluZyA/PyB7fTtcblx0KiAgICAgICBwYXJlbnRDb25maWcucmF0aW5nLmNsYXNzTmFtZSA9IGAke3BhcmVudENvbmZpZy5yYXRpbmcuY2xhc3NOYW1lID8/ICcnfSBteS1yYXRpbmctZXh0cmEtY2xhc3NgXG5cdCogICAgICAgcmV0dXJuIHBhcmVudENvbmZpZztcblx0KiAgICAgfSlcblx0KiAgIF1cblx0KiB9KVxuXHQqIGNsYXNzIE15Q29tcG9uZW50IHtcblx0KiAgIHdpZGdldHNDb25maWcgPSBpbmplY3RXaWRnZXRzQ29uZmlnKCk7XG5cdCogICBjb25zdHJ1Y3RvcigpIHtcblx0KiAgICAgdGhpcy53aWRnZXRzQ29uZmlnLnNldCh7XG5cdCogICAgICAgLy8gc2Vjb25kIHN0ZXAgY29uZmlndXJhdGlvbjogb3ZlcnJpZGVzIHRoZSBwYXJlbnQgY29uZmlndXJhdGlvblxuXHQqICAgICAgIHJhdGluZzoge1xuXHQqICAgICAgICAgc2xvdFN0YXI6IE15Q3VzdG9tU2xvdFN0YXJcblx0KiAgICAgICB9XG5cdCogICAgIH0pO1xuXHQqICAgfVxuXHQqICAgLy8gLi4uXG5cdCogfVxuXHQqIGBgYFxuXHQqL1xuXHRjb25zdCBwcm92aWRlV2lkZ2V0c0NvbmZpZyA9IChhZGFwdFBhcmVudENvbmZpZz86IChjb25maWc6IFBhcnRpYWwyTGV2ZWxzPENvbmZpZz4pID0+IFBhcnRpYWwyTGV2ZWxzPENvbmZpZz4pOiBGYWN0b3J5UHJvdmlkZXIgPT4gKHtcblx0XHRwcm92aWRlOiB3aWRnZXRzQ29uZmlnSW5qZWN0aW9uVG9rZW4sXG5cdFx0dXNlRmFjdG9yeTogKHBhcmVudDogV2lkZ2V0c0NvbmZpZ1N0b3JlPENvbmZpZz4gfCBudWxsKSA9PiB7XG5cdFx0XHRpZiAoYWRhcHRQYXJlbnRDb25maWcpIHtcblx0XHRcdFx0Y29uc3QgaW5qZWN0b3IgPSBpbmplY3QoSW5qZWN0b3IpO1xuXHRcdFx0XHRjb25zdCBvcmlnaW5hbEFkYXB0UGFyZW50Q29uZmlnID0gYWRhcHRQYXJlbnRDb25maWc7XG5cdFx0XHRcdGFkYXB0UGFyZW50Q29uZmlnID0gKHZhbHVlKSA9PiBydW5JbkluamVjdGlvbkNvbnRleHQoaW5qZWN0b3IsICgpID0+IG9yaWdpbmFsQWRhcHRQYXJlbnRDb25maWcodmFsdWUpKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBjcmVhdGVXaWRnZXRzQ29uZmlnKHBhcmVudCA/PyB1bmRlZmluZWQsIGFkYXB0UGFyZW50Q29uZmlnKTtcblx0XHR9LFxuXHRcdGRlcHM6IFtbbmV3IFNraXBTZWxmKCksIG5ldyBPcHRpb25hbCgpLCB3aWRnZXRzQ29uZmlnSW5qZWN0aW9uVG9rZW5dXSxcblx0fSk7XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIHdpZGdldHMgZGVmYXVsdCBjb25maWd1cmF0aW9uIHN0b3JlIHRoYXQgd2FzIHByb3ZpZGVkIGluIHRoZSBjdXJyZW50IGluamVjdGlvbiBjb250ZXh0LlxuXHQgKiBUaHJvd3MgaWYgdGhlIG5vIHdpZGdldHMgZGVmYXVsdCBjb25maWd1cmF0aW9uIHN0b3JlIHdhcyBwcm92aWRlZC5cblx0ICpcblx0ICogQHJlbWFya3Ncblx0ICogVGhpcyBmdW5jdGlvbiBtdXN0IGJlIGNhbGxlZCBmcm9tIGFuIGluamVjdGlvbiBjb250ZXh0LCBzdWNoIGFzIGEgY29uc3RydWN0b3IsIGEgZmFjdG9yeSBmdW5jdGlvbiwgYSBmaWVsZCBpbml0aWFsaXplciBvclxuXHQgKiBhIGZ1bmN0aW9uIHVzZWQgd2l0aCB7QGxpbmsgaHR0cHM6Ly9hbmd1bGFyLmlvL2FwaS9jb3JlL3J1bkluSW5qZWN0aW9uQ29udGV4dCB8IHJ1bkluSW5qZWN0aW9uQ29udGV4dH0uXG5cdCAqXG5cdCAqIEByZXR1cm5zIHRoZSB3aWRnZXRzIGRlZmF1bHQgY29uZmlndXJhdGlvbiBzdG9yZS5cblx0ICovXG5cdGNvbnN0IGluamVjdFdpZGdldHNDb25maWcgPSAoKSA9PiBpbmplY3Qod2lkZ2V0c0NvbmZpZ0luamVjdGlvblRva2VuKTtcblxuXHRjb25zdCBpbmplY3RXaWRnZXRDb25maWcgPSA8TiBleHRlbmRzIGtleW9mIENvbmZpZz4od2lkZ2V0TmFtZTogTik6IFJlYWRhYmxlU2lnbmFsPFBhcnRpYWw8Q29uZmlnW05dPiB8IHVuZGVmaW5lZD4gPT4ge1xuXHRcdGNvbnN0IHdpZGdldHNDb25maWcgPSBpbmplY3Qod2lkZ2V0c0NvbmZpZ0luamVjdGlvblRva2VuLCB7b3B0aW9uYWw6IHRydWV9KTtcblx0XHRyZXR1cm4gY29tcHV0ZWQoKCkgPT4gd2lkZ2V0c0NvbmZpZz8uKClbd2lkZ2V0TmFtZV0pO1xuXHR9O1xuXG5cdGNvbnN0IGNhbGxXaWRnZXRGYWN0b3J5ID0gPFcgZXh0ZW5kcyBXaWRnZXQ+KHtcblx0XHRmYWN0b3J5LFxuXHRcdHdpZGdldE5hbWUgPSBudWxsLFxuXHRcdGRlZmF1bHRDb25maWcgPSB7fSxcblx0XHRldmVudHMsXG5cdFx0YWZ0ZXJJbml0LFxuXHR9OiB7XG5cdFx0ZmFjdG9yeTogV2lkZ2V0RmFjdG9yeTxXPjtcblx0XHR3aWRnZXROYW1lPzogbnVsbCB8IGtleW9mIENvbmZpZztcblx0XHRkZWZhdWx0Q29uZmlnPzogUGFydGlhbDxXaWRnZXRQcm9wczxXPj4gfCBSZWFkYWJsZVNpZ25hbDxQYXJ0aWFsPFdpZGdldFByb3BzPFc+PiB8IHVuZGVmaW5lZD47XG5cdFx0ZXZlbnRzOiBQaWNrPFdpZGdldFByb3BzPFc+LCBrZXlvZiBXaWRnZXRQcm9wczxXPiAmIGBvbiR7c3RyaW5nfWA+O1xuXHRcdGFmdGVySW5pdD86ICgpID0+IHZvaWQ7XG5cdH0pOiBBbmd1bGFyV2lkZ2V0PFc+ID0+XG5cdFx0Y2FsbFdpZGdldEZhY3RvcnlXaXRoQ29uZmlnKHtcblx0XHRcdGZhY3RvcnksXG5cdFx0XHR3aWRnZXRDb25maWc6IHdpZGdldE5hbWUgPyAoaW5qZWN0V2lkZ2V0Q29uZmlnKHdpZGdldE5hbWUpIGFzIGFueSkgOiBudWxsLFxuXHRcdFx0ZGVmYXVsdENvbmZpZyxcblx0XHRcdGV2ZW50cyxcblx0XHRcdGFmdGVySW5pdCxcblx0XHR9KTtcblxuXHRyZXR1cm4ge1xuXHRcdC8qKlxuXHRcdCAqIERlcGVuZGVuY3kgSW5qZWN0aW9uIHRva2VuIHdoaWNoIGNhbiBiZSB1c2VkIHRvIHByb3ZpZGUgb3IgaW5qZWN0IHRoZSB3aWRnZXRzIGRlZmF1bHQgY29uZmlndXJhdGlvbiBzdG9yZS5cblx0XHQgKi9cblx0XHR3aWRnZXRzQ29uZmlnSW5qZWN0aW9uVG9rZW4sXG5cdFx0cHJvdmlkZVdpZGdldHNDb25maWcsXG5cdFx0aW5qZWN0V2lkZ2V0c0NvbmZpZyxcblx0XHRpbmplY3RXaWRnZXRDb25maWcsXG5cdFx0Y2FsbFdpZGdldEZhY3RvcnksXG5cdH07XG59O1xuXG5leHBvcnQgY29uc3Qge3dpZGdldHNDb25maWdJbmplY3Rpb25Ub2tlbiwgcHJvdmlkZVdpZGdldHNDb25maWcsIGluamVjdFdpZGdldENvbmZpZywgaW5qZWN0V2lkZ2V0c0NvbmZpZywgY2FsbFdpZGdldEZhY3Rvcnl9ID1cblx0d2lkZ2V0c0NvbmZpZ0ZhY3Rvcnk8V2lkZ2V0c0NvbmZpZz4oKTtcbiJdfQ==`;export{n as default};
