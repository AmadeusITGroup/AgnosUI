import{S as se,i as ue,s as oe,R as X,e as L,k as F,l as E,a as t,b as D,r as v,w as I,n as z,f as w,V as pe,O as me,h as C,C as Y,N as Z,u as q,q as y,v as ge,c as he,m as ke,t as ve,d as Le,g as Ce}from"./AppCommon-CEfWotzS.js";import{c as je}from"./config-D4_HS93f.js";import{c as Ne}from"./pagination-BuRJx4Xr.js";import"./func-fOTgS_tI.js";import"./stores-Bv6KburJ.js";import"./pagination-BEmn0Lbv.js";import"./writables-_Hf-xFlO.js";function $(a,e,l){const n=a.slice();return n[0]=e[l],n[39]=l,n}function x(a){let e,l,n,u,s,b;return{c(){e=L("button"),l=L("span"),l.textContent="«",t(l,"aria-hidden","true"),t(e,"class","join-item btn btn-outline"),t(e,"aria-label",a[4]),e.disabled=a[5],t(e,"aria-disabled",n=a[5]?"true":null),t(e,"tabindex",u=a[5]?-1:void 0)},m(i,o){D(i,e,o),v(e,l),s||(b=q(e,"click",a[30]),s=!0)},p(i,o){o[0]&16&&t(e,"aria-label",i[4]),o[0]&32&&(e.disabled=i[5]),o[0]&32&&n!==(n=i[5]?"true":null)&&t(e,"aria-disabled",n),o[0]&32&&u!==(u=i[5]?-1:void 0)&&t(e,"tabindex",u)},d(i){i&&w(e),s=!1,b()}}}function ee(a){let e,l,n,u,s,b;return{c(){e=L("button"),l=L("span"),l.textContent="‹",t(l,"aria-hidden","true"),t(e,"class","join-item btn btn-outline"),e.disabled=a[5],t(e,"aria-label",a[7]),t(e,"tabindex",n=a[5]?-1:void 0),t(e,"aria-disabled",u=a[5]?"true":null)},m(i,o){D(i,e,o),v(e,l),s||(b=q(e,"click",a[31]),s=!0)},p(i,o){o[0]&32&&(e.disabled=i[5]),o[0]&128&&t(e,"aria-label",i[7]),o[0]&32&&n!==(n=i[5]?-1:void 0)&&t(e,"tabindex",n),o[0]&32&&u!==(u=i[5]?"true":null)&&t(e,"aria-disabled",u)},d(i){i&&w(e),s=!1,b()}}}function ae(a){let e,l=a[8].activeLabel+"",n;return{c(){e=L("span"),n=E(l),t(e,"class","sr-only")},m(u,s){D(u,e,s),v(e,n)},p(u,s){s[0]&256&&l!==(l=u[8].activeLabel+"")&&I(n,l)},d(u){u&&w(e)}}}function le(a){let e,l=a[0]+"",n,u,s,b,i,o,j,c=a[8].page===a[0]&&ae(a);function N(){return a[32](a[0])}return{c(){e=L("button"),n=E(l),u=F(),c&&c.c(),t(e,"class","join-item btn btn-outline"),t(e,"aria-current",s=a[0]===a[8].page?"page":null),t(e,"tabindex",b=a[0]===-1||a[8].disabled?-1:void 0),e.disabled=i=a[0]===-1||a[8].disabled,y(e,"btn-active",a[0]===a[8].page)},m(_,f){D(_,e,f),v(e,n),v(e,u),c&&c.m(e,null),o||(j=q(e,"click",function(){ge(a[0]===-1?te:N)&&(a[0]===-1?te:N).apply(this,arguments)}),o=!0)},p(_,f){a=_,f[0]&256&&l!==(l=a[0]+"")&&I(n,l),a[8].page===a[0]?c?c.p(a,f):(c=ae(a),c.c(),c.m(e,null)):c&&(c.d(1),c=null),f[0]&256&&s!==(s=a[0]===a[8].page?"page":null)&&t(e,"aria-current",s),f[0]&256&&b!==(b=a[0]===-1||a[8].disabled?-1:void 0)&&t(e,"tabindex",b),f[0]&256&&i!==(i=a[0]===-1||a[8].disabled)&&(e.disabled=i),f[0]&256&&y(e,"btn-active",a[0]===a[8].page)},d(_){_&&w(e),c&&c.d(),o=!1,j()}}}function ie(a){let e,l,n,u,s,b;return{c(){e=L("button"),l=L("span"),l.textContent="›",t(l,"aria-hidden","true"),t(e,"class","join-item btn btn-outline"),e.disabled=a[9],t(e,"aria-label",a[10]),t(e,"tabindex",n=a[9]?-1:void 0),t(e,"aria-disabled",u=a[9]?"true":null)},m(i,o){D(i,e,o),v(e,l),s||(b=q(e,"click",a[33]),s=!0)},p(i,o){o[0]&512&&(e.disabled=i[9]),o[0]&1024&&t(e,"aria-label",i[10]),o[0]&512&&n!==(n=i[9]?-1:void 0)&&t(e,"tabindex",n),o[0]&512&&u!==(u=i[9]?"true":null)&&t(e,"aria-disabled",u)},d(i){i&&w(e),s=!1,b()}}}function ne(a){let e,l,n,u,s,b;return{c(){e=L("button"),l=L("span"),l.textContent="»",t(l,"aria-hidden","true"),t(e,"class","join-item btn btn-outline"),t(e,"aria-label",a[11]),e.disabled=a[9],t(e,"tabindex",n=a[9]?-1:void 0),t(e,"aria-disabled",u=a[9]?"true":null)},m(i,o){D(i,e,o),v(e,l),s||(b=q(e,"click",a[34]),s=!0)},p(i,o){o[0]&2048&&t(e,"aria-label",i[11]),o[0]&512&&(e.disabled=i[9]),o[0]&512&&n!==(n=i[9]?-1:void 0)&&t(e,"tabindex",n),o[0]&512&&u!==(u=i[9]?"true":null)&&t(e,"aria-disabled",u)},d(i){i&&w(e),s=!1,b()}}}function Pe(a){let e,l,n,u,s,b,i,o,j,c=`Current page is ${a[12]}`,N,_=a[3]&&x(a),f=a[6]&&ee(a),P=X(a[8].pages),m=[];for(let r=0;r<P.length;r+=1)m[r]=le($(a,P,r));let h=a[6]&&ie(a),g=a[3]&&ne(a);return{c(){e=L("nav"),l=L("div"),_&&_.c(),n=F(),f&&f.c(),u=F();for(let r=0;r<m.length;r+=1)m[r].c();s=F(),h&&h.c(),b=F(),g&&g.c(),o=F(),j=L("div"),N=E(c),t(l,"class",i="join "+a[2]),t(j,"aria-live","polite"),t(j,"class","sr-only"),t(e,"aria-label",a[1])},m(r,k){D(r,e,k),v(e,l),_&&_.m(l,null),v(l,n),f&&f.m(l,null),v(l,u);for(let p=0;p<m.length;p+=1)m[p]&&m[p].m(l,null);v(l,s),h&&h.m(l,null),v(l,b),g&&g.m(l,null),v(e,o),v(e,j),v(j,N)},p(r,k){if(r[3]?_?_.p(r,k):(_=x(r),_.c(),_.m(l,n)):_&&(_.d(1),_=null),r[6]?f?f.p(r,k):(f=ee(r),f.c(),f.m(l,u)):f&&(f.d(1),f=null),k[0]&8448){P=X(r[8].pages);let p;for(p=0;p<P.length;p+=1){const S=$(r,P,p);m[p]?m[p].p(S,k):(m[p]=le(S),m[p].c(),m[p].m(l,s))}for(;p<m.length;p+=1)m[p].d(1);m.length=P.length}r[6]?h?h.p(r,k):(h=ie(r),h.c(),h.m(l,b)):h&&(h.d(1),h=null),r[3]?g?g.p(r,k):(g=ne(r),g.c(),g.m(l,null)):g&&(g.d(1),g=null),k[0]&4&&i!==(i="join "+r[2])&&t(l,"class",i),k[0]&4096&&c!==(c=`Current page is ${r[12]}`)&&I(N,c),k[0]&2&&t(e,"aria-label",r[1])},i:z,o:z,d(r){r&&w(e),_&&_.d(),f&&f.d(),pe(m,r),h&&h.d(),g&&g.d()}}}const te=()=>{};function De(a,e,l){let n,u,s,b,i,o,j,c,N,_,f,P,{$$slots:m={},$$scope:h}=e;const g=me(m);let{page:r=void 0}=e;const k=je({factory:Ne,widgetName:"pagination",$$slots:g,$$props:e,events:{onPageChange:d=>{l(0,r=d)}}}),{stores:{page$:p,boundaryLinks$:S,directionLinks$:O,nextDisabled$:R,previousDisabled$:T,ariaLabel$:U,ariaFirstLabel$:V,ariaPreviousLabel$:W,ariaNextLabel$:A,ariaLastLabel$:B,className$:G},state$:H,actions:{first:J,previous:K,next:M,last:Q},patchChangedProps:re}=k;C(a,p,d=>l(12,P=d)),C(a,S,d=>l(3,s=d)),C(a,O,d=>l(6,o=d)),C(a,R,d=>l(9,N=d)),C(a,T,d=>l(5,i=d)),C(a,U,d=>l(1,n=d)),C(a,V,d=>l(4,b=d)),C(a,W,d=>l(7,j=d)),C(a,A,d=>l(10,_=d)),C(a,B,d=>l(11,f=d)),C(a,G,d=>l(2,u=d)),C(a,H,d=>l(8,c=d));const de=()=>J(),be=()=>K(),fe=d=>k.actions.select(d),_e=()=>M(),ce=()=>Q();return a.$$set=d=>{l(36,e=Y(Y({},e),Z(d))),"page"in d&&l(0,r=d.page)},a.$$.update=()=>{re(e)},e=Z(e),[r,n,u,s,b,i,o,j,c,N,_,f,P,k,p,S,O,R,T,U,V,W,A,B,G,H,J,K,M,Q,de,be,fe,_e,ce]}class we extends se{constructor(e){super(),ue(this,e,De,Pe,oe,{page:0},null,[-1,-1])}}function Fe(a){let e,l,n,u;return n=new we({props:{collectionSize:40,boundaryLinks:!0}}),{c(){e=L("h2"),e.textContent="DaisyUI Example",l=F(),he(n.$$.fragment),t(e,"class","text-lg mb-2")},m(s,b){D(s,e,b),D(s,l,b),ke(n,s,b),u=!0},p:z,i(s){u||(ve(n.$$.fragment,s),u=!0)},o(s){Le(n.$$.fragment,s),u=!1},d(s){s&&(w(e),w(l)),Ce(n,s)}}}class Te extends se{constructor(e){super(),ue(this,e,null,Fe,oe,{})}}export{Te as default};
