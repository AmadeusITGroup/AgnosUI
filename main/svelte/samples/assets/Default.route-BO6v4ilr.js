import{h as M,p as P,P as W,s as O,c as C,d as y,b as n,a as A,t as c,O as j,e as m,l as w,g as D,q as x,m as z,a2 as G,i as H}from"./AppCommon-D6XzPDt_.js";import{s as I}from"./snippet-Bt6SC6hZ.js";import{a as u}from"./actions-C5zFepch.js";import{c as J}from"./config-D1K6DXRz.js";import{c as K}from"./modal-DP-4I7vf-Bl36xSrs.js";import{c as B}from"./directive-CKEccryv-BLJ74ze2.js";import"./index-client-D9YS31ny.js";import"./writables-DCiBdIBK-M3xMKWuL.js";import"./baseTransitions-DhTxxwqe.js";import"./promise-CY2U8bTP-CiDKceh8.js";var L=c('<form method="dialog"><button>✕</button></form>'),Q=c('<form method="dialog" class="modal-backdrop"><button>Close</button></form>'),R=c('<dialog><div class="modal-box"><!> <!></div> <!></dialog>');function T(s,t){P(t,!0);let e=W(t,"visible",15),d=j(t,["$$slots","$$events","$$legacy","children","closeOnOutsideClick","visible"]);const{state:p,directives:{closeButtonDirective:b,dialogDirective:E},api:q}=J({factory:K,widgetName:"modal",get props(){return{visible:e(),closeOnOutsideClick:t.closeOnOutsideClick,...d}},enablePatchChanged:!0,defaultConfig:{closeButton:!0},events:{onVisibleChange:o=>{e(o)}}}),v=q;var i=R();const F=x(()=>({}));let _;var h=m(i),k=m(h);I(k,()=>t.children);var N=O(k,2);C(N,()=>p.closeButton,o=>{var a=L(),l=m(a);const f=x(()=>({}));let r;u(l,(g,V)=>B(g,V),()=>"btn btn-sm btn-circle btn-ghost absolute right-2 top-2"),u(l,g=>b(g)),y(()=>r=w(l,r,{...D(f)})),n(o,a)});var S=O(h,2);return C(S,()=>t.closeOnOutsideClick,o=>{var a=Q(),l=m(a);l.__click=function(...f){var r;(r=v.close)==null||r.apply(this,f)},n(o,a)}),u(i,(o,a)=>B(o,a),()=>"modal modal-bottom sm:modal-middle"),u(i,o=>E(o)),y(()=>_=w(i,_,{onclose:v.close,...D(F)})),n(s,i),A({api:v})}M(["click"]);async function U(s){const t=document.createElement("div");document.body.append(t);const e=z(T,{target:t,props:s});try{return await e.api.open()}finally{t.remove(),G(e)}}const X=(s,t)=>U({children:t,closeOnOutsideClick:!0});var Y=c('<h3 class="font-bold text-lg">A simple modal</h3> <p class="py-4">Press ESC key, click on ✕ button or click outside the modal to close</p>',1),Z=c('<button class="btn" aria-haspopup="dialog">Open modal</button>');function ct(s,t){P(t,!1);const e=p=>{var b=Y();n(p,b)};H();var d=Z();d.__click=[X,e],n(s,d),A()}M(["click"]);export{ct as default};