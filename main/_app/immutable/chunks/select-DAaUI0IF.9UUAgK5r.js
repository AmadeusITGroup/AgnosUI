const e=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const slot = require("@agnos-ui/react-headless/slot");
const directive = require("@agnos-ui/react-headless/utils/directive");
const classNames = require("classnames");
const generated_config = require("./generated/config.cjs");
const select = require("@agnos-ui/core-bootstrap/components/select");
const export_getSelectDefaultConfig = select.getSelectDefaultConfig;
const export_createSelect = select.createSelect;
function DefaultBadge(slotContext) {
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: "" + slotContext.itemContext.item });
}
function DefaultItem(slotContext) {
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: "" + slotContext.itemContext.item });
}
function BadgeContainer({ itemContext, slotContext }) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirective(slotContext.directives.badgeAttributesDirective, itemContext), children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.badgeLabel, props: { ...slotContext, itemContext } }) });
}
function Badges({ slotContext }) {
  const badges = [];
  for (const itemContext of slotContext.state.selectedContexts) {
    badges.push(/* @__PURE__ */ jsxRuntime.jsx(BadgeContainer, { itemContext, slotContext }, itemContext.id));
  }
  return badges.length ? /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: badges }) : null;
}
function SelectItem({ itemContext, slotContext }) {
  const classname = classNames("dropdown-item", "position-relative", { "text-bg-primary": itemContext === slotContext.state.highlighted });
  return /* @__PURE__ */ jsxRuntime.jsx("li", { className: classname, ...directive.useDirective(slotContext.directives.itemAttributesDirective, itemContext), children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.itemLabel, props: { ...slotContext, itemContext } }) });
}
function Rows({ slotContext }) {
  const {
    directives: { hasFocusDirective, floatingDirective, menuAttributesDirective }
  } = slotContext;
  return /* @__PURE__ */ jsxRuntime.jsx("ul", { ...directive.useDirectives([directive.classDirective, "dropdown-menu show"], hasFocusDirective, floatingDirective, menuAttributesDirective), children: slotContext.state.visibleItems.map((itemContext) => {
    return /* @__PURE__ */ jsxRuntime.jsx(SelectItem, { slotContext, itemContext }, itemContext.id);
  }) });
}
const defaultConfig = {
  badgeLabel: DefaultBadge,
  itemLabel: DefaultItem
};
function Select(props) {
  const widgetContext = generated_config.useWidgetWithConfig(export_createSelect, props, "select", defaultConfig);
  const {
    state: { id, visibleItems, filterText, open, className },
    directives: { hasFocusDirective, referenceDirective, inputContainerDirective, inputDirective }
  } = widgetContext;
  const menuId = \`\${id}-menu\`;
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { ...directive.useDirectives([directive.classDirective, \`au-select dropdown border border-1 p-1 mb-3 d-block \${className}\`], referenceDirective), children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { ...directive.useDirectives([directive.classDirective, "d-flex align-items-center flex-wrap gap-1"], hasFocusDirective, inputContainerDirective), children: [
      /* @__PURE__ */ jsxRuntime.jsx(Badges, { slotContext: widgetContext }),
      /* @__PURE__ */ jsxRuntime.jsx("input", { value: filterText, ...directive.useDirective(inputDirective), onChange: () => {
      } })
    ] }),
    open && visibleItems.length > 0 && /* @__PURE__ */ jsxRuntime.jsx(Rows, { slotContext: widgetContext, menuId })
  ] });
}
exports.Select = Select;
exports.export_createSelect = export_createSelect;
exports.export_getSelectDefaultConfig = export_getSelectDefaultConfig;
`;export{e as default};
