import{a9 as u,a6 as _e,ab as le,a8 as Ie,p as ke,M as ae,P as ce,c as ye,d as H,b as R,a as Fe,q as ue,t as Y,K as Se,s as de,k as O,n as V,g as F,l as me,L as ie}from"./AppCommon-CBBtLyuE.js";import{a as m}from"./actions-Dry0yoXS.js";import{S as pe}from"./Slot-B_UvH1Q6.js";import{c as $e}from"./config-VEX93h1Q.js";import{c as Le,o as Ne,a as Te,b as Pe}from"./floatingUI-Bgzqgcp_.js";import{c as De}from"./focustrack-DC3NAESQ.js";import{c as Me}from"./navManager-BVMJWeMV.js";import{w as Ae,D as Ee,y as Oe,x as Be,s as He,m as Re,B as We,n as ne,a as B,c as X}from"./stores-DX-ADOKq-BfxXclJX.js";import{e as qe}from"./extendWidget-CYslR8F4.js";const ze={id:void 0,ariaLabel:"Select",open:!1,disabled:!1,items:[],filterText:"",loading:!1,selected:[],navSelector:r=>r.querySelectorAll(".au-select-badge,input"),itemIdFn:r=>""+r,onOpenChange:ne,onFilterTextChange:ne,onSelectedChange:ne,allowedPlacements:["bottom-start","top-start","bottom-end","top-end"],className:"",menuClassName:"",menuItemClassName:"",badgeClassName:""};function Ue(r){const[{id$:l,open$:C,filterText$:b,items$:j,itemIdFn$:W,onOpenChange$:w,onFilterTextChange$:Z,onSelectedChange$:d,allowedPlacements$:q,navSelector$:_,className$:z,badgeClassName$:N,ariaLabel$:T,menuClassName$:P,...D},U]=Ae(ze,r),{selected$:h}=D,S=u(()=>l()??Ee()),v=Oe(b,Z),{hasFocus$:G,directive:J}=De(),f=Be(w,[C,G],([e,t])=>e&&t),M=u(()=>{const e=new Map,t=W();for(const a of h()){const g=t(a);e.set(g,{item:a,id:t(a),selected:!0})}return e}),ee=u(()=>[...M().values()]),I=function(){const e=_e(0);return le(e,t=>{const{length:a}=i();t!=null&&(a?t<0?t=a-1:t>=a&&(t=0):t=void 0),e.set(t)})}(),s=u(()=>{const e=new Map;if(f()){const t=M(),a=W();for(const g of j()){const y=a(g);e.set(y,{item:g,id:y,selected:t.has(y)})}}return e}),i=u(()=>f()?[...s().values()]:[]),n=u(()=>{const e=i(),t=I();return e.length&&t!=null?e[t]:void 0}),{directives:{floatingDirective:o,referenceDirective:x},stores:{placement$:p}}=Le({props:{computePositionOptions:le(u(()=>({middleware:[Ne(5),Te({allowedPlacements:q()}),Pe()]})))}}),{directive:$,refreshElements:A,focusFirst:te,focusLast:se,focusLeft:k,focusRight:E}=Me(),K=u(()=>({keys:{Home:te,End:se,ArrowLeft:k,ArrowRight:E},selector:_()})),oe=(e,t)=>{const a=e.target;A(),c.api.unselect(t),a instanceof HTMLElement&&setTimeout(()=>{k({event:e,referenceElement:a})||E({event:e,referenceElement:a})}),e.preventDefault()},fe=B(()=>({attributes:{role:"combobox","aria-haspopup":"listbox","aria-expanded":u(()=>`${f()}`),"aria-controls":u(()=>`${S()}-menu`)}})),ge=B(e=>({attributes:{tabindex:-1,class:N},classNames:{"au-select-badge":!0},events:{keydown:t=>{let a=!1;switch(t.key){case"Backspace":case"Delete":{oe(t,e().item),a=!0;break}}a&&t.preventDefault()}}})),be=B(()=>({attributes:{role:"listbox",id:u(()=>`${S()}-menu`),"data-popper-placement":p,class:P},events:{mousedown:e=>e.preventDefault()}})),he=B(e=>({attributes:{role:"option","aria-selected":u(()=>`${e().selected}`),style:"cursor: pointer"},classNames:{"au-select-item":!0,selected:u(()=>e().selected)},events:{click:()=>c.api.toggleItem(e().item)}})),ve=B(()=>({attributes:{id:S(),type:"text","aria-label":T(),"aria-autocomplete":"list",autocorrect:"off",autocapitalize:"none",autocomplete:"off"},classNames:{"au-select-input":!0},events:{input:e=>{const t=e.target.value;Ie(()=>{f.set(t!=null&&t!==""),v.set(t)})},keydown:({ctrlKey:e,key:t,preventDefault:a})=>{let g=!0;switch(t){case"ArrowDown":{f()?e?c.api.highlightLast():c.api.highlightNext():(c.api.open(),c.api.highlightFirst());break}case"ArrowUp":e?c.api.highlightFirst():c.api.highlightPrevious();break;case"Enter":{const y=n();y&&c.api.toggleItem(y.item);break}case"Escape":f.set(!1);break;default:g=!1}g&&a()}}})),xe=B(e=>({events:{click:t=>{oe(t,e().item)}}})),c={...He({id$:S,visibleItems$:i,highlighted$:n,open$:f,selectedContexts$:ee,filterText$:v,placement$:p,className$:z,badgeClassName$:N,ariaLabel$:T,menuClassName$:P,...D}),patch:U,api:{clear(){h.set([])},select(e){c.api.toggleItem(e,!0)},unselect(e){c.api.toggleItem(e,!1)},toggleItem(e,t){const a=W(),g=a(e),Q=M().has(g);t==null&&(t=!Q),!(t&&!s().has(g)||!t&&!Q)&&h.update(L=>{var re;if(L=[...L],t&&!Q)L.push(e);else if(!t&&Q){const Ce=L.findIndex(we=>a(we)===g);L.splice(Ce,1)}return(re=d())==null||re(L),L})},clearText(){},highlight(e){const t=i().findIndex(a=>a.item===e);I.set(t===-1?void 0:t)},highlightFirst(){I.set(0)},highlightPrevious(){I.update(e=>e!=null?e-1:-1)},highlightNext(){I.update(e=>e!=null?e+1:1/0)},highlightLast(){I.set(-1)},open:()=>c.api.toggle(!0),close:()=>c.api.toggle(!1),toggle(e){f.update(t=>e??!t)}},directives:{hasFocusDirective:J,floatingDirective:o,referenceDirective:x,inputContainerDirective:Re(We($,K),fe),badgeAttributesDirective:ge,menuAttributesDirective:be,itemAttributesDirective:he,inputDirective:ve,badgeCloseButtonDirective:xe}};return c}const je={badgeLabel:({itemContext:r})=>r.item,itemLabel:({itemContext:r})=>r.item},Ge=qe(Ue,je),Je=Ge,Ke=(r,l)=>{let C=()=>l==null?void 0:l().itemContext;var b=ue();H(()=>me(b,C().item)),R(r,b)},Qe=(r,l)=>{let C=()=>l==null?void 0:l().itemContext;var b=ue();H(()=>me(b,C().item)),R(r,b)};var Ve=Y("<div><!></div>"),Xe=Y("<li><!></li>"),Ye=Y("<ul></ul>"),Ze=Y("<div><div><!> <input></div> <!></div>");function ct(r,l){ke(l,!0);let C=ae(l,"open",15,!1),b=ae(l,"filterText",15),j=ae(l,"selected",15),W=Se(l,["$$slots","$$events","$$legacy","open","filterText","selected"]);const w=$e({factory:Je,widgetName:"select",get props(){return{...W,open:C(),filterText:b(),selected:j()}},enablePatchChanged:!0,defaultConfig:{badgeLabel:Ke,itemLabel:Qe},events:{onOpenChange(s){C(s)},onSelectedChange:s=>{j(s)},onFilterTextChange:s=>{b(s)}}}),Z=w.api,{state:d,directives:{floatingDirective:q,hasFocusDirective:_,referenceDirective:z,inputContainerDirective:N,badgeAttributesDirective:T,menuAttributesDirective:P,itemAttributesDirective:D,inputDirective:U}}=w;var h=Ze();let S;var v=V(h);let G;var J=V(v);ce(J,17,()=>d.selectedContexts,s=>s.id,(s,i)=>{var n=Ve();let o;var x=V(n);const p=ie(()=>({state:d,directives:w.directives,api:w.api,itemContext:F(i)}));pe(x,{get content(){return d.badgeLabel},get props(){return F(p)}}),m(n,($,A)=>T==null?void 0:T($,A),()=>F(i)),H($=>o=O(n,o,{...$}),[()=>({})]),R(s,n)});var f=de(J,2);let M;m(f,s=>U==null?void 0:U(s)),m(v,s=>_==null?void 0:_(s)),m(v,s=>N==null?void 0:N(s)),m(v,(s,i)=>{var n;return(n=X)==null?void 0:n(s,i)},()=>"d-flex align-items-center flex-wrap gap-1");var ee=de(v,2);{var I=s=>{var i=Ye();let n;ce(i,21,()=>d.visibleItems,o=>o.id,(o,x)=>{var p=Xe();const $=ie(()=>F(x)===d.highlighted);let A;var te=V(p);const se=ie(()=>({state:d,directives:w.directives,api:w.api,itemContext:F(x)}));pe(te,{get content(){return d.itemLabel},get props(){return F(se)}}),m(p,(k,E)=>{var K;return(K=X)==null?void 0:K(k,E)},()=>["dropdown-item position-relative",{"text-bg-primary":F($)}]),m(p,(k,E)=>D==null?void 0:D(k,E),()=>F(x)),H(k=>A=O(p,A,{...k}),[()=>({})]),R(o,p)}),m(i,o=>_==null?void 0:_(o)),m(i,o=>q==null?void 0:q(o)),m(i,o=>P==null?void 0:P(o)),m(i,(o,x)=>{var p;return(p=X)==null?void 0:p(o,x)},()=>"dropdown-menu show"),H(o=>n=O(i,n,{...o}),[()=>({})]),R(s,i)};ye(ee,s=>{d.open&&d.visibleItems.length>0&&s(I)})}return m(h,s=>z==null?void 0:z(s)),m(h,(s,i)=>{var n;return(n=X)==null?void 0:n(s,i)},()=>"au-select dropdown border border-1 p-1 mb-3 d-block "+d.className),H((s,i,n)=>{S=O(h,S,{...s}),G=O(v,G,{...i}),M=O(f,M,{value:d.filterText,...n})},[()=>({}),()=>({}),()=>({})]),R(r,h),Fe({api:Z})}export{ct as S};
