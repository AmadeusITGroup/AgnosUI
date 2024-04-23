const e=[{name:"activeLabel",description:`The label for the "active" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:59,character:2,position:1840},end:{line:59,character:22,position:1860},type:"string",defaultValue:"'(current)'"},{name:"ariaEllipsisLabel",description:`The label for the "Ellipsis" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:99,character:2,position:3046},end:{line:99,character:28,position:3072},type:"string",defaultValue:"'Ellipsis page element'"},{name:"ariaFirstLabel",description:`The label for the "First" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:67,character:2,position:2080},end:{line:67,character:25,position:2103},type:"string",defaultValue:"'Action link for first page'"},{name:"ariaLabel",description:`The label for the nav element.

for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:51,character:2,position:1625},end:{line:51,character:20,position:1643},type:"string",defaultValue:"'Page navigation'"},{name:"ariaLastLabel",description:`The label for the "Last" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:91,character:2,position:2813},end:{line:91,character:24,position:2835},type:"string",defaultValue:"'Action link for last page'"},{name:"ariaLiveLabel",description:`Provide the label for the aria-live element
This is used for accessibility purposes.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:267,character:2,position:8102},end:{line:267,character:68,position:8168},type:"(currentPage: number, pageCount: number) => string",defaultValue:"(currentPage: number, pageCount: number) => `Current page is ${currentPage}`"},{name:"ariaNextLabel",description:`The label for the "Next" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:83,character:2,position:2573},end:{line:83,character:24,position:2595},type:"string",defaultValue:"'Action link for next page'"},{name:"ariaPageLabel",description:`Provide the label for each "Page" page button.
This is used for accessibility purposes.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:253,character:2,position:7612},end:{line:253,character:68,position:7678},type:"(processPage: number, pageCount: number) => string",defaultValue:"(processPage: number, pageCount: number) => `Page ${processPage} of ${pageCount}`"},{name:"ariaPreviousLabel",description:`The label for the "Previous" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:75,character:2,position:2329},end:{line:75,character:28,position:2355},type:"string",defaultValue:"'Action link for previous page'"},{name:"boundaryLinks",description:'If `true`, the "First" and "Last" page links are shown.',fileName:"core/src/components/pagination/pagination.ts",start:{line:117,character:2,position:3397},end:{line:117,character:25,position:3420},type:"boolean",defaultValue:"false"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string",defaultValue:"''"},{name:"collectionSize",description:`The number of items in your paginated collection.

Note, that this is not the number of pages. Page numbers are calculated dynamically based on
\`collectionSize\` and \`pageSize\`.

Ex. if you have 100 items in your collection and displaying 20 items per page, you'll end up with 5 pages.

Whatever the collectionSize the page number is of minimum 1.`,fileName:"core/src/components/pagination/pagination.ts",start:{line:200,character:2,position:6258},end:{line:200,character:25,position:6281},type:"number",defaultValue:"0"},{name:"directionLinks",description:'If `true`, the "Next" and "Previous" page links are shown.',fileName:"core/src/components/pagination/pagination.ts",start:{line:111,character:2,position:3276},end:{line:111,character:26,position:3300},type:"boolean",defaultValue:"true"},{name:"disabled",description:"If `true`, pagination links will be disabled.",fileName:"core/src/components/pagination/pagination.ts",start:{line:105,character:2,position:3159},end:{line:105,character:20,position:3177},type:"boolean",defaultValue:"false"},{name:"onPageChange",description:`An event fired when the page is changed.

Event payload is the number of the newly selected page.

Page numbers start with \`1\`.`,fileName:"core/src/components/pagination/pagination.ts",start:{line:220,character:2,position:6602},end:{line:220,character:39,position:6639},type:"(page: number) => void",defaultValue:"() => {}"},{name:"page",description:"The current page.\n\nPage numbers start with `1`.",fileName:"core/src/components/pagination/pagination.ts",start:{line:34,character:2,position:1208},end:{line:34,character:15,position:1221},type:"number",defaultValue:"1"},{name:"pageLink",description:`Factory function providing the href for a "Page" page anchor,
based on the current page number`,fileName:"core/src/components/pagination/pagination.ts",start:{line:278,character:2,position:8398},end:{line:278,character:43,position:8439},type:"(pageNumber: number) => string",defaultValue:"(_page: number) => PAGE_LINK_DEFAULT"},{name:"pageSize",description:"The number of items per page.",fileName:"core/src/components/pagination/pagination.ts",start:{line:207,character:2,position:6377},end:{line:207,character:19,position:6394},type:"number",defaultValue:"10"},{name:"pagesFactory",description:`pagesFactory returns a function computing the array of pages to be displayed
as number (-1 are treated as ellipsis).
Use Page slot to customize the pages view and not this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:239,character:2,position:7120},end:{line:239,character:62,position:7180},type:"(page: number, pageCount: number) => number[]",defaultValue:`(_page: number, pageCount: number) => {
		const pages: number[] = [];
		for (let i = 1; i <= pageCount; i++) {
			pages.push(i);
		}
		return pages;
	}`},{name:"size",description:`The pagination display size.

Bootstrap currently supports small and large sizes.`,fileName:"core/src/components/pagination/pagination.ts",start:{line:42,character:2,position:1395},end:{line:42,character:27,position:1420},type:'"sm" | "lg"',defaultValue:"null"},{name:"slotEllipsis",description:`The template to use for the ellipsis slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:134,character:2,position:4223},end:{line:134,character:47,position:4268},type:"SlotContent<PaginationContext>",defaultValue:"'…'"},{name:"slotFirst",description:`The template to use for the first slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:142,character:2,position:4463},end:{line:142,character:44,position:4505},type:"SlotContent<PaginationContext>",defaultValue:"'«'"},{name:"slotLast",description:`The template to use for the last slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:166,character:2,position:5177},end:{line:166,character:43,position:5218},type:"SlotContent<PaginationContext>",defaultValue:"'»'"},{name:"slotNext",description:`The template to use for the next slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:158,character:2,position:4942},end:{line:158,character:43,position:4983},type:"SlotContent<PaginationContext>",defaultValue:"'›'"},{name:"slotNumberLabel",description:`The template to use for the number slot
override any configuration parameters provided for this
for I18n, we suggest to use the global configuration`,fileName:"core/src/components/pagination/pagination.ts",start:{line:185,character:2,position:5720},end:{line:185,character:56,position:5774},type:"SlotContent<PaginationNumberContext>",defaultValue:"({displayedPage}: PaginationNumberContext) => `${displayedPage}`"},{name:"slotPages",description:`The template to use for the pages slot
To use to customize the pages view
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:173,character:2,position:5373},end:{line:173,character:44,position:5415},type:"SlotContent<PaginationContext>",defaultValue:"undefined"},{name:"slotPrevious",description:`The template to use for the previous slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:150,character:2,position:4703},end:{line:150,character:47,position:4748},type:"SlotContent<PaginationContext>",defaultValue:"'‹'"},{name:"slotStructure",description:`The template to use for the structure of the pagination component
The default structure uses slotEllipsis, slotFirst,
slotPrevious, slotNext,
slotLast, slotPages,
slotNumberLabel,`,fileName:"core/src/components/pagination/pagination.ts",start:{line:126,character:2,position:3979},end:{line:126,character:48,position:4025},type:"SlotContent<PaginationContext>",defaultValue:"undefined"}],t=[{name:"activeLabel",description:`The label for the "active" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:59,character:2,position:1840},end:{line:59,character:22,position:1860},type:"string"},{name:"ariaEllipsisLabel",description:`The label for the "Ellipsis" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:99,character:2,position:3046},end:{line:99,character:28,position:3072},type:"string"},{name:"ariaFirstLabel",description:`The label for the "First" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:67,character:2,position:2080},end:{line:67,character:25,position:2103},type:"string"},{name:"ariaLabel",description:`The label for the nav element.

for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:51,character:2,position:1625},end:{line:51,character:20,position:1643},type:"string"},{name:"ariaLastLabel",description:`The label for the "Last" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:91,character:2,position:2813},end:{line:91,character:24,position:2835},type:"string"},{name:"ariaLiveLabelText",description:"The aria-live text",fileName:"core/src/components/pagination/pagination.ts",start:{line:321,character:2,position:9274},end:{line:321,character:28,position:9300},type:"string"},{name:"ariaNextLabel",description:`The label for the "Next" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:83,character:2,position:2573},end:{line:83,character:24,position:2595},type:"string"},{name:"ariaPreviousLabel",description:`The label for the "Previous" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:75,character:2,position:2329},end:{line:75,character:28,position:2355},type:"string"},{name:"boundaryLinks",description:'If `true`, the "First" and "Last" page links are shown.',fileName:"core/src/components/pagination/pagination.ts",start:{line:117,character:2,position:3397},end:{line:117,character:25,position:3420},type:"boolean"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string"},{name:"directionLinks",description:'If `true`, the "Next" and "Previous" page links are shown.',fileName:"core/src/components/pagination/pagination.ts",start:{line:111,character:2,position:3276},end:{line:111,character:26,position:3300},type:"boolean"},{name:"directionsHrefs",description:"The hrefs for the direction links",fileName:"core/src/components/pagination/pagination.ts",start:{line:318,character:2,position:9211},end:{line:318,character:35,position:9244},type:"DirectionsHrefs"},{name:"disabled",description:"If `true`, pagination links will be disabled.",fileName:"core/src/components/pagination/pagination.ts",start:{line:105,character:2,position:3159},end:{line:105,character:20,position:3177},type:"boolean"},{name:"nextDisabled",description:"true if the next link need to be disabled",fileName:"core/src/components/pagination/pagination.ts",start:{line:308,character:2,position:9001},end:{line:308,character:24,position:9023},type:"boolean"},{name:"page",description:"The current page.\n\nPage numbers start with `1`.",fileName:"core/src/components/pagination/pagination.ts",start:{line:34,character:2,position:1208},end:{line:34,character:15,position:1221},type:"number"},{name:"pageCount",description:"The number of pages.",fileName:"core/src/components/pagination/pagination.ts",start:{line:296,character:2,position:8735},end:{line:296,character:20,position:8753},type:"number"},{name:"pages",description:"The current pages, the number in the Array is the number of the page.",fileName:"core/src/components/pagination/pagination.ts",start:{line:300,character:2,position:8839},end:{line:300,character:18,position:8855},type:"number[]"},{name:"pagesHrefs",description:'The hrefs for each "Page" page link',fileName:"core/src/components/pagination/pagination.ts",start:{line:315,character:2,position:9144},end:{line:315,character:23,position:9165},type:"string[]"},{name:"pagesLabel",description:'The label for each "Page" page link.',fileName:"core/src/components/pagination/pagination.ts",start:{line:312,character:2,position:9076},end:{line:312,character:23,position:9097},type:"string[]"},{name:"previousDisabled",description:"true if the previous link need to be disabled",fileName:"core/src/components/pagination/pagination.ts",start:{line:304,character:2,position:8917},end:{line:304,character:28,position:8943},type:"boolean"},{name:"size",description:`The pagination display size.

Bootstrap currently supports small and large sizes.`,fileName:"core/src/components/pagination/pagination.ts",start:{line:42,character:2,position:1395},end:{line:42,character:27,position:1420},type:'"sm" | "lg"'},{name:"slotEllipsis",description:`The template to use for the ellipsis slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:134,character:2,position:4223},end:{line:134,character:47,position:4268},type:"SlotContent<PaginationContext>"},{name:"slotFirst",description:`The template to use for the first slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:142,character:2,position:4463},end:{line:142,character:44,position:4505},type:"SlotContent<PaginationContext>"},{name:"slotLast",description:`The template to use for the last slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:166,character:2,position:5177},end:{line:166,character:43,position:5218},type:"SlotContent<PaginationContext>"},{name:"slotNext",description:`The template to use for the next slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:158,character:2,position:4942},end:{line:158,character:43,position:4983},type:"SlotContent<PaginationContext>"},{name:"slotNumberLabel",description:`The template to use for the number slot
override any configuration parameters provided for this
for I18n, we suggest to use the global configuration`,fileName:"core/src/components/pagination/pagination.ts",start:{line:185,character:2,position:5720},end:{line:185,character:56,position:5774},type:"SlotContent<PaginationNumberContext>"},{name:"slotPages",description:`The template to use for the pages slot
To use to customize the pages view
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:173,character:2,position:5373},end:{line:173,character:44,position:5415},type:"SlotContent<PaginationContext>"},{name:"slotPrevious",description:`The template to use for the previous slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:150,character:2,position:4703},end:{line:150,character:47,position:4748},type:"SlotContent<PaginationContext>"},{name:"slotStructure",description:`The template to use for the structure of the pagination component
The default structure uses slotEllipsis, slotFirst,
slotPrevious, slotNext,
slotLast, slotPages,
slotNumberLabel,`,fileName:"core/src/components/pagination/pagination.ts",start:{line:126,character:2,position:3979},end:{line:126,character:48,position:4025},type:"SlotContent<PaginationContext>"}],n=[],i={props:e,state:t,api:n};export{i as w};
