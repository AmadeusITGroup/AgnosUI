const t=`import { createWidgetsConfig } from '@agnos-ui/core';
import { computed } from '@amadeus-it-group/tansu';
import { getContext, setContext } from 'svelte';
import { callWidgetFactoryWithConfig } from '.';
export const widgetsConfigFactory = (widgetsDefaultConfigKey = Symbol('widgetsConfig')) => {
    /**
     * Creates in the Svelte context hierarchy a new widgets default configuration store that inherits from any widgets default configuration
     * store already defined at an upper level in the Svelte context hierarchy.
     * It contains its own set of widgets configuration properties that override the same properties form the parent configuration.
     *
     * @remarks
     * The configuration is computed from the parent configuration in two steps:
     * - first step: the parent configuration is transformed by the adaptParentConfig function (if specified).
     * If adaptParentConfig is not specified, this step is skipped.
     * - second step: the configuration from step 1 is merged (2-levels deep) with the own$ store. The own$ store initially contains
     * an empty object (i.e. no property from the parent is overridden). It can be changed by calling set on the store returned by this function.
     *
     * @param adaptParentConfig - optional function that receives a 2-levels copy of the widgets default configuration
     * defined at an upper level in the Svelte context hierarchy (or an empty object if there is none) and returns the widgets
     * default configuration to be used.
     * It is called only if the configuration is needed, and was not yet computed for the current value of the parent configuration.
     * It is called in a tansu reactive context, so it can use any tansu store and will be called again if those stores change.
     *
     * @returns the resulting widgets default configuration store, which contains 3 additional properties that are stores:
     * parent$, adaptedParent$ (containing the value computed after the first step), and own$ (that contains only overridding properties).
     * The resulting store is writable, its set function is actually the set function of the own$ store.
     *
     * @example
     * \`\`\`ts
     * const widgetsConfig = createWidgetsDefaultConfig((parentConfig) => {
     *   // first step configuration: transforms the parent configuration
     *   parentConfig.rating = parentConfig.rating ?? {};
     *   parentConfig.rating.className = \`\${parentConfig.rating.className ?? ''} my-rating-extra-class\`
     *   return parentConfig;
     * });
     * widgetsConfig.set({
     *   // second step configuration: overrides the parent configuration
     *   rating: {
     *     slotStar: MyCustomSlotStar
     *   }
     * });
     * \`\`\`
     */
    const createWidgetsDefaultConfig = (adaptParentConfig) => {
        const parent$ = getContext(widgetsDefaultConfigKey);
        const child$ = createWidgetsConfig(parent$, adaptParentConfig);
        setContext(widgetsDefaultConfigKey, child$);
        return child$;
    };
    const getContextWidgetConfig = (widgetName) => {
        const widgetsConfig = getContext(widgetsDefaultConfigKey);
        return computed(() => widgetsConfig?.()[widgetName]);
    };
    const callWidgetFactory = (factory, widgetName, slots, defaultConfig = {}) => callWidgetFactoryWithConfig(factory, slots, defaultConfig, widgetName ? getContextWidgetConfig(widgetName) : null);
    return {
        /**
         * Key used in the Svelte context to get or set the widgets default configuration store.
         */
        widgetsDefaultConfigKey,
        createWidgetsDefaultConfig,
        getContextWidgetConfig,
        callWidgetFactory,
    };
};
export const { widgetsDefaultConfigKey, createWidgetsDefaultConfig, getContextWidgetConfig, callWidgetFactory } = widgetsConfigFactory();
`;export{t as default};
