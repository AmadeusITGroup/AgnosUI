Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:35

Represents the state of a pagination component.

## Properties

### activeLabel

> **activeLabel**: `string`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:105

The label for the "active" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'(current)'
```

***

### ariaEllipsisLabel

> **ariaEllipsisLabel**: `string`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:167

The label for the "Ellipsis" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'Ellipsis page element'`

***

### ariaFirstLabel

> **ariaFirstLabel**: `string`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:118

The label for the "First" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for first page'
```

***

### ariaLabel

> **ariaLabel**: `string`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:92

The label for the nav element.

for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'Page navigation'`

***

### ariaLastLabel

> **ariaLastLabel**: `string`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:157

The label for the "Last" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for last page'
```

***

### ariaLiveLabelText

> **ariaLiveLabelText**: `string`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:72

The aria-live text

***

### ariaNextLabel

> **ariaNextLabel**: `string`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:144

The label for the "Next" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for next page'
```

***

### ariaPreviousLabel

> **ariaPreviousLabel**: `string`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:131

The label for the "Previous" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

```ts
'Action link for previous page'
```

***

### boundaryLinks

> **boundaryLinks**: `boolean`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:191

If `true`, the "First" and "Last" page links are shown.

#### Default Value

`false`

***

### className

> **className**: `string`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:198

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### directionLinks

> **directionLinks**: `boolean`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:183

If `true`, the "Next" and "Previous" page links are shown.

#### Default Value

`true`

***

### directionsHrefs

> **directionsHrefs**: [`DirectionsHrefs`](DirectionsHrefs.md)

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:68

The hrefs for the direction links

***

### disabled

> **disabled**: `boolean`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:175

If `true`, pagination links will be disabled.

#### Default Value

`false`

***

### ellipsisLabel

> **ellipsisLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](PaginationContext.md)\>

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:217

The template to use for the ellipsis slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'…'`

***

### firstPageLabel

> **firstPageLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](PaginationContext.md)\>

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:227

The template to use for the first slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'«'`

***

### lastPageLabel

> **lastPageLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](PaginationContext.md)\>

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:257

The template to use for the last slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'»'`

***

### nextDisabled

> **nextDisabled**: `boolean`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:55

true if the next link need to be disabled

***

### nextPageLabel

> **nextPageLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](PaginationContext.md)\>

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:247

The template to use for the next slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'›'`

***

### numberLabel

> **numberLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationNumberContext`](PaginationNumberContext.md)\>

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:279

The template to use for the number slot
override any configuration parameters provided for this
for I18n, we suggest to use the global configuration

#### Param

The current page number

#### Default Value

```ts
({displayedPage}: PaginationNumberContext) => `${displayedPage}`
```

***

### page

> **page**: `number`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:81

The current page.

Page numbers start with `1`.

#### Default Value

`1`

***

### pageCount

> **pageCount**: `number`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:40

The number of pages.

***

### pages

> **pages**: `number`[]

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:45

The current pages, the number in the Array is the number of the page.

***

### pagesDisplay

> **pagesDisplay**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](PaginationContext.md)\>

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:265

The template to use for the pages slot
To use to customize the pages view
override any configuration parameters provided for this

***

### pagesHrefs

> **pagesHrefs**: `string`[]

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:64

The hrefs for each "Page" page link

***

### pagesLabel

> **pagesLabel**: `string`[]

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:60

The label for each "Page" page link.

***

### previousDisabled

> **previousDisabled**: `boolean`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:50

true if the previous link need to be disabled

***

### previousPageLabel

> **previousPageLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](PaginationContext.md)\>

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:237

The template to use for the previous slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'‹'`

***

### size

> **size**: `"sm"` \| `"lg"` \| `null`

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:289

The pagination display size.

Bootstrap currently supports small and large sizes.

#### Default Value

`null`

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](PaginationContext.md)\>

Defined in: angular/bootstrap/src/components/pagination/pagination.gen.ts:207

The template to use for the structure of the pagination component
The default structure uses [ellipsisLabel](PaginationProps.md#ellipsislabel), [firstPageLabel](PaginationProps.md#firstpagelabel),
[previousPageLabel](PaginationProps.md#previouspagelabel), [nextPageLabel](PaginationProps.md#nextpagelabel),
[lastPageLabel](PaginationProps.md#lastpagelabel), [pagesDisplay](PaginationProps.md#pagesdisplay),
[numberLabel](PaginationProps.md#numberlabel),
