import{a as k,t as C}from"../chunks/disclose-version.CXc-ef-y.js";import{p as N,a as F,g as u,b as H,j as r,k as o,s as m,T as S,t as j,i as w,f as v,h as I}from"../chunks/runtime.D3z8aTw2.js";import{i as x}from"../chunks/if.C1z8Gqtw.js";import{s as L}from"../chunks/snippet.DdqFAKxx.js";import{s as A,a as y}from"../chunks/store.DNMGe8GS.js";import{H as P}from"../chunks/Header.Dynl20ym.js";import{S as q}from"../chunks/StatusAlert.Bkew4jZC.js";import{s as z}from"../chunks/render.XwG-dU9H.js";import{b as D}from"../chunks/this.xLvKBgxN.js";import{A as E,b as G}from"../chunks/info-circle-fill.CE7QHHNx.js";import{p as B,c as J}from"../chunks/stores.DFcpSFdr.js";import{S as K}from"../chunks/logo-svelte.C7UFHKSl.js";var M=C(`<div class="alert-container p-3 border border-info rounded-end"><div class="d-flex align-items-center"><span class="d-flex me-2"><!></span> <span class="me-4">This component is a <strong> </strong> component and can be used <strong>without</strong> the Bootstrap CSS.</span></div> <hr> Colors of the component are using the Bootstrap CSS vars (along with a default color) so that if you are using bootstrap the component will take your
		color palette.</div>`);function O(g,n){N(n,!0);const c=A(),t=()=>y(B,"$page",c),b=/\/(components|services)\/([^/]+)/;let i,h=v(()=>t().url.pathname.match(b)?.[2]);F(()=>{u(h),H(()=>i.api.open())}),D(E(g,{type:"info",className:"p-0 border-0 border-start border-5 border-info",children:(p,_)=>{var a=M(),l=r(a),s=r(l),$=r(s);K($,{svg:G,className:"icon-16"}),o(s);var d=m(s,2),f=m(r(d)),T=r(f,!0);o(f),S(3),o(d),o(l),S(3),o(a),j(()=>z(T,n.componentType)),k(p,a)},$$slots:{default:!0}}),p=>i=p,()=>i),w()}var Q=C('<!> <div class="main-content"><!> <!> <!></div>',1);function ot(g,n){N(n,!0);const c=A(),t=()=>y(B,"$page",c),b=()=>y(J,"$selectedTabName$",c);let i=v(()=>t().data.tabs??[]),h=v(()=>u(i).find(e=>e.key===b())),p=v(()=>`${t().data.title} ${u(h)?.title.toLowerCase()??""}`);var _=Q(),a=I(_);P(a,{get title(){return t().data.title},get pageTitle(){return u(p)},get status(){return t().data.status},cssFramework:"bootstrap"});var l=m(a,2),s=r(l);{var $=e=>{q(e,{get status(){return t().data.status}})};x(s,e=>{t().data.status!=="stable"&&e($)})}var d=m(s,2);{var f=e=>{O(e,{get componentType(){return t().data.type}})};x(d,e=>{t().data.type==="standalone"&&e(f)})}var T=m(d,2);L(T,()=>n.children),o(l),k(g,_),w()}export{ot as component};
