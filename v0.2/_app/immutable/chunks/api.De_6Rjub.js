import"./stores.rdivE-jg.js";import{g as e}from"./common.OVAgAPMf.js";const t={autohide:!0,delay:5e3,slotHeader:void 0};function s(){return{...e(),...t}}const o=[{name:"animation",description:"If `true`, alert closing will be animated.\n\nAnimation is triggered  when clicked on the close button (×),\nvia the `.close()` function or the visible prop is changed",fileName:"core/src/components/alert/common.ts",start:{line:84,character:2,position:2544},end:{line:84,character:21,position:2563},type:"boolean"},{name:"animationOnInit",description:"If `true`, alert opening will be animated.\n\nAnimation is triggered  when the `.open()` function is called\nor the visible prop is changed",fileName:"core/src/components/alert/common.ts",start:{line:77,character:2,position:2327},end:{line:77,character:27,position:2352},type:"boolean"},{name:"ariaCloseButtonLabel",description:"Accessibility close button label",fileName:"core/src/components/alert/common.ts",start:{line:38,character:2,position:1301},end:{line:38,character:31,position:1330},type:"string"},{name:"autohide",description:"If `true` automatically hides the toast after the delay.",fileName:"core/src/components/toast/toast.ts",start:{line:16,character:2,position:848},end:{line:16,character:20,position:866},type:"boolean"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string"},{name:"delay",description:"Delay in milliseconds before hiding the toast.",fileName:"core/src/components/toast/toast.ts",start:{line:21,character:2,position:930},end:{line:21,character:16,position:944},type:"number"},{name:"dismissible",description:"If `true`, alert can be dismissed by the user.\nThe close button (×) will be displayed and you can be notified of the event with the (close) output.",fileName:"core/src/components/alert/common.ts",start:{line:18,character:2,position:956},end:{line:18,character:23,position:977},type:"boolean"},{name:"onHidden",description:"Callback called when the alert is hidden.",fileName:"core/src/components/alert/common.ts",start:{line:57,character:2,position:1797},end:{line:57,character:23,position:1818},type:"() => void"},{name:"onShown",description:"Callback called when the alert is shown.",fileName:"core/src/components/alert/common.ts",start:{line:62,character:2,position:1876},end:{line:62,character:22,position:1896},type:"() => void"},{name:"onVisibleChange",description:"Callback called when the alert visibility changed.",fileName:"core/src/components/alert/common.ts",start:{line:52,character:2,position:1694},end:{line:52,character:46,position:1738},type:"(visible: boolean) => void"},{name:"slotDefault",description:"Template for the alert content",fileName:"core/src/components/alert/common.ts",start:{line:23,character:2,position:1025},end:{line:23,character:47,position:1070},type:"SlotContent<CommonAlertContext>"},{name:"slotHeader",description:"Header template for the toast component",fileName:"core/src/components/toast/toast.ts",start:{line:26,character:2,position:1001},end:{line:26,character:40,position:1039},type:"SlotContent<ToastContext>"},{name:"slotStructure",description:"Global template for the alert component",fileName:"core/src/components/alert/common.ts",start:{line:28,character:2,position:1127},end:{line:28,character:49,position:1174},type:"SlotContent<CommonAlertContext>"},{name:"transition",description:`The transition function will be executed when the alert is displayed or hidden.

Depending on the value of CommonAlertProps.animationOnInit, the animation can be optionally skipped during the showing process.`,fileName:"core/src/components/alert/common.ts",start:{line:69,character:2,position:2137},end:{line:69,character:27,position:2162},type:"TransitionFn"},{name:"visible",description:"If `true` the alert is visible to the user",fileName:"core/src/components/alert/common.ts",start:{line:33,character:2,position:1234},end:{line:33,character:19,position:1251},type:"boolean"}],n=[{name:"ariaCloseButtonLabel",description:"Accessibility close button label",fileName:"core/src/components/alert/common.ts",start:{line:38,character:2,position:1301},end:{line:38,character:31,position:1330},type:"string"},{name:"autohide",description:"If `true` automatically hides the toast after the delay.",fileName:"core/src/components/toast/toast.ts",start:{line:16,character:2,position:848},end:{line:16,character:20,position:866},type:"boolean"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string"},{name:"delay",description:"Delay in milliseconds before hiding the toast.",fileName:"core/src/components/toast/toast.ts",start:{line:21,character:2,position:930},end:{line:21,character:16,position:944},type:"number"},{name:"dismissible",description:"If `true`, alert can be dismissed by the user.\nThe close button (×) will be displayed and you can be notified of the event with the (close) output.",fileName:"core/src/components/alert/common.ts",start:{line:18,character:2,position:956},end:{line:18,character:23,position:977},type:"boolean"},{name:"hidden",description:"Is `true` when the alert is hidden. Compared to `visible`, this is updated after the transition is executed.",fileName:"core/src/components/alert/common.ts",start:{line:45,character:2,position:1533},end:{line:45,character:18,position:1549},type:"boolean"},{name:"slotDefault",description:"Template for the alert content",fileName:"core/src/components/alert/common.ts",start:{line:23,character:2,position:1025},end:{line:23,character:47,position:1070},type:"SlotContent<CommonAlertContext>"},{name:"slotHeader",description:"Header template for the toast component",fileName:"core/src/components/toast/toast.ts",start:{line:26,character:2,position:1001},end:{line:26,character:40,position:1039},type:"SlotContent<ToastContext>"},{name:"slotStructure",description:"Global template for the alert component",fileName:"core/src/components/alert/common.ts",start:{line:28,character:2,position:1127},end:{line:28,character:49,position:1174},type:"SlotContent<CommonAlertContext>"},{name:"visible",description:"If `true` the alert is visible to the user",fileName:"core/src/components/alert/common.ts",start:{line:33,character:2,position:1234},end:{line:33,character:19,position:1251},type:"boolean"}],i=[{name:"close",description:"Triggers alert closing programmatically (same as clicking on the close button (×)).",fileName:"core/src/components/alert/common.ts",start:{line:91,character:2,position:2700},end:{line:91,character:16,position:2714},type:"() => void"},{name:"open",description:"Triggers the alert to be displayed for the user.",fileName:"core/src/components/alert/common.ts",start:{line:96,character:2,position:2780},end:{line:96,character:15,position:2793},type:"() => void"}],c={props:o,state:n,api:i};export{c as d,s as g};
