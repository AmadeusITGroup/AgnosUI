Defined in: [core-bootstrap/src/components/pagination/pagination.ts:117](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core-bootstrap/src/components/pagination/pagination.ts#L117)

Represents the state of a pagination component.

## Extends

- `PaginationState`.`PaginationExtraProps`

## Properties

### activeLabel

> **activeLabel**: `string`

Defined in: [core/src/components/pagination/pagination.ts:44](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/pagination/pagination.ts#L44)

The label for the "active" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'(current)'
```

#### Inherited from

`CoreState.activeLabel`

***

### ariaEllipsisLabel

> **ariaEllipsisLabel**: `string`

Defined in: [core/src/components/pagination/pagination.ts:101](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/pagination/pagination.ts#L101)

The label for the "Ellipsis" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'Ellipsis page element'`

#### Inherited from

`CoreState.ariaEllipsisLabel`

***

### ariaFirstLabel

> **ariaFirstLabel**: `string`

Defined in: [core/src/components/pagination/pagination.ts:56](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/pagination/pagination.ts#L56)

The label for the "First" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for first page'
```

#### Inherited from

`CoreState.ariaFirstLabel`

***

### ariaLabel

> **ariaLabel**: `string`

Defined in: [core/src/components/pagination/pagination.ts:32](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/pagination/pagination.ts#L32)

The label for the nav element.

for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'Page navigation'`

#### Inherited from

`CoreState.ariaLabel`

***

### ariaLastLabel

> **ariaLastLabel**: `string`

Defined in: [core/src/components/pagination/pagination.ts:92](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/pagination/pagination.ts#L92)

The label for the "Last" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for last page'
```

#### Inherited from

`CoreState.ariaLastLabel`

***

### ariaLiveLabelText

> **ariaLiveLabelText**: `string`

Defined in: [core/src/components/pagination/pagination.ts:273](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/pagination/pagination.ts#L273)

The aria-live text

#### Inherited from

`CoreState.ariaLiveLabelText`

***

### ariaNextLabel

> **ariaNextLabel**: `string`

Defined in: [core/src/components/pagination/pagination.ts:80](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/pagination/pagination.ts#L80)

The label for the "Next" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for next page'
```

#### Inherited from

`CoreState.ariaNextLabel`

***

### ariaPreviousLabel

> **ariaPreviousLabel**: `string`

Defined in: [core/src/components/pagination/pagination.ts:68](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/pagination/pagination.ts#L68)

The label for the "Previous" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for previous page'
```

#### Inherited from

`CoreState.ariaPreviousLabel`

***

### boundaryLinks

> **boundaryLinks**: `boolean`

Defined in: [core/src/components/pagination/pagination.ts:122](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/pagination/pagination.ts#L122)

If `true`, the "First" and "Last" page links are shown.

#### Default Value

`false`

#### Inherited from

`CoreState.boundaryLinks`

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreState.className`

***

### directionLinks

> **directionLinks**: `boolean`

Defined in: [core/src/components/pagination/pagination.ts:115](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/pagination/pagination.ts#L115)

If `true`, the "Next" and "Previous" page links are shown.

#### Default Value

`true`

#### Inherited from

`CoreState.directionLinks`

***

### directionsHrefs

> **directionsHrefs**: [`DirectionsHrefs`](DirectionsHrefs.md)

Defined in: [core/src/components/pagination/pagination.ts:270](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/pagination/pagination.ts#L270)

The hrefs for the direction links

#### Inherited from

`CoreState.directionsHrefs`

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/pagination/pagination.ts:108](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/pagination/pagination.ts#L108)

If `true`, pagination links will be disabled.

#### Default Value

`false`

#### Inherited from

`CoreState.disabled`

***

### ellipsisLabel

> **ellipsisLabel**: `SlotContent`\<[`PaginationContext`](PaginationContext.md)\>

Defined in: [core-bootstrap/src/components/pagination/pagination.ts:46](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core-bootstrap/src/components/pagination/pagination.ts#L46)

The template to use for the ellipsis slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'…'`

#### Inherited from

`PaginationExtraProps.ellipsisLabel`

***

### firstPageLabel

> **firstPageLabel**: `SlotContent`\<[`PaginationContext`](PaginationContext.md)\>

Defined in: [core-bootstrap/src/components/pagination/pagination.ts:55](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core-bootstrap/src/components/pagination/pagination.ts#L55)

The template to use for the first slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'«'`

#### Inherited from

`PaginationExtraProps.firstPageLabel`

***

### lastPageLabel

> **lastPageLabel**: `SlotContent`\<[`PaginationContext`](PaginationContext.md)\>

Defined in: [core-bootstrap/src/components/pagination/pagination.ts:82](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core-bootstrap/src/components/pagination/pagination.ts#L82)

The template to use for the last slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'»'`

#### Inherited from

`PaginationExtraProps.lastPageLabel`

***

### nextDisabled

> **nextDisabled**: `boolean`

Defined in: [core/src/components/pagination/pagination.ts:260](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/pagination/pagination.ts#L260)

true if the next link need to be disabled

#### Inherited from

`CoreState.nextDisabled`

***

### nextPageLabel

> **nextPageLabel**: `SlotContent`\<[`PaginationContext`](PaginationContext.md)\>

Defined in: [core-bootstrap/src/components/pagination/pagination.ts:73](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core-bootstrap/src/components/pagination/pagination.ts#L73)

The template to use for the next slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'›'`

#### Inherited from

`PaginationExtraProps.nextPageLabel`

***

### numberLabel

> **numberLabel**: `SlotContent`\<[`PaginationNumberContext`](PaginationNumberContext.md)\>

Defined in: [core-bootstrap/src/components/pagination/pagination.ts:102](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core-bootstrap/src/components/pagination/pagination.ts#L102)

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

***

### page

> **page**: `number`

Defined in: [core/src/components/pagination/pagination.ts:22](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/pagination/pagination.ts#L22)

The current page.

Page numbers start with `1`.

#### Default Value

`1`

#### Inherited from

`CoreState.page`

***

### pageCount

> **pageCount**: `number`

Defined in: [core/src/components/pagination/pagination.ts:248](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/pagination/pagination.ts#L248)

The number of pages.

#### Inherited from

`CoreState.pageCount`

***

### pages

> **pages**: `number`[]

Defined in: [core/src/components/pagination/pagination.ts:252](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/pagination/pagination.ts#L252)

The current pages, the number in the Array is the number of the page.

#### Inherited from

`CoreState.pages`

***

### pagesDisplay

> **pagesDisplay**: `SlotContent`\<[`PaginationContext`](PaginationContext.md)\>

Defined in: [core-bootstrap/src/components/pagination/pagination.ts:89](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core-bootstrap/src/components/pagination/pagination.ts#L89)

The template to use for the pages slot
To use to customize the pages view
override any configuration parameters provided for this

#### Inherited from

`PaginationExtraProps.pagesDisplay`

***

### pagesHrefs

> **pagesHrefs**: `string`[]

Defined in: [core/src/components/pagination/pagination.ts:267](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/pagination/pagination.ts#L267)

The hrefs for each "Page" page link

#### Inherited from

`CoreState.pagesHrefs`

***

### pagesLabel

> **pagesLabel**: `string`[]

Defined in: [core/src/components/pagination/pagination.ts:264](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/pagination/pagination.ts#L264)

The label for each "Page" page link.

#### Inherited from

`CoreState.pagesLabel`

***

### previousDisabled

> **previousDisabled**: `boolean`

Defined in: [core/src/components/pagination/pagination.ts:256](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/pagination/pagination.ts#L256)

true if the previous link need to be disabled

#### Inherited from

`CoreState.previousDisabled`

***

### previousPageLabel

> **previousPageLabel**: `SlotContent`\<[`PaginationContext`](PaginationContext.md)\>

Defined in: [core-bootstrap/src/components/pagination/pagination.ts:64](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core-bootstrap/src/components/pagination/pagination.ts#L64)

The template to use for the previous slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'‹'`

#### Inherited from

`PaginationExtraProps.previousPageLabel`

***

### size

> **size**: `null` \| `"sm"` \| `"lg"`

Defined in: [core-bootstrap/src/components/pagination/pagination.ts:111](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core-bootstrap/src/components/pagination/pagination.ts#L111)

The pagination display size.

Bootstrap currently supports small and large sizes.

#### Default Value

`null`

#### Inherited from

`PaginationExtraProps.size`

***

### structure

> **structure**: `SlotContent`\<[`PaginationContext`](PaginationContext.md)\>

Defined in: [core-bootstrap/src/components/pagination/pagination.ts:37](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core-bootstrap/src/components/pagination/pagination.ts#L37)

The template to use for the structure of the pagination component
The default structure uses [ellipsisLabel](PaginationState.md#ellipsislabel), [firstPageLabel](PaginationState.md#firstpagelabel),
[previousPageLabel](PaginationState.md#previouspagelabel), [nextPageLabel](PaginationState.md#nextpagelabel),
[lastPageLabel](PaginationState.md#lastpagelabel), [pagesDisplay](PaginationState.md#pagesdisplay),
[numberLabel](PaginationState.md#numberlabel),

#### Inherited from

`PaginationExtraProps.structure`
