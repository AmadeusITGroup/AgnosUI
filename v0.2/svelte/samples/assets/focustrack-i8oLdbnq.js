import{a0 as u,H as a}from"./AppCommon-CtUlaPGQ.js";import{c as i}from"./directive-C64J9ynN.js";const o="focusin",s="focusout",m=u(null,{onUse({set:r}){function e(){r(document.activeElement)}e();const t=document.documentElement;function n(){setTimeout(e)}return t.addEventListener(o,e,{capture:!0}),t.addEventListener(s,n,{capture:!0}),()=>{t.removeEventListener(o,e,{capture:!0}),t.removeEventListener(s,n,{capture:!0})}},equal:Object.is});function l(){const{elements$:r,directive:e}=i(),t=a(()=>{const n=m();if(!n)return!1;for(const c of r())if(c===n||c.contains(n))return!0;return!1});return{directive:e,hasFocus$:t}}export{m as a,l as c};
