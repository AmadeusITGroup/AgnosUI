import{S as k,u as A,v as V,w as N,x as z,y as W}from"./chunk-BNWOVH73.js";import"./chunk-DPRLPUF2.js";import"./chunk-BSKWKFW2.js";import{Ab as l,Hb as _,Ib as g,Jb as D,Ka as m,Kb as L,Lb as f,Mb as x,Nb as h,Ra as y,Ya as b,bb as c,ca as s,da as u,jb as w,qb as T,ub as r,vb as p,wb as I,yb as S,zb as E}from"./chunk-X6ZWDPPE.js";function M(a,n){a&1&&g(0,"Prev")}function B(a,n){a&1&&g(0,"Next")}function F(a,n){if(a&1&&g(0),a&2){let e=n.displayedPage,i=l();D(i.getPageSymbol(e))}}function G(a,n){if(a&1){let e=S();r(0,"li",7)(1,"div",8)(2,"label",9),g(3,"Page"),p(),r(4,"input",10,0),E("keyup.enter",function(){s(e);let o=_(5),t=l(),P=t.api,d=t.state,C=l();return u(C.handleTheChange(o,P,d))})("blur",function(){s(e);let o=_(5),t=l(),P=t.api,d=t.state,C=l();return u(C.handleTheChange(o,P,d))})("input",function(){s(e);let o=_(5),t=l(2);return u(t.formatInput(o))}),p(),r(6,"span",11),g(7),p()()()}if(a&2){let e=l().state;m(4),w("value",e.page()),m(3),L(" of ",e.pages().length,"")}}function H(a,n){if(a&1&&c(0,G,8,2,"li",7),a&2){let e=n.state;T(e.pages().length>0?0:-1)}}var R=/[^0-9]/g,v=class a{constructor(){this.customPage=y(4)}getPageSymbol(n){return["A","B","C","D","E","F"][n-1]}formatInput(n){n.value=n.value.replace(R,"")}handleTheChange(n,e,i){let o=n.value,t=parseInt(o);e.select(t),n.value=i.page().toString()}static{this.\u0275fac=function(e){return new(e||a)}}static{this.\u0275cmp=b({type:a,selectors:[["ng-component"]],decls:11,vars:2,consts:[["i",""],["auPagination","","auCollectionSize","60","auAriaLabel","Page navigation with customized links",3,"auPageChange","auPage"],["auPaginationPrevious",""],["auPaginationNext",""],["auPaginationNumber",""],["auPagination","","auCollectionSize","60","auAriaLabel","Page navigation with customized pages",3,"auPageChange","auPage"],["auPaginationPages",""],[1,"au-custom-pages-item"],[1,"mb-3","d-flex","flex-nowrap","px-2"],["id","paginationInputLabel","for","paginationInput",1,"col-form-label","me-2","ms-1"],["type","text","inputmode","numeric","pattern","[0-9]*","id","paginationInput","aria-labelledby","paginationInputLabel paginationDescription",1,"form-control","custom-pages-input",2,"width","2.5rem",3,"keyup.enter","blur","input","value"],["id","paginationDescription",1,"col-form-label","text-nowrap","px-2"]],template:function(e,i){e&1&&(r(0,"p"),g(1,"A pagination with customized links:"),p(),r(2,"nav",1),h("auPageChange",function(t){return x(i.customPage,t)||(i.customPage=t),t}),c(3,M,1,0,"ng-template",2)(4,B,1,0,"ng-template",3)(5,F,1,1,"ng-template",4),p(),I(6,"hr"),r(7,"p"),g(8,"A pagination with customized pages:"),p(),r(9,"nav",5),h("auPageChange",function(t){return x(i.customPage,t)||(i.customPage=t),t}),c(10,H,1,1,"ng-template",6),p()),e&2&&(m(2),f("auPage",i.customPage),m(7),f("auPage",i.customPage))},dependencies:[k,W,A,V,N,z],encapsulation:2})}};export{v as default};
