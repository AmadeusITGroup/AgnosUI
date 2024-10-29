const e=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const slot = require("@agnos-ui/react-headless/slot");
const classNames = require("classnames");
const generated_config = require("./generated/config.cjs");
const React = require("react");
const directive = require("@agnos-ui/react-headless/utils/directive");
const pagination = require("@agnos-ui/core-bootstrap/components/pagination");
function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const React__namespace = /* @__PURE__ */ _interopNamespaceDefault(React);
const PageItem = React__namespace.forwardRef(
  ({ disabled, active, activeLabel, className, children, directive: directive$1, page }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx("li", { ref, className: classNames("page-item", { active, disabled }), children: /* @__PURE__ */ jsxRuntime.jsxs("a", { ...directive.useDirectives([directive$1, { page }], [directive.classDirective, classNames("page-link", className)]), children: [
      children,
      active && activeLabel && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "visually-hidden", children: activeLabel })
    ] }) });
  }
);
PageItem.displayName = "PageItem";
const NavButton = React__namespace.forwardRef(({ disabled, className, children, directive: directive$1 }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsx("li", { ref, className: classNames("page-item", { disabled }), children: /* @__PURE__ */ jsxRuntime.jsx("a", { ...directive.useDirectives(directive$1, [directive.classDirective, classNames("page-link", className)]), children: /* @__PURE__ */ jsxRuntime.jsx("span", { "aria-hidden": "true", children }) }) });
});
NavButton.displayName = "NavButton";
const export_getPaginationDefaultConfig = pagination.getPaginationDefaultConfig;
const export_createPagination = pagination.createPagination;
const PaginationDefaultSlotPages = (slotContext) => {
  const { state, directives } = slotContext;
  const jsxPages = [];
  for (let i = 0; i < state.pages.length; i++) {
    if (state.pages[i] === -1) {
      jsxPages.push(
        /* @__PURE__ */ jsxRuntime.jsxs("li", { className: "page-item disabled", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "page-link au-ellipsis", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.ellipsisLabel, props: slotContext }) }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "visually-hidden", children: state.ariaEllipsisLabel })
        ] }, "Ellipsis" + i)
      );
    } else {
      jsxPages.push(
        /* @__PURE__ */ jsxRuntime.jsx(
          PageItem,
          {
            disabled: state.disabled,
            active: state.pages[i] === state.page,
            activeLabel: state.activeLabel,
            directive: directives["pageLink"],
            page: state.pages[i],
            children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.numberLabel, props: { ...slotContext, displayedPage: state.pages[i] } })
          },
          state.pages[i]
        )
      );
    }
  }
  return jsxPages.length ? /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxPages }) : null;
};
const PaginationDefaultSlotStructure = (slotContext) => {
  const { state, directives } = slotContext;
  const ItemsBefore = [];
  const ItemsAfter = [];
  if (state.boundaryLinks) {
    ItemsBefore.push(
      /* @__PURE__ */ jsxRuntime.jsx(NavButton, { disabled: state.previousDisabled, directive: directives.pageFirst, children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.firstPageLabel, props: slotContext }) }, "first")
    );
  }
  if (state.directionLinks) {
    ItemsBefore.push(
      /* @__PURE__ */ jsxRuntime.jsx(NavButton, { disabled: state.previousDisabled, directive: directives.pagePrev, children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.previousPageLabel, props: slotContext }) }, "prev")
    );
  }
  if (state.directionLinks) {
    ItemsAfter.push(
      /* @__PURE__ */ jsxRuntime.jsx(NavButton, { disabled: state.nextDisabled, directive: directives.pageNext, children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.nextPageLabel, props: slotContext }) }, "next")
    );
  }
  if (state.boundaryLinks) {
    ItemsAfter.push(
      /* @__PURE__ */ jsxRuntime.jsx(NavButton, { disabled: state.nextDisabled, directive: directives["pageLast"], children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.lastPageLabel, props: slotContext }) }, "last")
    );
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs("ul", { className: classNames("au-pagination", "pagination", { [\`pagination-\${state.size}\`]: !!state.size }, state.className), children: [
      ItemsBefore,
      /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.pagesDisplay, props: slotContext }),
      ItemsAfter
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { "aria-live": "polite", className: "visually-hidden", children: \`\${state.ariaLiveLabelText}\` })
  ] });
};
function Pagination(props) {
  const widgetContext = generated_config.useWidgetWithConfig(export_createPagination, props, "pagination", {
    pagesDisplay: PaginationDefaultSlotPages,
    structure: PaginationDefaultSlotStructure
  });
  return /* @__PURE__ */ jsxRuntime.jsx("nav", { "aria-label": widgetContext.state.ariaLabel, children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: widgetContext.state.structure, props: widgetContext }) });
}
exports.NavButton = NavButton;
exports.PageItem = PageItem;
exports.Pagination = Pagination;
exports.PaginationDefaultSlotPages = PaginationDefaultSlotPages;
exports.PaginationDefaultSlotStructure = PaginationDefaultSlotStructure;
exports.export_createPagination = export_createPagination;
exports.export_getPaginationDefaultConfig = export_getPaginationDefaultConfig;
`;export{e as default};
