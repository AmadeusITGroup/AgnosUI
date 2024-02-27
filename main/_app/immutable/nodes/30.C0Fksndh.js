import{s as o,n}from"../chunks/scheduler.CCttlYOB.js";import{S as i,i as c,c as p,b as l,m,t as d,a as u,d as b}from"../chunks/index.CYumcxZx.js";import{g}from"../chunks/progressbar.BS_HWzP5.js";import{A as h}from"../chunks/ApiDoc.BZ6TsVsX.js";const f=[{name:"animated",description:"If `true`, animates a striped progressbar.\nTakes effect only for browsers supporting CSS3 animations, and if `striped` is `true`.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:50,character:2,position:1336},end:{line:50,character:20,position:1354},type:"boolean",defaultValue:"false"},{name:"ariaLabel",description:"The aria label.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:29,character:2,position:818},end:{line:29,character:20,position:836},type:"string",defaultValue:"'Progressbar'"},{name:"ariaValueTextFn",description:"Return the value for the 'aria-valuetext' attribute.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:79,character:2,position:1980},end:{line:79,character:91,position:2069},type:"(value: number, minimum: number, maximum: number) => string | undefined",defaultValue:"() => undefined"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string",defaultValue:"''"},{name:"height",description:"Height of the progressbar, can be any valid css height value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:41,character:2,position:1098},end:{line:41,character:17,position:1113},type:"string",defaultValue:"''"},{name:"max",description:"The maximum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:20,character:2,position:705},end:{line:20,character:14,position:717},type:"number",defaultValue:"100"},{name:"min",description:"The minimum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:15,character:2,position:636},end:{line:15,character:14,position:648},type:"number",defaultValue:"0"},{name:"slotDefault",description:"Label of the progress.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:37,character:2,position:975},end:{line:37,character:47,position:1020},type:"SlotContent<ProgressbarContext>",defaultValue:"undefined"},{name:"slotStructure",description:"Global template for the Progressbar.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:33,character:2,position:889},end:{line:33,character:49,position:936},type:"SlotContent<ProgressbarContext>",defaultValue:"undefined"},{name:"striped",description:"If `true`, shows a striped progressbar.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:45,character:2,position:1169},end:{line:45,character:19,position:1186},type:"boolean",defaultValue:"false"},{name:"value",description:"The current value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:25,character:2,position:772},end:{line:25,character:16,position:786},type:"number",defaultValue:"0"}],y=[{name:"animated",description:"If `true`, animates a striped progressbar.\nTakes effect only for browsers supporting CSS3 animations, and if `striped` is `true`.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:50,character:2,position:1336},end:{line:50,character:20,position:1354},type:"boolean"},{name:"ariaLabel",description:"The aria label.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:29,character:2,position:818},end:{line:29,character:20,position:836},type:"string"},{name:"ariaValueText",description:"The aria value text.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:69,character:2,position:1696},end:{line:69,character:36,position:1730},type:"string | undefined"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string"},{name:"finished",description:"`true` if the value has reached its maximum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:65,character:2,position:1641},end:{line:65,character:20,position:1659},type:"boolean"},{name:"height",description:"Height of the progressbar, can be any valid css height value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:41,character:2,position:1098},end:{line:41,character:17,position:1113},type:"string"},{name:"max",description:"The maximum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:20,character:2,position:705},end:{line:20,character:14,position:717},type:"number"},{name:"min",description:"The minimum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:15,character:2,position:636},end:{line:15,character:14,position:648},type:"number"},{name:"percentage",description:"Percentage of completion.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:57,character:2,position:1474},end:{line:57,character:21,position:1493},type:"number"},{name:"slotDefault",description:"Label of the progress.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:37,character:2,position:975},end:{line:37,character:47,position:1020},type:"SlotContent<ProgressbarContext>"},{name:"slotStructure",description:"Global template for the Progressbar.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:33,character:2,position:889},end:{line:33,character:49,position:936},type:"SlotContent<ProgressbarContext>"},{name:"started",description:"`true` if the value is above its minimum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:61,character:2,position:1557},end:{line:61,character:19,position:1574},type:"boolean"},{name:"striped",description:"If `true`, shows a striped progressbar.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:45,character:2,position:1169},end:{line:45,character:19,position:1186},type:"boolean"},{name:"value",description:"The current value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:25,character:2,position:772},end:{line:25,character:16,position:786},type:"number"}],N=[],v={props:f,state:y,api:N};function x(a){let e,t;return e=new h({props:{doc:v,defaultValues:g()}}),{c(){p(e.$$.fragment)},l(r){l(e.$$.fragment,r)},m(r,s){m(e,r,s),t=!0},p:n,i(r){t||(d(e.$$.fragment,r),t=!0)},o(r){u(e.$$.fragment,r),t=!1},d(r){b(e,r)}}}class P extends i{constructor(e){super(),c(this,e,null,x,o,{})}}export{P as component};
