const n=`import { jsx as n, Fragment as u, jsxs as d } from "react/jsx-runtime";
import { findChangedProperties as R, createAlert as T, createRating as A, createSelect as H, createModal as j, toSlotContextWidget as P, createPagination as K, createWidgetsConfig as z } from "@agnos-ui/core";
import * as I from "react";
import q, { Component as O, createContext as V, useRef as b, useEffect as k, useState as _, useCallback as G, useContext as M, useMemo as C, forwardRef as W, useImperativeHandle as $ } from "react";
import { computed as J, writable as Q, asReadable as U } from "@amadeus-it-group/tansu";
import { createPortal as X } from "react-dom";
import Y from "react-dom/client";
import w from "classnames";
const S = /* @__PURE__ */ new WeakMap(), Z = (t) => (a) => /* @__PURE__ */ n(u, { children: t(a) }), ee = (t) => {
  let e = S.get(t);
  return e || (e = Z(t), S.set(t, e)), e;
}, te = (t) => t.prototype instanceof O, l = ({ slotContent: t, props: e }) => {
  if (typeof t == "function") {
    const s = te(t) ? t : ee(t);
    return /* @__PURE__ */ n(s, { ...e });
  }
  return /* @__PURE__ */ n(u, { children: t });
};
function ae(t, e = {}, ...a) {
  const s = b(void 0);
  s.current || (s.current = t(...a), s.current.patch(e));
  const r = s.current, i = b(e);
  return k(() => {
    const c = R(i.current, e);
    i.current = e, c && r.patch(c);
  }, [e]), [ne(r.state$), r];
}
function ne(t) {
  const [e, a] = _(() => t());
  return k(() => t.subscribe((s) => {
    a(() => s);
  }), [t]), e;
}
function g(t, e) {
  var i, o;
  const a = b(), s = b(), r = G(
    (c) => {
      var p, f;
      (f = (p = a.current) == null ? void 0 : p.destroy) == null || f.call(p), a.current = void 0, c && (a.current = t(c, s.current));
    },
    [t]
  );
  return s.current = e, (o = (i = a.current) == null ? void 0 : i.update) == null || o.call(i, e), r;
}
const x = V(void 0), se = (t, e) => !R(t, e), re = (t) => {
  const e = b();
  return e.current || (e.current = Q({ ...t }, { equal: se })), k(() => {
    e.current.set({ ...t });
  }, [t]), C(() => U(e.current), [e.current]);
}, ie = (t, e) => {
  const a = M(x), s = re(e);
  return C(() => J(() => ({ ...s(), ...t ? a == null ? void 0 : a()[t] : void 0 })), [a]);
}, v = (t, e, a, s) => ae(t, e, ie(a, s)), oe = (t) => /* @__PURE__ */ d(u, { children: [
  /* @__PURE__ */ n("div", { className: "alert-body", children: /* @__PURE__ */ n(l, { slotContent: t.state.slotDefault, props: t }) }),
  t.state.dismissible ? /* @__PURE__ */ n(
    "button",
    {
      type: "button",
      className: "btn-close ms-auto",
      onClick: t.widget.api.close,
      "aria-label": t.state.ariaCloseButtonLabel
    }
  ) : null
] }), le = {
  slotStructure: oe
}, Le = W(function(e, a) {
  const [s, r] = v(T, e, "alert", { ...le, slotDefault: e.children }), i = g(r.directives.transitionDirective);
  $(a, () => r.api, []);
  const o = {
    state: s,
    widget: r
  };
  return /* @__PURE__ */ n(u, { children: s.hidden ? null : /* @__PURE__ */ n("div", { className: \`au-alert d-flex alert w-100 alert-\${s.type}\`, role: "alert", ref: i, children: /* @__PURE__ */ n(l, { slotContent: s.slotStructure, props: o }) }) });
});
function Se(t) {
  const [
    { tabindex: e, maxRating: a, visibleRating: s, ariaValueText: r, readonly: i, disabled: o, isInteractive: c, stars: p, className: f, slotStar: y, ariaLabel: D, ariaLabelledBy: B },
    N
  ] = v(A, t, "rating"), E = {
    cursor: c ? "pointer" : "default"
  };
  return /* @__PURE__ */ n(
    "div",
    {
      role: "slider",
      className: \`d-inline-flex au-rating \${f}\`,
      tabIndex: e,
      "aria-valuemin": 0,
      "aria-valuemax": a,
      "aria-valuenow": s,
      "aria-valuetext": r,
      "aria-readonly": i || void 0,
      "aria-disabled": o || void 0,
      "aria-label": D || void 0,
      "aria-labelledby": B || void 0,
      onKeyDown: (m) => N.actions.handleKey(m),
      onMouseLeave: N.actions.leave,
      children: p.map((m) => /* @__PURE__ */ d(q.Fragment, { children: [
        /* @__PURE__ */ d("span", { className: "visually-hidden", children: [
          "(",
          m.index < s ? "*" : " ",
          ")"
        ] }),
        /* @__PURE__ */ n(
          "span",
          {
            className: "au-rating-star",
            style: E,
            onMouseEnter: () => N.actions.hover(m.index + 1),
            onClick: () => N.actions.click(m.index + 1),
            children: /* @__PURE__ */ n(l, { slotContent: y, props: m })
          }
        )
      ] }, m.index))
    }
  );
}
const ce = {
  backgroundColor: "transparent"
};
function F(t) {
  t.preventDefault();
}
function de({ api: t, selected: e }) {
  const a = [];
  for (const s of e)
    a.push(
      /* @__PURE__ */ d("div", { className: "badge rounded-pill text-bg-primary d-inline-flex align-items-center m-1", onMouseDown: F, children: [
        /* @__PURE__ */ n("div", { className: "me-1", children: "" + s }),
        /* @__PURE__ */ n("span", { role: "button", tabIndex: -1, "aria-label": "Close", onClick: () => t.api.unselect(s), children: "x" })
      ] })
    );
  return a.length ? /* @__PURE__ */ n("div", { className: "input-group-text", style: ce, children: a }) : null;
}
function ue({ visible: t, highlighted: e }) {
  return /* @__PURE__ */ n(u, { children: t.map((a) => {
    const s = \`au-select-checkbox-\${a.id}\`, r = ["dropdown-item position-relative"];
    return a === e && r.push("bg-light"), /* @__PURE__ */ n("li", { className: r.join(" "), children: /* @__PURE__ */ d("div", { className: "form-check", children: [
      /* @__PURE__ */ n("input", { id: s, tabIndex: -1, type: "checkbox", className: "form-check-input", checked: a.selected, onChange: a.toggle }),
      /* @__PURE__ */ n(
        "label",
        {
          htmlFor: s,
          className: "form-check-label stretched-link",
          onClick: (i) => {
            a.toggle(), i.preventDefault();
          },
          children: "" + a.item
        }
      )
    ] }) }, a.id);
  }) });
}
function Re(t) {
  const [e, a] = v(H, t, "select"), { visible: s, selected: r, highlighted: i, filterText: o, opened: c, className: p } = e, {
    directives: { hasFocusDirective: f }
  } = a, y = g(f), D = g(f);
  return /* @__PURE__ */ d("div", { className: \`au-select dropdown input-group input-group-sm mb-3 d-block \${p}\`, children: [
    /* @__PURE__ */ d("div", { ref: y, role: "combobox", className: "input-group", "aria-haspopup": "listbox", "aria-expanded": "true", children: [
      /* @__PURE__ */ n(de, { api: a, selected: r }),
      /* @__PURE__ */ n(
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
    c && s.length > 0 && /* @__PURE__ */ n(
      "ul",
      {
        ref: D,
        className: "dropdown-menu show w-100",
        style: {
          position: "absolute",
          inset: "0px auto auto 0px",
          margin: "0px",
          transform: "translate3d(0px, 45px, 0px)"
        },
        "data-popper-placement": "bottom-start",
        onMouseDown: F,
        children: /* @__PURE__ */ n(ue, { visible: s, highlighted: i })
      }
    )
  ] });
}
const pe = ({ children: t, container: e }) => e ? X(t, e) : /* @__PURE__ */ n(u, { children: t }), fe = (t) => /* @__PURE__ */ d(u, { children: [
  /* @__PURE__ */ n("h5", { className: "modal-title", children: /* @__PURE__ */ n(l, { slotContent: t.state.slotTitle, props: t }) }),
  t.state.closeButton ? /* @__PURE__ */ n(
    "button",
    {
      type: "button",
      className: "btn-close",
      "aria-label": t.state.ariaCloseButtonLabel,
      onClick: t.widget.actions.closeButtonClick
    }
  ) : null
] }), me = (t) => /* @__PURE__ */ d(u, { children: [
  t.state.slotTitle ? /* @__PURE__ */ n("div", { className: "modal-header", children: /* @__PURE__ */ n(l, { slotContent: t.state.slotHeader, props: t }) }) : null,
  /* @__PURE__ */ n("div", { className: "modal-body", children: /* @__PURE__ */ n(l, { slotContent: t.state.slotDefault, props: t }) }),
  t.state.slotFooter ? /* @__PURE__ */ n("div", { className: "modal-footer", children: /* @__PURE__ */ n(l, { slotContent: t.state.slotFooter, props: t }) }) : null
] }), he = {
  slotHeader: fe,
  slotStructure: me
}, be = W(function(e, a) {
  const [s, r] = v(j, e, "modal", { ...he, slotDefault: e.children });
  $(a, () => r.api, []);
  const i = g(r.directives.backdropDirective), o = g(r.directives.modalDirective), c = {
    state: s,
    widget: P(r)
  };
  return /* @__PURE__ */ n(u, { children: /* @__PURE__ */ d(pe, { container: s.container, children: [
    s.backdropHidden ? null : /* @__PURE__ */ n("div", { className: \`modal-backdrop \${s.backdropClass}\`, ref: i }),
    s.hidden ? null : /* @__PURE__ */ n("div", { className: \`modal d-block \${s.modalClass}\`, ref: o, onClick: r.actions.modalClick, children: /* @__PURE__ */ n("div", { className: "modal-dialog", children: /* @__PURE__ */ n("div", { className: "modal-content", children: /* @__PURE__ */ n(l, { slotContent: s.slotStructure, props: c }) }) }) })
  ] }) });
}), Pe = async (t) => {
  const e = Y.createRoot(document.createElement("div"));
  try {
    return await (await new Promise((s) => {
      e.render(/* @__PURE__ */ n(be, { ...t, ref: s }));
    })).open();
  } finally {
    e.unmount();
  }
}, L = I.forwardRef(
  ({ disabled: t, active: e, ariaLabel: a, activeLabel: s, className: r, children: i, ...o }, c) => /* @__PURE__ */ n("li", { ref: c, "aria-current": e ? "page" : void 0, className: w("page-item", { active: e, disabled: t }), children: /* @__PURE__ */ d(
    "a",
    {
      className: w("page-link", r),
      "aria-label": a || void 0,
      ...o,
      href: "#",
      tabIndex: t ? -1 : void 0,
      "aria-disabled": t || void 0,
      children: [
        i,
        e && s && /* @__PURE__ */ n("span", { className: "visually-hidden", children: s })
      ]
    }
  ) })
);
L.displayName = "PageItem";
const h = I.forwardRef(({ children: t, ...e }, a) => /* @__PURE__ */ n(L, { ...e, ref: a, children: /* @__PURE__ */ n("span", { "aria-hidden": "true", children: t }) }));
h.displayName = "NavButton";
function ge(t) {
  const { widget: e, state: a } = t, s = [];
  for (let r = 0; r < a.pages.length; r++)
    e.api.isEllipsis(a.pages[r]) ? s.push(
      /* @__PURE__ */ n(h, { disabled: !0, tabIndex: -1, className: "au-ellipsis", children: /* @__PURE__ */ n(l, { slotContent: a.slotEllipsis, props: t }) }, "Ellipsis" + r)
    ) : s.push(
      /* @__PURE__ */ n(
        L,
        {
          className: "au-page",
          disabled: a.disabled,
          active: a.pages[r] === a.page,
          onClick: (i) => {
            e.actions.select(a.pages[r]), i.preventDefault();
          },
          ariaLabel: a.pagesLabel[r],
          activeLabel: a.activeLabel,
          children: /* @__PURE__ */ n(l, { slotContent: a.slotNumberLabel, props: { ...t, displayedPage: a.pages[r] } })
        },
        a.pages[r]
      )
    );
  return s.length ? /* @__PURE__ */ n(u, { children: s }) : null;
}
const ve = {
  slotPages: ge
};
function Ie(t) {
  const [e, a] = v(K, t, "pagination", ve), s = { state: e, widget: P(a) }, r = [], i = [];
  return e.boundaryLinks && r.push(
    /* @__PURE__ */ n(
      h,
      {
        className: "au-first",
        ariaLabel: e.ariaFirstLabel,
        onClick: (o) => {
          a.actions.first(), o.preventDefault();
        },
        disabled: e.previousDisabled,
        children: /* @__PURE__ */ n(l, { slotContent: e.slotFirst, props: s })
      },
      "first"
    )
  ), e.directionLinks && r.push(
    /* @__PURE__ */ n(
      h,
      {
        className: "au-previous",
        ariaLabel: e.ariaPreviousLabel,
        onClick: (o) => {
          a.actions.previous(), o.preventDefault();
        },
        disabled: e.previousDisabled,
        children: /* @__PURE__ */ n(l, { slotContent: e.slotPrevious, props: s })
      },
      "prev"
    )
  ), e.directionLinks && i.push(
    /* @__PURE__ */ n(
      h,
      {
        className: "au-next",
        ariaLabel: e.ariaNextLabel,
        onClick: (o) => {
          a.actions.next(), o.preventDefault();
        },
        disabled: e.nextDisabled,
        children: /* @__PURE__ */ n(l, { slotContent: e.slotNext, props: s })
      },
      "next"
    )
  ), e.boundaryLinks && i.push(
    /* @__PURE__ */ n(
      h,
      {
        className: "au-last",
        ariaLabel: e.ariaLastLabel,
        onClick: (o) => {
          a.actions.last(), o.preventDefault();
        },
        disabled: e.nextDisabled,
        children: /* @__PURE__ */ n(l, { slotContent: e.slotLast, props: s })
      },
      "last"
    )
  ), /* @__PURE__ */ d("nav", { "aria-label": e.ariaLabel, children: [
    /* @__PURE__ */ d("ul", { className: w("au-pagination", "pagination", e.size ? \`pagination-\${e.size}\` : "", e.className), children: [
      r,
      /* @__PURE__ */ n(l, { slotContent: e.slotPages, props: s }),
      i
    ] }),
    /* @__PURE__ */ n("div", { "aria-live": "polite", className: "visually-hidden", children: e.page && \`Current page is \${e.page}\` })
  ] });
}
const Me = ({
  children: t,
  adaptParentConfig: e,
  ...a
}) => {
  const s = M(x);
  let r = !1;
  const i = C(() => {
    const o = z(s, e);
    return o.set(a), r = !0, o;
  }, [s, e]);
  return k(() => {
    r || i.set(a);
  }, [a]), /* @__PURE__ */ n(x.Provider, { value: i, children: t });
};
export {
  Le as Alert,
  ge as DefaultPages,
  be as Modal,
  h as NavButton,
  L as PageItem,
  Ie as Pagination,
  Se as Rating,
  Re as Select,
  l as Slot,
  Me as WidgetsDefaultConfig,
  Pe as openModal,
  g as useDirective,
  ne as useObservable,
  ae as useWidget,
  v as useWidgetWithConfig,
  x as widgetsConfigContext
};
`;export{n as default};
