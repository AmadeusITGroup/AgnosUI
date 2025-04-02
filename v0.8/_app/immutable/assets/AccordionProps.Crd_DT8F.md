Defined in: [core-bootstrap/src/components/accordion/accordion.ts:71](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core-bootstrap/src/components/accordion/accordion.ts#L71)

Represents the state of an AccordionItem component.

## Extends

- `AccordionProps`.`AccordionExtraProps`

## Properties

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreProps.className`

***

### closeOthers

> **closeOthers**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:61](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core/src/components/accordion/accordion.ts#L61)

If `true`, only one accordion-item at the time can stay open.

#### Default Value

`false`

#### Inherited from

`CoreProps.closeOthers`

***

### itemAnimated

> **itemAnimated**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:95](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core/src/components/accordion/accordion.ts#L95)

If `true`, accordion-item will be animated.

#### Default Value

`true`

#### Inherited from

`CoreProps.itemAnimated`

***

### itemBodyClassName

> **itemBodyClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:135](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core/src/components/accordion/accordion.ts#L135)

CSS classes to add on the accordion-item body DOM element.

#### Default Value

`''`

#### Inherited from

`CoreProps.itemBodyClassName`

***

### itemBodyContainerClassName

> **itemBodyContainerClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:129](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core/src/components/accordion/accordion.ts#L129)

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Default Value

`''`

#### Inherited from

`CoreProps.itemBodyContainerClassName`

***

### itemButtonClassName

> **itemButtonClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:122](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core/src/components/accordion/accordion.ts#L122)

CSS classes to add on the accordion-item toggle button DOM element.

#### Default Value

`''`

#### Inherited from

`CoreProps.itemButtonClassName`

***

### itemClassName

> **itemClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:110](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core/src/components/accordion/accordion.ts#L110)

CSS classes to add on the accordion-item DOM element.

#### Default Value

`''`

#### Inherited from

`CoreProps.itemClassName`

***

### itemDestroyOnHide

> **itemDestroyOnHide**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:89](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core/src/components/accordion/accordion.ts#L89)

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

#### Default Value

`true`

#### Inherited from

`CoreProps.itemDestroyOnHide`

***

### itemHeaderClassName

> **itemHeaderClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:116](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core/src/components/accordion/accordion.ts#L116)

CSS classes to add on the accordion-item header DOM element.

#### Default Value

`''`

#### Inherited from

`CoreProps.itemHeaderClassName`

***

### itemHeadingTag

> **itemHeadingTag**: `string`

Defined in: [core/src/components/accordion/accordion.ts:141](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core/src/components/accordion/accordion.ts#L141)

The html tag to use for the accordion-item-header.

#### Default Value

`''`

#### Inherited from

`CoreProps.itemHeadingTag`

***

### itemStructure

> **itemStructure**: `SlotContent`\<[`AccordionItemContext`](AccordionItemContext.md)\>

Defined in: [core-bootstrap/src/components/accordion/accordion.ts:38](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core-bootstrap/src/components/accordion/accordion.ts#L38)

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

Defined in: [core-bootstrap/src/components/accordion/accordion.ts:80](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core-bootstrap/src/components/accordion/accordion.ts#L80)

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

Defined in: [core/src/components/accordion/accordion.ts:83](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core/src/components/accordion/accordion.ts#L83)

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

Defined in: [core/src/components/accordion/accordion.ts:72](https://github.com/AmadeusITGroup/AgnosUI/blob/a3a8afecd55cc6836ee42958549e71b0ae7bca01/core/src/components/accordion/accordion.ts#L72)

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
