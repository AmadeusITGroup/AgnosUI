const e=`import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useWidgetWithConfig } from "./generated/config.js";
import { Slot } from "@agnos-ui/react-headless/slot";
import { toSlotContextWidget } from "@agnos-ui/react-headless/types";
import { useDirectives, useClassDirective } from "@agnos-ui/react-headless/utils/directive";
import { createSelect as createSelect$1 } from "@agnos-ui/core-bootstrap/components/select";
const createSelect = createSelect$1;
function preventDefault(e) {
  e.preventDefault();
}
function DefaultBadge(slotContext) {
  return /* @__PURE__ */ jsx(Fragment, { children: "" + slotContext.itemContext.item });
}
function DefaultItem(slotContext) {
  return /* @__PURE__ */ jsx(Fragment, { children: "" + slotContext.itemContext.item });
}
function BadgeContainer({ itemContext, slotContext }) {
  const state = slotContext.state;
  return /* @__PURE__ */ jsx(
    "div",
    {
      tabIndex: -1,
      className: \`au-select-badge me-1 \${state.badgeClassName}\`,
      onKeyDown: (e) => slotContext.widget.actions.onBadgeKeydown(e.nativeEvent, itemContext.item),
      children: /* @__PURE__ */ jsx(Slot, { slotContent: state.slotBadgeLabel, props: { ...slotContext, itemContext } })
    },
    itemContext.id
  );
}
function Badges({ slotContext }) {
  const badges = [];
  for (const itemContext of slotContext.state.selectedContexts) {
    badges.push(/* @__PURE__ */ jsx(BadgeContainer, { itemContext, slotContext }, itemContext.id));
  }
  return badges.length ? /* @__PURE__ */ jsx(Fragment, { children: badges }) : null;
}
function Rows({ slotContext, menuId }) {
  const { widget, state } = slotContext;
  const { placement, menuClassName, highlighted } = state;
  const { hasFocusDirective, floatingDirective } = widget.directives;
  return /* @__PURE__ */ jsx(
    "ul",
    {
      role: "listbox",
      id: menuId,
      "data-popper-placement": placement,
      onMouseDown: preventDefault,
      ...useDirectives([useClassDirective(\`dropdown-menu show \${menuClassName}\`), hasFocusDirective, floatingDirective]),
      children: state.visibleItems.map((itemContext) => {
        const { id } = itemContext;
        const classname = ["au-select-item dropdown-item position-relative"];
        if (itemContext === highlighted) {
          classname.push("text-bg-primary");
        }
        if (itemContext.selected) {
          classname.push("selected");
        }
        return /* @__PURE__ */ jsx(
          "li",
          {
            role: "option",
            "aria-selected": itemContext.selected,
            className: classname.join(" "),
            onClick: () => widget.api.toggleItem(itemContext.item),
            style: { cursor: "pointer" },
            children: /* @__PURE__ */ jsx(Slot, { slotContent: state.slotItem, props: { ...slotContext, itemContext } })
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
  const [state, widget] = useWidgetWithConfig(createSelect, props, "select", defaultConfig);
  const slotContext = { state, widget: toSlotContextWidget(widget) };
  const { id, ariaLabel, visibleItems, filterText, open, className } = state;
  const menuId = \`\${id}-menu\`;
  const {
    directives: { hasFocusDirective, referenceDirective, inputContainerDirective }
  } = widget;
  return /* @__PURE__ */ jsxs("div", { ...useDirectives([useClassDirective(\`au-select dropdown border border-1 p-1 mb-3 d-block \${className}\`), referenceDirective]), children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        role: "combobox",
        "aria-controls": menuId,
        "aria-haspopup": "listbox",
        "aria-expanded": open,
        ...useDirectives([useClassDirective("d-flex align-items-center flex-wrap"), hasFocusDirective, inputContainerDirective]),
        children: [
          /* @__PURE__ */ jsx(Badges, { slotContext }),
          /* @__PURE__ */ jsx(
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
    open && visibleItems.length > 0 && /* @__PURE__ */ jsx(Rows, { slotContext, menuId })
  ] });
}
export {
  Select as S,
  createSelect as c
};
`;export{e as default};
