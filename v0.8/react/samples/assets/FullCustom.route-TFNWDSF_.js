import{j as e,r as l}from"./App-CsOkU7k8.js";import{P as o}from"./progressbar-Ck20N_ee-DbpNPcfK.js";import{S as m,a as p}from"./pause-fill-CPwiUlsM.js";import"./slot-BtkEMpNN.js";import"./directive-CEErjM5c-BVE02Lyt.js";import"./dom-gfxqXJpK-DnwY-KAj.js";import"./clsx-B-dksMZM.js";import"./config-CiSYZ8Ym.js";import"./config-C-QG9XGU.js";import"./widget-BP6z-zfB-Ce_gP_Ht.js";import"./stores-CNc_rSPE.js";import"./stores-DZalyTTa-JtJrTKhC.js";import"./progressbar-Csnqx_Pk-B5rxvSyD.js";import"./writables-CgpOQ4hA-Cd7Z63K9.js";import"./extendWidget-CRSgS6m7.js";import"./types-Bw2nvhNr.js";const d=({state:s})=>e.jsx("div",{className:"position-relative",style:{height:"300px"},children:e.jsx("div",{className:"cup",children:e.jsx("div",{className:"cup-fill-parent",children:e.jsx("div",{className:"cup-fill",style:{height:`${1.7*s.percentage}px`},children:s.percentage>=50?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"bubble bubble-1"}),e.jsx("div",{className:"bubble bubble-2"}),e.jsx("div",{className:"bubble bubble-3"})]}):null})})})}),x=s=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"bi bi-stop-fill",viewBox:"0 0 16 16",...s},l.createElement("path",{d:"M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5"})),R=()=>{const[s,i]=l.useState(0),[t,a]=l.useState(!1);l.useEffect(()=>{const c=setInterval(()=>{t&&s<100&&i(s+10)},500);return()=>clearInterval(c)},[t,s]);const r=()=>{a(!t)},n=()=>{i(0),a(!1)};return e.jsxs("div",{className:"d-flex align-items-center flex-wrap",children:[e.jsx("div",{style:{width:"350px"},children:e.jsx(o,{value:s,structure:d})}),e.jsxs("div",{className:"d-flex flex-column justify-content-evenly h-100 ms-5",children:[e.jsxs("div",{className:"d-flex gap-1",children:[e.jsx("button",{className:"btn btn-primary d-flex align-items-center",disabled:s>=100,onClick:r,"aria-label":t?"pause":"play",children:t?e.jsx(m,{}):e.jsx(p,{})}),e.jsx("button",{className:"btn btn-primary d-flex align-items-center",disabled:s===0,onClick:n,"aria-label":"stop",children:e.jsx(x,{})})]}),e.jsx("p",{className:"mt-3",children:e.jsx("span",{children:s===0&&!t?"Need to wake up.":s<100?`Retrieving coffee... ${s}%`:"Ready to work !"})})]})]})};export{R as default};
