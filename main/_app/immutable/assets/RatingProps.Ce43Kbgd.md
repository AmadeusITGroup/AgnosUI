Defined in: [core/src/components/rating/rating.ts:90](https://github.com/AmadeusITGroup/AgnosUI/blob/4392566dfaf939477d41da96484d82e2d4476bd5/core/src/components/rating/rating.ts#L90)

Interface representing the properties for the Rating widget.

## Extends

- `RatingCommonPropsAndState`

## Properties

### ariaLabel

> **ariaLabel**: `string`

Defined in: [core/src/components/rating/rating.ts:77](https://github.com/AmadeusITGroup/AgnosUI/blob/4392566dfaf939477d41da96484d82e2d4476bd5/core/src/components/rating/rating.ts#L77)

The aria label

#### Default Value

`'Rating'`

#### Inherited from

`RatingCommonPropsAndState.ariaLabel`

***

### ariaLabelledBy

> **ariaLabelledBy**: `string`

Defined in: [core/src/components/rating/rating.ts:84](https://github.com/AmadeusITGroup/AgnosUI/blob/4392566dfaf939477d41da96484d82e2d4476bd5/core/src/components/rating/rating.ts#L84)

The aria labelled by

#### Default Value

`''`

#### Inherited from

`RatingCommonPropsAndState.ariaLabelledBy`

***

### ariaValueTextFn()

> **ariaValueTextFn**: (`rating`, `maxRating`) => `string`

Defined in: [core/src/components/rating/rating.ts:101](https://github.com/AmadeusITGroup/AgnosUI/blob/4392566dfaf939477d41da96484d82e2d4476bd5/core/src/components/rating/rating.ts#L101)

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

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/4392566dfaf939477d41da96484d82e2d4476bd5/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`RatingCommonPropsAndState.className`

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/rating/rating.ts:46](https://github.com/AmadeusITGroup/AgnosUI/blob/4392566dfaf939477d41da96484d82e2d4476bd5/core/src/components/rating/rating.ts#L46)

If `true`, the rating is disabled.

#### Default Value

`false`

#### Inherited from

`RatingCommonPropsAndState.disabled`

***

### maxRating

> **maxRating**: `number`

Defined in: [core/src/components/rating/rating.ts:39](https://github.com/AmadeusITGroup/AgnosUI/blob/4392566dfaf939477d41da96484d82e2d4476bd5/core/src/components/rating/rating.ts#L39)

The maximum rating that can be given.

#### Default Value

`10`

#### Inherited from

`RatingCommonPropsAndState.maxRating`

***

### onHover()

> **onHover**: (`rating`) => `void`

Defined in: [core/src/components/rating/rating.ts:125](https://github.com/AmadeusITGroup/AgnosUI/blob/4392566dfaf939477d41da96484d82e2d4476bd5/core/src/components/rating/rating.ts#L125)

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

Defined in: [core/src/components/rating/rating.ts:137](https://github.com/AmadeusITGroup/AgnosUI/blob/4392566dfaf939477d41da96484d82e2d4476bd5/core/src/components/rating/rating.ts#L137)

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

Defined in: [core/src/components/rating/rating.ts:113](https://github.com/AmadeusITGroup/AgnosUI/blob/4392566dfaf939477d41da96484d82e2d4476bd5/core/src/components/rating/rating.ts#L113)

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

Defined in: [core/src/components/rating/rating.ts:32](https://github.com/AmadeusITGroup/AgnosUI/blob/4392566dfaf939477d41da96484d82e2d4476bd5/core/src/components/rating/rating.ts#L32)

The current rating. Could be a decimal value like `3.75`.

#### Default Value

`0`

#### Inherited from

`RatingCommonPropsAndState.rating`

***

### readonly

> **readonly**: `boolean`

Defined in: [core/src/components/rating/rating.ts:53](https://github.com/AmadeusITGroup/AgnosUI/blob/4392566dfaf939477d41da96484d82e2d4476bd5/core/src/components/rating/rating.ts#L53)

If `true`, the rating can't be changed.

#### Default Value

`false`

#### Inherited from

`RatingCommonPropsAndState.readonly`

***

### resettable

> **resettable**: `boolean`

Defined in: [core/src/components/rating/rating.ts:62](https://github.com/AmadeusITGroup/AgnosUI/blob/4392566dfaf939477d41da96484d82e2d4476bd5/core/src/components/rating/rating.ts#L62)

Define if the rating can be reset.

If set to true, the user can 'unset' the rating value by cliking on the current rating value.

#### Default Value

`true`

#### Inherited from

`RatingCommonPropsAndState.resettable`

***

### tabindex

> **tabindex**: `number`

Defined in: [core/src/components/rating/rating.ts:70](https://github.com/AmadeusITGroup/AgnosUI/blob/4392566dfaf939477d41da96484d82e2d4476bd5/core/src/components/rating/rating.ts#L70)

Allows setting a custom rating tabindex.
If the component is disabled, `tabindex` will still be set to `-1`.

#### Default Value

`0`

#### Inherited from

`RatingCommonPropsAndState.tabindex`
