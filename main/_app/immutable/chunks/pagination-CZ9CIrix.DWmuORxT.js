const e=`import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { createPagination } from "@agnos-ui/react-headless/components/pagination";
import { useWidgetWithConfig } from "./generated/config.js";
import { Slot } from "@agnos-ui/react-headless/slot";
import { toSlotContextWidget } from "@agnos-ui/react-headless/types";
import classNames from "classnames";
import * as React from "react";
const PageItem = React.forwardRef(
  ({ disabled, active, ariaLabel, activeLabel, className, children, href, ...props }, ref) => {
    return /* @__PURE__ */ jsx("li", { ref, "aria-current": active ? "page" : void 0, className: classNames("page-item", { active, disabled }), children: /* @__PURE__ */ jsxs(
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
          active && activeLabel && /* @__PURE__ */ jsx("span", { className: "visually-hidden", children: activeLabel })
        ]
      }
    ) });
  }
);
PageItem.displayName = "PageItem";
const NavButton = React.forwardRef(({ children, ...props }, ref) => /* @__PURE__ */ jsx(PageItem, { ...props, ref, children: /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children }) }));
NavButton.displayName = "NavButton";
function DefaultPages(slotContext) {
  const { widget, state } = slotContext;
  const jsxPages = [];
  for (let i = 0; i < state.pages.length; i++) {
    if (state.pages[i] === -1) {
      jsxPages.push(
        /* @__PURE__ */ jsxs("li", { className: "page-item disabled", children: [
          /* @__PURE__ */ jsx("div", { className: "page-link au-ellipsis", "aria-hidden": "true", children: /* @__PURE__ */ jsx(Slot, { slotContent: state.slotEllipsis, props: slotContext }) }),
          /* @__PURE__ */ jsx("span", { className: "visually-hidden", children: state.ariaEllipsisLabel })
        ] }, "Ellipsis" + i)
      );
    } else {
      jsxPages.push(
        /* @__PURE__ */ jsx(
          PageItem,
          {
            className: "au-page",
            disabled: state.disabled,
            active: state.pages[i] === state.page,
            onClick: (e) => widget.actions.select(state.pages[i], e.nativeEvent),
            href: state.pagesHrefs[i],
            ariaLabel: state.pagesLabel[i],
            activeLabel: state.activeLabel,
            children: /* @__PURE__ */ jsx(Slot, { slotContent: state.slotNumberLabel, props: { ...slotContext, displayedPage: state.pages[i] } })
          },
          state.pages[i]
        )
      );
    }
  }
  return jsxPages.length ? /* @__PURE__ */ jsx(Fragment, { children: jsxPages }) : null;
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
      /* @__PURE__ */ jsx(
        NavButton,
        {
          className: "au-first",
          ariaLabel: state.ariaFirstLabel,
          href: state.pagesHrefs[0],
          onClick: (e) => widget.actions.first(e.nativeEvent),
          disabled: state.previousDisabled,
          children: /* @__PURE__ */ jsx(Slot, { slotContent: state.slotFirst, props: slotContext })
        },
        "first"
      )
    );
  }
  if (state.directionLinks) {
    ItemsBefore.push(
      /* @__PURE__ */ jsx(
        NavButton,
        {
          className: "au-previous",
          ariaLabel: state.ariaPreviousLabel,
          href: state.directionsHrefs.previous,
          onClick: (e) => widget.actions.previous(e.nativeEvent),
          disabled: state.previousDisabled,
          children: /* @__PURE__ */ jsx(Slot, { slotContent: state.slotPrevious, props: slotContext })
        },
        "prev"
      )
    );
  }
  if (state.directionLinks) {
    ItemsAfter.push(
      /* @__PURE__ */ jsx(
        NavButton,
        {
          className: "au-next",
          ariaLabel: state.ariaNextLabel,
          href: state.directionsHrefs.next,
          onClick: (e) => widget.actions.next(e.nativeEvent),
          disabled: state.nextDisabled,
          children: /* @__PURE__ */ jsx(Slot, { slotContent: state.slotNext, props: slotContext })
        },
        "next"
      )
    );
  }
  if (state.boundaryLinks) {
    ItemsAfter.push(
      /* @__PURE__ */ jsx(
        NavButton,
        {
          className: "au-last",
          ariaLabel: state.ariaLastLabel,
          href: state.pagesHrefs.at(-1),
          onClick: (e) => widget.actions.last(e.nativeEvent),
          disabled: state.nextDisabled,
          children: /* @__PURE__ */ jsx(Slot, { slotContent: state.slotLast, props: slotContext })
        },
        "last"
      )
    );
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("ul", { className: classNames("au-pagination", "pagination", state.size ? \`pagination-\${state.size}\` : "", state.className), children: [
      ItemsBefore,
      /* @__PURE__ */ jsx(Slot, { slotContent: state.slotPages, props: slotContext }),
      ItemsAfter
    ] }),
    /* @__PURE__ */ jsx("div", { "aria-live": "polite", className: "visually-hidden", children: state.page && \`Current page is \${state.page}\` })
  ] });
}
function Pagination(props) {
  const [state, widget] = useWidgetWithConfig(createPagination, props, "pagination", defaultConfig);
  const slotContext = { state, widget: toSlotContextWidget(widget) };
  return /* @__PURE__ */ jsx("nav", { "aria-label": state.ariaLabel, children: /* @__PURE__ */ jsx(Slot, { slotContent: state.slotStructure, props: slotContext }) });
}
export {
  DefaultPages as D,
  NavButton as N,
  Pagination as P,
  DefaultStructure as a,
  PageItem as b
};
`;export{e as default};
