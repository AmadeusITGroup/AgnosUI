import{a as q}from"./chunk-AO7SUHAN.js";import{c as j}from"./chunk-NUNFPPZU.js";import{a as W,h as z,j as U,l as G,m as P,n as R}from"./chunk-E3OLLZLM.js";import{Ab as I,Bb as V,Db as f,Ia as T,La as m,Ua as A,Va as M,W as S,Ya as g,Za as L,_ as l,_a as _,cb as B,db as w,ga as x,ha as k,hb as i,ia as b,ib as s,ja as v,jb as y,ka as D,mb as H,nb as p,oa as C,ob as d,pa as c,pb as F,qb as E,wb as u,zb as N}from"./chunk-KBDLISNL.js";var Q=["*"];function X(t,e){if(t&1){let o=H();i(0,"button",3),p("click",function(){x(o);let n=d(2);return k(n.api.close())}),s()}if(t&2){let o=d(2);_("innerHTML",o.closeIcon,T),L("aria-label",o.state().ariaCloseButtonLabel)}}function Y(t,e){if(t&1&&(i(0,"div",1),E(1),g(2,X,1,2,"button",2),s()),t&2){let o=d();B("flex alert ",o.state().className,""),_("auUse",o.widget.directives.transitionDirective),m(2),w(o.state().dismissible?2:-1)}}var J=(()=>{let e=class e extends G{constructor(){super(...arguments),this.closeIcon=S(j).bypassSecurityTrustHtml(q),this.dismissible=c(void 0,{transform:R}),this.visible=A(!1),this.ariaCloseButtonLable=c(),this.className=c(),this.hidden=C(),this.shown=C(),this._widget=P({factory:z,widgetName:"alert",events:{onVisibleChange:a=>this.visible.set(a),onShown:()=>this.shown.emit(),onHidden:()=>this.hidden.emit()},defaultConfig:{transition:W({showClasses:["transition-opacity"],hideClasses:["opacity-0"],animationPendingHideClasses:["opacity-0","transition-opacity"]})}})}};e.\u0275fac=(()=>{let a;return function(r){return(a||(a=D(e)))(r||e)}})(),e.\u0275cmp=l({type:e,selectors:[["app-alert"]],inputs:{dismissible:[1,"dismissible"],visible:[1,"visible"],ariaCloseButtonLable:[1,"ariaCloseButtonLable"],className:[1,"className"]},outputs:{visible:"visibleChange",hidden:"hidden",shown:"shown"},standalone:!0,features:[M,f],ngContentSelectors:Q,decls:1,vars:1,consts:[["role","alert",3,"class","auUse"],["role","alert",3,"auUse"],[1,"btn","btn-sm","btn-circle","btn-ghost","ms-auto",3,"innerHTML"],[1,"btn","btn-sm","btn-circle","btn-ghost","ms-auto",3,"click","innerHTML"]],template:function(n,r){n&1&&(F(),g(0,Y,3,5,"div",0)),n&2&&w(r.state().hidden?-1:0)},dependencies:[U],encapsulation:2,changeDetection:0});let t=e;return t})();var ae=(()=>{let e=class e{constructor(){this.visible=!0}reset(){this.visible=!0}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l({type:e,selectors:[["ng-component"]],standalone:!0,features:[f],decls:13,vars:1,consts:[[1,"btn","btn-primary",3,"click"],[1,"flex","flex-col","gap-3","mt-3"],["className","alert-success",3,"visibleChange","visible"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24",1,"stroke-current","shrink-0","h-6","w-6"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"],["className","alert-error","dismissible","false"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"]],template:function(n,r){n&1&&(i(0,"button",0),p("click",function(){return r.reset()}),u(1,"Reset Alert"),s(),i(2,"div",1)(3,"app-alert",2),V("visibleChange",function(h){return I(r.visible,h)||(r.visible=h),h}),b(),i(4,"svg",3),y(5,"path",4),s(),v(),i(6,"span"),u(7,"Alert is a success!"),s()(),i(8,"app-alert",5),b(),i(9,"svg",3),y(10,"path",6),s(),v(),i(11,"span"),u(12,"Alert is an error!"),s()()()),n&2&&(m(3),N("visible",r.visible))},dependencies:[J],encapsulation:2});let t=e;return t})();export{ae as default};
