Represents the state of a slider component.

## Properties

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:193

***

### combinedLabelDisplay

> **combinedLabelDisplay**: `boolean`

If true, the label when the handles are close is visible

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:83

***

### combinedLabelPositionLeft

> **combinedLabelPositionLeft**: `number`

Combined label left offset in %

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:59

***

### combinedLabelPositionTop

> **combinedLabelPositionTop**: `number`

Combined label top offset in %

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:65

***

### disabled

> **disabled**: `boolean`

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:146

***

### handle

> **handle**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotHandleContext`](SliderSlotHandleContext.md)\>

Slot to change the handlers

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:215

***

### handleDisplayOptions

> **handleDisplayOptions**: [`HandleDisplayOptions`](HandleDisplayOptions.md)[]

Array of objects representing handle display options

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:101

***

### interactive

> **interactive**: `boolean`

Check if the slider is interactive, meaning it is not disabled or readonly

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:107

***

### label

> **label**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotLabelContext`](SliderSlotLabelContext.md)\>

Slot to change the default labels of the slider

#### Default Value

```ts
({value}: SliderSlotLabelContext) => '' + value
```

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:209

***

### max

> **max**: `number`

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:122

***

### maxValueLabelDisplay

> **maxValueLabelDisplay**: `boolean`

If true, the maximum label will be visible

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:77

***

### min

> **min**: `number`

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:114

***

### minValueLabelDisplay

> **minValueLabelDisplay**: `boolean`

If true, the minimum label will be visible

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:71

***

### progressDisplayOptions

> **progressDisplayOptions**: [`ProgressDisplayOptions`](ProgressDisplayOptions.md)[]

Array of objects representing progress display options

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:95

***

### readonly

> **readonly**: `boolean`

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:138

***

### rtl

> **rtl**: `boolean`

It `true` slider display is inversed

#### Default Value

`false`

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:186

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:178

***

### showValueLabels

> **showValueLabels**: `boolean`

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:170

***

### sortedHandles

> **sortedHandles**: [`SliderHandle`](SliderHandle.md)[]

Array of the sorted handles to display

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:89

***

### sortedValues

> **sortedValues**: `number`[]

Sorted slider values

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:53

***

### stepSize

> **stepSize**: `number`

Unit value between slider steps

#### Default Value

`1`

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:130

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderContext`](SliderContext.md)\>

Slot to change the default display of the slider

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:198

***

### values

> **values**: `number`[]

Current slider values

#### Default Value

`[0]`

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:162

***

### vertical

> **vertical**: `boolean`

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:154
