import"./chunk-BYXBJQAS.js";import"./chunk-IJ6FCGEN.js";import{X as d,Z as x,m as _,n as C}from"./chunk-ZIA7Z5CU.js";import"./chunk-EUXCPVXS.js";import{Cb as n,Db as m,Jb as k,La as r,Sa as f,Za as b,_ as u,ab as s,ec as E,hb as h,ib as v,jb as y,kb as F,lb as t,mb as e,nb as l,qb as g}from"./chunk-L7M7XINM.js";function S(i,a){i&1&&(n(0," with id "),t(1,"strong"),n(2),e()),i&2&&(r(2),m(a))}function D(i,a){if(i&1&&(t(0,"li")(1,"strong"),n(2),e(),b(3,S,3,1,"strong"),e()),i&2){let o,c=a.$implicit;r(2),m(c.tagName),r(),h((o=c.id)?3:-1,o)}}var p=class i{constructor(){this.hasFocusApi=C();this.hasFocus=d(this.hasFocusApi.hasFocus$);this.activeElements=f([]);this.activeElement=d(_);E(()=>{this.activeElements.update(a=>a.concat([{tagName:this.activeElement()?.tagName?.toLowerCase(),id:this.activeElement()?.id||void 0}]))},{allowSignalWrites:!0})}clear(){this.activeElements.set([])}static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275cmp=u({type:i,selectors:[["ng-component"]],standalone:!0,features:[k],decls:23,vars:2,consts:[[1,"demo-focustrack"],[1,"my-2","p-2","border",3,"auUse"],["type","text","placeholder","Focusable input","id","focusableInput",1,"form-control"],["type","text","placeholder","Other focusable input","id","otherFocusableInput",1,"form-control"],["type","text","placeholder","Disabled input","id","disabledInput","disabled","",1,"form-control"],[1,"form-check","mb-2"],["type","checkbox","id","containerHasFocus","disabled","",1,"form-check-input",3,"checked"],["for","containerHasFocus",1,"form-check-label"],[1,"d-flex","justify-content-between"],[1,"btn","btn-sm","btn-primary",3,"click"],[1,"card","my-2"],[1,"card-body"],[1,"mb-0"]],template:function(o,c){o&1&&(t(0,"div",0)(1,"div",1)(2,"h5"),n(3,"Container"),e(),l(4,"input",2)(5,"br")(6,"input",3),e(),l(7,"input",4)(8,"br"),t(9,"div",5),l(10,"input",6),t(11,"label",7),n(12,"Focus in container"),e()(),t(13,"div",8)(14,"div"),n(15,"Active element history:"),e(),t(16,"button",9),g("click",function(){return c.clear()}),n(17,"Clear"),e()(),t(18,"div",10)(19,"div",11)(20,"ul",12),y(21,D,4,2,"li",null,v),e()()()()),o&2&&(r(),s("auUse",c.hasFocusApi.directive),r(9),s("checked",c.hasFocus()),r(11),F(c.activeElements()))},dependencies:[x],encapsulation:2,changeDetection:0})}};export{p as default};