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

[core/src/components/slider/slider.ts:224](https://github.com/AmadeusITGroup/AgnosUI/blob/9c85fb9a08df7b8766cedbb3c490eb34f48bb572/core/src/components/slider/slider.ts#L224)

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

[core/src/components/slider/slider.ts:237](https://github.com/AmadeusITGroup/AgnosUI/blob/9c85fb9a08df7b8766cedbb3c490eb34f48bb572/core/src/components/slider/slider.ts#L237)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`SliderCommonPropsAndState.className`

#### Defined in

[core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/9c85fb9a08df7b8766cedbb3c490eb34f48bb572/core/src/components/commonProps.ts#L10)

***

### disabled

> **disabled**: `boolean`

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.disabled`

#### Defined in

[core/src/components/slider/slider.ts:116](https://github.com/AmadeusITGroup/AgnosUI/blob/9c85fb9a08df7b8766cedbb3c490eb34f48bb572/core/src/components/slider/slider.ts#L116)

***

### max

> **max**: `number`

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Inherited from

`SliderCommonPropsAndState.max`

#### Defined in

[core/src/components/slider/slider.ts:95](https://github.com/AmadeusITGroup/AgnosUI/blob/9c85fb9a08df7b8766cedbb3c490eb34f48bb572/core/src/components/slider/slider.ts#L95)

***

### min

> **min**: `number`

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Inherited from

`SliderCommonPropsAndState.min`

#### Defined in

[core/src/components/slider/slider.ts:88](https://github.com/AmadeusITGroup/AgnosUI/blob/9c85fb9a08df7b8766cedbb3c490eb34f48bb572/core/src/components/slider/slider.ts#L88)

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

[core/src/components/slider/slider.ts:249](https://github.com/AmadeusITGroup/AgnosUI/blob/9c85fb9a08df7b8766cedbb3c490eb34f48bb572/core/src/components/slider/slider.ts#L249)

***

### readonly

> **readonly**: `boolean`

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.readonly`

#### Defined in

[core/src/components/slider/slider.ts:109](https://github.com/AmadeusITGroup/AgnosUI/blob/9c85fb9a08df7b8766cedbb3c490eb34f48bb572/core/src/components/slider/slider.ts#L109)

***

### rtl

> **rtl**: `boolean`

It `true` slider display is inversed

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.rtl`

#### Defined in

[core/src/components/slider/slider.ts:151](https://github.com/AmadeusITGroup/AgnosUI/blob/9c85fb9a08df7b8766cedbb3c490eb34f48bb572/core/src/components/slider/slider.ts#L151)

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`SliderCommonPropsAndState.showMinMaxLabels`

#### Defined in

[core/src/components/slider/slider.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/9c85fb9a08df7b8766cedbb3c490eb34f48bb572/core/src/components/slider/slider.ts#L144)

***

### showValueLabels

> **showValueLabels**: `boolean`

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`SliderCommonPropsAndState.showValueLabels`

#### Defined in

[core/src/components/slider/slider.ts:137](https://github.com/AmadeusITGroup/AgnosUI/blob/9c85fb9a08df7b8766cedbb3c490eb34f48bb572/core/src/components/slider/slider.ts#L137)

***

### stepSize

> **stepSize**: `number`

Unit value between slider steps

#### Default Value

`1`

#### Inherited from

`SliderCommonPropsAndState.stepSize`

#### Defined in

[core/src/components/slider/slider.ts:102](https://github.com/AmadeusITGroup/AgnosUI/blob/9c85fb9a08df7b8766cedbb3c490eb34f48bb572/core/src/components/slider/slider.ts#L102)

***

### values

> **values**: `number`[]

Current slider values

#### Default Value

`[0]`

#### Inherited from

`SliderCommonPropsAndState.values`

#### Defined in

[core/src/components/slider/slider.ts:130](https://github.com/AmadeusITGroup/AgnosUI/blob/9c85fb9a08df7b8766cedbb3c490eb34f48bb572/core/src/components/slider/slider.ts#L130)

***

### vertical

> **vertical**: `boolean`

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.vertical`

#### Defined in

[core/src/components/slider/slider.ts:123](https://github.com/AmadeusITGroup/AgnosUI/blob/9c85fb9a08df7b8766cedbb3c490eb34f48bb572/core/src/components/slider/slider.ts#L123)
