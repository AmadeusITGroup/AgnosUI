import{aa as c,ag as E,ac as U,ae as q}from"./AppCommon-C_Uz3Ejm.js";import{t as x,a as f,c as X}from"./writables-DCiBdIBK-COVli6XW.js";import{p as N}from"./promise-CY2U8bTP-wBjUimDL.js";import{h as m,w as Y,v as Z,x as F,s as T,m as nn,g as en}from"./directive-CKEccryv-Dj2WBjfx.js";const R=new Promise(m),tn=(h,$)=>{h.style.display=$==="show"?"":"none"},on={animated:!0,animatedOnInit:!1,initDone:null,visible:!0,transition:tn,onShown:m,onHidden:m,onVisibleChange:m},sn={animated:x,animatedOnInit:x,visible:x,transition:f,onShown:f,onHidden:f,onVisibleChange:f,initDone:X},dn=h=>{const[{animated$:$,initDone$:b,visible$:d,transition$:W,onShown$:_,onHidden$:j,onVisibleChange$:k,animatedOnInit$:z},G]=Y(on,h,sn),{element$:w,directive:J}=Z(),y=c(()=>!!w()),u=F(k,[d],([n])=>n),a=E(null),A=()=>{let n;return a.update(e=>(e==null||e.abort.abort(),n=e==null?void 0:e.context,null)),n},K=(n,e,s,i)=>q(()=>{const p=new AbortController,o=p.signal,l=A()??{},{promise:r,resolve:S}=N(),v={abort:p,animated:e,visible:n,context:l,element:s,transitionFn:i,promise:r};return a.set(v),S((async()=>{var B;try{await i(s,n?"show":"hide",e,o,l)}finally{o.aborted?await R:(a.set(null),(B=(n?_:j)())==null||B())}})()),v}),O=c(()=>b()?$():z()),g=E(null);let P,H=d(),t=null;const D=U([u,w,O,g,W,a],([n,e,s,i,p,o])=>{const l=P!==e;P=e;const r=H!==n;if(H=n,e){b()==null&&b.set(!0);const S=i!=null&&o&&o.animated!=i;if(l||r||S){(r||i!=null)&&(t=null);const v=i??(t==null?void 0:t.animated)??(l&&!n?!1:s);o=K(n,v,e,p),t==null||t.resolve(o.promise),t=null}}else l&&(A(),o=null),(r||n&&(t==null?void 0:t.animated)!==i)&&(t=n&&i!=null?{animated:i,...N()}:null);return(t==null?void 0:t.promise)??(o==null?void 0:o.promise)});let I={};const V=async(n=!d(),e=O())=>{const s={};I=s;try{await q(()=>{try{return g.set(e),d.set(n),D()}finally{g.set(null)}})}finally{I!==s&&await R}},C=c(()=>(y()&&D(),!!a())),L=c(()=>!C()&&u()&&y()),M=c(()=>!C()&&!u()),Q=nn(J,en(D));return{...T({visible$:u,element$:w,elementPresent$:y,transitioning$:C,shown$:L,hidden$:M}),patch:G,directives:{directive:Q},api:{show:V.bind(null,!0),hide:V.bind(null,!1),toggle:V}}};export{dn as c};