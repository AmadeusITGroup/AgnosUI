Represents the state of a slider component.

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

[core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/core/src/components/commonProps.ts#L10)

***

### combinedLabelDisplay

> **combinedLabelDisplay**: `boolean`

If true, the label when the handles are close is visible

#### Inherited from

`CoreState.combinedLabelDisplay`

#### Defined in

[core/src/components/slider/slider.ts:182](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/core/src/components/slider/slider.ts#L182)

***

### combinedLabelPositionLeft

> **combinedLabelPositionLeft**: `number`

Combined label left offset in %

#### Inherited from

`CoreState.combinedLabelPositionLeft`

#### Defined in

[core/src/components/slider/slider.ts:162](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/core/src/components/slider/slider.ts#L162)

***

### combinedLabelPositionTop

> **combinedLabelPositionTop**: `number`

Combined label top offset in %

#### Inherited from

`CoreState.combinedLabelPositionTop`

#### Defined in

[core/src/components/slider/slider.ts:167](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/core/src/components/slider/slider.ts#L167)

***

### disabled

> **disabled**: `boolean`

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Inherited from

`CoreState.disabled`

#### Defined in

[core/src/components/slider/slider.ts:112](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/core/src/components/slider/slider.ts#L112)

***

### handle

> **handle**: `SlotContent`\<[`SliderSlotHandleContext`](SliderSlotHandleContext.md)\>

Slot to change the handlers

#### Inherited from

`SliderExtraProps.handle`

#### Defined in

[core-bootstrap/src/components/slider/slider.ts:53](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/core-bootstrap/src/components/slider/slider.ts#L53)

***

### handleDisplayOptions

> **handleDisplayOptions**: [`HandleDisplayOptions`](HandleDisplayOptions.md)[]

Array of objects representing handle display options

#### Inherited from

`CoreState.handleDisplayOptions`

#### Defined in

[core/src/components/slider/slider.ts:197](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/core/src/components/slider/slider.ts#L197)

***

### interactive

> **interactive**: `boolean`

Check if the slider is interactive, meaning it is not disabled or readonly

#### Inherited from

`CoreState.interactive`

#### Defined in

[core/src/components/slider/slider.ts:202](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/core/src/components/slider/slider.ts#L202)

***

### label

> **label**: `SlotContent`\<[`SliderSlotLabelContext`](SliderSlotLabelContext.md)\>

Slot to change the default labels of the slider

#### Default Value

```ts
({value}: SliderSlotLabelContext) => '' + value
```

#### Inherited from

`SliderExtraProps.label`

#### Defined in

[core-bootstrap/src/components/slider/slider.ts:48](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/core-bootstrap/src/components/slider/slider.ts#L48)

***

### max

> **max**: `number`

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Inherited from

`CoreState.max`

#### Defined in

[core/src/components/slider/slider.ts:91](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/core/src/components/slider/slider.ts#L91)

***

### maxValueLabelDisplay

> **maxValueLabelDisplay**: `boolean`

If true, the maximum label will be visible

#### Inherited from

`CoreState.maxValueLabelDisplay`

#### Defined in

[core/src/components/slider/slider.ts:177](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/core/src/components/slider/slider.ts#L177)

***

### min

> **min**: `number`

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Inherited from

`CoreState.min`

#### Defined in

[core/src/components/slider/slider.ts:84](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/core/src/components/slider/slider.ts#L84)

***

### minValueLabelDisplay

> **minValueLabelDisplay**: `boolean`

If true, the minimum label will be visible

#### Inherited from

`CoreState.minValueLabelDisplay`

#### Defined in

[core/src/components/slider/slider.ts:172](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/core/src/components/slider/slider.ts#L172)

***

### progressDisplayOptions

> **progressDisplayOptions**: [`ProgressDisplayOptions`](ProgressDisplayOptions.md)[]

Array of objects representing progress display options

#### Inherited from

`CoreState.progressDisplayOptions`

#### Defined in

[core/src/components/slider/slider.ts:192](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/core/src/components/slider/slider.ts#L192)

***

### readonly

> **readonly**: `boolean`

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Inherited from

`CoreState.readonly`

#### Defined in

[core/src/components/slider/slider.ts:105](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/core/src/components/slider/slider.ts#L105)

***

### rtl

> **rtl**: `boolean`

It `true` slider display is inversed

#### Default Value

`false`

#### Inherited from

`CoreState.rtl`

#### Defined in

[core/src/components/slider/slider.ts:147](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/core/src/components/slider/slider.ts#L147)

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`CoreState.showMinMaxLabels`

#### Defined in

[core/src/components/slider/slider.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/core/src/components/slider/slider.ts#L140)

***

### showValueLabels

> **showValueLabels**: `boolean`

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`CoreState.showValueLabels`

#### Defined in

[core/src/components/slider/slider.ts:133](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/core/src/components/slider/slider.ts#L133)

***

### sortedHandles

> **sortedHandles**: [`SliderHandle`](SliderHandle.md)[]

Array of the sorted handles to display

#### Inherited from

`CoreState.sortedHandles`

#### Defined in

[core/src/components/slider/slider.ts:187](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/core/src/components/slider/slider.ts#L187)

***

### sortedValues

> **sortedValues**: `number`[]

Sorted slider values

#### Inherited from

`CoreState.sortedValues`

#### Defined in

[core/src/components/slider/slider.ts:157](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/core/src/components/slider/slider.ts#L157)

***

### stepSize

> **stepSize**: `number`

Unit value between slider steps

#### Default Value

`1`

#### Inherited from

`CoreState.stepSize`

#### Defined in

[core/src/components/slider/slider.ts:98](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/core/src/components/slider/slider.ts#L98)

***

### structure

> **structure**: `SlotContent`\<[`SliderContext`](SliderContext.md)\>

Slot to change the default display of the slider

#### Inherited from

`SliderExtraProps.structure`

#### Defined in

[core-bootstrap/src/components/slider/slider.ts:38](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/core-bootstrap/src/components/slider/slider.ts#L38)

***

### values

> **values**: `number`[]

Current slider values

#### Default Value

`[0]`

#### Inherited from

`CoreState.values`

#### Defined in

[core/src/components/slider/slider.ts:126](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/core/src/components/slider/slider.ts#L126)

***

### vertical

> **vertical**: `boolean`

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Inherited from

`CoreState.vertical`

#### Defined in

[core/src/components/slider/slider.ts:119](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/core/src/components/slider/slider.ts#L119)
