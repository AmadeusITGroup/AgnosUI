import{S as A,i as S,s as y,c as f,m as u,t as l,a as _,d,f as D,g as c,h as a,k as $,x as g,j}from"./index-14bf255f.js";import{B as H}from"./body-92e21e3d.js";import{A as k,a as B}from"./Item-38ff8258.js";import"./index-d37313aa.js";import"./config-5b0ae2af.js";import"./directiveUtils-0f196314.js";import"./stores-0a381eb7.js";import"./focustrack-18e0e8bb.js";import"./pagination-733aa682.js";import"./writables-8f91fb4c.js";import"./fade-cfc2f702.js";import"./baseTransitions-b669155c.js";import"./types-d19cbc41.js";function q(n){let e;return{c(){e=$("Simple")},m(t,o){c(t,e,o)},d(t){t&&a(e)}}}function v(n){let e;return{c(){e=$(H)},m(t,o){c(t,e,o)},p:g,d(t){t&&a(e)}}}function C(n){let e;return{c(){e=j("span"),e.innerHTML="★ <b>Fancy</b> title ★"},m(t,o){c(t,e,o)},p:g,d(t){t&&a(e)}}}function F(n){let e;return{c(){e=$(H)},m(t,o){c(t,e,o)},p:g,d(t){t&&a(e)}}}function I(n){let e;return{c(){e=$("Disabled")},m(t,o){c(t,e,o)},d(t){t&&a(e)}}}function L(n){let e;return{c(){e=$(H)},m(t,o){c(t,e,o)},p:g,d(t){t&&a(e)}}}function M(n){let e,t,o,m,i,p;return e=new B({props:{itemVisible:!0,$$slots:{itemBody:[v],itemHeader:[q]},$$scope:{ctx:n}}}),o=new B({props:{$$slots:{itemBody:[F],itemHeader:[C]},$$scope:{ctx:n}}}),i=new B({props:{itemDisabled:!0,$$slots:{itemBody:[L],itemHeader:[I]},$$scope:{ctx:n}}}),{c(){f(e.$$.fragment),t=D(),f(o.$$.fragment),m=D(),f(i.$$.fragment)},m(r,s){u(e,r,s),c(r,t,s),u(o,r,s),c(r,m,s),u(i,r,s),p=!0},p(r,s){const x={};s&1&&(x.$$scope={dirty:s,ctx:r}),e.$set(x);const b={};s&1&&(b.$$scope={dirty:s,ctx:r}),o.$set(b);const w={};s&1&&(w.$$scope={dirty:s,ctx:r}),i.$set(w)},i(r){p||(l(e.$$.fragment,r),l(o.$$.fragment,r),l(i.$$.fragment,r),p=!0)},o(r){_(e.$$.fragment,r),_(o.$$.fragment,r),_(i.$$.fragment,r),p=!1},d(r){r&&(a(t),a(m)),d(e,r),d(o,r),d(i,r)}}}function O(n){let e,t;return e=new k({props:{$$slots:{default:[M]},$$scope:{ctx:n}}}),{c(){f(e.$$.fragment)},m(o,m){u(e,o,m),t=!0},p(o,[m]){const i={};m&1&&(i.$$scope={dirty:m,ctx:o}),e.$set(i)},i(o){t||(l(e.$$.fragment,o),t=!0)},o(o){_(e.$$.fragment,o),t=!1},d(o){d(e,o)}}}class U extends A{constructor(e){super(),S(this,e,null,O,y,{})}}export{U as default};
