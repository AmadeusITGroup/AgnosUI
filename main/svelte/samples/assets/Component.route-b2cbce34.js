import{S as x,i as C,s as g,j as h,k as b,f as y,n as d,g as u,p as _,q as w,u as D,x as m,h as p}from"./index-c9fcd0ab.js";import{o as q}from"./modalService-6697f4db.js";import"./Modal-7b2885f1.js";import"./index-fcbce455.js";import"./config-4dfdcea0.js";import"./directive-0da4d297.js";import"./stores-a6ef8408.js";import"./baseTransitions-2f72768c.js";import"./writables-3b2d98b2.js";import"./promise-641391ac.js";import"./fade-f6e196c6.js";import"./dom-cc7faf10.js";import"./rating-13096607.js";import"./floatingUI-2a63428b.js";import"./focustrack-c3bd0408.js";function H(a){let t,n,e=a[1].contentData.name+"",o,r,i,s,f,k;return{c(){t=h("p"),n=b("Hello, "),o=b(e),r=b("!"),i=y(),s=h("button"),s.textContent="Close",d(s,"type","button"),d(s,"class","btn btn-outline-primary")},m(l,c){u(l,t,c),_(t,n),_(t,o),_(t,r),u(l,i,c),u(l,s,c),f||(k=w(s,"click",a[2]),f=!0)},p(l,[c]){c&2&&e!==(e=l[1].contentData.name+"")&&D(o,e)},i:m,o:m,d(l){l&&(p(t),p(i),p(s)),f=!1,k()}}}function M(a,t,n){let{widget:e}=t,{state:o}=t;const r=()=>e.api.close();return a.$$set=i=>{"widget"in i&&n(0,e=i.widget),"state"in i&&n(1,o=i.state)},[e,o,r]}class S extends x{constructor(t){super(),C(this,t,M,H,g,{widget:0,state:1})}}function j(a){let t,n,e;return{c(){t=h("button"),t.textContent="Launch demo modal",d(t,"type","button"),d(t,"class","btn btn-primary")},m(o,r){u(o,t,r),n||(e=w(t,"click",a[1]),n=!0)},p:m,i:m,o:m,d(o){o&&p(t),n=!1,e()}}}function v(a){const t=()=>q({slotTitle:"Hi there!",slotDefault:S,contentData:{name:"World"}});return[t,()=>t()]}class Q extends x{constructor(t){super(),C(this,t,v,j,g,{})}}export{Q as default};
