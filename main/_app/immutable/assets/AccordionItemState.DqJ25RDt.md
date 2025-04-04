Defined in: [core-bootstrap/src/components/accordion/accordion.ts:91](https://github.com/AmadeusITGroup/AgnosUI/blob/4392566dfaf939477d41da96484d82e2d4476bd5/core-bootstrap/src/components/accordion/accordion.ts#L91)

Represents the state of an accordion item, extending the core item state and additional properties specific to the accordion item.

## Extends

- `AccordionItemState`.`AccordionItemExtraProps`

## Properties

### bodyClassName

> **bodyClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:304](https://github.com/AmadeusITGroup/AgnosUI/blob/4392566dfaf939477d41da96484d82e2d4476bd5/core/src/components/accordion/accordion.ts#L304)

CSS classes to add on the accordion-item body DOM element.

#### Inherited from

`CoreItemState.bodyClassName`

***

### bodyContainerClassName

> **bodyContainerClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:300](https://github.com/AmadeusITGroup/AgnosUI/blob/4392566dfaf939477d41da96484d82e2d4476bd5/core/src/components/accordion/accordion.ts#L300)

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Inherited from

`CoreItemState.bodyContainerClassName`

***

### buttonClassName

> **buttonClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:295](https://github.com/AmadeusITGroup/AgnosUI/blob/4392566dfaf939477d41da96484d82e2d4476bd5/core/src/components/accordion/accordion.ts#L295)

CSS classes to add on the accordion-item collapse DOM element.

#### Inherited from

`CoreItemState.buttonClassName`

***

### children

> **children**: `SlotContent`\<[`AccordionItemContext`](AccordionItemContext.md)\>

Defined in: [core-bootstrap/src/components/accordion/accordion.ts:55](https://github.com/AmadeusITGroup/AgnosUI/blob/4392566dfaf939477d41da96484d82e2d4476bd5/core-bootstrap/src/components/accordion/accordion.ts#L55)

Content present in the accordion body.

It is a prop of the accordion-item.

#### Inherited from

`AccordionItemExtraProps.children`

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/4392566dfaf939477d41da96484d82e2d4476bd5/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreItemState.className`

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:283](https://github.com/AmadeusITGroup/AgnosUI/blob/4392566dfaf939477d41da96484d82e2d4476bd5/core/src/components/accordion/accordion.ts#L283)

If `true`, the accordion-item will be disabled.
It will not react to user's clicks, but still will be possible to toggle programmatically.

#### Inherited from

`CoreItemState.disabled`

***

### header

> **header**: `SlotContent`\<[`AccordionItemContext`](AccordionItemContext.md)\>

Defined in: [core-bootstrap/src/components/accordion/accordion.ts:61](https://github.com/AmadeusITGroup/AgnosUI/blob/4392566dfaf939477d41da96484d82e2d4476bd5/core-bootstrap/src/components/accordion/accordion.ts#L61)

Content present in the accordion button inside the accordion header.

It is a prop of the accordion-item.

#### Inherited from

`AccordionItemExtraProps.header`

***

### headerClassName

> **headerClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:291](https://github.com/AmadeusITGroup/AgnosUI/blob/4392566dfaf939477d41da96484d82e2d4476bd5/core/src/components/accordion/accordion.ts#L291)

CSS classes to add on the accordion-item header DOM element.

#### Inherited from

`CoreItemState.headerClassName`

***

### headingTag

> **headingTag**: `string`

Defined in: [core/src/components/accordion/accordion.ts:308](https://github.com/AmadeusITGroup/AgnosUI/blob/4392566dfaf939477d41da96484d82e2d4476bd5/core/src/components/accordion/accordion.ts#L308)

The html tag to use for the accordion-item-header.

#### Inherited from

`CoreItemState.headingTag`

***

### id

> **id**: `string`

Defined in: [core/src/components/accordion/accordion.ts:287](https://github.com/AmadeusITGroup/AgnosUI/blob/4392566dfaf939477d41da96484d82e2d4476bd5/core/src/components/accordion/accordion.ts#L287)

The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.

#### Inherited from

`CoreItemState.id`

***

### shouldBeInDOM

> **shouldBeInDOM**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:351](https://github.com/AmadeusITGroup/AgnosUI/blob/4392566dfaf939477d41da96484d82e2d4476bd5/core/src/components/accordion/accordion.ts#L351)

If `true` the content of the accordion-item collapse should be in DOM. Its value depends on the
value of the `visible` and `destroyOnHide`.

#### Inherited from

`CoreItemState.shouldBeInDOM`

***

### structure

> **structure**: `SlotContent`\<[`AccordionItemContext`](AccordionItemContext.md)\>

Defined in: [core-bootstrap/src/components/accordion/accordion.ts:49](https://github.com/AmadeusITGroup/AgnosUI/blob/4392566dfaf939477d41da96484d82e2d4476bd5/core-bootstrap/src/components/accordion/accordion.ts#L49)

Structure of the accordion-item. The default item structure is: accordion-item
contains accordion header and accordion-item body container; the accordion header contains the accordion button
(that contains `header`), while the accordion-item body container contains the accordion body (that contains `children`).
The itemTransition is applied on this element.

It is a prop of the accordion-item.

#### Inherited from

`AccordionItemExtraProps.structure`

***

### visible

> **visible**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:278](https://github.com/AmadeusITGroup/AgnosUI/blob/4392566dfaf939477d41da96484d82e2d4476bd5/core/src/components/accordion/accordion.ts#L278)

If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).

#### Inherited from

`CoreItemState.visible`
