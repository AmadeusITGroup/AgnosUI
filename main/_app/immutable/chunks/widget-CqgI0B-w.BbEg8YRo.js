const s=`"use strict";
const stores = require("@agnos-ui/core/utils/stores");
const react = require("react");
const stores$1 = require("./stores-DLkDMqBY.cjs");
function useWidget(createWidget, props = {}, propsConfig) {
  const api = react.useMemo(() => createWidget({ ...propsConfig, props: { ...propsConfig == null ? void 0 : propsConfig.props, ...props } }), []);
  const previousProps = react.useRef(props);
  react.useEffect(() => {
    const changedProps = stores.findChangedProperties(previousProps.current, props);
    previousProps.current = props;
    if (changedProps) {
      api.patch(changedProps);
    }
  }, [props]);
  const state = stores$1.useObservable(api.state$);
  return [state, api];
}
exports.useWidget = useWidget;
`;export{s as default};
