import{ag as W,aa as _,p as y,g as x,d as L,b as T,a as I,t as D,k as U,s as V,q as E,n as ae,c as j,P as G,l as O,L as J,v as re,f as ie,x as k,O as P}from"./AppCommon-DEH8RU-G.js";import{S as N}from"./Slot-wDo5Mtvg.js";import{c as ne}from"./config-B4Vdu6jy.js";import{c as se}from"./navManager-CDWJ2gS4.js";import{w as oe,s as le,B as ce,m as de,a as R,h as ue,b as me,c as ve}from"./directive-CKEccryv-DBKI-Evx.js";import{b as ge,h as pe,a as C}from"./writables-DCiBdIBK-Dm1-Wnpb.js";import{e as fe}from"./extendWidget-DqMS619R.js";import{a as S}from"./actions-CP4C70UC.js";import"./snippet-nVqf6gO5.js";import"./config-DEaKTmPq.js";import"./index-client-BxXxtrCi.js";const be={className:"",nodes:[],onExpandToggle:ue,navSelector:r=>r.querySelectorAll("button"),ariaLabelToggleFn:r=>`Toggle ${r}`},he={className:ge,nodes:pe,onExpandToggle:C,navSelector:C,ariaLabelToggleFn:C};function xe(r){const[{nodes$:e,onExpandToggle$:s,navSelector$:o,ariaLabelToggleFn$:l,...c},v]=oe(be,r,he),d=new Map,u={get(t){return t.isExpanded}},i=W({}),m=_(()=>(F(),i(),u)),{elementsInDomOrder$:g,directive:p,refreshElements:w,focusIndex:K,focusPrevious:Q,focusNext:X,focusFirst:Y,focusLast:Z}=se(),$=_(()=>({keys:{ArrowUp:Q,ArrowDown:X,Home:Y,End:Z},selector:o()})),q=(t,a,n)=>{var f;const b={...t,ariaLabel:t.ariaLabel??t.label,level:a,children:[],isExpanded:(f=t.children)!=null&&f.length?t.isExpanded??!1:void 0};return d.set(b,{parent:n}),t.children&&(b.children=t.children.map(h=>q(h,a+1,b))),b},F=_(()=>(d.clear(),e().map(t=>q(t,0,void 0)))),z=W(F()[0]),A=t=>{const a=d.get(t);return a||console.error(`Node ${t.label} doesn't exist in the map`),a},ee=me((t,a)=>{let n;const f=()=>{n&&n.htmlElement===t&&(n.htmlElement=void 0),n=void 0},b=h=>{f(),n=A(h.item),n&&(n.htmlElement&&console.warn("The tree item directive should be used once per element"),n.htmlElement=t)};return b(a),{update:b,destroy:f}}),B=t=>{var a;if(t){const n=(a=A(t))==null?void 0:a.htmlElement;if(n){const f=g().indexOf(n);K(f,0)}}},te=R(t=>({events:{focus:()=>{const{item:a}=t();z.set(a)},click:()=>{const{item:a}=t();M(a)},keydown:a=>{var n,f;const{key:b}=a,{item:h}=t(),H=h.isExpanded;switch(w(),b){case"ArrowLeft":H?M(h):B((n=A(h))==null?void 0:n.parent);break;case"ArrowRight":H?B((f=h.children)==null?void 0:f[0]):M(h);break;default:return}a.preventDefault(),a.stopPropagation()}},attributes:{"aria-label":_(()=>{const{item:a}=t();return l()(a.ariaLabel)}),tabindex:_(()=>{const{item:a}=t();return a===z()?"0":"-1"}),type:"button"},classNames:{"au-tree-expand-icon":!0,"au-tree-expand-icon-expanded":_(()=>{i();const{item:a}=t();return a.isExpanded??!1})}})),M=t=>{A(t)===void 0||t.isExpanded===void 0||(t.isExpanded=!t.isExpanded,i.set({}),s()(t))};return{...le({normalizedNodes$:F,expandedMap$:m,...c}),patch:v,api:{},directives:{navigationDirective:ce(p,$),itemToggleDirective:de(ee,te),itemAttributesDirective:R(t=>({attributes:{role:"treeitem","aria-selected":"false","aria-expanded":_(()=>{var a;const{item:n}=t();return i(),(a=n.isExpanded)==null?void 0:a.toString()})}}))}}}const _e={structure:void 0,item:void 0,itemContent:void 0,itemToggle:void 0},Te=fe(xe,_e,{structure:void 0,item:void 0,itemContent:void 0,itemToggle:void 0}),Ee=Te;var we=D('<span class="au-tree-item"><!> </span>');function De(r,e){y(e,!0);var s=we(),o=U(s),l=E(()=>({item:e.item,state:e.state,api:e.api,directives:e.directives}));N(o,{get content(){return e.state.itemToggle},get props(){return x(l)}});var c=V(o);L(()=>ae(c,` ${e.item.label??""}`)),T(r,s),I()}var Ne=D('<ul role="group"></ul>'),ye=D("<li><!> <!></li>");function Ie(r,e){y(e,!0);var s=ye();const o=E(()=>({}));let l;var c=U(s),v=E(()=>({item:e.item,state:e.state,api:e.api,directives:e.directives}));N(c,{get content(){return e.state.itemContent},get props(){return x(v)}});var d=V(c,2);{var u=i=>{var m=Ne();G(m,23,()=>e.item.children,(g,p)=>g.label+g.level+p,(g,p)=>{var w=E(()=>({item:x(p),state:e.state,api:e.api,directives:e.directives}));N(g,{get content(){return e.state.item},get props(){return x(w)}})}),T(i,m)};j(d,i=>{e.state.expandedMap.get(e.item)&&i(u)})}S(s,(i,m)=>{var g,p;return(p=(g=e.directives).itemAttributesDirective)==null?void 0:p.call(g,i,m)},()=>({item:e.item})),L(()=>l=O(s,l,{...x(o)})),T(r,s),I()}var Ae=D("<ul></ul>");function Se(r,e){y(e,!0);let s=J(e,["$$slots","$$events","$$legacy"]),{state:o,directives:l}=s;var c=Ae();const v=E(()=>({}));let d;G(c,23,()=>o.normalizedNodes,(u,i)=>u.label+u.level+i,(u,i)=>{var m=E(()=>({item:x(i),...s}));N(u,{get content(){return o.item},get props(){return x(m)}})}),S(c,(u,i)=>{var m;return(m=ve)==null?void 0:m(u,i)},()=>"au-tree "+o.className),S(c,u=>{var i;return(i=l.navigationDirective)==null?void 0:i.call(l,u)}),L(()=>d=O(c,d,{role:"tree",...x(v)})),T(r,c),I()}var Le=D('<button><span class="au-tree-expand-icon-svg"></span></button>'),ke=D('<span class="au-tree-expand-icon-placeholder"></span>');function Pe(r,e){y(e,!0);var s=re(),o=ie(s);{var l=v=>{var d=Le();const u=E(()=>({}));let i;S(d,(m,g)=>{var p,w;return(w=(p=e.directives).itemToggleDirective)==null?void 0:w.call(p,m,g)},()=>({item:e.item})),L(()=>i=O(d,i,{...x(u)})),T(v,d)},c=v=>{var d=ke();T(v,d)};j(o,v=>{e.item.children.length>0?v(l):v(c,!1)})}T(r,s),I()}const Fe=(r,e=P)=>{Se(r,k(e))},Me=(r,e=P)=>{Ie(r,k(e))},Ce=(r,e=P)=>{De(r,k(e))},Oe=(r,e=P)=>{Pe(r,k(e))};function qe(r,e){y(e,!0);let s=J(e,["$$slots","$$events","$$legacy"]);const o=ne({factory:Ee,widgetName:"tree",props:s,enablePatchChanged:!0,defaultConfig:{structure:Fe,item:Me,itemContent:Ce,itemToggle:Oe}}),{state:l}=o;N(r,{get content(){return l.structure},props:o}),I()}function Xe(r){qe(r,{nodes:[{label:"Node 1",isExpanded:!0,children:[{label:"Node 1.1",children:[{label:"Node 1.1.1"}]},{label:"Node 1.2",children:[{label:"Node 1.2.1"}]}]}]})}export{Xe as default};
