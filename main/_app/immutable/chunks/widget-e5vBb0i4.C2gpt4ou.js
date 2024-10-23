const e=`"use strict";
const stores = require("@agnos-ui/core/utils/stores");
const react = require("react");
const stores$1 = require("./stores-skeXwTXt.cjs");
function useWidget(createWidget, props = {}, propsConfig) {
  const coreWidget = react.useMemo(() => createWidget({ ...propsConfig, props: { ...propsConfig == null ? void 0 : propsConfig.props, ...props } }), []);
  const previousProps = react.useRef(props);
  react.useEffect(() => {
    const changedProps = stores.findChangedProperties(previousProps.current, props);
    previousProps.current = props;
    if (changedProps) {
      coreWidget.patch(changedProps);
    }
  }, [props]);
  const state = stores$1.useObservablesProxy(coreWidget.stores);
  return { state, api: coreWidget.api, directives: coreWidget.directives };
}
exports.useWidget = useWidget;
`;export{e as default};
