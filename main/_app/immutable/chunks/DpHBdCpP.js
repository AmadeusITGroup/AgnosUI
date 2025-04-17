const e=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const slot = require("@agnos-ui/react-headless/slot");
const directive = require("@agnos-ui/react-headless/utils/directive");
const generated_config = require("./generated/config.cjs");
const tree = require("@agnos-ui/core-bootstrap/components/tree");
const clsx = require("clsx");
const export_getTreeDefaultConfig = tree.getTreeDefaultConfig;
const export_createTree = tree.createTree;
const ToggleButtonDisplay = ({ directive: directive$1, item }) => {
  return /* @__PURE__ */ jsxRuntime.jsx("button", { ...directive.useDirective(directive$1, { item }), children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "au-tree-expand-icon-svg" }) });
};
const DefaultTreeSlotItemToggle = (slotContext) => {
  const { directives, item } = slotContext;
  return item.children.length > 0 ? /* @__PURE__ */ jsxRuntime.jsx(ToggleButtonDisplay, { directive: directives.itemToggleDirective, item }) : /* @__PURE__ */ jsxRuntime.jsx("span", { className: "au-tree-expand-icon-placeholder" });
};
const DefaultTreeSlotItemContent = (slotContext) => {
  const { state, item } = slotContext;
  return /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "au-tree-item", children: [
    /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.itemToggle, props: { ...slotContext } }),
    item.label
  ] });
};
const DefaultTreeSlotItem = (slotContext) => {
  const { state, directives, item } = slotContext;
  return /* @__PURE__ */ jsxRuntime.jsxs("li", { ...directive.useDirective(directives.itemAttributesDirective, { item }), children: [
    /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.itemContent, props: { ...slotContext, item } }),
    state.expandedMap.get(item) && /* @__PURE__ */ jsxRuntime.jsx("ul", { role: "group", children: item.children.map((child, index) => /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.item, props: { ...slotContext, item: child } }, child.label + child.level + index)) })
  ] });
};
const DefaultTreeSlotStructure = (slotContext) => {
  const { state } = slotContext;
  return /* @__PURE__ */ jsxRuntime.jsx("ul", { role: "tree", className: clsx("au-tree", state.className), ...directive.useDirective(slotContext.directives.navigationDirective), children: state.normalizedNodes.map((node, index) => /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.item, props: { item: node, ...slotContext } }, node.label + node.level + index)) });
};
const defaultConfig = {
  structure: DefaultTreeSlotStructure,
  item: DefaultTreeSlotItem,
  itemContent: DefaultTreeSlotItemContent,
  itemToggle: DefaultTreeSlotItemToggle
};
function Tree(props) {
  const widgetContext = generated_config.useWidget(export_createTree, props, { ...defaultConfig });
  return /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: widgetContext.state.structure, props: widgetContext });
}
exports.DefaultTreeSlotItem = DefaultTreeSlotItem;
exports.DefaultTreeSlotItemContent = DefaultTreeSlotItemContent;
exports.DefaultTreeSlotItemToggle = DefaultTreeSlotItemToggle;
exports.DefaultTreeSlotStructure = DefaultTreeSlotStructure;
exports.Tree = Tree;
exports.export_createTree = export_createTree;
exports.export_getTreeDefaultConfig = export_getTreeDefaultConfig;
`;export{e as default};
