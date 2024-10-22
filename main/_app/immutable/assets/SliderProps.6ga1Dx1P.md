## Extends

- `SliderCommonPropsAndState`

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

[core/src/components/slider/slider.ts:205](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/core/src/components/slider/slider.ts#L205)

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

[core/src/components/slider/slider.ts:218](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/core/src/components/slider/slider.ts#L218)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`SliderCommonPropsAndState.className`

#### Defined in

[core/src/components/commonProps.ts:7](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/core/src/components/commonProps.ts#L7)

***

### disabled

> **disabled**: `boolean`

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.disabled`

#### Defined in

[core/src/components/slider/slider.ts:103](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/core/src/components/slider/slider.ts#L103)

***

### max

> **max**: `number`

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Inherited from

`SliderCommonPropsAndState.max`

#### Defined in

[core/src/components/slider/slider.ts:82](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/core/src/components/slider/slider.ts#L82)

***

### min

> **min**: `number`

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Inherited from

`SliderCommonPropsAndState.min`

#### Defined in

[core/src/components/slider/slider.ts:75](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/core/src/components/slider/slider.ts#L75)

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

[core/src/components/slider/slider.ts:230](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/core/src/components/slider/slider.ts#L230)

***

### readonly

> **readonly**: `boolean`

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.readonly`

#### Defined in

[core/src/components/slider/slider.ts:96](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/core/src/components/slider/slider.ts#L96)

***

### rtl

> **rtl**: `boolean`

It `true` slider display is inversed

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.rtl`

#### Defined in

[core/src/components/slider/slider.ts:138](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/core/src/components/slider/slider.ts#L138)

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`SliderCommonPropsAndState.showMinMaxLabels`

#### Defined in

[core/src/components/slider/slider.ts:131](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/core/src/components/slider/slider.ts#L131)

***

### showValueLabels

> **showValueLabels**: `boolean`

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`SliderCommonPropsAndState.showValueLabels`

#### Defined in

[core/src/components/slider/slider.ts:124](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/core/src/components/slider/slider.ts#L124)

***

### stepSize

> **stepSize**: `number`

Unit value between slider steps

#### Default Value

`1`

#### Inherited from

`SliderCommonPropsAndState.stepSize`

#### Defined in

[core/src/components/slider/slider.ts:89](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/core/src/components/slider/slider.ts#L89)

***

### values

> **values**: `number`[]

Current slider values

#### Default Value

`[0]`

#### Inherited from

`SliderCommonPropsAndState.values`

#### Defined in

[core/src/components/slider/slider.ts:117](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/core/src/components/slider/slider.ts#L117)

***

### vertical

> **vertical**: `boolean`

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.vertical`

#### Defined in

[core/src/components/slider/slider.ts:110](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/core/src/components/slider/slider.ts#L110)
