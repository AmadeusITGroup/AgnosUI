import{w as H,f as e,K as T,s as U,o as d,n as B,I as G}from"./directive-CKEccryv-DE_yN9bX.js";import{d as M,e as $,t as m,a as L,b as n,i as j}from"./writables-DoU_XYTX-DrmWMgh5.js";const A="#",z={page:1,collectionSize:0,pageSize:10,disabled:!1,directionLinks:!0,boundaryLinks:!1,size:null,onPageChange:B,pagesFactory:(s,o)=>{const f=[];for(let c=1;c<=o;c++)f.push(c);return f},ariaLabel:"Page navigation",activeLabel:"(current)",ariaPageLabel:(s,o)=>`Page ${s} of ${o}`,ariaFirstLabel:"Action link for first page",ariaPreviousLabel:"Action link for previous page",ariaNextLabel:"Action link for next page",ariaLastLabel:"Action link for last page",ariaEllipsisLabel:"Ellipsis page element",ariaLiveLabel:s=>`Current page is ${s}`,className:"",pageLink:s=>A};function R(){return{...z}}const q={page:$,collectionSize:$,pageSize:$,disabled:m,directionLinks:m,boundaryLinks:m,size:{normalizeValue:s=>s==="lg"||s==="sm"||s===null?s:G},onPageChange:L,pagesFactory:L,ariaLabel:n,activeLabel:n,ariaPageLabel:L,ariaFirstLabel:n,ariaPreviousLabel:n,ariaNextLabel:n,ariaLastLabel:n,ariaLiveLabel:L,className:n,pageLink:L};function W(s){const[{page$:o,collectionSize$:f,pageSize$:c,onPageChange$:D,pagesFactory$:S,ariaPageLabel$:C,ariaLiveLabel$:_,pageLink$:E,disabled$:p,ariaFirstLabel$:P,ariaLastLabel$:k,ariaNextLabel$:x,ariaPreviousLabel$:N,...I},w]=H(z,s,q),r=e(()=>{let a=Math.ceil(f()/c());return(!j(a)||a<1)&&(a=1),a}),t=T(o,D,a=>M(a,r(),1)),y=e(()=>S()(t(),r())),g=e(()=>t()===r()||p()),u=e(()=>t()===1||p()),h=e(()=>{const a=C(),i=r();return y().map(F=>a(F,i))}),l=e(()=>{const a=E(),i=r();return Array.from({length:i},(F,V)=>a(V+1))}),v=e(()=>{const a=l(),i=t()-1;return{previous:a.at(i>0?i-1:0),next:a.at(i+1)??a.at(-1)}}),K=e(()=>_()(t(),r()));function b(a,i){l()[a-1]===A&&(i==null||i.preventDefault()),(!i||!(i.ctrlKey||i.metaKey))&&(i==null||i.preventDefault(),t.set(a))}return{...U({pageCount$:r,page$:t,pages$:y,nextDisabled$:g,previousDisabled$:u,pagesLabel$:h,pagesHrefs$:l,directionsHrefs$:v,disabled$:p,ariaFirstLabel$:P,ariaLastLabel$:k,ariaNextLabel$:x,ariaPreviousLabel$:N,ariaLiveLabelText$:K,...I}),patch:w,api:{select(a){t.set(a)},first(){t.set(1)},previous(){t.update(a=>a-1)},next(){t.update(a=>a+1)},last(){t.set(r())}},directives:{pageLink:d(a=>({events:{click:i=>b(a().page,i)},attributes:{"aria-current":e(()=>t()===a().page?"page":void 0),"aria-label":e(()=>h()[a().page-1]),href:e(()=>l()[a().page-1]),tabindex:e(()=>p()?"-1":void 0),"aria-disabled":e(()=>p()?"true":void 0)},classNames:{"au-page":!0}})),pageFirst:d(()=>({events:{click:a=>b(1,a)},attributes:{"aria-label":P,href:e(()=>l()[0]),tabindex:e(()=>u()?"-1":void 0),"aria-disabled":e(()=>u()?"true":void 0)},classNames:{"au-first":!0}})),pagePrev:d(()=>({events:{click:a=>b(t()-1,a)},attributes:{"aria-label":N,href:e(()=>v().previous),tabindex:e(()=>u()?"-1":void 0),"aria-disabled":e(()=>u()?"true":void 0)},classNames:{"au-previous":!0}})),pageNext:d(()=>({events:{click:a=>b(t()+1,a)},attributes:{"aria-label":x,href:e(()=>v().next),tabindex:e(()=>g()?"-1":void 0),"aria-disabled":e(()=>g()?"true":void 0)},classNames:{"au-next":!0}})),pageLast:d(()=>({events:{click:a=>b(r(),a)},attributes:{"aria-label":k,href:e(()=>l().at(-1)),tabindex:e(()=>g()?"-1":void 0),"aria-disabled":e(()=>g()?"true":void 0)},classNames:{"au-last":!0}}))}}}export{W as c,R as g};
