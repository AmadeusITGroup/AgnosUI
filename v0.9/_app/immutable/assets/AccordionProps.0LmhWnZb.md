Defined in: [core/src/components/accordion/accordion.ts:56](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/accordion/accordion.ts#L56)

Properties for the Accordion component.

## Extends

- `WidgetsCommonPropsAndState`

## Properties

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`WidgetsCommonPropsAndState.className`

***

### closeOthers

> **closeOthers**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:62](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/accordion/accordion.ts#L62)

If `true`, only one accordion-item at the time can stay open.

#### Default Value

`false`

***

### itemAnimated

> **itemAnimated**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:96](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/accordion/accordion.ts#L96)

If `true`, accordion-item will be animated.

#### Default Value

`true`

***

### itemBodyClassName

> **itemBodyClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:136](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/accordion/accordion.ts#L136)

CSS classes to add on the accordion-item body DOM element.

#### Default Value

`''`

***

### itemBodyContainerClassName

> **itemBodyContainerClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:130](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/accordion/accordion.ts#L130)

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Default Value

`''`

***

### itemButtonClassName

> **itemButtonClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:123](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/accordion/accordion.ts#L123)

CSS classes to add on the accordion-item toggle button DOM element.

#### Default Value

`''`

***

### itemClassName

> **itemClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:111](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/accordion/accordion.ts#L111)

CSS classes to add on the accordion-item DOM element.

#### Default Value

`''`

***

### itemDestroyOnHide

> **itemDestroyOnHide**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:90](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/accordion/accordion.ts#L90)

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

#### Default Value

`true`

***

### itemHeaderClassName

> **itemHeaderClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:117](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/accordion/accordion.ts#L117)

CSS classes to add on the accordion-item header DOM element.

#### Default Value

`''`

***

### itemHeadingTag

> **itemHeadingTag**: `string`

Defined in: [core/src/components/accordion/accordion.ts:142](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/accordion/accordion.ts#L142)

The html tag to use for the accordion-item-header.

#### Default Value

`''`

***

### itemTransition

> **itemTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: [core/src/components/accordion/accordion.ts:105](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/accordion/accordion.ts#L105)

The transition to use for the accordion-item body-container when the accordion-item is toggled.

#### Default Value

```ts
() => {}
```

***

### onItemHidden()

> **onItemHidden**: (`itemId`) => `void`

Defined in: [core/src/components/accordion/accordion.ts:84](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/accordion/accordion.ts#L84)

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

Defined in: [core/src/components/accordion/accordion.ts:73](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/accordion/accordion.ts#L73)

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
