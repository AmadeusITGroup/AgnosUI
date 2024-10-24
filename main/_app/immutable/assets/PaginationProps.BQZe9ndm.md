## Extends

- `PaginationProps`.`PaginationExtraProps`

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

#### Inherited from

`CoreProps.activeLabel`

#### Defined in

[core/src/components/pagination/pagination.ts:51](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core/src/components/pagination/pagination.ts#L51)

***

### ariaEllipsisLabel

> **ariaEllipsisLabel**: `string`

The label for the "Ellipsis" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'Ellipsis page element'`

#### Inherited from

`CoreProps.ariaEllipsisLabel`

#### Defined in

[core/src/components/pagination/pagination.ts:108](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core/src/components/pagination/pagination.ts#L108)

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

#### Inherited from

`CoreProps.ariaFirstLabel`

#### Defined in

[core/src/components/pagination/pagination.ts:63](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core/src/components/pagination/pagination.ts#L63)

***

### ariaLabel

> **ariaLabel**: `string`

The label for the nav element.

for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'Page navigation'`

#### Inherited from

`CoreProps.ariaLabel`

#### Defined in

[core/src/components/pagination/pagination.ts:39](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core/src/components/pagination/pagination.ts#L39)

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

#### Inherited from

`CoreProps.ariaLastLabel`

#### Defined in

[core/src/components/pagination/pagination.ts:99](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core/src/components/pagination/pagination.ts#L99)

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

#### Inherited from

`CoreProps.ariaLiveLabel`

#### Defined in

[core/src/components/pagination/pagination.ts:216](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core/src/components/pagination/pagination.ts#L216)

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

#### Inherited from

`CoreProps.ariaNextLabel`

#### Defined in

[core/src/components/pagination/pagination.ts:87](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core/src/components/pagination/pagination.ts#L87)

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

#### Inherited from

`CoreProps.ariaPageLabel`

#### Defined in

[core/src/components/pagination/pagination.ts:201](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core/src/components/pagination/pagination.ts#L201)

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

#### Inherited from

`CoreProps.ariaPreviousLabel`

#### Defined in

[core/src/components/pagination/pagination.ts:75](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core/src/components/pagination/pagination.ts#L75)

***

### boundaryLinks

> **boundaryLinks**: `boolean`

If `true`, the "First" and "Last" page links are shown.

#### Default Value

`false`

#### Inherited from

`CoreProps.boundaryLinks`

#### Defined in

[core/src/components/pagination/pagination.ts:129](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core/src/components/pagination/pagination.ts#L129)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreProps.className`

#### Defined in

[core/src/components/commonProps.ts:7](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core/src/components/commonProps.ts#L7)

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

#### Inherited from

`CoreProps.collectionSize`

#### Defined in

[core/src/components/pagination/pagination.ts:145](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core/src/components/pagination/pagination.ts#L145)

***

### directionLinks

> **directionLinks**: `boolean`

If `true`, the "Next" and "Previous" page links are shown.

#### Default Value

`true`

#### Inherited from

`CoreProps.directionLinks`

#### Defined in

[core/src/components/pagination/pagination.ts:122](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core/src/components/pagination/pagination.ts#L122)

***

### disabled

> **disabled**: `boolean`

If `true`, pagination links will be disabled.

#### Default Value

`false`

#### Inherited from

`CoreProps.disabled`

#### Defined in

[core/src/components/pagination/pagination.ts:115](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core/src/components/pagination/pagination.ts#L115)

***

### ellipsisLabel

> **ellipsisLabel**: `SlotContent`\<[`PaginationContext`](../type-aliases/PaginationContext.md)\>

The template to use for the ellipsis slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'…'`

#### Inherited from

`PaginationExtraProps.ellipsisLabel`

#### Defined in

[core-bootstrap/src/components/pagination/pagination.ts:45](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core-bootstrap/src/components/pagination/pagination.ts#L45)

***

### firstPageLabel

> **firstPageLabel**: `SlotContent`\<[`PaginationContext`](../type-aliases/PaginationContext.md)\>

The template to use for the first slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'«'`

#### Inherited from

`PaginationExtraProps.firstPageLabel`

#### Defined in

[core-bootstrap/src/components/pagination/pagination.ts:54](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core-bootstrap/src/components/pagination/pagination.ts#L54)

***

### lastPageLabel

> **lastPageLabel**: `SlotContent`\<[`PaginationContext`](../type-aliases/PaginationContext.md)\>

The template to use for the last slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'»'`

#### Inherited from

`PaginationExtraProps.lastPageLabel`

#### Defined in

[core-bootstrap/src/components/pagination/pagination.ts:81](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core-bootstrap/src/components/pagination/pagination.ts#L81)

***

### nextPageLabel

> **nextPageLabel**: `SlotContent`\<[`PaginationContext`](../type-aliases/PaginationContext.md)\>

The template to use for the next slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'›'`

#### Inherited from

`PaginationExtraProps.nextPageLabel`

#### Defined in

[core-bootstrap/src/components/pagination/pagination.ts:72](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core-bootstrap/src/components/pagination/pagination.ts#L72)

***

### numberLabel

> **numberLabel**: `SlotContent`\<[`PaginationNumberContext`](../type-aliases/PaginationNumberContext.md)\>

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

#### Defined in

[core-bootstrap/src/components/pagination/pagination.ts:101](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core-bootstrap/src/components/pagination/pagination.ts#L101)

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

#### Inherited from

`CoreProps.onPageChange`

#### Defined in

[core/src/components/pagination/pagination.ts:166](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core/src/components/pagination/pagination.ts#L166)

***

### page

> **page**: `number`

The current page.

Page numbers start with `1`.

#### Default Value

`1`

#### Inherited from

`CoreProps.page`

#### Defined in

[core/src/components/pagination/pagination.ts:20](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core/src/components/pagination/pagination.ts#L20)

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

#### Inherited from

`CoreProps.pageLink`

#### Defined in

[core/src/components/pagination/pagination.ts:228](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core/src/components/pagination/pagination.ts#L228)

***

### pagesDisplay

> **pagesDisplay**: `SlotContent`\<[`PaginationContext`](../type-aliases/PaginationContext.md)\>

The template to use for the pages slot
To use to customize the pages view
override any configuration parameters provided for this

#### Inherited from

`PaginationExtraProps.pagesDisplay`

#### Defined in

[core-bootstrap/src/components/pagination/pagination.ts:88](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core-bootstrap/src/components/pagination/pagination.ts#L88)

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

#### Inherited from

`CoreProps.pagesFactory`

#### Defined in

[core/src/components/pagination/pagination.ts:186](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core/src/components/pagination/pagination.ts#L186)

***

### pageSize

> **pageSize**: `number`

The number of items per page.

#### Remarks

min value is 1

#### Default Value

`10`

#### Inherited from

`CoreProps.pageSize`

#### Defined in

[core/src/components/pagination/pagination.ts:153](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core/src/components/pagination/pagination.ts#L153)

***

### previousPageLabel

> **previousPageLabel**: `SlotContent`\<[`PaginationContext`](../type-aliases/PaginationContext.md)\>

The template to use for the previous slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'‹'`

#### Inherited from

`PaginationExtraProps.previousPageLabel`

#### Defined in

[core-bootstrap/src/components/pagination/pagination.ts:63](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core-bootstrap/src/components/pagination/pagination.ts#L63)

***

### size

> **size**: `null` \| `"sm"` \| `"lg"`

The pagination display size.

Bootstrap currently supports small and large sizes.

#### Default Value

`null`

#### Inherited from

`CoreProps.size`

#### Defined in

[core/src/components/pagination/pagination.ts:29](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core/src/components/pagination/pagination.ts#L29)

***

### structure

> **structure**: `SlotContent`\<[`PaginationContext`](../type-aliases/PaginationContext.md)\>

The template to use for the structure of the pagination component
The default structure uses [ellipsisLabel](PaginationState.md#ellipsislabel), [firstPageLabel](PaginationState.md#firstpagelabel),
[previousPageLabel](PaginationState.md#previouspagelabel), [nextPageLabel](PaginationState.md#nextpagelabel),
[lastPageLabel](PaginationState.md#lastpagelabel), [pagesDisplay](PaginationState.md#pagesdisplay),
[numberLabel](PaginationState.md#numberlabel),

#### Inherited from

`PaginationExtraProps.structure`

#### Defined in

[core-bootstrap/src/components/pagination/pagination.ts:36](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core-bootstrap/src/components/pagination/pagination.ts#L36)
