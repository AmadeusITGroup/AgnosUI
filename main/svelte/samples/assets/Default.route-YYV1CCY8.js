import{a0 as D,$ as C,M as w,p as I,O,K as k,t as h,d as x,h as H,j as z,c as g,a as F,s as N,f as P,T as _,l as W,b as A,g as f,n as j}from"./AppCommon-B-ROr4aU.js";import{s as q}from"./snippet-DFOQFhBJ.js";import{a as B}from"./actions-Cbyr4fVv.js";import{c as K}from"./baseTransitions-BKaaUOED.js";import{w as M,i as E,s as G,t as J}from"./stores-DWJrwGVR.js";import{n as u,a as y,m as L}from"./dom-gfxqXJpK-CVUkDlT_.js";import{t as V,b as m,c as v}from"./writables-CgpOQ4hA-BLtlctEd.js";import{a as Q,c as R}from"./collapse-CVjUhnIz-Ca4chnWO.js";import{c as U}from"./config-lZO9LbO2.js";import"./promise-XSP94FjG-CHur0jPm.js";import"./cssTransitions-B5R6pvx9.js";import"./config-ZUzlAODH.js";import"./index-client-hhUEBj_e.js";const X={visible:!0,horizontal:!1,onVisibleChange:u,onShown:u,onHidden:u,animated:!0,animatedOnInit:!1,className:"",id:""},Y={horizontal:m,onVisibleChange:v,onHidden:v,onShown:v,animatedOnInit:m,animated:m,className:V,visible:m,id:V};function Z(l){const[{animatedOnInit$:t,animated$:s,visible$:o,onVisibleChange$:e,onHidden$:n,onShown$:c,horizontal$:d,id$:i,...p},b]=M(X,l,Y),a=E(i),S=D(C(()=>d()?Q:R)),r=K({props:{transition:S,visible:o,animated:s,animatedOnInit:t,onVisibleChange:e,onHidden:n,onShown:c}}),$=r.stores.visible$,T=r.stores.hidden$;return{...G({...p,visible$:$,hidden$:T,horizontal$:d}),patch:b,api:{open:r.api.show,close:r.api.hide,toggle:r.api.toggle},directives:{collapseDirective:L(r.directives.directive,y(()=>({attributes:{id:a},classNames:{"au-collapse":J}}))),triggerDirective:y(()=>({attributes:{"aria-expanded":C(()=>`${$()}`),"aria-controls":a},events:{click:()=>r.api.toggle()}}))}}}const tt=Z;var et=h("<div><!></div>");function it(l,t){const s=w();I(t,!0);let o=O(t,"visible",15),e=k(t,["$$slots","$$events","$$legacy","children","visible"]);const{directives:{collapseDirective:n},api:c}=U({factory:tt,widgetName:"collapse",get props(){return{...e,visible:o()}},defaultConfig:{id:s},events:{onVisibleChange:a=>{o(a)}},enablePatchChanged:!0}),d=c;var i=et();let p;var b=x(i);return q(b,()=>t.children),B(i,a=>n==null?void 0:n(a)),H(a=>p=z(i,p,{...a}),[()=>({})]),g(l,i),F({api:d})}var at=(l,t)=>W(t,!f(t)),st=h('<div class="card card-body">Visible content</div>'),ot=h('<button class="btn btn-primary mb-2" type="button">Toggle collapse</button> <!>',1);function $t(l){const t=w();let s=N(!0);var o=ot(),e=P(o);_(e,"aria-controls",t),e.__click=[at,s];var n=A(e,2);it(n,{get visible(){return f(s)},onHidden:()=>console.log("Hidden"),id:t,children:(c,d)=>{var i=st();g(c,i)},$$slots:{default:!0}}),H(()=>_(e,"aria-expanded",f(s))),g(l,o)}j(["click"]);export{$t as default};
