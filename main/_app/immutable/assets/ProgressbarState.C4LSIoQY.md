## Extends

- `ProgressbarState`.`ProgressbarExtraProps`

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

[core-bootstrap/src/components/progressbar/progressbar.ts:39](https://github.com/AmadeusITGroup/AgnosUI/blob/71c22ea4d85011350f98ddbf320911e81bd7c93f/core-bootstrap/src/components/progressbar/progressbar.ts#L39)

***

### ariaLabel

> **ariaLabel**: `string`

The aria label.

#### Default Value

`'Progressbar'`

#### Inherited from

`CoreState.ariaLabel`

#### Defined in

[core/src/components/progressbar/progressbar.ts:33](https://github.com/AmadeusITGroup/AgnosUI/blob/71c22ea4d85011350f98ddbf320911e81bd7c93f/core/src/components/progressbar/progressbar.ts#L33)

***

### ariaValueText

> **ariaValueText**: `undefined` \| `string`

The aria value text.

#### Inherited from

`CoreState.ariaValueText`

#### Defined in

[core/src/components/progressbar/progressbar.ts:59](https://github.com/AmadeusITGroup/AgnosUI/blob/71c22ea4d85011350f98ddbf320911e81bd7c93f/core/src/components/progressbar/progressbar.ts#L59)

***

### children

> **children**: `SlotContent`\<[`ProgressbarContext`](../type-aliases/ProgressbarContext.md)\>

Label of the progress.

#### Inherited from

`ProgressbarExtraProps.children`

#### Defined in

[core-bootstrap/src/components/progressbar/progressbar.ts:20](https://github.com/AmadeusITGroup/AgnosUI/blob/71c22ea4d85011350f98ddbf320911e81bd7c93f/core-bootstrap/src/components/progressbar/progressbar.ts#L20)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreState.className`

#### Defined in

[core/src/components/commonProps.ts:7](https://github.com/AmadeusITGroup/AgnosUI/blob/71c22ea4d85011350f98ddbf320911e81bd7c93f/core/src/components/commonProps.ts#L7)

***

### finished

> **finished**: `boolean`

`true` if the value has reached its maximum value.

#### Inherited from

`CoreState.finished`

#### Defined in

[core/src/components/progressbar/progressbar.ts:55](https://github.com/AmadeusITGroup/AgnosUI/blob/71c22ea4d85011350f98ddbf320911e81bd7c93f/core/src/components/progressbar/progressbar.ts#L55)

***

### height

> **height**: `string`

Height of the progressbar, can be any valid css height value.

#### Default Value

`''`

#### Inherited from

`ProgressbarExtraProps.height`

#### Defined in

[core-bootstrap/src/components/progressbar/progressbar.ts:26](https://github.com/AmadeusITGroup/AgnosUI/blob/71c22ea4d85011350f98ddbf320911e81bd7c93f/core-bootstrap/src/components/progressbar/progressbar.ts#L26)

***

### max

> **max**: `number`

The maximum value.

#### Default Value

`100`

#### Inherited from

`CoreState.max`

#### Defined in

[core/src/components/progressbar/progressbar.ts:21](https://github.com/AmadeusITGroup/AgnosUI/blob/71c22ea4d85011350f98ddbf320911e81bd7c93f/core/src/components/progressbar/progressbar.ts#L21)

***

### min

> **min**: `number`

The minimum value.

#### Default Value

`0`

#### Inherited from

`CoreState.min`

#### Defined in

[core/src/components/progressbar/progressbar.ts:15](https://github.com/AmadeusITGroup/AgnosUI/blob/71c22ea4d85011350f98ddbf320911e81bd7c93f/core/src/components/progressbar/progressbar.ts#L15)

***

### percentage

> **percentage**: `number`

Percentage of completion.

#### Inherited from

`CoreState.percentage`

#### Defined in

[core/src/components/progressbar/progressbar.ts:47](https://github.com/AmadeusITGroup/AgnosUI/blob/71c22ea4d85011350f98ddbf320911e81bd7c93f/core/src/components/progressbar/progressbar.ts#L47)

***

### started

> **started**: `boolean`

`true` if the value is above its minimum value.

#### Inherited from

`CoreState.started`

#### Defined in

[core/src/components/progressbar/progressbar.ts:51](https://github.com/AmadeusITGroup/AgnosUI/blob/71c22ea4d85011350f98ddbf320911e81bd7c93f/core/src/components/progressbar/progressbar.ts#L51)

***

### striped

> **striped**: `boolean`

If `true`, shows a striped progressbar.

#### Default Value

`false`

#### Inherited from

`ProgressbarExtraProps.striped`

#### Defined in

[core-bootstrap/src/components/progressbar/progressbar.ts:32](https://github.com/AmadeusITGroup/AgnosUI/blob/71c22ea4d85011350f98ddbf320911e81bd7c93f/core-bootstrap/src/components/progressbar/progressbar.ts#L32)

***

### structure

> **structure**: `SlotContent`\<[`ProgressbarContext`](../type-aliases/ProgressbarContext.md)\>

Global template for the Progressbar.

#### Inherited from

`ProgressbarExtraProps.structure`

#### Defined in

[core-bootstrap/src/components/progressbar/progressbar.ts:16](https://github.com/AmadeusITGroup/AgnosUI/blob/71c22ea4d85011350f98ddbf320911e81bd7c93f/core-bootstrap/src/components/progressbar/progressbar.ts#L16)

***

### type

> **type**: `undefined` \| [`BSContextualClass`](../type-aliases/BSContextualClass.md)

Type of the progressbar, following bootstrap types.

#### Inherited from

`ProgressbarExtraProps.type`

#### Defined in

[core-bootstrap/src/components/progressbar/progressbar.ts:43](https://github.com/AmadeusITGroup/AgnosUI/blob/71c22ea4d85011350f98ddbf320911e81bd7c93f/core-bootstrap/src/components/progressbar/progressbar.ts#L43)

***

### value

> **value**: `number`

The current value.

#### Default Value

`0`

#### Inherited from

`CoreState.value`

#### Defined in

[core/src/components/progressbar/progressbar.ts:27](https://github.com/AmadeusITGroup/AgnosUI/blob/71c22ea4d85011350f98ddbf320911e81bd7c93f/core/src/components/progressbar/progressbar.ts#L27)
