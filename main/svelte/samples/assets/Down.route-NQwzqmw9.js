import{S as g,i as _,s as y,c as f,m as i,t as $,d as u,g as l,l as x,b as m,f as p,k as A}from"./AppCommon-BQfqEbA1.js";import{A as b}from"./Alert-CyX0xC5a.js";import{a as S}from"./config-DIEd8l74.js";import"./Slot-DRAmnckK.js";import"./extendWidget-Des7wosl.js";import"./baseTransitions-Cjqarmss.js";import"./writables-DoU_XYTX-fhSIwKq4.js";import"./stores-DK5sBMf5.js";import"./promise-CY2U8bTP-ScVzi7Jl.js";import"./directive-DK26z0CB.js";import"./fade-7-Etejps-Bb1kmTLp.js";import"./simpleClassTransition-r9hTFq3q.js";import"./cssTransitions-Dn0byFSt.js";function h(n){let e;return{c(){e=x("Alert not dismissible and of type secondary, respecting the parent config")},m(s,t){m(s,e,t)},d(s){s&&p(e)}}}function v(n){let e,s;return e=new b({props:{$$slots:{default:[h]},$$scope:{ctx:n}}}),{c(){f(e.$$.fragment)},m(t,o){i(e,t,o),s=!0},p(t,[o]){const a={};o&1&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){u(e.$$.fragment,t),s=!1},d(t){l(e,t)}}}class C extends g{constructor(e){super(),_(this,e,null,v,y,{})}}function D(n){let e;return{c(){e=x("Alert not dismissible and of type success, type overriden by child config")},m(s,t){m(s,e,t)},d(s){s&&p(e)}}}function k(n){let e,s;return e=new b({props:{$$slots:{default:[D]},$$scope:{ctx:n}}}),{c(){f(e.$$.fragment)},m(t,o){i(e,t,o),s=!0},p(t,[o]){const a={};o&1&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){u(e.$$.fragment,t),s=!1},d(t){l(e,t)}}}function q(n){return S().set({alert:{type:"success"}}),[]}class W extends g{constructor(e){super(),_(this,e,q,k,y,{})}}function j(n){let e;return{c(){e=x("Alert not dismissible and of type secondary")},m(s,t){m(s,e,t)},d(s){s&&p(e)}}}function z(n){let e,s,t,o,a,d;return e=new b({props:{$$slots:{default:[j]},$$scope:{ctx:n}}}),t=new C({}),a=new W({}),{c(){f(e.$$.fragment),s=A(),f(t.$$.fragment),o=A(),f(a.$$.fragment)},m(r,c){i(e,r,c),m(r,s,c),i(t,r,c),m(r,o,c),i(a,r,c),d=!0},p(r,[c]){const w={};c&1&&(w.$$scope={dirty:c,ctx:r}),e.$set(w)},i(r){d||($(e.$$.fragment,r),$(t.$$.fragment,r),$(a.$$.fragment,r),d=!0)},o(r){u(e.$$.fragment,r),u(t.$$.fragment,r),u(a.$$.fragment,r),d=!1},d(r){r&&(p(s),p(o)),l(e,r),l(t,r),l(a,r)}}}function B(n){return S().set({alert:{dismissible:!1,type:"secondary"}}),[]}class R extends g{constructor(e){super(),_(this,e,B,z,y,{})}}export{R as default};