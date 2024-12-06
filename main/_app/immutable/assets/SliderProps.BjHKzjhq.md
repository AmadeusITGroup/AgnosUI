Interface representing the properties for the Slider component.

## Extends

- `SliderCommonPropsAndState`

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

[core/src/components/slider/slider.ts:220](https://github.com/AmadeusITGroup/AgnosUI/blob/3ec09093b382a100b1741032d210e8482eada44c/core/src/components/slider/slider.ts#L220)

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

[core/src/components/slider/slider.ts:233](https://github.com/AmadeusITGroup/AgnosUI/blob/3ec09093b382a100b1741032d210e8482eada44c/core/src/components/slider/slider.ts#L233)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`SliderCommonPropsAndState.className`

#### Defined in

[core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/3ec09093b382a100b1741032d210e8482eada44c/core/src/components/commonProps.ts#L10)

***

### disabled

> **disabled**: `boolean`

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.disabled`

#### Defined in

[core/src/components/slider/slider.ts:112](https://github.com/AmadeusITGroup/AgnosUI/blob/3ec09093b382a100b1741032d210e8482eada44c/core/src/components/slider/slider.ts#L112)

***

### max

> **max**: `number`

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Inherited from

`SliderCommonPropsAndState.max`

#### Defined in

[core/src/components/slider/slider.ts:91](https://github.com/AmadeusITGroup/AgnosUI/blob/3ec09093b382a100b1741032d210e8482eada44c/core/src/components/slider/slider.ts#L91)

***

### min

> **min**: `number`

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Inherited from

`SliderCommonPropsAndState.min`

#### Defined in

[core/src/components/slider/slider.ts:84](https://github.com/AmadeusITGroup/AgnosUI/blob/3ec09093b382a100b1741032d210e8482eada44c/core/src/components/slider/slider.ts#L84)

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

[core/src/components/slider/slider.ts:245](https://github.com/AmadeusITGroup/AgnosUI/blob/3ec09093b382a100b1741032d210e8482eada44c/core/src/components/slider/slider.ts#L245)

***

### readonly

> **readonly**: `boolean`

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.readonly`

#### Defined in

[core/src/components/slider/slider.ts:105](https://github.com/AmadeusITGroup/AgnosUI/blob/3ec09093b382a100b1741032d210e8482eada44c/core/src/components/slider/slider.ts#L105)

***

### rtl

> **rtl**: `boolean`

It `true` slider display is inversed

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.rtl`

#### Defined in

[core/src/components/slider/slider.ts:147](https://github.com/AmadeusITGroup/AgnosUI/blob/3ec09093b382a100b1741032d210e8482eada44c/core/src/components/slider/slider.ts#L147)

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`SliderCommonPropsAndState.showMinMaxLabels`

#### Defined in

[core/src/components/slider/slider.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/3ec09093b382a100b1741032d210e8482eada44c/core/src/components/slider/slider.ts#L140)

***

### showValueLabels

> **showValueLabels**: `boolean`

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`SliderCommonPropsAndState.showValueLabels`

#### Defined in

[core/src/components/slider/slider.ts:133](https://github.com/AmadeusITGroup/AgnosUI/blob/3ec09093b382a100b1741032d210e8482eada44c/core/src/components/slider/slider.ts#L133)

***

### stepSize

> **stepSize**: `number`

Unit value between slider steps

#### Default Value

`1`

#### Inherited from

`SliderCommonPropsAndState.stepSize`

#### Defined in

[core/src/components/slider/slider.ts:98](https://github.com/AmadeusITGroup/AgnosUI/blob/3ec09093b382a100b1741032d210e8482eada44c/core/src/components/slider/slider.ts#L98)

***

### values

> **values**: `number`[]

Current slider values

#### Default Value

`[0]`

#### Inherited from

`SliderCommonPropsAndState.values`

#### Defined in

[core/src/components/slider/slider.ts:126](https://github.com/AmadeusITGroup/AgnosUI/blob/3ec09093b382a100b1741032d210e8482eada44c/core/src/components/slider/slider.ts#L126)

***

### vertical

> **vertical**: `boolean`

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.vertical`

#### Defined in

[core/src/components/slider/slider.ts:119](https://github.com/AmadeusITGroup/AgnosUI/blob/3ec09093b382a100b1741032d210e8482eada44c/core/src/components/slider/slider.ts#L119)
