Defined in: [core/src/components/slider/slider.ts:266](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/slider/slider.ts#L266)

Interface representing the properties for the Slider component.

## Extends

- `SliderCommonPropsAndState`

## Properties

### ariaLabel()

> **ariaLabel**: (`sortedIndex`) => `string`

Defined in: [core/src/components/slider/slider.ts:276](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/slider/slider.ts#L276)

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

Defined in: [core/src/components/slider/slider.ts:287](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/slider/slider.ts#L287)

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

Defined in: [core/src/components/slider/slider.ts:299](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/slider/slider.ts#L299)

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

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`SliderCommonPropsAndState.className`

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/slider/slider.ts:158](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/slider/slider.ts#L158)

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.disabled`

***

### max

> **max**: `number`

Defined in: [core/src/components/slider/slider.ts:137](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/slider/slider.ts#L137)

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Inherited from

`SliderCommonPropsAndState.max`

***

### maxRange

> **maxRange**: `number`

Defined in: [core/src/components/slider/slider.ts:342](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/slider/slider.ts#L342)

Maximum distance between two values
When set to 0, no maximum distance constraint is applied.

#### Default Value

```ts
0
```

***

### min

> **min**: `number`

Defined in: [core/src/components/slider/slider.ts:130](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/slider/slider.ts#L130)

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Inherited from

`SliderCommonPropsAndState.min`

***

### minRange

> **minRange**: `number`

Defined in: [core/src/components/slider/slider.ts:334](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/slider/slider.ts#L334)

Minimum distance between two values.
When set to 0, no minimum distance constraint is applied.

#### Default Value

```ts
0
```

***

### onValuesChange()

> **onValuesChange**: (`values`) => `void`

Defined in: [core/src/components/slider/slider.ts:311](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/slider/slider.ts#L311)

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

### pushRange

> **pushRange**: `boolean`

Defined in: [core/src/components/slider/slider.ts:350](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/slider/slider.ts#L350)

When true, if moving a value would break the minRange or maxRange constraint,
it will instead push or pull the neighboring values to keep the allowed range rather than just stopping.

#### Default Value

```ts
false
```

***

### readonly

> **readonly**: `boolean`

Defined in: [core/src/components/slider/slider.ts:151](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/slider/slider.ts#L151)

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.readonly`

***

### rtl

> **rtl**: `boolean`

Defined in: [core/src/components/slider/slider.ts:200](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/slider/slider.ts#L200)

It `true` slider display is inversed

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.rtl`

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

Defined in: [core/src/components/slider/slider.ts:186](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/slider/slider.ts#L186)

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`SliderCommonPropsAndState.showMinMaxLabels`

***

### showTicks

> **showTicks**: `boolean`

Defined in: [core/src/components/slider/slider.ts:193](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/slider/slider.ts#L193)

If `true` the ticks are displayed on the slider

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.showTicks`

***

### showTickValues

> **showTickValues**: `boolean`

Defined in: [core/src/components/slider/slider.ts:326](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/slider/slider.ts#L326)

If `true` the tick values are displayed on the slider

#### Default Value

`true`

***

### showValueLabels

> **showValueLabels**: `boolean`

Defined in: [core/src/components/slider/slider.ts:179](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/slider/slider.ts#L179)

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`SliderCommonPropsAndState.showValueLabels`

***

### stepSize

> **stepSize**: `number`

Defined in: [core/src/components/slider/slider.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/slider/slider.ts#L144)

Unit value between slider steps

#### Default Value

`1`

#### Inherited from

`SliderCommonPropsAndState.stepSize`

***

### tickInterval

> **tickInterval**: `number`

Defined in: [core/src/components/slider/slider.ts:319](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/slider/slider.ts#L319)

Unit value between the ticks
If value is set to `0` the [stepSize](SliderState.md#stepsize) is used to space the ticks

#### Default Value

`0`

***

### values

> **values**: `number`[]

Defined in: [core/src/components/slider/slider.ts:172](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/slider/slider.ts#L172)

Current slider values

#### Default Value

`[0]`

#### Inherited from

`SliderCommonPropsAndState.values`

***

### vertical

> **vertical**: `boolean`

Defined in: [core/src/components/slider/slider.ts:165](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/slider/slider.ts#L165)

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.vertical`
