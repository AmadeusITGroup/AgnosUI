const o=`import { findChangedProperties } from "@agnos-ui/core/utils/stores";
import { useMemo, useRef } from "react";
import { a as useObservablesProxy } from "./stores-DZalyTTa.js";
function useWidgetWithConfig(factory, props = {}, propsConfig) {
  const coreWidget = useMemo(() => factory({ ...propsConfig, props: { ...propsConfig == null ? void 0 : propsConfig.props, ...props } }), []);
  const previousProps = useRef(props);
  useMemo(() => {
    const changedProps = findChangedProperties(previousProps.current, props);
    previousProps.current = props;
    if (changedProps) {
      coreWidget.patch(changedProps);
    }
  }, [props]);
  const state = useObservablesProxy(coreWidget.stores);
  return { state, api: coreWidget.api, directives: coreWidget.directives };
}
export {
  useWidgetWithConfig as u
};
`;export{o as default};
