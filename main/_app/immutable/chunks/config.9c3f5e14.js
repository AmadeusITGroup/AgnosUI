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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vaGVhZGxlc3Mvc3JjL2xpYi9jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRWpELE9BQU8sRUFBQyxjQUFjLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLHFCQUFxQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRzFHLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQU1wRCxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBRyxDQUNuQyw4QkFBOEIsSUFBSSxjQUFjLENBQTZCLGVBQWUsQ0FBQyxFQUM1RixFQUFFO0lBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01Ba0RFO0lBQ0YsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLGlCQUE4RSxFQUFtQixFQUFFLENBQUMsQ0FBQztRQUNsSSxPQUFPLEVBQUUsMkJBQTJCO1FBQ3BDLFVBQVUsRUFBRSxDQUFDLE1BQXlDLEVBQUUsRUFBRTtZQUN6RCxJQUFJLGlCQUFpQixFQUFFO2dCQUN0QixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2xDLE1BQU0seUJBQXlCLEdBQUcsaUJBQWlCLENBQUM7Z0JBQ3BELGlCQUFpQixHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUN2RztZQUNELE9BQU8sbUJBQW1CLENBQUMsTUFBTSxJQUFJLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3BFLENBQUM7UUFDRCxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO0tBQ3JFLENBQUMsQ0FBQztJQUVIOzs7Ozs7Ozs7T0FTRztJQUNILE1BQU0sbUJBQW1CLEdBQUcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFFdEUsTUFBTSxrQkFBa0IsR0FBRyxDQUF5QixVQUFhLEVBQWtELEVBQUU7UUFDcEgsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLDJCQUEyQixFQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDNUUsT0FBTyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUMsQ0FBQztJQUVGLE1BQU0saUJBQWlCLEdBQUcsQ0FBbUIsRUFDNUMsT0FBTyxFQUNQLFVBQVUsR0FBRyxJQUFJLEVBQ2pCLGFBQWEsR0FBRyxFQUFFLEVBQ2xCLE1BQU0sR0FNTixFQUFxQixFQUFFLENBQ3ZCLDJCQUEyQixDQUFDO1FBQzNCLE9BQU87UUFDUCxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBRSxrQkFBa0IsQ0FBQyxVQUFVLENBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUN6RSxhQUFhO1FBQ2IsTUFBTTtLQUNOLENBQUMsQ0FBQztJQUVKLE9BQU87UUFDTjs7V0FFRztRQUNILDJCQUEyQjtRQUMzQixvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixpQkFBaUI7S0FDakIsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLEVBQUMsMkJBQTJCLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUMsR0FDM0gsb0JBQW9CLEVBQWlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7UGFydGlhbDJMZXZlbHMsIFdpZGdldCwgV2lkZ2V0RmFjdG9yeSwgV2lkZ2V0UHJvcHMsIFdpZGdldHNDb25maWdTdG9yZX0gZnJvbSAnQGFnbm9zLXVpL2NvcmUnO1xuaW1wb3J0IHtjcmVhdGVXaWRnZXRzQ29uZmlnfSBmcm9tICdAYWdub3MtdWkvY29yZSc7XG5pbXBvcnQgdHlwZSB7UmVhZGFibGVTaWduYWx9IGZyb20gJ0BhbWFkZXVzLWl0LWdyb3VwL3RhbnN1JztcbmltcG9ydCB7Y29tcHV0ZWR9IGZyb20gJ0BhbWFkZXVzLWl0LWdyb3VwL3RhbnN1JztcbmltcG9ydCB0eXBlIHtGYWN0b3J5UHJvdmlkZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJbmplY3Rpb25Ub2tlbiwgSW5qZWN0b3IsIE9wdGlvbmFsLCBTa2lwU2VsZiwgaW5qZWN0LCBydW5JbkluamVjdGlvbkNvbnRleHR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUge0FkYXB0UHJvcHNTbG90c30gZnJvbSAnLi9zbG90VHlwZXMnO1xuaW1wb3J0IHR5cGUge1dpdGhQYXRjaFNsb3RzfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7Y2FsbFdpZGdldEZhY3RvcnlXaXRoQ29uZmlnfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IHR5cGUgV2lkZ2V0c0NvbmZpZyA9IHtcblx0W1dpZGdldE5hbWUgaW4ga2V5b2YgaW1wb3J0KCdAYWdub3MtdWkvY29yZScpLldpZGdldHNDb25maWddOiBBZGFwdFByb3BzU2xvdHM8aW1wb3J0KCdAYWdub3MtdWkvY29yZScpLldpZGdldHNDb25maWdbV2lkZ2V0TmFtZV0+O1xufTtcblxuZXhwb3J0IGNvbnN0IHdpZGdldHNDb25maWdGYWN0b3J5ID0gPENvbmZpZyBleHRlbmRzIHtbd2lkZ2V0TmFtZTogc3RyaW5nXTogb2JqZWN0fSA9IFdpZGdldHNDb25maWc+KFxuXHR3aWRnZXRzQ29uZmlnSW5qZWN0aW9uVG9rZW4gPSBuZXcgSW5qZWN0aW9uVG9rZW48V2lkZ2V0c0NvbmZpZ1N0b3JlPENvbmZpZz4+KCd3aWRnZXRzQ29uZmlnJylcbikgPT4ge1xuXHQvKipcblx0ICogQ3JlYXRlcyBhIHByb3ZpZGVyIG9mIHdpZGdldHMgZGVmYXVsdCBjb25maWd1cmF0aW9uIHRoYXQgaW5oZXJpdHMgZnJvbSBhbnkgd2lkZ2V0cyBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gYWxyZWFkeSBkZWZpbmVkIGF0IGFuIHVwcGVyIGxldmVsXG5cdCAqIGluIHRoZSBBbmd1bGFyIGRlcGVuZGVuY3kgaW5qZWN0aW9uIHN5c3RlbS4gSXQgY29udGFpbnMgaXRzIG93biBzZXQgb2Ygd2lkZ2V0cyBjb25maWd1cmF0aW9uIHByb3BlcnRpZXMgdGhhdCBvdmVycmlkZSB0aGUgc2FtZSBwcm9wZXJ0aWVzIGZvcm1cblx0ICogdGhlIHBhcmVudCBjb25maWd1cmF0aW9uLlxuXHQgKlxuXHQgKiBAcmVtYXJrc1xuXHQgKiBUaGUgY29uZmlndXJhdGlvbiBpcyBjb21wdXRlZCBmcm9tIHRoZSBwYXJlbnQgY29uZmlndXJhdGlvbiBpbiB0d28gc3RlcHM6XG5cdCAqIC0gZmlyc3Qgc3RlcDogdGhlIHBhcmVudCBjb25maWd1cmF0aW9uIGlzIHRyYW5zZm9ybWVkIGJ5IHRoZSBhZGFwdFBhcmVudENvbmZpZyBmdW5jdGlvbiAoaWYgc3BlY2lmaWVkKS5cblx0ICogSWYgYWRhcHRQYXJlbnRDb25maWcgaXMgbm90IHNwZWNpZmllZCwgdGhpcyBzdGVwIGlzIHNraXBwZWQuXG5cdCAqIC0gc2Vjb25kIHN0ZXA6IHRoZSBjb25maWd1cmF0aW9uIGZyb20gc3RlcCAxIGlzIG1lcmdlZCAoMi1sZXZlbHMgZGVlcCkgd2l0aCB0aGUgb3duJCBzdG9yZS4gVGhlIG93biQgc3RvcmUgaW5pdGlhbGx5IGNvbnRhaW5zXG5cdCAqIGFuIGVtcHR5IG9iamVjdCAoaS5lLiBubyBwcm9wZXJ0eSBmcm9tIHRoZSBwYXJlbnQgaXMgb3ZlcnJpZGRlbikuIEl0IGNhbiBiZSBjaGFuZ2VkIGJ5IGNhbGxpbmcgc2V0IG9uIHRoZSBzdG9yZSByZXR1cm5lZCBieVxuXHQgKiB7QGxpbmsgaW5qZWN0V2lkZ2V0c0NvbmZpZ30uXG5cdCAqXG5cdCAqIEBwYXJhbSBhZGFwdFBhcmVudENvbmZpZyAtIG9wdGlvbmFsIGZ1bmN0aW9uIHRoYXQgcmVjZWl2ZXMgYSAyLWxldmVscyBjb3B5IG9mIHRoZSB3aWRnZXRzIGRlZmF1bHQgY29uZmlndXJhdGlvblxuXHQgKiBkZWZpbmVkIGF0IGFuIHVwcGVyIGxldmVsIGluIHRoZSBBbmd1bGFyIGRlcGVuZGVuY3kgaW5qZWN0aW9uIHN5c3RlbSAob3IgYW4gZW1wdHkgb2JqZWN0IGlmIHRoZXJlIGlzIG5vbmUpIGFuZCByZXR1cm5zIHRoZSB3aWRnZXRzXG5cdCAqIGRlZmF1bHQgY29uZmlndXJhdGlvbiB0byBiZSB1c2VkLlxuXHQgKiBJdCBpcyBjYWxsZWQgb25seSBpZiB0aGUgY29uZmlndXJhdGlvbiBpcyBuZWVkZWQsIGFuZCB3YXMgbm90IHlldCBjb21wdXRlZCBmb3IgdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIHBhcmVudCBjb25maWd1cmF0aW9uLlxuXHQgKiBJdCBpcyBjYWxsZWQgaW4gYSB0YW5zdSByZWFjdGl2ZSBjb250ZXh0LCBzbyBpdCBjYW4gdXNlIGFueSB0YW5zdSBzdG9yZSBhbmQgd2lsbCBiZSBjYWxsZWQgYWdhaW4gaWYgdGhvc2Ugc3RvcmVzIGNoYW5nZS5cblx0ICogSXQgaXMgYWxzbyBjYWxsZWQgaW4gYW4gQW5ndWxhciBpbmplY3Rpb24gY29udGV4dCwgc28gaXQgY2FuIGNhbGwgdGhlIEFuZ3VsYXIgaW5qZWN0IGZ1bmN0aW9uIHRvIGdldCBhbmQgdXNlIGRlcGVuZGVuY2llcyBmcm9tIHRoZVxuXHQgKiBBbmd1bGFyIGRlcGVuZGVuY3kgaW5qZWN0aW9uIHN5c3RlbS5cblxuXHQqIEByZXR1cm5zIERJIHByb3ZpZGVyIHRvIGJlIGluY2x1ZGVkIGEgbGlzdCBvZiBgcHJvdmlkZXJzYCAoZm9yIGV4YW1wbGUgYXQgYSBjb21wb25lbnQgbGV2ZWwgb3Jcblx0KiBhbnkgb3RoZXIgbGV2ZWwgb2YgdGhlIEFuZ3VsYXIgZGVwZW5kZW5jeSBpbmplY3Rpb24gc3lzdGVtKVxuXHQqXG5cdCogQGV4YW1wbGVcblx0KiBgYGB0eXBlc2NyaXB0XG5cdCogQENvbXBvbmVudCh7XG5cdCogICAvLyAuLi5cblx0KiAgIHByb3ZpZGVyczogW1xuXHQqICAgICBwcm92aWRlV2lkZ2V0c0NvbmZpZygocGFyZW50Q29uZmlnKSA9PiB7XG5cdCogICAgICAgLy8gZmlyc3Qgc3RlcCBjb25maWd1cmF0aW9uOiB0cmFuc2Zvcm1zIHRoZSBwYXJlbnQgY29uZmlndXJhdGlvblxuXHQqICAgICAgIHBhcmVudENvbmZpZy5yYXRpbmcgPSBwYXJlbnRDb25maWcucmF0aW5nID8/IHt9O1xuXHQqICAgICAgIHBhcmVudENvbmZpZy5yYXRpbmcuY2xhc3NOYW1lID0gYCR7cGFyZW50Q29uZmlnLnJhdGluZy5jbGFzc05hbWUgPz8gJyd9IG15LXJhdGluZy1leHRyYS1jbGFzc2Bcblx0KiAgICAgICByZXR1cm4gcGFyZW50Q29uZmlnO1xuXHQqICAgICB9KVxuXHQqICAgXVxuXHQqIH0pXG5cdCogY2xhc3MgTXlDb21wb25lbnQge1xuXHQqICAgd2lkZ2V0c0NvbmZpZyA9IGluamVjdFdpZGdldHNDb25maWcoKTtcblx0KiAgIGNvbnN0cnVjdG9yKCkge1xuXHQqICAgICB0aGlzLndpZGdldHNDb25maWcuc2V0KHtcblx0KiAgICAgICAvLyBzZWNvbmQgc3RlcCBjb25maWd1cmF0aW9uOiBvdmVycmlkZXMgdGhlIHBhcmVudCBjb25maWd1cmF0aW9uXG5cdCogICAgICAgcmF0aW5nOiB7XG5cdCogICAgICAgICBzbG90U3RhcjogTXlDdXN0b21TbG90U3RhclxuXHQqICAgICAgIH1cblx0KiAgICAgfSk7XG5cdCogICB9XG5cdCogICAvLyAuLi5cblx0KiB9XG5cdCogYGBgXG5cdCovXG5cdGNvbnN0IHByb3ZpZGVXaWRnZXRzQ29uZmlnID0gKGFkYXB0UGFyZW50Q29uZmlnPzogKGNvbmZpZzogUGFydGlhbDJMZXZlbHM8Q29uZmlnPikgPT4gUGFydGlhbDJMZXZlbHM8Q29uZmlnPik6IEZhY3RvcnlQcm92aWRlciA9PiAoe1xuXHRcdHByb3ZpZGU6IHdpZGdldHNDb25maWdJbmplY3Rpb25Ub2tlbixcblx0XHR1c2VGYWN0b3J5OiAocGFyZW50OiBXaWRnZXRzQ29uZmlnU3RvcmU8Q29uZmlnPiB8IG51bGwpID0+IHtcblx0XHRcdGlmIChhZGFwdFBhcmVudENvbmZpZykge1xuXHRcdFx0XHRjb25zdCBpbmplY3RvciA9IGluamVjdChJbmplY3Rvcik7XG5cdFx0XHRcdGNvbnN0IG9yaWdpbmFsQWRhcHRQYXJlbnRDb25maWcgPSBhZGFwdFBhcmVudENvbmZpZztcblx0XHRcdFx0YWRhcHRQYXJlbnRDb25maWcgPSAodmFsdWUpID0+IHJ1bkluSW5qZWN0aW9uQ29udGV4dChpbmplY3RvciwgKCkgPT4gb3JpZ2luYWxBZGFwdFBhcmVudENvbmZpZyh2YWx1ZSkpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNyZWF0ZVdpZGdldHNDb25maWcocGFyZW50ID8/IHVuZGVmaW5lZCwgYWRhcHRQYXJlbnRDb25maWcpO1xuXHRcdH0sXG5cdFx0ZGVwczogW1tuZXcgU2tpcFNlbGYoKSwgbmV3IE9wdGlvbmFsKCksIHdpZGdldHNDb25maWdJbmplY3Rpb25Ub2tlbl1dLFxuXHR9KTtcblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgd2lkZ2V0cyBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gc3RvcmUgdGhhdCB3YXMgcHJvdmlkZWQgaW4gdGhlIGN1cnJlbnQgaW5qZWN0aW9uIGNvbnRleHQuXG5cdCAqIFRocm93cyBpZiB0aGUgbm8gd2lkZ2V0cyBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gc3RvcmUgd2FzIHByb3ZpZGVkLlxuXHQgKlxuXHQgKiBAcmVtYXJrc1xuXHQgKiBUaGlzIGZ1bmN0aW9uIG11c3QgYmUgY2FsbGVkIGZyb20gYW4gaW5qZWN0aW9uIGNvbnRleHQsIHN1Y2ggYXMgYSBjb25zdHJ1Y3RvciwgYSBmYWN0b3J5IGZ1bmN0aW9uLCBhIGZpZWxkIGluaXRpYWxpemVyIG9yXG5cdCAqIGEgZnVuY3Rpb24gdXNlZCB3aXRoIHtAbGluayBodHRwczovL2FuZ3VsYXIuaW8vYXBpL2NvcmUvcnVuSW5JbmplY3Rpb25Db250ZXh0IHwgcnVuSW5JbmplY3Rpb25Db250ZXh0fS5cblx0ICpcblx0ICogQHJldHVybnMgdGhlIHdpZGdldHMgZGVmYXVsdCBjb25maWd1cmF0aW9uIHN0b3JlLlxuXHQgKi9cblx0Y29uc3QgaW5qZWN0V2lkZ2V0c0NvbmZpZyA9ICgpID0+IGluamVjdCh3aWRnZXRzQ29uZmlnSW5qZWN0aW9uVG9rZW4pO1xuXG5cdGNvbnN0IGluamVjdFdpZGdldENvbmZpZyA9IDxOIGV4dGVuZHMga2V5b2YgQ29uZmlnPih3aWRnZXROYW1lOiBOKTogUmVhZGFibGVTaWduYWw8UGFydGlhbDxDb25maWdbTl0+IHwgdW5kZWZpbmVkPiA9PiB7XG5cdFx0Y29uc3Qgd2lkZ2V0c0NvbmZpZyA9IGluamVjdCh3aWRnZXRzQ29uZmlnSW5qZWN0aW9uVG9rZW4sIHtvcHRpb25hbDogdHJ1ZX0pO1xuXHRcdHJldHVybiBjb21wdXRlZCgoKSA9PiB3aWRnZXRzQ29uZmlnPy4oKVt3aWRnZXROYW1lXSk7XG5cdH07XG5cblx0Y29uc3QgY2FsbFdpZGdldEZhY3RvcnkgPSA8VyBleHRlbmRzIFdpZGdldD4oe1xuXHRcdGZhY3RvcnksXG5cdFx0d2lkZ2V0TmFtZSA9IG51bGwsXG5cdFx0ZGVmYXVsdENvbmZpZyA9IHt9LFxuXHRcdGV2ZW50cyxcblx0fToge1xuXHRcdGZhY3Rvcnk6IFdpZGdldEZhY3Rvcnk8Vz47XG5cdFx0d2lkZ2V0TmFtZT86IG51bGwgfCBrZXlvZiBDb25maWc7XG5cdFx0ZGVmYXVsdENvbmZpZz86IFBhcnRpYWw8V2lkZ2V0UHJvcHM8Vz4+IHwgUmVhZGFibGVTaWduYWw8UGFydGlhbDxXaWRnZXRQcm9wczxXPj4gfCB1bmRlZmluZWQ+O1xuXHRcdGV2ZW50czogUGljazxXaWRnZXRQcm9wczxXPiwga2V5b2YgV2lkZ2V0UHJvcHM8Vz4gJiBgb24ke3N0cmluZ31gPjtcblx0fSk6IFdpdGhQYXRjaFNsb3RzPFc+ID0+XG5cdFx0Y2FsbFdpZGdldEZhY3RvcnlXaXRoQ29uZmlnKHtcblx0XHRcdGZhY3RvcnksXG5cdFx0XHR3aWRnZXRDb25maWc6IHdpZGdldE5hbWUgPyAoaW5qZWN0V2lkZ2V0Q29uZmlnKHdpZGdldE5hbWUpIGFzIGFueSkgOiBudWxsLFxuXHRcdFx0ZGVmYXVsdENvbmZpZyxcblx0XHRcdGV2ZW50cyxcblx0XHR9KTtcblxuXHRyZXR1cm4ge1xuXHRcdC8qKlxuXHRcdCAqIERlcGVuZGVuY3kgSW5qZWN0aW9uIHRva2VuIHdoaWNoIGNhbiBiZSB1c2VkIHRvIHByb3ZpZGUgb3IgaW5qZWN0IHRoZSB3aWRnZXRzIGRlZmF1bHQgY29uZmlndXJhdGlvbiBzdG9yZS5cblx0XHQgKi9cblx0XHR3aWRnZXRzQ29uZmlnSW5qZWN0aW9uVG9rZW4sXG5cdFx0cHJvdmlkZVdpZGdldHNDb25maWcsXG5cdFx0aW5qZWN0V2lkZ2V0c0NvbmZpZyxcblx0XHRpbmplY3RXaWRnZXRDb25maWcsXG5cdFx0Y2FsbFdpZGdldEZhY3RvcnksXG5cdH07XG59O1xuXG5leHBvcnQgY29uc3Qge3dpZGdldHNDb25maWdJbmplY3Rpb25Ub2tlbiwgcHJvdmlkZVdpZGdldHNDb25maWcsIGluamVjdFdpZGdldENvbmZpZywgaW5qZWN0V2lkZ2V0c0NvbmZpZywgY2FsbFdpZGdldEZhY3Rvcnl9ID1cblx0d2lkZ2V0c0NvbmZpZ0ZhY3Rvcnk8V2lkZ2V0c0NvbmZpZz4oKTtcbiJdfQ==`;export{n as default};
