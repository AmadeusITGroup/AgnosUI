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

[core/src/components/alert/common.ts:100](https://github.com/AmadeusITGroup/AgnosUI/blob/c26e77f8b5cbe496c8a013b3f17362eae88e413b/core/src/components/alert/common.ts#L100)

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

[core/src/components/alert/common.ts:91](https://github.com/AmadeusITGroup/AgnosUI/blob/c26e77f8b5cbe496c8a013b3f17362eae88e413b/core/src/components/alert/common.ts#L91)

***

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `string`

Accessibility close button label

#### Default Value

`'Close'`

#### Inherited from

`CoreProps.ariaCloseButtonLabel`

#### Defined in

[core/src/components/alert/common.ts:30](https://github.com/AmadeusITGroup/AgnosUI/blob/c26e77f8b5cbe496c8a013b3f17362eae88e413b/core/src/components/alert/common.ts#L30)

***

### children

> **children**: `SlotContent`\<[`AlertContext`](../type-aliases/AlertContext.md)\>

Template for the alert content

#### Inherited from

`AlertExtraProps.children`

#### Defined in

[core-bootstrap/src/components/alert/alert.ts:22](https://github.com/AmadeusITGroup/AgnosUI/blob/c26e77f8b5cbe496c8a013b3f17362eae88e413b/core-bootstrap/src/components/alert/alert.ts#L22)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreProps.className`

#### Defined in

[core/src/components/commonProps.ts:7](https://github.com/AmadeusITGroup/AgnosUI/blob/c26e77f8b5cbe496c8a013b3f17362eae88e413b/core/src/components/commonProps.ts#L7)

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

[core/src/components/alert/common.ts:17](https://github.com/AmadeusITGroup/AgnosUI/blob/c26e77f8b5cbe496c8a013b3f17362eae88e413b/core/src/components/alert/common.ts#L17)

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

[core/src/components/alert/common.ts:59](https://github.com/AmadeusITGroup/AgnosUI/blob/c26e77f8b5cbe496c8a013b3f17362eae88e413b/core/src/components/alert/common.ts#L59)

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

[core/src/components/alert/common.ts:69](https://github.com/AmadeusITGroup/AgnosUI/blob/c26e77f8b5cbe496c8a013b3f17362eae88e413b/core/src/components/alert/common.ts#L69)

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

[core/src/components/alert/common.ts:49](https://github.com/AmadeusITGroup/AgnosUI/blob/c26e77f8b5cbe496c8a013b3f17362eae88e413b/core/src/components/alert/common.ts#L49)

***

### structure

> **structure**: `SlotContent`\<[`AlertContext`](../type-aliases/AlertContext.md)\>

Global template for the alert component

#### Inherited from

`AlertExtraProps.structure`

#### Defined in

[core-bootstrap/src/components/alert/alert.ts:18](https://github.com/AmadeusITGroup/AgnosUI/blob/c26e77f8b5cbe496c8a013b3f17362eae88e413b/core-bootstrap/src/components/alert/alert.ts#L18)

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

[core-bootstrap/src/components/alert/alert.ts:40](https://github.com/AmadeusITGroup/AgnosUI/blob/c26e77f8b5cbe496c8a013b3f17362eae88e413b/core-bootstrap/src/components/alert/alert.ts#L40)

***

### type

> **type**: [`BSContextualClass`](../type-aliases/BSContextualClass.md)

Type of the alert, following bootstrap types.

#### Default Value

`'primary'`

#### Inherited from

`AlertExtraProps.type`

#### Defined in

[core-bootstrap/src/components/alert/alert.ts:28](https://github.com/AmadeusITGroup/AgnosUI/blob/c26e77f8b5cbe496c8a013b3f17362eae88e413b/core-bootstrap/src/components/alert/alert.ts#L28)

***

### visible

> **visible**: `boolean`

If `true` the alert is visible to the user

#### Default Value

`true`

#### Inherited from

`CoreProps.visible`

#### Defined in

[core/src/components/alert/common.ts:23](https://github.com/AmadeusITGroup/AgnosUI/blob/c26e77f8b5cbe496c8a013b3f17362eae88e413b/core/src/components/alert/common.ts#L23)
