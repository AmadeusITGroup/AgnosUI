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

[core/src/components/rating/rating.ts:74](https://github.com/AmadeusITGroup/AgnosUI/blob/5ce4b81256ac6fd1ece61caed207cb3a0fb00b77/core/src/components/rating/rating.ts#L74)

***

### ariaLabelledBy

> **ariaLabelledBy**: `string`

The aria labelled by

#### Default Value

`''`

#### Inherited from

`CoreState.ariaLabelledBy`

#### Defined in

[core/src/components/rating/rating.ts:81](https://github.com/AmadeusITGroup/AgnosUI/blob/5ce4b81256ac6fd1ece61caed207cb3a0fb00b77/core/src/components/rating/rating.ts#L81)

***

### ariaValueText

> **ariaValueText**: `string`

the aria value of the rating

#### Inherited from

`CoreState.ariaValueText`

#### Defined in

[core/src/components/rating/rating.ts:151](https://github.com/AmadeusITGroup/AgnosUI/blob/5ce4b81256ac6fd1ece61caed207cb3a0fb00b77/core/src/components/rating/rating.ts#L151)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreState.className`

#### Defined in

[core/src/components/commonProps.ts:7](https://github.com/AmadeusITGroup/AgnosUI/blob/5ce4b81256ac6fd1ece61caed207cb3a0fb00b77/core/src/components/commonProps.ts#L7)

***

### disabled

> **disabled**: `boolean`

If `true`, the rating is disabled.

#### Default Value

`false`

#### Inherited from

`CoreState.disabled`

#### Defined in

[core/src/components/rating/rating.ts:43](https://github.com/AmadeusITGroup/AgnosUI/blob/5ce4b81256ac6fd1ece61caed207cb3a0fb00b77/core/src/components/rating/rating.ts#L43)

***

### interactive

> **interactive**: `boolean`

is the rating interactive i.e. listening to hover, click and keyboard events

#### Inherited from

`CoreState.interactive`

#### Defined in

[core/src/components/rating/rating.ts:159](https://github.com/AmadeusITGroup/AgnosUI/blob/5ce4b81256ac6fd1ece61caed207cb3a0fb00b77/core/src/components/rating/rating.ts#L159)

***

### maxRating

> **maxRating**: `number`

The maximum rating that can be given.

#### Default Value

`10`

#### Inherited from

`CoreState.maxRating`

#### Defined in

[core/src/components/rating/rating.ts:36](https://github.com/AmadeusITGroup/AgnosUI/blob/5ce4b81256ac6fd1ece61caed207cb3a0fb00b77/core/src/components/rating/rating.ts#L36)

***

### rating

> **rating**: `number`

The current rating. Could be a decimal value like `3.75`.

#### Default Value

`0`

#### Inherited from

`CoreState.rating`

#### Defined in

[core/src/components/rating/rating.ts:29](https://github.com/AmadeusITGroup/AgnosUI/blob/5ce4b81256ac6fd1ece61caed207cb3a0fb00b77/core/src/components/rating/rating.ts#L29)

***

### readonly

> **readonly**: `boolean`

If `true`, the rating can't be changed.

#### Default Value

`false`

#### Inherited from

`CoreState.readonly`

#### Defined in

[core/src/components/rating/rating.ts:50](https://github.com/AmadeusITGroup/AgnosUI/blob/5ce4b81256ac6fd1ece61caed207cb3a0fb00b77/core/src/components/rating/rating.ts#L50)

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

[core/src/components/rating/rating.ts:59](https://github.com/AmadeusITGroup/AgnosUI/blob/5ce4b81256ac6fd1ece61caed207cb3a0fb00b77/core/src/components/rating/rating.ts#L59)

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

[core-bootstrap/src/components/rating/rating.ts:23](https://github.com/AmadeusITGroup/AgnosUI/blob/5ce4b81256ac6fd1ece61caed207cb3a0fb00b77/core-bootstrap/src/components/rating/rating.ts#L23)

***

### stars

> **stars**: [`StarContext`](StarContext.md)[]

the list of stars

#### Inherited from

`CoreState.stars`

#### Defined in

[core/src/components/rating/rating.ts:163](https://github.com/AmadeusITGroup/AgnosUI/blob/5ce4b81256ac6fd1ece61caed207cb3a0fb00b77/core/src/components/rating/rating.ts#L163)

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

[core/src/components/rating/rating.ts:67](https://github.com/AmadeusITGroup/AgnosUI/blob/5ce4b81256ac6fd1ece61caed207cb3a0fb00b77/core/src/components/rating/rating.ts#L67)

***

### visibleRating

> **visibleRating**: `number`

the visible value of the rating (it changes when hovering over the rating even though the real value did not change)

#### Inherited from

`CoreState.visibleRating`

#### Defined in

[core/src/components/rating/rating.ts:155](https://github.com/AmadeusITGroup/AgnosUI/blob/5ce4b81256ac6fd1ece61caed207cb3a0fb00b77/core/src/components/rating/rating.ts#L155)
