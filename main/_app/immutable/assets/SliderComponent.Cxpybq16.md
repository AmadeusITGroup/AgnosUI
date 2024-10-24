## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`SliderWidget`](../type-aliases/SliderWidget.md)\>

## Constructors

### new SliderComponent()

> **new SliderComponent**(): [`SliderComponent`](SliderComponent.md)

#### Returns

[`SliderComponent`](SliderComponent.md)

#### Overrides

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`constructor`](BaseWidgetDirective.md#constructors)

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:276](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/slider/slider.component.ts#L276)

## Properties

### ariaLabelHandle

> **ariaLabelHandle**: `undefined` \| (`value`, `sortedIndex`, `index`) => `string`

Return the value for the 'aria-label' attribute for the handle

#### Param

value of the handle

#### Param

index of the handle in the sorted list

#### Param

index of the handle in the original list

#### Default Value

```ts
(value: number) => '' + value
```

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:201](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/slider/slider.component.ts#L201)

***

### ariaValueText

> **ariaValueText**: `undefined` \| (`value`, `sortedIndex`, `index`) => `string`

Return the value for the 'aria-valuetext' attribute for the handle

#### Param

value of the handle

#### Param

index of the handle in the sorted list

#### Param

index of the handle in the original list

#### Default Value

```ts
(value: number) => '' + value
```

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:214](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/slider/slider.component.ts#L214)

***

### className

> **className**: `undefined` \| `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:134](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/slider/slider.component.ts#L134)

***

### disabled

> **disabled**: `undefined` \| `boolean`

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:230](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/slider/slider.component.ts#L230)

***

### handle

> **handle**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotHandleContext`](../type-aliases/SliderSlotHandleContext.md)\>

Slot to change the handlers

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:273](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/slider/slider.component.ts#L273)

***

### label

> **label**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotLabelContext`](../type-aliases/SliderSlotLabelContext.md)\>

Slot to change the default labels of the slider

#### Default Value

```ts
({value}: SliderSlotLabelContext) => '' + value
```

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:261](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/slider/slider.component.ts#L261)

***

### max

> **max**: `undefined` \| `number`

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:150](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/slider/slider.component.ts#L150)

***

### min

> **min**: `undefined` \| `number`

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:142](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/slider/slider.component.ts#L142)

***

### readonly

> **readonly**: `undefined` \| `boolean`

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:222](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/slider/slider.component.ts#L222)

***

### rtl

> **rtl**: `undefined` \| `boolean`

It `true` slider display is inversed

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:174](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/slider/slider.component.ts#L174)

***

### showMinMaxLabels

> **showMinMaxLabels**: `undefined` \| `boolean`

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:188](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/slider/slider.component.ts#L188)

***

### showValueLabels

> **showValueLabels**: `undefined` \| `boolean`

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:181](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/slider/slider.component.ts#L181)

***

### slotHandleFromContent

> **slotHandleFromContent**: `undefined` \| [`SliderHandleDirective`](SliderHandleDirective.md)

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:274](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/slider/slider.component.ts#L274)

***

### slotLabelFromContent

> **slotLabelFromContent**: `undefined` \| [`SliderLabelDirective`](SliderLabelDirective.md)

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:262](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/slider/slider.component.ts#L262)

***

### slotStructureFromContent

> **slotStructureFromContent**: `undefined` \| [`SliderStructureDirective`](SliderStructureDirective.md)

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:268](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/slider/slider.component.ts#L268)

***

### stepSize

> **stepSize**: `undefined` \| `number`

Unit value between slider steps

#### Default Value

`1`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:158](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/slider/slider.component.ts#L158)

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderContext`](../type-aliases/SliderContext.md)\>

Slot to change the default display of the slider

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:267](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/slider/slider.component.ts#L267)

***

### values

> **values**: `undefined` \| `number`[]

Current slider values

#### Default Value

`[0]`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:166](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/slider/slider.component.ts#L166)

***

### valuesChange

> **valuesChange**: `EventEmitter`\<`number`[]\>

An event emitted when slider values are changed

Event payload equals to the updated slider values

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:251](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/slider/slider.component.ts#L251)

***

### vertical

> **vertical**: `undefined` \| `boolean`

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:238](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/slider/slider.component.ts#L238)

## Accessors

### api

> `get` **api**(): `W`\[`"api"`\]

Retrieves the widget api

#### Returns

`W`\[`"api"`\]

the widget api

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`api`](BaseWidgetDirective.md#api)

#### Defined in

[angular/headless/src/utils/widget.ts:134](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/headless/src/utils/widget.ts#L134)

***

### directives

> `get` **directives**(): `W`\[`"directives"`\]

Retrieves the widget directives

#### Returns

`W`\[`"directives"`\]

the widget directives

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`directives`](BaseWidgetDirective.md#directives)

#### Defined in

[angular/headless/src/utils/widget.ts:150](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/headless/src/utils/widget.ts#L150)

***

### state

> `get` **state**(): [`AngularState`](../type-aliases/AngularState.md)\<`W`\>

Retrieves the widget state as an Angular Signal

#### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)

#### Defined in

[angular/headless/src/utils/widget.ts:142](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/headless/src/utils/widget.ts#L142)

## Methods

### handleBlur()

> **handleBlur**(): `void`

#### Returns

`void`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:337](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/slider/slider.component.ts#L337)

***

### ngAfterContentChecked()

> **ngAfterContentChecked**(): `void`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngAfterContentChecked`](BaseWidgetDirective.md#ngaftercontentchecked)

#### Defined in

[angular/headless/src/utils/widget.ts:165](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/headless/src/utils/widget.ts#L165)

***

### ngOnChanges()

> **ngOnChanges**(`changes`): `void`

#### Parameters

• **changes**: `SimpleChanges`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngOnChanges`](BaseWidgetDirective.md#ngonchanges)

#### Defined in

[angular/headless/src/utils/widget.ts:155](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/headless/src/utils/widget.ts#L155)

***

### ngOnInit()

> **ngOnInit**(): `void`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngOnInit`](BaseWidgetDirective.md#ngoninit)

#### Defined in

[angular/headless/src/utils/widget.ts:160](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/headless/src/utils/widget.ts#L160)

***

### onChange()

> **onChange**(`_`): `void`

Control value accessor methods

#### Parameters

• **\_**: `any`

#### Returns

`void`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:307](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/slider/slider.component.ts#L307)

***

### onTouched()

> **onTouched**(): `void`

#### Returns

`void`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:309](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/slider/slider.component.ts#L309)

***

### registerOnChange()

> **registerOnChange**(`fn`): `void`

#### Parameters

• **fn**

#### Returns

`void`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:311](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/slider/slider.component.ts#L311)

***

### registerOnTouched()

> **registerOnTouched**(`fn`): `void`

#### Parameters

• **fn**

#### Returns

`void`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:315](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/slider/slider.component.ts#L315)

***

### setDisabledState()

> **setDisabledState**(`isDisabled`): `void`

#### Parameters

• **isDisabled**: `boolean`

#### Returns

`void`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:331](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/slider/slider.component.ts#L331)

***

### writeValue()

> **writeValue**(`value`): `void`

#### Parameters

• **value**: `any`

#### Returns

`void`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:319](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/slider/slider.component.ts#L319)
