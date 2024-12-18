Represents the properties for an Accordion item component.

## Extends

- `AccordionItemProps`.`AccordionItemExtraProps`

## Properties

### animated

> **animated**: `boolean`

If `true`, accordion-item will be animated.

#### Inherited from

`CoreItemProps.animated`

#### Defined in

[core/src/components/accordion/accordion.ts:319](https://github.com/AmadeusITGroup/AgnosUI/blob/8e4b1f5404152873832be3bb426d763c5f7df17d/core/src/components/accordion/accordion.ts#L319)

***

### bodyClassName

> **bodyClassName**: `string`

CSS classes to add on the accordion-item body DOM element.

#### Inherited from

`CoreItemProps.bodyClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:305](https://github.com/AmadeusITGroup/AgnosUI/blob/8e4b1f5404152873832be3bb426d763c5f7df17d/core/src/components/accordion/accordion.ts#L305)

***

### bodyContainerClassName

> **bodyContainerClassName**: `string`

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Inherited from

`CoreItemProps.bodyContainerClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:301](https://github.com/AmadeusITGroup/AgnosUI/blob/8e4b1f5404152873832be3bb426d763c5f7df17d/core/src/components/accordion/accordion.ts#L301)

***

### buttonClassName

> **buttonClassName**: `string`

CSS classes to add on the accordion-item collapse DOM element.

#### Inherited from

`CoreItemProps.buttonClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:296](https://github.com/AmadeusITGroup/AgnosUI/blob/8e4b1f5404152873832be3bb426d763c5f7df17d/core/src/components/accordion/accordion.ts#L296)

***

### children

> **children**: `SlotContent`\<[`AccordionItemContext`](AccordionItemContext.md)\>

Content present in the accordion body.

It is a prop of the accordion-item.

#### Inherited from

`AccordionItemExtraProps.children`

#### Defined in

[core-bootstrap/src/components/accordion/accordion.ts:54](https://github.com/AmadeusITGroup/AgnosUI/blob/8e4b1f5404152873832be3bb426d763c5f7df17d/core-bootstrap/src/components/accordion/accordion.ts#L54)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreItemProps.className`

#### Defined in

[core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/8e4b1f5404152873832be3bb426d763c5f7df17d/core/src/components/commonProps.ts#L10)

***

### destroyOnHide

> **destroyOnHide**: `boolean`

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

#### Inherited from

`CoreItemProps.destroyOnHide`

#### Defined in

[core/src/components/accordion/accordion.ts:327](https://github.com/AmadeusITGroup/AgnosUI/blob/8e4b1f5404152873832be3bb426d763c5f7df17d/core/src/components/accordion/accordion.ts#L327)

***

### disabled

> **disabled**: `boolean`

If `true`, the accordion-item will be disabled.
It will not react to user's clicks, but still will be possible to toggle programmatically.

#### Inherited from

`CoreItemProps.disabled`

#### Defined in

[core/src/components/accordion/accordion.ts:284](https://github.com/AmadeusITGroup/AgnosUI/blob/8e4b1f5404152873832be3bb426d763c5f7df17d/core/src/components/accordion/accordion.ts#L284)

***

### header

> **header**: `SlotContent`\<[`AccordionItemContext`](AccordionItemContext.md)\>

Content present in the accordion button inside the accordion header.

It is a prop of the accordion-item.

#### Inherited from

`AccordionItemExtraProps.header`

#### Defined in

[core-bootstrap/src/components/accordion/accordion.ts:60](https://github.com/AmadeusITGroup/AgnosUI/blob/8e4b1f5404152873832be3bb426d763c5f7df17d/core-bootstrap/src/components/accordion/accordion.ts#L60)

***

### headerClassName

> **headerClassName**: `string`

CSS classes to add on the accordion-item header DOM element.

#### Inherited from

`CoreItemProps.headerClassName`

#### Defined in

[core/src/components/accordion/accordion.ts:292](https://github.com/AmadeusITGroup/AgnosUI/blob/8e4b1f5404152873832be3bb426d763c5f7df17d/core/src/components/accordion/accordion.ts#L292)

***

### headingTag

> **headingTag**: `string`

The html tag to use for the accordion-item-header.

#### Inherited from

`CoreItemProps.headingTag`

#### Defined in

[core/src/components/accordion/accordion.ts:309](https://github.com/AmadeusITGroup/AgnosUI/blob/8e4b1f5404152873832be3bb426d763c5f7df17d/core/src/components/accordion/accordion.ts#L309)

***

### id

> **id**: `string`

The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.

#### Inherited from

`CoreItemProps.id`

#### Defined in

[core/src/components/accordion/accordion.ts:288](https://github.com/AmadeusITGroup/AgnosUI/blob/8e4b1f5404152873832be3bb426d763c5f7df17d/core/src/components/accordion/accordion.ts#L288)

***

### onHidden()

> **onHidden**: () => `void`

An event fired when an item is hidden.

#### Returns

`void`

#### Inherited from

`CoreItemProps.onHidden`

#### Defined in

[core/src/components/accordion/accordion.ts:335](https://github.com/AmadeusITGroup/AgnosUI/blob/8e4b1f5404152873832be3bb426d763c5f7df17d/core/src/components/accordion/accordion.ts#L335)

***

### onShown()

> **onShown**: () => `void`

An event fired when an item is shown.

#### Returns

`void`

#### Inherited from

`CoreItemProps.onShown`

#### Defined in

[core/src/components/accordion/accordion.ts:331](https://github.com/AmadeusITGroup/AgnosUI/blob/8e4b1f5404152873832be3bb426d763c5f7df17d/core/src/components/accordion/accordion.ts#L331)

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

#### Inherited from

`CoreItemProps.onVisibleChange`

#### Defined in

[core/src/components/accordion/accordion.ts:341](https://github.com/AmadeusITGroup/AgnosUI/blob/8e4b1f5404152873832be3bb426d763c5f7df17d/core/src/components/accordion/accordion.ts#L341)

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

[core-bootstrap/src/components/accordion/accordion.ts:48](https://github.com/AmadeusITGroup/AgnosUI/blob/8e4b1f5404152873832be3bb426d763c5f7df17d/core-bootstrap/src/components/accordion/accordion.ts#L48)

***

### transition

> **transition**: `TransitionFn`

The transition to use for the accordion-item body-container when the accordion-item is toggled.

#### Inherited from

`CoreItemProps.transition`

#### Defined in

[core/src/components/accordion/accordion.ts:323](https://github.com/AmadeusITGroup/AgnosUI/blob/8e4b1f5404152873832be3bb426d763c5f7df17d/core/src/components/accordion/accordion.ts#L323)

***

### visible

> **visible**: `boolean`

If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).

#### Inherited from

`CoreItemProps.visible`

#### Defined in

[core/src/components/accordion/accordion.ts:279](https://github.com/AmadeusITGroup/AgnosUI/blob/8e4b1f5404152873832be3bb426d763c5f7df17d/core/src/components/accordion/accordion.ts#L279)
