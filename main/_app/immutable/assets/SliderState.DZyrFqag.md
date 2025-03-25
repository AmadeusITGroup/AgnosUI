Defined in: [core/src/components/slider/slider.ts:198](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/core/src/components/slider/slider.ts#L198)

Represents the state of a slider component.

## Extends

- `SliderCommonPropsAndState`

## Properties

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`SliderCommonPropsAndState.className`

***

### combinedLabelDisplay

> **combinedLabelDisplay**: `boolean`

Defined in: [core/src/components/slider/slider.ts:227](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/core/src/components/slider/slider.ts#L227)

If true, the label when the handles are close is visible

***

### combinedLabelPositionLeft

> **combinedLabelPositionLeft**: `number`

Defined in: [core/src/components/slider/slider.ts:207](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/core/src/components/slider/slider.ts#L207)

Combined label left offset in %

***

### combinedLabelPositionTop

> **combinedLabelPositionTop**: `number`

Defined in: [core/src/components/slider/slider.ts:212](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/core/src/components/slider/slider.ts#L212)

Combined label top offset in %

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/slider/slider.ts:150](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/core/src/components/slider/slider.ts#L150)

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.disabled`

***

### handleDisplayOptions

> **handleDisplayOptions**: [`HandleDisplayOptions`](HandleDisplayOptions.md)[]

Defined in: [core/src/components/slider/slider.ts:242](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/core/src/components/slider/slider.ts#L242)

Array of objects representing handle display options

***

### interactive

> **interactive**: `boolean`

Defined in: [core/src/components/slider/slider.ts:247](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/core/src/components/slider/slider.ts#L247)

Check if the slider is interactive, meaning it is not disabled or readonly

***

### max

> **max**: `number`

Defined in: [core/src/components/slider/slider.ts:129](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/core/src/components/slider/slider.ts#L129)

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Inherited from

`SliderCommonPropsAndState.max`

***

### maxValueLabelDisplay

> **maxValueLabelDisplay**: `boolean`

Defined in: [core/src/components/slider/slider.ts:222](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/core/src/components/slider/slider.ts#L222)

If true, the maximum label will be visible

***

### min

> **min**: `number`

Defined in: [core/src/components/slider/slider.ts:122](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/core/src/components/slider/slider.ts#L122)

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Inherited from

`SliderCommonPropsAndState.min`

***

### minValueLabelDisplay

> **minValueLabelDisplay**: `boolean`

Defined in: [core/src/components/slider/slider.ts:217](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/core/src/components/slider/slider.ts#L217)

If true, the minimum label will be visible

***

### progressDisplayOptions

> **progressDisplayOptions**: [`ProgressDisplayOptions`](ProgressDisplayOptions.md)[]

Defined in: [core/src/components/slider/slider.ts:237](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/core/src/components/slider/slider.ts#L237)

Array of objects representing progress display options

***

### readonly

> **readonly**: `boolean`

Defined in: [core/src/components/slider/slider.ts:143](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/core/src/components/slider/slider.ts#L143)

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.readonly`

***

### rtl

> **rtl**: `boolean`

Defined in: [core/src/components/slider/slider.ts:192](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/core/src/components/slider/slider.ts#L192)

It `true` slider display is inversed

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.rtl`

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

Defined in: [core/src/components/slider/slider.ts:178](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/core/src/components/slider/slider.ts#L178)

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`SliderCommonPropsAndState.showMinMaxLabels`

***

### showTicks

> **showTicks**: `boolean`

Defined in: [core/src/components/slider/slider.ts:185](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/core/src/components/slider/slider.ts#L185)

If `true` the ticks are displayed on the slider

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.showTicks`

***

### showValueLabels

> **showValueLabels**: `boolean`

Defined in: [core/src/components/slider/slider.ts:171](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/core/src/components/slider/slider.ts#L171)

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`SliderCommonPropsAndState.showValueLabels`

***

### sortedHandles

> **sortedHandles**: [`SliderHandle`](SliderHandle.md)[]

Defined in: [core/src/components/slider/slider.ts:232](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/core/src/components/slider/slider.ts#L232)

Array of the sorted handles to display

***

### sortedValues

> **sortedValues**: `number`[]

Defined in: [core/src/components/slider/slider.ts:202](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/core/src/components/slider/slider.ts#L202)

Sorted slider values

***

### stepSize

> **stepSize**: `number`

Defined in: [core/src/components/slider/slider.ts:136](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/core/src/components/slider/slider.ts#L136)

Unit value between slider steps

#### Default Value

`1`

#### Inherited from

`SliderCommonPropsAndState.stepSize`

***

### ticks

> **ticks**: [`SliderTick`](SliderTick.md)[]

Defined in: [core/src/components/slider/slider.ts:252](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/core/src/components/slider/slider.ts#L252)

Array of ticks to display on the slider component

***

### values

> **values**: `number`[]

Defined in: [core/src/components/slider/slider.ts:164](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/core/src/components/slider/slider.ts#L164)

Current slider values

#### Default Value

`[0]`

#### Inherited from

`SliderCommonPropsAndState.values`

***

### vertical

> **vertical**: `boolean`

Defined in: [core/src/components/slider/slider.ts:157](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/core/src/components/slider/slider.ts#L157)

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.vertical`
