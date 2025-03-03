Defined in: [core/src/components/accordion/accordion.ts:55](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/accordion/accordion.ts#L55)

Properties for the Accordion component.

## Extends

- `WidgetsCommonPropsAndState`

## Properties

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`WidgetsCommonPropsAndState.className`

***

### closeOthers

> **closeOthers**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:61](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/accordion/accordion.ts#L61)

If `true`, only one accordion-item at the time can stay open.

#### Default Value

`false`

***

### itemAnimated

> **itemAnimated**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:95](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/accordion/accordion.ts#L95)

If `true`, accordion-item will be animated.

#### Default Value

`true`

***

### itemBodyClassName

> **itemBodyClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:135](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/accordion/accordion.ts#L135)

CSS classes to add on the accordion-item body DOM element.

#### Default Value

`''`

***

### itemBodyContainerClassName

> **itemBodyContainerClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:129](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/accordion/accordion.ts#L129)

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Default Value

`''`

***

### itemButtonClassName

> **itemButtonClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:122](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/accordion/accordion.ts#L122)

CSS classes to add on the accordion-item toggle button DOM element.

#### Default Value

`''`

***

### itemClassName

> **itemClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:110](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/accordion/accordion.ts#L110)

CSS classes to add on the accordion-item DOM element.

#### Default Value

`''`

***

### itemDestroyOnHide

> **itemDestroyOnHide**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:89](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/accordion/accordion.ts#L89)

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

#### Default Value

`true`

***

### itemHeaderClassName

> **itemHeaderClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:116](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/accordion/accordion.ts#L116)

CSS classes to add on the accordion-item header DOM element.

#### Default Value

`''`

***

### itemHeadingTag

> **itemHeadingTag**: `string`

Defined in: [core/src/components/accordion/accordion.ts:141](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/accordion/accordion.ts#L141)

The html tag to use for the accordion-item-header.

#### Default Value

`''`

***

### itemTransition

> **itemTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: [core/src/components/accordion/accordion.ts:104](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/accordion/accordion.ts#L104)

The transition to use for the accordion-item body-container when the accordion-item is toggled.

#### Default Value

```ts
() => {}
```

***

### onItemHidden()

> **onItemHidden**: (`itemId`) => `void`

Defined in: [core/src/components/accordion/accordion.ts:83](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/accordion/accordion.ts#L83)

An event fired when an item is hidden.

Event payload is the id of the item.

#### Parameters

##### itemId

`string`

#### Returns

`void`

#### Default Value

```ts
() => {}
```

***

### onItemShown()

> **onItemShown**: (`itemId`) => `void`

Defined in: [core/src/components/accordion/accordion.ts:72](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/accordion/accordion.ts#L72)

An event fired when an item is shown.

Event payload is the id of the item.

#### Parameters

##### itemId

`string`

#### Returns

`void`

#### Default Value

```ts
() => {}
```
