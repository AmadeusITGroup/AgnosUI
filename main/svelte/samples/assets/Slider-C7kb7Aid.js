import{p as q,K as I,t as h,f as R,P as N,s as w,e as W,h as H,j as T,c as u,a as F,d as E,g as v,L as P,T as Y,b as Z,l as G,R as $,V as ee,k as J,aA as te,M as ae,O as U,q as re,v as z}from"./AppCommon-CiJXSMZM.js";import{a as C}from"./actions-BCTZ69UQ.js";import{c as se}from"./slider-BTg5l3XS-CgRYnt98.js";import{e as oe}from"./extendWidget-DCivS1sZ.js";import{S as A}from"./Slot-DK4Zh6sr.js";import{c as ne}from"./config-hopTN0Kl.js";const ie={structure:void 0,label:({value:c})=>""+c,handle:void 0,tick:void 0},le=oe(se,ie),ce=le;var ve=h("<div></div>"),de=h("<div><!></div> <div><!></div>",1),ue=h("<!> - <!>",1),_e=h("<!> - <!>",1),pe=h("<div><!></div>"),be=h("<div><!></div>"),fe=h("<!> <!>",1),ge=h("<!> <div></div> <!> <!> <!> <!>",1);function me(c,t){q(t,!0);let s=I(t,["$$slots","$$events","$$legacy"]),{state:e,directives:r}=s;var d=ge(),y=R(d);N(y,17,()=>e.progressDisplayOptions,a=>a.id,(a,n)=>{var l=ve();let b;C(l,(f,O)=>{var i;return(i=r.progressDisplayDirective)==null?void 0:i.call(r,f,O)},()=>({option:v(n)})),H(f=>b=T(l,b,{...f}),[()=>({})]),u(a,l)});var o=w(y,2);let L;C(o,a=>{var n;return(n=r.clickableAreaDirective)==null?void 0:n.call(r,a)});var S=w(o,2);{var k=a=>{var n=de(),l=R(n);let b;var f=E(l);const O=P(()=>({value:e.min,...s}));A(f,{get content(){return e.label},get props(){return v(O)}}),C(l,x=>{var m;return(m=r.minLabelDirective)==null?void 0:m.call(r,x)});var i=w(l,2);let g;var D=E(i);const V=P(()=>({value:e.max,...s}));A(D,{get content(){return e.label},get props(){return v(V)}}),C(i,x=>{var m;return(m=r.maxLabelDirective)==null?void 0:m.call(r,x)}),H((x,m)=>{b=T(l,b,{...x}),g=T(i,g,{...m})},[()=>({}),()=>({})]),u(a,n)};W(S,a=>{e.showMinMaxLabels&&a(k)})}var j=w(S,2);{var _=a=>{var n=pe();let l;var b=E(n);{var f=i=>{var g=ue(),D=R(g);const V=P(()=>({value:e.sortedValues[1],...s}));A(D,{get content(){return e.label},get props(){return v(V)}});var x=w(D,2);const m=P(()=>({value:e.sortedValues[0],...s}));A(x,{get content(){return e.label},get props(){return v(m)}}),u(i,g)},O=i=>{var g=_e(),D=R(g);const V=P(()=>({value:e.sortedValues[0],...s}));A(D,{get content(){return e.label},get props(){return v(V)}});var x=w(D,2);const m=P(()=>({value:e.sortedValues[1],...s}));A(x,{get content(){return e.label},get props(){return v(m)}}),u(i,g)};W(b,i=>{e.rtl?i(f):i(O,!1)})}C(n,i=>{var g;return(g=r.combinedHandleLabelDisplayDirective)==null?void 0:g.call(r,i)}),H(i=>l=T(n,l,{...i}),[()=>({})]),u(a,n)};W(j,a=>{e.showValueLabels&&e.combinedLabelDisplay&&a(_)})}var p=w(j,2);N(p,17,()=>e.ticks,a=>a.position,(a,n)=>{const l=P(()=>({tick:v(n),...s}));A(a,{get content(){return e.tick},get props(){return v(l)}})});var M=w(p,2);N(M,19,()=>e.sortedHandles,a=>a.id,(a,n,l)=>{var b=fe(),f=R(b);const O=P(()=>({item:v(n),...s}));A(f,{get content(){return e.handle},get props(){return v(O)}});var i=w(f,2);{var g=D=>{var V=be();let x;var m=E(V);const Q=P(()=>({value:e.values[v(l)],...s}));A(m,{get content(){return e.label},get props(){return v(Q)}}),C(V,(K,X)=>{var B;return(B=r.handleLabelDisplayDirective)==null?void 0:B.call(r,K,X)},()=>({index:v(l)})),H(K=>x=T(V,x,{...K}),[()=>({})]),u(D,V)};W(i,D=>{e.showValueLabels&&!e.combinedLabelDisplay&&D(g)})}u(a,b)}),H(a=>L=T(o,L,{...a}),[()=>({})]),u(c,d),F()}var ke=h("<button></button>");function xe(c,t){q(t,!0);let s=Z(void 0),e;Y(()=>{v(s)&&(e=setTimeout(()=>{var o;(o=v(s))==null||o.focus(),G(s,void 0)}))});function r(o){switch(o.key){case"ArrowUp":case"ArrowRight":case"End":case"ArrowDown":case"ArrowLeft":case"Home":G(s,$(o.target)),clearTimeout(e);break}}var d=ke();let y;C(d,(o,L)=>{var S,k;return(k=(S=t.directives).handleDirective)==null?void 0:k.call(S,o,L)},()=>({item:t.item})),H(o=>y=T(d,y,{onkeydown:r,...o}),[()=>({})]),u(c,d),F()}var he=h("<span> </span>"),De=te('<circle class="au-slider-tick-inner au-slider-tick-selected"></circle>'),we=h('<!> <span><svg xmlns="http://www.w3.org/2000/svg"><circle></circle><!></svg></span>',1);function ye(c,t){q(t,!0);var s=we(),e=R(s);{var r=_=>{var p=he();let M;var a=E(p);C(p,(n,l)=>{var b,f;return(f=(b=t.directives).tickLabelDirective)==null?void 0:f.call(b,n,l)},()=>({tick:t.tick})),H(n=>{M=T(p,M,{...n}),J(a,t.tick.value)},[()=>({})]),u(_,p)};W(e,_=>{t.tick.displayLabel&&_(r)})}var d=w(e,2);let y;var o=E(d),L=E(o);let S;var k=w(L);{var j=_=>{var p=De();u(_,p)};W(k,_=>{t.tick.selected&&_(j)})}C(d,(_,p)=>{var M,a;return(a=(M=t.directives).tickDirective)==null?void 0:a.call(M,_,p)},()=>({tick:t.tick})),H((_,p)=>{y=T(d,y,{..._}),S=ee(L,0,"au-slider-tick-outer",null,S,p)},[()=>({}),()=>({"au-slider-tick-disabled":t.state.disabled,"au-slider-tick-selected":t.tick.selected})]),u(c,s),F()}const Le=(c,t=U)=>{me(c,z(t))},Se=(c,t=U)=>{xe(c,z(t))},Ve=(c,t=U)=>{ye(c,z(t))},Ae=(c,t)=>{let s=()=>t==null?void 0:t().value;var e=re();H(()=>J(e,s())),u(c,e)};var Te=h("<div><!></div>");function Re(c,t){q(t,!0);let s=ae(t,"values",15),e=I(t,["$$slots","$$events","$$legacy","values"]);const r=ne({factory:ce,widgetName:"slider",get props(){return{...e,values:s()}},enablePatchChanged:!0,defaultConfig:{structure:Le,handle:Se,tick:Ve,label:Ae},events:{onValuesChange(k){s(k)}}}),{directives:{sliderDirective:d},state:y}=r;var o=Te();let L;var S=E(o);A(S,{get content(){return y.structure},props:r}),C(o,k=>d==null?void 0:d(k)),H(k=>L=T(o,L,{...k}),[()=>({})]),u(c,o),F()}export{Re as S};
