import{s as re,e as v,a as N,c as p,b as $,g as D,f as m,o as f,i as P,h,n as ue,v as ge,k as Q,t as J,E as se,d as Z,w as ee,j as fe,x as Me,a0 as ce,J as He,B as je,l as _e,$ as Fe,u as ve,p as pe,q as be,z as Ge}from"../chunks/scheduler.l1yozE5D.js";import{S as ie,i as oe,c as H,a as j,m as F,t as V,g as he,b as T,e as me,d as G}from"../chunks/index.94WAa3an.js";import{S as ne}from"../chunks/Svg.S2MCMmQX.js";import{e as te,a as We,p as Be,l as Je,m as Ze,q as Ke,v as Qe}from"../chunks/app.xe8adDxq.js";import{a as Xe,o as Ye}from"../chunks/entry.7u1AYX51.js";import{p as xe,u as Ne}from"../chunks/stores.xoUjZqTF.js";const et=!0,Nt=Object.freeze(Object.defineProperty({__proto__:null,prerender:et},Symbol.toStringTag,{value:"Module"})),tt=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>`,at=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg>`,lt=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cone-striped" viewBox="0 0 16 16">
  <path d="m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9s-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12m-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4s1.2-.036 1.725-.098m4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257z"/>
</svg>`,nt=`<svg data-v-5b7ea3a9="" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24"
    class="menu-icon">
    <path d="M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z"></path>
    <path d="M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z"></path>
    <path d="M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z"></path>
    <path d="M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z"></path>
