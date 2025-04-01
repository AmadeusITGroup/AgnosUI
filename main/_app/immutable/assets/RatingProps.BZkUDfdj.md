Defined in: [core-bootstrap/src/components/rating/rating.ts:28](https://github.com/AmadeusITGroup/AgnosUI/blob/4fd868c8d80c28b306e406aab2d5ef5dbc13caa2/core-bootstrap/src/components/rating/rating.ts#L28)

Represents the properties for the Rating component.

## Extends

- `RatingProps`.`RatingExtraProps`

## Properties

### ariaLabel

> **ariaLabel**: `string`

Defined in: [core/src/components/rating/rating.ts:77](https://github.com/AmadeusITGroup/AgnosUI/blob/4fd868c8d80c28b306e406aab2d5ef5dbc13caa2/core/src/components/rating/rating.ts#L77)

The aria label

#### Default Value

`'Rating'`

#### Inherited from

`CoreProps.ariaLabel`

***

### ariaLabelledBy

> **ariaLabelledBy**: `string`

Defined in: [core/src/components/rating/rating.ts:84](https://github.com/AmadeusITGroup/AgnosUI/blob/4fd868c8d80c28b306e406aab2d5ef5dbc13caa2/core/src/components/rating/rating.ts#L84)

The aria labelled by

#### Default Value

`''`

#### Inherited from

`CoreProps.ariaLabelledBy`

***

### ariaValueTextFn()

> **ariaValueTextFn**: (`rating`, `maxRating`) => `string`

Defined in: [core/src/components/rating/rating.ts:101](https://github.com/AmadeusITGroup/AgnosUI/blob/4fd868c8d80c28b306e406aab2d5ef5dbc13caa2/core/src/components/rating/rating.ts#L101)

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

#### Inherited from

`CoreProps.ariaValueTextFn`

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/4fd868c8d80c28b306e406aab2d5ef5dbc13caa2/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreProps.className`

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/rating/rating.ts:46](https://github.com/AmadeusITGroup/AgnosUI/blob/4fd868c8d80c28b306e406aab2d5ef5dbc13caa2/core/src/components/rating/rating.ts#L46)

If `true`, the rating is disabled.

#### Default Value

`false`

#### Inherited from

`CoreProps.disabled`

***

### maxRating

> **maxRating**: `number`

Defined in: [core/src/components/rating/rating.ts:39](https://github.com/AmadeusITGroup/AgnosUI/blob/4fd868c8d80c28b306e406aab2d5ef5dbc13caa2/core/src/components/rating/rating.ts#L39)

The maximum rating that can be given.

#### Default Value

`10`

#### Inherited from

`CoreProps.maxRating`

***

### onHover()

> **onHover**: (`rating`) => `void`

Defined in: [core/src/components/rating/rating.ts:125](https://github.com/AmadeusITGroup/AgnosUI/blob/4fd868c8d80c28b306e406aab2d5ef5dbc13caa2/core/src/components/rating/rating.ts#L125)

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

#### Inherited from

`CoreProps.onHover`

***

### onLeave()

> **onLeave**: (`rating`) => `void`

Defined in: [core/src/components/rating/rating.ts:137](https://github.com/AmadeusITGroup/AgnosUI/blob/4fd868c8d80c28b306e406aab2d5ef5dbc13caa2/core/src/components/rating/rating.ts#L137)

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

#### Inherited from

`CoreProps.onLeave`

***

### onRatingChange()

> **onRatingChange**: (`rating`) => `void`

Defined in: [core/src/components/rating/rating.ts:113](https://github.com/AmadeusITGroup/AgnosUI/blob/4fd868c8d80c28b306e406aab2d5ef5dbc13caa2/core/src/components/rating/rating.ts#L113)

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

#### Inherited from

`CoreProps.onRatingChange`

***

### rating

> **rating**: `number`

Defined in: [core/src/components/rating/rating.ts:32](https://github.com/AmadeusITGroup/AgnosUI/blob/4fd868c8d80c28b306e406aab2d5ef5dbc13caa2/core/src/components/rating/rating.ts#L32)

The current rating. Could be a decimal value like `3.75`.

#### Default Value

`0`

#### Inherited from

`CoreProps.rating`

***

### readonly

> **readonly**: `boolean`

Defined in: [core/src/components/rating/rating.ts:53](https://github.com/AmadeusITGroup/AgnosUI/blob/4fd868c8d80c28b306e406aab2d5ef5dbc13caa2/core/src/components/rating/rating.ts#L53)

If `true`, the rating can't be changed.

#### Default Value

`false`

#### Inherited from

`CoreProps.readonly`

***

### resettable

> **resettable**: `boolean`

Defined in: [core/src/components/rating/rating.ts:62](https://github.com/AmadeusITGroup/AgnosUI/blob/4fd868c8d80c28b306e406aab2d5ef5dbc13caa2/core/src/components/rating/rating.ts#L62)

Define if the rating can be reset.

If set to true, the user can 'unset' the rating value by cliking on the current rating value.

#### Default Value

`true`

#### Inherited from

`CoreProps.resettable`

***

### star

> **star**: `SlotContent`\<[`StarContext`](StarContext.md)\>

Defined in: [core-bootstrap/src/components/rating/rating.ts:17](https://github.com/AmadeusITGroup/AgnosUI/blob/4fd868c8d80c28b306e406aab2d5ef5dbc13caa2/core-bootstrap/src/components/rating/rating.ts#L17)

The template to override the way each star is displayed.

#### Default Value

```ts
({fill}: StarContext) => String.fromCharCode(fill === 100 ? 9733 : 9734)
```

#### Inherited from

`RatingExtraProps.star`

***

### tabindex

> **tabindex**: `number`

Defined in: [core/src/components/rating/rating.ts:70](https://github.com/AmadeusITGroup/AgnosUI/blob/4fd868c8d80c28b306e406aab2d5ef5dbc13caa2/core/src/components/rating/rating.ts#L70)

Allows setting a custom rating tabindex.
If the component is disabled, `tabindex` will still be set to `-1`.

#### Default Value

`0`

#### Inherited from

`CoreProps.tabindex`
