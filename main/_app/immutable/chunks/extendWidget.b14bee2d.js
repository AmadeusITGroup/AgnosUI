const t=`import { batch } from '@amadeus-it-group/tansu';
import { stateStores, writablesWithDefault } from './services/stores';
export const extendWidgetProps = (factory, extraPropsDefaults, extraPropsConfig) => (propsConfig) => {
    const extraPropsWritables = writablesWithDefault(extraPropsDefaults, propsConfig, extraPropsConfig);
    const widget = factory(propsConfig);
    return {
        ...widget,
        ...stateStores({ ...widget.stores, ...extraPropsWritables }),
        patch: (storesValues) => batch(() => {
            let widgetProps;
            for (const [name, value] of Object.entries(storesValues ?? {})) {
                const extraPropsStore = extraPropsWritables[\`\${name}$\`];
                if (extraPropsStore) {
                    extraPropsStore.set(value);
                }
                else {
                    if (!widgetProps) {
                        widgetProps = {};
                    }
                    widgetProps[name] = value;
                }
            }
            if (widgetProps) {
                widget.patch(widgetProps);
            }
        }),
    };
};
`;export{t as default};
