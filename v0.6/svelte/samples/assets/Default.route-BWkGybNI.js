import{p as L,M as H,P as C,d as R,b as k,a as N,t as $,L as P,h as j,a2 as y,g as l,S as w,V as D,f as F,j as _,R as h,s as c,k as b,e as m,n as x}from"./AppCommon-C_Uz3Ejm.js";import{s as M}from"./class-DjsZmGv6.js";import{c as S}from"./config-vsRo1j0h.js";import{c as V}from"./rating-Da38uaZz-D2diWseo.js";import"./directive-CKEccryv-Dj2WBjfx.js";import"./index-client-D5u8RE9d.js";import"./writables-DCiBdIBK-COVli6XW.js";var W=(p,a,r)=>a(r()+1),q=$('<input type="radio" name="rating-1" class="mask mask-star">'),z=$("<div></div>");function A(p,a){L(a,!0);let r=H(a,"rating",15),v=P(a,["$$slots","$$events","$$legacy","rating"]);const{state:s,api:{setRating:d,setHoveredRating:f,leave:g}}=S({factory:V,widgetName:"rating",get props(){return{...v,rating:r()}},enablePatchChanged:!0,events:{onRatingChange:t=>{r(t)}}});var n=z();C(n,21,()=>s.stars,({index:t})=>t,(t,u)=>{let i=()=>l(u).index;var e=q();e.__click=[W,d,i],R(()=>{w(e,"aria-label",`${s.ariaLabel} star ${i()+1}`),D(e,i()+1===s.visibleRating)}),y("mouseleave",e,g),y("mouseenter",e,()=>f(i()+1)),k(t,e)}),R(()=>M(n,`rating ${s.className??""}`)),k(p,n),N()}j(["click"]);var B=$('<!> <div>Current rate: <span id="defaultRating"> </span><br> Hovered: <span id="defaultHovered"> </span><br> Left: <span id="defaultLeft"> </span></div>',1);function T(p){let a=b(3),r=b(0),v=b(0);var s=B(),d=F(s);A(d,{get rating(){return l(a)},set rating(o){_(a,h(o))},onHover:o=>_(r,h(o)),onLeave:o=>_(v,h(o))});var f=c(d,2),g=c(m(f)),n=m(g),t=c(g,3),u=m(t),i=c(t,3),e=m(i);R(()=>{x(n,l(a)),x(u,l(r)),x(e,l(v))}),k(p,s)}export{T as default};