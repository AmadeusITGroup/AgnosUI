import{s as c,n as a}from"../chunks/scheduler.DDKLfDno.js";import{S as r,i as s,c as d,b as p,m as l,t as m,a as h,e as f}from"../chunks/index.DMnRV_Lo.js";import{A as I}from"../chunks/ApiDoc.BreDvZ6r.js";const y=[{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string"},{name:"closeOthers",description:"If `true`, only one accordion-item at the time can stay open.",fileName:"core/src/components/accordion/accordion.ts",start:{line:39,character:2,position:1767},end:{line:39,character:23,position:1788},type:"boolean"},{name:"itemAnimated",description:"If `true`, accordion-item will be animated.\n\nIt is a prop of the accordion-item.",fileName:"core/src/components/accordion/accordion.ts",start:{line:83,character:2,position:2999},end:{line:83,character:24,position:3021},type:"boolean"},{name:"itemBodyClass",description:`CSS classes to add on the accordion-item body DOM element.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:140,character:2,position:4464},end:{line:140,character:24,position:4486},type:"string"},{name:"itemBodyContainerClass",description:`CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:134,character:2,position:4314},end:{line:134,character:33,position:4345},type:"string"},{name:"itemButtonClass",description:`CSS classes to add on the accordion-item toggle button DOM element.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:127,character:2,position:4065},end:{line:127,character:26,position:4089},type:"string"},{name:"itemClass",description:`CSS classes to add on the accordion-item DOM element.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:115,character:2,position:3774},end:{line:115,character:20,position:3792},type:"string"},{name:"itemDestroyOnHide",description:"If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.\n\nIt is a prop of the accordion-item.",fileName:"core/src/components/accordion/accordion.ts",start:{line:64,character:2,position:2462},end:{line:64,character:29,position:2489},type:"boolean"},{name:"itemDisabled",description:`If \`true\`, the accordion-item will be disabled.
It will not react to user's clicks, but still will be possible to toggle programmatically.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:71,character:2,position:2692},end:{line:71,character:24,position:2714},type:"boolean"},{name:"itemHeaderClass",description:`CSS classes to add on the accordion-item header DOM element.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:121,character:2,position:3913},end:{line:121,character:26,position:3937},type:"string"},{name:"itemHeadingTag",description:`The html tag to use for the accordion-item-header.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:146,character:2,position:4597},end:{line:146,character:25,position:4620},type:"string"},{name:"itemId",description:`The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:58,character:2,position:2241},end:{line:58,character:17,position:2256},type:"string"},{name:"itemTransition",description:`The transition to use for the accordion-item body-container when the accordion-item is toggled.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:89,character:2,position:3177},end:{line:89,character:31,position:3206},type:'(element: SSRHTMLElement, direction: "show" | "hide", animated: boolean, signal: AbortSignal, context: object) => Promise<void>',defaultValue:"collapseVerticalTransition"},{name:"itemVisible",description:"If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).\n\nIt is a prop of the accordion-item.",fileName:"core/src/components/accordion/accordion.ts",start:{line:77,character:2,position:2874},end:{line:77,character:23,position:2895},type:"boolean"},{name:"onHidden",description:`An event fired when an item is hidden.

Event payload is the id of the item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:51,character:2,position:2021},end:{line:51,character:37,position:2056},type:"(itemId: string) => void"},{name:"onItemHidden",description:`An event fired when an item is hidden.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:101,character:2,position:3427},end:{line:101,character:27,position:3452},type:"() => void"},{name:"onItemShown",description:`An event fired when an item is shown.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:95,character:2,position:3304},end:{line:95,character:26,position:3328},type:"() => void"},{name:"onItemVisibleChange",description:`An event fired when the \`visible\` value changes.

Event payload is the new value of visible.

It is a prop of the accordion-item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:109,character:2,position:3612},end:{line:109,character:50,position:3660},type:"(visible: boolean) => void"},{name:"onShown",description:`An event fired when an item is shown.

Event payload is the id of the item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:45,character:2,position:1887},end:{line:45,character:36,position:1921},type:"(itemId: string) => void"},{name:"slotItemBody",description:`Content present in the accordion body.

It is a prop of the accordion-item.`,fileName:"core-bootstrap/src/components/accordion/accordion.ts",start:{line:40,character:2,position:1480},end:{line:40,character:50,position:1528},type:"SlotContent<AccordionItemContext>"},{name:"slotItemHeader",description:`Content present in the accordion button inside the accordion header.

It is a prop of the accordion-item.`,fileName:"core-bootstrap/src/components/accordion/accordion.ts",start:{line:46,character:2,position:1657},end:{line:46,character:52,position:1707},type:"SlotContent<AccordionItemContext>"},{name:"slotItemStructure",description:`Structure of the accordion-item. The default item structure is: accordion-item
contains accordion header and accordion-item body container; the accordion header contains the accordion button
(that contains \`slotItemHeader\`), while the accordion-item body container contains the accordion body (that contains \`slotItemBody\`).
The itemTransition it applied on this element.

It is a prop of the accordion-item.`,fileName:"core-bootstrap/src/components/accordion/accordion.ts",start:{line:34,character:2,position:1328},end:{line:34,character:55,position:1381},type:"SlotContent<AccordionItemContext>"}],g=[{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string"},{name:"itemsWidget",description:"Array containing all the accordion-items contained in the accordion.",fileName:"core/src/components/accordion/accordion.ts",start:{line:153,character:2,position:4777},end:{line:153,character:37,position:4812},type:"AccordionItemWidget[]"},{name:"slotItemBody",description:`Content present in the accordion body.

It is a prop of the accordion-item.`,fileName:"core-bootstrap/src/components/accordion/accordion.ts",start:{line:40,character:2,position:1480},end:{line:40,character:50,position:1528},type:"SlotContent<AccordionItemContext>"},{name:"slotItemHeader",description:`Content present in the accordion button inside the accordion header.

It is a prop of the accordion-item.`,fileName:"core-bootstrap/src/components/accordion/accordion.ts",start:{line:46,character:2,position:1657},end:{line:46,character:52,position:1707},type:"SlotContent<AccordionItemContext>"},{name:"slotItemStructure",description:`Structure of the accordion-item. The default item structure is: accordion-item
contains accordion header and accordion-item body container; the accordion header contains the accordion button
(that contains \`slotItemHeader\`), while the accordion-item body container contains the accordion body (that contains \`slotItemBody\`).
The itemTransition it applied on this element.

It is a prop of the accordion-item.`,fileName:"core-bootstrap/src/components/accordion/accordion.ts",start:{line:34,character:2,position:1328},end:{line:34,character:55,position:1381},type:"SlotContent<AccordionItemContext>"}],b=[{name:"collapse",description:`Given the itemId, will collapse the corresponding accordion-item.

If the itemId is not valid, nothing will happen.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:168,character:2,position:5152},end:{line:168,character:33,position:5183},type:"(itemId: string) => void"},{name:"collapseAll",description:"It will collapse all the accordion-items in the accordion.",fileName:"core/src/components/accordion/accordion.ts",start:{line:184,character:2,position:5585},end:{line:184,character:22,position:5605},type:"() => void"},{name:"expand",description:`Given the itemId, will expand the corresponding accordion-item.

If the itemId is not valid, nothing will happen.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:162,character:2,position:4984},end:{line:162,character:31,position:5013},type:"(itemId: string) => void"},{name:"expandAll",description:"It will expand all the items in the accordion.\n\nIf `closeOthers` is `true` it will expand only the last accordion-item.",fileName:"core/src/components/accordion/accordion.ts",start:{line:180,character:2,position:5492},end:{line:180,character:20,position:5510},type:"() => void"},{name:"registerItem",description:"Creates a new accordionItem.",fileName:"core/src/components/accordion/accordion.ts",start:{line:188,character:2,position:5650},end:{line:188,character:82,position:5730},type:"(itemConfig?: PropsConfig<AccordionItemProps>) => AccordionItemWidget"},{name:"toggle",description:`Given the itemId, will toggle the corresponding accordion-item.

If the itemId is not valid, nothing will happen.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:174,character:2,position:5320},end:{line:174,character:31,position:5349},type:"(itemId: string) => void"}],u={props:y,state:g,api:b};function w(n){let e,t;return e=new I({props:{doc:u}}),{c(){d(e.$$.fragment)},l(o){p(e.$$.fragment,o)},m(o,i){l(e,o,i),t=!0},p:a,i(o){t||(m(e.$$.fragment,o),t=!0)},o(o){h(e.$$.fragment,o),t=!1},d(o){f(e,o)}}}class S extends r{constructor(e){super(),s(this,e,null,w,c,{})}}export{S as component};
