import{a as g,t as S,c as ue,d as He}from"../chunks/disclose-version.BGQ9DrdY.js";import{ac as ft,Y as ht,p as ee,c as u,s as o,r as d,t as I,a as te,l as V,b as pe,f as j,P as bt,g as e,R as Me,m as O,d as z,a7 as q,J as Fe}from"../chunks/runtime.BEOU7zaz.js";import{s as Y,e as re,h as $t}from"../chunks/render.CJU4SkFP.js";import{i as K}from"../chunks/if.imcvzz0d.js";import{s as ge,d as Ae,b as _t}from"../chunks/misc.CkSTUMx2.js";import{f as Pe,o as Ne,s as f,r as wt,d as nt,j as Oe,p as Ue,m as xt,a as De,z as kt,A as yt}from"../chunks/stores.B-gqFnsy.js";import{t as Z,s as We,a as At,b as qe,S as G,r as St}from"../chunks/logo-svelte.X03F6W0v.js";import{b as ot}from"../chunks/this.Dg_D5ER6.js";import{i as ne}from"../chunks/lifecycle.BQIQNVl9.js";import{p as Q}from"../chunks/props.BddUafVw.js";import{s as ve,p as $e,a as P,b as Mt,u as Ge}from"../chunks/stores.D0r8cxzd.js";import{t as it}from"../chunks/twitter-x.DTs9qsur.js";import{g as It,b as Tt,o as Lt,c as Ct}from"../chunks/entry.MPTM2kb7.js";import{o as Ve,c as Et}from"../chunks/index-client.BoGQsvAy.js";import{i as Ft,u as de,v as Ee,w as Je,o as me,q as Be,y as Pt,e as Se,h as Xe,t as Nt,j as lt,z as Rt}from"../chunks/app.DgNZUwYJ.js";import{c as Ut,a as zt}from"../chunks/cssTransitions.DqbkjIVK.js";import{e as jt}from"../chunks/svelte-element.CgSGc22O.js";import{a as ct}from"../chunks/agnosui-logo.CxnwwfsY.js";function Wt(r,a,n){var s=ht(r,a);s&&s.set&&(r[a]=n,ft(()=>{r[a]=null}))}function Bt(r){return function(...a){var n=a[0];return n.preventDefault(),r?.apply(this,a)}}const Ot=!0,Dt=async()=>{let r;{const a=await fetch("https://amadeusitgroup.github.io/AgnosUI/versions.json");r=[{folder:"main",version:"PREVIEW"}].concat((await a.json()).map(n=>({...n,version:`v${n.version}`}))),r[1].version.match(/-next/)?(r[1].folder="next",r[2].folder="latest"):r[1].folder="latest"}return{versions:r,pageMeta:{title:"AgnosUI - Where web components shine",description:"Perfected component library for Svelte, React and Angular. Reactive and accessible, supports headless or Bootstrap. Providing: accordion, alert, modal, pagination, progressbar, rating, select, slider, toast, focus track, tooltip, pop-over, transition.",socialImage:"https://amadeusitgroup.github.io/AgnosUI/latest/agnosui-logo.png",socialImageAlt:"Icon of AgnosUI",shareUrl:"https://amadeusitgroup.github.io/AgnosUI/latest/"}}},is=Object.freeze(Object.defineProperty({__proto__:null,load:Dt,prerender:Ot},Symbol.toStringTag,{value:"Module"})),dt=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>`,Vt=`<svg data-v-5b7ea3a9="" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24"
    class="menu-icon">
    <path d="M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z"></path>
    <path d="M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z"></path>
    <path d="M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z"></path>
    <path d="M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z"></path>
