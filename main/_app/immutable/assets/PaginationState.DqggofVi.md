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

[core/src/components/pagination/pagination.ts:41](https://github.com/AmadeusITGroup/AgnosUI/blob/fd3cda664e317b3d87431e4308007c1d0f784bfe/core/src/components/pagination/pagination.ts#L41)

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

[core/src/components/pagination/pagination.ts:98](https://github.com/AmadeusITGroup/AgnosUI/blob/fd3cda664e317b3d87431e4308007c1d0f784bfe/core/src/components/pagination/pagination.ts#L98)

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

[core/src/components/pagination/pagination.ts:53](https://github.com/AmadeusITGroup/AgnosUI/blob/fd3cda664e317b3d87431e4308007c1d0f784bfe/core/src/components/pagination/pagination.ts#L53)

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

[core/src/components/pagination/pagination.ts:29](https://github.com/AmadeusITGroup/AgnosUI/blob/fd3cda664e317b3d87431e4308007c1d0f784bfe/core/src/components/pagination/pagination.ts#L29)

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

[core/src/components/pagination/pagination.ts:89](https://github.com/AmadeusITGroup/AgnosUI/blob/fd3cda664e317b3d87431e4308007c1d0f784bfe/core/src/components/pagination/pagination.ts#L89)

***

### ariaLiveLabelText

> **ariaLiveLabelText**: `string`

The aria-live text

#### Defined in

[core/src/components/pagination/pagination.ts:261](https://github.com/AmadeusITGroup/AgnosUI/blob/fd3cda664e317b3d87431e4308007c1d0f784bfe/core/src/components/pagination/pagination.ts#L261)

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

[core/src/components/pagination/pagination.ts:77](https://github.com/AmadeusITGroup/AgnosUI/blob/fd3cda664e317b3d87431e4308007c1d0f784bfe/core/src/components/pagination/pagination.ts#L77)

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

[core/src/components/pagination/pagination.ts:65](https://github.com/AmadeusITGroup/AgnosUI/blob/fd3cda664e317b3d87431e4308007c1d0f784bfe/core/src/components/pagination/pagination.ts#L65)

***

### boundaryLinks

> **boundaryLinks**: `boolean`

If `true`, the "First" and "Last" page links are shown.

#### Default Value

`false`

#### Inherited from

`PaginationCommonPropsAndState.boundaryLinks`

#### Defined in

[core/src/components/pagination/pagination.ts:119](https://github.com/AmadeusITGroup/AgnosUI/blob/fd3cda664e317b3d87431e4308007c1d0f784bfe/core/src/components/pagination/pagination.ts#L119)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`PaginationCommonPropsAndState.className`

#### Defined in

[core/src/components/commonProps.ts:7](https://github.com/AmadeusITGroup/AgnosUI/blob/fd3cda664e317b3d87431e4308007c1d0f784bfe/core/src/components/commonProps.ts#L7)

***

### directionLinks

> **directionLinks**: `boolean`

If `true`, the "Next" and "Previous" page links are shown.

#### Default Value

`true`

#### Inherited from

`PaginationCommonPropsAndState.directionLinks`

#### Defined in

[core/src/components/pagination/pagination.ts:112](https://github.com/AmadeusITGroup/AgnosUI/blob/fd3cda664e317b3d87431e4308007c1d0f784bfe/core/src/components/pagination/pagination.ts#L112)

***

### directionsHrefs

> **directionsHrefs**: [`DirectionsHrefs`](DirectionsHrefs.md)

The hrefs for the direction links

#### Defined in

[core/src/components/pagination/pagination.ts:258](https://github.com/AmadeusITGroup/AgnosUI/blob/fd3cda664e317b3d87431e4308007c1d0f784bfe/core/src/components/pagination/pagination.ts#L258)

***

### disabled

> **disabled**: `boolean`

If `true`, pagination links will be disabled.

#### Default Value

`false`

#### Inherited from

`PaginationCommonPropsAndState.disabled`

#### Defined in

[core/src/components/pagination/pagination.ts:105](https://github.com/AmadeusITGroup/AgnosUI/blob/fd3cda664e317b3d87431e4308007c1d0f784bfe/core/src/components/pagination/pagination.ts#L105)

***

### nextDisabled

> **nextDisabled**: `boolean`

true if the next link need to be disabled

#### Defined in

[core/src/components/pagination/pagination.ts:248](https://github.com/AmadeusITGroup/AgnosUI/blob/fd3cda664e317b3d87431e4308007c1d0f784bfe/core/src/components/pagination/pagination.ts#L248)

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

[core/src/components/pagination/pagination.ts:19](https://github.com/AmadeusITGroup/AgnosUI/blob/fd3cda664e317b3d87431e4308007c1d0f784bfe/core/src/components/pagination/pagination.ts#L19)

***

### pageCount

> **pageCount**: `number`

The number of pages.

#### Defined in

[core/src/components/pagination/pagination.ts:236](https://github.com/AmadeusITGroup/AgnosUI/blob/fd3cda664e317b3d87431e4308007c1d0f784bfe/core/src/components/pagination/pagination.ts#L236)

***

### pages

> **pages**: `number`[]

The current pages, the number in the Array is the number of the page.

#### Defined in

[core/src/components/pagination/pagination.ts:240](https://github.com/AmadeusITGroup/AgnosUI/blob/fd3cda664e317b3d87431e4308007c1d0f784bfe/core/src/components/pagination/pagination.ts#L240)

***

### pagesHrefs

> **pagesHrefs**: `string`[]

The hrefs for each "Page" page link

#### Defined in

[core/src/components/pagination/pagination.ts:255](https://github.com/AmadeusITGroup/AgnosUI/blob/fd3cda664e317b3d87431e4308007c1d0f784bfe/core/src/components/pagination/pagination.ts#L255)

***

### pagesLabel

> **pagesLabel**: `string`[]

The label for each "Page" page link.

#### Defined in

[core/src/components/pagination/pagination.ts:252](https://github.com/AmadeusITGroup/AgnosUI/blob/fd3cda664e317b3d87431e4308007c1d0f784bfe/core/src/components/pagination/pagination.ts#L252)

***

### previousDisabled

> **previousDisabled**: `boolean`

true if the previous link need to be disabled

#### Defined in

[core/src/components/pagination/pagination.ts:244](https://github.com/AmadeusITGroup/AgnosUI/blob/fd3cda664e317b3d87431e4308007c1d0f784bfe/core/src/components/pagination/pagination.ts#L244)
