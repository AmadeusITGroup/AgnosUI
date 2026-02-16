Defined in: [components/accordion/accordion.ts:364](https://github.com/AmadeusITGroup/AgnosUI/blob/8cfb531fadd4c3afad5173e98c4e3cf75f8a1249/core/src/components/accordion/accordion.ts#L364)

Represents the state of an accordion item.

## Extends

- `AccordionItemCommonPropsAndState`

## Properties

### bodyClassName

> **bodyClassName**: `string`

Defined in: [components/accordion/accordion.ts:322](https://github.com/AmadeusITGroup/AgnosUI/blob/8cfb531fadd4c3afad5173e98c4e3cf75f8a1249/core/src/components/accordion/accordion.ts#L322)

CSS classes to add on the accordion-item body DOM element.

#### Inherited from

`AccordionItemCommonPropsAndState.bodyClassName`

***

### bodyContainerClassName

> **bodyContainerClassName**: `string`

Defined in: [components/accordion/accordion.ts:318](https://github.com/AmadeusITGroup/AgnosUI/blob/8cfb531fadd4c3afad5173e98c4e3cf75f8a1249/core/src/components/accordion/accordion.ts#L318)

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Inherited from

`AccordionItemCommonPropsAndState.bodyContainerClassName`

***

### buttonClassName

> **buttonClassName**: `string`

Defined in: [components/accordion/accordion.ts:313](https://github.com/AmadeusITGroup/AgnosUI/blob/8cfb531fadd4c3afad5173e98c4e3cf75f8a1249/core/src/components/accordion/accordion.ts#L313)

CSS classes to add on the accordion-item collapse DOM element.

#### Inherited from

`AccordionItemCommonPropsAndState.buttonClassName`

***

### className

> **className**: `string`

Defined in: [components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/8cfb531fadd4c3afad5173e98c4e3cf75f8a1249/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`AccordionItemCommonPropsAndState.className`

***

### disabled

> **disabled**: `boolean`

Defined in: [components/accordion/accordion.ts:301](https://github.com/AmadeusITGroup/AgnosUI/blob/8cfb531fadd4c3afad5173e98c4e3cf75f8a1249/core/src/components/accordion/accordion.ts#L301)

If `true`, the accordion-item will be disabled.
It will not react to user's clicks, but still will be possible to toggle programmatically.

#### Inherited from

`AccordionItemCommonPropsAndState.disabled`

***

### headerClassName

> **headerClassName**: `string`

Defined in: [components/accordion/accordion.ts:309](https://github.com/AmadeusITGroup/AgnosUI/blob/8cfb531fadd4c3afad5173e98c4e3cf75f8a1249/core/src/components/accordion/accordion.ts#L309)

CSS classes to add on the accordion-item header DOM element.

#### Inherited from

`AccordionItemCommonPropsAndState.headerClassName`

***

### headingLevel

> **headingLevel**: `1` \| `2` \| `3` \| `4` \| `5` \| `6`

Defined in: [components/accordion/accordion.ts:326](https://github.com/AmadeusITGroup/AgnosUI/blob/8cfb531fadd4c3afad5173e98c4e3cf75f8a1249/core/src/components/accordion/accordion.ts#L326)

The html heading level to use for the accordion-item-header.

#### Inherited from

`AccordionItemCommonPropsAndState.headingLevel`

***

### id

> **id**: `string`

Defined in: [components/accordion/accordion.ts:305](https://github.com/AmadeusITGroup/AgnosUI/blob/8cfb531fadd4c3afad5173e98c4e3cf75f8a1249/core/src/components/accordion/accordion.ts#L305)

The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.

#### Inherited from

`AccordionItemCommonPropsAndState.id`

***

### shouldBeInDOM

> **shouldBeInDOM**: `boolean`

Defined in: [components/accordion/accordion.ts:369](https://github.com/AmadeusITGroup/AgnosUI/blob/8cfb531fadd4c3afad5173e98c4e3cf75f8a1249/core/src/components/accordion/accordion.ts#L369)

If `true` the content of the accordion-item collapse should be in DOM. Its value depends on the
value of the `visible` and `destroyOnHide`.

***

### visible

> **visible**: `boolean`

Defined in: [components/accordion/accordion.ts:296](https://github.com/AmadeusITGroup/AgnosUI/blob/8cfb531fadd4c3afad5173e98c4e3cf75f8a1249/core/src/components/accordion/accordion.ts#L296)

If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).

#### Inherited from

`AccordionItemCommonPropsAndState.visible`
