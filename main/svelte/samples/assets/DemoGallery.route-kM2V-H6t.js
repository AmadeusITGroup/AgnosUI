import{p as at,s as J,t as g,e as P,d as u,h as L,j as F,c as b,a as ot,f as dt,g as s,b as G,Q as K,T as I,R as X,Y as st,a5 as ct,l as Z,O as Q,S as ut,U as tt,L as vt,a1 as mt,n as ht}from"./AppCommon-CsXJDRZ3.js";import{h as Y}from"./html-CLMM1AfH.js";import{a as c}from"./actions-kl0KjzIn.js";import{b as ft}from"./this-DCZ6uhGz.js";import{c as et}from"./config-TUPcxXVO.js";import{c as j}from"./dom-gfxqXJpK-BenLeVwg.js";import{p as pt,n as bt}from"./next-qIJV01AO.js";import{c as rt}from"./index-BsOUzc-S.js";import"./stores-BElQIA3m.js";import"./index-client-BaNbKOMT.js";import"./writables-CgpOQ4hA-DwO4tqpW.js";import"./navManager-DXxk70la.js";import"./widget-DeVncyQM.js";var gt=g('<span class="absolute top-1/2 -translate-y-1/2 left-1/2 loading loading-spinner loading-lg text-primary"></span>'),wt=g("<source>"),_t=g('<!> <picture class="flex justify-center"><!> <img class="select-none object-contain"></picture>',1),xt=g('<div class="skeleton w-full h-full"></div>'),yt=g("<div><!></div>");function St(i,r){at(r,!0);let w=J(!1);var v=yt();let T;var y=u(v);{var U=l=>{var f=_t(),p=dt(f);{var M=m=>{var R=gt();b(m,R)};P(p,m=>{s(w)||m(M)})}var B=G(p,2),V=u(B);K(V,17,()=>r.sources,X,(m,R)=>{let W=()=>s(R).media,z=()=>s(R).srcset;var H=wt();L(()=>{I(H,"media",W()),I(H,"srcset",z())}),b(m,H)});var S=G(V,2);let C;L(()=>{I(S,"alt",r.alt),I(S,"src",r.src),C=st(S,"",C,{"aspect-ratio":r.aspectRatio})}),ct("load",S,()=>Z(w,!0)),b(l,f)},o=l=>{var f=xt();b(l,f)};P(y,l=>{r.loadRequested?l(U):l(o,!1)})}c(v,(l,f)=>{var p;return(p=j)==null?void 0:p(l,f)},()=>"relative basis-full min-w-0 shrink-0 grow-0 flex justify-center"),c(v,(l,f)=>{var p;return(p=r.slide)==null?void 0:p.call(r,l,f)},()=>({id:r.id,index:r.index})),L(l=>T=F(v,T,{...l}),[()=>({})]),b(i,v),ot()}const kt=`<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 fill-current md:h-8 md:w-8"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>
`,Mt='<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 fill-current md:h-8 md:w-8"><path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" /></svg>';var Rt=g('<div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"><button><!></button> <button><!></button></div>'),qt=g('<div class="absolute right-5 bottom-5 flex"><button class="btn btn-primary btn-sm md:btn-md btn-square opacity-75 hover:opacity-100"><!></button></div>'),Ft=g('<button><img class="select-none" alt="random picsum" loading="lazy"></button>'),jt=g('<div class="grid grid-flow-row max-h-dvh"><div><div class="flex max-h-full"></div> <!> <!></div> <div><div></div></div></div>');function Lt(i,r){at(r,!0);let w=Q(r,"withNavArrows",3,!1),v=Q(r,"withShowFullscreen",3,!1),T=Q(r,"aspectRatio",3,4/3),y=J(ut(r.photos.map((t,e)=>({...t,loadRequested:e===0}))));tt(()=>{Z(y,r.photos.map((t,e)=>({...t,loadRequested:e===0})),!0)});const{state:U,directives:o}=et(rt),{directives:l,api:{scrollTo:f}}=et(rt,{props:{dragFree:!0,containScroll:"keepSnaps"}});let p=vt(()=>!!(document!=null&&document.fullscreenEnabled)&&v()),M=J(!1),B;const V=()=>{s(M)?document.exitFullscreen():B.requestFullscreen(),Z(M,!s(M))};tt(()=>{const t=U.selectedScrollSnap;mt(()=>{f(t),s(y)[t].loadRequested=!0,t>0&&(s(y)[t-1].loadRequested=!0),t<s(y).length-1&&(s(y)[t+1].loadRequested=!0)})});const S=t=>t.preventDefault();var C=jt(),m=u(C);let R;var W=u(m);K(W,21,()=>s(y),X,(t,e,a)=>{let k=()=>s(e).src,_=()=>s(e).alt,x=()=>s(e).sources,q=()=>s(e).loadRequested;St(t,{get src(){return k()},get alt(){return _()},get sources(){return x()},get loadRequested(){return q()},get aspectRatio(){return T()},id:`gallery-photo-${a??""}`,index:a,get slide(){return o.slide}})});var z=G(W,2);{var H=t=>{var e=Rt(),a=u(e);let k;var _=u(a);Y(_,()=>pt),c(a,(n,d)=>{var h;return(h=j)==null?void 0:h(n,d)},()=>"btn btn-primary btn-sm md:btn-md btn-circle opacity-75 hover:opacity-100"),c(a,n=>{var d;return(d=o.scrollPrev)==null?void 0:d.call(o,n)});var x=G(a,2);let q;var O=u(x);Y(O,()=>bt),c(x,(n,d)=>{var h;return(h=j)==null?void 0:h(n,d)},()=>"btn btn-primary btn-sm md:btn-md btn-circle opacity-75 hover:opacity-100"),c(x,n=>{var d;return(d=o.scrollNext)==null?void 0:d.call(o,n)}),L((n,d)=>{k=F(a,k,{onpointerdown:S,...n}),q=F(x,q,{onpointerdown:S,...d})},[()=>({}),()=>({})]),b(t,e)};P(z,t=>{w()&&t(H)})}var it=G(z,2);{var nt=t=>{var e=qt(),a=u(e);a.__click=V,a.__pointerdown=S;var k=u(a);Y(k,()=>s(M)?Mt:kt),L(()=>I(a,"aria-label",s(M)?"leave fullscreen":"open photo in fullscreen")),b(t,e)};P(it,t=>{s(p)&&t(nt)})}c(m,(t,e)=>{var a;return(a=j)==null?void 0:a(t,e)},()=>"overflow-hidden relative cursor-grab active:cursor-grabbing"),c(m,t=>{var e;return(e=o.root)==null?void 0:e.call(o,t)});var A=G(m,2);let D;var E=u(A);let $;K(E,21,()=>r.photos,X,(t,e,a)=>{let k=()=>s(e).thumbnail;var _=Ft();let x;var q=u(_);let O;c(_,(n,d)=>{var h;return(h=j)==null?void 0:h(n,d)},()=>["ring-primary cursor-pointer",U.selectedScrollSnap===a&&"ring-3"]),c(_,(n,d)=>{var h;return(h=o.tabIndicator)==null?void 0:h.call(o,n,d)},()=>({index:a,id:`gallery-photo-${a}`})),L(n=>{x=F(_,x,{...n}),I(q,"src",k()),O=st(q,"",O,{"aspect-ratio":T()})},[()=>({})]),b(t,_)}),c(E,(t,e)=>{var a;return(a=j)==null?void 0:a(t,e)},()=>"grid grid-flow-col auto-cols-max gap-2 mx-1 my-1 items-center"),c(E,t=>{var e;return(e=o.tabList)==null?void 0:e.call(o,t)}),c(A,(t,e)=>{var a;return(a=j)==null?void 0:a(t,e)},()=>"overflow-hidden mt-1 mb-2"),c(A,t=>{var e;return(e=l.root)==null?void 0:e.call(l,t)}),ft(C,t=>B=t,()=>B),L((t,e,a)=>{R=F(m,R,{...t}),D=F(A,D,{...e}),$=F(E,$,{...a})},[()=>({}),()=>({}),()=>({})]),b(i,C),ot()}ht(["click","pointerdown"]);const Ct=[36,43,70,102,124,142,156,242,288,289,295,361,400,488,496,515,557,607,623,645],Nt=[124,289,400,488,607],lt=[],N=(i,r,w,v)=>`https://picsum.photos/id/${i}/${v?w:r}/${v?r:w}.webp`;for(const i of Ct){const r=Nt.includes(i);lt.push({thumbnail:N(i,120,90,r),src:N(i,1600,1200,r),alt:"random picsum",sources:[{media:"(max-width: 599px)",srcset:N(i,600,450,r)},{media:"(min-width: 600px) and (max-width: 799px)",srcset:N(i,800,600,r)},{media:"(min-width: 800px) and (max-width: 1199px)",srcset:N(i,1200,900,r)},{media:"(min-width: 1200px)",srcset:N(i,1600,1200,r)}]})}const Gt=[...lt];var It=g('<div class="w-full flex justify-center"><div class="max-w-[600px] lg:max-w-[1000px]"><!></div></div>');function Jt(i){var r=It(),w=u(r),v=u(w);Lt(v,{photos:Gt,withNavArrows:!0,withShowFullscreen:!0}),b(i,r)}export{Jt as default};
