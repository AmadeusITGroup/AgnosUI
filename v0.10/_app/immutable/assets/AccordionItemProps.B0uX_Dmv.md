Defined in: react/bootstrap/src/components/accordion/accordion.gen.ts:265

Represents the properties for an Accordion item component.

## Properties

### animated

> **animated**: `boolean`

Defined in: react/bootstrap/src/components/accordion/accordion.gen.ts:270

If `true`, accordion-item will be animated.

***

### bodyClassName

> **bodyClassName**: `string`

Defined in: react/bootstrap/src/components/accordion/accordion.gen.ts:334

CSS classes to add on the accordion-item body DOM element.

***

### bodyContainerClassName

> **bodyContainerClassName**: `string`

Defined in: react/bootstrap/src/components/accordion/accordion.gen.ts:329

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

***

### buttonClassName

> **buttonClassName**: `string`

Defined in: react/bootstrap/src/components/accordion/accordion.gen.ts:323

CSS classes to add on the accordion-item collapse DOM element.

***

### children

> **children**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](AccordionItemContext.md)\>

Defined in: react/bootstrap/src/components/accordion/accordion.gen.ts:363

Content present in the accordion body.

It is a prop of the accordion-item.

***

### className

> **className**: `string`

Defined in: react/bootstrap/src/components/accordion/accordion.gen.ts:346

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### destroyOnHide

> **destroyOnHide**: `boolean`

Defined in: react/bootstrap/src/components/accordion/accordion.gen.ts:280

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

***

### disabled

> **disabled**: `boolean`

Defined in: react/bootstrap/src/components/accordion/accordion.gen.ts:308

If `true`, the accordion-item will be disabled.
It will not react to user's clicks, but still will be possible to toggle programmatically.

***

### header

> **header**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](AccordionItemContext.md)\>

Defined in: react/bootstrap/src/components/accordion/accordion.gen.ts:370

Content present in the accordion button inside the accordion header.

It is a prop of the accordion-item.

***

### headerClassName

> **headerClassName**: `string`

Defined in: react/bootstrap/src/components/accordion/accordion.gen.ts:318

CSS classes to add on the accordion-item header DOM element.

***

### headingLevel

> **headingLevel**: `1` \| `2` \| `3` \| `4` \| `5` \| `6`

Defined in: react/bootstrap/src/components/accordion/accordion.gen.ts:339

The html heading level to use for the accordion-item-header.

***

### id

> **id**: `string`

Defined in: react/bootstrap/src/components/accordion/accordion.gen.ts:313

The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.

***

### onHidden()

> **onHidden**: () => `void`

Defined in: react/bootstrap/src/components/accordion/accordion.gen.ts:290

An event fired when an item is hidden.

#### Returns

`void`

***

### onShown()

> **onShown**: () => `void`

Defined in: react/bootstrap/src/components/accordion/accordion.gen.ts:285

An event fired when an item is shown.

#### Returns

`void`

***

### onVisibleChange()

> **onVisibleChange**: (`visible`) => `void`

Defined in: react/bootstrap/src/components/accordion/accordion.gen.ts:297

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

Defined in: react/bootstrap/src/components/accordion/accordion.gen.ts:356

Structure of the accordion-item. The default item structure is: accordion-item
contains accordion header and accordion-item body container; the accordion header contains the accordion button
(that contains `header`), while the accordion-item body container contains the accordion body (that contains `children`).
The itemTransition is applied on this element.

It is a prop of the accordion-item.

***

### transition

> **transition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: react/bootstrap/src/components/accordion/accordion.gen.ts:275

The transition to use for the accordion-item body-container when the accordion-item is toggled.

***

### visible

> **visible**: `boolean`

Defined in: react/bootstrap/src/components/accordion/accordion.gen.ts:302

If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).
