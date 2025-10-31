Defined in: [core-bootstrap/src/components/pagination/pagination.ts:117](https://github.com/AmadeusITGroup/AgnosUI/blob/7a5fa43d68e9de05896f308e16eb1570eb1ad379/core-bootstrap/src/components/pagination/pagination.ts#L117)

Represents the state of a pagination component.

## Extends

- `PaginationState`.`PaginationExtraProps`

## Properties

### activeLabel

> **activeLabel**: `string`

Defined in: [core/src/components/pagination/pagination.ts:45](https://github.com/AmadeusITGroup/AgnosUI/blob/7a5fa43d68e9de05896f308e16eb1570eb1ad379/core/src/components/pagination/pagination.ts#L45)

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

Defined in: [core/src/components/pagination/pagination.ts:102](https://github.com/AmadeusITGroup/AgnosUI/blob/7a5fa43d68e9de05896f308e16eb1570eb1ad379/core/src/components/pagination/pagination.ts#L102)

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

Defined in: [core/src/components/pagination/pagination.ts:57](https://github.com/AmadeusITGroup/AgnosUI/blob/7a5fa43d68e9de05896f308e16eb1570eb1ad379/core/src/components/pagination/pagination.ts#L57)

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

Defined in: [core/src/components/pagination/pagination.ts:33](https://github.com/AmadeusITGroup/AgnosUI/blob/7a5fa43d68e9de05896f308e16eb1570eb1ad379/core/src/components/pagination/pagination.ts#L33)

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

Defined in: [core/src/components/pagination/pagination.ts:93](https://github.com/AmadeusITGroup/AgnosUI/blob/7a5fa43d68e9de05896f308e16eb1570eb1ad379/core/src/components/pagination/pagination.ts#L93)

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

Defined in: [core/src/components/pagination/pagination.ts:274](https://github.com/AmadeusITGroup/AgnosUI/blob/7a5fa43d68e9de05896f308e16eb1570eb1ad379/core/src/components/pagination/pagination.ts#L274)

The aria-live text

#### Inherited from

`CoreState.ariaLiveLabelText`

***

### ariaNextLabel

> **ariaNextLabel**: `string`

Defined in: [core/src/components/pagination/pagination.ts:81](https://github.com/AmadeusITGroup/AgnosUI/blob/7a5fa43d68e9de05896f308e16eb1570eb1ad379/core/src/components/pagination/pagination.ts#L81)

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

Defined in: [core/src/components/pagination/pagination.ts:69](https://github.com/AmadeusITGroup/AgnosUI/blob/7a5fa43d68e9de05896f308e16eb1570eb1ad379/core/src/components/pagination/pagination.ts#L69)

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

Defined in: [core/src/components/pagination/pagination.ts:123](https://github.com/AmadeusITGroup/AgnosUI/blob/7a5fa43d68e9de05896f308e16eb1570eb1ad379/core/src/components/pagination/pagination.ts#L123)

If `true`, the "First" and "Last" page links are shown.

#### Default Value

`false`

#### Inherited from

`CoreState.boundaryLinks`

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/7a5fa43d68e9de05896f308e16eb1570eb1ad379/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreState.className`

***

### directionLinks

> **directionLinks**: `boolean`

Defined in: [core/src/components/pagination/pagination.ts:116](https://github.com/AmadeusITGroup/AgnosUI/blob/7a5fa43d68e9de05896f308e16eb1570eb1ad379/core/src/components/pagination/pagination.ts#L116)

If `true`, the "Next" and "Previous" page links are shown.

#### Default Value

`true`

#### Inherited from

`CoreState.directionLinks`

***

### directionsHrefs

> **directionsHrefs**: [`DirectionsHrefs`](DirectionsHrefs.md)

Defined in: [core/src/components/pagination/pagination.ts:271](https://github.com/AmadeusITGroup/AgnosUI/blob/7a5fa43d68e9de05896f308e16eb1570eb1ad379/core/src/components/pagination/pagination.ts#L271)

The hrefs for the direction links

#### Inherited from

`CoreState.directionsHrefs`

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/pagination/pagination.ts:109](https://github.com/AmadeusITGroup/AgnosUI/blob/7a5fa43d68e9de05896f308e16eb1570eb1ad379/core/src/components/pagination/pagination.ts#L109)

If `true`, pagination links will be disabled.

#### Default Value

`false`

#### Inherited from

`CoreState.disabled`

***

### ellipsisLabel

> **ellipsisLabel**: `SlotContent`\<[`PaginationContext`](PaginationContext.md)\>

Defined in: [core-bootstrap/src/components/pagination/pagination.ts:46](https://github.com/AmadeusITGroup/AgnosUI/blob/7a5fa43d68e9de05896f308e16eb1570eb1ad379/core-bootstrap/src/components/pagination/pagination.ts#L46)

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

Defined in: [core-bootstrap/src/components/pagination/pagination.ts:55](https://github.com/AmadeusITGroup/AgnosUI/blob/7a5fa43d68e9de05896f308e16eb1570eb1ad379/core-bootstrap/src/components/pagination/pagination.ts#L55)

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

Defined in: [core-bootstrap/src/components/pagination/pagination.ts:82](https://github.com/AmadeusITGroup/AgnosUI/blob/7a5fa43d68e9de05896f308e16eb1570eb1ad379/core-bootstrap/src/components/pagination/pagination.ts#L82)

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

Defined in: [core/src/components/pagination/pagination.ts:261](https://github.com/AmadeusITGroup/AgnosUI/blob/7a5fa43d68e9de05896f308e16eb1570eb1ad379/core/src/components/pagination/pagination.ts#L261)

true if the next link need to be disabled

#### Inherited from

`CoreState.nextDisabled`

***

### nextPageLabel

> **nextPageLabel**: `SlotContent`\<[`PaginationContext`](PaginationContext.md)\>

Defined in: [core-bootstrap/src/components/pagination/pagination.ts:73](https://github.com/AmadeusITGroup/AgnosUI/blob/7a5fa43d68e9de05896f308e16eb1570eb1ad379/core-bootstrap/src/components/pagination/pagination.ts#L73)

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

Defined in: [core-bootstrap/src/components/pagination/pagination.ts:102](https://github.com/AmadeusITGroup/AgnosUI/blob/7a5fa43d68e9de05896f308e16eb1570eb1ad379/core-bootstrap/src/components/pagination/pagination.ts#L102)

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

Defined in: [core/src/components/pagination/pagination.ts:23](https://github.com/AmadeusITGroup/AgnosUI/blob/7a5fa43d68e9de05896f308e16eb1570eb1ad379/core/src/components/pagination/pagination.ts#L23)

The current page.

Page numbers start with `1`.

#### Default Value

`1`

#### Inherited from

`CoreState.page`

***

### pageCount

> **pageCount**: `number`

Defined in: [core/src/components/pagination/pagination.ts:249](https://github.com/AmadeusITGroup/AgnosUI/blob/7a5fa43d68e9de05896f308e16eb1570eb1ad379/core/src/components/pagination/pagination.ts#L249)

The number of pages.

#### Inherited from

`CoreState.pageCount`

***

### pages

> **pages**: `number`[]

Defined in: [core/src/components/pagination/pagination.ts:253](https://github.com/AmadeusITGroup/AgnosUI/blob/7a5fa43d68e9de05896f308e16eb1570eb1ad379/core/src/components/pagination/pagination.ts#L253)

The current pages, the number in the Array is the number of the page.

#### Inherited from

`CoreState.pages`

***

### pagesDisplay

> **pagesDisplay**: `SlotContent`\<[`PaginationContext`](PaginationContext.md)\>

Defined in: [core-bootstrap/src/components/pagination/pagination.ts:89](https://github.com/AmadeusITGroup/AgnosUI/blob/7a5fa43d68e9de05896f308e16eb1570eb1ad379/core-bootstrap/src/components/pagination/pagination.ts#L89)

The template to use for the pages slot
To use to customize the pages view
override any configuration parameters provided for this

#### Inherited from

`PaginationExtraProps.pagesDisplay`

***

### pagesHrefs

> **pagesHrefs**: `string`[]

Defined in: [core/src/components/pagination/pagination.ts:268](https://github.com/AmadeusITGroup/AgnosUI/blob/7a5fa43d68e9de05896f308e16eb1570eb1ad379/core/src/components/pagination/pagination.ts#L268)

The hrefs for each "Page" page link

#### Inherited from

`CoreState.pagesHrefs`

***

### pagesLabel

> **pagesLabel**: `string`[]

Defined in: [core/src/components/pagination/pagination.ts:265](https://github.com/AmadeusITGroup/AgnosUI/blob/7a5fa43d68e9de05896f308e16eb1570eb1ad379/core/src/components/pagination/pagination.ts#L265)

The label for each "Page" page link.

#### Inherited from

`CoreState.pagesLabel`

***

### previousDisabled

> **previousDisabled**: `boolean`

Defined in: [core/src/components/pagination/pagination.ts:257](https://github.com/AmadeusITGroup/AgnosUI/blob/7a5fa43d68e9de05896f308e16eb1570eb1ad379/core/src/components/pagination/pagination.ts#L257)

true if the previous link need to be disabled

#### Inherited from

`CoreState.previousDisabled`

***

### previousPageLabel

> **previousPageLabel**: `SlotContent`\<[`PaginationContext`](PaginationContext.md)\>

Defined in: [core-bootstrap/src/components/pagination/pagination.ts:64](https://github.com/AmadeusITGroup/AgnosUI/blob/7a5fa43d68e9de05896f308e16eb1570eb1ad379/core-bootstrap/src/components/pagination/pagination.ts#L64)

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

Defined in: [core-bootstrap/src/components/pagination/pagination.ts:111](https://github.com/AmadeusITGroup/AgnosUI/blob/7a5fa43d68e9de05896f308e16eb1570eb1ad379/core-bootstrap/src/components/pagination/pagination.ts#L111)

The pagination display size.

Bootstrap currently supports small and large sizes.

#### Default Value

`null`

#### Inherited from

`PaginationExtraProps.size`

***

### structure

> **structure**: `SlotContent`\<[`PaginationContext`](PaginationContext.md)\>

Defined in: [core-bootstrap/src/components/pagination/pagination.ts:37](https://github.com/AmadeusITGroup/AgnosUI/blob/7a5fa43d68e9de05896f308e16eb1570eb1ad379/core-bootstrap/src/components/pagination/pagination.ts#L37)

The template to use for the structure of the pagination component
The default structure uses [ellipsisLabel](#ellipsislabel), [firstPageLabel](#firstpagelabel),
[previousPageLabel](#previouspagelabel), [nextPageLabel](#nextpagelabel),
[lastPageLabel](#lastpagelabel), [pagesDisplay](#pagesdisplay),
[numberLabel](#numberlabel),

#### Inherited from

`PaginationExtraProps.structure`
