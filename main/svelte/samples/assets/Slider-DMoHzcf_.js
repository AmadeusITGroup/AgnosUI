import{p as j,f as O,P as U,c as W,d as k,b,a as q,t as m,g as a,s as L,L as B,l as S,k as R,q as n,T as Y,h as z,j as Z,R as $,M as ee,x as G,O as I,r as te,n as ae}from"./AppCommon-Cg6aVWiJ.js";import{a as V}from"./actions-DDgANA-V.js";import{c as re}from"./slider-BSsiJ6Sz-C97IpxhQ.js";import{e as oe}from"./extendWidget-CGJbintg.js";import{S as D}from"./Slot-BDFzo0gx.js";import{c as se}from"./config-o26kMnp0.js";const le={structure:void 0,label:({value:d})=>""+d,handle:void 0},ne=oe(re,le),ie=ne;var ve=m("<div></div>"),de=m("<div><!></div> <div><!></div>",1),ue=m("<!> - <!>",1),pe=m("<!> - <!>",1),ce=m("<div><!></div>"),_e=m("<div><!></div>"),be=m("<!> <!>",1),fe=m("<!> <div></div> <!> <!> <!>",1);function ge(d,o){j(o,!0);let r=B(o,["$$slots","$$events","$$legacy"]),{state:e,directives:t}=r;var f=fe(),M=O(f);U(M,17,()=>e.progressDisplayOptions,s=>s.id,(s,i)=>{var u=ve();const h=n(()=>({}));let g;V(u,(H,P)=>{var l;return(l=t.progressDisplayDirective)==null?void 0:l.call(t,H,P)},()=>({option:a(i)})),k(()=>g=S(u,g,{...a(h)})),b(s,u)});var c=L(M,2);const _=n(()=>({}));let A;V(c,s=>{var i;return(i=t.clickableAreaDirective)==null?void 0:i.call(t,s)});var C=L(c,2);{var x=s=>{var i=de(),u=O(i);const h=n(()=>({}));let g;var H=R(u),P=n(()=>({value:e.min,...r}));D(H,{get content(){return e.label},get props(){return a(P)}}),V(u,w=>{var E;return(E=t.minLabelDirective)==null?void 0:E.call(t,w)});var l=L(u,2);const v=n(()=>({}));let p;var T=R(l),y=n(()=>({value:e.max,...r}));D(T,{get content(){return e.label},get props(){return a(y)}}),V(l,w=>{var E;return(E=t.maxLabelDirective)==null?void 0:E.call(t,w)}),k(()=>{g=S(u,g,{...a(h)}),p=S(l,p,{...a(v)})}),b(s,i)};W(C,s=>{e.showMinMaxLabels&&s(x)})}var F=L(C,2);{var J=s=>{var i=ce();const u=n(()=>({}));let h;var g=R(i);{var H=l=>{var v=ue(),p=O(v),T=n(()=>({value:e.sortedValues[1],...r}));D(p,{get content(){return e.label},get props(){return a(T)}});var y=L(p,2),w=n(()=>({value:e.sortedValues[0],...r}));D(y,{get content(){return e.label},get props(){return a(w)}}),b(l,v)},P=l=>{var v=pe(),p=O(v),T=n(()=>({value:e.sortedValues[0],...r}));D(p,{get content(){return e.label},get props(){return a(T)}});var y=L(p,2),w=n(()=>({value:e.sortedValues[1],...r}));D(y,{get content(){return e.label},get props(){return a(w)}}),b(l,v)};W(g,l=>{e.rtl?l(H):l(P,!1)})}V(i,l=>{var v;return(v=t.combinedHandleLabelDisplayDirective)==null?void 0:v.call(t,l)}),k(()=>h=S(i,h,{...a(u)})),b(s,i)};W(F,s=>{e.showValueLabels&&e.combinedLabelDisplay&&s(J)})}var K=L(F,2);U(K,19,()=>e.sortedHandles,s=>s.id,(s,i,u)=>{var h=be(),g=O(h),H=n(()=>({item:a(i),...r}));D(g,{get content(){return e.handle},get props(){return a(H)}});var P=L(g,2);{var l=v=>{var p=_e();const T=n(()=>({}));let y;var w=R(p),E=n(()=>({value:e.values[a(u)],...r}));D(w,{get content(){return e.label},get props(){return a(E)}}),V(p,(Q,X)=>{var N;return(N=t.handleLabelDisplayDirective)==null?void 0:N.call(t,Q,X)},()=>({index:a(u)})),k(()=>y=S(p,y,{...a(T)})),b(v,p)};W(P,v=>{e.showValueLabels&&!e.combinedLabelDisplay&&v(l)})}b(s,h)}),k(()=>A=S(c,A,{...a(_)})),b(d,f),q()}var me=m("<button>&nbsp;</button>");function he(d,o){j(o,!0);let r=Z(void 0),e;Y(()=>{a(r)&&(e=setTimeout(()=>{var _;(_=a(r))==null||_.focus(),z(r,void 0)}))});function t(_){switch(_.key){case"ArrowUp":case"ArrowRight":case"End":case"ArrowDown":case"ArrowLeft":case"Home":z(r,$(_.target)),clearTimeout(e);break}}var f=me();const M=n(()=>({}));let c;V(f,(_,A)=>{var C,x;return(x=(C=o.directives).handleDirective)==null?void 0:x.call(C,_,A)},()=>({item:o.item})),k(()=>c=S(f,c,{onkeydown:t,...a(M)})),b(d,f),q()}const we=(d,o=I)=>{ge(d,G(o))},De=(d,o=I)=>{he(d,G(o))},xe=(d,o)=>{let r=()=>o==null?void 0:o().value;var e=te();k(()=>ae(e,r())),b(d,e)};var ye=m("<div><!></div>");function He(d,o){j(o,!0);let r=ee(o,"values",15),e=B(o,["$$slots","$$events","$$legacy","values"]);const t=se({factory:ie,widgetName:"slider",get props(){return{...e,values:r()}},enablePatchChanged:!0,defaultConfig:{structure:we,handle:De,label:xe},events:{onValuesChange(x){r(x)}}}),{directives:{sliderDirective:f},state:M}=t;var c=ye();const _=n(()=>({}));let A;var C=R(c);D(C,{get content(){return M.structure},props:t}),V(c,x=>f==null?void 0:f(x)),k(()=>A=S(c,A,{...a(_)})),b(d,c),q()}export{He as S};
