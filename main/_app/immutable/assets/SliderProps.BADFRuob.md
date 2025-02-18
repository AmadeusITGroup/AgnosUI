Defined in: [core-bootstrap/src/components/slider/slider.ts:63](https://github.com/AmadeusITGroup/AgnosUI/blob/9c4ba085df68dd03e76684e1adfe990b83fa406f/core-bootstrap/src/components/slider/slider.ts#L63)

Represents the properties for the Slider component.

## Extends

- `SliderProps`.`SliderExtraProps`

## Properties

### ariaLabel()

> **ariaLabel**: (`sortedIndex`) => `string`

Defined in: [core/src/components/slider/slider.ts:226](https://github.com/AmadeusITGroup/AgnosUI/blob/9c4ba085df68dd03e76684e1adfe990b83fa406f/core/src/components/slider/slider.ts#L226)

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

#### Inherited from

`CoreProps.ariaLabel`

***

### ariaLabelledBy()

> **ariaLabelledBy**: (`sortedIndex`) => `string`

Defined in: [core/src/components/slider/slider.ts:237](https://github.com/AmadeusITGroup/AgnosUI/blob/9c4ba085df68dd03e76684e1adfe990b83fa406f/core/src/components/slider/slider.ts#L237)

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

#### Inherited from

`CoreProps.ariaLabelledBy`

***

### ariaValueText()

> **ariaValueText**: (`value`, `sortedIndex`) => `string`

Defined in: [core/src/components/slider/slider.ts:249](https://github.com/AmadeusITGroup/AgnosUI/blob/9c4ba085df68dd03e76684e1adfe990b83fa406f/core/src/components/slider/slider.ts#L249)

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

#### Inherited from

`CoreProps.ariaValueText`

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/9c4ba085df68dd03e76684e1adfe990b83fa406f/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreProps.className`

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/slider/slider.ts:120](https://github.com/AmadeusITGroup/AgnosUI/blob/9c4ba085df68dd03e76684e1adfe990b83fa406f/core/src/components/slider/slider.ts#L120)

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Inherited from

`CoreProps.disabled`

***

### handle

> **handle**: `SlotContent`\<[`SliderSlotHandleContext`](SliderSlotHandleContext.md)\>

Defined in: [core-bootstrap/src/components/slider/slider.ts:53](https://github.com/AmadeusITGroup/AgnosUI/blob/9c4ba085df68dd03e76684e1adfe990b83fa406f/core-bootstrap/src/components/slider/slider.ts#L53)

Slot to change the handlers

#### Inherited from

`SliderExtraProps.handle`

***

### label

> **label**: `SlotContent`\<[`SliderSlotLabelContext`](SliderSlotLabelContext.md)\>

Defined in: [core-bootstrap/src/components/slider/slider.ts:48](https://github.com/AmadeusITGroup/AgnosUI/blob/9c4ba085df68dd03e76684e1adfe990b83fa406f/core-bootstrap/src/components/slider/slider.ts#L48)

Slot to change the default labels of the slider

#### Default Value

```ts
({value}: SliderSlotLabelContext) => '' + value
```

#### Inherited from

`SliderExtraProps.label`

***

### max

> **max**: `number`

Defined in: [core/src/components/slider/slider.ts:99](https://github.com/AmadeusITGroup/AgnosUI/blob/9c4ba085df68dd03e76684e1adfe990b83fa406f/core/src/components/slider/slider.ts#L99)

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Inherited from

`CoreProps.max`

***

### min

> **min**: `number`

Defined in: [core/src/components/slider/slider.ts:92](https://github.com/AmadeusITGroup/AgnosUI/blob/9c4ba085df68dd03e76684e1adfe990b83fa406f/core/src/components/slider/slider.ts#L92)

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Inherited from

`CoreProps.min`

***

### onValuesChange()

> **onValuesChange**: (`values`) => `void`

Defined in: [core/src/components/slider/slider.ts:261](https://github.com/AmadeusITGroup/AgnosUI/blob/9c4ba085df68dd03e76684e1adfe990b83fa406f/core/src/components/slider/slider.ts#L261)

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

#### Inherited from

`CoreProps.onValuesChange`

***

### readonly

> **readonly**: `boolean`

Defined in: [core/src/components/slider/slider.ts:113](https://github.com/AmadeusITGroup/AgnosUI/blob/9c4ba085df68dd03e76684e1adfe990b83fa406f/core/src/components/slider/slider.ts#L113)

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Inherited from

`CoreProps.readonly`

***

### rtl

> **rtl**: `boolean`

Defined in: [core/src/components/slider/slider.ts:155](https://github.com/AmadeusITGroup/AgnosUI/blob/9c4ba085df68dd03e76684e1adfe990b83fa406f/core/src/components/slider/slider.ts#L155)

It `true` slider display is inversed

#### Default Value

`false`

#### Inherited from

`CoreProps.rtl`

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

Defined in: [core/src/components/slider/slider.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/9c4ba085df68dd03e76684e1adfe990b83fa406f/core/src/components/slider/slider.ts#L148)

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`CoreProps.showMinMaxLabels`

***

### showValueLabels

> **showValueLabels**: `boolean`

Defined in: [core/src/components/slider/slider.ts:141](https://github.com/AmadeusITGroup/AgnosUI/blob/9c4ba085df68dd03e76684e1adfe990b83fa406f/core/src/components/slider/slider.ts#L141)

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`CoreProps.showValueLabels`

***

### stepSize

> **stepSize**: `number`

Defined in: [core/src/components/slider/slider.ts:106](https://github.com/AmadeusITGroup/AgnosUI/blob/9c4ba085df68dd03e76684e1adfe990b83fa406f/core/src/components/slider/slider.ts#L106)

Unit value between slider steps

#### Default Value

`1`

#### Inherited from

`CoreProps.stepSize`

***

### structure

> **structure**: `SlotContent`\<[`SliderContext`](SliderContext.md)\>

Defined in: [core-bootstrap/src/components/slider/slider.ts:38](https://github.com/AmadeusITGroup/AgnosUI/blob/9c4ba085df68dd03e76684e1adfe990b83fa406f/core-bootstrap/src/components/slider/slider.ts#L38)

Slot to change the default display of the slider

#### Inherited from

`SliderExtraProps.structure`

***

### values

> **values**: `number`[]

Defined in: [core/src/components/slider/slider.ts:134](https://github.com/AmadeusITGroup/AgnosUI/blob/9c4ba085df68dd03e76684e1adfe990b83fa406f/core/src/components/slider/slider.ts#L134)

Current slider values

#### Default Value

`[0]`

#### Inherited from

`CoreProps.values`

***

### vertical

> **vertical**: `boolean`

Defined in: [core/src/components/slider/slider.ts:127](https://github.com/AmadeusITGroup/AgnosUI/blob/9c4ba085df68dd03e76684e1adfe990b83fa406f/core/src/components/slider/slider.ts#L127)

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Inherited from

`CoreProps.vertical`
