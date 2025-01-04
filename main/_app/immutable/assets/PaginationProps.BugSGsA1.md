Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:295

Represents the properties for the Pagination component.

## Properties

### activeLabel

> **activeLabel**: `string`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:431

The label for the "active" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'(current)'
```

***

### ariaEllipsisLabel

> **ariaEllipsisLabel**: `string`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:493

The label for the "Ellipsis" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'Ellipsis page element'`

***

### ariaFirstLabel

> **ariaFirstLabel**: `string`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:444

The label for the "First" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for first page'
```

***

### ariaLabel

> **ariaLabel**: `string`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:418

The label for the nav element.

for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'Page navigation'`

***

### ariaLastLabel

> **ariaLastLabel**: `string`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:483

The label for the "Last" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for last page'
```

***

### ariaLiveLabel()

> **ariaLiveLabel**: (`currentPage`, `pageCount`) => `string`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:385

Provide the label for the aria-live element
This is used for accessibility purposes.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Parameters

##### currentPage

`number`

The current page number

##### pageCount

`number`

The total number of pages

#### Returns

`string`

#### Default Value

```ts
(currentPage: number) => `Current page is ${currentPage}`
```

***

### ariaNextLabel

> **ariaNextLabel**: `string`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:470

The label for the "Next" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for next page'
```

***

### ariaPageLabel()

> **ariaPageLabel**: (`processPage`, `pageCount`) => `string`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:369

Provide the label for each "Page" page button.
This is used for accessibility purposes.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Parameters

##### processPage

`number`

The current page number

##### pageCount

`number`

The total number of pages

#### Returns

`string`

#### Default Value

```ts
(processPage: number, pageCount: number) => `Page ${processPage} of ${pageCount}`
```

***

### ariaPreviousLabel

> **ariaPreviousLabel**: `string`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:457

The label for the "Previous" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for previous page'
```

***

### boundaryLinks

> **boundaryLinks**: `boolean`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:517

If `true`, the "First" and "Last" page links are shown.

#### Default Value

`false`

***

### className

> **className**: `string`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:524

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### collectionSize

> **collectionSize**: `number`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:309

The number of items in your paginated collection.

Note, that this is not the number of pages. Page numbers are calculated dynamically based on
`collectionSize` and `pageSize`.

Ex. if you have 100 items in your collection and displaying 20 items per page, you'll end up with 5 pages.

Whatever the collectionSize the page number is of minimum 1.

#### Default Value

`0`

***

### directionLinks

> **directionLinks**: `boolean`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:509

If `true`, the "Next" and "Previous" page links are shown.

#### Default Value

`true`

***

### disabled

> **disabled**: `boolean`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:501

If `true`, pagination links will be disabled.

#### Default Value

`false`

***

### ellipsisLabel

> **ellipsisLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](PaginationContext.md)\>

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:543

The template to use for the ellipsis slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'…'`

***

### firstPageLabel

> **firstPageLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](PaginationContext.md)\>

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:553

The template to use for the first slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'«'`

***

### lastPageLabel

> **lastPageLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](PaginationContext.md)\>

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:583

The template to use for the last slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'»'`

***

### nextPageLabel

> **nextPageLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](PaginationContext.md)\>

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:573

The template to use for the next slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'›'`

***

### numberLabel

> **numberLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationNumberContext`](PaginationNumberContext.md)\>

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:605

The template to use for the number slot
override any configuration parameters provided for this
for I18n, we suggest to use the global configuration

#### Param

The current page number

#### Default Value

```ts
({displayedPage}: PaginationNumberContext) => `${displayedPage}`
```

***

### onPageChange()

> **onPageChange**: (`page`) => `void`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:332

An event fired when the page is changed.

Event payload is the number of the newly selected page.

Page numbers start with `1`.

#### Parameters

##### page

`number`

#### Returns

`void`

#### Default Value

```ts
() => {}
```

***

### page

> **page**: `number`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:407

The current page.

Page numbers start with `1`.

#### Default Value

`1`

***

### pageLink()

> **pageLink**: (`pageNumber`) => `string`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:398

Factory function providing the href for a "Page" page anchor,
based on the current page number

#### Parameters

##### pageNumber

`number`

The index to use in the link

#### Returns

`string`

#### Default Value

```ts
(_page: number) => PAGE_LINK_DEFAULT
```

***

### pagesDisplay

> **pagesDisplay**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](PaginationContext.md)\>

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:591

The template to use for the pages slot
To use to customize the pages view
override any configuration parameters provided for this

***

### pagesFactory()

> **pagesFactory**: (`page`, `pageCount`) => `number`[]

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:353

pagesFactory returns a function computing the array of pages to be displayed
as number (-1 are treated as ellipsis).
Use Page slot to customize the pages view and not this

#### Parameters

##### page

`number`

The current page number

##### pageCount

`number`

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

***

### pageSize

> **pageSize**: `number`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:318

The number of items per page.

#### Remarks

min value is 1

#### Default Value

`10`

***

### previousPageLabel

> **previousPageLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](PaginationContext.md)\>

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:563

The template to use for the previous slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'‹'`

***

### size

> **size**: `null` \| `"sm"` \| `"lg"`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:615

The pagination display size.

Bootstrap currently supports small and large sizes.

#### Default Value

`null`

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](PaginationContext.md)\>

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:533

The template to use for the structure of the pagination component
The default structure uses [ellipsisLabel](PaginationProps.md#ellipsislabel), [firstPageLabel](PaginationProps.md#firstpagelabel),
[previousPageLabel](PaginationProps.md#previouspagelabel), [nextPageLabel](PaginationProps.md#nextpagelabel),
[lastPageLabel](PaginationProps.md#lastpagelabel), [pagesDisplay](PaginationProps.md#pagesdisplay),
[numberLabel](PaginationProps.md#numberlabel),
