## Extends

- `AccordionItemCommonPropsAndState`

## Properties

### animated

> **animated**: `boolean`

If `true`, accordion-item will be animated.

#### Defined in

[core/src/components/accordion/accordion.ts:281](https://github.com/AmadeusITGroup/AgnosUI/blob/6fe095806624d144f0f5997f051ff06eaf867a50/core/src/components/accordion/accordion.ts#L281)

***

### bodyClassName

> **bodyClassName**: `string`

CSS classes to add on the accordion-item body DOM element.

#### Inherited from

`AccordionItemCommonPropsAndState.bodyClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:270](https://github.com/AmadeusITGroup/AgnosUI/blob/6fe095806624d144f0f5997f051ff06eaf867a50/core/src/components/accordion/accordion.ts#L270)

***

### bodyContainerClassName

> **bodyContainerClassName**: `string`

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Inherited from

`AccordionItemCommonPropsAndState.bodyContainerClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:266](https://github.com/AmadeusITGroup/AgnosUI/blob/6fe095806624d144f0f5997f051ff06eaf867a50/core/src/components/accordion/accordion.ts#L266)

***

### buttonClassName

> **buttonClassName**: `string`

CSS classes to add on the accordion-item collapse DOM element.

#### Inherited from

`AccordionItemCommonPropsAndState.buttonClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:261](https://github.com/AmadeusITGroup/AgnosUI/blob/6fe095806624d144f0f5997f051ff06eaf867a50/core/src/components/accordion/accordion.ts#L261)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`AccordionItemCommonPropsAndState.className`

#### Defined in

[core/src/components/commonProps.ts:7](https://github.com/AmadeusITGroup/AgnosUI/blob/6fe095806624d144f0f5997f051ff06eaf867a50/core/src/components/commonProps.ts#L7)

***

### destroyOnHide

> **destroyOnHide**: `boolean`

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

#### Defined in

[core/src/components/accordion/accordion.ts:289](https://github.com/AmadeusITGroup/AgnosUI/blob/6fe095806624d144f0f5997f051ff06eaf867a50/core/src/components/accordion/accordion.ts#L289)

***

### disabled

> **disabled**: `boolean`

If `true`, the accordion-item will be disabled.
It will not react to user's clicks, but still will be possible to toggle programmatically.

#### Inherited from

`AccordionItemCommonPropsAndState.disabled`

#### Defined in

[core/src/components/accordion/accordion.ts:249](https://github.com/AmadeusITGroup/AgnosUI/blob/6fe095806624d144f0f5997f051ff06eaf867a50/core/src/components/accordion/accordion.ts#L249)

***

### headerClassName

> **headerClassName**: `string`

CSS classes to add on the accordion-item header DOM element.

#### Inherited from

`AccordionItemCommonPropsAndState.headerClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:257](https://github.com/AmadeusITGroup/AgnosUI/blob/6fe095806624d144f0f5997f051ff06eaf867a50/core/src/components/accordion/accordion.ts#L257)

***

### headingTag

> **headingTag**: `string`

The html tag to use for the accordion-item-header.

#### Inherited from

`AccordionItemCommonPropsAndState.headingTag`

#### Defined in

[core/src/components/accordion/accordion.ts:274](https://github.com/AmadeusITGroup/AgnosUI/blob/6fe095806624d144f0f5997f051ff06eaf867a50/core/src/components/accordion/accordion.ts#L274)

***

### id

> **id**: `string`

The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.

#### Inherited from

`AccordionItemCommonPropsAndState.id`

#### Defined in

[core/src/components/accordion/accordion.ts:253](https://github.com/AmadeusITGroup/AgnosUI/blob/6fe095806624d144f0f5997f051ff06eaf867a50/core/src/components/accordion/accordion.ts#L253)

***

### onHidden()

> **onHidden**: () => `void`

An event fired when an item is hidden.

#### Returns

`void`

#### Defined in

[core/src/components/accordion/accordion.ts:297](https://github.com/AmadeusITGroup/AgnosUI/blob/6fe095806624d144f0f5997f051ff06eaf867a50/core/src/components/accordion/accordion.ts#L297)

***

### onShown()

> **onShown**: () => `void`

An event fired when an item is shown.

#### Returns

`void`

#### Defined in

[core/src/components/accordion/accordion.ts:293](https://github.com/AmadeusITGroup/AgnosUI/blob/6fe095806624d144f0f5997f051ff06eaf867a50/core/src/components/accordion/accordion.ts#L293)

***

### onVisibleChange()

> **onVisibleChange**: (`visible`) => `void`

An event fired when the `visible` value changes.

Event payload is the new value of visible.

#### Parameters

• **visible**: `boolean`

#### Returns

`void`

#### Defined in

[core/src/components/accordion/accordion.ts:303](https://github.com/AmadeusITGroup/AgnosUI/blob/6fe095806624d144f0f5997f051ff06eaf867a50/core/src/components/accordion/accordion.ts#L303)

***

### transition

> **transition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

The transition to use for the accordion-item body-container when the accordion-item is toggled.

#### Defined in

[core/src/components/accordion/accordion.ts:285](https://github.com/AmadeusITGroup/AgnosUI/blob/6fe095806624d144f0f5997f051ff06eaf867a50/core/src/components/accordion/accordion.ts#L285)

***

### visible

> **visible**: `boolean`

If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).

#### Inherited from

`AccordionItemCommonPropsAndState.visible`

#### Defined in

[core/src/components/accordion/accordion.ts:244](https://github.com/AmadeusITGroup/AgnosUI/blob/6fe095806624d144f0f5997f051ff06eaf867a50/core/src/components/accordion/accordion.ts#L244)
