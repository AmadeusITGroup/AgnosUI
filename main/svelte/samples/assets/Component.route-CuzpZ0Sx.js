import{S as k,i as x,s as g,k as h,l as b,f as y,q as d,g as u,v as _,C as w,x as D,n as m,h as p}from"./AppCommon-nNlpYq-_.js";import{o as q}from"./modalService-YakanPdB.js";import"./Modal-D2sKxAEG.js";import"./Slot-CUT6fZsK.js";import"./config-CmXqxv9g.js";import"./directive-COIalEeb-BPwGJPhg.js";import"./modal-BNc43pJW-Dhu0xm_6.js";import"./writables-DoU_XYTX-OlQbjq4e.js";import"./baseTransitions-cN97DDst.js";import"./promise-CY2U8bTP-Cen_Akci.js";import"./fade-uOobJKgw-D3gpAetl.js";import"./simpleClassTransition-D0THaBQh.js";import"./cssTransitions-BTeeQ2Xh.js";import"./extendWidget-DK6uxMz1.js";function v(a){let t,n,e=a[1].contentData.name+"",o,r,i,s,f,C;return{c(){t=h("p"),n=b("Hello, "),o=b(e),r=b("!"),i=y(),s=h("button"),s.textContent="Close",d(s,"type","button"),d(s,"class","btn btn-outline-primary")},m(l,c){u(l,t,c),_(t,n),_(t,o),_(t,r),u(l,i,c),u(l,s,c),f||(C=w(s,"click",a[2]),f=!0)},p(l,[c]){c&2&&e!==(e=l[1].contentData.name+"")&&D(o,e)},i:m,o:m,d(l){l&&(p(t),p(i),p(s)),f=!1,C()}}}function H(a,t,n){let{widget:e}=t,{state:o}=t;const r=()=>e.api.close();return a.$$set=i=>{"widget"in i&&n(0,e=i.widget),"state"in i&&n(1,o=i.state)},[e,o,r]}class M extends k{constructor(t){super(),x(this,t,H,v,g,{widget:0,state:1})}}function S(a){let t,n,e;return{c(){t=h("button"),t.textContent="Launch demo modal",d(t,"type","button"),d(t,"class","btn btn-primary")},m(o,r){u(o,t,r),n||(e=w(t,"click",a[1]),n=!0)},p:m,i:m,o:m,d(o){o&&p(t),n=!1,e()}}}function L(a){const t=()=>q({title:"Hi there!",children:M,contentData:{name:"World"}});return[t,()=>t()]}class Q extends k{constructor(t){super(),x(this,t,L,S,g,{})}}export{Q as default};