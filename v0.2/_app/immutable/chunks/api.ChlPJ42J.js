import{c as o}from"./collapse.3FVtdRvH.js";import{n as e}from"./stores.rdivE-jg.js";const t={closeOthers:!1,onShown:e,onHidden:e,className:"",itemId:"",itemDestroyOnHide:!0,itemDisabled:!1,itemVisible:!1,itemAnimation:!0,itemTransition:o,itemHeadingTag:"",onItemShown:e,onItemHidden:e,onItemVisibleChange:e,slotItemStructure:void 0,slotItemBody:void 0,slotItemHeader:void 0,itemClass:"",itemHeaderClass:"",itemButtonClass:"",itemBodyContainerClass:"",itemBodyClass:""};function s(){return{...t}}const i=[{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string",defaultValue:"''"},{name:"closeOthers",description:"If `true`, only one accordion-item at the time can stay open.",fileName:"core/src/components/accordion/accordion.ts",start:{line:42,character:2,position:1923},end:{line:42,character:23,position:1944},type:"boolean",defaultValue:"false"},{name:"itemAnimation",description:"If `true`, accordion-item will be animated.\n\nIt is a prop of the accordion-item.",fileName:"core/src/components/accordion/accordion.ts",start:{line:86,character:2,position:3155},end:{line:86,character:25,position:3178},type:"boolean",defaultValue:"true"},{name:"itemBodyClass",description:`CSS classes to add on the accordion-item body DOM element.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:164,character:2,position:5444},end:{line:164,character:24,position:5466},type:"string",defaultValue:"''"},{name:"itemBodyContainerClass",description:`CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:158,character:2,position:5294},end:{line:158,character:33,position:5325},type:"string",defaultValue:"''"},{name:"itemButtonClass",description:`CSS classes to add on the accordion-item toggle button DOM element.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:151,character:2,position:5045},end:{line:151,character:26,position:5069},type:"string",defaultValue:"''"},{name:"itemClass",description:`CSS classes to add on the accordion-item DOM element.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:139,character:2,position:4754},end:{line:139,character:20,position:4772},type:"string",defaultValue:"''"},{name:"itemDestroyOnHide",description:"If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.\n\nIt is a prop of the accordion-item.",fileName:"core/src/components/accordion/accordion.ts",start:{line:67,character:2,position:2618},end:{line:67,character:29,position:2645},type:"boolean",defaultValue:"true"},{name:"itemDisabled",description:`If \`true\`, the accordion-item will be disabled.
It will not react to user's clicks, but still will be possible to toggle programmatically.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:74,character:2,position:2848},end:{line:74,character:24,position:2870},type:"boolean",defaultValue:"false"},{name:"itemHeaderClass",description:`CSS classes to add on the accordion-item header DOM element.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:145,character:2,position:4893},end:{line:145,character:26,position:4917},type:"string",defaultValue:"''"},{name:"itemHeadingTag",description:`The html tag to use for the accordion-item-header.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:170,character:2,position:5577},end:{line:170,character:25,position:5600},type:"string",defaultValue:"''"},{name:"itemId",description:`The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:61,character:2,position:2397},end:{line:61,character:17,position:2412},type:"string",defaultValue:"''"},{name:"itemTransition",description:`The transition to use for the accordion-item body-container when the accordion-item is toggled.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:92,character:2,position:3334},end:{line:92,character:31,position:3363},type:"TransitionFn",defaultValue:"collapseVerticalTransition"},{name:"itemVisible",description:"If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).\n\nIt is a prop of the accordion-item.",fileName:"core/src/components/accordion/accordion.ts",start:{line:80,character:2,position:3030},end:{line:80,character:23,position:3051},type:"boolean",defaultValue:"false"},{name:"onHidden",description:`An event fired when an item is hidden.

Event payload is the id of the item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:54,character:2,position:2177},end:{line:54,character:37,position:2212},type:"(itemId: string) => void",defaultValue:"noop"},{name:"onItemHidden",description:`An event fired when an item is hidden.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:104,character:2,position:3584},end:{line:104,character:27,position:3609},type:"() => void",defaultValue:"noop"},{name:"onItemShown",description:`An event fired when an item is shown.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:98,character:2,position:3461},end:{line:98,character:26,position:3485},type:"() => void",defaultValue:"noop"},{name:"onItemVisibleChange",description:`An event fired when the \`visible\` value changes.

Event payload is the new value of visible.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:112,character:2,position:3769},end:{line:112,character:50,position:3817},type:"(visible: boolean) => void",defaultValue:"noop"},{name:"onShown",description:`An event fired when an item is shown.

Event payload is the id of the item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:48,character:2,position:2043},end:{line:48,character:36,position:2077},type:"(itemId: string) => void",defaultValue:"noop"},{name:"slotItemBody",description:`Content present in the accordion body.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:127,character:2,position:4413},end:{line:127,character:50,position:4461},type:"SlotContent<AccordionItemContext>",defaultValue:"undefined"},{name:"slotItemHeader",description:`Content present in the accordion button inside the accordion header.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:133,character:2,position:4590},end:{line:133,character:52,position:4640},type:"SlotContent<AccordionItemContext>",defaultValue:"undefined"},{name:"slotItemStructure",description:`Structure of the accordion-item. The default item structure is: accordion-item
contains accordion header and accordion-item body container; the accordion header contains the accordion button
(that contains \`slotItemHeader\`), while the accordion-item body container contains the accordion body (that contains \`slotItemBody\`).
The itemTransition it applied on this element.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:121,character:2,position:4261},end:{line:121,character:55,position:4314},type:"SlotContent<AccordionItemContext>",defaultValue:"undefined"}],n=[{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string"},{name:"itemsWidget",description:"Array containing all the accordion-items contained in the accordion.",fileName:"core/src/components/accordion/accordion.ts",start:{line:177,character:2,position:5757},end:{line:177,character:37,position:5792},type:"AccordionItemWidget[]"}],a=[{name:"collapse",description:`Given the itemId, will collapse the corresponding accordion-item.

If the itemId is not valid, nothing will happen.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:198,character:2,position:6324},end:{line:198,character:33,position:6355},type:"(itemId: string) => void"},{name:"collapseAll",description:"It will collapse all the accordion-items in the accordion.",fileName:"core/src/components/accordion/accordion.ts",start:{line:214,character:2,position:6757},end:{line:214,character:22,position:6777},type:"() => void"},{name:"expand",description:`Given the itemId, will expand the corresponding accordion-item.

If the itemId is not valid, nothing will happen.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:192,character:2,position:6156},end:{line:192,character:31,position:6185},type:"(itemId: string) => void"},{name:"expandAll",description:"It will expand all the items in the accordion.\n\nIf `closeOthers` is `true` it will expand only the last accordion-item.",fileName:"core/src/components/accordion/accordion.ts",start:{line:210,character:2,position:6664},end:{line:210,character:20,position:6682},type:"() => void"},{name:"isExpanded",description:"Given the itemId, it will return if such item is visible (expanded) or not.\n\nIf the itemId is not a valid id it will return `false`.",fileName:"core/src/components/accordion/accordion.ts",start:{line:186,character:2,position:5983},end:{line:186,character:38,position:6019},type:"(itemId: string) => boolean"},{name:"registerItem",description:"Creates a new accordionItem.",fileName:"core/src/components/accordion/accordion.ts",start:{line:218,character:2,position:6822},end:{line:218,character:82,position:6902},type:"(itemConfig?: PropsConfig<AccordionItemProps>) => AccordionItemWidget"},{name:"toggle",description:`Given the itemId, will toggle the corresponding accordion-item.

If the itemId is not valid, nothing will happen.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:204,character:2,position:6492},end:{line:204,character:31,position:6521},type:"(itemId: string) => void"}],d={props:i,state:n,api:a};export{d,s as g};
