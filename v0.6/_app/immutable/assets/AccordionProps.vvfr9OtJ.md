Represents the state of an AccordionItem component.

## Properties

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

angular/bootstrap/src/components/accordion/accordion.gen.ts:156

***

### closeOthers

> **closeOthers**: `boolean`

If `true`, only one accordion-item at the time can stay open.

#### Default Value

`false`

#### Defined in

angular/bootstrap/src/components/accordion/accordion.gen.ts:68

***

### itemAnimated

> **itemAnimated**: `boolean`

If `true`, accordion-item will be animated.

#### Default Value

`true`

#### Defined in

angular/bootstrap/src/components/accordion/accordion.gen.ts:106

***

### itemBodyClassName

> **itemBodyClassName**: `string`

CSS classes to add on the accordion-item body DOM element.

#### Default Value

`''`

#### Defined in

angular/bootstrap/src/components/accordion/accordion.gen.ts:142

***

### itemBodyContainerClassName

> **itemBodyContainerClassName**: `string`

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Default Value

`''`

#### Defined in

angular/bootstrap/src/components/accordion/accordion.gen.ts:135

***

### itemButtonClassName

> **itemButtonClassName**: `string`

CSS classes to add on the accordion-item toggle button DOM element.

#### Default Value

`''`

#### Defined in

angular/bootstrap/src/components/accordion/accordion.gen.ts:127

***

### itemClassName

> **itemClassName**: `string`

CSS classes to add on the accordion-item DOM element.

#### Default Value

`''`

#### Defined in

angular/bootstrap/src/components/accordion/accordion.gen.ts:113

***

### itemDestroyOnHide

> **itemDestroyOnHide**: `boolean`

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

#### Default Value

`true`

#### Defined in

angular/bootstrap/src/components/accordion/accordion.gen.ts:99

***

### itemHeaderClassName

> **itemHeaderClassName**: `string`

CSS classes to add on the accordion-item header DOM element.

#### Default Value

`''`

#### Defined in

angular/bootstrap/src/components/accordion/accordion.gen.ts:120

***

### itemHeadingTag

> **itemHeadingTag**: `string`

The html tag to use for the accordion-item-header.

#### Default Value

`''`

#### Defined in

angular/bootstrap/src/components/accordion/accordion.gen.ts:149

***

### itemStructure

> **itemStructure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](AccordionItemContext.md)\>

Structure of the accordion-item. The default item structure is: accordion-item
contains accordion header and accordion-item body container; the accordion header contains the accordion button
(that contains `header`), while the accordion-item body container contains the accordion body (that contains `children`).
The itemTransition is applied on this element.

It is a prop of the accordion-item.

#### Defined in

angular/bootstrap/src/components/accordion/accordion.gen.ts:166

***

### itemTransition

> **itemTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

The transition to use for the accordion-item body-container when the accordion-item is toggled.

#### Default Value

```ts
collapseVerticalTransition
```

#### Defined in

angular/bootstrap/src/components/accordion/accordion.gen.ts:61

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

angular/bootstrap/src/components/accordion/accordion.gen.ts:92

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

angular/bootstrap/src/components/accordion/accordion.gen.ts:80
