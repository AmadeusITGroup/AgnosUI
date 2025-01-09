Defined in: svelte/bootstrap/src/components/slider/slider.gen.ts:221

Represents the properties for the Slider component.

## Properties

### ariaLabel()

> **ariaLabel**: (`sortedIndex`) => `string`

Defined in: svelte/bootstrap/src/components/slider/slider.gen.ts:232

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

Defined in: svelte/bootstrap/src/components/slider/slider.gen.ts:244

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

Defined in: svelte/bootstrap/src/components/slider/slider.gen.ts:257

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

Defined in: svelte/bootstrap/src/components/slider/slider.gen.ts:356

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### disabled

> **disabled**: `boolean`

Defined in: svelte/bootstrap/src/components/slider/slider.gen.ts:309

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

***

### handle

> **handle**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotHandleContext`](SliderSlotHandleContext.md)\>

Defined in: svelte/bootstrap/src/components/slider/slider.gen.ts:378

Slot to change the handlers

***

### label

> **label**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotLabelContext`](SliderSlotLabelContext.md)\>

Defined in: svelte/bootstrap/src/components/slider/slider.gen.ts:372

Slot to change the default labels of the slider

#### Default Value

```ts
({value}: SliderSlotLabelContext) => '' + value
```

***

### max

> **max**: `number`

Defined in: svelte/bootstrap/src/components/slider/slider.gen.ts:285

Maximum value that can be assigned to the slider

#### Default Value

`100`

***

### min

> **min**: `number`

Defined in: svelte/bootstrap/src/components/slider/slider.gen.ts:277

Minimum value that can be assigned to the slider

#### Default Value

`0`

***

### onValuesChange()

> **onValuesChange**: (`values`) => `void`

Defined in: svelte/bootstrap/src/components/slider/slider.gen.ts:270

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

Defined in: svelte/bootstrap/src/components/slider/slider.gen.ts:301

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

***

### rtl

> **rtl**: `boolean`

Defined in: svelte/bootstrap/src/components/slider/slider.gen.ts:349

It `true` slider display is inversed

#### Default Value

`false`

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

Defined in: svelte/bootstrap/src/components/slider/slider.gen.ts:341

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

***

### showValueLabels

> **showValueLabels**: `boolean`

Defined in: svelte/bootstrap/src/components/slider/slider.gen.ts:333

If `true` the value labels are displayed on the slider

#### Default Value

`true`

***

### stepSize

> **stepSize**: `number`

Defined in: svelte/bootstrap/src/components/slider/slider.gen.ts:293

Unit value between slider steps

#### Default Value

`1`

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderContext`](SliderContext.md)\>

Defined in: svelte/bootstrap/src/components/slider/slider.gen.ts:361

Slot to change the default display of the slider

***

### values

> **values**: `number`[]

Defined in: svelte/bootstrap/src/components/slider/slider.gen.ts:325

Current slider values

#### Default Value

`[0]`

***

### vertical

> **vertical**: `boolean`

Defined in: svelte/bootstrap/src/components/slider/slider.gen.ts:317

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`
