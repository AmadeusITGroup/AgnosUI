import{S as P,y as f}from"./chunk-C5QCM6L5.js";import{X as c,b as h}from"./chunk-IAPE5IF4.js";import"./chunk-BSKWKFW2.js";import{Ib as s,Jb as u,Ka as r,Ya as m,bc as d,jb as g,ub as n,vb as o,zb as l}from"./chunk-X6ZWDPPE.js";var C=typeof window>"u"?h(""):h("",t=>{function e(){let a=location.hash;t(a?a.substring(1):"")}return window.addEventListener("hashchange",e),e(),()=>window.removeEventListener("hashchange",e)});var p=class t{constructor(){this.hash=c(C);this.pageNumber=d(()=>+(this.hash().split("#")[1]??4));this.pageLink=e=>`#${this.hash().split("#")[0]}#${e}`;this.pageChange=e=>location.hash=`#${this.hash().split("#")[0]}#${e}`}static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275cmp=m({type:t,selectors:[["ng-component"]],decls:7,vars:3,consts:[["auPagination","","auCollectionSize","60","auBoundaryLinks","true","auAriaLabel","Page navigation with customized hrefs",3,"auPageChange","auPage","auPageLink"]],template:function(a,i){a&1&&(n(0,"p"),s(1,"A pagination with hrefs provided for each pagination element:"),o(),n(2,"p"),s(3," Page hash: "),n(4,"small"),s(5),o()(),n(6,"nav",0),l("auPageChange",function(v){return i.pageChange(v)}),o()),a&2&&(r(5),u("#"+i.hash()),r(),g("auPage",i.pageNumber())("auPageLink",i.pageLink))},dependencies:[P,f],encapsulation:2})}};export{p as default};
