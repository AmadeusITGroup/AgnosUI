## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`PaginationWidget`](../type-aliases/PaginationWidget.md)\>

## Constructors

### new PaginationComponent()

> **new PaginationComponent**(): [`PaginationComponent`](PaginationComponent.md)

#### Returns

[`PaginationComponent`](PaginationComponent.md)

#### Overrides

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`constructor`](BaseWidgetDirective.md#constructors)

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:513](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L513)

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

[angular/bootstrap/src/components/pagination/pagination.component.ts:251](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L251)

***

### ariaEllipsisLabel

> **ariaEllipsisLabel**: `undefined` \| `string`

The label for the "Ellipsis" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'Ellipsis page element'`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:308](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L308)

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

[angular/bootstrap/src/components/pagination/pagination.component.ts:263](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L263)

***

### ariaLabel

> **ariaLabel**: `undefined` \| `string`

The label for the nav element.

for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'Page navigation'`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:239](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L239)

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

[angular/bootstrap/src/components/pagination/pagination.component.ts:299](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L299)

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

[angular/bootstrap/src/components/pagination/pagination.component.ts:229](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L229)

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

[angular/bootstrap/src/components/pagination/pagination.component.ts:287](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L287)

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

[angular/bootstrap/src/components/pagination/pagination.component.ts:214](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L214)

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

[angular/bootstrap/src/components/pagination/pagination.component.ts:275](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L275)

***

### boundaryLinks

> **boundaryLinks**: `undefined` \| `boolean`

If `true`, the "First" and "Last" page links are shown.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:424](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L424)

***

### className

> **className**: `undefined` \| `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:511](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L511)

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

[angular/bootstrap/src/components/pagination/pagination.component.ts:445](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L445)

***

### directionLinks

> **directionLinks**: `undefined` \| `boolean`

If `true`, the "Next" and "Previous" page links are shown.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:431](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L431)

***

### disabled

> **disabled**: `undefined` \| `boolean`

If `true`, pagination links will be disabled.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:417](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L417)

***

### ellipsisLabel

> **ellipsisLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](../interfaces/PaginationContext.md)\>

The template to use for the ellipsis slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'…'`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:329](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L329)

***

### firstPageLabel

> **firstPageLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](../interfaces/PaginationContext.md)\>

The template to use for the first slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'«'`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:340](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L340)

***

### lastPageLabel

> **lastPageLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](../interfaces/PaginationContext.md)\>

The template to use for the last slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'»'`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:373](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L373)

***

### nextPageLabel

> **nextPageLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](../interfaces/PaginationContext.md)\>

The template to use for the next slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'›'`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:362](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L362)

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

[angular/bootstrap/src/components/pagination/pagination.component.ts:397](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L397)

***

### page

> **page**: `undefined` \| `number`

The current page.

Page numbers start with `1`.

#### Default Value

`1`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:454](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L454)

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

[angular/bootstrap/src/components/pagination/pagination.component.ts:504](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L504)

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

[angular/bootstrap/src/components/pagination/pagination.component.ts:320](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L320)

***

### pagesDisplay

> **pagesDisplay**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](../interfaces/PaginationContext.md)\>

The template to use for the pages slot
To use to customize the pages view
override any configuration parameters provided for this

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:382](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L382)

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

[angular/bootstrap/src/components/pagination/pagination.component.ts:491](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L491)

***

### pageSize

> **pageSize**: `undefined` \| `number`

The number of items per page.

#### Remarks

min value is 1

#### Default Value

`10`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:462](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L462)

***

### previousPageLabel

> **previousPageLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](../interfaces/PaginationContext.md)\>

The template to use for the previous slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'‹'`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:351](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L351)

***

### size

> **size**: `undefined` \| `null` \| `"sm"` \| `"lg"`

The pagination display size.

Bootstrap currently supports small and large sizes.

#### Default Value

`null`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:471](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L471)

***

### slotEllipsisFromContent

> **slotEllipsisFromContent**: `undefined` \| [`PaginationEllipsisDirective`](PaginationEllipsisDirective.md)

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:331](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L331)

***

### slotFirstFromContent

> **slotFirstFromContent**: `undefined` \| [`PaginationFirstDirective`](PaginationFirstDirective.md)

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:342](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L342)

***

### slotLastFromContent

> **slotLastFromContent**: `undefined` \| [`PaginationLastDirective`](PaginationLastDirective.md)

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:375](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L375)

***

### slotNextFromContent

> **slotNextFromContent**: `undefined` \| [`PaginationNextDirective`](PaginationNextDirective.md)

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:364](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L364)

***

### slotNumberLabelFromContent

> **slotNumberLabelFromContent**: `undefined` \| [`PaginationNumberDirective`](PaginationNumberDirective.md)

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:399](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L399)

***

### slotPagesFromContent

> **slotPagesFromContent**: `undefined` \| [`PaginationPagesDirective`](PaginationPagesDirective.md)

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:384](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L384)

***

### slotPreviousFromContent

> **slotPreviousFromContent**: `undefined` \| [`PaginationPreviousDirective`](PaginationPreviousDirective.md)

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:353](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L353)

***

### slotStructureFromContent

> **slotStructureFromContent**: `undefined` \| [`PaginationStructureDirective`](PaginationStructureDirective.md)

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:410](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L410)

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](../interfaces/PaginationContext.md)\>

The template to use for the structure of the pagination component
The default structure uses PaginationProps.ellipsisLabel|ellipsisLabel, PaginationProps.firstPageLabel|firstPageLabel,
PaginationProps.previousPageLabel|previousPageLabel, PaginationProps.nextPageLabel|nextPageLabel,
PaginationProps.lastPageLabel|lastPageLabel, PaginationProps.pagesDisplay|pagesDisplay,
PaginationProps.numberLabel|numberLabel,

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:408](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/bootstrap/src/components/pagination/pagination.component.ts#L408)

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

[angular/headless/src/utils/widget.ts:134](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/headless/src/utils/widget.ts#L134)

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

[angular/headless/src/utils/widget.ts:150](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/headless/src/utils/widget.ts#L150)

***

### state

> `get` **state**(): [`AngularState`](../type-aliases/AngularState.md)\<`W`\>

Retrieves the widget state as an Angular Signal

#### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)

#### Defined in

[angular/headless/src/utils/widget.ts:142](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/headless/src/utils/widget.ts#L142)

## Methods

### ngAfterContentChecked()

> **ngAfterContentChecked**(): `void`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngAfterContentChecked`](BaseWidgetDirective.md#ngaftercontentchecked)

#### Defined in

[angular/headless/src/utils/widget.ts:165](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/headless/src/utils/widget.ts#L165)

***

### ngOnChanges()

> **ngOnChanges**(`changes`): `void`

#### Parameters

• **changes**: `SimpleChanges`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngOnChanges`](BaseWidgetDirective.md#ngonchanges)

#### Defined in

[angular/headless/src/utils/widget.ts:155](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/headless/src/utils/widget.ts#L155)

***

### ngOnInit()

> **ngOnInit**(): `void`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngOnInit`](BaseWidgetDirective.md#ngoninit)

#### Defined in

[angular/headless/src/utils/widget.ts:160](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/angular/headless/src/utils/widget.ts#L160)
