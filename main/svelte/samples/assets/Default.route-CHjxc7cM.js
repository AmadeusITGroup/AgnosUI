import{I as z,J as G,p as M,K as T,t as S,h as j,c as l,a as D,j as g,d as x,M as L,O as N,o as Q,b as I,e as R,r as U,f as K,q as m}from"./AppCommon-CsXJDRZ3.js";import{s as P}from"./snippet-B5aMU-E6.js";import{a as d}from"./actions-kl0KjzIn.js";import{c as q}from"./config-TUPcxXVO.js";import{a as X}from"./accordion-CoM4efp--H5juMFuI.js";import{c as y}from"./dom-gfxqXJpK-BenLeVwg.js";import{c as Y}from"./simpleClassTransition-DcitWHdq.js";import"./stores-BElQIA3m.js";import"./index-client-BaNbKOMT.js";import"./baseTransitions-Bdi_u5YA.js";import"./writables-CgpOQ4hA-DwO4tqpW.js";import"./promise-XSP94FjG-Bz_ckb1K.js";import"./widget-DeVncyQM.js";import"./cssTransitions-D71ShtyF.js";const B=Symbol("accordion-api");function Z(p){z(B,p)}function ee(){return G(B)}var te=S("<div><!></div>");function oe(p,s){M(s,!0);let _=T(s,["$$slots","$$events","$$legacy","children"]);const{api:v,directives:c}=q(X,{props:_});Z(v);var i=te();let h;var u=x(i);P(u,()=>s.children),d(i,(t,o)=>{var r;return(r=y)==null?void 0:r(t,o)},()=>"flex flex-col gap-2"),d(i,t=>{var o;return(o=c.accordionDirective)==null?void 0:o.call(c,t)}),j(t=>h=g(i,h,{...t}),[()=>({})]),l(p,i),D()}var re=S("<div><div><!></div> <div><!></div></div>");function w(p,s){const _=L();M(s,!0);let v=N(s,"visible",15),c=T(s,["$$slots","$$events","$$legacy","header","children","visible"]);const i=Y({showClasses:["collapse-open"],animationPendingShowClasses:["collapse-open"]}),{registerItem:h}=ee(),u=q(h,{get props(){return{visible:v(),...c}},events:{onVisibleChange:e=>{v(e)}},defaultConfig:{transition:i,id:_}}),{state:t,directives:{itemDirective:o,toggleDirective:r,transitionDirective:A,bodyContainerAttrsDirective:C},api:{toggle:E}}=u,H=e=>{e.key==="Enter"&&E()};Q(u.api.initDone);var f=re();let O;var b=x(f);let k;var J=x(b);P(J,()=>s.header),d(b,(e,n)=>{var a;return(a=y)==null?void 0:a(e,n)},()=>"collapse-title font-semibold focus-visible:outline-hidden"),d(b,e=>r==null?void 0:r(e));var $=I(b,2);let F;var V=x($);{var W=e=>{var n=U(),a=K(n);P(a,()=>s.children),l(e,n)};R(V,e=>{t.shouldBeInDOM&&e(W)})}d($,(e,n)=>{var a;return(a=y)==null?void 0:a(e,n)},()=>"collapse-content text-sm"),d($,e=>C==null?void 0:C(e)),d(f,(e,n)=>{var a;return(a=y)==null?void 0:a(e,n)},()=>"collapse collapse-arrow bg-base-100 border border-base-300 has-[:focus-visible]:ring"),d(f,e=>o==null?void 0:o(e)),d(f,e=>A==null?void 0:A(e)),j((e,n,a)=>{O=g(f,O,{...e}),k=g(b,k,{role:"button",tabindex:"0",onkeydown:H,...n}),F=g($,F,{...a})},[()=>({}),()=>({}),()=>({})]),l(p,f),D()}var ae=S("<!> <!> <!>",1);function $e(p){oe(p,{closeOthers:!0,itemDestroyOnHide:!0,children:(s,_)=>{var v=ae(),c=K(v);w(c,{visible:!0,header:t=>{var o=m("First header");l(t,o)},children:(t,o)=>{var r=m("First content");l(t,r)},$$slots:{header:!0,default:!0}});var i=I(c,2);w(i,{header:t=>{var o=m("Second header");l(t,o)},children:(t,o)=>{var r=m("Second content");l(t,r)},$$slots:{header:!0,default:!0}});var h=I(i,2);w(h,{header:t=>{var o=m("Third header");l(t,o)},children:(t,o)=>{var r=m("Third content");l(t,r)},$$slots:{header:!0,default:!0}}),l(s,v)},$$slots:{default:!0}})}export{$e as default};
