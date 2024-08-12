## Extends

- `SliderState`.`SliderExtraProps`

## Properties

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreState.className`

#### Defined in

[core/src/components/commonProps.ts:7](https://github.com/AmadeusITGroup/AgnosUI/blob/d6d2cb3ab810b6573861685325958a8ff5880891/core/src/components/commonProps.ts#L7)

***

### combinedLabelDisplay

> **combinedLabelDisplay**: `boolean`

If true, the label when the handles are close is visible

#### Inherited from

`CoreState.combinedLabelDisplay`

#### Defined in

[core/src/components/slider/slider.ts:170](https://github.com/AmadeusITGroup/AgnosUI/blob/d6d2cb3ab810b6573861685325958a8ff5880891/core/src/components/slider/slider.ts#L170)

***

### combinedLabelPositionLeft

> **combinedLabelPositionLeft**: `number`

Combined label left offset in %

#### Inherited from

`CoreState.combinedLabelPositionLeft`

#### Defined in

[core/src/components/slider/slider.ts:150](https://github.com/AmadeusITGroup/AgnosUI/blob/d6d2cb3ab810b6573861685325958a8ff5880891/core/src/components/slider/slider.ts#L150)

***

### combinedLabelPositionTop

> **combinedLabelPositionTop**: `number`

Combined label top offset in %

#### Inherited from

`CoreState.combinedLabelPositionTop`

#### Defined in

[core/src/components/slider/slider.ts:155](https://github.com/AmadeusITGroup/AgnosUI/blob/d6d2cb3ab810b6573861685325958a8ff5880891/core/src/components/slider/slider.ts#L155)

***

### disabled

> **disabled**: `boolean`

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Inherited from

`CoreState.disabled`

#### Defined in

[core/src/components/slider/slider.ts:103](https://github.com/AmadeusITGroup/AgnosUI/blob/d6d2cb3ab810b6573861685325958a8ff5880891/core/src/components/slider/slider.ts#L103)

***

### handle

> **handle**: `SlotContent`\<[`SliderSlotHandleContext`](../type-aliases/SliderSlotHandleContext.md)\>

Slot to change the handlers

#### Inherited from

`SliderExtraProps.handle`

#### Defined in

[core-bootstrap/src/components/slider/slider.ts:37](https://github.com/AmadeusITGroup/AgnosUI/blob/d6d2cb3ab810b6573861685325958a8ff5880891/core-bootstrap/src/components/slider/slider.ts#L37)

***

### handleDisplayOptions

> **handleDisplayOptions**: [`HandleDisplayOptions`](HandleDisplayOptions.md)[]

Array of objects representing handle display options

#### Inherited from

`CoreState.handleDisplayOptions`

#### Defined in

[core/src/components/slider/slider.ts:185](https://github.com/AmadeusITGroup/AgnosUI/blob/d6d2cb3ab810b6573861685325958a8ff5880891/core/src/components/slider/slider.ts#L185)

***

### interactive

> **interactive**: `boolean`

Check if the slider is interactive, meaning it is not disabled or readonly

#### Inherited from

`CoreState.interactive`

#### Defined in

[core/src/components/slider/slider.ts:190](https://github.com/AmadeusITGroup/AgnosUI/blob/d6d2cb3ab810b6573861685325958a8ff5880891/core/src/components/slider/slider.ts#L190)

***

### label

> **label**: `SlotContent`\<[`SliderSlotLabelContext`](../type-aliases/SliderSlotLabelContext.md)\>

Slot to change the default labels of the slider

#### Default Value

```ts
({value}: SliderSlotLabelContext) => '' + value
```

#### Inherited from

`SliderExtraProps.label`

#### Defined in

[core-bootstrap/src/components/slider/slider.ts:32](https://github.com/AmadeusITGroup/AgnosUI/blob/d6d2cb3ab810b6573861685325958a8ff5880891/core-bootstrap/src/components/slider/slider.ts#L32)

***

### max

> **max**: `number`

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Inherited from

`CoreState.max`

#### Defined in

[core/src/components/slider/slider.ts:82](https://github.com/AmadeusITGroup/AgnosUI/blob/d6d2cb3ab810b6573861685325958a8ff5880891/core/src/components/slider/slider.ts#L82)

***

### maxValueLabelDisplay

> **maxValueLabelDisplay**: `boolean`

If true, the maximum label will be visible

#### Inherited from

`CoreState.maxValueLabelDisplay`

#### Defined in

[core/src/components/slider/slider.ts:165](https://github.com/AmadeusITGroup/AgnosUI/blob/d6d2cb3ab810b6573861685325958a8ff5880891/core/src/components/slider/slider.ts#L165)

***

### min

> **min**: `number`

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Inherited from

`CoreState.min`

#### Defined in

[core/src/components/slider/slider.ts:75](https://github.com/AmadeusITGroup/AgnosUI/blob/d6d2cb3ab810b6573861685325958a8ff5880891/core/src/components/slider/slider.ts#L75)

***

### minValueLabelDisplay

> **minValueLabelDisplay**: `boolean`

If true, the minimum label will be visible

#### Inherited from

`CoreState.minValueLabelDisplay`

#### Defined in

[core/src/components/slider/slider.ts:160](https://github.com/AmadeusITGroup/AgnosUI/blob/d6d2cb3ab810b6573861685325958a8ff5880891/core/src/components/slider/slider.ts#L160)

***

### progressDisplayOptions

> **progressDisplayOptions**: [`ProgressDisplayOptions`](ProgressDisplayOptions.md)[]

Array of objects representing progress display options

#### Inherited from

`CoreState.progressDisplayOptions`

#### Defined in

[core/src/components/slider/slider.ts:180](https://github.com/AmadeusITGroup/AgnosUI/blob/d6d2cb3ab810b6573861685325958a8ff5880891/core/src/components/slider/slider.ts#L180)

***

### readonly

> **readonly**: `boolean`

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Inherited from

`CoreState.readonly`

#### Defined in

[core/src/components/slider/slider.ts:96](https://github.com/AmadeusITGroup/AgnosUI/blob/d6d2cb3ab810b6573861685325958a8ff5880891/core/src/components/slider/slider.ts#L96)

***

### rtl

> **rtl**: `boolean`

It `true` slider display is inversed

#### Default Value

`false`

#### Inherited from

`CoreState.rtl`

#### Defined in

[core/src/components/slider/slider.ts:138](https://github.com/AmadeusITGroup/AgnosUI/blob/d6d2cb3ab810b6573861685325958a8ff5880891/core/src/components/slider/slider.ts#L138)

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`CoreState.showMinMaxLabels`

#### Defined in

[core/src/components/slider/slider.ts:131](https://github.com/AmadeusITGroup/AgnosUI/blob/d6d2cb3ab810b6573861685325958a8ff5880891/core/src/components/slider/slider.ts#L131)

***

### showValueLabels

> **showValueLabels**: `boolean`

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`CoreState.showValueLabels`

#### Defined in

[core/src/components/slider/slider.ts:124](https://github.com/AmadeusITGroup/AgnosUI/blob/d6d2cb3ab810b6573861685325958a8ff5880891/core/src/components/slider/slider.ts#L124)

***

### sortedHandles

> **sortedHandles**: [`SliderHandle`](SliderHandle.md)[]

Array of the sorted handles to display

#### Inherited from

`CoreState.sortedHandles`

#### Defined in

[core/src/components/slider/slider.ts:175](https://github.com/AmadeusITGroup/AgnosUI/blob/d6d2cb3ab810b6573861685325958a8ff5880891/core/src/components/slider/slider.ts#L175)

***

### sortedValues

> **sortedValues**: `number`[]

Sorted slider values

#### Inherited from

`CoreState.sortedValues`

#### Defined in

[core/src/components/slider/slider.ts:145](https://github.com/AmadeusITGroup/AgnosUI/blob/d6d2cb3ab810b6573861685325958a8ff5880891/core/src/components/slider/slider.ts#L145)

***

### stepSize

> **stepSize**: `number`

Unit value between slider steps

#### Default Value

`1`

#### Inherited from

`CoreState.stepSize`

#### Defined in

[core/src/components/slider/slider.ts:89](https://github.com/AmadeusITGroup/AgnosUI/blob/d6d2cb3ab810b6573861685325958a8ff5880891/core/src/components/slider/slider.ts#L89)

***

### structure

> **structure**: `SlotContent`\<[`SliderContext`](../type-aliases/SliderContext.md)\>

Slot to change the default display of the slider

#### Inherited from

`SliderExtraProps.structure`

#### Defined in

[core-bootstrap/src/components/slider/slider.ts:22](https://github.com/AmadeusITGroup/AgnosUI/blob/d6d2cb3ab810b6573861685325958a8ff5880891/core-bootstrap/src/components/slider/slider.ts#L22)

***

### values

> **values**: `number`[]

Current slider values

#### Default Value

`[0]`

#### Inherited from

`CoreState.values`

#### Defined in

[core/src/components/slider/slider.ts:117](https://github.com/AmadeusITGroup/AgnosUI/blob/d6d2cb3ab810b6573861685325958a8ff5880891/core/src/components/slider/slider.ts#L117)

***

### vertical

> **vertical**: `boolean`

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Inherited from

`CoreState.vertical`

#### Defined in

[core/src/components/slider/slider.ts:110](https://github.com/AmadeusITGroup/AgnosUI/blob/d6d2cb3ab810b6573861685325958a8ff5880891/core/src/components/slider/slider.ts#L110)
