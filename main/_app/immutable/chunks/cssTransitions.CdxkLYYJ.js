import{I as Y,n as v,w as Z,c as b,d as T,e as U,f as nn,g as tn,h as _}from"./stores.b94hcspI.js";import{c as en,p as j,m as on,d as sn,f as an,i as rn,g as R,h as ln}from"./app.CQWyK-y8.js";function k(n){return n===!0||n===!1}function cn(n){return typeof n=="function"}function un(n){return typeof n=="string"}const dn=n=>e=>e===null||n(e),V=n=>e=>n(e)?e:Y,O={normalizeValue:V(k)},pn={normalizeValue:V(dn(k))},$n={normalizeValue:V(un)},S={normalizeValue:V(cn),equal:Object.is},W=new Promise(v),fn=async(n,e)=>{n.style.display=e==="show"?"":"none"},mn={animated:!0,animatedOnInit:!1,initDone:null,visible:!0,transition:fn,onShown:v,onHidden:v,onVisibleChange:v},bn={animated:O,animatedOnInit:O,visible:O,transition:S,onShown:S,onHidden:S,onVisibleChange:S,initDone:pn},gn=n=>{const[{animated$:e,initDone$:l,visible$:r,transition$:u,onShown$:D,onHidden$:C,onVisibleChange$:w,animatedOnInit$:y},p]=Z(mn,n,bn),{element$:A,directive:G}=en(),x=b(()=>!!A()),h=T(w,[r],([t])=>t),f=U(null),E=b(()=>!!f()),B=()=>{let t;return f.update(o=>(o?.abort.abort(),t=o?.context,null)),t},J=(t,o,c,s)=>_(()=>{const $=new AbortController,a=$.signal,d=B()??{},{promise:m,resolve:z}=j(),g={abort:$,animated:o,visible:t,context:d,element:c,transitionFn:s,promise:m};return f.set(g),z((async()=>{var M;try{await s(c,t?"show":"hide",o,a,d)}finally{a.aborted?await W:(f.set(null),(M=(t?D:C)())==null||M())}})()),g}),K=b(()=>!E()&&h()&&x()),Q=b(()=>!E()&&!h()),H=b(()=>l()?e():y()),I=U(null);let N,L=r(),i=null;const q=nn([h,A,H,I,u,f],([t,o,c,s,$,a])=>{const d=N!==o;N=o;const m=L!==t;if(L=t,o){l()==null&&l.set(!0);const z=s!=null&&a&&a.animated!=s;if(d||m||z){(m||s!=null)&&(i=null);const g=s??i?.animated??(d&&!t?!1:c);a=J(t,g,o,$),i?.resolve(a.promise),i=null}}else d&&(B(),a=null),(m||t&&i?.animated!==s)&&(i=t&&s!=null?{animated:s,...j()}:null);return i?.promise??a?.promise});let F={};const P=async(t=!r(),o=H())=>{const c={};F=c;try{await _(()=>{try{return I.set(o),r.set(t),q()}finally{I.set(null)}})}finally{F!==c&&await W}},X=on(G,an(t=>{t&&p(t)}),sn(q));return{...tn({visible$:h,element$:A,elementPresent$:x,transitioning$:E,shown$:K,hidden$:Q}),patch:p,directives:{directive:X},actions:{},api:{show:P.bind(null,!0),hide:P.bind(null,!1),toggle:P}}};function vn(n){return window.getComputedStyle(n).transitionProperty!=="none"}function wn(n){const{transitionDelay:e,transitionDuration:l}=window.getComputedStyle(n),r=parseFloat(e),u=parseFloat(l);return(r+u)*1e3}const Sn=n=>async(e,l,r,u,D)=>{const C=n(e,l,r,D)??v;if(rn(e)&&r&&vn(e)){const w=R(u,"abort"),y=R(e,"transitionend"),p=ln(wn(e));await Promise.race([w.promise,y.promise,p.promise]),w.unsubscribe(),y.unsubscribe(),p.unsubscribe()}u.aborted||C()};export{gn as a,$n as b,Sn as c,O as t};
