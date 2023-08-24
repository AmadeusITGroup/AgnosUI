import"./index.es.5c333286.js";import{n}from"./modal.becd5ecb.js";const o={page:1,collectionSize:0,pageSize:10,disabled:!1,directionLinks:!0,boundaryLinks:!1,size:null,onPageChange:n,pagesFactory:(e,t)=>{const a=[];for(let i=1;i<=t;i++)a.push(i);return a},ariaLabel:"Page navigation",activeLabel:"(current)",ariaPageLabel:(e,t)=>`Page ${e} of ${t}`,ariaFirstLabel:"Action link for first page",ariaPreviousLabel:"Action link for previous page",ariaNextLabel:"Action link for next page",ariaLastLabel:"Action link for last page",className:"",slotEllipsis:"…",slotFirst:"«",slotPrevious:"‹",slotNext:"›",slotLast:"»",slotPages:void 0,slotNumberLabel:({displayedPage:e})=>`${e}`};function g(){return{...o}}const r=[{name:"activeLabel",description:`The label for the "active" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/lib/pagination.ts",start:{line:56,character:2,position:1570},end:{line:56,character:22,position:1590},type:"string",defaultValue:"'(current)'"},{name:"ariaFirstLabel",description:`The label for the "First" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/lib/pagination.ts",start:{line:64,character:2,position:1810},end:{line:64,character:25,position:1833},type:"string",defaultValue:"'Action link for first page'"},{name:"ariaLabel",description:`The label for the nav element.

for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/lib/pagination.ts",start:{line:48,character:2,position:1355},end:{line:48,character:20,position:1373},type:"string",defaultValue:"'Page navigation'"},{name:"ariaLastLabel",description:`The label for the "Last" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/lib/pagination.ts",start:{line:88,character:2,position:2543},end:{line:88,character:24,position:2565},type:"string",defaultValue:"'Action link for last page'"},{name:"ariaNextLabel",description:`The label for the "Next" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/lib/pagination.ts",start:{line:80,character:2,position:2303},end:{line:80,character:24,position:2325},type:"string",defaultValue:"'Action link for next page'"},{name:"ariaPageLabel",description:`Provide the label for each "Page" page button.
This is used for accessibility purposes.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/lib/pagination.ts",start:{line:239,character:2,position:6597},end:{line:239,character:68,position:6663},type:"(processPage: number, pageCount: number) => string",defaultValue:"(processPage: number, pageCount: number) => `Page ${processPage} of ${pageCount}`"},{name:"ariaPreviousLabel",description:`The label for the "Previous" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/lib/pagination.ts",start:{line:72,character:2,position:2059},end:{line:72,character:28,position:2085},type:"string",defaultValue:"'Action link for previous page'"},{name:"boundaryLinks",description:'If `true`, the "First" and "Last" page links are shown.',fileName:"core/lib/pagination.ts",start:{line:106,character:2,position:2890},end:{line:106,character:25,position:2913},type:"boolean",defaultValue:"false"},{name:"className",description:"An input to add a custom class to the UL",fileName:"core/lib/pagination.ts",start:{line:112,character:2,position:2992},end:{line:112,character:20,position:3010},type:"string",defaultValue:"''"},{name:"collectionSize",description:`The number of items in your paginated collection.

Note, that this is not the number of pages. Page numbers are calculated dynamically based on
\`collectionSize\` and \`pageSize\`.

Ex. if you have 100 items in your collection and displaying 20 items per page, you'll end up with 5 pages.

Whatever the collectionSize the page number is of minimum 1.`,fileName:"core/lib/pagination.ts",start:{line:186,character:2,position:5243},end:{line:186,character:25,position:5266},type:"number",defaultValue:"0"},{name:"directionLinks",description:'If `true`, the "Next" and "Previous" page links are shown.',fileName:"core/lib/pagination.ts",start:{line:100,character:2,position:2769},end:{line:100,character:26,position:2793},type:"boolean",defaultValue:"true"},{name:"disabled",description:"If `true`, pagination links will be disabled.",fileName:"core/lib/pagination.ts",start:{line:94,character:2,position:2652},end:{line:94,character:20,position:2670},type:"boolean",defaultValue:"false"},{name:"onPageChange",description:`An event fired when the page is changed.

Event payload is the number of the newly selected page.

Page numbers start with \`1\`.`,fileName:"core/lib/pagination.ts",start:{line:206,character:2,position:5587},end:{line:206,character:39,position:5624},type:"(page: number) => void",defaultValue:"noop"},{name:"page",description:"The current page.\n\nPage numbers start with `1`.",fileName:"core/lib/pagination.ts",start:{line:31,character:2,position:938},end:{line:31,character:15,position:951},type:"number",defaultValue:"1"},{name:"pageSize",description:"The number of items per page.",fileName:"core/lib/pagination.ts",start:{line:193,character:2,position:5362},end:{line:193,character:19,position:5379},type:"number",defaultValue:"10"},{name:"pagesFactory",description:`pagesFactory returns a function computing the array of pages to be displayed
as number (-1 are treated as ellipsis).
Use Page slot to customize the pages view and not this`,fileName:"core/lib/pagination.ts",start:{line:225,character:2,position:6105},end:{line:225,character:62,position:6165},type:"(page: number, pageCount: number) => number[]",defaultValue:`(page: number, pageCount: number) => {
		// TODO extract this for testing
		const pages: number[] = [];
		for (let i = 1; i <= pageCount; i++) {
			pages.push(i);
		}
		return pages;
	}`},{name:"size",description:`The pagination display size.

Bootstrap currently supports small and large sizes.`,fileName:"core/lib/pagination.ts",start:{line:39,character:2,position:1125},end:{line:39,character:27,position:1150},type:"'sm' | 'lg' | null",defaultValue:"null"},{name:"slotEllipsis",description:`The template to use for the ellipsis slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/lib/pagination.ts",start:{line:120,character:2,position:3208},end:{line:120,character:47,position:3253},type:"SlotContent<PaginationContext>",defaultValue:"'…'"},{name:"slotFirst",description:`The template to use for the first slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/lib/pagination.ts",start:{line:128,character:2,position:3448},end:{line:128,character:44,position:3490},type:"SlotContent<PaginationContext>",defaultValue:"'«'"},{name:"slotLast",description:`The template to use for the last slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/lib/pagination.ts",start:{line:152,character:2,position:4162},end:{line:152,character:43,position:4203},type:"SlotContent<PaginationContext>",defaultValue:"'»'"},{name:"slotNext",description:`The template to use for the next slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/lib/pagination.ts",start:{line:144,character:2,position:3927},end:{line:144,character:43,position:3968},type:"SlotContent<PaginationContext>",defaultValue:"'›'"},{name:"slotNumberLabel",description:`The template to use for the number slot
override any configuration parameters provided for this
for I18n, we suggest to use the global configuration`,fileName:"core/lib/pagination.ts",start:{line:171,character:2,position:4705},end:{line:171,character:56,position:4759},type:"SlotContent<PaginationNumberContext>",defaultValue:"({displayedPage}) => `${displayedPage}`"},{name:"slotPages",description:`The template to use for the pages slot
To use to customize the pages view
override any configuration parameters provided for this`,fileName:"core/lib/pagination.ts",start:{line:159,character:2,position:4358},end:{line:159,character:44,position:4400},type:"SlotContent<PaginationContext>",defaultValue:"undefined"},{name:"slotPrevious",description:`The template to use for the previous slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/lib/pagination.ts",start:{line:136,character:2,position:3688},end:{line:136,character:47,position:3733},type:"SlotContent<PaginationContext>",defaultValue:"'‹'"}],s=[{name:"activeLabel",description:`The label for the "active" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/lib/pagination.ts",start:{line:56,character:2,position:1570},end:{line:56,character:22,position:1590},type:"string"},{name:"ariaFirstLabel",description:`The label for the "First" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/lib/pagination.ts",start:{line:64,character:2,position:1810},end:{line:64,character:25,position:1833},type:"string"},{name:"ariaLabel",description:`The label for the nav element.

for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/lib/pagination.ts",start:{line:48,character:2,position:1355},end:{line:48,character:20,position:1373},type:"string"},{name:"ariaLastLabel",description:`The label for the "Last" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/lib/pagination.ts",start:{line:88,character:2,position:2543},end:{line:88,character:24,position:2565},type:"string"},{name:"ariaNextLabel",description:`The label for the "Next" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/lib/pagination.ts",start:{line:80,character:2,position:2303},end:{line:80,character:24,position:2325},type:"string"},{name:"ariaPreviousLabel",description:`The label for the "Previous" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/lib/pagination.ts",start:{line:72,character:2,position:2059},end:{line:72,character:28,position:2085},type:"string"},{name:"boundaryLinks",description:'If `true`, the "First" and "Last" page links are shown.',fileName:"core/lib/pagination.ts",start:{line:106,character:2,position:2890},end:{line:106,character:25,position:2913},type:"boolean"},{name:"className",description:"An input to add a custom class to the UL",fileName:"core/lib/pagination.ts",start:{line:112,character:2,position:2992},end:{line:112,character:20,position:3010},type:"string"},{name:"directionLinks",description:'If `true`, the "Next" and "Previous" page links are shown.',fileName:"core/lib/pagination.ts",start:{line:100,character:2,position:2769},end:{line:100,character:26,position:2793},type:"boolean"},{name:"disabled",description:"If `true`, pagination links will be disabled.",fileName:"core/lib/pagination.ts",start:{line:94,character:2,position:2652},end:{line:94,character:20,position:2670},type:"boolean"},{name:"nextDisabled",description:"true if the next link need to be disabled",fileName:"core/lib/pagination.ts",start:{line:258,character:2,position:7042},end:{line:258,character:24,position:7064},type:"boolean"},{name:"page",description:"The current page.\n\nPage numbers start with `1`.",fileName:"core/lib/pagination.ts",start:{line:31,character:2,position:938},end:{line:31,character:15,position:951},type:"number"},{name:"pageCount",description:"The number of pages.",fileName:"core/lib/pagination.ts",start:{line:246,character:2,position:6776},end:{line:246,character:20,position:6794},type:"number"},{name:"pages",description:"The current pages, the number in the Array is the number of the page.",fileName:"core/lib/pagination.ts",start:{line:250,character:2,position:6880},end:{line:250,character:18,position:6896},type:"number[]"},{name:"pagesLabel",description:'The label for each "Page" page link.',fileName:"core/lib/pagination.ts",start:{line:262,character:2,position:7117},end:{line:262,character:23,position:7138},type:"string[]"},{name:"previousDisabled",description:"true if the previous link need to be disabled",fileName:"core/lib/pagination.ts",start:{line:254,character:2,position:6958},end:{line:254,character:28,position:6984},type:"boolean"},{name:"size",description:`The pagination display size.

Bootstrap currently supports small and large sizes.`,fileName:"core/lib/pagination.ts",start:{line:39,character:2,position:1125},end:{line:39,character:27,position:1150},type:"'sm' | 'lg' | null"},{name:"slotEllipsis",description:`The template to use for the ellipsis slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/lib/pagination.ts",start:{line:120,character:2,position:3208},end:{line:120,character:47,position:3253},type:"SlotContent<PaginationContext>"},{name:"slotFirst",description:`The template to use for the first slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/lib/pagination.ts",start:{line:128,character:2,position:3448},end:{line:128,character:44,position:3490},type:"SlotContent<PaginationContext>"},{name:"slotLast",description:`The template to use for the last slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/lib/pagination.ts",start:{line:152,character:2,position:4162},end:{line:152,character:43,position:4203},type:"SlotContent<PaginationContext>"},{name:"slotNext",description:`The template to use for the next slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/lib/pagination.ts",start:{line:144,character:2,position:3927},end:{line:144,character:43,position:3968},type:"SlotContent<PaginationContext>"},{name:"slotNumberLabel",description:`The template to use for the number slot
override any configuration parameters provided for this
for I18n, we suggest to use the global configuration`,fileName:"core/lib/pagination.ts",start:{line:171,character:2,position:4705},end:{line:171,character:56,position:4759},type:"SlotContent<PaginationNumberContext>"},{name:"slotPages",description:`The template to use for the pages slot
To use to customize the pages view
override any configuration parameters provided for this`,fileName:"core/lib/pagination.ts",start:{line:159,character:2,position:4358},end:{line:159,character:44,position:4400},type:"SlotContent<PaginationContext>"},{name:"slotPrevious",description:`The template to use for the previous slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/lib/pagination.ts",start:{line:136,character:2,position:3688},end:{line:136,character:47,position:3733},type:"SlotContent<PaginationContext>"}],l=[{name:"isEllipsis",description:"If the page number is -1 return true",fileName:"core/lib/pagination.ts",start:{line:295,character:2,position:7768},end:{line:295,character:36,position:7802},type:"(page: number) => boolean"}],u={props:r,state:s,api:l};export{u as d,g};
