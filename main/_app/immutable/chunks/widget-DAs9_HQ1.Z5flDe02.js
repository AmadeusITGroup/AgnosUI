const e=`import { findChangedProperties } from "@agnos-ui/core/utils/stores";
import { useMemo, useRef, useEffect } from "react";
import { u as useObservable } from "./stores-B8YEDwZq.js";
function useWidget(createWidget, props = {}, propsConfig) {
  const api = useMemo(() => createWidget({ ...propsConfig, props: { ...propsConfig == null ? void 0 : propsConfig.props, ...props } }), []);
  const previousProps = useRef(props);
  useEffect(() => {
    const changedProps = findChangedProperties(previousProps.current, props);
    previousProps.current = props;
    if (changedProps) {
      api.patch(changedProps);
    }
  }, [props]);
  const state = useObservable(api.state$);
  return [state, api];
}
export {
  useWidget as u
};
`;export{e as default};
