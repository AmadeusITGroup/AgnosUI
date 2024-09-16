## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`PaginationWidget`](../type-aliases/PaginationWidget.md)\>

## Implements

- [`AfterContentChecked`](https://angular.dev/api/core/AfterContentChecked)

## Constructors

### new PaginationComponent()

> **new PaginationComponent**(): [`PaginationComponent`](PaginationComponent.md)

#### Returns

[`PaginationComponent`](PaginationComponent.md)

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`constructor`](BaseWidgetDirective.md#constructors)

## Properties

### \_widget

> `readonly` **\_widget**: [`AngularWidget`](../type-aliases/AngularWidget.md)\<[`PaginationWidget`](../type-aliases/PaginationWidget.md)\>

#### Overrides

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`_widget`](BaseWidgetDirective.md#_widget)

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:328](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L328)

***

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

[angular/bootstrap/src/components/pagination/pagination.component.ts:257](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L257)

***

### ariaEllipsisLabel

> **ariaEllipsisLabel**: `undefined` \| `string`

The label for the "Ellipsis" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'Ellipsis page element'`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:314](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L314)

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

[angular/bootstrap/src/components/pagination/pagination.component.ts:269](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L269)

***

### ariaLabel

> **ariaLabel**: `undefined` \| `string`

The label for the nav element.

for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'Page navigation'`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:245](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L245)

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

[angular/bootstrap/src/components/pagination/pagination.component.ts:305](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L305)

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

[angular/bootstrap/src/components/pagination/pagination.component.ts:235](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L235)

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

[angular/bootstrap/src/components/pagination/pagination.component.ts:293](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L293)

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

[angular/bootstrap/src/components/pagination/pagination.component.ts:220](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L220)

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

[angular/bootstrap/src/components/pagination/pagination.component.ts:281](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L281)

***

### boundaryLinks

> **boundaryLinks**: `undefined` \| `boolean`

If `true`, the "First" and "Last" page links are shown.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:439](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L439)

***

### className

> **className**: `undefined` \| `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:526](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L526)

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

[angular/bootstrap/src/components/pagination/pagination.component.ts:460](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L460)

***

### directionLinks

> **directionLinks**: `undefined` \| `boolean`

If `true`, the "Next" and "Previous" page links are shown.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:446](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L446)

***

### disabled

> **disabled**: `undefined` \| `boolean`

If `true`, pagination links will be disabled.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:432](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L432)

***

### ellipsisLabel

> **ellipsisLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](../type-aliases/PaginationContext.md)\>

The template to use for the ellipsis slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'…'`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:344](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L344)

***

### firstPageLabel

> **firstPageLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](../type-aliases/PaginationContext.md)\>

The template to use for the first slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'«'`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:355](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L355)

***

### lastPageLabel

> **lastPageLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](../type-aliases/PaginationContext.md)\>

The template to use for the last slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'»'`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:388](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L388)

***

### nextPageLabel

> **nextPageLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](../type-aliases/PaginationContext.md)\>

The template to use for the next slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'›'`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:377](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L377)

***

### numberLabel

> **numberLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationNumberContext`](../type-aliases/PaginationNumberContext.md)\>

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

[angular/bootstrap/src/components/pagination/pagination.component.ts:412](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L412)

***

### page

> **page**: `undefined` \| `number`

The current page.

Page numbers start with `1`.

#### Default Value

`1`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:469](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L469)

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

[angular/bootstrap/src/components/pagination/pagination.component.ts:519](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L519)

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

[angular/bootstrap/src/components/pagination/pagination.component.ts:326](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L326)

***

### pagesDisplay

> **pagesDisplay**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](../type-aliases/PaginationContext.md)\>

The template to use for the pages slot
To use to customize the pages view
override any configuration parameters provided for this

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:397](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L397)

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

[angular/bootstrap/src/components/pagination/pagination.component.ts:506](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L506)

***

### pageSize

> **pageSize**: `undefined` \| `number`

The number of items per page.

#### Remarks

min value is 1

#### Default Value

`10`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:477](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L477)

***

### previousPageLabel

> **previousPageLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](../type-aliases/PaginationContext.md)\>

