import{p as H,t as g,f as V,d as C,s as w,e as x,c as m,a as W,h as S,j as T,K as j,M as z,O as K,Z as A,v as N}from"./AppCommon-DpFUH4-D.js";import{a as f}from"./actions-QldAWIid.js";import{c as G,m as I,a as J}from"./modal-CGK3h9pR-CEXYIOLH.js";import{f as F}from"./fade-uOobJKgw-D7x5nDb-.js";import{e as L}from"./extendWidget-CuTAzCb6.js";import{b as Q}from"./writables-CgpOQ4hA-DSsIStup.js";import{S as y}from"./Slot-wLoV5D_G.js";import{c as R}from"./config-Cw4Yudel.js";import{c as D}from"./dom-gfxqXJpK-DWJgb4QK.js";const U={contentData:void 0,children:void 0,footer:void 0,header:void 0,structure:void 0,title:void 0,fullscreen:!1},X={backdropTransition:F,modalTransition:F},Y={fullscreen:Q,contentData:void 0,children:void 0,footer:void 0,header:void 0,structure:void 0,title:void 0},$=L(G,U,Y,X),tt=$,kt=J,yt=I;var et=g("<button></button>"),at=g('<h5 class="modal-title"><!></h5> <!>',1);function ot(d,t){H(t,!0);let c=j(t,["$$slots","$$events","$$legacy"]);var _=at(),n=V(_),M=C(n);y(M,{get content(){return t.state.title},get props(){return c}});var u=w(n,2);{var p=l=>{var s=et();let e;f(s,(a,r)=>{var b;return(b=D)==null?void 0:b(a,r)},()=>"btn-close"),f(s,a=>{var r,b;return(b=(r=t.directives).closeButtonDirective)==null?void 0:b.call(r,a)}),S(a=>e=T(s,e,{...a}),[()=>({})]),m(l,s)};x(u,l=>{t.state.closeButton&&l(p)})}m(d,_),W()}var rt=g('<div class="modal-header"><!></div>'),st=g('<div class="modal-footer"><!></div>'),it=g('<!> <div class="modal-body"><!></div> <!>',1);function dt(d,t){H(t,!0);let c=j(t,["$$slots","$$events","$$legacy"]);var _=it(),n=V(_);{var M=e=>{var a=rt(),r=C(a);y(r,{get content(){return t.state.header},get props(){return c}}),m(e,a)};x(n,e=>{t.state.title&&e(M)})}var u=w(n,2),p=C(u);y(p,{get content(){return t.state.children},get props(){return c}});var l=w(u,2);{var s=e=>{var a=st(),r=C(a);y(r,{get content(){return t.state.footer},get props(){return c}}),m(e,a)};x(l,e=>{t.state.footer&&e(s)})}m(d,_),W()}const nt=(d,t=K)=>{dt(d,N(t))},lt=(d,t=K)=>{ot(d,N(t))};var vt=g("<div></div>"),ct=g('<div><div><div class="modal-content"><!></div></div></div>'),ut=g("<!> <!>",1);function xt(d,t){H(t,!0);let c=z(t,"visible",15),_=j(t,["$$slots","$$events","$$legacy","visible"]);const n=R({factory:tt,widgetName:"modal",get props(){return{..._,visible:c()}},enablePatchChanged:!0,defaultConfig:{header:lt,structure:nt},events:{onVisibleChange:v=>{c(v)}}}),M=n.api,{directives:{backdropDirective:u,backdropPortalDirective:p,modalDirective:l,modalPortalDirective:s},state:e}=n;var a=ut(),r=V(a);{var b=v=>{var o=vt();let k;f(o,(i,O)=>{var B;return(B=D)==null?void 0:B(i,O)},()=>"modal-backdrop"),f(o,i=>p==null?void 0:p(i)),f(o,i=>u==null?void 0:u(i)),S(i=>k=T(o,k,{...i}),[()=>({})]),m(v,o)};x(r,v=>{e.backdropHidden||v(b)})}var P=w(r,2);{var Z=v=>{var o=ct();let k;var i=C(o),O=C(i),B=C(O);y(B,{get content(){return e.structure},props:n}),f(o,(h,q)=>{var E;return(E=D)==null?void 0:E(h,q)},()=>"modal d-block"),f(o,h=>s==null?void 0:s(h)),f(o,h=>l==null?void 0:l(h)),S(h=>{k=T(o,k,{...h}),A(i,1,`modal-dialog ${(e.fullscreen?"modal-fullscreen":"")??""}`)},[()=>({})]),m(v,o)};x(P,v=>{e.hidden||v(Z)})}return m(d,a),W({api:M})}export{xt as M,kt as a,yt as e};
