Represents the state of a rating component.

## Extends

- `RatingCommonPropsAndState`

## Properties

### ariaLabel

> **ariaLabel**: `string`

The aria label

#### Default Value

`'Rating'`

#### Inherited from

`RatingCommonPropsAndState.ariaLabel`

#### Defined in

[core/src/components/rating/rating.ts:77](https://github.com/AmadeusITGroup/AgnosUI/blob/4a1fc363737c36ff7a942ce56cdca607c33d7f4e/core/src/components/rating/rating.ts#L77)

***

### ariaLabelledBy

> **ariaLabelledBy**: `string`

The aria labelled by

#### Default Value

`''`

#### Inherited from

`RatingCommonPropsAndState.ariaLabelledBy`

#### Defined in

[core/src/components/rating/rating.ts:84](https://github.com/AmadeusITGroup/AgnosUI/blob/4a1fc363737c36ff7a942ce56cdca607c33d7f4e/core/src/components/rating/rating.ts#L84)

***

### ariaValueText

> **ariaValueText**: `string`

the aria value of the rating

#### Defined in

[core/src/components/rating/rating.ts:163](https://github.com/AmadeusITGroup/AgnosUI/blob/4a1fc363737c36ff7a942ce56cdca607c33d7f4e/core/src/components/rating/rating.ts#L163)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`RatingCommonPropsAndState.className`

#### Defined in

[core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/4a1fc363737c36ff7a942ce56cdca607c33d7f4e/core/src/components/commonProps.ts#L10)

***

### disabled

> **disabled**: `boolean`

If `true`, the rating is disabled.

#### Default Value

`false`

#### Inherited from

`RatingCommonPropsAndState.disabled`

#### Defined in

[core/src/components/rating/rating.ts:46](https://github.com/AmadeusITGroup/AgnosUI/blob/4a1fc363737c36ff7a942ce56cdca607c33d7f4e/core/src/components/rating/rating.ts#L46)

***

### interactive

> **interactive**: `boolean`

is the rating interactive i.e. listening to hover, click and keyboard events

#### Defined in

[core/src/components/rating/rating.ts:171](https://github.com/AmadeusITGroup/AgnosUI/blob/4a1fc363737c36ff7a942ce56cdca607c33d7f4e/core/src/components/rating/rating.ts#L171)

***

### maxRating

> **maxRating**: `number`

The maximum rating that can be given.

#### Default Value

`10`

#### Inherited from

`RatingCommonPropsAndState.maxRating`

#### Defined in

[core/src/components/rating/rating.ts:39](https://github.com/AmadeusITGroup/AgnosUI/blob/4a1fc363737c36ff7a942ce56cdca607c33d7f4e/core/src/components/rating/rating.ts#L39)

***

### rating

> **rating**: `number`

The current rating. Could be a decimal value like `3.75`.

#### Default Value

`0`

#### Inherited from

`RatingCommonPropsAndState.rating`

#### Defined in

[core/src/components/rating/rating.ts:32](https://github.com/AmadeusITGroup/AgnosUI/blob/4a1fc363737c36ff7a942ce56cdca607c33d7f4e/core/src/components/rating/rating.ts#L32)

***

### readonly

> **readonly**: `boolean`

If `true`, the rating can't be changed.

#### Default Value

`false`

#### Inherited from

`RatingCommonPropsAndState.readonly`

#### Defined in

[core/src/components/rating/rating.ts:53](https://github.com/AmadeusITGroup/AgnosUI/blob/4a1fc363737c36ff7a942ce56cdca607c33d7f4e/core/src/components/rating/rating.ts#L53)

***

### resettable

> **resettable**: `boolean`

Define if the rating can be reset.

If set to true, the user can 'unset' the rating value by cliking on the current rating value.

#### Default Value

`true`

#### Inherited from

`RatingCommonPropsAndState.resettable`

#### Defined in

[core/src/components/rating/rating.ts:62](https://github.com/AmadeusITGroup/AgnosUI/blob/4a1fc363737c36ff7a942ce56cdca607c33d7f4e/core/src/components/rating/rating.ts#L62)

***

### stars

> **stars**: [`StarContext`](StarContext.md)[]

the list of stars

#### Defined in

[core/src/components/rating/rating.ts:175](https://github.com/AmadeusITGroup/AgnosUI/blob/4a1fc363737c36ff7a942ce56cdca607c33d7f4e/core/src/components/rating/rating.ts#L175)

***

### tabindex

> **tabindex**: `number`

Allows setting a custom rating tabindex.
If the component is disabled, `tabindex` will still be set to `-1`.

#### Default Value

`0`

#### Inherited from

`RatingCommonPropsAndState.tabindex`

#### Defined in

[core/src/components/rating/rating.ts:70](https://github.com/AmadeusITGroup/AgnosUI/blob/4a1fc363737c36ff7a942ce56cdca607c33d7f4e/core/src/components/rating/rating.ts#L70)

***

### visibleRating

> **visibleRating**: `number`

the visible value of the rating (it changes when hovering over the rating even though the real value did not change)

#### Defined in

[core/src/components/rating/rating.ts:167](https://github.com/AmadeusITGroup/AgnosUI/blob/4a1fc363737c36ff7a942ce56cdca607c33d7f4e/core/src/components/rating/rating.ts#L167)
