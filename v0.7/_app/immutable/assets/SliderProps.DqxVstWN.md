Represents the properties for the Slider component.

## Extends

- `SliderProps`.`SliderExtraProps`

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

#### Inherited from

`CoreProps.ariaLabel`

#### Defined in

[core/src/components/slider/slider.ts:226](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/slider/slider.ts#L226)

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

#### Inherited from

`CoreProps.ariaLabelledBy`

#### Defined in

[core/src/components/slider/slider.ts:237](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/slider/slider.ts#L237)

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

#### Inherited from

`CoreProps.ariaValueText`

#### Defined in

[core/src/components/slider/slider.ts:249](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/slider/slider.ts#L249)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreProps.className`

#### Defined in

[core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/commonProps.ts#L10)

***

### disabled

> **disabled**: `boolean`

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Inherited from

`CoreProps.disabled`

#### Defined in

[core/src/components/slider/slider.ts:120](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/slider/slider.ts#L120)

***

### handle

> **handle**: `SlotContent`\<[`SliderSlotHandleContext`](SliderSlotHandleContext.md)\>

Slot to change the handlers

#### Inherited from

`SliderExtraProps.handle`

#### Defined in

[core-bootstrap/src/components/slider/slider.ts:53](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core-bootstrap/src/components/slider/slider.ts#L53)

***

### label

> **label**: `SlotContent`\<[`SliderSlotLabelContext`](SliderSlotLabelContext.md)\>

Slot to change the default labels of the slider

#### Default Value

```ts
({value}: SliderSlotLabelContext) => '' + value
```

#### Inherited from

`SliderExtraProps.label`

#### Defined in

[core-bootstrap/src/components/slider/slider.ts:48](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core-bootstrap/src/components/slider/slider.ts#L48)

***

### max

> **max**: `number`

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Inherited from

`CoreProps.max`

#### Defined in

[core/src/components/slider/slider.ts:99](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/slider/slider.ts#L99)

***

### min

> **min**: `number`

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Inherited from

`CoreProps.min`

#### Defined in

[core/src/components/slider/slider.ts:92](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/slider/slider.ts#L92)

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

#### Inherited from

`CoreProps.onValuesChange`

#### Defined in

[core/src/components/slider/slider.ts:261](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/slider/slider.ts#L261)

***

### readonly

> **readonly**: `boolean`

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Inherited from

`CoreProps.readonly`

#### Defined in

[core/src/components/slider/slider.ts:113](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/slider/slider.ts#L113)

***

### rtl

> **rtl**: `boolean`

It `true` slider display is inversed

#### Default Value

`false`

#### Inherited from

`CoreProps.rtl`

#### Defined in

[core/src/components/slider/slider.ts:155](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/slider/slider.ts#L155)

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`CoreProps.showMinMaxLabels`

#### Defined in

[core/src/components/slider/slider.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/slider/slider.ts#L148)

***

### showValueLabels

> **showValueLabels**: `boolean`

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`CoreProps.showValueLabels`

#### Defined in

[core/src/components/slider/slider.ts:141](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/slider/slider.ts#L141)

***

### stepSize

> **stepSize**: `number`

Unit value between slider steps

#### Default Value

`1`

#### Inherited from

`CoreProps.stepSize`

#### Defined in

[core/src/components/slider/slider.ts:106](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/slider/slider.ts#L106)

***

### structure

> **structure**: `SlotContent`\<[`SliderContext`](SliderContext.md)\>

Slot to change the default display of the slider

#### Inherited from

`SliderExtraProps.structure`

#### Defined in

[core-bootstrap/src/components/slider/slider.ts:38](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core-bootstrap/src/components/slider/slider.ts#L38)

***

### values

> **values**: `number`[]

Current slider values

#### Default Value

`[0]`

#### Inherited from

`CoreProps.values`

#### Defined in

[core/src/components/slider/slider.ts:134](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/slider/slider.ts#L134)

***

### vertical

> **vertical**: `boolean`

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Inherited from

`CoreProps.vertical`

#### Defined in

[core/src/components/slider/slider.ts:127](https://github.com/AmadeusITGroup/AgnosUI/blob/216b251b0233c010b114755f4b4b259480ed8946/core/src/components/slider/slider.ts#L127)
