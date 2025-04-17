const e=`"use strict";
const stores = require("@agnos-ui/core/utils/stores");
const react = require("react");
const stores$1 = require("./stores-DD819q-h.cjs");
function useWidgetWithConfig(factory, props = {}, propsConfig) {
  const coreWidget = react.useMemo(() => factory({ ...propsConfig, props: { ...propsConfig == null ? void 0 : propsConfig.props, ...props } }), []);
  const previousProps = react.useRef(props);
  react.useMemo(() => {
    const changedProps = stores.findChangedProperties(previousProps.current, props);
    previousProps.current = props;
    if (changedProps) {
      coreWidget.patch(changedProps);
    }
  }, [props]);
  const state = stores$1.useObservablesProxy(coreWidget.stores);
  return { state, api: coreWidget.api, directives: coreWidget.directives };
}
exports.useWidgetWithConfig = useWidgetWithConfig;
`;export{e as default};
