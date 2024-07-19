const e=`import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Slot } from "@agnos-ui/react-headless/slot";
import { toSlotContextWidget } from "@agnos-ui/react-headless/types";
import classNames from "classnames";
import { useWidgetWithConfig } from "./generated/config.js";
import * as React from "react";
import { useDirectives, classDirective } from "@agnos-ui/react-headless/utils/directive";
import { getPaginationDefaultConfig, createPagination } from "@agnos-ui/core-bootstrap/components/pagination";
const PageItem = React.forwardRef(
  ({ disabled, active, activeLabel, className, children, directive, page }, ref) => {
    return /* @__PURE__ */ jsx("li", { ref, className: classNames("page-item", { active, disabled }), children: /* @__PURE__ */ jsxs("a", { ...useDirectives([directive, { page }], [classDirective, classNames("page-link", className)]), children: [
      children,
      active && activeLabel && /* @__PURE__ */ jsx("span", { className: "visually-hidden", children: activeLabel })
    ] }) });
  }
);
PageItem.displayName = "PageItem";
const NavButton = React.forwardRef(({ disabled, className, children, directive }, ref) => {
  return /* @__PURE__ */ jsx("li", { ref, className: classNames("page-item", { disabled }), children: /* @__PURE__ */ jsx("a", { ...useDirectives(directive, [classDirective, classNames("page-link", className)]), children: /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children }) }) });
});
NavButton.displayName = "NavButton";
const export_getPaginationDefaultConfig = getPaginationDefaultConfig;
const export_createPagination = createPagination;
function DefaultPages(slotContext) {
  const { widget, state } = slotContext;
  const jsxPages = [];
  for (let i = 0; i < state.pages.length; i++) {
    if (state.pages[i] === -1) {
      jsxPages.push(
        /* @__PURE__ */ jsxs("li", { className: "page-item disabled", children: [
          /* @__PURE__ */ jsx("div", { className: "page-link au-ellipsis", "aria-hidden": "true", children: /* @__PURE__ */ jsx(Slot, { slotContent: state.ellipsisLabel, props: slotContext }) }),
          /* @__PURE__ */ jsx("span", { className: "visually-hidden", children: state.ariaEllipsisLabel })
        ] }, "Ellipsis" + i)
      );
    } else {
      jsxPages.push(
        /* @__PURE__ */ jsx(
          PageItem,
          {
            disabled: state.disabled,
            active: state.pages[i] === state.page,
            activeLabel: state.activeLabel,
            directive: widget.directives["pageLink"],
            page: state.pages[i],
            children: /* @__PURE__ */ jsx(Slot, { slotContent: state.numberLabel, props: { ...slotContext, displayedPage: state.pages[i] } })
          },
          state.pages[i]
        )
      );
    }
  }
  return jsxPages.length ? /* @__PURE__ */ jsx(Fragment, { children: jsxPages }) : null;
}
const defaultConfig = {
  pagesDisplay: DefaultPages,
  structure: DefaultStructure
};
function DefaultStructure(slotContext) {
  const { widget, state } = slotContext;
  const ItemsBefore = [];
  const ItemsAfter = [];
  if (state.boundaryLinks) {
    ItemsBefore.push(
      /* @__PURE__ */ jsx(NavButton, { disabled: state.previousDisabled, directive: widget.directives["pageFirst"], children: /* @__PURE__ */ jsx(Slot, { slotContent: state.firstPageLabel, props: slotContext }) }, "first")
    );
  }
  if (state.directionLinks) {
    ItemsBefore.push(
      /* @__PURE__ */ jsx(NavButton, { disabled: state.previousDisabled, directive: widget.directives["pagePrev"], children: /* @__PURE__ */ jsx(Slot, { slotContent: state.previousPageLabel, props: slotContext }) }, "prev")
    );
  }
  if (state.directionLinks) {
    ItemsAfter.push(
      /* @__PURE__ */ jsx(NavButton, { disabled: state.nextDisabled, directive: widget.directives["pageNext"], children: /* @__PURE__ */ jsx(Slot, { slotContent: state.nextPageLabel, props: slotContext }) }, "next")
    );
  }
  if (state.boundaryLinks) {
    ItemsAfter.push(
      /* @__PURE__ */ jsx(NavButton, { disabled: state.nextDisabled, directive: widget.directives["pageLast"], children: /* @__PURE__ */ jsx(Slot, { slotContent: state.lastPageLabel, props: slotContext }) }, "last")
    );
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("ul", { className: classNames("au-pagination", "pagination", { [\`pagination-\${state.size}\`]: !!state.size }, state.className), children: [
      ItemsBefore,
      /* @__PURE__ */ jsx(Slot, { slotContent: state.pagesDisplay, props: slotContext }),
      ItemsAfter
    ] }),
    /* @__PURE__ */ jsx("div", { "aria-live": "polite", className: "visually-hidden", children: \`\${state.ariaLiveLabelText}\` })
  ] });
}
function Pagination(props) {
  const [state, widget] = useWidgetWithConfig(export_createPagination, props, "pagination", defaultConfig);
  const slotContext = { state, widget: toSlotContextWidget(widget) };
  return /* @__PURE__ */ jsx("nav", { "aria-label": state.ariaLabel, children: /* @__PURE__ */ jsx(Slot, { slotContent: state.structure, props: slotContext }) });
}
export {
  DefaultPages as D,
  NavButton as N,
  PageItem as P,
  DefaultStructure as a,
  Pagination as b,
  export_createPagination as c,
  export_getPaginationDefaultConfig as e
};
`;export{e as default};
