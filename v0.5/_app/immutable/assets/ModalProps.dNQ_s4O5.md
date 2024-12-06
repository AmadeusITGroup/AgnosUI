Properties of the modal widget.

## Extends

- `ModalCommonPropsAndState`

## Properties

### animated

> **animated**: `boolean`

Whether the modal and its backdrop (if present) should be animated when shown or hidden.

#### Default Value

`true`

#### Defined in

[core/src/components/modal/modal.ts:106](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/core/src/components/modal/modal.ts#L106)

***

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `string`

Value of the aria-label attribute to put on the close button.

#### Default Value

`'Close'`

#### Inherited from

`ModalCommonPropsAndState.ariaCloseButtonLabel`

#### Defined in

[core/src/components/modal/modal.ts:43](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/core/src/components/modal/modal.ts#L43)

***

### backdrop

> **backdrop**: `boolean`

Whether a backdrop should be created behind the modal.

#### Default Value

`true`

#### Defined in

[core/src/components/modal/modal.ts:113](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/core/src/components/modal/modal.ts#L113)

***

### backdropClass

> **backdropClass**: `string`

Classes to add on the backdrop DOM element.

#### Default Value

`''`

#### Inherited from

`ModalCommonPropsAndState.backdropClass`

#### Defined in

[core/src/components/modal/modal.ts:50](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/core/src/components/modal/modal.ts#L50)

***

### backdropTransition

> **backdropTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

The transition to use for the backdrop behind the modal (if present).

#### Default Value

```ts
async () => {}
```

#### Defined in

[core/src/components/modal/modal.ts:123](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/core/src/components/modal/modal.ts#L123)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`ModalCommonPropsAndState.className`

#### Defined in

[core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/core/src/components/commonProps.ts#L10)

***

### closeButton

> **closeButton**: `boolean`

Whether to display the close button.

#### Default Value

`true`

#### Inherited from

`ModalCommonPropsAndState.closeButton`

#### Defined in

[core/src/components/modal/modal.ts:57](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/core/src/components/modal/modal.ts#L57)

***

### closeOnOutsideClick

> **closeOnOutsideClick**: `boolean`

Whether the modal should be closed when clicking on the viewport outside the modal.

#### Default Value

`true`

#### Defined in

[core/src/components/modal/modal.ts:130](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/core/src/components/modal/modal.ts#L130)

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

`ModalCommonPropsAndState.container`

#### Defined in

[core/src/components/modal/modal.ts:69](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/core/src/components/modal/modal.ts#L69)

***

### modalTransition

> **modalTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

The transition to use for the modal.

#### Default Value

```ts
async () => {}
```

#### Defined in

[core/src/components/modal/modal.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/core/src/components/modal/modal.ts#L140)

***

### onBeforeClose()

> **onBeforeClose**: (`event`) => `void`

Event to be triggered when the modal is about to be closed (i.e. the [close](ModalApi.md#close) method was called).

#### Parameters

• **event**: [`ModalBeforeCloseEvent`](ModalBeforeCloseEvent.md)

event giving access to the argument given to the [close](ModalApi.md#close) method and allowing
to cancel the close process.

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Defined in

[core/src/components/modal/modal.ts:153](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/core/src/components/modal/modal.ts#L153)

***

### onHidden()

> **onHidden**: () => `void`

Event to be triggered when the transition is completed and the modal is not visible.

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Defined in

[core/src/components/modal/modal.ts:175](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/core/src/components/modal/modal.ts#L175)

***

### onShown()

> **onShown**: () => `void`

Event to be triggered when the transition is completed and the modal is visible.

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Defined in

[core/src/components/modal/modal.ts:185](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/core/src/components/modal/modal.ts#L185)

***

### onVisibleChange()

> **onVisibleChange**: (`visible`) => `void`

Event to be triggered when the visible property changes.

#### Parameters

• **visible**: `boolean`

new value of the visible propery

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Defined in

[core/src/components/modal/modal.ts:165](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/core/src/components/modal/modal.ts#L165)

***

### visible

> **visible**: `boolean`

Whether the modal should be visible when the transition is completed.

#### Default Value

`false`

#### Inherited from

`ModalCommonPropsAndState.visible`

#### Defined in

[core/src/components/modal/modal.ts:76](https://github.com/AmadeusITGroup/AgnosUI/blob/b90b7cc704ce6384a5c3adb7b2c85266a3c4abdd/core/src/components/modal/modal.ts#L76)
