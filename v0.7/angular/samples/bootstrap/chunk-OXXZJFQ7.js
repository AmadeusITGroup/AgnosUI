import{S as f}from"./chunk-C5QCM6L5.js";import{X as u,Z as z,j as v}from"./chunk-IAPE5IF4.js";import"./chunk-BSKWKFW2.js";import{Ib as e,Jb as b,Ka as s,Ra as h,Ya as d,bc as p,jb as m,kb as c,lb as g,ub as i,vb as n,zb as o}from"./chunk-X6ZWDPPE.js";var a=class l{constructor(){this.heightValue=h(180);this.resizeObserver=v();this.resizeDirective=this.resizeObserver.directive;this.dimensions$=u(this.resizeObserver.dimensions$);this.observedHeight$=p(()=>this.dimensions$()?.contentRect?.height)}increaseHeight(){this.heightValue.set((this.observedHeight$()||0)+50)}decreaseHeight(){this.heightValue.set(this.observedHeight$()?this.observedHeight$()-50:0)}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275cmp=d({type:l,selectors:[["ng-component"]],decls:14,vars:6,consts:[[1,"demo-resize-observer"],["for","resizable"],["name","resizable","id","resizable","rows","6","cols","50",1,"form-control",3,"auUse"],["id","dynamic-height"],["type","button","id","decreaseHeight",1,"btn","btn-primary","m-2",3,"click"],["type","button","id","increaseHeight",1,"btn","btn-primary","m-2",3,"click"]],template:function(r,t){r&1&&(i(0,"div",0)(1,"label",1),e(2,"Resizable textarea:"),n(),i(3,"textarea",2),e(4,`This simple example is using the resizeObserver feature from @agnos-ui/core and displays the height of the textarea below it.
Modify the height to more than 200 px and see the font size changing.
	`),n(),i(5,"div"),e(6," Textarea content height: "),i(7,"span",3),e(8),n(),e(9,"px "),n(),i(10,"button",4),o("click",function(){return t.decreaseHeight()}),e(11,"Height --"),n(),i(12,"button",5),o("click",function(){return t.increaseHeight()}),e(13,"Height ++"),n()()),r&2&&(s(3),c("height",t.heightValue(),"px"),g("fontsize",t.observedHeight$()&&t.observedHeight$()>200),m("auUse",t.resizeDirective),s(5),b(t.observedHeight$()))},dependencies:[z,f],styles:["div.demo-resize-observer[_ngcontent-%COMP%]   #resizable[_ngcontent-%COMP%]{resize:both;width:400px}div.demo-resize-observer[_ngcontent-%COMP%]   .fontsize[_ngcontent-%COMP%]{font-size:x-large}"],changeDetection:0})}};export{a as default};
