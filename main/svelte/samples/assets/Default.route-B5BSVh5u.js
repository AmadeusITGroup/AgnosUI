import{p as H,M as L,P as C,d as R,b as k,a as N,t as $,K as P,e as j,a2 as y,g as l,S as w,V as D,f as F,h as _,R as b,j as h,s as c,n as m,l as x}from"./AppCommon-DE0E2XGg.js";import{s as K}from"./class-BnI4rxOn.js";import{c as M}from"./config-BgU-dv5U.js";import{c as S}from"./rating-B1JLZgIR-DNbpfsyo.js";import"./dom-BB9jLllr-DsL3TsuS.js";import"./stores-UZEPS6vP.js";import"./index-client-C1bhGAJo.js";import"./writables-DCiBdIBK-BvUcp8gb.js";var V=(p,a,r)=>a(r()+1),W=$('<input type="radio" name="rating-1" class="mask mask-star-2 bg-orange-400">'),q=$("<div></div>");function z(p,a){H(a,!0);let r=L(a,"rating",15),v=P(a,["$$slots","$$events","$$legacy","rating"]);const{state:s,api:{setRating:g,setHoveredRating:f,leave:d}}=M({factory:S,widgetName:"rating",get props(){return{...v,rating:r()}},enablePatchChanged:!0,events:{onRatingChange:t=>{r(t)}}});var n=q();C(n,21,()=>s.stars,({index:t})=>t,(t,u)=>{let i=()=>l(u).index;var e=W();e.__click=[V,g,i],R(()=>{w(e,"aria-label",`${s.ariaLabel} star ${i()+1}`),D(e,i()+1===s.visibleRating)}),y("mouseleave",e,d),y("mouseenter",e,()=>f(i()+1)),k(t,e)}),R(()=>K(n,`rating ${s.className??""}`)),k(p,n),N()}j(["click"]);var A=$('<!> <div class="mt-2">Current rate: <span id="defaultRating"> </span><br> Hovered: <span id="defaultHovered"> </span><br> Left: <span id="defaultLeft"> </span></div>',1);function U(p){let a=h(3),r=h(0),v=h(0);var s=A(),g=F(s);z(g,{onHover:o=>_(r,b(o)),onLeave:o=>_(v,b(o)),get rating(){return l(a)},set rating(o){_(a,b(o))}});var f=c(g,2),d=c(m(f)),n=m(d),t=c(d,3),u=m(t),i=c(t,3),e=m(i);R(()=>{x(n,l(a)),x(u,l(r)),x(e,l(v))}),k(p,s)}export{U as default};
