The `PaginationComponent` is an Angular component that extends the `BaseWidgetDirective`
to provide a customizable pagination widget. It includes various input properties
to configure labels, templates, and behavior for accessibility and internationalization (i18n).

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`PaginationWidget`](../type-aliases/PaginationWidget.md)\>

## Properties

### activeLabel

> **activeLabel**: `undefined` \| `string`

The label for the "active" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'(current)'
```

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:264](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/angular/bootstrap/src/components/pagination/pagination.component.ts#L264)

***

### ariaEllipsisLabel

> **ariaEllipsisLabel**: `undefined` \| `string`

The label for the "Ellipsis" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'Ellipsis page element'`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:321](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/angular/bootstrap/src/components/pagination/pagination.component.ts#L321)

***

### ariaFirstLabel

> **ariaFirstLabel**: `undefined` \| `string`

The label for the "First" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for first page'
```

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:276](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/angular/bootstrap/src/components/pagination/pagination.component.ts#L276)

***

### ariaLabel

> **ariaLabel**: `undefined` \| `string`

The label for the nav element.

for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'Page navigation'`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:252](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/angular/bootstrap/src/components/pagination/pagination.component.ts#L252)

***

### ariaLastLabel

> **ariaLastLabel**: `undefined` \| `string`

The label for the "Last" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for last page'
```

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:312](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/angular/bootstrap/src/components/pagination/pagination.component.ts#L312)

***

### ariaLiveLabel

> **ariaLiveLabel**: `undefined` \| (`currentPage`, `pageCount`) => `string`

Provide the label for the aria-live element
This is used for accessibility purposes.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Param

The current page number

#### Param

The total number of pages

#### Default Value

```ts
(currentPage: number) => `Current page is ${currentPage}`
```

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:242](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/angular/bootstrap/src/components/pagination/pagination.component.ts#L242)

***

### ariaNextLabel

> **ariaNextLabel**: `undefined` \| `string`

The label for the "Next" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for next page'
```

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:300](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/angular/bootstrap/src/components/pagination/pagination.component.ts#L300)

***

### ariaPageLabel

> **ariaPageLabel**: `undefined` \| (`processPage`, `pageCount`) => `string`

Provide the label for each "Page" page button.
This is used for accessibility purposes.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Param

The current page number

#### Param

The total number of pages

#### Default Value

```ts
(processPage: number, pageCount: number) => `Page ${processPage} of ${pageCount}`
```

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:227](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/angular/bootstrap/src/components/pagination/pagination.component.ts#L227)

***

### ariaPreviousLabel

> **ariaPreviousLabel**: `undefined` \| `string`

The label for the "Previous" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for previous page'
```

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:288](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/angular/bootstrap/src/components/pagination/pagination.component.ts#L288)

***

### boundaryLinks

> **boundaryLinks**: `undefined` \| `boolean`

If `true`, the "First" and "Last" page links are shown.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:437](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/angular/bootstrap/src/components/pagination/pagination.component.ts#L437)

***

### className

> **className**: `undefined` \| `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:524](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/angular/bootstrap/src/components/pagination/pagination.component.ts#L524)

***

### collectionSize

> **collectionSize**: `undefined` \| `number`

The number of items in your paginated collection.

Note, that this is not the number of pages. Page numbers are calculated dynamically based on
`collectionSize` and `pageSize`.

Ex. if you have 100 items in your collection and displaying 20 items per page, you'll end up with 5 pages.

Whatever the collectionSize the page number is of minimum 1.

#### Default Value

`0`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:458](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/angular/bootstrap/src/components/pagination/pagination.component.ts#L458)

***

### directionLinks

> **directionLinks**: `undefined` \| `boolean`

If `true`, the "Next" and "Previous" page links are shown.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:444](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/angular/bootstrap/src/components/pagination/pagination.component.ts#L444)

***

### disabled

> **disabled**: `undefined` \| `boolean`

If `true`, pagination links will be disabled.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:430](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/angular/bootstrap/src/components/pagination/pagination.component.ts#L430)

***

### ellipsisLabel

> **ellipsisLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](../interfaces/PaginationContext.md)\>

The template to use for the ellipsis slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'…'`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:342](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/angular/bootstrap/src/components/pagination/pagination.component.ts#L342)

***

### firstPageLabel

> **firstPageLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](../interfaces/PaginationContext.md)\>

The template to use for the first slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'«'`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:353](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/angular/bootstrap/src/components/pagination/pagination.component.ts#L353)

***

### lastPageLabel

> **lastPageLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](../interfaces/PaginationContext.md)\>

