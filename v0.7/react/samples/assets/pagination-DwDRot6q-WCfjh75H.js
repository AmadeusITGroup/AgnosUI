import{w as I,g as e,G as T,s as B,a as d,n as M}from"./directive-CKEccryv-BEge1hNH.js";import{i as U,e as V,f as $,t as P,a as L,b as r}from"./writables-DCiBdIBK-B6teIxy4.js";const A="#",S={page:1,collectionSize:0,pageSize:10,disabled:!1,directionLinks:!0,boundaryLinks:!1,onPageChange:M,pagesFactory:(l,o)=>{const f=[];for(let c=1;c<=o;c++)f.push(c);return f},ariaLabel:"Page navigation",activeLabel:"(current)",ariaPageLabel:(l,o)=>`Page ${l} of ${o}`,ariaFirstLabel:"Action link for first page",ariaPreviousLabel:"Action link for previous page",ariaNextLabel:"Action link for next page",ariaLastLabel:"Action link for last page",ariaEllipsisLabel:"Ellipsis page element",ariaLiveLabel:l=>`Current page is ${l}`,className:"",pageLink:l=>A};function Q(){return{...S}}const j={page:$,collectionSize:$,pageSize:$,disabled:P,directionLinks:P,boundaryLinks:P,onPageChange:L,pagesFactory:L,ariaLabel:r,activeLabel:r,ariaPageLabel:L,ariaFirstLabel:r,ariaPreviousLabel:r,ariaNextLabel:r,ariaLastLabel:r,ariaLiveLabel:L,className:r,pageLink:L,ariaEllipsisLabel:r};function R(l){const[{page$:o,collectionSize$:f,pageSize$:c,onPageChange$:C,pagesFactory$:D,ariaPageLabel$:z,ariaLiveLabel$:_,pageLink$:E,disabled$:p,ariaFirstLabel$:m,ariaLastLabel$:k,ariaNextLabel$:x,ariaPreviousLabel$:y,...w},H]=I(S,l,j),s=e(()=>{let a=Math.ceil(f()/c());return(!U(a)||a<1)&&(a=1),a}),t=T(o,C,a=>V(a,s(),1)),N=e(()=>D()(t(),s())),g=e(()=>t()===s()||p()),u=e(()=>t()===1||p()),h=e(()=>{const a=z(),i=s();return N().map(F=>a(F,i))}),n=e(()=>{const a=E(),i=s();return Array.from({length:i},(F,G)=>a(G+1))}),v=e(()=>{const a=n(),i=t()-1;return{previous:a.at(i>0?i-1:0),next:a.at(i+1)??a.at(-1)}}),K=e(()=>_()(t(),s()));function b(a,i){n()[a-1]===A&&(i==null||i.preventDefault()),(!i||!(i.ctrlKey||i.metaKey))&&(i==null||i.preventDefault(),t.set(a))}return{...B({pageCount$:s,page$:t,pages$:N,nextDisabled$:g,previousDisabled$:u,pagesLabel$:h,pagesHrefs$:n,directionsHrefs$:v,disabled$:p,ariaFirstLabel$:m,ariaLastLabel$:k,ariaNextLabel$:x,ariaPreviousLabel$:y,ariaLiveLabelText$:K,...w}),patch:H,api:{select(a){t.set(a)},first(){t.set(1)},previous(){t.update(a=>a-1)},next(){t.update(a=>a+1)},last(){t.set(s())}},directives:{pageLink:d(a=>({events:{click:i=>b(a().page,i)},attributes:{"aria-current":e(()=>t()===a().page?"page":void 0),"aria-label":e(()=>h()[a().page-1]),href:e(()=>n()[a().page-1]),tabindex:e(()=>p()?"-1":void 0),"aria-disabled":e(()=>p()?"true":void 0)},classNames:{"au-page":!0}})),pageFirst:d(()=>({events:{click:a=>b(1,a)},attributes:{"aria-label":m,href:e(()=>n()[0]),tabindex:e(()=>u()?"-1":void 0),"aria-disabled":e(()=>u()?"true":void 0)},classNames:{"au-first":!0}})),pagePrev:d(()=>({events:{click:a=>b(t()-1,a)},attributes:{"aria-label":y,href:e(()=>v().previous),tabindex:e(()=>u()?"-1":void 0),"aria-disabled":e(()=>u()?"true":void 0)},classNames:{"au-previous":!0}})),pageNext:d(()=>({events:{click:a=>b(t()+1,a)},attributes:{"aria-label":x,href:e(()=>v().next),tabindex:e(()=>g()?"-1":void 0),"aria-disabled":e(()=>g()?"true":void 0)},classNames:{"au-next":!0}})),pageLast:d(()=>({events:{click:a=>b(s(),a)},attributes:{"aria-label":k,href:e(()=>n().at(-1)),tabindex:e(()=>g()?"-1":void 0),"aria-disabled":e(()=>g()?"true":void 0)},classNames:{"au-last":!0}}))}}}export{R as c,Q as g};
