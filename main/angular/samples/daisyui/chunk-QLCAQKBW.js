import{f as b,k as v,m as y,n as x,p as o}from"./chunk-DGZDAKBJ.js";import{Ja as s,Qa as g,Va as P,Wa as r,X as m,Xa as h,Za as f,db as l,eb as p,fb as d,pa as e,sb as c,ub as S,zb as u}from"./chunk-SP56K5OG.js";var D=class n extends y{constructor(){super(x({factory:b,widgetName:"progressbar"}));this.max=e(void 0,{transform:o});this.value=e(void 0,{transform:o});this.ariaLabel=e();this.className=e();this.ariaValueTextFn=e()}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=m({type:n,selectors:[["app-progressbar"]],inputs:{max:[1,"max"],value:[1,"value"],ariaLabel:[1,"ariaLabel"],className:[1,"className"],ariaValueTextFn:[1,"ariaValueTextFn"]},standalone:!0,features:[g,u],decls:1,vars:5,consts:[[1,"progress",3,"auUse"]],template:function(a,t){a&1&&d(0,"progress",0),a&2&&(f(t.state.className()),r("auUse",t.directives.ariaDirective),P("value",t.state.value())("max",t.state.max()))},dependencies:[v],encapsulation:2,changeDetection:0})}};var N=class n extends y{constructor(){super(x({factory:b,widgetName:"progressbar"}));this.min=e(void 0,{transform:o});this.max=e(void 0,{transform:o});this.value=e(void 0,{transform:o});this.ariaLabel=e();this.className=e();this.ariaValueTextFn=e();this.percentFormat=new Intl.NumberFormat("default",{style:"percent",minimumFractionDigits:0,maximumFractionDigits:1})}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=m({type:n,selectors:[["app-radial-progress"]],inputs:{min:[1,"min"],max:[1,"max"],value:[1,"value"],ariaLabel:[1,"ariaLabel"],className:[1,"className"],ariaValueTextFn:[1,"ariaValueTextFn"]},standalone:!0,features:[g,u],decls:2,vars:8,consts:[[1,"radial-progress",3,"auUse"]],template:function(a,t){a&1&&(l(0,"div",0),c(1),p()),a&2&&(f(t.state.className()),h("--thickness","0.4rem")("--value",t.state.percentage()),r("auUse",t.directives.ariaDirective),s(),S(" ",t.percentFormat.format(t.state.percentage()/100)," "))},dependencies:[v],encapsulation:2,changeDetection:0})}};var F=class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=m({type:n,selectors:[["ng-component"]],standalone:!0,features:[u],decls:9,vars:9,consts:[[1,"text-lg","mb-2"],["className","progress-primary",3,"value"],["className","progress-info",3,"value","max"],[1,"text-lg","mt-4","mb-2"],[1,"flex","gap-6"],["className","text-primary",3,"min","max","value"],["className","bg-info text-info-content border-4 border-info",3,"min","max","value"]],template:function(i,a){i&1&&(l(0,"h2",0),c(1,"Simple progressbars"),p(),d(2,"app-progressbar",1)(3,"app-progressbar",2),l(4,"h2",3),c(5,"Radial progress"),p(),l(6,"div",4),d(7,"app-radial-progress",5)(8,"app-radial-progress",6),p()),i&2&&(s(2),r("value",20),s(),r("value",4)("max",5),s(4),r("min",10)("max",20)("value",13),s(),r("min",9)("max",20)("value",17))},dependencies:[D,N],encapsulation:2})}};export{F as default};
