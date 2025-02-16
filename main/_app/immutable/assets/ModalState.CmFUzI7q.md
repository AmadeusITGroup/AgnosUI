Defined in: [core/src/components/modal/modal.ts:191](https://github.com/AmadeusITGroup/AgnosUI/blob/f02899185b473d6120256fd44bdcc0100933d0b2/core/src/components/modal/modal.ts#L191)

State of the modal widget.

## Extends

- `ModalCommonPropsAndState`

## Properties

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `string`

Defined in: [core/src/components/modal/modal.ts:43](https://github.com/AmadeusITGroup/AgnosUI/blob/f02899185b473d6120256fd44bdcc0100933d0b2/core/src/components/modal/modal.ts#L43)

Value of the aria-label attribute to put on the close button.

#### Default Value

`'Close'`

#### Inherited from

`ModalCommonPropsAndState.ariaCloseButtonLabel`

***

### backdropClass

> **backdropClass**: `string`

Defined in: [core/src/components/modal/modal.ts:50](https://github.com/AmadeusITGroup/AgnosUI/blob/f02899185b473d6120256fd44bdcc0100933d0b2/core/src/components/modal/modal.ts#L50)

Classes to add on the backdrop DOM element.

#### Default Value

`''`

#### Inherited from

`ModalCommonPropsAndState.backdropClass`

***

### backdropHidden

> **backdropHidden**: `boolean`

Defined in: [core/src/components/modal/modal.ts:196](https://github.com/AmadeusITGroup/AgnosUI/blob/f02899185b473d6120256fd44bdcc0100933d0b2/core/src/components/modal/modal.ts#L196)

Whether the backdrop is fully hidden. This can be true either because [backdrop](ModalProps.md#backdrop) is false or
because [visible](ModalProps.md#visible-2) is false and there is no current transition.

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/f02899185b473d6120256fd44bdcc0100933d0b2/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`ModalCommonPropsAndState.className`

***

### closeButton

> **closeButton**: `boolean`

Defined in: [core/src/components/modal/modal.ts:57](https://github.com/AmadeusITGroup/AgnosUI/blob/f02899185b473d6120256fd44bdcc0100933d0b2/core/src/components/modal/modal.ts#L57)

Whether to display the close button.

#### Default Value

`true`

#### Inherited from

`ModalCommonPropsAndState.closeButton`

***

### container

> **container**: `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Defined in: [core/src/components/modal/modal.ts:69](https://github.com/AmadeusITGroup/AgnosUI/blob/f02899185b473d6120256fd44bdcc0100933d0b2/core/src/components/modal/modal.ts#L69)

Which element should contain the modal and backdrop DOM elements.
If it is not null, the modal and backdrop DOM elements are moved to the specified container.
Otherwise, they stay where the widget is located.

#### Default Value

```ts
typeof window !== 'undefined' ? document.body : null
```

#### Inherited from

`ModalCommonPropsAndState.container`

***

### hidden

> **hidden**: `boolean`

Defined in: [core/src/components/modal/modal.ts:201](https://github.com/AmadeusITGroup/AgnosUI/blob/f02899185b473d6120256fd44bdcc0100933d0b2/core/src/components/modal/modal.ts#L201)

Whether the modal is fully hidden.

***

### modalElement

> **modalElement**: `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Defined in: [core/src/components/modal/modal.ts:211](https://github.com/AmadeusITGroup/AgnosUI/blob/f02899185b473d6120256fd44bdcc0100933d0b2/core/src/components/modal/modal.ts#L211)

DOM element of the modal.

***

### transitioning

> **transitioning**: `boolean`

Defined in: [core/src/components/modal/modal.ts:206](https://github.com/AmadeusITGroup/AgnosUI/blob/f02899185b473d6120256fd44bdcc0100933d0b2/core/src/components/modal/modal.ts#L206)

Whether there is an active transition to either display or hide the modal.

***

### visible

> **visible**: `boolean`

Defined in: [core/src/components/modal/modal.ts:76](https://github.com/AmadeusITGroup/AgnosUI/blob/f02899185b473d6120256fd44bdcc0100933d0b2/core/src/components/modal/modal.ts#L76)

Whether the modal should be visible when the transition is completed.

#### Default Value

`false`

#### Inherited from

`ModalCommonPropsAndState.visible`
