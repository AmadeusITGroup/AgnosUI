const n=`import { createWidgetsConfig } from '@agnos-ui/core';
import { computed } from '@amadeus-it-group/tansu';
import { InjectionToken, Injector, Optional, SkipSelf, inject, runInInjectionContext } from '@angular/core';
import { callWidgetFactoryWithConfig } from './utils';
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
    const callWidgetFactory = ({ factory, widgetName = null, defaultConfig = {}, events, }) => callWidgetFactoryWithConfig({
        factory,
        widgetConfig: widgetName ? injectWidgetConfig(widgetName) : null,
        defaultConfig,
        events,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vaGVhZGxlc3Mvc3JjL2xpYi9jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRWpELE9BQU8sRUFBQyxjQUFjLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLHFCQUFxQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRzFHLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQU1wRCxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBRyxDQUNuQyw4QkFBOEIsSUFBSSxjQUFjLENBQTZCLGVBQWUsQ0FBQyxFQUM1RixFQUFFO0lBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01Ba0RFO0lBQ0YsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLGlCQUE4RSxFQUFtQixFQUFFLENBQUMsQ0FBQztRQUNsSSxPQUFPLEVBQUUsMkJBQTJCO1FBQ3BDLFVBQVUsRUFBRSxDQUFDLE1BQXlDLEVBQUUsRUFBRTtZQUN6RCxJQUFJLGlCQUFpQixFQUFFO2dCQUN0QixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2xDLE1BQU0seUJBQXlCLEdBQUcsaUJBQWlCLENBQUM7Z0JBQ3BELGlCQUFpQixHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUN2RztZQUNELE9BQU8sbUJBQW1CLENBQUMsTUFBTSxJQUFJLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3BFLENBQUM7UUFDRCxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO0tBQ3JFLENBQUMsQ0FBQztJQUVIOzs7Ozs7Ozs7T0FTRztJQUNILE1BQU0sbUJBQW1CLEdBQUcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFFdEUsTUFBTSxrQkFBa0IsR0FBRyxDQUF5QixVQUFhLEVBQWtELEVBQUU7UUFDcEgsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLDJCQUEyQixFQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDNUUsT0FBTyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUMsQ0FBQztJQUVGLE1BQU0saUJBQWlCLEdBQUcsQ0FBbUIsRUFDNUMsT0FBTyxFQUNQLFVBQVUsR0FBRyxJQUFJLEVBQ2pCLGFBQWEsR0FBRyxFQUFFLEVBQ2xCLE1BQU0sR0FNTixFQUFxQixFQUFFLENBQ3ZCLDJCQUEyQixDQUFDO1FBQzNCLE9BQU87UUFDUCxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBRSxrQkFBa0IsQ0FBQyxVQUFVLENBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUN6RSxhQUFhO1FBQ2IsTUFBTTtLQUNOLENBQUMsQ0FBQztJQUVKLE9BQU87UUFDTjs7V0FFRztRQUNILDJCQUEyQjtRQUMzQixvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixpQkFBaUI7S0FDakIsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLEVBQUMsMkJBQTJCLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUMsR0FDM0gsb0JBQW9CLEVBQWlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7UGFydGlhbDJMZXZlbHMsIFdpZGdldCwgV2lkZ2V0RmFjdG9yeSwgV2lkZ2V0UHJvcHMsIFdpZGdldHNDb25maWdTdG9yZX0gZnJvbSAnQGFnbm9zLXVpL2NvcmUnO1xuaW1wb3J0IHtjcmVhdGVXaWRnZXRzQ29uZmlnfSBmcm9tICdAYWdub3MtdWkvY29yZSc7XG5pbXBvcnQgdHlwZSB7UmVhZGFibGVTaWduYWx9IGZyb20gJ0BhbWFkZXVzLWl0LWdyb3VwL3RhbnN1JztcbmltcG9ydCB7Y29tcHV0ZWR9IGZyb20gJ0BhbWFkZXVzLWl0LWdyb3VwL3RhbnN1JztcbmltcG9ydCB0eXBlIHtGYWN0b3J5UHJvdmlkZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJbmplY3Rpb25Ub2tlbiwgSW5qZWN0b3IsIE9wdGlvbmFsLCBTa2lwU2VsZiwgaW5qZWN0LCBydW5JbkluamVjdGlvbkNvbnRleHR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUge0FkYXB0UHJvcHNTbG90c30gZnJvbSAnLi9zbG90VHlwZXMnO1xuaW1wb3J0IHR5cGUge1dpdGhQYXRjaFNsb3RzfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7Y2FsbFdpZGdldEZhY3RvcnlXaXRoQ29uZmlnfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IHR5cGUgV2lkZ2V0c0NvbmZpZyA9IHtcblx0W1dpZGdldE5hbWUgaW4ga2V5b2YgaW1wb3J0KCdAYWdub3MtdWkvY29yZScpLldpZGdldHNDb25maWddOiBBZGFwdFByb3BzU2xvdHM8aW1wb3J0KCdAYWdub3MtdWkvY29yZScpLldpZGdldHNDb25maWdbV2lkZ2V0TmFtZV0+O1xufTtcblxuZXhwb3J0IGNvbnN0IHdpZGdldHNDb25maWdGYWN0b3J5ID0gPENvbmZpZyBleHRlbmRzIHtbd2lkZ2V0TmFtZTogc3RyaW5nXTogb2JqZWN0fSA9IFdpZGdldHNDb25maWc+KFxuXHR3aWRnZXRzQ29uZmlnSW5qZWN0aW9uVG9rZW4gPSBuZXcgSW5qZWN0aW9uVG9rZW48V2lkZ2V0c0NvbmZpZ1N0b3JlPENvbmZpZz4+KCd3aWRnZXRzQ29uZmlnJyksXG4pID0+IHtcblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBwcm92aWRlciBvZiB3aWRnZXRzIGRlZmF1bHQgY29uZmlndXJhdGlvbiB0aGF0IGluaGVyaXRzIGZyb20gYW55IHdpZGdldHMgZGVmYXVsdCBjb25maWd1cmF0aW9uIGFscmVhZHkgZGVmaW5lZCBhdCBhbiB1cHBlciBsZXZlbFxuXHQgKiBpbiB0aGUgQW5ndWxhciBkZXBlbmRlbmN5IGluamVjdGlvbiBzeXN0ZW0uIEl0IGNvbnRhaW5zIGl0cyBvd24gc2V0IG9mIHdpZGdldHMgY29uZmlndXJhdGlvbiBwcm9wZXJ0aWVzIHRoYXQgb3ZlcnJpZGUgdGhlIHNhbWUgcHJvcGVydGllcyBmb3JtXG5cdCAqIHRoZSBwYXJlbnQgY29uZmlndXJhdGlvbi5cblx0ICpcblx0ICogQHJlbWFya3Ncblx0ICogVGhlIGNvbmZpZ3VyYXRpb24gaXMgY29tcHV0ZWQgZnJvbSB0aGUgcGFyZW50IGNvbmZpZ3VyYXRpb24gaW4gdHdvIHN0ZXBzOlxuXHQgKiAtIGZpcnN0IHN0ZXA6IHRoZSBwYXJlbnQgY29uZmlndXJhdGlvbiBpcyB0cmFuc2Zvcm1lZCBieSB0aGUgYWRhcHRQYXJlbnRDb25maWcgZnVuY3Rpb24gKGlmIHNwZWNpZmllZCkuXG5cdCAqIElmIGFkYXB0UGFyZW50Q29uZmlnIGlzIG5vdCBzcGVjaWZpZWQsIHRoaXMgc3RlcCBpcyBza2lwcGVkLlxuXHQgKiAtIHNlY29uZCBzdGVwOiB0aGUgY29uZmlndXJhdGlvbiBmcm9tIHN0ZXAgMSBpcyBtZXJnZWQgKDItbGV2ZWxzIGRlZXApIHdpdGggdGhlIG93biQgc3RvcmUuIFRoZSBvd24kIHN0b3JlIGluaXRpYWxseSBjb250YWluc1xuXHQgKiBhbiBlbXB0eSBvYmplY3QgKGkuZS4gbm8gcHJvcGVydHkgZnJvbSB0aGUgcGFyZW50IGlzIG92ZXJyaWRkZW4pLiBJdCBjYW4gYmUgY2hhbmdlZCBieSBjYWxsaW5nIHNldCBvbiB0aGUgc3RvcmUgcmV0dXJuZWQgYnlcblx0ICoge0BsaW5rIGluamVjdFdpZGdldHNDb25maWd9LlxuXHQgKlxuXHQgKiBAcGFyYW0gYWRhcHRQYXJlbnRDb25maWcgLSBvcHRpb25hbCBmdW5jdGlvbiB0aGF0IHJlY2VpdmVzIGEgMi1sZXZlbHMgY29weSBvZiB0aGUgd2lkZ2V0cyBkZWZhdWx0IGNvbmZpZ3VyYXRpb25cblx0ICogZGVmaW5lZCBhdCBhbiB1cHBlciBsZXZlbCBpbiB0aGUgQW5ndWxhciBkZXBlbmRlbmN5IGluamVjdGlvbiBzeXN0ZW0gKG9yIGFuIGVtcHR5IG9iamVjdCBpZiB0aGVyZSBpcyBub25lKSBhbmQgcmV0dXJucyB0aGUgd2lkZ2V0c1xuXHQgKiBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gdG8gYmUgdXNlZC5cblx0ICogSXQgaXMgY2FsbGVkIG9ubHkgaWYgdGhlIGNvbmZpZ3VyYXRpb24gaXMgbmVlZGVkLCBhbmQgd2FzIG5vdCB5ZXQgY29tcHV0ZWQgZm9yIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBwYXJlbnQgY29uZmlndXJhdGlvbi5cblx0ICogSXQgaXMgY2FsbGVkIGluIGEgdGFuc3UgcmVhY3RpdmUgY29udGV4dCwgc28gaXQgY2FuIHVzZSBhbnkgdGFuc3Ugc3RvcmUgYW5kIHdpbGwgYmUgY2FsbGVkIGFnYWluIGlmIHRob3NlIHN0b3JlcyBjaGFuZ2UuXG5cdCAqIEl0IGlzIGFsc28gY2FsbGVkIGluIGFuIEFuZ3VsYXIgaW5qZWN0aW9uIGNvbnRleHQsIHNvIGl0IGNhbiBjYWxsIHRoZSBBbmd1bGFyIGluamVjdCBmdW5jdGlvbiB0byBnZXQgYW5kIHVzZSBkZXBlbmRlbmNpZXMgZnJvbSB0aGVcblx0ICogQW5ndWxhciBkZXBlbmRlbmN5IGluamVjdGlvbiBzeXN0ZW0uXG5cblx0KiBAcmV0dXJucyBESSBwcm92aWRlciB0byBiZSBpbmNsdWRlZCBhIGxpc3Qgb2YgYHByb3ZpZGVyc2AgKGZvciBleGFtcGxlIGF0IGEgY29tcG9uZW50IGxldmVsIG9yXG5cdCogYW55IG90aGVyIGxldmVsIG9mIHRoZSBBbmd1bGFyIGRlcGVuZGVuY3kgaW5qZWN0aW9uIHN5c3RlbSlcblx0KlxuXHQqIEBleGFtcGxlXG5cdCogYGBgdHlwZXNjcmlwdFxuXHQqIEBDb21wb25lbnQoe1xuXHQqICAgLy8gLi4uXG5cdCogICBwcm92aWRlcnM6IFtcblx0KiAgICAgcHJvdmlkZVdpZGdldHNDb25maWcoKHBhcmVudENvbmZpZykgPT4ge1xuXHQqICAgICAgIC8vIGZpcnN0IHN0ZXAgY29uZmlndXJhdGlvbjogdHJhbnNmb3JtcyB0aGUgcGFyZW50IGNvbmZpZ3VyYXRpb25cblx0KiAgICAgICBwYXJlbnRDb25maWcucmF0aW5nID0gcGFyZW50Q29uZmlnLnJhdGluZyA/PyB7fTtcblx0KiAgICAgICBwYXJlbnRDb25maWcucmF0aW5nLmNsYXNzTmFtZSA9IGAke3BhcmVudENvbmZpZy5yYXRpbmcuY2xhc3NOYW1lID8/ICcnfSBteS1yYXRpbmctZXh0cmEtY2xhc3NgXG5cdCogICAgICAgcmV0dXJuIHBhcmVudENvbmZpZztcblx0KiAgICAgfSlcblx0KiAgIF1cblx0KiB9KVxuXHQqIGNsYXNzIE15Q29tcG9uZW50IHtcblx0KiAgIHdpZGdldHNDb25maWcgPSBpbmplY3RXaWRnZXRzQ29uZmlnKCk7XG5cdCogICBjb25zdHJ1Y3RvcigpIHtcblx0KiAgICAgdGhpcy53aWRnZXRzQ29uZmlnLnNldCh7XG5cdCogICAgICAgLy8gc2Vjb25kIHN0ZXAgY29uZmlndXJhdGlvbjogb3ZlcnJpZGVzIHRoZSBwYXJlbnQgY29uZmlndXJhdGlvblxuXHQqICAgICAgIHJhdGluZzoge1xuXHQqICAgICAgICAgc2xvdFN0YXI6IE15Q3VzdG9tU2xvdFN0YXJcblx0KiAgICAgICB9XG5cdCogICAgIH0pO1xuXHQqICAgfVxuXHQqICAgLy8gLi4uXG5cdCogfVxuXHQqIGBgYFxuXHQqL1xuXHRjb25zdCBwcm92aWRlV2lkZ2V0c0NvbmZpZyA9IChhZGFwdFBhcmVudENvbmZpZz86IChjb25maWc6IFBhcnRpYWwyTGV2ZWxzPENvbmZpZz4pID0+IFBhcnRpYWwyTGV2ZWxzPENvbmZpZz4pOiBGYWN0b3J5UHJvdmlkZXIgPT4gKHtcblx0XHRwcm92aWRlOiB3aWRnZXRzQ29uZmlnSW5qZWN0aW9uVG9rZW4sXG5cdFx0dXNlRmFjdG9yeTogKHBhcmVudDogV2lkZ2V0c0NvbmZpZ1N0b3JlPENvbmZpZz4gfCBudWxsKSA9PiB7XG5cdFx0XHRpZiAoYWRhcHRQYXJlbnRDb25maWcpIHtcblx0XHRcdFx0Y29uc3QgaW5qZWN0b3IgPSBpbmplY3QoSW5qZWN0b3IpO1xuXHRcdFx0XHRjb25zdCBvcmlnaW5hbEFkYXB0UGFyZW50Q29uZmlnID0gYWRhcHRQYXJlbnRDb25maWc7XG5cdFx0XHRcdGFkYXB0UGFyZW50Q29uZmlnID0gKHZhbHVlKSA9PiBydW5JbkluamVjdGlvbkNvbnRleHQoaW5qZWN0b3IsICgpID0+IG9yaWdpbmFsQWRhcHRQYXJlbnRDb25maWcodmFsdWUpKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBjcmVhdGVXaWRnZXRzQ29uZmlnKHBhcmVudCA/PyB1bmRlZmluZWQsIGFkYXB0UGFyZW50Q29uZmlnKTtcblx0XHR9LFxuXHRcdGRlcHM6IFtbbmV3IFNraXBTZWxmKCksIG5ldyBPcHRpb25hbCgpLCB3aWRnZXRzQ29uZmlnSW5qZWN0aW9uVG9rZW5dXSxcblx0fSk7XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIHdpZGdldHMgZGVmYXVsdCBjb25maWd1cmF0aW9uIHN0b3JlIHRoYXQgd2FzIHByb3ZpZGVkIGluIHRoZSBjdXJyZW50IGluamVjdGlvbiBjb250ZXh0LlxuXHQgKiBUaHJvd3MgaWYgdGhlIG5vIHdpZGdldHMgZGVmYXVsdCBjb25maWd1cmF0aW9uIHN0b3JlIHdhcyBwcm92aWRlZC5cblx0ICpcblx0ICogQHJlbWFya3Ncblx0ICogVGhpcyBmdW5jdGlvbiBtdXN0IGJlIGNhbGxlZCBmcm9tIGFuIGluamVjdGlvbiBjb250ZXh0LCBzdWNoIGFzIGEgY29uc3RydWN0b3IsIGEgZmFjdG9yeSBmdW5jdGlvbiwgYSBmaWVsZCBpbml0aWFsaXplciBvclxuXHQgKiBhIGZ1bmN0aW9uIHVzZWQgd2l0aCB7QGxpbmsgaHR0cHM6Ly9hbmd1bGFyLmlvL2FwaS9jb3JlL3J1bkluSW5qZWN0aW9uQ29udGV4dCB8IHJ1bkluSW5qZWN0aW9uQ29udGV4dH0uXG5cdCAqXG5cdCAqIEByZXR1cm5zIHRoZSB3aWRnZXRzIGRlZmF1bHQgY29uZmlndXJhdGlvbiBzdG9yZS5cblx0ICovXG5cdGNvbnN0IGluamVjdFdpZGdldHNDb25maWcgPSAoKSA9PiBpbmplY3Qod2lkZ2V0c0NvbmZpZ0luamVjdGlvblRva2VuKTtcblxuXHRjb25zdCBpbmplY3RXaWRnZXRDb25maWcgPSA8TiBleHRlbmRzIGtleW9mIENvbmZpZz4od2lkZ2V0TmFtZTogTik6IFJlYWRhYmxlU2lnbmFsPFBhcnRpYWw8Q29uZmlnW05dPiB8IHVuZGVmaW5lZD4gPT4ge1xuXHRcdGNvbnN0IHdpZGdldHNDb25maWcgPSBpbmplY3Qod2lkZ2V0c0NvbmZpZ0luamVjdGlvblRva2VuLCB7b3B0aW9uYWw6IHRydWV9KTtcblx0XHRyZXR1cm4gY29tcHV0ZWQoKCkgPT4gd2lkZ2V0c0NvbmZpZz8uKClbd2lkZ2V0TmFtZV0pO1xuXHR9O1xuXG5cdGNvbnN0IGNhbGxXaWRnZXRGYWN0b3J5ID0gPFcgZXh0ZW5kcyBXaWRnZXQ+KHtcblx0XHRmYWN0b3J5LFxuXHRcdHdpZGdldE5hbWUgPSBudWxsLFxuXHRcdGRlZmF1bHRDb25maWcgPSB7fSxcblx0XHRldmVudHMsXG5cdH06IHtcblx0XHRmYWN0b3J5OiBXaWRnZXRGYWN0b3J5PFc+O1xuXHRcdHdpZGdldE5hbWU/OiBudWxsIHwga2V5b2YgQ29uZmlnO1xuXHRcdGRlZmF1bHRDb25maWc/OiBQYXJ0aWFsPFdpZGdldFByb3BzPFc+PiB8IFJlYWRhYmxlU2lnbmFsPFBhcnRpYWw8V2lkZ2V0UHJvcHM8Vz4+IHwgdW5kZWZpbmVkPjtcblx0XHRldmVudHM6IFBpY2s8V2lkZ2V0UHJvcHM8Vz4sIGtleW9mIFdpZGdldFByb3BzPFc+ICYgYG9uJHtzdHJpbmd9YD47XG5cdH0pOiBXaXRoUGF0Y2hTbG90czxXPiA9PlxuXHRcdGNhbGxXaWRnZXRGYWN0b3J5V2l0aENvbmZpZyh7XG5cdFx0XHRmYWN0b3J5LFxuXHRcdFx0d2lkZ2V0Q29uZmlnOiB3aWRnZXROYW1lID8gKGluamVjdFdpZGdldENvbmZpZyh3aWRnZXROYW1lKSBhcyBhbnkpIDogbnVsbCxcblx0XHRcdGRlZmF1bHRDb25maWcsXG5cdFx0XHRldmVudHMsXG5cdFx0fSk7XG5cblx0cmV0dXJuIHtcblx0XHQvKipcblx0XHQgKiBEZXBlbmRlbmN5IEluamVjdGlvbiB0b2tlbiB3aGljaCBjYW4gYmUgdXNlZCB0byBwcm92aWRlIG9yIGluamVjdCB0aGUgd2lkZ2V0cyBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gc3RvcmUuXG5cdFx0ICovXG5cdFx0d2lkZ2V0c0NvbmZpZ0luamVjdGlvblRva2VuLFxuXHRcdHByb3ZpZGVXaWRnZXRzQ29uZmlnLFxuXHRcdGluamVjdFdpZGdldHNDb25maWcsXG5cdFx0aW5qZWN0V2lkZ2V0Q29uZmlnLFxuXHRcdGNhbGxXaWRnZXRGYWN0b3J5LFxuXHR9O1xufTtcblxuZXhwb3J0IGNvbnN0IHt3aWRnZXRzQ29uZmlnSW5qZWN0aW9uVG9rZW4sIHByb3ZpZGVXaWRnZXRzQ29uZmlnLCBpbmplY3RXaWRnZXRDb25maWcsIGluamVjdFdpZGdldHNDb25maWcsIGNhbGxXaWRnZXRGYWN0b3J5fSA9XG5cdHdpZGdldHNDb25maWdGYWN0b3J5PFdpZGdldHNDb25maWc+KCk7XG4iXX0=`;export{n as default};
