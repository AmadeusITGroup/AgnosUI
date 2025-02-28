import{a7 as x,a9 as i,W as u}from"./AppCommon-DR1c1M0F.js";import{c as R}from"./navManager-t8ytgHu9.js";import{m as U,a as h,q as V,b as W,n as j}from"./dom-gfxqXJpK-BWIOF16w.js";import{w as B,s as G,t as J}from"./stores--ikXRI1V.js";import{b as f,h as K,t as Q}from"./writables-DCiBdIBK-BDXIYxAp.js";const X={className:"",nodes:[],onExpandToggle:j,navSelector:o=>o.querySelectorAll("button"),ariaLabelToggleFn:o=>`Toggle ${o}`},Y={className:Q,nodes:K,onExpandToggle:f,navSelector:f,ariaLabelToggleFn:f};function ne(o){const[{nodes$:w,onExpandToggle$:T,navSelector$:D,ariaLabelToggleFn$:y,...A},I]=B(X,o,Y),p=new Map,L={get(e){return e.isExpanded}},c=x({}),N=i(()=>(m(),c(),L)),{elementsInDomOrder$:_,directive:$,refreshElements:k,focusIndex:S,focusPrevious:F,focusNext:M,focusFirst:P,focusLast:q}=R(),H=i(()=>({keys:{ArrowUp:F,ArrowDown:M,Home:P,End:q},selector:D()})),g=(e,t,a)=>{var r;const s={...e,ariaLabel:e.ariaLabel??e.label,level:t,children:[],isExpanded:(r=e.children)!=null&&r.length?e.isExpanded??!1:void 0};return p.set(s,{parent:a}),e.children&&(s.children=e.children.map(n=>g(n,t+1,s))),s},m=i(()=>(p.clear(),w().map(e=>g(e,0,void 0)))),v=x(m().find(e=>e.isExpanded!==void 0)),l=e=>{const t=p.get(e);return t||console.error(`Node ${e.label} doesn't exist in the map`),t},O=W((e,t)=>{let a;const r=()=>{a&&a.htmlElement===e&&(a.htmlElement=void 0),a=void 0},s=n=>{r(),a=l(n.item),a&&(a.htmlElement&&console.warn("The tree item directive should be used once per element"),a.htmlElement=e)};return s(t),{update:s,destroy:r}}),b=e=>{var t;if(e){const a=(t=l(e))==null?void 0:t.htmlElement;if(a){const r=_().indexOf(a);S(r,0)}}},z=h(e=>({events:{focus:()=>{const{item:t}=e();v.set(t)},click:()=>{const{item:t}=e();d(t)},keydown:t=>{var a,r;const{key:s}=t,{item:n}=e(),E=n.isExpanded;switch(k(),s){case"Enter":case" ":d(n);break;case"ArrowLeft":E?d(n):b((a=l(n))==null?void 0:a.parent);break;case"ArrowRight":E?b((r=n.children)==null?void 0:r[0]):d(n);break;default:return}t.preventDefault(),t.stopPropagation()}},attributes:{"aria-label":i(()=>{const{item:t}=e();return y()(t.ariaLabel)}),tabindex:i(()=>{const{item:t}=e();return t===v()?"0":"-1"}),type:u("button")},classNames:{"au-tree-expand-icon":J,"au-tree-expand-icon-expanded":i(()=>{c();const{item:t}=e();return t.isExpanded??!1})}})),d=e=>{l(e)===void 0||e.isExpanded===void 0||(e.isExpanded=!e.isExpanded,c.set({}),T()(e))};return{...G({normalizedNodes$:m,expandedMap$:N,...A}),patch:I,api:{},directives:{navigationDirective:V($,H),itemToggleDirective:U(O,z),itemAttributesDirective:h(e=>({attributes:{role:u("treeitem"),"aria-selected":u("false"),"aria-expanded":i(()=>{var t;const{item:a}=e();return c(),(t=a.isExpanded)==null?void 0:t.toString()})}}))}}}export{ne as c};
