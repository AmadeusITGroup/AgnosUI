import"./chunk-BYXBJQAS.js";import"./chunk-SVQQ27LV.js";import{V as P,a as F,g as y,h as N}from"./chunk-77NWBGAQ.js";import{E as D,aa as w,c as g,ca as A,na as B,qa as x,sa as O,xa as V}from"./chunk-LRX2L6WB.js";import{m as $,n as T}from"./chunk-UYVHQQFU.js";import{Ab as a,Bb as k,Jb as i,La as o,Lb as f,Vb as m,Wb as c,Za as _,cb as b,kb as u,mb as C,qa as M,rb as v,vb as t,wb as n,xb as S}from"./chunk-IJSYMB5S.js";function j(l,p){if(l&1&&(t(0,"div",9)(1,"div",10)(2,"div",11),i(3,"You can collapse this card by clicking Toggle"),n()()()),l&2){let r=k();u("auUse",r.transition.directives.directive)}}var I=g(y),R=g(!0),z=g(!1),q=g(!0),H=g(!0),h=class l{constructor(){this.bootstrap={collapseHorizontalTransition:N,collapseVerticalTransition:y,fadeTransition:F};this.paramTransition$=I;this.paramAnimated$=R;this.paramAnimatedOnInit$=z;this.paramRemoveFromDom$=H;this.transition=D({props:{animatedOnInit:z,animated:R,visible:q,transition:I}});this.state=w(this.transition.state$)}changeTransition(p){this.transition.api.toggle(!1,!1),H.set(!0),I.set(p)}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275cmp=_({type:l,selectors:[["app-transition-inner"]],decls:49,vars:31,consts:[[1,"transition-inner"],[1,"h6","mt-2"],[1,"d-flex","flex-wrap","gap-2"],["type","button",1,"btn","btn-sm","btn-outline-secondary",3,"click"],[1,"form-check"],["type","checkbox",1,"form-check-input",3,"ngModelChange","ngModel"],[1,"form-check","mb-2"],["type","button",1,"btn","btn-outline-primary",3,"click"],[1,"mt-2"],[2,"max-width","300px",3,"auUse"],[1,"card",2,"width","300px"],[1,"card-body"]],template:function(r,e){r&1&&(t(0,"div",0)(1,"div",1),i(2,"Transition:"),n(),t(3,"div",2)(4,"button",3),m(5,"async"),a("click",function(){return e.changeTransition(e.bootstrap.collapseVerticalTransition)}),i(6," Vertical collapse "),n(),t(7,"button",3),m(8,"async"),a("click",function(){return e.changeTransition(e.bootstrap.collapseHorizontalTransition)}),i(9," Horizontal collapse "),n(),t(10,"button",3),m(11,"async"),a("click",function(){return e.changeTransition(e.bootstrap.fadeTransition)}),i(12," Fade "),n()(),t(13,"div",1),i(14,"Other properties:"),n(),t(15,"label",4)(16,"input",5),m(17,"async"),a("ngModelChange",function(d){return e.paramAnimated$.set(d)}),n(),i(18,"Animated"),n(),t(19,"label",4)(20,"input",5),m(21,"async"),a("ngModelChange",function(d){return e.paramAnimatedOnInit$.set(d)}),n(),i(22,"Animated on init"),n(),t(23,"label",4)(24,"input",5),m(25,"async"),a("ngModelChange",function(d){return e.paramRemoveFromDom$.set(d)}),n(),i(26,"Remove from DOM"),n(),t(27,"label",6)(28,"input",5),m(29,"async"),a("ngModelChange",function(d){return e.transition.patch({visible:d})}),n(),i(30,"Visible"),n(),t(31,"div",2)(32,"button",7),a("click",function(){return e.transition.api.toggle()}),i(33,"Toggle"),n(),t(34,"button",7),a("click",function(){return e.transition.api.toggle(void 0,!0)}),i(35,"Toggle with animation"),n(),t(36,"button",7),a("click",function(){return e.transition.api.toggle(void 0,!1)}),i(37,"Toggle without animation"),n()(),t(38,"ul",8)(39,"li"),i(40),n(),t(41,"li"),i(42),n(),t(43,"li"),i(44),n(),t(45,"li"),i(46),n()(),b(47,j,4,1,"div",9),m(48,"async"),n()),r&2&&(o(4),C("active",c(5,15,e.paramTransition$)===e.bootstrap.collapseVerticalTransition),o(3),C("active",c(8,17,e.paramTransition$)===e.bootstrap.collapseHorizontalTransition),o(3),C("active",c(11,19,e.paramTransition$)===e.bootstrap.fadeTransition),o(6),u("ngModel",c(17,21,e.paramAnimated$)),o(4),u("ngModel",c(21,23,e.paramAnimatedOnInit$)),o(4),u("ngModel",c(25,25,e.paramRemoveFromDom$)),o(4),u("ngModel",c(29,27,e.transition.stores.visible$)),o(12),f("visible = ",e.state().visible,""),o(2),f("transitioning = ",e.state().transitioning,""),o(2),f("shown = ",e.state().shown,""),o(2),f("hidden = ",e.state().hidden,""),o(),v(c(48,29,e.paramRemoveFromDom$)===!1||e.state().hidden===!1?47:-1))},dependencies:[P,A,V,B,x,O,T,$],encapsulation:2,changeDetection:0})}};function G(l,p){l&1&&S(0,"app-transition-inner")}var E=class l{constructor(){this.showComponent=M(!0)}toggleShow(){this.showComponent.update(p=>!p)}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275cmp=_({type:l,selectors:[["ng-component"]],decls:4,vars:1,consts:[[1,"demo-transition","mb-3"],["id","toggle-component",1,"btn","btn-outline-secondary",3,"click"]],template:function(r,e){r&1&&(t(0,"div",0)(1,"button",1),a("click",function(){return e.toggleShow()}),i(2,"Toggle component"),n(),b(3,G,1,0,"app-transition-inner"),n()),r&2&&(o(3),v(e.showComponent()?3:-1))},dependencies:[T,h],encapsulation:2,changeDetection:0})}};export{E as default};
