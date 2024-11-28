Represents the properties for an Accordion item component.

## Properties

### animated

> **animated**: `boolean`

If `true`, accordion-item will be animated.

#### Defined in

svelte/bootstrap/src/components/accordion/accordion.gen.ts:270

***

### bodyClassName

> **bodyClassName**: `string`

CSS classes to add on the accordion-item body DOM element.

#### Defined in

svelte/bootstrap/src/components/accordion/accordion.gen.ts:334

***

### bodyContainerClassName

> **bodyContainerClassName**: `string`

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Defined in

svelte/bootstrap/src/components/accordion/accordion.gen.ts:329

***

### buttonClassName

> **buttonClassName**: `string`

CSS classes to add on the accordion-item collapse DOM element.

#### Defined in

svelte/bootstrap/src/components/accordion/accordion.gen.ts:323

***

### children

> **children**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](AccordionItemContext.md)\>

Content present in the accordion body.

It is a prop of the accordion-item.

#### Defined in

svelte/bootstrap/src/components/accordion/accordion.gen.ts:363

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

svelte/bootstrap/src/components/accordion/accordion.gen.ts:346

***

### destroyOnHide

> **destroyOnHide**: `boolean`

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

#### Defined in

svelte/bootstrap/src/components/accordion/accordion.gen.ts:280

***

### disabled

> **disabled**: `boolean`

If `true`, the accordion-item will be disabled.
It will not react to user's clicks, but still will be possible to toggle programmatically.

#### Defined in

svelte/bootstrap/src/components/accordion/accordion.gen.ts:308

***

### header

> **header**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](AccordionItemContext.md)\>

Content present in the accordion button inside the accordion header.

It is a prop of the accordion-item.

#### Defined in

svelte/bootstrap/src/components/accordion/accordion.gen.ts:370

***

### headerClassName

> **headerClassName**: `string`

CSS classes to add on the accordion-item header DOM element.

#### Defined in

svelte/bootstrap/src/components/accordion/accordion.gen.ts:318

***

### headingTag

> **headingTag**: `string`

The html tag to use for the accordion-item-header.

#### Defined in

svelte/bootstrap/src/components/accordion/accordion.gen.ts:339

***

### id

> **id**: `string`

The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.

#### Defined in

svelte/bootstrap/src/components/accordion/accordion.gen.ts:313

***

### onHidden()

> **onHidden**: () => `void`

An event fired when an item is hidden.

#### Returns

`void`

#### Defined in

svelte/bootstrap/src/components/accordion/accordion.gen.ts:290

***

### onShown()

> **onShown**: () => `void`

An event fired when an item is shown.

#### Returns

`void`

#### Defined in

svelte/bootstrap/src/components/accordion/accordion.gen.ts:285

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

svelte/bootstrap/src/components/accordion/accordion.gen.ts:297

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](AccordionItemContext.md)\>

Structure of the accordion-item. The default item structure is: accordion-item
contains accordion header and accordion-item body container; the accordion header contains the accordion button
(that contains `header`), while the accordion-item body container contains the accordion body (that contains `children`).
The itemTransition is applied on this element.

It is a prop of the accordion-item.

#### Defined in

svelte/bootstrap/src/components/accordion/accordion.gen.ts:356

***

### transition

> **transition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

The transition to use for the accordion-item body-container when the accordion-item is toggled.

#### Defined in

svelte/bootstrap/src/components/accordion/accordion.gen.ts:275

***

### visible

> **visible**: `boolean`

If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).

#### Defined in

svelte/bootstrap/src/components/accordion/accordion.gen.ts:302
