import{p as k,s as v,d as y,b as f,a as T,t as w,e as a,h as C,l as F,g as D,n as H,q as P,r as S}from"./AppCommon-D6XzPDt_.js";import{s as W}from"./snippet-Bt6SC6hZ.js";import{a as m}from"./actions-C5zFepch.js";import{c as q}from"./simpleClassTransition-BrNXnl2v.js";import{c as $}from"./config-BMGCqy3X.js";import{c as j}from"./baseTransitions-DhTxxwqe.js";import{c as z}from"./directive-CKEccryv-BLJ74ze2.js";import"./cssTransitions-1ZcI4GgD.js";import"./promise-CY2U8bTP-CiDKceh8.js";import"./config-D1K6DXRz.js";import"./index-client-D9YS31ny.js";import"./writables-DCiBdIBK-M3xMKWuL.js";var A=(i,t)=>t(),B=(i,t)=>t(),E=w('<div class="flip-card"><div><div class="flip-card-front"><!> <button class="btn btn-outline-secondary">Hide again.</button></div> <div class="flip-card-back"><button class="btn btn-outline-primary"> </button></div></div></div>');function G(i,t){k(t,!0);const{api:{show:o,hide:s},directives:{directive:_}}=$({factory:j,props:{visible:!1,transition:q({hideClasses:["hide"],animationPendingHideClasses:["hide"]})}});var n=E(),e=a(n);const u=P(()=>({}));let c;var d=a(e),l=a(d);W(l,()=>t.children);var b=v(l,2);b.__click=[A,s];var h=v(d,2),p=a(h);p.__click=[B,o];var g=a(p);m(e,(r,x)=>z(r,x),()=>"flip-card-inner"),m(e,r=>_(r)),y(()=>{c=F(e,c,{...D(u)}),H(g,t.hiddenText)}),f(i,n),T()}C(["click"]);function Y(i){G(i,{hiddenText:"What is hiding behing this ?",children:(t,o)=>{var s=S("Some new content !");f(t,s)},$$slots:{default:!0}})}export{Y as default};