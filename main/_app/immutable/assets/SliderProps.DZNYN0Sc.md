Defined in: [core-bootstrap/src/components/slider/slider.ts:78](https://github.com/AmadeusITGroup/AgnosUI/blob/ea7af07d6105d9e70bdcfd4b1666a03745728750/core-bootstrap/src/components/slider/slider.ts#L78)

Represents the properties for the Slider component.

## Extends

- `SliderProps`.`SliderExtraProps`

## Properties

### ariaLabel()

> **ariaLabel**: (`sortedIndex`) => `string`

Defined in: [core/src/components/slider/slider.ts:275](https://github.com/AmadeusITGroup/AgnosUI/blob/ea7af07d6105d9e70bdcfd4b1666a03745728750/core/src/components/slider/slider.ts#L275)

Return the value for the 'aria-label' attribute for the handle

#### Parameters

##### sortedIndex

`number`

index of the handle in the sorted list

#### Returns

`string`

#### Default Value

```ts
() => 'Value'
```

#### Inherited from

`CoreProps.ariaLabel`

***

### ariaLabelledBy()

> **ariaLabelledBy**: (`sortedIndex`) => `string`

Defined in: [core/src/components/slider/slider.ts:286](https://github.com/AmadeusITGroup/AgnosUI/blob/ea7af07d6105d9e70bdcfd4b1666a03745728750/core/src/components/slider/slider.ts#L286)

Return the value for the 'aria-labelledBy' attribute for the handle

#### Parameters

##### sortedIndex

`number`

index of the handle in the sorted list

#### Returns

`string`

#### Default Value

```ts
() => ''
```

#### Inherited from

`CoreProps.ariaLabelledBy`

***

### ariaValueText()

> **ariaValueText**: (`value`, `sortedIndex`) => `string`

Defined in: [core/src/components/slider/slider.ts:298](https://github.com/AmadeusITGroup/AgnosUI/blob/ea7af07d6105d9e70bdcfd4b1666a03745728750/core/src/components/slider/slider.ts#L298)

Return the value for the 'aria-valuetext' attribute for the handle

#### Parameters

##### value

`number`

value of the handle

##### sortedIndex

`number`

index of the handle in the sorted list

#### Returns

`string`

#### Default Value

```ts
(value: number) => ''
```

#### Inherited from

`CoreProps.ariaValueText`

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/ea7af07d6105d9e70bdcfd4b1666a03745728750/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreProps.className`

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/slider/slider.ts:157](https://github.com/AmadeusITGroup/AgnosUI/blob/ea7af07d6105d9e70bdcfd4b1666a03745728750/core/src/components/slider/slider.ts#L157)

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Inherited from

`CoreProps.disabled`

***

### handle

> **handle**: `SlotContent`\<[`SliderSlotHandleContext`](SliderSlotHandleContext.md)\>

Defined in: [core-bootstrap/src/components/slider/slider.ts:63](https://github.com/AmadeusITGroup/AgnosUI/blob/ea7af07d6105d9e70bdcfd4b1666a03745728750/core-bootstrap/src/components/slider/slider.ts#L63)

Slot to change the handlers

#### Inherited from

`SliderExtraProps.handle`

***

### label

> **label**: `SlotContent`\<[`SliderSlotLabelContext`](SliderSlotLabelContext.md)\>

Defined in: [core-bootstrap/src/components/slider/slider.ts:58](https://github.com/AmadeusITGroup/AgnosUI/blob/ea7af07d6105d9e70bdcfd4b1666a03745728750/core-bootstrap/src/components/slider/slider.ts#L58)

Slot to change the default labels of the slider

#### Default Value

```ts
({value}: SliderSlotLabelContext) => '' + value
```

#### Inherited from

`SliderExtraProps.label`

***

### max

> **max**: `number`

Defined in: [core/src/components/slider/slider.ts:136](https://github.com/AmadeusITGroup/AgnosUI/blob/ea7af07d6105d9e70bdcfd4b1666a03745728750/core/src/components/slider/slider.ts#L136)

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Inherited from

`CoreProps.max`

***

### min

> **min**: `number`

Defined in: [core/src/components/slider/slider.ts:129](https://github.com/AmadeusITGroup/AgnosUI/blob/ea7af07d6105d9e70bdcfd4b1666a03745728750/core/src/components/slider/slider.ts#L129)

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Inherited from

`CoreProps.min`

***

### onValuesChange()

> **onValuesChange**: (`values`) => `void`

Defined in: [core/src/components/slider/slider.ts:310](https://github.com/AmadeusITGroup/AgnosUI/blob/ea7af07d6105d9e70bdcfd4b1666a03745728750/core/src/components/slider/slider.ts#L310)

An event emitted when slider values are changed

Event payload equals to the updated slider values

#### Parameters

##### values

`number`[]

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Inherited from

`CoreProps.onValuesChange`

***

### readonly

> **readonly**: `boolean`

Defined in: [core/src/components/slider/slider.ts:150](https://github.com/AmadeusITGroup/AgnosUI/blob/ea7af07d6105d9e70bdcfd4b1666a03745728750/core/src/components/slider/slider.ts#L150)

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Inherited from

`CoreProps.readonly`

***

### rtl

> **rtl**: `boolean`

Defined in: [core/src/components/slider/slider.ts:199](https://github.com/AmadeusITGroup/AgnosUI/blob/ea7af07d6105d9e70bdcfd4b1666a03745728750/core/src/components/slider/slider.ts#L199)

It `true` slider display is inversed

#### Default Value

`false`

#### Inherited from

`CoreProps.rtl`

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

Defined in: [core/src/components/slider/slider.ts:185](https://github.com/AmadeusITGroup/AgnosUI/blob/ea7af07d6105d9e70bdcfd4b1666a03745728750/core/src/components/slider/slider.ts#L185)

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`CoreProps.showMinMaxLabels`

***

### showTicks

> **showTicks**: `boolean`

Defined in: [core/src/components/slider/slider.ts:192](https://github.com/AmadeusITGroup/AgnosUI/blob/ea7af07d6105d9e70bdcfd4b1666a03745728750/core/src/components/slider/slider.ts#L192)

If `true` the ticks are displayed on the slider

#### Default Value

`false`

#### Inherited from

`CoreProps.showTicks`

***

### showTickValues

> **showTickValues**: `boolean`

Defined in: [core/src/components/slider/slider.ts:325](https://github.com/AmadeusITGroup/AgnosUI/blob/ea7af07d6105d9e70bdcfd4b1666a03745728750/core/src/components/slider/slider.ts#L325)

If `true` the tick values are displayed on the slider

#### Default Value

`true`

#### Inherited from

`CoreProps.showTickValues`

***

### showValueLabels

> **showValueLabels**: `boolean`

Defined in: [core/src/components/slider/slider.ts:178](https://github.com/AmadeusITGroup/AgnosUI/blob/ea7af07d6105d9e70bdcfd4b1666a03745728750/core/src/components/slider/slider.ts#L178)

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`CoreProps.showValueLabels`

***

### stepSize

> **stepSize**: `number`

Defined in: [core/src/components/slider/slider.ts:143](https://github.com/AmadeusITGroup/AgnosUI/blob/ea7af07d6105d9e70bdcfd4b1666a03745728750/core/src/components/slider/slider.ts#L143)

Unit value between slider steps

#### Default Value

`1`

#### Inherited from

`CoreProps.stepSize`

***

### structure

> **structure**: `SlotContent`\<[`SliderContext`](SliderContext.md)\>

Defined in: [core-bootstrap/src/components/slider/slider.ts:48](https://github.com/AmadeusITGroup/AgnosUI/blob/ea7af07d6105d9e70bdcfd4b1666a03745728750/core-bootstrap/src/components/slider/slider.ts#L48)

Slot to change the default display of the slider

#### Inherited from

`SliderExtraProps.structure`

***

### tick

> **tick**: `SlotContent`\<[`SliderSlotTickContext`](SliderSlotTickContext.md)\>

Defined in: [core-bootstrap/src/components/slider/slider.ts:68](https://github.com/AmadeusITGroup/AgnosUI/blob/ea7af07d6105d9e70bdcfd4b1666a03745728750/core-bootstrap/src/components/slider/slider.ts#L68)

Slot to change the ticks

#### Inherited from

`SliderExtraProps.tick`

***

### tickInterval

> **tickInterval**: `number`

Defined in: [core/src/components/slider/slider.ts:318](https://github.com/AmadeusITGroup/AgnosUI/blob/ea7af07d6105d9e70bdcfd4b1666a03745728750/core/src/components/slider/slider.ts#L318)

Unit value between the ticks
If value is set to `0` the [stepSize](SliderState.md#stepsize) is used to space the ticks

#### Default Value

`0`

#### Inherited from

`CoreProps.tickInterval`

***

### values

> **values**: `number`[]

Defined in: [core/src/components/slider/slider.ts:171](https://github.com/AmadeusITGroup/AgnosUI/blob/ea7af07d6105d9e70bdcfd4b1666a03745728750/core/src/components/slider/slider.ts#L171)

Current slider values

#### Default Value

`[0]`

#### Inherited from

`CoreProps.values`

***

### vertical

> **vertical**: `boolean`

Defined in: [core/src/components/slider/slider.ts:164](https://github.com/AmadeusITGroup/AgnosUI/blob/ea7af07d6105d9e70bdcfd4b1666a03745728750/core/src/components/slider/slider.ts#L164)

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Inherited from

`CoreProps.vertical`
