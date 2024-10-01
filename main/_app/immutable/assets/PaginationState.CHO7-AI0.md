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

[core/src/components/pagination/pagination.ts:51](https://github.com/AmadeusITGroup/AgnosUI/blob/b2a39486f65b4acad5faedc36d4a09c653604ecc/core/src/components/pagination/pagination.ts#L51)

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

[core/src/components/pagination/pagination.ts:108](https://github.com/AmadeusITGroup/AgnosUI/blob/b2a39486f65b4acad5faedc36d4a09c653604ecc/core/src/components/pagination/pagination.ts#L108)

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

[core/src/components/pagination/pagination.ts:63](https://github.com/AmadeusITGroup/AgnosUI/blob/b2a39486f65b4acad5faedc36d4a09c653604ecc/core/src/components/pagination/pagination.ts#L63)

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

[core/src/components/pagination/pagination.ts:39](https://github.com/AmadeusITGroup/AgnosUI/blob/b2a39486f65b4acad5faedc36d4a09c653604ecc/core/src/components/pagination/pagination.ts#L39)

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

[core/src/components/pagination/pagination.ts:99](https://github.com/AmadeusITGroup/AgnosUI/blob/b2a39486f65b4acad5faedc36d4a09c653604ecc/core/src/components/pagination/pagination.ts#L99)

***

### ariaLiveLabelText

> **ariaLiveLabelText**: `string`

The aria-live text

#### Inherited from

`CoreState.ariaLiveLabelText`

#### Defined in

[core/src/components/pagination/pagination.ts:271](https://github.com/AmadeusITGroup/AgnosUI/blob/b2a39486f65b4acad5faedc36d4a09c653604ecc/core/src/components/pagination/pagination.ts#L271)

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

[core/src/components/pagination/pagination.ts:87](https://github.com/AmadeusITGroup/AgnosUI/blob/b2a39486f65b4acad5faedc36d4a09c653604ecc/core/src/components/pagination/pagination.ts#L87)

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

[core/src/components/pagination/pagination.ts:75](https://github.com/AmadeusITGroup/AgnosUI/blob/b2a39486f65b4acad5faedc36d4a09c653604ecc/core/src/components/pagination/pagination.ts#L75)

***

### boundaryLinks

> **boundaryLinks**: `boolean`

If `true`, the "First" and "Last" page links are shown.

#### Default Value

`false`

#### Inherited from

`CoreState.boundaryLinks`

#### Defined in

[core/src/components/pagination/pagination.ts:129](https://github.com/AmadeusITGroup/AgnosUI/blob/b2a39486f65b4acad5faedc36d4a09c653604ecc/core/src/components/pagination/pagination.ts#L129)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreState.className`

#### Defined in

[core/src/components/commonProps.ts:7](https://github.com/AmadeusITGroup/AgnosUI/blob/b2a39486f65b4acad5faedc36d4a09c653604ecc/core/src/components/commonProps.ts#L7)

***

### directionLinks

> **directionLinks**: `boolean`

If `true`, the "Next" and "Previous" page links are shown.

#### Default Value

`true`

#### Inherited from

`CoreState.directionLinks`

#### Defined in

[core/src/components/pagination/pagination.ts:122](https://github.com/AmadeusITGroup/AgnosUI/blob/b2a39486f65b4acad5faedc36d4a09c653604ecc/core/src/components/pagination/pagination.ts#L122)

***

### directionsHrefs

> **directionsHrefs**: [`DirectionsHrefs`](DirectionsHrefs.md)

The hrefs for the direction links

#### Inherited from

`CoreState.directionsHrefs`

#### Defined in

[core/src/components/pagination/pagination.ts:268](https://github.com/AmadeusITGroup/AgnosUI/blob/b2a39486f65b4acad5faedc36d4a09c653604ecc/core/src/components/pagination/pagination.ts#L268)

***

### disabled

> **disabled**: `boolean`

If `true`, pagination links will be disabled.

#### Default Value

`false`

#### Inherited from

`CoreState.disabled`

#### Defined in

[core/src/components/pagination/pagination.ts:115](https://github.com/AmadeusITGroup/AgnosUI/blob/b2a39486f65b4acad5faedc36d4a09c653604ecc/core/src/components/pagination/pagination.ts#L115)

***

### ellipsisLabel

> **ellipsisLabel**: `SlotContent`\<[`PaginationContext`](../type-aliases/PaginationContext.md)\>

The template to use for the ellipsis slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'…'`

#### Inherited from

`PaginationExtraProps.ellipsisLabel`

#### Defined in

[core-bootstrap/src/components/pagination/pagination.ts:45](https://github.com/AmadeusITGroup/AgnosUI/blob/b2a39486f65b4acad5faedc36d4a09c653604ecc/core-bootstrap/src/components/pagination/pagination.ts#L45)

***

### firstPageLabel

> **firstPageLabel**: `SlotContent`\<[`PaginationContext`](../type-aliases/PaginationContext.md)\>

The template to use for the first slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'«'`

#### Inherited from

`PaginationExtraProps.firstPageLabel`

#### Defined in

[core-bootstrap/src/components/pagination/pagination.ts:54](https://github.com/AmadeusITGroup/AgnosUI/blob/b2a39486f65b4acad5faedc36d4a09c653604ecc/core-bootstrap/src/components/pagination/pagination.ts#L54)

***

### lastPageLabel

> **lastPageLabel**: `SlotContent`\<[`PaginationContext`](../type-aliases/PaginationContext.md)\>

The template to use for the last slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'»'`

#### Inherited from

`PaginationExtraProps.lastPageLabel`

#### Defined in

[core-bootstrap/src/components/pagination/pagination.ts:81](https://github.com/AmadeusITGroup/AgnosUI/blob/b2a39486f65b4acad5faedc36d4a09c653604ecc/core-bootstrap/src/components/pagination/pagination.ts#L81)

***

### nextDisabled

> **nextDisabled**: `boolean`

true if the next link need to be disabled

#### Inherited from

`CoreState.nextDisabled`

#### Defined in

[core/src/components/pagination/pagination.ts:258](https://github.com/AmadeusITGroup/AgnosUI/blob/b2a39486f65b4acad5faedc36d4a09c653604ecc/core/src/components/pagination/pagination.ts#L258)

***

### nextPageLabel

> **nextPageLabel**: `SlotContent`\<[`PaginationContext`](../type-aliases/PaginationContext.md)\>

The template to use for the next slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'›'`

#### Inherited from

`PaginationExtraProps.nextPageLabel`

#### Defined in

[core-bootstrap/src/components/pagination/pagination.ts:72](https://github.com/AmadeusITGroup/AgnosUI/blob/b2a39486f65b4acad5faedc36d4a09c653604ecc/core-bootstrap/src/components/pagination/pagination.ts#L72)

***

### numberLabel

> **numberLabel**: `SlotContent`\<[`PaginationNumberContext`](../type-aliases/PaginationNumberContext.md)\>

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

[core-bootstrap/src/components/pagination/pagination.ts:101](https://github.com/AmadeusITGroup/AgnosUI/blob/b2a39486f65b4acad5faedc36d4a09c653604ecc/core-bootstrap/src/components/pagination/pagination.ts#L101)

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

[core/src/components/pagination/pagination.ts:20](https://github.com/AmadeusITGroup/AgnosUI/blob/b2a39486f65b4acad5faedc36d4a09c653604ecc/core/src/components/pagination/pagination.ts#L20)

***

### pageCount

> **pageCount**: `number`

The number of pages.

#### Inherited from

`CoreState.pageCount`

#### Defined in

[core/src/components/pagination/pagination.ts:246](https://github.com/AmadeusITGroup/AgnosUI/blob/b2a39486f65b4acad5faedc36d4a09c653604ecc/core/src/components/pagination/pagination.ts#L246)

***

### pages

> **pages**: `number`[]

The current pages, the number in the Array is the number of the page.

#### Inherited from

`CoreState.pages`

#### Defined in

[core/src/components/pagination/pagination.ts:250](https://github.com/AmadeusITGroup/AgnosUI/blob/b2a39486f65b4acad5faedc36d4a09c653604ecc/core/src/components/pagination/pagination.ts#L250)

***

### pagesDisplay

> **pagesDisplay**: `SlotContent`\<[`PaginationContext`](../type-aliases/PaginationContext.md)\>

The template to use for the pages slot
To use to customize the pages view
override any configuration parameters provided for this

#### Inherited from

`PaginationExtraProps.pagesDisplay`

#### Defined in

[core-bootstrap/src/components/pagination/pagination.ts:88](https://github.com/AmadeusITGroup/AgnosUI/blob/b2a39486f65b4acad5faedc36d4a09c653604ecc/core-bootstrap/src/components/pagination/pagination.ts#L88)

***

### pagesHrefs

> **pagesHrefs**: `string`[]

The hrefs for each "Page" page link

#### Inherited from

`CoreState.pagesHrefs`

#### Defined in

[core/src/components/pagination/pagination.ts:265](https://github.com/AmadeusITGroup/AgnosUI/blob/b2a39486f65b4acad5faedc36d4a09c653604ecc/core/src/components/pagination/pagination.ts#L265)

***

### pagesLabel

> **pagesLabel**: `string`[]

The label for each "Page" page link.

#### Inherited from

`CoreState.pagesLabel`

#### Defined in

[core/src/components/pagination/pagination.ts:262](https://github.com/AmadeusITGroup/AgnosUI/blob/b2a39486f65b4acad5faedc36d4a09c653604ecc/core/src/components/pagination/pagination.ts#L262)

***

### previousDisabled

> **previousDisabled**: `boolean`

true if the previous link need to be disabled

#### Inherited from

`CoreState.previousDisabled`

#### Defined in

[core/src/components/pagination/pagination.ts:254](https://github.com/AmadeusITGroup/AgnosUI/blob/b2a39486f65b4acad5faedc36d4a09c653604ecc/core/src/components/pagination/pagination.ts#L254)

***

### previousPageLabel

> **previousPageLabel**: `SlotContent`\<[`PaginationContext`](../type-aliases/PaginationContext.md)\>

The template to use for the previous slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'‹'`

#### Inherited from

`PaginationExtraProps.previousPageLabel`

#### Defined in

[core-bootstrap/src/components/pagination/pagination.ts:63](https://github.com/AmadeusITGroup/AgnosUI/blob/b2a39486f65b4acad5faedc36d4a09c653604ecc/core-bootstrap/src/components/pagination/pagination.ts#L63)

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

[core/src/components/pagination/pagination.ts:29](https://github.com/AmadeusITGroup/AgnosUI/blob/b2a39486f65b4acad5faedc36d4a09c653604ecc/core/src/components/pagination/pagination.ts#L29)

***

### structure

> **structure**: `SlotContent`\<[`PaginationContext`](../type-aliases/PaginationContext.md)\>

The template to use for the structure of the pagination component
The default structure uses [ellipsisLabel](PaginationState.md#ellipsislabel), [firstPageLabel](PaginationState.md#firstpagelabel),
[previousPageLabel](PaginationState.md#previouspagelabel), [nextPageLabel](PaginationState.md#nextpagelabel),
[lastPageLabel](PaginationState.md#lastpagelabel), [pagesDisplay](PaginationState.md#pagesdisplay),
[numberLabel](PaginationState.md#numberlabel),

#### Inherited from

`PaginationExtraProps.structure`

#### Defined in

[core-bootstrap/src/components/pagination/pagination.ts:36](https://github.com/AmadeusITGroup/AgnosUI/blob/b2a39486f65b4acad5faedc36d4a09c653604ecc/core-bootstrap/src/components/pagination/pagination.ts#L36)
