import{p as u,g as f,d as h,b,a as _,t as y,e as n,q as P,w as E,Q as B,O as D,l as N}from"./AppCommon-D6XzPDt_.js";import{a as g}from"./actions-C5zFepch.js";import{c as T}from"./progressbar-CGmNq0cS-BzkNzhlx.js";import{b as A,t as l,d as L}from"./writables-DCiBdIBK-M3xMKWuL.js";import{e as O}from"./extendWidget-Cq2v8VqQ.js";import{B as W}from"./types-Bw2nvhNr.js";import{S}from"./Slot-DAvQuAHA.js";import{c as q}from"./config-BMGCqy3X.js";import{s as F,t as m}from"./class-BjsImlqy.js";import{s as v}from"./style-PwPRnE0L.js";import{c as Q}from"./directive-CKEccryv-BLJ74ze2.js";const U={structure:void 0,children:void 0,height:"",striped:!1,animated:!1,type:void 0},V={height:A,striped:l,animated:l,type:L([void 0,...W]),structure:void 0,children:void 0},X=O(T,U,V),j=X;var k=y('<div class="progress"><div><!></div></div>');function z(d,t){u(t,!0);var r=k(),e=n(r),i=n(e),o=P(()=>({state:t.state,api:t.api,directives:t.directives}));S(i,{get content(){return t.state.children},get props(){return f(o)}}),h(()=>{v(r,"height",t.state.height),F(e,`progress-bar ${t.state.type?`text-bg-${t.state.type}`:""}`),m(e,"progress-bar-striped",t.state.striped),m(e,"progress-bar-animated",t.state.animated),v(e,"width",`${t.state.percentage}%`)}),b(d,r),_()}var G=y("<div><!></div>");function rt(d,t){u(t,!0);const r=(s,c=B)=>{z(s,E(c))};let e=D(t,["$$slots","$$events","$$legacy"]);const i=q({factory:j,widgetName:"progressbar",props:e,enablePatchChanged:!0,defaultConfig:{structure:r}}),{state:o,directives:{ariaDirective:w}}=i;var a=G();const x=P(()=>({}));let p;var C=n(a);S(C,{get content(){return o.structure},props:i}),g(a,s=>w(s)),g(a,(s,c)=>Q(s,c),()=>o.className||void 0),h(()=>p=N(a,p,{...f(x)})),b(d,a),_()}export{rt as P};