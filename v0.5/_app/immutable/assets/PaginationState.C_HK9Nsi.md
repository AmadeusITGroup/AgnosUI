Represents the state of the pagination component.

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

[core/src/components/pagination/pagination.ts:44](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/core/src/components/pagination/pagination.ts#L44)

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

[core/src/components/pagination/pagination.ts:101](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/core/src/components/pagination/pagination.ts#L101)

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

[core/src/components/pagination/pagination.ts:56](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/core/src/components/pagination/pagination.ts#L56)

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

[core/src/components/pagination/pagination.ts:32](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/core/src/components/pagination/pagination.ts#L32)

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

[core/src/components/pagination/pagination.ts:92](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/core/src/components/pagination/pagination.ts#L92)

***

### ariaLiveLabelText

> **ariaLiveLabelText**: `string`

The aria-live text

#### Defined in

[core/src/components/pagination/pagination.ts:273](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/core/src/components/pagination/pagination.ts#L273)

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

[core/src/components/pagination/pagination.ts:80](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/core/src/components/pagination/pagination.ts#L80)

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

[core/src/components/pagination/pagination.ts:68](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/core/src/components/pagination/pagination.ts#L68)

***

### boundaryLinks

> **boundaryLinks**: `boolean`

If `true`, the "First" and "Last" page links are shown.

#### Default Value

`false`

#### Inherited from

`PaginationCommonPropsAndState.boundaryLinks`

#### Defined in

[core/src/components/pagination/pagination.ts:122](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/core/src/components/pagination/pagination.ts#L122)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`PaginationCommonPropsAndState.className`

#### Defined in

[core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/core/src/components/commonProps.ts#L10)

***

### directionLinks

> **directionLinks**: `boolean`

If `true`, the "Next" and "Previous" page links are shown.

#### Default Value

`true`

#### Inherited from

`PaginationCommonPropsAndState.directionLinks`

#### Defined in

[core/src/components/pagination/pagination.ts:115](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/core/src/components/pagination/pagination.ts#L115)

***

### directionsHrefs

> **directionsHrefs**: [`DirectionsHrefs`](DirectionsHrefs.md)

The hrefs for the direction links

#### Defined in

[core/src/components/pagination/pagination.ts:270](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/core/src/components/pagination/pagination.ts#L270)

***

### disabled

> **disabled**: `boolean`

If `true`, pagination links will be disabled.

#### Default Value

`false`

#### Inherited from

`PaginationCommonPropsAndState.disabled`

#### Defined in

[core/src/components/pagination/pagination.ts:108](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/core/src/components/pagination/pagination.ts#L108)

***

### nextDisabled

> **nextDisabled**: `boolean`

true if the next link need to be disabled

#### Defined in

[core/src/components/pagination/pagination.ts:260](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/core/src/components/pagination/pagination.ts#L260)

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

[core/src/components/pagination/pagination.ts:22](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/core/src/components/pagination/pagination.ts#L22)

***

### pageCount

> **pageCount**: `number`

The number of pages.

#### Defined in

[core/src/components/pagination/pagination.ts:248](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/core/src/components/pagination/pagination.ts#L248)

***

### pages

> **pages**: `number`[]

The current pages, the number in the Array is the number of the page.

#### Defined in

[core/src/components/pagination/pagination.ts:252](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/core/src/components/pagination/pagination.ts#L252)

***

### pagesHrefs

> **pagesHrefs**: `string`[]

The hrefs for each "Page" page link

#### Defined in

[core/src/components/pagination/pagination.ts:267](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/core/src/components/pagination/pagination.ts#L267)

***

### pagesLabel

> **pagesLabel**: `string`[]

The label for each "Page" page link.

#### Defined in

[core/src/components/pagination/pagination.ts:264](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/core/src/components/pagination/pagination.ts#L264)

***

### previousDisabled

> **previousDisabled**: `boolean`

true if the previous link need to be disabled

#### Defined in

[core/src/components/pagination/pagination.ts:256](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/core/src/components/pagination/pagination.ts#L256)
