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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFFakQsT0FBTyxFQUFDLGNBQWMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUscUJBQXFCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFMUcsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0QsY0FBYyx1QkFBdUIsQ0FBQztBQU90Qzs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsQ0FDbkMsOEJBQThCLElBQUksY0FBYyxDQUE2QixlQUFlLENBQUMsRUFDNUYsRUFBRTtJQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWtERztJQUNILE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxpQkFBNkMsRUFBbUIsRUFBRSxDQUFDLENBQUM7UUFDakcsT0FBTyxFQUFFLDJCQUEyQjtRQUNwQyxVQUFVLEVBQUUsQ0FBQyxNQUF5QyxFQUFFLEVBQUU7WUFDekQsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO2dCQUN2QixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2xDLE1BQU0seUJBQXlCLEdBQUcsaUJBQWlCLENBQUM7Z0JBQ3BELGlCQUFpQixHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN4RyxDQUFDO1lBQ0QsT0FBTyxtQkFBbUIsQ0FBQyxNQUFNLElBQUksU0FBUyxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDcEUsQ0FBQztRQUNELElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLDJCQUEyQixDQUFDLENBQUM7S0FDckUsQ0FBQyxDQUFDO0lBRUg7Ozs7Ozs7OztPQVNHO0lBQ0gsTUFBTSxtQkFBbUIsR0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUV0RSxNQUFNLGtCQUFrQixHQUFHLENBQXlCLFVBQWEsRUFBa0QsRUFBRTtRQUNwSCxNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsMkJBQTJCLEVBQUUsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUM1RSxPQUFPLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQyxDQUFDO0lBRUYsTUFBTSxpQkFBaUIsR0FBRyxDQUFtQixFQUM1QyxPQUFPLEVBQ1AsVUFBVSxHQUFHLElBQUksRUFDakIsYUFBYSxHQUFHLEVBQUUsRUFDbEIsTUFBTSxFQUNOLFNBQVMsR0FPVCxFQUFvQixFQUFFLENBQ3RCLDJCQUEyQixDQUFDO1FBQzNCLE9BQU87UUFDUCxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBRSxrQkFBa0IsQ0FBQyxVQUFVLENBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUN6RSxhQUFhO1FBQ2IsTUFBTTtRQUNOLFNBQVM7S0FDVCxDQUFDLENBQUM7SUFFSixPQUFPO1FBQ047O1dBRUc7UUFDSCwyQkFBMkI7UUFDM0Isb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsaUJBQWlCO0tBQ2pCLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxFQUFDLDJCQUEyQixFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLGlCQUFpQixFQUFDLEdBQzNILG9CQUFvQixFQUFpQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1dpZGdldCwgV2lkZ2V0RmFjdG9yeSwgV2lkZ2V0UHJvcHN9IGZyb20gJ0BhZ25vcy11aS9jb3JlL3R5cGVzJztcbmltcG9ydCB0eXBlIHtQYXJ0aWFsMkxldmVscywgV2lkZ2V0c0NvbmZpZ1N0b3JlLCBXaWRnZXRzQ29uZmlnIGFzIENvcmVXaWRnZXRzQ29uZmlnfSBmcm9tICdAYWdub3MtdWkvY29yZS9jb25maWcnO1xuaW1wb3J0IHtjcmVhdGVXaWRnZXRzQ29uZmlnfSBmcm9tICdAYWdub3MtdWkvY29yZS9jb25maWcnO1xuaW1wb3J0IHR5cGUge1JlYWRhYmxlU2lnbmFsfSBmcm9tICdAYW1hZGV1cy1pdC1ncm91cC90YW5zdSc7XG5pbXBvcnQge2NvbXB1dGVkfSBmcm9tICdAYW1hZGV1cy1pdC1ncm91cC90YW5zdSc7XG5pbXBvcnQgdHlwZSB7RmFjdG9yeVByb3ZpZGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SW5qZWN0aW9uVG9rZW4sIEluamVjdG9yLCBPcHRpb25hbCwgU2tpcFNlbGYsIGluamVjdCwgcnVuSW5JbmplY3Rpb25Db250ZXh0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHtBZGFwdFByb3BzU2xvdHMsIEFuZ3VsYXJXaWRnZXR9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtjYWxsV2lkZ2V0RmFjdG9yeVdpdGhDb25maWd9IGZyb20gJy4vdXRpbHMvd2lkZ2V0JztcblxuZXhwb3J0ICogZnJvbSAnQGFnbm9zLXVpL2NvcmUvY29uZmlnJztcblxuZXhwb3J0IHR5cGUgV2lkZ2V0c0NvbmZpZyA9IHtcblx0W1dpZGdldE5hbWUgaW4ga2V5b2YgQ29yZVdpZGdldHNDb25maWddOiBBZGFwdFByb3BzU2xvdHM8Q29yZVdpZGdldHNDb25maWdbV2lkZ2V0TmFtZV0+O1xufTtcbnR5cGUgQWRhcHRQYXJlbnRDb25maWc8Q29uZmlnPiA9IChjb25maWc6IFBhcnRpYWwyTGV2ZWxzPENvbmZpZz4pID0+IFBhcnRpYWwyTGV2ZWxzPENvbmZpZz47XG5cbi8qKlxuICogQSBmYWN0b3J5IHRvIGNyZWF0ZSB0aGUgdXRpbGl0aWVzIHRvIGFsbG93IHdpZGdldHMgdG8gYmUgY29udGV4dC1hd2FyZS5cbiAqXG4gKiBJdCBjYW4gYmUgdXNlZCB3aGVuIGV4dGVuZGluZyB0aGUgY29yZSBhbmQgY3JlYXRpbmcgbmV3IHdpZGdldHMuXG4gKlxuICogQHBhcmFtIHdpZGdldHNDb25maWdJbmplY3Rpb25Ub2tlbiAtIHRoZSB3aWRnZXRzIGNvbmZpZyBpbmplY3Rpb24gdG9rZW5cbiAqIEByZXR1cm5zIHRoZSB1dGlsaXRpZXMgdG8gY3JlYXRlIC8gbWFuYWdlIHdpZGdldHMgYW5kIGNvbnRleHRzXG4gKi9cbmV4cG9ydCBjb25zdCB3aWRnZXRzQ29uZmlnRmFjdG9yeSA9IDxDb25maWcgZXh0ZW5kcyB7W3dpZGdldE5hbWU6IHN0cmluZ106IG9iamVjdH0gPSBXaWRnZXRzQ29uZmlnPihcblx0d2lkZ2V0c0NvbmZpZ0luamVjdGlvblRva2VuID0gbmV3IEluamVjdGlvblRva2VuPFdpZGdldHNDb25maWdTdG9yZTxDb25maWc+Pignd2lkZ2V0c0NvbmZpZycpLFxuKSA9PiB7XG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgcHJvdmlkZXIgb2Ygd2lkZ2V0cyBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gdGhhdCBpbmhlcml0cyBmcm9tIGFueSB3aWRnZXRzIGRlZmF1bHQgY29uZmlndXJhdGlvbiBhbHJlYWR5IGRlZmluZWQgYXQgYW4gdXBwZXIgbGV2ZWxcblx0ICogaW4gdGhlIEFuZ3VsYXIgZGVwZW5kZW5jeSBpbmplY3Rpb24gc3lzdGVtLiBJdCBjb250YWlucyBpdHMgb3duIHNldCBvZiB3aWRnZXRzIGNvbmZpZ3VyYXRpb24gcHJvcGVydGllcyB0aGF0IG92ZXJyaWRlIHRoZSBzYW1lIHByb3BlcnRpZXMgZm9ybVxuXHQgKiB0aGUgcGFyZW50IGNvbmZpZ3VyYXRpb24uXG5cdCAqXG5cdCAqIEByZW1hcmtzXG5cdCAqIFRoZSBjb25maWd1cmF0aW9uIGlzIGNvbXB1dGVkIGZyb20gdGhlIHBhcmVudCBjb25maWd1cmF0aW9uIGluIHR3byBzdGVwczpcblx0ICogLSBmaXJzdCBzdGVwOiB0aGUgcGFyZW50IGNvbmZpZ3VyYXRpb24gaXMgdHJhbnNmb3JtZWQgYnkgdGhlIGFkYXB0UGFyZW50Q29uZmlnIGZ1bmN0aW9uIChpZiBzcGVjaWZpZWQpLlxuXHQgKiBJZiBhZGFwdFBhcmVudENvbmZpZyBpcyBub3Qgc3BlY2lmaWVkLCB0aGlzIHN0ZXAgaXMgc2tpcHBlZC5cblx0ICogLSBzZWNvbmQgc3RlcDogdGhlIGNvbmZpZ3VyYXRpb24gZnJvbSBzdGVwIDEgaXMgbWVyZ2VkICgyLWxldmVscyBkZWVwKSB3aXRoIHRoZSBvd24kIHN0b3JlLiBUaGUgb3duJCBzdG9yZSBpbml0aWFsbHkgY29udGFpbnNcblx0ICogYW4gZW1wdHkgb2JqZWN0IChpLmUuIG5vIHByb3BlcnR5IGZyb20gdGhlIHBhcmVudCBpcyBvdmVycmlkZGVuKS4gSXQgY2FuIGJlIGNoYW5nZWQgYnkgY2FsbGluZyBzZXQgb24gdGhlIHN0b3JlIHJldHVybmVkIGJ5XG5cdCAqIHtAbGluayBpbmplY3RXaWRnZXRzQ29uZmlnfS5cblx0ICpcblx0ICogQHBhcmFtIGFkYXB0UGFyZW50Q29uZmlnIC0gb3B0aW9uYWwgZnVuY3Rpb24gdGhhdCByZWNlaXZlcyBhIDItbGV2ZWxzIGNvcHkgb2YgdGhlIHdpZGdldHMgZGVmYXVsdCBjb25maWd1cmF0aW9uXG5cdCAqIGRlZmluZWQgYXQgYW4gdXBwZXIgbGV2ZWwgaW4gdGhlIEFuZ3VsYXIgZGVwZW5kZW5jeSBpbmplY3Rpb24gc3lzdGVtIChvciBhbiBlbXB0eSBvYmplY3QgaWYgdGhlcmUgaXMgbm9uZSkgYW5kIHJldHVybnMgdGhlIHdpZGdldHNcblx0ICogZGVmYXVsdCBjb25maWd1cmF0aW9uIHRvIGJlIHVzZWQuXG5cdCAqIEl0IGlzIGNhbGxlZCBvbmx5IGlmIHRoZSBjb25maWd1cmF0aW9uIGlzIG5lZWRlZCwgYW5kIHdhcyBub3QgeWV0IGNvbXB1dGVkIGZvciB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgcGFyZW50IGNvbmZpZ3VyYXRpb24uXG5cdCAqIEl0IGlzIGNhbGxlZCBpbiBhIHRhbnN1IHJlYWN0aXZlIGNvbnRleHQsIHNvIGl0IGNhbiB1c2UgYW55IHRhbnN1IHN0b3JlIGFuZCB3aWxsIGJlIGNhbGxlZCBhZ2FpbiBpZiB0aG9zZSBzdG9yZXMgY2hhbmdlLlxuXHQgKiBJdCBpcyBhbHNvIGNhbGxlZCBpbiBhbiBBbmd1bGFyIGluamVjdGlvbiBjb250ZXh0LCBzbyBpdCBjYW4gY2FsbCB0aGUgQW5ndWxhciBpbmplY3QgZnVuY3Rpb24gdG8gZ2V0IGFuZCB1c2UgZGVwZW5kZW5jaWVzIGZyb20gdGhlXG5cdCAqIEFuZ3VsYXIgZGVwZW5kZW5jeSBpbmplY3Rpb24gc3lzdGVtLlxuXHQgKlxuXHQgKiBAcmV0dXJucyBESSBwcm92aWRlciB0byBiZSBpbmNsdWRlZCBhIGxpc3Qgb2YgYHByb3ZpZGVyc2AgKGZvciBleGFtcGxlIGF0IGEgY29tcG9uZW50IGxldmVsIG9yXG5cdCAqIGFueSBvdGhlciBsZXZlbCBvZiB0aGUgQW5ndWxhciBkZXBlbmRlbmN5IGluamVjdGlvbiBzeXN0ZW0pXG5cdCAqXG5cdCAqIEBleGFtcGxlXG5cdCAqIGBgYHR5cGVzY3JpcHRcblx0ICogQENvbXBvbmVudCh7XG5cdCAqICAgLy8gLi4uXG5cdCAqICAgcHJvdmlkZXJzOiBbXG5cdCAqICAgICBwcm92aWRlV2lkZ2V0c0NvbmZpZygocGFyZW50Q29uZmlnKSA9PiB7XG5cdCAqICAgICAgIC8vIGZpcnN0IHN0ZXAgY29uZmlndXJhdGlvbjogdHJhbnNmb3JtcyB0aGUgcGFyZW50IGNvbmZpZ3VyYXRpb25cblx0ICogICAgICAgcGFyZW50Q29uZmlnLnJhdGluZyA9IHBhcmVudENvbmZpZy5yYXRpbmcgPz8ge307XG5cdCAqICAgICAgIHBhcmVudENvbmZpZy5yYXRpbmcuY2xhc3NOYW1lID0gYCR7cGFyZW50Q29uZmlnLnJhdGluZy5jbGFzc05hbWUgPz8gJyd9IG15LXJhdGluZy1leHRyYS1jbGFzc2Bcblx0ICogICAgICAgcmV0dXJuIHBhcmVudENvbmZpZztcblx0ICogICAgIH0pXG5cdCAqICAgXVxuXHQgKiB9KVxuXHQgKiBjbGFzcyBNeUNvbXBvbmVudCB7XG5cdCAqICAgd2lkZ2V0c0NvbmZpZyA9IGluamVjdFdpZGdldHNDb25maWcoKTtcblx0ICogICBjb25zdHJ1Y3RvcigpIHtcblx0ICogICAgIHRoaXMud2lkZ2V0c0NvbmZpZy5zZXQoe1xuXHQgKiAgICAgICAvLyBzZWNvbmQgc3RlcCBjb25maWd1cmF0aW9uOiBvdmVycmlkZXMgdGhlIHBhcmVudCBjb25maWd1cmF0aW9uXG5cdCAqICAgICAgIHJhdGluZzoge1xuXHQgKiAgICAgICAgIHNsb3RTdGFyOiBNeUN1c3RvbVNsb3RTdGFyXG5cdCAqICAgICAgIH1cblx0ICogICAgIH0pO1xuXHQgKiAgIH1cblx0ICogICAvLyAuLi5cblx0ICogfVxuXHQgKiBgYGBcblx0ICovXG5cdGNvbnN0IHByb3ZpZGVXaWRnZXRzQ29uZmlnID0gKGFkYXB0UGFyZW50Q29uZmlnPzogQWRhcHRQYXJlbnRDb25maWc8Q29uZmlnPik6IEZhY3RvcnlQcm92aWRlciA9PiAoe1xuXHRcdHByb3ZpZGU6IHdpZGdldHNDb25maWdJbmplY3Rpb25Ub2tlbixcblx0XHR1c2VGYWN0b3J5OiAocGFyZW50OiBXaWRnZXRzQ29uZmlnU3RvcmU8Q29uZmlnPiB8IG51bGwpID0+IHtcblx0XHRcdGlmIChhZGFwdFBhcmVudENvbmZpZykge1xuXHRcdFx0XHRjb25zdCBpbmplY3RvciA9IGluamVjdChJbmplY3Rvcik7XG5cdFx0XHRcdGNvbnN0IG9yaWdpbmFsQWRhcHRQYXJlbnRDb25maWcgPSBhZGFwdFBhcmVudENvbmZpZztcblx0XHRcdFx0YWRhcHRQYXJlbnRDb25maWcgPSAodmFsdWUpID0+IHJ1bkluSW5qZWN0aW9uQ29udGV4dChpbmplY3RvciwgKCkgPT4gb3JpZ2luYWxBZGFwdFBhcmVudENvbmZpZyh2YWx1ZSkpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNyZWF0ZVdpZGdldHNDb25maWcocGFyZW50ID8/IHVuZGVmaW5lZCwgYWRhcHRQYXJlbnRDb25maWcpO1xuXHRcdH0sXG5cdFx0ZGVwczogW1tuZXcgU2tpcFNlbGYoKSwgbmV3IE9wdGlvbmFsKCksIHdpZGdldHNDb25maWdJbmplY3Rpb25Ub2tlbl1dLFxuXHR9KTtcblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgd2lkZ2V0cyBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gc3RvcmUgdGhhdCB3YXMgcHJvdmlkZWQgaW4gdGhlIGN1cnJlbnQgaW5qZWN0aW9uIGNvbnRleHQuXG5cdCAqIFRocm93cyBpZiB0aGUgbm8gd2lkZ2V0cyBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gc3RvcmUgd2FzIHByb3ZpZGVkLlxuXHQgKlxuXHQgKiBAcmVtYXJrc1xuXHQgKiBUaGlzIGZ1bmN0aW9uIG11c3QgYmUgY2FsbGVkIGZyb20gYW4gaW5qZWN0aW9uIGNvbnRleHQsIHN1Y2ggYXMgYSBjb25zdHJ1Y3RvciwgYSBmYWN0b3J5IGZ1bmN0aW9uLCBhIGZpZWxkIGluaXRpYWxpemVyIG9yXG5cdCAqIGEgZnVuY3Rpb24gdXNlZCB3aXRoIHtAbGluayBodHRwczovL2FuZ3VsYXIuaW8vYXBpL2NvcmUvcnVuSW5JbmplY3Rpb25Db250ZXh0IHwgcnVuSW5JbmplY3Rpb25Db250ZXh0fS5cblx0ICpcblx0ICogQHJldHVybnMgdGhlIHdpZGdldHMgZGVmYXVsdCBjb25maWd1cmF0aW9uIHN0b3JlLlxuXHQgKi9cblx0Y29uc3QgaW5qZWN0V2lkZ2V0c0NvbmZpZyA9ICgpID0+IGluamVjdCh3aWRnZXRzQ29uZmlnSW5qZWN0aW9uVG9rZW4pO1xuXG5cdGNvbnN0IGluamVjdFdpZGdldENvbmZpZyA9IDxOIGV4dGVuZHMga2V5b2YgQ29uZmlnPih3aWRnZXROYW1lOiBOKTogUmVhZGFibGVTaWduYWw8UGFydGlhbDxDb25maWdbTl0+IHwgdW5kZWZpbmVkPiA9PiB7XG5cdFx0Y29uc3Qgd2lkZ2V0c0NvbmZpZyA9IGluamVjdCh3aWRnZXRzQ29uZmlnSW5qZWN0aW9uVG9rZW4sIHtvcHRpb25hbDogdHJ1ZX0pO1xuXHRcdHJldHVybiBjb21wdXRlZCgoKSA9PiB3aWRnZXRzQ29uZmlnPy4oKVt3aWRnZXROYW1lXSk7XG5cdH07XG5cblx0Y29uc3QgY2FsbFdpZGdldEZhY3RvcnkgPSA8VyBleHRlbmRzIFdpZGdldD4oe1xuXHRcdGZhY3RvcnksXG5cdFx0d2lkZ2V0TmFtZSA9IG51bGwsXG5cdFx0ZGVmYXVsdENvbmZpZyA9IHt9LFxuXHRcdGV2ZW50cyxcblx0XHRhZnRlckluaXQsXG5cdH06IHtcblx0XHRmYWN0b3J5OiBXaWRnZXRGYWN0b3J5PFc+O1xuXHRcdHdpZGdldE5hbWU/OiBudWxsIHwga2V5b2YgQ29uZmlnO1xuXHRcdGRlZmF1bHRDb25maWc/OiBQYXJ0aWFsPFdpZGdldFByb3BzPFc+PiB8IFJlYWRhYmxlU2lnbmFsPFBhcnRpYWw8V2lkZ2V0UHJvcHM8Vz4+IHwgdW5kZWZpbmVkPjtcblx0XHRldmVudHM6IFBpY2s8V2lkZ2V0UHJvcHM8Vz4sIGtleW9mIFdpZGdldFByb3BzPFc+ICYgYG9uJHtzdHJpbmd9YD47XG5cdFx0YWZ0ZXJJbml0PzogKCkgPT4gdm9pZDtcblx0fSk6IEFuZ3VsYXJXaWRnZXQ8Vz4gPT5cblx0XHRjYWxsV2lkZ2V0RmFjdG9yeVdpdGhDb25maWcoe1xuXHRcdFx0ZmFjdG9yeSxcblx0XHRcdHdpZGdldENvbmZpZzogd2lkZ2V0TmFtZSA/IChpbmplY3RXaWRnZXRDb25maWcod2lkZ2V0TmFtZSkgYXMgYW55KSA6IG51bGwsXG5cdFx0XHRkZWZhdWx0Q29uZmlnLFxuXHRcdFx0ZXZlbnRzLFxuXHRcdFx0YWZ0ZXJJbml0LFxuXHRcdH0pO1xuXG5cdHJldHVybiB7XG5cdFx0LyoqXG5cdFx0ICogRGVwZW5kZW5jeSBJbmplY3Rpb24gdG9rZW4gd2hpY2ggY2FuIGJlIHVzZWQgdG8gcHJvdmlkZSBvciBpbmplY3QgdGhlIHdpZGdldHMgZGVmYXVsdCBjb25maWd1cmF0aW9uIHN0b3JlLlxuXHRcdCAqL1xuXHRcdHdpZGdldHNDb25maWdJbmplY3Rpb25Ub2tlbixcblx0XHRwcm92aWRlV2lkZ2V0c0NvbmZpZyxcblx0XHRpbmplY3RXaWRnZXRzQ29uZmlnLFxuXHRcdGluamVjdFdpZGdldENvbmZpZyxcblx0XHRjYWxsV2lkZ2V0RmFjdG9yeSxcblx0fTtcbn07XG5cbmV4cG9ydCBjb25zdCB7d2lkZ2V0c0NvbmZpZ0luamVjdGlvblRva2VuLCBwcm92aWRlV2lkZ2V0c0NvbmZpZywgaW5qZWN0V2lkZ2V0Q29uZmlnLCBpbmplY3RXaWRnZXRzQ29uZmlnLCBjYWxsV2lkZ2V0RmFjdG9yeX0gPVxuXHR3aWRnZXRzQ29uZmlnRmFjdG9yeTxXaWRnZXRzQ29uZmlnPigpO1xuIl19`;export{n as default};
