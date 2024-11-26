const e=`import { jsx, jsxs } from "react/jsx-runtime";
import { Slot } from "@agnos-ui/react-headless/slot";
import { useDirective } from "@agnos-ui/react-headless/utils/directive";
import { useWidgetWithConfig } from "./generated/config.js";
import { getTreeDefaultConfig, createTree } from "@agnos-ui/core-bootstrap/components/tree";
import classNames from "classnames";
const export_getTreeDefaultConfig = getTreeDefaultConfig;
const export_createTree = createTree;
const ToggleButtonDisplay = ({ directive, item }) => {
  return /* @__PURE__ */ jsx("button", { ...useDirective(directive, { item }) });
};
const DefaultTreeSlotItemToggle = (slotContext) => {
  const { directives, item } = slotContext;
  return item.children.length > 0 ? /* @__PURE__ */ jsx(ToggleButtonDisplay, { directive: directives.itemToggleDirective, item }) : /* @__PURE__ */ jsx("span", { className: "au-tree-expand-icon-placeholder" });
};
const DefaultTreeSlotItemContent = (slotContext) => {
  const { state, item } = slotContext;
  return /* @__PURE__ */ jsxs("span", { className: "au-tree-item", children: [
    /* @__PURE__ */ jsx(Slot, { slotContent: state.itemToggle, props: { ...slotContext } }),
    item.label
  ] });
};
const DefaultTreeSlotItem = (slotContext) => {
  const { state, directives, item } = slotContext;
  return /* @__PURE__ */ jsxs("li", { ...useDirective(directives.itemAttributesDirective, { item }), children: [
    /* @__PURE__ */ jsx(Slot, { slotContent: state.itemContent, props: { ...slotContext, item } }),
    state.expandedMap.get(item) && /* @__PURE__ */ jsx("ul", { role: "group", children: item.children.map((child, index) => /* @__PURE__ */ jsx(Slot, { slotContent: state.item, props: { ...slotContext, item: child } }, child.label + child.level + index)) })
  ] });
};
const DefaultTreeSlotStructure = (slotContext) => {
  const { state } = slotContext;
  return /* @__PURE__ */ jsx("ul", { role: "tree", className: classNames("au-tree", state.className), ...useDirective(slotContext.directives.navigationDirective), children: state.normalizedNodes.map((node, index) => /* @__PURE__ */ jsx(Slot, { slotContent: state.item, props: { item: node, ...slotContext } }, node.label + node.level + index)) });
};
const defaultConfig = {
  structure: DefaultTreeSlotStructure,
  item: DefaultTreeSlotItem,
  itemContent: DefaultTreeSlotItemContent,
  itemToggle: DefaultTreeSlotItemToggle
};
function Tree(props) {
  const widgetContext = useWidgetWithConfig(export_createTree, props, "tree", { ...defaultConfig });
  return /* @__PURE__ */ jsx(Slot, { slotContent: widgetContext.state.structure, props: widgetContext });
}
export {
  DefaultTreeSlotItemToggle as D,
  Tree as T,
  DefaultTreeSlotItemContent as a,
  DefaultTreeSlotItem as b,
  DefaultTreeSlotStructure as c,
  export_createTree as d,
  export_getTreeDefaultConfig as e
};
`;export{e as default};
