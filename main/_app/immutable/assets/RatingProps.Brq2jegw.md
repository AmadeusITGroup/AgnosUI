Defined in: [core/src/components/rating/rating.ts:91](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/rating/rating.ts#L91)

Interface representing the properties for the Rating widget.

## Extends

- `RatingCommonPropsAndState`

## Properties

### ariaLabel

> **ariaLabel**: `string`

Defined in: [core/src/components/rating/rating.ts:78](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/rating/rating.ts#L78)

The aria label

#### Default Value

`'Rating'`

#### Inherited from

`RatingCommonPropsAndState.ariaLabel`

***

### ariaLabelledBy

> **ariaLabelledBy**: `string`

Defined in: [core/src/components/rating/rating.ts:85](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/rating/rating.ts#L85)

The aria labelled by

#### Default Value

`''`

#### Inherited from

`RatingCommonPropsAndState.ariaLabelledBy`

***

### ariaValueTextFn()

> **ariaValueTextFn**: (`rating`, `maxRating`) => `string`

Defined in: [core/src/components/rating/rating.ts:102](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/rating/rating.ts#L102)

Return the value for the 'aria-valuetext' attribute.

#### Parameters

##### rating

`number`

Current rating value.

##### maxRating

`number`

maxRating value.

#### Returns

`string`

#### Default Value

```ts
(rating: number, maxRating: number) => `${rating} out of ${maxRating}`
```

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`RatingCommonPropsAndState.className`

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/rating/rating.ts:47](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/rating/rating.ts#L47)

If `true`, the rating is disabled.

#### Default Value

`false`

#### Inherited from

`RatingCommonPropsAndState.disabled`

***

### maxRating

> **maxRating**: `number`

Defined in: [core/src/components/rating/rating.ts:40](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/rating/rating.ts#L40)

The maximum rating that can be given.

#### Default Value

`10`

#### Inherited from

`RatingCommonPropsAndState.maxRating`

***

### onHover()

> **onHover**: (`rating`) => `void`

Defined in: [core/src/components/rating/rating.ts:126](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/rating/rating.ts#L126)

An event emitted when the user is hovering over a given rating.

Event payload is equal to the rating being hovered over.

#### Parameters

##### rating

`number`

#### Returns

`void`

#### Default Value

```ts
() => {}
```

***

### onLeave()

> **onLeave**: (`rating`) => `void`

Defined in: [core/src/components/rating/rating.ts:138](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/rating/rating.ts#L138)

An event emitted when the user stops hovering over a given rating.

Event payload is equal to the rating of the last item being hovered over.

#### Parameters

##### rating

`number`

#### Returns

`void`

#### Default Value

```ts
() => {}
```

***

### onRatingChange()

> **onRatingChange**: (`rating`) => `void`

Defined in: [core/src/components/rating/rating.ts:114](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/rating/rating.ts#L114)

An event emitted when the rating is changed.

Event payload is equal to the newly selected rating.

#### Parameters

##### rating

`number`

#### Returns

`void`

#### Default Value

```ts
() => {}
```

***

### rating

> **rating**: `number`

Defined in: [core/src/components/rating/rating.ts:33](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/rating/rating.ts#L33)

The current rating. Could be a decimal value like `3.75`.

#### Default Value

`0`

#### Inherited from

`RatingCommonPropsAndState.rating`

***

### readonly

> **readonly**: `boolean`

Defined in: [core/src/components/rating/rating.ts:54](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/rating/rating.ts#L54)

If `true`, the rating can't be changed.

#### Default Value

`false`

#### Inherited from

`RatingCommonPropsAndState.readonly`

***

### resettable

> **resettable**: `boolean`

Defined in: [core/src/components/rating/rating.ts:63](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/rating/rating.ts#L63)

Define if the rating can be reset.

If set to true, the user can 'unset' the rating value by cliking on the current rating value.

#### Default Value

`true`

#### Inherited from

`RatingCommonPropsAndState.resettable`

***

### tabindex

> **tabindex**: `number`

Defined in: [core/src/components/rating/rating.ts:71](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/rating/rating.ts#L71)

Allows setting a custom rating tabindex.
If the component is disabled, `tabindex` will still be set to `-1`.

#### Default Value

`0`

#### Inherited from

`RatingCommonPropsAndState.tabindex`
