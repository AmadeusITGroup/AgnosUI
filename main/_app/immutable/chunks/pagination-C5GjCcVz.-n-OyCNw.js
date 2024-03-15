const e=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const pagination = require("@agnos-ui/react-headless/components/pagination");
const config = require("@agnos-ui/react-headless/config");
const slot = require("@agnos-ui/react-headless/slot");
const types = require("@agnos-ui/react-headless/types");
const classNames = require("classnames");
const React = require("react");
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
  ({ disabled, active, ariaLabel, activeLabel, className, children, href, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx("li", { ref, "aria-current": active ? "page" : void 0, className: classNames("page-item", { active, disabled }), children: /* @__PURE__ */ jsxRuntime.jsxs(
      "a",
      {
        className: classNames("page-link", className),
        "aria-label": ariaLabel || void 0,
        ...props,
        href,
        tabIndex: disabled ? -1 : void 0,
        "aria-disabled": disabled || void 0,
        children: [
          children,
          active && activeLabel && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "visually-hidden", children: activeLabel })
        ]
      }
    ) });
  }
);
PageItem.displayName = "PageItem";
const NavButton = React__namespace.forwardRef(({ children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(PageItem, { ...props, ref, children: /* @__PURE__ */ jsxRuntime.jsx("span", { "aria-hidden": "true", children }) }));
NavButton.displayName = "NavButton";
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
            className: "au-page",
            disabled: state.disabled,
            active: state.pages[i] === state.page,
            onClick: (e) => widget.actions.select(state.pages[i], e.nativeEvent),
            href: state.pagesHrefs[i],
            ariaLabel: state.pagesLabel[i],
            activeLabel: state.activeLabel,
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
      /* @__PURE__ */ jsxRuntime.jsx(
        NavButton,
        {
          className: "au-first",
          ariaLabel: state.ariaFirstLabel,
          href: state.pagesHrefs[0],
          onClick: (e) => widget.actions.first(e.nativeEvent),
          disabled: state.previousDisabled,
          children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.slotFirst, props: slotContext })
        },
        "first"
      )
    );
  }
  if (state.directionLinks) {
    ItemsBefore.push(
      /* @__PURE__ */ jsxRuntime.jsx(
        NavButton,
        {
          className: "au-previous",
          ariaLabel: state.ariaPreviousLabel,
          href: state.directionsHrefs.previous,
          onClick: (e) => widget.actions.previous(e.nativeEvent),
          disabled: state.previousDisabled,
          children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.slotPrevious, props: slotContext })
        },
        "prev"
      )
    );
  }
  if (state.directionLinks) {
    ItemsAfter.push(
      /* @__PURE__ */ jsxRuntime.jsx(
        NavButton,
        {
          className: "au-next",
          ariaLabel: state.ariaNextLabel,
          href: state.directionsHrefs.next,
          onClick: (e) => widget.actions.next(e.nativeEvent),
          disabled: state.nextDisabled,
          children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.slotNext, props: slotContext })
        },
        "next"
      )
    );
  }
  if (state.boundaryLinks) {
    ItemsAfter.push(
      /* @__PURE__ */ jsxRuntime.jsx(
        NavButton,
        {
          className: "au-last",
          ariaLabel: state.ariaLastLabel,
          href: state.pagesHrefs.at(-1),
          onClick: (e) => widget.actions.last(e.nativeEvent),
          disabled: state.nextDisabled,
          children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.slotLast, props: slotContext })
        },
        "last"
      )
    );
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs("ul", { className: classNames("au-pagination", "pagination", state.size ? \`pagination-\${state.size}\` : "", state.className), children: [
      ItemsBefore,
      /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.slotPages, props: slotContext }),
      ItemsAfter
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { "aria-live": "polite", className: "visually-hidden", children: state.page && \`Current page is \${state.page}\` })
  ] });
}
function Pagination(props) {
  const [state, widget] = config.useWidgetWithConfig(pagination.createPagination, props, "pagination", defaultConfig);
  const slotContext = { state, widget: types.toSlotContextWidget(widget) };
  return /* @__PURE__ */ jsxRuntime.jsx("nav", { "aria-label": state.ariaLabel, children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.slotStructure, props: slotContext }) });
}
exports.DefaultPages = DefaultPages;
exports.DefaultStructure = DefaultStructure;
exports.NavButton = NavButton;
exports.PageItem = PageItem;
exports.Pagination = Pagination;
`;export{e as default};
