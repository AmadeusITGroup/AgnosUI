import{aa as e}from"./AppCommon-C_Uz3Ejm.js";import{e as u}from"./extendWidget-Dy2T1Nx7.js";import{g as l,a}from"./directive-CKEccryv-Dj2WBjfx.js";import{t as n,j as m}from"./writables-DCiBdIBK-COVli6XW.js";import{c as d}from"./common-Banw3FYN-DIL4Zdba.js";const p={autoHide:!0,delay:5e3},f={autoHide:n,delay:m(0,1/0,{strict:!0})};function $(r){let o;const t=u(d,p,f)(r),s=e(()=>{clearTimeout(o),t.stores.autoHide$()&&(o=setTimeout(()=>t.api.close(),t.stores.delay$()))}),i=a(()=>({attributes:{role:"alert","aria-atomic":"true",class:e(()=>t.stores.className$())},classNames:{"au-toast":!0,toast:!0}})),c=a(()=>({attributes:{type:"button","aria-label":e(()=>t.stores.ariaCloseButtonLabel$())},events:{click:t.api.close}}));return{...t,directives:{...t.directives,autoHideDirective:l(s),bodyDirective:i,closeButtonDirective:c}}}export{$ as c};