Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:48

Represents the state of a slider component.

## Properties

### className

> **className**: `string`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:193

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### combinedLabelDisplay

> **combinedLabelDisplay**: `boolean`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:83

If true, the label when the handles are close is visible

***

### combinedLabelPositionLeft

> **combinedLabelPositionLeft**: `number`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:59

Combined label left offset in %

***

### combinedLabelPositionTop

> **combinedLabelPositionTop**: `number`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:65

Combined label top offset in %

***

### disabled

> **disabled**: `boolean`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:146

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

***

### handle

> **handle**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotHandleContext`](SliderSlotHandleContext.md)\>

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:215

Slot to change the handlers

***

### handleDisplayOptions

> **handleDisplayOptions**: [`HandleDisplayOptions`](HandleDisplayOptions.md)[]

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:101

Array of objects representing handle display options

***

### interactive

> **interactive**: `boolean`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:107

Check if the slider is interactive, meaning it is not disabled or readonly

***

### label

> **label**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotLabelContext`](SliderSlotLabelContext.md)\>

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:209

Slot to change the default labels of the slider

#### Default Value

```ts
({value}: SliderSlotLabelContext) => '' + value
```

***

### max

> **max**: `number`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:122

Maximum value that can be assigned to the slider

#### Default Value

`100`

***

### maxValueLabelDisplay

> **maxValueLabelDisplay**: `boolean`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:77

If true, the maximum label will be visible

***

### min

> **min**: `number`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:114

Minimum value that can be assigned to the slider

#### Default Value

`0`

***

### minValueLabelDisplay

> **minValueLabelDisplay**: `boolean`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:71

If true, the minimum label will be visible

***

### progressDisplayOptions

> **progressDisplayOptions**: [`ProgressDisplayOptions`](ProgressDisplayOptions.md)[]

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:95

Array of objects representing progress display options

***

### readonly

> **readonly**: `boolean`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:138

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

***

### rtl

> **rtl**: `boolean`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:186

It `true` slider display is inversed

#### Default Value

`false`

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:178

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

***

### showValueLabels

> **showValueLabels**: `boolean`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:170

If `true` the value labels are displayed on the slider

#### Default Value

`true`

***

### sortedHandles

> **sortedHandles**: [`SliderHandle`](SliderHandle.md)[]

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:89

Array of the sorted handles to display

***

### sortedValues

> **sortedValues**: `number`[]

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:53

Sorted slider values

***

### stepSize

> **stepSize**: `number`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:130

Unit value between slider steps

#### Default Value

`1`

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderContext`](SliderContext.md)\>

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:198

Slot to change the default display of the slider

***

### values

> **values**: `number`[]

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:162

Current slider values

#### Default Value

`[0]`

***

### vertical

> **vertical**: `boolean`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:154

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`
