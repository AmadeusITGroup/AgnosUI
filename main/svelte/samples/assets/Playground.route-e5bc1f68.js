import{S as u,i as _,s as c,l as f,g as d,y as $,a as p,x as g,z as h,t as i,h as k,b,A as y,c as S,m as v,B as C,C as j,d as q}from"./index-31ef738a.js";import{S as w}from"./Slider-3e5fa5ad.js";import{h as z}from"./utils-1d28cef0.js";import"./stores-4d692201.js";import"./directive-8b598cc7.js";import"./writables-5db1063d.js";import"./config-5661a0ad.js";import"./fade-d3f9ac74.js";import"./dom-cc7faf10.js";import"./promise-2d771008.js";import"./rating-ae212278.js";function l(a){let r,o;const s=[a[0]];let t={};for(let e=0;e<s.length;e+=1)t=y(t,s[e]);return r=new w({props:t}),{c(){S(r.$$.fragment)},m(e,n){v(r,e,n),o=!0},p(e,n){const m=n&1?C(s,[j(e[0])]):{};r.$set(m)},i(e){o||(i(r.$$.fragment,e),o=!0)},o(e){p(r.$$.fragment,e),o=!1},d(e){q(r,e)}}}function A(a){let r=a[0],o,s,t=l(a);return{c(){t.c(),o=f()},m(e,n){t.m(e,n),d(e,o,n),s=!0},p(e,[n]){n&1&&c(r,r=e[0])?($(),p(t,1,1,g),h(),t=l(e),t.c(),i(t,1),t.m(o.parentNode,o)):t.p(e,n)},i(e){s||(i(t),s=!0)},o(e){p(t),s=!1},d(e){e&&k(o),t.d(e)}}}function B(a,r,o){let s;const t=z("slider");return b(a,t,e=>o(0,s=e)),[s,t]}class L extends u{constructor(r){super(),_(this,r,B,A,c,{})}}export{L as default};