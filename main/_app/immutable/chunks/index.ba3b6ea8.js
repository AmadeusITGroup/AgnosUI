const n=`import { readable as J, writable as N, asReadable as q, batch as U, computed as m, get as Mt, derived as At } from "@amadeus-it-group/tansu";
const Ue = (t) => ({
  actions: t.actions,
  api: t.api,
  directives: t.directives,
  state$: t.state$,
  stores: t.stores
}), O = () => {
}, pt = (t) => t, ht = (t, e) => (n) => {
  let i = !0, o;
  const s = e.subscribe((r) => {
    var l;
    i ? (i = !1, o = t(n, r)) : (l = o == null ? void 0 : o.update) == null || l.call(o, r);
  });
  return {
    destroy() {
      var r;
      (r = o == null ? void 0 : o.destroy) == null || r.call(o), s();
    }
  };
}, Tt = J(void 0), it = (t) => ht(t, Tt), ct = (t, e = !0) => () => {
  const n = t.subscribe(O);
  return {
    destroy: async () => {
      e && await 0, n();
    }
  };
}, zt = (t) => (e, n) => (t(n), {
  update: t
}), kt = { equal: Object.is }, gt = () => {
  const t = N([], kt);
  return q(t, {
    /**
     * Add the given element to the array.
     * @param element - Element to be added to the array.
     * @returns A function to remove the element from the array.
     */
    register: (e) => {
      let n = !1;
      return t.update((i) => [...i, e]), () => {
        n || (n = !0, t.update((i) => {
          const o = i.indexOf(e);
          if (o > -1) {
            const s = [...i];
            return s.splice(o, 1), s;
          }
          return i;
        }));
      };
    }
  });
}, Ht = () => {
  const t = gt();
  return {
    elements$: q(t),
    directive: (e) => ({ destroy: t.register(e) })
  };
}, _t = () => {
  const t = N(null, kt);
  return {
    element$: q(t),
    directive: (e) => {
      let n = !1;
      return t.update((i) => i ? (console.error("The directive cannot be used on multiple elements.", i, e), i) : (n = !0, e)), n ? {
        destroy() {
          t.update((i) => e === i ? null : i);
        }
      } : void 0;
    }
  };
}, bt = (...t) => (e, n) => {
  const i = U(() => t.map((o) => o(e, n)));
  return {
    update(o) {
      U(() => i.forEach((s) => {
        var r;
        return (r = s == null ? void 0 : s.update) == null ? void 0 : r.call(s, o);
      }));
    },
    destroy() {
      U(() => i.reverse().forEach((o) => {
        var s;
        return (s = o == null ? void 0 : o.destroy) == null ? void 0 : s.call(o);
      }));
    }
  };
}, Ct = "focusin", yt = "focusout", jt = J(null, {
  onUse({ set: t }) {
    function e() {
      t(document.activeElement);
    }
    e();
    const n = document.documentElement;
    function i() {
      setTimeout(e);
    }
    return n.addEventListener(Ct, e), n.addEventListener(yt, i), () => {
      n.removeEventListener(Ct, e), n.removeEventListener(yt, i);
    };
  },
  equal: Object.is
});
function Wt() {
  const { elements$: t, directive: e } = Ht(), n = m(() => {
    const i = jt();
    if (!i)
      return !1;
    for (const o of t())
      if (o === i || o.contains(i))
        return !0;
    return !1;
  });
  return {
    directive: e,
    hasFocus$: n
  };
}
function Ut(t) {
  return function(e) {
    U(() => {
      var n;
      for (const [i, o] of Object.entries(e ?? {}))
        (n = t[\`\${i}$\`]) == null || n.set(o);
    });
  };
}
function qe(t, e) {
  if (t === e)
    return null;
  let n = !1;
  const i = {}, o = /* @__PURE__ */ new Set([...Object.keys(t), ...Object.keys(e)]);
  for (const s of o) {
    const r = e[s];
    t[s] !== r && (i[s] = r, n = !0);
  }
  return n ? i : null;
}
const qt = function(t) {
  this.set(t(this()));
}, X = Symbol();
function Kt(t, e = J(void 0), { normalizeValue: n = pt, equal: i = Object.is } = {}) {
  const o = N(void 0), s = m(
    () => {
      const r = e(), l = r === void 0 ? void 0 : n(r);
      return l === X ? (console.error("Not using invalid value from default config", r), t) : l === void 0 ? t : l;
    },
    { equal: i }
  );
  return q(
    m(
      () => {
        const r = o();
        return r !== void 0 ? r : s();
      },
      { equal: i }
    ),
    {
      set(r) {
        const l = r === void 0 ? void 0 : n(r);
        l === X ? console.error("Not setting invalid value", r) : o.set(l);
      },
      update: qt
    }
  );
}
const It = (t) => !!(t && typeof t == "function" && "subscribe" in t), Jt = (t, e, n) => {
  const i = {}, o = It(e);
  for (const s of Object.keys(t)) {
    let r = o ? m(() => e()[s]) : void 0;
    if (!o && e) {
      const l = e[s];
      r = It(l) ? l : J(l);
    }
    i[\`\${s}$\`] = Kt(t[s], r, n == null ? void 0 : n[s]);
  }
  return i;
}, T = (t, e, n) => {
  const i = Jt(t, e, n);
  return [i, Ut(i)];
}, z = (t) => {
  const e = [], n = [], i = {};
  for (const o of Object.keys(t))
    if (o.endsWith("$")) {
      const s = t[o];
      e.push(o.substring(0, o.length - 1)), n.push(s), i[o] = q(s);
    }
  return {
    stores: i,
    state$: m(() => {
      const o = n.map(Mt), s = {};
      return e.forEach((r, l) => {
        s[r] = o[l];
      }), s;
    })
  };
}, dt = (t, e, n) => {
  let i = e[0]();
  return At(e, (o) => {
    const s = n(o), r = s !== o[0];
    return r && e[0].set(s), (r || s !== i) && (i = s, t()(s)), s;
  });
};
function Gt(t, e) {
  return JSON.stringify(t).toLowerCase().includes(e.toLowerCase());
}
function Qt(t) {
  return "" + t;
}
const Xt = {
  opened: !1,
  disabled: !1,
  items: [],
  filterText: "",
  loading: !1,
  selected: [],
  itemId: Qt,
  matchFn: Gt,
  onFilterTextChange: void 0,
  className: ""
};
function Ke(t) {
  const [{ opened$: e, items$: n, itemId$: i, matchFn$: o, onFilterTextChange$: s, ...r }, l] = T(
    Xt,
    t
  ), { selected$: f, filterText$: d } = r, { hasFocus$: v, directive: k } = Wt(), H = m(() => {
    const a = e(), c = v();
    return !c && a && e.set(!1), a && c;
  }), C = function() {
    const a = N(0), c = q(a, {
      set(g) {
        const { length: u } = b();
        g != null && (u ? g < 0 ? g = u - 1 : g >= u && (g = 0) : g = void 0), a.set(g);
      },
      update(g) {
        c.set(g(a()));
      }
    });
    return c;
  }(), b = m(() => {
    const a = [];
    if (H()) {
      const c = f(), g = d(), u = g ? o() : () => !0, y = i();
      for (const P of n())
        u(P, g) && a.push({
          item: P,
          id: y(P),
          selected: c.includes(P),
          select: (function() {
            h.api.select(this);
          }).bind(P),
          unselect: (function() {
            h.api.unselect(this);
          }).bind(P),
          toggle: (function() {
            h.api.toggleItem(this);
          }).bind(P)
        });
    }
    return a;
  }), $ = m(() => {
    const a = b(), c = C();
    return a.length && c != null ? a[c] : void 0;
  }), h = {
    ...z({
      visible$: b,
      highlighted$: $,
      opened$: H,
      ...r
    }),
    patch: l,
    api: {
      clear() {
        f.set([]);
      },
      select(a) {
        h.api.toggleItem(a, !0);
      },
      unselect(a) {
        h.api.toggleItem(a, !1);
      },
      toggleItem(a, c) {
        n().includes(a) && f.update((g) => {
          g = [...g];
          const u = g.indexOf(a);
          return c == null && (c = u === -1), c && u === -1 ? g.push(a) : !c && u !== -1 && g.splice(u, 1), g;
        });
      },
      clearText() {
      },
      highlight(a) {
        const c = b().findIndex((g) => g.item === a);
        C.set(c === -1 ? void 0 : c);
      },
      highlightFirst() {
        C.set(0);
      },
      highlightPrevious() {
        C.update((a) => a != null ? a - 1 : -1);
      },
      highlightNext() {
        C.update((a) => a != null ? a + 1 : 1 / 0);
      },
      highlightLast() {
        C.set(-1);
      },
      focus(a) {
      },
      focusFirst() {
      },
      focusPrevious() {
      },
      focusNext() {
      },
      focusLast() {
      },
      open: () => h.api.toggle(!0),
      close: () => h.api.toggle(!1),
      toggle(a) {
        e.update((c) => a ?? !c);
      }
    },
    directives: {
      hasFocusDirective: k
    },
    actions: {
      onInput({ target: a }) {
        const c = a.value;
        U(() => {
          var g;
          l({
            opened: c != null && c !== "",
            filterText: c
          }), (g = s()) == null || g(c);
        });
      },
      onInputKeydown(a) {
        const { ctrlKey: c, key: g } = a;
        let u = !0;
        switch (g) {
          case "ArrowDown": {
            H() ? c ? h.api.highlightLast() : h.api.highlightNext() : (h.api.open(), h.api.highlightFirst());
            break;
          }
          case "ArrowUp":
            c ? h.api.highlightFirst() : h.api.highlightPrevious();
            break;
          case "Enter": {
            const y = $();
            y && h.api.toggleItem(y.item);
            break;
          }
          case "Escape":
            e.set(!1);
            break;
          default:
            u = !1;
        }
        u && a.preventDefault();
      }
    }
  };
  return h;
}
const Yt = (t) => {
  const e = /* @__PURE__ */ new Map(), n = (i) => {
    const o = i.parentElement;
    o && i !== document.body && (Array.from(o.children).forEach((s) => {
      s !== i && s.nodeName !== "SCRIPT" && (e.set(s, s.hasAttribute("inert")), s.toggleAttribute("inert", !0));
    }), n(o));
  };
  return n(t), () => e.forEach((i, o) => {
    o.toggleAttribute("inert", i);
  });
};
let wt = O;
const Zt = (t) => {
  wt(), wt = t ? Yt(t) : O;
}, { directive: te, elements$: ee } = Ht(), oe = m(
  () => {
    const t = ee();
    return t[t.length - 1];
  },
  { equal: Object.is }
), ne = m(() => Zt(oe())), ie = bt(te, ct(ne)), St = (t, e) => {
  let n, i;
  const o = () => {
    var r;
    i && ((r = i.parentNode) == null || r.replaceChild(t, i), i = null);
  }, s = (r) => {
    var l, f;
    if (r !== n) {
      n = r;
      const d = (n == null ? void 0 : n.container) ?? ((l = n == null ? void 0 : n.insertBefore) == null ? void 0 : l.parentElement);
      d ? (i || (i = (f = t.parentNode) == null ? void 0 : f.insertBefore(t.ownerDocument.createComment("portal"), t)), d.insertBefore(t, (n == null ? void 0 : n.insertBefore) ?? null)) : o();
    }
  };
  return s(e), {
    update: s,
    destroy: () => {
      var r;
      o(), (r = t.parentNode) == null || r.removeChild(t);
    }
  };
};
function $t(t) {
  return typeof t == "number" && !isNaN(t) && Number.isFinite(t);
}
function se(t) {
  return t === !0 || t === !1;
}
function re(t) {
  return typeof t == "function";
}
function ae(t) {
  return typeof t == "string";
}
function le(t, e, n = 0) {
  return Math.max(Math.min(t, e), n);
}
const ut = (t) => (e) => t(e) ? e : X, Q = {
  normalizeValue: ut($t)
}, A = {
  normalizeValue: ut(se)
}, w = {
  normalizeValue: ut(ae)
}, D = {
  normalizeValue: ut(re),
  equal: Object.is
}, et = () => {
}, Dt = new Promise(et), ce = async (t, e) => {
  t.style.display = e === "show" ? "" : "none";
}, de = {
  animation: !0,
  animationOnInit: !1,
  initDone: null,
  visible: !0,
  transition: ce,
  onShown: et,
  onHidden: et,
  onVisibleChange: et
}, ue = {
  animation: A,
  animationOnInit: A,
  visible: A,
  transition: D,
  onShown: D,
  onHidden: D
}, Ot = () => {
  let t;
  return { promise: new Promise((n) => {
    t = n;
  }), resolve: t };
}, st = (t) => {
  const [{ animation$: e, initDone$: n, visible$: i, transition$: o, onShown$: s, onHidden$: r, onVisibleChange$: l, animationOnInit$: f }, d] = T(de, t, ue), { element$: v, directive: k } = _t(), H = m(() => !!v()), C = dt(l, [i], ([p]) => p), b = N(
    null
  ), $ = m(() => !!b()), h = () => {
    let p;
    return b.update((V) => (V == null || V.abort.abort(), p = V == null ? void 0 : V.context, null)), p;
  }, a = (p, V, W, R) => U(() => {
    const Y = new AbortController(), x = Y.signal, K = h() ?? {}, { promise: G, resolve: ft } = Ot(), Z = {
      abort: Y,
      animation: V,
      visible: p,
      context: K,
      element: W,
      transitionFn: R,
      promise: G
    };
    return b.set(Z), ft(
      (async () => {
        var vt;
        try {
          await R(W, p ? "show" : "hide", V, x, K);
        } finally {
          x.aborted ? await Dt : (b.set(null), (vt = (p ? s : r)()) == null || vt());
        }
      })()
    ), Z;
  }), c = m(() => !$() && C() && H()), g = m(() => !$() && !C()), u = m(() => n() ? e() : f()), y = N(null);
  let P, B = i(), S = null;
  const _ = At(
    [C, v, u, y, o, b],
    ([p, V, W, R, Y, x]) => {
      const K = P !== V;
      P = V;
      const G = B !== p;
      if (B = p, V) {
        n() == null && n.set(!0);
        const ft = R != null && x && x.animation != R;
        if (K || G || ft) {
          (G || R != null) && (S = null);
          const Z = R ?? (S == null ? void 0 : S.animation) ?? (K && !p ? !1 : W);
          x = a(p, Z, V, Y), S == null || S.resolve(x.promise), S = null;
        }
      } else
        K && (h(), x = null), (G || p && (S == null ? void 0 : S.animation) !== R) && (S = p && R != null ? {
          // toggle was called to display the element, but the element is not yet in the DOM
          // let's keep the animation setting from toggle and provide the promise for the end of toggle
          animation: R,
          ...Ot()
        } : null);
      return (S == null ? void 0 : S.promise) ?? (x == null ? void 0 : x.promise);
    }
  );
  let j = {};
  const F = async (p = !i(), V = u()) => {
    const W = {};
    j = W;
    try {
      await U(() => {
        try {
          return y.set(V), i.set(p), _();
        } finally {
          y.set(null);
        }
      });
    } finally {
      j !== W && await Dt;
    }
  }, I = bt(k, zt(d), ct(_));
  return {
    ...z({
      visible$: C,
      element$: v,
      elementPresent$: H,
      transitioning$: $,
      shown$: c,
      hidden$: g
    }),
    patch: d,
    directives: {
      directive: I
    },
    actions: {},
    api: {
      show: F.bind(null, !0),
      hide: F.bind(null, !1),
      toggle: F
    }
  };
}, ot = () => {
}, fe = (t) => !!t, me = (t, e = fe) => {
  let n;
  const i = new Promise((r) => n = r);
  let o = () => {
    s(), o = ot;
  }, s = ot;
  return s = t.subscribe((r) => {
    e(r) && (n(r), o());
  }), o === ot && s(), {
    promise: i,
    unsubscribe() {
      o();
    }
  };
}, Lt = (t, e) => {
  let n;
  const i = new Promise((r) => n = r);
  let o = () => {
    t.removeEventListener(e, s), o = ot;
  };
  const s = (r) => {
    r.target === t && (n(r), o());
  };
  return t.addEventListener(e, s), {
    promise: i,
    unsubscribe() {
      o();
    }
  };
}, pe = (t) => {
  let e;
  return {
    promise: new Promise((n) => {
      e = setTimeout(() => {
        e = void 0, n();
      }, t);
    }),
    unsubscribe() {
      e && (clearTimeout(e), e = void 0);
    }
  };
};
function rt(t = document.body) {
  t.getBoundingClientRect();
}
const M = (t, e) => {
  e && e.length > 0 && t.classList.add(...e);
}, E = (t, e) => {
  e && e.length > 0 && t.classList.remove(...e);
};
function he(t) {
  return window.getComputedStyle(t).transitionProperty !== "none";
}
function ge(t) {
  const { transitionDelay: e, transitionDuration: n } = window.getComputedStyle(t), i = parseFloat(e), o = parseFloat(n);
  return (i + o) * 1e3;
}
const be = () => {
}, Pt = (t) => async (e, n, i, o, s) => {
  const r = t(e, n, i, s) ?? be;
  if (i && he(e)) {
    const l = Lt(o, "abort"), f = Lt(e, "transitionend"), d = pe(ge(e));
    await Promise.race([l.promise, f.promise, d.promise]), l.unsubscribe(), f.unsubscribe(), d.unsubscribe();
  }
  o.aborted || r();
}, $e = ({
  animationPendingClasses: t,
  animationPendingShowClasses: e,
  animationPendingHideClasses: n,
  showClasses: i,
  hideClasses: o
}) => Pt((s, r, l, f) => {
  if (E(s, i), E(s, o), l) {
    if (E(s, r === "show" ? n : e), !f.started) {
      f.started = !0;
      const d = r === "show" ? o : i;
      M(s, d), rt(s), E(s, d);
    }
    M(s, t), rt(s), M(s, r === "show" ? e : n);
  }
  return () => {
    E(s, t), E(s, e), E(s, n), M(s, r === "show" ? i : o);
  };
}), Bt = ({ dimension: t = "height", showClasses: e, hideClasses: n, animationPendingClasses: i } = {}) => Pt((o, s, r, l) => {
  if (r) {
    let { maxSize: f, minSize: d } = l;
    f || (E(o, i), E(o, n), M(o, e), f = o.getBoundingClientRect()[t] + "px", l.maxSize = f), d || (E(o, i), E(o, e), M(o, n), d = o.getBoundingClientRect()[t] + "px", l.minSize = d), E(o, e), E(o, n);
    const v = s === "show" ? [d, f] : [f, d];
    o.style[t] = v[0], rt(o), M(o, i), rt(o), o.style[t] = v[1];
  } else
    E(o, s === "show" ? n : e);
  return () => {
    E(o, i), M(o, s === "show" ? e : n), o.style[t] = "";
  };
}), ve = {
  dimension: "height",
  hideClasses: ["collapse"],
  showClasses: ["collapse", "show"],
  animationPendingClasses: ["collapsing"]
}, Ce = {
  dimension: "width",
  hideClasses: ["collapse", "collapse-horizontal"],
  showClasses: ["collapse", "collapse-horizontal", "show"],
  animationPendingClasses: ["collapsing", "collapse-horizontal"]
}, Vt = Bt(ve), ye = Bt(Ce), at = $e({
  animationPendingClasses: ["fade"],
  animationPendingShowClasses: ["show"],
  showClasses: ["show"],
  hideClasses: ["d-none"]
}), Je = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  collapseHorizontalTransition: ye,
  collapseVerticalTransition: Vt,
  fadeTransition: at
}, Symbol.toStringTag, { value: "Module" }));
function Ie(t, e) {
  return Math.max(Math.min(t, e), 0);
}
const mt = () => {
}, Et = {
  rating: 0,
  tabindex: 0,
  maxRating: 10,
  disabled: !1,
  readonly: !1,
  resettable: !0,
  ariaValueTextFn: (t, e) => \`\${t} out of \${e}\`,
  onHover: mt,
  onLeave: mt,
  onRatingChange: mt,
  className: "",
  slotStar: ({ fill: t }) => String.fromCharCode(t === 100 ? 9733 : 9734),
  ariaLabel: "Rating",
  ariaLabelledBy: ""
};
function Ge() {
  return { ...Et };
}
const we = {
  rating: Q,
  tabindex: Q,
  maxRating: { normalizeValue: (t) => $t(t) ? Math.max(0, t) : X },
  disabled: A,
  readonly: A,
  resettable: A,
  ariaValueTextFn: D,
  onHover: D,
  onLeave: D,
  onRatingChange: D,
  className: w,
  ariaLabel: w,
  ariaLabelledBy: w
};
function Qe(t) {
  const [
    {
      // dirty inputs that need adjustment:
      rating$: e,
      tabindex$: n,
      // clean inputs with value validation:
      ariaValueTextFn$: i,
      onHover$: o,
      onLeave$: s,
      onRatingChange$: r,
      ...l
    },
    f
  ] = T(Et, t, we), { maxRating$: d, disabled$: v, readonly$: k, resettable$: H } = l, C = m(() => v() ? -1 : n()), b = dt(r, [e, d], ([u, y]) => Ie(u, y)), $ = N(0), h = m(() => !v() && !k()), a = m(() => {
    const u = b(), y = $();
    return y !== 0 ? y : u;
  }), c = m(() => i()(a(), d())), g = m(() => {
    const u = a();
    return Array.from({ length: d() }, (y, P) => ({
      fill: Math.round(Math.max(Math.min(u - P, 1), 0) * 100),
      index: P
    }));
  });
  return {
    ...z({
      ariaValueText$: c,
      isInteractive$: h,
      rating$: b,
      stars$: g,
      tabindex$: C,
      visibleRating$: a,
      ...l
    }),
    patch: f,
    actions: {
      click: (u) => {
        h() && u > 0 && u <= d() && f({ rating: b() === u && H() ? 0 : u });
      },
      hover: (u) => {
        h() && u > 0 && u <= d() && ($.set(u), o()(u));
      },
      leave: () => {
        h() && (s()($()), $.set(0));
      },
      handleKey(u) {
        if (h()) {
          const { key: y } = u;
          switch (y) {
            case "ArrowLeft":
            case "ArrowDown":
              f({ rating: b() - 1 });
              break;
            case "ArrowRight":
            case "ArrowUp":
              f({ rating: b() + 1 });
              break;
            case "Home":
            case "PageDown":
              f({ rating: 0 });
              break;
            case "End":
            case "PageUp":
              f({ rating: d() });
              break;
            default:
              return;
          }
          u.preventDefault(), u.stopPropagation();
        }
      }
    },
    directives: {},
    api: {}
  };
}
const Ft = {
  page: 1,
  collectionSize: 0,
  pageSize: 10,
  disabled: !1,
  directionLinks: !0,
  boundaryLinks: !1,
  size: null,
  onPageChange: O,
  pagesFactory: (t, e) => {
    const n = [];
    for (let i = 1; i <= e; i++)
      n.push(i);
    return n;
  },
  ariaLabel: "Page navigation",
  activeLabel: "(current)",
  ariaPageLabel: (t, e) => \`Page \${t} of \${e}\`,
  ariaFirstLabel: "Action link for first page",
  ariaPreviousLabel: "Action link for previous page",
  ariaNextLabel: "Action link for next page",
  ariaLastLabel: "Action link for last page",
  className: "",
  slotEllipsis: "…",
  slotFirst: "«",
  slotPrevious: "‹",
  slotNext: "›",
  slotLast: "»",
  slotPages: void 0,
  slotNumberLabel: ({ displayedPage: t }) => \`\${t}\`
};
function Xe() {
  return { ...Ft };
}
const Se = {
  page: Q,
  collectionSize: Q,
  pageSize: Q,
  disabled: A,
  directionLinks: A,
  boundaryLinks: A,
  size: { normalizeValue: (t) => t === "lg" || t === "sm" || t === null ? t : X },
  onPageChange: D,
  pagesFactory: D,
  ariaLabel: w,
  activeLabel: w,
  ariaPageLabel: D,
  ariaFirstLabel: w,
  ariaPreviousLabel: w,
  ariaNextLabel: w,
  ariaLastLabel: w,
  className: w
};
function Ye(t) {
  const [
    {
      // dirty inputs that need adjustment:
      page$: e,
      // clean inputs with value validation:
      collectionSize$: n,
      pageSize$: i,
      onPageChange$: o,
      pagesFactory$: s,
      ariaPageLabel$: r,
      ...l
    },
    f
  ] = T(Ft, t, Se), d = m(() => {
    let $ = Math.ceil(n() / i());
    return (!$t($) || $ < 1) && ($ = 1), $;
  }), v = dt(o, [e, d], ([$, h]) => le($, h, 1)), k = m(() => s()(v(), d())), H = m(() => v() === d() || l.disabled$()), C = m(() => v() === 1 || l.disabled$()), b = m(() => {
    const $ = r(), h = d();
    return k().map((a) => $(a, h));
  });
  return {
    ...z({
      pageCount$: d,
      page$: v,
      pages$: k,
      nextDisabled$: H,
      previousDisabled$: C,
      pagesLabel$: b,
      ...l
    }),
    patch: f,
    actions: {
      /**
       * Set the current page pageNumber (starting from 1)
       * @param pageNumber - Current page number to set.
       * Value is normalized between 1 and the number of page
       */
      select($) {
        f({ page: $ });
      },
      /**
       * Select the first page
       */
      first() {
        f({ page: 1 });
      },
      /**
       * Select the previous page
       */
      previous() {
        f({ page: v() - 1 });
      },
      /**
       * Select the next page
       */
      next() {
        f({ page: v() + 1 });
      },
      /**
       * Select the last page
       */
      last() {
        f({ page: d() });
      }
    },
    api: {
      isEllipsis($) {
        return $ === -1;
      }
    },
    directives: {}
  };
}
function De(t, e) {
  const i = (Math.ceil(t / e) - 1) * e, o = i + e;
  return [i, o];
}
function Oe(t, e, n, i, o) {
  n && (t > 0 && (t > 2 ? i.unshift(-1) : t === 2 && i.unshift(2), i.unshift(1)), e < o && (e < o - 2 ? i.push(-1) : e === o - 2 && i.push(o - 1), i.push(o)));
}
function Le(t, e, n) {
  let i = 0, o = n;
  const s = Math.floor(e / 2), r = e % 2 === 0 ? s - 1 : s;
  return t <= s ? o = e : n - t < s ? i = n - e : (i = t - s - 1, o = t + r), [i, o];
}
function Ze(t, e, n) {
  return function(i, o) {
    let s = [];
    for (let r = 1; r <= o; r++)
      s.push(r);
    if (t > 0 && o > t) {
      let r = 0, l = o;
      e ? [r, l] = Le(i, t, o) : [r, l] = De(i, t), s = s.slice(r, l), Oe(r, l, n, s, o);
    }
    return s;
  };
}
const nt = (t, e, n = 1 / 0) => {
  if (e !== void 0)
    if (typeof e == "object" && e && n >= 1)
      for (const i of Object.keys(e))
        t[i] = nt(t[i] ?? {}, e[i], n - 1);
    else
      return e;
  return t;
}, to = (t, e = pt) => {
  const n = N({}), i = e === pt ? t : m(() => e(nt({}, t == null ? void 0 : t(), 2)));
  return q(
    m(() => nt(nt({}, i == null ? void 0 : i(), 2), n(), 2)),
    {
      ...n,
      own$: n,
      adaptedParent$: i,
      parent$: t
    }
  );
}, Ae = () => {
  const t = Math.abs(window.innerWidth - document.documentElement.clientWidth), e = document.body, n = e.style, { overflow: i, paddingRight: o } = n;
  if (t > 0) {
    const s = parseFloat(window.getComputedStyle(e).paddingRight);
    n.paddingRight = \`\${s + t}px\`;
  }
  return n.overflow = "hidden", () => {
    t > 0 && (n.paddingRight = o), n.overflow = i;
  };
};
let lt = O;
const ke = () => {
  lt(), lt = Ae();
}, He = () => {
  lt(), lt = O;
}, Pe = Symbol(), Be = Symbol(), xt = {
  animation: !0,
  ariaCloseButtonLabel: "Close",
  backdrop: !0,
  backdropClass: "",
  backdropTransition: at,
  // TODO: is it ok to depend on bootstrap transition?
  closeButton: !0,
  closeOnOutsideClick: !0,
  container: typeof window < "u" ? document.body : null,
  modalClass: "",
  modalTransition: at,
  // TODO: is it ok to depend on bootstrap transition?
  onBeforeClose: O,
  onVisibleChange: O,
  onHidden: O,
  onShown: O,
  slotDefault: void 0,
  slotFooter: void 0,
  slotHeader: void 0,
  slotStructure: void 0,
  slotTitle: void 0,
  visible: !1
};
function eo() {
  return { ...xt };
}
const Rt = gt(), Ve = m(() => Rt().length > 0), Ee = m(() => {
  Ve() ? ke() : He();
}), Fe = m(() => {
  Ee();
}), oo = (t) => {
  const [
    {
      animation$: e,
      backdrop$: n,
      backdropTransition$: i,
      closeOnOutsideClick$: o,
      container$: s,
      modalTransition$: r,
      onBeforeClose$: l,
      onVisibleChange$: f,
      onHidden$: d,
      onShown$: v,
      visible$: k,
      ...H
    },
    C
  ] = T(xt, t), b = st({
    transition: r,
    visible: k,
    animation: e,
    animationOnInit: e,
    onVisibleChange: f,
    // TODO: for onHidden and onShown, should we combine with information from the backdrop transition?
    // (especially in case one of the two transitions takes more time than the other)
    onHidden: d,
    onShown: v
  }), $ = b.stores.visible$, h = st({
    transition: i,
    visible: k,
    animation: e,
    animationOnInit: e
  }), a = m(() => b.stores.transitioning$() || n() && h.stores.transitioning$()), c = m(() => !a() && !$()), g = m(() => !n() || c());
  let u;
  const y = (F) => {
    u = F;
    const I = {
      get result() {
        return u;
      },
      set result(p) {
        u = p;
      },
      cancel: !1
    };
    l()(I), !I.cancel && C({ visible: !1 });
  }, P = ht(
    St,
    m(() => ({ container: s() }))
  ), B = ht(
    St,
    m(() => {
      var F;
      return {
        container: s(),
        insertBefore: s() && ((F = b.stores.element$()) == null ? void 0 : F.parentElement) === s() ? b.stores.element$() : void 0
      };
    })
  ), S = J(void 0, () => Rt.register(j)), _ = m(() => {
    b.stores.elementPresent$() && !c() && S(), Fe();
  }), j = {
    ...z({
      backdropHidden$: g,
      container$: s,
      hidden$: c,
      transitioning$: a,
      visible$: $,
      modalElement$: b.stores.element$,
      ...H
    }),
    directives: {
      modalPortalDirective: P,
      backdropPortalDirective: B,
      backdropDirective: it(h.directives.directive),
      modalDirective: bt(it(b.directives.directive), ie, ct(_))
    },
    patch: C,
    api: {
      close: y,
      async open() {
        return C({ visible: !0 }), await me(c).promise, u;
      },
      patch: C
    },
    actions: {
      modalClick(F) {
        F.currentTarget === F.target && o() && y(Pe);
      },
      closeButtonClick(F) {
        y(Be);
      }
    }
  };
  return j;
}, Nt = {
  visible: !0,
  dismissible: !0,
  type: "primary",
  ariaCloseButtonLabel: "Close",
  onVisibleChange: O,
  onShown: O,
  onHidden: O,
  slotStructure: void 0,
  slotDefault: void 0,
  animation: !0,
  animationOnInit: !1,
  transition: at
};
function no() {
  return { ...Nt };
}
const xe = {
  dismissible: A,
  type: w
};
function io(t) {
  const [
    {
      transition$: e,
      animationOnInit$: n,
      animation$: i,
      visible$: o,
      onVisibleChange$: s,
      onHidden$: r,
      onShown$: l,
      ...f
    },
    d
  ] = T(Nt, t, xe), v = st({
    transition: e,
    visible: o,
    animation: i,
    animationOnInit: n,
    onVisibleChange: s,
    onHidden: r,
    onShown: l
  }), k = () => {
    d({ visible: !1 });
  }, H = () => {
    d({ visible: !0 });
  }, C = v.stores.visible$, b = v.stores.hidden$;
  return {
    ...z({ ...f, visible$: C, hidden$: b }),
    patch: d,
    api: {
      open: H,
      close: k
    },
    directives: {
      transitionDirective: it(v.directives.directive)
    },
    actions: {}
  };
}
let Re = 0;
function Ne() {
  return \`accordion-item-\${Re++}\`;
}
function Me(t, e, n) {
  if (e.length == 2) {
    n = n ?? e[0];
    const i = e.find((o) => o !== n);
    t.forEach((o) => {
      o.state$().itemId !== i && !o.state$().itemCollapsed && o.patch({ itemCollapsed: !0 });
    });
  } else if (e.length > 2) {
    const i = e[0];
    t.forEach((o) => {
      o.state$().itemId !== i && !o.state$().itemCollapsed && o.patch({ itemCollapsed: !0 });
    });
  }
  return t;
}
function tt(t, e) {
  return t.find((n) => n.state$().itemId === e);
}
const L = {
  closeOthers: !1,
  onShown: O,
  onHidden: O,
  accordionClass: "",
  itemId: "",
  itemDestroyOnHide: !1,
  itemDisabled: !1,
  itemCollapsed: !0,
  itemAnimation: !0,
  itemTransition: Vt,
  onItemShown: O,
  onItemHidden: O,
  onItemCollapsedChange: O,
  slotItemStructure: void 0,
  slotItemBody: void 0,
  slotItemHeader: void 0,
  itemClass: "",
  itemHeaderClass: "",
  itemButtonClass: "",
  itemCollapseClass: "",
  itemBodyClass: ""
}, Te = {
  itemId: L.itemId,
  itemDestroyOnHide: L.itemDestroyOnHide,
  itemDisabled: L.itemDisabled,
  itemCollapsed: L.itemCollapsed,
  itemAnimation: L.itemAnimation,
  itemTransition: L.itemTransition,
  onItemShown: L.onItemShown,
  onItemHidden: L.onItemHidden,
  onItemCollapsedChange: L.onItemCollapsedChange,
  slotItemStructure: L.slotItemStructure,
  slotItemBody: L.slotItemBody,
  slotItemHeader: L.slotItemHeader,
  itemClass: L.itemClass,
  itemHeaderClass: L.itemHeaderClass,
  itemButtonClass: L.itemButtonClass,
  itemCollapseClass: L.itemCollapseClass,
  itemBodyClass: L.itemBodyClass
};
function so() {
  return { ...L };
}
const ze = {
  closeOthers: A,
  onShown: D,
  onHidden: D,
  itemId: w,
  itemDestroyOnHide: A,
  itemDisabled: A,
  itemCollapsed: A,
  itemAnimation: A,
  itemTransition: D,
  onItemShown: D,
  onItemHidden: D,
  onItemCollapsedChange: D,
  itemClass: w,
  itemHeaderClass: w,
  itemButtonClass: w,
  itemCollapseClass: w,
  itemBodyClass: w
}, _e = {
  itemId: w,
  itemDestroyOnHide: A,
  itemDisabled: A,
  itemCollapsed: A,
  itemAnimation: A,
  itemTransition: D,
  onItemShown: D,
  onItemHidden: D,
  onItemCollapsedChange: D,
  itemClass: w,
  itemHeaderClass: w,
  itemButtonClass: w,
  itemCollapseClass: w,
  itemBodyClass: w
};
function je(t, e, n) {
  const [
    {
      itemAnimation$: i,
      itemTransition$: o,
      itemDestroyOnHide$: s,
      onItemShown$: r,
      onItemHidden$: l,
      onItemCollapsedChange$: f,
      itemCollapsed$: d,
      itemId$: v,
      itemDisabled$: k,
      ...H
    },
    C
  ] = T(Te, n, _e), b = N(!1), $ = dt(J(O), [v], ([c]) => c || Ne()), h = m(() => s() === !1 || !a.state$().hidden), a = st({
    transition: o,
    visible: m(() => {
      const c = d();
      return f()(c), !c;
    }),
    animation: i,
    animationOnInit: !1,
    initDone: b,
    onHidden: () => {
      e()($()), l()();
    },
    onShown: () => {
      t()($()), r()();
    }
  });
  return {
    ...z({
      itemCollapsed$: d,
      itemId$: $,
      shouldBeInDOM$: h,
      itemDisabled$: k,
      ...H
    }),
    patch: C,
    actions: {
      click: () => {
        k() || d.update((c) => !c);
      }
    },
    api: {
      initDone: () => {
        b.set(!0);
      },
      collapse: () => {
        d.set(!0);
      },
      expand: () => {
        d.set(!1);
      },
      toggle: () => {
        d.update((c) => !c);
      }
    },
    directives: { collapseDirective: it(a.directives.directive), accordionItemDirective: O }
  };
}
function ro(t) {
  const [
    {
      closeOthers$: e,
      onShown$: n,
      onHidden$: i,
      itemId$: o,
      itemAnimation$: s,
      itemClass$: r,
      itemDisabled$: l,
      itemCollapsed$: f,
      itemTransition$: d,
      itemDestroyOnHide$: v,
      itemBodyClass$: k,
      itemButtonClass$: H,
      itemCollapseClass$: C,
      itemHeaderClass$: b,
      onItemCollapsedChange$: $,
      onItemHidden$: h,
      onItemShown$: a,
      slotItemStructure$: c,
      slotItemBody$: g,
      slotItemHeader$: u,
      ...y
    },
    P
  ] = T(L, t, ze), B = gt(), S = m(() => {
    const I = [];
    return B().forEach((p) => {
      p.state$().itemCollapsed || I.push(p.state$().itemId);
    }), I;
  }), _ = N(S()[0]), j = m(() => {
    e() ? (Me(B(), S(), _()), _.set(S()[0])) : B();
  }), F = m(() => {
    j();
  });
  return {
    ...z({ itemsWidget$: B, ...y }),
    patch: P,
    actions: {},
    api: {
      isExpanded: (I) => {
        const p = tt(B(), I);
        return p ? !p.state$().itemCollapsed : !1;
      },
      expand: (I) => {
        var p;
        (p = tt(B(), I)) == null || p.api.expand();
      },
      collapse: (I) => {
        var p;
        (p = tt(B(), I)) == null || p.api.collapse();
      },
      toggle: (I) => {
        var p;
        (p = tt(B(), I)) == null || p.api.toggle();
      },
      expandAll: () => {
        B().forEach((I) => I.api.expand());
      },
      collapseAll: () => {
        B().forEach((I) => I.api.collapse());
      },
      registerItem: (I) => {
        const p = je(
          n,
          i,
          m(() => ({
            itemId: o(),
            itemClass: r(),
            itemAnimation: s(),
            itemDisabled: l(),
            itemCollapsed: f(),
            itemTransition: d(),
            itemDestroyOnHide: v(),
            itemBodyClass: k(),
            itemButtonClass: H(),
            itemCollapseClass: C(),
            itemHeaderClass: b(),
            onItemCollapsedChange: $(),
            onItemHidden: h(),
            onItemShown: a(),
            slotItemStructure: c(),
            slotItemBody: g(),
            slotItemHeader: u(),
            ...I == null ? void 0 : I()
          }))
        );
        return p.directives.accordionItemDirective = () => ({ destroy: B.register(p) }), p;
      }
    },
    directives: { accordionDirective: ct(F) }
  };
}
export {
  X as INVALID_VALUE,
  jt as activeElement$,
  ht as bindDirective,
  it as bindDirectiveNoArg,
  dt as bindableDerived,
  Je as bootstrap,
  ro as createAccordion,
  io as createAlert,
  Pt as createCSSTransition,
  Wt as createHasFocus,
  oo as createModal,
  Ye as createPagination,
  Ut as createPatch,
  Qe as createRating,
  Ke as createSelect,
  $e as createSimpleClassTransition,
  Ht as createStoreArrayDirective,
  _t as createStoreDirective,
  st as createTransition,
  to as createWidgetsConfig,
  ct as directiveSubscribe,
  zt as directiveUpdate,
  qe as findChangedProperties,
  so as getAccordionDefaultConfig,
  no as getAlertDefaultConfig,
  eo as getModalDefaultConfig,
  Xe as getPaginationDefaultConfig,
  Ge as getRatingDefaultConfig,
  ge as getTransitionDurationMs,
  he as hasTransition,
  bt as mergeDirectives,
  nt as mergeInto,
  Be as modalCloseButtonClick,
  Pe as modalOutsideClick,
  Ze as ngBootstrapPagination,
  ce as noAnimation,
  St as portal,
  gt as registrationArray,
  ie as sliblingsInert,
  z as stateStores,
  ut as testToNormalizeValue,
  Ue as toSlotContextWidget,
  A as typeBoolean,
  D as typeFunction,
  Q as typeNumber,
  w as typeString,
  Kt as writableWithDefault,
  T as writablesForProps,
  Jt as writablesWithDefault
};
`;export{n as default};
