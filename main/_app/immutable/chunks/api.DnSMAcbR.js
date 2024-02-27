import{n as t}from"./stores.3HVehE_a.js";const i={min:0,max:100,stepSize:1,readonly:!1,disabled:!1,vertical:!1,className:"",ariaLabelHandle:e=>""+e,ariaValueText:e=>""+e,onValuesChange:t,values:[0],showValueLabels:!0,showMinMaxLabels:!0,rtl:!1,slotStructure:void 0,slotLabel:({value:e})=>""+e,slotHandle:void 0};function o(){return{...i}}const n=[{name:"ariaLabelHandle",description:"Return the value for the 'aria-label' attribute for the handle",fileName:"core/src/components/slider/slider.ts",start:{line:199,character:2,position:4408},end:{line:199,character:81,position:4487},type:"(value: number, sortedIndex: number, index: number) => string",defaultValue:"(value) => '' + value"},{name:"ariaValueText",description:"Return the value for the 'aria-valuetext' attribute for the handle",fileName:"core/src/components/slider/slider.ts",start:{line:207,character:2,position:4734},end:{line:207,character:79,position:4811},type:"(value: number, sortedIndex: number, index: number) => string",defaultValue:"(value) => '' + value"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string",defaultValue:"''"},{name:"disabled",description:"If `true` slider value cannot be changed and the slider cannot be focused",fileName:"core/src/components/slider/slider.ts",start:{line:96,character:2,position:2283},end:{line:96,character:20,position:2301},type:"boolean",defaultValue:"false"},{name:"max",description:"Maximum value that can be assigned to the slider",fileName:"core/src/components/slider/slider.ts",start:{line:81,character:2,position:2004},end:{line:81,character:14,position:2016},type:"number",defaultValue:"100"},{name:"min",description:"Minimum value that can be assigned to the slider",fileName:"core/src/components/slider/slider.ts",start:{line:76,character:2,position:1926},end:{line:76,character:14,position:1938},type:"number",defaultValue:"0"},{name:"onValuesChange",description:`An event emitted when slider values are changed

Event payload equals to the updated slider values`,fileName:"core/src/components/slider/slider.ts",start:{line:214,character:2,position:4934},end:{line:214,character:45,position:4977},type:"(values: number[]) => void",defaultValue:"noop"},{name:"readonly",description:"If `true` slider value cannot be changed but the slider is still focusable",fileName:"core/src/components/slider/slider.ts",start:{line:91,character:2,position:2174},end:{line:91,character:20,position:2192},type:"boolean",defaultValue:"false"},{name:"rtl",description:"It `true` slider display is inversed",fileName:"core/src/components/slider/slider.ts",start:{line:121,character:2,position:2709},end:{line:121,character:15,position:2722},type:"boolean",defaultValue:"false"},{name:"showMinMaxLabels",description:"If `true` the min and max labels are displayed on the slider",fileName:"core/src/components/slider/slider.ts",start:{line:116,character:2,position:2629},end:{line:116,character:28,position:2655},type:"boolean",defaultValue:"true"},{name:"showValueLabels",description:"If `true` the value labels are displayed on the slider",fileName:"core/src/components/slider/slider.ts",start:{line:111,character:2,position:2526},end:{line:111,character:27,position:2551},type:"boolean",defaultValue:"true"},{name:"slotHandle",description:"Slot to change the handlers",fileName:"core/src/components/slider/slider.ts",start:{line:136,character:2,position:2988},end:{line:136,character:51,position:3037},type:"SlotContent<SliderSlotHandleContext>",defaultValue:"undefined"},{name:"slotLabel",description:"Slot to change the default labels of the slider",fileName:"core/src/components/slider/slider.ts",start:{line:131,character:2,position:2895},end:{line:131,character:49,position:2942},type:"SlotContent<SliderSlotLabelContext>",defaultValue:"({value}) => '' + value"},{name:"slotStructure",description:"Slot to change the default display of the slider",fileName:"core/src/components/slider/slider.ts",start:{line:126,character:2,position:2788},end:{line:126,character:44,position:2830},type:"SlotContent<SliderContext>",defaultValue:"undefined"},{name:"stepSize",description:"Unit value between slider steps",fileName:"core/src/components/slider/slider.ts",start:{line:86,character:2,position:2065},end:{line:86,character:19,position:2082},type:"number",defaultValue:"1"},{name:"values",description:"Current slider values",fileName:"core/src/components/slider/slider.ts",start:{line:106,character:2,position:2437},end:{line:106,character:19,position:2454},type:"number[]",defaultValue:"[0]"},{name:"vertical",description:"If `true` is vertically positioned otherwise it is horizontal",fileName:"core/src/components/slider/slider.ts",start:{line:101,character:2,position:2380},end:{line:101,character:20,position:2398},type:"boolean",defaultValue:"false"}],a=[{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string"},{name:"combinedLabelDisplay",description:"If true, the label when the handles are close is visible",fileName:"core/src/components/slider/slider.ts",start:{line:168,character:2,position:3583},end:{line:168,character:32,position:3613},type:"boolean"},{name:"combinedLabelPositionLeft",description:"Combined label left offset in %",fileName:"core/src/components/slider/slider.ts",start:{line:148,character:2,position:3214},end:{line:148,character:36,position:3248},type:"number"},{name:"combinedLabelPositionTop",description:"Combined label top offset in %",fileName:"core/src/components/slider/slider.ts",start:{line:153,character:2,position:3296},end:{line:153,character:35,position:3329},type:"number"},{name:"disabled",description:"If `true` slider value cannot be changed and the slider cannot be focused",fileName:"core/src/components/slider/slider.ts",start:{line:96,character:2,position:2283},end:{line:96,character:20,position:2301},type:"boolean"},{name:"handleDisplayOptions",description:"Array of objects representing handle display options",fileName:"core/src/components/slider/slider.ts",start:{line:183,character:2,position:3890},end:{line:183,character:47,position:3935},type:"HandleDisplayOptions[]"},{name:"isInteractable",description:"Check if the slider is interactable, meaning it is not disabled or readonly\nTODO: rename to `interactive`, issue #510",fileName:"core/src/components/slider/slider.ts",start:{line:189,character:2,position:4074},end:{line:189,character:26,position:4098},type:"boolean"},{name:"max",description:"Maximum value that can be assigned to the slider",fileName:"core/src/components/slider/slider.ts",start:{line:81,character:2,position:2004},end:{line:81,character:14,position:2016},type:"number"},{name:"maxValueLabelDisplay",description:"If true, the maximum label will be visible",fileName:"core/src/components/slider/slider.ts",start:{line:163,character:2,position:3479},end:{line:163,character:32,position:3509},type:"boolean"},{name:"min",description:"Minimum value that can be assigned to the slider",fileName:"core/src/components/slider/slider.ts",start:{line:76,character:2,position:1926},end:{line:76,character:14,position:1938},type:"number"},{name:"minValueLabelDisplay",description:"If true, the minimum label will be visible",fileName:"core/src/components/slider/slider.ts",start:{line:158,character:2,position:3389},end:{line:158,character:32,position:3419},type:"boolean"},{name:"progressDisplayOptions",description:"Array of objects representing progress display options",fileName:"core/src/components/slider/slider.ts",start:{line:178,character:2,position:3771},end:{line:178,character:51,position:3820},type:"ProgressDisplayOptions[]"},{name:"readonly",description:"If `true` slider value cannot be changed but the slider is still focusable",fileName:"core/src/components/slider/slider.ts",start:{line:91,character:2,position:2174},end:{line:91,character:20,position:2192},type:"boolean"},{name:"rtl",description:"It `true` slider display is inversed",fileName:"core/src/components/slider/slider.ts",start:{line:121,character:2,position:2709},end:{line:121,character:15,position:2722},type:"boolean"},{name:"showMinMaxLabels",description:"If `true` the min and max labels are displayed on the slider",fileName:"core/src/components/slider/slider.ts",start:{line:116,character:2,position:2629},end:{line:116,character:28,position:2655},type:"boolean"},{name:"showValueLabels",description:"If `true` the value labels are displayed on the slider",fileName:"core/src/components/slider/slider.ts",start:{line:111,character:2,position:2526},end:{line:111,character:27,position:2551},type:"boolean"},{name:"slotHandle",description:"Slot to change the handlers",fileName:"core/src/components/slider/slider.ts",start:{line:136,character:2,position:2988},end:{line:136,character:51,position:3037},type:"SlotContent<SliderSlotHandleContext>"},{name:"slotLabel",description:"Slot to change the default labels of the slider",fileName:"core/src/components/slider/slider.ts",start:{line:131,character:2,position:2895},end:{line:131,character:49,position:2942},type:"SlotContent<SliderSlotLabelContext>"},{name:"slotStructure",description:"Slot to change the default display of the slider",fileName:"core/src/components/slider/slider.ts",start:{line:126,character:2,position:2788},end:{line:126,character:44,position:2830},type:"SlotContent<SliderContext>"},{name:"sortedHandles",description:"Array of the sorted handles to display",fileName:"core/src/components/slider/slider.ts",start:{line:173,character:2,position:3669},end:{line:173,character:32,position:3699},type:"SliderHandle[]"},{name:"sortedValues",description:"Sorted slider values",fileName:"core/src/components/slider/slider.ts",start:{line:143,character:2,position:3142},end:{line:143,character:25,position:3165},type:"number[]"},{name:"stepSize",description:"Unit value between slider steps",fileName:"core/src/components/slider/slider.ts",start:{line:86,character:2,position:2065},end:{line:86,character:19,position:2082},type:"number"},{name:"values",description:"Current slider values",fileName:"core/src/components/slider/slider.ts",start:{line:106,character:2,position:2437},end:{line:106,character:19,position:2454},type:"number[]"},{name:"vertical",description:"If `true` is vertically positioned otherwise it is horizontal",fileName:"core/src/components/slider/slider.ts",start:{line:101,character:2,position:2380},end:{line:101,character:20,position:2398},type:"boolean"}],r=[],l={props:n,state:a,api:r};export{l as d,o as g};
