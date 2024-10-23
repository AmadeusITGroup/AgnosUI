const e=`import { findChangedProperties } from "@agnos-ui/core/utils/stores";
import { useMemo, useRef, useEffect } from "react";
import { a as useObservablesProxy } from "./stores-B90XF8Sy.js";
function useWidget(createWidget, props = {}, propsConfig) {
  const coreWidget = useMemo(() => createWidget({ ...propsConfig, props: { ...propsConfig == null ? void 0 : propsConfig.props, ...props } }), []);
  const previousProps = useRef(props);
  useEffect(() => {
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
  useWidget as u
};
`;export{e as default};
