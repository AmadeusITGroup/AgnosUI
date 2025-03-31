Defined in: [core-bootstrap/src/components/toast/toast.ts:38](https://github.com/AmadeusITGroup/AgnosUI/blob/fa99e689700463313172588f6028f9e2e06e86ae/core-bootstrap/src/components/toast/toast.ts#L38)

Represents the state of a Toast component.

## Extends

- `ToastState`.[`ToastExtraProps`](ToastExtraProps.md)

## Properties

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `string`

Defined in: [core/src/components/alert/common.ts:32](https://github.com/AmadeusITGroup/AgnosUI/blob/fa99e689700463313172588f6028f9e2e06e86ae/core/src/components/alert/common.ts#L32)

Accessibility close button label

#### Default Value

`'Close'`

#### Inherited from

`CoreState.ariaCloseButtonLabel`

***

### autoHide

> **autoHide**: `boolean`

Defined in: [core/src/components/toast/toast.ts:16](https://github.com/AmadeusITGroup/AgnosUI/blob/fa99e689700463313172588f6028f9e2e06e86ae/core/src/components/toast/toast.ts#L16)

If `true` automatically hides the toast after the delay.

#### Default Value

`true`

#### Inherited from

`CoreState.autoHide`

***

### children

> **children**: `SlotContent`\<[`ToastContext`](ToastContext.md)\>

Defined in: [core-bootstrap/src/components/toast/toast.ts:28](https://github.com/AmadeusITGroup/AgnosUI/blob/fa99e689700463313172588f6028f9e2e06e86ae/core-bootstrap/src/components/toast/toast.ts#L28)

Template for the toast content

#### Inherited from

[`ToastExtraProps`](ToastExtraProps.md).[`children`](ToastExtraProps.md#children)

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/fa99e689700463313172588f6028f9e2e06e86ae/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreState.className`

***

### delay

> **delay**: `number`

Defined in: [core/src/components/toast/toast.ts:22](https://github.com/AmadeusITGroup/AgnosUI/blob/fa99e689700463313172588f6028f9e2e06e86ae/core/src/components/toast/toast.ts#L22)

Delay in milliseconds before hiding the toast.

#### Default Value

`5000`

#### Inherited from

`CoreState.delay`

***

### dismissible

> **dismissible**: `boolean`

Defined in: [core/src/components/alert/common.ts:19](https://github.com/AmadeusITGroup/AgnosUI/blob/fa99e689700463313172588f6028f9e2e06e86ae/core/src/components/alert/common.ts#L19)

If `true`, alert can be dismissed by the user.
The close button (×) will be displayed and you can be notified of the event with the (close) output.

#### Default Value

`true`

#### Inherited from

`CoreState.dismissible`

***

### header

> **header**: `SlotContent`\<[`ToastContext`](ToastContext.md)\>

Defined in: [core-bootstrap/src/components/toast/toast.ts:32](https://github.com/AmadeusITGroup/AgnosUI/blob/fa99e689700463313172588f6028f9e2e06e86ae/core-bootstrap/src/components/toast/toast.ts#L32)

Header template for the toast component

#### Inherited from

[`ToastExtraProps`](ToastExtraProps.md).[`header`](ToastExtraProps.md#header)

***

### hidden

> **hidden**: `boolean`

Defined in: [core/src/components/alert/common.ts:42](https://github.com/AmadeusITGroup/AgnosUI/blob/fa99e689700463313172588f6028f9e2e06e86ae/core/src/components/alert/common.ts#L42)

Is `true` when the alert is hidden. Compared to `visible`, this is updated after the transition is executed.

#### Inherited from

`CoreState.hidden`

***

### structure

> **structure**: `SlotContent`\<[`ToastContext`](ToastContext.md)\>

Defined in: [core-bootstrap/src/components/toast/toast.ts:24](https://github.com/AmadeusITGroup/AgnosUI/blob/fa99e689700463313172588f6028f9e2e06e86ae/core-bootstrap/src/components/toast/toast.ts#L24)

Global template for the toast component

#### Inherited from

[`ToastExtraProps`](ToastExtraProps.md).[`structure`](ToastExtraProps.md#structure)

***

### visible

> **visible**: `boolean`

Defined in: [core/src/components/alert/common.ts:25](https://github.com/AmadeusITGroup/AgnosUI/blob/fa99e689700463313172588f6028f9e2e06e86ae/core/src/components/alert/common.ts#L25)

If `true` the alert is visible to the user

#### Default Value

`true`

#### Inherited from

`CoreState.visible`
