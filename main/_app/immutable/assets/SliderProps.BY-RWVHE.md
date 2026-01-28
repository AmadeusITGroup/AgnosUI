Defined in: [core-bootstrap/src/components/slider/slider.ts:78](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core-bootstrap/src/components/slider/slider.ts#L78)

Represents the properties for the Slider component.

## Extends

- `SliderProps`.`SliderExtraProps`

## Properties

### ariaLabel()

> **ariaLabel**: (`sortedIndex`) => `string`

Defined in: [core/src/components/slider/slider.ts:278](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/slider/slider.ts#L278)

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

Defined in: [core/src/components/slider/slider.ts:289](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/slider/slider.ts#L289)

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

Defined in: [core/src/components/slider/slider.ts:301](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/slider/slider.ts#L301)

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
() => ''
```

#### Inherited from

`CoreProps.ariaValueText`

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreProps.className`

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/slider/slider.ts:160](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/slider/slider.ts#L160)

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Inherited from

`CoreProps.disabled`

***

### handle

> **handle**: `SlotContent`\<[`SliderSlotHandleContext`](SliderSlotHandleContext.md)\>

Defined in: [core-bootstrap/src/components/slider/slider.ts:63](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core-bootstrap/src/components/slider/slider.ts#L63)

Slot to change the handlers

#### Inherited from

`SliderExtraProps.handle`

***

### label

> **label**: `SlotContent`\<[`SliderSlotLabelContext`](SliderSlotLabelContext.md)\>

Defined in: [core-bootstrap/src/components/slider/slider.ts:58](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core-bootstrap/src/components/slider/slider.ts#L58)

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

Defined in: [core/src/components/slider/slider.ts:139](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/slider/slider.ts#L139)

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Inherited from

`CoreProps.max`

***

### maxRange

> **maxRange**: `number`

Defined in: [core/src/components/slider/slider.ts:344](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/slider/slider.ts#L344)

Maximum distance between two values
When set to 0, no maximum distance constraint is applied.

#### Default Value

`0`

#### Inherited from

`CoreProps.maxRange`

***

### min

> **min**: `number`

Defined in: [core/src/components/slider/slider.ts:132](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/slider/slider.ts#L132)

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Inherited from

`CoreProps.min`

***

### minRange

> **minRange**: `number`

Defined in: [core/src/components/slider/slider.ts:336](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/slider/slider.ts#L336)

Minimum distance between two values.
When set to 0, no minimum distance constraint is applied.

#### Default Value

`0`

#### Inherited from

`CoreProps.minRange`

***

### onValuesChange()

> **onValuesChange**: (`values`) => `void`

Defined in: [core/src/components/slider/slider.ts:313](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/slider/slider.ts#L313)

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

### pushRange

> **pushRange**: `boolean`

Defined in: [core/src/components/slider/slider.ts:352](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/slider/slider.ts#L352)

When true, if moving a value would break the minRange or maxRange constraint,
it will instead push or pull the neighboring values to keep the allowed range rather than just stopping.

#### Default Value

`false`

#### Inherited from

`CoreProps.pushRange`

***

### readonly

> **readonly**: `boolean`

Defined in: [core/src/components/slider/slider.ts:153](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/slider/slider.ts#L153)

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Inherited from

`CoreProps.readonly`

***

### rtl

> **rtl**: `boolean`

Defined in: [core/src/components/slider/slider.ts:202](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/slider/slider.ts#L202)

It `true` slider display is inversed

#### Default Value

`false`

#### Inherited from

`CoreProps.rtl`

***

### showMinMaxLabels

> **showMinMaxLabels**: `boolean`

Defined in: [core/src/components/slider/slider.ts:188](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/slider/slider.ts#L188)

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`CoreProps.showMinMaxLabels`

***

### showTicks

> **showTicks**: `boolean`

Defined in: [core/src/components/slider/slider.ts:195](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/slider/slider.ts#L195)

If `true` the ticks are displayed on the slider

#### Default Value

`false`

#### Inherited from

`CoreProps.showTicks`

***

### showTickValues

> **showTickValues**: `boolean`

Defined in: [core/src/components/slider/slider.ts:328](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/slider/slider.ts#L328)

If `true` the tick values are displayed on the slider

#### Default Value

`true`

#### Inherited from

`CoreProps.showTickValues`

***

### showValueLabels

> **showValueLabels**: `boolean`

Defined in: [core/src/components/slider/slider.ts:181](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/slider/slider.ts#L181)

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Inherited from

`CoreProps.showValueLabels`

***

### stepSize

> **stepSize**: `number`

Defined in: [core/src/components/slider/slider.ts:146](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/slider/slider.ts#L146)

Unit value between slider steps

#### Default Value

`1`

#### Inherited from

`CoreProps.stepSize`

***

### structure

> **structure**: `SlotContent`\<[`SliderContext`](SliderContext.md)\>

Defined in: [core-bootstrap/src/components/slider/slider.ts:48](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core-bootstrap/src/components/slider/slider.ts#L48)

Slot to change the default display of the slider

#### Inherited from

`SliderExtraProps.structure`

***

### tick

> **tick**: `SlotContent`\<[`SliderSlotTickContext`](SliderSlotTickContext.md)\>

Defined in: [core-bootstrap/src/components/slider/slider.ts:68](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core-bootstrap/src/components/slider/slider.ts#L68)

Slot to change the ticks

#### Inherited from

`SliderExtraProps.tick`

***

### tickInterval

> **tickInterval**: `number`

Defined in: [core/src/components/slider/slider.ts:321](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/slider/slider.ts#L321)

Unit value between the ticks
If value is set to `0` the [stepSize](SliderState.md#stepsize) is used to space the ticks

#### Default Value

`0`

#### Inherited from

`CoreProps.tickInterval`

***

### values

> **values**: `number`[]

Defined in: [core/src/components/slider/slider.ts:174](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/slider/slider.ts#L174)

Current slider values

#### Default Value

`[0]`

#### Inherited from

`CoreProps.values`

***

### vertical

> **vertical**: `boolean`

Defined in: [core/src/components/slider/slider.ts:167](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/slider/slider.ts#L167)

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Inherited from

`CoreProps.vertical`
