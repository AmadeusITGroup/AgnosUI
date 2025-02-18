Defined in: [core-bootstrap/src/components/progressbar/progressbar.ts:57](https://github.com/AmadeusITGroup/AgnosUI/blob/9c4ba085df68dd03e76684e1adfe990b83fa406f/core-bootstrap/src/components/progressbar/progressbar.ts#L57)

Interface representing the properties for the Progressbar component.

## Extends

- `ProgressbarProps`.`ProgressbarExtraProps`

## Properties

### animated

> **animated**: `boolean`

Defined in: [core-bootstrap/src/components/progressbar/progressbar.ts:43](https://github.com/AmadeusITGroup/AgnosUI/blob/9c4ba085df68dd03e76684e1adfe990b83fa406f/core-bootstrap/src/components/progressbar/progressbar.ts#L43)

If `true`, animates a striped progressbar.
Takes effect only for browsers supporting CSS3 animations, and if `striped` is `true`.

#### Default Value

`false`

#### Inherited from

`ProgressbarExtraProps.animated`

***

### ariaLabel

> **ariaLabel**: `string`

Defined in: [core/src/components/progressbar/progressbar.ts:33](https://github.com/AmadeusITGroup/AgnosUI/blob/9c4ba085df68dd03e76684e1adfe990b83fa406f/core/src/components/progressbar/progressbar.ts#L33)

The aria label.

#### Default Value

`'Progressbar'`

#### Inherited from

`CoreProps.ariaLabel`

***

### ariaValueTextFn()

> **ariaValueTextFn**: (`value`, `minimum`, `maximum`) => `undefined` \| `string`

Defined in: [core/src/components/progressbar/progressbar.ts:83](https://github.com/AmadeusITGroup/AgnosUI/blob/9c4ba085df68dd03e76684e1adfe990b83fa406f/core/src/components/progressbar/progressbar.ts#L83)

Return the value for the 'aria-valuetext' attribute.

#### Parameters

##### value

`number`

current value

##### minimum

`number`

minimum value

##### maximum

`number`

maximum value

#### Returns

`undefined` \| `string`

#### Default Value

```ts
() => undefined
```

#### Inherited from

`CoreProps.ariaValueTextFn`

***

### children

> **children**: `SlotContent`\<[`ProgressbarContext`](ProgressbarContext.md)\>

Defined in: [core-bootstrap/src/components/progressbar/progressbar.ts:24](https://github.com/AmadeusITGroup/AgnosUI/blob/9c4ba085df68dd03e76684e1adfe990b83fa406f/core-bootstrap/src/components/progressbar/progressbar.ts#L24)

Label of the progress.

#### Inherited from

`ProgressbarExtraProps.children`

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/9c4ba085df68dd03e76684e1adfe990b83fa406f/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreProps.className`

***

### height

> **height**: `string`

Defined in: [core-bootstrap/src/components/progressbar/progressbar.ts:30](https://github.com/AmadeusITGroup/AgnosUI/blob/9c4ba085df68dd03e76684e1adfe990b83fa406f/core-bootstrap/src/components/progressbar/progressbar.ts#L30)

Height of the progressbar, can be any valid css height value.

#### Default Value

`''`

#### Inherited from

`ProgressbarExtraProps.height`

***

### max

> **max**: `number`

Defined in: [core/src/components/progressbar/progressbar.ts:21](https://github.com/AmadeusITGroup/AgnosUI/blob/9c4ba085df68dd03e76684e1adfe990b83fa406f/core/src/components/progressbar/progressbar.ts#L21)

The maximum value.

#### Default Value

`100`

#### Inherited from

`CoreProps.max`

***

### min

> **min**: `number`

Defined in: [core/src/components/progressbar/progressbar.ts:15](https://github.com/AmadeusITGroup/AgnosUI/blob/9c4ba085df68dd03e76684e1adfe990b83fa406f/core/src/components/progressbar/progressbar.ts#L15)

The minimum value.

#### Default Value

`0`

#### Inherited from

`CoreProps.min`

***

### striped

> **striped**: `boolean`

Defined in: [core-bootstrap/src/components/progressbar/progressbar.ts:36](https://github.com/AmadeusITGroup/AgnosUI/blob/9c4ba085df68dd03e76684e1adfe990b83fa406f/core-bootstrap/src/components/progressbar/progressbar.ts#L36)

If `true`, shows a striped progressbar.

#### Default Value

`false`

#### Inherited from

`ProgressbarExtraProps.striped`

***

### structure

> **structure**: `SlotContent`\<[`ProgressbarContext`](ProgressbarContext.md)\>

Defined in: [core-bootstrap/src/components/progressbar/progressbar.ts:20](https://github.com/AmadeusITGroup/AgnosUI/blob/9c4ba085df68dd03e76684e1adfe990b83fa406f/core-bootstrap/src/components/progressbar/progressbar.ts#L20)

Global template for the Progressbar.

#### Inherited from

`ProgressbarExtraProps.structure`

***

### type

> **type**: `undefined` \| [`BSContextualClass`](../type-aliases/BSContextualClass.md)

Defined in: [core-bootstrap/src/components/progressbar/progressbar.ts:47](https://github.com/AmadeusITGroup/AgnosUI/blob/9c4ba085df68dd03e76684e1adfe990b83fa406f/core-bootstrap/src/components/progressbar/progressbar.ts#L47)

Type of the progressbar, following bootstrap types.

#### Inherited from

`ProgressbarExtraProps.type`

***

### value

> **value**: `number`

Defined in: [core/src/components/progressbar/progressbar.ts:27](https://github.com/AmadeusITGroup/AgnosUI/blob/9c4ba085df68dd03e76684e1adfe990b83fa406f/core/src/components/progressbar/progressbar.ts#L27)

The current value.

#### Default Value

`0`

#### Inherited from

`CoreProps.value`
