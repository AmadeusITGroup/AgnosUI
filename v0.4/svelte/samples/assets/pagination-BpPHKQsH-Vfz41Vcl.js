import{a7 as e}from"./AppCommon-EGvQgKwz.js";import{w as H,B as T,s as U,g as f,j,I as G}from"./directive-3-8yr-ZK-C23OGezp.js";import{d as P,t as x,b as v,a as o,i as M,e as q}from"./writables-DoU_XYTX-esNIv65O.js";const z="#",C={page:1,collectionSize:0,pageSize:10,disabled:!1,directionLinks:!0,boundaryLinks:!1,size:null,onPageChange:j,pagesFactory:(t,n)=>{const $=[];for(let p=1;p<=n;p++)$.push(p);return $},ariaLabel:"Page navigation",activeLabel:"(current)",ariaPageLabel:(t,n)=>`Page ${t} of ${n}`,ariaFirstLabel:"Action link for first page",ariaPreviousLabel:"Action link for previous page",ariaNextLabel:"Action link for next page",ariaLastLabel:"Action link for last page",ariaEllipsisLabel:"Ellipsis page element",ariaLiveLabel:(t,n)=>`Current page is ${t}`,className:"",pageLink:t=>z};function W(){return{...C}}const J={page:P,collectionSize:P,pageSize:P,disabled:x,directionLinks:x,boundaryLinks:x,size:{normalizeValue:t=>t==="lg"||t==="sm"||t===null?t:G},onPageChange:v,pagesFactory:v,ariaLabel:o,activeLabel:o,ariaPageLabel:v,ariaFirstLabel:o,ariaPreviousLabel:o,ariaNextLabel:o,ariaLastLabel:o,ariaLiveLabel:v,className:o,pageLink:v};function X(t){const[{page$:n,collectionSize$:$,pageSize$:p,onPageChange$:D,pagesFactory$:S,ariaPageLabel$:_,ariaLiveLabel$:E,pageLink$:I,disabled$:g,ariaFirstLabel$:k,ariaLastLabel$:y,ariaNextLabel$:N,ariaPreviousLabel$:h,...V},w]=H(C,t,J),r=e(()=>{let a=Math.ceil($()/p());return(!M(a)||a<1)&&(a=1),a}),s=T(n,D,a=>q(a,r(),1)),F=e(()=>S()(s(),r())),u=e(()=>s()===r()||g()),b=e(()=>s()===1||g()),A=e(()=>{const a=_(),i=r();return F().map(L=>a(L,i))}),l=e(()=>{const a=I(),i=r();return Array.from({length:i},(L,B)=>a(B+1))}),m=e(()=>{const a=l(),i=s()-1;return{previous:a.at(i>0?i-1:0),next:a.at(i+1)??a.at(-1)}}),K=e(()=>E()(s(),r()));function d(a,i,L){l()[a-1]===z&&(i==null||i.preventDefault()),(!i||!(i.ctrlKey||i.metaKey))&&(i==null||i.preventDefault(),L?s.update(L):s.set(a))}const c={...U({pageCount$:r,page$:s,pages$:F,nextDisabled$:u,previousDisabled$:b,pagesLabel$:A,pagesHrefs$:l,directionsHrefs$:m,disabled$:g,ariaFirstLabel$:k,ariaLastLabel$:y,ariaNextLabel$:N,ariaPreviousLabel$:h,ariaLiveLabelText$:K,...V}),patch:w,actions:{select(a,i){d(a,i)},first(a){d(1,a)},previous(a){d(s()-1,a,i=>i-1)},next(a){d(s()+1,a,i=>i+1)},last(a){d(r(),a)}},api:{},directives:{pageLink:f(a=>({events:{click:i=>c.actions.select(a().page,i)},attributes:{"aria-current":e(()=>s()===a().page?"page":void 0),"aria-label":e(()=>A()[a().page-1]),href:e(()=>l()[a().page-1]),tabindex:e(()=>g()?"-1":void 0),"aria-disabled":e(()=>g()?"true":void 0)},classNames:{"au-page":!0}})),pageFirst:f(()=>({events:{click:a=>c.actions.first(a)},attributes:{"aria-label":k,href:e(()=>l()[0]),tabindex:e(()=>b()?"-1":void 0),"aria-disabled":e(()=>b()?"true":void 0)},classNames:{"au-first":!0}})),pagePrev:f(()=>({events:{click:a=>c.actions.previous(a)},attributes:{"aria-label":h,href:e(()=>m().previous),tabindex:e(()=>b()?"-1":void 0),"aria-disabled":e(()=>b()?"true":void 0)},classNames:{"au-previous":!0}})),pageNext:f(()=>({events:{click:a=>c.actions.next(a)},attributes:{"aria-label":N,href:e(()=>m().next),tabindex:e(()=>u()?"-1":void 0),"aria-disabled":e(()=>u()?"true":void 0)},classNames:{"au-next":!0}})),pageLast:f(()=>({events:{click:a=>c.actions.last(a)},attributes:{"aria-label":y,href:e(()=>l().at(-1)),tabindex:e(()=>u()?"-1":void 0),"aria-disabled":e(()=>u()?"true":void 0)},classNames:{"au-last":!0}}))}};return c}export{X as c,W as g};
