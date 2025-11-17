Defined in: [core/src/components/pagination/pagination.ts:129](https://github.com/AmadeusITGroup/AgnosUI/blob/acc8c4d45d9393c429e54425a6d7a89f86893875/core/src/components/pagination/pagination.ts#L129)

Interface representing the properties for the Pagination component.

## Extends

- `PaginationCommonPropsAndState`

## Properties

### activeLabel

> **activeLabel**: `string`

Defined in: [core/src/components/pagination/pagination.ts:45](https://github.com/AmadeusITGroup/AgnosUI/blob/acc8c4d45d9393c429e54425a6d7a89f86893875/core/src/components/pagination/pagination.ts#L45)

The label for the "active" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'(current)'
```

#### Inherited from

`PaginationCommonPropsAndState.activeLabel`

***

### ariaEllipsisLabel

> **ariaEllipsisLabel**: `string`

Defined in: [core/src/components/pagination/pagination.ts:102](https://github.com/AmadeusITGroup/AgnosUI/blob/acc8c4d45d9393c429e54425a6d7a89f86893875/core/src/components/pagination/pagination.ts#L102)

The label for the "Ellipsis" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'Ellipsis page element'`

#### Inherited from

`PaginationCommonPropsAndState.ariaEllipsisLabel`

***

### ariaFirstLabel

> **ariaFirstLabel**: `string`

Defined in: [core/src/components/pagination/pagination.ts:57](https://github.com/AmadeusITGroup/AgnosUI/blob/acc8c4d45d9393c429e54425a6d7a89f86893875/core/src/components/pagination/pagination.ts#L57)

The label for the "First" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for first page'
```

#### Inherited from

`PaginationCommonPropsAndState.ariaFirstLabel`

***

### ariaLabel

> **ariaLabel**: `string`

Defined in: [core/src/components/pagination/pagination.ts:33](https://github.com/AmadeusITGroup/AgnosUI/blob/acc8c4d45d9393c429e54425a6d7a89f86893875/core/src/components/pagination/pagination.ts#L33)

The label for the nav element.

for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'Page navigation'`

#### Inherited from

`PaginationCommonPropsAndState.ariaLabel`

***

### ariaLastLabel

> **ariaLastLabel**: `string`

Defined in: [core/src/components/pagination/pagination.ts:93](https://github.com/AmadeusITGroup/AgnosUI/blob/acc8c4d45d9393c429e54425a6d7a89f86893875/core/src/components/pagination/pagination.ts#L93)

The label for the "Last" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for last page'
```

#### Inherited from

`PaginationCommonPropsAndState.ariaLastLabel`

***

### ariaLiveLabel()

> **ariaLiveLabel**: (`currentPage`, `pageCount`) => `string`

Defined in: [core/src/components/pagination/pagination.ts:213](https://github.com/AmadeusITGroup/AgnosUI/blob/acc8c4d45d9393c429e54425a6d7a89f86893875/core/src/components/pagination/pagination.ts#L213)

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

Defined in: [core/src/components/pagination/pagination.ts:81](https://github.com/AmadeusITGroup/AgnosUI/blob/acc8c4d45d9393c429e54425a6d7a89f86893875/core/src/components/pagination/pagination.ts#L81)

The label for the "Next" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for next page'
```

#### Inherited from

`PaginationCommonPropsAndState.ariaNextLabel`

***

### ariaPageLabel()

> **ariaPageLabel**: (`processPage`, `pageCount`) => `string`

Defined in: [core/src/components/pagination/pagination.ts:198](https://github.com/AmadeusITGroup/AgnosUI/blob/acc8c4d45d9393c429e54425a6d7a89f86893875/core/src/components/pagination/pagination.ts#L198)

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

Defined in: [core/src/components/pagination/pagination.ts:69](https://github.com/AmadeusITGroup/AgnosUI/blob/acc8c4d45d9393c429e54425a6d7a89f86893875/core/src/components/pagination/pagination.ts#L69)

The label for the "Previous" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for previous page'
```

#### Inherited from

`PaginationCommonPropsAndState.ariaPreviousLabel`

***

### boundaryLinks

> **boundaryLinks**: `boolean`

Defined in: [core/src/components/pagination/pagination.ts:123](https://github.com/AmadeusITGroup/AgnosUI/blob/acc8c4d45d9393c429e54425a6d7a89f86893875/core/src/components/pagination/pagination.ts#L123)

If `true`, the "First" and "Last" page links are shown.

#### Default Value

`false`

#### Inherited from

`PaginationCommonPropsAndState.boundaryLinks`

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/acc8c4d45d9393c429e54425a6d7a89f86893875/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`PaginationCommonPropsAndState.className`

***

### collectionSize

> **collectionSize**: `number`

Defined in: [core/src/components/pagination/pagination.ts:142](https://github.com/AmadeusITGroup/AgnosUI/blob/acc8c4d45d9393c429e54425a6d7a89f86893875/core/src/components/pagination/pagination.ts#L142)

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

Defined in: [core/src/components/pagination/pagination.ts:116](https://github.com/AmadeusITGroup/AgnosUI/blob/acc8c4d45d9393c429e54425a6d7a89f86893875/core/src/components/pagination/pagination.ts#L116)

If `true`, the "Next" and "Previous" page links are shown.

#### Default Value

`true`

#### Inherited from

`PaginationCommonPropsAndState.directionLinks`

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/pagination/pagination.ts:109](https://github.com/AmadeusITGroup/AgnosUI/blob/acc8c4d45d9393c429e54425a6d7a89f86893875/core/src/components/pagination/pagination.ts#L109)

If `true`, pagination links will be disabled.

#### Default Value

`false`

#### Inherited from

`PaginationCommonPropsAndState.disabled`

***

### onPageChange()

> **onPageChange**: (`page`) => `void`

Defined in: [core/src/components/pagination/pagination.ts:163](https://github.com/AmadeusITGroup/AgnosUI/blob/acc8c4d45d9393c429e54425a6d7a89f86893875/core/src/components/pagination/pagination.ts#L163)

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

Defined in: [core/src/components/pagination/pagination.ts:23](https://github.com/AmadeusITGroup/AgnosUI/blob/acc8c4d45d9393c429e54425a6d7a89f86893875/core/src/components/pagination/pagination.ts#L23)

The current page.

Page numbers start with `1`.

#### Default Value

`1`

#### Inherited from

`PaginationCommonPropsAndState.page`

***

### pageLink()

> **pageLink**: (`pageNumber`) => `string`

Defined in: [core/src/components/pagination/pagination.ts:225](https://github.com/AmadeusITGroup/AgnosUI/blob/acc8c4d45d9393c429e54425a6d7a89f86893875/core/src/components/pagination/pagination.ts#L225)

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

### pagesFactory()

> **pagesFactory**: (`page`, `pageCount`) => `number`[]

Defined in: [core/src/components/pagination/pagination.ts:183](https://github.com/AmadeusITGroup/AgnosUI/blob/acc8c4d45d9393c429e54425a6d7a89f86893875/core/src/components/pagination/pagination.ts#L183)

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

Defined in: [core/src/components/pagination/pagination.ts:150](https://github.com/AmadeusITGroup/AgnosUI/blob/acc8c4d45d9393c429e54425a6d7a89f86893875/core/src/components/pagination/pagination.ts#L150)

The number of items per page.

#### Remarks

min value is 1

#### Default Value

`10`
