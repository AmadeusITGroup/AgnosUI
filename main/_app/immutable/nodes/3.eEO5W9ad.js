import{s as A,l as F,a as C,e as b,g as E,c as k,b as w,f as h,m as c,i as m,h as I,u as z,o as H,p as L,k as V,t as T,q as $,d as j,j as q}from"../chunks/scheduler.Hr4oCa1m.js";import{S as N,i as O,t as P,a as U}from"../chunks/index.DS88fdNR.js";import{p as X}from"../chunks/stores.DZh4cLEo.js";import{p as y,s as B}from"../chunks/stores.D7Tj7WDX.js";function R(s){let l,d="PREVIOUS",n,t,f=s[0].data.prev.title+"",_,r;return{c(){l=b("div"),l.textContent=d,n=C(),t=b("a"),_=T(f),this.h()},l(e){l=k(e,"DIV",{class:!0,"data-svelte-h":!0}),$(l)!=="svelte-gehx1a"&&(l.textContent=d),n=E(e),t=k(e,"A",{class:!0,href:!0});var i=w(t);_=j(i,f),i.forEach(h),this.h()},h(){c(l,"class","fw-bolder text-start"),c(t,"class","text-start"),c(t,"href",r=s[1]+"docs/"+s[2]+"/"+s[0].data.prev.slug+(s[0].data.prev.subpath??""))},m(e,i){m(e,l,i),m(e,n,i),m(e,t,i),I(t,_)},p(e,i){i&1&&f!==(f=e[0].data.prev.title+"")&&q(_,f),i&7&&r!==(r=e[1]+"docs/"+e[2]+"/"+e[0].data.prev.slug+(e[0].data.prev.subpath??""))&&c(t,"href",r)},d(e){e&&(h(l),h(n),h(t))}}}function S(s){let l,d="NEXT",n,t,f=s[0].data.next.title+"",_,r;return{c(){l=b("div"),l.textContent=d,n=C(),t=b("a"),_=T(f),this.h()},l(e){l=k(e,"DIV",{class:!0,"data-svelte-h":!0}),$(l)!=="svelte-di0z1b"&&(l.textContent=d),n=E(e),t=k(e,"A",{class:!0,href:!0});var i=w(t);_=j(i,f),i.forEach(h),this.h()},h(){c(l,"class","fw-bolder text-end"),c(t,"class","text-end"),c(t,"href",r=s[1]+"docs/"+s[2]+"/"+s[0].data.next.slug+(s[0].data.next.subpath??""))},m(e,i){m(e,l,i),m(e,n,i),m(e,t,i),I(t,_)},p(e,i){i&1&&f!==(f=e[0].data.next.title+"")&&q(_,f),i&7&&r!==(r=e[1]+"docs/"+e[2]+"/"+e[0].data.next.slug+(e[0].data.next.subpath??""))&&c(t,"href",r)},d(e){e&&(h(l),h(n),h(t))}}}function G(s){let l,d,n,t,f,_,r,e;const i=s[4].default,v=F(i,s,s[3],null);let o=s[0].data.prev&&R(s),u=s[0].data.next&&S(s);return{c(){v&&v.c(),l=C(),d=b("hr"),n=C(),t=b("div"),f=b("div"),o&&o.c(),_=C(),r=b("div"),u&&u.c(),this.h()},l(a){v&&v.l(a),l=E(a),d=k(a,"HR",{}),n=E(a),t=k(a,"DIV",{class:!0});var p=w(t);f=k(p,"DIV",{});var D=w(f);o&&o.l(D),D.forEach(h),_=E(p),r=k(p,"DIV",{});var g=w(r);u&&u.l(g),g.forEach(h),p.forEach(h),this.h()},h(){c(t,"class","w-100 d-flex justify-content-between")},m(a,p){v&&v.m(a,p),m(a,l,p),m(a,d,p),m(a,n,p),m(a,t,p),I(t,f),o&&o.m(f,null),I(t,_),I(t,r),u&&u.m(r,null),e=!0},p(a,[p]){v&&v.p&&(!e||p&8)&&z(v,i,a,a[3],e?L(i,a[3],p,null):H(a[3]),null),a[0].data.prev?o?o.p(a,p):(o=R(a),o.c(),o.m(f,null)):o&&(o.d(1),o=null),a[0].data.next?u?u.p(a,p):(u=S(a),u.c(),u.m(r,null)):u&&(u.d(1),u=null)},i(a){e||(P(v,a),e=!0)},o(a){U(v,a),e=!1},d(a){a&&(h(l),h(d),h(n),h(t)),v&&v.d(a),o&&o.d(),u&&u.d()}}}function J(s,l,d){let n,t,f;V(s,X,e=>d(0,n=e)),V(s,y,e=>d(1,t=e)),V(s,B,e=>d(2,f=e));let{$$slots:_={},$$scope:r}=l;return s.$$set=e=>{"$$scope"in e&&d(3,r=e.$$scope)},[n,t,f,r,_]}class Y extends N{constructor(l){super(),O(this,l,J,G,A,{})}}export{Y as component};
