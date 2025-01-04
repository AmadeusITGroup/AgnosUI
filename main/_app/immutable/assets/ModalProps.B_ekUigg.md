Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:151

Interface representing the properties for a modal component.

## Type Parameters

• **Data**

The type of data that the modal will handle.

## Properties

### animated

> **animated**: `boolean`

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:173

Whether the modal and its backdrop (if present) should be animated when shown or hidden.

#### Default Value

`true`

***

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `string`

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:245

Value of the aria-label attribute to put on the close button.

#### Default Value

`'Close'`

***

### backdrop

> **backdrop**: `boolean`

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:181

Whether a backdrop should be created behind the modal.

#### Default Value

`true`

***

### backdropClass

> **backdropClass**: `string`

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:253

Classes to add on the backdrop DOM element.

#### Default Value

`''`

***

### backdropTransition

> **backdropTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:158

The transition to use for the backdrop behind the modal (if present).

#### Default Value

`fadeTransition`

***

### children

> **children**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:299

Body of the modal.

***

### className

> **className**: `string`

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:289

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### closeButton

> **closeButton**: `boolean`

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:261

Whether to display the close button.

#### Default Value

`true`

***

### closeOnOutsideClick

> **closeOnOutsideClick**: `boolean`

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:189

Whether the modal should be closed when clicking on the viewport outside the modal.

#### Default Value

`true`

***

### container

> **container**: `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:274

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

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:294

Data to use in content slots

***

### footer

> **footer**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:305

Footer of the modal.

***

### fullscreen

> **fullscreen**: `boolean`

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:331

Option to create a fullscreen modal, according to the bootstrap documentation.

#### Default Value

`false`

***

### header

> **header**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:311

Header of the modal. The default header includes [title](ModalProps.md#title).

***

### modalTransition

> **modalTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:166

The transition to use for the modal.

#### Default Value

`fadeTransition`

***

### onBeforeClose()

> **onBeforeClose**: (`event`) => `void`

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:203

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

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:227

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

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:238

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

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:216

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

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:318

Structure of the modal.
The default structure uses [header](ModalProps.md#header), [children](ModalProps.md#children) and [footer](ModalProps.md#footer).

***

### title

> **title**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:324

Title of the modal.

***

### visible

> **visible**: `boolean`

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:282

Whether the modal should be visible when the transition is completed.

#### Default Value

`false`
