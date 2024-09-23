## Extends

- `RatingProps`.`RatingExtraProps`

## Properties

### ariaLabel

> **ariaLabel**: `string`

The aria label

#### Default Value

`'Rating'`

#### Inherited from

`CoreProps.ariaLabel`

#### Defined in

[core/src/components/rating/rating.ts:74](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/core/src/components/rating/rating.ts#L74)

***

### ariaLabelledBy

> **ariaLabelledBy**: `string`

The aria labelled by

#### Default Value

`''`

#### Inherited from

`CoreProps.ariaLabelledBy`

#### Defined in

[core/src/components/rating/rating.ts:81](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/core/src/components/rating/rating.ts#L81)

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

#### Inherited from

`CoreProps.ariaValueTextFn`

#### Defined in

[core/src/components/rating/rating.ts:95](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/core/src/components/rating/rating.ts#L95)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreProps.className`

#### Defined in

[core/src/components/commonProps.ts:7](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/core/src/components/commonProps.ts#L7)

***

### disabled

> **disabled**: `boolean`

If `true`, the rating is disabled.

#### Default Value

`false`

#### Inherited from

`CoreProps.disabled`

#### Defined in

[core/src/components/rating/rating.ts:43](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/core/src/components/rating/rating.ts#L43)

***

### maxRating

> **maxRating**: `number`

The maximum rating that can be given.

#### Default Value

`10`

#### Inherited from

`CoreProps.maxRating`

#### Defined in

[core/src/components/rating/rating.ts:36](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/core/src/components/rating/rating.ts#L36)

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

#### Inherited from

`CoreProps.onHover`

#### Defined in

[core/src/components/rating/rating.ts:119](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/core/src/components/rating/rating.ts#L119)

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

#### Inherited from

`CoreProps.onLeave`

#### Defined in

[core/src/components/rating/rating.ts:131](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/core/src/components/rating/rating.ts#L131)

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

#### Inherited from

`CoreProps.onRatingChange`

#### Defined in

[core/src/components/rating/rating.ts:107](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/core/src/components/rating/rating.ts#L107)

***

### rating

> **rating**: `number`

The current rating. Could be a decimal value like `3.75`.

#### Default Value

`0`

#### Inherited from

`CoreProps.rating`

#### Defined in

[core/src/components/rating/rating.ts:29](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/core/src/components/rating/rating.ts#L29)

***

### readonly

> **readonly**: `boolean`

If `true`, the rating can't be changed.

#### Default Value

`false`

#### Inherited from

`CoreProps.readonly`

#### Defined in

[core/src/components/rating/rating.ts:50](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/core/src/components/rating/rating.ts#L50)

***

### resettable

> **resettable**: `boolean`

Define if the rating can be reset.

If set to true, the user can 'unset' the rating value by cliking on the current rating value.

#### Default Value

`true`

#### Inherited from

`CoreProps.resettable`

#### Defined in

[core/src/components/rating/rating.ts:59](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/core/src/components/rating/rating.ts#L59)

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

[core-bootstrap/src/components/rating/rating.ts:23](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/core-bootstrap/src/components/rating/rating.ts#L23)

***

### tabindex

> **tabindex**: `number`

Allows setting a custom rating tabindex.
If the component is disabled, `tabindex` will still be set to `-1`.

#### Default Value

`0`

#### Inherited from

`CoreProps.tabindex`

#### Defined in

[core/src/components/rating/rating.ts:67](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/core/src/components/rating/rating.ts#L67)
