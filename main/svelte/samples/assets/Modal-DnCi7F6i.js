import{p as E,f as F,c as y,b as m,a as L,t as _,L as N,k as b,s as O,d as D,l as H,g as V,q as W,M as J,x as z,O as A}from"./AppCommon-ZwIOf5HX.js";import{a as f}from"./actions-BgK1WUfw.js";import{s as K}from"./class-zTO4sP60.js";import{c as Q,m as R,a as U}from"./modal-CYBg4zXu-CqXuFrFN.js";import{f as j}from"./fade-uOobJKgw-Dctg2bZI.js";import{e as X}from"./extendWidget-PHDLH8-l.js";import{t as Y}from"./writables-DCiBdIBK-BkdelxAY.js";import{S as x}from"./Slot-DtsV2h1H.js";import{c as Z}from"./config-6P0VySVD.js";import{c as q}from"./stores-DX-ADOKq-CL6jUnRu.js";const $={contentData:void 0,children:void 0,footer:void 0,header:void 0,structure:void 0,title:void 0,fullscreen:!1},tt={backdropTransition:j,modalTransition:j},et={fullscreen:Y,contentData:void 0,children:void 0,footer:void 0,header:void 0,structure:void 0,title:void 0},at=X(Q,$,et,tt),rt=at,Bt=R,Ot=U;var ot=_("<button></button>"),nt=_('<h5 class="modal-title"><!></h5> <!>',1);function dt(d,t){E(t,!0);let c=N(t,["$$slots","$$events","$$legacy"]);var g=nt(),s=F(g),k=b(s);x(k,{get content(){return t.state.title},get props(){return c}});var v=O(s,2);{var p=i=>{var o=ot();const e=W(()=>({}));let r;f(o,(n,C)=>{var h;return(h=q)==null?void 0:h(n,C)},()=>"btn-close"),f(o,n=>{var C,h;return(h=(C=t.directives).closeButtonDirective)==null?void 0:h.call(C,n)}),D(()=>r=H(o,r,{...V(e)})),m(i,o)};y(v,i=>{t.state.closeButton&&i(p)})}m(d,g),L()}var st=_('<div class="modal-header"><!></div>'),it=_('<div class="modal-footer"><!></div>'),lt=_('<!> <div class="modal-body"><!></div> <!>',1);function ct(d,t){E(t,!0);let c=N(t,["$$slots","$$events","$$legacy"]);var g=lt(),s=F(g);{var k=e=>{var r=st(),n=b(r);x(n,{get content(){return t.state.header},get props(){return c}}),m(e,r)};y(s,e=>{t.state.title&&e(k)})}var v=O(s,2),p=b(v);x(p,{get content(){return t.state.children},get props(){return c}});var i=O(v,2);{var o=e=>{var r=it(),n=b(r);x(n,{get content(){return t.state.footer},get props(){return c}}),m(e,r)};y(i,e=>{t.state.footer&&e(o)})}m(d,g),L()}const vt=(d,t=A)=>{ct(d,z(t))},ut=(d,t=A)=>{dt(d,z(t))};var ft=_("<div></div>"),mt=_('<div><div><div class="modal-content"><!></div></div></div>'),_t=_("<!> <!>",1);function St(d,t){E(t,!0);let c=J(t,"visible",15),g=N(t,["$$slots","$$events","$$legacy","visible"]);const s=Z({factory:rt,widgetName:"modal",get props(){return{...g,visible:c()}},enablePatchChanged:!0,defaultConfig:{header:ut,structure:vt},events:{onVisibleChange:l=>{c(l)}}}),k=s.api,{directives:{backdropDirective:v,backdropPortalDirective:p,modalDirective:i,modalPortalDirective:o},state:e}=s;var r=_t(),n=F(r);{var C=l=>{var a=ft();const S=W(()=>({}));let M;f(a,(u,T)=>{var B;return(B=q)==null?void 0:B(u,T)},()=>"modal-backdrop"),f(a,u=>p==null?void 0:p(u)),f(a,u=>v==null?void 0:v(u)),D(()=>M=H(a,M,{...V(S)})),m(l,a)};y(n,l=>{e.backdropHidden||l(C)})}var h=O(n,2);{var G=l=>{var a=mt();const S=W(()=>({}));let M;var u=b(a),T=b(u),B=b(T);x(B,{get content(){return e.structure},props:s}),f(a,(w,I)=>{var P;return(P=q)==null?void 0:P(w,I)},()=>"modal d-block"),f(a,w=>o==null?void 0:o(w)),f(a,w=>i==null?void 0:i(w)),D(()=>{M=H(a,M,{...V(S)}),K(u,`modal-dialog ${(e.fullscreen?"modal-fullscreen":"")??""}`)}),m(l,a)};y(h,l=>{e.hidden||l(G)})}return m(d,r),L({api:k})}export{St as M,Bt as a,Ot as e};
