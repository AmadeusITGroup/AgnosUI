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

[core/src/components/pagination/pagination.ts:50](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/pagination/pagination.ts#L50)

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

[core/src/components/pagination/pagination.ts:107](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/pagination/pagination.ts#L107)

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

[core/src/components/pagination/pagination.ts:62](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/pagination/pagination.ts#L62)

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

[core/src/components/pagination/pagination.ts:38](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/pagination/pagination.ts#L38)

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

[core/src/components/pagination/pagination.ts:98](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/pagination/pagination.ts#L98)

***

### ariaLiveLabelText

> **ariaLiveLabelText**: `string`

The aria-live text

#### Defined in

[core/src/components/pagination/pagination.ts:270](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/pagination/pagination.ts#L270)

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

[core/src/components/pagination/pagination.ts:86](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/pagination/pagination.ts#L86)

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

[core/src/components/pagination/pagination.ts:74](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/pagination/pagination.ts#L74)

***

### boundaryLinks

> **boundaryLinks**: `boolean`

If `true`, the "First" and "Last" page links are shown.

#### Default Value

`false`

#### Inherited from

`PaginationCommonPropsAndState.boundaryLinks`

#### Defined in

[core/src/components/pagination/pagination.ts:128](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/pagination/pagination.ts#L128)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`PaginationCommonPropsAndState.className`

#### Defined in

[core/src/components/commonProps.ts:7](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/commonProps.ts#L7)

***

### directionLinks

> **directionLinks**: `boolean`

If `true`, the "Next" and "Previous" page links are shown.

#### Default Value

`true`

#### Inherited from

`PaginationCommonPropsAndState.directionLinks`

#### Defined in

[core/src/components/pagination/pagination.ts:121](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/pagination/pagination.ts#L121)

***

### directionsHrefs

> **directionsHrefs**: [`DirectionsHrefs`](DirectionsHrefs.md)

The hrefs for the direction links

#### Defined in

[core/src/components/pagination/pagination.ts:267](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/pagination/pagination.ts#L267)

***

### disabled

> **disabled**: `boolean`

If `true`, pagination links will be disabled.

#### Default Value

`false`

#### Inherited from

`PaginationCommonPropsAndState.disabled`

#### Defined in

[core/src/components/pagination/pagination.ts:114](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/pagination/pagination.ts#L114)

***

### nextDisabled

> **nextDisabled**: `boolean`

true if the next link need to be disabled

#### Defined in

[core/src/components/pagination/pagination.ts:257](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/pagination/pagination.ts#L257)

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

[core/src/components/pagination/pagination.ts:19](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/pagination/pagination.ts#L19)

***

### pageCount

> **pageCount**: `number`

The number of pages.

#### Defined in

[core/src/components/pagination/pagination.ts:245](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/pagination/pagination.ts#L245)

***

### pages

> **pages**: `number`[]

The current pages, the number in the Array is the number of the page.

#### Defined in

[core/src/components/pagination/pagination.ts:249](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/pagination/pagination.ts#L249)

***

### pagesHrefs

> **pagesHrefs**: `string`[]

The hrefs for each "Page" page link

#### Defined in

[core/src/components/pagination/pagination.ts:264](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/pagination/pagination.ts#L264)

***

### pagesLabel

> **pagesLabel**: `string`[]

The label for each "Page" page link.

#### Defined in

[core/src/components/pagination/pagination.ts:261](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/pagination/pagination.ts#L261)

***

### previousDisabled

> **previousDisabled**: `boolean`

true if the previous link need to be disabled

#### Defined in

[core/src/components/pagination/pagination.ts:253](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/pagination/pagination.ts#L253)

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

[core/src/components/pagination/pagination.ts:28](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/pagination/pagination.ts#L28)
