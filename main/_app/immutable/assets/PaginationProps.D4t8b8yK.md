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

angular/bootstrap/src/components/pagination/pagination.gen.ts:425

***

### ariaEllipsisLabel

> **ariaEllipsisLabel**: `string`

The label for the "Ellipsis" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'Ellipsis page element'`

#### Defined in

angular/bootstrap/src/components/pagination/pagination.gen.ts:487

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

angular/bootstrap/src/components/pagination/pagination.gen.ts:438

***

### ariaLabel

> **ariaLabel**: `string`

The label for the nav element.

for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'Page navigation'`

#### Defined in

angular/bootstrap/src/components/pagination/pagination.gen.ts:412

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

angular/bootstrap/src/components/pagination/pagination.gen.ts:477

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

angular/bootstrap/src/components/pagination/pagination.gen.ts:379

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

angular/bootstrap/src/components/pagination/pagination.gen.ts:464

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

angular/bootstrap/src/components/pagination/pagination.gen.ts:363

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

angular/bootstrap/src/components/pagination/pagination.gen.ts:451

***

### boundaryLinks

> **boundaryLinks**: `boolean`

If `true`, the "First" and "Last" page links are shown.

#### Default Value

`false`

#### Defined in

angular/bootstrap/src/components/pagination/pagination.gen.ts:511

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

angular/bootstrap/src/components/pagination/pagination.gen.ts:518

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

angular/bootstrap/src/components/pagination/pagination.gen.ts:303

***

### directionLinks

> **directionLinks**: `boolean`

If `true`, the "Next" and "Previous" page links are shown.

#### Default Value

`true`

#### Defined in

angular/bootstrap/src/components/pagination/pagination.gen.ts:503

***

### disabled

> **disabled**: `boolean`

If `true`, pagination links will be disabled.

#### Default Value

`false`

#### Defined in

angular/bootstrap/src/components/pagination/pagination.gen.ts:495

***

### ellipsisLabel

> **ellipsisLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](PaginationContext.md)\>

The template to use for the ellipsis slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'…'`

#### Defined in

angular/bootstrap/src/components/pagination/pagination.gen.ts:537

***

### firstPageLabel

> **firstPageLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](PaginationContext.md)\>

The template to use for the first slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'«'`

#### Defined in

angular/bootstrap/src/components/pagination/pagination.gen.ts:547

***

### lastPageLabel

> **lastPageLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](PaginationContext.md)\>

The template to use for the last slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'»'`

#### Defined in

angular/bootstrap/src/components/pagination/pagination.gen.ts:577

***

### nextPageLabel

> **nextPageLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](PaginationContext.md)\>

The template to use for the next slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'›'`

#### Defined in

angular/bootstrap/src/components/pagination/pagination.gen.ts:567

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

angular/bootstrap/src/components/pagination/pagination.gen.ts:599

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

angular/bootstrap/src/components/pagination/pagination.gen.ts:326

***

### page

> **page**: `number`

The current page.

Page numbers start with `1`.

#### Default Value

`1`

#### Defined in

angular/bootstrap/src/components/pagination/pagination.gen.ts:401

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

angular/bootstrap/src/components/pagination/pagination.gen.ts:392

***

### pagesDisplay

> **pagesDisplay**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](PaginationContext.md)\>

The template to use for the pages slot
To use to customize the pages view
override any configuration parameters provided for this

#### Defined in

angular/bootstrap/src/components/pagination/pagination.gen.ts:585

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

angular/bootstrap/src/components/pagination/pagination.gen.ts:347

***

### pageSize

> **pageSize**: `number`

The number of items per page.

#### Remarks

min value is 1

#### Default Value

`10`

#### Defined in

angular/bootstrap/src/components/pagination/pagination.gen.ts:312

***

### previousPageLabel

> **previousPageLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](PaginationContext.md)\>

The template to use for the previous slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'‹'`

#### Defined in

angular/bootstrap/src/components/pagination/pagination.gen.ts:557

***

### size

> **size**: `null` \| `"sm"` \| `"lg"`

The pagination display size.

Bootstrap currently supports small and large sizes.

#### Default Value

`null`

#### Defined in

angular/bootstrap/src/components/pagination/pagination.gen.ts:609

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](PaginationContext.md)\>

The template to use for the structure of the pagination component
The default structure uses [ellipsisLabel](PaginationProps.md#ellipsislabel), [firstPageLabel](PaginationProps.md#firstpagelabel),
[previousPageLabel](PaginationProps.md#previouspagelabel), [nextPageLabel](PaginationProps.md#nextpagelabel),
[lastPageLabel](PaginationProps.md#lastpagelabel), [pagesDisplay](PaginationProps.md#pagesdisplay),
[numberLabel](PaginationProps.md#numberlabel),

#### Defined in

angular/bootstrap/src/components/pagination/pagination.gen.ts:527
