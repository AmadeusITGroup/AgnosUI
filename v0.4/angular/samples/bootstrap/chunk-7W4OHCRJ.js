import{A as U,B,M as L,z as M}from"./chunk-7UZCEIVY.js";import"./chunk-L7LSTPNE.js";import"./chunk-RIVCGYQY.js";import{$a as g,Bb as m,Cb as u,Ib as P,Ka as C,Ma as s,a as f,ab as _,b,ba as S,bb as T,g as h,ib as I,jb as k,ka as v,kb as y,la as w,lb as F,mb as c,nb as r,qb as E,rb as x,sb as d}from"./chunk-DSSB452B.js";function z(e,t){let n;return(...i)=>{n&&clearTimeout(n),n=setTimeout(()=>{e(...i)},t)}}var A=e=>{let t;return(...n)=>(t?.abort(),t=new AbortController,e(t.signal,...n))};function D(e,t){if(e&1){let n=E();c(0,"a",5),m(1),r(),c(2,"button",6),x("click",function(a){let o=v(n),p=o.itemContext,l=o.widget;return w(l.actions.onRemoveBadgeClick(a,p.item))}),r()}if(e&2){let n=t.itemContext,i=d();_("href",i.basePageUrl+n.item.pageid,C),s(),u(n.item.title)}}function O(e,t){if(e&1&&(c(0,"div",4),m(1),r(),c(2,"div",7),m(3),r()),e&2){let n=t.itemContext;s(),u(n.item.title),s(2),u(n.item.snippet)}}function q(e,t){if(e&1&&(c(0,"a",8),m(1),r()),e&2){let n=t.$implicit,i=d(2);_("href",i.basePageUrl+n.pageid,C),s(),u(n.title)}}function N(e,t){if(e&1&&y(0,q,2,2,"a",8,k),e&2){let n=d();F(n.selected)}}function V(e,t){e&1&&m(0," none ")}var j=new Intl.Collator("en").compare;function H(e){let t=document.createElement("div");return t.innerHTML=e,t.innerText}var Q=(()=>{let t=class t{constructor(){this.basePageUrl="https://en.wikipedia.org/?curid=",this.items=[],this.selected=[],this.onFilterTextChange=z(A((i,a)=>h(this,null,function*(){let p=yield(yield fetch("https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=5&srsearch="+a,{signal:i})).json();this.items=p.query?.search.map(l=>b(f({},l),{snippet:H(l.snippet)}))??[]})),200)}itemIdFn(i){return"page-"+i.pageid}navSelector(i){return i.querySelectorAll("a,button,input")}onSelectedChange(i){this.selected=(i||[]).sort((a,o)=>j(a.title,o.title))}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=S({type:t,selectors:[["ng-component"]],standalone:!0,features:[P],decls:8,vars:4,consts:[[1,"custom-select","my-auto","mb-3"],["auSelect","","auBadgeClassName","badge text-bg-light d-flex align-items-center",3,"auFilterTextChange","auSelectedChange","auItems","auItemIdFn","auNavSelector"],["auSelectBadgeLabel",""],["auSelectItemLabel",""],[1,"fw-bold"],["target","_blank","rel","noreferrer"],["type","button","aria-label","Close",1,"btn-close","ms-1","wiki-btn-close",3,"click"],[1,"text-wrap","wiki-desc"],[1,"pe-2"]],template:function(a,o){a&1&&(c(0,"div",0)(1,"div",1),x("auFilterTextChange",function(l){return o.onFilterTextChange(l)})("auSelectedChange",function(l){return o.onSelectedChange(l)}),g(2,D,3,2,"ng-template",2)(3,O,4,2,"ng-template",3),r(),c(4,"span",4),m(5,"Selection: "),r(),g(6,N,2,0)(7,V,1,0),r()),a&2&&(s(),T("auItems",o.items)("auItemIdFn",o.itemIdFn)("auNavSelector",o.navSelector),s(5),I(o.selected.length?6:7))},dependencies:[L,B,M,U],styles:[".custom-select[_ngcontent-%COMP%]{max-width:500px;height:400px}.au-select[_ngcontent-%COMP%]   .wiki-desc[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;-moz-box-orient:vertical;display:-webkit-box;-webkit-line-clamp:2}.wiki-btn-close[_ngcontent-%COMP%]{font-size:10px}"]});let e=t;return e})();export{Q as default};
