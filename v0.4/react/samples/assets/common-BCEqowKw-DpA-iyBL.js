import{c as f}from"./baseTransitions-DgRqyQuv.js";import{f as h,s as u,q as C,o as n}from"./directive-3-8yr-ZK-C5h7Dwqe.js";import{t as g}from"./writables-DoU_XYTX-8sqxFTfY.js";const V={visible:!0,dismissible:!0,ariaCloseButtonLabel:"Close",onVisibleChange:n,onShown:n,onHidden:n,animated:!0,animatedOnInit:!1,transition:async()=>{},className:""},w={dismissible:g};function I(t){const[{transition$:o,animatedOnInit$:s,animated$:a,visible$:r,onVisibleChange$:l,onHidden$:d,onShown$:c,...m},i]=h(V,t,w),e=f({props:{transition:o,visible:r,animated:a,animatedOnInit:s,onVisibleChange:l,onHidden:d,onShown:c}}),b=()=>{i({visible:!1})},p=()=>{i({visible:!0})},v=e.stores.visible$,$=e.stores.hidden$;return{...u({...m,visible$:v,hidden$:$}),patch:i,api:{open:p,close:b},directives:{transitionDirective:C(e.directives.directive)},actions:{}}}export{I as c};
