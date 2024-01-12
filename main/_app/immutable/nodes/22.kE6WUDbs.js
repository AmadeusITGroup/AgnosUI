import{s as C,n as P}from"../chunks/scheduler.WY4sK3-1.js";import{S as D,i as T,r as i,s as h,u,c as E,v as p,a as $,d as f,t as _,f as d,w as c,g as w,h as A,x as I}from"../chunks/index.ECOozWc_.js";import{_ as l}from"../chunks/preload-helper.0HuHagjb.js";import{S as x}from"../chunks/Sample.Sula2MPZ.js";import{S as v}from"../chunks/Section.iNNqn3V8.js";const L={componentName:"pagination",sampleName:"custom",files:{angular:{entryPoint:"custom.component.ts",files:{"custom.component.ts":()=>l(()=>import("../chunks/custom.route.YyE69H4z.js"),__vite__mapDeps([]),import.meta.url).then(o=>o.default)}},react:{entryPoint:"custom.tsx",files:{"custom.tsx":()=>l(()=>import("../chunks/Custom.route.M6qiP0GZ.js"),__vite__mapDeps([]),import.meta.url).then(o=>o.default)}},svelte:{entryPoint:"custom.svelte",files:{"custom.svelte":()=>l(()=>import("../chunks/Custom.route.aXPINKgw.js"),__vite__mapDeps([]),import.meta.url).then(o=>o.default),"CustomPages.svelte":()=>l(()=>import("../chunks/CustomPages.snr_KFYf.js"),__vite__mapDeps([]),import.meta.url).then(o=>o.default)}}}},O={componentName:"pagination",sampleName:"default",files:{angular:{entryPoint:"default.component.ts",files:{"default.component.ts":()=>l(()=>import("../chunks/default.route.siaR5-Hd.js"),__vite__mapDeps([]),import.meta.url).then(o=>o.default)}},react:{entryPoint:"default.tsx",files:{"default.tsx":()=>l(()=>import("../chunks/Default.route.x4qNIdFl.js"),__vite__mapDeps([]),import.meta.url).then(o=>o.default)}},svelte:{entryPoint:"default.svelte",files:{"default.svelte":()=>l(()=>import("../chunks/Default.route.gwlf2hR5.js"),__vite__mapDeps([]),import.meta.url).then(o=>o.default)}}}};function R(o){let t,r;return t=new x({props:{title:"Pagination example",sample:O,height:419}}),{c(){i(t.$$.fragment)},l(a){u(t.$$.fragment,a)},m(a,s){p(t,a,s),r=!0},p:P,i(a){r||(f(t.$$.fragment,a),r=!0)},o(a){_(t.$$.fragment,a),r=!1},d(a){c(t,a)}}}function V(o){let t,r="The pagination widget is fully customizable, from the page numbers to the arrows.",a,s,e;return s=new x({props:{title:"Custom Pagination example",sample:L,height:256}}),{c(){t=w("p"),t.textContent=r,a=h(),i(s.$$.fragment)},l(n){t=A(n,"P",{"data-svelte-h":!0}),I(t)!=="svelte-behp1x"&&(t.textContent=r),a=E(n),u(s.$$.fragment,n)},m(n,m){$(n,t,m),$(n,a,m),p(s,n,m),e=!0},p:P,i(n){e||(f(s.$$.fragment,n),e=!0)},o(n){_(s.$$.fragment,n),e=!1},d(n){n&&(d(t),d(a)),c(s,n)}}}function y(o){let t,r,a,s;return t=new v({props:{label:"Basic paginations",id:"default",level:2,$$slots:{default:[R]},$$scope:{ctx:o}}}),a=new v({props:{label:"Customization",id:"custom",level:2,$$slots:{default:[V]},$$scope:{ctx:o}}}),{c(){i(t.$$.fragment),r=h(),i(a.$$.fragment)},l(e){u(t.$$.fragment,e),r=E(e),u(a.$$.fragment,e)},m(e,n){p(t,e,n),$(e,r,n),p(a,e,n),s=!0},p(e,[n]){const m={};n&1&&(m.$$scope={dirty:n,ctx:e}),t.$set(m);const g={};n&1&&(g.$$scope={dirty:n,ctx:e}),a.$set(g)},i(e){s||(f(t.$$.fragment,e),f(a.$$.fragment,e),s=!0)},o(e){_(t.$$.fragment,e),_(a.$$.fragment,e),s=!1},d(e){e&&d(r),c(t,e),c(a,e)}}}class B extends D{constructor(t){super(),T(this,t,null,y,C,{})}}export{B as component};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}