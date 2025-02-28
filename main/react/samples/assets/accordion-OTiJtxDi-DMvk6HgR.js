import{w as _,s as k,m as W,n as F,i as z,t as L}from"./stores-DmFkKWJa.js";import{c as M}from"./baseTransitions-UDI9iFnP.js";import{n as h,h as q,f as r,w as P,m as O,a as g,j as G,g as E,r as j}from"./dom-gfxqXJpK-C1tLMV8i.js";import{t as i,b as $,a as C}from"./writables-DCiBdIBK-BiZSR1O4.js";function J(b,s,d){let u;return s.length==2?(d=d??s[0],u=s.find(l=>l!==d)):s.length>2&&(u=s[0]),u&&b.forEach(l=>{l.stores.id$()!==u&&l.stores.visible$()&&l.patch({visible:!1})}),b}function V(b,s){return b.find(d=>d.stores.id$()===s)}const n={closeOthers:!1,onItemShown:h,onItemHidden:h,className:"",itemDestroyOnHide:!0,itemAnimated:!0,itemTransition:h,itemHeadingTag:"",itemClassName:"",itemHeaderClassName:"",itemButtonClassName:"",itemBodyContainerClassName:"",itemBodyClassName:""},S={id:"",destroyOnHide:n.itemDestroyOnHide,disabled:!1,visible:!1,animated:n.itemAnimated,transition:n.itemTransition,onShown:h,onHidden:h,onVisibleChange:h,className:n.itemClassName,headerClassName:n.itemHeaderClassName,buttonClassName:n.itemButtonClassName,bodyContainerClassName:n.itemBodyContainerClassName,bodyClassName:n.itemBodyClassName,headingTag:n.itemHeadingTag},K=Object.keys(S);function ie(){return{...n}}const Q={closeOthers:C,onItemShown:$,onItemHidden:$,className:i,itemDestroyOnHide:C,itemAnimated:C,itemTransition:$,itemClassName:i,itemHeaderClassName:i,itemButtonClassName:i,itemBodyContainerClassName:i,itemBodyClassName:i,itemHeadingTag:i},R={id:i,destroyOnHide:C,disabled:C,visible:C,animated:C,transition:$,onShown:$,onHidden:$,onVisibleChange:$,className:i,headerClassName:i,buttonClassName:i,bodyContainerClassName:i,bodyClassName:i,headingTag:i};function U(b){const[{bodyClassName$:s,buttonClassName$:d,bodyContainerClassName$:u,headerClassName$:l,animated$:p,transition$:B,destroyOnHide$:T,onShown$:v,onHidden$:N,onVisibleChange$:y,visible$:c,id$:o,disabled$:f,...H},x]=_(S,b,R),D=P(!1),e=z(o),t=M({props:{transition:B,visible:c,onVisibleChange:y,animated:p,animatedOnInit:!1,initDone:D,onHidden:()=>{N()()},onShown:()=>{v()()}}}),w=r(()=>T()===!1||!t.stores.hidden$()),A=g(()=>({attributes:{id:r(()=>`${e()}-toggle`),"aria-expanded":r(()=>`${c()}`),"aria-disabled":r(()=>`${f()}`),"aria-controls":r(()=>`${e()}-body-container`),disabled:f},classNames:{collapsed:r(()=>!c())},events:{click:()=>{f()||c.update(a=>!a)}}})),I=t.directives.directive,m=g(()=>({attributes:{id:r(()=>`${e()}-body-container`),class:u,"aria-labelledby":r(()=>`${e()}-toggle`)}}));return{...k({visible$:c,id$:e,shouldBeInDOM$:w,disabled$:f,bodyClassName$:s,buttonClassName$:d,bodyContainerClassName$:u,headerClassName$:l,...H}),patch:x,api:{initDone:()=>{D.set(!0)},collapse:()=>{c.set(!1)},expand:()=>{c.set(!0)},toggle:()=>{c.update(a=>!a)}},directives:{toggleDirective:A,buttonDirective:O(A,g(()=>({attributes:{type:j("button"),class:d}}))),headerDirective:g(()=>({attributes:{class:l}})),bodyDirective:g(()=>({attributes:{class:s}})),transitionDirective:I,bodyContainerAttrsDirective:m,bodyContainerDirective:O(I,m),itemDirective:h}}}function X(b=U,s=K,d=n,u=Q){return l=>{const[p,B]=_(d,l,u),{closeOthers$:T,onItemShown$:v,onItemHidden$:N,className$:y}=p,c=Object.fromEntries(Object.entries(p).filter(e=>e[0].startsWith("item")).map(e=>[e[0].charAt(4).toLowerCase()+e[0].slice(5,-1),e[1]])),o=q(),f=r(()=>{const e=[];return o().forEach(t=>{t.stores.visible$()&&e.push(t.stores.id$())}),e}),H=P(f()[0]),x=r(()=>{T()&&(J(o(),f(),H()),H.set(f()[0]))}),D=r(()=>{x()});return{...k({itemWidgets$:o,className$:y}),patch:B,api:{expand:e=>{var t;(t=V(o(),e))==null||t.api.expand()},collapse:e=>{var t;(t=V(o(),e))==null||t.api.collapse()},toggle:e=>{var t;(t=V(o(),e))==null||t.api.toggle()},expandAll:()=>{o().forEach(e=>e.api.expand())},collapseAll:()=>{o().forEach(e=>e.api.collapse())},registerItem:e=>{const t=s,w=W(t,F(t,e==null?void 0:e.config),c),[{onHidden$:A,onShown$:I}]=_({onHidden:S.onHidden,onShown:S.onShown},{config:w,props:e==null?void 0:e.props}),m=b({config:w,props:{...e==null?void 0:e.props,onHidden:E(j(()=>{var a;N()(m.stores.id$()),(a=A())==null||a()}),a=>{N.set(a)}),onShown:E(j(()=>{var a;v()(m.stores.id$()),(a=I())==null||a()}),a=>{v.set(a)})}});return m.directives.itemDirective=O(()=>({destroy:o.register(m)}),g(()=>({attributes:{class:m.stores.className$,id:m.stores.id$}}))),m}},directives:{accordionDirective:O(G(D),g(()=>({attributes:{class:y},classNames:{"au-accordion":L}})))}}}}const ae=X();export{ae as a,U as c,X as f,ie as g};
