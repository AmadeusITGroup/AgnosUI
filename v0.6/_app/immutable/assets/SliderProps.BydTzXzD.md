Represents the properties for the Slider component.

## Properties

### ariaLabelHandle()

> **ariaLabelHandle**: (`value`, `sortedIndex`, `index`) => `string`

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

#### Defined in

svelte/bootstrap/src/components/slider/slider.gen.ts:234

***

### ariaValueText()

> **ariaValueText**: (`value`, `sortedIndex`, `index`) => `string`

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

#### Defined in

svelte/bootstrap/src/components/slider/slider.gen.ts:248

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

svelte/bootstrap/src/components/slider/slider.gen.ts:347

***

### disabled

> **disabled**: `boolean`

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Defined in

svelte/bootstrap/src/components/slider/slider.gen.ts:300

***

### handle

> **handle**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotHandleContext`](SliderSlotHandleContext.md)\>

Slot to change the handlers

#### Defined in

svelte/bootstrap/src/components/slider/slider.gen.ts:369

***

### label

> **label**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotLabelContext`](SliderSlotLabelContext.md)\>

Slot to change the default labels of the slider

#### Default Value

```ts
({value}: SliderSlotLabelContext) => '' + value
```

#### Defined in

svelte/bootstrap/src/components/slider/slider.gen.ts:363

***

### max

> **max**: `number`

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Defined in

svelte/bootstrap/src/components/slider/slider.gen.ts:276

***

### min

> **min**: `number`

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Defined in

svelte/bootstrap/src/components/slider/slider.gen.ts:268

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

svelte/bootstrap/src/components/slider/slider.gen.ts:261

***

### readonly

> **readonly**: `boolean`

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Defined in

svelte/bootstrap/src/components/slider/slider.gen.ts:292

***

### rtl

> **rtl**: `boolean`

It `true` slider display is inversed

#### Default Value

`false`

#### Defined in

svelte/bootstrap/src/components/slider/slider.gen.ts:340

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Defined in

svelte/bootstrap/src/components/slider/slider.gen.ts:332

***

### showValueLabels

> **showValueLabels**: `boolean`

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Defined in

svelte/bootstrap/src/components/slider/slider.gen.ts:324

***

### stepSize

> **stepSize**: `number`

Unit value between slider steps

#### Default Value

`1`

#### Defined in

svelte/bootstrap/src/components/slider/slider.gen.ts:284

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderContext`](SliderContext.md)\>

Slot to change the default display of the slider

#### Defined in

svelte/bootstrap/src/components/slider/slider.gen.ts:352

***

### values

> **values**: `number`[]

Current slider values

#### Default Value

`[0]`

#### Defined in

svelte/bootstrap/src/components/slider/slider.gen.ts:316

***

### vertical

> **vertical**: `boolean`

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Defined in

svelte/bootstrap/src/components/slider/slider.gen.ts:308
