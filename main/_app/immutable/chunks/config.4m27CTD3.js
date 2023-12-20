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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFFakQsT0FBTyxFQUFDLGNBQWMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUscUJBQXFCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHMUcsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sU0FBUyxDQUFDO0FBTXBELE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHLENBQ25DLDhCQUE4QixJQUFJLGNBQWMsQ0FBNkIsZUFBZSxDQUFDLEVBQzVGLEVBQUU7SUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFrREU7SUFDRixNQUFNLG9CQUFvQixHQUFHLENBQUMsaUJBQThFLEVBQW1CLEVBQUUsQ0FBQyxDQUFDO1FBQ2xJLE9BQU8sRUFBRSwyQkFBMkI7UUFDcEMsVUFBVSxFQUFFLENBQUMsTUFBeUMsRUFBRSxFQUFFO1lBQ3pELElBQUksaUJBQWlCLEVBQUU7Z0JBQ3RCLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbEMsTUFBTSx5QkFBeUIsR0FBRyxpQkFBaUIsQ0FBQztnQkFDcEQsaUJBQWlCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ3ZHO1lBQ0QsT0FBTyxtQkFBbUIsQ0FBQyxNQUFNLElBQUksU0FBUyxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDcEUsQ0FBQztRQUNELElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLDJCQUEyQixDQUFDLENBQUM7S0FDckUsQ0FBQyxDQUFDO0lBRUg7Ozs7Ozs7OztPQVNHO0lBQ0gsTUFBTSxtQkFBbUIsR0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUV0RSxNQUFNLGtCQUFrQixHQUFHLENBQXlCLFVBQWEsRUFBa0QsRUFBRTtRQUNwSCxNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsMkJBQTJCLEVBQUUsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUM1RSxPQUFPLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQyxDQUFDO0lBRUYsTUFBTSxpQkFBaUIsR0FBRyxDQUFtQixFQUM1QyxPQUFPLEVBQ1AsVUFBVSxHQUFHLElBQUksRUFDakIsYUFBYSxHQUFHLEVBQUUsRUFDbEIsTUFBTSxHQU1OLEVBQW9CLEVBQUUsQ0FDdEIsMkJBQTJCLENBQUM7UUFDM0IsT0FBTztRQUNQLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFFLGtCQUFrQixDQUFDLFVBQVUsQ0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBQ3pFLGFBQWE7UUFDYixNQUFNO0tBQ04sQ0FBQyxDQUFDO0lBRUosT0FBTztRQUNOOztXQUVHO1FBQ0gsMkJBQTJCO1FBQzNCLG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtLQUNqQixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sRUFBQywyQkFBMkIsRUFBRSxvQkFBb0IsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBQyxHQUMzSCxvQkFBb0IsRUFBaUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtQYXJ0aWFsMkxldmVscywgV2lkZ2V0LCBXaWRnZXRGYWN0b3J5LCBXaWRnZXRQcm9wcywgV2lkZ2V0c0NvbmZpZ1N0b3JlfSBmcm9tICdAYWdub3MtdWkvY29yZSc7XG5pbXBvcnQge2NyZWF0ZVdpZGdldHNDb25maWd9IGZyb20gJ0BhZ25vcy11aS9jb3JlJztcbmltcG9ydCB0eXBlIHtSZWFkYWJsZVNpZ25hbH0gZnJvbSAnQGFtYWRldXMtaXQtZ3JvdXAvdGFuc3UnO1xuaW1wb3J0IHtjb21wdXRlZH0gZnJvbSAnQGFtYWRldXMtaXQtZ3JvdXAvdGFuc3UnO1xuaW1wb3J0IHR5cGUge0ZhY3RvcnlQcm92aWRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0luamVjdGlvblRva2VuLCBJbmplY3RvciwgT3B0aW9uYWwsIFNraXBTZWxmLCBpbmplY3QsIHJ1bkluSW5qZWN0aW9uQ29udGV4dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7QWRhcHRQcm9wc1Nsb3RzfSBmcm9tICcuL3Nsb3RUeXBlcyc7XG5pbXBvcnQgdHlwZSB7QW5ndWxhcldpZGdldH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQge2NhbGxXaWRnZXRGYWN0b3J5V2l0aENvbmZpZ30gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCB0eXBlIFdpZGdldHNDb25maWcgPSB7XG5cdFtXaWRnZXROYW1lIGluIGtleW9mIGltcG9ydCgnQGFnbm9zLXVpL2NvcmUnKS5XaWRnZXRzQ29uZmlnXTogQWRhcHRQcm9wc1Nsb3RzPGltcG9ydCgnQGFnbm9zLXVpL2NvcmUnKS5XaWRnZXRzQ29uZmlnW1dpZGdldE5hbWVdPjtcbn07XG5cbmV4cG9ydCBjb25zdCB3aWRnZXRzQ29uZmlnRmFjdG9yeSA9IDxDb25maWcgZXh0ZW5kcyB7W3dpZGdldE5hbWU6IHN0cmluZ106IG9iamVjdH0gPSBXaWRnZXRzQ29uZmlnPihcblx0d2lkZ2V0c0NvbmZpZ0luamVjdGlvblRva2VuID0gbmV3IEluamVjdGlvblRva2VuPFdpZGdldHNDb25maWdTdG9yZTxDb25maWc+Pignd2lkZ2V0c0NvbmZpZycpLFxuKSA9PiB7XG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgcHJvdmlkZXIgb2Ygd2lkZ2V0cyBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gdGhhdCBpbmhlcml0cyBmcm9tIGFueSB3aWRnZXRzIGRlZmF1bHQgY29uZmlndXJhdGlvbiBhbHJlYWR5IGRlZmluZWQgYXQgYW4gdXBwZXIgbGV2ZWxcblx0ICogaW4gdGhlIEFuZ3VsYXIgZGVwZW5kZW5jeSBpbmplY3Rpb24gc3lzdGVtLiBJdCBjb250YWlucyBpdHMgb3duIHNldCBvZiB3aWRnZXRzIGNvbmZpZ3VyYXRpb24gcHJvcGVydGllcyB0aGF0IG92ZXJyaWRlIHRoZSBzYW1lIHByb3BlcnRpZXMgZm9ybVxuXHQgKiB0aGUgcGFyZW50IGNvbmZpZ3VyYXRpb24uXG5cdCAqXG5cdCAqIEByZW1hcmtzXG5cdCAqIFRoZSBjb25maWd1cmF0aW9uIGlzIGNvbXB1dGVkIGZyb20gdGhlIHBhcmVudCBjb25maWd1cmF0aW9uIGluIHR3byBzdGVwczpcblx0ICogLSBmaXJzdCBzdGVwOiB0aGUgcGFyZW50IGNvbmZpZ3VyYXRpb24gaXMgdHJhbnNmb3JtZWQgYnkgdGhlIGFkYXB0UGFyZW50Q29uZmlnIGZ1bmN0aW9uIChpZiBzcGVjaWZpZWQpLlxuXHQgKiBJZiBhZGFwdFBhcmVudENvbmZpZyBpcyBub3Qgc3BlY2lmaWVkLCB0aGlzIHN0ZXAgaXMgc2tpcHBlZC5cblx0ICogLSBzZWNvbmQgc3RlcDogdGhlIGNvbmZpZ3VyYXRpb24gZnJvbSBzdGVwIDEgaXMgbWVyZ2VkICgyLWxldmVscyBkZWVwKSB3aXRoIHRoZSBvd24kIHN0b3JlLiBUaGUgb3duJCBzdG9yZSBpbml0aWFsbHkgY29udGFpbnNcblx0ICogYW4gZW1wdHkgb2JqZWN0IChpLmUuIG5vIHByb3BlcnR5IGZyb20gdGhlIHBhcmVudCBpcyBvdmVycmlkZGVuKS4gSXQgY2FuIGJlIGNoYW5nZWQgYnkgY2FsbGluZyBzZXQgb24gdGhlIHN0b3JlIHJldHVybmVkIGJ5XG5cdCAqIHtAbGluayBpbmplY3RXaWRnZXRzQ29uZmlnfS5cblx0ICpcblx0ICogQHBhcmFtIGFkYXB0UGFyZW50Q29uZmlnIC0gb3B0aW9uYWwgZnVuY3Rpb24gdGhhdCByZWNlaXZlcyBhIDItbGV2ZWxzIGNvcHkgb2YgdGhlIHdpZGdldHMgZGVmYXVsdCBjb25maWd1cmF0aW9uXG5cdCAqIGRlZmluZWQgYXQgYW4gdXBwZXIgbGV2ZWwgaW4gdGhlIEFuZ3VsYXIgZGVwZW5kZW5jeSBpbmplY3Rpb24gc3lzdGVtIChvciBhbiBlbXB0eSBvYmplY3QgaWYgdGhlcmUgaXMgbm9uZSkgYW5kIHJldHVybnMgdGhlIHdpZGdldHNcblx0ICogZGVmYXVsdCBjb25maWd1cmF0aW9uIHRvIGJlIHVzZWQuXG5cdCAqIEl0IGlzIGNhbGxlZCBvbmx5IGlmIHRoZSBjb25maWd1cmF0aW9uIGlzIG5lZWRlZCwgYW5kIHdhcyBub3QgeWV0IGNvbXB1dGVkIGZvciB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgcGFyZW50IGNvbmZpZ3VyYXRpb24uXG5cdCAqIEl0IGlzIGNhbGxlZCBpbiBhIHRhbnN1IHJlYWN0aXZlIGNvbnRleHQsIHNvIGl0IGNhbiB1c2UgYW55IHRhbnN1IHN0b3JlIGFuZCB3aWxsIGJlIGNhbGxlZCBhZ2FpbiBpZiB0aG9zZSBzdG9yZXMgY2hhbmdlLlxuXHQgKiBJdCBpcyBhbHNvIGNhbGxlZCBpbiBhbiBBbmd1bGFyIGluamVjdGlvbiBjb250ZXh0LCBzbyBpdCBjYW4gY2FsbCB0aGUgQW5ndWxhciBpbmplY3QgZnVuY3Rpb24gdG8gZ2V0IGFuZCB1c2UgZGVwZW5kZW5jaWVzIGZyb20gdGhlXG5cdCAqIEFuZ3VsYXIgZGVwZW5kZW5jeSBpbmplY3Rpb24gc3lzdGVtLlxuXG5cdCogQHJldHVybnMgREkgcHJvdmlkZXIgdG8gYmUgaW5jbHVkZWQgYSBsaXN0IG9mIGBwcm92aWRlcnNgIChmb3IgZXhhbXBsZSBhdCBhIGNvbXBvbmVudCBsZXZlbCBvclxuXHQqIGFueSBvdGhlciBsZXZlbCBvZiB0aGUgQW5ndWxhciBkZXBlbmRlbmN5IGluamVjdGlvbiBzeXN0ZW0pXG5cdCpcblx0KiBAZXhhbXBsZVxuXHQqIGBgYHR5cGVzY3JpcHRcblx0KiBAQ29tcG9uZW50KHtcblx0KiAgIC8vIC4uLlxuXHQqICAgcHJvdmlkZXJzOiBbXG5cdCogICAgIHByb3ZpZGVXaWRnZXRzQ29uZmlnKChwYXJlbnRDb25maWcpID0+IHtcblx0KiAgICAgICAvLyBmaXJzdCBzdGVwIGNvbmZpZ3VyYXRpb246IHRyYW5zZm9ybXMgdGhlIHBhcmVudCBjb25maWd1cmF0aW9uXG5cdCogICAgICAgcGFyZW50Q29uZmlnLnJhdGluZyA9IHBhcmVudENvbmZpZy5yYXRpbmcgPz8ge307XG5cdCogICAgICAgcGFyZW50Q29uZmlnLnJhdGluZy5jbGFzc05hbWUgPSBgJHtwYXJlbnRDb25maWcucmF0aW5nLmNsYXNzTmFtZSA/PyAnJ30gbXktcmF0aW5nLWV4dHJhLWNsYXNzYFxuXHQqICAgICAgIHJldHVybiBwYXJlbnRDb25maWc7XG5cdCogICAgIH0pXG5cdCogICBdXG5cdCogfSlcblx0KiBjbGFzcyBNeUNvbXBvbmVudCB7XG5cdCogICB3aWRnZXRzQ29uZmlnID0gaW5qZWN0V2lkZ2V0c0NvbmZpZygpO1xuXHQqICAgY29uc3RydWN0b3IoKSB7XG5cdCogICAgIHRoaXMud2lkZ2V0c0NvbmZpZy5zZXQoe1xuXHQqICAgICAgIC8vIHNlY29uZCBzdGVwIGNvbmZpZ3VyYXRpb246IG92ZXJyaWRlcyB0aGUgcGFyZW50IGNvbmZpZ3VyYXRpb25cblx0KiAgICAgICByYXRpbmc6IHtcblx0KiAgICAgICAgIHNsb3RTdGFyOiBNeUN1c3RvbVNsb3RTdGFyXG5cdCogICAgICAgfVxuXHQqICAgICB9KTtcblx0KiAgIH1cblx0KiAgIC8vIC4uLlxuXHQqIH1cblx0KiBgYGBcblx0Ki9cblx0Y29uc3QgcHJvdmlkZVdpZGdldHNDb25maWcgPSAoYWRhcHRQYXJlbnRDb25maWc/OiAoY29uZmlnOiBQYXJ0aWFsMkxldmVsczxDb25maWc+KSA9PiBQYXJ0aWFsMkxldmVsczxDb25maWc+KTogRmFjdG9yeVByb3ZpZGVyID0+ICh7XG5cdFx0cHJvdmlkZTogd2lkZ2V0c0NvbmZpZ0luamVjdGlvblRva2VuLFxuXHRcdHVzZUZhY3Rvcnk6IChwYXJlbnQ6IFdpZGdldHNDb25maWdTdG9yZTxDb25maWc+IHwgbnVsbCkgPT4ge1xuXHRcdFx0aWYgKGFkYXB0UGFyZW50Q29uZmlnKSB7XG5cdFx0XHRcdGNvbnN0IGluamVjdG9yID0gaW5qZWN0KEluamVjdG9yKTtcblx0XHRcdFx0Y29uc3Qgb3JpZ2luYWxBZGFwdFBhcmVudENvbmZpZyA9IGFkYXB0UGFyZW50Q29uZmlnO1xuXHRcdFx0XHRhZGFwdFBhcmVudENvbmZpZyA9ICh2YWx1ZSkgPT4gcnVuSW5JbmplY3Rpb25Db250ZXh0KGluamVjdG9yLCAoKSA9PiBvcmlnaW5hbEFkYXB0UGFyZW50Q29uZmlnKHZhbHVlKSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY3JlYXRlV2lkZ2V0c0NvbmZpZyhwYXJlbnQgPz8gdW5kZWZpbmVkLCBhZGFwdFBhcmVudENvbmZpZyk7XG5cdFx0fSxcblx0XHRkZXBzOiBbW25ldyBTa2lwU2VsZigpLCBuZXcgT3B0aW9uYWwoKSwgd2lkZ2V0c0NvbmZpZ0luamVjdGlvblRva2VuXV0sXG5cdH0pO1xuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSB3aWRnZXRzIGRlZmF1bHQgY29uZmlndXJhdGlvbiBzdG9yZSB0aGF0IHdhcyBwcm92aWRlZCBpbiB0aGUgY3VycmVudCBpbmplY3Rpb24gY29udGV4dC5cblx0ICogVGhyb3dzIGlmIHRoZSBubyB3aWRnZXRzIGRlZmF1bHQgY29uZmlndXJhdGlvbiBzdG9yZSB3YXMgcHJvdmlkZWQuXG5cdCAqXG5cdCAqIEByZW1hcmtzXG5cdCAqIFRoaXMgZnVuY3Rpb24gbXVzdCBiZSBjYWxsZWQgZnJvbSBhbiBpbmplY3Rpb24gY29udGV4dCwgc3VjaCBhcyBhIGNvbnN0cnVjdG9yLCBhIGZhY3RvcnkgZnVuY3Rpb24sIGEgZmllbGQgaW5pdGlhbGl6ZXIgb3Jcblx0ICogYSBmdW5jdGlvbiB1c2VkIHdpdGgge0BsaW5rIGh0dHBzOi8vYW5ndWxhci5pby9hcGkvY29yZS9ydW5JbkluamVjdGlvbkNvbnRleHQgfCBydW5JbkluamVjdGlvbkNvbnRleHR9LlxuXHQgKlxuXHQgKiBAcmV0dXJucyB0aGUgd2lkZ2V0cyBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gc3RvcmUuXG5cdCAqL1xuXHRjb25zdCBpbmplY3RXaWRnZXRzQ29uZmlnID0gKCkgPT4gaW5qZWN0KHdpZGdldHNDb25maWdJbmplY3Rpb25Ub2tlbik7XG5cblx0Y29uc3QgaW5qZWN0V2lkZ2V0Q29uZmlnID0gPE4gZXh0ZW5kcyBrZXlvZiBDb25maWc+KHdpZGdldE5hbWU6IE4pOiBSZWFkYWJsZVNpZ25hbDxQYXJ0aWFsPENvbmZpZ1tOXT4gfCB1bmRlZmluZWQ+ID0+IHtcblx0XHRjb25zdCB3aWRnZXRzQ29uZmlnID0gaW5qZWN0KHdpZGdldHNDb25maWdJbmplY3Rpb25Ub2tlbiwge29wdGlvbmFsOiB0cnVlfSk7XG5cdFx0cmV0dXJuIGNvbXB1dGVkKCgpID0+IHdpZGdldHNDb25maWc/LigpW3dpZGdldE5hbWVdKTtcblx0fTtcblxuXHRjb25zdCBjYWxsV2lkZ2V0RmFjdG9yeSA9IDxXIGV4dGVuZHMgV2lkZ2V0Pih7XG5cdFx0ZmFjdG9yeSxcblx0XHR3aWRnZXROYW1lID0gbnVsbCxcblx0XHRkZWZhdWx0Q29uZmlnID0ge30sXG5cdFx0ZXZlbnRzLFxuXHR9OiB7XG5cdFx0ZmFjdG9yeTogV2lkZ2V0RmFjdG9yeTxXPjtcblx0XHR3aWRnZXROYW1lPzogbnVsbCB8IGtleW9mIENvbmZpZztcblx0XHRkZWZhdWx0Q29uZmlnPzogUGFydGlhbDxXaWRnZXRQcm9wczxXPj4gfCBSZWFkYWJsZVNpZ25hbDxQYXJ0aWFsPFdpZGdldFByb3BzPFc+PiB8IHVuZGVmaW5lZD47XG5cdFx0ZXZlbnRzOiBQaWNrPFdpZGdldFByb3BzPFc+LCBrZXlvZiBXaWRnZXRQcm9wczxXPiAmIGBvbiR7c3RyaW5nfWA+O1xuXHR9KTogQW5ndWxhcldpZGdldDxXPiA9PlxuXHRcdGNhbGxXaWRnZXRGYWN0b3J5V2l0aENvbmZpZyh7XG5cdFx0XHRmYWN0b3J5LFxuXHRcdFx0d2lkZ2V0Q29uZmlnOiB3aWRnZXROYW1lID8gKGluamVjdFdpZGdldENvbmZpZyh3aWRnZXROYW1lKSBhcyBhbnkpIDogbnVsbCxcblx0XHRcdGRlZmF1bHRDb25maWcsXG5cdFx0XHRldmVudHMsXG5cdFx0fSk7XG5cblx0cmV0dXJuIHtcblx0XHQvKipcblx0XHQgKiBEZXBlbmRlbmN5IEluamVjdGlvbiB0b2tlbiB3aGljaCBjYW4gYmUgdXNlZCB0byBwcm92aWRlIG9yIGluamVjdCB0aGUgd2lkZ2V0cyBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gc3RvcmUuXG5cdFx0ICovXG5cdFx0d2lkZ2V0c0NvbmZpZ0luamVjdGlvblRva2VuLFxuXHRcdHByb3ZpZGVXaWRnZXRzQ29uZmlnLFxuXHRcdGluamVjdFdpZGdldHNDb25maWcsXG5cdFx0aW5qZWN0V2lkZ2V0Q29uZmlnLFxuXHRcdGNhbGxXaWRnZXRGYWN0b3J5LFxuXHR9O1xufTtcblxuZXhwb3J0IGNvbnN0IHt3aWRnZXRzQ29uZmlnSW5qZWN0aW9uVG9rZW4sIHByb3ZpZGVXaWRnZXRzQ29uZmlnLCBpbmplY3RXaWRnZXRDb25maWcsIGluamVjdFdpZGdldHNDb25maWcsIGNhbGxXaWRnZXRGYWN0b3J5fSA9XG5cdHdpZGdldHNDb25maWdGYWN0b3J5PFdpZGdldHNDb25maWc+KCk7XG4iXX0=`;export{n as default};
