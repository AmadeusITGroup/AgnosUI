import{M as W,r as D,s as A,t as V,u as L,v as z}from"./chunk-OIHYBCJG.js";import"./chunk-KS4K2MOI.js";import"./chunk-5HDSQWAY.js";import{Ab as g,Bb as T,Cb as E,Db as f,Eb as C,Fb as x,Hb as I,La as s,_a as d,ab as v,ba as h,hb as w,ka as c,la as _,lb as r,mb as l,nb as y,pb as b,qb as S,rb as p,zb as P}from"./chunk-NDHFY5LM.js";function k(e,i){e&1&&g(0,"Prev")}function N(e,i){e&1&&g(0,"Next")}function F(e,i){if(e&1&&g(0),e&2){let o=i.displayedPage,t=p();T(t.getPageSymbol(o))}}function B(e,i){if(e&1){let o=b();r(0,"li",7)(1,"div",8)(2,"label",9),g(3,"Page"),l(),r(4,"input",10,0),S("keyup.enter",function(){c(o);let a=P(5),n=p().widget,u=p();return _(u.handleTheChange(a,n))})("blur",function(){c(o);let a=P(5),n=p().widget,u=p();return _(u.handleTheChange(a,n))})("input",function(){c(o);let a=P(5),n=p(2);return _(n.formatInput(a))}),l(),r(6,"span",11),g(7),l()()()}if(e&2){let o=p().state;s(4),v("value",o.page),s(3),E(" of ",o.pages.length,"")}}function M(e,i){if(e&1&&d(0,B,8,2,"li",7),e&2){let o=i.state;w(o.pages.length>0?0:-1)}}var G=/[^0-9]/g,j=(()=>{let i=class i{constructor(){this.customPage=4}getPageSymbol(t){return["A","B","C","D","E","F"][t-1]}formatInput(t){t.value=t.value.replace(G,"")}handleTheChange(t,a){let n=t.value,u=parseInt(n);a.actions.select(u),t.value=a.stores.page$().toString()}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=h({type:i,selectors:[["ng-component"]],standalone:!0,features:[I],decls:11,vars:2,consts:[["i",""],["auPagination","","auCollectionSize","60","auAriaLabel","Page navigation with customized links",3,"auPageChange","auPage"],["auPaginationPrevious",""],["auPaginationNext",""],["auPaginationNumber",""],["auPagination","","auCollectionSize","60","auAriaLabel","Page navigation with customized pages",3,"auPageChange","auPage"],["auPaginationPages",""],[1,"au-custom-pages-item"],[1,"mb-3","d-flex","flex-nowrap","px-2"],["id","paginationInputLabel","for","paginationInput",1,"col-form-label","me-2","ms-1"],["type","text","inputmode","numeric","pattern","[0-9]*","id","paginationInput","aria-labelledby","paginationInputLabel paginationDescription",1,"form-control","custom-pages-input",2,"width","2.5rem",3,"keyup.enter","blur","input","value"],["id","paginationDescription",1,"col-form-label","text-nowrap","px-2"]],template:function(a,n){a&1&&(r(0,"p"),g(1,"A pagination with customized links:"),l(),r(2,"nav",1),x("auPageChange",function(m){return C(n.customPage,m)||(n.customPage=m),m}),d(3,k,1,0,"ng-template",2)(4,N,1,0,"ng-template",3)(5,F,1,1,"ng-template",4),l(),y(6,"hr"),r(7,"p"),g(8,"A pagination with customized pages:"),l(),r(9,"nav",5),x("auPageChange",function(m){return C(n.customPage,m)||(n.customPage=m),m}),d(10,M,1,1,"ng-template",6),l()),a&2&&(s(2),f("auPage",n.customPage),s(7),f("auPage",n.customPage))},dependencies:[W,z,D,A,V,L],encapsulation:2});let e=i;return e})();export{j as default};
