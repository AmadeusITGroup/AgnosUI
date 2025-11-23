Defined in: react/bootstrap/src/components/modal/modal.gen.ts:152

Interface representing the properties for a modal component.

## Type Parameters

### Data

`Data`

The type of data that the modal will handle.

## Properties

### animated

> **animated**: `boolean`

Defined in: react/bootstrap/src/components/modal/modal.gen.ts:174

Whether the modal and its backdrop (if present) should be animated when shown or hidden.

#### Default Value

`true`

***

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `string`

Defined in: react/bootstrap/src/components/modal/modal.gen.ts:246

Value of the aria-label attribute to put on the close button.

#### Default Value

`'Close'`

***

### backdrop

> **backdrop**: `boolean`

Defined in: react/bootstrap/src/components/modal/modal.gen.ts:182

Whether a backdrop should be created behind the modal.

#### Default Value

`true`

***

### backdropClass

> **backdropClass**: `string`

Defined in: react/bootstrap/src/components/modal/modal.gen.ts:254

Classes to add on the backdrop DOM element.

#### Default Value

`''`

***

### backdropTransition

> **backdropTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: react/bootstrap/src/components/modal/modal.gen.ts:159

The transition to use for the backdrop behind the modal (if present).

#### Default Value

`fadeTransition`

***

### children

> **children**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Defined in: react/bootstrap/src/components/modal/modal.gen.ts:300

Body of the modal.

***

### className

> **className**: `string`

Defined in: react/bootstrap/src/components/modal/modal.gen.ts:290

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### closeButton

> **closeButton**: `boolean`

Defined in: react/bootstrap/src/components/modal/modal.gen.ts:262

Whether to display the close button.

#### Default Value

`true`

***

### closeOnOutsideClick

> **closeOnOutsideClick**: `boolean`

Defined in: react/bootstrap/src/components/modal/modal.gen.ts:190

Whether the modal should be closed when clicking on the viewport outside the modal.

#### Default Value

`true`

***

### container

> **container**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) \| `null`

Defined in: react/bootstrap/src/components/modal/modal.gen.ts:275

Which element should contain the modal and backdrop DOM elements.
If it is not null, the modal and backdrop DOM elements are moved to the specified container.
Otherwise, they stay where the widget is located.

#### Default Value

```ts
typeof window !== 'undefined' ? document.body : null
```

***

### contentData

> **contentData**: `Data`

Defined in: react/bootstrap/src/components/modal/modal.gen.ts:295

Data to use in content slots

***

### footer

> **footer**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Defined in: react/bootstrap/src/components/modal/modal.gen.ts:306

Footer of the modal.

***

### fullscreen

> **fullscreen**: `boolean`

Defined in: react/bootstrap/src/components/modal/modal.gen.ts:332

Option to create a fullscreen modal, according to the bootstrap documentation.

#### Default Value

`false`

***

### header

> **header**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Defined in: react/bootstrap/src/components/modal/modal.gen.ts:312

Header of the modal. The default header includes [title](#title).

***

### modalTransition

> **modalTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: react/bootstrap/src/components/modal/modal.gen.ts:167

The transition to use for the modal.

#### Default Value

`fadeTransition`

***

### onBeforeClose()

> **onBeforeClose**: (`event`) => `void`

Defined in: react/bootstrap/src/components/modal/modal.gen.ts:204

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

***

### onHidden()

> **onHidden**: () => `void`

Defined in: react/bootstrap/src/components/modal/modal.gen.ts:228

Event to be triggered when the transition is completed and the modal is not visible.

#### Returns

`void`

#### Default Value

```ts
() => {}
```

***

### onShown()

> **onShown**: () => `void`

Defined in: react/bootstrap/src/components/modal/modal.gen.ts:239

Event to be triggered when the transition is completed and the modal is visible.

#### Returns

`void`

#### Default Value

```ts
() => {}
```

***

### onVisibleChange()

> **onVisibleChange**: (`visible`) => `void`

Defined in: react/bootstrap/src/components/modal/modal.gen.ts:217

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

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Defined in: react/bootstrap/src/components/modal/modal.gen.ts:319

Structure of the modal.
The default structure uses [header](#header), [children](#children) and [footer](#footer).

***

### title

> **title**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Defined in: react/bootstrap/src/components/modal/modal.gen.ts:325

Title of the modal.

***

### visible

> **visible**: `boolean`

Defined in: react/bootstrap/src/components/modal/modal.gen.ts:283

Whether the modal should be visible when the transition is completed.

#### Default Value

`false`
