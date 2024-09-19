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

[core/src/components/pagination/pagination.ts:51](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core/src/components/pagination/pagination.ts#L51)

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

[core/src/components/pagination/pagination.ts:108](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core/src/components/pagination/pagination.ts#L108)

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

[core/src/components/pagination/pagination.ts:63](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core/src/components/pagination/pagination.ts#L63)

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

[core/src/components/pagination/pagination.ts:39](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core/src/components/pagination/pagination.ts#L39)

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

[core/src/components/pagination/pagination.ts:99](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core/src/components/pagination/pagination.ts#L99)

***

### ariaLiveLabelText

> **ariaLiveLabelText**: `string`

The aria-live text

#### Defined in

[core/src/components/pagination/pagination.ts:271](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core/src/components/pagination/pagination.ts#L271)

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

[core/src/components/pagination/pagination.ts:87](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core/src/components/pagination/pagination.ts#L87)

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

[core/src/components/pagination/pagination.ts:75](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core/src/components/pagination/pagination.ts#L75)

***

### boundaryLinks

> **boundaryLinks**: `boolean`

If `true`, the "First" and "Last" page links are shown.

#### Default Value

`false`

#### Inherited from

`PaginationCommonPropsAndState.boundaryLinks`

#### Defined in

[core/src/components/pagination/pagination.ts:129](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core/src/components/pagination/pagination.ts#L129)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`PaginationCommonPropsAndState.className`

#### Defined in

[core/src/components/commonProps.ts:7](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core/src/components/commonProps.ts#L7)

***

### directionLinks

> **directionLinks**: `boolean`

If `true`, the "Next" and "Previous" page links are shown.

#### Default Value

`true`

#### Inherited from

`PaginationCommonPropsAndState.directionLinks`

#### Defined in

[core/src/components/pagination/pagination.ts:122](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core/src/components/pagination/pagination.ts#L122)

***

### directionsHrefs

> **directionsHrefs**: [`DirectionsHrefs`](DirectionsHrefs.md)

The hrefs for the direction links

#### Defined in

[core/src/components/pagination/pagination.ts:268](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core/src/components/pagination/pagination.ts#L268)

***

### disabled

> **disabled**: `boolean`

If `true`, pagination links will be disabled.

#### Default Value

`false`

#### Inherited from

`PaginationCommonPropsAndState.disabled`

#### Defined in

[core/src/components/pagination/pagination.ts:115](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core/src/components/pagination/pagination.ts#L115)

***

### nextDisabled

> **nextDisabled**: `boolean`

true if the next link need to be disabled

#### Defined in

[core/src/components/pagination/pagination.ts:258](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core/src/components/pagination/pagination.ts#L258)

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

[core/src/components/pagination/pagination.ts:20](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core/src/components/pagination/pagination.ts#L20)

***

### pageCount

> **pageCount**: `number`

The number of pages.

#### Defined in

[core/src/components/pagination/pagination.ts:246](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core/src/components/pagination/pagination.ts#L246)

***

### pages

> **pages**: `number`[]

The current pages, the number in the Array is the number of the page.

#### Defined in

[core/src/components/pagination/pagination.ts:250](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core/src/components/pagination/pagination.ts#L250)

***

### pagesHrefs

> **pagesHrefs**: `string`[]

The hrefs for each "Page" page link

#### Defined in

[core/src/components/pagination/pagination.ts:265](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core/src/components/pagination/pagination.ts#L265)

***

### pagesLabel

> **pagesLabel**: `string`[]

The label for each "Page" page link.

#### Defined in

[core/src/components/pagination/pagination.ts:262](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core/src/components/pagination/pagination.ts#L262)

***

### previousDisabled

> **previousDisabled**: `boolean`

true if the previous link need to be disabled

#### Defined in

[core/src/components/pagination/pagination.ts:254](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core/src/components/pagination/pagination.ts#L254)

***

### size

> **size**: `null` \| `"sm"` \| `"lg"`

The pagination display size.

Bootstrap currently supports small and large sizes.

#### Default Value

`null`

#### Inherited from

`PaginationCommonPropsAndState.size`

#### Defined in

[core/src/components/pagination/pagination.ts:29](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core/src/components/pagination/pagination.ts#L29)
