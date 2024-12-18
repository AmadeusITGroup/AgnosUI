Represents the properties for the Slider component.

## Extends

- `SliderProps`.`SliderExtraProps`

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

#### Inherited from

`CoreProps.ariaLabelHandle`

#### Defined in

[core/src/components/slider/slider.ts:224](https://github.com/AmadeusITGroup/AgnosUI/blob/8e4b1f5404152873832be3bb426d763c5f7df17d/core/src/components/slider/slider.ts#L224)

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

#### Inherited from

`CoreProps.ariaValueText`

#### Defined in

[core/src/components/slider/slider.ts:237](https://github.com/AmadeusITGroup/AgnosUI/blob/8e4b1f5404152873832be3bb426d763c5f7df17d/core/src/components/slider/slider.ts#L237)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreProps.className`

#### Defined in

[core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/8e4b1f5404152873832be3bb426d763c5f7df17d/core/src/components/commonProps.ts#L10)

***

### disabled

> **disabled**: `boolean`

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Inherited from

`CoreProps.disabled`

#### Defined in

[core/src/components/slider/slider.ts:116](https://github.com/AmadeusITGroup/AgnosUI/blob/8e4b1f5404152873832be3bb426d763c5f7df17d/core/src/components/slider/slider.ts#L116)

***

### handle

> **handle**: `SlotContent`\<[`SliderSlotHandleContext`](SliderSlotHandleContext.md)\>

Slot to change the handlers

#### Inherited from

`SliderExtraProps.handle`

#### Defined in

[core-bootstrap/src/components/slider/slider.ts:53](https://github.com/AmadeusITGroup/AgnosUI/blob/8e4b1f5404152873832be3bb426d763c5f7df17d/core-bootstrap/src/components/slider/slider.ts#L53)

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

[core-bootstrap/src/components/slider/slider.ts:48](https://github.com/AmadeusITGroup/AgnosUI/blob/8e4b1f5404152873832be3bb426d763c5f7df17d/core-bootstrap/src/components/slider/slider.ts#L48)

***

### max

> **max**: `number`

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Inherited from

`CoreProps.max`

#### Defined in

[core/src/components/slider/slider.ts:95](https://github.com/AmadeusITGroup/AgnosUI/blob/8e4b1f5404152873832be3bb426d763c5f7df17d/core/src/components/slider/slider.ts#L95)

***

### min

> **min**: `number`

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Inherited from

`CoreProps.min`

#### Defined in

[core/src/components/slider/slider.ts:88](https://github.com/AmadeusITGroup/AgnosUI/blob/8e4b1f5404152873832be3bb426d763c5f7df17d/core/src/components/slider/slider.ts#L88)

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

[core/src/components/slider/slider.ts:249](https://github.com/AmadeusITGroup/AgnosUI/blob/8e4b1f5404152873832be3bb426d763c5f7df17d/core/src/components/slider/slider.ts#L249)

***

### readonly

> **readonly**: `boolean`

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Inherited from

`CoreProps.readonly`

#### Defined in

[core/src/components/slider/slider.ts:109](https://github.com/AmadeusITGroup/AgnosUI/blob/8e4b1f5404152873832be3bb426d763c5f7df17d/core/src/components/slider/slider.ts#L109)

***

### rtl

> **rtl**: `boolean`

It `true` slider display is inversed

#### Default Value

`false`

#### Inherited from

`CoreProps.rtl`

#### Defined in

[core/src/components/slider/slider.ts:151](https://github.com/AmadeusITGroup/AgnosUI/blob/8e4b1f5404152873832be3bb426d763c5f7df17d/core/src/components/slider/slider.ts#L151)

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`CoreProps.showMinMaxLabels`

#### Defined in

[core/src/components/slider/slider.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/8e4b1f5404152873832be3bb426d763c5f7df17d/core/src/components/slider/slider.ts#L144)

***

### showValueLabels

> **showValueLabels**: `boolean`

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`CoreProps.showValueLabels`

#### Defined in

[core/src/components/slider/slider.ts:137](https://github.com/AmadeusITGroup/AgnosUI/blob/8e4b1f5404152873832be3bb426d763c5f7df17d/core/src/components/slider/slider.ts#L137)

***

### stepSize

> **stepSize**: `number`

Unit value between slider steps

#### Default Value

`1`

#### Inherited from

`CoreProps.stepSize`

#### Defined in

[core/src/components/slider/slider.ts:102](https://github.com/AmadeusITGroup/AgnosUI/blob/8e4b1f5404152873832be3bb426d763c5f7df17d/core/src/components/slider/slider.ts#L102)

***

### structure

> **structure**: `SlotContent`\<[`SliderContext`](SliderContext.md)\>

Slot to change the default display of the slider

#### Inherited from

`SliderExtraProps.structure`

#### Defined in

[core-bootstrap/src/components/slider/slider.ts:38](https://github.com/AmadeusITGroup/AgnosUI/blob/8e4b1f5404152873832be3bb426d763c5f7df17d/core-bootstrap/src/components/slider/slider.ts#L38)

***

### values

> **values**: `number`[]

Current slider values

#### Default Value

`[0]`

#### Inherited from

`CoreProps.values`

#### Defined in

[core/src/components/slider/slider.ts:130](https://github.com/AmadeusITGroup/AgnosUI/blob/8e4b1f5404152873832be3bb426d763c5f7df17d/core/src/components/slider/slider.ts#L130)

***

### vertical

> **vertical**: `boolean`

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Inherited from

`CoreProps.vertical`

#### Defined in

[core/src/components/slider/slider.ts:123](https://github.com/AmadeusITGroup/AgnosUI/blob/8e4b1f5404152873832be3bb426d763c5f7df17d/core/src/components/slider/slider.ts#L123)
