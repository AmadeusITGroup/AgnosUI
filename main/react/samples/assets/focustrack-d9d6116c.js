import{r as u,j as a,c as i}from"./utils-3d1769dc.js";const s="focusin",r="focusout",m=u(null,{onUse({set:o}){function e(){o(document.activeElement)}e();const t=document.documentElement;function n(){setTimeout(e)}return t.addEventListener(s,e),t.addEventListener(r,n),()=>{t.removeEventListener(s,e),t.removeEventListener(r,n)}},equal:Object.is});function l(){const{elements$:o,directive:e}=a(),t=i(()=>{const n=m();if(!n)return!1;for(const c of o())if(c===n||c.contains(n))return!0;return!1});return{directive:e,hasFocus$:t}}export{m as a,l as c};
