import{b as _,M as Z,d as l,j as O,l as q,o as d,g as ee,f as te,N,r as oe,s as ne,q as V,k as T}from"./directive-3-8yr-ZK-C5h7Dwqe.js";import{t as v,a as E,b as m,f as ie}from"./writables-DoU_XYTX-8sqxFTfY.js";import{c as I}from"./baseTransitions-DgRqyQuv.js";import{d as re}from"./promise-CY2U8bTP-2vXpUa_S.js";const F=_((t,r)=>{let e,o;const s=()=>{var i;o&&((i=o.parentNode)==null||i.replaceChild(t,o),o=null)},n=i=>{var p,f;if(i!==e&&((i==null?void 0:i.container)!==(e==null?void 0:e.container)||(i==null?void 0:i.insertBefore)!==(e==null?void 0:e.insertBefore))){e=i;const b=(e==null?void 0:e.container)??((p=e==null?void 0:e.insertBefore)==null?void 0:p.parentElement);if(b){const $=(e==null?void 0:e.insertBefore)??null;(t.parentElement!==b||t.nextSibling!==$)&&(o||(o=(f=t.parentNode)==null?void 0:f.insertBefore(t.ownerDocument.createComment("portal"),t)),b.insertBefore(t,$))}else s()}};return n(r),{update:n,destroy:()=>{var i;s(),(i=t.parentNode)==null||i.removeChild(t)}}}),se=t=>{const r=new Map,e=o=>{const s=o.parentElement;s&&o!==document.body&&(Array.from(s.children).forEach(n=>{n!==o&&n.nodeName!=="SCRIPT"&&(r.set(n,n.hasAttribute("inert")),n.toggleAttribute("inert",!0))}),e(s))};return e(t),()=>r.forEach((o,s)=>{s.toggleAttribute("inert",o)})};let L=d;const ae=t=>{L(),L=t?se(t):d},{directive:le,elements$:ce}=Z(),de=l(()=>{const t=ce();return t[t.length-1]},{equal:Object.is}),ue=l(()=>ae(de())),me=O(le,q(ue)),be=()=>{const t=Math.abs(window.innerWidth-document.documentElement.clientWidth),r=document.body,e=r.style,{overflow:o,paddingRight:s}=e;if(t>0){const n=parseFloat(window.getComputedStyle(r).paddingRight);e.paddingRight=`${n+t}px`}return e.overflow="hidden",()=>{t>0&&(e.paddingRight=s),e.overflow=o}};let B=d;const ve=()=>{B(),B=be()},pe=()=>{B(),B=d},fe=Symbol(),$e=Symbol(),Ce={animated:!0,ariaCloseButtonLabel:"Close",backdrop:!0,backdropClass:"",backdropTransition:async()=>{},closeButton:!0,closeOnOutsideClick:!0,container:typeof window<"u"?document.body:null,className:"",modalTransition:async()=>{},onBeforeClose:d,onVisibleChange:d,onHidden:d,onShown:d,visible:!1},ge={animated:v,ariaCloseButtonLabel:E,backdrop:v,backdropClass:E,backdropTransition:m,closeButton:v,closeOnOutsideClick:v,container:ie,className:E,modalTransition:m,onBeforeClose:m,onVisibleChange:m,onHidden:m,onShown:m,visible:v},x=ee(),he=l(()=>x().length>0),ke=l(()=>{he()?ve():pe()}),ye=l(()=>{ke()});function Ne(t){const[{animated$:r,backdrop$:e,backdropTransition$:o,closeOnOutsideClick$:s,container$:n,modalTransition$:i,onBeforeClose$:p,onVisibleChange$:f,onHidden$:b,onShown$:$,ariaCloseButtonLabel$:S,className$:A,backdropClass$:R,visible$:M,...W},C]=te(Ce,t,ge),u=I({props:{transition:i,visible:M,animated:r,animatedOnInit:r,onVisibleChange:f,onHidden:b,onShown:$}}),D=u.stores.visible$,H=I({props:{transition:o,visible:M,animated:r,animatedOnInit:r}}),P=l(()=>u.stores.transitioning$()||e()&&H.stores.transitioning$()),g=l(()=>!P()&&!D()),j=l(()=>!e()||g());let h;const w=a=>{h=a;const c={get result(){return h},set result(y){h=y},cancel:!1};p()(c),!c.cancel&&C({visible:!1})},z=N(F,l(()=>({container:n()}))),G=N(F,l(()=>{const a=n(),c=a?u.stores.element$():void 0;return{container:a,insertBefore:(c==null?void 0:c.parentElement)===a?c:void 0}})),J=oe(void 0,()=>x.register(k)),K=l(()=>{u.stores.elementPresent$()&&!g()&&J(),ye()}),Q=T(()=>({attributes:{type:"button","aria-label":S},events:{click:k.actions.closeButtonClick}})),U=T(()=>({attributes:{class:R}})),X=T(()=>({attributes:{class:A},events:{click:k.actions.modalClick}})),k={...ne({backdropHidden$:j,container$:n,hidden$:g,transitioning$:P,visible$:D,modalElement$:u.stores.element$,ariaCloseButtonLabel$:S,className$:A,backdropClass$:R,...W}),directives:{modalPortalDirective:z,backdropPortalDirective:G,backdropDirective:O(V(H.directives.directive),U),modalDirective:O(V(u.directives.directive),me,q(K),X),closeButtonDirective:Q,dialogDirective:N(_((a,c)=>{const y=Y=>{Y?a.showModal():a.close()};return y(c),{update:y}}),D)},patch:C,api:{close:w,async open(){return C({visible:!0}),await re(g).promise,h},patch:C},actions:{modalClick(a){a.currentTarget===a.target&&s()&&w(fe)},closeButtonClick(a){w($e)}}};return k}export{fe as a,Ne as c,$e as m};
