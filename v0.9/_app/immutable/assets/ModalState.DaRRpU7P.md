Defined in: svelte/bootstrap/src/components/modal/modal.gen.ts:27

Represents the state of a modal component.

## Type Parameters

### Data

`Data`

The type of the data associated with the modal.

## Properties

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `string`

Defined in: svelte/bootstrap/src/components/modal/modal.gen.ts:58

Value of the aria-label attribute to put on the close button.

#### Default Value

`'Close'`

***

### backdropClass

> **backdropClass**: `string`

Defined in: svelte/bootstrap/src/components/modal/modal.gen.ts:66

Classes to add on the backdrop DOM element.

#### Default Value

`''`

***

### backdropHidden

> **backdropHidden**: `boolean`

Defined in: svelte/bootstrap/src/components/modal/modal.gen.ts:33

Whether the backdrop is fully hidden. This can be true either because [backdrop](ModalProps.md#backdrop) is false or
because [visible](ModalProps.md#visible) is false and there is no current transition.

***

### children

> **children**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Defined in: svelte/bootstrap/src/components/modal/modal.gen.ts:112

Body of the modal.

***

### className

> **className**: `string`

Defined in: svelte/bootstrap/src/components/modal/modal.gen.ts:102

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### closeButton

> **closeButton**: `boolean`

Defined in: svelte/bootstrap/src/components/modal/modal.gen.ts:74

Whether to display the close button.

#### Default Value

`true`

***

### container

> **container**: `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Defined in: svelte/bootstrap/src/components/modal/modal.gen.ts:87

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

Defined in: svelte/bootstrap/src/components/modal/modal.gen.ts:107

Data to use in content slots

***

### footer

> **footer**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Defined in: svelte/bootstrap/src/components/modal/modal.gen.ts:118

Footer of the modal.

***

### fullscreen

> **fullscreen**: `boolean`

Defined in: svelte/bootstrap/src/components/modal/modal.gen.ts:144

Option to create a fullscreen modal, according to the bootstrap documentation.

#### Default Value

`false`

***

### header

> **header**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Defined in: svelte/bootstrap/src/components/modal/modal.gen.ts:124

Header of the modal. The default header includes [title](ModalProps.md#title).

***

### hidden

> **hidden**: `boolean`

Defined in: svelte/bootstrap/src/components/modal/modal.gen.ts:39

Whether the modal is fully hidden.

***

### modalElement

> **modalElement**: `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Defined in: svelte/bootstrap/src/components/modal/modal.gen.ts:51

DOM element of the modal.

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Defined in: svelte/bootstrap/src/components/modal/modal.gen.ts:131

Structure of the modal.
The default structure uses [header](ModalProps.md#header), [children](ModalProps.md#children) and [footer](ModalProps.md#footer).

***

### title

> **title**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Defined in: svelte/bootstrap/src/components/modal/modal.gen.ts:137

Title of the modal.

***

### transitioning

> **transitioning**: `boolean`

Defined in: svelte/bootstrap/src/components/modal/modal.gen.ts:45

Whether there is an active transition to either display or hide the modal.

***

### visible

> **visible**: `boolean`

Defined in: svelte/bootstrap/src/components/modal/modal.gen.ts:95

Whether the modal should be visible when the transition is completed.

#### Default Value

`false`
