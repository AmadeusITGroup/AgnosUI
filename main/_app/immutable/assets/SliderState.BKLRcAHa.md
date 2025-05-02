Defined in: [core/src/components/slider/slider.ts:205](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/slider/slider.ts#L205)

Represents the state of a slider component.

## Extends

- `SliderCommonPropsAndState`

## Properties

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`SliderCommonPropsAndState.className`

***

### combinedLabelDisplay

> **combinedLabelDisplay**: `boolean`

Defined in: [core/src/components/slider/slider.ts:234](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/slider/slider.ts#L234)

If true, the label when the handles are close is visible

***

### combinedLabelPositionLeft

> **combinedLabelPositionLeft**: `number`

Defined in: [core/src/components/slider/slider.ts:214](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/slider/slider.ts#L214)

Combined label left offset in %

***

### combinedLabelPositionTop

> **combinedLabelPositionTop**: `number`

Defined in: [core/src/components/slider/slider.ts:219](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/slider/slider.ts#L219)

Combined label top offset in %

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/slider/slider.ts:157](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/slider/slider.ts#L157)

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.disabled`

***

### handleDisplayOptions

> **handleDisplayOptions**: [`HandleDisplayOptions`](HandleDisplayOptions.md)[]

Defined in: [core/src/components/slider/slider.ts:249](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/slider/slider.ts#L249)

Array of objects representing handle display options

***

### interactive

> **interactive**: `boolean`

Defined in: [core/src/components/slider/slider.ts:254](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/slider/slider.ts#L254)

Check if the slider is interactive, meaning it is not disabled or readonly

***

### max

> **max**: `number`

Defined in: [core/src/components/slider/slider.ts:136](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/slider/slider.ts#L136)

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Inherited from

`SliderCommonPropsAndState.max`

***

### maxValueLabelDisplay

> **maxValueLabelDisplay**: `boolean`

Defined in: [core/src/components/slider/slider.ts:229](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/slider/slider.ts#L229)

If true, the maximum label will be visible

***

### min

> **min**: `number`

Defined in: [core/src/components/slider/slider.ts:129](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/slider/slider.ts#L129)

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Inherited from

`SliderCommonPropsAndState.min`

***

### minValueLabelDisplay

> **minValueLabelDisplay**: `boolean`

Defined in: [core/src/components/slider/slider.ts:224](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/slider/slider.ts#L224)

If true, the minimum label will be visible

***

### progressDisplayOptions

> **progressDisplayOptions**: [`ProgressDisplayOptions`](ProgressDisplayOptions.md)[]

Defined in: [core/src/components/slider/slider.ts:244](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/slider/slider.ts#L244)

Array of objects representing progress display options

***

### readonly

> **readonly**: `boolean`

Defined in: [core/src/components/slider/slider.ts:150](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/slider/slider.ts#L150)

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.readonly`

***

### rtl

> **rtl**: `boolean`

Defined in: [core/src/components/slider/slider.ts:199](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/slider/slider.ts#L199)

It `true` slider display is inversed

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.rtl`

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

Defined in: [core/src/components/slider/slider.ts:185](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/slider/slider.ts#L185)

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`SliderCommonPropsAndState.showMinMaxLabels`

***

### showTicks

> **showTicks**: `boolean`

Defined in: [core/src/components/slider/slider.ts:192](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/slider/slider.ts#L192)

If `true` the ticks are displayed on the slider

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.showTicks`

***

### showValueLabels

> **showValueLabels**: `boolean`

Defined in: [core/src/components/slider/slider.ts:178](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/slider/slider.ts#L178)

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`SliderCommonPropsAndState.showValueLabels`

***

### sortedHandles

> **sortedHandles**: [`SliderHandle`](SliderHandle.md)[]

Defined in: [core/src/components/slider/slider.ts:239](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/slider/slider.ts#L239)

Array of the sorted handles to display

***

### sortedValues

> **sortedValues**: `number`[]

Defined in: [core/src/components/slider/slider.ts:209](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/slider/slider.ts#L209)

Sorted slider values

***

### stepSize

> **stepSize**: `number`

Defined in: [core/src/components/slider/slider.ts:143](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/slider/slider.ts#L143)

Unit value between slider steps

#### Default Value

`1`

#### Inherited from

`SliderCommonPropsAndState.stepSize`

***

### ticks

> **ticks**: [`SliderTick`](SliderTick.md)[]

Defined in: [core/src/components/slider/slider.ts:259](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/slider/slider.ts#L259)

Array of ticks to display on the slider component

***

### values

> **values**: `number`[]

Defined in: [core/src/components/slider/slider.ts:171](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/slider/slider.ts#L171)

Current slider values

#### Default Value

`[0]`

#### Inherited from

`SliderCommonPropsAndState.values`

***

### vertical

> **vertical**: `boolean`

Defined in: [core/src/components/slider/slider.ts:164](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/slider/slider.ts#L164)

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.vertical`
