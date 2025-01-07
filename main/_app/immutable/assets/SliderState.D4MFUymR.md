Defined in: [core/src/components/slider/slider.ts:157](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/slider/slider.ts#L157)

Represents the state of a slider component.

## Extends

- `SliderCommonPropsAndState`

## Properties

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`SliderCommonPropsAndState.className`

***

### combinedLabelDisplay

> **combinedLabelDisplay**: `boolean`

Defined in: [core/src/components/slider/slider.ts:186](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/slider/slider.ts#L186)

If true, the label when the handles are close is visible

***

### combinedLabelPositionLeft

> **combinedLabelPositionLeft**: `number`

Defined in: [core/src/components/slider/slider.ts:166](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/slider/slider.ts#L166)

Combined label left offset in %

***

### combinedLabelPositionTop

> **combinedLabelPositionTop**: `number`

Defined in: [core/src/components/slider/slider.ts:171](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/slider/slider.ts#L171)

Combined label top offset in %

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/slider/slider.ts:116](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/slider/slider.ts#L116)

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.disabled`

***

### handleDisplayOptions

> **handleDisplayOptions**: [`HandleDisplayOptions`](HandleDisplayOptions.md)[]

Defined in: [core/src/components/slider/slider.ts:201](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/slider/slider.ts#L201)

Array of objects representing handle display options

***

### interactive

> **interactive**: `boolean`

Defined in: [core/src/components/slider/slider.ts:206](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/slider/slider.ts#L206)

Check if the slider is interactive, meaning it is not disabled or readonly

***

### max

> **max**: `number`

Defined in: [core/src/components/slider/slider.ts:95](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/slider/slider.ts#L95)

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Inherited from

`SliderCommonPropsAndState.max`

***

### maxValueLabelDisplay

> **maxValueLabelDisplay**: `boolean`

Defined in: [core/src/components/slider/slider.ts:181](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/slider/slider.ts#L181)

If true, the maximum label will be visible

***

### min

> **min**: `number`

Defined in: [core/src/components/slider/slider.ts:88](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/slider/slider.ts#L88)

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Inherited from

`SliderCommonPropsAndState.min`

***

### minValueLabelDisplay

> **minValueLabelDisplay**: `boolean`

Defined in: [core/src/components/slider/slider.ts:176](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/slider/slider.ts#L176)

If true, the minimum label will be visible

***

### progressDisplayOptions

> **progressDisplayOptions**: [`ProgressDisplayOptions`](ProgressDisplayOptions.md)[]

Defined in: [core/src/components/slider/slider.ts:196](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/slider/slider.ts#L196)

Array of objects representing progress display options

***

### readonly

> **readonly**: `boolean`

Defined in: [core/src/components/slider/slider.ts:109](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/slider/slider.ts#L109)

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.readonly`

***

### rtl

> **rtl**: `boolean`

Defined in: [core/src/components/slider/slider.ts:151](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/slider/slider.ts#L151)

It `true` slider display is inversed

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.rtl`

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

Defined in: [core/src/components/slider/slider.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/slider/slider.ts#L144)

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`SliderCommonPropsAndState.showMinMaxLabels`

***

### showValueLabels

> **showValueLabels**: `boolean`

Defined in: [core/src/components/slider/slider.ts:137](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/slider/slider.ts#L137)

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`SliderCommonPropsAndState.showValueLabels`

***

### sortedHandles

> **sortedHandles**: [`SliderHandle`](SliderHandle.md)[]

Defined in: [core/src/components/slider/slider.ts:191](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/slider/slider.ts#L191)

Array of the sorted handles to display

***

### sortedValues

> **sortedValues**: `number`[]

Defined in: [core/src/components/slider/slider.ts:161](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/slider/slider.ts#L161)

Sorted slider values

***

### stepSize

> **stepSize**: `number`

Defined in: [core/src/components/slider/slider.ts:102](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/slider/slider.ts#L102)

Unit value between slider steps

#### Default Value

`1`

#### Inherited from

`SliderCommonPropsAndState.stepSize`

***

### values

> **values**: `number`[]

Defined in: [core/src/components/slider/slider.ts:130](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/slider/slider.ts#L130)

Current slider values

#### Default Value

`[0]`

#### Inherited from

`SliderCommonPropsAndState.values`

***

### vertical

> **vertical**: `boolean`

Defined in: [core/src/components/slider/slider.ts:123](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/slider/slider.ts#L123)

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.vertical`
