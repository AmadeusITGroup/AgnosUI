import{_ as fe}from"./preload-helper.0HuHagjb.js";import{X as ze,Y as Ie,R as F,L as Ce,s as me,A as j,i as C,f as b,Z as Q,I as X,_ as Ne,l as de,u as he,o as _e,p as pe,E as $,e as z,a as B,c as I,b as y,g as M,m as p,h as N,$ as H,M as x,y as ge,k as Z,q as be,a0 as Y,n as ve,x as ye,t as Be,d as Me,w as ee,j as Ve}from"./scheduler.dcax7kZy.js";import{g as W,a as E,e as q,t as k,S as we,i as ke,c as O,b as A,m as R,d as P}from"./index.wXF5KIfE.js";import{e as te}from"./app.4XikwG9G.js";import{g as le,b as ne,t as G}from"./tooltip.zhh7HrkH.js";import{w as J,b as De,s as Oe,p as Re}from"./stores.4a0KC_3Q.js";import{S as K}from"./Svg.35Uww3ok.js";function se(s,e){const n=e.token={};function l(t,o,u,i){if(e.token!==n)return;e.resolved=i;let a=e.ctx;u!==void 0&&(a=a.slice(),a[u]=i);const r=t&&(e.current=t)(a);let c=!1;e.block&&(e.blocks?e.blocks.forEach((f,d)=>{d!==o&&f&&(W(),E(f,1,1,()=>{e.blocks[d]===f&&(e.blocks[d]=null)}),q())}):e.block.d(1),r.c(),k(r,1),r.m(e.mount(),e.anchor),c=!0),e.block=r,e.blocks&&(e.blocks[o]=r),c&&Ce()}if(ze(s)){const t=Ie();if(s.then(o=>{F(t),l(e.then,1,e.value,o),F(null)},o=>{if(F(t),l(e.catch,2,e.error,o),F(null),!e.hasCatch)throw o}),e.current!==e.pending)return l(e.pending,0),!0}else{if(e.current!==e.then)return l(e.then,1,e.value,s),!0;e.resolved=s}}function Pe(s,e,n){const l=e.slice(),{resolved:t}=s;s.current===s.then&&(l[s.value]=t),s.current===s.catch&&(l[s.error]=t),s.block.p(l,n)}const He=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
</svg>`,Ae=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code" viewBox="0 0 16 16">
  <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z"/>
</svg>`,Ue=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <path d="M8 18.1176H14.8868L10.8359 28L24 13.8824H17.1132L21.1641 4L8 18.1176Z" fill="currentColor"/>
</svg>
`,Fe=s=>({}),ae=s=>({});function je(s){let e;const n=s[4].error,l=de(n,s,s[3],ae);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,o){l&&l.m(t,o),e=!0},p(t,o){l&&l.p&&(!e||o&8)&&he(l,n,t,t[3],e?pe(n,t[3],o,Fe):_e(t[3]),ae)},i(t){e||(k(l,t),e=!0)},o(t){E(l,t),e=!1},d(t){l&&l.d(t)}}}function We(s){let e,n,l;const t=[s[1]];var o=s[5].default;function u(i,a){let r={};if(a!==void 0&&a&2)r=le(t,[ne(i[1])]);else for(let c=0;c<t.length;c+=1)r=X(r,t[c]);return{props:r}}return o&&(e=$(o,u(s))),{c(){e&&O(e.$$.fragment),n=j()},l(i){e&&A(e.$$.fragment,i),n=j()},m(i,a){e&&R(e,i,a),C(i,n,a),l=!0},p(i,a){if(a&1&&o!==(o=i[5].default)){if(e){W();const r=e;E(r.$$.fragment,1,0,()=>{P(r,1)}),q()}o?(e=$(o,u(i,a)),O(e.$$.fragment),k(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(o){const r=a&2?le(t,[ne(i[1])]):{};e.$set(r)}},i(i){l||(e&&k(e.$$.fragment,i),l=!0)},o(i){e&&E(e.$$.fragment,i),l=!1},d(i){i&&b(n),e&&P(e,i)}}}function qe(s){let e;const n=s[4].default,l=de(n,s,s[3],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,o){l&&l.m(t,o),e=!0},p(t,o){l&&l.p&&(!e||o&8)&&he(l,n,t,t[3],e?pe(n,t[3],o,null):_e(t[3]),null)},i(t){e||(k(l,t),e=!0)},o(t){E(l,t),e=!1},d(t){l&&l.d(t)}}}function Ze(s){let e,n,l,t={ctx:s,current:null,token:null,hasCatch:!0,pending:qe,then:We,catch:je,value:5,blocks:[,,,]};return se(n=s[0],t),{c(){e=j(),t.block.c()},l(o){e=j(),t.block.l(o)},m(o,u){C(o,e,u),t.block.m(o,t.anchor=u),t.mount=()=>e.parentNode,t.anchor=e,l=!0},p(o,[u]){s=o,t.ctx=s,u&1&&n!==(n=s[0])&&se(n,t)||Pe(t,s,u)},i(o){l||(k(t.block),l=!0)},o(o){for(let u=0;u<3;u+=1){const i=t.blocks[u];E(i)}l=!1},d(o){o&&b(e),t.block.d(o),t.token=null,t=null}}}function Je(s,e,n){let l;const t=["component"];let o=Q(e,t),{$$slots:u={},$$scope:i}=e,{component:a}=e;return s.$$set=r=>{e=X(X({},e),Ne(r)),n(1,o=Q(e,t)),"component"in r&&n(2,a=r.component),"$$scope"in r&&n(3,i=r.$$scope)},s.$$.update=()=>{s.$$.dirty&4&&n(0,l=a())},[l,o,a,i,u]}class Xe extends we{constructor(e){super(),ke(this,e,Je,Ze,me,{component:2})}}function Ye(s,e=!0,n="sampleload",l=300){const t=J(!0),o=J(!1),u=J(0);let i,a,r;const c=d=>{var T;a||(a=new ResizeObserver(S=>{S.length===1&&t()&&u.set(Math.ceil(S[0].contentRect.height||u()))})),a.disconnect();const L=(T=d.contentDocument)==null?void 0:T.getElementById("root");L&&a.observe(L)},f=d=>{d.target instanceof HTMLIFrameElement&&c(d.target)};return{showSpinner$:De(o),handler:(d,L)=>{var w;d.onload=f,(w=d.contentDocument)!=null&&w.getElementById("root")&&c(d),e?r=u.subscribe(m=>d.height=(m||s)+"px"):d.height=s+"px";const T=m=>{var h,_,g;(g=(_=(h=d.contentWindow)==null?void 0:h.location)==null?void 0:_.href)!=null&&g.startsWith(m)||(t.set(!1),i&&clearTimeout(i),i=setTimeout(()=>{o.set(!0),i=void 0},l))};T(L);const S=m=>{m instanceof MessageEvent&&m.data.type===n&&m.source===d.contentWindow&&(i&&(clearTimeout(i),i=void 0),t.set(!0),o.set(!1))};return window.addEventListener("message",S,!1),{update:T,destroy:()=>{window.removeEventListener("message",S),a==null||a.disconnect(),r==null||r.unsubscribe()}}}}}function re(s,e,n){const l=s.slice();return l[22]=e[n],l}function oe(s){let e,n='<div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>';return{c(){e=z("div"),e.innerHTML=n,this.h()},l(l){e=I(l,"DIV",{class:!0,"data-svelte-h":!0}),be(e)!=="svelte-74lbnl"&&(e.innerHTML=n),this.h()},h(){p(e,"class","position-absolute top-50 start-50 translate-middle iframeSpinner svelte-1i76uzh")},m(l,t){C(l,e,t)},d(l){l&&b(e)}}}function ie(s){let e,n,l,t,o,u,i,a;return n=new K({props:{className:"icon-24 align-middle",svg:Ae}}),o=new K({props:{className:"icon-24 align-middle",svg:Ue}}),{c(){e=z("button"),O(n.$$.fragment),l=B(),t=z("button"),O(o.$$.fragment),this.h()},l(r){e=I(r,"BUTTON",{class:!0,"aria-label":!0});var c=y(e);A(n.$$.fragment,c),c.forEach(b),l=M(r),t=I(r,"BUTTON",{class:!0,"aria-label":!0});var f=y(t);A(o.$$.fragment,f),f.forEach(b),this.h()},h(){p(e,"class","btn btn-sm btn-link m-1 p-0"),p(e,"aria-label","Show or hide the code"),p(t,"class","btn btn-sm btn-link m-1 p-0"),p(t,"aria-label","Open example in stackblitz")},m(r,c){C(r,e,c),R(n,e,null),C(r,l,c),C(r,t,c),R(o,t,null),u=!0,i||(a=[H(G.call(null,e,{content:"Toggle code"})),Y(e,"click",s[18]),H(G.call(null,t,{content:"Edit in Stackblitz"})),Y(t,"click",s[19])],i=!0)},p:ve,i(r){u||(k(n.$$.fragment,r),k(o.$$.fragment,r),u=!0)},o(r){E(n.$$.fragment,r),E(o.$$.fragment,r),u=!1},d(r){r&&(b(e),b(l),b(t)),P(n),P(o),i=!1,ge(a)}}}function ce(s){let e,n,l,t,o,u=te(s[9]),i=[];for(let a=0;a<u.length;a+=1)i[a]=ue(re(s,u,a));return t=new Xe({props:{component:$e,code:s[7],fileName:s[5],$$slots:{default:[Ge]},$$scope:{ctx:s}}}),{c(){e=z("ul");for(let a=0;a<i.length;a+=1)i[a].c();n=B(),l=z("div"),O(t.$$.fragment),this.h()},l(a){e=I(a,"UL",{class:!0});var r=y(e);for(let f=0;f<i.length;f+=1)i[f].l(r);r.forEach(b),n=M(a),l=I(a,"DIV",{class:!0});var c=y(l);A(t.$$.fragment,c),c.forEach(b),this.h()},h(){p(e,"class","nav nav-underline p-3 border-start border-end"),p(l,"class","border border-top-0")},m(a,r){C(a,e,r);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(e,null);C(a,n,r),C(a,l,r),R(t,l,null),o=!0},p(a,r){if(r&544){u=te(a[9]);let f;for(f=0;f<u.length;f+=1){const d=re(a,u,f);i[f]?i[f].p(d,r):(i[f]=ue(d),i[f].c(),i[f].m(e,null))}for(;f<i.length;f+=1)i[f].d(1);i.length=u.length}const c={};r&128&&(c.code=a[7]),r&32&&(c.fileName=a[5]),r&33554432&&(c.$$scope={dirty:r,ctx:a}),t.$set(c)},i(a){o||(k(t.$$.fragment,a),o=!0)},o(a){E(t.$$.fragment,a),o=!1},d(a){a&&(b(e),b(n),b(l)),ye(i,a),P(t)}}}function ue(s){let e,n,l=s[22]+"",t,o,u,i;function a(){return s[20](s[22])}return{c(){e=z("li"),n=z("button"),t=Be(l),o=B(),this.h()},l(r){e=I(r,"LI",{class:!0});var c=y(e);n=I(c,"BUTTON",{class:!0});var f=y(n);t=Me(f,l),f.forEach(b),o=M(c),c.forEach(b),this.h()},h(){p(n,"class","nav-link"),ee(n,"active",s[5]===s[22]),p(e,"class","nav-item")},m(r,c){C(r,e,c),N(e,n),N(n,t),N(e,o),u||(i=Y(n,"click",a),u=!0)},p(r,c){s=r,c&512&&l!==(l=s[22]+"")&&Ve(t,l),c&544&&ee(n,"active",s[5]===s[22])},d(r){r&&b(e),u=!1,i()}}}function Ge(s){let e,n='<span class="visually-hidden">Loading...</span>';return{c(){e=z("div"),e.innerHTML=n,this.h()},l(l){e=I(l,"DIV",{class:!0,role:!0,"data-svelte-h":!0}),be(e)!=="svelte-1jl1g7d"&&(e.innerHTML=n),this.h()},h(){p(e,"class","spinner-border text-primary"),p(e,"role","status")},m(l,t){C(l,e,t)},p:ve,d(l){l&&b(e)}}}function Ke(s){let e,n,l,t,o,u,i,a,r,c,f,d,L,T,S,w=s[10]&&oe(),m=s[2]&&ie(s);f=new K({props:{className:"icon-20 align-middle",svg:He}});let h=s[3]&&ce(s);return{c(){e=z("div"),n=z("div"),w&&w.c(),l=B(),t=z("iframe"),i=B(),a=z("div"),m&&m.c(),r=B(),c=z("a"),O(f.$$.fragment),d=B(),h&&h.c(),this.h()},l(_){e=I(_,"DIV",{class:!0});var g=y(e);n=I(g,"DIV",{class:!0});var V=y(n);w&&w.l(V),l=M(V),t=I(V,"IFRAME",{class:!0,title:!0}),y(t).forEach(b),V.forEach(b),i=M(g),a=I(g,"DIV",{class:!0,role:!0,"aria-label":!0});var D=y(a);m&&m.l(D),r=M(D),c=I(D,"A",{href:!0,class:!0,target:!0,rel:!0,"aria-label":!0});var U=y(c);A(f.$$.fragment,U),U.forEach(b),D.forEach(b),d=M(g),h&&h.l(g),g.forEach(b),this.h()},h(){p(t,"class","demo-sample d-block"),p(t,"title",s[0]),p(n,"class","position-relative border"),p(c,"href",s[8]),p(c,"class","action m-1 p-0 svelte-1i76uzh"),p(c,"target","_blank"),p(c,"rel","noreferrer nofollow external"),p(c,"aria-label","View sample in new tab"),p(a,"class","btn-toolbar border border-top-0 d-flex align-items-center p-1"),p(a,"role","toolbar"),p(a,"aria-label","Toolbar with button groups"),p(e,"class","mb-4 py-2 px-0 px-sm-3")},m(_,g){C(_,e,g),N(e,n),w&&w.m(n,null),N(n,l),N(n,t),N(e,i),N(e,a),m&&m.m(a,null),N(a,r),N(a,c),R(f,c,null),N(e,d),h&&h.m(e,null),L=!0,T||(S=[H(o=Qe.call(null,t,s[8])),H(u=s[12].call(null,t,s[4])),H(G.call(null,c,{content:"Open example in a new tab"}))],T=!0)},p(_,[g]){_[10]?w||(w=oe(),w.c(),w.m(n,l)):w&&(w.d(1),w=null),(!L||g&1)&&p(t,"title",_[0]),o&&x(o.update)&&g&256&&o.update.call(null,_[8]),u&&x(u.update)&&g&16&&u.update.call(null,_[4]),_[2]?m?(m.p(_,g),g&4&&k(m,1)):(m=ie(_),m.c(),k(m,1),m.m(a,r)):m&&(W(),E(m,1,1,()=>{m=null}),q()),(!L||g&256)&&p(c,"href",_[8]),_[3]?h?(h.p(_,g),g&8&&k(h,1)):(h=ce(_),h.c(),k(h,1),h.m(e,null)):h&&(W(),E(h,1,1,()=>{h=null}),q())},i(_){L||(k(m),k(f.$$.fragment,_),k(h),L=!0)},o(_){E(m),E(f.$$.fragment,_),E(h),L=!1},d(_){_&&b(e),w&&w.d(),m&&m.d(),P(f),h&&h.d(),T=!1,ge(S)}}}const Qe=(s,e)=>{const n=l=>{var t;return(t=s.contentWindow)==null?void 0:t.location.replace(new URL(l,window.location.href))};return n(e),{update:n}},$e=()=>fe(()=>import("./Code.5oQRtPfz.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url);function xe(s,e,n){let l,t,o,u,i,a,r,c;Z(s,Oe,v=>n(6,a=v)),Z(s,Re,v=>n(17,r=v));let{title:f}=e,{sample:d}=e,{noresize:L=!1}=e,{height:T}=e,{urlParameters:S=void 0}=e,{showCodeButton:w=!0}=e,m=!1,h="";async function _(v,Ee,Te,Se){n(7,h=v?await Te.files[Ee].files[Se]():"")}const{showSpinner$:g,handler:V}=Ye(T,!L);Z(s,g,v=>n(10,c=v));const D=()=>n(3,m=!m),U=async()=>(await fe(()=>import("./index.RnetBwlg.js"),__vite__mapDeps([9,10]),import.meta.url)).openInStackblitz(d,a),Le=v=>n(5,o=v);return s.$$set=v=>{"title"in v&&n(0,f=v.title),"sample"in v&&n(1,d=v.sample),"noresize"in v&&n(13,L=v.noresize),"height"in v&&n(14,T=v.height),"urlParameters"in v&&n(15,S=v.urlParameters),"showCodeButton"in v&&n(2,w=v.showCodeButton)},s.$$.update=()=>{s.$$.dirty&2&&n(16,l=`${d.componentName}/${d.sampleName}`.toLowerCase()),s.$$.dirty&66&&n(9,t=Object.keys(d.files[a].files)),s.$$.dirty&66&&n(5,o=d.files[a].entryPoint),s.$$.dirty&106&&_(m,a,d,o),s.$$.dirty&196672&&n(4,u=`${r}${a}/samples/#/${l}`),s.$$.dirty&32784&&n(8,i=u+(S?`#${JSON.stringify(S)}`:""))},[f,d,w,m,u,o,a,h,i,t,c,g,V,L,T,S,l,r,D,U,Le]}class ot extends we{constructor(e){super(),ke(this,e,xe,Ke,me,{title:0,sample:1,noresize:13,height:14,urlParameters:15,showCodeButton:2})}}export{ot as S};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Code.5oQRtPfz.js","./scheduler.dcax7kZy.js","./index.wXF5KIfE.js","./tooltip.zhh7HrkH.js","./stores.4a0KC_3Q.js","./stores.TO_xlEdr.js","./entry.qSjR4jCb.js","./Svg.35Uww3ok.js","../assets/Code.o2R87A-P.css","./index.RnetBwlg.js","./preload-helper.0HuHagjb.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
