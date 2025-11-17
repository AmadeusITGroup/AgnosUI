Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:60

Represents the state of a slider component.

## Properties

### className

> **className**: `string`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:219

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### combinedLabelDisplay

> **combinedLabelDisplay**: `boolean`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:95

If true, the label when the handles are close is visible

***

### combinedLabelPositionLeft

> **combinedLabelPositionLeft**: `number`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:71

Combined label left offset in %

***

### combinedLabelPositionTop

> **combinedLabelPositionTop**: `number`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:77

Combined label top offset in %

***

### disabled

> **disabled**: `boolean`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:164

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

***

### handle

> **handle**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotHandleContext`](SliderSlotHandleContext.md)\>

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:241

Slot to change the handlers

***

### handleDisplayOptions

> **handleDisplayOptions**: [`HandleDisplayOptions`](HandleDisplayOptions.md)[]

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:113

Array of objects representing handle display options

***

### interactive

> **interactive**: `boolean`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:119

Check if the slider is interactive, meaning it is not disabled or readonly

***

### label

> **label**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotLabelContext`](SliderSlotLabelContext.md)\>

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:235

Slot to change the default labels of the slider

#### Default Value

```ts
({value}: SliderSlotLabelContext) => '' + value
```

***

### max

> **max**: `number`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:140

Maximum value that can be assigned to the slider

#### Default Value

`100`

***

### maxValueLabelDisplay

> **maxValueLabelDisplay**: `boolean`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:89

If true, the maximum label will be visible

***

### min

> **min**: `number`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:132

Minimum value that can be assigned to the slider

#### Default Value

`0`

***

### minValueLabelDisplay

> **minValueLabelDisplay**: `boolean`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:83

If true, the minimum label will be visible

***

### progressDisplayOptions

> **progressDisplayOptions**: [`ProgressDisplayOptions`](ProgressDisplayOptions.md)[]

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:107

Array of objects representing progress display options

***

### readonly

> **readonly**: `boolean`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:156

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

***

### rtl

> **rtl**: `boolean`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:212

It `true` slider display is inversed

#### Default Value

`false`

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:196

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

***

### showTicks

> **showTicks**: `boolean`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:204

If `true` the ticks are displayed on the slider

#### Default Value

`false`

***

### showValueLabels

> **showValueLabels**: `boolean`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:188

If `true` the value labels are displayed on the slider

#### Default Value

`true`

***

### sortedHandles

> **sortedHandles**: [`SliderHandle`](SliderHandle.md)[]

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:101

Array of the sorted handles to display

***

### sortedValues

> **sortedValues**: `number`[]

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:65

Sorted slider values

***

### stepSize

> **stepSize**: `number`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:148

Unit value between slider steps

#### Default Value

`1`

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderContext`](SliderContext.md)\>

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:224

Slot to change the default display of the slider

***

### tick

> **tick**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotTickContext`](SliderSlotTickContext.md)\>

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:247

Slot to change the ticks

***

### ticks

> **ticks**: [`SliderTick`](SliderTick.md)[]

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:125

Array of ticks to display on the slider component

***

### values

> **values**: `number`[]

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:180

Current slider values

#### Default Value

`[0]`

***

### vertical

> **vertical**: `boolean`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:172

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`
