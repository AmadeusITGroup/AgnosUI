import{w as _,s as k,m as W,n as F,i as z,t as L}from"./stores-DcYU3NlH.js";import{c as M}from"./baseTransitions-9RuPR60X.js";import{$ as r,ae as P,a0 as j,Z as E}from"./AppCommon-CiJXSMZM.js";import{n as h,r as Z,m as O,a as $,e as q}from"./dom-gfxqXJpK-Bnbemfao.js";import{t as i,c as g,b as C}from"./writables-CgpOQ4hA-xhqmp7zW.js";function G(b,s,d){let u;return s.length==2?(d=d??s[0],u=s.find(c=>c!==d)):s.length>2&&(u=s[0]),u&&b.forEach(c=>{c.stores.id$()!==u&&c.stores.visible$()&&c.patch({visible:!1})}),b}function V(b,s){return b.find(d=>d.stores.id$()===s)}const n={closeOthers:!1,onItemShown:h,onItemHidden:h,className:"",itemDestroyOnHide:!0,itemAnimated:!0,itemTransition:h,itemHeadingTag:"",itemClassName:"",itemHeaderClassName:"",itemButtonClassName:"",itemBodyContainerClassName:"",itemBodyClassName:""},S={id:"",destroyOnHide:n.itemDestroyOnHide,disabled:!1,visible:!1,animated:n.itemAnimated,transition:n.itemTransition,onShown:h,onHidden:h,onVisibleChange:h,className:n.itemClassName,headerClassName:n.itemHeaderClassName,buttonClassName:n.itemButtonClassName,bodyContainerClassName:n.itemBodyContainerClassName,bodyClassName:n.itemBodyClassName,headingTag:n.itemHeadingTag},J=Object.keys(S);function ae(){return{...n}}const K={closeOthers:C,onItemShown:g,onItemHidden:g,className:i,itemDestroyOnHide:C,itemAnimated:C,itemTransition:g,itemClassName:i,itemHeaderClassName:i,itemButtonClassName:i,itemBodyContainerClassName:i,itemBodyClassName:i,itemHeadingTag:i},Q={id:i,destroyOnHide:C,disabled:C,visible:C,animated:C,transition:g,onShown:g,onHidden:g,onVisibleChange:g,className:i,headerClassName:i,buttonClassName:i,bodyContainerClassName:i,bodyClassName:i,headingTag:i};function R(b){const[{bodyClassName$:s,buttonClassName$:d,bodyContainerClassName$:u,headerClassName$:c,animated$:p,transition$:B,destroyOnHide$:T,onShown$:v,onHidden$:N,onVisibleChange$:y,visible$:l,id$:o,disabled$:f,...H},x]=_(S,b,Q),D=P(!1),e=z(o),t=M({props:{transition:B,visible:l,onVisibleChange:y,animated:p,animatedOnInit:!1,initDone:D,onHidden:()=>{N()()},onShown:()=>{v()()}}}),A=r(()=>T()===!1||!t.stores.hidden$()),w=$(()=>({attributes:{id:r(()=>`${e()}-toggle`),"aria-expanded":r(()=>`${l()}`),"aria-disabled":r(()=>`${f()}`),"aria-controls":r(()=>`${e()}-body-container`),disabled:f},classNames:{collapsed:r(()=>!l())},events:{click:()=>{f()||l.update(a=>!a)}}})),I=t.directives.directive,m=$(()=>({attributes:{id:r(()=>`${e()}-body-container`),class:u,"aria-labelledby":r(()=>`${e()}-toggle`)}}));return{...k({visible$:l,id$:e,shouldBeInDOM$:A,disabled$:f,bodyClassName$:s,buttonClassName$:d,bodyContainerClassName$:u,headerClassName$:c,...H}),patch:x,api:{initDone:()=>{D.set(!0)},collapse:()=>{l.set(!1)},expand:()=>{l.set(!0)},toggle:()=>{l.update(a=>!a)}},directives:{toggleDirective:w,buttonDirective:O(w,$(()=>({attributes:{type:E("button"),class:d}}))),headerDirective:$(()=>({attributes:{class:c}})),bodyDirective:$(()=>({attributes:{class:s}})),transitionDirective:I,bodyContainerAttrsDirective:m,bodyContainerDirective:O(I,m),itemDirective:h}}}function U(b=R,s=J,d=n,u=K){return c=>{const[p,B]=_(d,c,u),{closeOthers$:T,onItemShown$:v,onItemHidden$:N,className$:y}=p,l=Object.fromEntries(Object.entries(p).filter(e=>e[0].startsWith("item")).map(e=>[e[0].charAt(4).toLowerCase()+e[0].slice(5,-1),e[1]])),o=Z(),f=r(()=>{const e=[];return o().forEach(t=>{t.stores.visible$()&&e.push(t.stores.id$())}),e}),H=P(f()[0]),x=r(()=>{T()&&(G(o(),f(),H()),H.set(f()[0]))}),D=r(()=>{x()});return{...k({itemWidgets$:o,className$:y}),patch:B,api:{expand:e=>{var t;(t=V(o(),e))==null||t.api.expand()},collapse:e=>{var t;(t=V(o(),e))==null||t.api.collapse()},toggle:e=>{var t;(t=V(o(),e))==null||t.api.toggle()},expandAll:()=>{o().forEach(e=>e.api.expand())},collapseAll:()=>{o().forEach(e=>e.api.collapse())},registerItem:e=>{const t=s,A=W(t,F(t,e==null?void 0:e.config),l),[{onHidden$:w,onShown$:I}]=_({onHidden:S.onHidden,onShown:S.onShown},{config:A,props:e==null?void 0:e.props}),m=b({config:A,props:{...e==null?void 0:e.props,onHidden:j(E(()=>{var a;N()(m.stores.id$()),(a=w())==null||a()}),a=>{N.set(a)}),onShown:j(E(()=>{var a;v()(m.stores.id$()),(a=I())==null||a()}),a=>{v.set(a)})}});return m.directives.itemDirective=O(()=>({destroy:o.register(m)}),$(()=>({attributes:{class:m.stores.className$,id:m.stores.id$}}))),m}},directives:{accordionDirective:O(q(D),$(()=>({attributes:{class:y},classNames:{"au-accordion":L}})))}}}}const se=U();export{se as a,R as c,U as f,ae as g};
