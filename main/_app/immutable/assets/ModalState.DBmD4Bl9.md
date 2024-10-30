Represents the state of a modal component.

## Extends

- `ModalState`.`ModalExtraProps`\<`Data`\>

## Type Parameters

• **Data**

The type of the data associated with the modal.

## Properties

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `string`

Value of the aria-label attribute to put on the close button.

#### Default Value

`'Close'`

#### Inherited from

`CoreState.ariaCloseButtonLabel`

#### Defined in

[core/src/components/modal/modal.ts:43](https://github.com/AmadeusITGroup/AgnosUI/blob/32320879d65566f33510054cc017aa01bb1f6f02/core/src/components/modal/modal.ts#L43)

***

### backdropClass

> **backdropClass**: `string`

Classes to add on the backdrop DOM element.

#### Default Value

`''`

#### Inherited from

`CoreState.backdropClass`

#### Defined in

[core/src/components/modal/modal.ts:50](https://github.com/AmadeusITGroup/AgnosUI/blob/32320879d65566f33510054cc017aa01bb1f6f02/core/src/components/modal/modal.ts#L50)

***

### backdropHidden

> **backdropHidden**: `boolean`

Whether the backdrop is fully hidden. This can be true either because [backdrop](ModalProps.md#backdrop) is false or
because [visible](ModalState.md#visible) is false and there is no current transition.

#### Inherited from

`CoreState.backdropHidden`

#### Defined in

[core/src/components/modal/modal.ts:196](https://github.com/AmadeusITGroup/AgnosUI/blob/32320879d65566f33510054cc017aa01bb1f6f02/core/src/components/modal/modal.ts#L196)

***

### children

> **children**: `SlotContent`\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Body of the modal.

#### Inherited from

`ModalExtraProps.children`

#### Defined in

[core-bootstrap/src/components/modal/modal.ts:26](https://github.com/AmadeusITGroup/AgnosUI/blob/32320879d65566f33510054cc017aa01bb1f6f02/core-bootstrap/src/components/modal/modal.ts#L26)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreState.className`

#### Defined in

[core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/32320879d65566f33510054cc017aa01bb1f6f02/core/src/components/commonProps.ts#L10)

***

### closeButton

> **closeButton**: `boolean`

Whether to display the close button.

#### Default Value

`true`

#### Inherited from

`CoreState.closeButton`

#### Defined in

[core/src/components/modal/modal.ts:57](https://github.com/AmadeusITGroup/AgnosUI/blob/32320879d65566f33510054cc017aa01bb1f6f02/core/src/components/modal/modal.ts#L57)

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

#### Inherited from

`CoreState.container`

#### Defined in

[core/src/components/modal/modal.ts:69](https://github.com/AmadeusITGroup/AgnosUI/blob/32320879d65566f33510054cc017aa01bb1f6f02/core/src/components/modal/modal.ts#L69)

***

### contentData

> **contentData**: `Data`

Data to use in content slots

#### Inherited from

`ModalExtraProps.contentData`

#### Defined in

[core-bootstrap/src/components/modal/modal.ts:22](https://github.com/AmadeusITGroup/AgnosUI/blob/32320879d65566f33510054cc017aa01bb1f6f02/core-bootstrap/src/components/modal/modal.ts#L22)

***

### footer

> **footer**: `SlotContent`\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Footer of the modal.

#### Inherited from

`ModalExtraProps.footer`

#### Defined in

[core-bootstrap/src/components/modal/modal.ts:31](https://github.com/AmadeusITGroup/AgnosUI/blob/32320879d65566f33510054cc017aa01bb1f6f02/core-bootstrap/src/components/modal/modal.ts#L31)

***

### fullscreen

> **fullscreen**: `boolean`

Option to create a fullscreen modal, according to the bootstrap documentation.

#### Default Value

`false`

#### Inherited from

`ModalExtraProps.fullscreen`

#### Defined in

[core-bootstrap/src/components/modal/modal.ts:53](https://github.com/AmadeusITGroup/AgnosUI/blob/32320879d65566f33510054cc017aa01bb1f6f02/core-bootstrap/src/components/modal/modal.ts#L53)

***

### header

> **header**: `SlotContent`\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Header of the modal. The default header includes [title](ModalProps.md#title).

#### Inherited from

`ModalExtraProps.header`

#### Defined in

[core-bootstrap/src/components/modal/modal.ts:36](https://github.com/AmadeusITGroup/AgnosUI/blob/32320879d65566f33510054cc017aa01bb1f6f02/core-bootstrap/src/components/modal/modal.ts#L36)

***

### hidden

> **hidden**: `boolean`

Whether the modal is fully hidden.

#### Inherited from

`CoreState.hidden`

#### Defined in

[core/src/components/modal/modal.ts:201](https://github.com/AmadeusITGroup/AgnosUI/blob/32320879d65566f33510054cc017aa01bb1f6f02/core/src/components/modal/modal.ts#L201)

***

### modalElement

> **modalElement**: `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

DOM element of the modal.

#### Inherited from

`CoreState.modalElement`

#### Defined in

[core/src/components/modal/modal.ts:211](https://github.com/AmadeusITGroup/AgnosUI/blob/32320879d65566f33510054cc017aa01bb1f6f02/core/src/components/modal/modal.ts#L211)

***

### structure

> **structure**: `SlotContent`\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Structure of the modal.
The default structure uses [header](ModalProps.md#header), [children](ModalProps.md#children) and [footer](ModalProps.md#footer).

#### Inherited from

`ModalExtraProps.structure`

#### Defined in

[core-bootstrap/src/components/modal/modal.ts:42](https://github.com/AmadeusITGroup/AgnosUI/blob/32320879d65566f33510054cc017aa01bb1f6f02/core-bootstrap/src/components/modal/modal.ts#L42)

***

### title

> **title**: `SlotContent`\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Title of the modal.

#### Inherited from

`ModalExtraProps.title`

#### Defined in

[core-bootstrap/src/components/modal/modal.ts:47](https://github.com/AmadeusITGroup/AgnosUI/blob/32320879d65566f33510054cc017aa01bb1f6f02/core-bootstrap/src/components/modal/modal.ts#L47)

***

### transitioning

> **transitioning**: `boolean`

Whether there is an active transition to either display or hide the modal.

#### Inherited from

`CoreState.transitioning`

#### Defined in

[core/src/components/modal/modal.ts:206](https://github.com/AmadeusITGroup/AgnosUI/blob/32320879d65566f33510054cc017aa01bb1f6f02/core/src/components/modal/modal.ts#L206)

***

### visible

> **visible**: `boolean`

Whether the modal should be visible when the transition is completed.

#### Default Value

`false`

#### Inherited from

`CoreState.visible`

#### Defined in

[core/src/components/modal/modal.ts:76](https://github.com/AmadeusITGroup/AgnosUI/blob/32320879d65566f33510054cc017aa01bb1f6f02/core/src/components/modal/modal.ts#L76)
