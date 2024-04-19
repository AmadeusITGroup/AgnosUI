const e=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const generated_config = require("./generated/config.cjs");
const slot = require("@agnos-ui/react-headless/slot");
const types = require("@agnos-ui/react-headless/types");
const directive = require("@agnos-ui/react-headless/utils/directive");
const select = require("@agnos-ui/core-bootstrap/components/select");
const createSelect = select.createSelect;
function preventDefault(e) {
  e.preventDefault();
}
function DefaultBadge(slotContext) {
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: "" + slotContext.itemContext.item });
}
function DefaultItem(slotContext) {
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: "" + slotContext.itemContext.item });
}
function BadgeContainer({ itemContext, slotContext }) {
  const state = slotContext.state;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      tabIndex: -1,
      className: \`au-select-badge me-1 \${state.badgeClassName}\`,
      onKeyDown: (e) => slotContext.widget.actions.onBadgeKeydown(e.nativeEvent, itemContext.item),
      children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.slotBadgeLabel, props: { ...slotContext, itemContext } })
    },
    itemContext.id
  );
}
function Badges({ slotContext }) {
  const badges = [];
  for (const itemContext of slotContext.state.selectedContexts) {
    badges.push(/* @__PURE__ */ jsxRuntime.jsx(BadgeContainer, { itemContext, slotContext }, itemContext.id));
  }
  return badges.length ? /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: badges }) : null;
}
function Rows({ slotContext, menuId }) {
  const { widget, state } = slotContext;
  const { placement, menuClassName, highlighted } = state;
  const { hasFocusDirective, floatingDirective } = widget.directives;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "ul",
    {
      role: "listbox",
      id: menuId,
      "data-popper-placement": placement,
      onMouseDown: preventDefault,
      ...directive.useDirectives([directive.useClassDirective(\`dropdown-menu show \${menuClassName}\`), hasFocusDirective, floatingDirective]),
      children: state.visibleItems.map((itemContext) => {
        const { id } = itemContext;
        const classname = ["au-select-item dropdown-item position-relative"];
        if (itemContext === highlighted) {
          classname.push("text-bg-primary");
        }
        if (itemContext.selected) {
          classname.push("selected");
        }
        return /* @__PURE__ */ jsxRuntime.jsx(
          "li",
          {
            role: "option",
            "aria-selected": itemContext.selected,
            className: classname.join(" "),
            onClick: () => widget.api.toggleItem(itemContext.item),
            style: { cursor: "pointer" },
            children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.slotItem, props: { ...slotContext, itemContext } })
          },
          id
        );
      })
    }
  );
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
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { ...directive.useDirectives([directive.useClassDirective(\`au-select dropdown border border-1 p-1 mb-3 d-block \${className}\`), referenceDirective]), children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        role: "combobox",
        "aria-controls": menuId,
        "aria-haspopup": "listbox",
        "aria-expanded": open,
        ...directive.useDirectives([directive.useClassDirective("d-flex align-items-center flex-wrap"), hasFocusDirective, inputContainerDirective]),
        children: [
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
        ]
      }
    ),
    open && visibleItems.length > 0 && /* @__PURE__ */ jsxRuntime.jsx(Rows, { slotContext, menuId })
  ] });
}
exports.Select = Select;
exports.createSelect = createSelect;
`;export{e as default};
