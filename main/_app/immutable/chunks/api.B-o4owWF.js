const e=[{name:"activeLabel",description:`The label for the "active" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:57,character:2,position:1703},end:{line:57,character:22,position:1723},type:"string",defaultValue:"'(current)'"},{name:"ariaEllipsisLabel",description:`The label for the "Ellipsis" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:97,character:2,position:2909},end:{line:97,character:28,position:2935},type:"string",defaultValue:"'Ellipsis page element'"},{name:"ariaFirstLabel",description:`The label for the "First" page button.
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
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:251,character:2,position:7475},end:{line:251,character:68,position:7541},type:"(processPage: number, pageCount: number) => string",defaultValue:"(processPage: number, pageCount: number) => `Page ${processPage} of ${pageCount}`"},{name:"ariaPreviousLabel",description:`The label for the "Previous" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:73,character:2,position:2192},end:{line:73,character:28,position:2218},type:"string",defaultValue:"'Action link for previous page'"},{name:"boundaryLinks",description:'If `true`, the "First" and "Last" page links are shown.',fileName:"core/src/components/pagination/pagination.ts",start:{line:115,character:2,position:3260},end:{line:115,character:25,position:3283},type:"boolean",defaultValue:"false"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string",defaultValue:"''"},{name:"collectionSize",description:`The number of items in your paginated collection.

Note, that this is not the number of pages. Page numbers are calculated dynamically based on
\`collectionSize\` and \`pageSize\`.

Ex. if you have 100 items in your collection and displaying 20 items per page, you'll end up with 5 pages.

Whatever the collectionSize the page number is of minimum 1.`,fileName:"core/src/components/pagination/pagination.ts",start:{line:198,character:2,position:6121},end:{line:198,character:25,position:6144},type:"number",defaultValue:"0"},{name:"directionLinks",description:'If `true`, the "Next" and "Previous" page links are shown.',fileName:"core/src/components/pagination/pagination.ts",start:{line:109,character:2,position:3139},end:{line:109,character:26,position:3163},type:"boolean",defaultValue:"true"},{name:"disabled",description:"If `true`, pagination links will be disabled.",fileName:"core/src/components/pagination/pagination.ts",start:{line:103,character:2,position:3022},end:{line:103,character:20,position:3040},type:"boolean",defaultValue:"false"},{name:"onPageChange",description:`An event fired when the page is changed.

Event payload is the number of the newly selected page.

Page numbers start with \`1\`.`,fileName:"core/src/components/pagination/pagination.ts",start:{line:218,character:2,position:6465},end:{line:218,character:39,position:6502},type:"(page: number) => void",defaultValue:"() => {}"},{name:"page",description:"The current page.\n\nPage numbers start with `1`.",fileName:"core/src/components/pagination/pagination.ts",start:{line:32,character:2,position:1071},end:{line:32,character:15,position:1084},type:"number",defaultValue:"1"},{name:"pageLink",description:`Factory function providing the href for a "Page" page anchor,
based on the current page number`,fileName:"core/src/components/pagination/pagination.ts",start:{line:262,character:2,position:7771},end:{line:262,character:43,position:7812},type:"(pageNumber: number) => string",defaultValue:"(_page: number) => PAGE_LINK_DEFAULT"},{name:"pageSize",description:"The number of items per page.",fileName:"core/src/components/pagination/pagination.ts",start:{line:205,character:2,position:6240},end:{line:205,character:19,position:6257},type:"number",defaultValue:"10"},{name:"pagesFactory",description:`pagesFactory returns a function computing the array of pages to be displayed
as number (-1 are treated as ellipsis).
Use Page slot to customize the pages view and not this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:237,character:2,position:6983},end:{line:237,character:62,position:7043},type:"(page: number, pageCount: number) => number[]",defaultValue:`(_page: number, pageCount: number) => {
		const pages: number[] = [];
		for (let i = 1; i <= pageCount; i++) {
			pages.push(i);
		}
		return pages;
	}`},{name:"size",description:`The pagination display size.

Bootstrap currently supports small and large sizes.`,fileName:"core/src/components/pagination/pagination.ts",start:{line:40,character:2,position:1258},end:{line:40,character:27,position:1283},type:'"sm" | "lg"',defaultValue:"null"},{name:"slotEllipsis",description:`The template to use for the ellipsis slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:132,character:2,position:4086},end:{line:132,character:47,position:4131},type:"SlotContent<PaginationContext>",defaultValue:"'…'"},{name:"slotFirst",description:`The template to use for the first slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:140,character:2,position:4326},end:{line:140,character:44,position:4368},type:"SlotContent<PaginationContext>",defaultValue:"'«'"},{name:"slotLast",description:`The template to use for the last slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:164,character:2,position:5040},end:{line:164,character:43,position:5081},type:"SlotContent<PaginationContext>",defaultValue:"'»'"},{name:"slotNext",description:`The template to use for the next slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:156,character:2,position:4805},end:{line:156,character:43,position:4846},type:"SlotContent<PaginationContext>",defaultValue:"'›'"},{name:"slotNumberLabel",description:`The template to use for the number slot
override any configuration parameters provided for this
for I18n, we suggest to use the global configuration`,fileName:"core/src/components/pagination/pagination.ts",start:{line:183,character:2,position:5583},end:{line:183,character:56,position:5637},type:"SlotContent<PaginationNumberContext>",defaultValue:"({displayedPage}: PaginationNumberContext) => `${displayedPage}`"},{name:"slotPages",description:`The template to use for the pages slot
To use to customize the pages view
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:171,character:2,position:5236},end:{line:171,character:44,position:5278},type:"SlotContent<PaginationContext>",defaultValue:"undefined"},{name:"slotPrevious",description:`The template to use for the previous slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:148,character:2,position:4566},end:{line:148,character:47,position:4611},type:"SlotContent<PaginationContext>",defaultValue:"'‹'"},{name:"slotStructure",description:`The template to use for the structure of the pagination component
The default structure uses slotEllipsis, slotFirst,
slotPrevious, slotNext,
slotLast, slotPages,
slotNumberLabel,`,fileName:"core/src/components/pagination/pagination.ts",start:{line:124,character:2,position:3842},end:{line:124,character:48,position:3888},type:"SlotContent<PaginationContext>",defaultValue:"undefined"}],t=[{name:"activeLabel",description:`The label for the "active" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:57,character:2,position:1703},end:{line:57,character:22,position:1723},type:"string"},{name:"ariaEllipsisLabel",description:`The label for the "Ellipsis" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:97,character:2,position:2909},end:{line:97,character:28,position:2935},type:"string"},{name:"ariaFirstLabel",description:`The label for the "First" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:65,character:2,position:1943},end:{line:65,character:25,position:1966},type:"string"},{name:"ariaLabel",description:`The label for the nav element.

for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:49,character:2,position:1488},end:{line:49,character:20,position:1506},type:"string"},{name:"ariaLastLabel",description:`The label for the "Last" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:89,character:2,position:2676},end:{line:89,character:24,position:2698},type:"string"},{name:"ariaNextLabel",description:`The label for the "Next" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:81,character:2,position:2436},end:{line:81,character:24,position:2458},type:"string"},{name:"ariaPreviousLabel",description:`The label for the "Previous" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:73,character:2,position:2192},end:{line:73,character:28,position:2218},type:"string"},{name:"boundaryLinks",description:'If `true`, the "First" and "Last" page links are shown.',fileName:"core/src/components/pagination/pagination.ts",start:{line:115,character:2,position:3260},end:{line:115,character:25,position:3283},type:"boolean"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string"},{name:"directionLinks",description:'If `true`, the "Next" and "Previous" page links are shown.',fileName:"core/src/components/pagination/pagination.ts",start:{line:109,character:2,position:3139},end:{line:109,character:26,position:3163},type:"boolean"},{name:"directionsHrefs",description:"The hrefs for the direction links",fileName:"core/src/components/pagination/pagination.ts",start:{line:302,character:2,position:8584},end:{line:302,character:35,position:8617},type:"DirectionsHrefs"},{name:"disabled",description:"If `true`, pagination links will be disabled.",fileName:"core/src/components/pagination/pagination.ts",start:{line:103,character:2,position:3022},end:{line:103,character:20,position:3040},type:"boolean"},{name:"nextDisabled",description:"true if the next link need to be disabled",fileName:"core/src/components/pagination/pagination.ts",start:{line:292,character:2,position:8374},end:{line:292,character:24,position:8396},type:"boolean"},{name:"page",description:"The current page.\n\nPage numbers start with `1`.",fileName:"core/src/components/pagination/pagination.ts",start:{line:32,character:2,position:1071},end:{line:32,character:15,position:1084},type:"number"},{name:"pageCount",description:"The number of pages.",fileName:"core/src/components/pagination/pagination.ts",start:{line:280,character:2,position:8108},end:{line:280,character:20,position:8126},type:"number"},{name:"pages",description:"The current pages, the number in the Array is the number of the page.",fileName:"core/src/components/pagination/pagination.ts",start:{line:284,character:2,position:8212},end:{line:284,character:18,position:8228},type:"number[]"},{name:"pagesHrefs",description:'The hrefs for each "Page" page link',fileName:"core/src/components/pagination/pagination.ts",start:{line:299,character:2,position:8517},end:{line:299,character:23,position:8538},type:"string[]"},{name:"pagesLabel",description:'The label for each "Page" page link.',fileName:"core/src/components/pagination/pagination.ts",start:{line:296,character:2,position:8449},end:{line:296,character:23,position:8470},type:"string[]"},{name:"previousDisabled",description:"true if the previous link need to be disabled",fileName:"core/src/components/pagination/pagination.ts",start:{line:288,character:2,position:8290},end:{line:288,character:28,position:8316},type:"boolean"},{name:"size",description:`The pagination display size.

Bootstrap currently supports small and large sizes.`,fileName:"core/src/components/pagination/pagination.ts",start:{line:40,character:2,position:1258},end:{line:40,character:27,position:1283},type:'"sm" | "lg"'},{name:"slotEllipsis",description:`The template to use for the ellipsis slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:132,character:2,position:4086},end:{line:132,character:47,position:4131},type:"SlotContent<PaginationContext>"},{name:"slotFirst",description:`The template to use for the first slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:140,character:2,position:4326},end:{line:140,character:44,position:4368},type:"SlotContent<PaginationContext>"},{name:"slotLast",description:`The template to use for the last slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:164,character:2,position:5040},end:{line:164,character:43,position:5081},type:"SlotContent<PaginationContext>"},{name:"slotNext",description:`The template to use for the next slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:156,character:2,position:4805},end:{line:156,character:43,position:4846},type:"SlotContent<PaginationContext>"},{name:"slotNumberLabel",description:`The template to use for the number slot
override any configuration parameters provided for this
for I18n, we suggest to use the global configuration`,fileName:"core/src/components/pagination/pagination.ts",start:{line:183,character:2,position:5583},end:{line:183,character:56,position:5637},type:"SlotContent<PaginationNumberContext>"},{name:"slotPages",description:`The template to use for the pages slot
To use to customize the pages view
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:171,character:2,position:5236},end:{line:171,character:44,position:5278},type:"SlotContent<PaginationContext>"},{name:"slotPrevious",description:`The template to use for the previous slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:148,character:2,position:4566},end:{line:148,character:47,position:4611},type:"SlotContent<PaginationContext>"},{name:"slotStructure",description:`The template to use for the structure of the pagination component
The default structure uses slotEllipsis, slotFirst,
slotPrevious, slotNext,
slotLast, slotPages,
slotNumberLabel,`,fileName:"core/src/components/pagination/pagination.ts",start:{line:124,character:2,position:3842},end:{line:124,character:48,position:3888},type:"SlotContent<PaginationContext>"}],n=[],i={props:e,state:t,api:n};export{i as d};
