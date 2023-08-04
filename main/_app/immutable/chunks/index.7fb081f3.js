const n=`import { readable as K, writable as x, asReadable as z, batch as B, computed as p, get as xt, derived as kt } from "@amadeus-it-group/tansu";
const xe = (t) => ({
  actions: t.actions,
  api: t.api,
  directives: t.directives,
  state$: t.state$,
  stores: t.stores
}), V = () => {
}, lt = (t) => t, ct = (t, e) => (i) => {
  let n = !0, o;
  const s = e.subscribe((r) => {
    var a;
    n ? (n = !1, o = t(i, r)) : (a = o == null ? void 0 : o.update) == null || a.call(o, r);
  });
  return {
    destroy() {
      var r;
      (r = o == null ? void 0 : o.destroy) == null || r.call(o), s();
    }
  };
}, Mt = K(void 0), ut = (t) => ct(t, Mt), ft = (t, e = !0) => () => {
  const i = t.subscribe(V);
  return {
    destroy: async () => {
      e && await 0, i();
    }
  };
}, Bt = (t) => (e, i) => (t(i), {
  update: t
}), Pt = { equal: Object.is }, Dt = () => {
  const t = x([], Pt);
  return z(t, {
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
}, Vt = () => {
  const t = Dt();
  return {
    elements$: z(t),
    directive: (e) => ({ destroy: t.register(e) })
  };
}, zt = () => {
  const t = x(null, Pt);
  return {
    element$: z(t),
    directive: (e) => {
      let i = !1;
      return t.update((n) => n ? (console.error("The directive cannot be used on multiple elements.", n, e), n) : (i = !0, e)), i ? {
        destroy() {
          t.update((n) => e === n ? null : n);
        }
      } : void 0;
    }
  };
}, pt = (...t) => (e, i) => {
  const n = B(() => t.map((o) => o(e, i)));
  return {
    update(o) {
      B(() => n.forEach((s) => {
        var r;
        return (r = s == null ? void 0 : s.update) == null ? void 0 : r.call(s, o);
      }));
    },
    destroy() {
      B(() => n.reverse().forEach((o) => {
        var s;
        return (s = o == null ? void 0 : o.destroy) == null ? void 0 : s.call(o);
      }));
    }
  };
}, vt = "focusin", $t = "focusout", Ht = K(null, {
  onUse({ set: t }) {
    function e() {
      t(document.activeElement);
    }
    e();
    const i = document.documentElement;
    function n() {
      setTimeout(e);
    }
    return i.addEventListener(vt, e), i.addEventListener($t, n), () => {
      i.removeEventListener(vt, e), i.removeEventListener($t, n);
    };
  },
  equal: Object.is
});
function _t() {
  const { elements$: t, directive: e } = Vt(), i = p(() => {
    const n = Ht();
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
function Tt(t) {
  return function(e) {
    B(() => {
      var i;
      for (const [n, o] of Object.entries(e ?? {}))
        (i = t[\`\${n}$\`]) == null || i.set(o);
    });
  };
}
function Me(t, e) {
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
const jt = function(t) {
  this.set(t(this()));
}, q = Symbol();
function Wt(t, e = K(void 0), { normalizeValue: i = lt, equal: n = Object.is } = {}) {
  const o = x(void 0), s = p(
    () => {
      const r = e(), a = r === void 0 ? void 0 : i(r);
      return a === q ? (console.error("Not using invalid value from default config", r), t) : a === void 0 ? t : a;
    },
    { equal: n }
  );
  return z(
    p(
      () => {
        const r = o();
        return r !== void 0 ? r : s();
      },
      { equal: n }
    ),
    {
      set(r) {
        const a = r === void 0 ? void 0 : i(r);
        a === q ? console.error("Not setting invalid value", r) : o.set(a);
      },
      update: jt
    }
  );
}
const mt = (t) => !!(t && typeof t == "function" && "subscribe" in t), Ut = (t, e, i) => {
  const n = {}, o = mt(e);
  for (const s of Object.keys(t)) {
    let r = o ? p(() => e()[s]) : void 0;
    if (!o && e) {
      const a = e[s];
      r = mt(a) ? a : K(a);
    }
    n[\`\${s}$\`] = Wt(t[s], r, i == null ? void 0 : i[s]);
  }
  return n;
}, _ = (t, e, i) => {
  const n = Ut(t, e, i);
  return [n, Tt(n)];
}, T = (t) => {
  const e = [], i = [], n = {};
  for (const o of Object.keys(t))
    if (o.endsWith("$")) {
      const s = t[o];
      e.push(o.substring(0, o.length - 1)), i.push(s), n[o] = z(s);
    }
  return {
    stores: n,
    state$: p(() => {
      const o = i.map(xt), s = {};
      return e.forEach((r, a) => {
        s[r] = o[a];
      }), s;
    })
  };
}, bt = (t, e, i) => {
  let n = e[0]();
  return kt(e, (o) => {
    const s = i(o), r = s !== o[0];
    return r && e[0].set(s), (r || s !== n) && (n = s, t()(s)), s;
  });
};
function qt(t, e) {
  return JSON.stringify(t).toLowerCase().includes(e.toLowerCase());
}
function Kt(t) {
  return "" + t;
}
const Jt = {
  opened: !1,
  disabled: !1,
  items: [],
  filterText: "",
  loading: !1,
  selected: [],
  itemId: Kt,
  matchFn: qt,
  onFilterTextChange: void 0,
  className: ""
};
function Be(t) {
  const [{ opened$: e, items$: i, itemId$: n, matchFn$: o, onFilterTextChange$: s, ...r }, a] = _(
    Jt,
    t
  ), { selected$: d, filterText$: u } = r, { hasFocus$: $, directive: D } = _t(), P = p(() => {
    const l = e(), f = $();
    return !f && l && e.set(!1), l && f;
  }), m = function() {
    const l = x(0), f = z(l, {
      set(b) {
        const { length: c } = h();
        b != null && (c ? b < 0 ? b = c - 1 : b >= c && (b = 0) : b = void 0), l.set(b);
      },
      update(b) {
        f.set(b(l()));
      }
    });
    return f;
  }(), h = p(() => {
    const l = [];
    if (P()) {
      const f = d(), b = u(), c = b ? o() : () => !0, y = n();
      for (const S of i())
        c(S, b) && l.push({
          item: S,
          id: y(S),
          selected: f.includes(S),
          select: (function() {
            g.api.select(this);
          }).bind(S),
          unselect: (function() {
            g.api.unselect(this);
          }).bind(S),
          toggle: (function() {
            g.api.toggleItem(this);
          }).bind(S)
        });
    }
    return l;
  }), v = p(() => {
    const l = h(), f = m();
    return l.length && f != null ? l[f] : void 0;
  }), g = {
    ...T({
      visible$: h,
      highlighted$: v,
      opened$: P,
      ...r
    }),
    patch: a,
    api: {
      clear() {
        d.set([]);
      },
      select(l) {
        g.api.toggleItem(l, !0);
      },
      unselect(l) {
        g.api.toggleItem(l, !1);
      },
      toggleItem(l, f) {
        i().includes(l) && d.update((b) => {
          b = [...b];
          const c = b.indexOf(l);
          return f == null && (f = c === -1), f && c === -1 ? b.push(l) : !f && c !== -1 && b.splice(c, 1), b;
        });
      },
      clearText() {
      },
      highlight(l) {
        const f = h().findIndex((b) => b.item === l);
        m.set(f === -1 ? void 0 : f);
      },
      highlightFirst() {
        m.set(0);
      },
      highlightPrevious() {
        m.update((l) => l != null ? l - 1 : -1);
      },
      highlightNext() {
        m.update((l) => l != null ? l + 1 : 1 / 0);
      },
      highlightLast() {
        m.set(-1);
      },
      focus(l) {
      },
      focusFirst() {
      },
      focusPrevious() {
      },
      focusNext() {
      },
      focusLast() {
      },
      open: () => g.api.toggle(!0),
      close: () => g.api.toggle(!1),
      toggle(l) {
        e.update((f) => l ?? !f);
      }
    },
    directives: {
      hasFocusDirective: D
    },
    actions: {
      onInput({ target: l }) {
        const f = l.value;
        B(() => {
          var b;
          a({
            opened: f != null && f !== "",
            filterText: f
          }), (b = s()) == null || b(f);
        });
      },
      onInputKeydown(l) {
        const { ctrlKey: f, key: b } = l;
        let c = !0;
        switch (b) {
          case "ArrowDown": {
            P() ? f ? g.api.highlightLast() : g.api.highlightNext() : (g.api.open(), g.api.highlightFirst());
            break;
          }
          case "ArrowUp":
            f ? g.api.highlightFirst() : g.api.highlightPrevious();
            break;
          case "Enter": {
            const y = v();
            y && g.api.toggleItem(y.item);
            break;
          }
          case "Escape":
            e.set(!1);
            break;
          default:
            c = !1;
        }
        c && l.preventDefault();
      }
    }
  };
  return g;
}
const Gt = (t) => {
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
let yt = V;
const Qt = (t) => {
  yt(), yt = t ? Gt(t) : V;
}, { directive: Xt, elements$: Yt } = Vt(), Zt = p(
  () => {
    const t = Yt();
    return t[t.length - 1];
  },
  { equal: Object.is }
), te = p(() => Qt(Zt())), ee = pt(Xt, ft(te)), wt = (t, e) => {
  let i, n;
  const o = () => {
    var r;
    n && ((r = n.parentNode) == null || r.replaceChild(t, n), n = null);
  }, s = (r) => {
    var a, d;
    if (r !== i) {
      i = r;
      const u = (i == null ? void 0 : i.container) ?? ((a = i == null ? void 0 : i.insertBefore) == null ? void 0 : a.parentElement);
      u ? (n || (n = (d = t.parentNode) == null ? void 0 : d.insertBefore(t.ownerDocument.createComment("portal"), t)), u.insertBefore(t, (i == null ? void 0 : i.insertBefore) ?? null)) : o();
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
function gt(t) {
  return typeof t == "number" && !isNaN(t) && Number.isFinite(t);
}
function oe(t) {
  return t === !0 || t === !1;
}
function ne(t) {
  return typeof t == "function";
}
function ie(t) {
  return typeof t == "string";
}
function se(t, e, i = 0) {
  return Math.max(Math.min(t, e), i);
}
const st = (t) => (e) => t(e) ? e : q, U = {
  normalizeValue: st(gt)
}, I = {
  normalizeValue: st(oe)
}, F = {
  normalizeValue: st(ie)
}, E = {
  normalizeValue: st(ne),
  equal: Object.is
}, Z = () => {
}, Ct = new Promise(Z), re = async (t, e) => {
  t.style.display = e === "show" ? "" : "none";
}, ae = {
  animation: !0,
  animationOnInit: !1,
  initDone: null,
  visible: !0,
  transition: re,
  onShown: Z,
  onHidden: Z,
  onVisibleChange: Z
}, le = {
  animation: I,
  animationOnInit: I,
  visible: I,
  transition: E,
  onShown: E,
  onHidden: E
}, Lt = () => {
  let t;
  return { promise: new Promise((i) => {
    t = i;
  }), resolve: t };
}, dt = (t) => {
  const [{ animation$: e, initDone$: i, visible$: n, transition$: o, onShown$: s, onHidden$: r, onVisibleChange$: a, animationOnInit$: d }, u] = _(ae, t, le), { element$: $, directive: D } = zt(), P = p(() => !!$()), m = bt(a, [n], ([w]) => w), h = x(
    null
  ), v = p(() => !!h()), g = () => {
    let w;
    return h.update((L) => (L == null || L.abort.abort(), w = L == null ? void 0 : L.context, null)), w;
  }, l = (w, L, M, R) => B(() => {
    const X = new AbortController(), A = X.signal, H = g() ?? {}, { promise: W, resolve: rt } = Lt(), Y = {
      abort: X,
      animation: L,
      visible: w,
      context: H,
      element: M,
      transitionFn: R,
      promise: W
    };
    return h.set(Y), rt(
      (async () => {
        var ht;
        try {
          await R(M, w ? "show" : "hide", L, A, H);
        } finally {
          A.aborted ? await Ct : (h.set(null), (ht = (w ? s : r)()) == null || ht());
        }
      })()
    ), Y;
  }), f = p(() => !v() && m() && P()), b = p(() => !v() && !m()), c = p(() => i() ? e() : d()), y = x(null);
  let S, J = n(), C = null;
  const G = kt(
    [m, $, c, y, o, h],
    ([w, L, M, R, X, A]) => {
      const H = S !== L;
      S = L;
      const W = J !== w;
      if (J = w, L) {
        i() == null && i.set(!0);
        const rt = R != null && A && A.animation != R;
        if (H || W || rt) {
          (W || R != null) && (C = null);
          const Y = R ?? (C == null ? void 0 : C.animation) ?? (H && !w ? !1 : M);
          A = l(w, Y, L, X), C == null || C.resolve(A.promise), C = null;
        }
      } else
        H && (g(), A = null), (W || w && (C == null ? void 0 : C.animation) !== R) && (C = w && R != null ? {
          // toggle was called to display the element, but the element is not yet in the DOM
          // let's keep the animation setting from toggle and provide the promise for the end of toggle
          animation: R,
          ...Lt()
        } : null);
      return (C == null ? void 0 : C.promise) ?? (A == null ? void 0 : A.promise);
    }
  );
  let j = {};
  const O = async (w = !n(), L = c()) => {
    const M = {};
    j = M;
    try {
      await B(() => {
        try {
          return y.set(L), n.set(w), G();
        } finally {
          y.set(null);
        }
      });
    } finally {
      j !== M && await Ct;
    }
  }, Q = pt(D, Bt(u), ft(G));
  return {
    ...T({
      visible$: m,
      element$: $,
      elementPresent$: P,
      transitioning$: v,
      shown$: f,
      hidden$: b
    }),
    patch: u,
    directives: {
      directive: Q
    },
    actions: {},
    api: {
      show: O.bind(null, !0),
      hide: O.bind(null, !1),
      toggle: O
    }
  };
}, tt = () => {
}, ce = (t) => !!t, ue = (t, e = ce) => {
  let i;
  const n = new Promise((r) => i = r);
  let o = () => {
    s(), o = tt;
  }, s = tt;
  return s = t.subscribe((r) => {
    e(r) && (i(r), o());
  }), o === tt && s(), {
    promise: n,
    unsubscribe() {
      o();
    }
  };
}, St = (t, e) => {
  let i;
  const n = new Promise((r) => i = r);
  let o = () => {
    t.removeEventListener(e, s), o = tt;
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
}, de = (t) => {
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
function ot(t = document.body) {
  t.getBoundingClientRect();
}
const N = (t, e) => {
  e && e.length > 0 && t.classList.add(...e);
}, k = (t, e) => {
  e && e.length > 0 && t.classList.remove(...e);
};
function fe(t) {
  return window.getComputedStyle(t).transitionProperty !== "none";
}
function pe(t) {
  const { transitionDelay: e, transitionDuration: i } = window.getComputedStyle(t), n = parseFloat(e), o = parseFloat(i);
  return (n + o) * 1e3;
}
const be = () => {
}, Ot = (t) => async (e, i, n, o, s) => {
  const r = t(e, i, n, s) ?? be;
  if (n && fe(e)) {
    const a = St(o, "abort"), d = St(e, "transitionend"), u = de(pe(e));
    await Promise.race([a.promise, d.promise, u.promise]), a.unsubscribe(), d.unsubscribe(), u.unsubscribe();
  }
  o.aborted || r();
}, ge = ({
  animationPendingClasses: t,
  animationPendingShowClasses: e,
  animationPendingHideClasses: i,
  showClasses: n,
  hideClasses: o
}) => Ot((s, r, a, d) => {
  if (k(s, n), k(s, o), a) {
    if (k(s, r === "show" ? i : e), !d.started) {
      d.started = !0;
      const u = r === "show" ? o : n;
      N(s, u), ot(s), k(s, u);
    }
    N(s, t), ot(s), N(s, r === "show" ? e : i);
  }
  return () => {
    k(s, t), k(s, e), k(s, i), N(s, r === "show" ? n : o);
  };
}), At = ({ dimension: t = "height", showClasses: e, hideClasses: i, animationPendingClasses: n } = {}) => Ot((o, s, r, a) => {
  if (r) {
    let { maxSize: d, minSize: u } = a;
    d || (k(o, n), k(o, i), N(o, e), d = o.getBoundingClientRect()[t] + "px", a.maxSize = d), u || (k(o, n), k(o, e), N(o, i), u = o.getBoundingClientRect()[t] + "px", a.minSize = u), k(o, e), k(o, i);
    const $ = s === "show" ? [u, d] : [d, u];
    o.style[t] = $[0], ot(o), N(o, n), ot(o), o.style[t] = $[1];
  } else
    k(o, s === "show" ? i : e);
  return () => {
    k(o, n), N(o, s === "show" ? e : i), o.style[t] = "";
  };
}), he = {
  dimension: "height",
  hideClasses: ["collapse"],
  showClasses: ["collapse", "show"],
  animationPendingClasses: ["collapsing"]
}, ve = {
  dimension: "width",
  hideClasses: ["collapse", "collapse-horizontal"],
  showClasses: ["collapse", "collapse-horizontal", "show"],
  animationPendingClasses: ["collapsing", "collapse-horizontal"]
}, $e = At(he), me = At(ve), nt = ge({
  animationPendingClasses: ["fade"],
  animationPendingShowClasses: ["show"],
  showClasses: ["show"],
  hideClasses: ["d-none"]
}), ze = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  collapseHorizontalTransition: me,
  collapseVerticalTransition: $e,
  fadeTransition: nt
}, Symbol.toStringTag, { value: "Module" }));
function ye(t, e) {
  return Math.max(Math.min(t, e), 0);
}
const at = () => {
}, Ft = {
  rating: 0,
  tabindex: 0,
  maxRating: 10,
  disabled: !1,
  readonly: !1,
  resettable: !0,
  ariaValueTextFn: (t, e) => \`\${t} out of \${e}\`,
  onHover: at,
  onLeave: at,
  onRatingChange: at,
  className: "",
  slotStar: ({ fill: t }) => String.fromCharCode(t === 100 ? 9733 : 9734),
  ariaLabel: "Rating",
  ariaLabelledBy: ""
};
function He() {
  return { ...Ft };
}
const we = {
  rating: U,
  tabindex: U,
  maxRating: { normalizeValue: (t) => gt(t) ? Math.max(0, t) : q },
  disabled: I,
  readonly: I,
  resettable: I,
  ariaValueTextFn: E,
  onHover: E,
  onLeave: E,
  onRatingChange: E,
  className: F,
  ariaLabel: F,
  ariaLabelledBy: F
};
function _e(t) {
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
      ...a
    },
    d
  ] = _(Ft, t, we), { maxRating$: u, disabled$: $, readonly$: D, resettable$: P } = a, m = p(() => $() ? -1 : i()), h = bt(r, [e, u], ([c, y]) => ye(c, y)), v = x(0), g = p(() => !$() && !D()), l = p(() => {
    const c = h(), y = v();
    return y !== 0 ? y : c;
  }), f = p(() => n()(l(), u())), b = p(() => {
    const c = l();
    return Array.from({ length: u() }, (y, S) => ({
      fill: Math.round(Math.max(Math.min(c - S, 1), 0) * 100),
      index: S
    }));
  });
  return {
    ...T({
      ariaValueText$: f,
      isInteractive$: g,
      rating$: h,
      stars$: b,
      tabindex$: m,
      visibleRating$: l,
      ...a
    }),
    patch: d,
    actions: {
      click: (c) => {
        g() && c > 0 && c <= u() && d({ rating: h() === c && P() ? 0 : c });
      },
      hover: (c) => {
        g() && c > 0 && c <= u() && (v.set(c), o()(c));
      },
      leave: () => {
        g() && (s()(v()), v.set(0));
      },
      handleKey(c) {
        if (g()) {
          const { key: y } = c;
          switch (y) {
            case "ArrowLeft":
            case "ArrowDown":
              d({ rating: h() - 1 });
              break;
            case "ArrowRight":
            case "ArrowUp":
              d({ rating: h() + 1 });
              break;
            case "Home":
            case "PageDown":
              d({ rating: 0 });
              break;
            case "End":
            case "PageUp":
              d({ rating: u() });
              break;
            default:
              return;
          }
          c.preventDefault(), c.stopPropagation();
        }
      }
    },
    directives: {},
    api: {}
  };
}
const Rt = {
  page: 1,
  collectionSize: 0,
  pageSize: 10,
  disabled: !1,
  directionLinks: !0,
  boundaryLinks: !1,
  size: null,
  onPageChange: V,
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
function Te() {
  return { ...Rt };
}
const Ce = {
  page: U,
  collectionSize: U,
  pageSize: U,
  disabled: I,
  directionLinks: I,
  boundaryLinks: I,
  size: { normalizeValue: (t) => t === "lg" || t === "sm" || t === null ? t : q },
  onPageChange: E,
  pagesFactory: E,
  ariaLabel: F,
  activeLabel: F,
  ariaPageLabel: E,
  ariaFirstLabel: F,
  ariaPreviousLabel: F,
  ariaNextLabel: F,
  ariaLastLabel: F,
  className: F
};
function je(t) {
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
      ...a
    },
    d
  ] = _(Rt, t, Ce), u = p(() => {
    let v = Math.ceil(i() / n());
    return (!gt(v) || v < 1) && (v = 1), v;
  }), $ = bt(o, [e, u], ([v, g]) => se(v, g, 1)), D = p(() => s()($(), u())), P = p(() => $() === u() || a.disabled$()), m = p(() => $() === 1 || a.disabled$()), h = p(() => {
    const v = r(), g = u();
    return D().map((l) => v(l, g));
  });
  return {
    ...T({
      pageCount$: u,
      page$: $,
      pages$: D,
      nextDisabled$: P,
      previousDisabled$: m,
      pagesLabel$: h,
      ...a
    }),
    patch: d,
    actions: {
      /**
       * Set the current page pageNumber (starting from 1)
       * @param pageNumber - Current page number to set.
       * Value is normalized between 1 and the number of page
       */
      select(v) {
        d({ page: v });
      },
      /**
       * Select the first page
       */
      first() {
        d({ page: 1 });
      },
      /**
       * Select the previous page
       */
      previous() {
        d({ page: $() - 1 });
      },
      /**
       * Select the next page
       */
      next() {
        d({ page: $() + 1 });
      },
      /**
       * Select the last page
       */
      last() {
        d({ page: u() });
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
function Le(t, e) {
  const n = (Math.ceil(t / e) - 1) * e, o = n + e;
  return [n, o];
}
function Se(t, e, i, n, o) {
  i && (t > 0 && (t > 2 ? n.unshift(-1) : t === 2 && n.unshift(2), n.unshift(1)), e < o && (e < o - 2 ? n.push(-1) : e === o - 2 && n.push(o - 1), n.push(o)));
}
function ke(t, e, i) {
  let n = 0, o = i;
  const s = Math.floor(e / 2), r = e % 2 === 0 ? s - 1 : s;
  return t <= s ? o = e : i - t < s ? n = i - e : (n = t - s - 1, o = t + r), [n, o];
}
function We(t, e, i) {
  return function(n, o) {
    let s = [];
    for (let r = 1; r <= o; r++)
      s.push(r);
    if (t > 0 && o > t) {
      let r = 0, a = o;
      e ? [r, a] = ke(n, t, o) : [r, a] = Le(n, t), s = s.slice(r, a), Se(r, a, i, s, o);
    }
    return s;
  };
}
const et = (t, e, i = 1 / 0) => {
  if (e !== void 0)
    if (typeof e == "object" && e && i >= 1)
      for (const n of Object.keys(e))
        t[n] = et(t[n] ?? {}, e[n], i - 1);
    else
      return e;
  return t;
}, Ue = (t, e = lt) => {
  const i = x({}), n = e === lt ? t : p(() => e(et({}, t == null ? void 0 : t(), 2)));
  return z(
    p(() => et(et({}, n == null ? void 0 : n(), 2), i(), 2)),
    {
      ...i,
      own$: i,
      adaptedParent$: n,
      parent$: t
    }
  );
}, Pe = () => {
  const t = Math.abs(window.innerWidth - document.documentElement.clientWidth), e = document.body, i = e.style, { overflow: n, paddingRight: o } = i;
  if (t > 0) {
    const s = parseFloat(window.getComputedStyle(e).paddingRight);
    i.paddingRight = \`\${s + t}px\`;
  }
  return i.overflow = "hidden", () => {
    t > 0 && (i.paddingRight = o), i.overflow = n;
  };
};
let it = V;
const De = () => {
  it(), it = Pe();
}, Ve = () => {
  it(), it = V;
}, Oe = Symbol(), Ae = Symbol(), Et = {
  animation: !0,
  ariaCloseButtonLabel: "Close",
  backdrop: !0,
  backdropClass: "",
  backdropTransition: nt,
  // TODO: is it ok to depend on bootstrap transition?
  closeButton: !0,
  closeOnOutsideClick: !0,
  container: typeof window < "u" ? document.body : null,
  modalClass: "",
  modalTransition: nt,
  // TODO: is it ok to depend on bootstrap transition?
  onBeforeClose: V,
  onVisibleChange: V,
  onHidden: V,
  onShown: V,
  slotDefault: void 0,
  slotFooter: void 0,
  slotHeader: void 0,
  slotStructure: void 0,
  slotTitle: void 0,
  visible: !1
};
function qe() {
  return { ...Et };
}
const It = Dt(), Fe = p(() => It().length > 0), Re = p(() => {
  Fe() ? De() : Ve();
}), Ee = p(() => {
  Re();
}), Ke = (t) => {
  const [
    {
      animation$: e,
      backdrop$: i,
      backdropTransition$: n,
      closeOnOutsideClick$: o,
      container$: s,
      modalTransition$: r,
      onBeforeClose$: a,
      onVisibleChange$: d,
      onHidden$: u,
      onShown$: $,
      visible$: D,
      ...P
    },
    m
  ] = _(Et, t), h = dt({
    transition: r,
    visible: D,
    animation: e,
    animationOnInit: e,
    onVisibleChange: d,
    // TODO: for onHidden and onShown, should we combine with information from the backdrop transition?
    // (especially in case one of the two transitions takes more time than the other)
    onHidden: u,
    onShown: $
  }), v = h.stores.visible$, g = dt({
    transition: n,
    visible: D,
    animation: e,
    animationOnInit: e
  }), l = p(() => h.stores.transitioning$() || i() && g.stores.transitioning$()), f = p(() => !l() && !v()), b = p(() => !i() || f());
  let c;
  const y = (O) => {
    c = O;
    const Q = {
      get result() {
        return c;
      },
      set result(w) {
        c = w;
      },
      cancel: !1
    };
    a()(Q), !Q.cancel && m({ visible: !1 });
  }, S = ct(
    wt,
    p(() => ({ container: s() }))
  ), J = ct(
    wt,
    p(() => {
      var O;
      return {
        container: s(),
        insertBefore: s() && ((O = h.stores.element$()) == null ? void 0 : O.parentElement) === s() ? h.stores.element$() : void 0
      };
    })
  ), C = K(void 0, () => It.register(j)), G = p(() => {
    h.stores.elementPresent$() && !f() && C(), Ee();
  }), j = {
    ...T({
      backdropHidden$: b,
      container$: s,
      hidden$: f,
      transitioning$: l,
      visible$: v,
      modalElement$: h.stores.element$,
      ...P
    }),
    directives: {
      modalPortalDirective: S,
      backdropPortalDirective: J,
      backdropDirective: ut(g.directives.directive),
      modalDirective: pt(ut(h.directives.directive), ee, ft(G))
    },
    patch: m,
    api: {
      close: y,
      async open() {
        return m({ visible: !0 }), await ue(f).promise, c;
      },
      patch: m
    },
    actions: {
      modalClick(O) {
        O.currentTarget === O.target && o() && y(Oe);
      },
      closeButtonClick(O) {
        y(Ae);
      }
    }
  };
  return j;
}, Nt = {
  visible: !0,
  dismissible: !0,
  type: "primary",
  ariaCloseButtonLabel: "Close",
  onVisibleChange: V,
  onShown: V,
  onHidden: V,
  slotStructure: void 0,
  slotDefault: void 0,
  animation: !0,
  animationOnInit: !1,
  transition: nt
};
function Je() {
  return { ...Nt };
}
const Ie = {
  dismissible: I,
  type: F
};
function Ge(t) {
  const [
    {
      transition$: e,
      animationOnInit$: i,
      animation$: n,
      visible$: o,
      onVisibleChange$: s,
      onHidden$: r,
      onShown$: a,
      ...d
    },
    u
  ] = _(Nt, t, Ie), $ = dt({
    transition: e,
    visible: o,
    animation: n,
    animationOnInit: i,
    onVisibleChange: s,
    onHidden: r,
    onShown: a
  }), D = () => {
    u({ visible: !1 });
  }, P = () => {
    u({ visible: !0 });
  }, m = $.stores.visible$, h = $.stores.hidden$;
  return {
    ...T({ ...d, visible$: m, hidden$: h }),
    patch: u,
    api: {
      open: P,
      close: D
    },
    directives: {
      transitionDirective: ut($.directives.directive)
    },
    actions: {}
  };
}
export {
  q as INVALID_VALUE,
  Ht as activeElement$,
  ct as bindDirective,
  ut as bindDirectiveNoArg,
  bt as bindableDerived,
  ze as bootstrap,
  Ge as createAlert,
  Ot as createCSSTransition,
  _t as createHasFocus,
  Ke as createModal,
  je as createPagination,
  Tt as createPatch,
  _e as createRating,
  Be as createSelect,
  ge as createSimpleClassTransition,
  Vt as createStoreArrayDirective,
  zt as createStoreDirective,
  dt as createTransition,
  Ue as createWidgetsConfig,
  ft as directiveSubscribe,
  Bt as directiveUpdate,
  Me as findChangedProperties,
  Je as getAlertDefaultConfig,
  qe as getModalDefaultConfig,
  Te as getPaginationDefaultConfig,
  He as getRatingDefaultConfig,
  pe as getTransitionDurationMs,
  fe as hasTransition,
  pt as mergeDirectives,
  et as mergeInto,
  Ae as modalCloseButtonClick,
  Oe as modalOutsideClick,
  We as ngBootstrapPagination,
  re as noAnimation,
  wt as portal,
  Dt as registrationArray,
  ee as sliblingsInert,
  T as stateStores,
  st as testToNormalizeValue,
  xe as toSlotContextWidget,
  I as typeBoolean,
  E as typeFunction,
  U as typeNumber,
  F as typeString,
  Wt as writableWithDefault,
  _ as writablesForProps,
  Ut as writablesWithDefault
};
`;export{n as default};
