import{a as q}from"./chunk-AO7SUHAN.js";import{c as V}from"./chunk-NRXW2PLA.js";import{a as j,i as z,k as P,m as U,n as G,o as R}from"./chunk-S2TV6GOF.js";import{$a as y,Ga as k,Ja as c,Pa as T,Qa as M,T as x,Ta as v,Va as N,Wa as _,X as l,_a as L,da as A,db as i,ea as D,eb as a,fa as C,fb as w,ga as g,ib as H,jb as m,kb as p,lb as B,mb as E,oa as h,pa as r,sb as d,vb as I,wb as W,xb as F,zb as u}from"./chunk-YCGGRBFB.js";var O=["*"];function Q(t,s){if(t&1){let e=H();i(0,"button",3),m("click",function(){A(e);let o=p(2);return D(o.api.close())}),a()}if(t&2){let e=p(2);_("innerHTML",e.closeIcon,k),N("aria-label",e.state.ariaCloseButtonLabel())}}function X(t,s){if(t&1&&(i(0,"div",1),E(1),v(2,Q,1,2,"button",2),a()),t&2){let e=p();L("flex alert ",e.state.className(),""),_("auUse",e.directives.transitionDirective),c(2),y(e.state.dismissible()?2:-1)}}var f=class t extends U{constructor(){super(G({factory:z,widgetName:"alert",events:{onVisibleChange:e=>this.visible.set(e),onShown:()=>this.shown.emit(),onHidden:()=>this.hidden.emit()},defaultConfig:{transition:j({showClasses:["transition-opacity"],hideClasses:["opacity-0"],animationPendingHideClasses:["opacity-0","transition-opacity"]})}}));this.closeIcon=x(V).bypassSecurityTrustHtml(q);this.dismissible=r(void 0,{transform:R});this.visible=T(!1);this.ariaCloseButtonLable=r();this.className=r();this.hidden=h();this.shown=h()}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=l({type:t,selectors:[["app-alert"]],inputs:{dismissible:[1,"dismissible"],visible:[1,"visible"],ariaCloseButtonLable:[1,"ariaCloseButtonLable"],className:[1,"className"]},outputs:{visible:"visibleChange",hidden:"hidden",shown:"shown"},standalone:!0,features:[M,u],ngContentSelectors:O,decls:1,vars:1,consts:[["role","alert",3,"class","auUse"],["role","alert",3,"auUse"],[1,"btn","btn-sm","btn-circle","btn-ghost","ms-auto",3,"innerHTML"],[1,"btn","btn-sm","btn-circle","btn-ghost","ms-auto",3,"click","innerHTML"]],template:function(n,o){n&1&&(B(),v(0,X,3,5,"div",0)),n&2&&y(o.state.hidden()?-1:0)},dependencies:[P],encapsulation:2,changeDetection:0})}};var S=class t{constructor(){this.visible=!0}reset(){this.visible=!0}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=l({type:t,selectors:[["ng-component"]],standalone:!0,features:[u],decls:13,vars:1,consts:[[1,"btn","btn-primary",3,"click"],[1,"flex","flex-col","gap-3","mt-3"],["className","alert-success",3,"visibleChange","visible"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24",1,"stroke-current","shrink-0","h-6","w-6"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"],["className","alert-error","dismissible","false"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"]],template:function(e,n){e&1&&(i(0,"button",0),m("click",function(){return n.reset()}),d(1,"Reset Alert"),a(),i(2,"div",1)(3,"app-alert",2),F("visibleChange",function(b){return W(n.visible,b)||(n.visible=b),b}),C(),i(4,"svg",3),w(5,"path",4),a(),g(),i(6,"span"),d(7,"Alert is a success!"),a()(),i(8,"app-alert",5),C(),i(9,"svg",3),w(10,"path",6),a(),g(),i(11,"span"),d(12,"Alert is an error!"),a()()()),e&2&&(c(3),I("visible",n.visible))},dependencies:[f],encapsulation:2})}};export{S as default};
