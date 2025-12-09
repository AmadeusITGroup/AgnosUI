Defined in: [core/src/components/modal/modal.ts:200](https://github.com/AmadeusITGroup/AgnosUI/blob/66f5b6bd33181b2c9347064845ed7706e57e7958/core/src/components/modal/modal.ts#L200)

State of the modal widget.

## Extends

- `ModalCommonPropsAndState`

## Properties

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `string`

Defined in: [core/src/components/modal/modal.ts:52](https://github.com/AmadeusITGroup/AgnosUI/blob/66f5b6bd33181b2c9347064845ed7706e57e7958/core/src/components/modal/modal.ts#L52)

Value of the aria-label attribute to put on the close button.

#### Default Value

`'Close'`

#### Inherited from

`ModalCommonPropsAndState.ariaCloseButtonLabel`

***

### backdropClass

> **backdropClass**: `string`

Defined in: [core/src/components/modal/modal.ts:59](https://github.com/AmadeusITGroup/AgnosUI/blob/66f5b6bd33181b2c9347064845ed7706e57e7958/core/src/components/modal/modal.ts#L59)

Classes to add on the backdrop DOM element.

#### Default Value

`''`

#### Inherited from

`ModalCommonPropsAndState.backdropClass`

***

### backdropHidden

> **backdropHidden**: `boolean`

Defined in: [core/src/components/modal/modal.ts:205](https://github.com/AmadeusITGroup/AgnosUI/blob/66f5b6bd33181b2c9347064845ed7706e57e7958/core/src/components/modal/modal.ts#L205)

Whether the backdrop is fully hidden. This can be true either because [backdrop](ModalProps.md#backdrop) is false or
because [visible](ModalProps.md#visible) is false and there is no current transition.

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/66f5b6bd33181b2c9347064845ed7706e57e7958/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`ModalCommonPropsAndState.className`

***

### closeButton

> **closeButton**: `boolean`

Defined in: [core/src/components/modal/modal.ts:66](https://github.com/AmadeusITGroup/AgnosUI/blob/66f5b6bd33181b2c9347064845ed7706e57e7958/core/src/components/modal/modal.ts#L66)

Whether to display the close button.

#### Default Value

`true`

#### Inherited from

`ModalCommonPropsAndState.closeButton`

***

### container

> **container**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) \| `null`

Defined in: [core/src/components/modal/modal.ts:78](https://github.com/AmadeusITGroup/AgnosUI/blob/66f5b6bd33181b2c9347064845ed7706e57e7958/core/src/components/modal/modal.ts#L78)

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

Defined in: [core/src/components/modal/modal.ts:210](https://github.com/AmadeusITGroup/AgnosUI/blob/66f5b6bd33181b2c9347064845ed7706e57e7958/core/src/components/modal/modal.ts#L210)

Whether the modal is fully hidden.

***

### modalElement

> **modalElement**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) \| `null`

Defined in: [core/src/components/modal/modal.ts:220](https://github.com/AmadeusITGroup/AgnosUI/blob/66f5b6bd33181b2c9347064845ed7706e57e7958/core/src/components/modal/modal.ts#L220)

DOM element of the modal.

***

### transitioning

> **transitioning**: `boolean`

Defined in: [core/src/components/modal/modal.ts:215](https://github.com/AmadeusITGroup/AgnosUI/blob/66f5b6bd33181b2c9347064845ed7706e57e7958/core/src/components/modal/modal.ts#L215)

Whether there is an active transition to either display or hide the modal.

***

### visible

> **visible**: `boolean`

Defined in: [core/src/components/modal/modal.ts:85](https://github.com/AmadeusITGroup/AgnosUI/blob/66f5b6bd33181b2c9347064845ed7706e57e7958/core/src/components/modal/modal.ts#L85)

Whether the modal should be visible when the transition is completed.

#### Default Value

`false`

#### Inherited from

`ModalCommonPropsAndState.visible`
