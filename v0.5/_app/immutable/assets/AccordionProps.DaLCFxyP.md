Represents the state of an AccordionItem component.

## Properties

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

react/bootstrap/src/components/accordion/accordion.gen.ts:157

***

### closeOthers

> **closeOthers**: `boolean`

If `true`, only one accordion-item at the time can stay open.

#### Default Value

`false`

#### Defined in

react/bootstrap/src/components/accordion/accordion.gen.ts:69

***

### itemAnimated

> **itemAnimated**: `boolean`

If `true`, accordion-item will be animated.

#### Default Value

`true`

#### Defined in

react/bootstrap/src/components/accordion/accordion.gen.ts:107

***

### itemBodyClassName

> **itemBodyClassName**: `string`

CSS classes to add on the accordion-item body DOM element.

#### Default Value

`''`

#### Defined in

react/bootstrap/src/components/accordion/accordion.gen.ts:143

***

### itemBodyContainerClassName

> **itemBodyContainerClassName**: `string`

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Default Value

`''`

#### Defined in

react/bootstrap/src/components/accordion/accordion.gen.ts:136

***

### itemButtonClassName

> **itemButtonClassName**: `string`

CSS classes to add on the accordion-item toggle button DOM element.

#### Default Value

`''`

#### Defined in

react/bootstrap/src/components/accordion/accordion.gen.ts:128

***

### itemClassName

> **itemClassName**: `string`

CSS classes to add on the accordion-item DOM element.

#### Default Value

`''`

#### Defined in

react/bootstrap/src/components/accordion/accordion.gen.ts:114

***

### itemDestroyOnHide

> **itemDestroyOnHide**: `boolean`

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

#### Default Value

`true`

#### Defined in

react/bootstrap/src/components/accordion/accordion.gen.ts:100

***

### itemHeaderClassName

> **itemHeaderClassName**: `string`

CSS classes to add on the accordion-item header DOM element.

#### Default Value

`''`

#### Defined in

react/bootstrap/src/components/accordion/accordion.gen.ts:121

***

### itemHeadingTag

> **itemHeadingTag**: `string`

The html tag to use for the accordion-item-header.

#### Default Value

`''`

#### Defined in

react/bootstrap/src/components/accordion/accordion.gen.ts:150

***

### itemStructure

> **itemStructure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](AccordionItemContext.md)\>

Structure of the accordion-item. The default item structure is: accordion-item
contains accordion header and accordion-item body container; the accordion header contains the accordion button
(that contains `header`), while the accordion-item body container contains the accordion body (that contains `children`).
The itemTransition is applied on this element.

It is a prop of the accordion-item.

#### Defined in

react/bootstrap/src/components/accordion/accordion.gen.ts:167

***

### itemTransition

> **itemTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

The transition to use for the accordion-item body-container when the accordion-item is toggled.

#### Default Value

```ts
collapseVerticalTransition
```

#### Defined in

react/bootstrap/src/components/accordion/accordion.gen.ts:62

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

react/bootstrap/src/components/accordion/accordion.gen.ts:93

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

react/bootstrap/src/components/accordion/accordion.gen.ts:81
