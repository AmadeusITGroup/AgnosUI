import{S as ie,i as ne,s as te,Q as O,k as L,f as S,l as w,q as t,g as N,v as k,x as M,n as T,h as F,U as be,b as j,j as R,M as V,C as z,u as X,z as fe,c as _e,m as ce,t as pe,a as me,d as ge}from"./AppCommon-EGvQgKwz.js";import{c as he}from"./config-dcf0MZy6.js";import{c as ke}from"./pagination-BpPHKQsH-Vfz41Vcl.js";import"./directive-3-8yr-ZK-C23OGezp.js";import"./writables-DoU_XYTX-esNIv65O.js";function Y(a,e,l){const n=a.slice();return n[0]=e[l],n[37]=l,n}function Z(a){let e,l,n,s,r,f;return{c(){e=L("button"),l=L("span"),l.textContent="«",t(l,"aria-hidden","true"),t(e,"class","join-item btn btn-outline"),t(e,"aria-label",a[4]),e.disabled=a[5],t(e,"aria-disabled",n=a[5]?"true":null),t(e,"tabindex",s=a[5]?-1:void 0)},m(i,u){N(i,e,u),k(e,l),r||(f=z(e,"click",a[30]),r=!0)},p(i,u){u[0]&16&&t(e,"aria-label",i[4]),u[0]&32&&(e.disabled=i[5]),u[0]&32&&n!==(n=i[5]?"true":null)&&t(e,"aria-disabled",n),u[0]&32&&s!==(s=i[5]?-1:void 0)&&t(e,"tabindex",s)},d(i){i&&F(e),r=!1,f()}}}function y(a){let e,l,n,s,r,f;return{c(){e=L("button"),l=L("span"),l.textContent="‹",t(l,"aria-hidden","true"),t(e,"class","join-item btn btn-outline"),e.disabled=a[5],t(e,"aria-label",a[7]),t(e,"tabindex",n=a[5]?-1:void 0),t(e,"aria-disabled",s=a[5]?"true":null)},m(i,u){N(i,e,u),k(e,l),r||(f=z(e,"click",a[31]),r=!0)},p(i,u){u[0]&32&&(e.disabled=i[5]),u[0]&128&&t(e,"aria-label",i[7]),u[0]&32&&n!==(n=i[5]?-1:void 0)&&t(e,"tabindex",n),u[0]&32&&s!==(s=i[5]?"true":null)&&t(e,"aria-disabled",s)},d(i){i&&F(e),r=!1,f()}}}function $(a){let e,l=a[8].activeLabel+"",n;return{c(){e=L("span"),n=w(l),t(e,"class","sr-only")},m(s,r){N(s,e,r),k(e,n)},p(s,r){r[0]&256&&l!==(l=s[8].activeLabel+"")&&M(n,l)},d(s){s&&F(e)}}}function x(a){let e,l=a[0]+"",n,s,r,f,i,u,C,c=a[8].page===a[0]&&$(a);function P(){return a[32](a[0])}return{c(){e=L("button"),n=w(l),s=S(),c&&c.c(),t(e,"class","join-item btn btn-outline"),t(e,"aria-current",r=a[0]===a[8].page?"page":null),t(e,"tabindex",f=a[0]===-1||a[8].disabled?-1:void 0),e.disabled=i=a[0]===-1||a[8].disabled,X(e,"btn-active",a[0]===a[8].page)},m(_,b){N(_,e,b),k(e,n),k(e,s),c&&c.m(e,null),u||(C=z(e,"click",function(){fe(a[0]===-1?le:P)&&(a[0]===-1?le:P).apply(this,arguments)}),u=!0)},p(_,b){a=_,b[0]&256&&l!==(l=a[0]+"")&&M(n,l),a[8].page===a[0]?c?c.p(a,b):(c=$(a),c.c(),c.m(e,null)):c&&(c.d(1),c=null),b[0]&256&&r!==(r=a[0]===a[8].page?"page":null)&&t(e,"aria-current",r),b[0]&256&&f!==(f=a[0]===-1||a[8].disabled?-1:void 0)&&t(e,"tabindex",f),b[0]&256&&i!==(i=a[0]===-1||a[8].disabled)&&(e.disabled=i),b[0]&256&&X(e,"btn-active",a[0]===a[8].page)},d(_){_&&F(e),c&&c.d(),u=!1,C()}}}function ee(a){let e,l,n,s,r,f;return{c(){e=L("button"),l=L("span"),l.textContent="›",t(l,"aria-hidden","true"),t(e,"class","join-item btn btn-outline"),e.disabled=a[9],t(e,"aria-label",a[10]),t(e,"tabindex",n=a[9]?-1:void 0),t(e,"aria-disabled",s=a[9]?"true":null)},m(i,u){N(i,e,u),k(e,l),r||(f=z(e,"click",a[33]),r=!0)},p(i,u){u[0]&512&&(e.disabled=i[9]),u[0]&1024&&t(e,"aria-label",i[10]),u[0]&512&&n!==(n=i[9]?-1:void 0)&&t(e,"tabindex",n),u[0]&512&&s!==(s=i[9]?"true":null)&&t(e,"aria-disabled",s)},d(i){i&&F(e),r=!1,f()}}}function ae(a){let e,l,n,s,r,f;return{c(){e=L("button"),l=L("span"),l.textContent="»",t(l,"aria-hidden","true"),t(e,"class","join-item btn btn-outline"),t(e,"aria-label",a[11]),e.disabled=a[9],t(e,"tabindex",n=a[9]?-1:void 0),t(e,"aria-disabled",s=a[9]?"true":null)},m(i,u){N(i,e,u),k(e,l),r||(f=z(e,"click",a[34]),r=!0)},p(i,u){u[0]&2048&&t(e,"aria-label",i[11]),u[0]&512&&(e.disabled=i[9]),u[0]&512&&n!==(n=i[9]?-1:void 0)&&t(e,"tabindex",n),u[0]&512&&s!==(s=i[9]?"true":null)&&t(e,"aria-disabled",s)},d(i){i&&F(e),r=!1,f()}}}function ve(a){let e,l,n,s,r,f,i,u,C,c=`${a[12]}`,P,_=a[3]&&Z(a),b=a[6]&&y(a),D=O(a[8].pages),m=[];for(let o=0;o<D.length;o+=1)m[o]=x(Y(a,D,o));let g=a[6]&&ee(a),h=a[3]&&ae(a);return{c(){e=L("nav"),l=L("div"),_&&_.c(),n=S(),b&&b.c(),s=S();for(let o=0;o<m.length;o+=1)m[o].c();r=S(),g&&g.c(),f=S(),h&&h.c(),u=S(),C=L("div"),P=w(c),t(l,"class",i="join "+a[2]),t(C,"aria-live","polite"),t(C,"class","sr-only"),t(e,"aria-label",a[1])},m(o,v){N(o,e,v),k(e,l),_&&_.m(l,null),k(l,n),b&&b.m(l,null),k(l,s);for(let p=0;p<m.length;p+=1)m[p]&&m[p].m(l,null);k(l,r),g&&g.m(l,null),k(l,f),h&&h.m(l,null),k(e,u),k(e,C),k(C,P)},p(o,v){if(o[3]?_?_.p(o,v):(_=Z(o),_.c(),_.m(l,n)):_&&(_.d(1),_=null),o[6]?b?b.p(o,v):(b=y(o),b.c(),b.m(l,s)):b&&(b.d(1),b=null),v[0]&8448){D=O(o[8].pages);let p;for(p=0;p<D.length;p+=1){const q=Y(o,D,p);m[p]?m[p].p(q,v):(m[p]=x(q),m[p].c(),m[p].m(l,r))}for(;p<m.length;p+=1)m[p].d(1);m.length=D.length}o[6]?g?g.p(o,v):(g=ee(o),g.c(),g.m(l,f)):g&&(g.d(1),g=null),o[3]?h?h.p(o,v):(h=ae(o),h.c(),h.m(l,null)):h&&(h.d(1),h=null),v[0]&4&&i!==(i="join "+o[2])&&t(l,"class",i),v[0]&4096&&c!==(c=`${o[12]}`)&&M(P,c),v[0]&2&&t(e,"aria-label",o[1])},i:T,o:T,d(o){o&&F(e),_&&_.d(),b&&b.d(),be(m,o),g&&g.d(),h&&h.d()}}}const le=()=>{};function Le(a,e,l){let n,s,r,f,i,u,C,c,P,_,b,D,{page:m=void 0}=e;const g=he({factory:ke,widgetName:"pagination",$$props:e,events:{onPageChange:d=>{l(0,m=d)}}}),{stores:{boundaryLinks$:h,directionLinks$:o,nextDisabled$:v,previousDisabled$:p,ariaLabel$:q,ariaFirstLabel$:Q,ariaPreviousLabel$:U,ariaNextLabel$:W,ariaLastLabel$:A,ariaLiveLabelText$:B,className$:E},state$:G,actions:{first:H,previous:I,next:J,last:K}}=g;j(a,h,d=>l(3,r=d)),j(a,o,d=>l(6,u=d)),j(a,v,d=>l(9,P=d)),j(a,p,d=>l(5,i=d)),j(a,q,d=>l(1,n=d)),j(a,Q,d=>l(4,f=d)),j(a,U,d=>l(7,C=d)),j(a,W,d=>l(10,_=d)),j(a,A,d=>l(11,b=d)),j(a,B,d=>l(12,D=d)),j(a,E,d=>l(2,s=d)),j(a,G,d=>l(8,c=d));const se=()=>H(),ue=()=>I(),oe=d=>g.actions.select(d),re=()=>J(),de=()=>K();return a.$$set=d=>{l(35,e=R(R({},e),V(d))),"page"in d&&l(0,m=d.page)},a.$$.update=()=>{g.patchChangedProps(e)},e=V(e),[m,n,s,r,f,i,u,C,c,P,_,b,D,g,h,o,v,p,q,Q,U,W,A,B,E,G,H,I,J,K,se,ue,oe,re,de]}class je extends ie{constructor(e){super(),ne(this,e,Le,ve,te,{page:0},null,[-1,-1])}}function Ce(a){let e,l;return e=new je({props:{collectionSize:40,boundaryLinks:!0}}),{c(){_e(e.$$.fragment)},m(n,s){ce(e,n,s),l=!0},p:T,i(n){l||(pe(e.$$.fragment,n),l=!0)},o(n){me(e.$$.fragment,n),l=!1},d(n){ge(e,n)}}}class qe extends ie{constructor(e){super(),ne(this,e,null,Ce,te,{})}}export{qe as default};
