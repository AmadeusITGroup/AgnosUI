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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFFakQsT0FBTyxFQUFDLGNBQWMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUscUJBQXFCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFMUcsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0QsY0FBYyx1QkFBdUIsQ0FBQztBQU90Qzs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsQ0FDbkMsOEJBQThCLElBQUksY0FBYyxDQUE2QixlQUFlLENBQUMsRUFDNUYsRUFBRTtJQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWtERztJQUNILE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxpQkFBNkMsRUFBbUIsRUFBRSxDQUFDLENBQUM7UUFDakcsT0FBTyxFQUFFLDJCQUEyQjtRQUNwQyxVQUFVLEVBQUUsQ0FBQyxNQUF5QyxFQUFFLEVBQUU7WUFDekQsSUFBSSxpQkFBaUIsRUFBRTtnQkFDdEIsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNsQyxNQUFNLHlCQUF5QixHQUFHLGlCQUFpQixDQUFDO2dCQUNwRCxpQkFBaUIsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMscUJBQXFCLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDdkc7WUFDRCxPQUFPLG1CQUFtQixDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUNwRSxDQUFDO1FBQ0QsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztLQUNyRSxDQUFDLENBQUM7SUFFSDs7Ozs7Ozs7O09BU0c7SUFDSCxNQUFNLG1CQUFtQixHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBRXRFLE1BQU0sa0JBQWtCLEdBQUcsQ0FBeUIsVUFBYSxFQUFrRCxFQUFFO1FBQ3BILE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQywyQkFBMkIsRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQzVFLE9BQU8sUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDLENBQUM7SUFFRixNQUFNLGlCQUFpQixHQUFHLENBQW1CLEVBQzVDLE9BQU8sRUFDUCxVQUFVLEdBQUcsSUFBSSxFQUNqQixhQUFhLEdBQUcsRUFBRSxFQUNsQixNQUFNLEVBQ04sU0FBUyxHQU9ULEVBQW9CLEVBQUUsQ0FDdEIsMkJBQTJCLENBQUM7UUFDM0IsT0FBTztRQUNQLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFFLGtCQUFrQixDQUFDLFVBQVUsQ0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBQ3pFLGFBQWE7UUFDYixNQUFNO1FBQ04sU0FBUztLQUNULENBQUMsQ0FBQztJQUVKLE9BQU87UUFDTjs7V0FFRztRQUNILDJCQUEyQjtRQUMzQixvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixpQkFBaUI7S0FDakIsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLEVBQUMsMkJBQTJCLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUMsR0FDM0gsb0JBQW9CLEVBQWlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7V2lkZ2V0LCBXaWRnZXRGYWN0b3J5LCBXaWRnZXRQcm9wc30gZnJvbSAnQGFnbm9zLXVpL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHR5cGUge1BhcnRpYWwyTGV2ZWxzLCBXaWRnZXRzQ29uZmlnU3RvcmUsIFdpZGdldHNDb25maWcgYXMgQ29yZVdpZGdldHNDb25maWd9IGZyb20gJ0BhZ25vcy11aS9jb3JlL2NvbmZpZyc7XG5pbXBvcnQge2NyZWF0ZVdpZGdldHNDb25maWd9IGZyb20gJ0BhZ25vcy11aS9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgdHlwZSB7UmVhZGFibGVTaWduYWx9IGZyb20gJ0BhbWFkZXVzLWl0LWdyb3VwL3RhbnN1JztcbmltcG9ydCB7Y29tcHV0ZWR9IGZyb20gJ0BhbWFkZXVzLWl0LWdyb3VwL3RhbnN1JztcbmltcG9ydCB0eXBlIHtGYWN0b3J5UHJvdmlkZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJbmplY3Rpb25Ub2tlbiwgSW5qZWN0b3IsIE9wdGlvbmFsLCBTa2lwU2VsZiwgaW5qZWN0LCBydW5JbkluamVjdGlvbkNvbnRleHR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUge0FkYXB0UHJvcHNTbG90cywgQW5ndWxhcldpZGdldH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge2NhbGxXaWRnZXRGYWN0b3J5V2l0aENvbmZpZ30gZnJvbSAnLi91dGlscy93aWRnZXQnO1xuXG5leHBvcnQgKiBmcm9tICdAYWdub3MtdWkvY29yZS9jb25maWcnO1xuXG5leHBvcnQgdHlwZSBXaWRnZXRzQ29uZmlnID0ge1xuXHRbV2lkZ2V0TmFtZSBpbiBrZXlvZiBDb3JlV2lkZ2V0c0NvbmZpZ106IEFkYXB0UHJvcHNTbG90czxDb3JlV2lkZ2V0c0NvbmZpZ1tXaWRnZXROYW1lXT47XG59O1xudHlwZSBBZGFwdFBhcmVudENvbmZpZzxDb25maWc+ID0gKGNvbmZpZzogUGFydGlhbDJMZXZlbHM8Q29uZmlnPikgPT4gUGFydGlhbDJMZXZlbHM8Q29uZmlnPjtcblxuLyoqXG4gKiBBIGZhY3RvcnkgdG8gY3JlYXRlIHRoZSB1dGlsaXRpZXMgdG8gYWxsb3cgd2lkZ2V0cyB0byBiZSBjb250ZXh0LWF3YXJlLlxuICpcbiAqIEl0IGNhbiBiZSB1c2VkIHdoZW4gZXh0ZW5kaW5nIHRoZSBjb3JlIGFuZCBjcmVhdGluZyBuZXcgd2lkZ2V0cy5cbiAqXG4gKiBAcGFyYW0gd2lkZ2V0c0NvbmZpZ0luamVjdGlvblRva2VuIC0gdGhlIHdpZGdldHMgY29uZmlnIGluamVjdGlvbiB0b2tlblxuICogQHJldHVybnMgdGhlIHV0aWxpdGllcyB0byBjcmVhdGUgLyBtYW5hZ2Ugd2lkZ2V0cyBhbmQgY29udGV4dHNcbiAqL1xuZXhwb3J0IGNvbnN0IHdpZGdldHNDb25maWdGYWN0b3J5ID0gPENvbmZpZyBleHRlbmRzIHtbd2lkZ2V0TmFtZTogc3RyaW5nXTogb2JqZWN0fSA9IFdpZGdldHNDb25maWc+KFxuXHR3aWRnZXRzQ29uZmlnSW5qZWN0aW9uVG9rZW4gPSBuZXcgSW5qZWN0aW9uVG9rZW48V2lkZ2V0c0NvbmZpZ1N0b3JlPENvbmZpZz4+KCd3aWRnZXRzQ29uZmlnJyksXG4pID0+IHtcblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBwcm92aWRlciBvZiB3aWRnZXRzIGRlZmF1bHQgY29uZmlndXJhdGlvbiB0aGF0IGluaGVyaXRzIGZyb20gYW55IHdpZGdldHMgZGVmYXVsdCBjb25maWd1cmF0aW9uIGFscmVhZHkgZGVmaW5lZCBhdCBhbiB1cHBlciBsZXZlbFxuXHQgKiBpbiB0aGUgQW5ndWxhciBkZXBlbmRlbmN5IGluamVjdGlvbiBzeXN0ZW0uIEl0IGNvbnRhaW5zIGl0cyBvd24gc2V0IG9mIHdpZGdldHMgY29uZmlndXJhdGlvbiBwcm9wZXJ0aWVzIHRoYXQgb3ZlcnJpZGUgdGhlIHNhbWUgcHJvcGVydGllcyBmb3JtXG5cdCAqIHRoZSBwYXJlbnQgY29uZmlndXJhdGlvbi5cblx0ICpcblx0ICogQHJlbWFya3Ncblx0ICogVGhlIGNvbmZpZ3VyYXRpb24gaXMgY29tcHV0ZWQgZnJvbSB0aGUgcGFyZW50IGNvbmZpZ3VyYXRpb24gaW4gdHdvIHN0ZXBzOlxuXHQgKiAtIGZpcnN0IHN0ZXA6IHRoZSBwYXJlbnQgY29uZmlndXJhdGlvbiBpcyB0cmFuc2Zvcm1lZCBieSB0aGUgYWRhcHRQYXJlbnRDb25maWcgZnVuY3Rpb24gKGlmIHNwZWNpZmllZCkuXG5cdCAqIElmIGFkYXB0UGFyZW50Q29uZmlnIGlzIG5vdCBzcGVjaWZpZWQsIHRoaXMgc3RlcCBpcyBza2lwcGVkLlxuXHQgKiAtIHNlY29uZCBzdGVwOiB0aGUgY29uZmlndXJhdGlvbiBmcm9tIHN0ZXAgMSBpcyBtZXJnZWQgKDItbGV2ZWxzIGRlZXApIHdpdGggdGhlIG93biQgc3RvcmUuIFRoZSBvd24kIHN0b3JlIGluaXRpYWxseSBjb250YWluc1xuXHQgKiBhbiBlbXB0eSBvYmplY3QgKGkuZS4gbm8gcHJvcGVydHkgZnJvbSB0aGUgcGFyZW50IGlzIG92ZXJyaWRkZW4pLiBJdCBjYW4gYmUgY2hhbmdlZCBieSBjYWxsaW5nIHNldCBvbiB0aGUgc3RvcmUgcmV0dXJuZWQgYnlcblx0ICoge0BsaW5rIGluamVjdFdpZGdldHNDb25maWd9LlxuXHQgKlxuXHQgKiBAcGFyYW0gYWRhcHRQYXJlbnRDb25maWcgLSBvcHRpb25hbCBmdW5jdGlvbiB0aGF0IHJlY2VpdmVzIGEgMi1sZXZlbHMgY29weSBvZiB0aGUgd2lkZ2V0cyBkZWZhdWx0IGNvbmZpZ3VyYXRpb25cblx0ICogZGVmaW5lZCBhdCBhbiB1cHBlciBsZXZlbCBpbiB0aGUgQW5ndWxhciBkZXBlbmRlbmN5IGluamVjdGlvbiBzeXN0ZW0gKG9yIGFuIGVtcHR5IG9iamVjdCBpZiB0aGVyZSBpcyBub25lKSBhbmQgcmV0dXJucyB0aGUgd2lkZ2V0c1xuXHQgKiBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gdG8gYmUgdXNlZC5cblx0ICogSXQgaXMgY2FsbGVkIG9ubHkgaWYgdGhlIGNvbmZpZ3VyYXRpb24gaXMgbmVlZGVkLCBhbmQgd2FzIG5vdCB5ZXQgY29tcHV0ZWQgZm9yIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBwYXJlbnQgY29uZmlndXJhdGlvbi5cblx0ICogSXQgaXMgY2FsbGVkIGluIGEgdGFuc3UgcmVhY3RpdmUgY29udGV4dCwgc28gaXQgY2FuIHVzZSBhbnkgdGFuc3Ugc3RvcmUgYW5kIHdpbGwgYmUgY2FsbGVkIGFnYWluIGlmIHRob3NlIHN0b3JlcyBjaGFuZ2UuXG5cdCAqIEl0IGlzIGFsc28gY2FsbGVkIGluIGFuIEFuZ3VsYXIgaW5qZWN0aW9uIGNvbnRleHQsIHNvIGl0IGNhbiBjYWxsIHRoZSBBbmd1bGFyIGluamVjdCBmdW5jdGlvbiB0byBnZXQgYW5kIHVzZSBkZXBlbmRlbmNpZXMgZnJvbSB0aGVcblx0ICogQW5ndWxhciBkZXBlbmRlbmN5IGluamVjdGlvbiBzeXN0ZW0uXG5cdCAqXG5cdCAqIEByZXR1cm5zIERJIHByb3ZpZGVyIHRvIGJlIGluY2x1ZGVkIGEgbGlzdCBvZiBgcHJvdmlkZXJzYCAoZm9yIGV4YW1wbGUgYXQgYSBjb21wb25lbnQgbGV2ZWwgb3Jcblx0ICogYW55IG90aGVyIGxldmVsIG9mIHRoZSBBbmd1bGFyIGRlcGVuZGVuY3kgaW5qZWN0aW9uIHN5c3RlbSlcblx0ICpcblx0ICogQGV4YW1wbGVcblx0ICogYGBgdHlwZXNjcmlwdFxuXHQgKiBAQ29tcG9uZW50KHtcblx0ICogICAvLyAuLi5cblx0ICogICBwcm92aWRlcnM6IFtcblx0ICogICAgIHByb3ZpZGVXaWRnZXRzQ29uZmlnKChwYXJlbnRDb25maWcpID0+IHtcblx0ICogICAgICAgLy8gZmlyc3Qgc3RlcCBjb25maWd1cmF0aW9uOiB0cmFuc2Zvcm1zIHRoZSBwYXJlbnQgY29uZmlndXJhdGlvblxuXHQgKiAgICAgICBwYXJlbnRDb25maWcucmF0aW5nID0gcGFyZW50Q29uZmlnLnJhdGluZyA/PyB7fTtcblx0ICogICAgICAgcGFyZW50Q29uZmlnLnJhdGluZy5jbGFzc05hbWUgPSBgJHtwYXJlbnRDb25maWcucmF0aW5nLmNsYXNzTmFtZSA/PyAnJ30gbXktcmF0aW5nLWV4dHJhLWNsYXNzYFxuXHQgKiAgICAgICByZXR1cm4gcGFyZW50Q29uZmlnO1xuXHQgKiAgICAgfSlcblx0ICogICBdXG5cdCAqIH0pXG5cdCAqIGNsYXNzIE15Q29tcG9uZW50IHtcblx0ICogICB3aWRnZXRzQ29uZmlnID0gaW5qZWN0V2lkZ2V0c0NvbmZpZygpO1xuXHQgKiAgIGNvbnN0cnVjdG9yKCkge1xuXHQgKiAgICAgdGhpcy53aWRnZXRzQ29uZmlnLnNldCh7XG5cdCAqICAgICAgIC8vIHNlY29uZCBzdGVwIGNvbmZpZ3VyYXRpb246IG92ZXJyaWRlcyB0aGUgcGFyZW50IGNvbmZpZ3VyYXRpb25cblx0ICogICAgICAgcmF0aW5nOiB7XG5cdCAqICAgICAgICAgc2xvdFN0YXI6IE15Q3VzdG9tU2xvdFN0YXJcblx0ICogICAgICAgfVxuXHQgKiAgICAgfSk7XG5cdCAqICAgfVxuXHQgKiAgIC8vIC4uLlxuXHQgKiB9XG5cdCAqIGBgYFxuXHQgKi9cblx0Y29uc3QgcHJvdmlkZVdpZGdldHNDb25maWcgPSAoYWRhcHRQYXJlbnRDb25maWc/OiBBZGFwdFBhcmVudENvbmZpZzxDb25maWc+KTogRmFjdG9yeVByb3ZpZGVyID0+ICh7XG5cdFx0cHJvdmlkZTogd2lkZ2V0c0NvbmZpZ0luamVjdGlvblRva2VuLFxuXHRcdHVzZUZhY3Rvcnk6IChwYXJlbnQ6IFdpZGdldHNDb25maWdTdG9yZTxDb25maWc+IHwgbnVsbCkgPT4ge1xuXHRcdFx0aWYgKGFkYXB0UGFyZW50Q29uZmlnKSB7XG5cdFx0XHRcdGNvbnN0IGluamVjdG9yID0gaW5qZWN0KEluamVjdG9yKTtcblx0XHRcdFx0Y29uc3Qgb3JpZ2luYWxBZGFwdFBhcmVudENvbmZpZyA9IGFkYXB0UGFyZW50Q29uZmlnO1xuXHRcdFx0XHRhZGFwdFBhcmVudENvbmZpZyA9ICh2YWx1ZSkgPT4gcnVuSW5JbmplY3Rpb25Db250ZXh0KGluamVjdG9yLCAoKSA9PiBvcmlnaW5hbEFkYXB0UGFyZW50Q29uZmlnKHZhbHVlKSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY3JlYXRlV2lkZ2V0c0NvbmZpZyhwYXJlbnQgPz8gdW5kZWZpbmVkLCBhZGFwdFBhcmVudENvbmZpZyk7XG5cdFx0fSxcblx0XHRkZXBzOiBbW25ldyBTa2lwU2VsZigpLCBuZXcgT3B0aW9uYWwoKSwgd2lkZ2V0c0NvbmZpZ0luamVjdGlvblRva2VuXV0sXG5cdH0pO1xuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSB3aWRnZXRzIGRlZmF1bHQgY29uZmlndXJhdGlvbiBzdG9yZSB0aGF0IHdhcyBwcm92aWRlZCBpbiB0aGUgY3VycmVudCBpbmplY3Rpb24gY29udGV4dC5cblx0ICogVGhyb3dzIGlmIHRoZSBubyB3aWRnZXRzIGRlZmF1bHQgY29uZmlndXJhdGlvbiBzdG9yZSB3YXMgcHJvdmlkZWQuXG5cdCAqXG5cdCAqIEByZW1hcmtzXG5cdCAqIFRoaXMgZnVuY3Rpb24gbXVzdCBiZSBjYWxsZWQgZnJvbSBhbiBpbmplY3Rpb24gY29udGV4dCwgc3VjaCBhcyBhIGNvbnN0cnVjdG9yLCBhIGZhY3RvcnkgZnVuY3Rpb24sIGEgZmllbGQgaW5pdGlhbGl6ZXIgb3Jcblx0ICogYSBmdW5jdGlvbiB1c2VkIHdpdGgge0BsaW5rIGh0dHBzOi8vYW5ndWxhci5pby9hcGkvY29yZS9ydW5JbkluamVjdGlvbkNvbnRleHQgfCBydW5JbkluamVjdGlvbkNvbnRleHR9LlxuXHQgKlxuXHQgKiBAcmV0dXJucyB0aGUgd2lkZ2V0cyBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gc3RvcmUuXG5cdCAqL1xuXHRjb25zdCBpbmplY3RXaWRnZXRzQ29uZmlnID0gKCkgPT4gaW5qZWN0KHdpZGdldHNDb25maWdJbmplY3Rpb25Ub2tlbik7XG5cblx0Y29uc3QgaW5qZWN0V2lkZ2V0Q29uZmlnID0gPE4gZXh0ZW5kcyBrZXlvZiBDb25maWc+KHdpZGdldE5hbWU6IE4pOiBSZWFkYWJsZVNpZ25hbDxQYXJ0aWFsPENvbmZpZ1tOXT4gfCB1bmRlZmluZWQ+ID0+IHtcblx0XHRjb25zdCB3aWRnZXRzQ29uZmlnID0gaW5qZWN0KHdpZGdldHNDb25maWdJbmplY3Rpb25Ub2tlbiwge29wdGlvbmFsOiB0cnVlfSk7XG5cdFx0cmV0dXJuIGNvbXB1dGVkKCgpID0+IHdpZGdldHNDb25maWc/LigpW3dpZGdldE5hbWVdKTtcblx0fTtcblxuXHRjb25zdCBjYWxsV2lkZ2V0RmFjdG9yeSA9IDxXIGV4dGVuZHMgV2lkZ2V0Pih7XG5cdFx0ZmFjdG9yeSxcblx0XHR3aWRnZXROYW1lID0gbnVsbCxcblx0XHRkZWZhdWx0Q29uZmlnID0ge30sXG5cdFx0ZXZlbnRzLFxuXHRcdGFmdGVySW5pdCxcblx0fToge1xuXHRcdGZhY3Rvcnk6IFdpZGdldEZhY3Rvcnk8Vz47XG5cdFx0d2lkZ2V0TmFtZT86IG51bGwgfCBrZXlvZiBDb25maWc7XG5cdFx0ZGVmYXVsdENvbmZpZz86IFBhcnRpYWw8V2lkZ2V0UHJvcHM8Vz4+IHwgUmVhZGFibGVTaWduYWw8UGFydGlhbDxXaWRnZXRQcm9wczxXPj4gfCB1bmRlZmluZWQ+O1xuXHRcdGV2ZW50czogUGljazxXaWRnZXRQcm9wczxXPiwga2V5b2YgV2lkZ2V0UHJvcHM8Vz4gJiBgb24ke3N0cmluZ31gPjtcblx0XHRhZnRlckluaXQ/OiAoKSA9PiB2b2lkO1xuXHR9KTogQW5ndWxhcldpZGdldDxXPiA9PlxuXHRcdGNhbGxXaWRnZXRGYWN0b3J5V2l0aENvbmZpZyh7XG5cdFx0XHRmYWN0b3J5LFxuXHRcdFx0d2lkZ2V0Q29uZmlnOiB3aWRnZXROYW1lID8gKGluamVjdFdpZGdldENvbmZpZyh3aWRnZXROYW1lKSBhcyBhbnkpIDogbnVsbCxcblx0XHRcdGRlZmF1bHRDb25maWcsXG5cdFx0XHRldmVudHMsXG5cdFx0XHRhZnRlckluaXQsXG5cdFx0fSk7XG5cblx0cmV0dXJuIHtcblx0XHQvKipcblx0XHQgKiBEZXBlbmRlbmN5IEluamVjdGlvbiB0b2tlbiB3aGljaCBjYW4gYmUgdXNlZCB0byBwcm92aWRlIG9yIGluamVjdCB0aGUgd2lkZ2V0cyBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gc3RvcmUuXG5cdFx0ICovXG5cdFx0d2lkZ2V0c0NvbmZpZ0luamVjdGlvblRva2VuLFxuXHRcdHByb3ZpZGVXaWRnZXRzQ29uZmlnLFxuXHRcdGluamVjdFdpZGdldHNDb25maWcsXG5cdFx0aW5qZWN0V2lkZ2V0Q29uZmlnLFxuXHRcdGNhbGxXaWRnZXRGYWN0b3J5LFxuXHR9O1xufTtcblxuZXhwb3J0IGNvbnN0IHt3aWRnZXRzQ29uZmlnSW5qZWN0aW9uVG9rZW4sIHByb3ZpZGVXaWRnZXRzQ29uZmlnLCBpbmplY3RXaWRnZXRDb25maWcsIGluamVjdFdpZGdldHNDb25maWcsIGNhbGxXaWRnZXRGYWN0b3J5fSA9XG5cdHdpZGdldHNDb25maWdGYWN0b3J5PFdpZGdldHNDb25maWc+KCk7XG4iXX0=`;export{n as default};
