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

[core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/core/src/components/commonProps.ts#L10)

***

### combinedLabelDisplay

> **combinedLabelDisplay**: `boolean`

If true, the label when the handles are close is visible

#### Inherited from

`CoreState.combinedLabelDisplay`

#### Defined in

[core/src/components/slider/slider.ts:186](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/core/src/components/slider/slider.ts#L186)

***

### combinedLabelPositionLeft

> **combinedLabelPositionLeft**: `number`

Combined label left offset in %

#### Inherited from

`CoreState.combinedLabelPositionLeft`

#### Defined in

[core/src/components/slider/slider.ts:166](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/core/src/components/slider/slider.ts#L166)

***

### combinedLabelPositionTop

> **combinedLabelPositionTop**: `number`

Combined label top offset in %

#### Inherited from

`CoreState.combinedLabelPositionTop`

#### Defined in

[core/src/components/slider/slider.ts:171](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/core/src/components/slider/slider.ts#L171)

***

### disabled

> **disabled**: `boolean`

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Inherited from

`CoreState.disabled`

#### Defined in

[core/src/components/slider/slider.ts:116](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/core/src/components/slider/slider.ts#L116)

***

### handle

> **handle**: `SlotContent`\<[`SliderSlotHandleContext`](SliderSlotHandleContext.md)\>

Slot to change the handlers

#### Inherited from

`SliderExtraProps.handle`

#### Defined in

[core-bootstrap/src/components/slider/slider.ts:53](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/core-bootstrap/src/components/slider/slider.ts#L53)

***

### handleDisplayOptions

> **handleDisplayOptions**: [`HandleDisplayOptions`](HandleDisplayOptions.md)[]

Array of objects representing handle display options

#### Inherited from

`CoreState.handleDisplayOptions`

#### Defined in

[core/src/components/slider/slider.ts:201](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/core/src/components/slider/slider.ts#L201)

***

### interactive

> **interactive**: `boolean`

Check if the slider is interactive, meaning it is not disabled or readonly

#### Inherited from

`CoreState.interactive`

#### Defined in

[core/src/components/slider/slider.ts:206](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/core/src/components/slider/slider.ts#L206)

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

[core-bootstrap/src/components/slider/slider.ts:48](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/core-bootstrap/src/components/slider/slider.ts#L48)

***

### max

> **max**: `number`

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Inherited from

`CoreState.max`

#### Defined in

[core/src/components/slider/slider.ts:95](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/core/src/components/slider/slider.ts#L95)

***

### maxValueLabelDisplay

> **maxValueLabelDisplay**: `boolean`

If true, the maximum label will be visible

#### Inherited from

`CoreState.maxValueLabelDisplay`

#### Defined in

[core/src/components/slider/slider.ts:181](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/core/src/components/slider/slider.ts#L181)

***

### min

> **min**: `number`

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Inherited from

`CoreState.min`

#### Defined in

[core/src/components/slider/slider.ts:88](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/core/src/components/slider/slider.ts#L88)

***

### minValueLabelDisplay

> **minValueLabelDisplay**: `boolean`

If true, the minimum label will be visible

#### Inherited from

`CoreState.minValueLabelDisplay`

#### Defined in

[core/src/components/slider/slider.ts:176](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/core/src/components/slider/slider.ts#L176)

***

### progressDisplayOptions

> **progressDisplayOptions**: [`ProgressDisplayOptions`](ProgressDisplayOptions.md)[]

Array of objects representing progress display options

#### Inherited from

`CoreState.progressDisplayOptions`

#### Defined in

[core/src/components/slider/slider.ts:196](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/core/src/components/slider/slider.ts#L196)

***

### readonly

> **readonly**: `boolean`

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Inherited from

`CoreState.readonly`

#### Defined in

[core/src/components/slider/slider.ts:109](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/core/src/components/slider/slider.ts#L109)

***

### rtl

> **rtl**: `boolean`

It `true` slider display is inversed

#### Default Value

`false`

#### Inherited from

`CoreState.rtl`

#### Defined in

[core/src/components/slider/slider.ts:151](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/core/src/components/slider/slider.ts#L151)

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`CoreState.showMinMaxLabels`

#### Defined in

[core/src/components/slider/slider.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/core/src/components/slider/slider.ts#L144)

***

### showValueLabels

> **showValueLabels**: `boolean`

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`CoreState.showValueLabels`

#### Defined in

[core/src/components/slider/slider.ts:137](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/core/src/components/slider/slider.ts#L137)

***

### sortedHandles

> **sortedHandles**: [`SliderHandle`](SliderHandle.md)[]

Array of the sorted handles to display

#### Inherited from

`CoreState.sortedHandles`

#### Defined in

[core/src/components/slider/slider.ts:191](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/core/src/components/slider/slider.ts#L191)

***

### sortedValues

> **sortedValues**: `number`[]

Sorted slider values

#### Inherited from

`CoreState.sortedValues`

#### Defined in

[core/src/components/slider/slider.ts:161](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/core/src/components/slider/slider.ts#L161)

***

### stepSize

> **stepSize**: `number`

Unit value between slider steps

#### Default Value

`1`

#### Inherited from

`CoreState.stepSize`

#### Defined in

[core/src/components/slider/slider.ts:102](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/core/src/components/slider/slider.ts#L102)

***

### structure

> **structure**: `SlotContent`\<[`SliderContext`](SliderContext.md)\>

Slot to change the default display of the slider

#### Inherited from

`SliderExtraProps.structure`

#### Defined in

[core-bootstrap/src/components/slider/slider.ts:38](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/core-bootstrap/src/components/slider/slider.ts#L38)

***

### values

> **values**: `number`[]

Current slider values

#### Default Value

`[0]`

#### Inherited from

`CoreState.values`

#### Defined in

[core/src/components/slider/slider.ts:130](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/core/src/components/slider/slider.ts#L130)

***

### vertical

> **vertical**: `boolean`

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Inherited from

`CoreState.vertical`

#### Defined in

[core/src/components/slider/slider.ts:123](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/core/src/components/slider/slider.ts#L123)
