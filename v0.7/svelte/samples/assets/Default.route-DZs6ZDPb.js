import{f as b,g as c,r as $,b as m,h as r,d as Y,t as _,s as i,e as C,j as v,k as h,n as D}from"./AppCommon-CvTG4iwO.js";import{b as M}from"./input-6Nd4hSYe.js";import{b as N}from"./this-DfxQvjvU.js";import{M as j,e as q,a as B}from"./Modal-CYLbaHfz.js";import"./actions-LhUqO-Ga.js";import"./class-CIYp1y2F.js";import"./modal-DP-4I7vf-BFPXMLMB.js";import"./writables-DCiBdIBK-D_eyNQqr.js";import"./directive-CKEccryv-BKNwwjMq.js";import"./baseTransitions-4Xi-Fjr6.js";import"./promise-CY2U8bTP-Dsfi2HxK.js";import"./fade-uOobJKgw-CNEIIqpL.js";import"./simpleClassTransition-BN7U525T.js";import"./cssTransitions-BAnmEeis.js";import"./extendWidget-JxsCFpbr.js";import"./Slot-PdhkTCCx.js";import"./snippet-BkLQeW4l.js";import"./config-BqHMhCCn.js";import"./config-Bb4GyM__.js";import"./index-client-DxeYKk58.js";var F=_('<button type="button" class="btn btn-outline-primary">Yes</button> <button type="button" class="btn btn-outline-danger">No</button>',1),L=_('<!> <button type="button" class="btn btn-primary">Launch demo modal</button> <div class="form-check form-switch mt-3"><input class="form-check-input" type="checkbox" role="switch" id="fullscreen"> <label class="form-check-label" for="fullscreen">Fullscreen</label></div> <hr> <div data-testid="message"> </div>',1);function et(k){let e,o=v(""),l=v(!1);var u=L(),p=b(u);N(j(p,{title:"Save changes",get fullscreen(){return c(l)},footer:a=>{var n=F(),s=b(n);s.__click=()=>e.api.close(!0);var w=i(s,2);w.__click=()=>e.api.close(!1),m(a,n)},children:(a,n)=>{var s=$("Do you want to save your changes?");m(a,s)},$$slots:{footer:!0,default:!0}}),a=>e=a,()=>e);var d=i(p,2);d.__click=async()=>{r(o,"");const t=await e.api.open();t===q?r(o,"You clicked on the close button."):t===B?r(o,"You clicked outside the modal."):r(o,`You answered the question with "${t?"Yes":"No"}".`)};var f=i(d,2),g=h(f),y=i(f,4),x=h(y);Y(()=>D(x,c(o))),M(g,()=>c(l),t=>r(l,t)),m(k,u)}C(["click"]);export{et as default};