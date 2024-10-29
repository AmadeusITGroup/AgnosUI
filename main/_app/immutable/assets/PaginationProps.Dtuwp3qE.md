## Extends

- `PaginationCommonPropsAndState`

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

`PaginationCommonPropsAndState.activeLabel`

#### Defined in

[core/src/components/pagination/pagination.ts:41](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/core/src/components/pagination/pagination.ts#L41)

***

### ariaEllipsisLabel

> **ariaEllipsisLabel**: `string`

The label for the "Ellipsis" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'Ellipsis page element'`

#### Inherited from

`PaginationCommonPropsAndState.ariaEllipsisLabel`

#### Defined in

[core/src/components/pagination/pagination.ts:98](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/core/src/components/pagination/pagination.ts#L98)

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

`PaginationCommonPropsAndState.ariaFirstLabel`

#### Defined in

[core/src/components/pagination/pagination.ts:53](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/core/src/components/pagination/pagination.ts#L53)

***

### ariaLabel

> **ariaLabel**: `string`

The label for the nav element.

for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'Page navigation'`

#### Inherited from

`PaginationCommonPropsAndState.ariaLabel`

#### Defined in

[core/src/components/pagination/pagination.ts:29](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/core/src/components/pagination/pagination.ts#L29)

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

`PaginationCommonPropsAndState.ariaLastLabel`

#### Defined in

[core/src/components/pagination/pagination.ts:89](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/core/src/components/pagination/pagination.ts#L89)

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

[core/src/components/pagination/pagination.ts:206](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/core/src/components/pagination/pagination.ts#L206)

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

`PaginationCommonPropsAndState.ariaNextLabel`

#### Defined in

[core/src/components/pagination/pagination.ts:77](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/core/src/components/pagination/pagination.ts#L77)

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

[core/src/components/pagination/pagination.ts:191](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/core/src/components/pagination/pagination.ts#L191)

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

`PaginationCommonPropsAndState.ariaPreviousLabel`

#### Defined in

[core/src/components/pagination/pagination.ts:65](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/core/src/components/pagination/pagination.ts#L65)

***

### boundaryLinks

> **boundaryLinks**: `boolean`

If `true`, the "First" and "Last" page links are shown.

#### Default Value

`false`

#### Inherited from

`PaginationCommonPropsAndState.boundaryLinks`

#### Defined in

[core/src/components/pagination/pagination.ts:119](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/core/src/components/pagination/pagination.ts#L119)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`PaginationCommonPropsAndState.className`

#### Defined in

[core/src/components/commonProps.ts:7](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/core/src/components/commonProps.ts#L7)

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

[core/src/components/pagination/pagination.ts:135](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/core/src/components/pagination/pagination.ts#L135)

***

### directionLinks

> **directionLinks**: `boolean`

If `true`, the "Next" and "Previous" page links are shown.

#### Default Value

`true`

#### Inherited from

`PaginationCommonPropsAndState.directionLinks`

#### Defined in

[core/src/components/pagination/pagination.ts:112](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/core/src/components/pagination/pagination.ts#L112)

***

### disabled

> **disabled**: `boolean`

If `true`, pagination links will be disabled.

#### Default Value

`false`

#### Inherited from

`PaginationCommonPropsAndState.disabled`

#### Defined in

[core/src/components/pagination/pagination.ts:105](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/core/src/components/pagination/pagination.ts#L105)

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

[core/src/components/pagination/pagination.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/core/src/components/pagination/pagination.ts#L156)

***

### page

> **page**: `number`

The current page.

Page numbers start with `1`.

#### Default Value

`1`

#### Inherited from

`PaginationCommonPropsAndState.page`

#### Defined in

[core/src/components/pagination/pagination.ts:19](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/core/src/components/pagination/pagination.ts#L19)

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

[core/src/components/pagination/pagination.ts:218](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/core/src/components/pagination/pagination.ts#L218)

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

[core/src/components/pagination/pagination.ts:176](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/core/src/components/pagination/pagination.ts#L176)

***

### pageSize

> **pageSize**: `number`

The number of items per page.

#### Remarks

min value is 1

#### Default Value

`10`

#### Defined in

[core/src/components/pagination/pagination.ts:143](https://github.com/AmadeusITGroup/AgnosUI/blob/648c8c634470b34ea3e66498b9c46c6474145d54/core/src/components/pagination/pagination.ts#L143)
