import{t as _,f as b,q as $,c,g as m,b as v,s as i,l as r,h as Y,d as h,n as C,k as q}from"./AppCommon-DR1c1M0F.js";import{b as D}from"./input-ed-PyCSg.js";import{b as M}from"./this-C1_jvGPY.js";import{M as N,e as B,a as F}from"./Modal-D88rX6Z8.js";import"./actions-CroD04Qy.js";import"./class-w6jnQX1d.js";import"./modal-85Sw8xuV-KSb4-_k1.js";import"./writables-DCiBdIBK-BDXIYxAp.js";import"./stores--ikXRI1V.js";import"./dom-gfxqXJpK-BWIOF16w.js";import"./baseTransitions-BWpENLjL.js";import"./promise-XSP94FjG-BeY49cBm.js";import"./fade-uOobJKgw-CqY_1jhq.js";import"./simpleClassTransition-BZasCx_s.js";import"./cssTransitions-CB-RM4jU.js";import"./extendWidget-BaZQTsYH.js";import"./Slot-BJQWjOdF.js";import"./snippet-DBdFeI9s.js";import"./config-1F64LY8-.js";import"./config-fL1zUtMD.js";import"./index-client-TjbitBpq.js";var L=_('<button type="button" class="btn btn-outline-primary">Yes</button> <button type="button" class="btn btn-outline-danger">No</button>',1),O=_('<!> <button type="button" class="btn btn-primary">Launch demo modal</button> <div class="form-check form-switch mt-3"><input class="form-check-input" type="checkbox" role="switch" id="fullscreen"> <label class="form-check-label" for="fullscreen">Fullscreen</label></div> <hr> <div data-testid="message"> </div>',1);function ot(k){let e,o=v(""),l=v(!1);var u=O(),p=b(u);M(N(p,{title:"Save changes",get fullscreen(){return m(l)},footer:a=>{var n=L(),s=b(n);s.__click=()=>e.api.close(!0);var w=i(s,2);w.__click=()=>e.api.close(!1),c(a,n)},children:(a,n)=>{var s=$("Do you want to save your changes?");c(a,s)},$$slots:{footer:!0,default:!0}}),a=>e=a,()=>e);var d=i(p,2);d.__click=async()=>{r(o,"");const t=await e.api.open();t===B?r(o,"You clicked on the close button."):t===F?r(o,"You clicked outside the modal."):r(o,`You answered the question with "${t?"Yes":"No"}".`)};var f=i(d,2),g=h(f),y=i(f,4),x=h(y);Y(()=>q(x,m(o))),D(g,()=>m(l),t=>r(l,t)),c(k,u)}C(["click"]);export{ot as default};
