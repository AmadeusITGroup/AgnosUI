Defined in: [core-bootstrap/src/components/progressbar/progressbar.ts:53](https://github.com/AmadeusITGroup/AgnosUI/blob/d72caf2a95117b1e2cafdfdfad44e2bfc2de3a30/core-bootstrap/src/components/progressbar/progressbar.ts#L53)

Represents the state of a Progressbar component.

## Extends

- `ProgressbarState`.`ProgressbarExtraProps`

## Properties

### animated

> **animated**: `boolean`

Defined in: [core-bootstrap/src/components/progressbar/progressbar.ts:43](https://github.com/AmadeusITGroup/AgnosUI/blob/d72caf2a95117b1e2cafdfdfad44e2bfc2de3a30/core-bootstrap/src/components/progressbar/progressbar.ts#L43)

If `true`, animates a striped progressbar.
Takes effect only for browsers supporting CSS3 animations, and if `striped` is `true`.

#### Default Value

`false`

#### Inherited from

`ProgressbarExtraProps.animated`

***

### ariaLabel

> **ariaLabel**: `string`

Defined in: [core/src/components/progressbar/progressbar.ts:33](https://github.com/AmadeusITGroup/AgnosUI/blob/d72caf2a95117b1e2cafdfdfad44e2bfc2de3a30/core/src/components/progressbar/progressbar.ts#L33)

The aria label.

#### Default Value

`'Progressbar'`

#### Inherited from

`CoreState.ariaLabel`

***

### ariaValueText

> **ariaValueText**: `undefined` \| `string`

Defined in: [core/src/components/progressbar/progressbar.ts:65](https://github.com/AmadeusITGroup/AgnosUI/blob/d72caf2a95117b1e2cafdfdfad44e2bfc2de3a30/core/src/components/progressbar/progressbar.ts#L65)

The aria value text.

#### Inherited from

`CoreState.ariaValueText`

***

### children

> **children**: `SlotContent`\<[`ProgressbarContext`](ProgressbarContext.md)\>

Defined in: [core-bootstrap/src/components/progressbar/progressbar.ts:24](https://github.com/AmadeusITGroup/AgnosUI/blob/d72caf2a95117b1e2cafdfdfad44e2bfc2de3a30/core-bootstrap/src/components/progressbar/progressbar.ts#L24)

Label of the progress.

#### Inherited from

`ProgressbarExtraProps.children`

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/d72caf2a95117b1e2cafdfdfad44e2bfc2de3a30/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreState.className`

***

### finished

> **finished**: `boolean`

Defined in: [core/src/components/progressbar/progressbar.ts:61](https://github.com/AmadeusITGroup/AgnosUI/blob/d72caf2a95117b1e2cafdfdfad44e2bfc2de3a30/core/src/components/progressbar/progressbar.ts#L61)

`true` if the value has reached its maximum value.

#### Inherited from

`CoreState.finished`

***

### height

> **height**: `string`

Defined in: [core-bootstrap/src/components/progressbar/progressbar.ts:30](https://github.com/AmadeusITGroup/AgnosUI/blob/d72caf2a95117b1e2cafdfdfad44e2bfc2de3a30/core-bootstrap/src/components/progressbar/progressbar.ts#L30)

Height of the progressbar, can be any valid css height value.

#### Default Value

`''`

#### Inherited from

`ProgressbarExtraProps.height`

***

### max

> **max**: `number`

Defined in: [core/src/components/progressbar/progressbar.ts:21](https://github.com/AmadeusITGroup/AgnosUI/blob/d72caf2a95117b1e2cafdfdfad44e2bfc2de3a30/core/src/components/progressbar/progressbar.ts#L21)

The maximum value.

#### Default Value

`100`

#### Inherited from

`CoreState.max`

***

### min

> **min**: `number`

Defined in: [core/src/components/progressbar/progressbar.ts:15](https://github.com/AmadeusITGroup/AgnosUI/blob/d72caf2a95117b1e2cafdfdfad44e2bfc2de3a30/core/src/components/progressbar/progressbar.ts#L15)

The minimum value.

#### Default Value

`0`

#### Inherited from

`CoreState.min`

***

### percentage

> **percentage**: `number`

Defined in: [core/src/components/progressbar/progressbar.ts:53](https://github.com/AmadeusITGroup/AgnosUI/blob/d72caf2a95117b1e2cafdfdfad44e2bfc2de3a30/core/src/components/progressbar/progressbar.ts#L53)

Percentage of completion.

#### Inherited from

`CoreState.percentage`

***

### started

> **started**: `boolean`

Defined in: [core/src/components/progressbar/progressbar.ts:57](https://github.com/AmadeusITGroup/AgnosUI/blob/d72caf2a95117b1e2cafdfdfad44e2bfc2de3a30/core/src/components/progressbar/progressbar.ts#L57)

`true` if the value is above its minimum value.

#### Inherited from

`CoreState.started`

***

### striped

> **striped**: `boolean`

Defined in: [core-bootstrap/src/components/progressbar/progressbar.ts:36](https://github.com/AmadeusITGroup/AgnosUI/blob/d72caf2a95117b1e2cafdfdfad44e2bfc2de3a30/core-bootstrap/src/components/progressbar/progressbar.ts#L36)

If `true`, shows a striped progressbar.

#### Default Value

`false`

#### Inherited from

`ProgressbarExtraProps.striped`

***

### structure

> **structure**: `SlotContent`\<[`ProgressbarContext`](ProgressbarContext.md)\>

Defined in: [core-bootstrap/src/components/progressbar/progressbar.ts:20](https://github.com/AmadeusITGroup/AgnosUI/blob/d72caf2a95117b1e2cafdfdfad44e2bfc2de3a30/core-bootstrap/src/components/progressbar/progressbar.ts#L20)

Global template for the Progressbar.

#### Inherited from

`ProgressbarExtraProps.structure`

***

### type

> **type**: `undefined` \| [`BSContextualClass`](../type-aliases/BSContextualClass.md)

Defined in: [core-bootstrap/src/components/progressbar/progressbar.ts:47](https://github.com/AmadeusITGroup/AgnosUI/blob/d72caf2a95117b1e2cafdfdfad44e2bfc2de3a30/core-bootstrap/src/components/progressbar/progressbar.ts#L47)

Type of the progressbar, following bootstrap types.

#### Inherited from

`ProgressbarExtraProps.type`

***

### value

> **value**: `number`

Defined in: [core/src/components/progressbar/progressbar.ts:27](https://github.com/AmadeusITGroup/AgnosUI/blob/d72caf2a95117b1e2cafdfdfad44e2bfc2de3a30/core/src/components/progressbar/progressbar.ts#L27)

The current value.

#### Default Value

`0`

#### Inherited from

`CoreState.value`
