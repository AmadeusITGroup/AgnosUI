## Extends

- `AccordionProps`.`AccordionExtraProps`

## Properties

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreProps.className`

#### Defined in

[core/src/components/commonProps.ts:7](https://github.com/AmadeusITGroup/AgnosUI/blob/821ebace6d33bdfeda3d127991aff1238e28c363/core/src/components/commonProps.ts#L7)

***

### closeOthers

> **closeOthers**: `boolean`

If `true`, only one accordion-item at the time can stay open.

#### Default Value

`false`

#### Inherited from

`CoreProps.closeOthers`

#### Defined in

[core/src/components/accordion/accordion.ts:41](https://github.com/AmadeusITGroup/AgnosUI/blob/821ebace6d33bdfeda3d127991aff1238e28c363/core/src/components/accordion/accordion.ts#L41)

***

### itemAnimated

> **itemAnimated**: `boolean`

If `true`, accordion-item will be animated.

#### Default Value

`true`

#### Inherited from

`CoreProps.itemAnimated`

#### Defined in

[core/src/components/accordion/accordion.ts:75](https://github.com/AmadeusITGroup/AgnosUI/blob/821ebace6d33bdfeda3d127991aff1238e28c363/core/src/components/accordion/accordion.ts#L75)

***

### itemBodyClassName

> **itemBodyClassName**: `string`

CSS classes to add on the accordion-item body DOM element.

#### Default Value

`''`

#### Inherited from

`CoreProps.itemBodyClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:115](https://github.com/AmadeusITGroup/AgnosUI/blob/821ebace6d33bdfeda3d127991aff1238e28c363/core/src/components/accordion/accordion.ts#L115)

***

### itemBodyContainerClassName

> **itemBodyContainerClassName**: `string`

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Default Value

`''`

#### Inherited from

`CoreProps.itemBodyContainerClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:109](https://github.com/AmadeusITGroup/AgnosUI/blob/821ebace6d33bdfeda3d127991aff1238e28c363/core/src/components/accordion/accordion.ts#L109)

***

### itemButtonClassName

> **itemButtonClassName**: `string`

CSS classes to add on the accordion-item toggle button DOM element.

#### Default Value

`''`

#### Inherited from

`CoreProps.itemButtonClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:102](https://github.com/AmadeusITGroup/AgnosUI/blob/821ebace6d33bdfeda3d127991aff1238e28c363/core/src/components/accordion/accordion.ts#L102)

***

### itemClassName

> **itemClassName**: `string`

CSS classes to add on the accordion-item DOM element.

#### Default Value

`''`

#### Inherited from

`CoreProps.itemClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:90](https://github.com/AmadeusITGroup/AgnosUI/blob/821ebace6d33bdfeda3d127991aff1238e28c363/core/src/components/accordion/accordion.ts#L90)

***

### itemDestroyOnHide

> **itemDestroyOnHide**: `boolean`

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

#### Default Value

`true`

#### Inherited from

`CoreProps.itemDestroyOnHide`

#### Defined in

[core/src/components/accordion/accordion.ts:69](https://github.com/AmadeusITGroup/AgnosUI/blob/821ebace6d33bdfeda3d127991aff1238e28c363/core/src/components/accordion/accordion.ts#L69)

***

### itemHeaderClassName

> **itemHeaderClassName**: `string`

CSS classes to add on the accordion-item header DOM element.

#### Default Value

`''`

#### Inherited from

`CoreProps.itemHeaderClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:96](https://github.com/AmadeusITGroup/AgnosUI/blob/821ebace6d33bdfeda3d127991aff1238e28c363/core/src/components/accordion/accordion.ts#L96)

***

### itemHeadingTag

> **itemHeadingTag**: `string`

The html tag to use for the accordion-item-header.

#### Default Value

`''`

#### Inherited from

`CoreProps.itemHeadingTag`

#### Defined in

[core/src/components/accordion/accordion.ts:121](https://github.com/AmadeusITGroup/AgnosUI/blob/821ebace6d33bdfeda3d127991aff1238e28c363/core/src/components/accordion/accordion.ts#L121)

***

### itemStructure

> **itemStructure**: `SlotContent`\<[`AccordionItemContext`](../type-aliases/AccordionItemContext.md)\>

Structure of the accordion-item. The default item structure is: accordion-item
contains accordion header and accordion-item body container; the accordion header contains the accordion button
(that contains `header`), while the accordion-item body container contains the accordion body (that contains `children`).
The itemTransition is applied on this element.

It is a prop of the accordion-item.

#### Inherited from

`AccordionExtraProps.itemStructure`

#### Defined in

[core-bootstrap/src/components/accordion/accordion.ts:35](https://github.com/AmadeusITGroup/AgnosUI/blob/821ebace6d33bdfeda3d127991aff1238e28c363/core-bootstrap/src/components/accordion/accordion.ts#L35)

***

### itemTransition

> **itemTransition**: `TransitionFn`

The transition to use for the accordion-item body-container when the accordion-item is toggled.

#### Default Value

```ts
collapseVerticalTransition
```

#### Overrides

`CoreProps.itemTransition`

#### Defined in

[core-bootstrap/src/components/accordion/accordion.ts:71](https://github.com/AmadeusITGroup/AgnosUI/blob/821ebace6d33bdfeda3d127991aff1238e28c363/core-bootstrap/src/components/accordion/accordion.ts#L71)

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

#### Inherited from

`CoreProps.onItemHidden`

#### Defined in

[core/src/components/accordion/accordion.ts:63](https://github.com/AmadeusITGroup/AgnosUI/blob/821ebace6d33bdfeda3d127991aff1238e28c363/core/src/components/accordion/accordion.ts#L63)

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

#### Inherited from

`CoreProps.onItemShown`

#### Defined in

[core/src/components/accordion/accordion.ts:52](https://github.com/AmadeusITGroup/AgnosUI/blob/821ebace6d33bdfeda3d127991aff1238e28c363/core/src/components/accordion/accordion.ts#L52)
