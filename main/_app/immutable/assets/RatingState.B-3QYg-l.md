Defined in: [core-bootstrap/src/components/rating/rating.ts:23](https://github.com/AmadeusITGroup/AgnosUI/blob/1eaef27d70ac5240bb4138f138cfed95669218c6/core-bootstrap/src/components/rating/rating.ts#L23)

Represents the state of a rating component.

## Extends

- `RatingState`.`RatingExtraProps`

## Properties

### ariaLabel

> **ariaLabel**: `string`

Defined in: [core/src/components/rating/rating.ts:78](https://github.com/AmadeusITGroup/AgnosUI/blob/1eaef27d70ac5240bb4138f138cfed95669218c6/core/src/components/rating/rating.ts#L78)

The aria label

#### Default Value

`'Rating'`

#### Inherited from

`CoreState.ariaLabel`

***

### ariaLabelledBy

> **ariaLabelledBy**: `string`

Defined in: [core/src/components/rating/rating.ts:85](https://github.com/AmadeusITGroup/AgnosUI/blob/1eaef27d70ac5240bb4138f138cfed95669218c6/core/src/components/rating/rating.ts#L85)

The aria labelled by

#### Default Value

`''`

#### Inherited from

`CoreState.ariaLabelledBy`

***

### ariaValueText

> **ariaValueText**: `string`

Defined in: [core/src/components/rating/rating.ts:164](https://github.com/AmadeusITGroup/AgnosUI/blob/1eaef27d70ac5240bb4138f138cfed95669218c6/core/src/components/rating/rating.ts#L164)

the aria value of the rating

#### Inherited from

`CoreState.ariaValueText`

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/1eaef27d70ac5240bb4138f138cfed95669218c6/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreState.className`

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/rating/rating.ts:47](https://github.com/AmadeusITGroup/AgnosUI/blob/1eaef27d70ac5240bb4138f138cfed95669218c6/core/src/components/rating/rating.ts#L47)

If `true`, the rating is disabled.

#### Default Value

`false`

#### Inherited from

`CoreState.disabled`

***

### interactive

> **interactive**: `boolean`

Defined in: [core/src/components/rating/rating.ts:172](https://github.com/AmadeusITGroup/AgnosUI/blob/1eaef27d70ac5240bb4138f138cfed95669218c6/core/src/components/rating/rating.ts#L172)

is the rating interactive i.e. listening to hover, click and keyboard events

#### Inherited from

`CoreState.interactive`

***

### maxRating

> **maxRating**: `number`

Defined in: [core/src/components/rating/rating.ts:40](https://github.com/AmadeusITGroup/AgnosUI/blob/1eaef27d70ac5240bb4138f138cfed95669218c6/core/src/components/rating/rating.ts#L40)

The maximum rating that can be given.

#### Default Value

`10`

#### Inherited from

`CoreState.maxRating`

***

### rating

> **rating**: `number`

Defined in: [core/src/components/rating/rating.ts:33](https://github.com/AmadeusITGroup/AgnosUI/blob/1eaef27d70ac5240bb4138f138cfed95669218c6/core/src/components/rating/rating.ts#L33)

The current rating. Could be a decimal value like `3.75`.

#### Default Value

`0`

#### Inherited from

`CoreState.rating`

***

### readonly

> **readonly**: `boolean`

Defined in: [core/src/components/rating/rating.ts:54](https://github.com/AmadeusITGroup/AgnosUI/blob/1eaef27d70ac5240bb4138f138cfed95669218c6/core/src/components/rating/rating.ts#L54)

If `true`, the rating can't be changed.

#### Default Value

`false`

#### Inherited from

`CoreState.readonly`

***

### resettable

> **resettable**: `boolean`

Defined in: [core/src/components/rating/rating.ts:63](https://github.com/AmadeusITGroup/AgnosUI/blob/1eaef27d70ac5240bb4138f138cfed95669218c6/core/src/components/rating/rating.ts#L63)

Define if the rating can be reset.

If set to true, the user can 'unset' the rating value by cliking on the current rating value.

#### Default Value

`true`

#### Inherited from

`CoreState.resettable`

***

### star

> **star**: `SlotContent`\<[`StarContext`](StarContext.md)\>

Defined in: [core-bootstrap/src/components/rating/rating.ts:17](https://github.com/AmadeusITGroup/AgnosUI/blob/1eaef27d70ac5240bb4138f138cfed95669218c6/core-bootstrap/src/components/rating/rating.ts#L17)

The template to override the way each star is displayed.

#### Default Value

```ts
({fill}: StarContext) => String.fromCharCode(fill === 100 ? 9733 : 9734)
```

#### Inherited from

`RatingExtraProps.star`

***

### stars

> **stars**: [`StarContext`](StarContext.md)[]

Defined in: [core/src/components/rating/rating.ts:176](https://github.com/AmadeusITGroup/AgnosUI/blob/1eaef27d70ac5240bb4138f138cfed95669218c6/core/src/components/rating/rating.ts#L176)

the list of stars

#### Inherited from

`CoreState.stars`

***

### tabindex

> **tabindex**: `number`

Defined in: [core/src/components/rating/rating.ts:71](https://github.com/AmadeusITGroup/AgnosUI/blob/1eaef27d70ac5240bb4138f138cfed95669218c6/core/src/components/rating/rating.ts#L71)

Allows setting a custom rating tabindex.
If the component is disabled, `tabindex` will still be set to `-1`.

#### Default Value

`0`

#### Inherited from

`CoreState.tabindex`

***

### visibleRating

> **visibleRating**: `number`

Defined in: [core/src/components/rating/rating.ts:168](https://github.com/AmadeusITGroup/AgnosUI/blob/1eaef27d70ac5240bb4138f138cfed95669218c6/core/src/components/rating/rating.ts#L168)

the visible value of the rating (it changes when hovering over the rating even though the real value did not change)

#### Inherited from

`CoreState.visibleRating`
