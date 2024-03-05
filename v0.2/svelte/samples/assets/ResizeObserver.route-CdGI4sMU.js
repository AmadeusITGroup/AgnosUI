import{S as O,i as q,s as S,e as u,k as z,l as _,a as s,q as C,a1 as R,b as T,r as a,y as D,u as k,w as M,n as w,f as V,x as j,h as A}from"./AppCommon-CtUlaPGQ.js";import{c as B}from"./resizeObserver-CwRdMejc.js";import"./directive-C64J9ynN.js";import"./func-fOTgS_tI.js";function E(i){let t,n,r,e,f,l,b,d,m,h,y,c,x,p,v,H;return{c(){t=u("div"),n=u("label"),n.textContent="Resizable textarea:",r=z(),e=u("textarea"),f=z(),l=u("div"),b=_("Textarea content height: "),d=u("span"),m=_(i[1]),h=_("px"),y=z(),c=u("button"),c.textContent="Height --",x=z(),p=u("button"),p.textContent="Height ++",s(n,"for","resizable"),s(e,"name","resizable"),s(e,"id","resizable"),s(e,"rows","6"),s(e,"cols","50"),s(e,"class","form-control"),e.value=`This simple example is using the resizeObserver feature from @agnos-ui/core and displays the height of the textarea below it.
Modify the height to more than 200 px and see the font size changing.`,C(e,"fontsize",i[1]&&i[1]>200),R(e,"height",i[0]+"px"),s(d,"id","dynamic-height"),s(c,"type","button"),s(c,"class","btn btn-primary m-2"),s(c,"id","decreaseHeight"),s(p,"type","button"),s(p,"class","btn btn-primary m-2"),s(p,"id","increaseHeight"),s(t,"class","demo-resize-observer")},m(o,g){T(o,t,g),a(t,n),a(t,r),a(t,e),a(t,f),a(t,l),a(l,b),a(l,d),a(d,m),a(l,h),a(t,y),a(t,c),a(t,x),a(t,p),v||(H=[D(i[3].call(null,e)),k(c,"click",i[5]),k(p,"click",i[4])],v=!0)},p(o,[g]){g&2&&C(e,"fontsize",o[1]&&o[1]>200),g&1&&R(e,"height",o[0]+"px"),g&2&&M(m,o[1])},i:w,o:w,d(o){o&&V(t),v=!1,j(H)}}}function F(i,t,n){let r,e;const{dimensions$:f,directive:l}=B();A(i,f,h=>n(6,e=h));let b=180;function d(){n(0,b=(r||0)+50)}function m(){n(0,b=r?r-50:0)}return i.$$.update=()=>{var h;i.$$.dirty&64&&n(1,r=(h=e==null?void 0:e.contentRect)==null?void 0:h.height)},[b,r,f,l,d,m,e]}class L extends O{constructor(t){super(),q(this,t,F,E,S,{})}}export{L as default};
