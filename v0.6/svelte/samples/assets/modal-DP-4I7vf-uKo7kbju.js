import{aa as l,W as Y}from"./AppCommon-DoiIXO3L.js";import{t as p,b as D,a as m,g as Z}from"./writables-DCiBdIBK-BHv6xPe-.js";import{b as L,A as ee,m as O,g as W,h as d,r as te,w as oe,B as T,s as ne,a as E}from"./directive-CKEccryv-BlplZHDT.js";import{c as V}from"./baseTransitions-DctpZ_x6.js";import{d as ie}from"./promise-CY2U8bTP-UpBXntTx.js";const I=L((t,r)=>{let e,o;const s=()=>{var i;o&&((i=o.parentNode)==null||i.replaceChild(t,o),o=null)},n=i=>{var v,f;if(i!==e&&((i==null?void 0:i.container)!==(e==null?void 0:e.container)||(i==null?void 0:i.insertBefore)!==(e==null?void 0:e.insertBefore))){e=i;const b=(e==null?void 0:e.container)??((v=e==null?void 0:e.insertBefore)==null?void 0:v.parentElement);if(b){const $=(e==null?void 0:e.insertBefore)??null;(t.parentElement!==b||t.nextSibling!==$)&&(o||(o=(f=t.parentNode)==null?void 0:f.insertBefore(t.ownerDocument.createComment("portal"),t)),b.insertBefore(t,$))}else s()}};return n(r),{update:n,destroy:()=>{var i;s(),(i=t.parentNode)==null||i.removeChild(t)}}}),re=t=>{const r=new Map,e=o=>{const s=o.parentElement;s&&o!==document.body&&(Array.from(s.children).forEach(n=>{n!==o&&n.nodeName!=="SCRIPT"&&(r.set(n,n.hasAttribute("inert")),n.toggleAttribute("inert",!0))}),e(s))};return e(t),()=>r.forEach((o,s)=>{s.toggleAttribute("inert",o)})};let F=d;const se=t=>{F(),F=t?re(t):d},{directive:ae,elements$:le}=ee(),ce=l(()=>{const t=le();return t[t.length-1]},{equal:Object.is}),de=l(()=>se(ce())),ue=O(ae,W(de)),me=()=>{const t=Math.abs(window.innerWidth-document.documentElement.clientWidth),r=document.body,e=r.style,{overflow:o,paddingRight:s}=e;if(t>0){const n=parseFloat(window.getComputedStyle(r).paddingRight);e.paddingRight=`${n+t}px`}return e.overflow="hidden",()=>{t>0&&(e.paddingRight=s),e.overflow=o}};let k=d;const be=()=>{k(),k=me()},pe=()=>{k(),k=d},ve=Symbol(),fe=Symbol(),$e={animated:!0,ariaCloseButtonLabel:"Close",backdrop:!0,backdropClass:"",backdropTransition:async()=>{},closeButton:!0,closeOnOutsideClick:!0,container:typeof window<"u"?document.body:null,className:"",modalTransition:async()=>{},onBeforeClose:d,onVisibleChange:d,onHidden:d,onShown:d,visible:!1},ge={animated:p,ariaCloseButtonLabel:D,backdrop:p,backdropClass:D,backdropTransition:m,closeButton:p,closeOnOutsideClick:p,container:Z,className:D,modalTransition:m,onBeforeClose:m,onVisibleChange:m,onHidden:m,onShown:m,visible:p},_=te(),he=l(()=>_().length>0),Ce=l(()=>{he()?be():pe()}),ye=l(()=>{Ce()});function Te(t){const[{animated$:r,backdrop$:e,backdropTransition$:o,closeOnOutsideClick$:s,container$:n,modalTransition$:i,onBeforeClose$:v,onVisibleChange$:f,onHidden$:b,onShown$:$,ariaCloseButtonLabel$:B,className$:A,backdropClass$:N,visible$:R,...x},g]=oe($e,t,ge),u=V({props:{transition:i,visible:R,animated:r,animatedOnInit:r,onVisibleChange:f,onHidden:b,onShown:$}}),S=u.stores.visible$,H=V({props:{transition:o,visible:R,animated:r,animatedOnInit:r}}),M=l(()=>u.stores.transitioning$()||e()&&H.stores.transitioning$()),h=l(()=>!M()&&!S()),q=l(()=>!e()||h());let C;const w=a=>{C=a;const c={get result(){return C},set result(y){C=y},cancel:!1};v()(c),!c.cancel&&g({visible:!1})},j=T(I,l(()=>({container:n()}))),z=T(I,l(()=>{const a=n(),c=a?u.stores.element$():void 0;return{container:a,insertBefore:(c==null?void 0:c.parentElement)===a?c:void 0}})),G=Y(void 0,()=>_.register(P)),J=l(()=>{u.stores.elementPresent$()&&!h()&&G(),ye()}),K=E(()=>({attributes:{type:"button","aria-label":B},events:{click:()=>w(fe)}})),Q=E(()=>({attributes:{class:N}})),U=E(()=>({attributes:{class:A},events:{click:a=>{a.currentTarget===a.target&&s()&&w(ve)}}})),P={...ne({backdropHidden$:q,container$:n,hidden$:h,transitioning$:M,visible$:S,modalElement$:u.stores.element$,ariaCloseButtonLabel$:B,className$:A,backdropClass$:N,...x}),directives:{modalPortalDirective:j,backdropPortalDirective:z,backdropDirective:O(H.directives.directive,Q),modalDirective:O(u.directives.directive,ue,W(J),U),closeButtonDirective:K,dialogDirective:T(L((a,c)=>{const y=X=>{X?a.showModal():a.close()};return y(c),{update:y}}),S)},patch:g,api:{close:w,async open(){return g({visible:!0}),await ie(h).promise,C},patch:g}};return P}export{fe as a,Te as c,ve as m};
