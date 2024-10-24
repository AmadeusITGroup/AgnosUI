## Extends

- `AccordionItemState`.`AccordionItemExtraProps`

## Properties

### bodyClassName

> **bodyClassName**: `string`

CSS classes to add on the accordion-item body DOM element.

#### Inherited from

`CoreItemState.bodyClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:263](https://github.com/AmadeusITGroup/AgnosUI/blob/6bf9286b52aa8e1676563512d99daa1de00367b4/core/src/components/accordion/accordion.ts#L263)

***

### bodyContainerClassName

> **bodyContainerClassName**: `string`

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Inherited from

`CoreItemState.bodyContainerClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:259](https://github.com/AmadeusITGroup/AgnosUI/blob/6bf9286b52aa8e1676563512d99daa1de00367b4/core/src/components/accordion/accordion.ts#L259)

***

### buttonClassName

> **buttonClassName**: `string`

CSS classes to add on the accordion-item collapse DOM element.

#### Inherited from

`CoreItemState.buttonClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:254](https://github.com/AmadeusITGroup/AgnosUI/blob/6bf9286b52aa8e1676563512d99daa1de00367b4/core/src/components/accordion/accordion.ts#L254)

***

### children

> **children**: `SlotContent`\<[`AccordionItemContext`](../type-aliases/AccordionItemContext.md)\>

Content present in the accordion body.

It is a prop of the accordion-item.

#### Inherited from

`AccordionItemExtraProps.children`

#### Defined in

[core-bootstrap/src/components/accordion/accordion.ts:51](https://github.com/AmadeusITGroup/AgnosUI/blob/6bf9286b52aa8e1676563512d99daa1de00367b4/core-bootstrap/src/components/accordion/accordion.ts#L51)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreItemState.className`

#### Defined in

[core/src/components/commonProps.ts:7](https://github.com/AmadeusITGroup/AgnosUI/blob/6bf9286b52aa8e1676563512d99daa1de00367b4/core/src/components/commonProps.ts#L7)

***

### disabled

> **disabled**: `boolean`

If `true`, the accordion-item will be disabled.
It will not react to user's clicks, but still will be possible to toggle programmatically.

#### Inherited from

`CoreItemState.disabled`

#### Defined in

[core/src/components/accordion/accordion.ts:242](https://github.com/AmadeusITGroup/AgnosUI/blob/6bf9286b52aa8e1676563512d99daa1de00367b4/core/src/components/accordion/accordion.ts#L242)

***

### header

> **header**: `SlotContent`\<[`AccordionItemContext`](../type-aliases/AccordionItemContext.md)\>

Content present in the accordion button inside the accordion header.

It is a prop of the accordion-item.

#### Inherited from

`AccordionItemExtraProps.header`

#### Defined in

[core-bootstrap/src/components/accordion/accordion.ts:57](https://github.com/AmadeusITGroup/AgnosUI/blob/6bf9286b52aa8e1676563512d99daa1de00367b4/core-bootstrap/src/components/accordion/accordion.ts#L57)

***

### headerClassName

> **headerClassName**: `string`

CSS classes to add on the accordion-item header DOM element.

#### Inherited from

`CoreItemState.headerClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:250](https://github.com/AmadeusITGroup/AgnosUI/blob/6bf9286b52aa8e1676563512d99daa1de00367b4/core/src/components/accordion/accordion.ts#L250)

***

### headingTag

> **headingTag**: `string`

The html tag to use for the accordion-item-header.

#### Inherited from

`CoreItemState.headingTag`

#### Defined in

[core/src/components/accordion/accordion.ts:267](https://github.com/AmadeusITGroup/AgnosUI/blob/6bf9286b52aa8e1676563512d99daa1de00367b4/core/src/components/accordion/accordion.ts#L267)

***

### id

> **id**: `string`

The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.

#### Inherited from

`CoreItemState.id`

#### Defined in

[core/src/components/accordion/accordion.ts:246](https://github.com/AmadeusITGroup/AgnosUI/blob/6bf9286b52aa8e1676563512d99daa1de00367b4/core/src/components/accordion/accordion.ts#L246)

***

### shouldBeInDOM

> **shouldBeInDOM**: `boolean`

If `true` the content of the accordion-item collapse should be in DOM. Its value depends on the
value of the `visible` and `destroyOnHide`.

#### Inherited from

`CoreItemState.shouldBeInDOM`

#### Defined in

[core/src/components/accordion/accordion.ts:304](https://github.com/AmadeusITGroup/AgnosUI/blob/6bf9286b52aa8e1676563512d99daa1de00367b4/core/src/components/accordion/accordion.ts#L304)

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

[core-bootstrap/src/components/accordion/accordion.ts:45](https://github.com/AmadeusITGroup/AgnosUI/blob/6bf9286b52aa8e1676563512d99daa1de00367b4/core-bootstrap/src/components/accordion/accordion.ts#L45)

***

### visible

> **visible**: `boolean`

If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).

#### Inherited from

`CoreItemState.visible`

#### Defined in

[core/src/components/accordion/accordion.ts:237](https://github.com/AmadeusITGroup/AgnosUI/blob/6bf9286b52aa8e1676563512d99daa1de00367b4/core/src/components/accordion/accordion.ts#L237)
