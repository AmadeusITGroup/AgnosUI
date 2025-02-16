Defined in: [core/src/components/slider/slider.ts:161](https://github.com/AmadeusITGroup/AgnosUI/blob/5c052e99309ca831f867eebe4a6ec87196141d12/core/src/components/slider/slider.ts#L161)

Represents the state of a slider component.

## Extends

- `SliderCommonPropsAndState`

## Properties

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/5c052e99309ca831f867eebe4a6ec87196141d12/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`SliderCommonPropsAndState.className`

***

### combinedLabelDisplay

> **combinedLabelDisplay**: `boolean`

Defined in: [core/src/components/slider/slider.ts:190](https://github.com/AmadeusITGroup/AgnosUI/blob/5c052e99309ca831f867eebe4a6ec87196141d12/core/src/components/slider/slider.ts#L190)

If true, the label when the handles are close is visible

***

### combinedLabelPositionLeft

> **combinedLabelPositionLeft**: `number`

Defined in: [core/src/components/slider/slider.ts:170](https://github.com/AmadeusITGroup/AgnosUI/blob/5c052e99309ca831f867eebe4a6ec87196141d12/core/src/components/slider/slider.ts#L170)

Combined label left offset in %

***

### combinedLabelPositionTop

> **combinedLabelPositionTop**: `number`

Defined in: [core/src/components/slider/slider.ts:175](https://github.com/AmadeusITGroup/AgnosUI/blob/5c052e99309ca831f867eebe4a6ec87196141d12/core/src/components/slider/slider.ts#L175)

Combined label top offset in %

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/slider/slider.ts:120](https://github.com/AmadeusITGroup/AgnosUI/blob/5c052e99309ca831f867eebe4a6ec87196141d12/core/src/components/slider/slider.ts#L120)

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.disabled`

***

### handleDisplayOptions

> **handleDisplayOptions**: [`HandleDisplayOptions`](HandleDisplayOptions.md)[]

Defined in: [core/src/components/slider/slider.ts:205](https://github.com/AmadeusITGroup/AgnosUI/blob/5c052e99309ca831f867eebe4a6ec87196141d12/core/src/components/slider/slider.ts#L205)

Array of objects representing handle display options

***

### interactive

> **interactive**: `boolean`

Defined in: [core/src/components/slider/slider.ts:210](https://github.com/AmadeusITGroup/AgnosUI/blob/5c052e99309ca831f867eebe4a6ec87196141d12/core/src/components/slider/slider.ts#L210)

Check if the slider is interactive, meaning it is not disabled or readonly

***

### max

> **max**: `number`

Defined in: [core/src/components/slider/slider.ts:99](https://github.com/AmadeusITGroup/AgnosUI/blob/5c052e99309ca831f867eebe4a6ec87196141d12/core/src/components/slider/slider.ts#L99)

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Inherited from

`SliderCommonPropsAndState.max`

***

### maxValueLabelDisplay

> **maxValueLabelDisplay**: `boolean`

Defined in: [core/src/components/slider/slider.ts:185](https://github.com/AmadeusITGroup/AgnosUI/blob/5c052e99309ca831f867eebe4a6ec87196141d12/core/src/components/slider/slider.ts#L185)

If true, the maximum label will be visible

***

### min

> **min**: `number`

Defined in: [core/src/components/slider/slider.ts:92](https://github.com/AmadeusITGroup/AgnosUI/blob/5c052e99309ca831f867eebe4a6ec87196141d12/core/src/components/slider/slider.ts#L92)

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Inherited from

`SliderCommonPropsAndState.min`

***

### minValueLabelDisplay

> **minValueLabelDisplay**: `boolean`

Defined in: [core/src/components/slider/slider.ts:180](https://github.com/AmadeusITGroup/AgnosUI/blob/5c052e99309ca831f867eebe4a6ec87196141d12/core/src/components/slider/slider.ts#L180)

If true, the minimum label will be visible

***

### progressDisplayOptions

> **progressDisplayOptions**: [`ProgressDisplayOptions`](ProgressDisplayOptions.md)[]

Defined in: [core/src/components/slider/slider.ts:200](https://github.com/AmadeusITGroup/AgnosUI/blob/5c052e99309ca831f867eebe4a6ec87196141d12/core/src/components/slider/slider.ts#L200)

Array of objects representing progress display options

***

### readonly

> **readonly**: `boolean`

Defined in: [core/src/components/slider/slider.ts:113](https://github.com/AmadeusITGroup/AgnosUI/blob/5c052e99309ca831f867eebe4a6ec87196141d12/core/src/components/slider/slider.ts#L113)

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.readonly`

***

### rtl

> **rtl**: `boolean`

Defined in: [core/src/components/slider/slider.ts:155](https://github.com/AmadeusITGroup/AgnosUI/blob/5c052e99309ca831f867eebe4a6ec87196141d12/core/src/components/slider/slider.ts#L155)

It `true` slider display is inversed

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.rtl`

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

Defined in: [core/src/components/slider/slider.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/5c052e99309ca831f867eebe4a6ec87196141d12/core/src/components/slider/slider.ts#L148)

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`SliderCommonPropsAndState.showMinMaxLabels`

***

### showValueLabels

> **showValueLabels**: `boolean`

Defined in: [core/src/components/slider/slider.ts:141](https://github.com/AmadeusITGroup/AgnosUI/blob/5c052e99309ca831f867eebe4a6ec87196141d12/core/src/components/slider/slider.ts#L141)

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`SliderCommonPropsAndState.showValueLabels`

***

### sortedHandles

> **sortedHandles**: [`SliderHandle`](SliderHandle.md)[]

Defined in: [core/src/components/slider/slider.ts:195](https://github.com/AmadeusITGroup/AgnosUI/blob/5c052e99309ca831f867eebe4a6ec87196141d12/core/src/components/slider/slider.ts#L195)

Array of the sorted handles to display

***

### sortedValues

> **sortedValues**: `number`[]

Defined in: [core/src/components/slider/slider.ts:165](https://github.com/AmadeusITGroup/AgnosUI/blob/5c052e99309ca831f867eebe4a6ec87196141d12/core/src/components/slider/slider.ts#L165)

Sorted slider values

***

### stepSize

> **stepSize**: `number`

Defined in: [core/src/components/slider/slider.ts:106](https://github.com/AmadeusITGroup/AgnosUI/blob/5c052e99309ca831f867eebe4a6ec87196141d12/core/src/components/slider/slider.ts#L106)

Unit value between slider steps

#### Default Value

`1`

#### Inherited from

`SliderCommonPropsAndState.stepSize`

***

### values

> **values**: `number`[]

Defined in: [core/src/components/slider/slider.ts:134](https://github.com/AmadeusITGroup/AgnosUI/blob/5c052e99309ca831f867eebe4a6ec87196141d12/core/src/components/slider/slider.ts#L134)

Current slider values

#### Default Value

`[0]`

#### Inherited from

`SliderCommonPropsAndState.values`

***

### vertical

> **vertical**: `boolean`

Defined in: [core/src/components/slider/slider.ts:127](https://github.com/AmadeusITGroup/AgnosUI/blob/5c052e99309ca831f867eebe4a6ec87196141d12/core/src/components/slider/slider.ts#L127)

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.vertical`
