Properties for an AccordionItem component.

## Extends

- `AccordionItemCommonPropsAndState`

## Properties

### animated

> **animated**: `boolean`

If `true`, accordion-item will be animated.

#### Defined in

[core/src/components/accordion/accordion.ts:319](https://github.com/AmadeusITGroup/AgnosUI/blob/3af9bc75509b23579d1796fe7ec642f036ba12e3/core/src/components/accordion/accordion.ts#L319)

***

### bodyClassName

> **bodyClassName**: `string`

CSS classes to add on the accordion-item body DOM element.

#### Inherited from

`AccordionItemCommonPropsAndState.bodyClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:305](https://github.com/AmadeusITGroup/AgnosUI/blob/3af9bc75509b23579d1796fe7ec642f036ba12e3/core/src/components/accordion/accordion.ts#L305)

***

### bodyContainerClassName

> **bodyContainerClassName**: `string`

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Inherited from

`AccordionItemCommonPropsAndState.bodyContainerClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:301](https://github.com/AmadeusITGroup/AgnosUI/blob/3af9bc75509b23579d1796fe7ec642f036ba12e3/core/src/components/accordion/accordion.ts#L301)

***

### buttonClassName

> **buttonClassName**: `string`

CSS classes to add on the accordion-item collapse DOM element.

#### Inherited from

`AccordionItemCommonPropsAndState.buttonClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:296](https://github.com/AmadeusITGroup/AgnosUI/blob/3af9bc75509b23579d1796fe7ec642f036ba12e3/core/src/components/accordion/accordion.ts#L296)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`AccordionItemCommonPropsAndState.className`

#### Defined in

[core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/3af9bc75509b23579d1796fe7ec642f036ba12e3/core/src/components/commonProps.ts#L10)

***

### destroyOnHide

> **destroyOnHide**: `boolean`

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

#### Defined in

[core/src/components/accordion/accordion.ts:327](https://github.com/AmadeusITGroup/AgnosUI/blob/3af9bc75509b23579d1796fe7ec642f036ba12e3/core/src/components/accordion/accordion.ts#L327)

***

### disabled

> **disabled**: `boolean`

If `true`, the accordion-item will be disabled.
It will not react to user's clicks, but still will be possible to toggle programmatically.

#### Inherited from

`AccordionItemCommonPropsAndState.disabled`

#### Defined in

[core/src/components/accordion/accordion.ts:284](https://github.com/AmadeusITGroup/AgnosUI/blob/3af9bc75509b23579d1796fe7ec642f036ba12e3/core/src/components/accordion/accordion.ts#L284)

***

### headerClassName

> **headerClassName**: `string`

CSS classes to add on the accordion-item header DOM element.

#### Inherited from

`AccordionItemCommonPropsAndState.headerClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:292](https://github.com/AmadeusITGroup/AgnosUI/blob/3af9bc75509b23579d1796fe7ec642f036ba12e3/core/src/components/accordion/accordion.ts#L292)

***

### headingTag

> **headingTag**: `string`

The html tag to use for the accordion-item-header.

#### Inherited from

`AccordionItemCommonPropsAndState.headingTag`

#### Defined in

[core/src/components/accordion/accordion.ts:309](https://github.com/AmadeusITGroup/AgnosUI/blob/3af9bc75509b23579d1796fe7ec642f036ba12e3/core/src/components/accordion/accordion.ts#L309)

***

### id

> **id**: `string`

The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.

#### Inherited from

`AccordionItemCommonPropsAndState.id`

#### Defined in

[core/src/components/accordion/accordion.ts:288](https://github.com/AmadeusITGroup/AgnosUI/blob/3af9bc75509b23579d1796fe7ec642f036ba12e3/core/src/components/accordion/accordion.ts#L288)

***

### onHidden()

> **onHidden**: () => `void`

An event fired when an item is hidden.

#### Returns

`void`

#### Defined in

[core/src/components/accordion/accordion.ts:335](https://github.com/AmadeusITGroup/AgnosUI/blob/3af9bc75509b23579d1796fe7ec642f036ba12e3/core/src/components/accordion/accordion.ts#L335)

***

### onShown()

> **onShown**: () => `void`

An event fired when an item is shown.

#### Returns

`void`

#### Defined in

[core/src/components/accordion/accordion.ts:331](https://github.com/AmadeusITGroup/AgnosUI/blob/3af9bc75509b23579d1796fe7ec642f036ba12e3/core/src/components/accordion/accordion.ts#L331)

***

### onVisibleChange()

> **onVisibleChange**: (`visible`) => `void`

An event fired when the `visible` value changes.

Event payload is the new value of visible.

#### Parameters

##### visible

`boolean`

#### Returns

`void`

#### Defined in

[core/src/components/accordion/accordion.ts:341](https://github.com/AmadeusITGroup/AgnosUI/blob/3af9bc75509b23579d1796fe7ec642f036ba12e3/core/src/components/accordion/accordion.ts#L341)

***

### transition

> **transition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

The transition to use for the accordion-item body-container when the accordion-item is toggled.

#### Defined in

[core/src/components/accordion/accordion.ts:323](https://github.com/AmadeusITGroup/AgnosUI/blob/3af9bc75509b23579d1796fe7ec642f036ba12e3/core/src/components/accordion/accordion.ts#L323)

***

### visible

> **visible**: `boolean`

If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).

#### Inherited from

`AccordionItemCommonPropsAndState.visible`

#### Defined in

[core/src/components/accordion/accordion.ts:279](https://github.com/AmadeusITGroup/AgnosUI/blob/3af9bc75509b23579d1796fe7ec642f036ba12e3/core/src/components/accordion/accordion.ts#L279)
