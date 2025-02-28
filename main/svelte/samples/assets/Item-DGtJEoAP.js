import{y as R,E as V,z as j,N as $,B as k,C as H,D as W,F as B,G,H as K,I as z,J,p as P,K as T,t as N,d as y,h as I,j as C,c as D,a as O,f as L,s as U,e as q,g as Q,L as X,M as Y,O as Z,o as ee,v as te}from"./AppCommon-DR1c1M0F.js";import{s as oe}from"./snippet-DBdFeI9s.js";import{a as v}from"./actions-CroD04Qy.js";import{c as w}from"./config-1F64LY8-.js";import{f as ae,g as re,c as ne}from"./accordion-OTiJtxDi-1fTdLwpW.js";import{c as F}from"./collapse-CVjUhnIz-D_sVLFmd.js";import{e as ie}from"./extendWidget-BaZQTsYH.js";import{n as E,c as A}from"./dom-gfxqXJpK-BWIOF16w.js";import{S}from"./Slot-BJQWjOdF.js";function se(p,c,b,d,a,_){var n,l,i=null,g=p,r;R(()=>{const e=c()||null;var u=e==="svg"?$:null;e!==n&&(r&&(e===null?B(r,()=>{r=null,l=null}):e===l?G(r):K(r)),e&&e!==l&&(r=j(()=>{if(i=u?document.createElementNS(u,e):document.createElement(e),k(i,i),d){var s=i.appendChild(H());d(i,s)}W.nodes_end=i,g.before(i)})),n=e,n&&(l=n))},V)}const ce={itemStructure:void 0},de={structure:void 0,children:void 0,header:void 0},le={...re(),...ce},ue={animated:!1,transition:F,destroyOnHide:!1,onShown:E,onHidden:E,onVisibleChange:E,visible:!1,disabled:!1,id:"",headerClassName:"",buttonClassName:"",bodyContainerClassName:"",bodyClassName:"",headingTag:"",className:"",structure:void 0,children:void 0,header:void 0},fe=Object.keys(ue),ve=ie(ne,de),pe={itemTransition:F};function ge(){return{...le,...pe}}const me=ae(ve,fe,ge()),be=me,M=Symbol("accordion-api");function he(p){z(M,p)}function _e(){return J(M)}var Ce=N("<div><!></div>");function Re(p,c){P(c,!0);let b=T(c,["$$slots","$$events","$$legacy","children"]);const{directives:d,api:a}=w({factory:be,widgetName:"accordion",props:b,enablePatchChanged:!0}),_=a;he(a);var n=Ce();let l;var i=y(n);return oe(i,()=>c.children),v(n,(g,r)=>{var e;return(e=A)==null?void 0:e(g,r)},()=>"accordion"),v(n,g=>{var r;return(r=d.accordionDirective)==null?void 0:r.call(d,g)}),I(g=>l=C(n,l,{...g}),[()=>({})]),D(p,n),O({api:_})}var Ae=N("<button><!></button>"),ye=N("<div><div><!></div></div>"),Ie=N("<!> <!>",1);function De(p,c){P(c,!0);let b=T(c,["$$slots","$$events","$$legacy"]);const{state:d,directives:a}=b,_=new RegExp("^h[1-6]$");let n=X(()=>_.test(d.headingTag)?d.headingTag:"h2");var l=Ie(),i=L(l);se(i,()=>Q(n),!1,(e,u)=>{v(e,(t,o)=>{var m;return(m=A)==null?void 0:m(t,o)},()=>"accordion-header"),v(e,t=>{var o;return(o=a.headerDirective)==null?void 0:o.call(a,t)});let s;I(t=>s=C(e,s,{...t},void 0,e.namespaceURI===$,e.nodeName.includes("-")),[()=>({})]);var f=Ae();let h;var x=y(f);S(x,{get content(){return d.header},get props(){return b}}),v(f,t=>{var o;return(o=a.buttonDirective)==null?void 0:o.call(a,t)}),v(f,(t,o)=>{var m;return(m=A)==null?void 0:m(t,o)},()=>"accordion-button"),I(t=>h=C(f,h,{...t}),[()=>({})]),D(u,f)});var g=U(i,2);{var r=e=>{var u=ye();let s;var f=y(u);let h;var x=y(f);S(x,{get content(){return d.children},get props(){return b}}),v(f,(t,o)=>{var m;return(m=A)==null?void 0:m(t,o)},()=>"accordion-body"),v(f,t=>{var o;return(o=a.bodyDirective)==null?void 0:o.call(a,t)}),v(u,(t,o)=>{var m;return(m=A)==null?void 0:m(t,o)},()=>"accordion-collapse"),v(u,t=>{var o;return(o=a.bodyContainerDirective)==null?void 0:o.call(a,t)}),I((t,o)=>{s=C(u,s,{...t}),h=C(f,h,{...o})},[()=>({}),()=>({})]),D(e,u)};q(g,e=>{d.shouldBeInDOM&&e(r)})}D(p,l),O()}const Ne=(p,c=Z)=>{De(p,te(c))};var xe=N("<div><!></div>");function Ve(p,c){P(c,!0);const b=_e(),{registerItem:d}=b;let a=Y(c,"visible",15),_=T(c,["$$slots","$$events","$$legacy","visible"]);const n=w({factory:d,get props(){return{..._,visible:a()}},enablePatchChanged:!0,defaultConfig:{structure:Ne},events:{onVisibleChange:s=>{a(s)}}}),{state:l,directives:{itemDirective:i}}=n,g=n.api;ee(()=>{n.api.initDone()});var r=xe();let e;var u=y(r);return S(u,{get content(){return l.structure},props:n}),v(r,(s,f)=>{var h;return(h=A)==null?void 0:h(s,f)},()=>"accordion-item"),v(r,s=>i==null?void 0:i(s)),I(s=>e=C(r,e,{...s}),[()=>({})]),D(p,r),O({api:g})}export{Re as A,Ve as I};
