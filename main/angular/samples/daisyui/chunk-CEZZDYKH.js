import{g as f,m as b,n as v,p as y,r as o}from"./chunk-YFDNJF5O.js";import"./chunk-XJWTB4Q3.js";import{Db as c,Fb as h,Ia as s,Va as m,Ya as d,db as P,eb as t,fb as F,hb as g,la as e,nb as l,ob as p,pb as u}from"./chunk-GOGMXYLY.js";var x=class n extends b{constructor(){super(y(f));this.max=e(void 0,{transform:o});this.value=e(void 0,{transform:o});this.ariaLabel=e();this.className=e();this.ariaValueTextFn=e()}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=m({type:n,selectors:[["app-progressbar"]],inputs:{max:[1,"max"],value:[1,"value"],ariaLabel:[1,"ariaLabel"],className:[1,"className"],ariaValueTextFn:[1,"ariaValueTextFn"]},features:[d],decls:1,vars:5,consts:[[1,"progress",3,"auUse"]],template:function(a,r){a&1&&u(0,"progress",0),a&2&&(g(r.state.className()),t("auUse",r.directives.ariaDirective),P("value",r.state.value())("max",r.state.max()))},dependencies:[v],encapsulation:2,changeDetection:0})}};var D=class n extends b{constructor(){super(y(f));this.min=e(void 0,{transform:o});this.max=e(void 0,{transform:o});this.value=e(void 0,{transform:o});this.ariaLabel=e();this.className=e();this.ariaValueTextFn=e();this.percentFormat=new Intl.NumberFormat("default",{style:"percent",minimumFractionDigits:0,maximumFractionDigits:1})}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=m({type:n,selectors:[["app-radial-progress"]],inputs:{min:[1,"min"],max:[1,"max"],value:[1,"value"],ariaLabel:[1,"ariaLabel"],className:[1,"className"],ariaValueTextFn:[1,"ariaValueTextFn"]},features:[d],decls:2,vars:8,consts:[[1,"radial-progress",3,"auUse"]],template:function(a,r){a&1&&(l(0,"div",0),c(1),p()),a&2&&(g(r.state.className()),F("--thickness","0.4rem")("--value",r.state.percentage()),t("auUse",r.directives.ariaDirective),s(),h(" ",r.percentFormat.format(r.state.percentage()/100)," "))},dependencies:[v],encapsulation:2,changeDetection:0})}};var N=class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=m({type:n,selectors:[["ng-component"]],decls:9,vars:9,consts:[[1,"text-lg","mb-2"],["className","progress-primary",3,"value"],["className","progress-info",3,"value","max"],[1,"text-lg","mt-4","mb-2"],[1,"flex","gap-6"],["className","text-primary",3,"min","max","value"],["className","bg-info text-info-content border-4 border-info",3,"min","max","value"]],template:function(i,a){i&1&&(l(0,"h2",0),c(1,"Simple progressbars"),p(),u(2,"app-progressbar",1)(3,"app-progressbar",2),l(4,"h2",3),c(5,"Radial progress"),p(),l(6,"div",4),u(7,"app-radial-progress",5)(8,"app-radial-progress",6),p()),i&2&&(s(2),t("value",20),s(),t("value",4)("max",5),s(4),t("min",10)("max",20)("value",13),s(),t("min",9)("max",20)("value",17))},dependencies:[x,D],encapsulation:2})}};export{N as default};
