import{a9 as e}from"./AppCommon-DR1c1M0F.js";import{w as B,e as G,s as M,t as d}from"./stores--ikXRI1V.js";import{i as U,e as V,t as r,b as L,a as m,f as P}from"./writables-DCiBdIBK-BDXIYxAp.js";import{a as f,n as j}from"./dom-gfxqXJpK-BWIOF16w.js";const S="#",C={page:1,collectionSize:0,pageSize:10,disabled:!1,directionLinks:!0,boundaryLinks:!1,onPageChange:j,pagesFactory:(o,n)=>{const v=[];for(let c=1;c<=n;c++)v.push(c);return v},ariaLabel:"Page navigation",activeLabel:"(current)",ariaPageLabel:(o,n)=>`Page ${o} of ${n}`,ariaFirstLabel:"Action link for first page",ariaPreviousLabel:"Action link for previous page",ariaNextLabel:"Action link for next page",ariaLastLabel:"Action link for last page",ariaEllipsisLabel:"Ellipsis page element",ariaLiveLabel:o=>`Current page is ${o}`,className:"",pageLink:o=>S};function X(){return{...C}}const q={page:P,collectionSize:P,pageSize:P,disabled:m,directionLinks:m,boundaryLinks:m,onPageChange:L,pagesFactory:L,ariaLabel:r,activeLabel:r,ariaPageLabel:L,ariaFirstLabel:r,ariaPreviousLabel:r,ariaNextLabel:r,ariaLastLabel:r,ariaLiveLabel:L,className:r,pageLink:L,ariaEllipsisLabel:r};function Y(o){const[{page$:n,collectionSize$:v,pageSize$:c,onPageChange$:D,pagesFactory$:z,ariaPageLabel$:_,ariaLiveLabel$:E,pageLink$:w,disabled$:p,ariaFirstLabel$:k,ariaLastLabel$:x,ariaNextLabel$:y,ariaPreviousLabel$:N,...H},K]=B(C,o,q),s=e(()=>{let a=Math.ceil(v()/c());return(!U(a)||a<1)&&(a=1),a}),t=G(n,D,a=>V(a,s(),1)),h=e(()=>z()(t(),s())),g=e(()=>t()===s()||p()),b=e(()=>t()===1||p()),F=e(()=>{const a=_(),i=s();return h().map(A=>a(A,i))}),l=e(()=>{const a=w(),i=s();return Array.from({length:i},(A,T)=>a(T+1))}),$=e(()=>{const a=l(),i=t()-1;return{previous:a.at(i>0?i-1:0),next:a.at(i+1)??a.at(-1)}}),I=e(()=>E()(t(),s()));function u(a,i){l()[a-1]===S&&(i==null||i.preventDefault()),(!i||!(i.ctrlKey||i.metaKey))&&(i==null||i.preventDefault(),t.set(a))}return{...M({pageCount$:s,page$:t,pages$:h,nextDisabled$:g,previousDisabled$:b,pagesLabel$:F,pagesHrefs$:l,directionsHrefs$:$,disabled$:p,ariaFirstLabel$:k,ariaLastLabel$:x,ariaNextLabel$:y,ariaPreviousLabel$:N,ariaLiveLabelText$:I,...H}),patch:K,api:{select(a){t.set(a)},first(){t.set(1)},previous(){t.update(a=>a-1)},next(){t.update(a=>a+1)},last(){t.set(s())}},directives:{pageLink:f(a=>({events:{click:i=>u(a().page,i)},attributes:{"aria-current":e(()=>t()===a().page?"page":void 0),"aria-label":e(()=>F()[a().page-1]),href:e(()=>l()[a().page-1]),tabindex:e(()=>p()?"-1":void 0),"aria-disabled":e(()=>p()?"true":void 0)},classNames:{"au-page":d}})),pageFirst:f(()=>({events:{click:a=>u(1,a)},attributes:{"aria-label":k,href:e(()=>l()[0]),tabindex:e(()=>b()?"-1":void 0),"aria-disabled":e(()=>b()?"true":void 0)},classNames:{"au-first":d}})),pagePrev:f(()=>({events:{click:a=>u(t()-1,a)},attributes:{"aria-label":N,href:e(()=>$().previous),tabindex:e(()=>b()?"-1":void 0),"aria-disabled":e(()=>b()?"true":void 0)},classNames:{"au-previous":d}})),pageNext:f(()=>({events:{click:a=>u(t()+1,a)},attributes:{"aria-label":y,href:e(()=>$().next),tabindex:e(()=>g()?"-1":void 0),"aria-disabled":e(()=>g()?"true":void 0)},classNames:{"au-next":d}})),pageLast:f(()=>({events:{click:a=>u(s(),a)},attributes:{"aria-label":x,href:e(()=>l().at(-1)),tabindex:e(()=>g()?"-1":void 0),"aria-disabled":e(()=>g()?"true":void 0)},classNames:{"au-last":d}}))}}}export{Y as c,X as g};
