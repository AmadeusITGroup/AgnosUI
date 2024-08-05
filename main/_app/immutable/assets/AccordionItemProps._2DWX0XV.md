## Extends

- `AccordionItemProps`.`AccordionItemExtraProps`

## Properties

### animated

> **animated**: `boolean`

If `true`, accordion-item will be animated.

#### Inherited from

`CoreItemProps.animated`

#### Defined in

[core/src/components/accordion/accordion.ts:281](https://github.com/AmadeusITGroup/AgnosUI/blob/c5a0486d2f61c08ac52f630e4c765eedf83428c7/core/src/components/accordion/accordion.ts#L281)

***

### bodyClassName

> **bodyClassName**: `string`

CSS classes to add on the accordion-item body DOM element.

#### Inherited from

`CoreItemProps.bodyClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:270](https://github.com/AmadeusITGroup/AgnosUI/blob/c5a0486d2f61c08ac52f630e4c765eedf83428c7/core/src/components/accordion/accordion.ts#L270)

***

### bodyContainerClassName

> **bodyContainerClassName**: `string`

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Inherited from

`CoreItemProps.bodyContainerClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:266](https://github.com/AmadeusITGroup/AgnosUI/blob/c5a0486d2f61c08ac52f630e4c765eedf83428c7/core/src/components/accordion/accordion.ts#L266)

***

### buttonClassName

> **buttonClassName**: `string`

CSS classes to add on the accordion-item collapse DOM element.

#### Inherited from

`CoreItemProps.buttonClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:261](https://github.com/AmadeusITGroup/AgnosUI/blob/c5a0486d2f61c08ac52f630e4c765eedf83428c7/core/src/components/accordion/accordion.ts#L261)

***

### children

> **children**: `SlotContent`\<[`AccordionItemContext`](../type-aliases/AccordionItemContext.md)\>

Content present in the accordion body.

It is a prop of the accordion-item.

#### Inherited from

`AccordionItemExtraProps.children`

#### Defined in

[core-bootstrap/src/components/accordion/accordion.ts:52](https://github.com/AmadeusITGroup/AgnosUI/blob/c5a0486d2f61c08ac52f630e4c765eedf83428c7/core-bootstrap/src/components/accordion/accordion.ts#L52)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreItemProps.className`

#### Defined in

[core/src/components/commonProps.ts:7](https://github.com/AmadeusITGroup/AgnosUI/blob/c5a0486d2f61c08ac52f630e4c765eedf83428c7/core/src/components/commonProps.ts#L7)

***

### destroyOnHide

> **destroyOnHide**: `boolean`

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

#### Inherited from

`CoreItemProps.destroyOnHide`

#### Defined in

[core/src/components/accordion/accordion.ts:289](https://github.com/AmadeusITGroup/AgnosUI/blob/c5a0486d2f61c08ac52f630e4c765eedf83428c7/core/src/components/accordion/accordion.ts#L289)

***

### disabled

> **disabled**: `boolean`

If `true`, the accordion-item will be disabled.
It will not react to user's clicks, but still will be possible to toggle programmatically.

#### Inherited from

`CoreItemProps.disabled`

#### Defined in

[core/src/components/accordion/accordion.ts:249](https://github.com/AmadeusITGroup/AgnosUI/blob/c5a0486d2f61c08ac52f630e4c765eedf83428c7/core/src/components/accordion/accordion.ts#L249)

***

### header

> **header**: `SlotContent`\<[`AccordionItemContext`](../type-aliases/AccordionItemContext.md)\>

Content present in the accordion button inside the accordion header.

It is a prop of the accordion-item.

#### Inherited from

`AccordionItemExtraProps.header`

#### Defined in

[core-bootstrap/src/components/accordion/accordion.ts:58](https://github.com/AmadeusITGroup/AgnosUI/blob/c5a0486d2f61c08ac52f630e4c765eedf83428c7/core-bootstrap/src/components/accordion/accordion.ts#L58)

***

### headerClassName

> **headerClassName**: `string`

CSS classes to add on the accordion-item header DOM element.

#### Inherited from

`CoreItemProps.headerClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:257](https://github.com/AmadeusITGroup/AgnosUI/blob/c5a0486d2f61c08ac52f630e4c765eedf83428c7/core/src/components/accordion/accordion.ts#L257)

***

### headingTag

> **headingTag**: `string`

The html tag to use for the accordion-item-header.

#### Inherited from

`CoreItemProps.headingTag`

#### Defined in

[core/src/components/accordion/accordion.ts:274](https://github.com/AmadeusITGroup/AgnosUI/blob/c5a0486d2f61c08ac52f630e4c765eedf83428c7/core/src/components/accordion/accordion.ts#L274)

***

### id

> **id**: `string`

The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.

#### Inherited from

`CoreItemProps.id`

#### Defined in

[core/src/components/accordion/accordion.ts:253](https://github.com/AmadeusITGroup/AgnosUI/blob/c5a0486d2f61c08ac52f630e4c765eedf83428c7/core/src/components/accordion/accordion.ts#L253)

***

### onHidden()

> **onHidden**: () => `void`

An event fired when an item is hidden.

#### Returns

`void`

#### Inherited from

`CoreItemProps.onHidden`

#### Defined in

[core/src/components/accordion/accordion.ts:297](https://github.com/AmadeusITGroup/AgnosUI/blob/c5a0486d2f61c08ac52f630e4c765eedf83428c7/core/src/components/accordion/accordion.ts#L297)

***

### onShown()

> **onShown**: () => `void`

An event fired when an item is shown.

#### Returns

`void`

#### Inherited from

`CoreItemProps.onShown`

#### Defined in

[core/src/components/accordion/accordion.ts:293](https://github.com/AmadeusITGroup/AgnosUI/blob/c5a0486d2f61c08ac52f630e4c765eedf83428c7/core/src/components/accordion/accordion.ts#L293)

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

[core/src/components/accordion/accordion.ts:303](https://github.com/AmadeusITGroup/AgnosUI/blob/c5a0486d2f61c08ac52f630e4c765eedf83428c7/core/src/components/accordion/accordion.ts#L303)

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

[core-bootstrap/src/components/accordion/accordion.ts:46](https://github.com/AmadeusITGroup/AgnosUI/blob/c5a0486d2f61c08ac52f630e4c765eedf83428c7/core-bootstrap/src/components/accordion/accordion.ts#L46)

***

### transition

> **transition**: `TransitionFn`

The transition to use for the accordion-item body-container when the accordion-item is toggled.

#### Inherited from

`CoreItemProps.transition`

#### Defined in

[core/src/components/accordion/accordion.ts:285](https://github.com/AmadeusITGroup/AgnosUI/blob/c5a0486d2f61c08ac52f630e4c765eedf83428c7/core/src/components/accordion/accordion.ts#L285)

***

### visible

> **visible**: `boolean`

If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).

#### Inherited from

`CoreItemProps.visible`

#### Defined in

[core/src/components/accordion/accordion.ts:244](https://github.com/AmadeusITGroup/AgnosUI/blob/c5a0486d2f61c08ac52f630e4c765eedf83428c7/core/src/components/accordion/accordion.ts#L244)
