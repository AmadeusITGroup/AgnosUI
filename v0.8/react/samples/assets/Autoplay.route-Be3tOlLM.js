import{r as e,j as t}from"./App-CsOkU7k8.js";import{C as f}from"./carousel-CB4uoAm0-CoCg8B_6.js";import{A as b}from"./embla-carousel-autoplay.esm-CjDxzJE7.js";import{S as v,a as h}from"./pause-fill-CPwiUlsM.js";import{c as y}from"./clsx-B-dksMZM.js";import{u as x}from"./directive-CEErjM5c-BVE02Lyt.js";import"./index-B3sgZO52.js";import"./stores-CNc_rSPE.js";import"./dom-gfxqXJpK-DnwY-KAj.js";import"./writables-CgpOQ4hA-Cd7Z63K9.js";import"./navManager-DPi01Ap_.js";import"./extendWidget-CRSgS6m7.js";import"./config-C-QG9XGU.js";import"./widget-BP6z-zfB-Ce_gP_Ht.js";import"./stores-DZalyTTa-JtJrTKhC.js";import"./slot-BtkEMpNN.js";const j=({active:o,tabIndicator:s,index:r,id:n})=>t.jsx("div",{className:"page-item",children:t.jsx("button",{type:"button",className:y(["page-link",o&&"active"]),...x(s,{index:r,id:n}),children:r+1})}),N=({state:o,api:s,directives:r,onPlayingChange:n})=>{const[l,p]=e.useState(!0),u=e.useCallback(c=>c.nativeEvent.preventDefault(),[]),m=e.useCallback(c=>c.nativeEvent.stopPropagation(),[]),a=e.useCallback(()=>{l?s.plugins().autoplay.stop():s.plugins().autoplay.play()},[s,l]),i=e.useRef(null),d=e.useCallback(()=>{i.current.style.transition="none",i.current.style.width="0%",window.requestAnimationFrame(()=>{window.setTimeout(()=>{i.current.style.transition=`width ${s.plugins().autoplay.timeUntilNext()}ms linear`,i.current.style.width="100%"})})},[s,i]);return e.useEffect(()=>{o.initialized&&i.current&&(s.emblaApi().on("autoplay:play",()=>{p(!0),n(!0)}).on("autoplay:stop",()=>{p(!1),n(!1)}).on("autoplay:timerset",()=>{d()}).on("autoplay:timerstopped",()=>{i.current.style.transition="none",i.current.style.width="0%"}),d())},[o.initialized,s,n,i,d]),t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"navigation",children:[t.jsx("div",{className:"d-flex bg-light rounded-4 py-1 px-2",onPointerDown:u,onTouchStart:m,children:t.jsx("button",{type:"button",className:"btn btn-sm btn-outline-primary rounded-5 d-flex align-items-center",onClick:a,"aria-label":l?"Pause rotation of slides":"Play rotation of slides",children:l?t.jsx(v,{}):t.jsx(h,{})})}),t.jsx("div",{className:"d-flex bg-light rounded-4 py-1 px-3 align-items-center",onPointerDown:u,onTouchStart:m,children:t.jsx("div",{className:"pagination pagination-sm align-items-center",...x(r.tabList),children:o.slidesData.map((c,g)=>t.jsx(j,{index:g,id:c.id,active:o.selectedScrollSnap===g,tabIndicator:r.tabIndicator},c.id))})})]}),t.jsx("div",{className:y(["progress-container","d-none","d-sm-flex",!l&&"opacity-0"]),"aria-hidden":"true",children:t.jsx("div",{className:"bg-light rounded-4 py-1 px-3 w-100 d-flex align-items-center",children:t.jsx("div",{className:"progress w-100",children:t.jsx("div",{className:"autoplay-progress-bar progress-bar",ref:i})})})})]})},q=()=>{const o=e.useId(),s=[944,1011,984].map(a=>({id:`${o}-${a}`,src:`https://picsum.photos/id/${a}/900/500`})),[r,n]=e.useState("off"),l=e.useMemo(()=>[b({playOnInit:!0,stopOnFocusIn:!0,delay:4e3})],[]),p=e.useCallback(({src:a})=>t.jsx("img",{className:"w-100 rounded-5",alt:"random picsum",style:{aspectRatio:"1.8 / 1"},src:a}),[]),u=e.useCallback(a=>{n(a?"off":"polite")},[]),m=e.useCallback(a=>t.jsx(N,{...a,onPlayingChange:u}),[u]);return t.jsx(f,{navigation:m,slidesData:s,slide:p,className:"autoplay-carousel",loop:!0,plugins:l,ariaLive:r})};export{q as default};
