import{a as R}from"./chunk-AO7SUHAN.js";import{c as W}from"./chunk-BWAKNAJM.js";import{a as z,b as U,h as G,i as P,j as O,k as S}from"./chunk-MCVGVNOQ.js";import{$ as l,$a as H,Ga as A,Ja as m,Qa as I,Ra as M,Va as g,W as x,Wa as F,Xa as _,_ as b,ab as w,eb as i,fb as s,gb as y,ha as T,hb as E,ia as D,ib as p,ja as v,jb as d,ka as C,kb as L,la as k,lb as B,qa as c,qb as u,tb as N,ub as V,vb as j,xb as h}from"./chunk-6RYTI223.js";var Q=["*"];function X(t,e){if(t&1){let a=E();i(0,"button",3),p("click",function(){T(a);let n=d(2);return D(n.api.close())}),s()}if(t&2){let a=d(2);_("innerHTML",a.closeIcon,A),F("aria-label",a.state().ariaCloseButtonLabel)}}function Y(t,e){if(t&1&&(i(0,"div",1),B(1),g(2,X,1,2,"button",2),s()),t&2){let a=d();H("flex alert ",a.state().className,""),_("auUse",a.widget.directives.transitionDirective),m(2),w(2,a.state().dismissible?2:-1)}}var q=(()=>{let e=class e extends P{constructor(){super(...arguments),this.closeIcon=x(W).bypassSecurityTrustHtml(R),this.visibleChange=new c,this.hidden=new c,this.shown=new c,this.transition=z({showClasses:["transition-opacity"],hideClasses:["opacity-0"],animationPendingHideClasses:["opacity-0","transition-opacity"]}),this._widget=O({factory:U,widgetName:"alert",events:{onVisibleChange:o=>this.visibleChange.emit(o),onShown:()=>this.shown.emit(),onHidden:()=>this.hidden.emit()},defaultConfig:{transition:this.transition}})}};e.\u0275fac=(()=>{let o;return function(r){return(o||(o=k(e)))(r||e)}})(),e.\u0275cmp=l({type:e,selectors:[["app-alert"]],inputs:{dismissible:[b.HasDecoratorInputTransform,"dismissible","dismissible",S],visible:[b.HasDecoratorInputTransform,"visible","visible",S],ariaCloseButtonLabel:"ariaCloseButtonLabel",className:"className"},outputs:{visibleChange:"visibleChange",hidden:"hidden",shown:"shown"},standalone:!0,features:[M,I,h],ngContentSelectors:Q,decls:1,vars:1,consts:[["role","alert",3,"class","auUse"],["role","alert",3,"auUse"],[1,"btn","btn-sm","btn-circle","btn-ghost","ms-auto",3,"innerHTML"],[1,"btn","btn-sm","btn-circle","btn-ghost","ms-auto",3,"click","innerHTML"]],template:function(n,r){n&1&&(L(),g(0,Y,3,5,"div",0)),n&2&&w(0,r.state().hidden?-1:0)},dependencies:[G],encapsulation:2,changeDetection:0});let t=e;return t})();var le=(()=>{let e=class e{constructor(){this.visible=!0}reset(){this.visible=!0}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l({type:e,selectors:[["ng-component"]],standalone:!0,features:[h],decls:13,vars:1,consts:[[1,"btn","btn-primary",3,"click"],[1,"flex","flex-col","gap-3","mt-3"],["className","alert-success",3,"visibleChange","visible"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24",1,"stroke-current","shrink-0","h-6","w-6"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"],["className","alert-error","dismissible","false"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"]],template:function(n,r){n&1&&(i(0,"button",0),p("click",function(){return r.reset()}),u(1,"Reset Alert"),s(),i(2,"div",1)(3,"app-alert",2),j("visibleChange",function(f){return V(r.visible,f)||(r.visible=f),f}),v(),i(4,"svg",3),y(5,"path",4),s(),C(),i(6,"span"),u(7,"Alert is a success!"),s()(),i(8,"app-alert",5),v(),i(9,"svg",3),y(10,"path",6),s(),C(),i(11,"span"),u(12,"Alert is an error!"),s()()()),n&2&&(m(3),N("visible",r.visible))},dependencies:[q],encapsulation:2});let t=e;return t})();export{le as default};
