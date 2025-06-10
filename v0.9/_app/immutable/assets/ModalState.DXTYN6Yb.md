Defined in: [core/src/components/modal/modal.ts:192](https://github.com/AmadeusITGroup/AgnosUI/blob/6e8ba4031b41502f14bae5c19595e06827bc4553/core/src/components/modal/modal.ts#L192)

State of the modal widget.

## Extends

- `ModalCommonPropsAndState`

## Properties

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `string`

Defined in: [core/src/components/modal/modal.ts:44](https://github.com/AmadeusITGroup/AgnosUI/blob/6e8ba4031b41502f14bae5c19595e06827bc4553/core/src/components/modal/modal.ts#L44)

Value of the aria-label attribute to put on the close button.

#### Default Value

`'Close'`

#### Inherited from

`ModalCommonPropsAndState.ariaCloseButtonLabel`

***

### backdropClass

> **backdropClass**: `string`

Defined in: [core/src/components/modal/modal.ts:51](https://github.com/AmadeusITGroup/AgnosUI/blob/6e8ba4031b41502f14bae5c19595e06827bc4553/core/src/components/modal/modal.ts#L51)

Classes to add on the backdrop DOM element.

#### Default Value

`''`

#### Inherited from

`ModalCommonPropsAndState.backdropClass`

***

### backdropHidden

> **backdropHidden**: `boolean`

Defined in: [core/src/components/modal/modal.ts:197](https://github.com/AmadeusITGroup/AgnosUI/blob/6e8ba4031b41502f14bae5c19595e06827bc4553/core/src/components/modal/modal.ts#L197)

Whether the backdrop is fully hidden. This can be true either because [backdrop](ModalProps.md#backdrop) is false or
because [visible](ModalProps.md#visible) is false and there is no current transition.

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/6e8ba4031b41502f14bae5c19595e06827bc4553/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`ModalCommonPropsAndState.className`

***

### closeButton

> **closeButton**: `boolean`

Defined in: [core/src/components/modal/modal.ts:58](https://github.com/AmadeusITGroup/AgnosUI/blob/6e8ba4031b41502f14bae5c19595e06827bc4553/core/src/components/modal/modal.ts#L58)

Whether to display the close button.

#### Default Value

`true`

#### Inherited from

`ModalCommonPropsAndState.closeButton`

***

### container

> **container**: `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Defined in: [core/src/components/modal/modal.ts:70](https://github.com/AmadeusITGroup/AgnosUI/blob/6e8ba4031b41502f14bae5c19595e06827bc4553/core/src/components/modal/modal.ts#L70)

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

Defined in: [core/src/components/modal/modal.ts:202](https://github.com/AmadeusITGroup/AgnosUI/blob/6e8ba4031b41502f14bae5c19595e06827bc4553/core/src/components/modal/modal.ts#L202)

Whether the modal is fully hidden.

***

### modalElement

> **modalElement**: `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Defined in: [core/src/components/modal/modal.ts:212](https://github.com/AmadeusITGroup/AgnosUI/blob/6e8ba4031b41502f14bae5c19595e06827bc4553/core/src/components/modal/modal.ts#L212)

DOM element of the modal.

***

### transitioning

> **transitioning**: `boolean`

Defined in: [core/src/components/modal/modal.ts:207](https://github.com/AmadeusITGroup/AgnosUI/blob/6e8ba4031b41502f14bae5c19595e06827bc4553/core/src/components/modal/modal.ts#L207)

Whether there is an active transition to either display or hide the modal.

***

### visible

> **visible**: `boolean`

Defined in: [core/src/components/modal/modal.ts:77](https://github.com/AmadeusITGroup/AgnosUI/blob/6e8ba4031b41502f14bae5c19595e06827bc4553/core/src/components/modal/modal.ts#L77)

Whether the modal should be visible when the transition is completed.

#### Default Value

`false`

#### Inherited from

`ModalCommonPropsAndState.visible`
