Defined in: [core-bootstrap/src/components/pagination/pagination.ts:121](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core-bootstrap/src/components/pagination/pagination.ts#L121)

Represents the properties for the Pagination component.

## Extends

- `PaginationProps`.`PaginationExtraProps`

## Properties

### activeLabel

> **activeLabel**: `string`

Defined in: [core/src/components/pagination/pagination.ts:44](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core/src/components/pagination/pagination.ts#L44)

The label for the "active" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'(current)'
```

#### Inherited from

`CoreProps.activeLabel`

***

### ariaEllipsisLabel

> **ariaEllipsisLabel**: `string`

Defined in: [core/src/components/pagination/pagination.ts:101](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core/src/components/pagination/pagination.ts#L101)

The label for the "Ellipsis" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'Ellipsis page element'`

#### Inherited from

`CoreProps.ariaEllipsisLabel`

***

### ariaFirstLabel

> **ariaFirstLabel**: `string`

Defined in: [core/src/components/pagination/pagination.ts:56](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core/src/components/pagination/pagination.ts#L56)

The label for the "First" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for first page'
```

#### Inherited from

`CoreProps.ariaFirstLabel`

***

### ariaLabel

> **ariaLabel**: `string`

Defined in: [core/src/components/pagination/pagination.ts:32](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core/src/components/pagination/pagination.ts#L32)

The label for the nav element.

for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'Page navigation'`

#### Inherited from

`CoreProps.ariaLabel`

***

### ariaLastLabel

> **ariaLastLabel**: `string`

Defined in: [core/src/components/pagination/pagination.ts:92](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core/src/components/pagination/pagination.ts#L92)

The label for the "Last" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for last page'
```

#### Inherited from

`CoreProps.ariaLastLabel`

***

### ariaLiveLabel()

> **ariaLiveLabel**: (`currentPage`, `pageCount`) => `string`

Defined in: [core/src/components/pagination/pagination.ts:212](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core/src/components/pagination/pagination.ts#L212)

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

#### Inherited from

`CoreProps.ariaLiveLabel`

***

### ariaNextLabel

> **ariaNextLabel**: `string`

Defined in: [core/src/components/pagination/pagination.ts:80](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core/src/components/pagination/pagination.ts#L80)

The label for the "Next" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for next page'
```

#### Inherited from

`CoreProps.ariaNextLabel`

***

### ariaPageLabel()

> **ariaPageLabel**: (`processPage`, `pageCount`) => `string`

Defined in: [core/src/components/pagination/pagination.ts:197](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core/src/components/pagination/pagination.ts#L197)

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

#### Inherited from

`CoreProps.ariaPageLabel`

***

### ariaPreviousLabel

> **ariaPreviousLabel**: `string`

Defined in: [core/src/components/pagination/pagination.ts:68](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core/src/components/pagination/pagination.ts#L68)

The label for the "Previous" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for previous page'
```

#### Inherited from

`CoreProps.ariaPreviousLabel`

***

### boundaryLinks

> **boundaryLinks**: `boolean`

Defined in: [core/src/components/pagination/pagination.ts:122](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core/src/components/pagination/pagination.ts#L122)

If `true`, the "First" and "Last" page links are shown.

#### Default Value

`false`

#### Inherited from

`CoreProps.boundaryLinks`

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreProps.className`

***

### collectionSize

> **collectionSize**: `number`

Defined in: [core/src/components/pagination/pagination.ts:141](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core/src/components/pagination/pagination.ts#L141)

The number of items in your paginated collection.

Note, that this is not the number of pages. Page numbers are calculated dynamically based on
`collectionSize` and `pageSize`.

Ex. if you have 100 items in your collection and displaying 20 items per page, you'll end up with 5 pages.

Whatever the collectionSize the page number is of minimum 1.

#### Default Value

`0`

#### Inherited from

`CoreProps.collectionSize`

***

### directionLinks

> **directionLinks**: `boolean`

Defined in: [core/src/components/pagination/pagination.ts:115](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core/src/components/pagination/pagination.ts#L115)

If `true`, the "Next" and "Previous" page links are shown.

#### Default Value

`true`

#### Inherited from

`CoreProps.directionLinks`

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/pagination/pagination.ts:108](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core/src/components/pagination/pagination.ts#L108)

If `true`, pagination links will be disabled.

#### Default Value

`false`

#### Inherited from

`CoreProps.disabled`

***

### ellipsisLabel

> **ellipsisLabel**: `SlotContent`\<[`PaginationContext`](PaginationContext.md)\>

Defined in: [core-bootstrap/src/components/pagination/pagination.ts:46](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core-bootstrap/src/components/pagination/pagination.ts#L46)

The template to use for the ellipsis slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'…'`

#### Inherited from

`PaginationExtraProps.ellipsisLabel`

***

### firstPageLabel

> **firstPageLabel**: `SlotContent`\<[`PaginationContext`](PaginationContext.md)\>

Defined in: [core-bootstrap/src/components/pagination/pagination.ts:55](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core-bootstrap/src/components/pagination/pagination.ts#L55)

The template to use for the first slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'«'`

#### Inherited from

`PaginationExtraProps.firstPageLabel`

***

### lastPageLabel

> **lastPageLabel**: `SlotContent`\<[`PaginationContext`](PaginationContext.md)\>

Defined in: [core-bootstrap/src/components/pagination/pagination.ts:82](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core-bootstrap/src/components/pagination/pagination.ts#L82)

The template to use for the last slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'»'`

#### Inherited from

`PaginationExtraProps.lastPageLabel`

***

### nextPageLabel

> **nextPageLabel**: `SlotContent`\<[`PaginationContext`](PaginationContext.md)\>

Defined in: [core-bootstrap/src/components/pagination/pagination.ts:73](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core-bootstrap/src/components/pagination/pagination.ts#L73)

The template to use for the next slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'›'`

#### Inherited from

`PaginationExtraProps.nextPageLabel`

***

### numberLabel

> **numberLabel**: `SlotContent`\<[`PaginationNumberContext`](PaginationNumberContext.md)\>

Defined in: [core-bootstrap/src/components/pagination/pagination.ts:102](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core-bootstrap/src/components/pagination/pagination.ts#L102)

The template to use for the number slot
override any configuration parameters provided for this
for I18n, we suggest to use the global configuration

#### Param

The current page number

#### Default Value

```ts
({displayedPage}: PaginationNumberContext) => `${displayedPage}`
```

#### Inherited from

`PaginationExtraProps.numberLabel`

***

### onPageChange()

> **onPageChange**: (`page`) => `void`

Defined in: [core/src/components/pagination/pagination.ts:162](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core/src/components/pagination/pagination.ts#L162)

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

#### Inherited from

`CoreProps.onPageChange`

***

### page

> **page**: `number`

Defined in: [core/src/components/pagination/pagination.ts:22](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core/src/components/pagination/pagination.ts#L22)

The current page.

Page numbers start with `1`.

#### Default Value

`1`

#### Inherited from

`CoreProps.page`

***

### pageLink()

> **pageLink**: (`pageNumber`) => `string`

Defined in: [core/src/components/pagination/pagination.ts:224](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core/src/components/pagination/pagination.ts#L224)

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

#### Inherited from

`CoreProps.pageLink`

***

### pagesDisplay

> **pagesDisplay**: `SlotContent`\<[`PaginationContext`](PaginationContext.md)\>

Defined in: [core-bootstrap/src/components/pagination/pagination.ts:89](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core-bootstrap/src/components/pagination/pagination.ts#L89)

The template to use for the pages slot
To use to customize the pages view
override any configuration parameters provided for this

#### Inherited from

`PaginationExtraProps.pagesDisplay`

***

### pagesFactory()

> **pagesFactory**: (`page`, `pageCount`) => `number`[]

Defined in: [core/src/components/pagination/pagination.ts:182](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core/src/components/pagination/pagination.ts#L182)

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

#### Inherited from

`CoreProps.pagesFactory`

***

### pageSize

> **pageSize**: `number`

Defined in: [core/src/components/pagination/pagination.ts:149](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core/src/components/pagination/pagination.ts#L149)

The number of items per page.

#### Remarks

min value is 1

#### Default Value

`10`

#### Inherited from

`CoreProps.pageSize`

***

### previousPageLabel

> **previousPageLabel**: `SlotContent`\<[`PaginationContext`](PaginationContext.md)\>

Defined in: [core-bootstrap/src/components/pagination/pagination.ts:64](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core-bootstrap/src/components/pagination/pagination.ts#L64)

The template to use for the previous slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'‹'`

#### Inherited from

`PaginationExtraProps.previousPageLabel`

***

### size

> **size**: `null` \| `"sm"` \| `"lg"`

Defined in: [core-bootstrap/src/components/pagination/pagination.ts:111](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core-bootstrap/src/components/pagination/pagination.ts#L111)

The pagination display size.

Bootstrap currently supports small and large sizes.

#### Default Value

`null`

#### Inherited from

`PaginationExtraProps.size`

***

### structure

> **structure**: `SlotContent`\<[`PaginationContext`](PaginationContext.md)\>

Defined in: [core-bootstrap/src/components/pagination/pagination.ts:37](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core-bootstrap/src/components/pagination/pagination.ts#L37)

The template to use for the structure of the pagination component
The default structure uses [ellipsisLabel](PaginationState.md#ellipsislabel), [firstPageLabel](PaginationState.md#firstpagelabel),
[previousPageLabel](PaginationState.md#previouspagelabel), [nextPageLabel](PaginationState.md#nextpagelabel),
[lastPageLabel](PaginationState.md#lastpagelabel), [pagesDisplay](PaginationState.md#pagesdisplay),
[numberLabel](PaginationState.md#numberlabel),

#### Inherited from

`PaginationExtraProps.structure`
