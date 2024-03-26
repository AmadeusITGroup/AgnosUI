import{t as V}from"./chunk-OEMCFUNO.js";import{e as T,f as F,h as M,l as H,m as z}from"./chunk-ZBV2L2DC.js";import{R as _}from"./chunk-35RR5INX.js";import"./chunk-KJNIKP2T.js";import{G as h,Jb as c,Lb as D,Na as a,Qb as b,X as d,Za as w,ab as x,fb as y,gb as C,ib as p,jb as m,lb as S,pa as g,pb as E,tb as s,ub as l,vb as u,xa as v,zb as k}from"./chunk-7LGRIDZR.js";function O(i,t){i&1&&u(0,"div",5)(1,"div",6)(2,"div",7)}var B=(()=>{let t=class t extends _{constructor(){super(...arguments),this._zone=g(w)}onKeyDown(r,o,e){e(r,o),this._zone.onStable.pipe(h(1)).subscribe(()=>{r.target.focus()})}};t.\u0275fac=(()=>{let r;return function(e){return(r||(r=v(t)))(e||t)}})(),t.\u0275cmp=d({type:t,selectors:[["ng-component"]],hostAttrs:[2,"display","contents"],standalone:!0,features:[x,b],decls:7,vars:19,consts:[[1,"cup-container","position-relative"],[1,"cup"],[1,"cup-fill-parent"],[1,"cup-fill"],["role","slider",1,"coffee-indicator","au-slider-handle-vertical",3,"disabled","keydown","mousedown","touchstart"],[1,"bubble","bubble-1"],[1,"bubble","bubble-2"],[1,"bubble","bubble-3"]],template:function(o,e){o&1&&(s(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),y(4,O,3,0),l()()()(),s(5,"button",4),k("keydown",function(n){return e.onKeyDown(n,e.state.sortedHandles[0].id,e.widget.actions.keydown)})("mousedown",function(n){return e.widget.actions.mouseDown(n,e.state.sortedHandles[0].id)})("touchstart",function(n){return e.widget.actions.touchStart(n,e.state.sortedHandles[0].id)}),c(6),l()),o&2&&(a(3),m("height",e.state.progressDisplayOptions[0].height,"%"),a(),E(4,e.state.progressDisplayOptions[0].height>=50?4:-1),a(),S(e.state.vertical?"au-slider-handle-vertical":"au-slider-handle-horizontal"),m("left",e.state.handleDisplayOptions[e.state.sortedHandles[0].id].left,"%")("top",e.state.handleDisplayOptions[e.state.sortedHandles[0].id].top,"%"),p("disabled",e.state.disabled),C("aria-valuemin",e.state.min)("aria-valuemax",e.state.max)("aria-readonly",e.state.readonly?!0:null)("aria-disabled",e.state.disabled?!0:null)("aria-valuenow",e.state.sortedHandles[0].value)("aria-valuetext",e.state.sortedHandles[0].ariaValueText)("aria-label",e.state.sortedHandles[0].ariaLabel)("aria-orientation",e.state.vertical?"vertical":null),a(),D(" ",""+e.state.sortedHandles[0].value," "))},encapsulation:2,changeDetection:0});let i=t;return i})();var J=(()=>{let t=class t{constructor(){this.sliderCoffeeSlotStructure=B,this.sliderControl=new F([50])}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=d({type:t,selectors:[["ng-component"]],standalone:!0,features:[b],decls:3,vars:2,consts:[["auSlider","","auMin","0","auMax","100","auStepSize","1","auVertical","","auClassName","custom-slider",3,"formControl","auSlotStructure"]],template:function(o,e){o&1&&(s(0,"h2"),c(1,"Fully custom slider"),l(),u(2,"div",0)),o&2&&(a(2),p("formControl",e.sliderControl)("auSlotStructure",e.sliderCoffeeSlotStructure))},dependencies:[V,z,T,M,H],styles:[`@media (max-width: 576px){.au-slider.au-custom-slider-container{width:95%}}.au-custom-slider-handle{background-color:transparent;border:var(--bs-slider-handle-border);outline:var(--bs-slider-handle-outline);position:absolute;width:2.8rem;height:2.8rem;border-bottom:.15rem solid transparent}.au-custom-slider-handle:focus,.au-custom-slider-handle:focus-within{border-bottom:.15rem solid var(--bs-slider-handle-color)}.au-custom-slider-handle:after{content:"";position:absolute;top:0;left:0;width:inherit;height:inherit;background-color:transparent}.au-custom-slider-handle-horizontal{top:calc(50% - 1.4rem);transform:var(--bs-slider-translate-horizontal)}.custom-slider{background-color:transparent;height:210px!important;margin:50px auto;display:flex;flex-direction:column}.cup-container{width:300px;height:400px}@media (min-width: 576px){.cup-container{width:350px}}.cup{padding:0;height:210px;width:190px;border:10px solid var(--bs-body-color);position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;border-radius:20px 20px 60px 60px}.cup-fill-parent{overflow:hidden;height:100%;position:relative;border-radius:0 0 50px 50px}.cup-fill{background-image:url('data:image/svg+xml,%3Csvg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="340" height="210" viewBox="0 0 340 210"%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:url(%23linear-gradient);%7D%3C/style%3E%3ClinearGradient id="linear-gradient" x1="170" y1="0" x2="170" y2="220" gradientUnits="userSpaceOnUse"%3E%3Cstop offset="0" stop-color="%23faab2b"/%3E%3Cstop offset="1" stop-color="%23fb8b1b"/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath class="cls-1" d="M0,210V6Q42.5,-6,85,6T170,6T255,6T340,6V210"/%3E%3C/svg%3E'),url('data:image/svg+xml,%3Csvg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="340" height="210" viewBox="0 0 340 210"%3E%3Cdefs%3E%3Cstyle%3E.cls-2%7Bfill:%23fbd383;%7D%3C/style%3E%3C/defs%3E%3Cpath class="cls-2" d="M0,210V6Q42.5,18,85,6T170,6T255,6T340,6V210"/%3E%3C/svg%3E');background-position:0 0,0 0;background-repeat:repeat-x;background-clip:content-box;animation:coffee 3s infinite linear;position:absolute;bottom:0;width:100%;transition:height .6s ease;overflow-y:hidden}@keyframes coffee{to{background-position:-200% 0,-100% 0}}.cup:before{content:"";position:absolute;height:80px;width:60px;border:10px solid var(--bs-body-color);border-left:none;right:-70px;top:30px;border-radius:0 30px 80px 0}.cup:after{position:absolute;content:"";height:10px;width:260px;background-color:var(--bs-body-color);left:-45px;bottom:-10px;border-radius:10px}.bubble{height:15px;width:15px;background-color:#fbbe08;border-radius:50%;position:absolute;animation:bubbles forwards infinite;opacity:.6}@keyframes bubbles{to{bottom:calc(100% - 20px);opacity:0}}.bubble-1{left:30px;bottom:10px;animation-delay:.5s;animation-duration:3s}.bubble-2{left:80px;bottom:35px;animation-delay:1.2s;animation-duration:4s}.bubble-3{left:140px;bottom:30px;animation-duration:4s}.coffee-indicator{background-color:var(--bs-body-color);color:var(--bs-body-bg);border:var(--bs-slider-handle-border);border-radius:var(--bs-slider-handle-border-radius);outline:var(--bs-slider-handle-outline);position:absolute;width:45px;height:45px;font-size:1rem}@media (min-width: 576px){.coffee-indicator{width:60px;height:60px;font-size:1.5rem}}.coffee-indicator:before{content:" ";position:absolute;top:50%;left:50%;width:0;height:0;transform:translate(55%,-50%);border-left:25px solid var(--bs-body-color);border-top:18px solid transparent;border-bottom:18px solid transparent}@media (min-width: 576px){.coffee-indicator:before{border-left:35px solid var(--bs-body-color);border-top:23px solid transparent;border-bottom:23px solid transparent}}.coffee-indicator:focus{box-shadow:0 0 1rem .5rem var(--bs-slider-handle-color)}
`],encapsulation:2});let i=t;return i})();export{J as default};