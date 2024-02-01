const e=[{name:"activeLabel",description:`The label for the "active" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:57,character:2,position:1706},end:{line:57,character:22,position:1726},type:"string",defaultValue:"'(current)'"},{name:"ariaFirstLabel",description:`The label for the "First" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:65,character:2,position:1946},end:{line:65,character:25,position:1969},type:"string",defaultValue:"'Action link for first page'"},{name:"ariaLabel",description:`The label for the nav element.

for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:49,character:2,position:1491},end:{line:49,character:20,position:1509},type:"string",defaultValue:"'Page navigation'"},{name:"ariaLastLabel",description:`The label for the "Last" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:89,character:2,position:2679},end:{line:89,character:24,position:2701},type:"string",defaultValue:"'Action link for last page'"},{name:"ariaNextLabel",description:`The label for the "Next" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:81,character:2,position:2439},end:{line:81,character:24,position:2461},type:"string",defaultValue:"'Action link for next page'"},{name:"ariaPageLabel",description:`Provide the label for each "Page" page button.
This is used for accessibility purposes.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:234,character:2,position:6636},end:{line:234,character:68,position:6702},type:"(processPage: number, pageCount: number) => string",defaultValue:"(processPage: number, pageCount: number) => `Page ${processPage} of ${pageCount}`"},{name:"ariaPreviousLabel",description:`The label for the "Previous" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:73,character:2,position:2195},end:{line:73,character:28,position:2221},type:"string",defaultValue:"'Action link for previous page'"},{name:"boundaryLinks",description:'If `true`, the "First" and "Last" page links are shown.',fileName:"core/src/components/pagination/pagination.ts",start:{line:107,character:2,position:3026},end:{line:107,character:25,position:3049},type:"boolean",defaultValue:"false"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string",defaultValue:"''"},{name:"collectionSize",description:`The number of items in your paginated collection.

Note, that this is not the number of pages. Page numbers are calculated dynamically based on
\`collectionSize\` and \`pageSize\`.

Ex. if you have 100 items in your collection and displaying 20 items per page, you'll end up with 5 pages.

Whatever the collectionSize the page number is of minimum 1.`,fileName:"core/src/components/pagination/pagination.ts",start:{line:181,character:2,position:5282},end:{line:181,character:25,position:5305},type:"number",defaultValue:"0"},{name:"directionLinks",description:'If `true`, the "Next" and "Previous" page links are shown.',fileName:"core/src/components/pagination/pagination.ts",start:{line:101,character:2,position:2905},end:{line:101,character:26,position:2929},type:"boolean",defaultValue:"true"},{name:"disabled",description:"If `true`, pagination links will be disabled.",fileName:"core/src/components/pagination/pagination.ts",start:{line:95,character:2,position:2788},end:{line:95,character:20,position:2806},type:"boolean",defaultValue:"false"},{name:"onPageChange",description:`An event fired when the page is changed.

Event payload is the number of the newly selected page.

Page numbers start with \`1\`.`,fileName:"core/src/components/pagination/pagination.ts",start:{line:201,character:2,position:5626},end:{line:201,character:39,position:5663},type:"(page: number) => void",defaultValue:"noop"},{name:"page",description:"The current page.\n\nPage numbers start with `1`.",fileName:"core/src/components/pagination/pagination.ts",start:{line:32,character:2,position:1074},end:{line:32,character:15,position:1087},type:"number",defaultValue:"1"},{name:"pageSize",description:"The number of items per page.",fileName:"core/src/components/pagination/pagination.ts",start:{line:188,character:2,position:5401},end:{line:188,character:19,position:5418},type:"number",defaultValue:"10"},{name:"pagesFactory",description:`pagesFactory returns a function computing the array of pages to be displayed
as number (-1 are treated as ellipsis).
Use Page slot to customize the pages view and not this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:220,character:2,position:6144},end:{line:220,character:62,position:6204},type:"(page: number, pageCount: number) => number[]",defaultValue:`(page: number, pageCount: number) => {
		// TODO extract this for testing
		const pages: number[] = [];
		for (let i = 1; i <= pageCount; i++) {
			pages.push(i);
		}
		return pages;
	}`},{name:"size",description:`The pagination display size.

Bootstrap currently supports small and large sizes.`,fileName:"core/src/components/pagination/pagination.ts",start:{line:40,character:2,position:1261},end:{line:40,character:27,position:1286},type:"'sm' | 'lg' | null",defaultValue:"null"},{name:"slotEllipsis",description:`The template to use for the ellipsis slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:115,character:2,position:3247},end:{line:115,character:47,position:3292},type:"SlotContent<PaginationContext>",defaultValue:"'…'"},{name:"slotFirst",description:`The template to use for the first slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:123,character:2,position:3487},end:{line:123,character:44,position:3529},type:"SlotContent<PaginationContext>",defaultValue:"'«'"},{name:"slotLast",description:`The template to use for the last slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:147,character:2,position:4201},end:{line:147,character:43,position:4242},type:"SlotContent<PaginationContext>",defaultValue:"'»'"},{name:"slotNext",description:`The template to use for the next slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:139,character:2,position:3966},end:{line:139,character:43,position:4007},type:"SlotContent<PaginationContext>",defaultValue:"'›'"},{name:"slotNumberLabel",description:`The template to use for the number slot
override any configuration parameters provided for this
for I18n, we suggest to use the global configuration`,fileName:"core/src/components/pagination/pagination.ts",start:{line:166,character:2,position:4744},end:{line:166,character:56,position:4798},type:"SlotContent<PaginationNumberContext>",defaultValue:"({displayedPage}) => `${displayedPage}`"},{name:"slotPages",description:`The template to use for the pages slot
To use to customize the pages view
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:154,character:2,position:4397},end:{line:154,character:44,position:4439},type:"SlotContent<PaginationContext>",defaultValue:"undefined"},{name:"slotPrevious",description:`The template to use for the previous slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:131,character:2,position:3727},end:{line:131,character:47,position:3772},type:"SlotContent<PaginationContext>",defaultValue:"'‹'"}],t=[{name:"activeLabel",description:`The label for the "active" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:57,character:2,position:1706},end:{line:57,character:22,position:1726},type:"string"},{name:"ariaFirstLabel",description:`The label for the "First" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:65,character:2,position:1946},end:{line:65,character:25,position:1969},type:"string"},{name:"ariaLabel",description:`The label for the nav element.

for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:49,character:2,position:1491},end:{line:49,character:20,position:1509},type:"string"},{name:"ariaLastLabel",description:`The label for the "Last" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:89,character:2,position:2679},end:{line:89,character:24,position:2701},type:"string"},{name:"ariaNextLabel",description:`The label for the "Next" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:81,character:2,position:2439},end:{line:81,character:24,position:2461},type:"string"},{name:"ariaPreviousLabel",description:`The label for the "Previous" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:73,character:2,position:2195},end:{line:73,character:28,position:2221},type:"string"},{name:"boundaryLinks",description:'If `true`, the "First" and "Last" page links are shown.',fileName:"core/src/components/pagination/pagination.ts",start:{line:107,character:2,position:3026},end:{line:107,character:25,position:3049},type:"boolean"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string"},{name:"directionLinks",description:'If `true`, the "Next" and "Previous" page links are shown.',fileName:"core/src/components/pagination/pagination.ts",start:{line:101,character:2,position:2905},end:{line:101,character:26,position:2929},type:"boolean"},{name:"disabled",description:"If `true`, pagination links will be disabled.",fileName:"core/src/components/pagination/pagination.ts",start:{line:95,character:2,position:2788},end:{line:95,character:20,position:2806},type:"boolean"},{name:"nextDisabled",description:"true if the next link need to be disabled",fileName:"core/src/components/pagination/pagination.ts",start:{line:253,character:2,position:7081},end:{line:253,character:24,position:7103},type:"boolean"},{name:"page",description:"The current page.\n\nPage numbers start with `1`.",fileName:"core/src/components/pagination/pagination.ts",start:{line:32,character:2,position:1074},end:{line:32,character:15,position:1087},type:"number"},{name:"pageCount",description:"The number of pages.",fileName:"core/src/components/pagination/pagination.ts",start:{line:241,character:2,position:6815},end:{line:241,character:20,position:6833},type:"number"},{name:"pages",description:"The current pages, the number in the Array is the number of the page.",fileName:"core/src/components/pagination/pagination.ts",start:{line:245,character:2,position:6919},end:{line:245,character:18,position:6935},type:"number[]"},{name:"pagesLabel",description:'The label for each "Page" page link.',fileName:"core/src/components/pagination/pagination.ts",start:{line:257,character:2,position:7156},end:{line:257,character:23,position:7177},type:"string[]"},{name:"previousDisabled",description:"true if the previous link need to be disabled",fileName:"core/src/components/pagination/pagination.ts",start:{line:249,character:2,position:6997},end:{line:249,character:28,position:7023},type:"boolean"},{name:"size",description:`The pagination display size.

Bootstrap currently supports small and large sizes.`,fileName:"core/src/components/pagination/pagination.ts",start:{line:40,character:2,position:1261},end:{line:40,character:27,position:1286},type:"'sm' | 'lg' | null"},{name:"slotEllipsis",description:`The template to use for the ellipsis slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:115,character:2,position:3247},end:{line:115,character:47,position:3292},type:"SlotContent<PaginationContext>"},{name:"slotFirst",description:`The template to use for the first slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:123,character:2,position:3487},end:{line:123,character:44,position:3529},type:"SlotContent<PaginationContext>"},{name:"slotLast",description:`The template to use for the last slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:147,character:2,position:4201},end:{line:147,character:43,position:4242},type:"SlotContent<PaginationContext>"},{name:"slotNext",description:`The template to use for the next slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:139,character:2,position:3966},end:{line:139,character:43,position:4007},type:"SlotContent<PaginationContext>"},{name:"slotNumberLabel",description:`The template to use for the number slot
override any configuration parameters provided for this
for I18n, we suggest to use the global configuration`,fileName:"core/src/components/pagination/pagination.ts",start:{line:166,character:2,position:4744},end:{line:166,character:56,position:4798},type:"SlotContent<PaginationNumberContext>"},{name:"slotPages",description:`The template to use for the pages slot
To use to customize the pages view
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:154,character:2,position:4397},end:{line:154,character:44,position:4439},type:"SlotContent<PaginationContext>"},{name:"slotPrevious",description:`The template to use for the previous slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:131,character:2,position:3727},end:{line:131,character:47,position:3772},type:"SlotContent<PaginationContext>"}],n=[{name:"isEllipsis",description:"If the page number is -1 return true",fileName:"core/src/components/pagination/pagination.ts",start:{line:290,character:2,position:7807},end:{line:290,character:36,position:7841},type:"(page: number) => boolean"}],i={props:e,state:t,api:n};export{i as d};
