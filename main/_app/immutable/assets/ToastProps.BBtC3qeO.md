## Extends

- `ToastProps`.[`ToastExtraProps`](ToastExtraProps.md)

## Properties

### animated

> **animated**: `boolean`

If `true`, alert closing will be animated.

Animation is triggered  when clicked on the close button (×),
via the `.close()` function or the visible prop is changed

#### Default Value

`true`

#### Inherited from

`CoreProps.animated`

#### Defined in

[core/src/components/alert/common.ts:100](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core/src/components/alert/common.ts#L100)

***

### animatedOnInit

> **animatedOnInit**: `boolean`

If `true`, alert opening will be animated.

Animation is triggered  when the `.open()` function is called
or the visible prop is changed

#### Default Value

`false`

#### Inherited from

`CoreProps.animatedOnInit`

#### Defined in

[core/src/components/alert/common.ts:91](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core/src/components/alert/common.ts#L91)

***

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `string`

Accessibility close button label

#### Default Value

`'Close'`

#### Inherited from

`CoreProps.ariaCloseButtonLabel`

#### Defined in

[core/src/components/alert/common.ts:30](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core/src/components/alert/common.ts#L30)

***

### autoHide

> **autoHide**: `boolean`

If `true` automatically hides the toast after the delay.

#### Default Value

`true`

#### Inherited from

`CoreProps.autoHide`

#### Defined in

[core/src/components/toast/toast.ts:15](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core/src/components/toast/toast.ts#L15)

***

### children

> **children**: `SlotContent`\<[`ToastContext`](../type-aliases/ToastContext.md)\>

Template for the toast content

#### Inherited from

[`ToastExtraProps`](ToastExtraProps.md).[`children`](ToastExtraProps.md#children)

#### Defined in

[core-bootstrap/src/components/toast/toast.ts:20](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core-bootstrap/src/components/toast/toast.ts#L20)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreProps.className`

#### Defined in

[core/src/components/commonProps.ts:7](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core/src/components/commonProps.ts#L7)

***

### delay

> **delay**: `number`

Delay in milliseconds before hiding the toast.

#### Default Value

`5000`

#### Inherited from

`CoreProps.delay`

#### Defined in

[core/src/components/toast/toast.ts:21](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core/src/components/toast/toast.ts#L21)

***

### dismissible

> **dismissible**: `boolean`

If `true`, alert can be dismissed by the user.
The close button (×) will be displayed and you can be notified of the event with the (close) output.

#### Default Value

`true`

#### Inherited from

`CoreProps.dismissible`

#### Defined in

[core/src/components/alert/common.ts:17](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core/src/components/alert/common.ts#L17)

***

### header

> **header**: `SlotContent`\<[`ToastContext`](../type-aliases/ToastContext.md)\>

Header template for the toast component

#### Inherited from

[`ToastExtraProps`](ToastExtraProps.md).[`header`](ToastExtraProps.md#header)

#### Defined in

[core-bootstrap/src/components/toast/toast.ts:24](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core-bootstrap/src/components/toast/toast.ts#L24)

***

### onHidden()

> **onHidden**: () => `void`

Callback called when the alert is hidden.

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Inherited from

`CoreProps.onHidden`

#### Defined in

[core/src/components/alert/common.ts:59](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core/src/components/alert/common.ts#L59)

***

### onShown()

> **onShown**: () => `void`

Callback called when the alert is shown.

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Inherited from

`CoreProps.onShown`

#### Defined in

[core/src/components/alert/common.ts:69](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core/src/components/alert/common.ts#L69)

***

### onVisibleChange()

> **onVisibleChange**: (`visible`) => `void`

Callback called when the alert visibility changed.

#### Parameters

• **visible**: `boolean`

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Inherited from

`CoreProps.onVisibleChange`

#### Defined in

[core/src/components/alert/common.ts:49](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core/src/components/alert/common.ts#L49)

***

### structure

> **structure**: `SlotContent`\<[`ToastContext`](../type-aliases/ToastContext.md)\>

Global template for the toast component

#### Inherited from

[`ToastExtraProps`](ToastExtraProps.md).[`structure`](ToastExtraProps.md#structure)

#### Defined in

[core-bootstrap/src/components/toast/toast.ts:16](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core-bootstrap/src/components/toast/toast.ts#L16)

***

### transition

> **transition**: `TransitionFn`

The transition function will be executed when the alert is displayed or hidden.

Depending on the value of `animatedOnInit`, the animation can be optionally skipped during the showing process.

#### Default Value

`fadeTransition`

#### Overrides

`CoreProps.transition`

#### Defined in

[core-bootstrap/src/components/toast/toast.ts:36](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core-bootstrap/src/components/toast/toast.ts#L36)

***

### visible

> **visible**: `boolean`

If `true` the alert is visible to the user

#### Default Value

`true`

#### Inherited from

`CoreProps.visible`

#### Defined in

[core/src/components/alert/common.ts:23](https://github.com/AmadeusITGroup/AgnosUI/blob/9b50c0b80f05aa282f8ecb391410eca1d7a047c4/core/src/components/alert/common.ts#L23)
