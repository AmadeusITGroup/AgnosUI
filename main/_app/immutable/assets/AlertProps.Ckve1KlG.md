Defined in: [core-bootstrap/src/components/alert/alert.ts:41](https://github.com/AmadeusITGroup/AgnosUI/blob/32a5062b1826139f3ec718b694cab15831087972/core-bootstrap/src/components/alert/alert.ts#L41)

Represents the properties for the Alert component.

## Extends

- `AlertProps`.`AlertExtraProps`

## Properties

### animated

> **animated**: `boolean`

Defined in: [core/src/components/alert/common.ts:108](https://github.com/AmadeusITGroup/AgnosUI/blob/32a5062b1826139f3ec718b694cab15831087972/core/src/components/alert/common.ts#L108)

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

Defined in: [core/src/components/alert/common.ts:99](https://github.com/AmadeusITGroup/AgnosUI/blob/32a5062b1826139f3ec718b694cab15831087972/core/src/components/alert/common.ts#L99)

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

Defined in: [core/src/components/alert/common.ts:32](https://github.com/AmadeusITGroup/AgnosUI/blob/32a5062b1826139f3ec718b694cab15831087972/core/src/components/alert/common.ts#L32)

Accessibility close button label

#### Default Value

`'Close'`

#### Inherited from

`CoreProps.ariaCloseButtonLabel`

***

### children

> **children**: `SlotContent`\<[`AlertContext`](AlertContext.md)\>

Defined in: [core-bootstrap/src/components/alert/alert.ts:25](https://github.com/AmadeusITGroup/AgnosUI/blob/32a5062b1826139f3ec718b694cab15831087972/core-bootstrap/src/components/alert/alert.ts#L25)

Template for the alert content

#### Inherited from

`AlertExtraProps.children`

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/32a5062b1826139f3ec718b694cab15831087972/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreProps.className`

***

### dismissible

> **dismissible**: `boolean`

Defined in: [core/src/components/alert/common.ts:19](https://github.com/AmadeusITGroup/AgnosUI/blob/32a5062b1826139f3ec718b694cab15831087972/core/src/components/alert/common.ts#L19)

If `true`, alert can be dismissed by the user.
The close button (×) will be displayed and you can be notified of the event with the (close) output.

#### Default Value

`true`

#### Inherited from

`CoreProps.dismissible`

***

### onHidden()

> **onHidden**: () => `void`

Defined in: [core/src/components/alert/common.ts:67](https://github.com/AmadeusITGroup/AgnosUI/blob/32a5062b1826139f3ec718b694cab15831087972/core/src/components/alert/common.ts#L67)

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

Defined in: [core/src/components/alert/common.ts:77](https://github.com/AmadeusITGroup/AgnosUI/blob/32a5062b1826139f3ec718b694cab15831087972/core/src/components/alert/common.ts#L77)

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

Defined in: [core/src/components/alert/common.ts:57](https://github.com/AmadeusITGroup/AgnosUI/blob/32a5062b1826139f3ec718b694cab15831087972/core/src/components/alert/common.ts#L57)

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

> **structure**: `SlotContent`\<[`AlertContext`](AlertContext.md)\>

Defined in: [core-bootstrap/src/components/alert/alert.ts:21](https://github.com/AmadeusITGroup/AgnosUI/blob/32a5062b1826139f3ec718b694cab15831087972/core-bootstrap/src/components/alert/alert.ts#L21)

Global template for the alert component

#### Inherited from

`AlertExtraProps.structure`

***

### transition

> **transition**: `TransitionFn`

Defined in: [core-bootstrap/src/components/alert/alert.ts:49](https://github.com/AmadeusITGroup/AgnosUI/blob/32a5062b1826139f3ec718b694cab15831087972/core-bootstrap/src/components/alert/alert.ts#L49)

The transition function will be executed when the alert is displayed or hidden.

Depending on the value of `animatedOnInit`, the animation can be optionally skipped during the showing process.

#### Default Value

`fadeTransition`

#### Overrides

`CoreProps.transition`

***

### type

> **type**: [`BSContextualClass`](../type-aliases/BSContextualClass.md)

Defined in: [core-bootstrap/src/components/alert/alert.ts:31](https://github.com/AmadeusITGroup/AgnosUI/blob/32a5062b1826139f3ec718b694cab15831087972/core-bootstrap/src/components/alert/alert.ts#L31)

Type of the alert, following bootstrap types.

#### Default Value

`'primary'`

#### Inherited from

`AlertExtraProps.type`

***

### visible

> **visible**: `boolean`

Defined in: [core/src/components/alert/common.ts:25](https://github.com/AmadeusITGroup/AgnosUI/blob/32a5062b1826139f3ec718b694cab15831087972/core/src/components/alert/common.ts#L25)

If `true` the alert is visible to the user

#### Default Value

`true`

#### Inherited from

`CoreProps.visible`
