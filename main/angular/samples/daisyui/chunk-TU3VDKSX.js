import{g as I,m as B,n as j,o as y,p as k}from"./chunk-DGZDAKBJ.js";import{$a as m,Ja as l,Pa as S,Qa as w,Ta as C,Va as p,Wa as f,X as x,Ya as F,Za as N,ab as T,bb as V,cb as E,da as u,db as o,ea as b,eb as d,fb as z,ib as g,jb as _,kb as r,pa as a,sb as c,tb as P,ub as h,zb as L}from"./chunk-SP56K5OG.js";function $(t,s){if(t&1){let e=g();o(0,"button",4),_("click",function(){u(e);let i=r();return b(i.api.first())}),o(1,"span",5),c(2," \xAB "),d()()}if(t&2){let e=r();f("disabled",e.state.previousDisabled()),p("aria-label",e.state.ariaFirstLabel())("aria-disabled",e.state.previousDisabled()?"true":null)("tabindex",e.state.previousDisabled()?-1:void 0)}}function q(t,s){if(t&1){let e=g();o(0,"button",4),_("click",function(){u(e);let i=r();return b(i.api.previous())}),o(1,"span",5),c(2," \u2039 "),d()()}if(t&2){let e=r();f("disabled",e.state.previousDisabled()),p("aria-label",e.state.ariaPreviousLabel())("aria-disabled",e.state.previousDisabled()?"true":null)("tabindex",e.state.previousDisabled()?-1:void 0)}}function G(t,s){if(t&1&&(o(0,"span",7),c(1),d()),t&2){let e=r(2);l(),P(e.state.activeLabel())}}function H(t,s){if(t&1){let e=g();o(0,"button",6),_("click",function(){let i=u(e).$implicit,M=r();return b(M.api.select(i))}),c(1),C(2,G,2,1,"span",7),d()}if(t&2){let e=s.$implicit,n=r();F("btn-active",e===n.state.page())("disabled",n.state.disabled()),p("aria-current",e===n.state.page()?"page":null)("tabindex",n.state.disabled()?-1:void 0),l(),h(" ",e," "),l(),m(n.state.page()===e?2:-1)}}function J(t,s){if(t&1){let e=g();o(0,"button",4),_("click",function(){u(e);let i=r();return b(i.api.next())}),o(1,"span",5),c(2," \u203A "),d()()}if(t&2){let e=r();f("disabled",e.state.nextDisabled()),p("aria-label",e.state.ariaNextLabel())("aria-disabled",e.state.nextDisabled()?"true":null)("tabindex",e.state.nextDisabled()?-1:void 0)}}function K(t,s){if(t&1){let e=g();o(0,"button",4),_("click",function(){u(e);let i=r();return b(i.api.last())}),o(1,"span",5),c(2," \xBB "),d()()}if(t&2){let e=r();f("disabled",e.state.nextDisabled()),p("aria-label",e.state.ariaLastLabel())("aria-disabled",e.state.nextDisabled()?"true":null)("tabindex",e.state.nextDisabled()?-1:void 0)}}var v=class t extends B{constructor(){super(j({factory:I,widgetName:"pagination",events:{onPageChange:e=>this.page.set(e)}}));this.ariaPageLabel=a();this.ariaLabel=a();this.activeLabel=a();this.ariaFirstLabel=a();this.ariaPreviousLabel=a();this.ariaNextLabel=a();this.ariaLastLabel=a();this.ariaEllipsisLabel=a();this.pageLink=a();this.disabled=a(void 0,{transform:y});this.boundaryLinks=a(void 0,{transform:y});this.directionLinks=a(void 0,{transform:y});this.collectionSize=a(void 0,{transform:k});this.page=S(0);this.pageSize=a(void 0,{transform:k});this.size=a();this.pagesFactory=a();this.className=a()}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=x({type:t,selectors:[["app-pagination"]],inputs:{ariaPageLabel:[1,"ariaPageLabel"],ariaLabel:[1,"ariaLabel"],activeLabel:[1,"activeLabel"],ariaFirstLabel:[1,"ariaFirstLabel"],ariaPreviousLabel:[1,"ariaPreviousLabel"],ariaNextLabel:[1,"ariaNextLabel"],ariaLastLabel:[1,"ariaLastLabel"],ariaEllipsisLabel:[1,"ariaEllipsisLabel"],pageLink:[1,"pageLink"],disabled:[1,"disabled"],boundaryLinks:[1,"boundaryLinks"],directionLinks:[1,"directionLinks"],collectionSize:[1,"collectionSize"],page:[1,"page"],pageSize:[1,"pageSize"],size:[1,"size"],pagesFactory:[1,"pagesFactory"],className:[1,"className"]},outputs:{page:"pageChange"},standalone:!0,features:[w,L],decls:10,vars:8,consts:[[1,"join"],[1,"join-item","btn","btn-outline",3,"disabled"],[1,"join-item","btn","btn-outline",3,"btn-active","disabled"],["aria-live","polite",1,"sr-only"],[1,"join-item","btn","btn-outline",3,"click","disabled"],["aria-hidden","true"],[1,"join-item","btn","btn-outline",3,"click"],[1,"sr-only"]],template:function(n,i){n&1&&(o(0,"nav")(1,"div",0),C(2,$,3,4,"button",1)(3,q,3,4,"button",1),V(4,H,3,8,"button",2,T),C(6,J,3,4,"button",1)(7,K,3,4,"button",1),d(),o(8,"div",3),c(9),d()()),n&2&&(p("aria-label",i.state.ariaLabel()),l(),N(i.state.className()),l(),m(i.state.boundaryLinks()?2:-1),l(),m(i.state.directionLinks()?3:-1),l(),E(i.state.pages()),l(2),m(i.state.directionLinks()?6:-1),l(),m(i.state.boundaryLinks()?7:-1),l(2),P(i.state.ariaLiveLabelText()))},encapsulation:2,changeDetection:0})}};var D=class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=x({type:t,selectors:[["ng-component"]],standalone:!0,features:[L],decls:1,vars:0,consts:[["collectionSize","40","boundaryLinks",""]],template:function(e,n){e&1&&z(0,"app-pagination",0)},dependencies:[v],encapsulation:2})}};export{D as default};
