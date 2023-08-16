const n=`import { jsx as i, Fragment as u, jsxs as d } from "react/jsx-runtime";
import { findChangedProperties as x, createAlert as T, createRating as j, createSelect as K, createModal as z, toSlotContextWidget as B, createPagination as O, createWidgetsConfig as q, createAccordion as V } from "@agnos-ui/core";
import * as M from "react";
import _, { Component as G, createContext as A, useRef as v, useEffect as N, useState as J, useCallback as Q, useContext as $, useMemo as L, forwardRef as D, useImperativeHandle as k } from "react";
import { computed as U, writable as X, asReadable as Y } from "@amadeus-it-group/tansu";
import { createPortal as Z } from "react-dom";
import ee from "react-dom/client";
import S from "classnames";
const P = /* @__PURE__ */ new WeakMap(), te = (e) => (a) => /* @__PURE__ */ i(u, { children: e(a) }), ae = (e) => {
  let t = P.get(e);
  return t || (t = te(e), P.set(e, t)), t;
}, ie = (e) => e.prototype instanceof G, l = ({ slotContent: e, props: t }) => {
  if (typeof e == "function") {
    const n = ie(e) ? e : ae(e);
    return /* @__PURE__ */ i(n, { ...t });
  }
  return /* @__PURE__ */ i(u, { children: e });
};
function ne(e, t = {}, ...a) {
  const n = v(void 0);
  n.current || (n.current = e(...a), n.current.patch(t));
  const s = n.current, r = v(t);
  return N(() => {
    const c = x(r.current, t);
    r.current = t, c && s.patch(c);
  }, [t]), [se(s.state$), s];
}
function se(e) {
  const [t, a] = J(() => e());
  return N(() => e.subscribe((n) => {
    a(() => n);
  }), [e]), t;
}
function m(e, t) {
  var r, o;
  const a = v(), n = v(), s = Q(
    (c) => {
      var p, f;
      (f = (p = a.current) == null ? void 0 : p.destroy) == null || f.call(p), a.current = void 0, c && (a.current = e(c, n.current));
    },
    [e]
  );
  return n.current = t, (o = (r = a.current) == null ? void 0 : r.update) == null || o.call(r, t), s;
}
const C = A(void 0), re = (e, t) => !x(e, t), oe = (e) => {
  const t = v();
  return t.current || (t.current = X({ ...e }, { equal: re })), N(() => {
    t.current.set({ ...e });
  }, [e]), L(() => Y(t.current), [t.current]);
}, le = (e, t) => {
  const a = $(C), n = oe(t);
  return L(() => U(() => ({ ...n(), ...e ? a == null ? void 0 : a()[e] : void 0 })), [a]);
}, b = (e, t, a, n) => ne(e, t, le(a, n)), ce = (e) => /* @__PURE__ */ d(u, { children: [
  /* @__PURE__ */ i("div", { className: "alert-body", children: /* @__PURE__ */ i(l, { slotContent: e.state.slotDefault, props: e }) }),
  e.state.dismissible ? /* @__PURE__ */ i(
    "button",
    {
      type: "button",
      className: "btn-close ms-auto",
      onClick: e.widget.api.close,
      "aria-label": e.state.ariaCloseButtonLabel
    }
  ) : null
] }), de = {
  slotStructure: ce
}, Pe = D(function(t, a) {
  const [n, s] = b(T, t, "alert", { ...de, slotDefault: t.children }), r = m(s.directives.transitionDirective);
  k(a, () => s.api, []);
  const o = {
    state: n,
    widget: s
  };
  return /* @__PURE__ */ i(u, { children: n.hidden ? null : /* @__PURE__ */ i("div", { className: \`au-alert d-flex alert w-100 alert-\${n.type}\`, role: "alert", ref: r, children: /* @__PURE__ */ i(l, { slotContent: n.slotStructure, props: o }) }) });
});
function xe(e) {
  const [
    { tabindex: t, maxRating: a, visibleRating: n, ariaValueText: s, readonly: r, disabled: o, isInteractive: c, stars: p, className: f, slotStar: w, ariaLabel: I, ariaLabelledBy: E },
    y
  ] = b(j, e, "rating"), H = {
    cursor: c ? "pointer" : "default"
  };
  return /* @__PURE__ */ i(
    "div",
    {
      role: "slider",
      className: \`d-inline-flex au-rating \${f}\`,
      tabIndex: t,
      "aria-valuemin": 0,
      "aria-valuemax": a,
      "aria-valuenow": n,
      "aria-valuetext": s,
      "aria-readonly": r || void 0,
      "aria-disabled": o || void 0,
      "aria-label": I || void 0,
      "aria-labelledby": E || void 0,
      onKeyDown: (h) => y.actions.handleKey(h),
      onMouseLeave: y.actions.leave,
      children: p.map((h) => /* @__PURE__ */ d(_.Fragment, { children: [
        /* @__PURE__ */ d("span", { className: "visually-hidden", children: [
          "(",
          h.index < n ? "*" : " ",
          ")"
        ] }),
        /* @__PURE__ */ i(
          "span",
          {
            className: "au-rating-star",
            style: H,
            onMouseEnter: () => y.actions.hover(h.index + 1),
            onClick: () => y.actions.click(h.index + 1),
            children: /* @__PURE__ */ i(l, { slotContent: w, props: h })
          }
        )
      ] }, h.index))
    }
  );
}
const ue = {
  backgroundColor: "transparent"
};
function W(e) {
  e.preventDefault();
}
function pe({ api: e, selected: t }) {
  const a = [];
  for (const n of t)
    a.push(
      /* @__PURE__ */ d("div", { className: "badge rounded-pill text-bg-primary d-inline-flex align-items-center m-1", onMouseDown: W, children: [
        /* @__PURE__ */ i("div", { className: "me-1", children: "" + n }),
        /* @__PURE__ */ i("span", { role: "button", tabIndex: -1, "aria-label": "Close", onClick: () => e.api.unselect(n), children: "x" })
      ] })
    );
  return a.length ? /* @__PURE__ */ i("div", { className: "input-group-text", style: ue, children: a }) : null;
}
function me({ visible: e, highlighted: t }) {
  return /* @__PURE__ */ i(u, { children: e.map((a) => {
    const n = \`au-select-checkbox-\${a.id}\`, s = ["dropdown-item position-relative"];
    return a === t && s.push("bg-light"), /* @__PURE__ */ i("li", { className: s.join(" "), children: /* @__PURE__ */ d("div", { className: "form-check", children: [
      /* @__PURE__ */ i("input", { id: n, tabIndex: -1, type: "checkbox", className: "form-check-input", checked: a.selected, onChange: a.toggle }),
      /* @__PURE__ */ i(
        "label",
        {
          htmlFor: n,
          className: "form-check-label stretched-link",
          onClick: (r) => {
            a.toggle(), r.preventDefault();
          },
          children: "" + a.item
        }
      )
    ] }) }, a.id);
  }) });
}
function Be(e) {
  const [t, a] = b(K, e, "select"), { visible: n, selected: s, highlighted: r, filterText: o, opened: c, className: p } = t, {
    directives: { hasFocusDirective: f }
  } = a, w = m(f), I = m(f);
  return /* @__PURE__ */ d("div", { className: \`au-select dropdown input-group input-group-sm mb-3 d-block \${p}\`, children: [
    /* @__PURE__ */ d("div", { ref: w, role: "combobox", className: "input-group", "aria-haspopup": "listbox", "aria-expanded": "true", children: [
      /* @__PURE__ */ i(pe, { api: a, selected: s }),
      /* @__PURE__ */ i(
        "input",
        {
          className: "form-control",
          type: "text",
          value: o,
          "aria-autocomplete": "list",
          autoCorrect: "off",
          autoCapitalize: "none",
          autoComplete: "off",
          onKeyDown: a.actions.onInputKeydown,
          onInput: a.actions.onInput
        }
      )
    ] }),
    c && n.length > 0 && /* @__PURE__ */ i(
      "ul",
      {
        ref: I,
        className: "dropdown-menu show w-100",
        style: {
          position: "absolute",
          inset: "0px auto auto 0px",
          margin: "0px",
          transform: "translate3d(0px, 45px, 0px)"
        },
        "data-popper-placement": "bottom-start",
        onMouseDown: W,
        children: /* @__PURE__ */ i(me, { visible: n, highlighted: r })
      }
    )
  ] });
}
const fe = ({ children: e, container: t }) => t ? Z(e, t) : /* @__PURE__ */ i(u, { children: e }), he = (e) => /* @__PURE__ */ d(u, { children: [
  /* @__PURE__ */ i("h5", { className: "modal-title", children: /* @__PURE__ */ i(l, { slotContent: e.state.slotTitle, props: e }) }),
  e.state.closeButton ? /* @__PURE__ */ i(
    "button",
    {
      type: "button",
      className: "btn-close",
      "aria-label": e.state.ariaCloseButtonLabel,
      onClick: e.widget.actions.closeButtonClick
    }
  ) : null
] }), be = (e) => /* @__PURE__ */ d(u, { children: [
  e.state.slotTitle ? /* @__PURE__ */ i("div", { className: "modal-header", children: /* @__PURE__ */ i(l, { slotContent: e.state.slotHeader, props: e }) }) : null,
  /* @__PURE__ */ i("div", { className: "modal-body", children: /* @__PURE__ */ i(l, { slotContent: e.state.slotDefault, props: e }) }),
  e.state.slotFooter ? /* @__PURE__ */ i("div", { className: "modal-footer", children: /* @__PURE__ */ i(l, { slotContent: e.state.slotFooter, props: e }) }) : null
] }), ge = {
  slotHeader: he,
  slotStructure: be
}, ve = D(function(t, a) {
  const [n, s] = b(z, t, "modal", { ...ge, slotDefault: t.children });
  k(a, () => s.api, []);
  const r = m(s.directives.backdropDirective), o = m(s.directives.modalDirective), c = {
    state: n,
    widget: B(s)
  };
  return /* @__PURE__ */ i(u, { children: /* @__PURE__ */ d(fe, { container: n.container, children: [
    n.backdropHidden ? null : /* @__PURE__ */ i("div", { className: \`modal-backdrop \${n.backdropClass}\`, ref: r }),
    n.hidden ? null : /* @__PURE__ */ i("div", { className: \`modal d-block \${n.modalClass}\`, ref: o, onClick: s.actions.modalClick, children: /* @__PURE__ */ i("div", { className: "modal-dialog", children: /* @__PURE__ */ i("div", { className: "modal-content", children: /* @__PURE__ */ i(l, { slotContent: n.slotStructure, props: c }) }) }) })
  ] }) });
}), Me = async (e) => {
  const t = ee.createRoot(document.createElement("div"));
  try {
    return await (await new Promise((n) => {
      t.render(/* @__PURE__ */ i(ve, { ...e, ref: n }));
    })).open();
  } finally {
    t.unmount();
  }
}, R = M.forwardRef(
  ({ disabled: e, active: t, ariaLabel: a, activeLabel: n, className: s, children: r, ...o }, c) => /* @__PURE__ */ i("li", { ref: c, "aria-current": t ? "page" : void 0, className: S("page-item", { active: t, disabled: e }), children: /* @__PURE__ */ d(
    "a",
    {
      className: S("page-link", s),
      "aria-label": a || void 0,
      ...o,
      href: "#",
      tabIndex: e ? -1 : void 0,
      "aria-disabled": e || void 0,
      children: [
        r,
        t && n && /* @__PURE__ */ i("span", { className: "visually-hidden", children: n })
      ]
    }
  ) })
);
R.displayName = "PageItem";
const g = M.forwardRef(({ children: e, ...t }, a) => /* @__PURE__ */ i(R, { ...t, ref: a, children: /* @__PURE__ */ i("span", { "aria-hidden": "true", children: e }) }));
g.displayName = "NavButton";
function Ne(e) {
  const { widget: t, state: a } = e, n = [];
  for (let s = 0; s < a.pages.length; s++)
    t.api.isEllipsis(a.pages[s]) ? n.push(
      /* @__PURE__ */ i(g, { disabled: !0, tabIndex: -1, className: "au-ellipsis", children: /* @__PURE__ */ i(l, { slotContent: a.slotEllipsis, props: e }) }, "Ellipsis" + s)
    ) : n.push(
      /* @__PURE__ */ i(
        R,
        {
          className: "au-page",
          disabled: a.disabled,
          active: a.pages[s] === a.page,
          onClick: (r) => {
            t.actions.select(a.pages[s]), r.preventDefault();
          },
          ariaLabel: a.pagesLabel[s],
          activeLabel: a.activeLabel,
          children: /* @__PURE__ */ i(l, { slotContent: a.slotNumberLabel, props: { ...e, displayedPage: a.pages[s] } })
        },
        a.pages[s]
      )
    );
  return n.length ? /* @__PURE__ */ i(u, { children: n }) : null;
}
const ye = {
  slotPages: Ne
};
function Ae(e) {
  const [t, a] = b(O, e, "pagination", ye), n = { state: t, widget: B(a) }, s = [], r = [];
  return t.boundaryLinks && s.push(
    /* @__PURE__ */ i(
      g,
      {
        className: "au-first",
        ariaLabel: t.ariaFirstLabel,
        onClick: (o) => {
          a.actions.first(), o.preventDefault();
        },
        disabled: t.previousDisabled,
        children: /* @__PURE__ */ i(l, { slotContent: t.slotFirst, props: n })
      },
      "first"
    )
  ), t.directionLinks && s.push(
    /* @__PURE__ */ i(
      g,
      {
        className: "au-previous",
        ariaLabel: t.ariaPreviousLabel,
        onClick: (o) => {
          a.actions.previous(), o.preventDefault();
        },
        disabled: t.previousDisabled,
        children: /* @__PURE__ */ i(l, { slotContent: t.slotPrevious, props: n })
      },
      "prev"
    )
  ), t.directionLinks && r.push(
    /* @__PURE__ */ i(
      g,
      {
        className: "au-next",
        ariaLabel: t.ariaNextLabel,
        onClick: (o) => {
          a.actions.next(), o.preventDefault();
        },
        disabled: t.nextDisabled,
        children: /* @__PURE__ */ i(l, { slotContent: t.slotNext, props: n })
      },
      "next"
    )
  ), t.boundaryLinks && r.push(
    /* @__PURE__ */ i(
      g,
      {
        className: "au-last",
        ariaLabel: t.ariaLastLabel,
        onClick: (o) => {
          a.actions.last(), o.preventDefault();
        },
        disabled: t.nextDisabled,
        children: /* @__PURE__ */ i(l, { slotContent: t.slotLast, props: n })
      },
      "last"
    )
  ), /* @__PURE__ */ d("nav", { "aria-label": t.ariaLabel, children: [
    /* @__PURE__ */ d("ul", { className: S("au-pagination", "pagination", t.size ? \`pagination-\${t.size}\` : "", t.className), children: [
      s,
      /* @__PURE__ */ i(l, { slotContent: t.slotPages, props: n }),
      r
    ] }),
    /* @__PURE__ */ i("div", { "aria-live": "polite", className: "visually-hidden", children: t.page && \`Current page is \${t.page}\` })
  ] });
}
const We = ({
  children: e,
  adaptParentConfig: t,
  ...a
}) => {
  const n = $(C);
  let s = !1;
  const r = L(() => {
    const o = q(n, t);
    return o.set(a), s = !0, o;
  }, [n, t]);
  return N(() => {
    s || r.set(a);
  }, [a]), /* @__PURE__ */ i(C.Provider, { value: r, children: e });
}, F = A({}), De = (e) => {
  const t = m(e.widget.directives.collapseDirective);
  return /* @__PURE__ */ d(u, { children: [
    /* @__PURE__ */ i("h2", { className: \`accordion-header \${e.state.itemHeaderClass}\`, children: /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        id: \`\${e.state.itemId}-toggle\`,
        onClick: e.widget.actions.click,
        className: \`accordion-button \${e.state.itemButtonClass} \${e.state.itemCollapsed ? "collapsed" : ""}\`,
        disabled: e.state.itemDisabled,
        "aria-controls": \`\${e.state.itemId}-collapse\`,
        "aria-disabled": e.state.itemDisabled,
        "aria-expanded": !e.state.itemCollapsed,
        children: /* @__PURE__ */ i(l, { slotContent: e.state.slotItemHeader, props: e })
      }
    ) }),
    e.state.shouldBeInDOM ? /* @__PURE__ */ i(
      "div",
      {
        className: \`accordion-collapse \${e.state.itemCollapseClass}\`,
        id: \`\${e.state.itemId}-collapse\`,
        "aria-labelledby": \`\${e.state.itemId}-toggle\`,
        ref: t,
        children: /* @__PURE__ */ i("div", { className: \`accordion-body \${e.state.itemBodyClass}\`, children: /* @__PURE__ */ i(l, { slotContent: e.state.slotItemBody, props: e }) })
      }
    ) : null
  ] });
}, ke = {
  slotItemStructure: De
}, Fe = D(function(t, a) {
  const { registerItem: n } = $(F), [s, r] = b(n, t, null, {
    ...ke
  }), o = {
    state: s,
    widget: r
  }, c = m(r.directives.accordionItemDirective);
  return k(a, () => r.api, []), N(() => {
    r.api.initDone();
  }, []), /* @__PURE__ */ i("div", { className: \`accordion-item \${s.itemClass}\`, id: s.itemId, ref: c, children: /* @__PURE__ */ i(l, { slotContent: s.slotItemStructure, props: o }) });
}), Ee = D(function(t, a) {
  const [n, s] = b(V, t, "accordion");
  k(a, () => s.api, []);
  const r = m(s.directives.accordionDirective);
  return /* @__PURE__ */ i(F.Provider, { value: s.api, children: /* @__PURE__ */ i("div", { className: \`accordion \${n.accordionClass}\`, ref: r, children: t.children }) });
});
export {
  Ee as Accordion,
  Fe as AccordionItem,
  Pe as Alert,
  Ne as DefaultPages,
  ve as Modal,
  g as NavButton,
  R as PageItem,
  Ae as Pagination,
  xe as Rating,
  Be as Select,
  l as Slot,
  We as WidgetsDefaultConfig,
  Me as openModal,
  m as useDirective,
  se as useObservable,
  ne as useWidget,
  b as useWidgetWithConfig,
  C as widgetsConfigContext
};
`;export{n as default};
