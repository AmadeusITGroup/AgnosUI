import{Z as c,W as o,$ as i,a8 as d,a9 as m}from"./AppCommon-BIOVedX1.js";function k(e,n,a){c(()=>{var r=o(()=>n(e,a==null?void 0:a())||{});if(a&&(r!=null&&r.update)){var s=!1,t={};i(()=>{var f=a();d(f),s&&m(t,f)&&(t=f,r.update(f))}),s=!0}if(r!=null&&r.destroy)return()=>r.destroy()})}export{k as a};