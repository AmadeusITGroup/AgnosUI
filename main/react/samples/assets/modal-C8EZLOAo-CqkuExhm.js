import{a as oe,j as r,r as F,c as se}from"./App-XNADZBio.js";import{c as l,b as d,w as re,r as ie,s as ne,t as ae}from"./stores-bzJrTsnV.js";import{t as f,b as w,a as v,c as le}from"./writables-DoU_XYTX-CBor1g6-.js";import{c as P}from"./baseTransitions-C1lKlPTV.js";import{f as I}from"./fade-7-Etejps-ClZ0-ujw.js";import{p as ce}from"./promise-CY2U8bTP-BPyyxCgB.js";import{a as de,f as me,m as x,d as q,r as ue,h as V,b as W,c as N}from"./directive-DDb3YD5o-DXG-hRS2.js";import{u as pe,S as h}from"./config-CXwd_Qkq.js";import{u as T}from"./directive-_62WM8Ul-DAmtt5js.js";const L=de((e,s)=>{let t,o;const i=()=>{var a;o&&((a=o.parentNode)==null||a.replaceChild(e,o),o=null)},n=a=>{var m,g;if(a!==t&&((a==null?void 0:a.container)!==(t==null?void 0:t.container)||(a==null?void 0:a.insertBefore)!==(t==null?void 0:t.insertBefore))){t=a;const b=(t==null?void 0:t.container)??((m=t==null?void 0:t.insertBefore)==null?void 0:m.parentElement);if(b){const $=(t==null?void 0:t.insertBefore)??null;(e.parentElement!==b||e.nextSibling!==$)&&(o||(o=(g=e.parentNode)==null?void 0:g.insertBefore(e.ownerDocument.createComment("portal"),e)),b.insertBefore(e,$))}else i()}};return n(s),{update:n,destroy:()=>{var a;i(),(a=e.parentNode)==null||a.removeChild(e)}}}),ve=e=>{const s=new Map,t=o=>{const i=o.parentElement;i&&o!==document.body&&(Array.from(i.children).forEach(n=>{n!==o&&n.nodeName!=="SCRIPT"&&(s.set(n,n.hasAttribute("inert")),n.toggleAttribute("inert",!0))}),t(i))};return t(e),()=>s.forEach((o,i)=>{i.toggleAttribute("inert",o)})};let _=d;const be=e=>{_(),_=e?ve(e):d},{directive:fe,elements$:he}=me(),ge=l(()=>{const e=he();return e[e.length-1]},{equal:Object.is}),$e=l(()=>be(ge())),Ce=x(fe,q($e)),Se=()=>{const e=Math.abs(window.innerWidth-document.documentElement.clientWidth),s=document.body,t=s.style,{overflow:o,paddingRight:i}=t;if(e>0){const n=parseFloat(window.getComputedStyle(s).paddingRight);t.paddingRight=`${n+e}px`}return t.overflow="hidden",()=>{e>0&&(t.paddingRight=i),t.overflow=o}};let B=d;const ke=()=>{B(),B=Se()},ye=()=>{B(),B=d},Be=Symbol(),De=Symbol(),je={animated:!0,ariaCloseButtonLabel:"Close",backdrop:!0,backdropClass:"",backdropTransition:I,closeButton:!0,closeOnOutsideClick:!0,container:typeof window<"u"?document.body:null,className:"",modalTransition:I,onBeforeClose:d,onVisibleChange:d,onHidden:d,onShown:d,slotDefault:void 0,slotFooter:void 0,slotHeader:void 0,slotStructure:void 0,slotTitle:void 0,visible:!1,contentData:void 0},we={animated:f,ariaCloseButtonLabel:w,backdrop:f,backdropClass:w,backdropTransition:v,closeButton:f,closeOnOutsideClick:f,container:le,className:w,modalTransition:v,onBeforeClose:v,onVisibleChange:v,onHidden:v,onShown:v,visible:f},z=ue(),Ne=l(()=>z().length>0),xe=l(()=>{Ne()?ke():ye()}),Te=l(()=>{xe()});function Ee(e){const[{animated$:s,backdrop$:t,backdropTransition$:o,closeOnOutsideClick$:i,container$:n,modalTransition$:a,onBeforeClose$:m,onVisibleChange$:g,onHidden$:b,onShown$:$,ariaCloseButtonLabel$:D,className$:E,backdropClass$:H,visible$:R,...G},C]=re(je,e,we),u=P({props:{transition:a,visible:R,animated:s,animatedOnInit:s,onVisibleChange:g,onHidden:b,onShown:$}}),M=u.stores.visible$,O=P({props:{transition:o,visible:R,animated:s,animatedOnInit:s}}),A=l(()=>u.stores.transitioning$()||t()&&O.stores.transitioning$()),S=l(()=>!A()&&!M()),J=l(()=>!t()||S());let k;const j=c=>{k=c;const p={get result(){return k},set result(te){k=te},cancel:!1};m()(p),!p.cancel&&C({visible:!1})},K=V(L,l(()=>({container:n()}))),Q=V(L,l(()=>{const c=n(),p=c?u.stores.element$():void 0;return{container:c,insertBefore:(p==null?void 0:p.parentElement)===c?p:void 0}})),U=ie(void 0,()=>z.register(y)),X=l(()=>{u.stores.elementPresent$()&&!S()&&U(),Te()}),Y=N(()=>({attributes:{type:"button","aria-label":D},events:{click:y.actions.closeButtonClick}})),Z=N(()=>({attributes:{class:H}})),ee=N(()=>({attributes:{class:E},events:{click:y.actions.modalClick}})),y={...ne({backdropHidden$:J,container$:n,hidden$:S,transitioning$:A,visible$:M,modalElement$:u.stores.element$,ariaCloseButtonLabel$:D,className$:E,backdropClass$:H,...G}),directives:{modalPortalDirective:K,backdropPortalDirective:Q,backdropDirective:x(W(O.directives.directive),Z),modalDirective:x(W(u.directives.directive),Ce,q(X),ee),closeButtonDirective:Y},patch:C,api:{close:j,async open(){return C({visible:!0}),await ce(S).promise,k},patch:C},actions:{modalClick(c){c.currentTarget===c.target&&i()&&j(Be)},closeButtonClick(c){j(De)}}};return y}const He=Ee,Re=({children:e,container:s})=>s?oe.createPortal(e,s):r.jsx(r.Fragment,{children:e}),Me=e=>{const s=T(e.widget.directives.closeButtonDirective);return r.jsxs(r.Fragment,{children:[r.jsx("h5",{className:"modal-title",children:r.jsx(h,{slotContent:e.state.slotTitle,props:e})}),e.state.closeButton&&r.jsx("button",{className:"btn-close",...s})]})},Oe=e=>r.jsxs(r.Fragment,{children:[e.state.slotTitle&&r.jsx("div",{className:"modal-header",children:r.jsx(h,{slotContent:e.state.slotHeader,props:e})}),r.jsx("div",{className:"modal-body",children:r.jsx(h,{slotContent:e.state.slotDefault,props:e})}),e.state.slotFooter&&r.jsx("div",{className:"modal-footer",children:r.jsx(h,{slotContent:e.state.slotFooter,props:e})})]}),Ae={slotHeader:Me,slotStructure:Oe},Fe=F.forwardRef(function(s,t){const[o,i]=pe(He,s,"modal",{...Ae,slotDefault:s.children});F.useImperativeHandle(t,()=>i.api,[]);const n=T(i.directives.backdropDirective),a=T(i.directives.modalDirective),m={state:o,widget:ae(i)};return r.jsxs(Re,{container:o.container,children:[!o.backdropHidden&&r.jsx("div",{className:"modal-backdrop",...n}),!o.hidden&&r.jsx("div",{className:"modal d-block",...a,children:r.jsx("div",{className:"modal-dialog",children:r.jsx("div",{className:"modal-content",children:r.jsx(h,{slotContent:o.slotStructure,props:m})})})})]})});async function Je(e){const s=se.createRoot(document.createElement("div"));try{return await(await new Promise(o=>{s.render(r.jsx(Fe,{...e,ref:o}))})).open()}finally{s.unmount()}}export{Fe as M,Be as a,De as m,Je as o};
