## Properties

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

react/bootstrap/src/components/slider/slider.gen.ts:178

***

### combinedLabelDisplay

> **combinedLabelDisplay**: `boolean`

If true, the label when the handles are close is visible

#### Defined in

react/bootstrap/src/components/slider/slider.gen.ts:68

***

### combinedLabelPositionLeft

> **combinedLabelPositionLeft**: `number`

Combined label left offset in %

#### Defined in

react/bootstrap/src/components/slider/slider.gen.ts:44

***

### combinedLabelPositionTop

> **combinedLabelPositionTop**: `number`

Combined label top offset in %

#### Defined in

react/bootstrap/src/components/slider/slider.gen.ts:50

***

### disabled

> **disabled**: `boolean`

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Defined in

react/bootstrap/src/components/slider/slider.gen.ts:131

***

### handle

> **handle**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotHandleContext`](SliderSlotHandleContext.md)\>

Slot to change the handlers

#### Defined in

react/bootstrap/src/components/slider/slider.gen.ts:200

***

### handleDisplayOptions

> **handleDisplayOptions**: [`HandleDisplayOptions`](HandleDisplayOptions.md)[]

Array of objects representing handle display options

#### Defined in

react/bootstrap/src/components/slider/slider.gen.ts:86

***

### interactive

> **interactive**: `boolean`

Check if the slider is interactive, meaning it is not disabled or readonly

#### Defined in

react/bootstrap/src/components/slider/slider.gen.ts:92

***

### label

> **label**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotLabelContext`](SliderSlotLabelContext.md)\>

Slot to change the default labels of the slider

#### Default Value

```ts
({value}: SliderSlotLabelContext) => '' + value
```

#### Defined in

react/bootstrap/src/components/slider/slider.gen.ts:194

***

### max

> **max**: `number`

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Defined in

react/bootstrap/src/components/slider/slider.gen.ts:107

***

### maxValueLabelDisplay

> **maxValueLabelDisplay**: `boolean`

If true, the maximum label will be visible

#### Defined in

react/bootstrap/src/components/slider/slider.gen.ts:62

***

### min

> **min**: `number`

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Defined in

react/bootstrap/src/components/slider/slider.gen.ts:99

***

### minValueLabelDisplay

> **minValueLabelDisplay**: `boolean`

If true, the minimum label will be visible

#### Defined in

react/bootstrap/src/components/slider/slider.gen.ts:56

***

### progressDisplayOptions

> **progressDisplayOptions**: [`ProgressDisplayOptions`](ProgressDisplayOptions.md)[]

Array of objects representing progress display options

#### Defined in

react/bootstrap/src/components/slider/slider.gen.ts:80

***

### readonly

> **readonly**: `boolean`

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Defined in

react/bootstrap/src/components/slider/slider.gen.ts:123

***

### rtl

> **rtl**: `boolean`

It `true` slider display is inversed

#### Default Value

`false`

#### Defined in

react/bootstrap/src/components/slider/slider.gen.ts:171

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Defined in

react/bootstrap/src/components/slider/slider.gen.ts:163

***

### showValueLabels

> **showValueLabels**: `boolean`

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Defined in

react/bootstrap/src/components/slider/slider.gen.ts:155

***

### sortedHandles

> **sortedHandles**: [`SliderHandle`](SliderHandle.md)[]

Array of the sorted handles to display

#### Defined in

react/bootstrap/src/components/slider/slider.gen.ts:74

***

### sortedValues

> **sortedValues**: `number`[]

Sorted slider values

#### Defined in

react/bootstrap/src/components/slider/slider.gen.ts:38

***

### stepSize

> **stepSize**: `number`

Unit value between slider steps

#### Default Value

`1`

#### Defined in

react/bootstrap/src/components/slider/slider.gen.ts:115

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderContext`](SliderContext.md)\>

Slot to change the default display of the slider

#### Defined in

react/bootstrap/src/components/slider/slider.gen.ts:183

***

### values

> **values**: `number`[]

Current slider values

#### Default Value

`[0]`

#### Defined in

react/bootstrap/src/components/slider/slider.gen.ts:147

***

### vertical

> **vertical**: `boolean`

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Defined in

react/bootstrap/src/components/slider/slider.gen.ts:139
