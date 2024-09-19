## Extends

- `ProgressbarProps`.`ProgressbarExtraProps`

## Properties

### animated

> **animated**: `boolean`

If `true`, animates a striped progressbar.
Takes effect only for browsers supporting CSS3 animations, and if `striped` is `true`.

#### Default Value

`false`

#### Inherited from

`ProgressbarExtraProps.animated`

#### Defined in

[core-bootstrap/src/components/progressbar/progressbar.ts:39](https://github.com/AmadeusITGroup/AgnosUI/blob/32816da8e43862961b3fe8ffad65e5c671f5e555/core-bootstrap/src/components/progressbar/progressbar.ts#L39)

***

### ariaLabel

> **ariaLabel**: `string`

The aria label.

#### Default Value

`'Progressbar'`

#### Inherited from

`CoreProps.ariaLabel`

#### Defined in

[core/src/components/progressbar/progressbar.ts:33](https://github.com/AmadeusITGroup/AgnosUI/blob/32816da8e43862961b3fe8ffad65e5c671f5e555/core/src/components/progressbar/progressbar.ts#L33)

***

### ariaValueTextFn()

> **ariaValueTextFn**: (`value`, `minimum`, `maximum`) => `undefined` \| `string`

Return the value for the 'aria-valuetext' attribute.

#### Parameters

• **value**: `number`

current value

• **minimum**: `number`

minimum value

• **maximum**: `number`

maximum value

#### Returns

`undefined` \| `string`

#### Default Value

```ts
() => undefined
```

#### Inherited from

`CoreProps.ariaValueTextFn`

#### Defined in

[core/src/components/progressbar/progressbar.ts:74](https://github.com/AmadeusITGroup/AgnosUI/blob/32816da8e43862961b3fe8ffad65e5c671f5e555/core/src/components/progressbar/progressbar.ts#L74)

***

### children

> **children**: `SlotContent`\<[`ProgressbarContext`](../type-aliases/ProgressbarContext.md)\>

Label of the progress.

#### Inherited from

`ProgressbarExtraProps.children`

#### Defined in

[core-bootstrap/src/components/progressbar/progressbar.ts:20](https://github.com/AmadeusITGroup/AgnosUI/blob/32816da8e43862961b3fe8ffad65e5c671f5e555/core-bootstrap/src/components/progressbar/progressbar.ts#L20)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreProps.className`

#### Defined in

[core/src/components/commonProps.ts:7](https://github.com/AmadeusITGroup/AgnosUI/blob/32816da8e43862961b3fe8ffad65e5c671f5e555/core/src/components/commonProps.ts#L7)

***

### height

> **height**: `string`

Height of the progressbar, can be any valid css height value.

#### Default Value

`''`

#### Inherited from

`ProgressbarExtraProps.height`

#### Defined in

[core-bootstrap/src/components/progressbar/progressbar.ts:26](https://github.com/AmadeusITGroup/AgnosUI/blob/32816da8e43862961b3fe8ffad65e5c671f5e555/core-bootstrap/src/components/progressbar/progressbar.ts#L26)

***

### max

> **max**: `number`

The maximum value.

#### Default Value

`100`

#### Inherited from

`CoreProps.max`

#### Defined in

[core/src/components/progressbar/progressbar.ts:21](https://github.com/AmadeusITGroup/AgnosUI/blob/32816da8e43862961b3fe8ffad65e5c671f5e555/core/src/components/progressbar/progressbar.ts#L21)

***

### min

> **min**: `number`

The minimum value.

#### Default Value

`0`

#### Inherited from

`CoreProps.min`

#### Defined in

[core/src/components/progressbar/progressbar.ts:15](https://github.com/AmadeusITGroup/AgnosUI/blob/32816da8e43862961b3fe8ffad65e5c671f5e555/core/src/components/progressbar/progressbar.ts#L15)

***

### striped

> **striped**: `boolean`

If `true`, shows a striped progressbar.

#### Default Value

`false`

#### Inherited from

`ProgressbarExtraProps.striped`

#### Defined in

[core-bootstrap/src/components/progressbar/progressbar.ts:32](https://github.com/AmadeusITGroup/AgnosUI/blob/32816da8e43862961b3fe8ffad65e5c671f5e555/core-bootstrap/src/components/progressbar/progressbar.ts#L32)

***

### structure

> **structure**: `SlotContent`\<[`ProgressbarContext`](../type-aliases/ProgressbarContext.md)\>

Global template for the Progressbar.

#### Inherited from

`ProgressbarExtraProps.structure`

#### Defined in

[core-bootstrap/src/components/progressbar/progressbar.ts:16](https://github.com/AmadeusITGroup/AgnosUI/blob/32816da8e43862961b3fe8ffad65e5c671f5e555/core-bootstrap/src/components/progressbar/progressbar.ts#L16)

***

### type

> **type**: `undefined` \| [`BSContextualClass`](../type-aliases/BSContextualClass.md)

Type of the progressbar, following bootstrap types.

#### Inherited from

`ProgressbarExtraProps.type`

#### Defined in

[core-bootstrap/src/components/progressbar/progressbar.ts:43](https://github.com/AmadeusITGroup/AgnosUI/blob/32816da8e43862961b3fe8ffad65e5c671f5e555/core-bootstrap/src/components/progressbar/progressbar.ts#L43)

***

### value

> **value**: `number`

The current value.

#### Default Value

`0`

#### Inherited from

`CoreProps.value`

#### Defined in

[core/src/components/progressbar/progressbar.ts:27](https://github.com/AmadeusITGroup/AgnosUI/blob/32816da8e43862961b3fe8ffad65e5c671f5e555/core/src/components/progressbar/progressbar.ts#L27)
