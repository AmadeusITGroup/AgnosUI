Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:221

Represents the properties for the Slider component.

## Properties

### ariaLabelHandle()

> **ariaLabelHandle**: (`value`, `sortedIndex`, `index`) => `string`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:234

Return the value for the 'aria-label' attribute for the handle

#### Parameters

##### value

`number`

value of the handle

##### sortedIndex

`number`

index of the handle in the sorted list

##### index

`number`

index of the handle in the original list

#### Returns

`string`

#### Default Value

```ts
(value: number) => '' + value
```

***

### ariaValueText()

> **ariaValueText**: (`value`, `sortedIndex`, `index`) => `string`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:248

Return the value for the 'aria-valuetext' attribute for the handle

#### Parameters

##### value

`number`

value of the handle

##### sortedIndex

`number`

index of the handle in the sorted list

##### index

`number`

index of the handle in the original list

#### Returns

`string`

#### Default Value

```ts
(value: number) => '' + value
```

***

### className

> **className**: `string`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:347

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### disabled

> **disabled**: `boolean`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:300

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

***

### handle

> **handle**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotHandleContext`](SliderSlotHandleContext.md)\>

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:369

Slot to change the handlers

***

### label

> **label**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotLabelContext`](SliderSlotLabelContext.md)\>

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:363

Slot to change the default labels of the slider

#### Default Value

```ts
({value}: SliderSlotLabelContext) => '' + value
```

***

### max

> **max**: `number`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:276

Maximum value that can be assigned to the slider

#### Default Value

`100`

***

### min

> **min**: `number`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:268

Minimum value that can be assigned to the slider

#### Default Value

`0`

***

### onValuesChange()

> **onValuesChange**: (`values`) => `void`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:261

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

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:292

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

***

### rtl

> **rtl**: `boolean`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:340

It `true` slider display is inversed

#### Default Value

`false`

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:332

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

***

### showValueLabels

> **showValueLabels**: `boolean`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:324

If `true` the value labels are displayed on the slider

#### Default Value

`true`

***

### stepSize

> **stepSize**: `number`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:284

Unit value between slider steps

#### Default Value

`1`

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderContext`](SliderContext.md)\>

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:352

Slot to change the default display of the slider

***

### values

> **values**: `number`[]

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:316

Current slider values

#### Default Value

`[0]`

***

### vertical

> **vertical**: `boolean`

Defined in: angular/bootstrap/src/components/slider/slider.gen.ts:308

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`
