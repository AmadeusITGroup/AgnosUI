## Extends

- `PaginationState`.`PaginationExtraProps`

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

`CoreState.activeLabel`

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

`CoreState.ariaEllipsisLabel`

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

`CoreState.ariaFirstLabel`

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

`CoreState.ariaLabel`

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

`CoreState.ariaLastLabel`

#### Defined in

[core/src/components/pagination/pagination.ts:98](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/pagination/pagination.ts#L98)

***

### ariaLiveLabelText

> **ariaLiveLabelText**: `string`

The aria-live text

#### Inherited from

`CoreState.ariaLiveLabelText`

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

`CoreState.ariaNextLabel`

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

`CoreState.ariaPreviousLabel`

#### Defined in

[core/src/components/pagination/pagination.ts:74](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/pagination/pagination.ts#L74)

***

### boundaryLinks

> **boundaryLinks**: `boolean`

If `true`, the "First" and "Last" page links are shown.

#### Default Value

`false`

#### Inherited from

`CoreState.boundaryLinks`

#### Defined in

[core/src/components/pagination/pagination.ts:128](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/pagination/pagination.ts#L128)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreState.className`

#### Defined in

[core/src/components/commonProps.ts:7](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/commonProps.ts#L7)

***

### directionLinks

> **directionLinks**: `boolean`

If `true`, the "Next" and "Previous" page links are shown.

#### Default Value

`true`

#### Inherited from

`CoreState.directionLinks`

#### Defined in

[core/src/components/pagination/pagination.ts:121](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/pagination/pagination.ts#L121)

***

### directionsHrefs

> **directionsHrefs**: [`DirectionsHrefs`](DirectionsHrefs.md)

The hrefs for the direction links

#### Inherited from

`CoreState.directionsHrefs`

#### Defined in

[core/src/components/pagination/pagination.ts:267](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/pagination/pagination.ts#L267)

***

### disabled

> **disabled**: `boolean`

If `true`, pagination links will be disabled.

#### Default Value

`false`

#### Inherited from

`CoreState.disabled`

#### Defined in

[core/src/components/pagination/pagination.ts:114](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/pagination/pagination.ts#L114)

***

### ellipsisLabel

> **ellipsisLabel**: `SlotContent`\<[`PaginationContext`](PaginationContext.md)\>

The template to use for the ellipsis slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'…'`

#### Inherited from

`PaginationExtraProps.ellipsisLabel`

#### Defined in

[core-bootstrap/src/components/pagination/pagination.ts:45](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core-bootstrap/src/components/pagination/pagination.ts#L45)

***

### firstPageLabel

> **firstPageLabel**: `SlotContent`\<[`PaginationContext`](PaginationContext.md)\>

The template to use for the first slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'«'`

#### Inherited from

`PaginationExtraProps.firstPageLabel`

#### Defined in

[core-bootstrap/src/components/pagination/pagination.ts:54](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core-bootstrap/src/components/pagination/pagination.ts#L54)

***

### lastPageLabel

> **lastPageLabel**: `SlotContent`\<[`PaginationContext`](PaginationContext.md)\>

The template to use for the last slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'»'`

#### Inherited from

`PaginationExtraProps.lastPageLabel`

#### Defined in

[core-bootstrap/src/components/pagination/pagination.ts:81](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core-bootstrap/src/components/pagination/pagination.ts#L81)

***

### nextDisabled

> **nextDisabled**: `boolean`

true if the next link need to be disabled

#### Inherited from

`CoreState.nextDisabled`

#### Defined in

[core/src/components/pagination/pagination.ts:257](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/pagination/pagination.ts#L257)

***

### nextPageLabel

> **nextPageLabel**: `SlotContent`\<[`PaginationContext`](PaginationContext.md)\>

The template to use for the next slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'›'`

#### Inherited from

`PaginationExtraProps.nextPageLabel`

#### Defined in

[core-bootstrap/src/components/pagination/pagination.ts:72](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core-bootstrap/src/components/pagination/pagination.ts#L72)

***

### numberLabel

> **numberLabel**: `SlotContent`\<[`PaginationNumberContext`](PaginationNumberContext.md)\>

The template to use for the number slot
override any configuration parameters provided for this
for I18n, we suggest to use the global configuration

#### Param

The current page number

#### Default Value

```ts
({displayedPage}: PaginationNumberContext) => `${displayedPage}`
```

#### Inherited from

`PaginationExtraProps.numberLabel`

#### Defined in

[core-bootstrap/src/components/pagination/pagination.ts:101](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core-bootstrap/src/components/pagination/pagination.ts#L101)

***

### page

> **page**: `number`

The current page.

Page numbers start with `1`.

#### Default Value

`1`

#### Inherited from

`CoreState.page`

#### Defined in

[core/src/components/pagination/pagination.ts:19](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/pagination/pagination.ts#L19)

***

### pageCount

> **pageCount**: `number`

The number of pages.

#### Inherited from

`CoreState.pageCount`

#### Defined in

[core/src/components/pagination/pagination.ts:245](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/pagination/pagination.ts#L245)

***

### pages

> **pages**: `number`[]

The current pages, the number in the Array is the number of the page.

#### Inherited from

`CoreState.pages`

#### Defined in

[core/src/components/pagination/pagination.ts:249](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/pagination/pagination.ts#L249)

***

### pagesDisplay

> **pagesDisplay**: `SlotContent`\<[`PaginationContext`](PaginationContext.md)\>

The template to use for the pages slot
To use to customize the pages view
override any configuration parameters provided for this

#### Inherited from

`PaginationExtraProps.pagesDisplay`

#### Defined in

[core-bootstrap/src/components/pagination/pagination.ts:88](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core-bootstrap/src/components/pagination/pagination.ts#L88)

***

### pagesHrefs

> **pagesHrefs**: `string`[]

The hrefs for each "Page" page link

#### Inherited from

`CoreState.pagesHrefs`

#### Defined in

[core/src/components/pagination/pagination.ts:264](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/pagination/pagination.ts#L264)

***

### pagesLabel

> **pagesLabel**: `string`[]

The label for each "Page" page link.

#### Inherited from

`CoreState.pagesLabel`

#### Defined in

[core/src/components/pagination/pagination.ts:261](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/pagination/pagination.ts#L261)

***

### previousDisabled

> **previousDisabled**: `boolean`

true if the previous link need to be disabled

#### Inherited from

`CoreState.previousDisabled`

#### Defined in

[core/src/components/pagination/pagination.ts:253](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/pagination/pagination.ts#L253)

***

### previousPageLabel

> **previousPageLabel**: `SlotContent`\<[`PaginationContext`](PaginationContext.md)\>

The template to use for the previous slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'‹'`

#### Inherited from

`PaginationExtraProps.previousPageLabel`

#### Defined in

[core-bootstrap/src/components/pagination/pagination.ts:63](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core-bootstrap/src/components/pagination/pagination.ts#L63)

***

### size

> **size**: `null` \| `"sm"` \| `"lg"`

The pagination display size.

Bootstrap currently supports small and large sizes.

#### Default Value

`null`

#### Inherited from

`CoreState.size`

#### Defined in

[core/src/components/pagination/pagination.ts:28](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core/src/components/pagination/pagination.ts#L28)

***

### structure

> **structure**: `SlotContent`\<[`PaginationContext`](PaginationContext.md)\>

The template to use for the structure of the pagination component
The default structure uses [ellipsisLabel](PaginationState.md#ellipsislabel), [firstPageLabel](PaginationState.md#firstpagelabel),
[previousPageLabel](PaginationState.md#previouspagelabel), [nextPageLabel](PaginationState.md#nextpagelabel),
[lastPageLabel](PaginationState.md#lastpagelabel), [pagesDisplay](PaginationState.md#pagesdisplay),
[numberLabel](PaginationState.md#numberlabel),

#### Inherited from

`PaginationExtraProps.structure`

#### Defined in

[core-bootstrap/src/components/pagination/pagination.ts:36](https://github.com/AmadeusITGroup/AgnosUI/blob/e311275aceb138b2e14f6bd7738190e3851e05d8/core-bootstrap/src/components/pagination/pagination.ts#L36)
