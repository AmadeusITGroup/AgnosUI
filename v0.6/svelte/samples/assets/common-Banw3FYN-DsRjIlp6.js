import{c as u}from"./baseTransitions-DctpZ_x6.js";import{w as v,s as f,h as t}from"./directive-CKEccryv-BlplZHDT.js";import{t as n,a as e,b as o}from"./writables-DCiBdIBK-BHv6xPe-.js";const g={visible:!0,dismissible:!0,ariaCloseButtonLabel:"Close",onVisibleChange:t,onShown:t,onHidden:t,animated:!0,animatedOnInit:!1,transition:async()=>{},className:""},w={dismissible:n,onVisibleChange:e,onHidden:e,onShown:e,transition:e,animatedOnInit:n,animated:n,visible:n,ariaCloseButtonLabel:o,className:o};function H(s){const[{transition$:a,animatedOnInit$:r,animated$:d,visible$:l,onVisibleChange$:m,onHidden$:c,onShown$:b,...p},h]=v(g,s,w),i=u({props:{transition:a,visible:l,animated:d,animatedOnInit:r,onVisibleChange:m,onHidden:c,onShown:b}}),$=i.stores.visible$,C=i.stores.hidden$;return{...f({...p,visible$:$,hidden$:C}),patch:h,api:{open:i.api.show,close:i.api.hide},directives:{transitionDirective:i.directives.directive}}}export{H as c};
