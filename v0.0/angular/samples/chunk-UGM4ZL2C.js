import{l as y}from"./chunk-H6ZKA5JJ.js";import{c as v,e as b,g as F,l as M}from"./chunk-24AZX5Q5.js";import{P as S,Q as _}from"./chunk-UQV7GR2W.js";import{$a as d,Cb as s,Gb as g,Jb as h,Ma as u,Nb as C,Ob as T,ba as p,kb as l,lb as o,lc as x,mb as f,rb as a}from"./chunk-HHNAUMXU.js";var $=(()=>{let r=class r{constructor(){this.mainList=["Action 1","Action 2","Action 3","Other 1","Other 2","Other 3"],this.items=[],this.widgetsConfig$=_();let e=location.hash.split("?")[1],t=new URL(e?`?${e}`:"",location.href);this.widgetsConfig$.set({select:{filterText:t.searchParams.get("filterText")??""}})}onFilterTextChange(e){if(this.filterText!==e){this.filterText=e;let t=this.mainList;this.items=e?t.filter(n=>n.toLowerCase().startsWith(e??"")):t.slice(0,10)}}};r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=p({type:r,selectors:[["ng-component"]],standalone:!0,features:[g([S()]),h],decls:17,vars:5,consts:[[1,"mb-3"],[1,"form-label"],["auSelect","",3,"auItems","auFilterText","auFilterTextChange"],[1,"demo-select-config"],["type","text",1,"form-control",3,"ngModel","ngModelChange"],["type","button",1,"mt-3","btn","btn-outline-secondary",3,"click"]],template:function(t,n){if(t&1&&(l(0,"h2"),s(1,"Multiselect example"),o(),l(2,"div",0)(3,"label",1),s(4,"Multiselect"),o(),l(5,"div",2),a("auFilterTextChange",function(c){return n.onFilterTextChange(c)}),o()(),l(6,"div",3)(7,"strong"),s(8,"Default config"),o(),f(9,"br"),l(10,"label"),s(11," Default filterText: "),l(12,"input",4),a("ngModelChange",function(c){return n.widgetsConfig$.set({select:{filterText:c}})}),C(13,"async"),o()(),f(14,"br"),l(15,"button",5),a("click",function(){return n.filterText=void 0}),s(16,"Reset widget filterText"),o()()),t&2){let i;u(5),d("auItems",n.items)("auFilterText",n.filterText),u(7),d("ngModel",(i=(i=T(13,3,n.widgetsConfig$))==null||i.select==null?null:i.select.filterText)!==null&&i!==void 0?i:"")}},dependencies:[x,M,v,b,F,y],encapsulation:2});let m=r;return m})();export{$ as default};
