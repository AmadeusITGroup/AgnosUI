## Extends

- `AccordionItemCommonPropsAndState`

## Properties

### animated

> **animated**: `boolean`

If `true`, accordion-item will be animated.

#### Defined in

[core/src/components/accordion/accordion.ts:274](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core/src/components/accordion/accordion.ts#L274)

***

### bodyClassName

> **bodyClassName**: `string`

CSS classes to add on the accordion-item body DOM element.

#### Inherited from

`AccordionItemCommonPropsAndState.bodyClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:263](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core/src/components/accordion/accordion.ts#L263)

***

### bodyContainerClassName

> **bodyContainerClassName**: `string`

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Inherited from

`AccordionItemCommonPropsAndState.bodyContainerClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:259](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core/src/components/accordion/accordion.ts#L259)

***

### buttonClassName

> **buttonClassName**: `string`

CSS classes to add on the accordion-item collapse DOM element.

#### Inherited from

`AccordionItemCommonPropsAndState.buttonClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:254](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core/src/components/accordion/accordion.ts#L254)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`AccordionItemCommonPropsAndState.className`

#### Defined in

[core/src/components/commonProps.ts:7](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core/src/components/commonProps.ts#L7)

***

### destroyOnHide

> **destroyOnHide**: `boolean`

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

#### Defined in

[core/src/components/accordion/accordion.ts:282](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core/src/components/accordion/accordion.ts#L282)

***

### disabled

> **disabled**: `boolean`

If `true`, the accordion-item will be disabled.
It will not react to user's clicks, but still will be possible to toggle programmatically.

#### Inherited from

`AccordionItemCommonPropsAndState.disabled`

#### Defined in

[core/src/components/accordion/accordion.ts:242](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core/src/components/accordion/accordion.ts#L242)

***

### headerClassName

> **headerClassName**: `string`

CSS classes to add on the accordion-item header DOM element.

#### Inherited from

`AccordionItemCommonPropsAndState.headerClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:250](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core/src/components/accordion/accordion.ts#L250)

***

### headingTag

> **headingTag**: `string`

The html tag to use for the accordion-item-header.

#### Inherited from

`AccordionItemCommonPropsAndState.headingTag`

#### Defined in

[core/src/components/accordion/accordion.ts:267](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core/src/components/accordion/accordion.ts#L267)

***

### id

> **id**: `string`

The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.

#### Inherited from

`AccordionItemCommonPropsAndState.id`

#### Defined in

[core/src/components/accordion/accordion.ts:246](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core/src/components/accordion/accordion.ts#L246)

***

### onHidden()

> **onHidden**: () => `void`

An event fired when an item is hidden.

#### Returns

`void`

#### Defined in

[core/src/components/accordion/accordion.ts:290](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core/src/components/accordion/accordion.ts#L290)

***

### onShown()

> **onShown**: () => `void`

An event fired when an item is shown.

#### Returns

`void`

#### Defined in

[core/src/components/accordion/accordion.ts:286](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core/src/components/accordion/accordion.ts#L286)

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

[core/src/components/accordion/accordion.ts:296](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core/src/components/accordion/accordion.ts#L296)

***

### transition

> **transition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

The transition to use for the accordion-item body-container when the accordion-item is toggled.

#### Defined in

[core/src/components/accordion/accordion.ts:278](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core/src/components/accordion/accordion.ts#L278)

***

### visible

> **visible**: `boolean`

If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).

#### Inherited from

`AccordionItemCommonPropsAndState.visible`

#### Defined in

[core/src/components/accordion/accordion.ts:237](https://github.com/AmadeusITGroup/AgnosUI/blob/d4c3540c12d16b34873b8f7c92387b2b6bf6da94/core/src/components/accordion/accordion.ts#L237)
