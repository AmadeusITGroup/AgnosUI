## Extends

- `AccordionItemProps`.`AccordionItemExtraProps`

## Properties

### animated

> **animated**: `boolean`

If `true`, accordion-item will be animated.

#### Inherited from

`CoreItemProps.animated`

#### Defined in

[core/src/components/accordion/accordion.ts:274](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/core/src/components/accordion/accordion.ts#L274)

***

### bodyClassName

> **bodyClassName**: `string`

CSS classes to add on the accordion-item body DOM element.

#### Inherited from

`CoreItemProps.bodyClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:263](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/core/src/components/accordion/accordion.ts#L263)

***

### bodyContainerClassName

> **bodyContainerClassName**: `string`

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Inherited from

`CoreItemProps.bodyContainerClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:259](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/core/src/components/accordion/accordion.ts#L259)

***

### buttonClassName

> **buttonClassName**: `string`

CSS classes to add on the accordion-item collapse DOM element.

#### Inherited from

`CoreItemProps.buttonClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:254](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/core/src/components/accordion/accordion.ts#L254)

***

### children

> **children**: `SlotContent`\<[`AccordionItemContext`](../type-aliases/AccordionItemContext.md)\>

Content present in the accordion body.

It is a prop of the accordion-item.

#### Inherited from

`AccordionItemExtraProps.children`

#### Defined in

[core-bootstrap/src/components/accordion/accordion.ts:51](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/core-bootstrap/src/components/accordion/accordion.ts#L51)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreItemProps.className`

#### Defined in

[core/src/components/commonProps.ts:7](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/core/src/components/commonProps.ts#L7)

***

### destroyOnHide

> **destroyOnHide**: `boolean`

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

#### Inherited from

`CoreItemProps.destroyOnHide`

#### Defined in

[core/src/components/accordion/accordion.ts:282](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/core/src/components/accordion/accordion.ts#L282)

***

### disabled

> **disabled**: `boolean`

If `true`, the accordion-item will be disabled.
It will not react to user's clicks, but still will be possible to toggle programmatically.

#### Inherited from

`CoreItemProps.disabled`

#### Defined in

[core/src/components/accordion/accordion.ts:242](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/core/src/components/accordion/accordion.ts#L242)

***

### header

> **header**: `SlotContent`\<[`AccordionItemContext`](../type-aliases/AccordionItemContext.md)\>

Content present in the accordion button inside the accordion header.

It is a prop of the accordion-item.

#### Inherited from

`AccordionItemExtraProps.header`

#### Defined in

[core-bootstrap/src/components/accordion/accordion.ts:57](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/core-bootstrap/src/components/accordion/accordion.ts#L57)

***

### headerClassName

> **headerClassName**: `string`

CSS classes to add on the accordion-item header DOM element.

#### Inherited from

`CoreItemProps.headerClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:250](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/core/src/components/accordion/accordion.ts#L250)

***

### headingTag

> **headingTag**: `string`

The html tag to use for the accordion-item-header.

#### Inherited from

`CoreItemProps.headingTag`

#### Defined in

[core/src/components/accordion/accordion.ts:267](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/core/src/components/accordion/accordion.ts#L267)

***

### id

> **id**: `string`

The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.

#### Inherited from

`CoreItemProps.id`

#### Defined in

[core/src/components/accordion/accordion.ts:246](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/core/src/components/accordion/accordion.ts#L246)

***

### onHidden()

> **onHidden**: () => `void`

An event fired when an item is hidden.

#### Returns

`void`

#### Inherited from

`CoreItemProps.onHidden`

#### Defined in

[core/src/components/accordion/accordion.ts:290](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/core/src/components/accordion/accordion.ts#L290)

***

### onShown()

> **onShown**: () => `void`

An event fired when an item is shown.

#### Returns

`void`

#### Inherited from

`CoreItemProps.onShown`

#### Defined in

[core/src/components/accordion/accordion.ts:286](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/core/src/components/accordion/accordion.ts#L286)

***

### onVisibleChange()

> **onVisibleChange**: (`visible`) => `void`

An event fired when the `visible` value changes.

Event payload is the new value of visible.

#### Parameters

• **visible**: `boolean`

#### Returns

`void`

#### Inherited from

`CoreItemProps.onVisibleChange`

#### Defined in

[core/src/components/accordion/accordion.ts:296](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/core/src/components/accordion/accordion.ts#L296)

***

### structure

> **structure**: `SlotContent`\<[`AccordionItemContext`](../type-aliases/AccordionItemContext.md)\>

Structure of the accordion-item. The default item structure is: accordion-item
contains accordion header and accordion-item body container; the accordion header contains the accordion button
(that contains `header`), while the accordion-item body container contains the accordion body (that contains `children`).
The itemTransition is applied on this element.

It is a prop of the accordion-item.

#### Inherited from

`AccordionItemExtraProps.structure`

#### Defined in

[core-bootstrap/src/components/accordion/accordion.ts:45](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/core-bootstrap/src/components/accordion/accordion.ts#L45)

***

### transition

> **transition**: `TransitionFn`

The transition to use for the accordion-item body-container when the accordion-item is toggled.

#### Inherited from

`CoreItemProps.transition`

#### Defined in

[core/src/components/accordion/accordion.ts:278](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/core/src/components/accordion/accordion.ts#L278)

***

### visible

> **visible**: `boolean`

If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).

#### Inherited from

`CoreItemProps.visible`

#### Defined in

[core/src/components/accordion/accordion.ts:237](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/core/src/components/accordion/accordion.ts#L237)
