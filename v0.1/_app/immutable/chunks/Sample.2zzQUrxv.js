import{_ as de}from"./preload-helper.0HuHagjb.js";import{Z as Ce,_ as De,R as U,L as Be,s as he,A as H,i as z,f as v,$ as Q,I as G,a0 as Me,l as me,u as _e,o as pe,p as ge,E as Y,e as T,a as C,c as y,b as I,g as D,m as g,G as $,h as E,X as O,M as x,w as be,k as j,q as ve,a1 as J,z as Ve,t as Pe,d as Oe,y as ee,j as Re,n as Ue}from"./scheduler.Q0hAFj3-.js";import{g as A,a as L,e as F,t as k,S as we,i as ke,c as B,b as R,m as M,d as V}from"./index.0hJEAOOZ.js";import{e as te}from"./app.PDNVtWuh.js";import{g as le,a as ne,t as W}from"./tooltip.2QOt5jhQ.js";import{w as q,b as He,s as Ae,p as Fe}from"./stores.XcCoiG2v.js";import{S as Z}from"./Svg.vTIkg8kS.js";function se(s,e){const n=e.token={};function l(t,a,r,o){if(e.token!==n)return;e.resolved=o;let i=e.ctx;r!==void 0&&(i=i.slice(),i[r]=o);const c=t&&(e.current=t)(i);let f=!1;e.block&&(e.blocks?e.blocks.forEach((w,b)=>{b!==a&&w&&(A(),L(w,1,1,()=>{e.blocks[b]===w&&(e.blocks[b]=null)}),F())}):e.block.d(1),c.c(),k(c,1),c.m(e.mount(),e.anchor),f=!0),e.block=c,e.blocks&&(e.blocks[a]=c),f&&Be()}if(Ce(s)){const t=De();if(s.then(a=>{U(t),l(e.then,1,e.value,a),U(null)},a=>{if(U(t),l(e.catch,2,e.error,a),U(null),!e.hasCatch)throw a}),e.current!==e.pending)return l(e.pending,0),!0}else{if(e.current!==e.then)return l(e.then,1,e.value,s),!0;e.resolved=s}}function je(s,e,n){const l=e.slice(),{resolved:t}=s;s.current===s.then&&(l[s.value]=t),s.current===s.catch&&(l[s.error]=t),s.block.p(l,n)}const We=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
</svg>`,qe=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code" viewBox="0 0 16 16">
  <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z"/>
</svg>`,Ze=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <path d="M8 18.1176H14.8868L10.8359 28L24 13.8824H17.1132L21.1641 4L8 18.1176Z" fill="currentColor"/>
</svg>
`,Ge=s=>({}),ae=s=>({});function Je(s){let e;const n=s[4].error,l=me(n,s,s[3],ae);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,a){l&&l.m(t,a),e=!0},p(t,a){l&&l.p&&(!e||a&8)&&_e(l,n,t,t[3],e?ge(n,t[3],a,Ge):pe(t[3]),ae)},i(t){e||(k(l,t),e=!0)},o(t){L(l,t),e=!1},d(t){l&&l.d(t)}}}function Xe(s){let e,n,l;const t=[s[1]];var a=s[5].default;function r(o,i){let c={};if(i!==void 0&&i&2)c=le(t,[ne(o[1])]);else for(let f=0;f<t.length;f+=1)c=G(c,t[f]);return{props:c}}return a&&(e=Y(a,r(s))),{c(){e&&B(e.$$.fragment),n=H()},l(o){e&&R(e.$$.fragment,o),n=H()},m(o,i){e&&M(e,o,i),z(o,n,i),l=!0},p(o,i){if(i&1&&a!==(a=o[5].default)){if(e){A();const c=e;L(c.$$.fragment,1,0,()=>{V(c,1)}),F()}a?(e=Y(a,r(o,i)),B(e.$$.fragment),k(e.$$.fragment,1),M(e,n.parentNode,n)):e=null}else if(a){const c=i&2?le(t,[ne(o[1])]):{};e.$set(c)}},i(o){l||(e&&k(e.$$.fragment,o),l=!0)},o(o){e&&L(e.$$.fragment,o),l=!1},d(o){o&&v(n),e&&V(e,o)}}}function Ke(s){let e;const n=s[4].default,l=me(n,s,s[3],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,a){l&&l.m(t,a),e=!0},p(t,a){l&&l.p&&(!e||a&8)&&_e(l,n,t,t[3],e?ge(n,t[3],a,null):pe(t[3]),null)},i(t){e||(k(l,t),e=!0)},o(t){L(l,t),e=!1},d(t){l&&l.d(t)}}}function Qe(s){let e,n,l,t={ctx:s,current:null,token:null,hasCatch:!0,pending:Ke,then:Xe,catch:Je,value:5,blocks:[,,,]};return se(n=s[0],t),{c(){e=H(),t.block.c()},l(a){e=H(),t.block.l(a)},m(a,r){z(a,e,r),t.block.m(a,t.anchor=r),t.mount=()=>e.parentNode,t.anchor=e,l=!0},p(a,[r]){s=a,t.ctx=s,r&1&&n!==(n=s[0])&&se(n,t)||je(t,s,r)},i(a){l||(k(t.block),l=!0)},o(a){for(let r=0;r<3;r+=1){const o=t.blocks[r];L(o)}l=!1},d(a){a&&v(e),t.block.d(a),t.token=null,t=null}}}function Ye(s,e,n){let l;const t=["component"];let a=Q(e,t),{$$slots:r={},$$scope:o}=e,{component:i}=e;return s.$$set=c=>{e=G(G({},e),Me(c)),n(1,a=Q(e,t)),"component"in c&&n(2,i=c.component),"$$scope"in c&&n(3,o=c.$$scope)},s.$$.update=()=>{s.$$.dirty&4&&n(0,l=i())},[l,a,i,o,r]}class $e extends we{constructor(e){super(),ke(this,e,Ye,Qe,he,{component:2})}}function xe(s,e=!0,n="sampleload",l=300){const t=q(!0),a=q(!1),r=q(0);let o,i,c;const f=b=>{var u;i||(i=new ResizeObserver(h=>{h.length===1&&t()&&r.set(Math.ceil(h[0].contentRect.height||r()))})),i.disconnect();const d=(u=b.contentDocument)==null?void 0:u.getElementById("root");d&&i.observe(d)},w=b=>{b.target instanceof HTMLIFrameElement&&f(b.target)};return{showSpinner$:He(a),handler:(b,d)=>{var _;b.onload=w,(_=b.contentDocument)!=null&&_.getElementById("root")&&f(b),e?c=r.subscribe(m=>b.height=(m||s)+"px"):b.height=s+"px";const u=m=>{var S,P,N;(N=(P=(S=b.contentWindow)==null?void 0:S.location)==null?void 0:P.href)!=null&&N.startsWith(m)||(t.set(!1),o&&clearTimeout(o),o=setTimeout(()=>{a.set(!0),o=void 0},l))};u(d);const h=m=>{m instanceof MessageEvent&&m.data.type===n&&m.source===b.contentWindow&&(o&&(clearTimeout(o),o=void 0),t.set(!0),a.set(!1))};return window.addEventListener("message",h,!1),{update:u,destroy:()=>{window.removeEventListener("message",h),i==null||i.disconnect(),c==null||c.unsubscribe()}}}}}function re(s,e,n){const l=s.slice();return l[25]=e[n],l}function oe(s){let e,n='<div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>';return{c(){e=T("div"),e.innerHTML=n,this.h()},l(l){e=y(l,"DIV",{class:!0,"data-svelte-h":!0}),ve(e)!=="svelte-74lbnl"&&(e.innerHTML=n),this.h()},h(){g(e,"class","position-absolute top-50 start-50 translate-middle iframeSpinner svelte-v70n3d")},m(l,t){z(l,e,t)},d(l){l&&v(e)}}}function ie(s){let e,n,l,t,a,r,o,i,c,f,w,b;return l=new Z({props:{className:"icon-24 align-middle",svg:qe}}),r=new Z({props:{className:"icon-24 align-middle",svg:Ze}}),c=new Z({props:{className:"icon-20 align-middle",svg:We}}),{c(){e=T("div"),n=T("button"),B(l.$$.fragment),t=C(),a=T("button"),B(r.$$.fragment),o=C(),i=T("a"),B(c.$$.fragment),this.h()},l(d){e=y(d,"DIV",{class:!0,role:!0,"aria-label":!0});var u=I(e);n=y(u,"BUTTON",{class:!0,"aria-label":!0});var h=I(n);R(l.$$.fragment,h),h.forEach(v),t=D(u),a=y(u,"BUTTON",{class:!0,"aria-label":!0});var _=I(a);R(r.$$.fragment,_),_.forEach(v),o=D(u),i=y(u,"A",{href:!0,class:!0,target:!0,rel:!0,"aria-label":!0});var m=I(i);R(c.$$.fragment,m),m.forEach(v),u.forEach(v),this.h()},h(){g(n,"class","btn btn-sm btn-link m-1 p-0"),g(n,"aria-label","Show or hide the code"),g(a,"class","btn btn-sm btn-link m-1 p-0"),g(a,"aria-label","Open example in stackblitz"),g(i,"href",s[10]),g(i,"class","action m-1 p-0 svelte-v70n3d"),g(i,"target","_blank"),g(i,"rel","noreferrer nofollow external"),g(i,"aria-label","View sample in new tab"),g(e,"class","btn-toolbar border border-top-0 d-flex align-items-center p-1"),g(e,"role","toolbar"),g(e,"aria-label","Toolbar with button groups")},m(d,u){z(d,e,u),E(e,n),M(l,n,null),E(e,t),E(e,a),M(r,a,null),E(e,o),E(e,i),M(c,i,null),f=!0,w||(b=[O(W.call(null,n,{content:"Toggle code"})),J(n,"click",s[21]),O(W.call(null,a,{content:"Edit in Stackblitz"})),J(a,"click",s[22]),O(W.call(null,i,{content:"Open example in a new tab"}))],w=!0)},p(d,u){(!f||u&1024)&&g(i,"href",d[10])},i(d){f||(k(l.$$.fragment,d),k(r.$$.fragment,d),k(c.$$.fragment,d),f=!0)},o(d){L(l.$$.fragment,d),L(r.$$.fragment,d),L(c.$$.fragment,d),f=!1},d(d){d&&v(e),V(l),V(r),V(c),w=!1,be(b)}}}function ce(s){let e,n,l,t,a=s[11].length>1&&ue(s);return l=new $e({props:{component:nt,code:s[9],fileName:s[6],language:s[7]?s[8]:void 0,$$slots:{default:[et]},$$scope:{ctx:s}}}),{c(){a&&a.c(),e=C(),n=T("div"),B(l.$$.fragment),this.h()},l(r){a&&a.l(r),e=D(r),n=y(r,"DIV",{class:!0});var o=I(n);R(l.$$.fragment,o),o.forEach(v),this.h()},h(){g(n,"class","border border-top-0")},m(r,o){a&&a.m(r,o),z(r,e,o),z(r,n,o),M(l,n,null),t=!0},p(r,o){r[11].length>1?a?a.p(r,o):(a=ue(r),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null);const i={};o&512&&(i.code=r[9]),o&64&&(i.fileName=r[6]),o&384&&(i.language=r[7]?r[8]:void 0),o&268435456&&(i.$$scope={dirty:o,ctx:r}),l.$set(i)},i(r){t||(k(l.$$.fragment,r),t=!0)},o(r){L(l.$$.fragment,r),t=!1},d(r){r&&(v(e),v(n)),a&&a.d(r),V(l)}}}function ue(s){let e,n=te(s[11]),l=[];for(let t=0;t<n.length;t+=1)l[t]=fe(re(s,n,t));return{c(){e=T("ul");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=y(t,"UL",{class:!0});var a=I(e);for(let r=0;r<l.length;r+=1)l[r].l(a);a.forEach(v),this.h()},h(){g(e,"class","nav nav-underline p-3 border-start border-end")},m(t,a){z(t,e,a);for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(e,null)},p(t,a){if(a&2112){n=te(t[11]);let r;for(r=0;r<n.length;r+=1){const o=re(t,n,r);l[r]?l[r].p(o,a):(l[r]=fe(o),l[r].c(),l[r].m(e,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=n.length}},d(t){t&&v(e),Ve(l,t)}}}function fe(s){let e,n,l=s[25]+"",t,a,r,o;function i(){return s[23](s[25])}return{c(){e=T("li"),n=T("button"),t=Pe(l),a=C(),this.h()},l(c){e=y(c,"LI",{class:!0});var f=I(e);n=y(f,"BUTTON",{class:!0});var w=I(n);t=Oe(w,l),w.forEach(v),a=D(f),f.forEach(v),this.h()},h(){g(n,"class","nav-link"),ee(n,"active",s[6]===s[25]),g(e,"class","nav-item")},m(c,f){z(c,e,f),E(e,n),E(n,t),E(e,a),r||(o=J(n,"click",i),r=!0)},p(c,f){s=c,f&2048&&l!==(l=s[25]+"")&&Re(t,l),f&2112&&ee(n,"active",s[6]===s[25])},d(c){c&&v(e),r=!1,o()}}}function et(s){let e,n='<span class="visually-hidden">Loading...</span>';return{c(){e=T("div"),e.innerHTML=n,this.h()},l(l){e=y(l,"DIV",{class:!0,role:!0,"data-svelte-h":!0}),ve(e)!=="svelte-1jl1g7d"&&(e.innerHTML=n),this.h()},h(){g(e,"class","spinner-border text-primary"),g(e,"role","status")},m(l,t){z(l,e,t)},p:Ue,d(l){l&&v(e)}}}function tt(s){let e,n,l,t,a,r,o,i,c,f,w,b,d=s[12]&&oe(),u=s[4]&&ie(s),h=s[0]&&ce(s);return{c(){e=T("div"),n=T("div"),d&&d.c(),l=C(),t=T("iframe"),i=C(),u&&u.c(),c=C(),h&&h.c(),this.h()},l(_){e=y(_,"DIV",{class:!0});var m=I(e);n=y(m,"DIV",{class:!0});var S=I(n);d&&d.l(S),l=D(S),t=y(S,"IFRAME",{class:!0,title:!0}),I(t).forEach(v),S.forEach(v),i=D(m),u&&u.l(m),c=D(m),h&&h.l(m),m.forEach(v),this.h()},h(){g(t,"class","demo-sample d-block"),g(t,"title",s[1]),g(n,"class",o=$(`position-relative ${s[3]?"border-bottom":"border"} `)+" svelte-v70n3d"),g(e,"class","mb-4 py-2 px-0 px-sm-3")},m(_,m){z(_,e,m),E(e,n),d&&d.m(n,null),E(n,l),E(n,t),E(e,i),u&&u.m(e,null),E(e,c),h&&h.m(e,null),f=!0,w||(b=[O(a=lt.call(null,t,s[10])),O(r=s[14].call(null,t,s[5]))],w=!0)},p(_,[m]){_[12]?d||(d=oe(),d.c(),d.m(n,l)):d&&(d.d(1),d=null),(!f||m&2)&&g(t,"title",_[1]),a&&x(a.update)&&m&1024&&a.update.call(null,_[10]),r&&x(r.update)&&m&32&&r.update.call(null,_[5]),(!f||m&8&&o!==(o=$(`position-relative ${_[3]?"border-bottom":"border"} `)+" svelte-v70n3d"))&&g(n,"class",o),_[4]?u?(u.p(_,m),m&16&&k(u,1)):(u=ie(_),u.c(),k(u,1),u.m(e,c)):u&&(A(),L(u,1,1,()=>{u=null}),F()),_[0]?h?(h.p(_,m),m&1&&k(h,1)):(h=ce(_),h.c(),k(h,1),h.m(e,null)):h&&(A(),L(h,1,1,()=>{h=null}),F())},i(_){f||(k(u),k(h),f=!0)},o(_){L(u),L(h),f=!1},d(_){_&&v(e),d&&d.d(),u&&u.d(),h&&h.d(),w=!1,be(b)}}}const lt=(s,e)=>{const n=l=>{var t;return(t=s.contentWindow)==null?void 0:t.location.replace(new URL(l,window.location.href))};return n(e),{update:n}},nt=()=>de(()=>import("./Code.An7lNhr0.js").then(s=>s.a),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url);function st(s,e,n){let l,t,a,r,o,i,c,f,w,b;j(s,Ae,p=>n(8,f=p)),j(s,Fe,p=>n(20,w=p));let{title:d}=e,{sample:u}=e,{noresize:h=!1}=e,{height:_}=e,{isDoc:m=!1}=e,{urlParameters:S=void 0}=e,{showButtons:P=!0}=e,{showCode:N=!1}=e,X="";async function Le(p,Ie,ze,Ne){n(9,X=p?await ze.files[Ie].files[Ne]():"")}const{showSpinner$:K,handler:Ee}=xe(_,!h);j(s,K,p=>n(12,b=p));const Te=()=>n(0,N=!N),ye=async()=>(await de(()=>import("./index.5yIbNDtm.js"),__vite__mapDeps([10,11]),import.meta.url)).openInStackblitz(u,f),Se=p=>n(6,r=p);return s.$$set=p=>{"title"in p&&n(1,d=p.title),"sample"in p&&n(2,u=p.sample),"noresize"in p&&n(15,h=p.noresize),"height"in p&&n(16,_=p.height),"isDoc"in p&&n(3,m=p.isDoc),"urlParameters"in p&&n(17,S=p.urlParameters),"showButtons"in p&&n(4,P=p.showButtons),"showCode"in p&&n(0,N=p.showCode)},s.$$.update=()=>{s.$$.dirty&260&&n(7,l=u.files[f].entryPoint==="placeholder"),s.$$.dirty&132&&n(18,t=l?"placeholder/placeholdersample":`${u.componentName}/${u.sampleName}`.toLowerCase()),s.$$.dirty&260&&n(11,a=Object.keys(u.files[f].files)),s.$$.dirty&260&&n(6,r=u.files[f].entryPoint),s.$$.dirty&260&&n(19,o=u.files[f].complementaryUrl),s.$$.dirty&325&&Le(N,f,u,r),s.$$.dirty&1835264&&n(5,i=`${w}${f}/samples${o}/#/${t}`),s.$$.dirty&131104&&n(10,c=i+(S?`#${JSON.stringify(S)}`:""))},[N,d,u,m,P,i,r,l,f,X,c,a,b,K,Ee,h,_,S,t,o,w,Te,ye,Se]}class dt extends we{constructor(e){super(),ke(this,e,st,tt,he,{title:1,sample:2,noresize:15,height:16,isDoc:3,urlParameters:17,showButtons:4,showCode:0})}}export{dt as S,se as h,je as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Code.An7lNhr0.js","./scheduler.Q0hAFj3-.js","./index.0hJEAOOZ.js","./tooltip.2QOt5jhQ.js","./stores.XcCoiG2v.js","./stores.5dQtIZt6.js","./entry.IJgLr6yD.js","./directive.wQE11ESp.js","./Svg.vTIkg8kS.js","../assets/Code.L6QTLY0L.css","./index.5yIbNDtm.js","./preload-helper.0HuHagjb.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
