import{b as A,c as s,i as F,w as T,s as N,I as w,n as E}from"./utils-3d1769dc.js";import{d as z,e as m,i as S,t as f,b as u,a as r}from"./writables-e06b6bbb.js";const R=()=>{},V={rating:0,tabindex:0,maxRating:10,disabled:!1,readonly:!1,resettable:!0,ariaValueTextFn:(a,o)=>`${a} out of ${o}`,onHover:R,onLeave:R,onRatingChange:R,className:"",slotStar:({fill:a})=>String.fromCharCode(a===100?9733:9734),ariaLabel:"Rating",ariaLabelledBy:""};function K(){return{...V}}const H={rating:m,tabindex:m,maxRating:{normalizeValue:a=>S(a)?Math.max(0,a):w},disabled:f,readonly:f,resettable:f,ariaValueTextFn:u,onHover:u,onLeave:u,onRatingChange:u,className:r,ariaLabel:r,ariaLabelledBy:r};function j(a){const[{rating$:o,tabindex$:d,ariaValueTextFn$:c,onHover$:v,onLeave$:P,onRatingChange$:y,...$},i]=A(V,a,H),{maxRating$:n,disabled$:l,readonly$:h,resettable$:x}=$,C=s(()=>l()?-1:d()),b=F(y,[o,n],([e,p])=>z(e,p)),t=T(0),g=s(()=>!l()&&!h()),L=s(()=>{const e=b(),p=t();return p!==0?p:e}),_=s(()=>c()(L(),n())),M=s(()=>{const e=L();return Array.from({length:n()},(p,k)=>({fill:Math.round(Math.max(Math.min(e-k,1),0)*100),index:k}))});return{...N({ariaValueText$:_,isInteractive$:g,rating$:b,stars$:M,tabindex$:C,visibleRating$:L,...$}),patch:i,actions:{click:e=>{g()&&e>0&&e<=n()&&i({rating:b()===e&&x()?0:e})},hover:e=>{g()&&e>0&&e<=n()&&(t.set(e),v()(e))},leave:()=>{g()&&(P()(t()),t.set(0))},handleKey(e){if(g()){const{key:p}=e;switch(p){case"ArrowLeft":case"ArrowDown":i({rating:b()-1});break;case"ArrowRight":case"ArrowUp":i({rating:b()+1});break;case"Home":case"PageDown":i({rating:0});break;case"End":case"PageUp":i({rating:n()});break;default:return}e.preventDefault(),e.stopPropagation()}}},directives:{},api:{}}}const D={page:1,collectionSize:0,pageSize:10,disabled:!1,directionLinks:!0,boundaryLinks:!1,size:null,onPageChange:E,pagesFactory:(a,o)=>{const d=[];for(let c=1;c<=o;c++)d.push(c);return d},ariaLabel:"Page navigation",activeLabel:"(current)",ariaPageLabel:(a,o)=>`Page ${a} of ${o}`,ariaFirstLabel:"Action link for first page",ariaPreviousLabel:"Action link for previous page",ariaNextLabel:"Action link for next page",ariaLastLabel:"Action link for last page",className:"",slotEllipsis:"…",slotFirst:"«",slotPrevious:"‹",slotNext:"›",slotLast:"»",slotPages:void 0,slotNumberLabel:({displayedPage:a})=>`${a}`};function q(){return{...D}}const I={page:m,collectionSize:m,pageSize:m,disabled:f,directionLinks:f,boundaryLinks:f,size:{normalizeValue:a=>a==="lg"||a==="sm"||a===null?a:w},onPageChange:u,pagesFactory:u,ariaLabel:r,activeLabel:r,ariaPageLabel:u,ariaFirstLabel:r,ariaPreviousLabel:r,ariaNextLabel:r,ariaLastLabel:r,className:r};function G(a){const[{page$:o,collectionSize$:d,pageSize$:c,onPageChange$:v,pagesFactory$:P,ariaPageLabel$:y,...$},i]=A(D,a,I),n=s(()=>{let t=Math.ceil(d()/c());return(!S(t)||t<1)&&(t=1),t}),l=F(v,[o,n],([t,g])=>z(t,g,1)),h=s(()=>P()(l(),n())),x=s(()=>l()===n()||$.disabled$()),C=s(()=>l()===1||$.disabled$()),b=s(()=>{const t=y(),g=n();return h().map(L=>t(L,g))});return{...N({pageCount$:n,page$:l,pages$:h,nextDisabled$:x,previousDisabled$:C,pagesLabel$:b,...$}),patch:i,actions:{select(t){i({page:t})},first(){i({page:1})},previous(){i({page:l()-1})},next(){i({page:l()+1})},last(){i({page:n()})}},api:{isEllipsis(t){return t===-1}},directives:{}}}export{j as a,q as b,G as c,K as g};
