import{a as R}from"./chunk-AO7SUHAN.js";import{c as V}from"./chunk-LTTFNSYJ.js";import{a as j,i as z,k as F,m as P,n as U,o as G}from"./chunk-KUZVZHYP.js";import"./chunk-W27Z4RXD.js";import{$ as A,$a as M,Ab as E,Bb as I,Cb as W,Ea as S,Ha as r,Oa as k,Ra as c,T as x,Ua as T,Va as h,aa as D,ab as v,ba as b,ca as C,eb as N,fb as _,jb as i,ka as g,kb as s,la as l,lb as y,ob as L,pb as m,qb as p,rb as H,sb as B,xb as d}from"./chunk-D5UE22AC.js";var K=["*"];function O(t,a){if(t&1){let e=L();i(0,"button",3),m("click",function(){A(e);let o=p(2);return D(o.api.close())}),s()}if(t&2){let e=p(2);v("innerHTML",e.closeIcon,S),M("aria-label",e.state.ariaCloseButtonLabel())}}function Q(t,a){if(t&1&&(i(0,"div",1),B(1),h(2,O,1,2,"button",2),s()),t&2){let e=p();N("flex alert ",e.state.className(),""),v("auUse",e.directives.transitionDirective),r(2),_(e.state.dismissible()?2:-1)}}var u=class t extends P{constructor(){super(U({factory:z,widgetName:"alert",events:{onVisibleChange:e=>this.visible.set(e),onShown:()=>this.shown.emit(),onHidden:()=>this.hidden.emit()},defaultConfig:{transition:j({showClasses:["transition-opacity"],hideClasses:["opacity-0"],animationPendingHideClasses:["opacity-0","transition-opacity"]})}}));this.closeIcon=x(V).bypassSecurityTrustHtml(R);this.dismissible=l(void 0,{transform:G});this.visible=k(!1);this.ariaCloseButtonLable=l();this.className=l();this.hidden=g();this.shown=g()}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=c({type:t,selectors:[["app-alert"]],inputs:{dismissible:[1,"dismissible"],visible:[1,"visible"],ariaCloseButtonLable:[1,"ariaCloseButtonLable"],className:[1,"className"]},outputs:{visible:"visibleChange",hidden:"hidden",shown:"shown"},features:[T],ngContentSelectors:K,decls:1,vars:1,consts:[["role","alert",3,"class","auUse"],["role","alert",3,"auUse"],[1,"btn","btn-sm","btn-circle","btn-ghost","ms-auto",3,"innerHTML"],[1,"btn","btn-sm","btn-circle","btn-ghost","ms-auto",3,"click","innerHTML"]],template:function(n,o){n&1&&(H(),h(0,Q,3,5,"div",0)),n&2&&_(o.state.hidden()?-1:0)},dependencies:[F],encapsulation:2,changeDetection:0})}};var w=class t{constructor(){this.visible=!0}reset(){this.visible=!0}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=c({type:t,selectors:[["ng-component"]],decls:13,vars:1,consts:[[1,"btn","btn-primary",3,"click"],[1,"flex","flex-col","gap-3","mt-3"],["className","alert-success",3,"visibleChange","visible"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24",1,"stroke-current","shrink-0","h-6","w-6"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"],["className","alert-error","dismissible","false"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"]],template:function(e,n){e&1&&(i(0,"button",0),m("click",function(){return n.reset()}),d(1,"Reset Alert"),s(),i(2,"div",1)(3,"app-alert",2),W("visibleChange",function(f){return I(n.visible,f)||(n.visible=f),f}),b(),i(4,"svg",3),y(5,"path",4),s(),C(),i(6,"span"),d(7,"Alert is a success!"),s()(),i(8,"app-alert",5),b(),i(9,"svg",3),y(10,"path",6),s(),C(),i(11,"span"),d(12,"Alert is an error!"),s()()()),e&2&&(r(3),E("visible",n.visible))},dependencies:[u],encapsulation:2})}};export{w as default};
