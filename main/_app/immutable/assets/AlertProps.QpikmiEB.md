Represents the properties for the Alert component.

## Extends

- `AlertProps`.`AlertExtraProps`

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

[core/src/components/alert/common.ts:108](https://github.com/AmadeusITGroup/AgnosUI/blob/a992e01c180f04f64bd54c07bdf23f4c7804ca63/core/src/components/alert/common.ts#L108)

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

[core/src/components/alert/common.ts:99](https://github.com/AmadeusITGroup/AgnosUI/blob/a992e01c180f04f64bd54c07bdf23f4c7804ca63/core/src/components/alert/common.ts#L99)

***

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `string`

Accessibility close button label

#### Default Value

`'Close'`

#### Inherited from

`CoreProps.ariaCloseButtonLabel`

#### Defined in

[core/src/components/alert/common.ts:32](https://github.com/AmadeusITGroup/AgnosUI/blob/a992e01c180f04f64bd54c07bdf23f4c7804ca63/core/src/components/alert/common.ts#L32)

***

### children

> **children**: `SlotContent`\<[`AlertContext`](AlertContext.md)\>

Template for the alert content

#### Inherited from

`AlertExtraProps.children`

#### Defined in

[core-bootstrap/src/components/alert/alert.ts:25](https://github.com/AmadeusITGroup/AgnosUI/blob/a992e01c180f04f64bd54c07bdf23f4c7804ca63/core-bootstrap/src/components/alert/alert.ts#L25)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreProps.className`

#### Defined in

[core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/a992e01c180f04f64bd54c07bdf23f4c7804ca63/core/src/components/commonProps.ts#L10)

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

[core/src/components/alert/common.ts:19](https://github.com/AmadeusITGroup/AgnosUI/blob/a992e01c180f04f64bd54c07bdf23f4c7804ca63/core/src/components/alert/common.ts#L19)

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

[core/src/components/alert/common.ts:67](https://github.com/AmadeusITGroup/AgnosUI/blob/a992e01c180f04f64bd54c07bdf23f4c7804ca63/core/src/components/alert/common.ts#L67)

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

[core/src/components/alert/common.ts:77](https://github.com/AmadeusITGroup/AgnosUI/blob/a992e01c180f04f64bd54c07bdf23f4c7804ca63/core/src/components/alert/common.ts#L77)

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

[core/src/components/alert/common.ts:57](https://github.com/AmadeusITGroup/AgnosUI/blob/a992e01c180f04f64bd54c07bdf23f4c7804ca63/core/src/components/alert/common.ts#L57)

***

### structure

> **structure**: `SlotContent`\<[`AlertContext`](AlertContext.md)\>

Global template for the alert component

#### Inherited from

`AlertExtraProps.structure`

#### Defined in

[core-bootstrap/src/components/alert/alert.ts:21](https://github.com/AmadeusITGroup/AgnosUI/blob/a992e01c180f04f64bd54c07bdf23f4c7804ca63/core-bootstrap/src/components/alert/alert.ts#L21)

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

[core-bootstrap/src/components/alert/alert.ts:49](https://github.com/AmadeusITGroup/AgnosUI/blob/a992e01c180f04f64bd54c07bdf23f4c7804ca63/core-bootstrap/src/components/alert/alert.ts#L49)

***

### type

> **type**: [`BSContextualClass`](../type-aliases/BSContextualClass.md)

Type of the alert, following bootstrap types.

#### Default Value

`'primary'`

#### Inherited from

`AlertExtraProps.type`

#### Defined in

[core-bootstrap/src/components/alert/alert.ts:31](https://github.com/AmadeusITGroup/AgnosUI/blob/a992e01c180f04f64bd54c07bdf23f4c7804ca63/core-bootstrap/src/components/alert/alert.ts#L31)

***

### visible

> **visible**: `boolean`

If `true` the alert is visible to the user

#### Default Value

`true`

#### Inherited from

`CoreProps.visible`

#### Defined in

[core/src/components/alert/common.ts:25](https://github.com/AmadeusITGroup/AgnosUI/blob/a992e01c180f04f64bd54c07bdf23f4c7804ca63/core/src/components/alert/common.ts#L25)
