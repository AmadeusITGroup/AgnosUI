Defined in: [core/src/components/pagination/pagination.ts:244](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core/src/components/pagination/pagination.ts#L244)

Represents the state of the pagination component.

## Extends

- `PaginationCommonPropsAndState`

## Properties

### activeLabel

> **activeLabel**: `string`

Defined in: [core/src/components/pagination/pagination.ts:44](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core/src/components/pagination/pagination.ts#L44)

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

Defined in: [core/src/components/pagination/pagination.ts:101](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core/src/components/pagination/pagination.ts#L101)

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

Defined in: [core/src/components/pagination/pagination.ts:56](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core/src/components/pagination/pagination.ts#L56)

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

Defined in: [core/src/components/pagination/pagination.ts:32](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core/src/components/pagination/pagination.ts#L32)

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

Defined in: [core/src/components/pagination/pagination.ts:92](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core/src/components/pagination/pagination.ts#L92)

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

### ariaLiveLabelText

> **ariaLiveLabelText**: `string`

Defined in: [core/src/components/pagination/pagination.ts:273](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core/src/components/pagination/pagination.ts#L273)

The aria-live text

***

### ariaNextLabel

> **ariaNextLabel**: `string`

Defined in: [core/src/components/pagination/pagination.ts:80](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core/src/components/pagination/pagination.ts#L80)

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

### ariaPreviousLabel

> **ariaPreviousLabel**: `string`

Defined in: [core/src/components/pagination/pagination.ts:68](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core/src/components/pagination/pagination.ts#L68)

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

Defined in: [core/src/components/pagination/pagination.ts:122](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core/src/components/pagination/pagination.ts#L122)

If `true`, the "First" and "Last" page links are shown.

#### Default Value

`false`

#### Inherited from

`PaginationCommonPropsAndState.boundaryLinks`

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`PaginationCommonPropsAndState.className`

***

### directionLinks

> **directionLinks**: `boolean`

Defined in: [core/src/components/pagination/pagination.ts:115](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core/src/components/pagination/pagination.ts#L115)

If `true`, the "Next" and "Previous" page links are shown.

#### Default Value

`true`

#### Inherited from

`PaginationCommonPropsAndState.directionLinks`

***

### directionsHrefs

> **directionsHrefs**: [`DirectionsHrefs`](DirectionsHrefs.md)

Defined in: [core/src/components/pagination/pagination.ts:270](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core/src/components/pagination/pagination.ts#L270)

The hrefs for the direction links

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/pagination/pagination.ts:108](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core/src/components/pagination/pagination.ts#L108)

If `true`, pagination links will be disabled.

#### Default Value

`false`

#### Inherited from

`PaginationCommonPropsAndState.disabled`

***

### nextDisabled

> **nextDisabled**: `boolean`

Defined in: [core/src/components/pagination/pagination.ts:260](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core/src/components/pagination/pagination.ts#L260)

true if the next link need to be disabled

***

### page

> **page**: `number`

Defined in: [core/src/components/pagination/pagination.ts:22](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core/src/components/pagination/pagination.ts#L22)

The current page.

Page numbers start with `1`.

#### Default Value

`1`

#### Inherited from

`PaginationCommonPropsAndState.page`

***

### pageCount

> **pageCount**: `number`

Defined in: [core/src/components/pagination/pagination.ts:248](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core/src/components/pagination/pagination.ts#L248)

The number of pages.

***

### pages

> **pages**: `number`[]

Defined in: [core/src/components/pagination/pagination.ts:252](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core/src/components/pagination/pagination.ts#L252)

The current pages, the number in the Array is the number of the page.

***

### pagesHrefs

> **pagesHrefs**: `string`[]

Defined in: [core/src/components/pagination/pagination.ts:267](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core/src/components/pagination/pagination.ts#L267)

The hrefs for each "Page" page link

***

### pagesLabel

> **pagesLabel**: `string`[]

Defined in: [core/src/components/pagination/pagination.ts:264](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core/src/components/pagination/pagination.ts#L264)

The label for each "Page" page link.

***

### previousDisabled

> **previousDisabled**: `boolean`

Defined in: [core/src/components/pagination/pagination.ts:256](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core/src/components/pagination/pagination.ts#L256)

true if the previous link need to be disabled
