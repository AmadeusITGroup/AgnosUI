Defined in: [core-bootstrap/src/components/slider/slider.ts:59](https://github.com/AmadeusITGroup/AgnosUI/blob/10565ebaa4e9635f2e3317688d18bb90f5231957/core-bootstrap/src/components/slider/slider.ts#L59)

Represents the state of a slider component.

## Extends

- `SliderState`.`SliderExtraProps`

## Properties

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/10565ebaa4e9635f2e3317688d18bb90f5231957/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreState.className`

***

### combinedLabelDisplay

> **combinedLabelDisplay**: `boolean`

Defined in: [core/src/components/slider/slider.ts:190](https://github.com/AmadeusITGroup/AgnosUI/blob/10565ebaa4e9635f2e3317688d18bb90f5231957/core/src/components/slider/slider.ts#L190)

If true, the label when the handles are close is visible

#### Inherited from

`CoreState.combinedLabelDisplay`

***

### combinedLabelPositionLeft

> **combinedLabelPositionLeft**: `number`

Defined in: [core/src/components/slider/slider.ts:170](https://github.com/AmadeusITGroup/AgnosUI/blob/10565ebaa4e9635f2e3317688d18bb90f5231957/core/src/components/slider/slider.ts#L170)

Combined label left offset in %

#### Inherited from

`CoreState.combinedLabelPositionLeft`

***

### combinedLabelPositionTop

> **combinedLabelPositionTop**: `number`

Defined in: [core/src/components/slider/slider.ts:175](https://github.com/AmadeusITGroup/AgnosUI/blob/10565ebaa4e9635f2e3317688d18bb90f5231957/core/src/components/slider/slider.ts#L175)

Combined label top offset in %

#### Inherited from

`CoreState.combinedLabelPositionTop`

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/slider/slider.ts:120](https://github.com/AmadeusITGroup/AgnosUI/blob/10565ebaa4e9635f2e3317688d18bb90f5231957/core/src/components/slider/slider.ts#L120)

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Inherited from

`CoreState.disabled`

***

### handle

> **handle**: `SlotContent`\<[`SliderSlotHandleContext`](SliderSlotHandleContext.md)\>

Defined in: [core-bootstrap/src/components/slider/slider.ts:53](https://github.com/AmadeusITGroup/AgnosUI/blob/10565ebaa4e9635f2e3317688d18bb90f5231957/core-bootstrap/src/components/slider/slider.ts#L53)

Slot to change the handlers

#### Inherited from

`SliderExtraProps.handle`

***

### handleDisplayOptions

> **handleDisplayOptions**: [`HandleDisplayOptions`](HandleDisplayOptions.md)[]

Defined in: [core/src/components/slider/slider.ts:205](https://github.com/AmadeusITGroup/AgnosUI/blob/10565ebaa4e9635f2e3317688d18bb90f5231957/core/src/components/slider/slider.ts#L205)

Array of objects representing handle display options

#### Inherited from

`CoreState.handleDisplayOptions`

***

### interactive

> **interactive**: `boolean`

Defined in: [core/src/components/slider/slider.ts:210](https://github.com/AmadeusITGroup/AgnosUI/blob/10565ebaa4e9635f2e3317688d18bb90f5231957/core/src/components/slider/slider.ts#L210)

Check if the slider is interactive, meaning it is not disabled or readonly

#### Inherited from

`CoreState.interactive`

***

### label

> **label**: `SlotContent`\<[`SliderSlotLabelContext`](SliderSlotLabelContext.md)\>

Defined in: [core-bootstrap/src/components/slider/slider.ts:48](https://github.com/AmadeusITGroup/AgnosUI/blob/10565ebaa4e9635f2e3317688d18bb90f5231957/core-bootstrap/src/components/slider/slider.ts#L48)

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

Defined in: [core/src/components/slider/slider.ts:99](https://github.com/AmadeusITGroup/AgnosUI/blob/10565ebaa4e9635f2e3317688d18bb90f5231957/core/src/components/slider/slider.ts#L99)

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Inherited from

`CoreState.max`

***

### maxValueLabelDisplay

> **maxValueLabelDisplay**: `boolean`

Defined in: [core/src/components/slider/slider.ts:185](https://github.com/AmadeusITGroup/AgnosUI/blob/10565ebaa4e9635f2e3317688d18bb90f5231957/core/src/components/slider/slider.ts#L185)

If true, the maximum label will be visible

#### Inherited from

`CoreState.maxValueLabelDisplay`

***

### min

> **min**: `number`

Defined in: [core/src/components/slider/slider.ts:92](https://github.com/AmadeusITGroup/AgnosUI/blob/10565ebaa4e9635f2e3317688d18bb90f5231957/core/src/components/slider/slider.ts#L92)

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Inherited from

`CoreState.min`

***

### minValueLabelDisplay

> **minValueLabelDisplay**: `boolean`

Defined in: [core/src/components/slider/slider.ts:180](https://github.com/AmadeusITGroup/AgnosUI/blob/10565ebaa4e9635f2e3317688d18bb90f5231957/core/src/components/slider/slider.ts#L180)

If true, the minimum label will be visible

#### Inherited from

`CoreState.minValueLabelDisplay`

***

### progressDisplayOptions

> **progressDisplayOptions**: [`ProgressDisplayOptions`](ProgressDisplayOptions.md)[]

Defined in: [core/src/components/slider/slider.ts:200](https://github.com/AmadeusITGroup/AgnosUI/blob/10565ebaa4e9635f2e3317688d18bb90f5231957/core/src/components/slider/slider.ts#L200)

Array of objects representing progress display options

#### Inherited from

`CoreState.progressDisplayOptions`

***

### readonly

> **readonly**: `boolean`

Defined in: [core/src/components/slider/slider.ts:113](https://github.com/AmadeusITGroup/AgnosUI/blob/10565ebaa4e9635f2e3317688d18bb90f5231957/core/src/components/slider/slider.ts#L113)

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Inherited from

`CoreState.readonly`

***

### rtl

> **rtl**: `boolean`

Defined in: [core/src/components/slider/slider.ts:155](https://github.com/AmadeusITGroup/AgnosUI/blob/10565ebaa4e9635f2e3317688d18bb90f5231957/core/src/components/slider/slider.ts#L155)

It `true` slider display is inversed

#### Default Value

`false`

#### Inherited from

`CoreState.rtl`

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

Defined in: [core/src/components/slider/slider.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/10565ebaa4e9635f2e3317688d18bb90f5231957/core/src/components/slider/slider.ts#L148)

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`CoreState.showMinMaxLabels`

***

### showValueLabels

> **showValueLabels**: `boolean`

Defined in: [core/src/components/slider/slider.ts:141](https://github.com/AmadeusITGroup/AgnosUI/blob/10565ebaa4e9635f2e3317688d18bb90f5231957/core/src/components/slider/slider.ts#L141)

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`CoreState.showValueLabels`

***

### sortedHandles

> **sortedHandles**: [`SliderHandle`](SliderHandle.md)[]

Defined in: [core/src/components/slider/slider.ts:195](https://github.com/AmadeusITGroup/AgnosUI/blob/10565ebaa4e9635f2e3317688d18bb90f5231957/core/src/components/slider/slider.ts#L195)

Array of the sorted handles to display

#### Inherited from

`CoreState.sortedHandles`

***

### sortedValues

> **sortedValues**: `number`[]

Defined in: [core/src/components/slider/slider.ts:165](https://github.com/AmadeusITGroup/AgnosUI/blob/10565ebaa4e9635f2e3317688d18bb90f5231957/core/src/components/slider/slider.ts#L165)

Sorted slider values

#### Inherited from

`CoreState.sortedValues`

***

### stepSize

> **stepSize**: `number`

Defined in: [core/src/components/slider/slider.ts:106](https://github.com/AmadeusITGroup/AgnosUI/blob/10565ebaa4e9635f2e3317688d18bb90f5231957/core/src/components/slider/slider.ts#L106)

Unit value between slider steps

#### Default Value

`1`

#### Inherited from

`CoreState.stepSize`

***

### structure

> **structure**: `SlotContent`\<[`SliderContext`](SliderContext.md)\>

Defined in: [core-bootstrap/src/components/slider/slider.ts:38](https://github.com/AmadeusITGroup/AgnosUI/blob/10565ebaa4e9635f2e3317688d18bb90f5231957/core-bootstrap/src/components/slider/slider.ts#L38)

Slot to change the default display of the slider

#### Inherited from

`SliderExtraProps.structure`

***

### values

> **values**: `number`[]

Defined in: [core/src/components/slider/slider.ts:134](https://github.com/AmadeusITGroup/AgnosUI/blob/10565ebaa4e9635f2e3317688d18bb90f5231957/core/src/components/slider/slider.ts#L134)

Current slider values

#### Default Value

`[0]`

#### Inherited from

`CoreState.values`

***

### vertical

> **vertical**: `boolean`

Defined in: [core/src/components/slider/slider.ts:127](https://github.com/AmadeusITGroup/AgnosUI/blob/10565ebaa4e9635f2e3317688d18bb90f5231957/core/src/components/slider/slider.ts#L127)

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Inherited from

`CoreState.vertical`
