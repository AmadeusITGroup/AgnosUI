import{w as _,s as j,m as P,n as F,t as z,i as L}from"./stores-UZEPS6vP.js";import{c as M}from"./baseTransitions-BKMcrwWQ.js";import{a9 as r,a6 as k,aa as W,W as E}from"./AppCommon-DE0E2XGg.js";import{r as q,m as O,a as g,e as G,n as h}from"./dom-BB9jLllr-DsL3TsuS.js";import{t as $,a as C,b as a}from"./writables-DCiBdIBK-BvUcp8gb.js";function J(f,s,d){let u;return s.length==2?(d=d??s[0],u=s.find(l=>l!==d)):s.length>2&&(u=s[0]),u&&f.forEach(l=>{l.stores.id$()!==u&&l.stores.visible$()&&l.patch({visible:!1})}),f}function V(f,s){return f.find(d=>d.stores.id$()===s)}const o={closeOthers:!1,onItemShown:h,onItemHidden:h,className:"",itemDestroyOnHide:!0,itemAnimated:!0,itemTransition:h,itemHeadingTag:"",itemClassName:"",itemHeaderClassName:"",itemButtonClassName:"",itemBodyContainerClassName:"",itemBodyClassName:""},S={id:"",destroyOnHide:o.itemDestroyOnHide,disabled:!1,visible:!1,animated:o.itemAnimated,transition:o.itemTransition,onShown:h,onHidden:h,onVisibleChange:h,className:o.itemClassName,headerClassName:o.itemHeaderClassName,buttonClassName:o.itemButtonClassName,bodyContainerClassName:o.itemBodyContainerClassName,bodyClassName:o.itemBodyClassName,headingTag:o.itemHeadingTag},K=Object.keys(S);function ie(){return{...o}}const Q={closeOthers:$,onItemShown:C,onItemHidden:C,className:a,itemDestroyOnHide:$,itemAnimated:$,itemTransition:C,itemClassName:a,itemHeaderClassName:a,itemButtonClassName:a,itemBodyContainerClassName:a,itemBodyClassName:a,itemHeadingTag:a},R={id:a,destroyOnHide:$,disabled:$,visible:$,animated:$,transition:C,onShown:C,onHidden:C,onVisibleChange:C,className:a,headerClassName:a,buttonClassName:a,bodyContainerClassName:a,bodyClassName:a,headingTag:a};function U(f){const[{bodyClassName$:s,buttonClassName$:d,bodyContainerClassName$:u,headerClassName$:l,animated$:p,transition$:B,destroyOnHide$:T,onShown$:N,onHidden$:v,onVisibleChange$:y,visible$:c,id$:n,disabled$:b,...H},x]=_(S,f,R),D=k(!1),e=L(n),t=M({props:{transition:B,visible:c,onVisibleChange:y,animated:p,animatedOnInit:!1,initDone:D,onHidden:()=>{v()()},onShown:()=>{N()()}}}),A=r(()=>T()===!1||!t.stores.hidden$()),w=g(()=>({attributes:{id:r(()=>`${e()}-toggle`),"aria-expanded":r(()=>`${c()}`),"aria-disabled":r(()=>`${b()}`),"aria-controls":r(()=>`${e()}-body-container`),disabled:b},classNames:{collapsed:r(()=>!c())},events:{click:()=>{b()||c.update(i=>!i)}}})),I=t.directives.directive,m=g(()=>({attributes:{id:r(()=>`${e()}-body-container`),class:u,"aria-labelledby":r(()=>`${e()}-toggle`)}}));return{...j({visible$:c,id$:e,shouldBeInDOM$:A,disabled$:b,bodyClassName$:s,buttonClassName$:d,bodyContainerClassName$:u,headerClassName$:l,...H}),patch:x,api:{initDone:()=>{D.set(!0)},collapse:()=>{c.set(!1)},expand:()=>{c.set(!0)},toggle:()=>{c.update(i=>!i)}},directives:{toggleDirective:w,buttonDirective:O(w,g(()=>({attributes:{type:E("button"),class:d}}))),headerDirective:g(()=>({attributes:{class:l}})),bodyDirective:g(()=>({attributes:{class:s}})),transitionDirective:I,bodyContainerAttrsDirective:m,bodyContainerDirective:O(I,m),itemDirective:h}}}function X(f=U,s=K,d=o,u=Q){return l=>{const[p,B]=_(d,l,u),{closeOthers$:T,onItemShown$:N,onItemHidden$:v,className$:y}=p,c=Object.fromEntries(Object.entries(p).filter(e=>e[0].startsWith("item")).map(e=>[e[0].charAt(4).toLowerCase()+e[0].slice(5,-1),e[1]])),n=q(),b=r(()=>{const e=[];return n().forEach(t=>{t.stores.visible$()&&e.push(t.stores.id$())}),e}),H=k(b()[0]),x=r(()=>{T()&&(J(n(),b(),H()),H.set(b()[0]))}),D=r(()=>{x()});return{...j({itemWidgets$:n,className$:y}),patch:B,api:{expand:e=>{var t;(t=V(n(),e))==null||t.api.expand()},collapse:e=>{var t;(t=V(n(),e))==null||t.api.collapse()},toggle:e=>{var t;(t=V(n(),e))==null||t.api.toggle()},expandAll:()=>{n().forEach(e=>e.api.expand())},collapseAll:()=>{n().forEach(e=>e.api.collapse())},registerItem:e=>{const t=s,A=P(t,F(t,e==null?void 0:e.config),c),[{onHidden$:w,onShown$:I}]=_({onHidden:S.onHidden,onShown:S.onShown},{config:A,props:e==null?void 0:e.props}),m=f({config:A,props:{...e==null?void 0:e.props,onHidden:W(E(()=>{var i;v()(m.stores.id$()),(i=w())==null||i()}),i=>{v.set(i)}),onShown:W(E(()=>{var i;N()(m.stores.id$()),(i=I())==null||i()}),i=>{N.set(i)})}});return m.directives.itemDirective=O(()=>({destroy:n.register(m)}),g(()=>({attributes:{class:m.stores.className$,id:m.stores.id$}}))),m}},directives:{accordionDirective:O(G(D),g(()=>({attributes:{class:y},classNames:{"au-accordion":z}})))}}}}const se=X();export{se as a,U as c,X as f,ie as g};
