Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:26

Represents the state of a modal component.

## Type Parameters

• **Data**

The type of the data associated with the modal.

## Properties

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `string`

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:57

Value of the aria-label attribute to put on the close button.

#### Default Value

`'Close'`

***

### backdropClass

> **backdropClass**: `string`

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:65

Classes to add on the backdrop DOM element.

#### Default Value

`''`

***

### backdropHidden

> **backdropHidden**: `boolean`

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:32

Whether the backdrop is fully hidden. This can be true either because [backdrop](ModalProps.md#backdrop) is false or
because [visible](ModalProps.md#visible-2) is false and there is no current transition.

***

### children

> **children**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:111

Body of the modal.

***

### className

> **className**: `string`

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:101

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### closeButton

> **closeButton**: `boolean`

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:73

Whether to display the close button.

#### Default Value

`true`

***

### container

> **container**: `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:86

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

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:106

Data to use in content slots

***

### footer

> **footer**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:117

Footer of the modal.

***

### fullscreen

> **fullscreen**: `boolean`

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:143

Option to create a fullscreen modal, according to the bootstrap documentation.

#### Default Value

`false`

***

### header

> **header**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:123

Header of the modal. The default header includes [title](ModalProps.md#title).

***

### hidden

> **hidden**: `boolean`

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:38

Whether the modal is fully hidden.

***

### modalElement

> **modalElement**: `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:50

DOM element of the modal.

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:130

Structure of the modal.
The default structure uses [header](ModalProps.md#header), [children](ModalProps.md#children) and [footer](ModalProps.md#footer).

***

### title

> **title**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:136

Title of the modal.

***

### transitioning

> **transitioning**: `boolean`

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:44

Whether there is an active transition to either display or hide the modal.

***

### visible

> **visible**: `boolean`

Defined in: angular/bootstrap/src/components/modal/modal.gen.ts:94

Whether the modal should be visible when the transition is completed.

#### Default Value

`false`
