import{p as ot,t as g,e as U,d as u,h as L,j as F,c as b,a as st,f as ct,g as s,b as J,s as G,P as K,S as I,Q as O,as as lt,a2 as ut,l as Z,M as X,R as tt,X as et,Y as vt,n as mt,L as ft}from"./AppCommon-3JlOw5zm.js";import{h as Y}from"./html-B1sREDT5.js";import{a as c}from"./actions-CTCF6R1J.js";import{b as ht}from"./this-r_s_1MEs.js";import{c as at}from"./config-BmpvGCvG.js";import{c as j}from"./dom-gfxqXJpK-C0QHRLVe.js";import{p as pt,n as bt}from"./next-qIJV01AO.js";import{c as rt}from"./index-BtDt4A8w.js";import"./stores-BQapFvhz.js";import"./index-client-DbbRw3DI.js";import"./writables-CgpOQ4hA-Bc2-O1bL.js";import"./navManager-I5FzT-eO.js";var gt=g('<span class="absolute top-1/2 -translate-y-1/2 left-1/2 loading loading-spinner loading-lg text-primary"></span>'),wt=g("<source>"),_t=g('<!> <picture class="flex justify-center"><!> <img class="select-none object-contain"></picture>',1),xt=g('<div class="skeleton w-full h-full"></div>'),yt=g("<div><!></div>");function St(i,a){ot(a,!0);let w=J(!1);var v=yt();let B;var y=u(v);{var T=l=>{var h=_t(),p=ct(h);{var M=m=>{var R=gt();b(m,R)};U(p,m=>{s(w)||m(M)})}var H=G(p,2),V=u(H);K(V,17,()=>a.sources,O,(m,R)=>{let W=()=>s(R).media,z=()=>s(R).srcset;var P=wt();L(()=>{I(P,"media",W()),I(P,"srcset",z())}),b(m,P)});var S=G(V,2);let C;L(()=>{I(S,"alt",a.alt),I(S,"src",a.src),C=lt(S,"",C,{"aspect-ratio":a.aspectRatio})}),ut("load",S,()=>Z(w,!0)),b(l,h)},o=l=>{var h=xt();b(l,h)};U(y,l=>{a.loadRequested?l(T):l(o,!1)})}c(v,(l,h)=>{var p;return(p=j)==null?void 0:p(l,h)},()=>"relative basis-full min-w-0 shrink-0 grow-0 flex justify-center"),c(v,(l,h)=>{var p;return(p=a.slide)==null?void 0:p.call(a,l,h)},()=>({id:a.id,index:a.index})),L(l=>B=F(v,B,{...l}),[()=>({})]),b(i,v),st()}const kt=`<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 fill-current md:h-8 md:w-8"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>
`,Mt='<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 fill-current md:h-8 md:w-8"><path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" /></svg>';var Rt=g('<div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"><button><!></button> <button><!></button></div>'),qt=g('<div class="absolute right-5 bottom-5 flex"><button class="btn btn-primary btn-sm md:btn-md btn-square opacity-75 hover:opacity-100"><!></button></div>'),Ft=g('<button><img class="select-none" alt="random picsum" loading="lazy"></button>'),jt=g('<div class="grid grid-flow-row max-h-dvh"><div><div class="flex max-h-full"></div> <!> <!></div> <div><div></div></div></div>');function Lt(i,a){ot(a,!0);let w=X(a,"withNavArrows",3,!1),v=X(a,"withShowFullscreen",3,!1),B=X(a,"aspectRatio",3,4/3),y=J(tt(a.photos.map((t,e)=>({...t,loadRequested:e===0}))));et(()=>{Z(y,tt(a.photos.map((t,e)=>({...t,loadRequested:e===0}))))});const{state:T,directives:o}=at({factory:rt,widgetName:"carousel"}),{directives:l,api:{scrollTo:h}}=at({factory:rt,widgetName:"carousel",props:{dragFree:!0,containScroll:"keepSnaps"}});let p=ft(()=>!!(document!=null&&document.fullscreenEnabled)&&v()),M=J(!1),H;const V=()=>{s(M)?document.exitFullscreen():H.requestFullscreen(),Z(M,!s(M))};et(()=>{const t=T.selectedScrollSnap;vt(()=>{h(t),s(y)[t].loadRequested=!0,t>0&&(s(y)[t-1].loadRequested=!0),t<s(y).length-1&&(s(y)[t+1].loadRequested=!0)})});const S=t=>t.preventDefault();var C=jt(),m=u(C);let R;var W=u(m);K(W,21,()=>s(y),O,(t,e,r)=>{let k=()=>s(e).src,_=()=>s(e).alt,x=()=>s(e).sources,q=()=>s(e).loadRequested;St(t,{get src(){return k()},get alt(){return _()},get sources(){return x()},get loadRequested(){return q()},get aspectRatio(){return B()},id:`gallery-photo-${r??""}`,index:r,get slide(){return o.slide}})});var z=G(W,2);{var P=t=>{var e=Rt(),r=u(e);let k;var _=u(r);Y(_,()=>pt),c(r,(n,d)=>{var f;return(f=j)==null?void 0:f(n,d)},()=>"btn btn-primary btn-sm md:btn-md btn-circle opacity-75 hover:opacity-100"),c(r,n=>{var d;return(d=o.scrollPrev)==null?void 0:d.call(o,n)});var x=G(r,2);let q;var Q=u(x);Y(Q,()=>bt),c(x,(n,d)=>{var f;return(f=j)==null?void 0:f(n,d)},()=>"btn btn-primary btn-sm md:btn-md btn-circle opacity-75 hover:opacity-100"),c(x,n=>{var d;return(d=o.scrollNext)==null?void 0:d.call(o,n)}),L((n,d)=>{k=F(r,k,{onpointerdown:S,...n}),q=F(x,q,{onpointerdown:S,...d})},[()=>({}),()=>({})]),b(t,e)};U(z,t=>{w()&&t(P)})}var nt=G(z,2);{var dt=t=>{var e=qt(),r=u(e);r.__click=V,r.__pointerdown=S;var k=u(r);Y(k,()=>s(M)?Mt:kt),L(()=>I(r,"aria-label",s(M)?"leave fullscreen":"open photo in fullscreen")),b(t,e)};U(nt,t=>{s(p)&&t(dt)})}c(m,(t,e)=>{var r;return(r=j)==null?void 0:r(t,e)},()=>"overflow-hidden relative cursor-grab active:cursor-grabbing"),c(m,t=>{var e;return(e=o.root)==null?void 0:e.call(o,t)});var A=G(m,2);let D;var E=u(A);let $;K(E,21,()=>a.photos,O,(t,e,r)=>{let k=()=>s(e).thumbnail;var _=Ft();let x;var q=u(_);let Q;c(_,(n,d)=>{var f;return(f=j)==null?void 0:f(n,d)},()=>["ring-primary cursor-pointer",T.selectedScrollSnap===r&&"ring-3"]),c(_,(n,d)=>{var f;return(f=o.tabIndicator)==null?void 0:f.call(o,n,d)},()=>({index:r,id:`gallery-photo-${r}`})),L(n=>{x=F(_,x,{...n}),I(q,"src",k()),Q=lt(q,"",Q,{"aspect-ratio":B()})},[()=>({})]),b(t,_)}),c(E,(t,e)=>{var r;return(r=j)==null?void 0:r(t,e)},()=>"grid grid-flow-col auto-cols-max gap-2 mx-1 my-1 items-center"),c(E,t=>{var e;return(e=o.tabList)==null?void 0:e.call(o,t)}),c(A,(t,e)=>{var r;return(r=j)==null?void 0:r(t,e)},()=>"overflow-hidden mt-1 mb-2"),c(A,t=>{var e;return(e=l.root)==null?void 0:e.call(l,t)}),ht(C,t=>H=t,()=>H),L((t,e,r)=>{R=F(m,R,{...t}),D=F(A,D,{...e}),$=F(E,$,{...r})},[()=>({}),()=>({}),()=>({})]),b(i,C),st()}mt(["click","pointerdown"]);const Ct=[36,43,70,102,124,142,156,242,288,289,295,361,400,488,496,515,557,607,623,645],Nt=[124,289,400,488,607],it=[],N=(i,a,w,v)=>`https://picsum.photos/id/${i}/${v?w:a}/${v?a:w}.webp`;for(const i of Ct){const a=Nt.includes(i);it.push({thumbnail:N(i,120,90,a),src:N(i,1600,1200,a),alt:"random picsum",sources:[{media:"(max-width: 599px)",srcset:N(i,600,450,a)},{media:"(min-width: 600px) and (max-width: 799px)",srcset:N(i,800,600,a)},{media:"(min-width: 800px) and (max-width: 1199px)",srcset:N(i,1200,900,a)},{media:"(min-width: 1200px)",srcset:N(i,1600,1200,a)}]})}const Gt=[...it];var It=g('<div class="w-full flex justify-center"><div class="max-w-[600px] lg:max-w-[1000px]"><!></div></div>');function Yt(i){var a=It(),w=u(a),v=u(w);Lt(v,{photos:Gt,withNavArrows:!0,withShowFullscreen:!0}),b(i,a)}export{Yt as default};
