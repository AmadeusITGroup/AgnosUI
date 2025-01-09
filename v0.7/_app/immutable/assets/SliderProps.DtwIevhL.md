Represents the properties for the Slider component.

## Properties

### ariaLabel()

> **ariaLabel**: (`sortedIndex`) => `string`

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

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:232

***

### ariaLabelledBy()

> **ariaLabelledBy**: (`sortedIndex`) => `string`

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

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:244

***

### ariaValueText()

> **ariaValueText**: (`value`, `sortedIndex`) => `string`

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

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:257

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:356

***

### disabled

> **disabled**: `boolean`

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:309

***

### handle

> **handle**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotHandleContext`](SliderSlotHandleContext.md)\>

Slot to change the handlers

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:378

***

### label

> **label**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotLabelContext`](SliderSlotLabelContext.md)\>

Slot to change the default labels of the slider

#### Default Value

```ts
({value}: SliderSlotLabelContext) => '' + value
```

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:372

***

### max

> **max**: `number`

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:285

***

### min

> **min**: `number`

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:277

***

### onValuesChange()

> **onValuesChange**: (`values`) => `void`

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

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:270

***

### readonly

> **readonly**: `boolean`

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:301

***

### rtl

> **rtl**: `boolean`

It `true` slider display is inversed

#### Default Value

`false`

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:349

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:341

***

### showValueLabels

> **showValueLabels**: `boolean`

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:333

***

### stepSize

> **stepSize**: `number`

Unit value between slider steps

#### Default Value

`1`

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:293

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderContext`](SliderContext.md)\>

Slot to change the default display of the slider

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:361

***

### values

> **values**: `number`[]

Current slider values

#### Default Value

`[0]`

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:325

***

### vertical

> **vertical**: `boolean`

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Defined in

angular/bootstrap/src/components/slider/slider.gen.ts:317
