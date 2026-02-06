const e=`import { findChangedProperties } from "@agnos-ui/core/utils/stores";
import { useMemo, useRef } from "react";
import { a as useObservablesProxy } from "./stores-C6L5Y6c8.js";
import "@agnos-ui/core/utils/widget";
function useWidgetWithConfig(factory, props = {}, propsConfig) {
  const coreWidget = useMemo(() => factory({ ...propsConfig, props: { ...propsConfig?.props, ...props } }), []);
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
`;export{e as default};
