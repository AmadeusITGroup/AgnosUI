import{H as d,I as N,ac as X,aa as R}from"./AppCommon-Bfvf4Y_M.js";import{t as S,a as p,f as Y}from"./writables-B4rAu5M_.js";import{a as U}from"./promise-BSf7Fqlt.js";import{n as b}from"./func-fOTgS_tI.js";import{w as Z,b as _,s as F}from"./stores-rO0EQSg2.js";import{e as T,m as ee,d as te,f as oe}from"./directive-BLUfdvd7.js";const W=new Promise(b),se=async($,h)=>{$.style.display=h==="show"?"":"none"},le={animation:!0,animationOnInit:!1,initDone:null,visible:!0,transition:se,onShown:b,onHidden:b,onVisibleChange:b},ne={animation:S,animationOnInit:S,visible:S,transition:p,onShown:p,onHidden:p,onVisibleChange:p,initDone:Y},me=$=>{const[{animation$:h,initDone$:v,visible$:f,transition$:g,onShown$:j,onHidden$:k,onVisibleChange$:z,animationOnInit$:G},A]=Z(le,$,ne),{element$:w,directive:J}=T(),x=d(()=>!!w()),r=_(z,[f],([e])=>e),i=N(null),y=d(()=>!!i()),H=()=>{let e;return i.update(t=>(t==null||t.abort.abort(),e=t==null?void 0:t.context,null)),e},K=(e,t,n,l)=>R(()=>{const m=new AbortController,s=m.signal,a=H()??{},{promise:c,resolve:C}=U(),u={abort:m,animation:t,visible:e,context:a,element:n,transitionFn:l,promise:c};return i.set(u),C((async()=>{var q;try{await l(n,e?"show":"hide",t,s,a)}finally{s.aborted?await W:(i.set(null),(q=(e?j:k)())==null||q())}})()),u}),L=d(()=>!y()&&r()&&x()),M=d(()=>!y()&&!r()),I=d(()=>v()?h():G()),D=N(null);let O,P=f(),o=null;const B=X([r,w,I,D,g,i],([e,t,n,l,m,s])=>{const a=O!==t;O=t;const c=P!==e;if(P=e,t){v()==null&&v.set(!0);const C=l!=null&&s&&s.animation!=l;if(a||c||C){(c||l!=null)&&(o=null);const u=l??(o==null?void 0:o.animation)??(a&&!e?!1:n);s=K(e,u,t,m),o==null||o.resolve(s.promise),o=null}}else a&&(H(),s=null),(c||e&&(o==null?void 0:o.animation)!==l)&&(o=e&&l!=null?{animation:l,...U()}:null);return(o==null?void 0:o.promise)??(s==null?void 0:s.promise)});let E={};const V=async(e=!f(),t=I())=>{const n={};E=n;try{await R(()=>{try{return D.set(t),f.set(e),B()}finally{D.set(null)}})}finally{E!==n&&await W}},Q=ee(J,oe(A),te(B));return{...F({visible$:r,element$:w,elementPresent$:x,transitioning$:y,shown$:L,hidden$:M}),patch:A,directives:{directive:Q},actions:{},api:{show:V.bind(null,!0),hide:V.bind(null,!1),toggle:V}}};export{me as c};