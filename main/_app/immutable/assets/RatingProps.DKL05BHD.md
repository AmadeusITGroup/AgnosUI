Interface representing the properties for the Rating widget.

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

[core/src/components/rating/rating.ts:77](https://github.com/AmadeusITGroup/AgnosUI/blob/da3c5efe16f24b81ca028258b7502e86b6a1176e/core/src/components/rating/rating.ts#L77)

***

### ariaLabelledBy

> **ariaLabelledBy**: `string`

The aria labelled by

#### Default Value

`''`

#### Inherited from

`RatingCommonPropsAndState.ariaLabelledBy`

#### Defined in

[core/src/components/rating/rating.ts:84](https://github.com/AmadeusITGroup/AgnosUI/blob/da3c5efe16f24b81ca028258b7502e86b6a1176e/core/src/components/rating/rating.ts#L84)

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

[core/src/components/rating/rating.ts:101](https://github.com/AmadeusITGroup/AgnosUI/blob/da3c5efe16f24b81ca028258b7502e86b6a1176e/core/src/components/rating/rating.ts#L101)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`RatingCommonPropsAndState.className`

#### Defined in

[core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/da3c5efe16f24b81ca028258b7502e86b6a1176e/core/src/components/commonProps.ts#L10)

***

### disabled

> **disabled**: `boolean`

If `true`, the rating is disabled.

#### Default Value

`false`

#### Inherited from

`RatingCommonPropsAndState.disabled`

#### Defined in

[core/src/components/rating/rating.ts:46](https://github.com/AmadeusITGroup/AgnosUI/blob/da3c5efe16f24b81ca028258b7502e86b6a1176e/core/src/components/rating/rating.ts#L46)

***

### maxRating

> **maxRating**: `number`

The maximum rating that can be given.

#### Default Value

`10`

#### Inherited from

`RatingCommonPropsAndState.maxRating`

#### Defined in

[core/src/components/rating/rating.ts:39](https://github.com/AmadeusITGroup/AgnosUI/blob/da3c5efe16f24b81ca028258b7502e86b6a1176e/core/src/components/rating/rating.ts#L39)

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

[core/src/components/rating/rating.ts:125](https://github.com/AmadeusITGroup/AgnosUI/blob/da3c5efe16f24b81ca028258b7502e86b6a1176e/core/src/components/rating/rating.ts#L125)

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

[core/src/components/rating/rating.ts:137](https://github.com/AmadeusITGroup/AgnosUI/blob/da3c5efe16f24b81ca028258b7502e86b6a1176e/core/src/components/rating/rating.ts#L137)

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

[core/src/components/rating/rating.ts:113](https://github.com/AmadeusITGroup/AgnosUI/blob/da3c5efe16f24b81ca028258b7502e86b6a1176e/core/src/components/rating/rating.ts#L113)

***

### rating

> **rating**: `number`

The current rating. Could be a decimal value like `3.75`.

#### Default Value

`0`

#### Inherited from

`RatingCommonPropsAndState.rating`

#### Defined in

[core/src/components/rating/rating.ts:32](https://github.com/AmadeusITGroup/AgnosUI/blob/da3c5efe16f24b81ca028258b7502e86b6a1176e/core/src/components/rating/rating.ts#L32)

***

### readonly

> **readonly**: `boolean`

If `true`, the rating can't be changed.

#### Default Value

`false`

#### Inherited from

`RatingCommonPropsAndState.readonly`

#### Defined in

[core/src/components/rating/rating.ts:53](https://github.com/AmadeusITGroup/AgnosUI/blob/da3c5efe16f24b81ca028258b7502e86b6a1176e/core/src/components/rating/rating.ts#L53)

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

[core/src/components/rating/rating.ts:62](https://github.com/AmadeusITGroup/AgnosUI/blob/da3c5efe16f24b81ca028258b7502e86b6a1176e/core/src/components/rating/rating.ts#L62)

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

[core/src/components/rating/rating.ts:70](https://github.com/AmadeusITGroup/AgnosUI/blob/da3c5efe16f24b81ca028258b7502e86b6a1176e/core/src/components/rating/rating.ts#L70)
