## Properties

### ariaLabelHandle()

> **ariaLabelHandle**: (`value`, `sortedIndex`, `index`) => `string`

Return the value for the 'aria-label' attribute for the handle

#### Parameters

• **value**: `number`

value of the handle

• **sortedIndex**: `number`

index of the handle in the sorted list

• **index**: `number`

index of the handle in the original list

#### Returns

`string`

#### Default Value

```ts
(value: number) => '' + value
```

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:206

***

### ariaValueText()

> **ariaValueText**: (`value`, `sortedIndex`, `index`) => `string`

Return the value for the 'aria-valuetext' attribute for the handle

#### Parameters

• **value**: `number`

value of the handle

• **sortedIndex**: `number`

index of the handle in the sorted list

• **index**: `number`

index of the handle in the original list

#### Returns

`string`

#### Default Value

```ts
(value: number) => '' + value
```

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:220

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:319

***

### disabled

> **disabled**: `boolean`

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:272

***

### handle

> **handle**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotHandleContext`](../type-aliases/SliderSlotHandleContext.md)\>

Slot to change the handlers

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:341

***

### label

> **label**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotLabelContext`](../type-aliases/SliderSlotLabelContext.md)\>

Slot to change the default labels of the slider

#### Default Value

```ts
({value}: SliderSlotLabelContext) => '' + value
```

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:335

***

### max

> **max**: `number`

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:248

***

### min

> **min**: `number`

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:240

***

### onValuesChange()

> **onValuesChange**: (`values`) => `void`

An event emitted when slider values are changed

Event payload equals to the updated slider values

#### Parameters

• **values**: `number`[]

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:233

***

### readonly

> **readonly**: `boolean`

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:264

***

### rtl

> **rtl**: `boolean`

It `true` slider display is inversed

#### Default Value

`false`

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:312

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:304

***

### showValueLabels

> **showValueLabels**: `boolean`

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:296

***

### stepSize

> **stepSize**: `number`

Unit value between slider steps

#### Default Value

`1`

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:256

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderContext`](../type-aliases/SliderContext.md)\>

Slot to change the default display of the slider

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:324

***

### values

> **values**: `number`[]

Current slider values

#### Default Value

`[0]`

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:288

***

### vertical

> **vertical**: `boolean`

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:280
