import{a as n,t as c}from"../chunks/disclose-version.DugZOR8Z.js";import{p as E,f as l,a as j,s as o,c as r,r as s,t as w}from"../chunks/runtime.CbSN9lKM.js";import{s as b}from"../chunks/render.BmVJS0zY.js";import{i as k}from"../chunks/if.CF_8fJNr.js";import{s as I}from"../chunks/snippet.BWUdvod-.js";import{s as R,p as N,a as O}from"../chunks/stores.BbY1AaX2.js";import{s as P,a as m}from"../chunks/store.B5xFAugW.js";import{p as S}from"../chunks/stores.Ck_AsoNU.js";var U=c('<div class="fw-bolder text-start">PREVIOUS</div> <a class="text-start"> </a>',1),V=c('<div class="fw-bolder text-end w-100">NEXT</div> <a class="text-end w-100"> </a>',1),X=c('<!> <hr> <div class="w-100 d-flex justify-content-between"><div><!></div> <div class="d-flex flex-column align-items-end"><!></div></div>',1);function J(T,f){E(f,!0);const d=P(),t=()=>m(S,"$page",d),$=()=>m(N,"$pathToRoot$",d),_=()=>m(O,"$selectedFramework$",d);var x=X(),u=l(x);I(u,()=>f.children);var h=o(u,4),i=r(h),F=r(i);k(F,()=>t().data.prev,p=>{var e=U(),a=o(l(e),2),v=r(a,!0);s(a),w(()=>{R(a,"href",`${$()??""}docs/${_()??""}/${t().data.prev.slug??""}${t().data.prev.subpath??""??""}`),b(v,t().data.prev.title)}),n(p,e)}),s(i);var g=o(i,2),y=r(g);k(y,()=>t().data.next,p=>{var e=V(),a=o(l(e),2),v=r(a,!0);s(a),w(()=>{R(a,"href",`${$()??""}docs/${_()??""}/${t().data.next.slug??""}${t().data.next.subpath??""??""}`),b(v,t().data.next.title)}),n(p,e)}),s(g),s(h),n(T,x),j()}export{J as component};
