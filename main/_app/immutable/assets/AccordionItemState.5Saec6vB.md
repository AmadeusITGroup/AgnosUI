Represents the state of an accordion item, extending the core item state and additional properties specific to the accordion item.

## Extends

- `AccordionItemState`.`AccordionItemExtraProps`

## Properties

### bodyClassName

> **bodyClassName**: `string`

CSS classes to add on the accordion-item body DOM element.

#### Inherited from

`CoreItemState.bodyClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:305](https://github.com/AmadeusITGroup/AgnosUI/blob/dd0c58895e809382a16d4234e5eca4587051a108/core/src/components/accordion/accordion.ts#L305)

***

### bodyContainerClassName

> **bodyContainerClassName**: `string`

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Inherited from

`CoreItemState.bodyContainerClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:301](https://github.com/AmadeusITGroup/AgnosUI/blob/dd0c58895e809382a16d4234e5eca4587051a108/core/src/components/accordion/accordion.ts#L301)

***

### buttonClassName

> **buttonClassName**: `string`

CSS classes to add on the accordion-item collapse DOM element.

#### Inherited from

`CoreItemState.buttonClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:296](https://github.com/AmadeusITGroup/AgnosUI/blob/dd0c58895e809382a16d4234e5eca4587051a108/core/src/components/accordion/accordion.ts#L296)

***

### children

> **children**: `SlotContent`\<[`AccordionItemContext`](AccordionItemContext.md)\>

Content present in the accordion body.

It is a prop of the accordion-item.

#### Inherited from

`AccordionItemExtraProps.children`

#### Defined in

[core-bootstrap/src/components/accordion/accordion.ts:54](https://github.com/AmadeusITGroup/AgnosUI/blob/dd0c58895e809382a16d4234e5eca4587051a108/core-bootstrap/src/components/accordion/accordion.ts#L54)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreItemState.className`

#### Defined in

[core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/dd0c58895e809382a16d4234e5eca4587051a108/core/src/components/commonProps.ts#L10)

***

### disabled

> **disabled**: `boolean`

If `true`, the accordion-item will be disabled.
It will not react to user's clicks, but still will be possible to toggle programmatically.

#### Inherited from

`CoreItemState.disabled`

#### Defined in

[core/src/components/accordion/accordion.ts:284](https://github.com/AmadeusITGroup/AgnosUI/blob/dd0c58895e809382a16d4234e5eca4587051a108/core/src/components/accordion/accordion.ts#L284)

***

### header

> **header**: `SlotContent`\<[`AccordionItemContext`](AccordionItemContext.md)\>

Content present in the accordion button inside the accordion header.

It is a prop of the accordion-item.

#### Inherited from

`AccordionItemExtraProps.header`

#### Defined in

[core-bootstrap/src/components/accordion/accordion.ts:60](https://github.com/AmadeusITGroup/AgnosUI/blob/dd0c58895e809382a16d4234e5eca4587051a108/core-bootstrap/src/components/accordion/accordion.ts#L60)

***

### headerClassName

> **headerClassName**: `string`

CSS classes to add on the accordion-item header DOM element.

#### Inherited from

`CoreItemState.headerClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:292](https://github.com/AmadeusITGroup/AgnosUI/blob/dd0c58895e809382a16d4234e5eca4587051a108/core/src/components/accordion/accordion.ts#L292)

***

### headingTag

> **headingTag**: `string`

The html tag to use for the accordion-item-header.

#### Inherited from

`CoreItemState.headingTag`

#### Defined in

[core/src/components/accordion/accordion.ts:309](https://github.com/AmadeusITGroup/AgnosUI/blob/dd0c58895e809382a16d4234e5eca4587051a108/core/src/components/accordion/accordion.ts#L309)

***

### id

> **id**: `string`

The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.

#### Inherited from

`CoreItemState.id`

#### Defined in

[core/src/components/accordion/accordion.ts:288](https://github.com/AmadeusITGroup/AgnosUI/blob/dd0c58895e809382a16d4234e5eca4587051a108/core/src/components/accordion/accordion.ts#L288)

***

### shouldBeInDOM

> **shouldBeInDOM**: `boolean`

If `true` the content of the accordion-item collapse should be in DOM. Its value depends on the
value of the `visible` and `destroyOnHide`.

#### Inherited from

`CoreItemState.shouldBeInDOM`

#### Defined in

[core/src/components/accordion/accordion.ts:352](https://github.com/AmadeusITGroup/AgnosUI/blob/dd0c58895e809382a16d4234e5eca4587051a108/core/src/components/accordion/accordion.ts#L352)

***

### structure

> **structure**: `SlotContent`\<[`AccordionItemContext`](AccordionItemContext.md)\>

Structure of the accordion-item. The default item structure is: accordion-item
contains accordion header and accordion-item body container; the accordion header contains the accordion button
(that contains `header`), while the accordion-item body container contains the accordion body (that contains `children`).
The itemTransition is applied on this element.

It is a prop of the accordion-item.

#### Inherited from

`AccordionItemExtraProps.structure`

#### Defined in

[core-bootstrap/src/components/accordion/accordion.ts:48](https://github.com/AmadeusITGroup/AgnosUI/blob/dd0c58895e809382a16d4234e5eca4587051a108/core-bootstrap/src/components/accordion/accordion.ts#L48)

***

### visible

> **visible**: `boolean`

If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).

#### Inherited from

`CoreItemState.visible`

#### Defined in

[core/src/components/accordion/accordion.ts:279](https://github.com/AmadeusITGroup/AgnosUI/blob/dd0c58895e809382a16d4234e5eca4587051a108/core/src/components/accordion/accordion.ts#L279)
