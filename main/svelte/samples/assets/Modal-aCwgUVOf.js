import{p as H,f as V,c as x,b as m,a as W,t as g,K as E,n as C,s as B,d as S,k as T,M as A,w as N,O as P}from"./AppCommon-CBBtLyuE.js";import{a as f}from"./actions-Dry0yoXS.js";import{s as G}from"./class-DWo-QI8S.js";import{c as I,m as J,a as L}from"./modal-CYBg4zXu-BXmfGCzT.js";import{f as K}from"./fade-uOobJKgw-BHd2cbPe.js";import{e as Q}from"./extendWidget-CYslR8F4.js";import{t as R}from"./writables-DCiBdIBK-CIOT50Xk.js";import{S as y}from"./Slot-B_UvH1Q6.js";import{c as U}from"./config-VEX93h1Q.js";import{c as D}from"./stores-DX-ADOKq-BfxXclJX.js";const X={contentData:void 0,children:void 0,footer:void 0,header:void 0,structure:void 0,title:void 0,fullscreen:!1},Y={backdropTransition:K,modalTransition:K},Z={fullscreen:R,contentData:void 0,children:void 0,footer:void 0,header:void 0,structure:void 0,title:void 0},$=Q(I,X,Z,Y),tt=$,yt=J,xt=L;var et=g("<button></button>"),at=g('<h5 class="modal-title"><!></h5> <!>',1);function rt(s,t){H(t,!0);let v=E(t,["$$slots","$$events","$$legacy"]);var _=at(),i=V(_),k=C(i);y(k,{get content(){return t.state.title},get props(){return v}});var u=B(i,2);{var p=l=>{var n=et();let e;f(n,(a,o)=>{var b;return(b=D)==null?void 0:b(a,o)},()=>"btn-close"),f(n,a=>{var o,b;return(b=(o=t.directives).closeButtonDirective)==null?void 0:b.call(o,a)}),S(a=>e=T(n,e,{...a}),[()=>({})]),m(l,n)};x(u,l=>{t.state.closeButton&&l(p)})}m(s,_),W()}var ot=g('<div class="modal-header"><!></div>'),nt=g('<div class="modal-footer"><!></div>'),dt=g('<!> <div class="modal-body"><!></div> <!>',1);function st(s,t){H(t,!0);let v=E(t,["$$slots","$$events","$$legacy"]);var _=dt(),i=V(_);{var k=e=>{var a=ot(),o=C(a);y(o,{get content(){return t.state.header},get props(){return v}}),m(e,a)};x(i,e=>{t.state.title&&e(k)})}var u=B(i,2),p=C(u);y(p,{get content(){return t.state.children},get props(){return v}});var l=B(u,2);{var n=e=>{var a=nt(),o=C(a);y(o,{get content(){return t.state.footer},get props(){return v}}),m(e,a)};x(l,e=>{t.state.footer&&e(n)})}m(s,_),W()}const it=(s,t=P)=>{st(s,N(t))},lt=(s,t=P)=>{rt(s,N(t))};var ct=g("<div></div>"),vt=g('<div><div><div class="modal-content"><!></div></div></div>'),ut=g("<!> <!>",1);function wt(s,t){H(t,!0);let v=A(t,"visible",15),_=E(t,["$$slots","$$events","$$legacy","visible"]);const i=U({factory:tt,widgetName:"modal",get props(){return{..._,visible:v()}},enablePatchChanged:!0,defaultConfig:{header:lt,structure:it},events:{onVisibleChange:c=>{v(c)}}}),k=i.api,{directives:{backdropDirective:u,backdropPortalDirective:p,modalDirective:l,modalPortalDirective:n},state:e}=i;var a=ut(),o=V(a);{var b=c=>{var r=ct();let M;f(r,(d,O)=>{var w;return(w=D)==null?void 0:w(d,O)},()=>"modal-backdrop"),f(r,d=>p==null?void 0:p(d)),f(r,d=>u==null?void 0:u(d)),S(d=>M=T(r,M,{...d}),[()=>({})]),m(c,r)};x(o,c=>{e.backdropHidden||c(b)})}var j=B(o,2);{var q=c=>{var r=vt();let M;var d=C(r),O=C(d),w=C(O);y(w,{get content(){return e.structure},props:i}),f(r,(h,z)=>{var F;return(F=D)==null?void 0:F(h,z)},()=>"modal d-block"),f(r,h=>n==null?void 0:n(h)),f(r,h=>l==null?void 0:l(h)),S(h=>{M=T(r,M,{...h}),G(d,`modal-dialog ${(e.fullscreen?"modal-fullscreen":"")??""}`)},[()=>({})]),m(c,r)};x(j,c=>{e.hidden||c(q)})}return m(s,a),W({api:k})}export{wt as M,yt as a,xt as e};