</svg>`,Ht=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
</svg>`,qt=({dimension:r="height",showClasses:a,hideClasses:n,animationPendingClasses:s}={})=>Ut((t,v,i,m)=>{if(i&&Ft(t)){let{maxSize:c,minSize:h}=m;c||(de(t,s),de(t,n),Ee(t,a),c=t.getBoundingClientRect()[r]+"px",m.maxSize=c),h||(de(t,s),de(t,a),Ee(t,n),h=t.getBoundingClientRect()[r]+"px",m.minSize=h),de(t,a),de(t,n);const p=v==="show"?[h,c]:[c,h];t.style[r]=p[0],Je(t),Ee(t,s),Je(t),t.style[r]=p[1]}else de(t,v==="show"?n:a);return()=>{de(t,s),Ee(t,v==="show"?a:n),t.style[r]=""}}),Gt={dimension:"height",hideClasses:["collapse"],showClasses:["collapse","show"],animationPendingClasses:["collapsing"]},Jt=qt(Gt);var Xt=S('<div class="mb-2"><button class="btn p-1 d-flex align-items-center btn-header fw-semibold w-100 justify-content-between svelte-mavml1"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100" class="ms-1 svelte-mavml1"><rect class="horizontal svelte-mavml1" x="20" y="45" width="60" height="10" fill="currentColor"></rect><rect class="vertical svelte-mavml1" x="45" y="20" width="10" height="60" fill="currentColor"></rect></svg></button> <div><!></div></div>');function Yt(r,a){ee(a,!1);const n=ve(),s=()=>P(p,"$visible$",n),t=()=>P(m,"$paramAnimated$",n);let v=Q(a,"headerText",8),i=Q(a,"path",8);const m=Pe(!1),c=b(It($e)),h=Pe(c);Ve(()=>(m.set(!0),$e.subscribe(F=>{h()===!1&&h.set(b(F))})));const{stores:{visible$:p},api:{toggle:x},directives:{directive:k}}=zt({props:{animated:m,animatedOnInit:m,visible:h}});function b(F){return i().some(A=>F.url.pathname?.includes(A.path))}ne();var w=Xt(),l=u(w),y=u(l),$=o(y),N=o(u($));d($),d(l);var W=o(l,2);let _;I(()=>_=Ne(W,_,{},"svelte-mavml1"));var M=u(W);ge(M,Ae(a),{}),d(W),d(w),I(()=>{f(l,"aria-expanded",s()),Y(y,`${v()??""} `),Z(N,"expanded",s())}),re("click",l,()=>x()),me(W,(F,A)=>Be(F,A),()=>"contents"),me(W,(F,A)=>k(F,A),()=>({transition:Jt,animated:t()})),g(r,w),te()}const Ye="focusin",Ke="focusout",Kt=wt(null,{onUse({set:r}){function a(){r(document.activeElement)}a();const n=document.documentElement;function s(){setTimeout(a)}return n.addEventListener(Ye,a,{capture:!0}),n.addEventListener(Ke,s,{capture:!0}),()=>{n.removeEventListener(Ye,a,{capture:!0}),n.removeEventListener(Ke,s,{capture:!0})}},equal:Object.is});function Qt(){const{elements$:r,directive:a}=Pt(),n=nt(()=>{const s=Kt();if(!s)return!1;for(const t of r())if(t===s||t.contains(s))return!0;return!1});return{directive:a,hasFocus$:n}}var Zt=S("<div></div>"),ea=S('<div><button type="button"><!></button> <!></div>');function Re(r,a){ee(a,!1);const n=ve(),s=()=>P(v,"$open$",n),t=()=>P(i,"$hasFocus$",n),v=Pe(!1),{hasFocus$:i,directive:m}=Qt();function c(_,M){M===0&&_.focus()}const h=()=>v.update(_=>!_);let p=Q(a,"ariaLabel",8),x=Q(a,"btnClass",8,""),k=Q(a,"items",8),b=Q(a,"placement",8,"start"),w=Q(a,"dropdownClass",8,"");const l=_=>{_.preventDefault(),_.target.focus()};V(()=>t(),()=>{Mt(v,t())}),pe(),ne();var y=ea(),$=u(y),N=u($);ge(N,a.$$slots?.button,{}),d($);var W=o($,2);K(W,s,_=>{var M=Zt();let F;I(()=>F=Ne(M,F,{"data-bs-popper":"absolute"},"svelte-1cdjb5")),Se(M,7,k,A=>A.id,(A,T,R)=>{var L=ue(),B=j(L);jt(B,()=>e(T).tag,!1,(C,D)=>{let H;I(()=>H=Ne(C,H,{href:e(T).tag==="a"?e(T).href:void 0,"aria-current":e(T).isSelected?"page":!1},"svelte-1cdjb5",C.namespaceURI!==bt,C.nodeName.includes("-"))),I(()=>Z(C,"active",e(T).isSelected)),me(C,(oe,X)=>c(oe,X),()=>e(R)),me(C,(oe,X)=>Be(oe,X),()=>"dropdown-item d-flex align-items-center"),re("pointerdown",C,l),re("click",C,()=>{e(T).tag==="button"&&e(T).onclick(),h()});var ae=ue(),_e=j(ae);ge(_e,a.$$slots?.item,{get item(){return e(T)},get index(){return e(R)}}),g(D,ae)}),g(A,L)}),d(M),I(()=>Z(M,"show",s())),me(M,A=>m(A)),me(M,(A,T)=>Be(A,T),()=>"dropdown-menu dropdown-menu-"+b()+" position-absolute"),g(_,M)}),d(y),I(()=>{We(y,`dropdown ${w()??""} svelte-1cdjb5`),We($,`btn dropdown-toggle align-items-center d-flex ${x()??""} svelte-1cdjb5`),f($,"aria-label",p()),f($,"aria-expanded",s())}),re("mousedown",$,Bt(function(_){_t.call(this,a,_)})),re("click",$,h),g(r,y),te()}let ta=0;var aa=S('<!> <span class="fwk-name svelte-17s8l5c"> </span>',1),sa=S("<!> ",1),ra=S('<strong class="d-flex w-100 align-items-center fw-semibold">Framework</strong> <!>',1),na=S('<!> <span class="pkg-name svelte-17s8l5c"> </span>',1),oa=S("<!> ",1),ia=S('<strong class="d-flex w-100 align-items-center fw-semibold">Package</strong> <!> <hr>',1),la=S('<a class="menu-item menu-item-sidenav d-flex align-items-center justify-content-between"> </a>'),ca=S('<span class="badge text-bg-warning">In progress</span>'),da=S('<span class="badge text-bg-info">Beta</span>'),va=S('<a class="menu-item menu-item-sidenav d-flex align-items-center justify-content-between"> <!> <!></a>'),ma=S("<div></div>"),ua=S("<!> <!>",1),ga=S('<nav class="w-100 mt-1"><!> <!> <!></nav>');function vt(r,a){ee(a,!1);const n=ve(),s=()=>P($e,"$page",n),t=()=>P(Oe,"$selectedApiFramework$",n),v=()=>P(Ue,"$pathToRoot$",n),i=O(),m=O(),c=O(),h=O(),p=/^(.*\/)(angular|react|svelte|typescript)(\/.*)$/,x=/^(.*\/api\/)(angular|react|svelte|typescript)\/(bootstrap|headless)(\/.*)$/,k=(ta+=1)-1+"-",b=At.replace(/id="([^"]+)"/g,`id="${k}$1"`).replace(/url\(#([^)]+)/g,`url(#${k}$1`);let w=O(),l=O();V(()=>s(),()=>{z(i,s().url.pathname.match(p))}),V(()=>s(),()=>{z(m,s().url.pathname.match(x))}),V(()=>(e(i),s(),t(),qe),()=>{z(w,e(i)?[...s().data.includesPkg?[{tag:"a",id:"Typescript",href:`${e(i)[1]}typescript${e(i)[3]}`,isSelected:t()==="typescript",logo:Nt}]:[],{tag:"a",id:"Angular",href:`${e(i)[1]}angular${e(i)[3]}`,isSelected:t()==="angular",logo:b},{tag:"a",id:"React",href:`${e(i)[1]}react${e(i)[3]}`,isSelected:t()==="react",logo:St},{tag:"a",id:"Svelte",href:`${e(i)[1]}svelte${e(i)[3]}`,isSelected:t()==="svelte",logo:qe}]:[])}),V(()=>e(w),()=>{z(c,e(w).find(_=>_.isSelected))}),V(()=>(e(m),s(),Xe),()=>{z(l,e(m)?[{tag:"a",id:"Headless",href:`${e(m)[1]}${e(m)[2]}/headless${e(m)[4]}`,isSelected:s().params.type==="headless",logo:ct},{tag:"a",id:"Bootstrap",href:`${e(m)[1]}${e(m)[2]}/bootstrap${e(m)[4]}`,isSelected:s().params.type==="bootstrap",logo:Xe}]:[])}),V(()=>e(l),()=>{z(h,e(l).find(_=>_.isSelected))}),pe(),ne();var y=ga(),$=u(y);K($,()=>s().data.includesFwk,_=>{var M=ra(),F=o(j(M),2);Re(F,{ariaLabel:"choose the framework",get items(){return e(w)},dropdownClass:"mb-2 mt-1",btnClass:"btn-outline-primary",$$slots:{button:(A,T)=>{var R=aa(),L=j(R);G(L,{get svg(){return e(c).logo},className:"icon-20 align-middle me-3"});var B=o(L,2),C=u(B);d(B),I(()=>Y(C,e(c).id)),g(A,R)},item:(A,T)=>{const R=q(()=>T.item);var L=sa(),B=j(L);G(B,{get svg(){return e(R).logo},className:"icon-20 align-middle me-3"});var C=o(B);I(()=>Y(C,` ${e(R).id??""}`)),g(A,L)}}}),g(_,M)});var N=o($,2);K(N,()=>s().data.includesPkg,_=>{var M=ia(),F=o(j(M),2);Re(F,{ariaLabel:"choose the package",get items(){return e(l)},dropdownClass:"mb-2 mt-1",btnClass:"btn-outline-primary",$$slots:{button:(A,T)=>{var R=na(),L=j(R);G(L,{get svg(){return e(h).logo},className:"icon-20 align-middle me-3"});var B=o(L,2),C=u(B);d(B),I(()=>Y(C,e(h).id)),g(A,R)},item:(A,T)=>{const R=q(()=>T.item);var L=oa(),B=j(L);G(B,{get svg(){return e(R).logo},className:"icon-20 align-middle me-3"});var C=o(B);I(()=>Y(C,` ${e(R).id??""}`)),g(A,L)}}}),Me(2),g(_,M)});var W=o(N,2);Se(W,1,()=>s().data.menu??[],({title:_,submenu:M,path:F})=>_,(_,M)=>{let F=()=>e(M).title,A=()=>e(M).submenu,T=()=>e(M).path;var R=ua(),L=j(R);K(L,T,C=>{var D=la();const H=q(()=>s().url.pathname?.includes(T()));var ae=u(D);d(D),I(()=>{f(D,"aria-current",e(H)?"page":void 0),f(D,"href",`${v()??""}${T()??""}`),Z(D,"active",e(H)),Y(ae,F())}),g(C,D)});var B=o(L,2);K(B,A,C=>{Yt(C,{get headerText(){return F()},get path(){return A()},children:(D,H)=>{var ae=ma();Se(ae,5,A,({label:oe,status:X,path:we,subpath:fe,slug:he})=>he,(oe,X)=>{let we=()=>e(X).label,fe=()=>e(X).status,he=()=>e(X).path,xe=()=>e(X).subpath;var ie=va();const U=q(()=>s().url.pathname?.includes(he()));var E=u(ie),J=o(E);K(J,()=>fe()==="inprogress",ce=>{var se=ca();g(ce,se)});var le=o(J,2);K(le,()=>fe()==="beta",ce=>{var se=da();g(ce,se)}),d(ie),I(()=>{f(ie,"aria-current",e(U)?"page":void 0),f(ie,"href",`${v()??""}${he()??""}${xe()??""??""}`),Z(ie,"active",e(U)),Y(E,`${we()??""} `)}),g(oe,ie)}),d(ae),g(D,ae)},$$slots:{default:!0}})}),g(_,R)}),d(y),g(r,y),te()}var pa=S("<a> </a>"),fa=S('<div class="ms-2 mt-1 border-start-1"><div class="d-none d-lg-block fw-bold pb-2 mb-1">On this page</div> <div></div></div>');function mt(r,a){ee(a,!1);const n=ve(),s=()=>P(v,"$elements$",n),t=()=>P(i,"$visibleElements$",n),{elements$:v,visibleElements$:i}=xt;function m(p,x){const k=p.querySelector("h1,h2,h3");if(k){const b=[`menu-item menu-item-toc rounded-end toc-${k.tagName.toLowerCase()}`],w=p.querySelector("section");return(w&&i().has(w)||!w&&x)&&b.push("active"),{label:k.innerText,href:k.querySelector("a")?.getAttribute("href")??"",classname:b.join(" ")}}else return{label:"",href:"",classname:""}}ne();var c=ue(),h=j(c);K(h,()=>s().length,p=>{var x=fa(),k=o(u(x),2);Se(k,5,s,lt,(b,w)=>{var l=pa();const y=q(()=>t().has(e(w))),$=q(()=>{const{label:W,classname:_,href:M}=m(e(w),e(y));return{label:W,classname:_,href:M}});var N=u(l);d(l),I(()=>{We(l,e($).classname),f(l,"aria-current",e(y)?"page":void 0),f(l,"href",e($).href),Y(N,e($).label)}),g(b,l)}),d(k),d(x),g(p,x)}),g(r,c),te()}var ha=S('<dialog class="svelte-alncmg"><div class="menu-title text-center border-bottom pb-2 svelte-alncmg"><span class="menu-title-text svelte-alncmg"> </span> <button type="button" class="btn-close pb-3 pe-3 svelte-alncmg" aria-label="Close menu"></button></div> <!></dialog>');function ut(r,a){ee(a,!1);let n=Q(a,"title",8),s=Q(a,"open",8);const t=Et();let v=O();function i(b){const w=b.target.tagName.toLowerCase(),l=b.target.className.includes?.("btn-header")||b.target.className.includes?.("dropdown-toggle");(w==="button"&&!l||w==="a"&&!b.target.className.includes?.("dropdown-item"))&&e(v).close()}function m(){t("close")}V(()=>(Fe(s()),e(v)),()=>{s()&&e(v)?.showModal()}),pe(),ne();var c=ha();ot(c,b=>z(v,b),()=>e(v));var h=u(c),p=u(h),x=u(p);d(p),Me(2),d(h);var k=o(h,2);ge(k,Ae(a),{}),d(c),I(()=>Y(x,n())),re("close",c,m),re("click",c,i),g(r,c),te()}var ba=S('<div class="d-flex align-items-center justify-content-between"><button class="d-md-none text-dark-emphasis d-flex align-items-center btn btn-link link-underline link-underline-opacity-0"><!><span class="menu-text">Menu</span></button> <button class="text-dark-emphasis d-flex align-items-center btn btn-link link-underline link-underline-opacity-0"><span class="menu-text">On this page</span> <!></button></div> <!>',1);function $a(r,a){ee(a,!1);const n=O(),s=O();let t=O(!1),v=O(!1);function i(){z(t,z(v,!1))}V(()=>(e(t),e(v)),()=>{z(n,e(t)?"Menu":e(v)?"On this page":"")}),V(()=>(e(t),e(v)),()=>{z(s,e(t)||e(v))}),pe();var m=ba(),c=j(m),h=u(c),p=u(h);G(p,{svg:Vt,className:"icon-20 me-1"}),Me(),d(h);var x=o(h,2),k=o(u(x),2);G(k,{svg:Ht,className:"icon-20 me-1"}),d(x),d(c);var b=o(c,2);ut(b,{get title(){return e(n)},get open(){return e(s)},$$events:{close:i},children:(w,l)=>{var y=ue(),$=j(y);K($,()=>e(t),N=>{vt(N,{})},N=>{mt(N,{})}),g(w,y)},$$slots:{default:!0}}),I(()=>{f(h,"aria-expanded",e(t)),f(x,"aria-expanded",e(v))}),re("click",h,()=>{z(t,!0)}),re("click",x,()=>{z(v,!0)}),g(r,m),te()}const _a=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg>`;var wa=S('<hr> <a class="nav-link svelte-1anas1w">API</a>',1),xa=S('<nav class="navbar navbar-light flex-column align-items-stretch"><a class="nav-item nav-link svelte-1anas1w">Documentation</a> <!> <hr> <a class="nav-item nav-link svelte-1anas1w">Blog</a> <hr></nav> <div class="d-flex justify-content-center"><a class="nav-link" href="https://github.com/AmadeusITGroup/AgnosUI" aria-label="link to GitHub repository" target="_blank"><!></a> <a class="nav-link ms-3" href="https://twitter.com/AgnosUI" aria-label="link to twitter / x account" target="_blank"><!></a></div>',1),ka=S('<button class="btn d-flex align-items-center px-0" aria-label="open the mobile menu"><!></button> <!>',1);function ya(r,a){ee(a,!1);const n=ve(),s=()=>P($e,"$page",n),t=()=>P(Ue,"$pathToRoot$",n),v=()=>P(De,"$selectedFramework$",n),i=()=>P(Oe,"$selectedApiFramework$",n),m=O();let c=O(!1);function h(){z(c,!1)}V(()=>s(),()=>{z(m,s().route.id?.startsWith("/api/"))}),pe(),ne();var p=ka(),x=j(p),k=u(x);G(k,{svg:_a,className:"icon-20 me-1"}),d(x);var b=o(x,2);ut(b,{title:"AgnosUI",get open(){return e(c)},$$events:{close:h},children:(w,l)=>{var y=xa(),$=j(y),N=u($);I(()=>f(N,"aria-current",s().route.id?.startsWith("/docs/")?"page":void 0));const W=q(()=>s().route.id?.startsWith("/docs/"));var _=o(N,2);K(_,()=>!0,C=>{var D=wa(),H=o(j(D),2);I(()=>{f(H,"href",`${t()??""}api/${i()??""}/bootstrap/types`),f(H,"aria-current",e(m)?"page":void 0),Z(H,"active",e(m))}),g(C,D)});var M=o(_,4);I(()=>f(M,"aria-current",s().route.id?.startsWith("/blog/")?"page":void 0));const F=q(()=>s().route.id?.startsWith("/blog/"));Me(2),d($);var A=o($,2),T=u(A),R=u(T);G(R,{className:"icon-24 align-middle",svg:dt}),d(T);var L=o(T,2),B=u(L);G(B,{className:"icon-24 align-middle",svg:it}),d(L),d(A),I(()=>{f(N,"href",`${t()??""}docs/${v()??""}/getting-started/introduction`),Z(N,"active",e(W)),f(M,"href",`${t()??""}blog/2024-02-01`),Z(M,"active",e(F))}),g(w,y)},$$slots:{default:!0}}),I(()=>f(x,"aria-expanded",e(c))),re("click",x,()=>{z(c,!0)}),g(r,p),te()}var Aa=S("<div><!></div>");function Sa(r,a){ee(a,!1);const n=Rt(i=>Array.from(i.querySelectorAll("section")));ne();var s=Aa();let t;I(()=>t=Ne(s,t,{}));var v=u(s);ge(v,Ae(a),{}),d(s),me(s,i=>n(i)),g(r,s),te()}const Ma=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle-half" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16"/>
</svg>`,Ia=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars-fill" viewBox="0 0 16 16">
  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
  <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
</svg>`,Ta=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun-fill" viewBox="0 0 16 16">
  <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
