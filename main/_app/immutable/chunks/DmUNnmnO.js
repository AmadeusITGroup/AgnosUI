import{t as c,a as n}from"./HBiyjYhI.js";import{p as ve,t as U,k as me,g as l,aH as fe,i as y,l as p,s as m,m as d,j as ue}from"./Csp4km8_.js";import{a as ge,s as z}from"./B1QUzhOw.js";import{i as v}from"./Wd_4N5jU.js";import{b as be,e as he,i as _e,t as xe}from"./CeklrxJy.js";import{d as $e,i as we,p as ke,s as G,a as ye,c as Te,n as Se,j as Pe,h as Fe,k as J,r as Le,w as je,f as Ae}from"./CAi3HqQy.js";import{s as q,c as E}from"./BakNG69S.js";import{p as I}from"./Dc7EQLJb.js";import{s as Ne,a as T}from"./BlUjtetD.js";import{S as w,r as Re,a as Ue,s as qe}from"./C1LBBy4j.js";function Ee(t,e="",s=""){return`${t} - ${e?`${e.slice(0,1).toUpperCase()+e.slice(1)}${s?` ${s.slice(0,1).toUpperCase()+s.slice(1)}`:""} - `:""}AgnosUI`}const Ie=`<svg width="32" height="32" viewBox="0 0 415 415" xmlns="http://www.w3.org/2000/svg"><rect x="82.5" y="290" width="250" height="125" rx="62.5" fill="#1AD1A5"></rect><circle cx="207.5" cy="135" r="130" fill="black" fill-opacity=".3"></circle><circle cx="207.5" cy="135" r="125" fill="white"></circle><circle cx="207.5" cy="135" r="56" fill="#FF9903"></circle></svg>
`;var We=c('<span class="badge badge-warning">In progress</span>'),Be=c('<span class="badge badge-info">Beta</span>'),He=c('<span class="block md:hidden p-0"><!></span>'),Ce=c('<span class="block md:hidden p-0"><!></span>'),Me=c('<span class="block md:hidden p-0"><!></span>'),Ve=c('<span class="block md:hidden p-0"><!></span>'),De=c("<!> <!> <!> <!>",1),Oe=c('<span class="block md:hidden p-0"><!></span>'),ze=c('<span class="block md:hidden p-0"><!></span>'),Ge=c('<span class="block md:hidden badge rounded-full text-bg-info">headless</span>'),Je=c('<a role="tab"> </a>'),Ke=c('<div class="tabs tabs-lift content-tabset px-8 lg:px-12" role="tablist"></div>'),Qe=c('<header><div><div class="flex ms-auto gap-2 justify-content-center"><!> <!> <!> <!> <!> <!></div> <h1 class="text-primary me-3 me-md-none mb-0 p-0 p-md-3 text-center text-md-start svelte-b11sub"> </h1></div> <!></header>');function ft(t,e){ve(e,!0);const[s,x]=Ne(),f=()=>T(ke,"$page",s),u=()=>T(we,"$selectedApiFramework$",s),$=()=>T($e,"$selectedPackageType$",s),Q=()=>T(Te,"$selectedTabName$",s),X=()=>T(ye,"$pathToRoot$",s);let Y=I(e,"pageTitle",3,""),W=I(e,"status",3,""),L=I(e,"cssFramework",3,""),h=y(()=>f().data.tabs??[]),Z=y(()=>f().route.id?.startsWith("/blog/")),ee=y(()=>Ee(Y()||e.title,l(Z)?"":u(),$())),te=y(()=>!!f().params.framework);var S=Qe();ge(a=>{U(()=>fe.title=l(ee))});var P=p(S),j=p(P),B=p(j);{var ae=a=>{var r=We();n(a,r)};v(B,a=>{W()==="inprogress"&&a(ae)})}var H=m(B,2);{var se=a=>{var r=Be();n(a,r)};v(H,a=>{W()==="beta"&&a(se)})}var C=m(H,2);{var re=a=>{var r=De(),g=ue(r);{var k=o=>{var i=He(),_=p(i);w(_,{svg:xe,className:"icon-24 flex relative"}),d(i),n(o,i)};v(g,o=>{u()==="typescript"&&o(k)})}var A=m(g,2);{var O=o=>{var i=Ce(),_=p(i);w(_,{svg:Re,className:"icon-24 flex relative"}),d(i),n(o,i)};v(A,o=>{u()==="react"&&o(O)})}var F=m(A,2);{var N=o=>{var i=Me(),_=p(i);w(_,{svg:Ue,className:"icon-24 flex relative"}),d(i),n(o,i)};v(F,o=>{u()==="angular"&&o(N)})}var R=m(F,2);{var b=o=>{var i=Ve(),_=p(i);w(_,{svg:qe,className:"icon-24 flex relative"}),d(i),n(o,i)};v(R,o=>{u()==="svelte"&&o(b)})}n(a,r)};v(C,a=>{l(te)&&a(re)})}var M=m(C,2);{var oe=a=>{var r=Oe(),g=p(r);w(g,{svg:be,className:"icon-24 flex logo-bootstrap relative"}),d(r),n(a,r)};v(M,a=>{L()==="bootstrap"&&a(oe)})}var V=m(M,2);{var ie=a=>{var r=ze(),g=p(r);w(g,{svg:Ie,className:"icon-24 flex relative"}),d(r),n(a,r)};v(V,a=>{L()==="daisyUI"&&a(ie)})}var le=m(V,2);{var ne=a=>{var r=Ge();n(a,r)};v(le,a=>{L()==="headless"&&a(ne)})}d(j);var D=m(j,2),ce=p(D,!0);d(D),d(P);var de=m(P,2);{var pe=a=>{var r=Ke();he(r,21,()=>l(h),_e,(g,k,A,O)=>{let F=()=>l(k).title,N=()=>l(k).key,R=()=>l(k).path;var b=Je();const o=y(()=>Q()===N());var i=p(b,!0);d(b),U(()=>{G(b,"href",`${X()}docs/${u()}${R()}`),q(b,1,E(["tab",{"tab-darkonlightbg":!l(o)},{active:l(o)}])),G(b,"aria-selected",l(o)),z(i,F())}),n(g,b)}),d(r),n(a,r)};v(de,a=>{l(h).length&&a(pe)})}d(S),U(()=>{q(S,1,E(["au-header bg-light pt-4 px-6 lg:px-12 flex mb-6 items-center title",{"au-rounded":!l(h).length,"au-rounded-header":l(h).length,"pb-12":l(h).length,"pb-4":!l(h).length}]),"svelte-b11sub"),q(P,1,E(["w-full flex flex-wrap flex-row-reverse justify-between items-center",{"pb-4":l(h).length}])),z(ce,e.title)}),n(t,S),me(),x()}const Xe={status:"pending"},Ye=t=>{const e=typeof t;return e==="object"&&t!==null||e==="function"?typeof t.then=="function":!1},Ze=t=>{const e=je(Xe);return Promise.resolve(t).then(s=>e.set({status:"fulfilled",value:s}),s=>e.set({status:"rejected",reason:s})),Ae(e)},K=new WeakMap,et=t=>{if(!Ye(t))return Le({status:"fulfilled",value:t});let e=K.get(t);return e||(e=Ze(t),K.set(t,e)),e},tt=(t,e)=>Object.is(t,e)||t.status===e.status&&(t.status!=="fulfilled"||J(t.value,e.value))&&(t.status!=="rejected"||J(t.reason,e.reason)),at=t=>Fe(()=>et(t())(),{equal:tt}),st=(t,e,s)=>Pe(t,{derive:(x,f)=>{x.status==="fulfilled"&&f(x.value)},equal:s},e),ut=(t,e,s)=>st(at(t),e,s),gt=(t,e)=>{let s;const x=new Promise($=>s=$);let f=()=>{t.removeEventListener(e,u),f=Se};const u=$=>{$.target===t&&(s($),f())};return t.addEventListener(e,u),{promise:x,unsubscribe(){f()}}},bt=t=>{let e;return{promise:new Promise(s=>{e=setTimeout(()=>{e=void 0,s()},t)}),unsubscribe(){e&&(clearTimeout(e),e=void 0)}}},ht=()=>{let t;return{promise:new Promise(s=>{t=s}),resolve:t}};export{ft as H,ht as a,gt as b,bt as c,ut as p};
