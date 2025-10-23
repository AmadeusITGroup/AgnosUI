Defined in: [core/src/components/rating/rating.ts:160](https://github.com/AmadeusITGroup/AgnosUI/blob/cb9aa94dfe24c7f900f9c3fbd07ef344329a3e75/core/src/components/rating/rating.ts#L160)

Represents the state of a rating component.

## Extends

- `RatingCommonPropsAndState`

## Properties

### ariaLabel

> **ariaLabel**: `string`

Defined in: [core/src/components/rating/rating.ts:78](https://github.com/AmadeusITGroup/AgnosUI/blob/cb9aa94dfe24c7f900f9c3fbd07ef344329a3e75/core/src/components/rating/rating.ts#L78)

The aria label

#### Default Value

`'Rating'`

#### Inherited from

`RatingCommonPropsAndState.ariaLabel`

***

### ariaLabelledBy

> **ariaLabelledBy**: `string`

Defined in: [core/src/components/rating/rating.ts:85](https://github.com/AmadeusITGroup/AgnosUI/blob/cb9aa94dfe24c7f900f9c3fbd07ef344329a3e75/core/src/components/rating/rating.ts#L85)

The aria labelled by

#### Default Value

`''`

#### Inherited from

`RatingCommonPropsAndState.ariaLabelledBy`

***

### ariaValueText

> **ariaValueText**: `string`

Defined in: [core/src/components/rating/rating.ts:164](https://github.com/AmadeusITGroup/AgnosUI/blob/cb9aa94dfe24c7f900f9c3fbd07ef344329a3e75/core/src/components/rating/rating.ts#L164)

the aria value of the rating

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/cb9aa94dfe24c7f900f9c3fbd07ef344329a3e75/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`RatingCommonPropsAndState.className`

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/rating/rating.ts:47](https://github.com/AmadeusITGroup/AgnosUI/blob/cb9aa94dfe24c7f900f9c3fbd07ef344329a3e75/core/src/components/rating/rating.ts#L47)

If `true`, the rating is disabled.

#### Default Value

`false`

#### Inherited from

`RatingCommonPropsAndState.disabled`

***

### interactive

> **interactive**: `boolean`

Defined in: [core/src/components/rating/rating.ts:172](https://github.com/AmadeusITGroup/AgnosUI/blob/cb9aa94dfe24c7f900f9c3fbd07ef344329a3e75/core/src/components/rating/rating.ts#L172)

is the rating interactive i.e. listening to hover, click and keyboard events

***

### maxRating

> **maxRating**: `number`

Defined in: [core/src/components/rating/rating.ts:40](https://github.com/AmadeusITGroup/AgnosUI/blob/cb9aa94dfe24c7f900f9c3fbd07ef344329a3e75/core/src/components/rating/rating.ts#L40)

The maximum rating that can be given.

#### Default Value

`10`

#### Inherited from

`RatingCommonPropsAndState.maxRating`

***

### rating

> **rating**: `number`

Defined in: [core/src/components/rating/rating.ts:33](https://github.com/AmadeusITGroup/AgnosUI/blob/cb9aa94dfe24c7f900f9c3fbd07ef344329a3e75/core/src/components/rating/rating.ts#L33)

The current rating. Could be a decimal value like `3.75`.

#### Default Value

`0`

#### Inherited from

`RatingCommonPropsAndState.rating`

***

### readonly

> **readonly**: `boolean`

Defined in: [core/src/components/rating/rating.ts:54](https://github.com/AmadeusITGroup/AgnosUI/blob/cb9aa94dfe24c7f900f9c3fbd07ef344329a3e75/core/src/components/rating/rating.ts#L54)

If `true`, the rating can't be changed.

#### Default Value

`false`

#### Inherited from

`RatingCommonPropsAndState.readonly`

***

### resettable

> **resettable**: `boolean`

Defined in: [core/src/components/rating/rating.ts:63](https://github.com/AmadeusITGroup/AgnosUI/blob/cb9aa94dfe24c7f900f9c3fbd07ef344329a3e75/core/src/components/rating/rating.ts#L63)

Define if the rating can be reset.

If set to true, the user can 'unset' the rating value by cliking on the current rating value.

#### Default Value

`true`

#### Inherited from

`RatingCommonPropsAndState.resettable`

***

### stars

> **stars**: [`StarContext`](StarContext.md)[]

Defined in: [core/src/components/rating/rating.ts:176](https://github.com/AmadeusITGroup/AgnosUI/blob/cb9aa94dfe24c7f900f9c3fbd07ef344329a3e75/core/src/components/rating/rating.ts#L176)

the list of stars

***

### tabindex

> **tabindex**: `number`

Defined in: [core/src/components/rating/rating.ts:71](https://github.com/AmadeusITGroup/AgnosUI/blob/cb9aa94dfe24c7f900f9c3fbd07ef344329a3e75/core/src/components/rating/rating.ts#L71)

Allows setting a custom rating tabindex.
If the component is disabled, `tabindex` will still be set to `-1`.

#### Default Value

`0`

#### Inherited from

`RatingCommonPropsAndState.tabindex`

***

### visibleRating

> **visibleRating**: `number`

Defined in: [core/src/components/rating/rating.ts:168](https://github.com/AmadeusITGroup/AgnosUI/blob/cb9aa94dfe24c7f900f9c3fbd07ef344329a3e75/core/src/components/rating/rating.ts#L168)

the visible value of the rating (it changes when hovering over the rating even though the real value did not change)
