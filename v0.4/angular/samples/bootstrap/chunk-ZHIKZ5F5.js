import{J as z}from"./chunk-7UZCEIVY.js";import{S as E,V as k,ea as D,fa as F,ha as M,la as T,ma as V}from"./chunk-L7LSTPNE.js";import"./chunk-RIVCGYQY.js";import{$a as g,Bb as c,Db as y,F as b,Ib as u,Kb as C,Lb as S,Ma as n,Sa as f,Xa as x,Z as m,ba as d,bb as l,cb as v,ib as w,mb as a,na as h,nb as s,ob as p}from"./chunk-DSSB452B.js";var _=t=>({item:t}),L=(t,e)=>[t,e];function I(t,e){t&1&&p(0,"div",5)(1,"div",6)(2,"div",7)}var B=(()=>{let e=class e extends k{constructor(){super(...arguments),this._zone=m(f)}onKeyDown(r,i,o){o(r,i),this._zone.onStable.pipe(b(1)).subscribe(()=>{r.target.focus()})}};e.\u0275fac=(()=>{let r;return function(o){return(r||(r=h(e)))(o||e)}})(),e.\u0275cmp=d({type:e,selectors:[["ng-component"]],hostAttrs:[2,"display","contents"],standalone:!0,features:[x,u],decls:7,vars:10,consts:[[1,"cup-container","position-relative"],[1,"cup"],[1,"cup-fill-parent"],[1,"cup-fill"],[1,"coffee-indicator",3,"auUse"],[1,"bubble","bubble-1"],[1,"bubble","bubble-2"],[1,"bubble","bubble-3"]],template:function(i,o){i&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),g(4,I,3,0),s()()()(),a(5,"button",4),c(6),s()),i&2&&(n(3),v("height",o.state.progressDisplayOptions[0].height,"%"),n(),w(o.state.progressDisplayOptions[0].height>=50?4:-1),n(),l("auUse",S(7,L,o.widget.directives.handleDirective,C(5,_,o.state.sortedHandles[0]))),n(),y(" ",""+o.state.sortedHandles[0].value," "))},dependencies:[E],encapsulation:2,changeDetection:0});let t=e;return t})();var J=(()=>{let e=class e{constructor(){this.sliderCoffeeSlotStructure=B,this.sliderControl=new F([50])}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["ng-component"]],standalone:!0,features:[u],decls:3,vars:2,consts:[["auSlider","","auMin","0","auMax","100","auStepSize","1","auVertical","","auClassName","custom-slider",3,"formControl","auStructure"]],template:function(i,o){i&1&&(a(0,"h2"),c(1,"Fully custom slider"),s(),p(2,"div",0)),i&2&&(n(2),l("formControl",o.sliderControl)("auStructure",o.sliderCoffeeSlotStructure))},dependencies:[z,V,D,M,T],styles:[`@media (max-width: 576px){.au-slider.au-slider-container{width:95%}}.au-slider-handle.custom-handle{background-color:transparent;border:var(--bs-slider-handle-border);border-radius:0;width:2.8rem;height:2.8rem;border-bottom:.15rem solid transparent}.au-slider-handle.custom-handle:focus,.au-slider-handle.custom-handle:focus-within{box-shadow:none;border-bottom:.15rem solid var(--bs-slider-handle-color)}.au-slider-handle.custom-handle:after{content:"";position:absolute;top:0;left:0;width:inherit;height:inherit;background-color:transparent}.au-slider-handle.custom-handle:not([disabled]):hover{border-bottom:.15rem solid var(--bs-slider-handle-color)}.au-slider-handle-horizontal.custom-handle{top:calc(50% - 1.4rem)!important}.custom-slider{background-color:transparent;height:210px!important;margin:50px auto;display:flex;flex-direction:column}.cup-container{width:300px;height:400px}@media (min-width: 576px){.cup-container{width:350px}}.cup{padding:0;height:210px;width:190px;border:10px solid var(--bs-body-color);position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;border-radius:20px 20px 60px 60px}.cup-fill-parent{overflow:hidden;height:100%;position:relative;border-radius:0 0 50px 50px}.cup-fill{background-image:url('data:image/svg+xml,%3Csvg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="340" height="210" viewBox="0 0 340 210"%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:url(%23linear-gradient);%7D%3C/style%3E%3ClinearGradient id="linear-gradient" x1="170" y1="0" x2="170" y2="220" gradientUnits="userSpaceOnUse"%3E%3Cstop offset="0" stop-color="%23faab2b"/%3E%3Cstop offset="1" stop-color="%23fb8b1b"/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath class="cls-1" d="M0,210V6Q42.5,-6,85,6T170,6T255,6T340,6V210"/%3E%3C/svg%3E'),url('data:image/svg+xml,%3Csvg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="340" height="210" viewBox="0 0 340 210"%3E%3Cdefs%3E%3Cstyle%3E.cls-2%7Bfill:%23fbd383;%7D%3C/style%3E%3C/defs%3E%3Cpath class="cls-2" d="M0,210V6Q42.5,18,85,6T170,6T255,6T340,6V210"/%3E%3C/svg%3E');background-position:0 0,0 0;background-repeat:repeat-x;background-clip:content-box;animation:coffee 3s infinite linear;position:absolute;bottom:0;width:100%;transition:height .6s ease;overflow-y:hidden}@keyframes coffee{to{background-position:-200% 0,-100% 0}}.cup:before{content:"";position:absolute;height:80px;width:60px;border:10px solid var(--bs-body-color);border-left:none;right:-70px;top:30px;border-radius:0 30px 80px 0}.cup:after{position:absolute;content:"";height:10px;width:260px;background-color:var(--bs-body-color);left:-45px;bottom:-10px;border-radius:10px}.bubble{height:15px;width:15px;background-color:#fbbe08;border-radius:50%;position:absolute;animation:bubbles forwards infinite;opacity:.6}@keyframes bubbles{to{bottom:calc(100% - 20px);opacity:0}}.bubble-1{left:30px;bottom:10px;animation-delay:.5s;animation-duration:3s}.bubble-2{left:80px;bottom:35px;animation-delay:1.2s;animation-duration:4s}.bubble-3{left:140px;bottom:30px;animation-duration:4s}.au-slider-handle.coffee-indicator{background-color:var(--bs-body-color);color:var(--bs-body-bg);border:var(--bs-slider-handle-border);border-radius:var(--bs-slider-handle-border-radius);outline:var(--bs-slider-handle-outline);position:absolute;width:45px;height:45px;font-size:1rem}@media (min-width: 576px){.au-slider-handle.coffee-indicator{width:60px;height:60px;font-size:1.5rem}}.au-slider-handle.coffee-indicator:before{content:" ";position:absolute;top:50%;left:50%;width:0;height:0;transform:translate(55%,-50%);border-left:25px solid var(--bs-body-color);border-top:18px solid transparent;border-bottom:18px solid transparent}@media (min-width: 576px){.au-slider-handle.coffee-indicator:before{border-left:35px solid var(--bs-body-color);border-top:23px solid transparent;border-bottom:23px solid transparent}}.au-slider-handle.coffee-indicator:focus{box-shadow:0 0 1rem .5rem var(--bs-slider-handle-color)}
`],encapsulation:2});let t=e;return t})();export{J as default};
