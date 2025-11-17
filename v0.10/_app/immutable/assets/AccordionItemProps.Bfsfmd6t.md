Defined in: angular/bootstrap/src/components/accordion/accordion.gen.ts:264

Represents the properties for an Accordion item component.

## Properties

### animated

> **animated**: `boolean`

Defined in: angular/bootstrap/src/components/accordion/accordion.gen.ts:269

If `true`, accordion-item will be animated.

***

### bodyClassName

> **bodyClassName**: `string`

Defined in: angular/bootstrap/src/components/accordion/accordion.gen.ts:333

CSS classes to add on the accordion-item body DOM element.

***

### bodyContainerClassName

> **bodyContainerClassName**: `string`

Defined in: angular/bootstrap/src/components/accordion/accordion.gen.ts:328

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

***

### buttonClassName

> **buttonClassName**: `string`

Defined in: angular/bootstrap/src/components/accordion/accordion.gen.ts:322

CSS classes to add on the accordion-item collapse DOM element.

***

### children

> **children**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](AccordionItemContext.md)\>

Defined in: angular/bootstrap/src/components/accordion/accordion.gen.ts:362

Content present in the accordion body.

It is a prop of the accordion-item.

***

### className

> **className**: `string`

Defined in: angular/bootstrap/src/components/accordion/accordion.gen.ts:345

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### destroyOnHide

> **destroyOnHide**: `boolean`

Defined in: angular/bootstrap/src/components/accordion/accordion.gen.ts:279

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

***

### disabled

> **disabled**: `boolean`

Defined in: angular/bootstrap/src/components/accordion/accordion.gen.ts:307

If `true`, the accordion-item will be disabled.
It will not react to user's clicks, but still will be possible to toggle programmatically.

***

### header

> **header**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](AccordionItemContext.md)\>

Defined in: angular/bootstrap/src/components/accordion/accordion.gen.ts:369

Content present in the accordion button inside the accordion header.

It is a prop of the accordion-item.

***

### headerClassName

> **headerClassName**: `string`

Defined in: angular/bootstrap/src/components/accordion/accordion.gen.ts:317

CSS classes to add on the accordion-item header DOM element.

***

### headingLevel

> **headingLevel**: `1` \| `2` \| `3` \| `4` \| `5` \| `6`

Defined in: angular/bootstrap/src/components/accordion/accordion.gen.ts:338

The html heading level to use for the accordion-item-header.

***

### id

> **id**: `string`

Defined in: angular/bootstrap/src/components/accordion/accordion.gen.ts:312

The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.

***

### onHidden()

> **onHidden**: () => `void`

Defined in: angular/bootstrap/src/components/accordion/accordion.gen.ts:289

An event fired when an item is hidden.

#### Returns

`void`

***

### onShown()

> **onShown**: () => `void`

Defined in: angular/bootstrap/src/components/accordion/accordion.gen.ts:284

An event fired when an item is shown.

#### Returns

`void`

***

### onVisibleChange()

> **onVisibleChange**: (`visible`) => `void`

Defined in: angular/bootstrap/src/components/accordion/accordion.gen.ts:296

An event fired when the `visible` value changes.

Event payload is the new value of visible.

#### Parameters

##### visible

`boolean`

#### Returns

`void`

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](AccordionItemContext.md)\>

Defined in: angular/bootstrap/src/components/accordion/accordion.gen.ts:355

Structure of the accordion-item. The default item structure is: accordion-item
contains accordion header and accordion-item body container; the accordion header contains the accordion button
(that contains `header`), while the accordion-item body container contains the accordion body (that contains `children`).
The itemTransition is applied on this element.

It is a prop of the accordion-item.

***

### transition

> **transition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: angular/bootstrap/src/components/accordion/accordion.gen.ts:274

The transition to use for the accordion-item body-container when the accordion-item is toggled.

***

### visible

> **visible**: `boolean`

Defined in: angular/bootstrap/src/components/accordion/accordion.gen.ts:301

If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).
