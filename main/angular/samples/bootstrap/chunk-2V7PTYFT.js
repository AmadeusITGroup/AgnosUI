import{g as S,w}from"./chunk-T5CFNIXS.js";import"./chunk-4S4W4I3Y.js";import{N as P,b as u,d as C}from"./chunk-YL477AAR.js";import"./chunk-4NF4IKIZ.js";import{Cb as h,Db as m,Jb as f,Na as p,ac as v,cb as l,da as g,nb as a,ob as r,sb as c}from"./chunk-WEYJLJHZ.js";var d=typeof window>"u"?u(""):u("",t=>{function e(){let i=location.hash;t(i?i.substring(1):"")}return window.addEventListener("hashchange",e),e(),()=>window.removeEventListener("hashchange",e)}),$=C(()=>{let t=d().split("#").at(-1);(!t||t.at(0)!=="{")&&(t="{}");let{config:e={},props:i={}}=JSON.parse(decodeURIComponent(t));return{config:e,props:i}});var N=(()=>{let e=class e{constructor(){this.hash=P(d),this.pageNumber=v(()=>+(this.hash().split("#")[1]??4)),this.pageLink=n=>`#${this.hash().split("#")[0]}#${n}`,this.pageChange=n=>location.hash=`#${this.hash().split("#")[0]}#${n}`}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=g({type:e,selectors:[["ng-component"]],standalone:!0,features:[f],decls:7,vars:3,consts:[["auPagination","","auCollectionSize","60","auBoundaryLinks","true","auAriaLabel","Page navigation with customized hrefs",3,"auPageChange","auPage","auPageLink"]],template:function(o,s){o&1&&(a(0,"p"),h(1,"A pagination with hrefs provided for each pagination element:"),r(),a(2,"p"),h(3," Page hash: "),a(4,"small"),h(5),r()(),a(6,"nav",0),c("auPageChange",function(y){return s.pageChange(y)}),r()),o&2&&(p(5),m("#"+s.hash()),p(),l("auPage",s.pageNumber())("auPageLink",s.pageLink))},dependencies:[w,S],encapsulation:2});let t=e;return t})();export{N as default};
