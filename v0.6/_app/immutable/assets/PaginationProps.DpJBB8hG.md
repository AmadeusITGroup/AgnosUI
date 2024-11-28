Represents the properties for the Pagination component.

## Properties

### activeLabel

> **activeLabel**: `string`

The label for the "active" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'(current)'
```

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:431

***

### ariaEllipsisLabel

> **ariaEllipsisLabel**: `string`

The label for the "Ellipsis" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'Ellipsis page element'`

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:493

***

### ariaFirstLabel

> **ariaFirstLabel**: `string`

The label for the "First" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for first page'
```

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:444

***

### ariaLabel

> **ariaLabel**: `string`

The label for the nav element.

for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'Page navigation'`

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:418

***

### ariaLastLabel

> **ariaLastLabel**: `string`

The label for the "Last" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for last page'
```

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:483

***

### ariaLiveLabel()

> **ariaLiveLabel**: (`currentPage`, `pageCount`) => `string`

Provide the label for the aria-live element
This is used for accessibility purposes.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Parameters

• **currentPage**: `number`

The current page number

• **pageCount**: `number`

The total number of pages

#### Returns

`string`

#### Default Value

```ts
(currentPage: number) => `Current page is ${currentPage}`
```

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:385

***

### ariaNextLabel

> **ariaNextLabel**: `string`

The label for the "Next" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for next page'
```

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:470

***

### ariaPageLabel()

> **ariaPageLabel**: (`processPage`, `pageCount`) => `string`

Provide the label for each "Page" page button.
This is used for accessibility purposes.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Parameters

• **processPage**: `number`

The current page number

• **pageCount**: `number`

The total number of pages

#### Returns

`string`

#### Default Value

```ts
(processPage: number, pageCount: number) => `Page ${processPage} of ${pageCount}`
```

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:369

***

### ariaPreviousLabel

> **ariaPreviousLabel**: `string`

The label for the "Previous" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for previous page'
```

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:457

***

### boundaryLinks

> **boundaryLinks**: `boolean`

If `true`, the "First" and "Last" page links are shown.

#### Default Value

`false`

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:517

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:524

***

### collectionSize

> **collectionSize**: `number`

The number of items in your paginated collection.

Note, that this is not the number of pages. Page numbers are calculated dynamically based on
`collectionSize` and `pageSize`.

Ex. if you have 100 items in your collection and displaying 20 items per page, you'll end up with 5 pages.

Whatever the collectionSize the page number is of minimum 1.

#### Default Value

`0`

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:309

***

### directionLinks

> **directionLinks**: `boolean`

If `true`, the "Next" and "Previous" page links are shown.

#### Default Value

`true`

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:509

***

### disabled

> **disabled**: `boolean`

If `true`, pagination links will be disabled.

#### Default Value

`false`

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:501

***

### ellipsisLabel

> **ellipsisLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](PaginationContext.md)\>

The template to use for the ellipsis slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'…'`

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:543

***

### firstPageLabel

> **firstPageLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](PaginationContext.md)\>

The template to use for the first slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'«'`

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:553

***

### lastPageLabel

> **lastPageLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](PaginationContext.md)\>

The template to use for the last slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'»'`

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:583

***

### nextPageLabel

> **nextPageLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](PaginationContext.md)\>

The template to use for the next slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'›'`

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:573

***

### numberLabel

> **numberLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationNumberContext`](PaginationNumberContext.md)\>

The template to use for the number slot
override any configuration parameters provided for this
for I18n, we suggest to use the global configuration

#### Param

The current page number

#### Default Value

```ts
({displayedPage}: PaginationNumberContext) => `${displayedPage}`
```

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:605

***

### onPageChange()

> **onPageChange**: (`page`) => `void`

An event fired when the page is changed.

Event payload is the number of the newly selected page.

Page numbers start with `1`.

#### Parameters

• **page**: `number`

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:332

***

### page

> **page**: `number`

The current page.

Page numbers start with `1`.

#### Default Value

`1`

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:407

***

### pageLink()

> **pageLink**: (`pageNumber`) => `string`

Factory function providing the href for a "Page" page anchor,
based on the current page number

#### Parameters

• **pageNumber**: `number`

The index to use in the link

#### Returns

`string`

#### Default Value

```ts
(_page: number) => PAGE_LINK_DEFAULT
```

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:398

***

### pagesDisplay

> **pagesDisplay**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](PaginationContext.md)\>

The template to use for the pages slot
To use to customize the pages view
override any configuration parameters provided for this

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:591

***

### pagesFactory()

> **pagesFactory**: (`page`, `pageCount`) => `number`[]

pagesFactory returns a function computing the array of pages to be displayed
as number (-1 are treated as ellipsis).
Use Page slot to customize the pages view and not this

#### Parameters

• **page**: `number`

The current page number

• **pageCount**: `number`

The total number of pages

#### Returns

`number`[]

#### Default Value

```ts
(_page: number, pageCount: number) => {
		const pages: number[] = [];
		for (let i = 1; i <= pageCount; i++) {
			pages.push(i);
		}
		return pages;
	}
```

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:353

***

### pageSize

> **pageSize**: `number`

The number of items per page.

#### Remarks

min value is 1

#### Default Value

`10`

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:318

***

### previousPageLabel

> **previousPageLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](PaginationContext.md)\>

The template to use for the previous slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'‹'`

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:563

***

### size

> **size**: `null` \| `"sm"` \| `"lg"`

The pagination display size.

Bootstrap currently supports small and large sizes.

#### Default Value

`null`

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:615

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](PaginationContext.md)\>

The template to use for the structure of the pagination component
The default structure uses [ellipsisLabel](PaginationProps.md#ellipsislabel), [firstPageLabel](PaginationProps.md#firstpagelabel),
[previousPageLabel](PaginationProps.md#previouspagelabel), [nextPageLabel](PaginationProps.md#nextpagelabel),
[lastPageLabel](PaginationProps.md#lastpagelabel), [pagesDisplay](PaginationProps.md#pagesdisplay),
[numberLabel](PaginationProps.md#numberlabel),

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:533
