Defined in: [core/src/components/accordion/accordion.ts:315](https://github.com/AmadeusITGroup/AgnosUI/blob/813f49c892d842140337282d45e02401e2dccce2/core/src/components/accordion/accordion.ts#L315)

Properties for an AccordionItem component.

## Extends

- `AccordionItemCommonPropsAndState`

## Properties

### animated

> **animated**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:319](https://github.com/AmadeusITGroup/AgnosUI/blob/813f49c892d842140337282d45e02401e2dccce2/core/src/components/accordion/accordion.ts#L319)

If `true`, accordion-item will be animated.

***

### bodyClassName

> **bodyClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:305](https://github.com/AmadeusITGroup/AgnosUI/blob/813f49c892d842140337282d45e02401e2dccce2/core/src/components/accordion/accordion.ts#L305)

CSS classes to add on the accordion-item body DOM element.

#### Inherited from

`AccordionItemCommonPropsAndState.bodyClassName`

***

### bodyContainerClassName

> **bodyContainerClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:301](https://github.com/AmadeusITGroup/AgnosUI/blob/813f49c892d842140337282d45e02401e2dccce2/core/src/components/accordion/accordion.ts#L301)

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Inherited from

`AccordionItemCommonPropsAndState.bodyContainerClassName`

***

### buttonClassName

> **buttonClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:296](https://github.com/AmadeusITGroup/AgnosUI/blob/813f49c892d842140337282d45e02401e2dccce2/core/src/components/accordion/accordion.ts#L296)

CSS classes to add on the accordion-item collapse DOM element.

#### Inherited from

`AccordionItemCommonPropsAndState.buttonClassName`

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/813f49c892d842140337282d45e02401e2dccce2/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`AccordionItemCommonPropsAndState.className`

***

### destroyOnHide

> **destroyOnHide**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:327](https://github.com/AmadeusITGroup/AgnosUI/blob/813f49c892d842140337282d45e02401e2dccce2/core/src/components/accordion/accordion.ts#L327)

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:284](https://github.com/AmadeusITGroup/AgnosUI/blob/813f49c892d842140337282d45e02401e2dccce2/core/src/components/accordion/accordion.ts#L284)

If `true`, the accordion-item will be disabled.
It will not react to user's clicks, but still will be possible to toggle programmatically.

#### Inherited from

`AccordionItemCommonPropsAndState.disabled`

***

### headerClassName

> **headerClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:292](https://github.com/AmadeusITGroup/AgnosUI/blob/813f49c892d842140337282d45e02401e2dccce2/core/src/components/accordion/accordion.ts#L292)

CSS classes to add on the accordion-item header DOM element.

#### Inherited from

`AccordionItemCommonPropsAndState.headerClassName`

***

### headingTag

> **headingTag**: `string`

Defined in: [core/src/components/accordion/accordion.ts:309](https://github.com/AmadeusITGroup/AgnosUI/blob/813f49c892d842140337282d45e02401e2dccce2/core/src/components/accordion/accordion.ts#L309)

The html tag to use for the accordion-item-header.

#### Inherited from

`AccordionItemCommonPropsAndState.headingTag`

***

### id

> **id**: `string`

Defined in: [core/src/components/accordion/accordion.ts:288](https://github.com/AmadeusITGroup/AgnosUI/blob/813f49c892d842140337282d45e02401e2dccce2/core/src/components/accordion/accordion.ts#L288)

The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.

#### Inherited from

`AccordionItemCommonPropsAndState.id`

***

### onHidden()

> **onHidden**: () => `void`

Defined in: [core/src/components/accordion/accordion.ts:335](https://github.com/AmadeusITGroup/AgnosUI/blob/813f49c892d842140337282d45e02401e2dccce2/core/src/components/accordion/accordion.ts#L335)

An event fired when an item is hidden.

#### Returns

`void`

***

### onShown()

> **onShown**: () => `void`

Defined in: [core/src/components/accordion/accordion.ts:331](https://github.com/AmadeusITGroup/AgnosUI/blob/813f49c892d842140337282d45e02401e2dccce2/core/src/components/accordion/accordion.ts#L331)

An event fired when an item is shown.

#### Returns

`void`

***

### onVisibleChange()

> **onVisibleChange**: (`visible`) => `void`

Defined in: [core/src/components/accordion/accordion.ts:341](https://github.com/AmadeusITGroup/AgnosUI/blob/813f49c892d842140337282d45e02401e2dccce2/core/src/components/accordion/accordion.ts#L341)

An event fired when the `visible` value changes.

Event payload is the new value of visible.

#### Parameters

##### visible

`boolean`

#### Returns

`void`

***

### transition

> **transition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: [core/src/components/accordion/accordion.ts:323](https://github.com/AmadeusITGroup/AgnosUI/blob/813f49c892d842140337282d45e02401e2dccce2/core/src/components/accordion/accordion.ts#L323)

The transition to use for the accordion-item body-container when the accordion-item is toggled.

***

### visible

> **visible**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:279](https://github.com/AmadeusITGroup/AgnosUI/blob/813f49c892d842140337282d45e02401e2dccce2/core/src/components/accordion/accordion.ts#L279)

If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).

#### Inherited from

`AccordionItemCommonPropsAndState.visible`
