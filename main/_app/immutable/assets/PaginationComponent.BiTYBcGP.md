The `PaginationComponent` is an Angular component that extends the `BaseWidgetDirective`
to provide a customizable pagination widget. It includes various input properties
to configure labels, templates, and behavior for accessibility and internationalization (i18n).

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`PaginationWidget`](../type-aliases/PaginationWidget.md)\>

## Properties

### activeLabel

> `readonly` **activeLabel**: `InputSignal`\<`undefined` \| `string`\>

The label for the "active" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'(current)'
```

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:261](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/pagination/pagination.component.ts#L261)

***

### ariaEllipsisLabel

> `readonly` **ariaEllipsisLabel**: `InputSignal`\<`undefined` \| `string`\>

The label for the "Ellipsis" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'Ellipsis page element'`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:318](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/pagination/pagination.component.ts#L318)

***

### ariaFirstLabel

> `readonly` **ariaFirstLabel**: `InputSignal`\<`undefined` \| `string`\>

The label for the "First" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for first page'
```

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:273](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/pagination/pagination.component.ts#L273)

***

### ariaLabel

> `readonly` **ariaLabel**: `InputSignal`\<`undefined` \| `string`\>

The label for the nav element.

for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'Page navigation'`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:249](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/pagination/pagination.component.ts#L249)

***

### ariaLastLabel

> `readonly` **ariaLastLabel**: `InputSignal`\<`undefined` \| `string`\>

The label for the "Last" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for last page'
```

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:309](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/pagination/pagination.component.ts#L309)

***

### ariaLiveLabel

> `readonly` **ariaLiveLabel**: `InputSignal`\<`undefined` \| (`currentPage`, `pageCount`) => `string`\>

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

[angular/bootstrap/src/components/pagination/pagination.component.ts:239](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/pagination/pagination.component.ts#L239)

***

### ariaNextLabel

> `readonly` **ariaNextLabel**: `InputSignal`\<`undefined` \| `string`\>

The label for the "Next" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for next page'
```

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:297](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/pagination/pagination.component.ts#L297)

***

### ariaPageLabel

> `readonly` **ariaPageLabel**: `InputSignal`\<`undefined` \| (`processPage`, `pageCount`) => `string`\>

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

[angular/bootstrap/src/components/pagination/pagination.component.ts:224](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/pagination/pagination.component.ts#L224)

***

### ariaPreviousLabel

> `readonly` **ariaPreviousLabel**: `InputSignal`\<`undefined` \| `string`\>

The label for the "Previous" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for previous page'
```

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:285](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/pagination/pagination.component.ts#L285)

***

### boundaryLinks

> `readonly` **boundaryLinks**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true`, the "First" and "Last" page links are shown.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:426](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/pagination/pagination.component.ts#L426)

***

### className

> `readonly` **className**: `InputSignal`\<`undefined` \| `string`\>

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:513](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/pagination/pagination.component.ts#L513)

***

### collectionSize

> `readonly` **collectionSize**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

The number of items in your paginated collection.

Note, that this is not the number of pages. Page numbers are calculated dynamically based on
`collectionSize` and `pageSize`.

Ex. if you have 100 items in your collection and displaying 20 items per page, you'll end up with 5 pages.

Whatever the collectionSize the page number is of minimum 1.

#### Default Value

`0`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:447](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/pagination/pagination.component.ts#L447)

***

### directionLinks

> `readonly` **directionLinks**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true`, the "Next" and "Previous" page links are shown.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:433](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/pagination/pagination.component.ts#L433)

***

### disabled

> `readonly` **disabled**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true`, pagination links will be disabled.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:419](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/pagination/pagination.component.ts#L419)

***

### ellipsisLabel

> `readonly` **ellipsisLabel**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](../interfaces/PaginationContext.md)\>\>

The template to use for the ellipsis slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'…'`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:339](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/pagination/pagination.component.ts#L339)

***

### firstPageLabel

> `readonly` **firstPageLabel**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](../interfaces/PaginationContext.md)\>\>

The template to use for the first slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'«'`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:349](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/pagination/pagination.component.ts#L349)

***

### lastPageLabel

> `readonly` **lastPageLabel**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](../interfaces/PaginationContext.md)\>\>

