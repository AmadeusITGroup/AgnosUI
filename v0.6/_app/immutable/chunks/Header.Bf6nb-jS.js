import{a as o,t as l}from"./disclose-version.DugZOR8Z.js";import{p as ee,t as I,a as ae,av as te,i as t,s as p,k,c as n,f as se,r}from"./runtime.CbSN9lKM.js";import{h as oe,s as q}from"./render.BmVJS0zY.js";import{i as c}from"./if.CF_8fJNr.js";import{t as re,b as le,e as ne,i as ie}from"./logo-typescript.Dt83XbXA.js";import{d as ce,s as z,p as de,c as pe,b as ve}from"./stores.BbY1AaX2.js";import{S as x,r as ge,a as me,b as _e,t as u}from"./logo-svelte.Cm5NPavB.js";import{p as P}from"./props.Dk01acae.js";import{s as be,a as w}from"./store.B5xFAugW.js";import{p as fe}from"./stores.Ck_AsoNU.js";function he(F,d="",v=""){return`${F} - ${d?`${d.slice(0,1).toUpperCase()+d.slice(1)}${v?` ${v.slice(0,1).toUpperCase()+v.slice(1)}`:""} - `:""}AgnosUI`}const xe=`<svg width="32" height="32" viewBox="0 0 415 415" xmlns="http://www.w3.org/2000/svg"><rect x="82.5" y="290" width="250" height="125" rx="62.5" fill="#1AD1A5"></rect><circle cx="207.5" cy="135" r="130" fill="black" fill-opacity=".3"></circle><circle cx="207.5" cy="135" r="125" fill="white"></circle><circle cx="207.5" cy="135" r="56" fill="#FF9903"></circle></svg>
`;var ue=l('<span class="badge text-bg-warning">In progress</span>'),$e=l('<span class="badge text-bg-info">Beta</span>'),ke=l('<span class="d-block d-md-none p-0"><!></span>'),we=l('<span class="d-block d-md-none p-0"><!></span>'),ye=l('<span class="d-block d-md-none p-0"><!></span>'),Te=l('<span class="d-block d-md-none p-0"><!></span>'),Fe=l("<!> <!> <!> <!>",1),Ae=l('<span class="d-block d-md-none p-0"><!></span>'),Ne=l('<span class="d-block d-md-none p-0"><!></span>'),Le=l('<span class="d-block d-md-none badge rounded-pill text-bg-info">headless</span>'),Ue=l('<li class="nav-item" role="presentation"><a role="tab" class="nav-link au-nav-link-onlightbg"> </a></li>'),Ie=l('<ul class="nav-tabs overflow-x-auto overflow-y-hidden px-4 px-lg-5 d-flex flex-nowrap content-tabset justify-content-start nav" role="tablist"></ul>'),Pe=l('<header class="au-header bg-light pt-3 px-4 px-lg-5 d-flex mb-4 align-items-center title svelte-1au4bgk"><div class="w-100 d-flex flex-wrap flex-row-reverse justify-content-between align-items-center"><div class="d-flex ms-auto gap-2 justify-content-center"><!> <!> <!> <!> <!> <!></div> <h1 class="text-primary me-3 me-md-none mb-0 p-0 p-md-3 text-center text-md-start svelte-1au4bgk"> </h1></div> <!></header>');function Ee(F,d){ee(d,!0);const v=be(),A=()=>w(fe,"$page",v),f=()=>w(ce,"$selectedApiFramework$",v),E=()=>w(pe,"$selectedPackageType$",v),G=()=>w(ve,"$selectedTabName$",v),J=()=>w(de,"$pathToRoot$",v);let K=P(d,"pageTitle",3,""),j=P(d,"status",3,""),N=P(d,"cssFramework",3,""),m=k(()=>A().data.tabs??[]),M=k(()=>A().route.id?.startsWith("/blog/")),O=k(()=>he(K()||d.title,t(M)?"":f(),E())),Q=k(()=>!!A().params.framework);var _=Pe();oe(s=>{I(()=>te.title=t(O))});var y=n(_),L=n(y),B=n(L);c(B,()=>j()==="inprogress",s=>{var e=ue();o(s,e)});var R=p(B,2);c(R,()=>j()==="beta",s=>{var e=$e();o(s,e)});var C=p(R,2);c(C,()=>t(Q),s=>{var e=Fe(),b=se(e);c(b,()=>f()==="typescript",g=>{var a=ke(),i=n(a);x(i,{svg:re,className:"icon-24 d-flex position-relative"}),r(a),o(g,a)});var T=p(b,2);c(T,()=>f()==="react",g=>{var a=we(),i=n(a);x(i,{svg:ge,className:"icon-24 d-flex position-relative"}),r(a),o(g,a)});var h=p(T,2);c(h,()=>f()==="angular",g=>{var a=ye(),i=n(a);x(i,{svg:me,className:"icon-24 d-flex position-relative"}),r(a),o(g,a)});var U=p(h,2);c(U,()=>f()==="svelte",g=>{var a=Te(),i=n(a);x(i,{svg:_e,className:"icon-24 d-flex position-relative"}),r(a),o(g,a)}),o(s,e)});var H=p(C,2);c(H,()=>N()==="bootstrap",s=>{var e=Ae(),b=n(e);x(b,{svg:le,className:"icon-24 d-flex logo-bootstrap position-relative"}),r(e),o(s,e)});var S=p(H,2);c(S,()=>N()==="daisyUI",s=>{var e=Ne(),b=n(e);x(b,{svg:xe,className:"icon-24 d-flex position-relative"}),r(e),o(s,e)});var V=p(S,2);c(V,()=>N()==="headless",s=>{var e=Le();o(s,e)}),r(L);var D=p(L,2),X=n(D,!0);r(D),r(y);var Y=p(y,2);c(Y,()=>t(m).length,s=>{var e=Ie();ne(e,21,()=>t(m),ie,(T,h)=>{let U=()=>t(h).title,g=()=>t(h).key,a=()=>t(h).path;var i=Ue();const W=k(()=>G()===g());var $=n(i),Z=n($,!0);r($),r(i),I(()=>{z($,"href",`${J()}docs/${f()}${a()}`),z($,"aria-selected",t(W)),u($,"active",t(W)),q(Z,U())}),o(T,i)}),r(e),o(s,e)}),r(_),I(()=>{u(_,"au-rounded",!t(m).length),u(_,"au-rounded-header",t(m).length),u(_,"pb-5",t(m).length),u(_,"pb-3",!t(m).length),u(y,"pb-3",t(m).length),q(X,d.title)}),o(F,_),ae()}export{Ee as H};
