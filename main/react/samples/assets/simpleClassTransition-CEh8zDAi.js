import{c as u}from"./cssTransitions-AlfUkfjs.js";import{t as a,u as r,v as c}from"./directive-CKEccryv-BEge1hNH.js";const P=p=>{const{animationPendingClasses:d,animationPendingShowClasses:i,animationPendingHideClasses:C,showClasses:h,hideClasses:w}=p;return u((s,o,t,f)=>{if(a(s,h),a(s,w),t){if(a(s,o==="show"?C:i),!f.started){f.started=!0;const n=o==="show"?w:h;r(s,n),c(s),a(s,n)}r(s,d),c(s),r(s,o==="show"?i:C)}return()=>{a(s,d),a(s,i),a(s,C),r(s,o==="show"?h:w)}})};export{P as c};