import{a as B}from"./chunk-OLUGLI4Z.js";import{c as I}from"./chunk-E5A7EF6U.js";import{v as L,w as P}from"./chunk-OYK3Y2NF.js";import"./chunk-ZBV2L2DC.js";import{R as z,U as V,_ as y}from"./chunk-DXQXQBD6.js";import"./chunk-KJNIKP2T.js";import{$ as d,Ab as g,Ib as E,Jb as a,Ka as b,Na as l,Pb as _,Qb as v,Tb as H,X as p,a as x,aa as f,ab as M,b as S,fb as C,gb as D,ib as c,pa as k,pb as A,tb as r,ub as s,vb as w,xa as F,xb as h,zb as m}from"./chunk-7LGRIDZR.js";var U=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
  <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
</svg>`;function j(e,t){}function R(e,t){if(e&1){let u=h();r(0,"button",7),m("click",function(){d(u);let o=g();return f(o.widget.api.close())}),s()}if(e&2){let u=g();D("aria-label",u.state.ariaCloseButtonLabel)}}var q=(e,t)=>({widget:e,state:t}),it=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=p({type:t,selectors:[["ng-component"]],standalone:!0,features:[_([V(n=>(n.toast=S(x({},n.toast),{className:"text-bg-success",autohide:!1,dismissible:!0,slotStructure:G}),n))]),v],decls:14,vars:0,consts:[[1,"col-auto","col-md-6"],["auToast",""],["toast",""],[1,"btn","btn-primary","mt-2",3,"click"]],template:function(o,i){if(o&1){let T=h();r(0,"p"),a(1,"To put the action in the toast simply create custom contents."),s(),r(2,"p")(3,"strong"),a(4,"Note:"),s(),a(5," When header is not present default display is "),r(6,"code"),a(7,"flex"),s()(),r(8,"div",0)(9,"au-component",1,2),a(11,"This is a toast with action"),s()(),r(12,"button",3),m("click",function(){d(T);let N=E(10);return f(N.api.open())}),a(13,"Reset"),s()}},dependencies:[P,L],encapsulation:2});let e=t;return e})();var G=(()=>{let t=class t extends z{constructor(){super(...arguments),this.sanitizer=k(I),this.biCheckCircleFill=B,this.biArrowCounterClockwise=U}actionDemo(){window.alert("Undo")}};t.\u0275fac=(()=>{let n;return function(i){return(n||(n=F(t)))(i||t)}})(),t.\u0275cmp=p({type:t,selectors:[["app-icon-structure"]],hostAttrs:[2,"display","contents"],standalone:!0,features:[_([y]),M,v],decls:8,vars:8,consts:[[1,"d-flex","w-100"],[1,"d-flex","align-items-center","flex-grow-1","toast-body"],[1,"d-flex","me-2",3,"innerHTML"],[3,"auSlot","auSlotProps"],["type","button",1,"btn","btn-sm","ms-auto","text-bg-success",3,"click"],[1,"me-2",3,"innerHTML"],["type","button","class","btn-close btn-close-white me-2 m-auto"],["type","button",1,"btn-close","btn-close-white","me-2","m-auto",3,"click"]],template:function(o,i){o&1&&(r(0,"div",0)(1,"div",1),w(2,"span",2),C(3,j,0,0,"ng-template",3),r(4,"button",4),m("click",function(){return i.actionDemo()}),w(5,"span",5),a(6,"Undo "),s()(),C(7,R,1,1,"button",6),s()),o&2&&(l(2),c("innerHTML",i.sanitizer.bypassSecurityTrustHtml(i.biCheckCircleFill),b),l(),c("auSlot",i.state.slotDefault)("auSlotProps",H(5,q,i.widget,i.state)),l(2),c("innerHTML",i.sanitizer.bypassSecurityTrustHtml(i.biArrowCounterClockwise),b),l(2),A(7,i.state.dismissible?7:-1))},dependencies:[y],encapsulation:2});let e=t;return e})();export{G as ToastIconComponent,it as default};
