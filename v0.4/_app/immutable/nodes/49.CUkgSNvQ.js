import{s as l,n as s}from"../chunks/scheduler.DDKLfDno.js";import{S as i,i as u,c as m,b as p,m as f,t as d,a as c,e as g}from"../chunks/index.DMnRV_Lo.js";import{P as _}from"../chunks/Playground.Bk-_fAWY.js";import{_ as r}from"../chunks/preload-helper.Dch09mLN.js";import{w as y}from"../chunks/api.Bb9yzrQy.js";import{n as P}from"../chunks/stores.BDpJ7baM.js";const $={min:0,max:100,stepSize:1,readonly:!1,disabled:!1,vertical:!1,className:"",ariaLabelHandle:e=>""+e,ariaValueText:e=>""+e,onValuesChange:P,values:[0],showValueLabels:!0,showMinMaxLabels:!0,rtl:!1};function b(){return{...$}}const v={structure:void 0,label:({value:e})=>""+e,handle:void 0};function V(){return{...b(),...v}}const x=V,h={componentName:"slider",style:"bootstrap",sampleName:"playground",files:{angular:{complementaryUrl:"/bootstrap",entryPoint:"playground.component.ts",files:{"playground.component.ts":()=>r(()=>import("../chunks/playground.route.D84sOAPn.js"),[],import.meta.url).then(e=>e.default)}},react:{complementaryUrl:"/bootstrap",entryPoint:"playground.tsx",files:{"playground.tsx":()=>r(()=>import("../chunks/Playground.route.DY2m3dEh.js"),[],import.meta.url).then(e=>e.default)}},svelte:{complementaryUrl:"/bootstrap",entryPoint:"playground.svelte",files:{"playground.svelte":()=>r(()=>import("../chunks/Playground.route.BgFZWu1_.js"),[],import.meta.url).then(e=>e.default)}}}};function D(e){let t,o;return t=new _({props:{sample:h,config:x(),doc:y,listPropsValues:e[0]}}),{c(){m(t.$$.fragment)},l(a){p(t.$$.fragment,a)},m(a,n){f(t,a,n),o=!0},p:s,i(a){o||(d(t.$$.fragment,a),o=!0)},o(a){c(t.$$.fragment,a),o=!1},d(a){g(t,a)}}}function L(e){return[{ariaLabelHandle:["sliderLabelHandleDefault"],ariaValueText:["sliderValueTextUnits"]}]}class A extends i{constructor(t){super(),u(this,t,L,D,l,{})}}export{A as component};