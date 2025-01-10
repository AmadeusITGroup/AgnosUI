Represents the state of a slider component.

## Extends

- `SliderCommonPropsAndState`

## Properties

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`SliderCommonPropsAndState.className`

#### Defined in

[core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/commonProps.ts#L10)

***

### combinedLabelDisplay

> **combinedLabelDisplay**: `boolean`

If true, the label when the handles are close is visible

#### Defined in

[core/src/components/slider/slider.ts:190](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/slider/slider.ts#L190)

***

### combinedLabelPositionLeft

> **combinedLabelPositionLeft**: `number`

Combined label left offset in %

#### Defined in

[core/src/components/slider/slider.ts:170](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/slider/slider.ts#L170)

***

### combinedLabelPositionTop

> **combinedLabelPositionTop**: `number`

Combined label top offset in %

#### Defined in

[core/src/components/slider/slider.ts:175](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/slider/slider.ts#L175)

***

### disabled

> **disabled**: `boolean`

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.disabled`

#### Defined in

[core/src/components/slider/slider.ts:120](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/slider/slider.ts#L120)

***

### handleDisplayOptions

> **handleDisplayOptions**: [`HandleDisplayOptions`](HandleDisplayOptions.md)[]

Array of objects representing handle display options

#### Defined in

[core/src/components/slider/slider.ts:205](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/slider/slider.ts#L205)

***

### interactive

> **interactive**: `boolean`

Check if the slider is interactive, meaning it is not disabled or readonly

#### Defined in

[core/src/components/slider/slider.ts:210](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/slider/slider.ts#L210)

***

### max

> **max**: `number`

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Inherited from

`SliderCommonPropsAndState.max`

#### Defined in

[core/src/components/slider/slider.ts:99](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/slider/slider.ts#L99)

***

### maxValueLabelDisplay

> **maxValueLabelDisplay**: `boolean`

If true, the maximum label will be visible

#### Defined in

[core/src/components/slider/slider.ts:185](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/slider/slider.ts#L185)

***

### min

> **min**: `number`

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Inherited from

`SliderCommonPropsAndState.min`

#### Defined in

[core/src/components/slider/slider.ts:92](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/slider/slider.ts#L92)

***

### minValueLabelDisplay

> **minValueLabelDisplay**: `boolean`

If true, the minimum label will be visible

#### Defined in

[core/src/components/slider/slider.ts:180](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/slider/slider.ts#L180)

***

### progressDisplayOptions

> **progressDisplayOptions**: [`ProgressDisplayOptions`](ProgressDisplayOptions.md)[]

Array of objects representing progress display options

#### Defined in

[core/src/components/slider/slider.ts:200](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/slider/slider.ts#L200)

***

### readonly

> **readonly**: `boolean`

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.readonly`

#### Defined in

[core/src/components/slider/slider.ts:113](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/slider/slider.ts#L113)

***

### rtl

> **rtl**: `boolean`

It `true` slider display is inversed

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.rtl`

#### Defined in

[core/src/components/slider/slider.ts:155](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/slider/slider.ts#L155)

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`SliderCommonPropsAndState.showMinMaxLabels`

#### Defined in

[core/src/components/slider/slider.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/slider/slider.ts#L148)

***

### showValueLabels

> **showValueLabels**: `boolean`

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`SliderCommonPropsAndState.showValueLabels`

#### Defined in

[core/src/components/slider/slider.ts:141](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/slider/slider.ts#L141)

***

### sortedHandles

> **sortedHandles**: [`SliderHandle`](SliderHandle.md)[]

Array of the sorted handles to display

#### Defined in

[core/src/components/slider/slider.ts:195](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/slider/slider.ts#L195)

***

### sortedValues

> **sortedValues**: `number`[]

Sorted slider values

#### Defined in

[core/src/components/slider/slider.ts:165](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/slider/slider.ts#L165)

***

### stepSize

> **stepSize**: `number`

Unit value between slider steps

#### Default Value

`1`

#### Inherited from

`SliderCommonPropsAndState.stepSize`

#### Defined in

[core/src/components/slider/slider.ts:106](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/slider/slider.ts#L106)

***

### values

> **values**: `number`[]

Current slider values

#### Default Value

`[0]`

#### Inherited from

`SliderCommonPropsAndState.values`

#### Defined in

[core/src/components/slider/slider.ts:134](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/slider/slider.ts#L134)

***

### vertical

> **vertical**: `boolean`

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.vertical`

#### Defined in

[core/src/components/slider/slider.ts:127](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/slider/slider.ts#L127)
