import{M as C,v as P}from"./chunk-7UZCEIVY.js";import{Q as v,b as p}from"./chunk-L7LSTPNE.js";import"./chunk-RIVCGYQY.js";import{$b as f,Bb as r,Cb as d,Ib as c,Ma as h,ba as l,bb as g,mb as n,nb as s,rb as m}from"./chunk-DSSB452B.js";var w=typeof window>"u"?p(""):p("",a=>{function e(){let u=location.hash;a(u?u.substring(1):"")}return window.addEventListener("hashchange",e),e(),()=>window.removeEventListener("hashchange",e)});var M=(()=>{let e=class e{constructor(){this.hash=v(w),this.pageNumber=f(()=>+(this.hash().split("#")[1]??4)),this.pageLink=t=>`#${this.hash().split("#")[0]}#${t}`,this.pageChange=t=>location.hash=`#${this.hash().split("#")[0]}#${t}`}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=l({type:e,selectors:[["ng-component"]],standalone:!0,features:[c],decls:7,vars:3,consts:[["auPagination","","auCollectionSize","60","auBoundaryLinks","true","auAriaLabel","Page navigation with customized hrefs",3,"auPageChange","auPage","auPageLink"]],template:function(i,o){i&1&&(n(0,"p"),r(1,"A pagination with hrefs provided for each pagination element:"),s(),n(2,"p"),r(3," Page hash: "),n(4,"small"),r(5),s()(),n(6,"nav",0),m("auPageChange",function(L){return o.pageChange(L)}),s()),i&2&&(h(5),d("#"+o.hash()),h(),g("auPage",o.pageNumber())("auPageLink",o.pageLink))},dependencies:[C,P],encapsulation:2});let a=e;return a})();export{M as default};
