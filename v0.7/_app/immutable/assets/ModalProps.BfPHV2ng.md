Interface representing the properties for a modal component.

## Type Parameters

• **Data**

The type of data that the modal will handle.

## Properties

### animated

> **animated**: `boolean`

Whether the modal and its backdrop (if present) should be animated when shown or hidden.

#### Default Value

`true`

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:174

***

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `string`

Value of the aria-label attribute to put on the close button.

#### Default Value

`'Close'`

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:246

***

### backdrop

> **backdrop**: `boolean`

Whether a backdrop should be created behind the modal.

#### Default Value

`true`

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:182

***

### backdropClass

> **backdropClass**: `string`

Classes to add on the backdrop DOM element.

#### Default Value

`''`

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:254

***

### backdropTransition

> **backdropTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

The transition to use for the backdrop behind the modal (if present).

#### Default Value

`fadeTransition`

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:159

***

### children

> **children**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Body of the modal.

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:300

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:290

***

### closeButton

> **closeButton**: `boolean`

Whether to display the close button.

#### Default Value

`true`

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:262

***

### closeOnOutsideClick

> **closeOnOutsideClick**: `boolean`

Whether the modal should be closed when clicking on the viewport outside the modal.

#### Default Value

`true`

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:190

***

### container

> **container**: `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Which element should contain the modal and backdrop DOM elements.
If it is not null, the modal and backdrop DOM elements are moved to the specified container.
Otherwise, they stay where the widget is located.

#### Default Value

```ts
typeof window !== 'undefined' ? document.body : null
```

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:275

***

### contentData

> **contentData**: `Data`

Data to use in content slots

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:295

***

### footer

> **footer**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Footer of the modal.

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:306

***

### fullscreen

> **fullscreen**: `boolean`

Option to create a fullscreen modal, according to the bootstrap documentation.

#### Default Value

`false`

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:332

***

### header

> **header**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Header of the modal. The default header includes [title](ModalProps.md#title).

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:312

***

### modalTransition

> **modalTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

The transition to use for the modal.

#### Default Value

`fadeTransition`

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:167

***

### onBeforeClose()

> **onBeforeClose**: (`event`) => `void`

Event to be triggered when the modal is about to be closed (i.e. the [close](ModalApi.md#close) method was called).

#### Parameters

##### event

[`ModalBeforeCloseEvent`](ModalBeforeCloseEvent.md)

event giving access to the argument given to the [close](ModalApi.md#close) method and allowing
to cancel the close process.

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:204

***

### onHidden()

> **onHidden**: () => `void`

Event to be triggered when the transition is completed and the modal is not visible.

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:228

***

### onShown()

> **onShown**: () => `void`

Event to be triggered when the transition is completed and the modal is visible.

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:239

***

### onVisibleChange()

> **onVisibleChange**: (`visible`) => `void`

Event to be triggered when the visible property changes.

#### Parameters

##### visible

`boolean`

new value of the visible propery

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:217

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Structure of the modal.
The default structure uses [header](ModalProps.md#header), [children](ModalProps.md#children) and [footer](ModalProps.md#footer).

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:319

***

### title

> **title**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Title of the modal.

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:325

***

### visible

> **visible**: `boolean`

Whether the modal should be visible when the transition is completed.

#### Default Value

`false`

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:283
