const e=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const React = require("react");
const generated_config = require("./generated/config.cjs");
const collapse = require("@agnos-ui/core-bootstrap/components/collapse");
const directive = require("@agnos-ui/react-headless/utils/directive");
const export_getCollapseDefaultConfig = collapse.getCollapseDefaultConfig;
const export_createCollapse = collapse.createCollapse;
const Collapse = React.forwardRef(
  function Collapse2(props, ref) {
    const { api, directives } = generated_config.useWidgetWithConfig(export_createCollapse, props, "collapse");
    React.useImperativeHandle(ref, () => api, [api]);
    return /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirectives(directives.collapseDirective), children: props.children });
  }
);
exports.Collapse = Collapse;
exports.export_createCollapse = export_createCollapse;
exports.export_getCollapseDefaultConfig = export_getCollapseDefaultConfig;
`;export{e as default};
