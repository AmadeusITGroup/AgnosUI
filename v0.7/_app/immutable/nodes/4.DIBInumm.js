import{a as n,t as m}from"../chunks/disclose-version.Dner0__A.js";import{p as I,f as l,a as N,s as d,c as s,r as o,t as w}from"../chunks/runtime.2p_M1ADf.js";import{s as b}from"../chunks/render.CtMzg1ae.js";import{i as k}from"../chunks/if.Cv9w4O0r.js";import{s as O}from"../chunks/snippet.D5F5rSZJ.js";import{s as R,p as P,a as S}from"../chunks/stores.BlCezwjN.js";import{s as U,a as f}from"../chunks/store.CXrOJ5H9.js";import{p as V}from"../chunks/stores.DzkJluA6.js";var X=m('<div class="fw-bolder text-start">PREVIOUS</div> <a class="text-start"> </a>',1),q=m('<div class="fw-bolder text-end w-100">NEXT</div> <a class="text-end w-100"> </a>',1),z=m('<!> <hr> <div class="w-100 d-flex justify-content-between"><div><!></div> <div class="d-flex flex-column align-items-end"><!></div></div>',1);function L(T,c){I(c,!0);const i=U(),t=()=>f(V,"$page",i),$=()=>f(P,"$pathToRoot$",i),_=()=>f(S,"$selectedFramework$",i);var x=z(),u=l(x);O(u,()=>c.children);var h=d(u,4),v=s(h),F=s(v);{var y=a=>{var r=X(),e=d(l(r),2),p=s(e,!0);o(e),w(()=>{R(e,"href",`${$()??""}docs/${_()??""}/${t().data.prev.slug??""}${t().data.prev.subpath??""??""}`),b(p,t().data.prev.title)}),n(a,r)};k(F,a=>{t().data.prev&&a(y)})}o(v);var g=d(v,2),E=s(g);{var j=a=>{var r=q(),e=d(l(r),2),p=s(e,!0);o(e),w(()=>{R(e,"href",`${$()??""}docs/${_()??""}/${t().data.next.slug??""}${t().data.next.subpath??""??""}`),b(p,t().data.next.title)}),n(a,r)};k(E,a=>{t().data.next&&a(j)})}o(g),o(h),n(T,x),N()}export{L as component};
