import{p as D,t as g,f as H,d as C,b as w,e as x,c as m,a as P,h as S,j as T,K as V,O as A,P as F,W as G,v as K}from"./AppCommon-B-ROr4aU.js";import{a as f}from"./actions-Cbyr4fVv.js";import{c as I,m as J,a as L}from"./modal-CGK3h9pR-C7OYaZ8F.js";import{f as E}from"./fade-uOobJKgw-BDarYuaK.js";import{e as Q}from"./extendWidget-GeFhB8wc.js";import{b as R}from"./writables-CgpOQ4hA-BLtlctEd.js";import{S as M}from"./Slot-DxNJ8UAq.js";import{c as U}from"./config-lZO9LbO2.js";import{c as W}from"./dom-gfxqXJpK-CVUkDlT_.js";const X={contentData:void 0,children:void 0,footer:void 0,header:void 0,structure:void 0,title:void 0,fullscreen:!1},Y={backdropTransition:E,modalTransition:E},Z={fullscreen:R,contentData:void 0,children:void 0,footer:void 0,header:void 0,structure:void 0,title:void 0},$=Q(I,X,Z,Y),tt=$,yt=L,Mt=J;var et=g("<button></button>"),at=g('<h5 class="modal-title"><!></h5> <!>',1);function ot(d,t){D(t,!0);let c=V(t,["$$slots","$$events","$$legacy"]);var _=at(),n=H(_),k=C(n);M(k,{get content(){return t.state.title},get props(){return c}});var u=w(n,2);{var p=l=>{var s=et();let e;f(s,(a,r)=>{var b;return(b=W)==null?void 0:b(a,r)},()=>"btn-close"),f(s,a=>{var r,b;return(b=(r=t.directives).closeButtonDirective)==null?void 0:b.call(r,a)}),S(a=>e=T(s,e,{...a}),[()=>({})]),m(l,s)};x(u,l=>{t.state.closeButton&&l(p)})}m(d,_),P()}var rt=g('<div class="modal-header"><!></div>'),st=g('<div class="modal-footer"><!></div>'),it=g('<!> <div class="modal-body"><!></div> <!>',1);function dt(d,t){D(t,!0);let c=V(t,["$$slots","$$events","$$legacy"]);var _=it(),n=H(_);{var k=e=>{var a=rt(),r=C(a);M(r,{get content(){return t.state.header},get props(){return c}}),m(e,a)};x(n,e=>{t.state.title&&e(k)})}var u=w(n,2),p=C(u);M(p,{get content(){return t.state.children},get props(){return c}});var l=w(u,2);{var s=e=>{var a=st(),r=C(a);M(r,{get content(){return t.state.footer},get props(){return c}}),m(e,a)};x(l,e=>{t.state.footer&&e(s)})}m(d,_),P()}const nt=(d,t=F)=>{dt(d,K(t))},lt=(d,t=F)=>{ot(d,K(t))};var vt=g("<div></div>"),ct=g('<div><div><div class="modal-content"><!></div></div></div>'),ut=g("<!> <!>",1);function xt(d,t){D(t,!0);let c=A(t,"visible",15),_=V(t,["$$slots","$$events","$$legacy","visible"]);const n=U({factory:tt,widgetName:"modal",get props(){return{..._,visible:c()}},enablePatchChanged:!0,defaultConfig:{header:lt,structure:nt},events:{onVisibleChange:v=>{c(v)}}}),k=n.api,{directives:{backdropDirective:u,backdropPortalDirective:p,modalDirective:l,modalPortalDirective:s},state:e}=n;var a=ut(),r=H(a);{var b=v=>{var o=vt();let y;f(o,(i,O)=>{var B;return(B=W)==null?void 0:B(i,O)},()=>"modal-backdrop"),f(o,i=>p==null?void 0:p(i)),f(o,i=>u==null?void 0:u(i)),S(i=>y=T(o,y,{...i}),[()=>({})]),m(v,o)};x(r,v=>{e.backdropHidden||v(b)})}var N=w(r,2);{var q=v=>{var o=ct();let y;var i=C(o),O=C(i),B=C(O);M(B,{get content(){return e.structure},props:n}),f(o,(h,z)=>{var j;return(j=W)==null?void 0:j(h,z)},()=>"modal d-block"),f(o,h=>s==null?void 0:s(h)),f(o,h=>l==null?void 0:l(h)),S(h=>{y=T(o,y,{...h}),G(i,1,`modal-dialog ${(e.fullscreen?"modal-fullscreen":"")??""}`)},[()=>({})]),m(v,o)};x(N,v=>{e.hidden||v(q)})}return m(d,a),P({api:k})}export{xt as M,yt as a,Mt as e};
