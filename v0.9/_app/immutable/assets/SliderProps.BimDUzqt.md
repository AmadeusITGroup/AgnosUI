Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:253

Represents the properties for the Slider component.

## Properties

### ariaLabel()

> **ariaLabel**: (`sortedIndex`) => `string`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:264

Return the value for the 'aria-label' attribute for the handle

#### Parameters

##### sortedIndex

`number`

index of the handle in the sorted list

#### Returns

`string`

#### Default Value

```ts
() => 'Value'
```

***

### ariaLabelledBy()

> **ariaLabelledBy**: (`sortedIndex`) => `string`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:276

Return the value for the 'aria-labelledBy' attribute for the handle

#### Parameters

##### sortedIndex

`number`

index of the handle in the sorted list

#### Returns

`string`

#### Default Value

```ts
() => ''
```

***

### ariaValueText()

> **ariaValueText**: (`value`, `sortedIndex`) => `string`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:289

Return the value for the 'aria-valuetext' attribute for the handle

#### Parameters

##### value

`number`

value of the handle

##### sortedIndex

`number`

index of the handle in the sorted list

#### Returns

`string`

#### Default Value

```ts
(value: number) => ''
```

***

### className

> **className**: `string`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:413

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### disabled

> **disabled**: `boolean`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:358

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

***

### handle

> **handle**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotHandleContext`](SliderSlotHandleContext.md)\>

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:435

Slot to change the handlers

***

### label

> **label**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotLabelContext`](SliderSlotLabelContext.md)\>

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:429

Slot to change the default labels of the slider

#### Default Value

```ts
({value}: SliderSlotLabelContext) => '' + value
```

***

### max

> **max**: `number`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:334

Maximum value that can be assigned to the slider

#### Default Value

`100`

***

### min

> **min**: `number`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:326

Minimum value that can be assigned to the slider

#### Default Value

`0`

***

### onValuesChange()

> **onValuesChange**: (`values`) => `void`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:302

An event emitted when slider values are changed

Event payload equals to the updated slider values

#### Parameters

##### values

`number`[]

#### Returns

`void`

#### Default Value

```ts
() => {}
```

***

### readonly

> **readonly**: `boolean`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:350

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

***

### rtl

> **rtl**: `boolean`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:406

It `true` slider display is inversed

#### Default Value

`false`

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:390

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

***

### showTicks

> **showTicks**: `boolean`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:398

If `true` the ticks are displayed on the slider

#### Default Value

`false`

***

### showTickValues

> **showTickValues**: `boolean`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:319

If `true` the tick values are displayed on the slider

#### Default Value

`true`

***

### showValueLabels

> **showValueLabels**: `boolean`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:382

If `true` the value labels are displayed on the slider

#### Default Value

`true`

***

### stepSize

> **stepSize**: `number`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:342

Unit value between slider steps

#### Default Value

`1`

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderContext`](SliderContext.md)\>

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:418

Slot to change the default display of the slider

***

### tick

> **tick**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotTickContext`](SliderSlotTickContext.md)\>

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:441

Slot to change the ticks

***

### tickInterval

> **tickInterval**: `number`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:311

Unit value between the ticks
If value is set to `0` the [stepSize](#stepsize) is used to space the ticks

#### Default Value

`0`

***

### values

> **values**: `number`[]

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:374

Current slider values

#### Default Value

`[0]`

***

### vertical

> **vertical**: `boolean`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:366

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`
