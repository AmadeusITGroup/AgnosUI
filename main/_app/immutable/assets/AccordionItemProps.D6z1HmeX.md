Defined in: [core/src/components/accordion/accordion.ts:322](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/core/src/components/accordion/accordion.ts#L322)

Properties for an AccordionItem component.

## Extends

- `AccordionItemCommonPropsAndState`

## Properties

### animated

> **animated**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:326](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/core/src/components/accordion/accordion.ts#L326)

If `true`, accordion-item will be animated.

***

### bodyClassName

> **bodyClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:312](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/core/src/components/accordion/accordion.ts#L312)

CSS classes to add on the accordion-item body DOM element.

#### Inherited from

`AccordionItemCommonPropsAndState.bodyClassName`

***

### bodyContainerClassName

> **bodyContainerClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:308](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/core/src/components/accordion/accordion.ts#L308)

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Inherited from

`AccordionItemCommonPropsAndState.bodyContainerClassName`

***

### buttonClassName

> **buttonClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:303](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/core/src/components/accordion/accordion.ts#L303)

CSS classes to add on the accordion-item collapse DOM element.

#### Inherited from

`AccordionItemCommonPropsAndState.buttonClassName`

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`AccordionItemCommonPropsAndState.className`

***

### destroyOnHide

> **destroyOnHide**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:334](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/core/src/components/accordion/accordion.ts#L334)

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:291](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/core/src/components/accordion/accordion.ts#L291)

If `true`, the accordion-item will be disabled.
It will not react to user's clicks, but still will be possible to toggle programmatically.

#### Inherited from

`AccordionItemCommonPropsAndState.disabled`

***

### headerClassName

> **headerClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:299](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/core/src/components/accordion/accordion.ts#L299)

CSS classes to add on the accordion-item header DOM element.

#### Inherited from

`AccordionItemCommonPropsAndState.headerClassName`

***

### headingLevel

> **headingLevel**: `1` \| `2` \| `3` \| `4` \| `5` \| `6`

Defined in: [core/src/components/accordion/accordion.ts:316](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/core/src/components/accordion/accordion.ts#L316)

The html heading level to use for the accordion-item-header.

#### Inherited from

`AccordionItemCommonPropsAndState.headingLevel`

***

### id

> **id**: `string`

Defined in: [core/src/components/accordion/accordion.ts:295](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/core/src/components/accordion/accordion.ts#L295)

The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.

#### Inherited from

`AccordionItemCommonPropsAndState.id`

***

### onHidden()

> **onHidden**: () => `void`

Defined in: [core/src/components/accordion/accordion.ts:342](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/core/src/components/accordion/accordion.ts#L342)

An event fired when an item is hidden.

#### Returns

`void`

***

### onShown()

> **onShown**: () => `void`

Defined in: [core/src/components/accordion/accordion.ts:338](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/core/src/components/accordion/accordion.ts#L338)

An event fired when an item is shown.

#### Returns

`void`

***

### onVisibleChange()

> **onVisibleChange**: (`visible`) => `void`

Defined in: [core/src/components/accordion/accordion.ts:348](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/core/src/components/accordion/accordion.ts#L348)

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

Defined in: [core/src/components/accordion/accordion.ts:330](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/core/src/components/accordion/accordion.ts#L330)

The transition to use for the accordion-item body-container when the accordion-item is toggled.

***

### visible

> **visible**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:286](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/core/src/components/accordion/accordion.ts#L286)

If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).

#### Inherited from

`AccordionItemCommonPropsAndState.visible`
