import{M as x,t as _,f as b,b as l,d as i,h as S,c as k,T as C,k as a}from"./AppCommon-B-ROr4aU.js";import{C as D}from"./Carousel-D2Nd-L2Q.js";import"./actions-Cbyr4fVv.js";import"./index-D_vJUaIe.js";import"./stores-DWJrwGVR.js";import"./dom-gfxqXJpK-CVUkDlT_.js";import"./writables-CgpOQ4hA-BLtlctEd.js";import"./navManager-DB5FHfMJ.js";import"./extendWidget-GeFhB8wc.js";import"./config-lZO9LbO2.js";import"./config-ZUzlAODH.js";import"./index-client-hhUEBj_e.js";import"./Slot-DxNJ8UAq.js";import"./snippet-DFOQFhBJ.js";var T=_('<img class="w-100" alt="random picsum" style="aspect-ratio: 1.8 / 1;"> <div class="carousel-caption d-none d-md-block"><h5> </h5> <p> </p></div>',1);function L(c){const e=x(),d=[{id:`${e}-944`,src:"https://picsum.photos/id/944/900/500",caption:{title:"First slide label",text:"Some representative placeholder content for the first slide."}},{id:`${e}-1011`,src:"https://picsum.photos/id/1011/900/500",caption:{title:"Second slide label",text:"Some representative placeholder content for the second slide."}},{id:`${e}-984`,src:"https://picsum.photos/id/984/900/500",caption:{title:"Third slide label",text:"Some representative placeholder content for the third slide."}}];D(c,{slidesData:d,slide:(m,t)=>{let n=()=>t==null?void 0:t().src,s=()=>t==null?void 0:t().caption;var o=T(),r=b(o),h=l(r,2),p=i(h),f=i(p),v=l(p,2),u=i(v);S(()=>{C(r,"src",n()),a(f,s().title),a(u,s().text)}),k(m,o)},$$slots:{slide:!0}})}export{L as default};
