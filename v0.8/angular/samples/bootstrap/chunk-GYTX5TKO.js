import"./chunk-2YPRFKA5.js";import{D as C,aa as v,x as b}from"./chunk-ATBYNP5X.js";import"./chunk-IOV3MBWN.js";import{Ab as l,Cb as g,Db as u,Jb as a,Kb as h,La as c,Za as s,kb as f,oa as m,vb as t,wb as o}from"./chunk-J5IQVFXP.js";var k=["*"],r=class n{constructor(){this.transition=C({props:{visible:!1,transition:b({hideClasses:["hide"],animationPendingHideClasses:["hide"]})}});this.hiddenText=m("")}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=s({type:n,selectors:[["app-flip"]],inputs:{hiddenText:[1,"hiddenText"]},ngContentSelectors:k,decls:9,vars:2,consts:[[1,"flip-card"],[1,"flip-card-inner",3,"auUse"],[1,"flip-card-front"],[1,"btn","btn-outline-secondary",3,"click"],[1,"flip-card-back"],[1,"btn","btn-outline-primary",3,"click"]],template:function(e,i){e&1&&(g(),t(0,"div",0)(1,"div",1)(2,"div",2),u(3),t(4,"button",3),l("click",function(){return i.transition.api.hide()}),a(5,"Hide again."),o()(),t(6,"div",4)(7,"button",5),l("click",function(){return i.transition.api.show()}),a(8),o()()()()),e&2&&(c(),f("auUse",i.transition.directives.directive),c(7),h(i.hiddenText()))},dependencies:[v],styles:[".flip-card[_ngcontent-%COMP%]{background-color:transparent;width:300px;height:40px;perspective:500px;margin:10px 0}.flip-card-inner[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;text-align:center;transition:transform .5s;transform-style:preserve-3d}.flip-card-inner.hide[_ngcontent-%COMP%]{transform:rotateY(180deg)}.flip-card-front[_ngcontent-%COMP%], .flip-card-back[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;background-color:var(--bs-body-bg)}.flip-card-back[_ngcontent-%COMP%]{transform:rotateY(180deg)}"],changeDetection:0})}};var d=class n{static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=s({type:n,selectors:[["ng-component"]],decls:2,vars:0,consts:[["hiddenText","What is hiding behing this ?"]],template:function(e,i){e&1&&(t(0,"app-flip",0),a(1," Some new content ! "),o())},dependencies:[r],encapsulation:2,changeDetection:0})}};export{d as default};
