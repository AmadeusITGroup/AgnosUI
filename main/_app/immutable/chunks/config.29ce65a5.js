const t=`import { jsx as _jsx } from "react/jsx-runtime";
import { createWidgetsConfig } from '@agnos-ui/core/config';
import { computed } from '@amadeus-it-group/tansu';
import { createContext, useContext, useEffect, useMemo } from 'react';
import { useWidget } from './utils/widget';
import { usePropsAsStore } from './utils/stores';
export * from '@agnos-ui/core/config';
export const widgetsConfigFactory = (widgetsConfigContext = createContext(undefined)) => {
    const useWidgetContext = (widgetName, defaultConfig) => {
        const widgetsConfig = useContext(widgetsConfigContext);
        const defaultConfig$ = usePropsAsStore(defaultConfig);
        return useMemo(() => computed(() => ({ ...defaultConfig$(), ...(widgetName ? widgetsConfig?.()[widgetName] : undefined) })), [widgetsConfig]);
    };
    const useWidgetWithConfig = (factory, props, widgetName, defaultProps) => useWidget(factory, props, { config: useWidgetContext(widgetName, defaultProps) });
    /**
     * React component that provides in the React context (for all AgnosUI descendant widgets) a new widgets default configuration
     * store that inherits from any widgets default configuration store already defined at an upper level in the React context hierarchy.
     * It contains its own set of widgets configuration properties that override the same properties form the parent configuration.
     *
     * @remarks
     * The configuration is computed from the parent configuration in two steps:
     * - first step: the parent configuration is transformed by the adaptParentConfig function (if specified).
     * If adaptParentConfig is not specified, this step is skipped.
     * - second step: the configuration from step 1 is merged (2-levels deep) with the properties of the component.
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
     * \`\`\`tsx
     * <WidgetsDefaultConfig
     *   adaptParentConfig={(parentConfig) => {
     *     parentConfig.rating = parentConfig.rating ?? {};
     *     parentConfig.rating.className = \`\${parentConfig.rating.className ?? ''} my-rating-extra-class\`
     *     return parentConfig;
     *   }}
     *   rating={{slotStar: MyCustomSlotStar}}
     * />
     * \`\`\`
     */
    const WidgetsDefaultConfig = ({ children, adaptParentConfig, ...props }) => {
        const config$ = useContext(widgetsConfigContext);
        let storeRecreated = false;
        const store$ = useMemo(() => {
            const store = createWidgetsConfig(config$, adaptParentConfig);
            store.set(props);
            storeRecreated = true;
            return store;
        }, [config$, adaptParentConfig]);
        useEffect(() => {
            if (!storeRecreated) {
                store$.set(props);
            }
        }, [props]);
        return _jsx(widgetsConfigContext.Provider, { value: store$, children: children });
    };
    return {
        /**
         * React context which can be used to provide or consume the widgets default configuration store.
         */
        widgetsConfigContext,
        useWidgetContext,
        useWidgetWithConfig,
        WidgetsDefaultConfig,
    };
};
export const { widgetsConfigContext, useWidgetContext, useWidgetWithConfig, WidgetsDefaultConfig } = widgetsConfigFactory();
`;export{t as default};
