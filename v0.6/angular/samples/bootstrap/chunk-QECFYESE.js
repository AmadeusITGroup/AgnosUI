import{a as P}from"./chunk-OLUGLI4Z.js";import{c as E}from"./chunk-KFIVQTEM.js";import{O as L,S as N,o as V}from"./chunk-RKNZWUKR.js";import{aa as z,ga as v}from"./chunk-BNWXVAGH.js";import"./chunk-54KPITK7.js";import{$a as A,Bb as M,Cb as s,Ia as f,Ib as g,Jb as w,La as l,Nb as H,Va as I,W as k,Za as b,_ as p,a as x,ab as c,b as S,ha as u,hb as D,ia as d,ka as F,lb as o,mb as a,nb as C,pb as T,qb as m,rb as _}from"./chunk-TWJB344F.js";var W=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
  <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
</svg>`;var R=(n,i,e)=>({state:n,api:i,directives:e});function q(n,i){}function G(n,i){if(n&1){let e=T();o(0,"button",7),m("click",function(){u(e);let t=_();return d(t.api.close())}),a()}if(n&2){let e=_();A("aria-label",e.state.ariaCloseButtonLabel())}}var y=class n{static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=p({type:n,selectors:[["ng-component"]],standalone:!0,features:[g([V(i=>(i.toast=S(x({},i.toast),{className:"text-bg-success",autoHide:!1,dismissible:!0,structure:h}),i))]),w],decls:14,vars:0,consts:[["toast",""],[1,"col-auto","col-md-6"],["auToast",""],[1,"btn","btn-primary","mt-2",3,"click"]],template:function(e,r){if(e&1){let t=T();o(0,"p"),s(1,"To put the action in the toast simply create custom contents."),a(),o(2,"p")(3,"strong"),s(4,"Note:"),a(),s(5," When header is not present default display is "),o(6,"code"),s(7,"flex"),a()(),o(8,"div",1)(9,"au-component",2,0),s(11,"This is a toast with action"),a()(),o(12,"button",3),m("click",function(){u(t);let U=M(10);return d(U.api.open())}),s(13,"Reset"),a()}},dependencies:[N,L],encapsulation:2})}},h=class n extends z{constructor(){super(...arguments);this.sanitizer=k(E);this.biCheckCircleFill=P;this.biArrowCounterClockwise=W}actionDemo(){window.alert("Undo")}static{this.\u0275fac=(()=>{let e;return function(t){return(e||(e=F(n)))(t||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["app-icon-structure"]],hostAttrs:[2,"display","contents"],standalone:!0,features:[g([v]),I,w],decls:8,vars:9,consts:[[1,"d-flex","w-100"],[1,"d-flex","align-items-center","flex-grow-1","toast-body"],[1,"d-flex","me-2",3,"innerHTML"],[3,"auSlot","auSlotProps"],["type","button",1,"btn","btn-sm","ms-auto","text-bg-success",3,"click"],[1,"me-2",3,"innerHTML"],["type","button",1,"btn-close","btn-close-white","me-2","m-auto"],["type","button",1,"btn-close","btn-close-white","me-2","m-auto",3,"click"]],template:function(r,t){r&1&&(o(0,"div",0)(1,"div",1),C(2,"span",2),b(3,q,0,0,"ng-template",3),o(4,"button",4),m("click",function(){return t.actionDemo()}),C(5,"span",5),s(6,"Undo "),a()(),b(7,G,1,1,"button",6),a()),r&2&&(l(2),c("innerHTML",t.sanitizer.bypassSecurityTrustHtml(t.biCheckCircleFill),f),l(),c("auSlot",t.state.children())("auSlotProps",H(5,R,t.state,t.api,t.directives)),l(2),c("innerHTML",t.sanitizer.bypassSecurityTrustHtml(t.biArrowCounterClockwise),f),l(2),D(t.state.dismissible()?7:-1))},dependencies:[v],encapsulation:2})}};export{h as ToastIconComponent,y as default};
