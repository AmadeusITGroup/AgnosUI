const e=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const generated_config = require("./generated/config.cjs");
const slot = require("@agnos-ui/react-headless/slot");
const types = require("@agnos-ui/react-headless/types");
const classNames = require("classnames");
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
const createPagination = pagination.createPagination;
const getPaginationDefaultConfig = pagination.getPaginationDefaultConfig;
function DefaultPages(slotContext) {
  const { widget, state } = slotContext;
  const jsxPages = [];
  for (let i = 0; i < state.pages.length; i++) {
    if (state.pages[i] === -1) {
      jsxPages.push(
        /* @__PURE__ */ jsxRuntime.jsxs("li", { className: "page-item disabled", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "page-link au-ellipsis", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.slotEllipsis, props: slotContext }) }),
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
            directive: widget.directives["pageLink"],
            page: state.pages[i],
            children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.slotNumberLabel, props: { ...slotContext, displayedPage: state.pages[i] } })
          },
          state.pages[i]
        )
      );
    }
  }
  return jsxPages.length ? /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxPages }) : null;
}
const defaultConfig = {
  slotPages: DefaultPages,
  slotStructure: DefaultStructure
};
function DefaultStructure(slotContext) {
  const { widget, state } = slotContext;
  const ItemsBefore = [];
  const ItemsAfter = [];
  if (state.boundaryLinks) {
    ItemsBefore.push(
      /* @__PURE__ */ jsxRuntime.jsx(NavButton, { disabled: state.previousDisabled, directive: widget.directives["pageFirst"], children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.slotFirst, props: slotContext }) }, "first")
    );
  }
  if (state.directionLinks) {
    ItemsBefore.push(
      /* @__PURE__ */ jsxRuntime.jsx(NavButton, { disabled: state.previousDisabled, directive: widget.directives["pagePrev"], children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.slotPrevious, props: slotContext }) }, "prev")
    );
  }
  if (state.directionLinks) {
    ItemsAfter.push(
      /* @__PURE__ */ jsxRuntime.jsx(NavButton, { disabled: state.nextDisabled, directive: widget.directives["pageNext"], children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.slotNext, props: slotContext }) }, "next")
    );
  }
  if (state.boundaryLinks) {
    ItemsAfter.push(
      /* @__PURE__ */ jsxRuntime.jsx(NavButton, { disabled: state.nextDisabled, directive: widget.directives["pageLast"], children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.slotLast, props: slotContext }) }, "last")
    );
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs("ul", { className: classNames("au-pagination", "pagination", { [\`pagination-\${state.size}\`]: !!state.size }, state.className), children: [
      ItemsBefore,
      /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.slotPages, props: slotContext }),
      ItemsAfter
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { "aria-live": "polite", className: "visually-hidden", children: \`\${state.ariaLiveLabelText}\` })
  ] });
}
function Pagination(props) {
  const [state, widget] = generated_config.useWidgetWithConfig(createPagination, props, "pagination", defaultConfig);
  const slotContext = { state, widget: types.toSlotContextWidget(widget) };
  return /* @__PURE__ */ jsxRuntime.jsx("nav", { "aria-label": state.ariaLabel, children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.slotStructure, props: slotContext }) });
}
exports.DefaultPages = DefaultPages;
exports.DefaultStructure = DefaultStructure;
exports.NavButton = NavButton;
exports.PageItem = PageItem;
exports.Pagination = Pagination;
exports.createPagination = createPagination;
exports.getPaginationDefaultConfig = getPaginationDefaultConfig;
`;export{e as default};
