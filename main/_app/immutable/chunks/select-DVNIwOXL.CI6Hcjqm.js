const e=`import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { createSelect } from "@agnos-ui/react-headless/components/select";
import { useWidgetWithConfig } from "./generated/config.js";
import { Slot } from "@agnos-ui/react-headless/slot";
import { toSlotContextWidget } from "@agnos-ui/react-headless/types";
import { useDirectives, useDirective } from "@agnos-ui/react-headless/utils/directive";
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
function Rows({ slotContext }) {
  const { widget, state } = slotContext;
  const highlighted = state.highlighted;
  return /* @__PURE__ */ jsx(Fragment, { children: state.visibleItems.map((itemContext) => {
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
  }) });
}
const defaultConfig = {
  slotBadgeLabel: DefaultBadge,
  slotItem: DefaultItem
};
function Select(props) {
  const [state, widget] = useWidgetWithConfig(createSelect, props, "select", defaultConfig);
  const slotContext = { state, widget: toSlotContextWidget(widget) };
  const { id, ariaLabel, visibleItems, filterText, open, className, menuClassName, placement } = state;
  const menuId = \`\${id}-menu\`;
  const {
    directives: { floatingDirective, hasFocusDirective, referenceDirective, inputContainerDirective }
  } = widget;
  const refSetMenu = useDirectives([hasFocusDirective, floatingDirective]);
  return /* @__PURE__ */ jsxs("div", { className: \`au-select dropdown border border-1 p-1 mb-3 d-block \${className}\`, ...useDirective(referenceDirective), children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        ...useDirectives([hasFocusDirective, inputContainerDirective]),
        role: "combobox",
        className: "d-flex align-items-center flex-wrap",
        "aria-controls": menuId,
        "aria-haspopup": "listbox",
        "aria-expanded": open,
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
    open && visibleItems.length > 0 && /* @__PURE__ */ jsx(
      "ul",
      {
        ...refSetMenu,
        role: "listbox",
        id: menuId,
        className: \`dropdown-menu show \${menuClassName}\`,
        "data-popper-placement": placement,
        onMouseDown: preventDefault,
        children: /* @__PURE__ */ jsx(Rows, { slotContext })
      }
    )
  ] });
}
export {
  Select as S
};
`;export{e as default};