The template to use for the last slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'»'`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:386](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/angular/bootstrap/src/components/pagination/pagination.component.ts#L386)

***

### nextPageLabel

> **nextPageLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](../interfaces/PaginationContext.md)\>

The template to use for the next slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'›'`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:375](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/angular/bootstrap/src/components/pagination/pagination.component.ts#L375)

***

### numberLabel

> **numberLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationNumberContext`](../interfaces/PaginationNumberContext.md)\>

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

[angular/bootstrap/src/components/pagination/pagination.component.ts:410](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/angular/bootstrap/src/components/pagination/pagination.component.ts#L410)

***

### page

> **page**: `undefined` \| `number`

The current page.

Page numbers start with `1`.

#### Default Value

`1`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:467](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/angular/bootstrap/src/components/pagination/pagination.component.ts#L467)

***

### pageChange

> **pageChange**: `EventEmitter`\<`number`\>

An event fired when the page is changed.

Event payload is the number of the newly selected page.

Page numbers start with `1`.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:517](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/angular/bootstrap/src/components/pagination/pagination.component.ts#L517)

***

### pageLink

> **pageLink**: `undefined` \| (`pageNumber`) => `string`

Factory function providing the href for a "Page" page anchor,
based on the current page number

#### Param

The index to use in the link

#### Default Value

```ts
(_page: number) => PAGE_LINK_DEFAULT
```

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:333](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/angular/bootstrap/src/components/pagination/pagination.component.ts#L333)

***

### pagesDisplay

> **pagesDisplay**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](../interfaces/PaginationContext.md)\>

The template to use for the pages slot
To use to customize the pages view
override any configuration parameters provided for this

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:395](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/angular/bootstrap/src/components/pagination/pagination.component.ts#L395)

***

### pagesFactory

> **pagesFactory**: `undefined` \| (`page`, `pageCount`) => `number`[]

pagesFactory returns a function computing the array of pages to be displayed
as number (-1 are treated as ellipsis).
Use Page slot to customize the pages view and not this

#### Param

The current page number

#### Param

The total number of pages

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

[angular/bootstrap/src/components/pagination/pagination.component.ts:504](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/angular/bootstrap/src/components/pagination/pagination.component.ts#L504)

***

### pageSize

> **pageSize**: `undefined` \| `number`

The number of items per page.

#### Remarks

min value is 1

#### Default Value

`10`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:475](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/angular/bootstrap/src/components/pagination/pagination.component.ts#L475)

***

### previousPageLabel

> **previousPageLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](../interfaces/PaginationContext.md)\>

The template to use for the previous slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'‹'`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:364](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/angular/bootstrap/src/components/pagination/pagination.component.ts#L364)

***

### size

> **size**: `undefined` \| `null` \| `"sm"` \| `"lg"`

The pagination display size.

Bootstrap currently supports small and large sizes.

#### Default Value

`null`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:484](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/angular/bootstrap/src/components/pagination/pagination.component.ts#L484)

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](../interfaces/PaginationContext.md)\>

The template to use for the structure of the pagination component
The default structure uses PaginationProps.ellipsisLabel|ellipsisLabel, PaginationProps.firstPageLabel|firstPageLabel,
PaginationProps.previousPageLabel|previousPageLabel, PaginationProps.nextPageLabel|nextPageLabel,
PaginationProps.lastPageLabel|lastPageLabel, PaginationProps.pagesDisplay|pagesDisplay,
PaginationProps.numberLabel|numberLabel,

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:421](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/angular/bootstrap/src/components/pagination/pagination.component.ts#L421)

## Accessors

### api

> `get` **api**(): `W`\[`"api"`\]

Retrieves the widget api

#### Returns

`W`\[`"api"`\]

the widget api

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`api`](BaseWidgetDirective.md#api)

#### Defined in

[angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/angular/headless/src/utils/widget.ts#L140)

***

### directives

> `get` **directives**(): `W`\[`"directives"`\]

Retrieves the widget directives

#### Returns

`W`\[`"directives"`\]

the widget directives

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`directives`](BaseWidgetDirective.md#directives)

#### Defined in

[angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/angular/headless/src/utils/widget.ts#L156)

***

### state

> `get` **state**(): [`AngularState`](../type-aliases/AngularState.md)\<`W`\>

Retrieves the widget state as an Angular [Signal](https://angular.dev/api/core/Signal)

#### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)

#### Defined in

[angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/angular/headless/src/utils/widget.ts#L148)
