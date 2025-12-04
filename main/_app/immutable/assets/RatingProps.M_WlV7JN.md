Defined in: [core-bootstrap/src/components/rating/rating.ts:28](https://github.com/AmadeusITGroup/AgnosUI/blob/bf95b6b4bf40aa942d68cfad273c2dd607ca8a36/core-bootstrap/src/components/rating/rating.ts#L28)

Represents the properties for the Rating component.

## Extends

- `RatingProps`.`RatingExtraProps`

## Properties

### ariaLabel

> **ariaLabel**: `string`

Defined in: [core/src/components/rating/rating.ts:78](https://github.com/AmadeusITGroup/AgnosUI/blob/bf95b6b4bf40aa942d68cfad273c2dd607ca8a36/core/src/components/rating/rating.ts#L78)

The aria label

#### Default Value

`'Rating'`

#### Inherited from

`CoreProps.ariaLabel`

***

### ariaLabelledBy

> **ariaLabelledBy**: `string`

Defined in: [core/src/components/rating/rating.ts:85](https://github.com/AmadeusITGroup/AgnosUI/blob/bf95b6b4bf40aa942d68cfad273c2dd607ca8a36/core/src/components/rating/rating.ts#L85)

The aria labelled by

#### Default Value

`''`

#### Inherited from

`CoreProps.ariaLabelledBy`

***

### ariaValueTextFn()

> **ariaValueTextFn**: (`rating`, `maxRating`) => `string`

Defined in: [core/src/components/rating/rating.ts:102](https://github.com/AmadeusITGroup/AgnosUI/blob/bf95b6b4bf40aa942d68cfad273c2dd607ca8a36/core/src/components/rating/rating.ts#L102)

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

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/bf95b6b4bf40aa942d68cfad273c2dd607ca8a36/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreProps.className`

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/rating/rating.ts:47](https://github.com/AmadeusITGroup/AgnosUI/blob/bf95b6b4bf40aa942d68cfad273c2dd607ca8a36/core/src/components/rating/rating.ts#L47)

If `true`, the rating is disabled.

#### Default Value

`false`

#### Inherited from

`CoreProps.disabled`

***

### maxRating

> **maxRating**: `number`

Defined in: [core/src/components/rating/rating.ts:40](https://github.com/AmadeusITGroup/AgnosUI/blob/bf95b6b4bf40aa942d68cfad273c2dd607ca8a36/core/src/components/rating/rating.ts#L40)

The maximum rating that can be given.

#### Default Value

`10`

#### Inherited from

`CoreProps.maxRating`

***

### onHover()

> **onHover**: (`rating`) => `void`

Defined in: [core/src/components/rating/rating.ts:126](https://github.com/AmadeusITGroup/AgnosUI/blob/bf95b6b4bf40aa942d68cfad273c2dd607ca8a36/core/src/components/rating/rating.ts#L126)

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

Defined in: [core/src/components/rating/rating.ts:138](https://github.com/AmadeusITGroup/AgnosUI/blob/bf95b6b4bf40aa942d68cfad273c2dd607ca8a36/core/src/components/rating/rating.ts#L138)

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

Defined in: [core/src/components/rating/rating.ts:114](https://github.com/AmadeusITGroup/AgnosUI/blob/bf95b6b4bf40aa942d68cfad273c2dd607ca8a36/core/src/components/rating/rating.ts#L114)

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

Defined in: [core/src/components/rating/rating.ts:33](https://github.com/AmadeusITGroup/AgnosUI/blob/bf95b6b4bf40aa942d68cfad273c2dd607ca8a36/core/src/components/rating/rating.ts#L33)

The current rating. Could be a decimal value like `3.75`.

#### Default Value

`0`

#### Inherited from

`CoreProps.rating`

***

### readonly

> **readonly**: `boolean`

Defined in: [core/src/components/rating/rating.ts:54](https://github.com/AmadeusITGroup/AgnosUI/blob/bf95b6b4bf40aa942d68cfad273c2dd607ca8a36/core/src/components/rating/rating.ts#L54)

If `true`, the rating can't be changed.

#### Default Value

`false`

#### Inherited from

`CoreProps.readonly`

***

### resettable

> **resettable**: `boolean`

Defined in: [core/src/components/rating/rating.ts:63](https://github.com/AmadeusITGroup/AgnosUI/blob/bf95b6b4bf40aa942d68cfad273c2dd607ca8a36/core/src/components/rating/rating.ts#L63)

Define if the rating can be reset.

If set to true, the user can 'unset' the rating value by cliking on the current rating value.

#### Default Value

`true`

#### Inherited from

`CoreProps.resettable`

***

### star

> **star**: `SlotContent`\<[`StarContext`](StarContext.md)\>

Defined in: [core-bootstrap/src/components/rating/rating.ts:17](https://github.com/AmadeusITGroup/AgnosUI/blob/bf95b6b4bf40aa942d68cfad273c2dd607ca8a36/core-bootstrap/src/components/rating/rating.ts#L17)

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

Defined in: [core/src/components/rating/rating.ts:71](https://github.com/AmadeusITGroup/AgnosUI/blob/bf95b6b4bf40aa942d68cfad273c2dd607ca8a36/core/src/components/rating/rating.ts#L71)

Allows setting a custom rating tabindex.
If the component is disabled, `tabindex` will still be set to `-1`.

#### Default Value

`0`

#### Inherited from

`CoreProps.tabindex`
