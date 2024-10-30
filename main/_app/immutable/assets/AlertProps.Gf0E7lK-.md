Represents the properties for the alert component.

## Extends

- `CommonAlertProps`

## Properties

### animated

> **animated**: `boolean`

If `true`, alert closing will be animated.

Animation is triggered  when clicked on the close button (×),
via the `.close()` function or the visible prop is changed

#### Default Value

`true`

#### Inherited from

`CommonAlertProps.animated`

#### Defined in

[core/src/components/alert/common.ts:108](https://github.com/AmadeusITGroup/AgnosUI/blob/b5084158fb80710148b0f56305ba18f403a913a3/core/src/components/alert/common.ts#L108)

***

### animatedOnInit

> **animatedOnInit**: `boolean`

If `true`, alert opening will be animated.

Animation is triggered  when the `.open()` function is called
or the visible prop is changed

#### Default Value

`false`

#### Inherited from

`CommonAlertProps.animatedOnInit`

#### Defined in

[core/src/components/alert/common.ts:99](https://github.com/AmadeusITGroup/AgnosUI/blob/b5084158fb80710148b0f56305ba18f403a913a3/core/src/components/alert/common.ts#L99)

***

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `string`

Accessibility close button label

#### Default Value

`'Close'`

#### Inherited from

`CommonAlertProps.ariaCloseButtonLabel`

#### Defined in

[core/src/components/alert/common.ts:32](https://github.com/AmadeusITGroup/AgnosUI/blob/b5084158fb80710148b0f56305ba18f403a913a3/core/src/components/alert/common.ts#L32)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CommonAlertProps.className`

#### Defined in

[core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/b5084158fb80710148b0f56305ba18f403a913a3/core/src/components/commonProps.ts#L10)

***

### dismissible

> **dismissible**: `boolean`

If `true`, alert can be dismissed by the user.
The close button (×) will be displayed and you can be notified of the event with the (close) output.

#### Default Value

`true`

#### Inherited from

`CommonAlertProps.dismissible`

#### Defined in

[core/src/components/alert/common.ts:19](https://github.com/AmadeusITGroup/AgnosUI/blob/b5084158fb80710148b0f56305ba18f403a913a3/core/src/components/alert/common.ts#L19)

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

`CommonAlertProps.onHidden`

#### Defined in

[core/src/components/alert/common.ts:67](https://github.com/AmadeusITGroup/AgnosUI/blob/b5084158fb80710148b0f56305ba18f403a913a3/core/src/components/alert/common.ts#L67)

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

`CommonAlertProps.onShown`

#### Defined in

[core/src/components/alert/common.ts:77](https://github.com/AmadeusITGroup/AgnosUI/blob/b5084158fb80710148b0f56305ba18f403a913a3/core/src/components/alert/common.ts#L77)

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

`CommonAlertProps.onVisibleChange`

#### Defined in

[core/src/components/alert/common.ts:57](https://github.com/AmadeusITGroup/AgnosUI/blob/b5084158fb80710148b0f56305ba18f403a913a3/core/src/components/alert/common.ts#L57)

***

### transition

> **transition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

The transition function will be executed when the alert is displayed or hidden.

Depending on the value of `animatedOnInit`, the animation can be optionally skipped during the showing process.

#### Default Value

```ts
async () => {}
```

#### Inherited from

`CommonAlertProps.transition`

#### Defined in

[core/src/components/alert/common.ts:89](https://github.com/AmadeusITGroup/AgnosUI/blob/b5084158fb80710148b0f56305ba18f403a913a3/core/src/components/alert/common.ts#L89)

***

### visible

> **visible**: `boolean`

If `true` the alert is visible to the user

#### Default Value

`true`

#### Inherited from

`CommonAlertProps.visible`

#### Defined in

[core/src/components/alert/common.ts:25](https://github.com/AmadeusITGroup/AgnosUI/blob/b5084158fb80710148b0f56305ba18f403a913a3/core/src/components/alert/common.ts#L25)
