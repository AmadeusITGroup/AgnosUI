import{c as g}from"./cssTransitions-COhJYzZ8.js";import{l as a,o as r,p}from"./stores-DX-ADOKq-D9qbYGXJ.js";const P=c=>{const{animationPendingClasses:d,animationPendingShowClasses:i,animationPendingHideClasses:C,showClasses:h,hideClasses:w}=c;return g((s,o,S,f)=>{if(a(s,h),a(s,w),S){if(a(s,o==="show"?C:i),!f.started){f.started=!0;const n=o==="show"?w:h;r(s,n),p(s),a(s,n)}r(s,d),p(s),r(s,o==="show"?i:C)}return()=>{a(s,d),a(s,i),a(s,C),r(s,o==="show"?h:w)}})};export{P as c};
