const e=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const select = require("@agnos-ui/core-bootstrap/components/select");
const slot = require("@agnos-ui/react-headless/slot");
const types = require("@agnos-ui/react-headless/types");
const directive = require("@agnos-ui/react-headless/utils/directive");
const classNames = require("classnames");
const generated_config = require("./generated/config.cjs");
const createSelect = select.createSelect;
function DefaultBadge(slotContext) {
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: "" + slotContext.itemContext.item });
}
function DefaultItem(slotContext) {
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: "" + slotContext.itemContext.item });
}
function BadgeContainer({ itemContext, slotContext }) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirective(slotContext.widget.directives.badgeAttributesDirective, itemContext), children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.slotBadgeLabel, props: { ...slotContext, itemContext } }) });
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
  return /* @__PURE__ */ jsxRuntime.jsx("li", { className: classname, ...directive.useDirective(slotContext.widget.directives.itemAttributesDirective, itemContext), children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.slotItem, props: { ...slotContext, itemContext } }) });
}
function Rows({ slotContext }) {
  const {
    directives: { hasFocusDirective, floatingDirective, menuAttributesDirective }
  } = slotContext.widget;
  return /* @__PURE__ */ jsxRuntime.jsx("ul", { ...directive.useDirectives([directive.classDirective, "dropdown-menu show"], hasFocusDirective, floatingDirective, menuAttributesDirective), children: slotContext.state.visibleItems.map((itemContext) => {
    return /* @__PURE__ */ jsxRuntime.jsx(SelectItem, { slotContext, itemContext }, itemContext.id);
  }) });
}
const defaultConfig = {
  slotBadgeLabel: DefaultBadge,
  slotItem: DefaultItem
};
function Select(props) {
  const [state, widget] = generated_config.useWidgetWithConfig(createSelect, props, "select", defaultConfig);
  const slotContext = { state, widget: types.toSlotContextWidget(widget) };
  const { id, ariaLabel, visibleItems, filterText, open, className } = state;
  const menuId = \`\${id}-menu\`;
  const {
    directives: { hasFocusDirective, referenceDirective, inputContainerDirective }
  } = widget;
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { ...directive.useDirectives([directive.classDirective, \`au-select dropdown border border-1 p-1 mb-3 d-block \${className}\`], referenceDirective), children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { ...directive.useDirectives([directive.classDirective, "d-flex align-items-center flex-wrap gap-1"], hasFocusDirective, inputContainerDirective), children: [
      /* @__PURE__ */ jsxRuntime.jsx(Badges, { slotContext }),
      /* @__PURE__ */ jsxRuntime.jsx(
        "input",
        {
          id,
          "aria-label": ariaLabel,
          className: "au-select-input flex-grow-1 border-0",
          type: "text",
          value: filterText,
          "aria-autocomplete": "list",
          autoCorrect: "off",
          autoCapitalize: "none",
          autoComplete: "off",
          onInput: widget.actions.onInput,
          onKeyDown: (e) => widget.actions.onInputKeydown(e.nativeEvent)
        }
      )
    ] }),
    open && visibleItems.length > 0 && /* @__PURE__ */ jsxRuntime.jsx(Rows, { slotContext, menuId })
  ] });
}
exports.Select = Select;
exports.createSelect = createSelect;
`;export{e as default};
