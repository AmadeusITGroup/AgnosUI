Defined in: [core-bootstrap/src/components/modal/modal.ts:61](https://github.com/AmadeusITGroup/AgnosUI/blob/8cfb531fadd4c3afad5173e98c4e3cf75f8a1249/core-bootstrap/src/components/modal/modal.ts#L61)

Represents the state of a modal component.

## Extends

- `ModalState`.`ModalExtraProps`\<`Data`\>

## Type Parameters

### Data

`Data`

The type of the data associated with the modal.

## Properties

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `string`

Defined in: [core/src/components/modal/modal.ts:52](https://github.com/AmadeusITGroup/AgnosUI/blob/8cfb531fadd4c3afad5173e98c4e3cf75f8a1249/core/src/components/modal/modal.ts#L52)

Value of the aria-label attribute to put on the close button.

#### Default Value

`'Close'`

#### Inherited from

`CoreState.ariaCloseButtonLabel`

***

### backdropClass

> **backdropClass**: `string`

Defined in: [core/src/components/modal/modal.ts:59](https://github.com/AmadeusITGroup/AgnosUI/blob/8cfb531fadd4c3afad5173e98c4e3cf75f8a1249/core/src/components/modal/modal.ts#L59)

Classes to add on the backdrop DOM element.

#### Default Value

`''`

#### Inherited from

`CoreState.backdropClass`

***

### backdropHidden

> **backdropHidden**: `boolean`

Defined in: [core/src/components/modal/modal.ts:205](https://github.com/AmadeusITGroup/AgnosUI/blob/8cfb531fadd4c3afad5173e98c4e3cf75f8a1249/core/src/components/modal/modal.ts#L205)

Whether the backdrop is fully hidden. This can be true either because [backdrop](ModalProps.md#backdrop) is false or
because [visible](#visible) is false and there is no current transition.

#### Inherited from

`CoreState.backdropHidden`

***

### children

> **children**: `SlotContent`\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Defined in: [core-bootstrap/src/components/modal/modal.ts:26](https://github.com/AmadeusITGroup/AgnosUI/blob/8cfb531fadd4c3afad5173e98c4e3cf75f8a1249/core-bootstrap/src/components/modal/modal.ts#L26)

Body of the modal.

#### Inherited from

`ModalExtraProps.children`

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/8cfb531fadd4c3afad5173e98c4e3cf75f8a1249/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreState.className`

***

### closeButton

> **closeButton**: `boolean`

Defined in: [core/src/components/modal/modal.ts:66](https://github.com/AmadeusITGroup/AgnosUI/blob/8cfb531fadd4c3afad5173e98c4e3cf75f8a1249/core/src/components/modal/modal.ts#L66)

Whether to display the close button.

#### Default Value

`true`

#### Inherited from

`CoreState.closeButton`

***

### container

> **container**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) \| `null`

Defined in: [core/src/components/modal/modal.ts:78](https://github.com/AmadeusITGroup/AgnosUI/blob/8cfb531fadd4c3afad5173e98c4e3cf75f8a1249/core/src/components/modal/modal.ts#L78)

Which element should contain the modal and backdrop DOM elements.
If it is not null, the modal and backdrop DOM elements are moved to the specified container.
Otherwise, they stay where the widget is located.

#### Default Value

```ts
typeof window !== 'undefined' ? document.body : null
```

#### Inherited from

`CoreState.container`

***

### contentData

> **contentData**: `Data`

Defined in: [core-bootstrap/src/components/modal/modal.ts:22](https://github.com/AmadeusITGroup/AgnosUI/blob/8cfb531fadd4c3afad5173e98c4e3cf75f8a1249/core-bootstrap/src/components/modal/modal.ts#L22)

Data to use in content slots

#### Inherited from

`ModalExtraProps.contentData`

***

### footer

> **footer**: `SlotContent`\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Defined in: [core-bootstrap/src/components/modal/modal.ts:31](https://github.com/AmadeusITGroup/AgnosUI/blob/8cfb531fadd4c3afad5173e98c4e3cf75f8a1249/core-bootstrap/src/components/modal/modal.ts#L31)

Footer of the modal.

#### Inherited from

`ModalExtraProps.footer`

***

### fullscreen

> **fullscreen**: `boolean`

Defined in: [core-bootstrap/src/components/modal/modal.ts:53](https://github.com/AmadeusITGroup/AgnosUI/blob/8cfb531fadd4c3afad5173e98c4e3cf75f8a1249/core-bootstrap/src/components/modal/modal.ts#L53)

Option to create a fullscreen modal, according to the bootstrap documentation.

#### Default Value

`false`

#### Inherited from

`ModalExtraProps.fullscreen`

***

### header

> **header**: `SlotContent`\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Defined in: [core-bootstrap/src/components/modal/modal.ts:36](https://github.com/AmadeusITGroup/AgnosUI/blob/8cfb531fadd4c3afad5173e98c4e3cf75f8a1249/core-bootstrap/src/components/modal/modal.ts#L36)

Header of the modal. The default header includes [title](ModalProps.md#title).

#### Inherited from

`ModalExtraProps.header`

***

### hidden

> **hidden**: `boolean`

Defined in: [core/src/components/modal/modal.ts:210](https://github.com/AmadeusITGroup/AgnosUI/blob/8cfb531fadd4c3afad5173e98c4e3cf75f8a1249/core/src/components/modal/modal.ts#L210)

Whether the modal is fully hidden.

#### Inherited from

`CoreState.hidden`

***

### modalElement

> **modalElement**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) \| `null`

Defined in: [core/src/components/modal/modal.ts:220](https://github.com/AmadeusITGroup/AgnosUI/blob/8cfb531fadd4c3afad5173e98c4e3cf75f8a1249/core/src/components/modal/modal.ts#L220)

DOM element of the modal.

#### Inherited from

`CoreState.modalElement`

***

### structure

> **structure**: `SlotContent`\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Defined in: [core-bootstrap/src/components/modal/modal.ts:42](https://github.com/AmadeusITGroup/AgnosUI/blob/8cfb531fadd4c3afad5173e98c4e3cf75f8a1249/core-bootstrap/src/components/modal/modal.ts#L42)

Structure of the modal.
The default structure uses [header](ModalProps.md#header), [children](ModalProps.md#children) and [footer](ModalProps.md#footer).

#### Inherited from

`ModalExtraProps.structure`

***

### title

> **title**: `SlotContent`\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Defined in: [core-bootstrap/src/components/modal/modal.ts:47](https://github.com/AmadeusITGroup/AgnosUI/blob/8cfb531fadd4c3afad5173e98c4e3cf75f8a1249/core-bootstrap/src/components/modal/modal.ts#L47)

Title of the modal.

#### Inherited from

`ModalExtraProps.title`

***

### transitioning

> **transitioning**: `boolean`

Defined in: [core/src/components/modal/modal.ts:215](https://github.com/AmadeusITGroup/AgnosUI/blob/8cfb531fadd4c3afad5173e98c4e3cf75f8a1249/core/src/components/modal/modal.ts#L215)

Whether there is an active transition to either display or hide the modal.

#### Inherited from

`CoreState.transitioning`

***

### visible

> **visible**: `boolean`

Defined in: [core/src/components/modal/modal.ts:85](https://github.com/AmadeusITGroup/AgnosUI/blob/8cfb531fadd4c3afad5173e98c4e3cf75f8a1249/core/src/components/modal/modal.ts#L85)

Whether the modal should be visible when the transition is completed.

#### Default Value

`false`

#### Inherited from

`CoreState.visible`
