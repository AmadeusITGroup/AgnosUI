import{a9 as l,W as Y}from"./AppCommon-ZwIOf5HX.js";import{t as p,b as D,a as m,g as Z}from"./writables-DCiBdIBK-BkdelxAY.js";import{b as L,A as ee,m as O,j as W,n as c,r as te,w as ne,B as T,s as oe,a as E}from"./stores-DX-ADOKq-CL6jUnRu.js";import{c as V}from"./baseTransitions-NZihKUa_.js";import{d as ie}from"./promise-CBh_HbSK-BOKAzF7n.js";const I=L((t,r)=>{let e,n;const s=()=>{var i;n&&((i=n.parentNode)==null||i.replaceChild(t,n),n=null)},o=i=>{var f,v;if(i!==e&&((i==null?void 0:i.container)!==(e==null?void 0:e.container)||(i==null?void 0:i.insertBefore)!==(e==null?void 0:e.insertBefore))){e=i;const b=(e==null?void 0:e.container)??((f=e==null?void 0:e.insertBefore)==null?void 0:f.parentElement);if(b){const $=(e==null?void 0:e.insertBefore)??null;(t.parentElement!==b||t.nextSibling!==$)&&(n||(n=(v=t.parentNode)==null?void 0:v.insertBefore(t.ownerDocument.createComment("portal"),t)),b.insertBefore(t,$))}else s()}};return o(r),{update:o,destroy:()=>{var i;s(),(i=t.parentNode)==null||i.removeChild(t)}}}),re=t=>{const r=new Map,e=n=>{const s=n.parentElement;s&&n!==document.body&&(Array.from(s.children).forEach(o=>{o!==n&&o.nodeName!=="SCRIPT"&&(r.set(o,o.hasAttribute("inert")),o.toggleAttribute("inert",!0))}),e(s))};return e(t),()=>r.forEach((n,s)=>{s.toggleAttribute("inert",n)})};let F=c;const se=t=>{F(),F=t?re(t):c},{directive:ae,elements$:le}=ee(),ce=l(()=>{const t=le();return t[t.length-1]},{equal:Object.is}),de=l(()=>se(ce())),ue=O(ae,W(de)),me=()=>{const t=Math.abs(window.innerWidth-document.documentElement.clientWidth),r=document.body,e=r.style,{overflow:n,paddingRight:s}=e;if(t>0){const o=parseFloat(window.getComputedStyle(r).paddingRight);e.paddingRight=`${o+t}px`}return e.overflow="hidden",()=>{t>0&&(e.paddingRight=s),e.overflow=n}};let k=c;const be=()=>{k(),k=me()},pe=()=>{k(),k=c},fe=Symbol(),ve=Symbol(),$e={animated:!0,ariaCloseButtonLabel:"Close",backdrop:!0,backdropClass:"",backdropTransition:c,closeButton:!0,closeOnOutsideClick:!0,container:typeof window<"u"?document.body:null,className:"",modalTransition:c,onBeforeClose:c,onVisibleChange:c,onHidden:c,onShown:c,visible:!1},ge={animated:p,ariaCloseButtonLabel:D,backdrop:p,backdropClass:D,backdropTransition:m,closeButton:p,closeOnOutsideClick:p,container:Z,className:D,modalTransition:m,onBeforeClose:m,onVisibleChange:m,onHidden:m,onShown:m,visible:p},_=te(),he=l(()=>_().length>0),Ce=l(()=>{he()?be():pe()}),ye=l(()=>{Ce()});function Te(t){const[{animated$:r,backdrop$:e,backdropTransition$:n,closeOnOutsideClick$:s,container$:o,modalTransition$:i,onBeforeClose$:f,onVisibleChange$:v,onHidden$:b,onShown$:$,ariaCloseButtonLabel$:B,className$:A,backdropClass$:N,visible$:R,...x},g]=ne($e,t,ge),u=V({props:{transition:i,visible:R,animated:r,animatedOnInit:r,onVisibleChange:v,onHidden:b,onShown:$}}),S=u.stores.visible$,H=V({props:{transition:n,visible:R,animated:r,animatedOnInit:r}}),M=l(()=>u.stores.transitioning$()||e()&&H.stores.transitioning$()),h=l(()=>!M()&&!S()),j=l(()=>!e()||h());let C;const w=a=>{C=a;const d={get result(){return C},set result(y){C=y},cancel:!1};f()(d),!d.cancel&&g({visible:!1})},q=T(I,l(()=>({container:o()}))),z=T(I,l(()=>{const a=o(),d=a?u.stores.element$():void 0;return{container:a,insertBefore:(d==null?void 0:d.parentElement)===a?d:void 0}})),G=Y(void 0,()=>_.register(P)),J=l(()=>{u.stores.elementPresent$()&&!h()&&G(),ye()}),K=E(()=>({attributes:{type:"button","aria-label":B},events:{click:()=>w(ve)}})),Q=E(()=>({attributes:{class:N}})),U=E(()=>({attributes:{class:A},events:{click:a=>{a.currentTarget===a.target&&s()&&w(fe)}}})),P={...oe({backdropHidden$:j,container$:o,hidden$:h,transitioning$:M,visible$:S,modalElement$:u.stores.element$,ariaCloseButtonLabel$:B,className$:A,backdropClass$:N,...x}),directives:{modalPortalDirective:q,backdropPortalDirective:z,backdropDirective:O(H.directives.directive,Q),modalDirective:O(u.directives.directive,ue,W(J),U),closeButtonDirective:K,dialogDirective:T(L((a,d)=>{const y=X=>{X?a.showModal():a.close()};return y(d),{update:y}}),S)},patch:g,api:{close:w,async open(){return g({visible:!0}),await ie(h).promise,C},patch:g}};return P}export{ve as a,Te as c,fe as m};
