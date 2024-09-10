## Extends

- `ModalState`.`ModalExtraProps`\<`Data`\>

## Type Parameters

• **Data**

## Properties

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `string`

Value of the aria-label attribute to put on the close button.

#### Default Value

`'Close'`

#### Inherited from

`CoreState.ariaCloseButtonLabel`

#### Defined in

[core/src/components/modal/modal.ts:44](https://github.com/AmadeusITGroup/AgnosUI/blob/5e77d8ff5dc39c525fe0a65b47a7c2f9ba0e9293/core/src/components/modal/modal.ts#L44)

***

### backdropClass

> **backdropClass**: `string`

Classes to add on the backdrop DOM element.

#### Default Value

`''`

#### Inherited from

`CoreState.backdropClass`

#### Defined in

[core/src/components/modal/modal.ts:51](https://github.com/AmadeusITGroup/AgnosUI/blob/5e77d8ff5dc39c525fe0a65b47a7c2f9ba0e9293/core/src/components/modal/modal.ts#L51)

***

### backdropHidden

> **backdropHidden**: `boolean`

Whether the backdrop is fully hidden. This can be true either because [backdrop](ModalProps.md#backdrop) is false or
because [visible](ModalState.md#visible) is false and there is no current transition.

#### Inherited from

`CoreState.backdropHidden`

#### Defined in

[core/src/components/modal/modal.ts:197](https://github.com/AmadeusITGroup/AgnosUI/blob/5e77d8ff5dc39c525fe0a65b47a7c2f9ba0e9293/core/src/components/modal/modal.ts#L197)

***

### children

> **children**: `SlotContent`\<[`ModalContext`](../type-aliases/ModalContext.md)\<`Data`\>\>

Body of the modal.

#### Inherited from

`ModalExtraProps.children`

#### Defined in

[core-bootstrap/src/components/modal/modal.ts:27](https://github.com/AmadeusITGroup/AgnosUI/blob/5e77d8ff5dc39c525fe0a65b47a7c2f9ba0e9293/core-bootstrap/src/components/modal/modal.ts#L27)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreState.className`

#### Defined in

[core/src/components/commonProps.ts:7](https://github.com/AmadeusITGroup/AgnosUI/blob/5e77d8ff5dc39c525fe0a65b47a7c2f9ba0e9293/core/src/components/commonProps.ts#L7)

***

### closeButton

> **closeButton**: `boolean`

Whether to display the close button.

#### Default Value

`true`

#### Inherited from

`CoreState.closeButton`

#### Defined in

[core/src/components/modal/modal.ts:58](https://github.com/AmadeusITGroup/AgnosUI/blob/5e77d8ff5dc39c525fe0a65b47a7c2f9ba0e9293/core/src/components/modal/modal.ts#L58)

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

[core/src/components/modal/modal.ts:70](https://github.com/AmadeusITGroup/AgnosUI/blob/5e77d8ff5dc39c525fe0a65b47a7c2f9ba0e9293/core/src/components/modal/modal.ts#L70)

***

### contentData

> **contentData**: `Data`

Data to use in content slots

#### Inherited from

`ModalExtraProps.contentData`

#### Defined in

[core-bootstrap/src/components/modal/modal.ts:23](https://github.com/AmadeusITGroup/AgnosUI/blob/5e77d8ff5dc39c525fe0a65b47a7c2f9ba0e9293/core-bootstrap/src/components/modal/modal.ts#L23)

***

### footer

> **footer**: `SlotContent`\<[`ModalContext`](../type-aliases/ModalContext.md)\<`Data`\>\>

Footer of the modal.

#### Inherited from

`ModalExtraProps.footer`

#### Defined in

[core-bootstrap/src/components/modal/modal.ts:32](https://github.com/AmadeusITGroup/AgnosUI/blob/5e77d8ff5dc39c525fe0a65b47a7c2f9ba0e9293/core-bootstrap/src/components/modal/modal.ts#L32)

***

### fullscreen

> **fullscreen**: `boolean`

Option to create a fullscreen modal, according to the bootstrap documentation.

#### Default Value

`false`

#### Inherited from

`ModalExtraProps.fullscreen`

#### Defined in

[core-bootstrap/src/components/modal/modal.ts:54](https://github.com/AmadeusITGroup/AgnosUI/blob/5e77d8ff5dc39c525fe0a65b47a7c2f9ba0e9293/core-bootstrap/src/components/modal/modal.ts#L54)

***

### header

> **header**: `SlotContent`\<[`ModalContext`](../type-aliases/ModalContext.md)\<`Data`\>\>

Header of the modal. The default header includes [title](ModalProps.md#title).

#### Inherited from

`ModalExtraProps.header`

#### Defined in

[core-bootstrap/src/components/modal/modal.ts:37](https://github.com/AmadeusITGroup/AgnosUI/blob/5e77d8ff5dc39c525fe0a65b47a7c2f9ba0e9293/core-bootstrap/src/components/modal/modal.ts#L37)

***

### hidden

> **hidden**: `boolean`

Whether the modal is fully hidden.

#### Inherited from

`CoreState.hidden`

#### Defined in

[core/src/components/modal/modal.ts:202](https://github.com/AmadeusITGroup/AgnosUI/blob/5e77d8ff5dc39c525fe0a65b47a7c2f9ba0e9293/core/src/components/modal/modal.ts#L202)

***

### modalElement

> **modalElement**: `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

DOM element of the modal.

#### Inherited from

`CoreState.modalElement`

#### Defined in

[core/src/components/modal/modal.ts:212](https://github.com/AmadeusITGroup/AgnosUI/blob/5e77d8ff5dc39c525fe0a65b47a7c2f9ba0e9293/core/src/components/modal/modal.ts#L212)

***

### structure

> **structure**: `SlotContent`\<[`ModalContext`](../type-aliases/ModalContext.md)\<`Data`\>\>

Structure of the modal.
The default structure uses [header](ModalProps.md#header), [children](ModalProps.md#children) and [footer](ModalProps.md#footer).

#### Inherited from

`ModalExtraProps.structure`

#### Defined in

[core-bootstrap/src/components/modal/modal.ts:43](https://github.com/AmadeusITGroup/AgnosUI/blob/5e77d8ff5dc39c525fe0a65b47a7c2f9ba0e9293/core-bootstrap/src/components/modal/modal.ts#L43)

***

### title

> **title**: `SlotContent`\<[`ModalContext`](../type-aliases/ModalContext.md)\<`Data`\>\>

Title of the modal.

#### Inherited from

`ModalExtraProps.title`

#### Defined in

[core-bootstrap/src/components/modal/modal.ts:48](https://github.com/AmadeusITGroup/AgnosUI/blob/5e77d8ff5dc39c525fe0a65b47a7c2f9ba0e9293/core-bootstrap/src/components/modal/modal.ts#L48)

***

### transitioning

> **transitioning**: `boolean`

Whether there is an active transition to either display or hide the modal.

#### Inherited from

`CoreState.transitioning`

#### Defined in

[core/src/components/modal/modal.ts:207](https://github.com/AmadeusITGroup/AgnosUI/blob/5e77d8ff5dc39c525fe0a65b47a7c2f9ba0e9293/core/src/components/modal/modal.ts#L207)

***

### visible

> **visible**: `boolean`

Whether the modal should be visible when the transition is completed.

#### Default Value

`false`

#### Inherited from

`CoreState.visible`

#### Defined in

[core/src/components/modal/modal.ts:77](https://github.com/AmadeusITGroup/AgnosUI/blob/5e77d8ff5dc39c525fe0a65b47a7c2f9ba0e9293/core/src/components/modal/modal.ts#L77)
