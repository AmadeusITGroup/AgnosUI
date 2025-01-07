Defined in: [core/src/components/slider/slider.ts:212](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/slider/slider.ts#L212)

Interface representing the properties for the Slider component.

## Extends

- `SliderCommonPropsAndState`

## Properties

### ariaLabelHandle()

> **ariaLabelHandle**: (`value`, `sortedIndex`, `index`) => `string`

Defined in: [core/src/components/slider/slider.ts:224](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/slider/slider.ts#L224)

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

Defined in: [core/src/components/slider/slider.ts:237](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/slider/slider.ts#L237)

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

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`SliderCommonPropsAndState.className`

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/slider/slider.ts:116](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/slider/slider.ts#L116)

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.disabled`

***

### max

> **max**: `number`

Defined in: [core/src/components/slider/slider.ts:95](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/slider/slider.ts#L95)

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Inherited from

`SliderCommonPropsAndState.max`

***

### min

> **min**: `number`

Defined in: [core/src/components/slider/slider.ts:88](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/slider/slider.ts#L88)

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Inherited from

`SliderCommonPropsAndState.min`

***

### onValuesChange()

> **onValuesChange**: (`values`) => `void`

Defined in: [core/src/components/slider/slider.ts:249](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/slider/slider.ts#L249)

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

Defined in: [core/src/components/slider/slider.ts:109](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/slider/slider.ts#L109)

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.readonly`

***

### rtl

> **rtl**: `boolean`

Defined in: [core/src/components/slider/slider.ts:151](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/slider/slider.ts#L151)

It `true` slider display is inversed

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.rtl`

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

Defined in: [core/src/components/slider/slider.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/slider/slider.ts#L144)

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`SliderCommonPropsAndState.showMinMaxLabels`

***

### showValueLabels

> **showValueLabels**: `boolean`

Defined in: [core/src/components/slider/slider.ts:137](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/slider/slider.ts#L137)

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`SliderCommonPropsAndState.showValueLabels`

***

### stepSize

> **stepSize**: `number`

Defined in: [core/src/components/slider/slider.ts:102](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/slider/slider.ts#L102)

Unit value between slider steps

#### Default Value

`1`

#### Inherited from

`SliderCommonPropsAndState.stepSize`

***

### values

> **values**: `number`[]

Defined in: [core/src/components/slider/slider.ts:130](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/slider/slider.ts#L130)

Current slider values

#### Default Value

`[0]`

#### Inherited from

`SliderCommonPropsAndState.values`

***

### vertical

> **vertical**: `boolean`

Defined in: [core/src/components/slider/slider.ts:123](https://github.com/AmadeusITGroup/AgnosUI/blob/863721bb9c0a8edf231e6372cee0ac10a1361a9b/core/src/components/slider/slider.ts#L123)

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.vertical`
