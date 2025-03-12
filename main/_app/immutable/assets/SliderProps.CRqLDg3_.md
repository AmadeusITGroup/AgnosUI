Defined in: [core/src/components/slider/slider.ts:258](https://github.com/AmadeusITGroup/AgnosUI/blob/b7e450aebbdd12feb8506179b9c36ce1f021ca0c/core/src/components/slider/slider.ts#L258)

Interface representing the properties for the Slider component.

## Extends

- `SliderCommonPropsAndState`

## Properties

### ariaLabel()

> **ariaLabel**: (`sortedIndex`) => `string`

Defined in: [core/src/components/slider/slider.ts:268](https://github.com/AmadeusITGroup/AgnosUI/blob/b7e450aebbdd12feb8506179b9c36ce1f021ca0c/core/src/components/slider/slider.ts#L268)

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

***

### ariaLabelledBy()

> **ariaLabelledBy**: (`sortedIndex`) => `string`

Defined in: [core/src/components/slider/slider.ts:279](https://github.com/AmadeusITGroup/AgnosUI/blob/b7e450aebbdd12feb8506179b9c36ce1f021ca0c/core/src/components/slider/slider.ts#L279)

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

***

### ariaValueText()

> **ariaValueText**: (`value`, `sortedIndex`) => `string`

Defined in: [core/src/components/slider/slider.ts:291](https://github.com/AmadeusITGroup/AgnosUI/blob/b7e450aebbdd12feb8506179b9c36ce1f021ca0c/core/src/components/slider/slider.ts#L291)

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

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/b7e450aebbdd12feb8506179b9c36ce1f021ca0c/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`SliderCommonPropsAndState.className`

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/slider/slider.ts:150](https://github.com/AmadeusITGroup/AgnosUI/blob/b7e450aebbdd12feb8506179b9c36ce1f021ca0c/core/src/components/slider/slider.ts#L150)

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.disabled`

***

### max

> **max**: `number`

Defined in: [core/src/components/slider/slider.ts:129](https://github.com/AmadeusITGroup/AgnosUI/blob/b7e450aebbdd12feb8506179b9c36ce1f021ca0c/core/src/components/slider/slider.ts#L129)

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Inherited from

`SliderCommonPropsAndState.max`

***

### min

> **min**: `number`

Defined in: [core/src/components/slider/slider.ts:122](https://github.com/AmadeusITGroup/AgnosUI/blob/b7e450aebbdd12feb8506179b9c36ce1f021ca0c/core/src/components/slider/slider.ts#L122)

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Inherited from

`SliderCommonPropsAndState.min`

***

### onValuesChange()

> **onValuesChange**: (`values`) => `void`

Defined in: [core/src/components/slider/slider.ts:303](https://github.com/AmadeusITGroup/AgnosUI/blob/b7e450aebbdd12feb8506179b9c36ce1f021ca0c/core/src/components/slider/slider.ts#L303)

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

***

### readonly

> **readonly**: `boolean`

Defined in: [core/src/components/slider/slider.ts:143](https://github.com/AmadeusITGroup/AgnosUI/blob/b7e450aebbdd12feb8506179b9c36ce1f021ca0c/core/src/components/slider/slider.ts#L143)

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.readonly`

***

### rtl

> **rtl**: `boolean`

Defined in: [core/src/components/slider/slider.ts:192](https://github.com/AmadeusITGroup/AgnosUI/blob/b7e450aebbdd12feb8506179b9c36ce1f021ca0c/core/src/components/slider/slider.ts#L192)

It `true` slider display is inversed

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.rtl`

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

Defined in: [core/src/components/slider/slider.ts:178](https://github.com/AmadeusITGroup/AgnosUI/blob/b7e450aebbdd12feb8506179b9c36ce1f021ca0c/core/src/components/slider/slider.ts#L178)

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`SliderCommonPropsAndState.showMinMaxLabels`

***

### showTicks

> **showTicks**: `boolean`

Defined in: [core/src/components/slider/slider.ts:185](https://github.com/AmadeusITGroup/AgnosUI/blob/b7e450aebbdd12feb8506179b9c36ce1f021ca0c/core/src/components/slider/slider.ts#L185)

If `true` the ticks are displayed on the slider

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.showTicks`

***

### showTickValues

> **showTickValues**: `boolean`

Defined in: [core/src/components/slider/slider.ts:318](https://github.com/AmadeusITGroup/AgnosUI/blob/b7e450aebbdd12feb8506179b9c36ce1f021ca0c/core/src/components/slider/slider.ts#L318)

If `true` the tick values are displayed on the slider

#### Default Value

`true`

***

### showValueLabels

> **showValueLabels**: `boolean`

Defined in: [core/src/components/slider/slider.ts:171](https://github.com/AmadeusITGroup/AgnosUI/blob/b7e450aebbdd12feb8506179b9c36ce1f021ca0c/core/src/components/slider/slider.ts#L171)

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`SliderCommonPropsAndState.showValueLabels`

***

### stepSize

> **stepSize**: `number`

Defined in: [core/src/components/slider/slider.ts:136](https://github.com/AmadeusITGroup/AgnosUI/blob/b7e450aebbdd12feb8506179b9c36ce1f021ca0c/core/src/components/slider/slider.ts#L136)

Unit value between slider steps

#### Default Value

`1`

#### Inherited from

`SliderCommonPropsAndState.stepSize`

***

### tickInterval

> **tickInterval**: `number`

Defined in: [core/src/components/slider/slider.ts:311](https://github.com/AmadeusITGroup/AgnosUI/blob/b7e450aebbdd12feb8506179b9c36ce1f021ca0c/core/src/components/slider/slider.ts#L311)

Unit value between the ticks
If value is set to `0` the [stepSize](SliderState.md#stepsize) is used to space the ticks

#### Default Value

`0`

***

### values

> **values**: `number`[]

Defined in: [core/src/components/slider/slider.ts:164](https://github.com/AmadeusITGroup/AgnosUI/blob/b7e450aebbdd12feb8506179b9c36ce1f021ca0c/core/src/components/slider/slider.ts#L164)

Current slider values

#### Default Value

`[0]`

#### Inherited from

`SliderCommonPropsAndState.values`

***

### vertical

> **vertical**: `boolean`

Defined in: [core/src/components/slider/slider.ts:157](https://github.com/AmadeusITGroup/AgnosUI/blob/b7e450aebbdd12feb8506179b9c36ce1f021ca0c/core/src/components/slider/slider.ts#L157)

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.vertical`
