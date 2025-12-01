const t=`import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Slot } from "@agnos-ui/react-headless/slot";
import { useDirective } from "@agnos-ui/react-headless/utils/directive";
import { Portal } from "@agnos-ui/react-headless/utils/portal";
import { useImperativeHandle } from "react";
import { useWidget } from "./generated/config.js";
import { getDrawerDefaultConfig, createDrawer } from "@agnos-ui/core-bootstrap/components/drawer";
const export_getDrawerDefaultConfig = getDrawerDefaultConfig;
const export_createDrawer = createDrawer;
const BackdropElement = ({ directives }) => /* @__PURE__ */ jsx("div", { ...useDirective(directives.backdropDirective) });
const DrawerElement = (slotContext) => /* @__PURE__ */ jsx("div", { ...useDirective(slotContext.directives.drawerDirective), children: /* @__PURE__ */ jsx("div", { ...useDirective(slotContext.directives.containerDirective), children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.structure, props: slotContext }) }) });
const DefaultDrawerSlotStructure = (slotContext) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("div", { className: "au-drawer-header", children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.header, props: slotContext }) }),
  /* @__PURE__ */ jsx("div", { className: "au-drawer-body", children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.children, props: slotContext }) }),
  slotContext.state.resizable && /* @__PURE__ */ jsx(Splitter, { ...slotContext })
] });
const Splitter = (slotContext) => /* @__PURE__ */ jsx("div", { ...useDirective(slotContext.directives.splitterDirective) });
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
  export_createDrawer as a,
  Drawer as b,
  export_getDrawerDefaultConfig as e
};
`;export{t as default};
