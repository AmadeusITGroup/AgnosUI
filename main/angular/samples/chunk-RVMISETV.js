import{w as z}from"./chunk-OYK3Y2NF.js";import"./chunk-ZBV2L2DC.js";import{B as u,N as v,P as f}from"./chunk-DXQXQBD6.js";import"./chunk-KJNIKP2T.js";import{Jb as e,Kb as p,Na as a,Qb as b,Ta as c,X as l,ib as d,jb as m,kb as g,tb as i,ub as n,zb as h}from"./chunk-7LGRIDZR.js";var M=(()=>{let r=class r{constructor(){this.heightValue=180,this.resizeObserver=u(),this.resizeDirective=this.resizeObserver.directive,this.dimensions$=v(this.resizeObserver.dimensions$),this.observedHeight$=c(()=>this.dimensions$()?.contentRect?.height)}increaseHeight(){this.heightValue=(this.observedHeight$()||0)+50}decreaseHeight(){this.heightValue=this.observedHeight$()?this.observedHeight$()-50:0}};r.\u0275fac=function(s){return new(s||r)},r.\u0275cmp=l({type:r,selectors:[["ng-component"]],standalone:!0,features:[b],decls:14,vars:6,consts:[[1,"demo-resize-observer"],["for","resizable"],["name","resizable","id","resizable","rows","6","cols","50",1,"form-control",3,"auUse"],["id","dynamic-height"],["type","button","id","decreaseHeight",1,"btn","btn-primary","m-2",3,"click"],["type","button","id","increaseHeight",1,"btn","btn-primary","m-2",3,"click"]],template:function(s,t){s&1&&(i(0,"div",0)(1,"label",1),e(2,"Resizable textarea:"),n(),i(3,"textarea",2),e(4,`This simple example is using the resizeObserver feature from @agnos-ui/core and displays the height of the textarea below it.
Modify the height to more than 200 px and see the font size changing.
	`),n(),i(5,"div"),e(6," Textarea content height: "),i(7,"span",3),e(8),n(),e(9,"px "),n(),i(10,"button",4),h("click",function(){return t.decreaseHeight()}),e(11,"Height --"),n(),i(12,"button",5),h("click",function(){return t.increaseHeight()}),e(13,"Height ++"),n()()),s&2&&(a(3),m("height",t.heightValue,"px"),g("fontsize",t.observedHeight$()&&t.observedHeight$()>200),d("auUse",t.resizeDirective),a(5),p(t.observedHeight$()))},dependencies:[f,z],styles:["div.demo-resize-observer[_ngcontent-%COMP%]   #resizable[_ngcontent-%COMP%]{resize:both;width:400px}div.demo-resize-observer[_ngcontent-%COMP%]   .fontsize[_ngcontent-%COMP%]{font-size:x-large}"],changeDetection:0});let o=r;return o})();export{M as default};
