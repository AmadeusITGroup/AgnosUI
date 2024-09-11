## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`SliderWidget`](../type-aliases/SliderWidget.md)\>

## Implements

- [`AfterContentChecked`](https://angular.dev/api/core/AfterContentChecked)

## Constructors

### new SliderComponent()

> **new SliderComponent**(): [`SliderComponent`](SliderComponent.md)

#### Returns

[`SliderComponent`](SliderComponent.md)

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`constructor`](BaseWidgetDirective.md#constructors)

## Properties

### \_widget

> `readonly` **\_widget**: [`AngularWidget`](../type-aliases/AngularWidget.md)\<[`SliderWidget`](../type-aliases/SliderWidget.md)\>

#### Overrides

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`_widget`](BaseWidgetDirective.md#_widget)

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:139](https://github.com/AmadeusITGroup/AgnosUI/blob/6a77b4a5abf33b99ae87977420772ceff3e0aa9f/angular/bootstrap/src/components/slider/slider.component.ts#L139)

***

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

[angular/bootstrap/src/components/slider/slider.component.ts:227](https://github.com/AmadeusITGroup/AgnosUI/blob/6a77b4a5abf33b99ae87977420772ceff3e0aa9f/angular/bootstrap/src/components/slider/slider.component.ts#L227)

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

[angular/bootstrap/src/components/slider/slider.component.ts:240](https://github.com/AmadeusITGroup/AgnosUI/blob/6a77b4a5abf33b99ae87977420772ceff3e0aa9f/angular/bootstrap/src/components/slider/slider.component.ts#L240)

***

### className

> **className**: `undefined` \| `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:160](https://github.com/AmadeusITGroup/AgnosUI/blob/6a77b4a5abf33b99ae87977420772ceff3e0aa9f/angular/bootstrap/src/components/slider/slider.component.ts#L160)

***

### defaultSlots

> `readonly` **defaultSlots**: [`WritableSignal`](https://amadeusitgroup.github.io/tansu/interfaces/WritableSignal.html)\<[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`SliderProps`](../interfaces/SliderProps.md)\>, [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`SliderProps`](../interfaces/SliderProps.md)\>\>

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:137](https://github.com/AmadeusITGroup/AgnosUI/blob/6a77b4a5abf33b99ae87977420772ceff3e0aa9f/angular/bootstrap/src/components/slider/slider.component.ts#L137)

***

### disabled

> **disabled**: `undefined` \| `boolean`

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:256](https://github.com/AmadeusITGroup/AgnosUI/blob/6a77b4a5abf33b99ae87977420772ceff3e0aa9f/angular/bootstrap/src/components/slider/slider.component.ts#L256)

***

### handle

> **handle**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotHandleContext`](../type-aliases/SliderSlotHandleContext.md)\>

Slot to change the handlers

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:299](https://github.com/AmadeusITGroup/AgnosUI/blob/6a77b4a5abf33b99ae87977420772ceff3e0aa9f/angular/bootstrap/src/components/slider/slider.component.ts#L299)

***

### label

> **label**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotLabelContext`](../type-aliases/SliderSlotLabelContext.md)\>

Slot to change the default labels of the slider

#### Default Value

```ts
({value}: SliderSlotLabelContext) => '' + value
```

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:287](https://github.com/AmadeusITGroup/AgnosUI/blob/6a77b4a5abf33b99ae87977420772ceff3e0aa9f/angular/bootstrap/src/components/slider/slider.component.ts#L287)

***

### max

> **max**: `undefined` \| `number`

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:176](https://github.com/AmadeusITGroup/AgnosUI/blob/6a77b4a5abf33b99ae87977420772ceff3e0aa9f/angular/bootstrap/src/components/slider/slider.component.ts#L176)

***

### min

> **min**: `undefined` \| `number`

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:168](https://github.com/AmadeusITGroup/AgnosUI/blob/6a77b4a5abf33b99ae87977420772ceff3e0aa9f/angular/bootstrap/src/components/slider/slider.component.ts#L168)

***

### readonly

> **readonly**: `undefined` \| `boolean`

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:248](https://github.com/AmadeusITGroup/AgnosUI/blob/6a77b4a5abf33b99ae87977420772ceff3e0aa9f/angular/bootstrap/src/components/slider/slider.component.ts#L248)

***

### rtl

> **rtl**: `undefined` \| `boolean`

It `true` slider display is inversed

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:200](https://github.com/AmadeusITGroup/AgnosUI/blob/6a77b4a5abf33b99ae87977420772ceff3e0aa9f/angular/bootstrap/src/components/slider/slider.component.ts#L200)

***

### showMinMaxLabels

> **showMinMaxLabels**: `undefined` \| `boolean`

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:214](https://github.com/AmadeusITGroup/AgnosUI/blob/6a77b4a5abf33b99ae87977420772ceff3e0aa9f/angular/bootstrap/src/components/slider/slider.component.ts#L214)

***

### showValueLabels

> **showValueLabels**: `undefined` \| `boolean`

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:207](https://github.com/AmadeusITGroup/AgnosUI/blob/6a77b4a5abf33b99ae87977420772ceff3e0aa9f/angular/bootstrap/src/components/slider/slider.component.ts#L207)

***

### slotHandleFromContent

> **slotHandleFromContent**: `undefined` \| [`SliderHandleDirective`](SliderHandleDirective.md)

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:300](https://github.com/AmadeusITGroup/AgnosUI/blob/6a77b4a5abf33b99ae87977420772ceff3e0aa9f/angular/bootstrap/src/components/slider/slider.component.ts#L300)

***

### slotLabelFromContent

> **slotLabelFromContent**: `undefined` \| [`SliderLabelDirective`](SliderLabelDirective.md)

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:288](https://github.com/AmadeusITGroup/AgnosUI/blob/6a77b4a5abf33b99ae87977420772ceff3e0aa9f/angular/bootstrap/src/components/slider/slider.component.ts#L288)

***

### slotStructureFromContent

> **slotStructureFromContent**: `undefined` \| [`SliderStructureDirective`](SliderStructureDirective.md)

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:294](https://github.com/AmadeusITGroup/AgnosUI/blob/6a77b4a5abf33b99ae87977420772ceff3e0aa9f/angular/bootstrap/src/components/slider/slider.component.ts#L294)

***

### stepSize

> **stepSize**: `undefined` \| `number`

Unit value between slider steps

#### Default Value

`1`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:184](https://github.com/AmadeusITGroup/AgnosUI/blob/6a77b4a5abf33b99ae87977420772ceff3e0aa9f/angular/bootstrap/src/components/slider/slider.component.ts#L184)

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderContext`](../type-aliases/SliderContext.md)\>

Slot to change the default display of the slider

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:293](https://github.com/AmadeusITGroup/AgnosUI/blob/6a77b4a5abf33b99ae87977420772ceff3e0aa9f/angular/bootstrap/src/components/slider/slider.component.ts#L293)

***

### values

> **values**: `undefined` \| `number`[]

Current slider values

#### Default Value

`[0]`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:192](https://github.com/AmadeusITGroup/AgnosUI/blob/6a77b4a5abf33b99ae87977420772ceff3e0aa9f/angular/bootstrap/src/components/slider/slider.component.ts#L192)

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

[angular/bootstrap/src/components/slider/slider.component.ts:277](https://github.com/AmadeusITGroup/AgnosUI/blob/6a77b4a5abf33b99ae87977420772ceff3e0aa9f/angular/bootstrap/src/components/slider/slider.component.ts#L277)

***

### vertical

> **vertical**: `undefined` \| `boolean`

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:264](https://github.com/AmadeusITGroup/AgnosUI/blob/6a77b4a5abf33b99ae87977420772ceff3e0aa9f/angular/bootstrap/src/components/slider/slider.component.ts#L264)

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

[angular/headless/src/utils/widget.ts:123](https://github.com/AmadeusITGroup/AgnosUI/blob/6a77b4a5abf33b99ae87977420772ceff3e0aa9f/angular/headless/src/utils/widget.ts#L123)

***

### state

> `get` **state**(): [`Signal`](https://angular.dev/api/core/Signal)\<[`WidgetState`](../type-aliases/WidgetState.md)\<`W`\>\>

Retrieves the widget state as an Angular Signal

#### Returns

[`Signal`](https://angular.dev/api/core/Signal)\<[`WidgetState`](../type-aliases/WidgetState.md)\<`W`\>\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)

#### Defined in

[angular/headless/src/utils/widget.ts:131](https://github.com/AmadeusITGroup/AgnosUI/blob/6a77b4a5abf33b99ae87977420772ceff3e0aa9f/angular/headless/src/utils/widget.ts#L131)

***

### widget

> `get` **widget**(): [`ContextWidget`](../type-aliases/ContextWidget.md)\<`W`\>

Retrieves the widget

#### Returns

[`ContextWidget`](../type-aliases/ContextWidget.md)\<`W`\>

the widget

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`widget`](BaseWidgetDirective.md#widget)

#### Defined in

[angular/headless/src/utils/widget.ts:139](https://github.com/AmadeusITGroup/AgnosUI/blob/6a77b4a5abf33b99ae87977420772ceff3e0aa9f/angular/headless/src/utils/widget.ts#L139)

## Methods

### handleBlur()

> **handleBlur**(): `void`

#### Returns

`void`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:335](https://github.com/AmadeusITGroup/AgnosUI/blob/6a77b4a5abf33b99ae87977420772ceff3e0aa9f/angular/bootstrap/src/components/slider/slider.component.ts#L335)

***

### ngAfterContentChecked()

> **ngAfterContentChecked**(): `void`

A callback method that is invoked immediately after the
default change detector has completed checking all of the directive's
content.

#### Returns

`void`

#### Implementation of

`AfterContentChecked.ngAfterContentChecked`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:339](https://github.com/AmadeusITGroup/AgnosUI/blob/6a77b4a5abf33b99ae87977420772ceff3e0aa9f/angular/bootstrap/src/components/slider/slider.component.ts#L339)

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

[angular/headless/src/utils/widget.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/6a77b4a5abf33b99ae87977420772ceff3e0aa9f/angular/headless/src/utils/widget.ts#L144)

***

### ngOnInit()

> **ngOnInit**(): `void`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngOnInit`](BaseWidgetDirective.md#ngoninit)

#### Defined in

[angular/headless/src/utils/widget.ts:149](https://github.com/AmadeusITGroup/AgnosUI/blob/6a77b4a5abf33b99ae87977420772ceff3e0aa9f/angular/headless/src/utils/widget.ts#L149)

***

### onChange()

> **onChange**(`_`): `void`

Control value accessor methods

#### Parameters

• **\_**: `any`

#### Returns

`void`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:305](https://github.com/AmadeusITGroup/AgnosUI/blob/6a77b4a5abf33b99ae87977420772ceff3e0aa9f/angular/bootstrap/src/components/slider/slider.component.ts#L305)

***

### onTouched()

> **onTouched**(): `void`

#### Returns

`void`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:307](https://github.com/AmadeusITGroup/AgnosUI/blob/6a77b4a5abf33b99ae87977420772ceff3e0aa9f/angular/bootstrap/src/components/slider/slider.component.ts#L307)

***

### registerOnChange()

> **registerOnChange**(`fn`): `void`

#### Parameters

• **fn**

#### Returns

`void`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:309](https://github.com/AmadeusITGroup/AgnosUI/blob/6a77b4a5abf33b99ae87977420772ceff3e0aa9f/angular/bootstrap/src/components/slider/slider.component.ts#L309)

***

### registerOnTouched()

> **registerOnTouched**(`fn`): `void`

#### Parameters

• **fn**

#### Returns

`void`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:313](https://github.com/AmadeusITGroup/AgnosUI/blob/6a77b4a5abf33b99ae87977420772ceff3e0aa9f/angular/bootstrap/src/components/slider/slider.component.ts#L313)

***

### setDisabledState()

> **setDisabledState**(`isDisabled`): `void`

#### Parameters

• **isDisabled**: `boolean`

#### Returns

`void`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:329](https://github.com/AmadeusITGroup/AgnosUI/blob/6a77b4a5abf33b99ae87977420772ceff3e0aa9f/angular/bootstrap/src/components/slider/slider.component.ts#L329)

***

### writeValue()

> **writeValue**(`value`): `void`

#### Parameters

• **value**: `any`

#### Returns

`void`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:317](https://github.com/AmadeusITGroup/AgnosUI/blob/6a77b4a5abf33b99ae87977420772ceff3e0aa9f/angular/bootstrap/src/components/slider/slider.component.ts#L317)
