Defined in: [core/src/components/accordion/accordion.ts:314](https://github.com/AmadeusITGroup/AgnosUI/blob/5d373b5cbcc1bda3d9673c05179d89933e1654d0/core/src/components/accordion/accordion.ts#L314)

Properties for an AccordionItem component.

## Extends

- `AccordionItemCommonPropsAndState`

## Properties

### animated

> **animated**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:318](https://github.com/AmadeusITGroup/AgnosUI/blob/5d373b5cbcc1bda3d9673c05179d89933e1654d0/core/src/components/accordion/accordion.ts#L318)

If `true`, accordion-item will be animated.

***

### bodyClassName

> **bodyClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:304](https://github.com/AmadeusITGroup/AgnosUI/blob/5d373b5cbcc1bda3d9673c05179d89933e1654d0/core/src/components/accordion/accordion.ts#L304)

CSS classes to add on the accordion-item body DOM element.

#### Inherited from

`AccordionItemCommonPropsAndState.bodyClassName`

***

### bodyContainerClassName

> **bodyContainerClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:300](https://github.com/AmadeusITGroup/AgnosUI/blob/5d373b5cbcc1bda3d9673c05179d89933e1654d0/core/src/components/accordion/accordion.ts#L300)

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Inherited from

`AccordionItemCommonPropsAndState.bodyContainerClassName`

***

### buttonClassName

> **buttonClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:295](https://github.com/AmadeusITGroup/AgnosUI/blob/5d373b5cbcc1bda3d9673c05179d89933e1654d0/core/src/components/accordion/accordion.ts#L295)

CSS classes to add on the accordion-item collapse DOM element.

#### Inherited from

`AccordionItemCommonPropsAndState.buttonClassName`

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/5d373b5cbcc1bda3d9673c05179d89933e1654d0/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`AccordionItemCommonPropsAndState.className`

***

### destroyOnHide

> **destroyOnHide**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:326](https://github.com/AmadeusITGroup/AgnosUI/blob/5d373b5cbcc1bda3d9673c05179d89933e1654d0/core/src/components/accordion/accordion.ts#L326)

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:283](https://github.com/AmadeusITGroup/AgnosUI/blob/5d373b5cbcc1bda3d9673c05179d89933e1654d0/core/src/components/accordion/accordion.ts#L283)

If `true`, the accordion-item will be disabled.
It will not react to user's clicks, but still will be possible to toggle programmatically.

#### Inherited from

`AccordionItemCommonPropsAndState.disabled`

***

### headerClassName

> **headerClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:291](https://github.com/AmadeusITGroup/AgnosUI/blob/5d373b5cbcc1bda3d9673c05179d89933e1654d0/core/src/components/accordion/accordion.ts#L291)

CSS classes to add on the accordion-item header DOM element.

#### Inherited from

`AccordionItemCommonPropsAndState.headerClassName`

***

### headingTag

> **headingTag**: `string`

Defined in: [core/src/components/accordion/accordion.ts:308](https://github.com/AmadeusITGroup/AgnosUI/blob/5d373b5cbcc1bda3d9673c05179d89933e1654d0/core/src/components/accordion/accordion.ts#L308)

The html tag to use for the accordion-item-header.

#### Inherited from

`AccordionItemCommonPropsAndState.headingTag`

***

### id

> **id**: `string`

Defined in: [core/src/components/accordion/accordion.ts:287](https://github.com/AmadeusITGroup/AgnosUI/blob/5d373b5cbcc1bda3d9673c05179d89933e1654d0/core/src/components/accordion/accordion.ts#L287)

The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.

#### Inherited from

`AccordionItemCommonPropsAndState.id`

***

### onHidden()

> **onHidden**: () => `void`

Defined in: [core/src/components/accordion/accordion.ts:334](https://github.com/AmadeusITGroup/AgnosUI/blob/5d373b5cbcc1bda3d9673c05179d89933e1654d0/core/src/components/accordion/accordion.ts#L334)

An event fired when an item is hidden.

#### Returns

`void`

***

### onShown()

> **onShown**: () => `void`

Defined in: [core/src/components/accordion/accordion.ts:330](https://github.com/AmadeusITGroup/AgnosUI/blob/5d373b5cbcc1bda3d9673c05179d89933e1654d0/core/src/components/accordion/accordion.ts#L330)

An event fired when an item is shown.

#### Returns

`void`

***

### onVisibleChange()

> **onVisibleChange**: (`visible`) => `void`

Defined in: [core/src/components/accordion/accordion.ts:340](https://github.com/AmadeusITGroup/AgnosUI/blob/5d373b5cbcc1bda3d9673c05179d89933e1654d0/core/src/components/accordion/accordion.ts#L340)

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

Defined in: [core/src/components/accordion/accordion.ts:322](https://github.com/AmadeusITGroup/AgnosUI/blob/5d373b5cbcc1bda3d9673c05179d89933e1654d0/core/src/components/accordion/accordion.ts#L322)

The transition to use for the accordion-item body-container when the accordion-item is toggled.

***

### visible

> **visible**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:278](https://github.com/AmadeusITGroup/AgnosUI/blob/5d373b5cbcc1bda3d9673c05179d89933e1654d0/core/src/components/accordion/accordion.ts#L278)

If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).

#### Inherited from

`AccordionItemCommonPropsAndState.visible`
