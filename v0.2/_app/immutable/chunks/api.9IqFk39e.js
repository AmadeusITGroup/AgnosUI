const e=[{name:"activeLabel",description:`The label for the "active" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:57,character:2,position:1703},end:{line:57,character:22,position:1723},type:"string",defaultValue:"'(current)'"},{name:"ariaFirstLabel",description:`The label for the "First" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:65,character:2,position:1943},end:{line:65,character:25,position:1966},type:"string",defaultValue:"'Action link for first page'"},{name:"ariaLabel",description:`The label for the nav element.

for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:49,character:2,position:1488},end:{line:49,character:20,position:1506},type:"string",defaultValue:"'Page navigation'"},{name:"ariaLastLabel",description:`The label for the "Last" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:89,character:2,position:2676},end:{line:89,character:24,position:2698},type:"string",defaultValue:"'Action link for last page'"},{name:"ariaNextLabel",description:`The label for the "Next" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:81,character:2,position:2436},end:{line:81,character:24,position:2458},type:"string",defaultValue:"'Action link for next page'"},{name:"ariaPageLabel",description:`Provide the label for each "Page" page button.
This is used for accessibility purposes.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:243,character:2,position:7238},end:{line:243,character:68,position:7304},type:"(processPage: number, pageCount: number) => string",defaultValue:"(processPage: number, pageCount: number) => `Page ${processPage} of ${pageCount}`"},{name:"ariaPreviousLabel",description:`The label for the "Previous" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:73,character:2,position:2192},end:{line:73,character:28,position:2218},type:"string",defaultValue:"'Action link for previous page'"},{name:"boundaryLinks",description:'If `true`, the "First" and "Last" page links are shown.',fileName:"core/src/components/pagination/pagination.ts",start:{line:107,character:2,position:3023},end:{line:107,character:25,position:3046},type:"boolean",defaultValue:"false"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string",defaultValue:"''"},{name:"collectionSize",description:`The number of items in your paginated collection.

Note, that this is not the number of pages. Page numbers are calculated dynamically based on
\`collectionSize\` and \`pageSize\`.

Ex. if you have 100 items in your collection and displaying 20 items per page, you'll end up with 5 pages.

Whatever the collectionSize the page number is of minimum 1.`,fileName:"core/src/components/pagination/pagination.ts",start:{line:190,character:2,position:5884},end:{line:190,character:25,position:5907},type:"number",defaultValue:"0"},{name:"directionLinks",description:'If `true`, the "Next" and "Previous" page links are shown.',fileName:"core/src/components/pagination/pagination.ts",start:{line:101,character:2,position:2902},end:{line:101,character:26,position:2926},type:"boolean",defaultValue:"true"},{name:"disabled",description:"If `true`, pagination links will be disabled.",fileName:"core/src/components/pagination/pagination.ts",start:{line:95,character:2,position:2785},end:{line:95,character:20,position:2803},type:"boolean",defaultValue:"false"},{name:"onPageChange",description:`An event fired when the page is changed.

Event payload is the number of the newly selected page.

Page numbers start with \`1\`.`,fileName:"core/src/components/pagination/pagination.ts",start:{line:210,character:2,position:6228},end:{line:210,character:39,position:6265},type:"(page: number) => void",defaultValue:"noop"},{name:"page",description:"The current page.\n\nPage numbers start with `1`.",fileName:"core/src/components/pagination/pagination.ts",start:{line:32,character:2,position:1071},end:{line:32,character:15,position:1084},type:"number",defaultValue:"1"},{name:"pageLink",description:`Factory function providing the href for a "Page" page anchor,
based on the current page number`,fileName:"core/src/components/pagination/pagination.ts",start:{line:254,character:2,position:7534},end:{line:254,character:43,position:7575},type:"(pageNumber: number) => string",defaultValue:"(_page: number) => PAGE_LINK_DEFAULT"},{name:"pageSize",description:"The number of items per page.",fileName:"core/src/components/pagination/pagination.ts",start:{line:197,character:2,position:6003},end:{line:197,character:19,position:6020},type:"number",defaultValue:"10"},{name:"pagesFactory",description:`pagesFactory returns a function computing the array of pages to be displayed
as number (-1 are treated as ellipsis).
Use Page slot to customize the pages view and not this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:229,character:2,position:6746},end:{line:229,character:62,position:6806},type:"(page: number, pageCount: number) => number[]",defaultValue:`(page: number, pageCount: number) => {
		// TODO extract this for testing
		const pages: number[] = [];
		for (let i = 1; i <= pageCount; i++) {
			pages.push(i);
		}
		return pages;
	}`},{name:"size",description:`The pagination display size.

Bootstrap currently supports small and large sizes.`,fileName:"core/src/components/pagination/pagination.ts",start:{line:40,character:2,position:1258},end:{line:40,character:27,position:1283},type:"'sm' | 'lg' | null",defaultValue:"null"},{name:"slotEllipsis",description:`The template to use for the ellipsis slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:124,character:2,position:3849},end:{line:124,character:47,position:3894},type:"SlotContent<PaginationContext>",defaultValue:"'…'"},{name:"slotFirst",description:`The template to use for the first slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:132,character:2,position:4089},end:{line:132,character:44,position:4131},type:"SlotContent<PaginationContext>",defaultValue:"'«'"},{name:"slotLast",description:`The template to use for the last slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:156,character:2,position:4803},end:{line:156,character:43,position:4844},type:"SlotContent<PaginationContext>",defaultValue:"'»'"},{name:"slotNext",description:`The template to use for the next slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:148,character:2,position:4568},end:{line:148,character:43,position:4609},type:"SlotContent<PaginationContext>",defaultValue:"'›'"},{name:"slotNumberLabel",description:`The template to use for the number slot
override any configuration parameters provided for this
for I18n, we suggest to use the global configuration`,fileName:"core/src/components/pagination/pagination.ts",start:{line:175,character:2,position:5346},end:{line:175,character:56,position:5400},type:"SlotContent<PaginationNumberContext>",defaultValue:"({displayedPage}) => `${displayedPage}`"},{name:"slotPages",description:`The template to use for the pages slot
To use to customize the pages view
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:163,character:2,position:4999},end:{line:163,character:44,position:5041},type:"SlotContent<PaginationContext>",defaultValue:"undefined"},{name:"slotPrevious",description:`The template to use for the previous slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:140,character:2,position:4329},end:{line:140,character:47,position:4374},type:"SlotContent<PaginationContext>",defaultValue:"'‹'"},{name:"slotStructure",description:`The template to use for the structure of the pagination component
The default structure uses slotEllipsis, slotFirst,
slotPrevious, slotNext,
slotLast, slotPages,
slotNumberLabel,`,fileName:"core/src/components/pagination/pagination.ts",start:{line:116,character:2,position:3605},end:{line:116,character:48,position:3651},type:"SlotContent<PaginationContext>",defaultValue:"undefined"}],t=[{name:"activeLabel",description:`The label for the "active" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:57,character:2,position:1703},end:{line:57,character:22,position:1723},type:"string"},{name:"ariaFirstLabel",description:`The label for the "First" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:65,character:2,position:1943},end:{line:65,character:25,position:1966},type:"string"},{name:"ariaLabel",description:`The label for the nav element.

for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:49,character:2,position:1488},end:{line:49,character:20,position:1506},type:"string"},{name:"ariaLastLabel",description:`The label for the "Last" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:89,character:2,position:2676},end:{line:89,character:24,position:2698},type:"string"},{name:"ariaNextLabel",description:`The label for the "Next" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:81,character:2,position:2436},end:{line:81,character:24,position:2458},type:"string"},{name:"ariaPreviousLabel",description:`The label for the "Previous" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:73,character:2,position:2192},end:{line:73,character:28,position:2218},type:"string"},{name:"boundaryLinks",description:'If `true`, the "First" and "Last" page links are shown.',fileName:"core/src/components/pagination/pagination.ts",start:{line:107,character:2,position:3023},end:{line:107,character:25,position:3046},type:"boolean"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string"},{name:"directionLinks",description:'If `true`, the "Next" and "Previous" page links are shown.',fileName:"core/src/components/pagination/pagination.ts",start:{line:101,character:2,position:2902},end:{line:101,character:26,position:2926},type:"boolean"},{name:"directionsHrefs",description:"The hrefs for the direction links",fileName:"core/src/components/pagination/pagination.ts",start:{line:294,character:2,position:8347},end:{line:294,character:35,position:8380},type:"DirectionsHrefs"},{name:"disabled",description:"If `true`, pagination links will be disabled.",fileName:"core/src/components/pagination/pagination.ts",start:{line:95,character:2,position:2785},end:{line:95,character:20,position:2803},type:"boolean"},{name:"nextDisabled",description:"true if the next link need to be disabled",fileName:"core/src/components/pagination/pagination.ts",start:{line:284,character:2,position:8137},end:{line:284,character:24,position:8159},type:"boolean"},{name:"page",description:"The current page.\n\nPage numbers start with `1`.",fileName:"core/src/components/pagination/pagination.ts",start:{line:32,character:2,position:1071},end:{line:32,character:15,position:1084},type:"number"},{name:"pageCount",description:"The number of pages.",fileName:"core/src/components/pagination/pagination.ts",start:{line:272,character:2,position:7871},end:{line:272,character:20,position:7889},type:"number"},{name:"pages",description:"The current pages, the number in the Array is the number of the page.",fileName:"core/src/components/pagination/pagination.ts",start:{line:276,character:2,position:7975},end:{line:276,character:18,position:7991},type:"number[]"},{name:"pagesHrefs",description:'The hrefs for each "Page" page link',fileName:"core/src/components/pagination/pagination.ts",start:{line:291,character:2,position:8280},end:{line:291,character:23,position:8301},type:"string[]"},{name:"pagesLabel",description:'The label for each "Page" page link.',fileName:"core/src/components/pagination/pagination.ts",start:{line:288,character:2,position:8212},end:{line:288,character:23,position:8233},type:"string[]"},{name:"previousDisabled",description:"true if the previous link need to be disabled",fileName:"core/src/components/pagination/pagination.ts",start:{line:280,character:2,position:8053},end:{line:280,character:28,position:8079},type:"boolean"},{name:"size",description:`The pagination display size.

Bootstrap currently supports small and large sizes.`,fileName:"core/src/components/pagination/pagination.ts",start:{line:40,character:2,position:1258},end:{line:40,character:27,position:1283},type:"'sm' | 'lg' | null"},{name:"slotEllipsis",description:`The template to use for the ellipsis slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:124,character:2,position:3849},end:{line:124,character:47,position:3894},type:"SlotContent<PaginationContext>"},{name:"slotFirst",description:`The template to use for the first slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:132,character:2,position:4089},end:{line:132,character:44,position:4131},type:"SlotContent<PaginationContext>"},{name:"slotLast",description:`The template to use for the last slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:156,character:2,position:4803},end:{line:156,character:43,position:4844},type:"SlotContent<PaginationContext>"},{name:"slotNext",description:`The template to use for the next slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:148,character:2,position:4568},end:{line:148,character:43,position:4609},type:"SlotContent<PaginationContext>"},{name:"slotNumberLabel",description:`The template to use for the number slot
override any configuration parameters provided for this
for I18n, we suggest to use the global configuration`,fileName:"core/src/components/pagination/pagination.ts",start:{line:175,character:2,position:5346},end:{line:175,character:56,position:5400},type:"SlotContent<PaginationNumberContext>"},{name:"slotPages",description:`The template to use for the pages slot
To use to customize the pages view
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:163,character:2,position:4999},end:{line:163,character:44,position:5041},type:"SlotContent<PaginationContext>"},{name:"slotPrevious",description:`The template to use for the previous slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:140,character:2,position:4329},end:{line:140,character:47,position:4374},type:"SlotContent<PaginationContext>"},{name:"slotStructure",description:`The template to use for the structure of the pagination component
The default structure uses slotEllipsis, slotFirst,
slotPrevious, slotNext,
slotLast, slotPages,
slotNumberLabel,`,fileName:"core/src/components/pagination/pagination.ts",start:{line:116,character:2,position:3605},end:{line:116,character:48,position:3651},type:"SlotContent<PaginationContext>"}],n=[{name:"isEllipsis",description:"If the page number is -1 return true",fileName:"core/src/components/pagination/pagination.ts",start:{line:327,character:2,position:9102},end:{line:327,character:36,position:9136},type:"(page: number) => boolean"}],i={props:e,state:t,api:n};export{i as d};
