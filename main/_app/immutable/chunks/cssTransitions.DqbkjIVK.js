import{I as Y,n as v,w as Z,d as m,e as T,f as U,g as nn,h as tn,i as _}from"./stores.B-gqFnsy.js";import{a as en,p as j,m as on,d as sn,b as an,i as rn,f as R,g as ln}from"./app.DgNZUwYJ.js";function k(n){return n===!0||n===!1}function cn(n){return typeof n=="function"}function un(n){return typeof n=="string"}const dn=n=>e=>e===null||n(e),V=n=>e=>n(e)?e:Y,O={normalizeValue:V(k)},pn={normalizeValue:V(dn(k))},$n={normalizeValue:V(un)},S={normalizeValue:V(cn),equal:Object.is},W=new Promise(v),fn=(n,e)=>{n.style.display=e==="show"?"":"none"},bn={animated:!0,animatedOnInit:!1,initDone:null,visible:!0,transition:fn,onShown:v,onHidden:v,onVisibleChange:v},mn={animated:O,animatedOnInit:O,visible:O,transition:S,onShown:S,onHidden:S,onVisibleChange:S,initDone:pn},gn=n=>{const[{animated$:e,initDone$:l,visible$:r,transition$:u,onShown$:D,onHidden$:C,onVisibleChange$:w,animatedOnInit$:y},p]=Z(bn,n,mn),{element$:A,directive:G}=en(),x=m(()=>!!A()),h=T(w,[r],([t])=>t),f=U(null),E=m(()=>!!f()),B=()=>{let t;return f.update(i=>(i?.abort.abort(),t=i?.context,null)),t},J=(t,i,c,s)=>_(()=>{const $=new AbortController,a=$.signal,d=B()??{},{promise:b,resolve:z}=j(),g={abort:$,animated:i,visible:t,context:d,element:c,transitionFn:s,promise:b};return f.set(g),z((async()=>{var M;try{await s(c,t?"show":"hide",i,a,d)}finally{a.aborted?await W:(f.set(null),(M=(t?D:C)())==null||M())}})()),g}),K=m(()=>!E()&&h()&&x()),Q=m(()=>!E()&&!h()),H=m(()=>l()?e():y()),I=U(null);let N,L=r(),o=null;const q=nn([h,A,H,I,u,f],([t,i,c,s,$,a])=>{const d=N!==i;N=i;const b=L!==t;if(L=t,i){l()==null&&l.set(!0);const z=s!=null&&a&&a.animated!=s;if(d||b||z){(b||s!=null)&&(o=null);const g=s??o?.animated??(d&&!t?!1:c);a=J(t,g,i,$),o?.resolve(a.promise),o=null}}else d&&(B(),a=null),(b||t&&o?.animated!==s)&&(o=t&&s!=null?{animated:s,...j()}:null);return o?.promise??a?.promise});let F={};const P=async(t=!r(),i=H())=>{const c={};F=c;try{await _(()=>{try{return I.set(i),r.set(t),q()}finally{I.set(null)}})}finally{F!==c&&await W}},X=on(G,an(t=>{t&&p(t)}),sn(q));return{...tn({visible$:h,element$:A,elementPresent$:x,transitioning$:E,shown$:K,hidden$:Q}),patch:p,directives:{directive:X},actions:{},api:{show:P.bind(null,!0),hide:P.bind(null,!1),toggle:P}}};function vn(n){return window.getComputedStyle(n).transitionProperty!=="none"}function wn(n){const{transitionDelay:e,transitionDuration:l}=window.getComputedStyle(n),r=parseFloat(e),u=parseFloat(l);return(r+u)*1e3}const Sn=n=>async(e,l,r,u,D)=>{const C=n(e,l,r,D)??v;if(rn(e)&&r&&vn(e)){const w=R(u,"abort"),y=R(e,"transitionend"),p=ln(wn(e));await Promise.race([w.promise,y.promise,p.promise]),w.unsubscribe(),y.unsubscribe(),p.unsubscribe()}u.aborted||C()};export{gn as a,$n as b,Sn as c,O as t};
