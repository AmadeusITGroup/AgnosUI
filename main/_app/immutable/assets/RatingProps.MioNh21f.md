Represents the properties for the Rating component.

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

[core/src/components/rating/rating.ts:77](https://github.com/AmadeusITGroup/AgnosUI/blob/e1759d1149647d72fcc8e98e523a9b26479615b2/core/src/components/rating/rating.ts#L77)

***

### ariaLabelledBy

> **ariaLabelledBy**: `string`

The aria labelled by

#### Default Value

`''`

#### Inherited from

`CoreProps.ariaLabelledBy`

#### Defined in

[core/src/components/rating/rating.ts:84](https://github.com/AmadeusITGroup/AgnosUI/blob/e1759d1149647d72fcc8e98e523a9b26479615b2/core/src/components/rating/rating.ts#L84)

***

### ariaValueTextFn()

> **ariaValueTextFn**: (`rating`, `maxRating`) => `string`

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

#### Defined in

[core/src/components/rating/rating.ts:101](https://github.com/AmadeusITGroup/AgnosUI/blob/e1759d1149647d72fcc8e98e523a9b26479615b2/core/src/components/rating/rating.ts#L101)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreProps.className`

#### Defined in

[core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/e1759d1149647d72fcc8e98e523a9b26479615b2/core/src/components/commonProps.ts#L10)

***

### disabled

> **disabled**: `boolean`

If `true`, the rating is disabled.

#### Default Value

`false`

#### Inherited from

`CoreProps.disabled`

#### Defined in

[core/src/components/rating/rating.ts:46](https://github.com/AmadeusITGroup/AgnosUI/blob/e1759d1149647d72fcc8e98e523a9b26479615b2/core/src/components/rating/rating.ts#L46)

***

### maxRating

> **maxRating**: `number`

The maximum rating that can be given.

#### Default Value

`10`

#### Inherited from

`CoreProps.maxRating`

#### Defined in

[core/src/components/rating/rating.ts:39](https://github.com/AmadeusITGroup/AgnosUI/blob/e1759d1149647d72fcc8e98e523a9b26479615b2/core/src/components/rating/rating.ts#L39)

***

### onHover()

> **onHover**: (`rating`) => `void`

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

#### Defined in

[core/src/components/rating/rating.ts:125](https://github.com/AmadeusITGroup/AgnosUI/blob/e1759d1149647d72fcc8e98e523a9b26479615b2/core/src/components/rating/rating.ts#L125)

***

### onLeave()

> **onLeave**: (`rating`) => `void`

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

#### Defined in

[core/src/components/rating/rating.ts:137](https://github.com/AmadeusITGroup/AgnosUI/blob/e1759d1149647d72fcc8e98e523a9b26479615b2/core/src/components/rating/rating.ts#L137)

***

### onRatingChange()

> **onRatingChange**: (`rating`) => `void`

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

#### Defined in

[core/src/components/rating/rating.ts:113](https://github.com/AmadeusITGroup/AgnosUI/blob/e1759d1149647d72fcc8e98e523a9b26479615b2/core/src/components/rating/rating.ts#L113)

***

### rating

> **rating**: `number`

The current rating. Could be a decimal value like `3.75`.

#### Default Value

`0`

#### Inherited from

`CoreProps.rating`

#### Defined in

[core/src/components/rating/rating.ts:32](https://github.com/AmadeusITGroup/AgnosUI/blob/e1759d1149647d72fcc8e98e523a9b26479615b2/core/src/components/rating/rating.ts#L32)

***

### readonly

> **readonly**: `boolean`

If `true`, the rating can't be changed.

#### Default Value

`false`

#### Inherited from

`CoreProps.readonly`

#### Defined in

[core/src/components/rating/rating.ts:53](https://github.com/AmadeusITGroup/AgnosUI/blob/e1759d1149647d72fcc8e98e523a9b26479615b2/core/src/components/rating/rating.ts#L53)

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

[core/src/components/rating/rating.ts:62](https://github.com/AmadeusITGroup/AgnosUI/blob/e1759d1149647d72fcc8e98e523a9b26479615b2/core/src/components/rating/rating.ts#L62)

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

[core-bootstrap/src/components/rating/rating.ts:17](https://github.com/AmadeusITGroup/AgnosUI/blob/e1759d1149647d72fcc8e98e523a9b26479615b2/core-bootstrap/src/components/rating/rating.ts#L17)

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

[core/src/components/rating/rating.ts:70](https://github.com/AmadeusITGroup/AgnosUI/blob/e1759d1149647d72fcc8e98e523a9b26479615b2/core/src/components/rating/rating.ts#L70)
