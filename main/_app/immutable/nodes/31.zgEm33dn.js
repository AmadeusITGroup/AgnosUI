import{s as p}from"../chunks/scheduler.BX-ATtIj.js";import{S as c,i as u,c as f,b as g,m as _,t as y,a as b,e as h}from"../chunks/index.BI7XBgzm.js";import{P as v}from"../chunks/Playground.C05Fj31I.js";import{_ as i}from"../chunks/preload-helper.Dch09mLN.js";import{d as P}from"../chunks/api.CoPWxm-j.js";import{e as d,n as a}from"../chunks/stores.DCbcf2u1.js";import{f as m}from"../chunks/fade-7-Etejps.9pjJB6jV.js";import{r as $}from"../chunks/app.BQ1ycgEe.js";const w=()=>{const e=Math.abs(window.innerWidth-document.documentElement.clientWidth),t=document.body,n=t.style,{overflow:o,paddingRight:r}=n;if(e>0){const s=parseFloat(window.getComputedStyle(t).paddingRight);n.paddingRight=`${s+e}px`}return n.overflow="hidden",()=>{e>0&&(n.paddingRight=r),n.overflow=o}};let l=a;const C=()=>{l(),l=w()},V=()=>{l(),l=a},S={animated:!0,ariaCloseButtonLabel:"Close",backdrop:!0,backdropClass:"",backdropTransition:m,closeButton:!0,closeOnOutsideClick:!0,container:typeof window<"u"?document.body:null,className:"",modalTransition:m,onBeforeClose:a,onVisibleChange:a,onHidden:a,onShown:a,slotDefault:void 0,slotFooter:void 0,slotHeader:void 0,slotStructure:void 0,slotTitle:void 0,visible:!1,contentData:void 0};function R(){return{...S}}const T=$(),E=d(()=>T().length>0),D=d(()=>{E()?C():V()});d(()=>{D()});const k={componentName:"modal",style:"bootstrap",sampleName:"playground",files:{angular:{complementaryUrl:"/bootstrap",entryPoint:"playground.component.ts",files:{"playground.component.ts":()=>i(()=>import("../chunks/playground.route.Bc1VH0Wf.js"),[],import.meta.url).then(e=>e.default)}},react:{complementaryUrl:"/bootstrap",entryPoint:"playground.tsx",files:{"playground.tsx":()=>i(()=>import("../chunks/Playground.route.7bmb3zc0.js"),[],import.meta.url).then(e=>e.default)}},svelte:{complementaryUrl:"/bootstrap",entryPoint:"playground.svelte",files:{"playground.svelte":()=>i(()=>import("../chunks/Playground.route.BjtdX-Ds.js"),[],import.meta.url).then(e=>e.default)}}}};function x(e){let t,n;return t=new v({props:{sample:k,config:R(),height:250,noresize:!0,doc:P,listPropsValues:e[0]}}),{c(){f(t.$$.fragment)},l(o){g(t.$$.fragment,o)},m(o,r){_(t,o,r),n=!0},p(o,[r]){const s={};r&1&&(s.listPropsValues=o[0]),t.$set(s)},i(o){n||(y(t.$$.fragment,o),n=!0)},o(o){b(t.$$.fragment,o),n=!1},d(o){h(t,o)}}}function A(e,t,n){let{listPropsValues:o={backdropTransition:["fade"],modalTransition:["fade"],onBeforeClose:["noop","log"],onHidden:["noop","log"],onShown:["noop","log"],onVisibleChange:["noop","log"]}}=t;return e.$$set=r=>{"listPropsValues"in r&&n(0,o=r.listPropsValues)},[o]}class W extends c{constructor(t){super(),u(this,t,A,x,p,{listPropsValues:0})}}export{W as component};
