import{a1 as X,aw as Y,h as Z,m as nn,av as tn,$ as en,F as on}from"./runtime.CoJv2S2D.js";import{g as sn}from"./entry.D-McWpaY.js";import{I as rn,n as h,w as an,e as w,f as ln,g as k,h as un,i as cn,j as q}from"./stores.CrNXncfw.js";import{a as dn,p as M,m as fn,d as mn,f as pn,g as R,h as bn}from"./logo-typescript.20EjmNxe.js";function vn(n){X(n,n.v+1)}function On(n){let t,r=en(0),i=0,u=on;function f(){return Y()?(Z(r),nn(()=>{if(i===0){let c=!1;u=n.subscribe(m=>{t=m,c&&vn(r)}),c=!0}return i+=1,()=>{i-=1,tn().then(()=>{i===0&&u()})}}),t):sn(n)}return"set"in n?{get current(){return f()},set current(c){n.set(c)}}:{get current(){return f()}}}function W(n){return n===!0||n===!1}function wn(n){return typeof n=="function"}function hn(n){return typeof n=="string"}const yn=n=>t=>t===null||n(t);function $n(n){return t=>n.includes(t)}const y=n=>t=>n(t)?t:rn,O={normalizeValue:y(W)},gn={normalizeValue:y(yn(W))},xn={normalizeValue:y(hn)},C={normalizeValue:y(wn),equal:Object.is};function Bn(n){return{normalizeValue:y($n(n))}}const U=new Promise(h),Sn=(n,t)=>{n.style.display=t==="show"?"":"none"},Vn={animated:!0,animatedOnInit:!1,initDone:null,visible:!0,transition:Sn,onShown:h,onHidden:h,onVisibleChange:h},Dn={animated:O,animatedOnInit:O,visible:O,transition:C,onShown:C,onHidden:C,onVisibleChange:C,initDone:gn},Fn=n=>{const[{animated$:t,initDone$:r,visible$:i,transition$:u,onShown$:f,onHidden$:c,onVisibleChange$:m,animatedOnInit$:$},g]=an(Vn,n,Dn),{element$:E,directive:G}=dn(),x=w(()=>!!E()),S=ln(m,[i],([e])=>e),b=k(null),A=w(()=>!!b()),B=()=>{let e;return b.update(o=>(o?.abort.abort(),e=o?.context,null)),e},J=(e,o,d,a)=>q(()=>{const V=new AbortController,l=V.signal,p=B()??{},{promise:v,resolve:P}=M(),D={abort:V,animated:o,visible:e,context:p,element:d,transitionFn:a,promise:v};return b.set(D),P((async()=>{var j;try{await a(d,e?"show":"hide",o,l,p)}finally{l.aborted?await U:(b.set(null),(j=(e?f:c)())==null||j())}})()),D}),K=w(()=>!A()&&S()&&x()),Q=w(()=>!A()&&!S()),F=w(()=>r()?t():$()),z=k(null);let H,N=i(),s=null;const _=un([S,E,F,z,u,b],([e,o,d,a,V,l])=>{const p=H!==o;H=o;const v=N!==e;if(N=e,o){r()==null&&r.set(!0);const P=a!=null&&l&&l.animated!=a;if(p||v||P){(v||a!=null)&&(s=null);const D=a??s?.animated??(p&&!e?!1:d);l=J(e,D,o,V),s?.resolve(l.promise),s=null}}else p&&(B(),l=null),(v||e&&s?.animated!==a)&&(s=e&&a!=null?{animated:a,...M()}:null);return s?.promise??l?.promise});let L={};const I=async(e=!i(),o=F())=>{const d={};L=d;try{await q(()=>{try{return z.set(o),i.set(e),_()}finally{z.set(null)}})}finally{L!==d&&await U}},T=fn(G,mn(_));return{...cn({visible$:S,element$:E,elementPresent$:x,transitioning$:A,shown$:K,hidden$:Q}),patch:g,directives:{directive:T},api:{show:I.bind(null,!0),hide:I.bind(null,!1),toggle:I}}};function Cn(n){return window.getComputedStyle(n).transitionProperty!=="none"}function En(n){const{transitionDelay:t,transitionDuration:r}=window.getComputedStyle(n),i=parseFloat(t),u=parseFloat(r);return(i+u)*1e3}const Hn=n=>async(t,r,i,u,f)=>{const c=n(t,r,i,f)??h;if(pn(t)&&i&&Cn(t)){const m=R(u,"abort"),$=R(t,"transitionend"),g=bn(En(t));await Promise.race([m.promise,$.promise,g.promise]),m.unsubscribe(),$.unsubscribe(),g.unsubscribe()}u.aborted||c()};export{Fn as a,C as b,Hn as c,xn as d,Bn as e,On as f,O as t};