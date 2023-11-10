import{s as R,n as h}from"../chunks/scheduler.cb6605ed.js";import{S as T,i as V,r as p,s as g,u as f,c as E,v as u,a as d,d as _,t as c,f as v,w as $,g as A,h as L,x as O}from"../chunks/index.9e31da9f.js";import{_ as i}from"../chunks/preload-helper.a4192956.js";import{S as x}from"../chunks/Sample.36261527.js";import{S as P}from"../chunks/Section.e0370e53.js";const C={componentName:"modal",sampleName:"default",files:{angular:{entryPoint:"default.component.ts",files:{"default.component.ts":()=>i(()=>import("../chunks/default.route.c35715f7.js"),[],import.meta.url).then(o=>o.default)}},react:{entryPoint:"default.tsx",files:{"default.tsx":()=>i(()=>import("../chunks/Default.route.973b1316.js"),[],import.meta.url).then(o=>o.default)}},svelte:{entryPoint:"default.svelte",files:{"default.svelte":()=>i(()=>import("../chunks/Default.route.97b65465.js"),[],import.meta.url).then(o=>o.default)}}}},S={componentName:"modal",sampleName:"component",files:{angular:{entryPoint:"component.component.ts",files:{"component.component.ts":()=>i(()=>import("../chunks/component.route.4f5b2a29.js"),[],import.meta.url).then(o=>o.default),"custom-content.component.ts":()=>i(()=>import("../chunks/custom-content.component.0d1111f6.js"),[],import.meta.url).then(o=>o.default)}},react:{entryPoint:"component.tsx",files:{"component.tsx":()=>i(()=>import("../chunks/Component.route.567f63d3.js"),[],import.meta.url).then(o=>o.default)}},svelte:{entryPoint:"component.svelte",files:{"component.svelte":()=>i(()=>import("../chunks/Component.route.9c35889e.js"),[],import.meta.url).then(o=>o.default),"ComponentModal.svelte":()=>i(()=>import("../chunks/ComponentModal.af00540b.js"),[],import.meta.url).then(o=>o.default)}}}},b={componentName:"modal",sampleName:"stack",files:{angular:{entryPoint:"stack.component.ts",files:{"stack.component.ts":()=>i(()=>import("../chunks/stack.route.c1b5c915.js"),[],import.meta.url).then(o=>o.default)}},react:{entryPoint:"stack.tsx",files:{"stack.tsx":()=>i(()=>import("../chunks/Stack.route.6230224b.js"),[],import.meta.url).then(o=>o.default)}},svelte:{entryPoint:"stack.svelte",files:{"stack.svelte":()=>i(()=>import("../chunks/Stack.route.0d7a1533.js"),[],import.meta.url).then(o=>o.default),"StackModal.svelte":()=>i(()=>import("../chunks/StackModal.316fd6b5.js"),[],import.meta.url).then(o=>o.default)}}}};function w(o){let e,r;return e=new x({props:{title:"Default example",sample:C,height:300,noresize:!0}}),{c(){p(e.$$.fragment)},l(a){f(e.$$.fragment,a)},m(a,s){u(e,a,s),r=!0},p:h,i(a){r||(_(e.$$.fragment,a),r=!0)},o(a){c(e.$$.fragment,a),r=!1},d(a){$(e,a)}}}function y(o){let e,r="You may use an existing component as content.",a,s,l;return s=new x({props:{title:"Component as content example",sample:S,height:300,noresize:!0}}),{c(){e=A("p"),e.textContent=r,a=g(),p(s.$$.fragment)},l(n){e=L(n,"P",{"data-svelte-h":!0}),O(e)!=="svelte-1cfx4nr"&&(e.textContent=r),a=E(n),f(s.$$.fragment,n)},m(n,t){d(n,e,t),d(n,a,t),u(s,n,t),l=!0},p:h,i(n){l||(_(s.$$.fragment,n),l=!0)},o(n){c(s.$$.fragment,n),l=!1},d(n){n&&(v(e),v(a)),$(s,n)}}}function N(o){let e,r="It is possible to stack modals on top of each other. Note that for better User Experience, stacking modals should be avoided as much as possible.",a,s,l;return s=new x({props:{title:"Modal stack example",sample:b,height:400,noresize:!0}}),{c(){e=A("p"),e.textContent=r,a=g(),p(s.$$.fragment)},l(n){e=L(n,"P",{"data-svelte-h":!0}),O(e)!=="svelte-sfrmgh"&&(e.textContent=r),a=E(n),f(s.$$.fragment,n)},m(n,t){d(n,e,t),d(n,a,t),u(s,n,t),l=!0},p:h,i(n){l||(_(s.$$.fragment,n),l=!0)},o(n){c(s.$$.fragment,n),l=!1},d(n){n&&(v(e),v(a)),$(s,n)}}}function M(o){let e,r,a,s,l,n;return e=new P({props:{label:"Default modal",id:"default",level:2,$$slots:{default:[w]},$$scope:{ctx:o}}}),a=new P({props:{label:"Component as content",id:"component",level:2,$$slots:{default:[y]},$$scope:{ctx:o}}}),l=new P({props:{label:"Modal stack",id:"stack",level:2,$$slots:{default:[N]},$$scope:{ctx:o}}}),{c(){p(e.$$.fragment),r=g(),p(a.$$.fragment),s=g(),p(l.$$.fragment)},l(t){f(e.$$.fragment,t),r=E(t),f(a.$$.fragment,t),s=E(t),f(l.$$.fragment,t)},m(t,m){u(e,t,m),d(t,r,m),u(a,t,m),d(t,s,m),u(l,t,m),n=!0},p(t,[m]){const D={};m&1&&(D.$$scope={dirty:m,ctx:t}),e.$set(D);const k={};m&1&&(k.$$scope={dirty:m,ctx:t}),a.$set(k);const I={};m&1&&(I.$$scope={dirty:m,ctx:t}),l.$set(I)},i(t){n||(_(e.$$.fragment,t),_(a.$$.fragment,t),_(l.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),c(a.$$.fragment,t),c(l.$$.fragment,t),n=!1},d(t){t&&(v(r),v(s)),$(e,t),$(a,t),$(l,t)}}}class B extends T{constructor(e){super(),V(this,e,null,M,R,{})}}export{B as component};
