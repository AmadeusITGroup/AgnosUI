import{I as X,n as $,w as Y,e as d,f as Z,g as E,h as F,a as T,c as H}from"./stores.DR5R2oUF.js";import{c as nn,d as q,m as tn,f as en,h as on}from"./app.DoUSGExu.js";function U(t){return t===!0||t===!1}function sn(t){return typeof t=="function"}function an(t){return typeof t=="string"}const ln=t=>o=>o===null||t(o),w=t=>o=>t(o)?o:X,A={normalizeValue:w(U)},rn={normalizeValue:w(ln(U))},mn={normalizeValue:w(an)},b={normalizeValue:w(sn),equal:Object.is},L=new Promise($),cn=async(t,o)=>{t.style.display=o==="show"?"":"none"},un={animation:!0,animationOnInit:!1,initDone:null,visible:!0,transition:cn,onShown:$,onHidden:$,onVisibleChange:$},dn={animation:A,animationOnInit:A,visible:A,transition:b,onShown:b,onHidden:b,onVisibleChange:b,initDone:rn},hn=t=>{const[{animation$:o,initDone$:y,visible$:f,transition$:j,onShown$:R,onHidden$:W,onVisibleChange$:_,animationOnInit$:k},C]=Y(un,t,dn),{element$:V,directive:G}=nn(),I=d(()=>!!V()),p=Z(_,[f],([n])=>n),c=E(null),v=d(()=>!!c()),z=()=>{let n;return c.update(e=>(e?.abort.abort(),n=e?.context,null)),n},J=(n,e,l,i)=>H(()=>{const m=new AbortController,s=m.signal,r=z()??{},{promise:u,resolve:S}=q(),h={abort:m,animation:e,visible:n,context:r,element:l,transitionFn:i,promise:u};return c.set(h),S((async()=>{try{await i(l,n?"show":"hide",e,s,r)}finally{s.aborted?await L:(c.set(null),(n?R:W)()?.())}})()),h}),K=d(()=>!v()&&p()&&I()),M=d(()=>!v()&&!p()),O=d(()=>y()?o():k()),g=E(null);let x,N=f(),a=null;const P=F([p,V,O,g,j,c],([n,e,l,i,m,s])=>{const r=x!==e;x=e;const u=N!==n;if(N=n,e){y()==null&&y.set(!0);const S=i!=null&&s&&s.animation!=i;if(r||u||S){(u||i!=null)&&(a=null);const h=i??a?.animation??(r&&!n?!1:l);s=J(n,h,e,m),a?.resolve(s.promise),a=null}}else r&&(z(),s=null),(u||n&&a?.animation!==i)&&(a=n&&i!=null?{animation:i,...q()}:null);return a?.promise??s?.promise});let B={};const D=async(n=!f(),e=O())=>{const l={};B=l;try{await H(()=>{try{return g.set(e),f.set(n),P()}finally{g.set(null)}})}finally{B!==l&&await L}},Q=tn(G,on(C),en(P));return{...T({visible$:p,element$:V,elementPresent$:I,transitioning$:v,shown$:K,hidden$:M}),patch:C,directives:{directive:Q},actions:{},api:{show:D.bind(null,!0),hide:D.bind(null,!1),toggle:D}}};export{mn as a,hn as c,A as t};
