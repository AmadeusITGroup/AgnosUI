const e=`import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Slot } from "@agnos-ui/react-headless/slot";
import { useDirective, useDirectives, classDirective } from "@agnos-ui/react-headless/utils/directive";
import clsx from "clsx";
import { useWidget } from "./generated/config.js";
import { createSelect, getSelectDefaultConfig } from "@agnos-ui/core-bootstrap/components/select";
import { useImperativeHandle } from "react";
const export_getSelectDefaultConfig = getSelectDefaultConfig;
const export_createSelect = createSelect;
function DefaultBadge(slotContext) {
  return /* @__PURE__ */ jsx(Fragment, { children: "" + slotContext.itemContext.item });
}
function DefaultItem(slotContext) {
  return /* @__PURE__ */ jsx(Fragment, { children: "" + slotContext.itemContext.item });
}
function BadgeContainer({ itemContext, slotContext }) {
  return /* @__PURE__ */ jsx("div", { ...useDirective(slotContext.directives.badgeAttributesDirective, itemContext), children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.badgeLabel, props: { ...slotContext, itemContext } }) });
}
function Badges({ slotContext }) {
  const badges = [];
  for (const itemContext of slotContext.state.selectedContexts) {
    badges.push(/* @__PURE__ */ jsx(BadgeContainer, { itemContext, slotContext }, itemContext.id));
  }
  return badges.length ? /* @__PURE__ */ jsx(Fragment, { children: badges }) : null;
}
function SelectItem({ itemContext, slotContext }) {
  const classname = clsx("dropdown-item", "position-relative", { "text-bg-primary": itemContext === slotContext.state.highlighted });
  return /* @__PURE__ */ jsx("li", { className: classname, ...useDirective(slotContext.directives.itemAttributesDirective, itemContext), children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.itemLabel, props: { ...slotContext, itemContext } }) });
}
function Rows({ slotContext }) {
  const {
    directives: { hasFocusDirective, floatingDirective, menuAttributesDirective }
  } = slotContext;
  return /* @__PURE__ */ jsx("ul", { ...useDirectives([classDirective, "dropdown-menu show"], hasFocusDirective, floatingDirective, menuAttributesDirective), children: slotContext.state.visibleItems.map((itemContext) => {
    return /* @__PURE__ */ jsx(SelectItem, { slotContext, itemContext }, itemContext.id);
  }) });
}
function Select({ ref, ...props }) {
  const widgetContext = useWidget(export_createSelect, props, {
    badgeLabel: DefaultBadge,
    itemLabel: DefaultItem
  });
  useImperativeHandle(ref, () => widgetContext.api, [widgetContext.api]);
  const {
    state: { id, visibleItems, filterText, open, className },
    directives: { hasFocusDirective, referenceDirective, inputContainerDirective, inputDirective }
  } = widgetContext;
  const menuId = \`\${id}-menu\`;
  return /* @__PURE__ */ jsxs("div", { ...useDirectives([classDirective, \`au-select dropdown border border-1 p-1 mb-3 d-block \${className}\`], referenceDirective), children: [
    /* @__PURE__ */ jsxs("div", { ...useDirectives([classDirective, "d-flex align-items-center flex-wrap gap-1"], hasFocusDirective, inputContainerDirective), children: [
      /* @__PURE__ */ jsx(Badges, { slotContext: widgetContext }),
      /* @__PURE__ */ jsx("input", { type: "text", value: filterText, ...useDirective(inputDirective), onChange: () => {
      } })
    ] }),
    open && visibleItems.length > 0 && /* @__PURE__ */ jsx(Rows, { slotContext: widgetContext, menuId })
  ] });
}
export {
  Select as S,
  export_getSelectDefaultConfig as a,
  export_createSelect as e
};
`;export{e as default};
