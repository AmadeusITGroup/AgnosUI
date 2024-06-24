const e=[{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string",defaultValue:"''"},{name:"closeOthers",description:"If `true`, only one accordion-item at the time can stay open.",fileName:"core/src/components/accordion/accordion.ts",start:{line:39,character:2,position:1743},end:{line:39,character:23,position:1764},type:"boolean",defaultValue:"false"},{name:"itemAnimated",description:"If `true`, accordion-item will be animated.",fileName:"core/src/components/accordion/accordion.ts",start:{line:59,character:2,position:2289},end:{line:59,character:24,position:2311},type:"boolean",defaultValue:"true"},{name:"itemBodyClassName",description:"CSS classes to add on the accordion-item body DOM element.",fileName:"core/src/components/accordion/accordion.ts",start:{line:84,character:2,position:3052},end:{line:84,character:28,position:3078},type:"string",defaultValue:"''"},{name:"itemBodyContainerClassName",description:`CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:80,character:2,position:2942},end:{line:80,character:37,position:2977},type:"string",defaultValue:"''"},{name:"itemButtonClassName",description:"CSS classes to add on the accordion-item toggle button DOM element.",fileName:"core/src/components/accordion/accordion.ts",start:{line:75,character:2,position:2733},end:{line:75,character:30,position:2761},type:"string",defaultValue:"''"},{name:"itemClassName",description:"CSS classes to add on the accordion-item DOM element.",fileName:"core/src/components/accordion/accordion.ts",start:{line:67,character:2,position:2522},end:{line:67,character:24,position:2544},type:"string",defaultValue:"''"},{name:"itemDestroyOnHide",description:"If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.",fileName:"core/src/components/accordion/accordion.ts",start:{line:55,character:2,position:2202},end:{line:55,character:29,position:2229},type:"boolean",defaultValue:"true"},{name:"itemHeaderClassName",description:"CSS classes to add on the accordion-item header DOM element.",fileName:"core/src/components/accordion/accordion.ts",start:{line:71,character:2,position:2621},end:{line:71,character:30,position:2649},type:"string",defaultValue:"''"},{name:"itemHeadingTag",description:"The html tag to use for the accordion-item-header.",fileName:"core/src/components/accordion/accordion.ts",start:{line:88,character:2,position:3145},end:{line:88,character:25,position:3168},type:"string",defaultValue:"''"},{name:"itemTransition",description:"The transition to use for the accordion-item body-container when the accordion-item is toggled.",fileName:"core/src/components/accordion/accordion.ts",start:{line:63,character:2,position:2423},end:{line:63,character:31,position:2452},type:'(element: SSRHTMLElement, direction: "show" | "hide", animated: boolean, signal: AbortSignal, context: object) => Promise<void>',defaultValue:"async () => {}"},{name:"onItemHidden",description:`An event fired when an item is hidden.

Event payload is the id of the item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:51,character:2,position:2001},end:{line:51,character:41,position:2040},type:"(itemId: string) => void",defaultValue:"() => {}"},{name:"onItemShown",description:`An event fired when an item is shown.

Event payload is the id of the item.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:45,character:2,position:1863},end:{line:45,character:40,position:1901},type:"(itemId: string) => void",defaultValue:"() => {}"}],t=[{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string"},{name:"itemWidgets",description:"Array containing all the accordion-items contained in the accordion.",fileName:"core/src/components/accordion/accordion.ts",start:{line:95,character:2,position:3325},end:{line:95,character:37,position:3360},type:"AccordionItemWidget[]"}],o=[{name:"collapse",description:`Given the itemId, will collapse the corresponding accordion-item.

If the itemId is not valid, nothing will happen.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:110,character:2,position:3700},end:{line:110,character:33,position:3731},type:"(itemId: string) => void"},{name:"collapseAll",description:"It will collapse all the accordion-items in the accordion.",fileName:"core/src/components/accordion/accordion.ts",start:{line:126,character:2,position:4133},end:{line:126,character:22,position:4153},type:"() => void"},{name:"expand",description:`Given the itemId, will expand the corresponding accordion-item.

If the itemId is not valid, nothing will happen.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:104,character:2,position:3532},end:{line:104,character:31,position:3561},type:"(itemId: string) => void"},{name:"expandAll",description:"It will expand all the items in the accordion.\n\nIf `closeOthers` is `true` it will expand only the last accordion-item.",fileName:"core/src/components/accordion/accordion.ts",start:{line:122,character:2,position:4040},end:{line:122,character:20,position:4058},type:"() => void"},{name:"registerItem",description:"Creates a new accordionItem.",fileName:"core/src/components/accordion/accordion.ts",start:{line:130,character:2,position:4198},end:{line:130,character:82,position:4278},type:"(itemConfig?: PropsConfig<AccordionItemProps>) => AccordionItemWidget"},{name:"toggle",description:`Given the itemId, will toggle the corresponding accordion-item.

If the itemId is not valid, nothing will happen.`,fileName:"core/src/components/accordion/accordion.ts",start:{line:116,character:2,position:3868},end:{line:116,character:31,position:3897},type:"(itemId: string) => void"}],i={props:e,state:t,api:o};export{i as w};