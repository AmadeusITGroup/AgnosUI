Defined in: [core-bootstrap/src/components/accordion/accordion.ts:70](https://github.com/AmadeusITGroup/AgnosUI/blob/9e6381984050caf406829d1ad6f386ac1466dc1f/core-bootstrap/src/components/accordion/accordion.ts#L70)

Represents the state of an AccordionItem component.

## Extends

- `AccordionProps`.`AccordionExtraProps`

## Properties

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/9e6381984050caf406829d1ad6f386ac1466dc1f/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreProps.className`

***

### closeOthers

> **closeOthers**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:62](https://github.com/AmadeusITGroup/AgnosUI/blob/9e6381984050caf406829d1ad6f386ac1466dc1f/core/src/components/accordion/accordion.ts#L62)

If `true`, only one accordion-item at the time can stay open.

#### Default Value

`false`

#### Inherited from

`CoreProps.closeOthers`

***

### itemAnimated

> **itemAnimated**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:96](https://github.com/AmadeusITGroup/AgnosUI/blob/9e6381984050caf406829d1ad6f386ac1466dc1f/core/src/components/accordion/accordion.ts#L96)

If `true`, accordion-item will be animated.

#### Default Value

`true`

#### Inherited from

`CoreProps.itemAnimated`

***

### itemBodyClassName

> **itemBodyClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:136](https://github.com/AmadeusITGroup/AgnosUI/blob/9e6381984050caf406829d1ad6f386ac1466dc1f/core/src/components/accordion/accordion.ts#L136)

CSS classes to add on the accordion-item body DOM element.

#### Default Value

`''`

#### Inherited from

`CoreProps.itemBodyClassName`

***

### itemBodyContainerClassName

> **itemBodyContainerClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:130](https://github.com/AmadeusITGroup/AgnosUI/blob/9e6381984050caf406829d1ad6f386ac1466dc1f/core/src/components/accordion/accordion.ts#L130)

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Default Value

`''`

#### Inherited from

`CoreProps.itemBodyContainerClassName`

***

### itemButtonClassName

> **itemButtonClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:123](https://github.com/AmadeusITGroup/AgnosUI/blob/9e6381984050caf406829d1ad6f386ac1466dc1f/core/src/components/accordion/accordion.ts#L123)

CSS classes to add on the accordion-item toggle button DOM element.

#### Default Value

`''`

#### Inherited from

`CoreProps.itemButtonClassName`

***

### itemClassName

> **itemClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:111](https://github.com/AmadeusITGroup/AgnosUI/blob/9e6381984050caf406829d1ad6f386ac1466dc1f/core/src/components/accordion/accordion.ts#L111)

CSS classes to add on the accordion-item DOM element.

#### Default Value

`''`

#### Inherited from

`CoreProps.itemClassName`

***

### itemDestroyOnHide

> **itemDestroyOnHide**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:90](https://github.com/AmadeusITGroup/AgnosUI/blob/9e6381984050caf406829d1ad6f386ac1466dc1f/core/src/components/accordion/accordion.ts#L90)

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

#### Default Value

`true`

#### Inherited from

`CoreProps.itemDestroyOnHide`

***

### itemHeaderClassName

> **itemHeaderClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:117](https://github.com/AmadeusITGroup/AgnosUI/blob/9e6381984050caf406829d1ad6f386ac1466dc1f/core/src/components/accordion/accordion.ts#L117)

CSS classes to add on the accordion-item header DOM element.

#### Default Value

`''`

#### Inherited from

`CoreProps.itemHeaderClassName`

***

### itemHeadingTag

> **itemHeadingTag**: `string`

Defined in: [core/src/components/accordion/accordion.ts:142](https://github.com/AmadeusITGroup/AgnosUI/blob/9e6381984050caf406829d1ad6f386ac1466dc1f/core/src/components/accordion/accordion.ts#L142)

The html tag to use for the accordion-item-header.

#### Default Value

`''`

#### Inherited from

`CoreProps.itemHeadingTag`

***

### itemStructure

> **itemStructure**: `SlotContent`\<[`AccordionItemContext`](AccordionItemContext.md)\>

Defined in: [core-bootstrap/src/components/accordion/accordion.ts:37](https://github.com/AmadeusITGroup/AgnosUI/blob/9e6381984050caf406829d1ad6f386ac1466dc1f/core-bootstrap/src/components/accordion/accordion.ts#L37)

Structure of the accordion-item. The default item structure is: accordion-item
contains accordion header and accordion-item body container; the accordion header contains the accordion button
(that contains `header`), while the accordion-item body container contains the accordion body (that contains `children`).
The itemTransition is applied on this element.

It is a prop of the accordion-item.

#### Inherited from

`AccordionExtraProps.itemStructure`

***

### itemTransition

> **itemTransition**: `TransitionFn`

Defined in: [core-bootstrap/src/components/accordion/accordion.ts:79](https://github.com/AmadeusITGroup/AgnosUI/blob/9e6381984050caf406829d1ad6f386ac1466dc1f/core-bootstrap/src/components/accordion/accordion.ts#L79)

The transition to use for the accordion-item body-container when the accordion-item is toggled.

#### Default Value

```ts
collapseVerticalTransition
```

#### Overrides

`CoreProps.itemTransition`

***

### onItemHidden()

> **onItemHidden**: (`itemId`) => `void`

Defined in: [core/src/components/accordion/accordion.ts:84](https://github.com/AmadeusITGroup/AgnosUI/blob/9e6381984050caf406829d1ad6f386ac1466dc1f/core/src/components/accordion/accordion.ts#L84)

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

#### Inherited from

`CoreProps.onItemHidden`

***

### onItemShown()

> **onItemShown**: (`itemId`) => `void`

Defined in: [core/src/components/accordion/accordion.ts:73](https://github.com/AmadeusITGroup/AgnosUI/blob/9e6381984050caf406829d1ad6f386ac1466dc1f/core/src/components/accordion/accordion.ts#L73)

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

#### Inherited from

`CoreProps.onItemShown`
