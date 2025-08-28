Defined in: [core-bootstrap/src/components/slider/slider.ts:74](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core-bootstrap/src/components/slider/slider.ts#L74)

Represents the state of a slider component.

## Extends

- `SliderState`.`SliderExtraProps`

## Properties

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreState.className`

***

### combinedLabelDisplay

> **combinedLabelDisplay**: `boolean`

Defined in: [core/src/components/slider/slider.ts:235](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/slider/slider.ts#L235)

If true, the label when the handles are close is visible

#### Inherited from

`CoreState.combinedLabelDisplay`

***

### combinedLabelPositionLeft

> **combinedLabelPositionLeft**: `number`

Defined in: [core/src/components/slider/slider.ts:215](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/slider/slider.ts#L215)

Combined label left offset in %

#### Inherited from

`CoreState.combinedLabelPositionLeft`

***

### combinedLabelPositionTop

> **combinedLabelPositionTop**: `number`

Defined in: [core/src/components/slider/slider.ts:220](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/slider/slider.ts#L220)

Combined label top offset in %

#### Inherited from

`CoreState.combinedLabelPositionTop`

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/slider/slider.ts:158](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/slider/slider.ts#L158)

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Inherited from

`CoreState.disabled`

***

### handle

> **handle**: `SlotContent`\<[`SliderSlotHandleContext`](SliderSlotHandleContext.md)\>

Defined in: [core-bootstrap/src/components/slider/slider.ts:63](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core-bootstrap/src/components/slider/slider.ts#L63)

Slot to change the handlers

#### Inherited from

`SliderExtraProps.handle`

***

### handleDisplayOptions

> **handleDisplayOptions**: [`HandleDisplayOptions`](HandleDisplayOptions.md)[]

Defined in: [core/src/components/slider/slider.ts:250](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/slider/slider.ts#L250)

Array of objects representing handle display options

#### Inherited from

`CoreState.handleDisplayOptions`

***

### interactive

> **interactive**: `boolean`

Defined in: [core/src/components/slider/slider.ts:255](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/slider/slider.ts#L255)

Check if the slider is interactive, meaning it is not disabled or readonly

#### Inherited from

`CoreState.interactive`

***

### label

> **label**: `SlotContent`\<[`SliderSlotLabelContext`](SliderSlotLabelContext.md)\>

Defined in: [core-bootstrap/src/components/slider/slider.ts:58](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core-bootstrap/src/components/slider/slider.ts#L58)

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

Defined in: [core/src/components/slider/slider.ts:137](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/slider/slider.ts#L137)

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Inherited from

`CoreState.max`

***

### maxValueLabelDisplay

> **maxValueLabelDisplay**: `boolean`

Defined in: [core/src/components/slider/slider.ts:230](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/slider/slider.ts#L230)

If true, the maximum label will be visible

#### Inherited from

`CoreState.maxValueLabelDisplay`

***

### min

> **min**: `number`

Defined in: [core/src/components/slider/slider.ts:130](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/slider/slider.ts#L130)

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Inherited from

`CoreState.min`

***

### minValueLabelDisplay

> **minValueLabelDisplay**: `boolean`

Defined in: [core/src/components/slider/slider.ts:225](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/slider/slider.ts#L225)

If true, the minimum label will be visible

#### Inherited from

`CoreState.minValueLabelDisplay`

***

### progressDisplayOptions

> **progressDisplayOptions**: [`ProgressDisplayOptions`](ProgressDisplayOptions.md)[]

Defined in: [core/src/components/slider/slider.ts:245](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/slider/slider.ts#L245)

Array of objects representing progress display options

#### Inherited from

`CoreState.progressDisplayOptions`

***

### readonly

> **readonly**: `boolean`

Defined in: [core/src/components/slider/slider.ts:151](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/slider/slider.ts#L151)

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Inherited from

`CoreState.readonly`

***

### rtl

> **rtl**: `boolean`

Defined in: [core/src/components/slider/slider.ts:200](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/slider/slider.ts#L200)

It `true` slider display is inversed

#### Default Value

`false`

#### Inherited from

`CoreState.rtl`

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

Defined in: [core/src/components/slider/slider.ts:186](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/slider/slider.ts#L186)

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`CoreState.showMinMaxLabels`

***

### showTicks

> **showTicks**: `boolean`

Defined in: [core/src/components/slider/slider.ts:193](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/slider/slider.ts#L193)

If `true` the ticks are displayed on the slider

#### Default Value

`false`

#### Inherited from

`CoreState.showTicks`

***

### showValueLabels

> **showValueLabels**: `boolean`

Defined in: [core/src/components/slider/slider.ts:179](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/slider/slider.ts#L179)

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`CoreState.showValueLabels`

***

### sortedHandles

> **sortedHandles**: [`SliderHandle`](SliderHandle.md)[]

Defined in: [core/src/components/slider/slider.ts:240](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/slider/slider.ts#L240)

Array of the sorted handles to display

#### Inherited from

`CoreState.sortedHandles`

***

### sortedValues

> **sortedValues**: `number`[]

Defined in: [core/src/components/slider/slider.ts:210](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/slider/slider.ts#L210)

Sorted slider values

#### Inherited from

`CoreState.sortedValues`

***

### stepSize

> **stepSize**: `number`

Defined in: [core/src/components/slider/slider.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/slider/slider.ts#L144)

Unit value between slider steps

#### Default Value

`1`

#### Inherited from

`CoreState.stepSize`

***

### structure

> **structure**: `SlotContent`\<[`SliderContext`](SliderContext.md)\>

Defined in: [core-bootstrap/src/components/slider/slider.ts:48](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core-bootstrap/src/components/slider/slider.ts#L48)

Slot to change the default display of the slider

#### Inherited from

`SliderExtraProps.structure`

***

### tick

> **tick**: `SlotContent`\<[`SliderSlotTickContext`](SliderSlotTickContext.md)\>

Defined in: [core-bootstrap/src/components/slider/slider.ts:68](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core-bootstrap/src/components/slider/slider.ts#L68)

Slot to change the ticks

#### Inherited from

`SliderExtraProps.tick`

***

### ticks

> **ticks**: [`SliderTick`](SliderTick.md)[]

Defined in: [core/src/components/slider/slider.ts:260](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/slider/slider.ts#L260)

Array of ticks to display on the slider component

#### Inherited from

`CoreState.ticks`

***

### values

> **values**: `number`[]

Defined in: [core/src/components/slider/slider.ts:172](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/slider/slider.ts#L172)

Current slider values

#### Default Value

`[0]`

#### Inherited from

`CoreState.values`

***

### vertical

> **vertical**: `boolean`

Defined in: [core/src/components/slider/slider.ts:165](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/slider/slider.ts#L165)

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Inherited from

`CoreState.vertical`
