Represents the state of a rating component.

## Extends

- `RatingState`.`RatingExtraProps`

## Properties

### ariaLabel

> **ariaLabel**: `string`

The aria label

#### Default Value

`'Rating'`

#### Inherited from

`CoreState.ariaLabel`

#### Defined in

[core/src/components/rating/rating.ts:77](https://github.com/AmadeusITGroup/AgnosUI/blob/afe3e2be22bd6b1cf4293c91ff1a25bfd2725ec6/core/src/components/rating/rating.ts#L77)

***

### ariaLabelledBy

> **ariaLabelledBy**: `string`

The aria labelled by

#### Default Value

`''`

#### Inherited from

`CoreState.ariaLabelledBy`

#### Defined in

[core/src/components/rating/rating.ts:84](https://github.com/AmadeusITGroup/AgnosUI/blob/afe3e2be22bd6b1cf4293c91ff1a25bfd2725ec6/core/src/components/rating/rating.ts#L84)

***

### ariaValueText

> **ariaValueText**: `string`

the aria value of the rating

#### Inherited from

`CoreState.ariaValueText`

#### Defined in

[core/src/components/rating/rating.ts:163](https://github.com/AmadeusITGroup/AgnosUI/blob/afe3e2be22bd6b1cf4293c91ff1a25bfd2725ec6/core/src/components/rating/rating.ts#L163)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreState.className`

#### Defined in

[core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/afe3e2be22bd6b1cf4293c91ff1a25bfd2725ec6/core/src/components/commonProps.ts#L10)

***

### disabled

> **disabled**: `boolean`

If `true`, the rating is disabled.

#### Default Value

`false`

#### Inherited from

`CoreState.disabled`

#### Defined in

[core/src/components/rating/rating.ts:46](https://github.com/AmadeusITGroup/AgnosUI/blob/afe3e2be22bd6b1cf4293c91ff1a25bfd2725ec6/core/src/components/rating/rating.ts#L46)

***

### interactive

> **interactive**: `boolean`

is the rating interactive i.e. listening to hover, click and keyboard events

#### Inherited from

`CoreState.interactive`

#### Defined in

[core/src/components/rating/rating.ts:171](https://github.com/AmadeusITGroup/AgnosUI/blob/afe3e2be22bd6b1cf4293c91ff1a25bfd2725ec6/core/src/components/rating/rating.ts#L171)

***

### maxRating

> **maxRating**: `number`

The maximum rating that can be given.

#### Default Value

`10`

#### Inherited from

`CoreState.maxRating`

#### Defined in

[core/src/components/rating/rating.ts:39](https://github.com/AmadeusITGroup/AgnosUI/blob/afe3e2be22bd6b1cf4293c91ff1a25bfd2725ec6/core/src/components/rating/rating.ts#L39)

***

### rating

> **rating**: `number`

The current rating. Could be a decimal value like `3.75`.

#### Default Value

`0`

#### Inherited from

`CoreState.rating`

#### Defined in

[core/src/components/rating/rating.ts:32](https://github.com/AmadeusITGroup/AgnosUI/blob/afe3e2be22bd6b1cf4293c91ff1a25bfd2725ec6/core/src/components/rating/rating.ts#L32)

***

### readonly

> **readonly**: `boolean`

If `true`, the rating can't be changed.

#### Default Value

`false`

#### Inherited from

`CoreState.readonly`

#### Defined in

[core/src/components/rating/rating.ts:53](https://github.com/AmadeusITGroup/AgnosUI/blob/afe3e2be22bd6b1cf4293c91ff1a25bfd2725ec6/core/src/components/rating/rating.ts#L53)

***

### resettable

> **resettable**: `boolean`

Define if the rating can be reset.

If set to true, the user can 'unset' the rating value by cliking on the current rating value.

#### Default Value

`true`

#### Inherited from

`CoreState.resettable`

#### Defined in

[core/src/components/rating/rating.ts:62](https://github.com/AmadeusITGroup/AgnosUI/blob/afe3e2be22bd6b1cf4293c91ff1a25bfd2725ec6/core/src/components/rating/rating.ts#L62)

***

### star

> **star**: `SlotContent`\<[`StarContext`](StarContext.md)\>

The template to override the way each star is displayed.

#### Default Value

```ts
({fill}: StarContext) => String.fromCharCode(fill === 100 ? 9733 : 9734)
```

#### Inherited from

`RatingExtraProps.star`

#### Defined in

[core-bootstrap/src/components/rating/rating.ts:17](https://github.com/AmadeusITGroup/AgnosUI/blob/afe3e2be22bd6b1cf4293c91ff1a25bfd2725ec6/core-bootstrap/src/components/rating/rating.ts#L17)

***

### stars

> **stars**: [`StarContext`](StarContext.md)[]

the list of stars

#### Inherited from

`CoreState.stars`

#### Defined in

[core/src/components/rating/rating.ts:175](https://github.com/AmadeusITGroup/AgnosUI/blob/afe3e2be22bd6b1cf4293c91ff1a25bfd2725ec6/core/src/components/rating/rating.ts#L175)

***

### tabindex

> **tabindex**: `number`

Allows setting a custom rating tabindex.
If the component is disabled, `tabindex` will still be set to `-1`.

#### Default Value

`0`

#### Inherited from

`CoreState.tabindex`

#### Defined in

[core/src/components/rating/rating.ts:70](https://github.com/AmadeusITGroup/AgnosUI/blob/afe3e2be22bd6b1cf4293c91ff1a25bfd2725ec6/core/src/components/rating/rating.ts#L70)

***

### visibleRating

> **visibleRating**: `number`

the visible value of the rating (it changes when hovering over the rating even though the real value did not change)

#### Inherited from

`CoreState.visibleRating`

#### Defined in

[core/src/components/rating/rating.ts:167](https://github.com/AmadeusITGroup/AgnosUI/blob/afe3e2be22bd6b1cf4293c91ff1a25bfd2725ec6/core/src/components/rating/rating.ts#L167)
