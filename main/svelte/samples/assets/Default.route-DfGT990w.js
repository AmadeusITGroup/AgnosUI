import{p as lt,g as t,K as ut,T as ct,l as j,t as h,e as B,P as at,h as y,c as f,a as rt,L as $,b as P,s as u,d as s,j as M,S as H,n as vt,V as it,W as nt,k as dt}from"./AppCommon-CiJXSMZM.js";import{b as O}from"./input-CRMlg1XS.js";import{h as Y}from"./html-CkkJNDbv.js";import{s as gt}from"./snippet-x8p-CPM_.js";import{a as _}from"./actions-BCTZ69UQ.js";import{c as bt}from"./config-BiM-zinx.js";import{A as mt}from"./embla-carousel-autoplay.esm-CjDxzJE7.js";import{n as et,p as ot}from"./next-qIJV01AO.js";import{c as _t}from"./index-BTtOfWcy.js";import{c as V}from"./dom-gfxqXJpK-Bnbemfao.js";import"./stores-DcYU3NlH.js";import"./index-client-Cnd1wG5T.js";import"./writables-CgpOQ4hA-xhqmp7zW.js";import"./navManager-C4LdXSRl.js";const ft=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
</svg>
`,ht=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>
`,st=z=>{z.preventDefault()},xt=(z,n,F)=>{t(n)?F.plugins().autoplay.stop():F.plugins().autoplay.play(),j(n,!t(n))};var wt=h('<div class="flex p-1 px-2 cursor-auto bg-base-100 rounded"><button class="btn btn-xs btn-square"><!></button></div>'),yt=h("<button><!></button>"),kt=h("<button> </button>"),Nt=h("<div></div>"),At=h("<button><!></button>"),It=h('<div class="flex p-1 px-2 gap-1 cursor-auto bg-base-100 rounded-xl"><!> <!> <!></div>'),jt=h("<div><!> <!></div>"),St=h("<div><!></div>"),Ct=h('<div><!> <div class="flex container touch-pan-y touch-pinch-zoom" aria-atomic="false"></div></div>');function Pt(z,n){lt(n,!0);let F=ut(n,["$$slots","$$events","$$legacy","autoplay","slide","photos"]);const A=$(()=>n.autoplay?[mt({playOnInit:!0,stopOnFocusIn:!0,delay:2e3})]:[]),{state:v,directives:o,api:W}=bt({factory:_t,widgetName:"carousel",get props(){return{...F,plugins:t(A),container:".container"}},defaultConfig:{duration:40},enablePatchChanged:!0});let I=P(!0);ct(()=>{n.autoplay||j(I,!0)});var S=Ct();let D;var q=s(S);{var J=c=>{var g=jt(),x=s(g);{var w=p=>{var b=wt();b.__pointerdown=[st];var d=s(b);d.__click=[xt,I,W];var R=s(d);Y(R,()=>t(I)?ft:ht),y(()=>H(d,"aria-label",t(I)?"Pause":"Play")),f(p,b)};B(x,p=>{n.autoplay&&p(w)})}var L=u(x,2);{var C=p=>{var b=It();b.__pointerdown=[st];var d=s(b);{var R=m=>{var l=yt();let e;var r=s(l);Y(r,()=>v.direction==="rtl"?et:ot),_(l,(a,i)=>{var k;return(k=V)==null?void 0:k(a,i)},()=>"btn btn-circle btn-xs"),_(l,a=>{var i;return(i=o.scrollPrev)==null?void 0:i.call(o,a)}),y(a=>e=M(l,e,{...a}),[()=>({})]),f(m,l)};B(d,m=>{v.showNavigationArrows&&m(R)})}var T=u(d,2);{var Q=m=>{var l=Nt();let e;at(l,23,()=>n.photos,({id:r})=>r,(r,a,i)=>{let k=()=>t(a).id;var N=kt();let tt;var pt=s(N);_(N,(Z,X)=>{var E;return(E=V)==null?void 0:E(Z,X)},()=>["btn btn-xs",v.selectedScrollSnap===t(i)&&"btn-active"]),_(N,(Z,X)=>{var E;return(E=o.tabIndicator)==null?void 0:E.call(o,Z,X)},()=>({index:t(i),id:k()})),y(Z=>{tt=M(N,tt,{...Z}),dt(pt,t(i)+1)},[()=>({})]),f(r,N)}),_(l,(r,a)=>{var i;return(i=V)==null?void 0:i(r,a)},()=>"flex gap-1"),_(l,r=>{var a;return(a=o.tabList)==null?void 0:a.call(o,r)}),y(r=>e=M(l,e,{...r}),[()=>({})]),f(m,l)};B(T,m=>{v.showNavigationIndicators&&m(Q)})}var G=u(T,2);{var U=m=>{var l=At();let e;var r=s(l);Y(r,()=>v.direction==="rtl"?ot:et),_(l,(a,i)=>{var k;return(k=V)==null?void 0:k(a,i)},()=>"btn btn-circle btn-xs"),_(l,a=>{var i;return(i=o.scrollNext)==null?void 0:i.call(o,a)}),y(a=>e=M(l,e,{...a}),[()=>({})]),f(m,l)};B(G,m=>{v.showNavigationArrows&&m(U)})}f(p,b)};B(L,p=>{(v.showNavigationArrows||v.showNavigationIndicators)&&p(C)})}y(()=>it(g,1,nt(["absolute top-2 right-2 left-2 z-1 flex",n.autoplay?"justify-between":"justify-center"]))),f(c,g)};B(q,c=>{(v.showNavigationArrows||v.showNavigationIndicators||n.autoplay)&&c(J)})}var K=u(q,2);at(K,23,()=>n.photos,c=>c.id,(c,g,x)=>{var w=St();let L;var C=s(w);gt(C,()=>n.slide,()=>t(g)),_(w,(p,b)=>{var d;return(d=V)==null?void 0:d(p,b)},()=>"basis-full shrink-0 grow-0"),_(w,(p,b)=>{var d;return(d=o.slide)==null?void 0:d.call(o,p,b)},()=>({id:t(g).id,index:t(x)})),y(p=>L=M(w,L,{...p}),[()=>({})]),f(c,w)}),_(S,(c,g)=>{var x;return(x=V)==null?void 0:x(c,g)},()=>"overflow-hidden relative w-full cursor-grab active:cursor-grabbing ring-primary has-[.au-carousel-slide:focus-visible]:ring-3"),_(S,c=>{var g;return(g=o.root)==null?void 0:g.call(o,c)}),y(c=>{D=M(S,D,{...c}),H(K,"aria-live",n.autoplay?"off":"polite")},[()=>({})]),f(z,S),rt()}vt(["pointerdown","click"]);var zt=h('<img class="select-none object-contain aspect-[4/3] w-full" loading="lazy">'),Ft=h('<div class="w-full flex justify-center"><div class="max-w-[600px] grow"><!> <div class="flex justify-around mt-2"><div class="flex flex-col items-end gap-1"><label class="label text-sm md:text-base">Loop <input type="checkbox" class="toggle toggle-xs md:toggle-sm toggle-primary"></label> <label>Autoplay <input type="checkbox" class="toggle toggle-xs md:toggle-sm toggle-primary"></label> <label class="label text-sm md:text-base">Drag free <input type="checkbox" class="toggle toggle-xs md:toggle-sm toggle-primary"></label></div> <div class="flex flex-col items-end gap-1"><label class="label text-sm md:text-base">Right-to-left <input type="checkbox" class="toggle toggle-xs md:toggle-sm toggle-primary"></label> <label class="label text-sm md:text-base">Indicators <input type="checkbox" class="toggle toggle-xs md:toggle-sm toggle-primary"></label> <label class="label text-sm md:text-base">Arrows <input type="checkbox" class="toggle toggle-xs md:toggle-sm toggle-primary"></label></div></div></div></div>');function Ht(z,n){lt(n,!0);const F=["https://picsum.photos/600/450.webp?random=1","https://picsum.photos/600/450.webp?random=2","https://picsum.photos/450/600.webp?random=3","https://picsum.photos/600/450.webp?random=4","https://picsum.photos/600/450.webp?random=5","https://picsum.photos/600/450.webp?random=6"].map((e,r)=>({src:e,id:`photo-${r}`,alt:`picsum photo ${r+1} of 6`}));let A=P(!1),v=P(!0),o=P(!0),W=P(!1),I=P(!0),S=$(()=>t(A)&&t(I)),D=P(!1);var q=Ft(),J=s(q),K=s(J);const c=$(()=>t(D)?"rtl":"ltr");Pt(K,{photos:F,get showNavigationIndicators(){return t(o)},get showNavigationArrows(){return t(v)},get loop(){return t(A)},get dragFree(){return t(W)},get autoplay(){return t(S)},get direction(){return t(c)},slide:(r,a)=>{let i=()=>a==null?void 0:a().alt,k=()=>a==null?void 0:a().src;var N=zt();y(()=>{H(N,"alt",i()),H(N,"src",k())}),f(r,N)},$$slots:{slide:!0}});var g=u(K,2),x=s(g),w=s(x),L=u(s(w)),C=u(w,2),p=u(s(C)),b=u(C,2),d=u(s(b)),R=u(x,2),T=s(R),Q=u(s(T)),G=u(T,2),U=u(s(G)),m=u(G,2),l=u(s(m));y(()=>{it(C,1,nt(["label text-sm md:text-base",!t(A)&&"has-[input]:cursor-not-allowed"])),p.disabled=!t(A)}),O(L,()=>t(A),e=>j(A,e)),O(p,()=>t(I),e=>j(I,e)),O(d,()=>t(W),e=>j(W,e)),O(Q,()=>t(D),e=>j(D,e)),O(U,()=>t(o),e=>j(o,e)),O(l,()=>t(v),e=>j(v,e)),f(z,q),rt()}export{Ht as default};
