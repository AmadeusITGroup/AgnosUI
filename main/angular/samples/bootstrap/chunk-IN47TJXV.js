import{S as h}from"./chunk-BNWOVH73.js";import{Z as M,k as f}from"./chunk-DPRLPUF2.js";import"./chunk-BSKWKFW2.js";import{Ib as l,Jb as v,Ka as o,Rb as d,Ya as p,jb as r,oa as g,ub as s,vb as i,wb as m}from"./chunk-X6ZWDPPE.js";var x=(t,n)=>[t,n],c=class t{constructor(){this.text=g("");this.navManager=f();this.navManagerConfig={keys:{ArrowLeft:this.navManager.focusLeft,ArrowRight:this.navManager.focusRight,Home:this.navManager.focusFirst,End:this.navManager.focusLast,"Meta+ArrowLeft":this.navManager.focusFirstLeft,"Meta+ArrowRight":this.navManager.focusFirstRight},selector:n=>n.querySelectorAll("input,span")}}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=p({type:t,selectors:[["app-navmanager-line"]],inputs:{text:[1,"text"]},decls:7,vars:8,consts:[[1,"d-flex","demo-navmanager-line",3,"auUse"],["type","text",1,"form-control","me-1",3,"value"],["tabindex","-1",1,"form-control","w-auto","me-1"],["tabindex","-1","type","checkbox",1,"form-check-input","align-self-center","me-1"],["tabindex","-1","type","text","disabled","",1,"form-control","me-1",3,"value"],["tabindex","-1","type","text",1,"form-control","me-1",3,"value"]],template:function(e,a){e&1&&(s(0,"div",0),m(1,"input",1),s(2,"span",2),l(3),i(),m(4,"input",3)(5,"input",4)(6,"input",5),i()),e&2&&(r("auUse",d(5,x,a.navManager.directive,a.navManagerConfig)),o(),r("value",a.text()),o(2),v(a.text()),o(2),r("value",a.text()),o(),r("value",a.text()))},dependencies:[h,M],encapsulation:2})}},u=class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=p({type:t,selectors:[["ng-component"]],decls:9,vars:0,consts:[[1,"demo-navmanager"],["dir","ltr",1,"mt-3","pb-3"],["text","Hello"],["dir","rtl",1,"mt-3","pb-3"],["text","\u05E9\u05C1\u05B8\u05DC\u05D5\u05B9\u05DD"]],template:function(e,a){e&1&&(s(0,"div",0)(1,"div",1)(2,"h2"),l(3,"Left-to-right"),i(),m(4,"app-navmanager-line",2),i(),s(5,"div",3)(6,"h2"),l(7,"Right-to-left"),i(),m(8,"app-navmanager-line",4),i()())},dependencies:[c],encapsulation:2})}};export{c as NavmanagerLineComponent,u as default};
