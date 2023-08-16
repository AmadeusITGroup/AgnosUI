const n=`import { readable as X, writable as N, asReadable as q, batch as U, computed as f, get as Mt, derived as At } from "@amadeus-it-group/tansu";
const Ue = (t) => ({
  actions: t.actions,
  api: t.api,
  directives: t.directives,
  state$: t.state$,
  stores: t.stores
}), L = () => {
}, mt = (t) => t, pt = (t, e) => (i) => {
  let n = !0, o;
  const s = e.subscribe((r) => {
    var l;
    n ? (n = !1, o = t(i, r)) : (l = o == null ? void 0 : o.update) == null || l.call(o, r);
  });
  return {
    destroy() {
      var r;
      (r = o == null ? void 0 : o.destroy) == null || r.call(o), s();
    }
  };
}, Tt = X(void 0), nt = (t) => pt(t, Tt), ct = (t, e = !0) => () => {
  const i = t.subscribe(L);
  return {
    destroy: async () => {
      e && await 0, i();
    }
  };
}, zt = (t) => (e, i) => (t(i), {
  update: t
}), kt = { equal: Object.is }, ht = () => {
  const t = N([], kt);
  return q(t, {
    /**
     * Add the given element to the array.
     * @param element - Element to be added to the array.
     * @returns A function to remove the element from the array.
     */
    register: (e) => {
      let i = !1;
      return t.update((n) => [...n, e]), () => {
        i || (i = !0, t.update((n) => {
          const o = n.indexOf(e);
          if (o > -1) {
            const s = [...n];
            return s.splice(o, 1), s;
          }
          return n;
        }));
      };
    }
  });
}, Ht = () => {
  const t = ht();
  return {
    elements$: q(t),
    directive: (e) => ({ destroy: t.register(e) })
  };
}, _t = () => {
  const t = N(null, kt);
  return {
    element$: q(t),
    directive: (e) => {
      let i = !1;
      return t.update((n) => n ? (console.error("The directive cannot be used on multiple elements.", n, e), n) : (i = !0, e)), i ? {
        destroy() {
          t.update((n) => e === n ? null : n);
        }
      } : void 0;
    }
  };
}, gt = (...t) => (e, i) => {
  const n = U(() => t.map((o) => o(e, i)));
  return {
    update(o) {
      U(() => n.forEach((s) => {
        var r;
        return (r = s == null ? void 0 : s.update) == null ? void 0 : r.call(s, o);
      }));
    },
    destroy() {
      U(() => n.reverse().forEach((o) => {
        var s;
        return (s = o == null ? void 0 : o.destroy) == null ? void 0 : s.call(o);
      }));
    }
  };
}, Ct = "focusin", yt = "focusout", jt = X(null, {
  onUse({ set: t }) {
    function e() {
      t(document.activeElement);
    }
    e();
    const i = document.documentElement;
    function n() {
      setTimeout(e);
    }
    return i.addEventListener(Ct, e), i.addEventListener(yt, n), () => {
      i.removeEventListener(Ct, e), i.removeEventListener(yt, n);
    };
  },
  equal: Object.is
});
function Wt() {
  const { elements$: t, directive: e } = Ht(), i = f(() => {
    const n = jt();
    if (!n)
      return !1;
    for (const o of t())
      if (o === n || o.contains(n))
        return !0;
    return !1;
  });
  return {
    directive: e,
    hasFocus$: i
  };
}
function Ut(t) {
  return function(e) {
    U(() => {
      var i;
      for (const [n, o] of Object.entries(e ?? {}))
        (i = t[\`\${n}$\`]) == null || i.set(o);
    });
  };
}
function qe(t, e) {
  if (t === e)
    return null;
  let i = !1;
  const n = {}, o = /* @__PURE__ */ new Set([...Object.keys(t), ...Object.keys(e)]);
  for (const s of o) {
    const r = e[s];
    t[s] !== r && (n[s] = r, i = !0);
  }
  return i ? n : null;
}
const qt = function(t) {
  this.set(t(this()));
}, Q = Symbol();
function Kt(t, e = X(void 0), { normalizeValue: i = mt, equal: n = Object.is } = {}) {
  const o = N(void 0), s = f(
    () => {
      const r = e(), l = r === void 0 ? void 0 : i(r);
      return l === Q ? (console.error("Not using invalid value from default config", r), t) : l === void 0 ? t : l;
    },
    { equal: n }
  );
  return q(
    f(
      () => {
        const r = o();
        return r !== void 0 ? r : s();
      },
      { equal: n }
    ),
    {
      set(r) {
        const l = r === void 0 ? void 0 : i(r);
        l === Q ? console.error("Not setting invalid value", r) : o.set(l);
      },
      update: qt
    }
  );
}
const It = (t) => !!(t && typeof t == "function" && "subscribe" in t), Jt = (t, e, i) => {
  const n = {}, o = It(e);
  for (const s of Object.keys(t)) {
    let r = o ? f(() => e()[s]) : void 0;
    if (!o && e) {
      const l = e[s];
      r = It(l) ? l : X(l);
    }
    n[\`\${s}$\`] = Kt(t[s], r, i == null ? void 0 : i[s]);
  }
  return n;
}, T = (t, e, i) => {
  const n = Jt(t, e, i);
  return [n, Ut(n)];
}, z = (t) => {
  const e = [], i = [], n = {};
  for (const o of Object.keys(t))
    if (o.endsWith("$")) {
      const s = t[o];
      e.push(o.substring(0, o.length - 1)), i.push(s), n[o] = q(s);
    }
  return {
    stores: n,
    state$: f(() => {
      const o = i.map(Mt), s = {};
      return e.forEach((r, l) => {
        s[r] = o[l];
      }), s;
    })
  };
}, bt = (t, e, i) => {
  let n = e[0]();
  return At(e, (o) => {
    const s = i(o), r = s !== o[0];
    return r && e[0].set(s), (r || s !== n) && (n = s, t()(s)), s;
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
  const [{ opened$: e, items$: i, itemId$: n, matchFn$: o, onFilterTextChange$: s, ...r }, l] = T(
    Xt,
    t
  ), { selected$: u, filterText$: c } = r, { hasFocus$: $, directive: k } = Wt(), H = f(() => {
    const a = e(), m = $();
    return !m && a && e.set(!1), a && m;
  }), C = function() {
    const a = N(0), m = q(a, {
      set(g) {
        const { length: d } = b();
        g != null && (d ? g < 0 ? g = d - 1 : g >= d && (g = 0) : g = void 0), a.set(g);
      },
      update(g) {
        m.set(g(a()));
      }
    });
    return m;
  }(), b = f(() => {
    const a = [];
    if (H()) {
      const m = u(), g = c(), d = g ? o() : () => !0, y = n();
      for (const P of i())
        d(P, g) && a.push({
          item: P,
          id: y(P),
          selected: m.includes(P),
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
  }), v = f(() => {
    const a = b(), m = C();
    return a.length && m != null ? a[m] : void 0;
  }), h = {
    ...z({
      visible$: b,
      highlighted$: v,
      opened$: H,
      ...r
    }),
    patch: l,
    api: {
      clear() {
        u.set([]);
      },
      select(a) {
        h.api.toggleItem(a, !0);
      },
      unselect(a) {
        h.api.toggleItem(a, !1);
      },
      toggleItem(a, m) {
        i().includes(a) && u.update((g) => {
          g = [...g];
          const d = g.indexOf(a);
          return m == null && (m = d === -1), m && d === -1 ? g.push(a) : !m && d !== -1 && g.splice(d, 1), g;
        });
      },
      clearText() {
      },
      highlight(a) {
        const m = b().findIndex((g) => g.item === a);
        C.set(m === -1 ? void 0 : m);
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
        e.update((m) => a ?? !m);
      }
    },
    directives: {
      hasFocusDirective: k
    },
    actions: {
      onInput({ target: a }) {
        const m = a.value;
        U(() => {
          var g;
          l({
            opened: m != null && m !== "",
            filterText: m
          }), (g = s()) == null || g(m);
        });
      },
      onInputKeydown(a) {
        const { ctrlKey: m, key: g } = a;
        let d = !0;
        switch (g) {
          case "ArrowDown": {
            H() ? m ? h.api.highlightLast() : h.api.highlightNext() : (h.api.open(), h.api.highlightFirst());
            break;
          }
          case "ArrowUp":
            m ? h.api.highlightFirst() : h.api.highlightPrevious();
            break;
          case "Enter": {
            const y = v();
            y && h.api.toggleItem(y.item);
            break;
          }
          case "Escape":
            e.set(!1);
            break;
          default:
            d = !1;
        }
        d && a.preventDefault();
      }
    }
  };
  return h;
}
const Yt = (t) => {
  const e = /* @__PURE__ */ new Map(), i = (n) => {
    const o = n.parentElement;
    o && n !== document.body && (Array.from(o.children).forEach((s) => {
      s !== n && s.nodeName !== "SCRIPT" && (e.set(s, s.hasAttribute("inert")), s.toggleAttribute("inert", !0));
    }), i(o));
  };
  return i(t), () => e.forEach((n, o) => {
    o.toggleAttribute("inert", n);
  });
};
let wt = L;
const Zt = (t) => {
  wt(), wt = t ? Yt(t) : L;
}, { directive: te, elements$: ee } = Ht(), oe = f(
  () => {
    const t = ee();
    return t[t.length - 1];
  },
  { equal: Object.is }
), ie = f(() => Zt(oe())), ne = gt(te, ct(ie)), St = (t, e) => {
  let i, n;
  const o = () => {
    var r;
    n && ((r = n.parentNode) == null || r.replaceChild(t, n), n = null);
  }, s = (r) => {
    var l, u;
    if (r !== i) {
      i = r;
      const c = (i == null ? void 0 : i.container) ?? ((l = i == null ? void 0 : i.insertBefore) == null ? void 0 : l.parentElement);
      c ? (n || (n = (u = t.parentNode) == null ? void 0 : u.insertBefore(t.ownerDocument.createComment("portal"), t)), c.insertBefore(t, (i == null ? void 0 : i.insertBefore) ?? null)) : o();
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
function le(t, e, i = 0) {
  return Math.max(Math.min(t, e), i);
}
const dt = (t) => (e) => t(e) ? e : Q, G = {
  normalizeValue: dt($t)
}, A = {
  normalizeValue: dt(se)
}, w = {
  normalizeValue: dt(ae)
}, D = {
  normalizeValue: dt(re),
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
  return { promise: new Promise((i) => {
    t = i;
  }), resolve: t };
}, st = (t) => {
  const [{ animation$: e, initDone$: i, visible$: n, transition$: o, onShown$: s, onHidden$: r, onVisibleChange$: l, animationOnInit$: u }, c] = T(de, t, ue), { element$: $, directive: k } = _t(), H = f(() => !!$()), C = bt(l, [n], ([p]) => p), b = N(
    null
  ), v = f(() => !!b()), h = () => {
    let p;
    return b.update((V) => (V == null || V.abort.abort(), p = V == null ? void 0 : V.context, null)), p;
  }, a = (p, V, W, R) => U(() => {
    const Y = new AbortController(), x = Y.signal, K = h() ?? {}, { promise: J, resolve: ut } = Ot(), Z = {
      abort: Y,
      animation: V,
      visible: p,
      context: K,
      element: W,
      transitionFn: R,
      promise: J
    };
    return b.set(Z), ut(
      (async () => {
        var vt;
        try {
          await R(W, p ? "show" : "hide", V, x, K);
        } finally {
          x.aborted ? await Dt : (b.set(null), (vt = (p ? s : r)()) == null || vt());
        }
      })()
    ), Z;
  }), m = f(() => !v() && C() && H()), g = f(() => !v() && !C()), d = f(() => i() ? e() : u()), y = N(null);
  let P, B = n(), S = null;
  const _ = At(
    [C, $, d, y, o, b],
    ([p, V, W, R, Y, x]) => {
      const K = P !== V;
      P = V;
      const J = B !== p;
      if (B = p, V) {
        i() == null && i.set(!0);
        const ut = R != null && x && x.animation != R;
        if (K || J || ut) {
          (J || R != null) && (S = null);
          const Z = R ?? (S == null ? void 0 : S.animation) ?? (K && !p ? !1 : W);
          x = a(p, Z, V, Y), S == null || S.resolve(x.promise), S = null;
        }
      } else
        K && (h(), x = null), (J || p && (S == null ? void 0 : S.animation) !== R) && (S = p && R != null ? {
          // toggle was called to display the element, but the element is not yet in the DOM
          // let's keep the animation setting from toggle and provide the promise for the end of toggle
          animation: R,
          ...Ot()
        } : null);
      return (S == null ? void 0 : S.promise) ?? (x == null ? void 0 : x.promise);
    }
  );
  let j = {};
  const F = async (p = !n(), V = d()) => {
    const W = {};
    j = W;
    try {
      await U(() => {
        try {
          return y.set(V), n.set(p), _();
        } finally {
          y.set(null);
        }
      });
    } finally {
      j !== W && await Dt;
    }
  }, I = gt(k, zt(c), ct(_));
  return {
    ...z({
      visible$: C,
      element$: $,
      elementPresent$: H,
      transitioning$: v,
      shown$: m,
      hidden$: g
    }),
    patch: c,
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
  let i;
  const n = new Promise((r) => i = r);
  let o = () => {
    s(), o = ot;
  }, s = ot;
  return s = t.subscribe((r) => {
    e(r) && (i(r), o());
  }), o === ot && s(), {
    promise: n,
    unsubscribe() {
      o();
    }
  };
}, Lt = (t, e) => {
  let i;
  const n = new Promise((r) => i = r);
  let o = () => {
    t.removeEventListener(e, s), o = ot;
  };
  const s = (r) => {
    r.target === t && (i(r), o());
  };
  return t.addEventListener(e, s), {
    promise: n,
    unsubscribe() {
      o();
    }
  };
}, pe = (t) => {
  let e;
  return {
    promise: new Promise((i) => {
      e = setTimeout(() => {
        e = void 0, i();
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
  const { transitionDelay: e, transitionDuration: i } = window.getComputedStyle(t), n = parseFloat(e), o = parseFloat(i);
  return (n + o) * 1e3;
}
const be = () => {
}, Pt = (t) => async (e, i, n, o, s) => {
  const r = t(e, i, n, s) ?? be;
  if (n && he(e)) {
    const l = Lt(o, "abort"), u = Lt(e, "transitionend"), c = pe(ge(e));
    await Promise.race([l.promise, u.promise, c.promise]), l.unsubscribe(), u.unsubscribe(), c.unsubscribe();
  }
  o.aborted || r();
}, $e = ({
  animationPendingClasses: t,
  animationPendingShowClasses: e,
  animationPendingHideClasses: i,
  showClasses: n,
  hideClasses: o
}) => Pt((s, r, l, u) => {
  if (E(s, n), E(s, o), l) {
    if (E(s, r === "show" ? i : e), !u.started) {
      u.started = !0;
      const c = r === "show" ? o : n;
      M(s, c), rt(s), E(s, c);
    }
    M(s, t), rt(s), M(s, r === "show" ? e : i);
  }
  return () => {
    E(s, t), E(s, e), E(s, i), M(s, r === "show" ? n : o);
  };
}), Bt = ({ dimension: t = "height", showClasses: e, hideClasses: i, animationPendingClasses: n } = {}) => Pt((o, s, r, l) => {
  if (r) {
    let { maxSize: u, minSize: c } = l;
    u || (E(o, n), E(o, i), M(o, e), u = o.getBoundingClientRect()[t] + "px", l.maxSize = u), c || (E(o, n), E(o, e), M(o, i), c = o.getBoundingClientRect()[t] + "px", l.minSize = c), E(o, e), E(o, i);
    const $ = s === "show" ? [c, u] : [u, c];
    o.style[t] = $[0], rt(o), M(o, n), rt(o), o.style[t] = $[1];
  } else
    E(o, s === "show" ? i : e);
  return () => {
    E(o, n), M(o, s === "show" ? e : i), o.style[t] = "";
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
const ft = () => {
}, Et = {
  rating: 0,
  tabindex: 0,
  maxRating: 10,
  disabled: !1,
  readonly: !1,
  resettable: !0,
  ariaValueTextFn: (t, e) => \`\${t} out of \${e}\`,
  onHover: ft,
  onLeave: ft,
  onRatingChange: ft,
  className: "",
  slotStar: ({ fill: t }) => String.fromCharCode(t === 100 ? 9733 : 9734),
  ariaLabel: "Rating",
  ariaLabelledBy: ""
};
function Ge() {
  return { ...Et };
}
const we = {
  rating: G,
  tabindex: G,
  maxRating: { normalizeValue: (t) => $t(t) ? Math.max(0, t) : Q },
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
      tabindex$: i,
      // clean inputs with value validation:
      ariaValueTextFn$: n,
      onHover$: o,
      onLeave$: s,
      onRatingChange$: r,
      ...l
    },
    u
  ] = T(Et, t, we), { maxRating$: c, disabled$: $, readonly$: k, resettable$: H } = l, C = f(() => $() ? -1 : i()), b = bt(r, [e, c], ([d, y]) => Ie(d, y)), v = N(0), h = f(() => !$() && !k()), a = f(() => {
    const d = b(), y = v();
    return y !== 0 ? y : d;
  }), m = f(() => n()(a(), c())), g = f(() => {
    const d = a();
    return Array.from({ length: c() }, (y, P) => ({
      fill: Math.round(Math.max(Math.min(d - P, 1), 0) * 100),
      index: P
    }));
  });
  return {
    ...z({
      ariaValueText$: m,
      isInteractive$: h,
      rating$: b,
      stars$: g,
      tabindex$: C,
      visibleRating$: a,
      ...l
    }),
    patch: u,
    actions: {
      click: (d) => {
        h() && d > 0 && d <= c() && u({ rating: b() === d && H() ? 0 : d });
      },
      hover: (d) => {
        h() && d > 0 && d <= c() && (v.set(d), o()(d));
      },
      leave: () => {
        h() && (s()(v()), v.set(0));
      },
      handleKey(d) {
        if (h()) {
          const { key: y } = d;
          switch (y) {
            case "ArrowLeft":
            case "ArrowDown":
              u({ rating: b() - 1 });
              break;
            case "ArrowRight":
            case "ArrowUp":
              u({ rating: b() + 1 });
              break;
            case "Home":
            case "PageDown":
              u({ rating: 0 });
              break;
            case "End":
            case "PageUp":
              u({ rating: c() });
              break;
            default:
              return;
          }
          d.preventDefault(), d.stopPropagation();
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
  onPageChange: L,
  pagesFactory: (t, e) => {
    const i = [];
    for (let n = 1; n <= e; n++)
      i.push(n);
    return i;
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
  page: G,
  collectionSize: G,
  pageSize: G,
  disabled: A,
  directionLinks: A,
  boundaryLinks: A,
  size: { normalizeValue: (t) => t === "lg" || t === "sm" || t === null ? t : Q },
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
      collectionSize$: i,
      pageSize$: n,
      onPageChange$: o,
      pagesFactory$: s,
      ariaPageLabel$: r,
      ...l
    },
    u
  ] = T(Ft, t, Se), c = f(() => {
    let v = Math.ceil(i() / n());
    return (!$t(v) || v < 1) && (v = 1), v;
  }), $ = bt(o, [e, c], ([v, h]) => le(v, h, 1)), k = f(() => s()($(), c())), H = f(() => $() === c() || l.disabled$()), C = f(() => $() === 1 || l.disabled$()), b = f(() => {
    const v = r(), h = c();
    return k().map((a) => v(a, h));
  });
  return {
    ...z({
      pageCount$: c,
      page$: $,
      pages$: k,
      nextDisabled$: H,
      previousDisabled$: C,
      pagesLabel$: b,
      ...l
    }),
    patch: u,
    actions: {
      /**
       * Set the current page pageNumber (starting from 1)
       * @param pageNumber - Current page number to set.
       * Value is normalized between 1 and the number of page
       */
      select(v) {
        u({ page: v });
      },
      /**
       * Select the first page
       */
      first() {
        u({ page: 1 });
      },
      /**
       * Select the previous page
       */
      previous() {
        u({ page: $() - 1 });
      },
      /**
       * Select the next page
       */
      next() {
        u({ page: $() + 1 });
      },
      /**
       * Select the last page
       */
      last() {
        u({ page: c() });
      }
    },
    api: {
      isEllipsis(v) {
        return v === -1;
      }
    },
    directives: {}
  };
}
function De(t, e) {
  const n = (Math.ceil(t / e) - 1) * e, o = n + e;
  return [n, o];
}
function Oe(t, e, i, n, o) {
  i && (t > 0 && (t > 2 ? n.unshift(-1) : t === 2 && n.unshift(2), n.unshift(1)), e < o && (e < o - 2 ? n.push(-1) : e === o - 2 && n.push(o - 1), n.push(o)));
}
function Le(t, e, i) {
  let n = 0, o = i;
  const s = Math.floor(e / 2), r = e % 2 === 0 ? s - 1 : s;
  return t <= s ? o = e : i - t < s ? n = i - e : (n = t - s - 1, o = t + r), [n, o];
}
function Ze(t, e, i) {
  return function(n, o) {
    let s = [];
    for (let r = 1; r <= o; r++)
      s.push(r);
    if (t > 0 && o > t) {
      let r = 0, l = o;
      e ? [r, l] = Le(n, t, o) : [r, l] = De(n, t), s = s.slice(r, l), Oe(r, l, i, s, o);
    }
    return s;
  };
}
const it = (t, e, i = 1 / 0) => {
  if (e !== void 0)
    if (typeof e == "object" && e && i >= 1)
      for (const n of Object.keys(e))
        t[n] = it(t[n] ?? {}, e[n], i - 1);
    else
      return e;
  return t;
}, to = (t, e = mt) => {
  const i = N({}), n = e === mt ? t : f(() => e(it({}, t == null ? void 0 : t(), 2)));
  return q(
    f(() => it(it({}, n == null ? void 0 : n(), 2), i(), 2)),
    {
      ...i,
      own$: i,
      adaptedParent$: n,
      parent$: t
    }
  );
}, Ae = () => {
  const t = Math.abs(window.innerWidth - document.documentElement.clientWidth), e = document.body, i = e.style, { overflow: n, paddingRight: o } = i;
  if (t > 0) {
    const s = parseFloat(window.getComputedStyle(e).paddingRight);
    i.paddingRight = \`\${s + t}px\`;
  }
  return i.overflow = "hidden", () => {
    t > 0 && (i.paddingRight = o), i.overflow = n;
  };
};
let lt = L;
const ke = () => {
  lt(), lt = Ae();
}, He = () => {
  lt(), lt = L;
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
  onBeforeClose: L,
  onVisibleChange: L,
  onHidden: L,
  onShown: L,
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
const Rt = ht(), Ve = f(() => Rt().length > 0), Ee = f(() => {
  Ve() ? ke() : He();
}), Fe = f(() => {
  Ee();
}), oo = (t) => {
  const [
    {
      animation$: e,
      backdrop$: i,
      backdropTransition$: n,
      closeOnOutsideClick$: o,
      container$: s,
      modalTransition$: r,
      onBeforeClose$: l,
      onVisibleChange$: u,
      onHidden$: c,
      onShown$: $,
      visible$: k,
      ...H
    },
    C
  ] = T(xt, t), b = st({
    transition: r,
    visible: k,
    animation: e,
    animationOnInit: e,
    onVisibleChange: u,
    // TODO: for onHidden and onShown, should we combine with information from the backdrop transition?
    // (especially in case one of the two transitions takes more time than the other)
    onHidden: c,
    onShown: $
  }), v = b.stores.visible$, h = st({
    transition: n,
    visible: k,
    animation: e,
    animationOnInit: e
  }), a = f(() => b.stores.transitioning$() || i() && h.stores.transitioning$()), m = f(() => !a() && !v()), g = f(() => !i() || m());
  let d;
  const y = (F) => {
    d = F;
    const I = {
      get result() {
        return d;
      },
      set result(p) {
        d = p;
      },
      cancel: !1
    };
    l()(I), !I.cancel && C({ visible: !1 });
  }, P = pt(
    St,
    f(() => ({ container: s() }))
  ), B = pt(
    St,
    f(() => {
      var F;
      return {
        container: s(),
        insertBefore: s() && ((F = b.stores.element$()) == null ? void 0 : F.parentElement) === s() ? b.stores.element$() : void 0
      };
    })
  ), S = X(void 0, () => Rt.register(j)), _ = f(() => {
    b.stores.elementPresent$() && !m() && S(), Fe();
  }), j = {
    ...z({
      backdropHidden$: g,
      container$: s,
      hidden$: m,
      transitioning$: a,
      visible$: v,
      modalElement$: b.stores.element$,
      ...H
    }),
    directives: {
      modalPortalDirective: P,
      backdropPortalDirective: B,
      backdropDirective: nt(h.directives.directive),
      modalDirective: gt(nt(b.directives.directive), ne, ct(_))
    },
    patch: C,
    api: {
      close: y,
      async open() {
        return C({ visible: !0 }), await me(m).promise, d;
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
  onVisibleChange: L,
  onShown: L,
  onHidden: L,
  slotStructure: void 0,
  slotDefault: void 0,
  animation: !0,
  animationOnInit: !1,
  transition: at
};
function io() {
  return { ...Nt };
}
const xe = {
  dismissible: A,
  type: w
};
function no(t) {
  const [
    {
      transition$: e,
      animationOnInit$: i,
      animation$: n,
      visible$: o,
      onVisibleChange$: s,
      onHidden$: r,
      onShown$: l,
      ...u
    },
    c
  ] = T(Nt, t, xe), $ = st({
    transition: e,
    visible: o,
    animation: n,
    animationOnInit: i,
    onVisibleChange: s,
    onHidden: r,
    onShown: l
  }), k = () => {
    c({ visible: !1 });
  }, H = () => {
    c({ visible: !0 });
  }, C = $.stores.visible$, b = $.stores.hidden$;
  return {
    ...z({ ...u, visible$: C, hidden$: b }),
    patch: c,
    api: {
      open: H,
      close: k
    },
    directives: {
      transitionDirective: nt($.directives.directive)
    },
    actions: {}
  };
}
let Re = 0;
function Ne() {
  return \`accordion-item-\${Re++}\`;
}
function Me(t, e, i) {
  if (e.length == 2) {
    i = i ?? e[0];
    const n = e.find((o) => o !== i);
    t.forEach((o) => {
      o.state$().itemId !== n && !o.state$().itemCollapsed && o.patch({ itemCollapsed: !0 });
    });
  } else if (e.length > 2) {
    const n = e[0];
    t.forEach((o) => {
      o.state$().itemId !== n && !o.state$().itemCollapsed && o.patch({ itemCollapsed: !0 });
    });
  }
  return t;
}
function tt(t, e) {
  return t.find((i) => i.state$().itemId === e);
}
const O = {
  closeOthers: !1,
  onShown: L,
  onHidden: L,
  accordionClass: "",
  itemId: "",
  itemDestroyOnHide: !1,
  itemDisabled: !1,
  itemCollapsed: !0,
  itemAnimation: !0,
  itemTransition: Vt,
  onItemShown: L,
  onItemHidden: L,
  onItemCollapsedChange: L,
  slotItemStructure: void 0,
  slotItemBody: void 0,
  slotItemHeader: void 0,
  itemClass: "",
  itemHeaderClass: "",
  itemButtonClass: "",
  itemCollapseClass: "",
  itemBodyClass: ""
}, Te = {
  itemId: O.itemId,
  itemDestroyOnHide: O.itemDestroyOnHide,
  itemDisabled: O.itemDisabled,
  itemCollapsed: O.itemCollapsed,
  itemAnimation: O.itemAnimation,
  itemTransition: O.itemTransition,
  onItemShown: O.onItemShown,
  onItemHidden: O.onItemHidden,
  onItemCollapsedChange: O.onItemCollapsedChange,
  slotItemStructure: O.slotItemStructure,
  slotItemBody: O.slotItemBody,
  slotItemHeader: O.slotItemHeader,
  itemClass: O.itemClass,
  itemHeaderClass: O.itemHeaderClass,
  itemButtonClass: O.itemButtonClass,
  itemCollapseClass: O.itemCollapseClass,
  itemBodyClass: O.itemBodyClass
};
function so() {
  return { ...O };
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
function je(t, e, i) {
  const [
    {
      itemAnimation$: n,
      itemTransition$: o,
      itemDestroyOnHide$: s,
      onItemShown$: r,
      onItemHidden$: l,
      onItemCollapsedChange$: u,
      itemCollapsed$: c,
      itemId$: $,
      itemDisabled$: k,
      ...H
    },
    C
  ] = T(Te, i, _e);
  $() || $.set(Ne());
  const b = N(!1), v = f(() => s() === !1 || !h.state$().hidden), h = st({
    transition: o,
    visible: f(() => {
      const a = c();
      return u()(a), !a;
    }),
    animation: n,
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
      itemCollapsed$: c,
      itemId$: $,
      shouldBeInDOM$: v,
      itemDisabled$: k,
      ...H
    }),
    patch: C,
    actions: {
      click: () => {
        k() || c.update((a) => !a);
      }
    },
    api: {
      initDone: () => {
        b.set(!0);
      },
      collapse: () => {
        c.set(!0);
      },
      expand: () => {
        c.set(!1);
      },
      toggle: () => {
        c.update((a) => !a);
      }
    },
    directives: { collapseDirective: nt(h.directives.directive), accordionItemDirective: L }
  };
}
function ro(t) {
  const [
    {
      closeOthers$: e,
      onShown$: i,
      onHidden$: n,
      itemId$: o,
      itemAnimation$: s,
      itemClass$: r,
      itemDisabled$: l,
      itemCollapsed$: u,
      itemTransition$: c,
      itemDestroyOnHide$: $,
      itemBodyClass$: k,
      itemButtonClass$: H,
      itemCollapseClass$: C,
      itemHeaderClass$: b,
      onItemCollapsedChange$: v,
      onItemHidden$: h,
      onItemShown$: a,
      slotItemStructure$: m,
      slotItemBody$: g,
      slotItemHeader$: d,
      ...y
    },
    P
  ] = T(O, t, ze), B = ht(), S = f(() => {
    const I = [];
    return B().forEach((p) => {
      p.state$().itemCollapsed || I.push(p.state$().itemId);
    }), I;
  }), _ = N(S()[0]), j = f(() => {
    e() ? (Me(B(), S(), _()), _.set(S()[0])) : B();
  }), F = f(() => {
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
          i,
          n,
          f(() => ({
            itemId: o(),
            itemClass: r(),
            itemAnimation: s(),
            itemDisabled: l(),
            itemCollapsed: u(),
            itemTransition: c(),
            itemDestroyOnHide: $(),
            itemBodyClass: k(),
            itemButtonClass: H(),
            itemCollapseClass: C(),
            itemHeaderClass: b(),
            onItemCollapsedChange: v(),
            onItemHidden: h(),
            onItemShown: a(),
            slotItemStructure: m(),
            slotItemBody: g(),
            slotItemHeader: d(),
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
  Q as INVALID_VALUE,
  jt as activeElement$,
  pt as bindDirective,
  nt as bindDirectiveNoArg,
  bt as bindableDerived,
  Je as bootstrap,
  ro as createAccordion,
  no as createAlert,
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
  io as getAlertDefaultConfig,
  eo as getModalDefaultConfig,
  Xe as getPaginationDefaultConfig,
  Ge as getRatingDefaultConfig,
  ge as getTransitionDurationMs,
  he as hasTransition,
  gt as mergeDirectives,
  it as mergeInto,
  Be as modalCloseButtonClick,
  Pe as modalOutsideClick,
  Ze as ngBootstrapPagination,
  ce as noAnimation,
  St as portal,
  ht as registrationArray,
  ne as sliblingsInert,
  z as stateStores,
  dt as testToNormalizeValue,
  Ue as toSlotContextWidget,
  A as typeBoolean,
  D as typeFunction,
  G as typeNumber,
  w as typeString,
  Kt as writableWithDefault,
  T as writablesForProps,
  Jt as writablesWithDefault
};
`;export{n as default};
