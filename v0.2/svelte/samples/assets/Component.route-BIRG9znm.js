import{S as C,i as w,s as x,e as h,l as b,k as y,a as d,b as u,r as _,u as g,w as D,n as m,f as p}from"./AppCommon-CtUlaPGQ.js";import{o as H}from"./modalService-CGWdQS7p.js";import"./Modal-NeYg33_8.js";import"./Slot-Cx9Wwqtk.js";import"./config-BNuXnfX3.js";import"./func-fOTgS_tI.js";import"./stores-DkJENpvS.js";import"./writables-BSvyD3EG.js";import"./baseTransitions-BaB7PCC1.js";import"./promise-0_7ySYGc.js";import"./directive-C64J9ynN.js";import"./fade-BnT6RpXE.js";import"./simpleClassTransition-DdZbUbcs.js";import"./cssTransitions-CT5aGp8Y.js";import"./dom-Hs1W5kAC.js";function M(a){let t,n,e=a[1].contentData.name+"",o,r,i,s,f,k;return{c(){t=h("p"),n=b("Hello, "),o=b(e),r=b("!"),i=y(),s=h("button"),s.textContent="Close",d(s,"type","button"),d(s,"class","btn btn-outline-primary")},m(l,c){u(l,t,c),_(t,n),_(t,o),_(t,r),u(l,i,c),u(l,s,c),f||(k=g(s,"click",a[2]),f=!0)},p(l,[c]){c&2&&e!==(e=l[1].contentData.name+"")&&D(o,e)},i:m,o:m,d(l){l&&(p(t),p(i),p(s)),f=!1,k()}}}function S(a,t,n){let{widget:e}=t,{state:o}=t;const r=()=>e.api.close();return a.$$set=i=>{"widget"in i&&n(0,e=i.widget),"state"in i&&n(1,o=i.state)},[e,o,r]}class q extends C{constructor(t){super(),w(this,t,S,M,x,{widget:0,state:1})}}function v(a){let t,n,e;return{c(){t=h("button"),t.textContent="Launch demo modal",d(t,"type","button"),d(t,"class","btn btn-primary")},m(o,r){u(o,t,r),n||(e=g(t,"click",a[1]),n=!0)},p:m,i:m,o:m,d(o){o&&p(t),n=!1,e()}}}function L(a){const t=()=>H({slotTitle:"Hi there!",slotDefault:q,contentData:{name:"World"}});return[t,()=>t()]}class Q extends C{constructor(t){super(),w(this,t,L,v,x,{})}}export{Q as default};
