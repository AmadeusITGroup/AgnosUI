import{S as J,i as K,s as L,c as p,f as k,m as l,g as f,t as m,a as i,h as o,d as u,b as M,Y as N,k as c}from"./index-14c4a59d.js";import{A as _}from"./Alert-782b0733.js";import{a as O}from"./config-b51903c6.js";import"./index-da1214ca.js";import"./stores-9e0a077e.js";import"./directive-1e00b3a1.js";import"./baseTransitions-8f91bb82.js";import"./writables-39e68ee1.js";import"./promise-fce05d97.js";import"./fade-c3dc9294.js";import"./dom-cc7faf10.js";import"./rating-63a1d2d3.js";import"./floatingUI-70ce9bd2.js";import"./focustrack-0823a88f.js";function P(r){let t;return{c(){t=c("Simple primary alert")},m(s,n){f(s,t,n)},d(s){s&&o(t)}}}function Q(r){let t;return{c(){t=c("Simple secondary alert")},m(s,n){f(s,t,n)},d(s){s&&o(t)}}}function R(r){let t;return{c(){t=c("Simple success alert")},m(s,n){f(s,t,n)},d(s){s&&o(t)}}}function T(r){let t;return{c(){t=c("Simple danger alert")},m(s,n){f(s,t,n)},d(s){s&&o(t)}}}function U(r){let t;return{c(){t=c("Simple warning alert")},m(s,n){f(s,t,n)},d(s){s&&o(t)}}}function V(r){let t;return{c(){t=c("Simple info alert")},m(s,n){f(s,t,n)},d(s){s&&o(t)}}}function X(r){let t;return{c(){t=c("Simple light alert")},m(s,n){f(s,t,n)},d(s){s&&o(t)}}}function Z(r){let t;return{c(){t=c("Simple dark alert")},m(s,n){f(s,t,n)},d(s){s&&o(t)}}}function y(r){let t,s,n,g,a,A,d,q,w,D,S,G,b,W,C,v;return t=new _({props:{type:"primary",$$slots:{default:[P]},$$scope:{ctx:r}}}),n=new _({props:{type:"secondary",$$slots:{default:[Q]},$$scope:{ctx:r}}}),a=new _({props:{type:"success",$$slots:{default:[R]},$$scope:{ctx:r}}}),d=new _({props:{type:"danger",$$slots:{default:[T]},$$scope:{ctx:r}}}),w=new _({props:{type:"warning",$$slots:{default:[U]},$$scope:{ctx:r}}}),S=new _({props:{type:"info",$$slots:{default:[V]},$$scope:{ctx:r}}}),b=new _({props:{type:"light",$$slots:{default:[X]},$$scope:{ctx:r}}}),C=new _({props:{type:"dark",$$slots:{default:[Z]},$$scope:{ctx:r}}}),{c(){p(t.$$.fragment),s=k(),p(n.$$.fragment),g=k(),p(a.$$.fragment),A=k(),p(d.$$.fragment),q=k(),p(w.$$.fragment),D=k(),p(S.$$.fragment),G=k(),p(b.$$.fragment),W=k(),p(C.$$.fragment)},m(e,$){l(t,e,$),f(e,s,$),l(n,e,$),f(e,g,$),l(a,e,$),f(e,A,$),l(d,e,$),f(e,q,$),l(w,e,$),f(e,D,$),l(S,e,$),f(e,G,$),l(b,e,$),f(e,W,$),l(C,e,$),v=!0},p(e,[$]){const Y={};$&4&&(Y.$$scope={dirty:$,ctx:e}),t.$set(Y);const j={};$&4&&(j.$$scope={dirty:$,ctx:e}),n.$set(j);const z={};$&4&&(z.$$scope={dirty:$,ctx:e}),a.$set(z);const B={};$&4&&(B.$$scope={dirty:$,ctx:e}),d.$set(B);const E={};$&4&&(E.$$scope={dirty:$,ctx:e}),w.$set(E);const F={};$&4&&(F.$$scope={dirty:$,ctx:e}),S.$set(F);const H={};$&4&&(H.$$scope={dirty:$,ctx:e}),b.$set(H);const I={};$&4&&(I.$$scope={dirty:$,ctx:e}),C.$set(I)},i(e){v||(m(t.$$.fragment,e),m(n.$$.fragment,e),m(a.$$.fragment,e),m(d.$$.fragment,e),m(w.$$.fragment,e),m(S.$$.fragment,e),m(b.$$.fragment,e),m(C.$$.fragment,e),v=!0)},o(e){i(t.$$.fragment,e),i(n.$$.fragment,e),i(a.$$.fragment,e),i(d.$$.fragment,e),i(w.$$.fragment,e),i(S.$$.fragment,e),i(b.$$.fragment,e),i(C.$$.fragment,e),v=!1},d(e){e&&(o(s),o(g),o(A),o(q),o(D),o(G),o(W)),u(t,e),u(n,e),u(a,e),u(d,e),u(w,e),u(S,e),u(b,e),u(C,e)}}}function x(r,t,s){let n;const g=O();return M(r,g,a=>s(1,n=a)),N(g,n={alert:{dismissible:!1}},n),[g]}class ue extends J{constructor(t){super(),K(this,t,x,y,L,{})}}export{ue as default};