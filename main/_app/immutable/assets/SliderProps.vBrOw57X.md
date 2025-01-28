Defined in: [core/src/components/slider/slider.ts:216](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core/src/components/slider/slider.ts#L216)

Interface representing the properties for the Slider component.

## Extends

- `SliderCommonPropsAndState`

## Properties

### ariaLabel()

> **ariaLabel**: (`sortedIndex`) => `string`

Defined in: [core/src/components/slider/slider.ts:226](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core/src/components/slider/slider.ts#L226)

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

Defined in: [core/src/components/slider/slider.ts:237](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core/src/components/slider/slider.ts#L237)

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

Defined in: [core/src/components/slider/slider.ts:249](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core/src/components/slider/slider.ts#L249)

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

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`SliderCommonPropsAndState.className`

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/slider/slider.ts:120](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core/src/components/slider/slider.ts#L120)

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.disabled`

***

### max

> **max**: `number`

Defined in: [core/src/components/slider/slider.ts:99](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core/src/components/slider/slider.ts#L99)

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Inherited from

`SliderCommonPropsAndState.max`

***

### min

> **min**: `number`

Defined in: [core/src/components/slider/slider.ts:92](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core/src/components/slider/slider.ts#L92)

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Inherited from

`SliderCommonPropsAndState.min`

***

### onValuesChange()

> **onValuesChange**: (`values`) => `void`

Defined in: [core/src/components/slider/slider.ts:261](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core/src/components/slider/slider.ts#L261)

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

Defined in: [core/src/components/slider/slider.ts:113](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core/src/components/slider/slider.ts#L113)

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.readonly`

***

### rtl

> **rtl**: `boolean`

Defined in: [core/src/components/slider/slider.ts:155](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core/src/components/slider/slider.ts#L155)

It `true` slider display is inversed

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.rtl`

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

Defined in: [core/src/components/slider/slider.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core/src/components/slider/slider.ts#L148)

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`SliderCommonPropsAndState.showMinMaxLabels`

***

### showValueLabels

> **showValueLabels**: `boolean`

Defined in: [core/src/components/slider/slider.ts:141](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core/src/components/slider/slider.ts#L141)

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`SliderCommonPropsAndState.showValueLabels`

***

### stepSize

> **stepSize**: `number`

Defined in: [core/src/components/slider/slider.ts:106](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core/src/components/slider/slider.ts#L106)

Unit value between slider steps

#### Default Value

`1`

#### Inherited from

`SliderCommonPropsAndState.stepSize`

***

### values

> **values**: `number`[]

Defined in: [core/src/components/slider/slider.ts:134](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core/src/components/slider/slider.ts#L134)

Current slider values

#### Default Value

`[0]`

#### Inherited from

`SliderCommonPropsAndState.values`

***

### vertical

> **vertical**: `boolean`

Defined in: [core/src/components/slider/slider.ts:127](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/core/src/components/slider/slider.ts#L127)

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.vertical`