</svg>`;var La=S("<!> ",1),Ca=S('<div class="nav-item"><!></div>');function Qe(r,a){ee(a,!1);const n=ve(),s=()=>P(v,"$themes$",n),t=Pe("auto"),v=nt(()=>[{tag:"button",id:"auto",name:"Auto",icon:Ma,onclick:()=>{i("auto")},isSelected:t()==="auto"},{tag:"button",id:"light",name:"Light",icon:Ta,onclick:()=>{i("light")},isSelected:t()==="light"},{tag:"button",id:"dark",name:"Dark",icon:Ia,onclick:()=>{i("dark")},isSelected:t()==="dark"}]);function i(p){t.set(p),localStorage.setItem("theme",p),m(p)}function m(p){p==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.setAttribute("data-bs-theme","dark"):document.documentElement.setAttribute("data-bs-theme",p),document.documentElement.setAttribute("data-agnos-theme",p)}Ve(()=>{i(localStorage.getItem("theme")??"auto"),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{t()==="auto"&&m("auto")})}),ne();var c=Ca(),h=u(c);Re(h,{btnClass:"btn-dark-mode nav-link",ariaLabel:"toggle the dark mode",get items(){return s()},placement:"end",$$slots:{button:(p,x)=>{var k=ue(),b=j(k);Se(b,1,s,lt,(w,l)=>{G(w,{get svg(){return e(l).icon},get className(){return e(l).id}})}),g(p,k)},item:(p,x)=>{const k=q(()=>x.item);var b=La(),w=j(b);G(w,{className:"me-3",get svg(){return e(k).icon}});var l=o(w,1,!0);I(()=>Y(l,e(k).name)),g(p,b)}}}),d(c),g(r,c),te()}const gt=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,Ze=r=>{if(typeof r!="string")throw new TypeError("Invalid argument expected string");const a=r.match(gt);if(!a)throw new Error(`Invalid argument not valid semver ('${r}' received)`);return a.shift(),a},et=r=>r==="*"||r==="x"||r==="X",tt=r=>{const a=parseInt(r,10);return isNaN(a)?r:a},Ea=(r,a)=>typeof r!=typeof a?[String(r),String(a)]:[r,a],Fa=(r,a)=>{if(et(r)||et(a))return 0;const[n,s]=Ea(tt(r),tt(a));return n>s?1:n<s?-1:0},at=(r,a)=>{for(let n=0;n<Math.max(r.length,a.length);n++){const s=Fa(r[n]||"0",a[n]||"0");if(s!==0)return s}return 0},Pa=(r,a)=>{const n=Ze(r),s=Ze(a),t=n.pop(),v=s.pop(),i=at(n,s);return i!==0?i:t&&v?at(t.split("."),v.split(".")):t||v?t?-1:1:0},Na=(r,a,n)=>{Ra(n);const s=Pa(r,a);return pt[n].includes(s)},pt={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1],"!=":[-1,1]},st=Object.keys(pt),Ra=r=>{if(typeof r!="string")throw new TypeError(`Invalid operator type, expected string but got ${typeof r}`);if(st.indexOf(r)===-1)throw new Error(`Invalid operator, expected one of ${st.join("|")}`)},Ua=r=>typeof r=="string"&&/^[v\d]/.test(r)&&gt.test(r);var za=S('<div class="nav-item"><!></div>');function rt(r,a){ee(a,!1);const n=ve(),s=()=>P($e,"$page",n),t=()=>P(Ue,"$pathToRoot$",n),v=()=>P(De,"$selectedFramework$",n),i=O(),m=O();let c=Q(a,"versions",8),h=O();const p=/-next/,x=(l,y,$)=>$?l===1?`Next (${y})`:l===2?`Latest (${y})`:y:l===1?`Latest (${y})`:y;V(()=>Fe(c()),()=>{z(i,c().find(l=>l.version==="v0.0.0")??c()[0])}),V(()=>(Fe(c()),s(),e(i),t(),v()),()=>{z(h,c().map(l=>({tag:"a",id:l.folder,version:l.version,href:l.version==="PREVIEW"||s().route.id==="/"||s().data.since&&Ua(s().data.since)&&Na(s().data.since,l.version,"<=")?s().url.pathname.replace(`/${e(i).folder}/`,`/${l.folder}/`):`${t().replace(e(i).folder,l.folder)}docs/${v()}/getting-started/introduction`,isSelected:e(i).folder===l.folder})))}),V(()=>Fe(c()),()=>{z(m,!!c()[1]?.version?.match?.(p))}),pe(),ne();var k=za(),b=u(k),w=q(()=>`nav-link ${(e(i).version==="PREVIEW"||e(i).folder==="next"?"badge text-bg-warning":"")??""}`);Re(b,{ariaLabel:"select the version of agnosui",get btnClass(){return e(w)},get items(){return e(h)},placement:"end",$$slots:{button:(l,y)=>{var $=He();I(()=>Y($,e(i).version)),g(l,$)},item:(l,y)=>{const $=q(()=>y.item),N=q(()=>y.index);var W=He();I(()=>Y(W,x(e(N),e($).version,e(m)))),g(l,W)}}}),d(k),g(r,k),te()}var ja=S('<link rel="canonical"> <meta itemprop="name"> <meta itemprop="description"> <meta name="description"> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:title"> <meta property="twitter:domain" content="amadeusitgroup.github.io"> <meta property="twitter:url"> <meta name="twitter:image"> <meta name="twitter:image:alt"> <meta name="twitter:description"> <meta name="og:title"> <meta name="og:description"> <meta name="og:url"> <meta name="og:site_name" content="AgnosUI"> <meta name="og:locale" content="en"> <meta name="og:type" content="website"> <meta property="og:image">',1),Wa=S('<a class="nav-link">API</a>'),Ba=S('<div class="container-xxl"><div class="row flex-wrap flex-sm-nowrap align-content-between"><aside class="demo-sidebar mx-lg-4 mx-xl-5 d-none d-md-flex align-items-center align-items-sm-start col-auto side-menu me-3 svelte-17s38gt"><!></aside> <div class="pb-4 col"><div class="demo-mobile-menu d-block d-lg-none svelte-17s38gt"><!></div> <!></div> <div class="ms-lg-4 ms-xl-5 demo-toc d-none d-lg-flex col-auto side-menu me-auto svelte-17s38gt"><!></div></div></div>'),Oa=S('<div class="agnos-ui svelte-17s38gt"><nav class="navbar-nav demo-nav-top navbar z-1 svelte-17s38gt"><div class="container-xxl"><a class="navbar-brand mx-lg-4 mx-xl-5 d-flex align-items-center"><!> AgnosUI</a> <div class="align-items-center d-none d-md-flex gap-3"><div class="d-flex align-items-center"></div> <a class="nav-link">Documentation</a> <!> <a class="nav-link">Blog</a> <div class="vr my-1"></div> <!> <div class="vr my-1"></div> <!> <div class="vr my-1"></div> <a class="nav-link" href="https://github.com/AmadeusITGroup/AgnosUI" aria-label="link to GitHub repository" target="_blank"><!></a> <a class="nav-link" href="https://twitter.com/AgnosUI" aria-label="link to twitter / x account" target="_blank"><!></a></div> <div class="align-items-center d-flex d-md-none gap-3"><!> <!> <!></div></div></nav> <div class="demo-main d-flex flex-column z-0 svelte-17s38gt"><!></div></div>');function ls(r,a){ee(a,!1);const n=ve(),s=()=>P(yt,"$routeLevel$",n),t=()=>P($e,"$page",n),v=()=>P(Ge,"$updated",n),i=()=>P(kt,"$canonicalURL$",n),m=()=>P(Ue,"$pathToRoot$",n),c=()=>P(De,"$selectedFramework$",n),h=()=>P(Oe,"$selectedApiFramework$",n),p=O(),x=O(),k=()=>{Ge.check()};Ve(()=>(navigator.serviceWorker?.addEventListener("controllerchange",k),()=>{navigator.serviceWorker?.removeEventListener("controllerchange",k)})),Tt(({willUnload:U,to:E})=>{v()&&!U&&E?.url&&(location.href=E.url.href)}),Lt(U=>{if(document.startViewTransition)return new Promise(E=>{document.startViewTransition(async()=>{E(),await U.complete})})});let b=O();const w=/\/docs\/(angular|react|svelte)\/([^#?]*)([#?].*)?$/;Ct(U=>{if(!U.to?.url?.hash){const E=U.to?.url?.href?.match(w)?.[2],J=U.from?.url?.href?.match(w)?.[2];(!E||!J||E!==J)&&e(b).scrollTo(0,0)}});const l={capture:()=>e(b).scrollTop,restore:U=>e(b).scrollTo(0,U)};let y=Q(a,"data",8);V(()=>s(),()=>{z(p,s()===0)}),V(()=>t(),()=>{z(x,t().route.id?.startsWith("/api/"))}),pe(),ne();var $=Oa();$t(U=>{var E=ja(),J=j(E),le=o(J,2),ce=o(le,2),se=o(ce,2),be=o(se,4),Ie=o(be,4),Te=o(Ie,2),ke=o(Te,2),Le=o(ke,2),Ce=o(Le,2),ze=o(Ce,2),ye=o(ze,2),je=o(ye,8);I(()=>{f(J,"href",i()),f(le,"content",t().data.pageMeta.title),f(ce,"content",t().data.pageMeta.description),f(se,"content",t().data.pageMeta.description),f(be,"content",t().data.pageMeta.title),f(Ie,"content",t().data.pageMeta.shareUrl),f(Te,"content",t().data.pageMeta.socialImage),f(ke,"content",t().data.pageMeta.socialImageAlt),f(Le,"content",t().data.pageMeta.description),f(Ce,"content",t().data.pageMeta.title),f(ze,"content",t().data.pageMeta.description),f(ye,"content",t().data.pageMeta.shareUrl),f(je,"content",t().data.pageMeta.socialImage)}),g(U,E)});var N=u($),W=u(N),_=u(W),M=u(_);G(M,{svg:ct,className:"agnosui-logo-brand me-2"}),Me(),d(_);var F=o(_,2),A=o(u(F),2);I(()=>f(A,"aria-current",t().route.id?.startsWith("/docs/")?"page":void 0));const T=q(()=>t().route.id?.startsWith("/docs/"));var R=o(A,2);K(R,()=>!0,U=>{var E=Wa();I(()=>{f(E,"href",`${m()??""}api/${h()??""}/bootstrap/types`),f(E,"aria-current",e(x)?"page":void 0),Z(E,"active",e(x))}),g(U,E)});var L=o(R,2);I(()=>f(L,"aria-current",t().route.id?.startsWith("/blog/")?"page":void 0));const B=q(()=>t().route.id?.startsWith("/blog/"));var C=o(L,4);Qe(C,{});var D=o(C,4);rt(D,{get versions(){return y().versions}});var H=o(D,4),ae=u(H);G(ae,{className:"icon-24 align-middle",svg:dt}),d(H);var _e=o(H,2),oe=u(_e);G(oe,{className:"icon-24 align-middle",svg:it}),d(_e),d(F);var X=o(F,2),we=u(X);Qe(we,{});var fe=o(we,2);rt(fe,{get versions(){return y().versions}});var he=o(fe,2);ya(he,{}),d(X),d(W),d(N);var xe=o(N,2);ot(xe,U=>z(b,U),()=>e(b));var ie=u(xe);return K(ie,()=>e(p),U=>{var E=ue(),J=j(E);ge(J,Ae(a),{}),g(U,E)},U=>{var E=Ba(),J=u(E),le=u(J),ce=u(le);vt(ce,{}),d(le);var se=o(le,2),be=u(se),Ie=u(be);$a(Ie,{}),d(be);var Te=o(be,2);Sa(Te,{children:(Ce,ze)=>{var ye=ue(),je=j(ye);ge(je,Ae(a),{}),g(Ce,ye)},$$slots:{default:!0}}),d(se);var ke=o(se,2),Le=u(ke);mt(Le,{}),d(ke),d(J),d(E),g(U,E)}),d(xe),d($),I(()=>{f(_,"href",m()),f(A,"href",`${m()??""}docs/${c()??""}/getting-started/introduction`),Z(A,"active",e(T)),f(L,"href",`${m()??""}blog/2024-02-01`),Z(L,"active",e(B))}),g(r,$),Wt(a,"snapshot",l),te({snapshot:l})}export{ls as component,is as universal};
