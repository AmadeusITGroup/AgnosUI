import"./chunk-BYXBJQAS.js";import"./chunk-EITGQCZU.js";import{Z as d,ca as C,m as g,n as _}from"./chunk-W4NKRSIZ.js";import"./chunk-4JWW5UX7.js";import{Ib as o,Jb as m,Ka as r,Ya as u,bb as f,cc as k,jb as s,qb as b,rb as h,sb as v,tb as y,ub as i,vb as e,wb as l,zb as F}from"./chunk-F7KKIC6B.js";function E(n,a){n&1&&(o(0," with id "),i(1,"strong"),o(2),e()),n&2&&(r(2),m(a))}function x(n,a){if(n&1&&(i(0,"li")(1,"strong"),o(2),e(),f(3,E,3,1),e()),n&2){let t,c=a.$implicit;r(2),m(c.tagName),r(),b((t=c.id)?3:-1,t)}}var p=class n{constructor(){this.hasFocusApi=_();this.hasFocus=d(this.hasFocusApi.hasFocus$);this.activeElement=d(g);this.activeElements=k({source:this.activeElement,computation:(a,t)=>(t?.value??[]).concat([{tagName:a?.tagName?.toLowerCase(),id:a?.id||void 0}])})}clear(){this.activeElements.set([])}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=u({type:n,selectors:[["ng-component"]],decls:23,vars:2,consts:[[1,"demo-focustrack"],[1,"my-2","p-2","border",3,"auUse"],["type","text","placeholder","Focusable input","id","focusableInput",1,"form-control"],["type","text","placeholder","Other focusable input","id","otherFocusableInput",1,"form-control"],["type","text","placeholder","Disabled input","id","disabledInput","disabled","",1,"form-control"],[1,"form-check","mb-2"],["type","checkbox","id","containerHasFocus","disabled","",1,"form-check-input",3,"checked"],["for","containerHasFocus",1,"form-check-label"],[1,"d-flex","justify-content-between"],[1,"btn","btn-sm","btn-primary",3,"click"],[1,"card","my-2"],[1,"card-body"],[1,"mb-0"]],template:function(t,c){t&1&&(i(0,"div",0)(1,"div",1)(2,"h5"),o(3,"Container"),e(),l(4,"input",2)(5,"br")(6,"input",3),e(),l(7,"input",4)(8,"br"),i(9,"div",5),l(10,"input",6),i(11,"label",7),o(12,"Focus in container"),e()(),i(13,"div",8)(14,"div"),o(15,"Active element history:"),e(),i(16,"button",9),F("click",function(){return c.clear()}),o(17,"Clear"),e()(),i(18,"div",10)(19,"div",11)(20,"ul",12),v(21,x,4,2,"li",null,h),e()()()()),t&2&&(r(),s("auUse",c.hasFocusApi.directive),r(9),s("checked",c.hasFocus()),r(11),y(c.activeElements()))},dependencies:[C],encapsulation:2,changeDetection:0})}};export{p as default};
