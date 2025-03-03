Defined in: [core-bootstrap/src/components/slider/slider.ts:74](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core-bootstrap/src/components/slider/slider.ts#L74)

Represents the state of a slider component.

## Extends

- `SliderState`.`SliderExtraProps`

## Properties

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreState.className`

***

### combinedLabelDisplay

> **combinedLabelDisplay**: `boolean`

Defined in: [core/src/components/slider/slider.ts:227](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/slider/slider.ts#L227)

If true, the label when the handles are close is visible

#### Inherited from

`CoreState.combinedLabelDisplay`

***

### combinedLabelPositionLeft

> **combinedLabelPositionLeft**: `number`

Defined in: [core/src/components/slider/slider.ts:207](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/slider/slider.ts#L207)

Combined label left offset in %

#### Inherited from

`CoreState.combinedLabelPositionLeft`

***

### combinedLabelPositionTop

> **combinedLabelPositionTop**: `number`

Defined in: [core/src/components/slider/slider.ts:212](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/slider/slider.ts#L212)

Combined label top offset in %

#### Inherited from

`CoreState.combinedLabelPositionTop`

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/slider/slider.ts:150](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/slider/slider.ts#L150)

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Inherited from

`CoreState.disabled`

***

### handle

> **handle**: `SlotContent`\<[`SliderSlotHandleContext`](SliderSlotHandleContext.md)\>

Defined in: [core-bootstrap/src/components/slider/slider.ts:63](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core-bootstrap/src/components/slider/slider.ts#L63)

Slot to change the handlers

#### Inherited from

`SliderExtraProps.handle`

***

### handleDisplayOptions

> **handleDisplayOptions**: [`HandleDisplayOptions`](HandleDisplayOptions.md)[]

Defined in: [core/src/components/slider/slider.ts:242](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/slider/slider.ts#L242)

Array of objects representing handle display options

#### Inherited from

`CoreState.handleDisplayOptions`

***

### interactive

> **interactive**: `boolean`

Defined in: [core/src/components/slider/slider.ts:247](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/slider/slider.ts#L247)

Check if the slider is interactive, meaning it is not disabled or readonly

#### Inherited from

`CoreState.interactive`

***

### label

> **label**: `SlotContent`\<[`SliderSlotLabelContext`](SliderSlotLabelContext.md)\>

Defined in: [core-bootstrap/src/components/slider/slider.ts:58](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core-bootstrap/src/components/slider/slider.ts#L58)

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

Defined in: [core/src/components/slider/slider.ts:129](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/slider/slider.ts#L129)

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Inherited from

`CoreState.max`

***

### maxValueLabelDisplay

> **maxValueLabelDisplay**: `boolean`

Defined in: [core/src/components/slider/slider.ts:222](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/slider/slider.ts#L222)

If true, the maximum label will be visible

#### Inherited from

`CoreState.maxValueLabelDisplay`

***

### min

> **min**: `number`

Defined in: [core/src/components/slider/slider.ts:122](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/slider/slider.ts#L122)

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Inherited from

`CoreState.min`

***

### minValueLabelDisplay

> **minValueLabelDisplay**: `boolean`

Defined in: [core/src/components/slider/slider.ts:217](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/slider/slider.ts#L217)

If true, the minimum label will be visible

#### Inherited from

`CoreState.minValueLabelDisplay`

***

### progressDisplayOptions

> **progressDisplayOptions**: [`ProgressDisplayOptions`](ProgressDisplayOptions.md)[]

Defined in: [core/src/components/slider/slider.ts:237](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/slider/slider.ts#L237)

Array of objects representing progress display options

#### Inherited from

`CoreState.progressDisplayOptions`

***

### readonly

> **readonly**: `boolean`

Defined in: [core/src/components/slider/slider.ts:143](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/slider/slider.ts#L143)

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Inherited from

`CoreState.readonly`

***

### rtl

> **rtl**: `boolean`

Defined in: [core/src/components/slider/slider.ts:192](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/slider/slider.ts#L192)

It `true` slider display is inversed

#### Default Value

`false`

#### Inherited from

`CoreState.rtl`

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

Defined in: [core/src/components/slider/slider.ts:178](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/slider/slider.ts#L178)

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`CoreState.showMinMaxLabels`

***

### showTicks

> **showTicks**: `boolean`

Defined in: [core/src/components/slider/slider.ts:185](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/slider/slider.ts#L185)

If `true` the ticks are displayed on the slider

#### Default Value

`false`

#### Inherited from

`CoreState.showTicks`

***

### showValueLabels

> **showValueLabels**: `boolean`

Defined in: [core/src/components/slider/slider.ts:171](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/slider/slider.ts#L171)

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`CoreState.showValueLabels`

***

### sortedHandles

> **sortedHandles**: [`SliderHandle`](SliderHandle.md)[]

Defined in: [core/src/components/slider/slider.ts:232](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/slider/slider.ts#L232)

Array of the sorted handles to display

#### Inherited from

`CoreState.sortedHandles`

***

### sortedValues

> **sortedValues**: `number`[]

Defined in: [core/src/components/slider/slider.ts:202](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/slider/slider.ts#L202)

Sorted slider values

#### Inherited from

`CoreState.sortedValues`

***

### stepSize

> **stepSize**: `number`

Defined in: [core/src/components/slider/slider.ts:136](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/slider/slider.ts#L136)

Unit value between slider steps

#### Default Value

`1`

#### Inherited from

`CoreState.stepSize`

***

### structure

> **structure**: `SlotContent`\<[`SliderContext`](SliderContext.md)\>

Defined in: [core-bootstrap/src/components/slider/slider.ts:48](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core-bootstrap/src/components/slider/slider.ts#L48)

Slot to change the default display of the slider

#### Inherited from

`SliderExtraProps.structure`

***

### tick

> **tick**: `SlotContent`\<[`SliderSlotTickContext`](SliderSlotTickContext.md)\>

Defined in: [core-bootstrap/src/components/slider/slider.ts:68](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core-bootstrap/src/components/slider/slider.ts#L68)

Slot to change the ticks

#### Inherited from

`SliderExtraProps.tick`

***

### ticks

> **ticks**: [`SliderTick`](SliderTick.md)[]

Defined in: [core/src/components/slider/slider.ts:252](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/slider/slider.ts#L252)

Array of ticks to display on the slider component

#### Inherited from

`CoreState.ticks`

***

### values

> **values**: `number`[]

Defined in: [core/src/components/slider/slider.ts:164](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/slider/slider.ts#L164)

Current slider values

#### Default Value

`[0]`

#### Inherited from

`CoreState.values`

***

### vertical

> **vertical**: `boolean`

Defined in: [core/src/components/slider/slider.ts:157](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/slider/slider.ts#L157)

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Inherited from

`CoreState.vertical`
