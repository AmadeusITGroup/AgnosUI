Represents the state of a Progressbar component.

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

[core-bootstrap/src/components/progressbar/progressbar.ts:43](https://github.com/AmadeusITGroup/AgnosUI/blob/afe3e2be22bd6b1cf4293c91ff1a25bfd2725ec6/core-bootstrap/src/components/progressbar/progressbar.ts#L43)

***

### ariaLabel

> **ariaLabel**: `string`

The aria label.

#### Default Value

`'Progressbar'`

#### Inherited from

`CoreState.ariaLabel`

#### Defined in

[core/src/components/progressbar/progressbar.ts:33](https://github.com/AmadeusITGroup/AgnosUI/blob/afe3e2be22bd6b1cf4293c91ff1a25bfd2725ec6/core/src/components/progressbar/progressbar.ts#L33)

***

### ariaValueText

> **ariaValueText**: `undefined` \| `string`

The aria value text.

#### Inherited from

`CoreState.ariaValueText`

#### Defined in

[core/src/components/progressbar/progressbar.ts:65](https://github.com/AmadeusITGroup/AgnosUI/blob/afe3e2be22bd6b1cf4293c91ff1a25bfd2725ec6/core/src/components/progressbar/progressbar.ts#L65)

***

### children

> **children**: `SlotContent`\<[`ProgressbarContext`](ProgressbarContext.md)\>

Label of the progress.

#### Inherited from

`ProgressbarExtraProps.children`

#### Defined in

[core-bootstrap/src/components/progressbar/progressbar.ts:24](https://github.com/AmadeusITGroup/AgnosUI/blob/afe3e2be22bd6b1cf4293c91ff1a25bfd2725ec6/core-bootstrap/src/components/progressbar/progressbar.ts#L24)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreState.className`

#### Defined in

[core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/afe3e2be22bd6b1cf4293c91ff1a25bfd2725ec6/core/src/components/commonProps.ts#L10)

***

### finished

> **finished**: `boolean`

`true` if the value has reached its maximum value.

#### Inherited from

`CoreState.finished`

#### Defined in

[core/src/components/progressbar/progressbar.ts:61](https://github.com/AmadeusITGroup/AgnosUI/blob/afe3e2be22bd6b1cf4293c91ff1a25bfd2725ec6/core/src/components/progressbar/progressbar.ts#L61)

***

### height

> **height**: `string`

Height of the progressbar, can be any valid css height value.

#### Default Value

`''`

#### Inherited from

`ProgressbarExtraProps.height`

#### Defined in

[core-bootstrap/src/components/progressbar/progressbar.ts:30](https://github.com/AmadeusITGroup/AgnosUI/blob/afe3e2be22bd6b1cf4293c91ff1a25bfd2725ec6/core-bootstrap/src/components/progressbar/progressbar.ts#L30)

***

### max

> **max**: `number`

The maximum value.

#### Default Value

`100`

#### Inherited from

`CoreState.max`

#### Defined in

[core/src/components/progressbar/progressbar.ts:21](https://github.com/AmadeusITGroup/AgnosUI/blob/afe3e2be22bd6b1cf4293c91ff1a25bfd2725ec6/core/src/components/progressbar/progressbar.ts#L21)

***

### min

> **min**: `number`

The minimum value.

#### Default Value

`0`

#### Inherited from

`CoreState.min`

#### Defined in

[core/src/components/progressbar/progressbar.ts:15](https://github.com/AmadeusITGroup/AgnosUI/blob/afe3e2be22bd6b1cf4293c91ff1a25bfd2725ec6/core/src/components/progressbar/progressbar.ts#L15)

***

### percentage

> **percentage**: `number`

Percentage of completion.

#### Inherited from

`CoreState.percentage`

#### Defined in

[core/src/components/progressbar/progressbar.ts:53](https://github.com/AmadeusITGroup/AgnosUI/blob/afe3e2be22bd6b1cf4293c91ff1a25bfd2725ec6/core/src/components/progressbar/progressbar.ts#L53)

***

### started

> **started**: `boolean`

`true` if the value is above its minimum value.

#### Inherited from

`CoreState.started`

#### Defined in

[core/src/components/progressbar/progressbar.ts:57](https://github.com/AmadeusITGroup/AgnosUI/blob/afe3e2be22bd6b1cf4293c91ff1a25bfd2725ec6/core/src/components/progressbar/progressbar.ts#L57)

***

### striped

> **striped**: `boolean`

If `true`, shows a striped progressbar.

#### Default Value

`false`

#### Inherited from

`ProgressbarExtraProps.striped`

#### Defined in

[core-bootstrap/src/components/progressbar/progressbar.ts:36](https://github.com/AmadeusITGroup/AgnosUI/blob/afe3e2be22bd6b1cf4293c91ff1a25bfd2725ec6/core-bootstrap/src/components/progressbar/progressbar.ts#L36)

***

### structure

> **structure**: `SlotContent`\<[`ProgressbarContext`](ProgressbarContext.md)\>

Global template for the Progressbar.

#### Inherited from

`ProgressbarExtraProps.structure`

#### Defined in

[core-bootstrap/src/components/progressbar/progressbar.ts:20](https://github.com/AmadeusITGroup/AgnosUI/blob/afe3e2be22bd6b1cf4293c91ff1a25bfd2725ec6/core-bootstrap/src/components/progressbar/progressbar.ts#L20)

***

### type

> **type**: `undefined` \| [`BSContextualClass`](../type-aliases/BSContextualClass.md)

Type of the progressbar, following bootstrap types.

#### Inherited from

`ProgressbarExtraProps.type`

#### Defined in

[core-bootstrap/src/components/progressbar/progressbar.ts:47](https://github.com/AmadeusITGroup/AgnosUI/blob/afe3e2be22bd6b1cf4293c91ff1a25bfd2725ec6/core-bootstrap/src/components/progressbar/progressbar.ts#L47)

***

### value

> **value**: `number`

The current value.

#### Default Value

`0`

#### Inherited from

`CoreState.value`

#### Defined in

[core/src/components/progressbar/progressbar.ts:27](https://github.com/AmadeusITGroup/AgnosUI/blob/afe3e2be22bd6b1cf4293c91ff1a25bfd2725ec6/core/src/components/progressbar/progressbar.ts#L27)
