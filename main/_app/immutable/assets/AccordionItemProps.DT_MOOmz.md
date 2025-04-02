Defined in: [core-bootstrap/src/components/accordion/accordion.ts:95](https://github.com/AmadeusITGroup/AgnosUI/blob/b33782fd69d19f6c650ae60a0f8c05ebe8bd0af5/core-bootstrap/src/components/accordion/accordion.ts#L95)

Represents the properties for an Accordion item component.

## Extends

- `AccordionItemProps`.`AccordionItemExtraProps`

## Properties

### animated

> **animated**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:318](https://github.com/AmadeusITGroup/AgnosUI/blob/b33782fd69d19f6c650ae60a0f8c05ebe8bd0af5/core/src/components/accordion/accordion.ts#L318)

If `true`, accordion-item will be animated.

#### Inherited from

`CoreItemProps.animated`

***

### bodyClassName

> **bodyClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:304](https://github.com/AmadeusITGroup/AgnosUI/blob/b33782fd69d19f6c650ae60a0f8c05ebe8bd0af5/core/src/components/accordion/accordion.ts#L304)

CSS classes to add on the accordion-item body DOM element.

#### Inherited from

`CoreItemProps.bodyClassName`

***

### bodyContainerClassName

> **bodyContainerClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:300](https://github.com/AmadeusITGroup/AgnosUI/blob/b33782fd69d19f6c650ae60a0f8c05ebe8bd0af5/core/src/components/accordion/accordion.ts#L300)

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Inherited from

`CoreItemProps.bodyContainerClassName`

***

### buttonClassName

> **buttonClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:295](https://github.com/AmadeusITGroup/AgnosUI/blob/b33782fd69d19f6c650ae60a0f8c05ebe8bd0af5/core/src/components/accordion/accordion.ts#L295)

CSS classes to add on the accordion-item collapse DOM element.

#### Inherited from

`CoreItemProps.buttonClassName`

***

### children

> **children**: `SlotContent`\<[`AccordionItemContext`](AccordionItemContext.md)\>

Defined in: [core-bootstrap/src/components/accordion/accordion.ts:55](https://github.com/AmadeusITGroup/AgnosUI/blob/b33782fd69d19f6c650ae60a0f8c05ebe8bd0af5/core-bootstrap/src/components/accordion/accordion.ts#L55)

Content present in the accordion body.

It is a prop of the accordion-item.

#### Inherited from

`AccordionItemExtraProps.children`

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/b33782fd69d19f6c650ae60a0f8c05ebe8bd0af5/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreItemProps.className`

***

### destroyOnHide

> **destroyOnHide**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:326](https://github.com/AmadeusITGroup/AgnosUI/blob/b33782fd69d19f6c650ae60a0f8c05ebe8bd0af5/core/src/components/accordion/accordion.ts#L326)

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

#### Inherited from

`CoreItemProps.destroyOnHide`

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:283](https://github.com/AmadeusITGroup/AgnosUI/blob/b33782fd69d19f6c650ae60a0f8c05ebe8bd0af5/core/src/components/accordion/accordion.ts#L283)

If `true`, the accordion-item will be disabled.
It will not react to user's clicks, but still will be possible to toggle programmatically.

#### Inherited from

`CoreItemProps.disabled`

***

### header

> **header**: `SlotContent`\<[`AccordionItemContext`](AccordionItemContext.md)\>

Defined in: [core-bootstrap/src/components/accordion/accordion.ts:61](https://github.com/AmadeusITGroup/AgnosUI/blob/b33782fd69d19f6c650ae60a0f8c05ebe8bd0af5/core-bootstrap/src/components/accordion/accordion.ts#L61)

Content present in the accordion button inside the accordion header.

It is a prop of the accordion-item.

#### Inherited from

`AccordionItemExtraProps.header`

***

### headerClassName

> **headerClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:291](https://github.com/AmadeusITGroup/AgnosUI/blob/b33782fd69d19f6c650ae60a0f8c05ebe8bd0af5/core/src/components/accordion/accordion.ts#L291)

CSS classes to add on the accordion-item header DOM element.

#### Inherited from

`CoreItemProps.headerClassName`

***

### headingTag

> **headingTag**: `string`

Defined in: [core/src/components/accordion/accordion.ts:308](https://github.com/AmadeusITGroup/AgnosUI/blob/b33782fd69d19f6c650ae60a0f8c05ebe8bd0af5/core/src/components/accordion/accordion.ts#L308)

The html tag to use for the accordion-item-header.

#### Inherited from

`CoreItemProps.headingTag`

***

### id

> **id**: `string`

Defined in: [core/src/components/accordion/accordion.ts:287](https://github.com/AmadeusITGroup/AgnosUI/blob/b33782fd69d19f6c650ae60a0f8c05ebe8bd0af5/core/src/components/accordion/accordion.ts#L287)

The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.

#### Inherited from

`CoreItemProps.id`

***

### onHidden()

> **onHidden**: () => `void`

Defined in: [core/src/components/accordion/accordion.ts:334](https://github.com/AmadeusITGroup/AgnosUI/blob/b33782fd69d19f6c650ae60a0f8c05ebe8bd0af5/core/src/components/accordion/accordion.ts#L334)

An event fired when an item is hidden.

#### Returns

`void`

#### Inherited from

`CoreItemProps.onHidden`

***

### onShown()

> **onShown**: () => `void`

Defined in: [core/src/components/accordion/accordion.ts:330](https://github.com/AmadeusITGroup/AgnosUI/blob/b33782fd69d19f6c650ae60a0f8c05ebe8bd0af5/core/src/components/accordion/accordion.ts#L330)

An event fired when an item is shown.

#### Returns

`void`

#### Inherited from

`CoreItemProps.onShown`

***

### onVisibleChange()

> **onVisibleChange**: (`visible`) => `void`

Defined in: [core/src/components/accordion/accordion.ts:340](https://github.com/AmadeusITGroup/AgnosUI/blob/b33782fd69d19f6c650ae60a0f8c05ebe8bd0af5/core/src/components/accordion/accordion.ts#L340)

An event fired when the `visible` value changes.

Event payload is the new value of visible.

#### Parameters

##### visible

`boolean`

#### Returns

`void`

#### Inherited from

`CoreItemProps.onVisibleChange`

***

### structure

> **structure**: `SlotContent`\<[`AccordionItemContext`](AccordionItemContext.md)\>

Defined in: [core-bootstrap/src/components/accordion/accordion.ts:49](https://github.com/AmadeusITGroup/AgnosUI/blob/b33782fd69d19f6c650ae60a0f8c05ebe8bd0af5/core-bootstrap/src/components/accordion/accordion.ts#L49)

Structure of the accordion-item. The default item structure is: accordion-item
contains accordion header and accordion-item body container; the accordion header contains the accordion button
(that contains `header`), while the accordion-item body container contains the accordion body (that contains `children`).
The itemTransition is applied on this element.

It is a prop of the accordion-item.

#### Inherited from

`AccordionItemExtraProps.structure`

***

### transition

> **transition**: `TransitionFn`

Defined in: [core/src/components/accordion/accordion.ts:322](https://github.com/AmadeusITGroup/AgnosUI/blob/b33782fd69d19f6c650ae60a0f8c05ebe8bd0af5/core/src/components/accordion/accordion.ts#L322)

The transition to use for the accordion-item body-container when the accordion-item is toggled.

#### Inherited from

`CoreItemProps.transition`

***

### visible

> **visible**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:278](https://github.com/AmadeusITGroup/AgnosUI/blob/b33782fd69d19f6c650ae60a0f8c05ebe8bd0af5/core/src/components/accordion/accordion.ts#L278)

If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).

#### Inherited from

`CoreItemProps.visible`
