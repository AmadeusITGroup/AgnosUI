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

[core/src/components/rating/rating.ts:74](https://github.com/AmadeusITGroup/AgnosUI/blob/4dac0a02d22ea202f7dd7aacf20c917736b916e0/core/src/components/rating/rating.ts#L74)

***

### ariaLabelledBy

> **ariaLabelledBy**: `string`

The aria labelled by

#### Default Value

`''`

#### Inherited from

`RatingCommonPropsAndState.ariaLabelledBy`

#### Defined in

[core/src/components/rating/rating.ts:81](https://github.com/AmadeusITGroup/AgnosUI/blob/4dac0a02d22ea202f7dd7aacf20c917736b916e0/core/src/components/rating/rating.ts#L81)

***

### ariaValueTextFn()

> **ariaValueTextFn**: (`rating`, `maxRating`) => `string`

Return the value for the 'aria-valuetext' attribute.

#### Parameters

• **rating**: `number`

Current rating value.

• **maxRating**: `number`

maxRating value.

#### Returns

`string`

#### Default Value

```ts
(rating: number, maxRating: number) => `${rating} out of ${maxRating}`
```

#### Defined in

[core/src/components/rating/rating.ts:95](https://github.com/AmadeusITGroup/AgnosUI/blob/4dac0a02d22ea202f7dd7aacf20c917736b916e0/core/src/components/rating/rating.ts#L95)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`RatingCommonPropsAndState.className`

#### Defined in

[core/src/components/commonProps.ts:7](https://github.com/AmadeusITGroup/AgnosUI/blob/4dac0a02d22ea202f7dd7aacf20c917736b916e0/core/src/components/commonProps.ts#L7)

***

### disabled

> **disabled**: `boolean`

If `true`, the rating is disabled.

#### Default Value

`false`

#### Inherited from

`RatingCommonPropsAndState.disabled`

#### Defined in

[core/src/components/rating/rating.ts:43](https://github.com/AmadeusITGroup/AgnosUI/blob/4dac0a02d22ea202f7dd7aacf20c917736b916e0/core/src/components/rating/rating.ts#L43)

***

### maxRating

> **maxRating**: `number`

The maximum rating that can be given.

#### Default Value

`10`

#### Inherited from

`RatingCommonPropsAndState.maxRating`

#### Defined in

[core/src/components/rating/rating.ts:36](https://github.com/AmadeusITGroup/AgnosUI/blob/4dac0a02d22ea202f7dd7aacf20c917736b916e0/core/src/components/rating/rating.ts#L36)

***

### onHover()

> **onHover**: (`rating`) => `void`

An event emitted when the user is hovering over a given rating.

Event payload is equal to the rating being hovered over.

#### Parameters

• **rating**: `number`

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Defined in

[core/src/components/rating/rating.ts:119](https://github.com/AmadeusITGroup/AgnosUI/blob/4dac0a02d22ea202f7dd7aacf20c917736b916e0/core/src/components/rating/rating.ts#L119)

***

### onLeave()

> **onLeave**: (`rating`) => `void`

An event emitted when the user stops hovering over a given rating.

Event payload is equal to the rating of the last item being hovered over.

#### Parameters

• **rating**: `number`

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Defined in

[core/src/components/rating/rating.ts:131](https://github.com/AmadeusITGroup/AgnosUI/blob/4dac0a02d22ea202f7dd7aacf20c917736b916e0/core/src/components/rating/rating.ts#L131)

***

### onRatingChange()

> **onRatingChange**: (`rating`) => `void`

An event emitted when the rating is changed.

Event payload is equal to the newly selected rating.

#### Parameters

• **rating**: `number`

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Defined in

[core/src/components/rating/rating.ts:107](https://github.com/AmadeusITGroup/AgnosUI/blob/4dac0a02d22ea202f7dd7aacf20c917736b916e0/core/src/components/rating/rating.ts#L107)

***

### rating

> **rating**: `number`

The current rating. Could be a decimal value like `3.75`.

#### Default Value

`0`

#### Inherited from

`RatingCommonPropsAndState.rating`

#### Defined in

[core/src/components/rating/rating.ts:29](https://github.com/AmadeusITGroup/AgnosUI/blob/4dac0a02d22ea202f7dd7aacf20c917736b916e0/core/src/components/rating/rating.ts#L29)

***

### readonly

> **readonly**: `boolean`

If `true`, the rating can't be changed.

#### Default Value

`false`

#### Inherited from

`RatingCommonPropsAndState.readonly`

#### Defined in

[core/src/components/rating/rating.ts:50](https://github.com/AmadeusITGroup/AgnosUI/blob/4dac0a02d22ea202f7dd7aacf20c917736b916e0/core/src/components/rating/rating.ts#L50)

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

[core/src/components/rating/rating.ts:59](https://github.com/AmadeusITGroup/AgnosUI/blob/4dac0a02d22ea202f7dd7aacf20c917736b916e0/core/src/components/rating/rating.ts#L59)

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

[core/src/components/rating/rating.ts:67](https://github.com/AmadeusITGroup/AgnosUI/blob/4dac0a02d22ea202f7dd7aacf20c917736b916e0/core/src/components/rating/rating.ts#L67)
