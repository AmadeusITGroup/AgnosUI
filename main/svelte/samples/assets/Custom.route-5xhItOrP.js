import{S as V,i as X,s as j,p as J,g as m,n as y,h as c,k as w,f as $,l as L,q as f,a1 as M,v as h,C as I,x as H,B as O,e as z,a2 as T,c as A,m as D,a3 as N,t as R,a as q,d as B}from"./AppCommon-EGvQgKwz.js";import{P as F}from"./Pagination-DCUt3Rcv.js";import"./Slot-CIXSXyWX.js";import"./config-dcf0MZy6.js";import"./directive-3-8yr-ZK-C23OGezp.js";import"./pageFactory-C8ZmJXYi-DyJlSjiz.js";import"./extendWidget-8zXnCiQz.js";import"./pagination-BpPHKQsH-Vfz41Vcl.js";import"./writables-DoU_XYTX-esNIv65O.js";function G(a){let i,e,t,l,s,p,_,g,o,u=a[0].pages.length+"",d,v,k;return{c(){i=w("li"),e=w("div"),t=w("label"),t.textContent="Page",l=$(),s=w("input"),_=$(),g=w("span"),o=L("of "),d=L(u),f(t,"id","paginationInputLabel"),f(t,"for","paginationInput"),f(t,"class","col-form-label me-2 ms-1"),s.value=p=a[0].page,f(s,"type","text"),f(s,"inputmode","numeric"),f(s,"pattern","[0-9]*"),f(s,"class","form-control custom-pages-input"),f(s,"id","paginationInput"),f(s,"aria-labelledby","paginationInputLabel paginationDescription"),M(s,"width","2.5rem"),f(g,"id","paginationDescription"),f(g,"class","col-form-label text-nowrap px-2"),f(e,"class","mb-3 d-flex flex-nowrap px-2"),f(i,"class","au-custom-pages-item")},m(b,P){m(b,i,P),h(i,e),h(e,t),h(e,l),h(e,s),a[5](s),h(e,_),h(e,g),h(g,o),h(g,d),v||(k=[I(s,"keydown",a[2]),I(s,"blur",a[3]),I(s,"input",W)],v=!0)},p(b,P){P&1&&p!==(p=b[0].page)&&s.value!==p&&(s.value=p),P&1&&u!==(u=b[0].pages.length+"")&&H(d,u)},d(b){b&&c(i),a[5](null),v=!1,O(k)}}}function Q(a){let i,e=a[0].pages.length>0&&G(a);return{c(){e&&e.c(),i=J()},m(t,l){e&&e.m(t,l),m(t,i,l)},p(t,[l]){t[0].pages.length>0?e?e.p(t,l):(e=G(t),e.c(),e.m(i.parentNode,i)):e&&(e.d(1),e=null)},i:y,o:y,d(t){t&&c(i),e&&e.d(t)}}}const U=/[^0-9]/g;function W(a){a.currentTarget.value=a.currentTarget.value.replace(U,"")}function Y(a,i,e){let{state:t}=i,{widget:l}=i,s;function p(o){o.key==="Enter"&&_(o)}function _(o){const u=o.currentTarget.value,d=parseInt(u);l.actions.select(d),e(1,s.value=l.stores.page$().toString(),s)}function g(o){z[o?"unshift":"push"](()=>{s=o,e(1,s)})}return a.$$set=o=>{"state"in o&&e(0,t=o.state),"widget"in o&&e(4,l=o.widget)},[t,s,p,_,l,g]}class Z extends V{constructor(i){super(),X(this,i,Y,Q,j,{state:0,widget:4})}}function x(a){let i=K(a[3])+"",e;return{c(){e=L(i)},m(t,l){m(t,e,l)},p(t,l){l&8&&i!==(i=K(t[3])+"")&&H(e,i)},d(t){t&&c(e)}}}function ee(a){let i,e,t,l,s,p,_,g,o,u,d,v;function k(n){a[1](n)}let b={collectionSize:60,slotPrevious:"Prev",slotNext:"Next",ariaLabel:"Page navigation with customized links",$$slots:{numberLabel:[x,({displayedPage:n})=>({3:n}),({displayedPage:n})=>n?8:0]},$$scope:{ctx:a}};a[0]!==void 0&&(b.page=a[0]),t=new F({props:b}),z.push(()=>T(t,"page",k));function P(n){a[2](n)}let E={collectionSize:60,slotPages:Z,ariaLabel:"Page navigation with customized pages"};return a[0]!==void 0&&(E.page=a[0]),u=new F({props:E}),z.push(()=>T(u,"page",P)),{c(){i=w("p"),i.textContent="A pagination with customized links:",e=$(),A(t.$$.fragment),s=$(),p=w("hr"),_=$(),g=w("p"),g.textContent="A pagination with customized pages:",o=$(),A(u.$$.fragment)},m(n,r){m(n,i,r),m(n,e,r),D(t,n,r),m(n,s,r),m(n,p,r),m(n,_,r),m(n,g,r),m(n,o,r),D(u,n,r),v=!0},p(n,[r]){const C={};r&24&&(C.$$scope={dirty:r,ctx:n}),!l&&r&1&&(l=!0,C.page=n[0],N(()=>l=!1)),t.$set(C);const S={};!d&&r&1&&(d=!0,S.page=n[0],N(()=>d=!1)),u.$set(S)},i(n){v||(R(t.$$.fragment,n),R(u.$$.fragment,n),v=!0)},o(n){q(t.$$.fragment,n),q(u.$$.fragment,n),v=!1},d(n){n&&(c(i),c(e),c(s),c(p),c(_),c(g),c(o)),B(t,n),B(u,n)}}}function K(a){return["A","B","C","D","E","F"][a-1]}function te(a,i,e){let t=4;function l(p){t=p,e(0,t)}function s(p){t=p,e(0,t)}return[t,l,s]}class ge extends V{constructor(i){super(),X(this,i,te,ee,j,{})}}export{ge as default};