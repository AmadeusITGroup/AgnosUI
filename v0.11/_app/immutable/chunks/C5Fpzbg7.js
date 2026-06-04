const e=`import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { Slot } from "@agnos-ui/react-headless/slot";
import { useDirective } from "@agnos-ui/react-headless/utils/directive";
import { Portal } from "@agnos-ui/react-headless/utils/portal";
import { useImperativeHandle } from "react";
import { useWidget } from "./generated/config.js";
import { createDrawer, getDrawerDefaultConfig } from "@agnos-ui/core-bootstrap/components/drawer";
const export_getDrawerDefaultConfig = getDrawerDefaultConfig;
const export_createDrawer = createDrawer;
const BackdropElement = ({ directives }) => /* @__PURE__ */ jsx("div", { ...useDirective(directives.backdropDirective) });
const DrawerElement = (slotContext) => /* @__PURE__ */ jsxs("div", { ...useDirective(slotContext.directives.drawerDirective), children: [
  /* @__PURE__ */ jsx("div", { ...useDirective(slotContext.directives.containerDirective), children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.structure, props: slotContext }) }),
  slotContext.state.resizable && /* @__PURE__ */ jsx(Splitter, { ...slotContext })
] });
const DefaultDrawerSlotStructure = (slotContext) => /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "au-drawer-content", children: [
  /* @__PURE__ */ jsx("div", { className: "au-drawer-header", children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.header, props: slotContext }) }),
  /* @__PURE__ */ jsx("div", { className: "au-drawer-body", children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.children, props: slotContext }) })
] }) });
const Splitter = (slotContext) => /* @__PURE__ */ jsx("div", { ...useDirective(slotContext.directives.splitterDirective), tabIndex: 0 });
const defaultConfig = {
  structure: DefaultDrawerSlotStructure
};
function Drawer({ ref, ...props }) {
  const widgetContext = useWidget(export_createDrawer, props, { ...defaultConfig });
  useImperativeHandle(ref, () => widgetContext.api, [widgetContext.api]);
  return /* @__PURE__ */ jsxs(Portal, { container: widgetContext.state.container, children: [
    !widgetContext.state.backdropHidden && /* @__PURE__ */ jsx(BackdropElement, { ...widgetContext }),
    !widgetContext.state.hidden && /* @__PURE__ */ jsx(DrawerElement, { ...widgetContext })
  ] });
}
export {
  DefaultDrawerSlotStructure as D,
  Drawer as a,
  export_getDrawerDefaultConfig as b,
  export_createDrawer as e
};
`;export{e as default};
