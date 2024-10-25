## Extends

- `WidgetsCommonPropsAndState`

## Properties

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`WidgetsCommonPropsAndState.className`

#### Defined in

[core/src/components/commonProps.ts:7](https://github.com/AmadeusITGroup/AgnosUI/blob/c30b9455d4a9d64b95b7dc4ebfcec51eef3c4d0e/core/src/components/commonProps.ts#L7)

***

### closeOthers

> **closeOthers**: `boolean`

If `true`, only one accordion-item at the time can stay open.

#### Default Value

`false`

#### Defined in

[core/src/components/accordion/accordion.ts:41](https://github.com/AmadeusITGroup/AgnosUI/blob/c30b9455d4a9d64b95b7dc4ebfcec51eef3c4d0e/core/src/components/accordion/accordion.ts#L41)

***

### itemAnimated

> **itemAnimated**: `boolean`

If `true`, accordion-item will be animated.

#### Default Value

`true`

#### Defined in

[core/src/components/accordion/accordion.ts:75](https://github.com/AmadeusITGroup/AgnosUI/blob/c30b9455d4a9d64b95b7dc4ebfcec51eef3c4d0e/core/src/components/accordion/accordion.ts#L75)

***

### itemBodyClassName

> **itemBodyClassName**: `string`

CSS classes to add on the accordion-item body DOM element.

#### Default Value

`''`

#### Defined in

[core/src/components/accordion/accordion.ts:115](https://github.com/AmadeusITGroup/AgnosUI/blob/c30b9455d4a9d64b95b7dc4ebfcec51eef3c4d0e/core/src/components/accordion/accordion.ts#L115)

***

### itemBodyContainerClassName

> **itemBodyContainerClassName**: `string`

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Default Value

`''`

#### Defined in

[core/src/components/accordion/accordion.ts:109](https://github.com/AmadeusITGroup/AgnosUI/blob/c30b9455d4a9d64b95b7dc4ebfcec51eef3c4d0e/core/src/components/accordion/accordion.ts#L109)

***

### itemButtonClassName

> **itemButtonClassName**: `string`

CSS classes to add on the accordion-item toggle button DOM element.

#### Default Value

`''`

#### Defined in

[core/src/components/accordion/accordion.ts:102](https://github.com/AmadeusITGroup/AgnosUI/blob/c30b9455d4a9d64b95b7dc4ebfcec51eef3c4d0e/core/src/components/accordion/accordion.ts#L102)

***

### itemClassName

> **itemClassName**: `string`

CSS classes to add on the accordion-item DOM element.

#### Default Value

`''`

#### Defined in

[core/src/components/accordion/accordion.ts:90](https://github.com/AmadeusITGroup/AgnosUI/blob/c30b9455d4a9d64b95b7dc4ebfcec51eef3c4d0e/core/src/components/accordion/accordion.ts#L90)

***

### itemDestroyOnHide

> **itemDestroyOnHide**: `boolean`

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

#### Default Value

`true`

#### Defined in

[core/src/components/accordion/accordion.ts:69](https://github.com/AmadeusITGroup/AgnosUI/blob/c30b9455d4a9d64b95b7dc4ebfcec51eef3c4d0e/core/src/components/accordion/accordion.ts#L69)

***

### itemHeaderClassName

> **itemHeaderClassName**: `string`

CSS classes to add on the accordion-item header DOM element.

#### Default Value

`''`

#### Defined in

[core/src/components/accordion/accordion.ts:96](https://github.com/AmadeusITGroup/AgnosUI/blob/c30b9455d4a9d64b95b7dc4ebfcec51eef3c4d0e/core/src/components/accordion/accordion.ts#L96)

***

### itemHeadingTag

> **itemHeadingTag**: `string`

The html tag to use for the accordion-item-header.

#### Default Value

`''`

#### Defined in

[core/src/components/accordion/accordion.ts:121](https://github.com/AmadeusITGroup/AgnosUI/blob/c30b9455d4a9d64b95b7dc4ebfcec51eef3c4d0e/core/src/components/accordion/accordion.ts#L121)

***

### itemTransition

> **itemTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

The transition to use for the accordion-item body-container when the accordion-item is toggled.

#### Default Value

```ts
async () => {}
```

#### Defined in

[core/src/components/accordion/accordion.ts:84](https://github.com/AmadeusITGroup/AgnosUI/blob/c30b9455d4a9d64b95b7dc4ebfcec51eef3c4d0e/core/src/components/accordion/accordion.ts#L84)

***

### onItemHidden()

> **onItemHidden**: (`itemId`) => `void`

An event fired when an item is hidden.

Event payload is the id of the item.

#### Parameters

• **itemId**: `string`

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Defined in

[core/src/components/accordion/accordion.ts:63](https://github.com/AmadeusITGroup/AgnosUI/blob/c30b9455d4a9d64b95b7dc4ebfcec51eef3c4d0e/core/src/components/accordion/accordion.ts#L63)

***

### onItemShown()

> **onItemShown**: (`itemId`) => `void`

An event fired when an item is shown.

Event payload is the id of the item.

#### Parameters

• **itemId**: `string`

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Defined in

[core/src/components/accordion/accordion.ts:52](https://github.com/AmadeusITGroup/AgnosUI/blob/c30b9455d4a9d64b95b7dc4ebfcec51eef3c4d0e/core/src/components/accordion/accordion.ts#L52)
