import{a as k,t as C}from"../chunks/disclose-version.Dner0__A.js";import{p as N,b as F,i as u,e as H,c as r,r as o,s as m,Q as S,t as I,a as w,k as v,f as L}from"../chunks/runtime.2p_M1ADf.js";import{i as x}from"../chunks/if.Cv9w4O0r.js";import{s as P}from"../chunks/snippet.D5F5rSZJ.js";import{s as A,a as T}from"../chunks/store.CXrOJ5H9.js";import{H as Q}from"../chunks/Header.BkxJ8tXI.js";import{S as j}from"../chunks/StatusAlert.CQNI1X9x.js";import{s as q}from"../chunks/render.CtMzg1ae.js";import{b as z}from"../chunks/this.EsMSYjEI.js";import{A as D,b as E}from"../chunks/info-circle-fill.adeQRZ2c.js";import{p as B}from"../chunks/stores.DzkJluA6.js";import{S as G}from"../chunks/logo-svelte.NcE9zum3.js";import{b as J}from"../chunks/stores.BlCezwjN.js";var K=C(`<div class="alert-container p-3 border border-info rounded-end"><div class="d-flex align-items-center"><span class="d-flex me-2"><!></span> <span class="me-4">This component is a <strong> </strong> component and can be used <strong>without</strong> the Bootstrap CSS.</span></div> <hr> Colors of the component are using the Bootstrap CSS vars (along with a default color) so that if you are using bootstrap the component will take your
		color palette.</div>`);function M(g,n){N(n,!0);const c=A(),t=()=>T(B,"$page",c),b=/\/(components|services)\/([^/]+)/;let i,h=v(()=>t().url.pathname.match(b)?.[2]);F(()=>{u(h),H(()=>i.api.open())}),z(D(g,{type:"info",className:"p-0 border-0 border-start border-5 border-info",children:(p,_)=>{var a=K(),l=r(a),s=r(l),$=r(s);G($,{svg:E,className:"icon-16"}),o(s);var d=m(s,2),f=m(r(d)),y=r(f,!0);o(f),S(3),o(d),o(l),S(3),o(a),I(()=>q(y,n.componentType)),k(p,a)},$$slots:{default:!0}}),p=>i=p,()=>i),w()}var O=C('<!> <div class="main-content"><!> <!> <!></div>',1);function nt(g,n){N(n,!0);const c=A(),t=()=>T(B,"$page",c),b=()=>T(J,"$selectedTabName$",c);let i=v(()=>t().data.tabs??[]),h=v(()=>u(i).find(e=>e.key===b())),p=v(()=>`${t().data.title} ${u(h)?.title.toLowerCase()??""}`);var _=O(),a=L(_);Q(a,{get title(){return t().data.title},get pageTitle(){return u(p)},get status(){return t().data.status},cssFramework:"bootstrap"});var l=m(a,2),s=r(l);{var $=e=>{j(e,{get status(){return t().data.status}})};x(s,e=>{t().data.status!=="stable"&&e($)})}var d=m(s,2);{var f=e=>{M(e,{get componentType(){return t().data.type}})};x(d,e=>{t().data.type==="standalone"&&e(f)})}var y=m(d,2);P(y,()=>n.children),o(l),k(g,_),w()}export{nt as component};
