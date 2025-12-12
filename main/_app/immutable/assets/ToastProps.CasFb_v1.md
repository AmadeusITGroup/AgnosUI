Defined in: [core-bootstrap/src/components/toast/toast.ts:42](https://github.com/AmadeusITGroup/AgnosUI/blob/bce8c35f16a7b08b8095a37c9279e80f17dec924/core-bootstrap/src/components/toast/toast.ts#L42)

Interface representing the properties for the Toast component.

## Extends

- `ToastProps`.[`ToastExtraProps`](ToastExtraProps.md)

## Properties

### animated

> **animated**: `boolean`

Defined in: [core/src/components/alert/common.ts:108](https://github.com/AmadeusITGroup/AgnosUI/blob/bce8c35f16a7b08b8095a37c9279e80f17dec924/core/src/components/alert/common.ts#L108)

If `true`, alert closing will be animated.

Animation is triggered  when clicked on the close button (×),
via the `.close()` function or the visible prop is changed

#### Default Value

`true`

#### Inherited from

`CoreProps.animated`

***

### animatedOnInit

> **animatedOnInit**: `boolean`

Defined in: [core/src/components/alert/common.ts:99](https://github.com/AmadeusITGroup/AgnosUI/blob/bce8c35f16a7b08b8095a37c9279e80f17dec924/core/src/components/alert/common.ts#L99)

If `true`, alert opening will be animated.

Animation is triggered  when the `.open()` function is called
or the visible prop is changed

#### Default Value

`false`

#### Inherited from

`CoreProps.animatedOnInit`

***

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `string`

Defined in: [core/src/components/alert/common.ts:32](https://github.com/AmadeusITGroup/AgnosUI/blob/bce8c35f16a7b08b8095a37c9279e80f17dec924/core/src/components/alert/common.ts#L32)

Accessibility close button label

#### Default Value

`'Close'`

#### Inherited from

`CoreProps.ariaCloseButtonLabel`

***

### autoHide

> **autoHide**: `boolean`

Defined in: [core/src/components/toast/toast.ts:17](https://github.com/AmadeusITGroup/AgnosUI/blob/bce8c35f16a7b08b8095a37c9279e80f17dec924/core/src/components/toast/toast.ts#L17)

If `true` automatically hides the toast after the delay.

#### Default Value

`true`

#### Inherited from

`CoreProps.autoHide`

***

### children

> **children**: `SlotContent`\<[`ToastContext`](ToastContext.md)\>

Defined in: [core-bootstrap/src/components/toast/toast.ts:28](https://github.com/AmadeusITGroup/AgnosUI/blob/bce8c35f16a7b08b8095a37c9279e80f17dec924/core-bootstrap/src/components/toast/toast.ts#L28)

Template for the toast content

#### Inherited from

[`ToastExtraProps`](ToastExtraProps.md).[`children`](ToastExtraProps.md#children)

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/bce8c35f16a7b08b8095a37c9279e80f17dec924/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreProps.className`

***

### delay

> **delay**: `number`

Defined in: [core/src/components/toast/toast.ts:23](https://github.com/AmadeusITGroup/AgnosUI/blob/bce8c35f16a7b08b8095a37c9279e80f17dec924/core/src/components/toast/toast.ts#L23)

Delay in milliseconds before hiding the toast.

#### Default Value

`5000`

#### Inherited from

`CoreProps.delay`

***

### dismissible

> **dismissible**: `boolean`

Defined in: [core/src/components/alert/common.ts:19](https://github.com/AmadeusITGroup/AgnosUI/blob/bce8c35f16a7b08b8095a37c9279e80f17dec924/core/src/components/alert/common.ts#L19)

If `true`, alert can be dismissed by the user.
The close button (×) will be displayed and you can be notified of the event with the (close) output.

#### Default Value

`true`

#### Inherited from

`CoreProps.dismissible`

***

### header

> **header**: `SlotContent`\<[`ToastContext`](ToastContext.md)\>

Defined in: [core-bootstrap/src/components/toast/toast.ts:32](https://github.com/AmadeusITGroup/AgnosUI/blob/bce8c35f16a7b08b8095a37c9279e80f17dec924/core-bootstrap/src/components/toast/toast.ts#L32)

Header template for the toast component

#### Inherited from

[`ToastExtraProps`](ToastExtraProps.md).[`header`](ToastExtraProps.md#header)

***

### onHidden()

> **onHidden**: () => `void`

Defined in: [core/src/components/alert/common.ts:67](https://github.com/AmadeusITGroup/AgnosUI/blob/bce8c35f16a7b08b8095a37c9279e80f17dec924/core/src/components/alert/common.ts#L67)

Callback called when the alert is hidden.

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Inherited from

`CoreProps.onHidden`

***

### onShown()

> **onShown**: () => `void`

Defined in: [core/src/components/alert/common.ts:77](https://github.com/AmadeusITGroup/AgnosUI/blob/bce8c35f16a7b08b8095a37c9279e80f17dec924/core/src/components/alert/common.ts#L77)

Callback called when the alert is shown.

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Inherited from

`CoreProps.onShown`

***

### onVisibleChange()

> **onVisibleChange**: (`visible`) => `void`

Defined in: [core/src/components/alert/common.ts:57](https://github.com/AmadeusITGroup/AgnosUI/blob/bce8c35f16a7b08b8095a37c9279e80f17dec924/core/src/components/alert/common.ts#L57)

Callback called when the alert visibility changed.

#### Parameters

##### visible

`boolean`

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Inherited from

`CoreProps.onVisibleChange`

***

### structure

> **structure**: `SlotContent`\<[`ToastContext`](ToastContext.md)\>

Defined in: [core-bootstrap/src/components/toast/toast.ts:24](https://github.com/AmadeusITGroup/AgnosUI/blob/bce8c35f16a7b08b8095a37c9279e80f17dec924/core-bootstrap/src/components/toast/toast.ts#L24)

Global template for the toast component

#### Inherited from

[`ToastExtraProps`](ToastExtraProps.md).[`structure`](ToastExtraProps.md#structure)

***

### transition

> **transition**: `TransitionFn`

Defined in: [core-bootstrap/src/components/toast/toast.ts:50](https://github.com/AmadeusITGroup/AgnosUI/blob/bce8c35f16a7b08b8095a37c9279e80f17dec924/core-bootstrap/src/components/toast/toast.ts#L50)

The transition function will be executed when the alert is displayed or hidden.

Depending on the value of `animatedOnInit`, the animation can be optionally skipped during the showing process.

#### Default Value

`fadeTransition`

#### Overrides

`CoreProps.transition`

***

### visible

> **visible**: `boolean`

Defined in: [core/src/components/alert/common.ts:25](https://github.com/AmadeusITGroup/AgnosUI/blob/bce8c35f16a7b08b8095a37c9279e80f17dec924/core/src/components/alert/common.ts#L25)

If `true` the alert is visible to the user

#### Default Value

`true`

#### Inherited from

`CoreProps.visible`