</svg>`,rt=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
</svg>`;function De(i,e,a){const t=i.slice();return t[7]=e[a].title,t[8]=e[a].submenu,t}function Ve(i,e,a){const t=i.slice();t[11]=e[a].label,t[12]=e[a].path,t[13]=e[a].subpath;const n=t[3].url.pathname?.includes(t[12]);return t[14]=n,t}function Te(i){let e,a="Framework",t,n,o,r,s,l,c,u,d,_,C,b,E,k,I,L,R;return{c(){e=v("strong"),e.textContent=a,t=N(),n=v("div"),o=v("div"),r=v("a"),s=J("Angular"),u=N(),d=v("a"),_=J("React"),E=N(),k=v("a"),I=J("Svelte"),this.h()},l(g){e=p(g,"STRONG",{class:!0,"data-svelte-h":!0}),se(e)!=="svelte-1cmn3jf"&&(e.textContent=a),t=D(g),n=p(g,"DIV",{class:!0});var M=$(n);o=p(M,"DIV",{class:!0,role:!0,"aria-label":!0});var y=$(o);r=p(y,"A",{href:!0,class:!0,"aria-current":!0});var K=$(r);s=Z(K,"Angular"),K.forEach(m),u=D(y),d=p(y,"A",{href:!0,class:!0,"aria-current":!0});var w=$(d);_=Z(w,"React"),w.forEach(m),E=D(y),k=p(y,"A",{href:!0,class:!0,"aria-current":!0});var S=$(k);I=Z(S,"Svelte"),S.forEach(m),y.forEach(m),M.forEach(m),this.h()},h(){f(e,"class","d-flex w-100 align-items-center fw-semibold"),f(r,"href",l=`${i[4]}docs/angular/${i[5]}`),f(r,"class","btn btn-outline-primary"),f(r,"aria-current",c=!i[2]||"page"),ee(r,"active",i[2]),f(d,"href",C=`${i[4]}docs/react/${i[5]}`),f(d,"class","btn btn-outline-primary"),f(d,"aria-current",b=!i[1]||"page"),ee(d,"active",i[1]),f(k,"href",L=`${i[4]}docs/svelte/${i[5]}`),f(k,"class","btn btn-outline-primary"),f(k,"aria-current",R=!i[0]||"page"),ee(k,"active",i[0]),f(o,"class","btn-group btn-group-sm me-2 my-2 bg-white"),f(o,"role","group"),f(o,"aria-label","Basic radio toggle button group"),f(n,"class","col flex-grow-0")},m(g,M){P(g,e,M),P(g,t,M),P(g,n,M),h(n,o),h(o,r),h(r,s),h(o,u),h(o,d),h(d,_),h(o,E),h(o,k),h(k,I)},p(g,M){M&48&&l!==(l=`${g[4]}docs/angular/${g[5]}`)&&f(r,"href",l),M&4&&c!==(c=!g[2]||"page")&&f(r,"aria-current",c),M&4&&ee(r,"active",g[2]),M&48&&C!==(C=`${g[4]}docs/react/${g[5]}`)&&f(d,"href",C),M&2&&b!==(b=!g[1]||"page")&&f(d,"aria-current",b),M&2&&ee(d,"active",g[1]),M&48&&L!==(L=`${g[4]}docs/svelte/${g[5]}`)&&f(k,"href",L),M&1&&R!==(R=!g[0]||"page")&&f(k,"aria-current",R),M&1&&ee(k,"active",g[0])},d(g){g&&(m(e),m(t),m(n))}}}function Pe(i){let e,a=i[11]+"",t,n,o;return{c(){e=v("a"),t=J(a),this.h()},l(r){e=p(r,"A",{class:!0,"aria-current":!0,href:!0});var s=$(e);t=Z(s,a),s.forEach(m),this.h()},h(){f(e,"class","menu-item menu-item-sidenav"),f(e,"aria-current",n=i[14]?"page":void 0),f(e,"href",o=""+(i[4]+i[12]+i[13])),ee(e,"active",i[14])},m(r,s){P(r,e,s),h(e,t)},p(r,s){s&8&&a!==(a=r[11]+"")&&fe(t,a),s&8&&n!==(n=r[14]?"page":void 0)&&f(e,"aria-current",n),s&24&&o!==(o=""+(r[4]+r[12]+r[13]))&&f(e,"href",o),s&8&&ee(e,"active",r[14])},d(r){r&&m(e)}}}function ye(i){let e,a=i[7]+"",t,n,o,r,s=te(i[8]),l=[];for(let c=0;c<s.length;c+=1)l[c]=Pe(Ve(i,s,c));return{c(){e=v("strong"),t=J(a),n=N(),o=v("div");for(let c=0;c<l.length;c+=1)l[c].c();r=N(),this.h()},l(c){e=p(c,"STRONG",{class:!0});var u=$(e);t=Z(u,a),u.forEach(m),n=D(c),o=p(c,"DIV",{class:!0});var d=$(o);for(let _=0;_<l.length;_+=1)l[_].l(d);r=D(d),d.forEach(m),this.h()},h(){f(e,"class","d-flex w-100 align-items-center fw-semibold"),f(o,"class","my-2")},m(c,u){P(c,e,u),h(e,t),P(c,n,u),P(c,o,u);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(o,null);h(o,r)},p(c,u){if(u&8&&a!==(a=c[7]+"")&&fe(t,a),u&24){s=te(c[8]);let d;for(d=0;d<s.length;d+=1){const _=Ve(c,s,d);l[d]?l[d].p(_,u):(l[d]=Pe(_),l[d].c(),l[d].m(o,r))}for(;d<l.length;d+=1)l[d].d(1);l.length=s.length}},d(c){c&&(m(e),m(n),m(o)),ge(l,c)}}}function st(i){let e,a,t=i[3].data.includesFwk&&Te(i),n=te(i[3].data.menu??[]),o=[];for(let r=0;r<n.length;r+=1)o[r]=ye(De(i,n,r));return{c(){e=v("nav"),t&&t.c(),a=N();for(let r=0;r<o.length;r+=1)o[r].c();this.h()},l(r){e=p(r,"NAV",{class:!0});var s=$(e);t&&t.l(s),a=D(s);for(let l=0;l<o.length;l+=1)o[l].l(s);s.forEach(m),this.h()},h(){f(e,"class","w-100 mt-1")},m(r,s){P(r,e,s),t&&t.m(e,null),h(e,a);for(let l=0;l<o.length;l+=1)o[l]&&o[l].m(e,null)},p(r,[s]){if(r[3].data.includesFwk?t?t.p(r,s):(t=Te(r),t.c(),t.m(e,a)):t&&(t.d(1),t=null),s&24){n=te(r[3].data.menu??[]);let l;for(l=0;l<n.length;l+=1){const c=De(r,n,l);o[l]?o[l].p(c,s):(o[l]=ye(c),o[l].c(),o[l].m(e,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=n.length}},i:ue,o:ue,d(r){r&&m(e),t&&t.d(),ge(o,r)}}}function it(i,e,a){let t,n,o,r,s,l,c;return Q(i,We,u=>a(6,r=u)),Q(i,xe,u=>a(3,s=u)),Q(i,Be,u=>a(4,l=u)),Q(i,Je,u=>a(5,c=u)),i.$$.update=()=>{i.$$.dirty&64&&a(2,t=r==="angular"),i.$$.dirty&64&&a(1,n=r==="react"),i.$$.dirty&64&&a(0,o=r==="svelte")},[o,n,t,s,l,c,r]}class Ue extends ie{constructor(e){super(),oe(this,e,it,st,re,{})}}function Le(i,e,a){const t=i.slice();t[5]=e[a];const n=t[1].has(t[5]);t[6]=n;const o=t[4](t[5],t[6]);return t[7]=o.label,t[8]=o.classname,t[9]=o.href,t}function Oe(i){let e,a,t="On this page",n,o,r=te(i[0]),s=[];for(let l=0;l<r.length;l+=1)s[l]=qe(Le(i,r,l));return{c(){e=v("div"),a=v("div"),a.textContent=t,n=N(),o=v("div");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){e=p(l,"DIV",{class:!0});var c=$(e);a=p(c,"DIV",{class:!0,"data-svelte-h":!0}),se(a)!=="svelte-1qsi4yl"&&(a.textContent=t),n=D(c),o=p(c,"DIV",{});var u=$(o);for(let d=0;d<s.length;d+=1)s[d].l(u);u.forEach(m),c.forEach(m),this.h()},h(){f(a,"class","d-none d-md-block fw-bold pb-2 mb-1"),f(e,"class","ms-2 mt-1 border-start-1")},m(l,c){P(l,e,c),h(e,a),h(e,n),h(e,o);for(let u=0;u<s.length;u+=1)s[u]&&s[u].m(o,null)},p(l,c){if(c&19){r=te(l[0]);let u;for(u=0;u<r.length;u+=1){const d=Le(l,r,u);s[u]?s[u].p(d,c):(s[u]=qe(d),s[u].c(),s[u].m(o,null))}for(;u<s.length;u+=1)s[u].d(1);s.length=r.length}},d(l){l&&m(e),ge(s,l)}}}function qe(i){let e,a=i[7]+"",t,n,o,r,s;return{c(){e=v("a"),t=J(a),n=N(),this.h()},l(l){e=p(l,"A",{class:!0,"aria-current":!0,href:!0});var c=$(e);t=Z(c,a),n=D(c),c.forEach(m),this.h()},h(){f(e,"class",o=i[8]),f(e,"aria-current",r=i[6]?"page":void 0),f(e,"href",s=i[9])},m(l,c){P(l,e,c),h(e,t),h(e,n)},p(l,c){c&3&&a!==(a=l[7]+"")&&fe(t,a),c&3&&o!==(o=l[8])&&f(e,"class",o),c&3&&r!==(r=l[6]?"page":void 0)&&f(e,"aria-current",r),c&3&&s!==(s=l[9])&&f(e,"href",s)},d(l){l&&m(e)}}}function ot(i){let e,a=i[0].length&&Oe(i);return{c(){a&&a.c(),e=Me()},l(t){a&&a.l(t),e=Me()},m(t,n){a&&a.m(t,n),P(t,e,n)},p(t,[n]){t[0].length?a?a.p(t,n):(a=Oe(t),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null)},i:ue,o:ue,d(t){t&&m(e),a&&a.d(t)}}}function ct(i,e,a){let t,n;const{elements$:o,visibleElements$:r}=Ze;Q(i,o,l=>a(0,t=l)),Q(i,r,l=>a(1,n=l));function s(l,c){const u=l.querySelector("h1,h2,h3");if(u){const d=[`menu-item menu-item-toc toc-${u.tagName.toLowerCase()}`],_=l.querySelector("section");return(_&&r().has(_)||!_&&c)&&d.push("active"),{label:u.innerText,href:u.querySelector("a")?.getAttribute("href")??"",classname:d.join(" ")}}else return{label:"",href:"",classname:""}}return[t,n,o,r,s]}class Re extends ie{constructor(e){super(),oe(this,e,ct,ot,re,{})}}function ze(i){let e,a,t="On this page",n,o,r,s,l;return o=new ne({props:{svg:rt,className:"icon-20 me-1"}}),{c(){e=v("button"),a=v("span"),a.textContent=t,n=N(),H(o.$$.fragment),this.h()},l(c){e=p(c,"BUTTON",{class:!0,"aria-expanded":!0});var u=$(e);a=p(u,"SPAN",{class:!0,"data-svelte-h":!0}),se(a)!=="svelte-mykh62"&&(a.textContent=t),n=D(u),j(o.$$.fragment,u),u.forEach(m),this.h()},h(){f(a,"class","menu-text"),f(e,"class","text-dark d-flex align-items-center btn btn-link link-underline link-underline-opacity-0"),f(e,"aria-expanded",i[2])},m(c,u){P(c,e,u),h(e,a),h(e,n),F(o,e,null),r=!0,s||(l=ce(e,"click",i[9]),s=!0)},p(c,u){(!r||u&4)&&f(e,"aria-expanded",c[2])},i(c){r||(V(o.$$.fragment,c),r=!0)},o(c){T(o.$$.fragment,c),r=!1},d(c){c&&m(e),G(o),s=!1,l()}}}function ut(i){let e,a;return e=new Re({}),{c(){H(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,n){F(e,t,n),a=!0},i(t){a||(V(e.$$.fragment,t),a=!0)},o(t){T(e.$$.fragment,t),a=!1},d(t){G(e,t)}}}function ft(i){let e,a;return e=new Ue({}),{c(){H(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,n){F(e,t,n),a=!0},i(t){a||(V(e.$$.fragment,t),a=!0)},o(t){T(e.$$.fragment,t),a=!1},d(t){G(e,t)}}}function dt(i){let e,a,t,n,o="Menu",r,s,l,c,u,d,_,C,b,E,k,I,L,R;t=new ne({props:{svg:nt,className:"icon-20 me-1"}});let g=!i[0]&&ze(i);const M=[ft,ut],y=[];function K(w,S){return w[1]?0:1}return E=K(i),k=y[E]=M[E](i),{c(){e=v("div"),a=v("button"),H(t.$$.fragment),n=v("span"),n.textContent=o,r=N(),g&&g.c(),s=N(),l=v("dialog"),c=v("div"),u=v("span"),d=J(i[4]),_=N(),C=v("button"),b=N(),k.c(),this.h()},l(w){e=p(w,"DIV",{class:!0});var S=$(e);a=p(S,"BUTTON",{class:!0,"aria-expanded":!0});var O=$(a);j(t.$$.fragment,O),n=p(O,"SPAN",{class:!0,"data-svelte-h":!0}),se(n)!=="svelte-pf72vn"&&(n.textContent=o),O.forEach(m),r=D(S),g&&g.l(S),S.forEach(m),s=D(w),l=p(w,"DIALOG",{class:!0});var X=$(l);c=p(X,"DIV",{class:!0});var B=$(c);u=p(B,"SPAN",{class:!0});var q=$(u);d=Z(q,i[4]),q.forEach(m),_=D(B),C=p(B,"BUTTON",{type:!0,class:!0,"aria-label":!0}),$(C).forEach(m),B.forEach(m),b=D(X),k.l(X),X.forEach(m),this.h()},h(){f(n,"class","menu-text"),f(a,"class","text-dark d-flex align-items-center btn btn-link link-underline link-underline-opacity-0"),f(a,"aria-expanded",i[1]),f(e,"class","d-flex align-items-center justify-content-between"),f(u,"class","menu-title-text svelte-7z99pq"),f(C,"type","button"),f(C,"class","btn-close pb-3 pe-3 svelte-7z99pq"),f(C,"aria-label","Close menu"),f(c,"class","menu-title text-center border-bottom pb-2 svelte-7z99pq"),f(l,"class","svelte-7z99pq")},m(w,S){P(w,e,S),h(e,a),F(t,a,null),h(a,n),h(e,r),g&&g.m(e,null),P(w,s,S),P(w,l,S),h(l,c),h(c,u),h(u,d),h(c,_),h(c,C),h(l,b),y[E].m(l,null),i[10](l),I=!0,L||(R=[ce(a,"click",i[8]),ce(l,"close",i[5]),ce(l,"click",i[6])],L=!0)},p(w,[S]){(!I||S&2)&&f(a,"aria-expanded",w[1]),w[0]?g&&(he(),T(g,1,1,()=>{g=null}),me()):g?(g.p(w,S),S&1&&V(g,1)):(g=ze(w),g.c(),V(g,1),g.m(e,null)),(!I||S&16)&&fe(d,w[4]);let O=E;E=K(w),E!==O&&(he(),T(y[O],1,1,()=>{y[O]=null}),me(),k=y[E],k||(k=y[E]=M[E](w),k.c()),V(k,1),k.m(l,null))},i(w){I||(V(t.$$.fragment,w),V(g),V(k),I=!0)},o(w){T(t.$$.fragment,w),T(g),T(k),I=!1},d(w){w&&(m(e),m(s),m(l)),G(t),g&&g.d(),y[E].d(),i[10](null),L=!1,He(R)}}}function ht(i,e,a){let t,n,o=!1,r=!1,s,{isMainPage:l=!0}=e;function c(){a(1,o=a(2,r=!1))}function u(b){const E=b.target.tagName.toLowerCase();(E==="button"||E==="a")&&s.close()}const d=()=>{a(1,o=!0)},_=()=>{a(2,r=!0)};function C(b){je[b?"unshift":"push"](()=>{s=b,a(3,s)})}return i.$$set=b=>{"isMainPage"in b&&a(0,l=b.isMainPage)},i.$$.update=()=>{i.$$.dirty&6&&a(4,t=o?"Menu":r?"On this page":""),i.$$.dirty&6&&a(7,n=o||r),i.$$.dirty&136&&n&&s?.showModal()},[l,o,r,s,t,c,u,n,d,_,C]}class mt extends ie{constructor(e){super(),oe(this,e,ht,dt,re,{isMainPage:0})}}function gt(i){let e,a,t,n;const o=i[2].default,r=_e(o,i,i[1],null);return{c(){e=v("div"),r&&r.c()},l(s){e=p(s,"DIV",{});var l=$(e);r&&r.l(l),l.forEach(m)},m(s,l){P(s,e,l),r&&r.m(e,null),a=!0,t||(n=Fe(i[0].call(null,e)),t=!0)},p(s,[l]){r&&r.p&&(!a||l&2)&&ve(r,o,s,s[1],a?be(o,s[1],l,null):pe(s[1]),null)},i(s){a||(V(r,s),a=!0)},o(s){T(r,s),a=!1},d(s){s&&m(e),r&&r.d(s),t=!1,n()}}}function _t(i,e,a){let{$$slots:t={},$$scope:n}=e;const o=Ke(r=>Array.from(r.querySelectorAll("section")));return i.$$set=r=>{"$$scope"in r&&a(1,n=r.$$scope)},[o,n,t]}class vt extends ie{constructor(e){super(),oe(this,e,_t,gt,re,{})}}function pt(i){let e,a,t,n,o,r,s,l,c,u,d;return n=new Ue({}),s=new vt({props:{$$slots:{default:[$t]},$$scope:{ctx:i}}}),u=new Re({}),{c(){e=v("div"),a=v("div"),t=v("aside"),H(n.$$.fragment),o=N(),r=v("div"),H(s.$$.fragment),l=N(),c=v("div"),H(u.$$.fragment),this.h()},l(_){e=p(_,"DIV",{class:!0});var C=$(e);a=p(C,"DIV",{class:!0});var b=$(a);t=p(b,"ASIDE",{class:!0});var E=$(t);j(n.$$.fragment,E),E.forEach(m),o=D(b),r=p(b,"DIV",{class:!0});var k=$(r);j(s.$$.fragment,k),k.forEach(m),l=D(b),c=p(b,"DIV",{class:!0});var I=$(c);j(u.$$.fragment,I),I.forEach(m),b.forEach(m),C.forEach(m),this.h()},h(){f(t,"class","demo-sidebar d-none d-md-flex col-auto flex-column flex-shrink-0 align-items-center align-items-sm-start svelte-1ks0b1a"),f(r,"class","pb-4 col"),f(c,"class","demo-toc col-auto d-none d-lg-flex svelte-1ks0b1a"),f(a,"class","row flex-wrap flex-sm-nowrap align-content-between"),f(e,"class","container-xxl")},m(_,C){P(_,e,C),h(e,a),h(a,t),F(n,t,null),h(a,o),h(a,r),F(s,r,null),h(a,l),h(a,c),F(u,c,null),d=!0},p(_,C){const b={};C&16&&(b.$$scope={dirty:C,ctx:_}),s.$set(b)},i(_){d||(V(n.$$.fragment,_),V(s.$$.fragment,_),V(u.$$.fragment,_),d=!0)},o(_){T(n.$$.fragment,_),T(s.$$.fragment,_),T(u.$$.fragment,_),d=!1},d(_){_&&m(e),G(n),G(s),G(u)}}}function bt(i){let e;const a=i[3].default,t=_e(a,i,i[4],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,o){t&&t.m(n,o),e=!0},p(n,o){t&&t.p&&(!e||o&16)&&ve(t,a,n,n[4],e?be(a,n[4],o,null):pe(n[4]),null)},i(n){e||(V(t,n),e=!0)},o(n){T(t,n),e=!1},d(n){t&&t.d(n)}}}function $t(i){let e;const a=i[3].default,t=_e(a,i,i[4],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,o){t&&t.m(n,o),e=!0},p(n,o){t&&t.p&&(!e||o&16)&&ve(t,a,n,n[4],e?be(a,n[4],o,null):pe(n[4]),null)},i(n){e||(V(t,n),e=!0)},o(n){T(t,n),e=!1},d(n){t&&t.d(n)}}}function kt(i){let e,a,t,n,o,r,s,l,c="Work In Progress",u,d,_,C,b,E,k,I,L,R,g,M,y="0.0.0",K,w,S,O,X,B,q,U,ae;_=new ne({props:{className:"icon-20 align-middle",svg:lt}}),E=new ne({props:{className:"icon-24 align-middle",svg:tt}}),L=new ne({props:{className:"icon-24 align-middle",svg:at}}),O=new mt({props:{isMainPage:i[0]}});const $e=[bt,pt],Y=[];function ke(A,z){return A[0]?0:1}return q=ke(i),U=Y[q]=$e[q](i),{c(){e=v("div"),a=v("nav"),t=v("div"),n=v("a"),o=J("AgnosUI"),r=N(),s=v("div"),l=v("span"),l.textContent=c,u=N(),d=v("span"),H(_.$$.fragment),C=N(),b=v("a"),H(E.$$.fragment),k=N(),I=v("a"),H(L.$$.fragment),R=N(),g=v("span"),M=J("v"),K=J(y),w=N(),S=v("div"),H(O.$$.fragment),X=N(),B=v("div"),U.c(),this.h()},l(A){e=p(A,"DIV",{class:!0});var z=$(e);a=p(z,"NAV",{class:!0});var le=$(a);t=p(le,"DIV",{class:!0});var x=$(t);n=p(x,"A",{class:!0,href:!0});var we=$(n);o=Z(we,"AgnosUI"),we.forEach(m),r=D(x),s=p(x,"DIV",{class:!0});var W=$(s);l=p(W,"SPAN",{class:!0,"data-svelte-h":!0}),se(l)!=="svelte-vbyynh"&&(l.textContent=c),u=D(W),d=p(W,"SPAN",{class:!0,"aria-label":!0});var Ee=$(d);j(_.$$.fragment,Ee),Ee.forEach(m),C=D(W),b=p(W,"A",{class:!0,href:!0,"aria-label":!0,target:!0});var Ce=$(b);j(E.$$.fragment,Ce),Ce.forEach(m),k=D(W),I=p(W,"A",{class:!0,href:!0,"aria-label":!0,target:!0});var Se=$(I);j(L.$$.fragment,Se),Se.forEach(m),R=D(W),g=p(W,"SPAN",{class:!0});var de=$(g);M=Z(de,"v"),K=Z(de,y),de.forEach(m),W.forEach(m),x.forEach(m),le.forEach(m),w=D(z),S=p(z,"DIV",{class:!0});var Ae=$(S);j(O.$$.fragment,Ae),Ae.forEach(m),X=D(z),B=p(z,"DIV",{class:!0});var Ie=$(B);U.l(Ie),Ie.forEach(m),z.forEach(m),this.h()},h(){f(n,"class","navbar-brand"),f(n,"href",i[1]),f(l,"class","badge bg-warning text-bg-warning d-none d-sm-block"),f(d,"class","badge rounded-pill bg-warning text-bg-warning d-block d-sm-none"),f(d,"aria-label","Work In Progress"),f(b,"class","nav-link text-white ms-3"),f(b,"href","https://github.com/AmadeusITGroup/AgnosUI"),f(b,"aria-label","link to GitHub repository"),f(b,"target","_blank"),f(I,"class","nav-link text-white ms-3"),f(I,"href","https://twitter.com/AgnosUI"),f(I,"aria-label","link to twitter / x account"),f(I,"target","_blank"),f(g,"class","ms-3 text-white"),f(s,"class","d-flex align-items-center"),f(t,"class","container-fluid"),f(a,"class","demo-nav-top navbar navbar-dark bg-primary bg-gradient svelte-1ks0b1a"),f(S,"class","demo-mobile-menu d-block d-md-none svelte-1ks0b1a"),f(B,"class","demo-main d-flex flex-column svelte-1ks0b1a"),f(e,"class","agnos-ui svelte-1ks0b1a")},m(A,z){P(A,e,z),h(e,a),h(a,t),h(t,n),h(n,o),h(t,r),h(t,s),h(s,l),h(s,u),h(s,d),F(_,d,null),h(s,C),h(s,b),F(E,b,null),h(s,k),h(s,I),F(L,I,null),h(s,R),h(s,g),h(g,M),h(g,K),h(e,w),h(e,S),F(O,S,null),h(e,X),h(e,B),Y[q].m(B,null),ae=!0},p(A,[z]){(!ae||z&2)&&f(n,"href",A[1]);const le={};z&1&&(le.isMainPage=A[0]),O.$set(le);let x=q;q=ke(A),q===x?Y[q].p(A,z):(he(),T(Y[x],1,1,()=>{Y[x]=null}),me(),U=Y[q],U?U.p(A,z):(U=Y[q]=$e[q](A),U.c()),V(U,1),U.m(B,null))},i(A){ae||(V(_.$$.fragment,A),V(E.$$.fragment,A),V(L.$$.fragment,A),V(O.$$.fragment,A),V(U),ae=!0)},o(A){T(_.$$.fragment,A),T(E.$$.fragment,A),T(L.$$.fragment,A),T(O.$$.fragment,A),T(U),ae=!1},d(A){A&&m(e),G(_),G(E),G(L),G(O),Y[q].d()}}}function wt(i,e,a){let t,n,o,r;Q(i,Ne,u=>a(5,n=u)),Q(i,Qe,u=>a(2,o=u)),Q(i,Be,u=>a(1,r=u));let{$$slots:s={},$$scope:l}=e;const c=()=>{Ne.check()};return Ge(()=>(navigator.serviceWorker?.addEventListener("controllerchange",c),()=>{navigator.serviceWorker?.removeEventListener("controllerchange",c)})),Xe(({willUnload:u,to:d})=>{n&&!u&&d?.url&&(location.href=d.url.href)}),Ye(u=>{if(document.startViewTransition)return new Promise(d=>{document.startViewTransition(async()=>{d(),await u.complete})})}),i.$$set=u=>{"$$scope"in u&&a(4,l=u.$$scope)},i.$$.update=()=>{i.$$.dirty&4&&a(0,t=o===0)},[t,r,o,s,l]}class Dt extends ie{constructor(e){super(),oe(this,e,wt,kt,re,{})}}export{Dt as component,Nt as universal};
