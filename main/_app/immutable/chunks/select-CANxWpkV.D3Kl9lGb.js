const t=`import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { createSelect as createSelect$1, getSelectDefaultConfig as getSelectDefaultConfig$1 } from "@agnos-ui/core-bootstrap/components/select";
import { Slot } from "@agnos-ui/react-headless/slot";
import { toSlotContextWidget } from "@agnos-ui/react-headless/types";
import { useDirectives, classDirective, useDirective } from "@agnos-ui/react-headless/utils/directive";
import classNames from "classnames";
import { useWidgetWithConfig } from "./generated/config.js";
const createSelect = createSelect$1;
const getSelectDefaultConfig = getSelectDefaultConfig$1;
function DefaultBadge(slotContext) {
  return /* @__PURE__ */ jsx(Fragment, { children: "" + slotContext.itemContext.item });
}
function DefaultItem(slotContext) {
  return /* @__PURE__ */ jsx(Fragment, { children: "" + slotContext.itemContext.item });
}
function BadgeContainer({ itemContext, slotContext }) {
  return /* @__PURE__ */ jsx("div", { ...useDirective(slotContext.widget.directives.badgeAttributesDirective, itemContext), children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotBadgeLabel, props: { ...slotContext, itemContext } }) });
}
function Badges({ slotContext }) {
  const badges = [];
  for (const itemContext of slotContext.state.selectedContexts) {
    badges.push(/* @__PURE__ */ jsx(BadgeContainer, { itemContext, slotContext }, itemContext.id));
  }
  return badges.length ? /* @__PURE__ */ jsx(Fragment, { children: badges }) : null;
}
function SelectItem({ itemContext, slotContext }) {
  const classname = classNames("dropdown-item", "position-relative", { "text-bg-primary": itemContext === slotContext.state.highlighted });
  return /* @__PURE__ */ jsx("li", { className: classname, ...useDirective(slotContext.widget.directives.itemAttributesDirective, itemContext), children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotItem, props: { ...slotContext, itemContext } }) });
}
function Rows({ slotContext }) {
  const {
    directives: { hasFocusDirective, floatingDirective, menuAttributesDirective }
  } = slotContext.widget;
  return /* @__PURE__ */ jsx("ul", { ...useDirectives([classDirective, "dropdown-menu show"], hasFocusDirective, floatingDirective, menuAttributesDirective), children: slotContext.state.visibleItems.map((itemContext) => {
    return /* @__PURE__ */ jsx(SelectItem, { slotContext, itemContext }, itemContext.id);
  }) });
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
  return /* @__PURE__ */ jsxs("div", { ...useDirectives([classDirective, \`au-select dropdown border border-1 p-1 mb-3 d-block \${className}\`], referenceDirective), children: [
    /* @__PURE__ */ jsxs("div", { ...useDirectives([classDirective, "d-flex align-items-center flex-wrap gap-1"], hasFocusDirective, inputContainerDirective), children: [
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
    ] }),
    open && visibleItems.length > 0 && /* @__PURE__ */ jsx(Rows, { slotContext, menuId })
  ] });
}
export {
  Select as S,
  createSelect as c,
  getSelectDefaultConfig as g
};
`;export{t as default};
