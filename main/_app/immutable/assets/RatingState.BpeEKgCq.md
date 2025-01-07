Defined in: [core/src/components/rating/rating.ts:159](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/rating/rating.ts#L159)

Represents the state of a rating component.

## Extends

- `RatingCommonPropsAndState`

## Properties

### ariaLabel

> **ariaLabel**: `string`

Defined in: [core/src/components/rating/rating.ts:77](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/rating/rating.ts#L77)

The aria label

#### Default Value

`'Rating'`

#### Inherited from

`RatingCommonPropsAndState.ariaLabel`

***

### ariaLabelledBy

> **ariaLabelledBy**: `string`

Defined in: [core/src/components/rating/rating.ts:84](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/rating/rating.ts#L84)

The aria labelled by

#### Default Value

`''`

#### Inherited from

`RatingCommonPropsAndState.ariaLabelledBy`

***

### ariaValueText

> **ariaValueText**: `string`

Defined in: [core/src/components/rating/rating.ts:163](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/rating/rating.ts#L163)

the aria value of the rating

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`RatingCommonPropsAndState.className`

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/rating/rating.ts:46](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/rating/rating.ts#L46)

If `true`, the rating is disabled.

#### Default Value

`false`

#### Inherited from

`RatingCommonPropsAndState.disabled`

***

### interactive

> **interactive**: `boolean`

Defined in: [core/src/components/rating/rating.ts:171](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/rating/rating.ts#L171)

is the rating interactive i.e. listening to hover, click and keyboard events

***

### maxRating

> **maxRating**: `number`

Defined in: [core/src/components/rating/rating.ts:39](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/rating/rating.ts#L39)

The maximum rating that can be given.

#### Default Value

`10`

#### Inherited from

`RatingCommonPropsAndState.maxRating`

***

### rating

> **rating**: `number`

Defined in: [core/src/components/rating/rating.ts:32](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/rating/rating.ts#L32)

The current rating. Could be a decimal value like `3.75`.

#### Default Value

`0`

#### Inherited from

`RatingCommonPropsAndState.rating`

***

### readonly

> **readonly**: `boolean`

Defined in: [core/src/components/rating/rating.ts:53](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/rating/rating.ts#L53)

If `true`, the rating can't be changed.

#### Default Value

`false`

#### Inherited from

`RatingCommonPropsAndState.readonly`

***

### resettable

> **resettable**: `boolean`

Defined in: [core/src/components/rating/rating.ts:62](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/rating/rating.ts#L62)

Define if the rating can be reset.

If set to true, the user can 'unset' the rating value by cliking on the current rating value.

#### Default Value

`true`

#### Inherited from

`RatingCommonPropsAndState.resettable`

***

### stars

> **stars**: [`StarContext`](StarContext.md)[]

Defined in: [core/src/components/rating/rating.ts:175](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/rating/rating.ts#L175)

the list of stars

***

### tabindex

> **tabindex**: `number`

Defined in: [core/src/components/rating/rating.ts:70](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/rating/rating.ts#L70)

Allows setting a custom rating tabindex.
If the component is disabled, `tabindex` will still be set to `-1`.

#### Default Value

`0`

#### Inherited from

`RatingCommonPropsAndState.tabindex`

***

### visibleRating

> **visibleRating**: `number`

Defined in: [core/src/components/rating/rating.ts:167](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/rating/rating.ts#L167)

the visible value of the rating (it changes when hovering over the rating even though the real value did not change)
