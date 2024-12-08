Properties for the Accordion component.

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

[core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/3af9bc75509b23579d1796fe7ec642f036ba12e3/core/src/components/commonProps.ts#L10)

***

### closeOthers

> **closeOthers**: `boolean`

If `true`, only one accordion-item at the time can stay open.

#### Default Value

`false`

#### Defined in

[core/src/components/accordion/accordion.ts:62](https://github.com/AmadeusITGroup/AgnosUI/blob/3af9bc75509b23579d1796fe7ec642f036ba12e3/core/src/components/accordion/accordion.ts#L62)

***

### itemAnimated

> **itemAnimated**: `boolean`

If `true`, accordion-item will be animated.

#### Default Value

`true`

#### Defined in

[core/src/components/accordion/accordion.ts:96](https://github.com/AmadeusITGroup/AgnosUI/blob/3af9bc75509b23579d1796fe7ec642f036ba12e3/core/src/components/accordion/accordion.ts#L96)

***

### itemBodyClassName

> **itemBodyClassName**: `string`

CSS classes to add on the accordion-item body DOM element.

#### Default Value

`''`

#### Defined in

[core/src/components/accordion/accordion.ts:136](https://github.com/AmadeusITGroup/AgnosUI/blob/3af9bc75509b23579d1796fe7ec642f036ba12e3/core/src/components/accordion/accordion.ts#L136)

***

### itemBodyContainerClassName

> **itemBodyContainerClassName**: `string`

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Default Value

`''`

#### Defined in

[core/src/components/accordion/accordion.ts:130](https://github.com/AmadeusITGroup/AgnosUI/blob/3af9bc75509b23579d1796fe7ec642f036ba12e3/core/src/components/accordion/accordion.ts#L130)

***

### itemButtonClassName

> **itemButtonClassName**: `string`

CSS classes to add on the accordion-item toggle button DOM element.

#### Default Value

`''`

#### Defined in

[core/src/components/accordion/accordion.ts:123](https://github.com/AmadeusITGroup/AgnosUI/blob/3af9bc75509b23579d1796fe7ec642f036ba12e3/core/src/components/accordion/accordion.ts#L123)

***

### itemClassName

> **itemClassName**: `string`

CSS classes to add on the accordion-item DOM element.

#### Default Value

`''`

#### Defined in

[core/src/components/accordion/accordion.ts:111](https://github.com/AmadeusITGroup/AgnosUI/blob/3af9bc75509b23579d1796fe7ec642f036ba12e3/core/src/components/accordion/accordion.ts#L111)

***

### itemDestroyOnHide

> **itemDestroyOnHide**: `boolean`

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

#### Default Value

`true`

#### Defined in

[core/src/components/accordion/accordion.ts:90](https://github.com/AmadeusITGroup/AgnosUI/blob/3af9bc75509b23579d1796fe7ec642f036ba12e3/core/src/components/accordion/accordion.ts#L90)

***

### itemHeaderClassName

> **itemHeaderClassName**: `string`

CSS classes to add on the accordion-item header DOM element.

#### Default Value

`''`

#### Defined in

[core/src/components/accordion/accordion.ts:117](https://github.com/AmadeusITGroup/AgnosUI/blob/3af9bc75509b23579d1796fe7ec642f036ba12e3/core/src/components/accordion/accordion.ts#L117)

***

### itemHeadingTag

> **itemHeadingTag**: `string`

The html tag to use for the accordion-item-header.

#### Default Value

`''`

#### Defined in

[core/src/components/accordion/accordion.ts:142](https://github.com/AmadeusITGroup/AgnosUI/blob/3af9bc75509b23579d1796fe7ec642f036ba12e3/core/src/components/accordion/accordion.ts#L142)

***

### itemTransition

> **itemTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

The transition to use for the accordion-item body-container when the accordion-item is toggled.

#### Default Value

```ts
async () => {}
```

#### Defined in

[core/src/components/accordion/accordion.ts:105](https://github.com/AmadeusITGroup/AgnosUI/blob/3af9bc75509b23579d1796fe7ec642f036ba12e3/core/src/components/accordion/accordion.ts#L105)

***

### onItemHidden()

> **onItemHidden**: (`itemId`) => `void`

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

#### Defined in

[core/src/components/accordion/accordion.ts:84](https://github.com/AmadeusITGroup/AgnosUI/blob/3af9bc75509b23579d1796fe7ec642f036ba12e3/core/src/components/accordion/accordion.ts#L84)

***

### onItemShown()

> **onItemShown**: (`itemId`) => `void`

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

#### Defined in

[core/src/components/accordion/accordion.ts:73](https://github.com/AmadeusITGroup/AgnosUI/blob/3af9bc75509b23579d1796fe7ec642f036ba12e3/core/src/components/accordion/accordion.ts#L73)
