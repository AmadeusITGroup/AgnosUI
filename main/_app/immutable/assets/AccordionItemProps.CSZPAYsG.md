## Properties

### animated

> **animated**: `boolean`

If `true`, accordion-item will be animated.

#### Defined in

angular/bootstrap/src/components/accordion/accordion.gen.ts:251

***

### bodyClassName

> **bodyClassName**: `string`

CSS classes to add on the accordion-item body DOM element.

#### Defined in

angular/bootstrap/src/components/accordion/accordion.gen.ts:315

***

### bodyContainerClassName

> **bodyContainerClassName**: `string`

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Defined in

angular/bootstrap/src/components/accordion/accordion.gen.ts:310

***

### buttonClassName

> **buttonClassName**: `string`

CSS classes to add on the accordion-item collapse DOM element.

#### Defined in

angular/bootstrap/src/components/accordion/accordion.gen.ts:304

***

### children

> **children**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](AccordionItemContext.md)\>

Content present in the accordion body.

It is a prop of the accordion-item.

#### Defined in

angular/bootstrap/src/components/accordion/accordion.gen.ts:344

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

angular/bootstrap/src/components/accordion/accordion.gen.ts:327

***

### destroyOnHide

> **destroyOnHide**: `boolean`

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

#### Defined in

angular/bootstrap/src/components/accordion/accordion.gen.ts:261

***

### disabled

> **disabled**: `boolean`

If `true`, the accordion-item will be disabled.
It will not react to user's clicks, but still will be possible to toggle programmatically.

#### Defined in

angular/bootstrap/src/components/accordion/accordion.gen.ts:289

***

### header

> **header**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](AccordionItemContext.md)\>

Content present in the accordion button inside the accordion header.

It is a prop of the accordion-item.

#### Defined in

angular/bootstrap/src/components/accordion/accordion.gen.ts:351

***

### headerClassName

> **headerClassName**: `string`

CSS classes to add on the accordion-item header DOM element.

#### Defined in

angular/bootstrap/src/components/accordion/accordion.gen.ts:299

***

### headingTag

> **headingTag**: `string`

The html tag to use for the accordion-item-header.

#### Defined in

angular/bootstrap/src/components/accordion/accordion.gen.ts:320

***

### id

> **id**: `string`

The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.

#### Defined in

angular/bootstrap/src/components/accordion/accordion.gen.ts:294

***

### onHidden()

> **onHidden**: () => `void`

An event fired when an item is hidden.

#### Returns

`void`

#### Defined in

angular/bootstrap/src/components/accordion/accordion.gen.ts:271

***

### onShown()

> **onShown**: () => `void`

An event fired when an item is shown.

#### Returns

`void`

#### Defined in

angular/bootstrap/src/components/accordion/accordion.gen.ts:266

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

angular/bootstrap/src/components/accordion/accordion.gen.ts:278

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](AccordionItemContext.md)\>

Structure of the accordion-item. The default item structure is: accordion-item
contains accordion header and accordion-item body container; the accordion header contains the accordion button
(that contains `header`), while the accordion-item body container contains the accordion body (that contains `children`).
The itemTransition is applied on this element.

It is a prop of the accordion-item.

#### Defined in

angular/bootstrap/src/components/accordion/accordion.gen.ts:337

***

### transition

> **transition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

The transition to use for the accordion-item body-container when the accordion-item is toggled.

#### Defined in

angular/bootstrap/src/components/accordion/accordion.gen.ts:256

***

### visible

> **visible**: `boolean`

If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).

#### Defined in

angular/bootstrap/src/components/accordion/accordion.gen.ts:283
