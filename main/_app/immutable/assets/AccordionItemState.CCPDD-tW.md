## Extends

- `AccordionItemState`.`AccordionItemExtraProps`

## Properties

### bodyClassName

> **bodyClassName**: `string`

CSS classes to add on the accordion-item body DOM element.

#### Inherited from

`CoreItemState.bodyClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:270](https://github.com/AmadeusITGroup/AgnosUI/blob/f90ec4fa7b0f4c596e3577d5f4df83ce4793e6dc/core/src/components/accordion/accordion.ts#L270)

***

### bodyContainerClassName

> **bodyContainerClassName**: `string`

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Inherited from

`CoreItemState.bodyContainerClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:266](https://github.com/AmadeusITGroup/AgnosUI/blob/f90ec4fa7b0f4c596e3577d5f4df83ce4793e6dc/core/src/components/accordion/accordion.ts#L266)

***

### buttonClassName

> **buttonClassName**: `string`

CSS classes to add on the accordion-item collapse DOM element.

#### Inherited from

`CoreItemState.buttonClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:261](https://github.com/AmadeusITGroup/AgnosUI/blob/f90ec4fa7b0f4c596e3577d5f4df83ce4793e6dc/core/src/components/accordion/accordion.ts#L261)

***

### children

> **children**: `SlotContent`\<[`AccordionItemContext`](../type-aliases/AccordionItemContext.md)\>

Content present in the accordion body.

It is a prop of the accordion-item.

#### Inherited from

`AccordionItemExtraProps.children`

#### Defined in

[core-bootstrap/src/components/accordion/accordion.ts:52](https://github.com/AmadeusITGroup/AgnosUI/blob/f90ec4fa7b0f4c596e3577d5f4df83ce4793e6dc/core-bootstrap/src/components/accordion/accordion.ts#L52)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreItemState.className`

#### Defined in

[core/src/components/commonProps.ts:7](https://github.com/AmadeusITGroup/AgnosUI/blob/f90ec4fa7b0f4c596e3577d5f4df83ce4793e6dc/core/src/components/commonProps.ts#L7)

***

### disabled

> **disabled**: `boolean`

If `true`, the accordion-item will be disabled.
It will not react to user's clicks, but still will be possible to toggle programmatically.

#### Inherited from

`CoreItemState.disabled`

#### Defined in

[core/src/components/accordion/accordion.ts:249](https://github.com/AmadeusITGroup/AgnosUI/blob/f90ec4fa7b0f4c596e3577d5f4df83ce4793e6dc/core/src/components/accordion/accordion.ts#L249)

***

### header

> **header**: `SlotContent`\<[`AccordionItemContext`](../type-aliases/AccordionItemContext.md)\>

Content present in the accordion button inside the accordion header.

It is a prop of the accordion-item.

#### Inherited from

`AccordionItemExtraProps.header`

#### Defined in

[core-bootstrap/src/components/accordion/accordion.ts:58](https://github.com/AmadeusITGroup/AgnosUI/blob/f90ec4fa7b0f4c596e3577d5f4df83ce4793e6dc/core-bootstrap/src/components/accordion/accordion.ts#L58)

***

### headerClassName

> **headerClassName**: `string`

CSS classes to add on the accordion-item header DOM element.

#### Inherited from

`CoreItemState.headerClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:257](https://github.com/AmadeusITGroup/AgnosUI/blob/f90ec4fa7b0f4c596e3577d5f4df83ce4793e6dc/core/src/components/accordion/accordion.ts#L257)

***

### headingTag

> **headingTag**: `string`

The html tag to use for the accordion-item-header.

#### Inherited from

`CoreItemState.headingTag`

#### Defined in

[core/src/components/accordion/accordion.ts:274](https://github.com/AmadeusITGroup/AgnosUI/blob/f90ec4fa7b0f4c596e3577d5f4df83ce4793e6dc/core/src/components/accordion/accordion.ts#L274)

***

### id

> **id**: `string`

The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.

#### Inherited from

`CoreItemState.id`

#### Defined in

[core/src/components/accordion/accordion.ts:253](https://github.com/AmadeusITGroup/AgnosUI/blob/f90ec4fa7b0f4c596e3577d5f4df83ce4793e6dc/core/src/components/accordion/accordion.ts#L253)

***

### shouldBeInDOM

> **shouldBeInDOM**: `boolean`

If `true` the content of the accordion-item collapse should be in DOM. Its value depends on the
value of the `visible` and `destroyOnHide`.

#### Inherited from

`CoreItemState.shouldBeInDOM`

#### Defined in

[core/src/components/accordion/accordion.ts:311](https://github.com/AmadeusITGroup/AgnosUI/blob/f90ec4fa7b0f4c596e3577d5f4df83ce4793e6dc/core/src/components/accordion/accordion.ts#L311)

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

[core-bootstrap/src/components/accordion/accordion.ts:46](https://github.com/AmadeusITGroup/AgnosUI/blob/f90ec4fa7b0f4c596e3577d5f4df83ce4793e6dc/core-bootstrap/src/components/accordion/accordion.ts#L46)

***

### visible

> **visible**: `boolean`

If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).

#### Inherited from

`CoreItemState.visible`

#### Defined in

[core/src/components/accordion/accordion.ts:244](https://github.com/AmadeusITGroup/AgnosUI/blob/f90ec4fa7b0f4c596e3577d5f4df83ce4793e6dc/core/src/components/accordion/accordion.ts#L244)
