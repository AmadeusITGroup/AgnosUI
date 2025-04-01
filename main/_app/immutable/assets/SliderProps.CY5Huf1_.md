Defined in: [core/src/components/slider/slider.ts:264](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/core/src/components/slider/slider.ts#L264)

Interface representing the properties for the Slider component.

## Extends

- `SliderCommonPropsAndState`

## Properties

### ariaLabel()

> **ariaLabel**: (`sortedIndex`) => `string`

Defined in: [core/src/components/slider/slider.ts:274](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/core/src/components/slider/slider.ts#L274)

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

Defined in: [core/src/components/slider/slider.ts:285](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/core/src/components/slider/slider.ts#L285)

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

Defined in: [core/src/components/slider/slider.ts:297](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/core/src/components/slider/slider.ts#L297)

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

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`SliderCommonPropsAndState.className`

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/slider/slider.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/core/src/components/slider/slider.ts#L156)

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.disabled`

***

### max

> **max**: `number`

Defined in: [core/src/components/slider/slider.ts:135](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/core/src/components/slider/slider.ts#L135)

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Inherited from

`SliderCommonPropsAndState.max`

***

### min

> **min**: `number`

Defined in: [core/src/components/slider/slider.ts:128](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/core/src/components/slider/slider.ts#L128)

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Inherited from

`SliderCommonPropsAndState.min`

***

### onValuesChange()

> **onValuesChange**: (`values`) => `void`

Defined in: [core/src/components/slider/slider.ts:309](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/core/src/components/slider/slider.ts#L309)

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

Defined in: [core/src/components/slider/slider.ts:149](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/core/src/components/slider/slider.ts#L149)

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.readonly`

***

### rtl

> **rtl**: `boolean`

Defined in: [core/src/components/slider/slider.ts:198](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/core/src/components/slider/slider.ts#L198)

It `true` slider display is inversed

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.rtl`

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

Defined in: [core/src/components/slider/slider.ts:184](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/core/src/components/slider/slider.ts#L184)

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`SliderCommonPropsAndState.showMinMaxLabels`

***

### showTicks

> **showTicks**: `boolean`

Defined in: [core/src/components/slider/slider.ts:191](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/core/src/components/slider/slider.ts#L191)

If `true` the ticks are displayed on the slider

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.showTicks`

***

### showTickValues

> **showTickValues**: `boolean`

Defined in: [core/src/components/slider/slider.ts:324](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/core/src/components/slider/slider.ts#L324)

If `true` the tick values are displayed on the slider

#### Default Value

`true`

***

### showValueLabels

> **showValueLabels**: `boolean`

Defined in: [core/src/components/slider/slider.ts:177](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/core/src/components/slider/slider.ts#L177)

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`SliderCommonPropsAndState.showValueLabels`

***

### stepSize

> **stepSize**: `number`

Defined in: [core/src/components/slider/slider.ts:142](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/core/src/components/slider/slider.ts#L142)

Unit value between slider steps

#### Default Value

`1`

#### Inherited from

`SliderCommonPropsAndState.stepSize`

***

### tickInterval

> **tickInterval**: `number`

Defined in: [core/src/components/slider/slider.ts:317](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/core/src/components/slider/slider.ts#L317)

Unit value between the ticks
If value is set to `0` the [stepSize](SliderState.md#stepsize) is used to space the ticks

#### Default Value

`0`

***

### values

> **values**: `number`[]

Defined in: [core/src/components/slider/slider.ts:170](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/core/src/components/slider/slider.ts#L170)

Current slider values

#### Default Value

`[0]`

#### Inherited from

`SliderCommonPropsAndState.values`

***

### vertical

> **vertical**: `boolean`

Defined in: [core/src/components/slider/slider.ts:163](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/core/src/components/slider/slider.ts#L163)

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.vertical`
