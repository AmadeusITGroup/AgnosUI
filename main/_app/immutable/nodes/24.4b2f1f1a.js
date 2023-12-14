import{s as o,n}from"../chunks/scheduler.3bfaf327.js";import{S as i,i as c,r as p,u as l,v as m,d,t as u,w as b}from"../chunks/index.b4698ddd.js";import{A as g}from"../chunks/ApiDoc.427b8579.js";import{g as h}from"../chunks/progressbar.d263c77e.js";const f=[{name:"animated",description:"If `true`, animates a striped progressbar.\nTakes effect only for browsers supporting CSS3 animations, and if `striped` is `true`.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:51,character:2,position:1417},end:{line:51,character:20,position:1435},type:"boolean",defaultValue:"false"},{name:"ariaLabel",description:"The aria label.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:30,character:2,position:893},end:{line:30,character:20,position:911},type:"string",defaultValue:"'Progressbar'"},{name:"ariaValueTextFn",description:"Return the value for the 'aria-valuetext' attribute.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:80,character:2,position:2061},end:{line:80,character:91,position:2150},type:"(value: number, minimum: number, maximum: number) => string | undefined",defaultValue:"() => undefined"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string",defaultValue:"''"},{name:"height",description:"Height of the progressbar, can be any valid css height value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:42,character:2,position:1179},end:{line:42,character:17,position:1194},type:"string",defaultValue:"''"},{name:"max",description:"The maximum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:21,character:2,position:780},end:{line:21,character:14,position:792},type:"number",defaultValue:"100"},{name:"min",description:"The minimum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:16,character:2,position:711},end:{line:16,character:14,position:723},type:"number",defaultValue:"0"},{name:"slotContent",description:"Global template for the Progressbar content.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:34,character:2,position:972},end:{line:34,character:47,position:1017},type:"SlotContent<ProgressbarContext>",defaultValue:"undefined"},{name:"slotDefault",description:"Label of the progress.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:38,character:2,position:1056},end:{line:38,character:47,position:1101},type:"SlotContent<ProgressbarContext>",defaultValue:"undefined"},{name:"striped",description:"If `true`, shows a striped progressbar.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:46,character:2,position:1250},end:{line:46,character:19,position:1267},type:"boolean",defaultValue:"false"},{name:"value",description:"The current value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:26,character:2,position:847},end:{line:26,character:16,position:861},type:"number",defaultValue:"0"}],y=[{name:"animated",description:"If `true`, animates a striped progressbar.\nTakes effect only for browsers supporting CSS3 animations, and if `striped` is `true`.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:51,character:2,position:1417},end:{line:51,character:20,position:1435},type:"boolean"},{name:"ariaLabel",description:"The aria label.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:30,character:2,position:893},end:{line:30,character:20,position:911},type:"string"},{name:"ariaValueText",description:"The aria value text.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:70,character:2,position:1777},end:{line:70,character:36,position:1811},type:"string | undefined"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string"},{name:"finished",description:"`true` if the value has reached its maximum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:66,character:2,position:1722},end:{line:66,character:20,position:1740},type:"boolean"},{name:"height",description:"Height of the progressbar, can be any valid css height value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:42,character:2,position:1179},end:{line:42,character:17,position:1194},type:"string"},{name:"max",description:"The maximum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:21,character:2,position:780},end:{line:21,character:14,position:792},type:"number"},{name:"min",description:"The minimum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:16,character:2,position:711},end:{line:16,character:14,position:723},type:"number"},{name:"percentage",description:"Percentage of completion.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:58,character:2,position:1555},end:{line:58,character:21,position:1574},type:"number"},{name:"slotContent",description:"Global template for the Progressbar content.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:34,character:2,position:972},end:{line:34,character:47,position:1017},type:"SlotContent<ProgressbarContext>"},{name:"slotDefault",description:"Label of the progress.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:38,character:2,position:1056},end:{line:38,character:47,position:1101},type:"SlotContent<ProgressbarContext>"},{name:"started",description:"`true` if the value is above its minimum value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:62,character:2,position:1638},end:{line:62,character:19,position:1655},type:"boolean"},{name:"striped",description:"If `true`, shows a striped progressbar.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:46,character:2,position:1250},end:{line:46,character:19,position:1267},type:"boolean"},{name:"value",description:"The current value.",fileName:"core/src/components/progressbar/progressbar.ts",start:{line:26,character:2,position:847},end:{line:26,character:16,position:861},type:"number"}],N=[],v={props:f,state:y,api:N};function x(a){let e,t;return e=new g({props:{doc:v,defaultValues:h()}}),{c(){p(e.$$.fragment)},l(r){l(e.$$.fragment,r)},m(r,s){m(e,r,s),t=!0},p:n,i(r){t||(d(e.$$.fragment,r),t=!0)},o(r){u(e.$$.fragment,r),t=!1},d(r){b(e,r)}}}class P extends i{constructor(e){super(),c(this,e,null,x,o,{})}}export{P as component};