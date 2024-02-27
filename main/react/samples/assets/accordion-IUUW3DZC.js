import{r as g,j as d}from"./index-DU6YK2Sv.js";import{w as P,s as R,m as U,n as X}from"./stores-aWURyaCH.js";import{c as Y}from"./baseTransitions-vzF6-t_O.js";import{c as Z}from"./collapse-hyOmdecH.js";import{c as h,w as F,n as f}from"./func-BRtNsj1u.js";import{t as u,a as I,b as m}from"./writables-CLHVz3oO.js";import{r as ee,d as te,b as ie,u as N}from"./directive-C4fYxzsR.js";import{u as W,S as E}from"./config-CEpwxNPi.js";let se=0;function ae(){return`accordion-item-${se++}`}function ne(e,s,o){let r;return s.length==2?(o=o??s[0],r=s.find(a=>a!==o)):s.length>2&&(r=s[0]),r&&e.forEach(a=>{a.state$().itemId!==r&&a.state$().itemVisible&&a.patch({itemVisible:!1})}),e}function S(e,s){return e.find(o=>o.state$().itemId===s)}const i={closeOthers:!1,onShown:f,onHidden:f,className:"",itemId:"",itemDestroyOnHide:!0,itemDisabled:!1,itemVisible:!1,itemAnimation:!0,itemTransition:Z,itemHeadingTag:"",onItemShown:f,onItemHidden:f,onItemVisibleChange:f,slotItemStructure:void 0,slotItemBody:void 0,slotItemHeader:void 0,itemClass:"",itemHeaderClass:"",itemButtonClass:"",itemBodyContainerClass:"",itemBodyClass:""},M={itemId:i.itemId,itemDestroyOnHide:i.itemDestroyOnHide,itemDisabled:i.itemDisabled,itemVisible:i.itemVisible,itemAnimation:i.itemAnimation,itemTransition:i.itemTransition,onItemShown:i.onItemShown,onItemHidden:i.onItemHidden,onItemVisibleChange:i.onItemVisibleChange,slotItemStructure:i.slotItemStructure,slotItemBody:i.slotItemBody,slotItemHeader:i.slotItemHeader,itemClass:i.itemClass,itemHeaderClass:i.itemHeaderClass,itemButtonClass:i.itemButtonClass,itemBodyContainerClass:i.itemBodyContainerClass,itemBodyClass:i.itemBodyClass,itemHeadingTag:i.itemHeadingTag},k=Object.keys(M),oe={closeOthers:u,onShown:I,onHidden:I,itemId:m,itemDestroyOnHide:u,itemDisabled:u,itemVisible:u,itemAnimation:u,itemTransition:I,onItemShown:I,onItemHidden:I,onItemVisibleChange:I,itemClass:m,itemHeaderClass:m,itemButtonClass:m,itemBodyContainerClass:m,itemBodyClass:m,itemHeadingTag:m},re={itemId:m,itemDestroyOnHide:u,itemDisabled:u,itemVisible:u,itemAnimation:u,itemTransition:I,onItemShown:I,onItemHidden:I,onItemVisibleChange:I,itemClass:m,itemHeaderClass:m,itemButtonClass:m,itemBodyContainerClass:m,itemBodyClass:m,itemHeadingTag:m};function me(e,s,o){const[{itemAnimation$:r,itemTransition$:a,itemDestroyOnHide$:c,onItemShown$:p,onItemHidden$:b,onItemVisibleChange$:v,itemVisible$:$,itemId$:A,itemDisabled$:y,...V},w]=P(M,o,re),D=F(!1),T=h(()=>ae()),H=h(()=>A()||T()),O=h(()=>c()===!1||!B.state$().hidden),B=Y({props:{transition:a,visible:$,onVisibleChange:v,animation:r,animationOnInit:!1,initDone:D,onHidden:()=>{s()(H()),b()()},onShown:()=>{e()(H()),p()()}}});return{...R({itemVisible$:$,itemId$:H,shouldBeInDOM$:O,itemDisabled$:y,...V}),patch:w,actions:{click:()=>{y()||$.update(C=>!C)}},api:{initDone:()=>{D.set(!0)},collapse:()=>{$.set(!1)},expand:()=>{$.set(!0)},toggle:()=>{$.update(C=>!C)}},directives:{collapseDirective:ie(B.directives.directive),accordionItemDirective:f}}}function de(e){const[{closeOthers$:s,onShown$:o,onHidden$:r,itemId$:a,itemAnimation$:c,itemClass$:p,itemDisabled$:b,itemVisible$:v,itemTransition$:$,itemDestroyOnHide$:A,itemBodyClass$:y,itemButtonClass$:V,itemBodyContainerClass$:w,itemHeaderClass$:D,itemHeadingTag$:T,onItemVisibleChange$:H,onItemHidden$:O,onItemShown$:B,slotItemStructure$:C,slotItemBody$:z,slotItemHeader$:q,...G},J]=P(i,e,oe),K={itemId:a,itemClass:p,itemAnimation:c,itemDisabled:b,itemVisible:v,itemTransition:$,itemDestroyOnHide:A,itemBodyClass:y,itemButtonClass:V,itemBodyContainerClass:w,itemHeaderClass:D,itemHeadingTag:T,onItemVisibleChange:H,onItemHidden:O,onItemShown:B,slotItemStructure:C,slotItemBody:z,slotItemHeader:q},l=ee(),j=h(()=>{const t=[];return l().forEach(n=>{n.state$().itemVisible&&t.push(n.state$().itemId)}),t}),x=F(j()[0]),L=h(()=>{s()&&(ne(l(),j(),x()),x.set(j()[0]))}),Q=h(()=>{L()});return{...R({itemsWidget$:l,...G}),patch:J,actions:{},api:{isExpanded:t=>{const n=S(l(),t);return n?n.state$().itemVisible:!1},expand:t=>{var n;(n=S(l(),t))==null||n.api.expand()},collapse:t=>{var n;(n=S(l(),t))==null||n.api.collapse()},toggle:t=>{var n;(n=S(l(),t))==null||n.api.toggle()},expandAll:()=>{l().forEach(t=>t.api.expand())},collapseAll:()=>{l().forEach(t=>t.api.collapse())},registerItem:t=>{const n=me(o,r,{config:U(k,X(k,t==null?void 0:t.config),K),props:t==null?void 0:t.props});return n.directives.accordionItemDirective=()=>({destroy:l.register(n)}),n}},directives:{accordionDirective:te(Q)}}}const ce=de,_=g.createContext({}),le=e=>{const s=N(e.widget.directives.collapseDirective),r=new RegExp("^h[1-6]$").test(e.state.itemHeadingTag)?e.state.itemHeadingTag:"h2";return d.jsxs(d.Fragment,{children:[d.jsx(r,{className:`accordion-header ${e.state.itemHeaderClass}`,children:d.jsx("button",{type:"button",id:`${e.state.itemId}-toggle`,onClick:e.widget.actions.click,className:`accordion-button ${e.state.itemButtonClass} ${e.state.itemVisible?"":"collapsed"}`,disabled:e.state.itemDisabled,"aria-controls":`${e.state.itemId}-collapse`,"aria-disabled":e.state.itemDisabled,"aria-expanded":e.state.itemVisible,children:d.jsx(E,{slotContent:e.state.slotItemHeader,props:e})})}),e.state.shouldBeInDOM?d.jsx("div",{className:`accordion-collapse ${e.state.itemBodyContainerClass}`,id:`${e.state.itemId}-collapse`,"aria-labelledby":`${e.state.itemId}-toggle`,ref:s,children:d.jsx("div",{className:`accordion-body ${e.state.itemBodyClass}`,children:d.jsx(E,{slotContent:e.state.slotItemBody,props:e})})}):null]})},Ie={slotItemStructure:le},Ce=g.forwardRef(function(s,o){const{registerItem:r}=g.useContext(_),[a,c]=W(r,s,null,{...Ie}),p={state:a,widget:c},b=N(c.directives.accordionItemDirective);return g.useImperativeHandle(o,()=>c.api,[]),g.useEffect(()=>{c.api.initDone()},[]),d.jsx("div",{className:`accordion-item ${a.itemClass}`,id:a.itemId,ref:b,children:d.jsx(E,{slotContent:a.slotItemStructure,props:p})})}),ye=g.forwardRef(function(s,o){const[r,a]=W(ce,s,"accordion");g.useImperativeHandle(o,()=>a.api,[]);const c=N(a.directives.accordionDirective);return d.jsx(_.Provider,{value:a.api,children:d.jsx("div",{className:`accordion ${r.className}`,ref:c,children:s.children})})});export{ye as A,Ce as a};
