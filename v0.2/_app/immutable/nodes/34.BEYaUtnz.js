function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{s as U,a as P,g as E,i as u,f,e as h,c as R,q as A,n as b}from"../chunks/scheduler.DPIVRzB8.js";import{S as N,i as S,c as _,b as $,m as c,t as d,a as v,d as g}from"../chunks/index.SN7u1Jvz.js";import{S as D}from"../chunks/Sample.uo-YtP34.js";import{S as T}from"../chunks/Section.Dbzjnh5K.js";import{_ as p}from"../chunks/preload-helper.BQ24v_F8.js";const z={componentName:"rating",style:"bootstrap",sampleName:"customTemplate",files:{angular:{complementaryUrl:"",entryPoint:"customTemplate.component.ts",files:{"customTemplate.component.ts":()=>p(()=>import("../chunks/customTemplate.route.D2FZLA6h.js"),__vite__mapDeps([]),import.meta.url).then(l=>l.default),"custom.scss":()=>p(()=>import("../chunks/custom.CqqRmk9o.js"),__vite__mapDeps([]),import.meta.url).then(l=>l.default)}},react:{complementaryUrl:"",entryPoint:"customTemplate.tsx",files:{"customTemplate.tsx":()=>p(()=>import("../chunks/CustomTemplate.route.DGLIEoLB.js"),__vite__mapDeps([]),import.meta.url).then(l=>l.default),"custom.scss":()=>p(()=>import("../chunks/custom.CqqRmk9o.js"),__vite__mapDeps([]),import.meta.url).then(l=>l.default)}},svelte:{complementaryUrl:"/app",entryPoint:"customTemplate.svelte",files:{"customTemplate.svelte":()=>p(()=>import("../chunks/CustomTemplate.route.Bb2_iI5f.js"),__vite__mapDeps([]),import.meta.url).then(l=>l.default),"custom.scss":()=>p(()=>import("../chunks/custom.CqqRmk9o.js"),__vite__mapDeps([]),import.meta.url).then(l=>l.default)}}}},H={componentName:"rating",style:"bootstrap",sampleName:"default",files:{angular:{complementaryUrl:"",entryPoint:"default.component.ts",files:{"default.component.ts":()=>p(()=>import("../chunks/default.route.BdjMBIXC.js"),__vite__mapDeps([]),import.meta.url).then(l=>l.default)}},react:{complementaryUrl:"",entryPoint:"default.tsx",files:{"default.tsx":()=>p(()=>import("../chunks/Default.route.pv_LQmFH.js"),__vite__mapDeps([]),import.meta.url).then(l=>l.default)}},svelte:{complementaryUrl:"/app",entryPoint:"default.svelte",files:{"default.svelte":()=>p(()=>import("../chunks/Default.route.BMkvdhfB.js"),__vite__mapDeps([]),import.meta.url).then(l=>l.default)}}}},M={componentName:"rating",style:"bootstrap",sampleName:"form",files:{angular:{complementaryUrl:"",entryPoint:"form.component.ts",files:{"form.component.ts":()=>p(()=>import("../chunks/form.route.D5eAjAdb.js"),__vite__mapDeps([]),import.meta.url).then(l=>l.default)}},react:{complementaryUrl:"",entryPoint:"form.tsx",files:{"form.tsx":()=>p(()=>import("../chunks/Form.route.CCOTKvOZ.js"),__vite__mapDeps([]),import.meta.url).then(l=>l.default)}},svelte:{complementaryUrl:"/app",entryPoint:"form.svelte",files:{"form.svelte":()=>p(()=>import("../chunks/Form.route.C4XiYiop.js"),__vite__mapDeps([]),import.meta.url).then(l=>l.default)}}}},k={componentName:"rating",style:"bootstrap",sampleName:"readonly",files:{angular:{complementaryUrl:"",entryPoint:"readonly.component.ts",files:{"readonly.component.ts":()=>p(()=>import("../chunks/readonly.route.Cd2PpAG-.js"),__vite__mapDeps([]),import.meta.url).then(l=>l.default),"readonly.scss":()=>p(()=>import("../chunks/readonly.DrcTNEKx.js"),__vite__mapDeps([]),import.meta.url).then(l=>l.default)}},react:{complementaryUrl:"",entryPoint:"readonly.tsx",files:{"readonly.tsx":()=>p(()=>import("../chunks/Readonly.route.fPqS6c2Q.js"),__vite__mapDeps([]),import.meta.url).then(l=>l.default),"readonly.scss":()=>p(()=>import("../chunks/readonly.DrcTNEKx.js"),__vite__mapDeps([]),import.meta.url).then(l=>l.default)}},svelte:{complementaryUrl:"/app",entryPoint:"readonly.svelte",files:{"readonly.svelte":()=>p(()=>import("../chunks/Readonly.route.mXuXurGL.js"),__vite__mapDeps([]),import.meta.url).then(l=>l.default),"readonly.scss":()=>p(()=>import("../chunks/readonly.DrcTNEKx.js"),__vite__mapDeps([]),import.meta.url).then(l=>l.default)}}}};function F(l){let t,i=`The simplest example shows how the user may interact with the widget to set a rating.<br/>
		The value can be unset by clicking on the current rating.`,a,n,o;return n=new D({props:{title:"Rating example",sample:H,height:130}}),{c(){t=h("p"),t.innerHTML=i,a=P(),_(n.$$.fragment)},l(e){t=R(e,"P",{"data-svelte-h":!0}),A(t)!=="svelte-1b9gk8c"&&(t.innerHTML=i),a=E(e),$(n.$$.fragment,e)},m(e,m){u(e,t,m),u(e,a,m),c(n,e,m),o=!0},p:b,i(e){o||(d(n.$$.fragment,e),o=!0)},o(e){v(n.$$.fragment,e),o=!1},d(e){e&&(f(t),f(a)),g(n,e)}}}function q(l){let t,i="The readonly example below showcases how to disable the widget and use custom star display to support decimal ratings.",a,n,o;return n=new D({props:{title:"Read only rating",sample:k,height:95}}),{c(){t=h("p"),t.textContent=i,a=P(),_(n.$$.fragment)},l(e){t=R(e,"P",{"data-svelte-h":!0}),A(t)!=="svelte-1xczjgg"&&(t.textContent=i),a=E(e),$(n.$$.fragment,e)},m(e,m){u(e,t,m),u(e,a,m),c(n,e,m),o=!0},p:b,i(e){o||(d(n.$$.fragment,e),o=!0)},o(e){v(n.$$.fragment,e),o=!1},d(e){e&&(f(t),f(a)),g(n,e)}}}function j(l){let t,i="The star can be fully customized, enabling various implementations of a rating.",a,n,o;return n=new D({props:{title:"Custom template",sample:z,height:70}}),{c(){t=h("p"),t.textContent=i,a=P(),_(n.$$.fragment)},l(e){t=R(e,"P",{"data-svelte-h":!0}),A(t)!=="svelte-17u6cmy"&&(t.textContent=i),a=E(e),$(n.$$.fragment,e)},m(e,m){u(e,t,m),u(e,a,m),c(n,e,m),o=!0},p:b,i(e){o||(d(n.$$.fragment,e),o=!0)},o(e){v(n.$$.fragment,e),o=!1},d(e){e&&(f(t),f(a)),g(n,e)}}}function W(l){let t,i="The widget can be integrated in a form as a mandatory field.",a,n,o;return n=new D({props:{title:"Form",sample:M,height:183}}),{c(){t=h("p"),t.textContent=i,a=P(),_(n.$$.fragment)},l(e){t=R(e,"P",{"data-svelte-h":!0}),A(t)!=="svelte-1nvvgtz"&&(t.textContent=i),a=E(e),$(n.$$.fragment,e)},m(e,m){u(e,t,m),u(e,a,m),c(n,e,m),o=!0},p:b,i(e){o||(d(n.$$.fragment,e),o=!0)},o(e){v(n.$$.fragment,e),o=!1},d(e){e&&(f(t),f(a)),g(n,e)}}}function B(l){let t,i='The rating component implements the <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/slider_role" target="_blank">ARIA slider role</a>.';return{c(){t=h("p"),t.innerHTML=i},l(a){t=R(a,"P",{"data-svelte-h":!0}),A(t)!=="svelte-3vy5ip"&&(t.innerHTML=i)},m(a,n){u(a,t,n)},p:b,d(a){a&&f(t)}}}function G(l){let t,i,a,n,o,e,m,x,y,L;return t=new T({props:{label:"Default rating",level:2,$$slots:{default:[F]},$$scope:{ctx:l}}}),a=new T({props:{label:"Readonly",level:2,$$slots:{default:[q]},$$scope:{ctx:l}}}),o=new T({props:{label:"Custom template",level:2,$$slots:{default:[j]},$$scope:{ctx:l}}}),m=new T({props:{label:"Form integration",level:2,$$slots:{default:[W]},$$scope:{ctx:l}}}),y=new T({props:{label:"Accessibility",level:2,$$slots:{default:[B]},$$scope:{ctx:l}}}),{c(){_(t.$$.fragment),i=P(),_(a.$$.fragment),n=P(),_(o.$$.fragment),e=P(),_(m.$$.fragment),x=P(),_(y.$$.fragment)},l(r){$(t.$$.fragment,r),i=E(r),$(a.$$.fragment,r),n=E(r),$(o.$$.fragment,r),e=E(r),$(m.$$.fragment,r),x=E(r),$(y.$$.fragment,r)},m(r,s){c(t,r,s),u(r,i,s),c(a,r,s),u(r,n,s),c(o,r,s),u(r,e,s),c(m,r,s),u(r,x,s),c(y,r,s),L=!0},p(r,[s]){const I={};s&1&&(I.$$scope={dirty:s,ctx:r}),t.$set(I);const w={};s&1&&(w.$$scope={dirty:s,ctx:r}),a.$set(w);const O={};s&1&&(O.$$scope={dirty:s,ctx:r}),o.$set(O);const V={};s&1&&(V.$$scope={dirty:s,ctx:r}),m.$set(V);const C={};s&1&&(C.$$scope={dirty:s,ctx:r}),y.$set(C)},i(r){L||(d(t.$$.fragment,r),d(a.$$.fragment,r),d(o.$$.fragment,r),d(m.$$.fragment,r),d(y.$$.fragment,r),L=!0)},o(r){v(t.$$.fragment,r),v(a.$$.fragment,r),v(o.$$.fragment,r),v(m.$$.fragment,r),v(y.$$.fragment,r),L=!1},d(r){r&&(f(i),f(n),f(e),f(x)),g(t,r),g(a,r),g(o,r),g(m,r),g(y,r)}}}class Z extends N{constructor(t){super(),S(this,t,null,G,U,{})}}export{Z as component};
