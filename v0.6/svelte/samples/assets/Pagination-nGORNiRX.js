import{p as W,v as H,f as T,P as I,b as c,a as j,c as F,g as p,s as C,d as _,Q as J,t as f,L as A,e as t,q as S,n as Q,l as M,M as K,w as B,O as G,r as R,S as U}from"./AppCommon-C_Uz3Ejm.js";import{c as V}from"./pageFactory-CZZJDqOh-CXhaXj0q.js";import{S as k}from"./Slot-Bu-WTpc_.js";import{c as X}from"./config-BR7DENd9.js";import{a as m}from"./actions-CtzdcLql.js";import{t as q,s as Y}from"./class-DjsZmGv6.js";import{c as O}from"./directive-CKEccryv-Dj2WBjfx.js";const Z=V;var aa=f('<div class="page-link au-ellipsis" aria-hidden="true"><!></div> <span class="visually-hidden"> </span>',1),ea=f('<span class="visually-hidden"> </span>'),ta=f("<a><!><!></a>"),ra=f('<li class="page-item"><!></li>');function sa(E,h){W(h,!0);let d=A(h,["$$slots","$$events","$$legacy"]),{state:a,directives:y}=d;var $=H(),z=T($);I(z,17,()=>a.pages,J,(b,g)=>{var u=ra(),N=t(u);F(N,()=>p(g)===-1,l=>{var s=aa(),x=T(s),L=t(x);k(L,{get content(){return a.ellipsisLabel},get props(){return d}});var v=C(x,2),r=t(v);_(()=>Q(r,a.ariaEllipsisLabel)),c(l,s)},l=>{var s=ta();const x=S(()=>({}));let L;var v=t(s),r=S(()=>({...d,displayedPage:p(g)}));k(v,{get content(){return a.numberLabel},get props(){return p(r)}});var e=C(v);F(e,()=>a.page===p(g),o=>{var i=ea(),P=t(i);_(()=>Q(P,a.activeLabel)),c(o,i)}),m(s,(o,i)=>O(o,i),()=>"page-link"),m(s,(o,i)=>y.pageLink(o,i),()=>({page:p(g)})),_(()=>L=M(s,L,{...p(x)})),c(l,s)}),_(()=>{q(u,"active",p(g)===a.page),q(u,"disabled",p(g)===-1||a.disabled)}),c(b,u)}),c(E,$),j()}var ia=f('<li class="page-item"><a><span aria-hidden="true"><!></span></a></li>'),na=f('<li class="page-item"><a><span aria-hidden="true"><!></span></a></li>'),la=f('<li class="page-item"><a><span aria-hidden="true"><!></span></a></li>'),oa=f('<li class="page-item"><a><span aria-hidden="true"><!></span></a></li>'),pa=f('<ul><!> <!> <!> <!> <!></ul> <div aria-live="polite" class="visually-hidden"> </div>',1);function da(E,h){W(h,!0);let d=A(h,["$$slots","$$events","$$legacy"]),{state:a,directives:y}=d,$=S(()=>a.size?`pagination-${a.size}`:"");var z=pa(),b=T(z),g=t(b);F(g,()=>a.boundaryLinks,v=>{var r=ia(),e=t(r);const o=S(()=>({}));let i;var P=t(e),w=t(P);k(w,{get content(){return a.firstPageLabel},get props(){return d}}),m(e,(n,D)=>O(n,D),()=>"page-link"),m(e,n=>y.pageFirst(n)),_(()=>{q(r,"disabled",a.previousDisabled),i=M(e,i,{...p(o)})}),c(v,r)});var u=C(g,2);F(u,()=>a.directionLinks,v=>{var r=na(),e=t(r);const o=S(()=>({}));let i;var P=t(e),w=t(P);k(w,{get content(){return a.previousPageLabel},get props(){return d}}),m(e,(n,D)=>O(n,D),()=>"page-link"),m(e,n=>y.pagePrev(n)),_(()=>{q(r,"disabled",a.previousDisabled),i=M(e,i,{...p(o)})}),c(v,r)});var N=C(u,2);k(N,{get content(){return a.pagesDisplay},get props(){return d}});var l=C(N,2);F(l,()=>a.directionLinks,v=>{var r=la(),e=t(r);const o=S(()=>({}));let i;var P=t(e),w=t(P);k(w,{get content(){return a.nextPageLabel},get props(){return d}}),m(e,(n,D)=>O(n,D),()=>"page-link"),m(e,n=>y.pageNext(n)),_(()=>{q(r,"disabled",a.nextDisabled),i=M(e,i,{...p(o)})}),c(v,r)});var s=C(l,2);F(s,()=>a.boundaryLinks,v=>{var r=oa(),e=t(r);const o=S(()=>({}));let i;var P=t(e),w=t(P);k(w,{get content(){return a.lastPageLabel},get props(){return d}}),m(e,(n,D)=>O(n,D),()=>"page-link"),m(e,n=>y.pageLast(n)),_(()=>{q(r,"disabled",a.nextDisabled),i=M(e,i,{...p(o)})}),c(v,r)});var x=C(b,2),L=t(x);_(()=>{Y(b,`au-pagination pagination ${p($)??""} ${a.className??""}`),Q(L,`${a.ariaLiveLabelText}`)}),c(E,z),j()}var va=f("<nav><!></nav>");function ha(E,h){W(h,!0);const d=(l,s=G)=>{da(l,B(s))},a=(l,s=G)=>{sa(l,B(s))},y=(l,s)=>{let x=()=>s==null?void 0:s().displayedPage;var L=R();_(()=>Q(L,x())),c(l,L)};let $=K(h,"page",15),z=A(h,["$$slots","$$events","$$legacy","page"]);const b=X({factory:Z,widgetName:"pagination",get props(){return{...z,page:$()}},enablePatchChanged:!0,defaultConfig:{structure:d,pagesDisplay:a,numberLabel:y},events:{onPageChange:l=>{$(l)}}}),g=b.api;var u=va(),N=t(u);return k(N,{get content(){return b.state.structure},props:b}),_(()=>U(u,"aria-label",b.state.ariaLabel)),c(E,u),j({api:g})}export{ha as P};