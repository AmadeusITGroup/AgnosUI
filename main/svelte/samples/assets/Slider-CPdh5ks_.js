import{p as q,K as G,t as h,f as O,Q as N,s as w,e as U,h as P,j as C,c as u,a as F,d as E,g as v,L as T,U as Y,b as Z,l as B,S as $,W as ee,k as I,aA as te,O as ae,P as Q,q as re,v as R}from"./AppCommon-BPClzbtl.js";import{a as H}from"./actions-jRLuy1Cj.js";import{c as se}from"./slider-BTg5l3XS-CJPvu4Va.js";import{e as oe}from"./extendWidget-BE09QM6m.js";import{S as A}from"./Slot-iJnJNLgu.js";import{c as ne}from"./config-bqWcICqI.js";const ie={structure:void 0,label:({value:c})=>""+c,handle:void 0,tick:void 0},le=oe(se,ie),ce=le;var ve=h("<div></div>"),de=h("<div><!></div> <div><!></div>",1),ue=h("<!> - <!>",1),_e=h("<!> - <!>",1),pe=h("<div><!></div>"),be=h("<div><!></div>"),fe=h("<!> <!>",1),ge=h("<!> <div></div> <!> <!> <!> <!>",1);function me(c,t){q(t,!0);let s=G(t,["$$slots","$$events","$$legacy"]),{state:e,directives:r}=s;var d=ge(),y=O(d);N(y,17,()=>e.progressDisplayOptions,a=>a.id,(a,n)=>{var l=ve();let b;H(l,(f,M)=>{var i;return(i=r.progressDisplayDirective)==null?void 0:i.call(r,f,M)},()=>({option:v(n)})),P(f=>b=C(l,b,{...f}),[()=>({})]),u(a,l)});var o=w(y,2);let L;H(o,a=>{var n;return(n=r.clickableAreaDirective)==null?void 0:n.call(r,a)});var S=w(o,2);{var k=a=>{var n=de(),l=O(n);let b;var f=E(l);const M=T(()=>({value:e.min,...s}));A(f,{get content(){return e.label},get props(){return v(M)}}),H(l,x=>{var m;return(m=r.minLabelDirective)==null?void 0:m.call(r,x)});var i=w(l,2);let g;var D=E(i);const V=T(()=>({value:e.max,...s}));A(D,{get content(){return e.label},get props(){return v(V)}}),H(i,x=>{var m;return(m=r.maxLabelDirective)==null?void 0:m.call(r,x)}),P((x,m)=>{b=C(l,b,{...x}),g=C(i,g,{...m})},[()=>({}),()=>({})]),u(a,n)};U(S,a=>{e.showMinMaxLabels&&a(k)})}var j=w(S,2);{var _=a=>{var n=pe();let l;var b=E(n);{var f=i=>{var g=ue(),D=O(g);const V=T(()=>({value:e.sortedValues[1],...s}));A(D,{get content(){return e.label},get props(){return v(V)}});var x=w(D,2);const m=T(()=>({value:e.sortedValues[0],...s}));A(x,{get content(){return e.label},get props(){return v(m)}}),u(i,g)},M=i=>{var g=_e(),D=O(g);const V=T(()=>({value:e.sortedValues[0],...s}));A(D,{get content(){return e.label},get props(){return v(V)}});var x=w(D,2);const m=T(()=>({value:e.sortedValues[1],...s}));A(x,{get content(){return e.label},get props(){return v(m)}}),u(i,g)};U(b,i=>{e.rtl?i(f):i(M,!1)})}H(n,i=>{var g;return(g=r.combinedHandleLabelDisplayDirective)==null?void 0:g.call(r,i)}),P(i=>l=C(n,l,{...i}),[()=>({})]),u(a,n)};U(j,a=>{e.showValueLabels&&e.combinedLabelDisplay&&a(_)})}var p=w(j,2);N(p,17,()=>e.ticks,a=>a.position,(a,n)=>{const l=T(()=>({tick:v(n),...s}));A(a,{get content(){return e.tick},get props(){return v(l)}})});var W=w(p,2);N(W,19,()=>e.sortedHandles,a=>a.id,(a,n,l)=>{var b=fe(),f=O(b);const M=T(()=>({item:v(n),...s}));A(f,{get content(){return e.handle},get props(){return v(M)}});var i=w(f,2);{var g=D=>{var V=be();let x;var m=E(V);const J=T(()=>({value:e.values[v(l)],...s}));A(m,{get content(){return e.label},get props(){return v(J)}}),H(V,(K,X)=>{var z;return(z=r.handleLabelDisplayDirective)==null?void 0:z.call(r,K,X)},()=>({index:v(l)})),P(K=>x=C(V,x,{...K}),[()=>({})]),u(D,V)};U(i,D=>{e.showValueLabels&&!e.combinedLabelDisplay&&D(g)})}u(a,b)}),P(a=>L=C(o,L,{...a}),[()=>({})]),u(c,d),F()}var ke=h("<button></button>");function xe(c,t){q(t,!0);let s=Z(void 0),e;Y(()=>{v(s)&&(e=setTimeout(()=>{var o;(o=v(s))==null||o.focus(),B(s,void 0)}))});function r(o){switch(o.key){case"ArrowUp":case"ArrowRight":case"End":case"ArrowDown":case"ArrowLeft":case"Home":B(s,$(o.target)),clearTimeout(e);break}}var d=ke();let y;H(d,(o,L)=>{var S,k;return(k=(S=t.directives).handleDirective)==null?void 0:k.call(S,o,L)},()=>({item:t.item})),P(o=>y=C(d,y,{onkeydown:r,...o}),[()=>({})]),u(c,d),F()}var he=h("<span> </span>"),De=te('<circle class="au-slider-tick-inner au-slider-tick-selected"></circle>'),we=h('<!> <span><svg xmlns="http://www.w3.org/2000/svg"><circle></circle><!></svg></span>',1);function ye(c,t){q(t,!0);var s=we(),e=O(s);{var r=_=>{var p=he();let W;var a=E(p);H(p,(n,l)=>{var b,f;return(f=(b=t.directives).tickLabelDirective)==null?void 0:f.call(b,n,l)},()=>({tick:t.tick})),P(n=>{W=C(p,W,{...n}),I(a,t.tick.value)},[()=>({})]),u(_,p)};U(e,_=>{t.tick.displayLabel&&_(r)})}var d=w(e,2);let y;var o=E(d),L=E(o);let S;var k=w(L);{var j=_=>{var p=De();u(_,p)};U(k,_=>{t.tick.selected&&_(j)})}H(d,(_,p)=>{var W,a;return(a=(W=t.directives).tickDirective)==null?void 0:a.call(W,_,p)},()=>({tick:t.tick})),P((_,p)=>{y=C(d,y,{..._}),S=ee(L,0,"au-slider-tick-outer",null,S,p)},[()=>({}),()=>({"au-slider-tick-disabled":t.state.disabled,"au-slider-tick-selected":t.tick.selected})]),u(c,s),F()}const Le=(c,t=Q)=>{me(c,R(t))},Se=(c,t=Q)=>{xe(c,R(t))},Ve=(c,t=Q)=>{ye(c,R(t))},Ae=(c,t)=>{let s=()=>t==null?void 0:t().value;var e=re();P(()=>I(e,s())),u(c,e)};var Ce=h("<div><!></div>");function Oe(c,t){q(t,!0);let s=ae(t,"values",15),e=G(t,["$$slots","$$events","$$legacy","values"]);const r=ne({factory:ce,widgetName:"slider",get props(){return{...e,values:s()}},enablePatchChanged:!0,defaultConfig:{structure:Le,handle:Se,tick:Ve,label:Ae},events:{onValuesChange(k){s(k)}}}),{directives:{sliderDirective:d},state:y}=r;var o=Ce();let L;var S=E(o);A(S,{get content(){return y.structure},props:r}),H(o,k=>d==null?void 0:d(k)),P(k=>L=C(o,L,{...k}),[()=>({})]),u(c,o),F()}export{Oe as S};
