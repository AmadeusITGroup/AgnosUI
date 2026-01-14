Defined in: [core/src/components/slider/slider.ts:207](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/slider/slider.ts#L207)

Represents the state of a slider component.

## Extends

- `SliderCommonPropsAndState`

## Properties

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`SliderCommonPropsAndState.className`

***

### combinedLabelDisplay

> **combinedLabelDisplay**: `boolean`

Defined in: [core/src/components/slider/slider.ts:236](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/slider/slider.ts#L236)

If true, the label when the handles are close is visible

***

### combinedLabelPositionLeft

> **combinedLabelPositionLeft**: `number`

Defined in: [core/src/components/slider/slider.ts:216](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/slider/slider.ts#L216)

Combined label left offset in %

***

### combinedLabelPositionTop

> **combinedLabelPositionTop**: `number`

Defined in: [core/src/components/slider/slider.ts:221](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/slider/slider.ts#L221)

Combined label top offset in %

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/slider/slider.ts:159](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/slider/slider.ts#L159)

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.disabled`

***

### handleDisplayOptions

> **handleDisplayOptions**: [`HandleDisplayOptions`](HandleDisplayOptions.md)[]

Defined in: [core/src/components/slider/slider.ts:251](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/slider/slider.ts#L251)

Array of objects representing handle display options

***

### interactive

> **interactive**: `boolean`

Defined in: [core/src/components/slider/slider.ts:256](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/slider/slider.ts#L256)

Check if the slider is interactive, meaning it is not disabled or readonly

***

### max

> **max**: `number`

Defined in: [core/src/components/slider/slider.ts:138](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/slider/slider.ts#L138)

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Inherited from

`SliderCommonPropsAndState.max`

***

### maxValueLabelDisplay

> **maxValueLabelDisplay**: `boolean`

Defined in: [core/src/components/slider/slider.ts:231](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/slider/slider.ts#L231)

If true, the maximum label will be visible

***

### min

> **min**: `number`

Defined in: [core/src/components/slider/slider.ts:131](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/slider/slider.ts#L131)

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Inherited from

`SliderCommonPropsAndState.min`

***

### minValueLabelDisplay

> **minValueLabelDisplay**: `boolean`

Defined in: [core/src/components/slider/slider.ts:226](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/slider/slider.ts#L226)

If true, the minimum label will be visible

***

### progressDisplayOptions

> **progressDisplayOptions**: [`ProgressDisplayOptions`](ProgressDisplayOptions.md)[]

Defined in: [core/src/components/slider/slider.ts:246](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/slider/slider.ts#L246)

Array of objects representing progress display options

***

### readonly

> **readonly**: `boolean`

Defined in: [core/src/components/slider/slider.ts:152](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/slider/slider.ts#L152)

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.readonly`

***

### rtl

> **rtl**: `boolean`

Defined in: [core/src/components/slider/slider.ts:201](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/slider/slider.ts#L201)

It `true` slider display is inversed

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.rtl`

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

Defined in: [core/src/components/slider/slider.ts:187](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/slider/slider.ts#L187)

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`SliderCommonPropsAndState.showMinMaxLabels`

***

### showTicks

> **showTicks**: `boolean`

Defined in: [core/src/components/slider/slider.ts:194](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/slider/slider.ts#L194)

If `true` the ticks are displayed on the slider

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.showTicks`

***

### showValueLabels

> **showValueLabels**: `boolean`

Defined in: [core/src/components/slider/slider.ts:180](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/slider/slider.ts#L180)

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`SliderCommonPropsAndState.showValueLabels`

***

### sortedHandles

> **sortedHandles**: [`SliderHandle`](SliderHandle.md)[]

Defined in: [core/src/components/slider/slider.ts:241](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/slider/slider.ts#L241)

Array of the sorted handles to display

***

### sortedValues

> **sortedValues**: `number`[]

Defined in: [core/src/components/slider/slider.ts:211](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/slider/slider.ts#L211)

Sorted slider values

***

### stepSize

> **stepSize**: `number`

Defined in: [core/src/components/slider/slider.ts:145](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/slider/slider.ts#L145)

Unit value between slider steps

#### Default Value

`1`

#### Inherited from

`SliderCommonPropsAndState.stepSize`

***

### ticks

> **ticks**: [`SliderTick`](SliderTick.md)[]

Defined in: [core/src/components/slider/slider.ts:261](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/slider/slider.ts#L261)

Array of ticks to display on the slider component

***

### values

> **values**: `number`[]

Defined in: [core/src/components/slider/slider.ts:173](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/slider/slider.ts#L173)

Current slider values

#### Default Value

`[0]`

#### Inherited from

`SliderCommonPropsAndState.values`

***

### vertical

> **vertical**: `boolean`

Defined in: [core/src/components/slider/slider.ts:166](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/slider/slider.ts#L166)

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.vertical`
