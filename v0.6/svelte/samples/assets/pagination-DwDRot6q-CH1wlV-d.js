import{aa as e}from"./AppCommon-DoiIXO3L.js";import{w as T,y as B,s as G,a as d,h as M}from"./directive-CKEccryv-BlplZHDT.js";import{e as U,f as $,t as m,a as L,b as s,i as V}from"./writables-DCiBdIBK-BHv6xPe-.js";const A="#",S={page:1,collectionSize:0,pageSize:10,disabled:!1,directionLinks:!0,boundaryLinks:!1,onPageChange:M,pagesFactory:(o,n)=>{const f=[];for(let c=1;c<=n;c++)f.push(c);return f},ariaLabel:"Page navigation",activeLabel:"(current)",ariaPageLabel:(o,n)=>`Page ${o} of ${n}`,ariaFirstLabel:"Action link for first page",ariaPreviousLabel:"Action link for previous page",ariaNextLabel:"Action link for next page",ariaLastLabel:"Action link for last page",ariaEllipsisLabel:"Ellipsis page element",ariaLiveLabel:o=>`Current page is ${o}`,className:"",pageLink:o=>A};function R(){return{...S}}const j={page:$,collectionSize:$,pageSize:$,disabled:m,directionLinks:m,boundaryLinks:m,onPageChange:L,pagesFactory:L,ariaLabel:s,activeLabel:s,ariaPageLabel:L,ariaFirstLabel:s,ariaPreviousLabel:s,ariaNextLabel:s,ariaLastLabel:s,ariaLiveLabel:L,className:s,pageLink:L,ariaEllipsisLabel:s};function W(o){const[{page$:n,collectionSize$:f,pageSize$:c,onPageChange$:C,pagesFactory$:D,ariaPageLabel$:z,ariaLiveLabel$:_,pageLink$:E,disabled$:p,ariaFirstLabel$:P,ariaLastLabel$:k,ariaNextLabel$:x,ariaPreviousLabel$:y,...w},H]=T(S,o,j),r=e(()=>{let a=Math.ceil(f()/c());return(!V(a)||a<1)&&(a=1),a}),t=B(n,C,a=>U(a,r(),1)),h=e(()=>D()(t(),r())),g=e(()=>t()===r()||p()),u=e(()=>t()===1||p()),N=e(()=>{const a=z(),i=r();return h().map(F=>a(F,i))}),l=e(()=>{const a=E(),i=r();return Array.from({length:i},(F,I)=>a(I+1))}),v=e(()=>{const a=l(),i=t()-1;return{previous:a.at(i>0?i-1:0),next:a.at(i+1)??a.at(-1)}}),K=e(()=>_()(t(),r()));function b(a,i){l()[a-1]===A&&(i==null||i.preventDefault()),(!i||!(i.ctrlKey||i.metaKey))&&(i==null||i.preventDefault(),t.set(a))}return{...G({pageCount$:r,page$:t,pages$:h,nextDisabled$:g,previousDisabled$:u,pagesLabel$:N,pagesHrefs$:l,directionsHrefs$:v,disabled$:p,ariaFirstLabel$:P,ariaLastLabel$:k,ariaNextLabel$:x,ariaPreviousLabel$:y,ariaLiveLabelText$:K,...w}),patch:H,api:{select(a){t.set(a)},first(){t.set(1)},previous(){t.update(a=>a-1)},next(){t.update(a=>a+1)},last(){t.set(r())}},directives:{pageLink:d(a=>({events:{click:i=>b(a().page,i)},attributes:{"aria-current":e(()=>t()===a().page?"page":void 0),"aria-label":e(()=>N()[a().page-1]),href:e(()=>l()[a().page-1]),tabindex:e(()=>p()?"-1":void 0),"aria-disabled":e(()=>p()?"true":void 0)},classNames:{"au-page":!0}})),pageFirst:d(()=>({events:{click:a=>b(1,a)},attributes:{"aria-label":P,href:e(()=>l()[0]),tabindex:e(()=>u()?"-1":void 0),"aria-disabled":e(()=>u()?"true":void 0)},classNames:{"au-first":!0}})),pagePrev:d(()=>({events:{click:a=>b(t()-1,a)},attributes:{"aria-label":y,href:e(()=>v().previous),tabindex:e(()=>u()?"-1":void 0),"aria-disabled":e(()=>u()?"true":void 0)},classNames:{"au-previous":!0}})),pageNext:d(()=>({events:{click:a=>b(t()+1,a)},attributes:{"aria-label":x,href:e(()=>v().next),tabindex:e(()=>g()?"-1":void 0),"aria-disabled":e(()=>g()?"true":void 0)},classNames:{"au-next":!0}})),pageLast:d(()=>({events:{click:a=>b(r(),a)},attributes:{"aria-label":k,href:e(()=>l().at(-1)),tabindex:e(()=>g()?"-1":void 0),"aria-disabled":e(()=>g()?"true":void 0)},classNames:{"au-last":!0}}))}}}export{W as c,R as g};
