import{r as x,j as D}from"./App-kURn6ZdU.js";import{u as V}from"./config-CUsHb1fo.js";import{c as H}from"./baseTransitions-D0AhdupM.js";import{w as I,i as S,s as y,t as z}from"./stores-CrOGt1RN.js";import{d as O,b as d,a as p,m as T,n as s}from"./dom-gfxqXJpK-CN0vfJPb.js";import{a as m,b as a,c as n}from"./writables-CgpOQ4hA-a53iZWzs.js";import{a as W,c as j}from"./collapse-CVjUhnIz-Cjz8foiY.js";import{a as F}from"./directive-CEErjM5c-Dk1b-mUk.js";const N={visible:!0,horizontal:!1,onVisibleChange:s,onShown:s,onHidden:s,animated:!0,animatedOnInit:!1,className:"",id:""},E={horizontal:a,onVisibleChange:n,onHidden:n,onShown:n,animatedOnInit:a,animated:a,className:m,visible:a,id:m};function P(i){const[{animatedOnInit$:t,animated$:o,visible$:u,onVisibleChange$:h,onHidden$:v,onShown$:b,horizontal$:r,id$:f,...g},$]=I(N,i,E),l=S(f),C=O(d(()=>r()?W:j)),e=H({props:{transition:C,visible:u,animated:o,animatedOnInit:t,onVisibleChange:h,onHidden:v,onShown:b}}),c=e.stores.visible$,w=e.stores.hidden$;return{...y({...g,visible$:c,hidden$:w,horizontal$:r}),patch:$,api:{open:e.api.show,close:e.api.hide,toggle:e.api.toggle},directives:{collapseDirective:T(e.directives.directive,p(()=>({attributes:{id:l},classNames:{"au-collapse":z}}))),triggerDirective:p(()=>({attributes:{"aria-expanded":d(()=>`${c()}`),"aria-controls":l},events:{click:()=>e.api.toggle()}}))}}}const _=P;function L(i){const{api:t,directives:o}=V(_,i,"collapse");return x.useImperativeHandle(i.ref,()=>t,[t]),D.jsx("div",{...F(o.collapseDirective),children:i.children})}export{L as C};
