import{p as l,t as u,d as c,h as f,c as h,a as b,g as S,L as x,a1 as C,aq as E,O as w,K as B,j as L,v as N}from"./AppCommon-DczBRKfc.js";import{a as g}from"./actions-BhYuyLTC.js";import{c as T}from"./progressbar-BoJsBPH1-CGO49FFT.js";import{d as A,a as m,t as O}from"./writables-DCiBdIBK-BdiiAIhs.js";import{e as W}from"./extendWidget-BCWiClMi.js";import{B as j}from"./types-Bw2nvhNr.js";import{S as y}from"./Slot-BWbMyOUk.js";import{c as q}from"./config-DWzJRjCO.js";import{s as v}from"./style-PwPRnE0L.js";import{c as D}from"./dom-gfxqXJpK-CZnkTY3P.js";const F={structure:void 0,children:void 0,height:"",striped:!1,animated:!1,type:void 0},K={height:O,striped:m,animated:m,type:A([void 0,...j]),structure:void 0,children:void 0},U=W(T,F,K),V=U;var X=u('<div class="progress"><div><!></div></div>');function k(r,t){l(t,!0);var a=X(),e=c(a),d=c(e);const s=x(()=>({state:t.state,api:t.api,directives:t.directives}));y(d,{get content(){return t.state.children},get props(){return S(s)}}),f(()=>{v(a,"height",t.state.height),C(e,1,E(["progress-bar",t.state.type?`text-bg-${t.state.type}`:"",{"progress-bar-striped":t.state.striped,"progress-bar-animated":t.state.animated}])),v(e,"width",`${t.state.percentage}%`)}),h(r,a),b()}const z=(r,t=w)=>{k(r,N(t))};var G=u("<div><!></div>");function et(r,t){l(t,!0);let a=B(t,["$$slots","$$events","$$legacy"]);const e=q({factory:V,widgetName:"progressbar",props:a,enablePatchChanged:!0,defaultConfig:{structure:z}}),{state:d,directives:{ariaDirective:s}}=e;var o=G();let n;var _=c(o);y(_,{get content(){return d.structure},props:e}),g(o,i=>s==null?void 0:s(i)),g(o,(i,P)=>{var p;return(p=D)==null?void 0:p(i,P)},()=>d.className||void 0),f(i=>n=L(o,n,{...i}),[()=>({})]),h(r,o),b()}export{et as P};
