function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{s as C,a as P,g as b,i as g,f as d,n as x,e as I,c as R,q as L}from"../chunks/scheduler.DPIVRzB8.js";import{S,i as U,c as p,b as c,m as $,t as f,a as u,d as _}from"../chunks/index.SN7u1Jvz.js";import{_ as v}from"../chunks/preload-helper.BQ24v_F8.js";import{s as O}from"../chunks/icon.CM8eUQ7N.js";import{S as A}from"../chunks/Sample.uo-YtP34.js";import{S as h}from"../chunks/Section.Dbzjnh5K.js";const V={componentName:"alert",style:"bootstrap",sampleName:"dynamic",files:{angular:{complementaryUrl:"",entryPoint:"dynamic.component.ts",files:{"dynamic.component.ts":()=>v(()=>import("../chunks/dynamic.route.CmVIB0zM.js"),__vite__mapDeps([]),import.meta.url).then(a=>a.default)}},react:{complementaryUrl:"",entryPoint:"dynamic.tsx",files:{"dynamic.tsx":()=>v(()=>import("../chunks/Dynamic.route.QviKtY4k.js"),__vite__mapDeps([]),import.meta.url).then(a=>a.default)}},svelte:{complementaryUrl:"/app",entryPoint:"dynamic.svelte",files:{"dynamic.svelte":()=>v(()=>import("../chunks/Dynamic.route.CNEcp_ei.js"),__vite__mapDeps([]),import.meta.url).then(a=>a.default)}}}},N={componentName:"alert",style:"bootstrap",sampleName:"generic",files:{angular:{complementaryUrl:"",entryPoint:"generic.component.ts",files:{"generic.component.ts":()=>v(()=>import("../chunks/generic.route.CebCPZ-6.js"),__vite__mapDeps([]),import.meta.url).then(a=>a.default)}},react:{complementaryUrl:"",entryPoint:"generic.tsx",files:{"generic.tsx":()=>v(()=>import("../chunks/Generic.route.DiMPemZ6.js"),__vite__mapDeps([]),import.meta.url).then(a=>a.default)}},svelte:{complementaryUrl:"/app",entryPoint:"generic.svelte",files:{"generic.svelte":()=>v(()=>import("../chunks/Generic.route.Dc9mpjtE.js"),__vite__mapDeps([]),import.meta.url).then(a=>a.default)}}}};function z(a){let e,r;return e=new A({props:{title:"Generic example",sample:N,height:627}}),{c(){p(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,s){$(e,t,s),r=!0},p:x,i(t){r||(f(e.$$.fragment,t),r=!0)},o(t){u(e.$$.fragment,t),r=!1},d(t){_(e,t)}}}function q(a){let e,r;return e=new A({props:{title:"Customizable icon example",sample:O,height:405}}),{c(){p(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,s){$(e,t,s),r=!0},p:x,i(t){r||(f(e.$$.fragment,t),r=!0)},o(t){u(e.$$.fragment,t),r=!1},d(t){_(e,t)}}}function G(a){let e,r="This example showcases how an application would typically generate and handle dismissable alerts.",t,s,m;return s=new A({props:{title:"Dynamic generation example",sample:V,height:113}}),{c(){e=I("p"),e.textContent=r,t=P(),p(s.$$.fragment)},l(l){e=R(l,"P",{"data-svelte-h":!0}),L(e)!=="svelte-1ebnol6"&&(e.textContent=r),t=b(l),c(s.$$.fragment,l)},m(l,i){g(l,e,i),g(l,t,i),$(s,l,i),m=!0},p:x,i(l){m||(f(s.$$.fragment,l),m=!0)},o(l){u(s.$$.fragment,l),m=!1},d(l){l&&(d(e),d(t)),_(s,l)}}}function H(a){let e,r='The alert component implements the <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role" target="_blank">ARIA alert role</a>.';return{c(){e=I("p"),e.innerHTML=r},l(t){e=R(t,"P",{"data-svelte-h":!0}),L(e)!=="svelte-2s57v8"&&(e.innerHTML=r)},m(t,s){g(t,e,s)},p:x,d(t){t&&d(e)}}}function M(a){let e,r,t,s,m,l,i,y;return e=new h({props:{label:"Basic alerts",level:2,$$slots:{default:[z]},$$scope:{ctx:a}}}),t=new h({props:{label:"Customizable icon",level:2,$$slots:{default:[q]},$$scope:{ctx:a}}}),m=new h({props:{label:"Dynamic alert generation",level:2,$$slots:{default:[G]},$$scope:{ctx:a}}}),i=new h({props:{label:"Accessibility",level:2,$$slots:{default:[H]},$$scope:{ctx:a}}}),{c(){p(e.$$.fragment),r=P(),p(t.$$.fragment),s=P(),p(m.$$.fragment),l=P(),p(i.$$.fragment)},l(n){c(e.$$.fragment,n),r=b(n),c(t.$$.fragment,n),s=b(n),c(m.$$.fragment,n),l=b(n),c(i.$$.fragment,n)},m(n,o){$(e,n,o),g(n,r,o),$(t,n,o),g(n,s,o),$(m,n,o),g(n,l,o),$(i,n,o),y=!0},p(n,[o]){const E={};o&1&&(E.$$scope={dirty:o,ctx:n}),e.$set(E);const w={};o&1&&(w.$$scope={dirty:o,ctx:n}),t.$set(w);const T={};o&1&&(T.$$scope={dirty:o,ctx:n}),m.$set(T);const D={};o&1&&(D.$$scope={dirty:o,ctx:n}),i.$set(D)},i(n){y||(f(e.$$.fragment,n),f(t.$$.fragment,n),f(m.$$.fragment,n),f(i.$$.fragment,n),y=!0)},o(n){u(e.$$.fragment,n),u(t.$$.fragment,n),u(m.$$.fragment,n),u(i.$$.fragment,n),y=!1},d(n){n&&(d(r),d(s),d(l)),_(e,n),_(t,n),_(m,n),_(i,n)}}}class K extends S{constructor(e){super(),U(this,e,null,M,C,{})}}export{K as component};
