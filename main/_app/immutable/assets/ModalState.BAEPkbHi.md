Represents the state of a modal component.

## Type Parameters

• **Data**

The type of the data associated with the modal.

## Properties

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `string`

Value of the aria-label attribute to put on the close button.

#### Default Value

`'Close'`

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:58

***

### backdropClass

> **backdropClass**: `string`

Classes to add on the backdrop DOM element.

#### Default Value

`''`

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:66

***

### backdropHidden

> **backdropHidden**: `boolean`

Whether the backdrop is fully hidden. This can be true either because [backdrop](ModalProps.md#backdrop) is false or
because [visible](ModalProps.md#visible-2) is false and there is no current transition.

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:33

***

### children

> **children**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Body of the modal.

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:112

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:102

***

### closeButton

> **closeButton**: `boolean`

Whether to display the close button.

#### Default Value

`true`

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:74

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

svelte/bootstrap/src/components/modal/modal.gen.ts:87

***

### contentData

> **contentData**: `Data`

Data to use in content slots

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:107

***

### footer

> **footer**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Footer of the modal.

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:118

***

### fullscreen

> **fullscreen**: `boolean`

Option to create a fullscreen modal, according to the bootstrap documentation.

#### Default Value

`false`

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:144

***

### header

> **header**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Header of the modal. The default header includes [title](ModalProps.md#title).

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:124

***

### hidden

> **hidden**: `boolean`

Whether the modal is fully hidden.

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:39

***

### modalElement

> **modalElement**: `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

DOM element of the modal.

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:51

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Structure of the modal.
The default structure uses [header](ModalProps.md#header), [children](ModalProps.md#children) and [footer](ModalProps.md#footer).

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:131

***

### title

> **title**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Title of the modal.

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:137

***

### transitioning

> **transitioning**: `boolean`

Whether there is an active transition to either display or hide the modal.

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:45

***

### visible

> **visible**: `boolean`

Whether the modal should be visible when the transition is completed.

#### Default Value

`false`

#### Defined in

svelte/bootstrap/src/components/modal/modal.gen.ts:95
