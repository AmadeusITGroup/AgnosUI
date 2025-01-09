Interface representing the properties for the Slider component.

## Extends

- `SliderCommonPropsAndState`

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

#### Defined in

[core/src/components/slider/slider.ts:226](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/core/src/components/slider/slider.ts#L226)

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

#### Defined in

[core/src/components/slider/slider.ts:237](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/core/src/components/slider/slider.ts#L237)

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

#### Defined in

[core/src/components/slider/slider.ts:249](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/core/src/components/slider/slider.ts#L249)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`SliderCommonPropsAndState.className`

#### Defined in

[core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/core/src/components/commonProps.ts#L10)

***

### disabled

> **disabled**: `boolean`

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.disabled`

#### Defined in

[core/src/components/slider/slider.ts:120](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/core/src/components/slider/slider.ts#L120)

***

### max

> **max**: `number`

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Inherited from

`SliderCommonPropsAndState.max`

#### Defined in

[core/src/components/slider/slider.ts:99](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/core/src/components/slider/slider.ts#L99)

***

### min

> **min**: `number`

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Inherited from

`SliderCommonPropsAndState.min`

#### Defined in

[core/src/components/slider/slider.ts:92](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/core/src/components/slider/slider.ts#L92)

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

[core/src/components/slider/slider.ts:261](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/core/src/components/slider/slider.ts#L261)

***

### readonly

> **readonly**: `boolean`

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.readonly`

#### Defined in

[core/src/components/slider/slider.ts:113](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/core/src/components/slider/slider.ts#L113)

***

### rtl

> **rtl**: `boolean`

It `true` slider display is inversed

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.rtl`

#### Defined in

[core/src/components/slider/slider.ts:155](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/core/src/components/slider/slider.ts#L155)

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`SliderCommonPropsAndState.showMinMaxLabels`

#### Defined in

[core/src/components/slider/slider.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/core/src/components/slider/slider.ts#L148)

***

### showValueLabels

> **showValueLabels**: `boolean`

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`SliderCommonPropsAndState.showValueLabels`

#### Defined in

[core/src/components/slider/slider.ts:141](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/core/src/components/slider/slider.ts#L141)

***

### stepSize

> **stepSize**: `number`

Unit value between slider steps

#### Default Value

`1`

#### Inherited from

`SliderCommonPropsAndState.stepSize`

#### Defined in

[core/src/components/slider/slider.ts:106](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/core/src/components/slider/slider.ts#L106)

***

### values

> **values**: `number`[]

Current slider values

#### Default Value

`[0]`

#### Inherited from

`SliderCommonPropsAndState.values`

#### Defined in

[core/src/components/slider/slider.ts:134](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/core/src/components/slider/slider.ts#L134)

***

### vertical

> **vertical**: `boolean`

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Inherited from

`SliderCommonPropsAndState.vertical`

#### Defined in

[core/src/components/slider/slider.ts:127](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/core/src/components/slider/slider.ts#L127)
