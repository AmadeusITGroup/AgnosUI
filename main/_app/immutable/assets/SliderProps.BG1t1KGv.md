Defined in: [core-bootstrap/src/components/slider/slider.ts:78](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core-bootstrap/src/components/slider/slider.ts#L78)

Represents the properties for the Slider component.

## Extends

- `SliderProps`.`SliderExtraProps`

## Properties

### ariaLabel()

> **ariaLabel**: (`sortedIndex`) => `string`

Defined in: [core/src/components/slider/slider.ts:276](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/slider/slider.ts#L276)

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

Defined in: [core/src/components/slider/slider.ts:287](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/slider/slider.ts#L287)

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

Defined in: [core/src/components/slider/slider.ts:299](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/slider/slider.ts#L299)

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

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreProps.className`

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/slider/slider.ts:158](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/slider/slider.ts#L158)

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Inherited from

`CoreProps.disabled`

***

### handle

> **handle**: `SlotContent`\<[`SliderSlotHandleContext`](SliderSlotHandleContext.md)\>

Defined in: [core-bootstrap/src/components/slider/slider.ts:63](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core-bootstrap/src/components/slider/slider.ts#L63)

Slot to change the handlers

#### Inherited from

`SliderExtraProps.handle`

***

### label

> **label**: `SlotContent`\<[`SliderSlotLabelContext`](SliderSlotLabelContext.md)\>

Defined in: [core-bootstrap/src/components/slider/slider.ts:58](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core-bootstrap/src/components/slider/slider.ts#L58)

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

Defined in: [core/src/components/slider/slider.ts:137](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/slider/slider.ts#L137)

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Inherited from

`CoreProps.max`

***

### maxRange

> **maxRange**: `number`

Defined in: [core/src/components/slider/slider.ts:342](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/slider/slider.ts#L342)

Maximum distance between two values
When set to 0, no maximum distance constraint is applied.

#### Default Value

```ts
0
```

#### Inherited from

`CoreProps.maxRange`

***

### min

> **min**: `number`

Defined in: [core/src/components/slider/slider.ts:130](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/slider/slider.ts#L130)

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Inherited from

`CoreProps.min`

***

### minRange

> **minRange**: `number`

Defined in: [core/src/components/slider/slider.ts:334](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/slider/slider.ts#L334)

Minimum distance between two values.
When set to 0, no minimum distance constraint is applied.

#### Default Value

```ts
0
```

#### Inherited from

`CoreProps.minRange`

***

### onValuesChange()

> **onValuesChange**: (`values`) => `void`

Defined in: [core/src/components/slider/slider.ts:311](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/slider/slider.ts#L311)

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

### pushRange

> **pushRange**: `boolean`

Defined in: [core/src/components/slider/slider.ts:350](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/slider/slider.ts#L350)

When true, if moving a value would break the minRange or maxRange constraint,
it will instead push or pull the neighboring values to keep the allowed range rather than just stopping.

#### Default Value

```ts
false
```

#### Inherited from

`CoreProps.pushRange`

***

### readonly

> **readonly**: `boolean`

Defined in: [core/src/components/slider/slider.ts:151](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/slider/slider.ts#L151)

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Inherited from

`CoreProps.readonly`

***

### rtl

> **rtl**: `boolean`

Defined in: [core/src/components/slider/slider.ts:200](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/slider/slider.ts#L200)

It `true` slider display is inversed

#### Default Value

`false`

#### Inherited from

`CoreProps.rtl`

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

Defined in: [core/src/components/slider/slider.ts:186](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/slider/slider.ts#L186)

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`CoreProps.showMinMaxLabels`

***

### showTicks

> **showTicks**: `boolean`

Defined in: [core/src/components/slider/slider.ts:193](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/slider/slider.ts#L193)

If `true` the ticks are displayed on the slider

#### Default Value

`false`

#### Inherited from

`CoreProps.showTicks`

***

### showTickValues

> **showTickValues**: `boolean`

Defined in: [core/src/components/slider/slider.ts:326](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/slider/slider.ts#L326)

If `true` the tick values are displayed on the slider

#### Default Value

`true`

#### Inherited from

`CoreProps.showTickValues`

***

### showValueLabels

> **showValueLabels**: `boolean`

Defined in: [core/src/components/slider/slider.ts:179](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/slider/slider.ts#L179)

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`CoreProps.showValueLabels`

***

### stepSize

> **stepSize**: `number`

Defined in: [core/src/components/slider/slider.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/slider/slider.ts#L144)

Unit value between slider steps

#### Default Value

`1`

#### Inherited from

`CoreProps.stepSize`

***

### structure

> **structure**: `SlotContent`\<[`SliderContext`](SliderContext.md)\>

Defined in: [core-bootstrap/src/components/slider/slider.ts:48](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core-bootstrap/src/components/slider/slider.ts#L48)

Slot to change the default display of the slider

#### Inherited from

`SliderExtraProps.structure`

***

### tick

> **tick**: `SlotContent`\<[`SliderSlotTickContext`](SliderSlotTickContext.md)\>

Defined in: [core-bootstrap/src/components/slider/slider.ts:68](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core-bootstrap/src/components/slider/slider.ts#L68)

Slot to change the ticks

#### Inherited from

`SliderExtraProps.tick`

***

### tickInterval

> **tickInterval**: `number`

Defined in: [core/src/components/slider/slider.ts:319](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/slider/slider.ts#L319)

Unit value between the ticks
If value is set to `0` the [stepSize](SliderState.md#stepsize) is used to space the ticks

#### Default Value

`0`

#### Inherited from

`CoreProps.tickInterval`

***

### values

> **values**: `number`[]

Defined in: [core/src/components/slider/slider.ts:172](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/slider/slider.ts#L172)

Current slider values

#### Default Value

`[0]`

#### Inherited from

`CoreProps.values`

***

### vertical

> **vertical**: `boolean`

Defined in: [core/src/components/slider/slider.ts:165](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/slider/slider.ts#L165)

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Inherited from

`CoreProps.vertical`
