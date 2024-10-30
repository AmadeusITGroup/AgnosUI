Interface representing the properties for the Progressbar component.

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

[core-bootstrap/src/components/progressbar/progressbar.ts:43](https://github.com/AmadeusITGroup/AgnosUI/blob/4f987062ba159530bb40c83d5cc69de4a10ec41c/core-bootstrap/src/components/progressbar/progressbar.ts#L43)

***

### ariaLabel

> **ariaLabel**: `string`

The aria label.

#### Default Value

`'Progressbar'`

#### Inherited from

`CoreProps.ariaLabel`

#### Defined in

[core/src/components/progressbar/progressbar.ts:33](https://github.com/AmadeusITGroup/AgnosUI/blob/4f987062ba159530bb40c83d5cc69de4a10ec41c/core/src/components/progressbar/progressbar.ts#L33)

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

[core/src/components/progressbar/progressbar.ts:83](https://github.com/AmadeusITGroup/AgnosUI/blob/4f987062ba159530bb40c83d5cc69de4a10ec41c/core/src/components/progressbar/progressbar.ts#L83)

***

### children

> **children**: `SlotContent`\<[`ProgressbarContext`](ProgressbarContext.md)\>

Label of the progress.

#### Inherited from

`ProgressbarExtraProps.children`

#### Defined in

[core-bootstrap/src/components/progressbar/progressbar.ts:24](https://github.com/AmadeusITGroup/AgnosUI/blob/4f987062ba159530bb40c83d5cc69de4a10ec41c/core-bootstrap/src/components/progressbar/progressbar.ts#L24)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreProps.className`

#### Defined in

[core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/4f987062ba159530bb40c83d5cc69de4a10ec41c/core/src/components/commonProps.ts#L10)

***

### height

> **height**: `string`

Height of the progressbar, can be any valid css height value.

#### Default Value

`''`

#### Inherited from

`ProgressbarExtraProps.height`

#### Defined in

[core-bootstrap/src/components/progressbar/progressbar.ts:30](https://github.com/AmadeusITGroup/AgnosUI/blob/4f987062ba159530bb40c83d5cc69de4a10ec41c/core-bootstrap/src/components/progressbar/progressbar.ts#L30)

***

### max

> **max**: `number`

The maximum value.

#### Default Value

`100`

#### Inherited from

`CoreProps.max`

#### Defined in

[core/src/components/progressbar/progressbar.ts:21](https://github.com/AmadeusITGroup/AgnosUI/blob/4f987062ba159530bb40c83d5cc69de4a10ec41c/core/src/components/progressbar/progressbar.ts#L21)

***

### min

> **min**: `number`

The minimum value.

#### Default Value

`0`

#### Inherited from

`CoreProps.min`

#### Defined in

[core/src/components/progressbar/progressbar.ts:15](https://github.com/AmadeusITGroup/AgnosUI/blob/4f987062ba159530bb40c83d5cc69de4a10ec41c/core/src/components/progressbar/progressbar.ts#L15)

***

### striped

> **striped**: `boolean`

If `true`, shows a striped progressbar.

#### Default Value

`false`

#### Inherited from

`ProgressbarExtraProps.striped`

#### Defined in

[core-bootstrap/src/components/progressbar/progressbar.ts:36](https://github.com/AmadeusITGroup/AgnosUI/blob/4f987062ba159530bb40c83d5cc69de4a10ec41c/core-bootstrap/src/components/progressbar/progressbar.ts#L36)

***

### structure

> **structure**: `SlotContent`\<[`ProgressbarContext`](ProgressbarContext.md)\>

Global template for the Progressbar.

#### Inherited from

`ProgressbarExtraProps.structure`

#### Defined in

[core-bootstrap/src/components/progressbar/progressbar.ts:20](https://github.com/AmadeusITGroup/AgnosUI/blob/4f987062ba159530bb40c83d5cc69de4a10ec41c/core-bootstrap/src/components/progressbar/progressbar.ts#L20)

***

### type

> **type**: `undefined` \| [`BSContextualClass`](../type-aliases/BSContextualClass.md)

Type of the progressbar, following bootstrap types.

#### Inherited from

`ProgressbarExtraProps.type`

#### Defined in

[core-bootstrap/src/components/progressbar/progressbar.ts:47](https://github.com/AmadeusITGroup/AgnosUI/blob/4f987062ba159530bb40c83d5cc69de4a10ec41c/core-bootstrap/src/components/progressbar/progressbar.ts#L47)

***

### value

> **value**: `number`

The current value.

#### Default Value

`0`

#### Inherited from

`CoreProps.value`

#### Defined in

[core/src/components/progressbar/progressbar.ts:27](https://github.com/AmadeusITGroup/AgnosUI/blob/4f987062ba159530bb40c83d5cc69de4a10ec41c/core/src/components/progressbar/progressbar.ts#L27)
