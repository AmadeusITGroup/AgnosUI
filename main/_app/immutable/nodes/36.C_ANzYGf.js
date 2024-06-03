import{s as S,a as O,g as I,i as p,f,n as D,e as T,c as C,q as y,t as R,d as A}from"../chunks/scheduler.DDKLfDno.js";import{S as U,i as N,c as v,b as d,m as b,t as P,a as x,e as E}from"../chunks/index.DMnRV_Lo.js";import{_ as h}from"../chunks/preload-helper.Dch09mLN.js";import{S as V}from"../chunks/Sample.DekmCx4m.js";import{S as L}from"../chunks/Section.9aysSmTJ.js";const k={componentName:"pagination",style:"bootstrap",sampleName:"custom",files:{angular:{complementaryUrl:"/bootstrap",entryPoint:"custom.component.ts",files:{"custom.component.ts":()=>h(()=>import("../chunks/custom.route.BMZldFYv.js"),[],import.meta.url).then(a=>a.default)}},react:{complementaryUrl:"/bootstrap",entryPoint:"custom.tsx",files:{"custom.tsx":()=>h(()=>import("../chunks/Custom.route.Dtt5rNja.js"),[],import.meta.url).then(a=>a.default)}},svelte:{complementaryUrl:"/bootstrap",entryPoint:"custom.svelte",files:{"custom.svelte":()=>h(()=>import("../chunks/Custom.route.B-lyopBj.js"),[],import.meta.url).then(a=>a.default),"CustomPages.svelte":()=>h(()=>import("../chunks/CustomPages.D8jSS-ee.js"),[],import.meta.url).then(a=>a.default)}}}},z={componentName:"pagination",style:"bootstrap",sampleName:"default",files:{angular:{complementaryUrl:"/bootstrap",entryPoint:"default.component.ts",files:{"default.component.ts":()=>h(()=>import("../chunks/default.route.DE7KQ0mS.js"),[],import.meta.url).then(a=>a.default)}},react:{complementaryUrl:"/bootstrap",entryPoint:"default.tsx",files:{"default.tsx":()=>h(()=>import("../chunks/Default.route.BinBcvj6.js"),[],import.meta.url).then(a=>a.default)}},svelte:{complementaryUrl:"/bootstrap",entryPoint:"default.svelte",files:{"default.svelte":()=>h(()=>import("../chunks/Default.route.DVx6dgm-.js"),[],import.meta.url).then(a=>a.default)}}}},q={componentName:"pagination",style:"bootstrap",sampleName:"hash",files:{angular:{complementaryUrl:"/bootstrap",entryPoint:"hash.component.ts",files:{"hash.component.ts":()=>h(()=>import("../chunks/hash.route.B1LhCzBT.js"),[],import.meta.url).then(a=>a.default),"hashUtil.ts":()=>h(()=>import("../chunks/hashUtil.BGhbRsSO.js"),[],import.meta.url).then(a=>a.default)}},react:{complementaryUrl:"/bootstrap",entryPoint:"hash.tsx",files:{"hash.tsx":()=>h(()=>import("../chunks/Hash.route.Gj6wmDpB.js"),[],import.meta.url).then(a=>a.default),"hashUtil.ts":()=>h(()=>import("../chunks/hashUtil.BGhbRsSO.js"),[],import.meta.url).then(a=>a.default)}},svelte:{complementaryUrl:"/bootstrap",entryPoint:"hash.svelte",files:{"hash.svelte":()=>h(()=>import("../chunks/Hash.route.CI5T7jrr.js"),[],import.meta.url).then(a=>a.default),"hashUtil.ts":()=>h(()=>import("../chunks/hashUtil.BGhbRsSO.js"),[],import.meta.url).then(a=>a.default)}}}};function G(a){let t,l;return t=new V({props:{title:"Pagination example",sample:z,height:419}}),{c(){v(t.$$.fragment)},l(o){d(t.$$.fragment,o)},m(o,s){b(t,o,s),l=!0},p:D,i(o){l||(P(t.$$.fragment,o),l=!0)},o(o){x(t.$$.fragment,o),l=!1},d(o){E(t,o)}}}function H(a){let t,l="The pagination widget is fully customizable, from the page numbers to the arrows.",o,s,i;return s=new V({props:{title:"Custom Pagination example",sample:k,height:256}}),{c(){t=T("p"),t.textContent=l,o=O(),v(s.$$.fragment)},l(n){t=C(n,"P",{"data-svelte-h":!0}),y(t)!=="svelte-behp1x"&&(t.textContent=l),o=I(n),d(s.$$.fragment,n)},m(n,m){p(n,t,m),p(n,o,m),b(s,n,m),i=!0},p:D,i(n){i||(P(s.$$.fragment,n),i=!0)},o(n){x(s.$$.fragment,n),i=!1},d(n){n&&(f(t),f(o)),E(s,n)}}}function M(a){let t,l=`The example shows the pagination widget with hrefs provided for each page element.<br/>
		The <i>hrefs</i> customization is based on <b>pageLink</b> input. This receives a custom function which computes the href using the received page
		number and the location hash. On the <b>pageChange</b> output event, the location hash is updated with the <i>href</i> of the current page element.
		This strategy permits navigations in current browser tab, and opening a page in new tabs using the customized href.`,o,s,i;return s=new V({props:{title:"Pagination example with hrefs",sample:q,height:256}}),{c(){t=T("p"),t.innerHTML=l,o=O(),v(s.$$.fragment)},l(n){t=C(n,"P",{"data-svelte-h":!0}),y(t)!=="svelte-1uo392u"&&(t.innerHTML=l),o=I(n),d(s.$$.fragment,n)},m(n,m){p(n,t,m),p(n,o,m),b(s,n,m),i=!0},p:D,i(n){i||(P(s.$$.fragment,n),i=!0)},o(n){x(s.$$.fragment,n),i=!1},d(n){n&&(f(t),f(o)),E(s,n)}}}function Y(a){let t,l,o="aria-label",s,i,n="aria-label",m,c,e='aria-current="page"',u,_,w="aria-label",g;return{c(){t=R("Pagination is a navigation element. The navigation (nav) elements need to have the "),l=T("strong"),l.textContent=o,s=R(` attribute to differentiate them.
	Check the API section to learn about the default one set for our pagination. You need to customize the `),i=T("strong"),i.textContent=n,m=R(` attribute if you
	have more than one pagination on your page. The `),c=T("strong"),c.textContent=e,u=R(` attribute is set to the current element as needed. Each
	pagination link item has its own `),_=T("strong"),_.textContent=w,g=R(` that you can customize (for ScreenReader). Check the API section to know the default value
	set for each item.`)},l(r){t=A(r,"Pagination is a navigation element. The navigation (nav) elements need to have the "),l=C(r,"STRONG",{"data-svelte-h":!0}),y(l)!=="svelte-4a4qrm"&&(l.textContent=o),s=A(r,` attribute to differentiate them.
	Check the API section to learn about the default one set for our pagination. You need to customize the `),i=C(r,"STRONG",{"data-svelte-h":!0}),y(i)!=="svelte-4a4qrm"&&(i.textContent=n),m=A(r,` attribute if you
	have more than one pagination on your page. The `),c=C(r,"STRONG",{"data-svelte-h":!0}),y(c)!=="svelte-xlh399"&&(c.textContent=e),u=A(r,` attribute is set to the current element as needed. Each
	pagination link item has its own `),_=C(r,"STRONG",{"data-svelte-h":!0}),y(_)!=="svelte-4a4qrm"&&(_.textContent=w),g=A(r,` that you can customize (for ScreenReader). Check the API section to know the default value
	set for each item.`)},m(r,$){p(r,t,$),p(r,l,$),p(r,s,$),p(r,i,$),p(r,m,$),p(r,c,$),p(r,u,$),p(r,_,$),p(r,g,$)},p:D,d(r){r&&(f(t),f(l),f(s),f(i),f(m),f(c),f(u),f(_),f(g))}}}function B(a){let t,l,o,s,i,n,m,c;return t=new L({props:{label:"Basic paginations",level:2,$$slots:{default:[G]},$$scope:{ctx:a}}}),o=new L({props:{label:"Customization",level:2,$$slots:{default:[H]},$$scope:{ctx:a}}}),i=new L({props:{label:"Pagination with hrefs",level:2,$$slots:{default:[M]},$$scope:{ctx:a}}}),m=new L({props:{label:"Accessibility",level:2,$$slots:{default:[Y]},$$scope:{ctx:a}}}),{c(){v(t.$$.fragment),l=O(),v(o.$$.fragment),s=O(),v(i.$$.fragment),n=O(),v(m.$$.fragment)},l(e){d(t.$$.fragment,e),l=I(e),d(o.$$.fragment,e),s=I(e),d(i.$$.fragment,e),n=I(e),d(m.$$.fragment,e)},m(e,u){b(t,e,u),p(e,l,u),b(o,e,u),p(e,s,u),b(i,e,u),p(e,n,u),b(m,e,u),c=!0},p(e,[u]){const _={};u&1&&(_.$$scope={dirty:u,ctx:e}),t.$set(_);const w={};u&1&&(w.$$scope={dirty:u,ctx:e}),o.$set(w);const g={};u&1&&(g.$$scope={dirty:u,ctx:e}),i.$set(g);const r={};u&1&&(r.$$scope={dirty:u,ctx:e}),m.$set(r)},i(e){c||(P(t.$$.fragment,e),P(o.$$.fragment,e),P(i.$$.fragment,e),P(m.$$.fragment,e),c=!0)},o(e){x(t.$$.fragment,e),x(o.$$.fragment,e),x(i.$$.fragment,e),x(m.$$.fragment,e),c=!1},d(e){e&&(f(l),f(s),f(n)),E(t,e),E(o,e),E(i,e),E(m,e)}}}class W extends U{constructor(t){super(),N(this,t,null,B,S,{})}}export{W as component};
