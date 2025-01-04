Defined in: angular/bootstrap/src/components/accordion/accordion.gen.ts:51

Represents the state of an AccordionItem component.

## Properties

### className

> **className**: `string`

Defined in: angular/bootstrap/src/components/accordion/accordion.gen.ts:156

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### closeOthers

> **closeOthers**: `boolean`

Defined in: angular/bootstrap/src/components/accordion/accordion.gen.ts:68

If `true`, only one accordion-item at the time can stay open.

#### Default Value

`false`

***

### itemAnimated

> **itemAnimated**: `boolean`

Defined in: angular/bootstrap/src/components/accordion/accordion.gen.ts:106

If `true`, accordion-item will be animated.

#### Default Value

`true`

***

### itemBodyClassName

> **itemBodyClassName**: `string`

Defined in: angular/bootstrap/src/components/accordion/accordion.gen.ts:142

CSS classes to add on the accordion-item body DOM element.

#### Default Value

`''`

***

### itemBodyContainerClassName

> **itemBodyContainerClassName**: `string`

Defined in: angular/bootstrap/src/components/accordion/accordion.gen.ts:135

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Default Value

`''`

***

### itemButtonClassName

> **itemButtonClassName**: `string`

Defined in: angular/bootstrap/src/components/accordion/accordion.gen.ts:127

CSS classes to add on the accordion-item toggle button DOM element.

#### Default Value

`''`

***

### itemClassName

> **itemClassName**: `string`

Defined in: angular/bootstrap/src/components/accordion/accordion.gen.ts:113

CSS classes to add on the accordion-item DOM element.

#### Default Value

`''`

***

### itemDestroyOnHide

> **itemDestroyOnHide**: `boolean`

Defined in: angular/bootstrap/src/components/accordion/accordion.gen.ts:99

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

#### Default Value

`true`

***

### itemHeaderClassName

> **itemHeaderClassName**: `string`

Defined in: angular/bootstrap/src/components/accordion/accordion.gen.ts:120

CSS classes to add on the accordion-item header DOM element.

#### Default Value

`''`

***

### itemHeadingTag

> **itemHeadingTag**: `string`

Defined in: angular/bootstrap/src/components/accordion/accordion.gen.ts:149

The html tag to use for the accordion-item-header.

#### Default Value

`''`

***

### itemStructure

> **itemStructure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](AccordionItemContext.md)\>

Defined in: angular/bootstrap/src/components/accordion/accordion.gen.ts:166

Structure of the accordion-item. The default item structure is: accordion-item
contains accordion header and accordion-item body container; the accordion header contains the accordion button
(that contains `header`), while the accordion-item body container contains the accordion body (that contains `children`).
The itemTransition is applied on this element.

It is a prop of the accordion-item.

***

### itemTransition

> **itemTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: angular/bootstrap/src/components/accordion/accordion.gen.ts:61

The transition to use for the accordion-item body-container when the accordion-item is toggled.

#### Default Value

```ts
collapseVerticalTransition
```

***

### onItemHidden()

> **onItemHidden**: (`itemId`) => `void`

Defined in: angular/bootstrap/src/components/accordion/accordion.gen.ts:92

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

Defined in: angular/bootstrap/src/components/accordion/accordion.gen.ts:80

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
