import{s as A,x as g,i as w,f as d,n as q,F as N,G as B,e as y,t as F,a as G,c as H,b as L,d as I,g as U,o as u,I as S,h as b,j as D}from"./scheduler.l1yozE5D.js";import{S as J,i as K,g as O,b as h,e as P,t as v,c as z,a as E,m as M,d as j}from"./index.94WAa3an.js";import{g as Q}from"./tooltip.Fu2L7Wqu.js";import{H as R}from"./Header.NtukvHHH.js";import{S as T}from"./Svg.S2MCMmQX.js";const V=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
</svg>`;function W(s){let e,l;return e=new R({props:{title:s[1]}}),{c(){z(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,a){M(e,t,a),l=!0},p(t,a){const n={};a&2&&(n.title=t[1]),e.$set(n)},i(t){l||(v(e.$$.fragment,t),l=!0)},o(t){h(e.$$.fragment,t),l=!1},d(t){j(e,t)}}}function X(s){let e="h"+s[0],l,t="h"+s[0]&&k(s);return{c(){t&&t.c(),l=g()},l(a){t&&t.l(a),l=g()},m(a,n){t&&t.m(a,n),w(a,l,n)},p(a,n){"h"+a[0]?e?A(e,"h"+a[0])?(t.d(1),t=k(a),e="h"+a[0],t.c(),t.m(l.parentNode,l)):t.p(a,n):(t=k(a),e="h"+a[0],t.c(),t.m(l.parentNode,l)):e&&(t.d(1),t=null,e="h"+a[0])},i:q,o(a){h(t,a)},d(a){a&&d(l),t&&t.d(a)}}}function k(s){let e,l,t,a,n,o,f,r,_;n=new T({props:{className:"icon-24 align-middle",svg:V}});let c=[{id:s[2]},{class:r=N(s[3])+" svelte-1fw63p"}],p={};for(let i=0;i<c.length;i+=1)p=B(p,c[i]);return{c(){e=y("h"+s[0]),l=F(s[1]),t=G(),a=y("a"),z(n.$$.fragment),this.h()},l(i){e=H(i,("h"+s[0]||"null").toUpperCase(),{id:!0,class:!0});var m=L(e);l=I(m,s[1]),t=U(m),a=H(m,"A",{class:!0,href:!0,"aria-label":!0});var C=L(a);E(n.$$.fragment,C),C.forEach(d),m.forEach(d),this.h()},h(){u(a,"class","anchor-link svelte-1fw63p"),u(a,"href",o="#"+s[2]),u(a,"aria-label",f="link to "+s[1]),S("h"+s[0])(e,p)},m(i,m){w(i,e,m),b(e,l),b(e,t),b(e,a),M(n,a,null),_=!0},p(i,m){(!_||m&2)&&D(l,i[1]),(!_||m&4&&o!==(o="#"+i[2]))&&u(a,"href",o),(!_||m&2&&f!==(f="link to "+i[1]))&&u(a,"aria-label",f),S("h"+i[0])(e,p=Q(c,[(!_||m&4)&&{id:i[2]},(!_||m&8&&r!==(r=N(i[3])+" svelte-1fw63p"))&&{class:r}]))},i(i){_||(v(n.$$.fragment,i),_=!0)},o(i){h(n.$$.fragment,i),_=!1},d(i){i&&d(e),j(n)}}}function Y(s){let e,l,t,a;const n=[X,W],o=[];function f(r,_){return r[0]>1?0:1}return e=f(s),l=o[e]=n[e](s),{c(){l.c(),t=g()},l(r){l.l(r),t=g()},m(r,_){o[e].m(r,_),w(r,t,_),a=!0},p(r,[_]){let c=e;e=f(r),e===c?o[e].p(r,_):(O(),h(o[c],1,1,()=>{o[c]=null}),P(),l=o[e],l?l.p(r,_):(l=o[e]=n[e](r),l.c()),v(l,1),l.m(t.parentNode,t))},i(r){a||(v(l),a=!0)},o(r){h(l),a=!1},d(r){r&&d(t),o[e].d(r)}}}function Z(s,e,l){let{depth:t}=e,{text:a}=e,{id:n=a.toLowerCase().replace(/\s/g,"-").trim()}=e,{headerClassName:o=void 0}=e;return s.$$set=f=>{"depth"in f&&l(0,t=f.depth),"text"in f&&l(1,a=f.text),"id"in f&&l(2,n=f.id),"headerClassName"in f&&l(3,o=f.headerClassName)},[t,a,n,o]}class le extends J{constructor(e){super(),K(this,e,Z,Y,A,{depth:0,text:1,id:2,headerClassName:3})}}export{le as H};
