import{p as H,f as V,s as y,c as w,b as l,a as W,t as c,O as q,e as f,d as P,l as B,g as O,q as S,P as I,w as N,Q}from"./AppCommon-Cm-6NtnE.js";import{a as n}from"./actions-gBvwwZne.js";import{s as J}from"./class-CZUVYx7F.js";import{c as K,m as L,a as R}from"./modal-DP-4I7vf-Zi8IJqyH.js";import{f as j}from"./fade-uOobJKgw-CA5Q4wdK.js";import{e as U}from"./extendWidget-CKqcYLS9.js";import{t as X}from"./writables-DCiBdIBK-BYLEJlA0.js";import{S as D}from"./Slot-HBv0E13p.js";import{c as Y}from"./config-CGoDt1jV.js";import{c as T}from"./directive-CKEccryv-gyIcW13B.js";const Z={contentData:void 0,children:void 0,footer:void 0,header:void 0,structure:void 0,title:void 0,fullscreen:!1},$={backdropTransition:j,modalTransition:j},tt={fullscreen:X,contentData:void 0,children:void 0,footer:void 0,header:void 0,structure:void 0,title:void 0},et=U(K,Z,tt,$),at=et,wt=L,yt=R;var ot=c("<button></button>"),rt=c('<h5 class="modal-title"><!></h5> <!>',1);function it(g,t){H(t,!0);let v=q(t,["$$slots","$$events","$$legacy"]);var u=rt(),i=V(u),_=f(i);D(_,{get content(){return t.state.title},get props(){return v}});var m=y(i,2);w(m,()=>t.state.closeButton,b=>{var a=ot();const o=S(()=>({}));let s;P(()=>s=B(a,s,{...O(o)})),n(a,(h,p)=>T(h,p),()=>"btn-close"),n(a,h=>t.directives.closeButtonDirective(h)),l(b,a)}),l(g,u),W()}var st=c('<div class="modal-header"><!></div>'),dt=c('<div class="modal-footer"><!></div>'),nt=c('<!> <div class="modal-body"><!></div> <!>',1);function lt(g,t){H(t,!0);let v=q(t,["$$slots","$$events","$$legacy"]);var u=nt(),i=V(u);w(i,()=>t.state.title,a=>{var o=st(),s=f(o);D(s,{get content(){return t.state.header},get props(){return v}}),l(a,o)});var _=y(i,2),m=f(_);D(m,{get content(){return t.state.children},get props(){return v}});var b=y(_,2);w(b,()=>t.state.footer,a=>{var o=dt(),s=f(o);D(s,{get content(){return t.state.footer},get props(){return v}}),l(a,o)}),l(g,u),W()}var ct=c("<div></div>"),vt=c('<div><div><div class="modal-content"><!></div></div></div>'),ut=c("<!> <!>",1);function Mt(g,t){H(t,!0);const v=(r,e=Q)=>{lt(r,N(e))},u=(r,e=Q)=>{it(r,N(e))};let i=I(t,"visible",15),_=q(t,["$$slots","$$events","$$legacy","visible"]);const m=Y({factory:at,widgetName:"modal",get props(){return{..._,visible:i()}},enablePatchChanged:!0,defaultConfig:{header:u,structure:v},events:{onVisibleChange:r=>{i(r)}}}),b=m.api,{directives:{backdropDirective:a,backdropPortalDirective:o,modalDirective:s,modalPortalDirective:h},state:p}=m;var E=ut(),F=V(E);w(F,()=>!p.backdropHidden,r=>{var e=ct();const M=S(()=>({}));let k;P(()=>k=B(e,k,{...O(M)})),n(e,(d,x)=>T(d,x),()=>"modal-backdrop"),n(e,d=>o(d)),n(e,d=>a(d)),l(r,e)});var z=y(F,2);return w(z,()=>!p.hidden,r=>{var e=vt();const M=S(()=>({}));let k;var d=f(e),x=f(d),A=f(x);D(A,{get content(){return p.structure},props:m}),P(()=>{k=B(e,k,{...O(M)}),J(d,`modal-dialog ${(p.fullscreen?"modal-fullscreen":"")??""}`)}),n(e,(C,G)=>T(C,G),()=>"modal d-block"),n(e,C=>h(C)),n(e,C=>s(C)),l(r,e)}),l(g,E),W({api:b})}export{Mt as M,wt as a,yt as e};