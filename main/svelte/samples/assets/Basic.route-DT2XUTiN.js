import{p as _,g as v,d as C,b as g,a as h,t as p,k as y,s as P,q as f,n as E,c as I,P as S,l as w,L as k,v as W,f as q,x as D,O as N}from"./AppCommon-C8th3JWG.js";import{S as b}from"./Slot-CQYwMNWG.js";import{c as z}from"./config-DQWobjli.js";import{c as A}from"./tree-B2Mr8b31-D1sbnnCz.js";import{e as B}from"./extendWidget-DVKkl0o0.js";import{a as x}from"./actions-B6To-NSG.js";import{c as F}from"./directive-CKEccryv-CjsmjpgW.js";import"./snippet-DR72IjbS.js";import"./config-CC1Dpxee.js";import"./index-client-DZwLQsoi.js";import"./navManager-DNZRv7RF.js";import"./writables-DCiBdIBK-BMnIMCZ2.js";const L={structure:void 0,item:void 0,itemContent:void 0,itemToggle:void 0},M=B(A,L,{structure:void 0,item:void 0,itemContent:void 0,itemToggle:void 0}),O=M;var j=p('<span class="au-tree-item"><!> </span>');function G(t,e){_(e,!0);var r=j(),i=y(r),o=f(()=>({item:e.item,state:e.state,api:e.api,directives:e.directives}));b(i,{get content(){return e.state.itemToggle},get props(){return v(o)}});var n=P(i);C(()=>E(n,` ${e.item.label??""}`)),g(t,r),h()}var H=p('<ul role="group"></ul>'),J=p("<li><!> <!></li>");function K(t,e){_(e,!0);var r=J();const i=f(()=>({}));let o;var n=y(r),c=f(()=>({item:e.item,state:e.state,api:e.api,directives:e.directives}));b(n,{get content(){return e.state.itemContent},get props(){return v(c)}});var u=P(n,2);{var s=a=>{var l=H();S(l,23,()=>e.item.children,(m,d)=>m.label+m.level+d,(m,d)=>{var T=f(()=>({item:v(d),state:e.state,api:e.api,directives:e.directives}));b(m,{get content(){return e.state.item},get props(){return v(T)}})}),g(a,l)};I(u,a=>{e.state.expandedMap.get(e.item)&&a(s)})}x(r,(a,l)=>{var m,d;return(d=(m=e.directives).itemAttributesDirective)==null?void 0:d.call(m,a,l)},()=>({item:e.item})),C(()=>o=w(r,o,{...v(i)})),g(t,r),h()}var Q=p("<ul></ul>");function R(t,e){_(e,!0);let r=k(e,["$$slots","$$events","$$legacy"]),{state:i,directives:o}=r;var n=Q();const c=f(()=>({}));let u;S(n,23,()=>i.normalizedNodes,(s,a)=>s.label+s.level+a,(s,a)=>{var l=f(()=>({item:v(a),...r}));b(s,{get content(){return i.item},get props(){return v(l)}})}),x(n,(s,a)=>{var l;return(l=F)==null?void 0:l(s,a)},()=>"au-tree "+i.className),x(n,s=>{var a;return(a=o.navigationDirective)==null?void 0:a.call(o,s)}),C(()=>u=w(n,u,{role:"tree",...v(c)})),g(t,n),h()}var U=p('<button><span class="au-tree-expand-icon-svg"></span></button>'),V=p('<span class="au-tree-expand-icon-placeholder"></span>');function X(t,e){_(e,!0);var r=W(),i=q(r);{var o=c=>{var u=U();const s=f(()=>({}));let a;x(u,(l,m)=>{var d,T;return(T=(d=e.directives).itemToggleDirective)==null?void 0:T.call(d,l,m)},()=>({item:e.item})),C(()=>a=w(u,a,{...v(s)})),g(c,u)},n=c=>{var u=V();g(c,u)};I(i,c=>{e.item.children.length>0?c(o):c(n,!1)})}g(t,r),h()}const Y=(t,e=N)=>{R(t,D(e))},Z=(t,e=N)=>{K(t,D(e))},$=(t,e=N)=>{G(t,D(e))},ee=(t,e=N)=>{X(t,D(e))};function te(t,e){_(e,!0);let r=k(e,["$$slots","$$events","$$legacy"]);const i=z({factory:O,widgetName:"tree",props:r,enablePatchChanged:!0,defaultConfig:{structure:Y,item:Z,itemContent:$,itemToggle:ee}}),{state:o}=i;b(t,{get content(){return o.structure},props:i}),h()}function ge(t){te(t,{nodes:[{label:"Node 1",isExpanded:!0,children:[{label:"Node 1.1",children:[{label:"Node 1.1.1"}]},{label:"Node 1.2",children:[{label:"Node 1.2.1"}]}]}]})}export{ge as default};