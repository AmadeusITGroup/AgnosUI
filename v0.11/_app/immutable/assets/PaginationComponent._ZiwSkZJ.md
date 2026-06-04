Defined in: [angular/bootstrap/src/components/pagination/pagination.component.ts:197](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/pagination/pagination.component.ts#L197)

The `PaginationComponent` is an Angular component that extends the `BaseWidgetDirective`
to provide a customizable pagination widget. It includes various input properties
to configure labels, templates, and behavior for accessibility and internationalization (i18n).

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`PaginationWidget`](../type-aliases/PaginationWidget.md)\>

## Properties

### activeLabel

> `readonly` **activeLabel**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/pagination/pagination.component.ts:248](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/pagination/pagination.component.ts#L248)

The label for the "active" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'(current)'
```

***

### ariaEllipsisLabel

> `readonly` **ariaEllipsisLabel**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/pagination/pagination.component.ts:305](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/pagination/pagination.component.ts#L305)

The label for the "Ellipsis" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'Ellipsis page element'`

***

### ariaFirstLabel

> `readonly` **ariaFirstLabel**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/pagination/pagination.component.ts:260](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/pagination/pagination.component.ts#L260)

The label for the "First" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for first page'
```

***

### ariaLabel

> `readonly` **ariaLabel**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/pagination/pagination.component.ts:236](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/pagination/pagination.component.ts#L236)

The label for the nav element.

for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'Page navigation'`

***

### ariaLastLabel

> `readonly` **ariaLastLabel**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/pagination/pagination.component.ts:296](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/pagination/pagination.component.ts#L296)

The label for the "Last" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for last page'
```

***

### ariaLiveLabel

> `readonly` **ariaLiveLabel**: `InputSignal`\<((`currentPage`, `pageCount`) => `string`) \| `undefined`\>

Defined in: [angular/bootstrap/src/components/pagination/pagination.component.ts:226](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/pagination/pagination.component.ts#L226)

Provide the label for the aria-live element
This is used for accessibility purposes.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Param

**currentPage**

The current page number

#### Param

**pageCount**

The total number of pages

#### Default Value

```ts
(currentPage: number) => `Current page is ${currentPage}`
```

***

### ariaNextLabel

> `readonly` **ariaNextLabel**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/pagination/pagination.component.ts:284](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/pagination/pagination.component.ts#L284)

The label for the "Next" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for next page'
```

***

### ariaPageLabel

> `readonly` **ariaPageLabel**: `InputSignal`\<((`processPage`, `pageCount`) => `string`) \| `undefined`\>

Defined in: [angular/bootstrap/src/components/pagination/pagination.component.ts:211](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/pagination/pagination.component.ts#L211)

Provide the label for each "Page" page button.
This is used for accessibility purposes.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Param

**processPage**

The current page number

#### Param

**pageCount**

The total number of pages

#### Default Value

```ts
(processPage: number, pageCount: number) => `Page ${processPage} of ${pageCount}`
```

***

### ariaPreviousLabel

> `readonly` **ariaPreviousLabel**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/pagination/pagination.component.ts:272](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/pagination/pagination.component.ts#L272)

The label for the "Previous" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for previous page'
```

***

### boundaryLinks

> `readonly` **boundaryLinks**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/pagination/pagination.component.ts:413](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/pagination/pagination.component.ts#L413)

If `true`, the "First" and "Last" page links are shown.

#### Default Value

`false`

***

### className

> `readonly` **className**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/pagination/pagination.component.ts:500](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/pagination/pagination.component.ts#L500)

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### collectionSize

> `readonly` **collectionSize**: `InputSignalWithTransform`\<`number` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/pagination/pagination.component.ts:434](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/pagination/pagination.component.ts#L434)

The number of items in your paginated collection.

Note, that this is not the number of pages. Page numbers are calculated dynamically based on
`collectionSize` and `pageSize`.

Ex. if you have 100 items in your collection and displaying 20 items per page, you'll end up with 5 pages.

Whatever the collectionSize the page number is of minimum 1.

#### Default Value

`0`

***

### directionLinks

> `readonly` **directionLinks**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/pagination/pagination.component.ts:420](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/pagination/pagination.component.ts#L420)

If `true`, the "Next" and "Previous" page links are shown.

#### Default Value

`true`

***

### disabled

> `readonly` **disabled**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/pagination/pagination.component.ts:406](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/pagination/pagination.component.ts#L406)

If `true`, pagination links will be disabled.

#### Default Value

`false`

***

### ellipsisLabel

> `readonly` **ellipsisLabel**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](../interfaces/PaginationContext.md)\>\>

Defined in: [angular/bootstrap/src/components/pagination/pagination.component.ts:326](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/pagination/pagination.component.ts#L326)

The template to use for the ellipsis slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'…'`

***

### firstPageLabel

> `readonly` **firstPageLabel**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](../interfaces/PaginationContext.md)\>\>

Defined in: [angular/bootstrap/src/components/pagination/pagination.component.ts:336](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/pagination/pagination.component.ts#L336)

The template to use for the first slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'«'`

***

### lastPageLabel

> `readonly` **lastPageLabel**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](../interfaces/PaginationContext.md)\>\>

Defined in: [angular/bootstrap/src/components/pagination/pagination.component.ts:366](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/pagination/pagination.component.ts#L366)

The template to use for the last slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'»'`

***

### nextPageLabel

> `readonly` **nextPageLabel**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](../interfaces/PaginationContext.md)\>\>

Defined in: [angular/bootstrap/src/components/pagination/pagination.component.ts:356](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/pagination/pagination.component.ts#L356)

The template to use for the next slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'›'`

***

### numberLabel

> `readonly` **numberLabel**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationNumberContext`](../interfaces/PaginationNumberContext.md)\>\>

Defined in: [angular/bootstrap/src/components/pagination/pagination.component.ts:388](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/pagination/pagination.component.ts#L388)

The template to use for the number slot
override any configuration parameters provided for this
for I18n, we suggest to use the global configuration

#### Param

**displayedPage**

The current page number

#### Default Value

```ts
({displayedPage}: PaginationNumberContext) => `${displayedPage}`
```

***

### page

> `readonly` **page**: `InputSignalWithTransform`\<`number` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/pagination/pagination.component.ts:443](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/pagination/pagination.component.ts#L443)

The current page.

Page numbers start with `1`.

#### Default Value

`1`

***

### pageChange

> `readonly` **pageChange**: `OutputEmitterRef`\<`number`\>

Defined in: [angular/bootstrap/src/components/pagination/pagination.component.ts:493](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/pagination/pagination.component.ts#L493)

An event fired when the page is changed.

Event payload is the number of the newly selected page.

Page numbers start with `1`.

#### Default Value

```ts
() => {}
```

***

### pageLink

> `readonly` **pageLink**: `InputSignal`\<((`pageNumber`) => `string`) \| `undefined`\>

Defined in: [angular/bootstrap/src/components/pagination/pagination.component.ts:317](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/pagination/pagination.component.ts#L317)

Factory function providing the href for a "Page" page anchor,
based on the current page number

#### Param

**pageNumber**

The index to use in the link

#### Default Value

```ts
(_page: number) => PAGE_LINK_DEFAULT
```

***

### pagesDisplay

> `readonly` **pagesDisplay**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](../interfaces/PaginationContext.md)\>\>

Defined in: [angular/bootstrap/src/components/pagination/pagination.component.ts:374](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/pagination/pagination.component.ts#L374)

The template to use for the pages slot
To use to customize the pages view
override any configuration parameters provided for this

***

### pagesFactory

> `readonly` **pagesFactory**: `InputSignal`\<((`page`, `pageCount`) => `number`[]) \| `undefined`\>

Defined in: [angular/bootstrap/src/components/pagination/pagination.component.ts:480](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/pagination/pagination.component.ts#L480)

pagesFactory returns a function computing the array of pages to be displayed
as number (-1 are treated as ellipsis).
Use Page slot to customize the pages view and not this

#### Param

**page**

The current page number

#### Param

**pageCount**

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

***

### pageSize

> `readonly` **pageSize**: `InputSignalWithTransform`\<`number` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/pagination/pagination.component.ts:451](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/pagination/pagination.component.ts#L451)

The number of items per page.

#### Remarks

min value is 1

#### Default Value

`10`

***

### previousPageLabel

> `readonly` **previousPageLabel**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](../interfaces/PaginationContext.md)\>\>

Defined in: [angular/bootstrap/src/components/pagination/pagination.component.ts:346](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/pagination/pagination.component.ts#L346)

The template to use for the previous slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'‹'`

***

### size

> `readonly` **size**: `InputSignal`\<`"sm"` \| `"lg"` \| `null` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/pagination/pagination.component.ts:460](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/pagination/pagination.component.ts#L460)

The pagination display size.

Bootstrap currently supports small and large sizes.

#### Default Value

`null`

***

### structure

> `readonly` **structure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](../interfaces/PaginationContext.md)\>\>

Defined in: [angular/bootstrap/src/components/pagination/pagination.component.ts:398](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/pagination/pagination.component.ts#L398)

The template to use for the structure of the pagination component
The default structure uses PaginationProps.ellipsisLabel\|ellipsisLabel, PaginationProps.firstPageLabel\|firstPageLabel,
PaginationProps.previousPageLabel\|previousPageLabel, PaginationProps.nextPageLabel\|nextPageLabel,
PaginationProps.lastPageLabel\|lastPageLabel, PaginationProps.pagesDisplay\|pagesDisplay,
PaginationProps.numberLabel\|numberLabel,

## Accessors

### api

#### Get Signature

> **get** **api**(): `W`\[`"api"`\]

Defined in: [angular/headless/src/utils/widget.ts:144](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/headless/src/utils/widget.ts#L144)

Retrieves the widget api

##### Returns

`W`\[`"api"`\]

the widget api

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`api`](BaseWidgetDirective.md#api)

***

### directives

#### Get Signature

> **get** **directives**(): `W`\[`"directives"`\]

Defined in: [angular/headless/src/utils/widget.ts:160](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/headless/src/utils/widget.ts#L160)

Retrieves the widget directives

##### Returns

`W`\[`"directives"`\]

the widget directives

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`directives`](BaseWidgetDirective.md#directives)

***

### state

#### Get Signature

> **get** **state**(): [`AngularState`](../type-aliases/AngularState.md)\<`W`\>

Defined in: [angular/headless/src/utils/widget.ts:152](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/headless/src/utils/widget.ts#L152)

Retrieves the widget state. Each property of the state is exposed through an Angular [Signal](https://angular.dev/api/core/Signal)

##### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)
