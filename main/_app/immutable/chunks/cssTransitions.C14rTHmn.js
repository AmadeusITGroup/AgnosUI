import{O as Y,aI as W,i as Z,m as nn,e as tn,ax as en,a3 as sn}from"./runtime.RTR6NQ9h.js";import{g as on}from"./entry.BeLT0LsP.js";import{I as rn,n as y,j as an,g as w,k as ln,w as j,h as un,l as cn,f as q}from"./stores.B18UM2yU.js";import{c as dn,p as M,m as fn,d as mn,a as pn,f as R,g as bn}from"./logo-typescript.BiH8YAfX.js";function vn(n){Y(n,n.v+1)}function wn(n){let t=0,o=sn(0),i;return()=>{W()&&(Z(o),nn(()=>(t===0&&(i=tn(()=>n(()=>vn(o)))),t+=1,()=>{en().then(()=>{t-=1,t===0&&(i?.(),i=void 0)})})))}}function xn(n){let t;const o=wn(a=>{let d=!1;const p=n.subscribe(f=>{t=f,d&&a()});return d=!0,p});function i(){return W()?(o(),t):on(n)}return"set"in n?{get current(){return i()},set current(a){n.set(a)}}:{get current(){return i()}}}function G(n){return n===!0||n===!1}function yn(n){return typeof n=="function"}function gn(n){return typeof n=="string"}const hn=n=>t=>t===null||n(t);function $n(n){return t=>n.includes(t)}const g=n=>t=>n(t)?t:rn,k={normalizeValue:g(G)},Sn={normalizeValue:g(hn(G))},kn={normalizeValue:g(gn)},C={normalizeValue:g(yn),equal:Object.is};function Bn(n){return{normalizeValue:g($n(n))}}const U=new Promise(y),Vn=(n,t)=>{n.style.display=t==="show"?"":"none"},Dn={animated:!0,animatedOnInit:!1,initDone:null,visible:!0,transition:Vn,onShown:y,onHidden:y,onVisibleChange:y},Cn={animated:k,animatedOnInit:k,visible:k,transition:C,onShown:C,onHidden:C,onVisibleChange:C,initDone:Sn},Hn=n=>{const[{animated$:t,initDone$:o,visible$:i,transition$:a,onShown$:d,onHidden$:p,onVisibleChange$:f,animatedOnInit$:h},$]=an(Dn,n,Cn),{element$:E,directive:J}=dn(),A=w(()=>!!E()),S=ln(f,[i],([e])=>e),b=j(null),B=()=>{let e;return b.update(s=>(s?.abort.abort(),e=s?.context,null)),e},K=(e,s,c,l)=>q(()=>{const V=new AbortController,u=V.signal,m=B()??{},{promise:v,resolve:x}=M(),D={abort:V,animated:s,visible:e,context:m,element:c,transitionFn:l,promise:v};return b.set(D),x((async()=>{var L;try{await l(c,e?"show":"hide",s,u,m)}finally{u.aborted?await U:(b.set(null),(L=(e?d:p)())==null||L())}})()),D}),H=w(()=>o()?t():h()),I=j(null);let N,_=i(),r=null;const z=un([S,E,H,I,a,b],([e,s,c,l,V,u])=>{const m=N!==s;N=s;const v=_!==e;if(_=e,s){o()==null&&o.set(!0);const x=l!=null&&u&&u.animated!=l;if(m||v||x){(v||l!=null)&&(r=null);const D=l??r?.animated??(m&&!e?!1:c);u=K(e,D,s,V),r?.resolve(u.promise),r=null}}else m&&(B(),u=null),(v||e&&r?.animated!==l)&&(r=e&&l!=null?{animated:l,...M()}:null);return r?.promise??u?.promise});let F={};const O=async(e=!i(),s=H())=>{const c={};F=c;try{await q(()=>{try{return I.set(s),i.set(e),z()}finally{I.set(null)}})}finally{F!==c&&await U}},P=w(()=>(A()&&z(),!!b())),Q=w(()=>!P()&&S()&&A()),T=w(()=>!P()&&!S()),X=fn(J,mn(z));return{...cn({visible$:S,element$:E,elementPresent$:A,transitioning$:P,shown$:Q,hidden$:T}),patch:$,directives:{directive:X},api:{show:O.bind(null,!0),hide:O.bind(null,!1),toggle:O}}};function En(n){return window.getComputedStyle(n).transitionProperty!=="none"}function An(n){const{transitionDelay:t,transitionDuration:o}=window.getComputedStyle(n),i=parseFloat(t),a=parseFloat(o);return(i+a)*1e3}const Nn=n=>async(t,o,i,a,d)=>{const p=n(t,o,i,d)??y;if(pn(t)&&i&&En(t)){const f=R(a,"abort"),h=R(t,"transitionend"),$=bn(An(t));await Promise.race([f.promise,h.promise,$.promise]),f.unsubscribe(),h.unsubscribe(),$.unsubscribe()}a.aborted||p()};export{Hn as a,C as b,Nn as c,kn as d,Bn as e,xn as f,k as t};
