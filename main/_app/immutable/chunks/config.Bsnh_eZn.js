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
    const injectWidgetConfig = (widgetName) => {
        const widgetsConfig = inject(widgetsConfigInjectionToken, { optional: true });
        return computed(() => widgetsConfig?.()[widgetName]);
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFFakQsT0FBTyxFQUFDLGNBQWMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUscUJBQXFCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFMUcsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0QsY0FBYyx1QkFBdUIsQ0FBQztBQUt0Qzs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsQ0FDbkMsOEJBQThCLElBQUksY0FBYyxDQUE2QixlQUFlLENBQUMsRUFDNUYsRUFBRTtJQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWtERztJQUNILE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxpQkFBNkMsRUFBbUIsRUFBRSxDQUFDLENBQUM7UUFDakcsT0FBTyxFQUFFLDJCQUEyQjtRQUNwQyxVQUFVLEVBQUUsQ0FBQyxNQUF5QyxFQUFFLEVBQUU7WUFDekQsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO2dCQUN2QixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2xDLE1BQU0seUJBQXlCLEdBQUcsaUJBQWlCLENBQUM7Z0JBQ3BELGlCQUFpQixHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN4RyxDQUFDO1lBQ0QsT0FBTyxtQkFBbUIsQ0FBQyxNQUFNLElBQUksU0FBUyxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDcEUsQ0FBQztRQUNELElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLDJCQUEyQixDQUFDLENBQUM7S0FDckUsQ0FBQyxDQUFDO0lBRUg7Ozs7Ozs7Ozs7T0FVRztJQUNILE1BQU0sbUJBQW1CLEdBQWdDLENBQUMsYUFBc0MsRUFBRSxFQUFFO1FBQ25HLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQzFELElBQUksYUFBYSxFQUFFLENBQUM7WUFDbkIsYUFBYSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsQyxDQUFDO1FBQ0QsT0FBTyxhQUFhLENBQUM7SUFDdEIsQ0FBQyxDQUFDO0lBRUYsTUFBTSxrQkFBa0IsR0FBRyxDQUF5QixVQUFhLEVBQWtELEVBQUU7UUFDcEgsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLDJCQUEyQixFQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDNUUsT0FBTyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUMsQ0FBQztJQUVGLE1BQU0saUJBQWlCLEdBQUcsQ0FBbUIsRUFDNUMsT0FBTyxFQUNQLFVBQVUsR0FBRyxJQUFJLEVBQ2pCLGFBQWEsR0FBRyxFQUFFLEVBQ2xCLE1BQU0sRUFDTixTQUFTLEVBQ1QsYUFBYSxFQUNiLFlBQVksR0FhWixFQUFvQixFQUFFLENBQ3RCLDJCQUEyQixDQUFDO1FBQzNCLE9BQU87UUFDUCxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBRSxrQkFBa0IsQ0FBQyxVQUFVLENBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUN6RSxhQUFhO1FBQ2IsTUFBTTtRQUNOLFNBQVM7UUFDVCxhQUFhLEVBQUUsYUFBb0I7UUFDbkMsWUFBWTtLQUNaLENBQUMsQ0FBQztJQUVKLE9BQU87UUFDTjs7V0FFRztRQUNILDJCQUEyQjtRQUMzQixvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixpQkFBaUI7S0FDakIsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLEVBQUMsMkJBQTJCLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUMsR0FDM0gsb0JBQW9CLEVBQWlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7V2lkZ2V0LCBXaWRnZXRGYWN0b3J5LCBXaWRnZXRQcm9wc30gZnJvbSAnQGFnbm9zLXVpL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHR5cGUge1BhcnRpYWwyTGV2ZWxzLCBXaWRnZXRzQ29uZmlnU3RvcmUsIFdpZGdldHNDb25maWd9IGZyb20gJ0BhZ25vcy11aS9jb3JlL2NvbmZpZyc7XG5pbXBvcnQge2NyZWF0ZVdpZGdldHNDb25maWd9IGZyb20gJ0BhZ25vcy11aS9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgdHlwZSB7UmVhZGFibGVTaWduYWx9IGZyb20gJ0BhbWFkZXVzLWl0LWdyb3VwL3RhbnN1JztcbmltcG9ydCB7Y29tcHV0ZWR9IGZyb20gJ0BhbWFkZXVzLWl0LWdyb3VwL3RhbnN1JztcbmltcG9ydCB0eXBlIHtGYWN0b3J5UHJvdmlkZXIsIFRlbXBsYXRlUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SW5qZWN0aW9uVG9rZW4sIEluamVjdG9yLCBPcHRpb25hbCwgU2tpcFNlbGYsIGluamVjdCwgcnVuSW5JbmplY3Rpb25Db250ZXh0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHtBbmd1bGFyV2lkZ2V0LCBJc1Nsb3RDb250ZW50LCBTbG90Q29udGVudH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge2NhbGxXaWRnZXRGYWN0b3J5V2l0aENvbmZpZ30gZnJvbSAnLi91dGlscy93aWRnZXQnO1xuXG5leHBvcnQgKiBmcm9tICdAYWdub3MtdWkvY29yZS9jb25maWcnO1xuXG50eXBlIEFkYXB0UGFyZW50Q29uZmlnPENvbmZpZz4gPSAoY29uZmlnOiBQYXJ0aWFsMkxldmVsczxDb25maWc+KSA9PiBQYXJ0aWFsMkxldmVsczxDb25maWc+O1xudHlwZSBJbmplY3RXaWRnZXRzQ29uZmlnPENvbmZpZz4gPSAoY29uZmlnPzogUGFydGlhbDJMZXZlbHM8Q29uZmlnPikgPT4gV2lkZ2V0c0NvbmZpZ1N0b3JlPENvbmZpZz47XG5cbi8qKlxuICogQSBmYWN0b3J5IHRvIGNyZWF0ZSB0aGUgdXRpbGl0aWVzIHRvIGFsbG93IHdpZGdldHMgdG8gYmUgY29udGV4dC1hd2FyZS5cbiAqXG4gKiBJdCBjYW4gYmUgdXNlZCB3aGVuIGV4dGVuZGluZyB0aGUgY29yZSBhbmQgY3JlYXRpbmcgbmV3IHdpZGdldHMuXG4gKlxuICogQHBhcmFtIHdpZGdldHNDb25maWdJbmplY3Rpb25Ub2tlbiAtIHRoZSB3aWRnZXRzIGNvbmZpZyBpbmplY3Rpb24gdG9rZW5cbiAqIEByZXR1cm5zIHRoZSB1dGlsaXRpZXMgdG8gY3JlYXRlIC8gbWFuYWdlIHdpZGdldHMgYW5kIGNvbnRleHRzXG4gKi9cbmV4cG9ydCBjb25zdCB3aWRnZXRzQ29uZmlnRmFjdG9yeSA9IDxDb25maWcgZXh0ZW5kcyB7W3dpZGdldE5hbWU6IHN0cmluZ106IG9iamVjdH0gPSBXaWRnZXRzQ29uZmlnPihcblx0d2lkZ2V0c0NvbmZpZ0luamVjdGlvblRva2VuID0gbmV3IEluamVjdGlvblRva2VuPFdpZGdldHNDb25maWdTdG9yZTxDb25maWc+Pignd2lkZ2V0c0NvbmZpZycpLFxuKSA9PiB7XG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgcHJvdmlkZXIgb2Ygd2lkZ2V0cyBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gdGhhdCBpbmhlcml0cyBmcm9tIGFueSB3aWRnZXRzIGRlZmF1bHQgY29uZmlndXJhdGlvbiBhbHJlYWR5IGRlZmluZWQgYXQgYW4gdXBwZXIgbGV2ZWxcblx0ICogaW4gdGhlIEFuZ3VsYXIgZGVwZW5kZW5jeSBpbmplY3Rpb24gc3lzdGVtLiBJdCBjb250YWlucyBpdHMgb3duIHNldCBvZiB3aWRnZXRzIGNvbmZpZ3VyYXRpb24gcHJvcGVydGllcyB0aGF0IG92ZXJyaWRlIHRoZSBzYW1lIHByb3BlcnRpZXMgZm9ybVxuXHQgKiB0aGUgcGFyZW50IGNvbmZpZ3VyYXRpb24uXG5cdCAqXG5cdCAqIEByZW1hcmtzXG5cdCAqIFRoZSBjb25maWd1cmF0aW9uIGlzIGNvbXB1dGVkIGZyb20gdGhlIHBhcmVudCBjb25maWd1cmF0aW9uIGluIHR3byBzdGVwczpcblx0ICogLSBmaXJzdCBzdGVwOiB0aGUgcGFyZW50IGNvbmZpZ3VyYXRpb24gaXMgdHJhbnNmb3JtZWQgYnkgdGhlIGFkYXB0UGFyZW50Q29uZmlnIGZ1bmN0aW9uIChpZiBzcGVjaWZpZWQpLlxuXHQgKiBJZiBhZGFwdFBhcmVudENvbmZpZyBpcyBub3Qgc3BlY2lmaWVkLCB0aGlzIHN0ZXAgaXMgc2tpcHBlZC5cblx0ICogLSBzZWNvbmQgc3RlcDogdGhlIGNvbmZpZ3VyYXRpb24gZnJvbSBzdGVwIDEgaXMgbWVyZ2VkICgyLWxldmVscyBkZWVwKSB3aXRoIHRoZSBvd24kIHN0b3JlLiBUaGUgb3duJCBzdG9yZSBpbml0aWFsbHkgY29udGFpbnNcblx0ICogYW4gZW1wdHkgb2JqZWN0IChpLmUuIG5vIHByb3BlcnR5IGZyb20gdGhlIHBhcmVudCBpcyBvdmVycmlkZGVuKS4gSXQgY2FuIGJlIGNoYW5nZWQgYnkgY2FsbGluZyBzZXQgb24gdGhlIHN0b3JlIHJldHVybmVkIGJ5XG5cdCAqIHtAbGluayBpbmplY3RXaWRnZXRzQ29uZmlnfS5cblx0ICpcblx0ICogQHBhcmFtIGFkYXB0UGFyZW50Q29uZmlnIC0gb3B0aW9uYWwgZnVuY3Rpb24gdGhhdCByZWNlaXZlcyBhIDItbGV2ZWxzIGNvcHkgb2YgdGhlIHdpZGdldHMgZGVmYXVsdCBjb25maWd1cmF0aW9uXG5cdCAqIGRlZmluZWQgYXQgYW4gdXBwZXIgbGV2ZWwgaW4gdGhlIEFuZ3VsYXIgZGVwZW5kZW5jeSBpbmplY3Rpb24gc3lzdGVtIChvciBhbiBlbXB0eSBvYmplY3QgaWYgdGhlcmUgaXMgbm9uZSkgYW5kIHJldHVybnMgdGhlIHdpZGdldHNcblx0ICogZGVmYXVsdCBjb25maWd1cmF0aW9uIHRvIGJlIHVzZWQuXG5cdCAqIEl0IGlzIGNhbGxlZCBvbmx5IGlmIHRoZSBjb25maWd1cmF0aW9uIGlzIG5lZWRlZCwgYW5kIHdhcyBub3QgeWV0IGNvbXB1dGVkIGZvciB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgcGFyZW50IGNvbmZpZ3VyYXRpb24uXG5cdCAqIEl0IGlzIGNhbGxlZCBpbiBhIHRhbnN1IHJlYWN0aXZlIGNvbnRleHQsIHNvIGl0IGNhbiB1c2UgYW55IHRhbnN1IHN0b3JlIGFuZCB3aWxsIGJlIGNhbGxlZCBhZ2FpbiBpZiB0aG9zZSBzdG9yZXMgY2hhbmdlLlxuXHQgKiBJdCBpcyBhbHNvIGNhbGxlZCBpbiBhbiBBbmd1bGFyIGluamVjdGlvbiBjb250ZXh0LCBzbyBpdCBjYW4gY2FsbCB0aGUgQW5ndWxhciBpbmplY3QgZnVuY3Rpb24gdG8gZ2V0IGFuZCB1c2UgZGVwZW5kZW5jaWVzIGZyb20gdGhlXG5cdCAqIEFuZ3VsYXIgZGVwZW5kZW5jeSBpbmplY3Rpb24gc3lzdGVtLlxuXHQgKlxuXHQgKiBAcmV0dXJucyBESSBwcm92aWRlciB0byBiZSBpbmNsdWRlZCBhIGxpc3Qgb2YgYHByb3ZpZGVyc2AgKGZvciBleGFtcGxlIGF0IGEgY29tcG9uZW50IGxldmVsIG9yXG5cdCAqIGFueSBvdGhlciBsZXZlbCBvZiB0aGUgQW5ndWxhciBkZXBlbmRlbmN5IGluamVjdGlvbiBzeXN0ZW0pXG5cdCAqXG5cdCAqIEBleGFtcGxlXG5cdCAqIGBgYHR5cGVzY3JpcHRcblx0ICogQENvbXBvbmVudCh7XG5cdCAqICAgLy8gLi4uXG5cdCAqICAgcHJvdmlkZXJzOiBbXG5cdCAqICAgICBwcm92aWRlV2lkZ2V0c0NvbmZpZygocGFyZW50Q29uZmlnKSA9PiB7XG5cdCAqICAgICAgIC8vIGZpcnN0IHN0ZXAgY29uZmlndXJhdGlvbjogdHJhbnNmb3JtcyB0aGUgcGFyZW50IGNvbmZpZ3VyYXRpb25cblx0ICogICAgICAgcGFyZW50Q29uZmlnLnJhdGluZyA9IHBhcmVudENvbmZpZy5yYXRpbmcgPz8ge307XG5cdCAqICAgICAgIHBhcmVudENvbmZpZy5yYXRpbmcuY2xhc3NOYW1lID0gYCR7cGFyZW50Q29uZmlnLnJhdGluZy5jbGFzc05hbWUgPz8gJyd9IG15LXJhdGluZy1leHRyYS1jbGFzc2Bcblx0ICogICAgICAgcmV0dXJuIHBhcmVudENvbmZpZztcblx0ICogICAgIH0pXG5cdCAqICAgXVxuXHQgKiB9KVxuXHQgKiBjbGFzcyBNeUNvbXBvbmVudCB7XG5cdCAqICAgd2lkZ2V0c0NvbmZpZyA9IGluamVjdFdpZGdldHNDb25maWcoKTtcblx0ICogICBjb25zdHJ1Y3RvcigpIHtcblx0ICogICAgIHRoaXMud2lkZ2V0c0NvbmZpZy5zZXQoe1xuXHQgKiAgICAgICAvLyBzZWNvbmQgc3RlcCBjb25maWd1cmF0aW9uOiBvdmVycmlkZXMgdGhlIHBhcmVudCBjb25maWd1cmF0aW9uXG5cdCAqICAgICAgIHJhdGluZzoge1xuXHQgKiAgICAgICAgIHNsb3RTdGFyOiBNeUN1c3RvbVNsb3RTdGFyXG5cdCAqICAgICAgIH1cblx0ICogICAgIH0pO1xuXHQgKiAgIH1cblx0ICogICAvLyAuLi5cblx0ICogfVxuXHQgKiBgYGBcblx0ICovXG5cdGNvbnN0IHByb3ZpZGVXaWRnZXRzQ29uZmlnID0gKGFkYXB0UGFyZW50Q29uZmlnPzogQWRhcHRQYXJlbnRDb25maWc8Q29uZmlnPik6IEZhY3RvcnlQcm92aWRlciA9PiAoe1xuXHRcdHByb3ZpZGU6IHdpZGdldHNDb25maWdJbmplY3Rpb25Ub2tlbixcblx0XHR1c2VGYWN0b3J5OiAocGFyZW50OiBXaWRnZXRzQ29uZmlnU3RvcmU8Q29uZmlnPiB8IG51bGwpID0+IHtcblx0XHRcdGlmIChhZGFwdFBhcmVudENvbmZpZykge1xuXHRcdFx0XHRjb25zdCBpbmplY3RvciA9IGluamVjdChJbmplY3Rvcik7XG5cdFx0XHRcdGNvbnN0IG9yaWdpbmFsQWRhcHRQYXJlbnRDb25maWcgPSBhZGFwdFBhcmVudENvbmZpZztcblx0XHRcdFx0YWRhcHRQYXJlbnRDb25maWcgPSAodmFsdWUpID0+IHJ1bkluSW5qZWN0aW9uQ29udGV4dChpbmplY3RvciwgKCkgPT4gb3JpZ2luYWxBZGFwdFBhcmVudENvbmZpZyh2YWx1ZSkpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNyZWF0ZVdpZGdldHNDb25maWcocGFyZW50ID8/IHVuZGVmaW5lZCwgYWRhcHRQYXJlbnRDb25maWcpO1xuXHRcdH0sXG5cdFx0ZGVwczogW1tuZXcgU2tpcFNlbGYoKSwgbmV3IE9wdGlvbmFsKCksIHdpZGdldHNDb25maWdJbmplY3Rpb25Ub2tlbl1dLFxuXHR9KTtcblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgd2lkZ2V0cyBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gc3RvcmUgdGhhdCB3YXMgcHJvdmlkZWQgaW4gdGhlIGN1cnJlbnQgaW5qZWN0aW9uIGNvbnRleHQuXG5cdCAqIFRocm93cyBpZiB0aGUgbm8gd2lkZ2V0cyBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gc3RvcmUgd2FzIHByb3ZpZGVkLlxuXHQgKlxuXHQgKiBAcGFyYW0gZGVmYXVsdENvbmZpZyAtIHZhbHVlcyB0byBzZXQgYXMgc29vbiBhcyB0aGUgY29uZmlnIGlzIGluamVjdGVkXG5cdCAqIEByZW1hcmtzXG5cdCAqIFRoaXMgZnVuY3Rpb24gbXVzdCBiZSBjYWxsZWQgZnJvbSBhbiBpbmplY3Rpb24gY29udGV4dCwgc3VjaCBhcyBhIGNvbnN0cnVjdG9yLCBhIGZhY3RvcnkgZnVuY3Rpb24sIGEgZmllbGQgaW5pdGlhbGl6ZXIgb3Jcblx0ICogYSBmdW5jdGlvbiB1c2VkIHdpdGgge0BsaW5rIGh0dHBzOi8vYW5ndWxhci5pby9hcGkvY29yZS9ydW5JbkluamVjdGlvbkNvbnRleHQgfCBydW5JbkluamVjdGlvbkNvbnRleHR9LlxuXHQgKlxuXHQgKiBAcmV0dXJucyB0aGUgd2lkZ2V0cyBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gc3RvcmUuXG5cdCAqL1xuXHRjb25zdCBpbmplY3RXaWRnZXRzQ29uZmlnOiBJbmplY3RXaWRnZXRzQ29uZmlnPENvbmZpZz4gPSAoZGVmYXVsdENvbmZpZz86IFBhcnRpYWwyTGV2ZWxzPENvbmZpZz4pID0+IHtcblx0XHRjb25zdCB3aWRnZXRzQ29uZmlnID0gaW5qZWN0KHdpZGdldHNDb25maWdJbmplY3Rpb25Ub2tlbik7XG5cdFx0aWYgKGRlZmF1bHRDb25maWcpIHtcblx0XHRcdHdpZGdldHNDb25maWcuc2V0KGRlZmF1bHRDb25maWcpO1xuXHRcdH1cblx0XHRyZXR1cm4gd2lkZ2V0c0NvbmZpZztcblx0fTtcblxuXHRjb25zdCBpbmplY3RXaWRnZXRDb25maWcgPSA8TiBleHRlbmRzIGtleW9mIENvbmZpZz4od2lkZ2V0TmFtZTogTik6IFJlYWRhYmxlU2lnbmFsPFBhcnRpYWw8Q29uZmlnW05dPiB8IHVuZGVmaW5lZD4gPT4ge1xuXHRcdGNvbnN0IHdpZGdldHNDb25maWcgPSBpbmplY3Qod2lkZ2V0c0NvbmZpZ0luamVjdGlvblRva2VuLCB7b3B0aW9uYWw6IHRydWV9KTtcblx0XHRyZXR1cm4gY29tcHV0ZWQoKCkgPT4gd2lkZ2V0c0NvbmZpZz8uKClbd2lkZ2V0TmFtZV0pO1xuXHR9O1xuXG5cdGNvbnN0IGNhbGxXaWRnZXRGYWN0b3J5ID0gPFcgZXh0ZW5kcyBXaWRnZXQ+KHtcblx0XHRmYWN0b3J5LFxuXHRcdHdpZGdldE5hbWUgPSBudWxsLFxuXHRcdGRlZmF1bHRDb25maWcgPSB7fSxcblx0XHRldmVudHMsXG5cdFx0YWZ0ZXJJbml0LFxuXHRcdHNsb3RUZW1wbGF0ZXMsXG5cdFx0c2xvdENoaWxkcmVuLFxuXHR9OiB7XG5cdFx0ZmFjdG9yeTogV2lkZ2V0RmFjdG9yeTxXPjtcblx0XHR3aWRnZXROYW1lPzogbnVsbCB8IGtleW9mIENvbmZpZztcblx0XHRkZWZhdWx0Q29uZmlnPzogUGFydGlhbDxXaWRnZXRQcm9wczxXPj4gfCBSZWFkYWJsZVNpZ25hbDxQYXJ0aWFsPFdpZGdldFByb3BzPFc+PiB8IHVuZGVmaW5lZD47XG5cdFx0ZXZlbnRzPzogUGFydGlhbDxQaWNrPFdpZGdldFByb3BzPFc+LCBrZXlvZiBXaWRnZXRQcm9wczxXPiAmIGBvbiR7c3RyaW5nfWA+Pjtcblx0XHRhZnRlckluaXQ/OiAod2lkZ2V0OiBBbmd1bGFyV2lkZ2V0PFc+KSA9PiB2b2lkO1xuXHRcdHNsb3RUZW1wbGF0ZXM/OiAoKSA9PiB7XG5cdFx0XHRbSyBpbiBrZXlvZiBXaWRnZXRQcm9wczxXPiBhcyBJc1Nsb3RDb250ZW50PFdpZGdldFByb3BzPFc+W0tdPiBleHRlbmRzIDAgPyBuZXZlciA6IEtdOiBXaWRnZXRQcm9wczxXPltLXSBleHRlbmRzIFNsb3RDb250ZW50PGluZmVyIFU+XG5cdFx0XHRcdD8gVGVtcGxhdGVSZWY8VT4gfCB1bmRlZmluZWRcblx0XHRcdFx0OiBuZXZlcjtcblx0XHR9O1xuXHRcdHNsb3RDaGlsZHJlbj86ICgpID0+IFRlbXBsYXRlUmVmPHZvaWQ+IHwgdW5kZWZpbmVkO1xuXHR9KTogQW5ndWxhcldpZGdldDxXPiA9PlxuXHRcdGNhbGxXaWRnZXRGYWN0b3J5V2l0aENvbmZpZyh7XG5cdFx0XHRmYWN0b3J5LFxuXHRcdFx0d2lkZ2V0Q29uZmlnOiB3aWRnZXROYW1lID8gKGluamVjdFdpZGdldENvbmZpZyh3aWRnZXROYW1lKSBhcyBhbnkpIDogbnVsbCxcblx0XHRcdGRlZmF1bHRDb25maWcsXG5cdFx0XHRldmVudHMsXG5cdFx0XHRhZnRlckluaXQsXG5cdFx0XHRzbG90VGVtcGxhdGVzOiBzbG90VGVtcGxhdGVzIGFzIGFueSxcblx0XHRcdHNsb3RDaGlsZHJlbixcblx0XHR9KTtcblxuXHRyZXR1cm4ge1xuXHRcdC8qKlxuXHRcdCAqIERlcGVuZGVuY3kgSW5qZWN0aW9uIHRva2VuIHdoaWNoIGNhbiBiZSB1c2VkIHRvIHByb3ZpZGUgb3IgaW5qZWN0IHRoZSB3aWRnZXRzIGRlZmF1bHQgY29uZmlndXJhdGlvbiBzdG9yZS5cblx0XHQgKi9cblx0XHR3aWRnZXRzQ29uZmlnSW5qZWN0aW9uVG9rZW4sXG5cdFx0cHJvdmlkZVdpZGdldHNDb25maWcsXG5cdFx0aW5qZWN0V2lkZ2V0c0NvbmZpZyxcblx0XHRpbmplY3RXaWRnZXRDb25maWcsXG5cdFx0Y2FsbFdpZGdldEZhY3RvcnksXG5cdH07XG59O1xuXG5leHBvcnQgY29uc3Qge3dpZGdldHNDb25maWdJbmplY3Rpb25Ub2tlbiwgcHJvdmlkZVdpZGdldHNDb25maWcsIGluamVjdFdpZGdldENvbmZpZywgaW5qZWN0V2lkZ2V0c0NvbmZpZywgY2FsbFdpZGdldEZhY3Rvcnl9ID1cblx0d2lkZ2V0c0NvbmZpZ0ZhY3Rvcnk8V2lkZ2V0c0NvbmZpZz4oKTtcbiJdfQ==`;export{n as default};
