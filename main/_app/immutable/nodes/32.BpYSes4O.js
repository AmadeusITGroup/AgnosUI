import{s as n,n as i}from"../chunks/scheduler.CCttlYOB.js";import{S as c,i as p,c as l,b as m,m as u,t as d,a as g,d as b}from"../chunks/index.CYumcxZx.js";import{P as f}from"../chunks/Playground.-PYCt3Am.js";import{g as h}from"../chunks/progressbar.BS_HWzP5.js";import{_ as s}from"../chunks/preload-helper.BQ24v_F8.js";const y={componentName:"progressbar",style:"bootstrap",sampleName:"playground",files:{angular:{complementaryUrl:"",entryPoint:"playground.component.ts",files:{"playground.component.ts":()=>s(()=>import("../chunks/playground.route.zfSt6O2Z.js"),__vite__mapDeps([]),import.meta.url).then(t=>t.default)}},react:{complementaryUrl:"",entryPoint:"playground.tsx",files:{"playground.tsx":()=>s(()=>import("../chunks/Playground.route.BxufPuoi.js"),__vite__mapDeps([]),import.meta.url).then(t=>t.default)}},svelte:{complementaryUrl:"/app",entryPoint:"playground.svelte",files:{"playground.svelte":()=>s(()=>import("../chunks/Playground.route.Cqurq1Km.js"),__vite__mapDeps([]),import.meta.url).then(t=>t.default)}}}},v=[{name:"animated",description:"If `true`, animates a striped progressbar.\nTakes effect only for browsers supporting CSS3 animations, and if `striped` is `true`.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:50,character:2,position:1336},end:{line:50,character:20,position:1354},type:"boolean",defaultValue:"false"},{name:"ariaLabel",description:"The aria label.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:29,character:2,position:818},end:{line:29,character:20,position:836},type:"string",defaultValue:"'Progressbar'"},{name:"ariaValueTextFn",description:"Return the value for the 'aria-valuetext' attribute.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:79,character:2,position:1980},end:{line:79,character:91,position:2069},type:"(value: number, minimum: number, maximum: number) => string | undefined",defaultValue:"() => undefined"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string",defaultValue:"''"},{name:"height",description:"Height of the progressbar, can be any valid css height value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:41,character:2,position:1098},end:{line:41,character:17,position:1113},type:"string",defaultValue:"''"},{name:"max",description:"The maximum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:20,character:2,position:705},end:{line:20,character:14,position:717},type:"number",defaultValue:"100"},{name:"min",description:"The minimum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:15,character:2,position:636},end:{line:15,character:14,position:648},type:"number",defaultValue:"0"},{name:"slotDefault",description:"Label of the progress.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:37,character:2,position:975},end:{line:37,character:47,position:1020},type:"SlotContent<ProgressbarContext>",defaultValue:"undefined"},{name:"slotStructure",description:"Global template for the Progressbar.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:33,character:2,position:889},end:{line:33,character:49,position:936},type:"SlotContent<ProgressbarContext>",defaultValue:"undefined"},{name:"striped",description:"If `true`, shows a striped progressbar.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:45,character:2,position:1169},end:{line:45,character:19,position:1186},type:"boolean",defaultValue:"false"},{name:"value",description:"The current value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:25,character:2,position:772},end:{line:25,character:16,position:786},type:"number",defaultValue:"0"}],N=[{name:"animated",description:"If `true`, animates a striped progressbar.\nTakes effect only for browsers supporting CSS3 animations, and if `striped` is `true`.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:50,character:2,position:1336},end:{line:50,character:20,position:1354},type:"boolean"},{name:"ariaLabel",description:"The aria label.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:29,character:2,position:818},end:{line:29,character:20,position:836},type:"string"},{name:"ariaValueText",description:"The aria value text.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:69,character:2,position:1696},end:{line:69,character:36,position:1730},type:"string | undefined"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string"},{name:"finished",description:"`true` if the value has reached its maximum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:65,character:2,position:1641},end:{line:65,character:20,position:1659},type:"boolean"},{name:"height",description:"Height of the progressbar, can be any valid css height value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:41,character:2,position:1098},end:{line:41,character:17,position:1113},type:"string"},{name:"max",description:"The maximum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:20,character:2,position:705},end:{line:20,character:14,position:717},type:"number"},{name:"min",description:"The minimum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:15,character:2,position:636},end:{line:15,character:14,position:648},type:"number"},{name:"percentage",description:"Percentage of completion.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:57,character:2,position:1474},end:{line:57,character:21,position:1493},type:"number"},{name:"slotDefault",description:"Label of the progress.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:37,character:2,position:975},end:{line:37,character:47,position:1020},type:"SlotContent<ProgressbarContext>"},{name:"slotStructure",description:"Global template for the Progressbar.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:33,character:2,position:889},end:{line:33,character:49,position:936},type:"SlotContent<ProgressbarContext>"},{name:"started",description:"`true` if the value is above its minimum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:61,character:2,position:1557},end:{line:61,character:19,position:1574},type:"boolean"},{name:"striped",description:"If `true`, shows a striped progressbar.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:45,character:2,position:1169},end:{line:45,character:19,position:1186},type:"boolean"},{name:"value",description:"The current value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:25,character:2,position:772},end:{line:25,character:16,position:786},type:"number"}],_=[],P={props:v,state:N,api:_};function x(t){let e,a;return e=new f({props:{sample:y,config:h(),doc:P}}),{c(){l(e.$$.fragment)},l(r){m(e.$$.fragment,r)},m(r,o){u(e,r,o),a=!0},p:i,i(r){a||(d(e.$$.fragment,r),a=!0)},o(r){g(e.$$.fragment,r),a=!1},d(r){b(e,r)}}}class w extends c{constructor(e){super(),p(this,e,null,x,n,{})}}export{w as component};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
