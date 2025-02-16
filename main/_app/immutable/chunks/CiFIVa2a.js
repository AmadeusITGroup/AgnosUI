const e=`import { findChangedProperties } from "@agnos-ui/core/utils/stores";
import { useMemo, useRef } from "react";
import { a as useObservablesProxy } from "./stores-DtfLvXAE.js";
function useWidget(createWidget, props = {}, propsConfig) {
  const coreWidget = useMemo(() => createWidget({ ...propsConfig, props: { ...propsConfig == null ? void 0 : propsConfig.props, ...props } }), []);
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
  useWidget as u
};
`;export{e as default};