The template to use for the previous slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'‹'`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:366](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L366)

***

### size

> **size**: `undefined` \| `null` \| `"sm"` \| `"lg"`

The pagination display size.

Bootstrap currently supports small and large sizes.

#### Default Value

`null`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:486](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L486)

***

### slotEllipsisFromContent

> **slotEllipsisFromContent**: `undefined` \| [`PaginationEllipsisDirective`](PaginationEllipsisDirective.md)

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:346](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L346)

***

### slotFirstFromContent

> **slotFirstFromContent**: `undefined` \| [`PaginationFirstDirective`](PaginationFirstDirective.md)

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:357](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L357)

***

### slotLastFromContent

> **slotLastFromContent**: `undefined` \| [`PaginationLastDirective`](PaginationLastDirective.md)

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:390](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L390)

***

### slotNextFromContent

> **slotNextFromContent**: `undefined` \| [`PaginationNextDirective`](PaginationNextDirective.md)

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:379](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L379)

***

### slotNumberLabelFromContent

> **slotNumberLabelFromContent**: `undefined` \| [`PaginationNumberDirective`](PaginationNumberDirective.md)

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:414](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L414)

***

### slotPagesFromContent

> **slotPagesFromContent**: `undefined` \| [`PaginationPagesDirective`](PaginationPagesDirective.md)

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:399](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L399)

***

### slotPreviousFromContent

> **slotPreviousFromContent**: `undefined` \| [`PaginationPreviousDirective`](PaginationPreviousDirective.md)

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:368](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L368)

***

### slotStructureFromContent

> **slotStructureFromContent**: `undefined` \| [`PaginationStructureDirective`](PaginationStructureDirective.md)

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:425](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L425)

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](../type-aliases/PaginationContext.md)\>

The template to use for the structure of the pagination component
The default structure uses [ellipsisLabel](../interfaces/PaginationProps.md#ellipsislabel), [firstPageLabel](../interfaces/PaginationProps.md#firstpagelabel),
[previousPageLabel](../interfaces/PaginationProps.md#previouspagelabel), [nextPageLabel](../interfaces/PaginationProps.md#nextpagelabel),
[lastPageLabel](../interfaces/PaginationProps.md#lastpagelabel), [pagesDisplay](../interfaces/PaginationProps.md#pagesdisplay),
[numberLabel](../interfaces/PaginationProps.md#numberlabel),

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:423](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L423)

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

[angular/headless/src/utils/widget.ts:123](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/headless/src/utils/widget.ts#L123)

***

### state

> `get` **state**(): [`Signal`](https://angular.dev/api/core/Signal)\<[`WidgetState`](../type-aliases/WidgetState.md)\<`W`\>\>

Retrieves the widget state as an Angular Signal

#### Returns

[`Signal`](https://angular.dev/api/core/Signal)\<[`WidgetState`](../type-aliases/WidgetState.md)\<`W`\>\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)

#### Defined in

[angular/headless/src/utils/widget.ts:131](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/headless/src/utils/widget.ts#L131)

***

### widget

> `get` **widget**(): [`ContextWidget`](../type-aliases/ContextWidget.md)\<`W`\>

Retrieves the widget

#### Returns

[`ContextWidget`](../type-aliases/ContextWidget.md)\<`W`\>

the widget

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`widget`](BaseWidgetDirective.md#widget)

#### Defined in

[angular/headless/src/utils/widget.ts:139](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/headless/src/utils/widget.ts#L139)

## Methods

### ngAfterContentChecked()

> **ngAfterContentChecked**(): `void`

A callback method that is invoked immediately after the
default change detector has completed checking all of the directive's
content.

#### Returns

`void`

#### Implementation of

`AfterContentChecked.ngAfterContentChecked`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:528](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/bootstrap/src/components/pagination/pagination.component.ts#L528)

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

[angular/headless/src/utils/widget.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/headless/src/utils/widget.ts#L144)

***

### ngOnInit()

> **ngOnInit**(): `void`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngOnInit`](BaseWidgetDirective.md#ngoninit)

#### Defined in

[angular/headless/src/utils/widget.ts:149](https://github.com/AmadeusITGroup/AgnosUI/blob/b3ec3407f9e167d821b69f2fd0aa4699e71e1376/angular/headless/src/utils/widget.ts#L149)
