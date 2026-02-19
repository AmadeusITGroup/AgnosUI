Defined in: [components/accordion/accordion.ts:332](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core/src/components/accordion/accordion.ts#L332)

Properties for an AccordionItem component.

## Extends

- `AccordionItemCommonPropsAndState`

## Properties

### animated

> **animated**: `boolean`

Defined in: [components/accordion/accordion.ts:336](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core/src/components/accordion/accordion.ts#L336)

If `true`, accordion-item will be animated.

***

### bodyClassName

> **bodyClassName**: `string`

Defined in: [components/accordion/accordion.ts:322](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core/src/components/accordion/accordion.ts#L322)

CSS classes to add on the accordion-item body DOM element.

#### Inherited from

`AccordionItemCommonPropsAndState.bodyClassName`

***

### bodyContainerClassName

> **bodyContainerClassName**: `string`

Defined in: [components/accordion/accordion.ts:318](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core/src/components/accordion/accordion.ts#L318)

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Inherited from

`AccordionItemCommonPropsAndState.bodyContainerClassName`

***

### buttonClassName

> **buttonClassName**: `string`

Defined in: [components/accordion/accordion.ts:313](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core/src/components/accordion/accordion.ts#L313)

CSS classes to add on the accordion-item collapse DOM element.

#### Inherited from

`AccordionItemCommonPropsAndState.buttonClassName`

***

### className

> **className**: `string`

Defined in: [components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`AccordionItemCommonPropsAndState.className`

***

### destroyOnHide

> **destroyOnHide**: `boolean`

Defined in: [components/accordion/accordion.ts:344](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core/src/components/accordion/accordion.ts#L344)

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

***

### disabled

> **disabled**: `boolean`

Defined in: [components/accordion/accordion.ts:301](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core/src/components/accordion/accordion.ts#L301)

If `true`, the accordion-item will be disabled.
It will not react to user's clicks, but still will be possible to toggle programmatically.

#### Inherited from

`AccordionItemCommonPropsAndState.disabled`

***

### headerClassName

> **headerClassName**: `string`

Defined in: [components/accordion/accordion.ts:309](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core/src/components/accordion/accordion.ts#L309)

CSS classes to add on the accordion-item header DOM element.

#### Inherited from

`AccordionItemCommonPropsAndState.headerClassName`

***

### headingLevel

> **headingLevel**: `1` \| `2` \| `3` \| `4` \| `5` \| `6`

Defined in: [components/accordion/accordion.ts:326](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core/src/components/accordion/accordion.ts#L326)

The html heading level to use for the accordion-item-header.

#### Inherited from

`AccordionItemCommonPropsAndState.headingLevel`

***

### id

> **id**: `string`

Defined in: [components/accordion/accordion.ts:305](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core/src/components/accordion/accordion.ts#L305)

The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.

#### Inherited from

`AccordionItemCommonPropsAndState.id`

***

### onHidden()

> **onHidden**: () => `void`

Defined in: [components/accordion/accordion.ts:352](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core/src/components/accordion/accordion.ts#L352)

An event fired when an item is hidden.

#### Returns

`void`

***

### onShown()

> **onShown**: () => `void`

Defined in: [components/accordion/accordion.ts:348](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core/src/components/accordion/accordion.ts#L348)

An event fired when an item is shown.

#### Returns

`void`

***

### onVisibleChange()

> **onVisibleChange**: (`visible`) => `void`

Defined in: [components/accordion/accordion.ts:358](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core/src/components/accordion/accordion.ts#L358)

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

Defined in: [components/accordion/accordion.ts:340](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core/src/components/accordion/accordion.ts#L340)

The transition to use for the accordion-item body-container when the accordion-item is toggled.

***

### visible

> **visible**: `boolean`

Defined in: [components/accordion/accordion.ts:296](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core/src/components/accordion/accordion.ts#L296)

If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).

#### Inherited from

`AccordionItemCommonPropsAndState.visible`
