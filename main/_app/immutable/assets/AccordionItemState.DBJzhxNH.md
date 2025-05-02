Defined in: [core/src/components/accordion/accordion.ts:347](https://github.com/AmadeusITGroup/AgnosUI/blob/ee1daf8f80138440fcb1256d6fd0978ad4cd2730/core/src/components/accordion/accordion.ts#L347)

Represents the state of an accordion item.

## Extends

- `AccordionItemCommonPropsAndState`

## Properties

### bodyClassName

> **bodyClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:305](https://github.com/AmadeusITGroup/AgnosUI/blob/ee1daf8f80138440fcb1256d6fd0978ad4cd2730/core/src/components/accordion/accordion.ts#L305)

CSS classes to add on the accordion-item body DOM element.

#### Inherited from

`AccordionItemCommonPropsAndState.bodyClassName`

***

### bodyContainerClassName

> **bodyContainerClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:301](https://github.com/AmadeusITGroup/AgnosUI/blob/ee1daf8f80138440fcb1256d6fd0978ad4cd2730/core/src/components/accordion/accordion.ts#L301)

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Inherited from

`AccordionItemCommonPropsAndState.bodyContainerClassName`

***

### buttonClassName

> **buttonClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:296](https://github.com/AmadeusITGroup/AgnosUI/blob/ee1daf8f80138440fcb1256d6fd0978ad4cd2730/core/src/components/accordion/accordion.ts#L296)

CSS classes to add on the accordion-item collapse DOM element.

#### Inherited from

`AccordionItemCommonPropsAndState.buttonClassName`

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/ee1daf8f80138440fcb1256d6fd0978ad4cd2730/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`AccordionItemCommonPropsAndState.className`

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:284](https://github.com/AmadeusITGroup/AgnosUI/blob/ee1daf8f80138440fcb1256d6fd0978ad4cd2730/core/src/components/accordion/accordion.ts#L284)

If `true`, the accordion-item will be disabled.
It will not react to user's clicks, but still will be possible to toggle programmatically.

#### Inherited from

`AccordionItemCommonPropsAndState.disabled`

***

### headerClassName

> **headerClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:292](https://github.com/AmadeusITGroup/AgnosUI/blob/ee1daf8f80138440fcb1256d6fd0978ad4cd2730/core/src/components/accordion/accordion.ts#L292)

CSS classes to add on the accordion-item header DOM element.

#### Inherited from

`AccordionItemCommonPropsAndState.headerClassName`

***

### headingTag

> **headingTag**: `string`

Defined in: [core/src/components/accordion/accordion.ts:309](https://github.com/AmadeusITGroup/AgnosUI/blob/ee1daf8f80138440fcb1256d6fd0978ad4cd2730/core/src/components/accordion/accordion.ts#L309)

The html tag to use for the accordion-item-header.

#### Inherited from

`AccordionItemCommonPropsAndState.headingTag`

***

### id

> **id**: `string`

Defined in: [core/src/components/accordion/accordion.ts:288](https://github.com/AmadeusITGroup/AgnosUI/blob/ee1daf8f80138440fcb1256d6fd0978ad4cd2730/core/src/components/accordion/accordion.ts#L288)

The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.

#### Inherited from

`AccordionItemCommonPropsAndState.id`

***

### shouldBeInDOM

> **shouldBeInDOM**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:352](https://github.com/AmadeusITGroup/AgnosUI/blob/ee1daf8f80138440fcb1256d6fd0978ad4cd2730/core/src/components/accordion/accordion.ts#L352)

If `true` the content of the accordion-item collapse should be in DOM. Its value depends on the
value of the `visible` and `destroyOnHide`.

***

### visible

> **visible**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:279](https://github.com/AmadeusITGroup/AgnosUI/blob/ee1daf8f80138440fcb1256d6fd0978ad4cd2730/core/src/components/accordion/accordion.ts#L279)

If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).

#### Inherited from

`AccordionItemCommonPropsAndState.visible`
