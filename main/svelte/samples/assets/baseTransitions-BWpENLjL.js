import{a9 as d,a7 as E,ad as U,a6 as q}from"./AppCommon-DR1c1M0F.js";import{c as X,b as f,a as A}from"./writables-DCiBdIBK-BDXIYxAp.js";import{p as N}from"./promise-XSP94FjG-BeY49cBm.js";import{l as Y,m as Z,e as F,n as m}from"./dom-gfxqXJpK-BWIOF16w.js";import{w as T,d as nn,s as en}from"./stores--ikXRI1V.js";const R=new Promise(m),tn=(b,$)=>{b.style.display=$==="show"?"":"none"},on={animated:!0,animatedOnInit:!1,initDone:null,visible:!0,transition:tn,onShown:m,onHidden:m,onVisibleChange:m},sn={animated:A,animatedOnInit:A,visible:A,transition:f,onShown:f,onHidden:f,onVisibleChange:f,initDone:X},un=b=>{const[{animated$:$,initDone$:h,visible$:c,transition$:W,onShown$:_,onHidden$:j,onVisibleChange$:k,animatedOnInit$:z},G]=T(on,b,sn),{element$:w,directive:J}=Y(),y=d(()=>!!w()),u=nn(k,[c],([n])=>n),a=E(null),x=()=>{let n;return a.update(e=>(e==null||e.abort.abort(),n=e==null?void 0:e.context,null)),n},K=(n,e,s,i)=>q(()=>{const p=new AbortController,o=p.signal,l=x()??{},{promise:r,resolve:S}=N(),v={abort:p,animated:e,visible:n,context:l,element:s,transitionFn:i,promise:r};return a.set(v),S((async()=>{var B;try{await i(s,n?"show":"hide",e,o,l)}finally{o.aborted?await R:(a.set(null),(B=(n?_:j)())==null||B())}})()),v}),O=d(()=>h()?$():z()),g=E(null);let P,H=c(),t=null;const D=U([u,w,O,g,W,a],([n,e,s,i,p,o])=>{const l=P!==e;P=e;const r=H!==n;if(H=n,e){h()==null&&h.set(!0);const S=i!=null&&o&&o.animated!=i;if(l||r||S){(r||i!=null)&&(t=null);const v=i??(t==null?void 0:t.animated)??(l&&!n?!1:s);o=K(n,v,e,p),t==null||t.resolve(o.promise),t=null}}else l&&(x(),o=null),(r||n&&(t==null?void 0:t.animated)!==i)&&(t=n&&i!=null?{animated:i,...N()}:null);return(t==null?void 0:t.promise)??(o==null?void 0:o.promise)});let I={};const V=async(n=!c(),e=O())=>{const s={};I=s;try{await q(()=>{try{return g.set(e),c.set(n),D()}finally{g.set(null)}})}finally{I!==s&&await R}},C=d(()=>(y()&&D(),!!a())),L=d(()=>!C()&&u()&&y()),M=d(()=>!C()&&!u()),Q=Z(J,F(D));return{...en({visible$:u,element$:w,elementPresent$:y,transitioning$:C,shown$:L,hidden$:M}),patch:G,directives:{directive:Q},api:{show:V.bind(null,!0),hide:V.bind(null,!1),toggle:V}}};export{un as c};
