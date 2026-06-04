const e=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const slot = require("@agnos-ui/react-headless/slot");
const directive = require("@agnos-ui/react-headless/utils/directive");
const portal = require("@agnos-ui/react-headless/utils/portal");
const React = require("react");
const generated_config = require("./generated/config.cjs");
const drawer = require("@agnos-ui/core-bootstrap/components/drawer");
const export_getDrawerDefaultConfig = drawer.getDrawerDefaultConfig;
const export_createDrawer = drawer.createDrawer;
const BackdropElement = ({ directives }) => /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirective(directives.backdropDirective) });
const DrawerElement = (slotContext) => /* @__PURE__ */ jsxRuntime.jsxs("div", { ...directive.useDirective(slotContext.directives.drawerDirective), children: [
  /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirective(slotContext.directives.containerDirective), children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.structure, props: slotContext }) }),
  slotContext.state.resizable && /* @__PURE__ */ jsxRuntime.jsx(Splitter, { ...slotContext })
] });
const DefaultDrawerSlotStructure = (slotContext) => /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "au-drawer-content", children: [
  /* @__PURE__ */ jsxRuntime.jsx("div", { className: "au-drawer-header", children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.header, props: slotContext }) }),
  /* @__PURE__ */ jsxRuntime.jsx("div", { className: "au-drawer-body", children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.children, props: slotContext }) })
] }) });
const Splitter = (slotContext) => /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirective(slotContext.directives.splitterDirective), tabIndex: 0 });
const defaultConfig = {
  structure: DefaultDrawerSlotStructure
};
function Drawer({ ref, ...props }) {
  const widgetContext = generated_config.useWidget(export_createDrawer, props, { ...defaultConfig });
  React.useImperativeHandle(ref, () => widgetContext.api, [widgetContext.api]);
  return /* @__PURE__ */ jsxRuntime.jsxs(portal.Portal, { container: widgetContext.state.container, children: [
    !widgetContext.state.backdropHidden && /* @__PURE__ */ jsxRuntime.jsx(BackdropElement, { ...widgetContext }),
    !widgetContext.state.hidden && /* @__PURE__ */ jsxRuntime.jsx(DrawerElement, { ...widgetContext })
  ] });
}
exports.DefaultDrawerSlotStructure = DefaultDrawerSlotStructure;
exports.Drawer = Drawer;
exports.export_createDrawer = export_createDrawer;
exports.export_getDrawerDefaultConfig = export_getDrawerDefaultConfig;
`;export{e as default};
