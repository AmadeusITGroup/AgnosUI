import{Z as H,$ as J,p as F,t as h,f as I,e as w,b as j,c as S,a as K,Q as Z,h as y,j as P,L as k,g as b,W as O,d as A,K as q,P as z,v as G}from"./AppCommon-B-ROr4aU.js";import{a as m}from"./actions-Cbyr4fVv.js";import{c as M}from"./index-D_vJUaIe.js";import{t as Q}from"./stores-DWJrwGVR.js";import{a as W,m as V,c as L}from"./dom-gfxqXJpK-CVUkDlT_.js";import{e as R}from"./extendWidget-GeFhB8wc.js";import{t as B,a as T}from"./writables-CgpOQ4hA-BLtlctEd.js";import{c as U}from"./config-lZO9LbO2.js";import{S as E}from"./Slot-DxNJ8UAq.js";const X={className:"",containerClass:"",slideClass:"",slidesData:[],structure:void 0,navigation:void 0,slide:void 0,ariaLive:"polite"},Y={className:B,containerClass:B,slideClass:void 0,slidesData:T,structure:void 0,navigation:void 0,slide:void 0,ariaLive:B},$={container:".au-carousel-container"};function tt(f){const t=R(M,X,Y,$)(f);return{...t,directives:{...t.directives,root:V(t.directives.root,W(()=>({classNames:{carousel:Q},attributes:{class:t.stores.className$}}))),slide:V(t.directives.slide,W(_=>({attributes:{class:J(()=>{const i=t.stores.slideClass$();if(typeof i=="function"){const l=_();return i({id:l.id,index:l.index,active:l.index===t.stores.selectedScrollSnap$()})}else return i})}}))),container:W(()=>({classNames:{"au-carousel-container":Q},attributes:{class:t.stores.containerClass$,"aria-atomic":H("false"),"aria-live":t.stores.ariaLive$}}))}}}const et=tt;var at=h("<button><span></span></button>"),rt=h("<button><span></span></button>"),st=h("<!> <!>",1),it=h("<button></button>"),ot=h("<div></div>"),nt=h("<!> <!>",1);function ct(f,t){F(t,!0);var _=nt(),i=I(_);{var l=d=>{var o=st(),s=I(o);{var e=v=>{var r=at();const C=k(()=>t.state.direction==="rtl"?"carousel-control-next":"carousel-control-prev");let c;var N=A(r);m(r,(a,u)=>{var g;return(g=L)==null?void 0:g(a,u)},()=>b(C)),m(r,a=>{var u,g;return(g=(u=t.directives).scrollPrev)==null?void 0:g.call(u,a)}),y(a=>{c=P(r,c,{...a}),O(N,1,`${b(C)??""}-icon`)},[()=>({})]),S(v,r)};w(s,v=>{t.state.canScrollPrev&&v(e)})}var p=j(s,2);{var n=v=>{var r=rt();const C=k(()=>t.state.direction==="ltr"?"carousel-control-next":"carousel-control-prev");let c;var N=A(r);m(r,(a,u)=>{var g;return(g=L)==null?void 0:g(a,u)},()=>b(C)),m(r,a=>{var u,g;return(g=(u=t.directives).scrollNext)==null?void 0:g.call(u,a)}),y(a=>{c=P(r,c,{...a}),O(N,1,`${b(C)??""}-icon`)},[()=>({})]),S(v,r)};w(p,v=>{t.state.canScrollNext&&v(n)})}S(d,o)};w(i,d=>{t.state.showNavigationArrows&&d(l)})}var x=j(i,2);{var D=d=>{var o=ot();let s;Z(o,23,()=>t.state.slidesData,({id:e})=>e,(e,p,n)=>{let v=()=>b(p).id;var r=it();let C;m(r,(c,N)=>{var a;return(a=L)==null?void 0:a(c,N)},()=>[t.state.selectedScrollSnap===b(n)&&"active"]),m(r,(c,N)=>{var a,u;return(u=(a=t.directives).tabIndicator)==null?void 0:u.call(a,c,N)},()=>({index:b(n),id:v()})),y(c=>C=P(r,C,{"data-bs-target":!0,...c}),[()=>({})]),S(e,r)}),m(o,(e,p)=>{var n;return(n=L)==null?void 0:n(e,p)},()=>"carousel-indicators"),m(o,e=>{var p,n;return(n=(p=t.directives).tabList)==null?void 0:n.call(p,e)}),y(e=>s=P(o,s,{...e}),[()=>({})]),S(d,o)};w(x,d=>{t.state.showNavigationIndicators&&d(D)})}S(f,_),K()}var lt=h("<div><!></div>"),dt=h("<!> <div></div>",1);function vt(f,t){F(t,!0);let _=q(t,["$$slots","$$events","$$legacy"]),{state:i,directives:l}=_;var x=dt(),D=I(x);E(D,{get content(){return i.navigation},get props(){return _}});var d=j(D,2);let o;Z(d,23,()=>i.slidesData,s=>s.id,(s,e,p)=>{var n=lt();let v;var r=A(n);const C=k(()=>({...b(e),..._}));E(r,{get content(){return i.slide},get props(){return b(C)}}),m(n,(c,N)=>{var a;return(a=l.slide)==null?void 0:a.call(l,c,N)},()=>({index:b(p),id:b(e).id})),y(c=>v=P(n,v,{...c}),[()=>({})]),S(s,n)}),m(d,s=>{var e;return(e=l.container)==null?void 0:e.call(l,s)}),y(s=>o=P(d,o,{...s}),[()=>({})]),S(f,x),K()}const ut=(f,t=z)=>{vt(f,G(t))},ft=(f,t=z)=>{ct(f,G(t))};var gt=h("<div><!></div>");function Dt(f,t){F(t,!0);let _=q(t,["$$slots","$$events","$$legacy"]);const i=U({factory:et,widgetName:"collapse",props:_,enablePatchChanged:!0,defaultConfig:{structure:ut,navigation:ft}}),l=i.api;var x=gt();let D;var d=A(x);return E(d,{get content(){return i.state.structure},props:i}),m(x,o=>{var s,e;return(e=(s=i.directives).root)==null?void 0:e.call(s,o)}),y(o=>D=P(x,D,{...o}),[()=>({})]),S(f,x),K({api:l})}export{Dt as C};
