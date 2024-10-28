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

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:102

***

### ariaEllipsisLabel

> **ariaEllipsisLabel**: `string`

The label for the "Ellipsis" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'Ellipsis page element'`

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:164

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

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:115

***

### ariaLabel

> **ariaLabel**: `string`

The label for the nav element.

for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'Page navigation'`

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:89

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

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:154

***

### ariaLiveLabelText

> **ariaLiveLabelText**: `string`

The aria-live text

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:69

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

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:141

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

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:128

***

### boundaryLinks

> **boundaryLinks**: `boolean`

If `true`, the "First" and "Last" page links are shown.

#### Default Value

`false`

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:188

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:195

***

### directionLinks

> **directionLinks**: `boolean`

If `true`, the "Next" and "Previous" page links are shown.

#### Default Value

`true`

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:180

***

### directionsHrefs

> **directionsHrefs**: [`DirectionsHrefs`](DirectionsHrefs.md)

The hrefs for the direction links

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:65

***

### disabled

> **disabled**: `boolean`

If `true`, pagination links will be disabled.

#### Default Value

`false`

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:172

***

### ellipsisLabel

> **ellipsisLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](PaginationContext.md)\>

The template to use for the ellipsis slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'…'`

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:214

***

### firstPageLabel

> **firstPageLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](PaginationContext.md)\>

The template to use for the first slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'«'`

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:224

***

### lastPageLabel

> **lastPageLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](PaginationContext.md)\>

The template to use for the last slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'»'`

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:254

***

### nextDisabled

> **nextDisabled**: `boolean`

true if the next link need to be disabled

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:52

***

### nextPageLabel

> **nextPageLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](PaginationContext.md)\>

The template to use for the next slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'›'`

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:244

***

### numberLabel

> **numberLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationNumberContext`](PaginationNumberContext.md)\>

The template to use for the number slot
override any configuration parameters provided for this
for I18n, we suggest to use the global configuration

#### Param

The current page number

#### Default Value

```ts
({displayedPage}: PaginationNumberContext) => `${displayedPage}`
```

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:276

***

### page

> **page**: `number`

The current page.

Page numbers start with `1`.

#### Default Value

`1`

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:78

***

### pageCount

> **pageCount**: `number`

The number of pages.

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:37

***

### pages

> **pages**: `number`[]

The current pages, the number in the Array is the number of the page.

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:42

***

### pagesDisplay

> **pagesDisplay**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](PaginationContext.md)\>

The template to use for the pages slot
To use to customize the pages view
override any configuration parameters provided for this

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:262

***

### pagesHrefs

> **pagesHrefs**: `string`[]

The hrefs for each "Page" page link

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:61

***

### pagesLabel

> **pagesLabel**: `string`[]

The label for each "Page" page link.

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:57

***

### previousDisabled

> **previousDisabled**: `boolean`

true if the previous link need to be disabled

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:47

***

### previousPageLabel

> **previousPageLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](PaginationContext.md)\>

The template to use for the previous slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this

#### Default Value

`'‹'`

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:234

***

### size

> **size**: `null` \| `"sm"` \| `"lg"`

The pagination display size.

Bootstrap currently supports small and large sizes.

#### Default Value

`null`

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:286

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`PaginationContext`](PaginationContext.md)\>

The template to use for the structure of the pagination component
The default structure uses [ellipsisLabel](PaginationProps.md#ellipsislabel), [firstPageLabel](PaginationProps.md#firstpagelabel),
[previousPageLabel](PaginationProps.md#previouspagelabel), [nextPageLabel](PaginationProps.md#nextpagelabel),
[lastPageLabel](PaginationProps.md#lastpagelabel), [pagesDisplay](PaginationProps.md#pagesdisplay),
[numberLabel](PaginationProps.md#numberlabel),

#### Defined in

svelte/bootstrap/src/components/pagination/pagination.gen.ts:204
