import{p as F,f as L,c as S,b as f,a as M,t as T,L as N,s as k,k as B,d as O,l as W,g as $,q,M as V,v as j,x as z,O as A}from"./AppCommon-CEfp6GOi.js";import{a as c}from"./actions-CBYbTGn1.js";import{S as D}from"./Slot-C7JyPn3q.js";import{c as G}from"./toast-C4Pnm63G-BXaj4-Pz.js";import{e as I}from"./extendWidget-Cst5VrRh.js";import{f as J}from"./fade-uOobJKgw-BBaCZcbe.js";import{c as K}from"./config-BVNYqkgi.js";import{c as E}from"./stores-DX-ADOKq-D9qbYGXJ.js";const Q={structure:void 0,children:void 0,header:void 0},R={transition:J},U=I(G,Q,{structure:void 0,children:void 0,header:void 0},R),X=U;var Y=T("<button></button>"),Z=T('<div class="toast-header"><!> <!></div>'),H=T("<button></button>"),tt=T('<!> <div class="toast-body"><!></div> <!>',1);function et(_,r){F(r,!0);let b=N(r,["$$slots","$$events","$$legacy"]),d=r.state;var v=tt(),x=L(v);{var u=o=>{var i=Z(),s=B(i);D(s,{get content(){return d.header},get props(){return b}});var t=k(s,2);{var l=a=>{var e=Y();const n=q(()=>({}));let C;c(e,(p,P)=>{var w;return(w=E)==null?void 0:w(p,P)},()=>"btn-close me-0 ms-auto"),c(e,p=>{var P,w;return(w=(P=r.directives).closeButtonDirective)==null?void 0:w.call(P,p)}),O(()=>C=W(e,C,{...$(n)})),f(a,e)};S(t,a=>{d.dismissible&&a(l)})}f(o,i)};S(x,o=>{d.header&&o(u)})}var m=k(x,2),g=B(m);D(g,{get content(){return d.children},get props(){return b}});var h=k(m,2);{var y=o=>{var i=H();const s=q(()=>({}));let t;c(i,(l,a)=>{var e;return(e=E)==null?void 0:e(l,a)},()=>"btn-close btn-close-white me-2 m-auto"),c(i,l=>{var a,e;return(e=(a=r.directives).closeButtonDirective)==null?void 0:e.call(a,l)}),O(()=>t=W(i,t,{...$(s)})),f(o,i)};S(h,o=>{d.dismissible&&!d.header&&o(y)})}f(_,v),M()}const rt=(_,r=A)=>{et(_,z(r))};var at=T("<div><!></div>");function ut(_,r){F(r,!0);let b=V(r,"visible",15),d=N(r,["$$slots","$$events","$$legacy","visible"]);const v=K({factory:X,widgetName:"toast",get props(){return{...d,visible:b()}},enablePatchChanged:!0,defaultConfig:{structure:rt},events:{onVisibleChange:s=>{b(s)}}}),x=v.api,{state:u,directives:{transitionDirective:m,autoHideDirective:g,bodyDirective:h}}=v;var y=j(),o=L(y);{var i=s=>{var t=at();const l=q(()=>({}));let a;var e=B(t);D(e,{get content(){return u.structure},props:v}),c(t,(n,C)=>{var p;return(p=E)==null?void 0:p(n,C)},()=>({"toast-dismissible":u.dismissible,"d-flex":!u.header})),c(t,n=>m==null?void 0:m(n)),c(t,n=>g==null?void 0:g(n)),c(t,n=>h==null?void 0:h(n)),O(()=>a=W(t,a,{...$(l)})),f(s,t)};S(o,s=>{u.hidden||s(i)})}return f(_,y),M({api:x})}export{ut as T};
