import{f as e,a as b,n as B}from"./dom-BB9jLllr-Cs0LnZpg.js";import{w as G,d as M,s as U,t as f}from"./stores-BWu8V2zY.js";import{i as V,e as j,f as m,t as P,a as L,b as r}from"./writables-DCiBdIBK-DMDym_DM.js";const S="#",C={page:1,collectionSize:0,pageSize:10,disabled:!1,directionLinks:!0,boundaryLinks:!1,onPageChange:B,pagesFactory:(n,o)=>{const $=[];for(let c=1;c<=o;c++)$.push(c);return $},ariaLabel:"Page navigation",activeLabel:"(current)",ariaPageLabel:(n,o)=>`Page ${n} of ${o}`,ariaFirstLabel:"Action link for first page",ariaPreviousLabel:"Action link for previous page",ariaNextLabel:"Action link for next page",ariaLastLabel:"Action link for last page",ariaEllipsisLabel:"Ellipsis page element",ariaLiveLabel:n=>`Current page is ${n}`,className:"",pageLink:n=>S};function W(){return{...C}}const q={page:m,collectionSize:m,pageSize:m,disabled:P,directionLinks:P,boundaryLinks:P,onPageChange:L,pagesFactory:L,ariaLabel:r,activeLabel:r,ariaPageLabel:L,ariaFirstLabel:r,ariaPreviousLabel:r,ariaNextLabel:r,ariaLastLabel:r,ariaLiveLabel:L,className:r,pageLink:L,ariaEllipsisLabel:r};function X(n){const[{page$:o,collectionSize$:$,pageSize$:c,onPageChange$:D,pagesFactory$:z,ariaPageLabel$:_,ariaLiveLabel$:E,pageLink$:w,disabled$:u,ariaFirstLabel$:k,ariaLastLabel$:x,ariaNextLabel$:y,ariaPreviousLabel$:N,...H},K]=G(C,n,q),s=e(()=>{let a=Math.ceil($()/c());return(!V(a)||a<1)&&(a=1),a}),t=M(o,D,a=>j(a,s(),1)),h=e(()=>z()(t(),s())),p=e(()=>t()===s()||u()),d=e(()=>t()===1||u()),F=e(()=>{const a=_(),i=s();return h().map(A=>a(A,i))}),l=e(()=>{const a=w(),i=s();return Array.from({length:i},(A,T)=>a(T+1))}),v=e(()=>{const a=l(),i=t()-1;return{previous:a.at(i>0?i-1:0),next:a.at(i+1)??a.at(-1)}}),I=e(()=>E()(t(),s()));function g(a,i){l()[a-1]===S&&(i==null||i.preventDefault()),(!i||!(i.ctrlKey||i.metaKey))&&(i==null||i.preventDefault(),t.set(a))}return{...U({pageCount$:s,page$:t,pages$:h,nextDisabled$:p,previousDisabled$:d,pagesLabel$:F,pagesHrefs$:l,directionsHrefs$:v,disabled$:u,ariaFirstLabel$:k,ariaLastLabel$:x,ariaNextLabel$:y,ariaPreviousLabel$:N,ariaLiveLabelText$:I,...H}),patch:K,api:{select(a){t.set(a)},first(){t.set(1)},previous(){t.update(a=>a-1)},next(){t.update(a=>a+1)},last(){t.set(s())}},directives:{pageLink:b(a=>({events:{click:i=>g(a().page,i)},attributes:{"aria-current":e(()=>t()===a().page?"page":void 0),"aria-label":e(()=>F()[a().page-1]),href:e(()=>l()[a().page-1]),tabindex:e(()=>u()?"-1":void 0),"aria-disabled":e(()=>u()?"true":void 0)},classNames:{"au-page":f}})),pageFirst:b(()=>({events:{click:a=>g(1,a)},attributes:{"aria-label":k,href:e(()=>l()[0]),tabindex:e(()=>d()?"-1":void 0),"aria-disabled":e(()=>d()?"true":void 0)},classNames:{"au-first":f}})),pagePrev:b(()=>({events:{click:a=>g(t()-1,a)},attributes:{"aria-label":N,href:e(()=>v().previous),tabindex:e(()=>d()?"-1":void 0),"aria-disabled":e(()=>d()?"true":void 0)},classNames:{"au-previous":f}})),pageNext:b(()=>({events:{click:a=>g(t()+1,a)},attributes:{"aria-label":y,href:e(()=>v().next),tabindex:e(()=>p()?"-1":void 0),"aria-disabled":e(()=>p()?"true":void 0)},classNames:{"au-next":f}})),pageLast:b(()=>({events:{click:a=>g(s(),a)},attributes:{"aria-label":x,href:e(()=>l().at(-1)),tabindex:e(()=>p()?"-1":void 0),"aria-disabled":e(()=>p()?"true":void 0)},classNames:{"au-last":f}}))}}}export{X as c,W as g};
