import{p as m,t as u,L as S,d as n,h as f,c as h,a as b,g as x,Y as l,W as C,X as E,P as w,K as B,j as L,v as N}from"./AppCommon-B-ROr4aU.js";import{a as p}from"./actions-Cbyr4fVv.js";import{c as T}from"./progressbar-Csnqx_Pk-DalEtner.js";import{e as W,b as v,t as A}from"./writables-CgpOQ4hA-BLtlctEd.js";import{e as X}from"./extendWidget-GeFhB8wc.js";import{B as j}from"./types-Bw2nvhNr.js";import{S as y}from"./Slot-DxNJ8UAq.js";import{c as D}from"./config-lZO9LbO2.js";import{c as F}from"./dom-gfxqXJpK-CVUkDlT_.js";const K={structure:void 0,children:void 0,height:"",striped:!1,animated:!1,type:void 0},O={height:A,striped:v,animated:v,type:W([void 0,...j]),structure:void 0,children:void 0},U=X(T,K,O),V=U;var Y=u('<div class="progress"><div><!></div></div>');function k(a,t){m(t,!0);var i=Y();let o;var s=n(i);let r;var e=n(s);const c=S(()=>({state:t.state,api:t.api,directives:t.directives}));y(e,{get content(){return t.state.children},get props(){return x(c)}}),f(()=>{o=l(i,"",o,{height:t.state.height}),C(s,1,E(["progress-bar",t.state.type?`text-bg-${t.state.type}`:"",{"progress-bar-striped":t.state.striped,"progress-bar-animated":t.state.animated}])),r=l(s,"",r,{width:`${t.state.percentage}%`})}),h(a,i),b()}const q=(a,t=w)=>{k(a,N(t))};var z=u("<div><!></div>");function tt(a,t){m(t,!0);let i=B(t,["$$slots","$$events","$$legacy"]);const o=D({factory:V,widgetName:"progressbar",props:i,enablePatchChanged:!0,defaultConfig:{structure:q}}),{state:s,directives:{ariaDirective:r}}=o;var e=z();let c;var _=n(e);y(_,{get content(){return s.structure},props:o}),p(e,d=>r==null?void 0:r(d)),p(e,(d,P)=>{var g;return(g=F)==null?void 0:g(d,P)},()=>s.className||void 0),f(d=>c=L(e,c,{...d}),[()=>({})]),h(a,e),b()}export{tt as P};
