import{p as lt,L as $,g as t,K as ut,s as C,U as vt,l as j,t as h,e as B,Q as at,h as y,c as f,a as rt,b as u,d as s,j as M,T as Z,n as ct,W as it,X as nt,k as dt}from"./AppCommon-CsXJDRZ3.js";import{b as O}from"./input-Cc6iIBp0.js";import{h as Y}from"./html-CLMM1AfH.js";import{s as gt}from"./snippet-B5aMU-E6.js";import{a as _}from"./actions-kl0KjzIn.js";import{c as bt}from"./config-TUPcxXVO.js";import{A as mt}from"./embla-carousel-autoplay.esm-CjDxzJE7.js";import{n as ot,p as et}from"./next-qIJV01AO.js";import{c as _t}from"./index-BsOUzc-S.js";import{c as W}from"./dom-gfxqXJpK-BenLeVwg.js";import"./stores-BElQIA3m.js";import"./index-client-BaNbKOMT.js";import"./writables-CgpOQ4hA-DwO4tqpW.js";import"./navManager-DXxk70la.js";import"./widget-DeVncyQM.js";const ft=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
</svg>
`,ht=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>
`,st=F=>{F.preventDefault()},xt=(F,n,P)=>{t(n)?P.plugins().autoplay.stop():P.plugins().autoplay.play(),j(n,!t(n))};var wt=h('<div class="flex p-1 px-2 cursor-auto bg-base-100 rounded"><button class="btn btn-xs btn-square"><!></button></div>'),yt=h("<button><!></button>"),kt=h("<button> </button>"),Nt=h("<div></div>"),At=h("<button><!></button>"),It=h('<div class="flex p-1 px-2 gap-1 cursor-auto bg-base-100 rounded-xl"><!> <!> <!></div>'),jt=h("<div><!> <!></div>"),St=h("<div><!></div>"),zt=h('<div><!> <div class="flex container touch-pan-y touch-pinch-zoom" aria-atomic="false"></div></div>');function Ct(F,n){lt(n,!0);let P=ut(n,["$$slots","$$events","$$legacy","autoplay","slide","photos"]);const A=$(()=>n.autoplay?[mt({playOnInit:!0,stopOnFocusIn:!0,delay:2e3})]:[]),{state:c,directives:e,api:q}=bt(_t,{get props(){return{...P,plugins:t(A),container:".container"}},defaultConfig:{duration:40}});let I=C(!0);vt(()=>{n.autoplay||j(I,!0)});var S=zt();let D;var K=s(S);{var E=v=>{var g=jt(),x=s(g);{var w=p=>{var b=wt();b.__pointerdown=[st];var d=s(b);d.__click=[xt,I,q];var R=s(d);Y(R,()=>t(I)?ft:ht),y(()=>Z(d,"aria-label",t(I)?"Pause":"Play")),f(p,b)};B(x,p=>{n.autoplay&&p(w)})}var L=u(x,2);{var z=p=>{var b=It();b.__pointerdown=[st];var d=s(b);{var R=m=>{var l=yt();let o;var r=s(l);Y(r,()=>c.direction==="rtl"?ot:et),_(l,(a,i)=>{var k;return(k=W)==null?void 0:k(a,i)},()=>"btn btn-circle btn-xs"),_(l,a=>{var i;return(i=e.scrollPrev)==null?void 0:i.call(e,a)}),y(a=>o=M(l,o,{...a}),[()=>({})]),f(m,l)};B(d,m=>{c.showNavigationArrows&&m(R)})}var T=u(d,2);{var G=m=>{var l=Nt();let o;at(l,23,()=>n.photos,({id:r})=>r,(r,a,i)=>{let k=()=>t(a).id;var N=kt();let tt;var pt=s(N);_(N,(U,J)=>{var V;return(V=W)==null?void 0:V(U,J)},()=>["btn btn-xs",c.selectedScrollSnap===t(i)&&"btn-active"]),_(N,(U,J)=>{var V;return(V=e.tabIndicator)==null?void 0:V.call(e,U,J)},()=>({index:t(i),id:k()})),y(U=>{tt=M(N,tt,{...U}),dt(pt,t(i)+1)},[()=>({})]),f(r,N)}),_(l,(r,a)=>{var i;return(i=W)==null?void 0:i(r,a)},()=>"flex gap-1"),_(l,r=>{var a;return(a=e.tabList)==null?void 0:a.call(e,r)}),y(r=>o=M(l,o,{...r}),[()=>({})]),f(m,l)};B(T,m=>{c.showNavigationIndicators&&m(G)})}var X=u(T,2);{var H=m=>{var l=At();let o;var r=s(l);Y(r,()=>c.direction==="rtl"?et:ot),_(l,(a,i)=>{var k;return(k=W)==null?void 0:k(a,i)},()=>"btn btn-circle btn-xs"),_(l,a=>{var i;return(i=e.scrollNext)==null?void 0:i.call(e,a)}),y(a=>o=M(l,o,{...a}),[()=>({})]),f(m,l)};B(X,m=>{c.showNavigationArrows&&m(H)})}f(p,b)};B(L,p=>{(c.showNavigationArrows||c.showNavigationIndicators)&&p(z)})}y(()=>it(g,1,nt(["absolute top-2 right-2 left-2 z-1 flex",n.autoplay?"justify-between":"justify-center"]))),f(v,g)};B(K,v=>{(c.showNavigationArrows||c.showNavigationIndicators||n.autoplay)&&v(E)})}var Q=u(K,2);at(Q,23,()=>n.photos,v=>v.id,(v,g,x)=>{var w=St();let L;var z=s(w);gt(z,()=>n.slide,()=>t(g)),_(w,(p,b)=>{var d;return(d=W)==null?void 0:d(p,b)},()=>"basis-full shrink-0 grow-0"),_(w,(p,b)=>{var d;return(d=e.slide)==null?void 0:d.call(e,p,b)},()=>({id:t(g).id,index:t(x)})),y(p=>L=M(w,L,{...p}),[()=>({})]),f(v,w)}),_(S,(v,g)=>{var x;return(x=W)==null?void 0:x(v,g)},()=>"overflow-hidden relative w-full cursor-grab active:cursor-grabbing ring-primary has-[.au-carousel-slide:focus-visible]:ring-3"),_(S,v=>{var g;return(g=e.root)==null?void 0:g.call(e,v)}),y(v=>{D=M(S,D,{...v}),Z(Q,"aria-live",n.autoplay?"off":"polite")},[()=>({})]),f(F,S),rt()}ct(["pointerdown","click"]);var Ft=h('<img class="select-none object-contain aspect-[4/3] w-full" loading="lazy">'),Pt=h('<div class="w-full flex justify-center"><div class="max-w-[600px] grow"><!> <div class="flex justify-around mt-2"><div class="flex flex-col items-end gap-1"><label class="label text-sm md:text-base">Loop <input type="checkbox" class="toggle toggle-xs md:toggle-sm toggle-primary"></label> <label>Autoplay <input type="checkbox" class="toggle toggle-xs md:toggle-sm toggle-primary"></label> <label class="label text-sm md:text-base">Drag free <input type="checkbox" class="toggle toggle-xs md:toggle-sm toggle-primary"></label></div> <div class="flex flex-col items-end gap-1"><label class="label text-sm md:text-base">Right-to-left <input type="checkbox" class="toggle toggle-xs md:toggle-sm toggle-primary"></label> <label class="label text-sm md:text-base">Indicators <input type="checkbox" class="toggle toggle-xs md:toggle-sm toggle-primary"></label> <label class="label text-sm md:text-base">Arrows <input type="checkbox" class="toggle toggle-xs md:toggle-sm toggle-primary"></label></div></div></div></div>');function Et(F,n){lt(n,!0);const P=["https://picsum.photos/600/450.webp?random=1","https://picsum.photos/600/450.webp?random=2","https://picsum.photos/450/600.webp?random=3","https://picsum.photos/600/450.webp?random=4","https://picsum.photos/600/450.webp?random=5","https://picsum.photos/600/450.webp?random=6"].map((o,r)=>({src:o,id:`photo-${r}`,alt:`picsum photo ${r+1} of 6`}));let A=C(!1),c=C(!0),e=C(!0),q=C(!1),I=C(!0),S=$(()=>t(A)&&t(I)),D=C(!1);var K=Pt(),E=s(K),Q=s(E);const v=$(()=>t(D)?"rtl":"ltr");Ct(Q,{photos:P,get showNavigationIndicators(){return t(e)},get showNavigationArrows(){return t(c)},get loop(){return t(A)},get dragFree(){return t(q)},get autoplay(){return t(S)},get direction(){return t(v)},slide:(r,a)=>{let i=()=>a==null?void 0:a().alt,k=()=>a==null?void 0:a().src;var N=Ft();y(()=>{Z(N,"alt",i()),Z(N,"src",k())}),f(r,N)},$$slots:{slide:!0}});var g=u(Q,2),x=s(g),w=s(x),L=u(s(w)),z=u(w,2),p=u(s(z)),b=u(z,2),d=u(s(b)),R=u(x,2),T=s(R),G=u(s(T)),X=u(T,2),H=u(s(X)),m=u(X,2),l=u(s(m));y(()=>{it(z,1,nt(["label text-sm md:text-base",!t(A)&&"has-[input]:cursor-not-allowed"])),p.disabled=!t(A)}),O(L,()=>t(A),o=>j(A,o)),O(p,()=>t(I),o=>j(I,o)),O(d,()=>t(q),o=>j(q,o)),O(G,()=>t(D),o=>j(D,o)),O(H,()=>t(e),o=>j(e,o)),O(l,()=>t(c),o=>j(c,o)),f(F,K),rt()}export{Et as default};
