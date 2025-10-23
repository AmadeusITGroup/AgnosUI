Defined in: [core/src/components/modal/modal.ts:193](https://github.com/AmadeusITGroup/AgnosUI/blob/cb9aa94dfe24c7f900f9c3fbd07ef344329a3e75/core/src/components/modal/modal.ts#L193)

State of the modal widget.

## Extends

- `ModalCommonPropsAndState`

## Properties

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `string`

Defined in: [core/src/components/modal/modal.ts:45](https://github.com/AmadeusITGroup/AgnosUI/blob/cb9aa94dfe24c7f900f9c3fbd07ef344329a3e75/core/src/components/modal/modal.ts#L45)

Value of the aria-label attribute to put on the close button.

#### Default Value

`'Close'`

#### Inherited from

`ModalCommonPropsAndState.ariaCloseButtonLabel`

***

### backdropClass

> **backdropClass**: `string`

Defined in: [core/src/components/modal/modal.ts:52](https://github.com/AmadeusITGroup/AgnosUI/blob/cb9aa94dfe24c7f900f9c3fbd07ef344329a3e75/core/src/components/modal/modal.ts#L52)

Classes to add on the backdrop DOM element.

#### Default Value

`''`

#### Inherited from

`ModalCommonPropsAndState.backdropClass`

***

### backdropHidden

> **backdropHidden**: `boolean`

Defined in: [core/src/components/modal/modal.ts:198](https://github.com/AmadeusITGroup/AgnosUI/blob/cb9aa94dfe24c7f900f9c3fbd07ef344329a3e75/core/src/components/modal/modal.ts#L198)

Whether the backdrop is fully hidden. This can be true either because [backdrop](ModalProps.md#backdrop) is false or
because [visible](ModalProps.md#visible) is false and there is no current transition.

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/cb9aa94dfe24c7f900f9c3fbd07ef344329a3e75/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`ModalCommonPropsAndState.className`

***

### closeButton

> **closeButton**: `boolean`

Defined in: [core/src/components/modal/modal.ts:59](https://github.com/AmadeusITGroup/AgnosUI/blob/cb9aa94dfe24c7f900f9c3fbd07ef344329a3e75/core/src/components/modal/modal.ts#L59)

Whether to display the close button.

#### Default Value

`true`

#### Inherited from

`ModalCommonPropsAndState.closeButton`

***

### container

> **container**: `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Defined in: [core/src/components/modal/modal.ts:71](https://github.com/AmadeusITGroup/AgnosUI/blob/cb9aa94dfe24c7f900f9c3fbd07ef344329a3e75/core/src/components/modal/modal.ts#L71)

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

Defined in: [core/src/components/modal/modal.ts:203](https://github.com/AmadeusITGroup/AgnosUI/blob/cb9aa94dfe24c7f900f9c3fbd07ef344329a3e75/core/src/components/modal/modal.ts#L203)

Whether the modal is fully hidden.

***

### modalElement

> **modalElement**: `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Defined in: [core/src/components/modal/modal.ts:213](https://github.com/AmadeusITGroup/AgnosUI/blob/cb9aa94dfe24c7f900f9c3fbd07ef344329a3e75/core/src/components/modal/modal.ts#L213)

DOM element of the modal.

***

### transitioning

> **transitioning**: `boolean`

Defined in: [core/src/components/modal/modal.ts:208](https://github.com/AmadeusITGroup/AgnosUI/blob/cb9aa94dfe24c7f900f9c3fbd07ef344329a3e75/core/src/components/modal/modal.ts#L208)

Whether there is an active transition to either display or hide the modal.

***

### visible

> **visible**: `boolean`

Defined in: [core/src/components/modal/modal.ts:78](https://github.com/AmadeusITGroup/AgnosUI/blob/cb9aa94dfe24c7f900f9c3fbd07ef344329a3e75/core/src/components/modal/modal.ts#L78)

Whether the modal should be visible when the transition is completed.

#### Default Value

`false`

#### Inherited from

`ModalCommonPropsAndState.visible`
