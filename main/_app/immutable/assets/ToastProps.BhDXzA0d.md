Defined in: [core/src/components/toast/toast.ts:47](https://github.com/AmadeusITGroup/AgnosUI/blob/fdb90ff93bbec58297e1fd11128040c54b955b05/core/src/components/toast/toast.ts#L47)

Represents the properties for the toast component.

## Extends

- `CommonAlertProps`.`ToastExtraProps`

## Properties

### animated

> **animated**: `boolean`

Defined in: [core/src/components/alert/common.ts:108](https://github.com/AmadeusITGroup/AgnosUI/blob/fdb90ff93bbec58297e1fd11128040c54b955b05/core/src/components/alert/common.ts#L108)

If `true`, alert closing will be animated.

Animation is triggered  when clicked on the close button (×),
via the `.close()` function or the visible prop is changed

#### Default Value

`true`

#### Inherited from

`CommonAlertProps.animated`

***

### animatedOnInit

> **animatedOnInit**: `boolean`

Defined in: [core/src/components/alert/common.ts:99](https://github.com/AmadeusITGroup/AgnosUI/blob/fdb90ff93bbec58297e1fd11128040c54b955b05/core/src/components/alert/common.ts#L99)

If `true`, alert opening will be animated.

Animation is triggered  when the `.open()` function is called
or the visible prop is changed

#### Default Value

`false`

#### Inherited from

`CommonAlertProps.animatedOnInit`

***

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `string`

Defined in: [core/src/components/alert/common.ts:32](https://github.com/AmadeusITGroup/AgnosUI/blob/fdb90ff93bbec58297e1fd11128040c54b955b05/core/src/components/alert/common.ts#L32)

Accessibility close button label

#### Default Value

`'Close'`

#### Inherited from

`CommonAlertProps.ariaCloseButtonLabel`

***

### autoHide

> **autoHide**: `boolean`

Defined in: [core/src/components/toast/toast.ts:15](https://github.com/AmadeusITGroup/AgnosUI/blob/fdb90ff93bbec58297e1fd11128040c54b955b05/core/src/components/toast/toast.ts#L15)

If `true` automatically hides the toast after the delay.

#### Default Value

`true`

#### Inherited from

`ToastExtraProps.autoHide`

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/fdb90ff93bbec58297e1fd11128040c54b955b05/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CommonAlertProps.className`

***

### delay

> **delay**: `number`

Defined in: [core/src/components/toast/toast.ts:21](https://github.com/AmadeusITGroup/AgnosUI/blob/fdb90ff93bbec58297e1fd11128040c54b955b05/core/src/components/toast/toast.ts#L21)

Delay in milliseconds before hiding the toast.

#### Default Value

`5000`

#### Inherited from

`ToastExtraProps.delay`

***

### dismissible

> **dismissible**: `boolean`

Defined in: [core/src/components/alert/common.ts:19](https://github.com/AmadeusITGroup/AgnosUI/blob/fdb90ff93bbec58297e1fd11128040c54b955b05/core/src/components/alert/common.ts#L19)

If `true`, alert can be dismissed by the user.
The close button (×) will be displayed and you can be notified of the event with the (close) output.

#### Default Value

`true`

#### Inherited from

`CommonAlertProps.dismissible`

***

### onHidden()

> **onHidden**: () => `void`

Defined in: [core/src/components/alert/common.ts:67](https://github.com/AmadeusITGroup/AgnosUI/blob/fdb90ff93bbec58297e1fd11128040c54b955b05/core/src/components/alert/common.ts#L67)

Callback called when the alert is hidden.

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Inherited from

`CommonAlertProps.onHidden`

***

### onShown()

> **onShown**: () => `void`

Defined in: [core/src/components/alert/common.ts:77](https://github.com/AmadeusITGroup/AgnosUI/blob/fdb90ff93bbec58297e1fd11128040c54b955b05/core/src/components/alert/common.ts#L77)

Callback called when the alert is shown.

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Inherited from

`CommonAlertProps.onShown`

***

### onVisibleChange()

> **onVisibleChange**: (`visible`) => `void`

Defined in: [core/src/components/alert/common.ts:57](https://github.com/AmadeusITGroup/AgnosUI/blob/fdb90ff93bbec58297e1fd11128040c54b955b05/core/src/components/alert/common.ts#L57)

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

`CommonAlertProps.onVisibleChange`

***

### transition

> **transition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: [core/src/components/alert/common.ts:89](https://github.com/AmadeusITGroup/AgnosUI/blob/fdb90ff93bbec58297e1fd11128040c54b955b05/core/src/components/alert/common.ts#L89)

The transition function will be executed when the alert is displayed or hidden.

Depending on the value of `animatedOnInit`, the animation can be optionally skipped during the showing process.

#### Default Value

```ts
async () => {}
```

#### Inherited from

`CommonAlertProps.transition`

***

### visible

> **visible**: `boolean`

Defined in: [core/src/components/alert/common.ts:25](https://github.com/AmadeusITGroup/AgnosUI/blob/fdb90ff93bbec58297e1fd11128040c54b955b05/core/src/components/alert/common.ts#L25)

If `true` the alert is visible to the user

#### Default Value

`true`

#### Inherited from

`CommonAlertProps.visible`
