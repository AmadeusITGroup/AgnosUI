const e=`import { jsx } from "react/jsx-runtime";
import { useImperativeHandle } from "react";
import { useWidgetWithConfig } from "./generated/config.js";
import { getCollapseDefaultConfig, createCollapse } from "@agnos-ui/core-bootstrap/components/collapse";
import { useDirectives } from "@agnos-ui/react-headless/utils/directive";
const export_getCollapseDefaultConfig = getCollapseDefaultConfig;
const export_createCollapse = createCollapse;
function Collapse(props) {
  const { api, directives } = useWidgetWithConfig(export_createCollapse, props, "collapse");
  useImperativeHandle(props.ref, () => api, [api]);
  return /* @__PURE__ */ jsx("div", { ...useDirectives(directives.collapseDirective), children: props.children });
}
export {
  Collapse as C,
  export_createCollapse as a,
  export_getCollapseDefaultConfig as e
};
`;export{e as default};