The template to use for the last slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'»'`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:379](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/pagination/pagination.component.ts#L379)

***

### nextPageLabel

> `readonly` **nextPageLabel**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](../interfaces/PaginationContext.md)\>\>

The template to use for the next slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'›'`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:369](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/pagination/pagination.component.ts#L369)

***

### numberLabel

> `readonly` **numberLabel**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationNumberContext`](../interfaces/PaginationNumberContext.md)\>\>

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

[angular/bootstrap/src/components/pagination/pagination.component.ts:401](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/pagination/pagination.component.ts#L401)

***

### page

> `readonly` **page**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

The current page.

Page numbers start with `1`.

#### Default Value

`1`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:456](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/pagination/pagination.component.ts#L456)

***

### pageChange

> `readonly` **pageChange**: `OutputEmitterRef`\<`number`\>

An event fired when the page is changed.

Event payload is the number of the newly selected page.

Page numbers start with `1`.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:506](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/pagination/pagination.component.ts#L506)

***

### pageLink

> `readonly` **pageLink**: `InputSignal`\<`undefined` \| (`pageNumber`) => `string`\>

Factory function providing the href for a "Page" page anchor,
based on the current page number

#### Param

The index to use in the link

#### Default Value

```ts
(_page: number) => PAGE_LINK_DEFAULT
```

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:330](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/pagination/pagination.component.ts#L330)

***

### pagesDisplay

> `readonly` **pagesDisplay**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](../interfaces/PaginationContext.md)\>\>

The template to use for the pages slot
To use to customize the pages view
override any configuration parameters provided for this

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:387](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/pagination/pagination.component.ts#L387)

***

### pagesFactory

> `readonly` **pagesFactory**: `InputSignal`\<`undefined` \| (`page`, `pageCount`) => `number`[]\>

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

[angular/bootstrap/src/components/pagination/pagination.component.ts:493](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/pagination/pagination.component.ts#L493)

***

### pageSize

> `readonly` **pageSize**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

The number of items per page.

#### Remarks

min value is 1

#### Default Value

`10`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:464](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/pagination/pagination.component.ts#L464)

***

### previousPageLabel

> `readonly` **previousPageLabel**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](../interfaces/PaginationContext.md)\>\>

The template to use for the previous slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'‹'`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:359](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/pagination/pagination.component.ts#L359)

***

### size

> `readonly` **size**: `InputSignal`\<`undefined` \| `null` \| `"sm"` \| `"lg"`\>

The pagination display size.

Bootstrap currently supports small and large sizes.

#### Default Value

`null`

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:473](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/pagination/pagination.component.ts#L473)

***

### structure

> `readonly` **structure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](../interfaces/PaginationContext.md)\>\>

The template to use for the structure of the pagination component
The default structure uses PaginationProps.ellipsisLabel|ellipsisLabel, PaginationProps.firstPageLabel|firstPageLabel,
PaginationProps.previousPageLabel|previousPageLabel, PaginationProps.nextPageLabel|nextPageLabel,
PaginationProps.lastPageLabel|lastPageLabel, PaginationProps.pagesDisplay|pagesDisplay,
PaginationProps.numberLabel|numberLabel,

#### Defined in

[angular/bootstrap/src/components/pagination/pagination.component.ts:411](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/pagination/pagination.component.ts#L411)

## Accessors

### api

#### Get Signature

> **get** **api**(): `W`\[`"api"`\]

Retrieves the widget api

##### Returns

`W`\[`"api"`\]

the widget api

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`api`](BaseWidgetDirective.md#api)

#### Defined in

[angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/headless/src/utils/widget.ts#L140)

***

### directives

#### Get Signature

> **get** **directives**(): `W`\[`"directives"`\]

Retrieves the widget directives

##### Returns

`W`\[`"directives"`\]

the widget directives

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`directives`](BaseWidgetDirective.md#directives)

#### Defined in

[angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/headless/src/utils/widget.ts#L156)

***

### state

#### Get Signature

> **get** **state**(): [`AngularState`](../type-aliases/AngularState.md)\<`W`\>

Retrieves the widget state. Each property of the state is exposed through an Angular [Signal](https://angular.dev/api/core/Signal)

##### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)

#### Defined in

[angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/headless/src/utils/widget.ts#L148)
