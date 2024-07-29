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

[angular/bootstrap/src/components/slider/slider.component.ts:150](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/slider/slider.component.ts#L150)

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

[angular/bootstrap/src/components/slider/slider.component.ts:238](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/slider/slider.component.ts#L238)

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

[angular/bootstrap/src/components/slider/slider.component.ts:251](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/slider/slider.component.ts#L251)

***

### className

> **className**: `undefined` \| `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:171](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/slider/slider.component.ts#L171)

***

### defaultSlots

> `readonly` **defaultSlots**: [`WritableSignal`](https://amadeusitgroup.github.io/tansu/interfaces/WritableSignal.html)\<[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`SliderProps`](../interfaces/SliderProps.md)\>, [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`SliderProps`](../interfaces/SliderProps.md)\>\>

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/slider/slider.component.ts#L148)

***

### disabled

> **disabled**: `undefined` \| `boolean`

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:267](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/slider/slider.component.ts#L267)

***

### handle

> **handle**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotHandleContext`](../type-aliases/SliderSlotHandleContext.md)\>

Slot to change the handlers

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:310](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/slider/slider.component.ts#L310)

***

### label

> **label**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotLabelContext`](../type-aliases/SliderSlotLabelContext.md)\>

Slot to change the default labels of the slider

#### Default Value

```ts
({value}: SliderSlotLabelContext) => '' + value
```

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:298](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/slider/slider.component.ts#L298)

***

### max

> **max**: `undefined` \| `number`

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:187](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/slider/slider.component.ts#L187)

***

### min

> **min**: `undefined` \| `number`

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:179](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/slider/slider.component.ts#L179)

***

### readonly

> **readonly**: `undefined` \| `boolean`

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:259](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/slider/slider.component.ts#L259)

***

### rtl

> **rtl**: `undefined` \| `boolean`

It `true` slider display is inversed

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:211](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/slider/slider.component.ts#L211)

***

### showMinMaxLabels

> **showMinMaxLabels**: `undefined` \| `boolean`

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:225](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/slider/slider.component.ts#L225)

***

### showValueLabels

> **showValueLabels**: `undefined` \| `boolean`

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:218](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/slider/slider.component.ts#L218)

***

### slotHandleFromContent

> **slotHandleFromContent**: `undefined` \| [`SliderHandleDirective`](SliderHandleDirective.md)

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:311](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/slider/slider.component.ts#L311)

***

### slotLabelFromContent

> **slotLabelFromContent**: `undefined` \| [`SliderLabelDirective`](SliderLabelDirective.md)

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:299](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/slider/slider.component.ts#L299)

***

### slotStructureFromContent

> **slotStructureFromContent**: `undefined` \| [`SliderStructureDirective`](SliderStructureDirective.md)

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:305](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/slider/slider.component.ts#L305)

***

### stepSize

> **stepSize**: `undefined` \| `number`

Unit value between slider steps

#### Default Value

`1`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:195](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/slider/slider.component.ts#L195)

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderContext`](../type-aliases/SliderContext.md)\>

Slot to change the default display of the slider

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:304](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/slider/slider.component.ts#L304)

***

### values

> **values**: `undefined` \| `number`[]

Current slider values

#### Default Value

`[0]`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:203](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/slider/slider.component.ts#L203)

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

[angular/bootstrap/src/components/slider/slider.component.ts:288](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/slider/slider.component.ts#L288)

***

### vertical

> **vertical**: `undefined` \| `boolean`

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:275](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/slider/slider.component.ts#L275)

## Accessors

### api

> `get` **api**(): `W`\[`"api"`\]

#### Returns

`W`\[`"api"`\]

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`api`](BaseWidgetDirective.md#api)

#### Defined in

[angular/headless/src/utils/widget.ts:119](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/headless/src/utils/widget.ts#L119)

***

### state

> `get` **state**(): [`Signal`](https://angular.dev/api/core/Signal)\<[`WidgetState`](../type-aliases/WidgetState.md)\<`W`\>\>

#### Returns

[`Signal`](https://angular.dev/api/core/Signal)\<[`WidgetState`](../type-aliases/WidgetState.md)\<`W`\>\>

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)

#### Defined in

[angular/headless/src/utils/widget.ts:123](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/headless/src/utils/widget.ts#L123)

***

### widget

> `get` **widget**(): [`ContextWidget`](../type-aliases/ContextWidget.md)\<`W`\>

#### Returns

[`ContextWidget`](../type-aliases/ContextWidget.md)\<`W`\>

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`widget`](BaseWidgetDirective.md#widget)

#### Defined in

[angular/headless/src/utils/widget.ts:127](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/headless/src/utils/widget.ts#L127)

## Methods

### handleBlur()

> **handleBlur**(): `void`

#### Returns

`void`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:346](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/slider/slider.component.ts#L346)

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

[angular/bootstrap/src/components/slider/slider.component.ts:350](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/slider/slider.component.ts#L350)

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

[angular/headless/src/utils/widget.ts:132](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/headless/src/utils/widget.ts#L132)

***

### ngOnInit()

> **ngOnInit**(): `void`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngOnInit`](BaseWidgetDirective.md#ngoninit)

#### Defined in

[angular/headless/src/utils/widget.ts:137](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/headless/src/utils/widget.ts#L137)

***

### onChange()

> **onChange**(`_`): `void`

Control value accessor methods

#### Parameters

• **\_**: `any`

#### Returns

`void`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:316](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/slider/slider.component.ts#L316)

***

### onTouched()

> **onTouched**(): `void`

#### Returns

`void`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:318](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/slider/slider.component.ts#L318)

***

### registerOnChange()

> **registerOnChange**(`fn`): `void`

#### Parameters

• **fn**

#### Returns

`void`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:320](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/slider/slider.component.ts#L320)

***

### registerOnTouched()

> **registerOnTouched**(`fn`): `void`

#### Parameters

• **fn**

#### Returns

`void`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:324](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/slider/slider.component.ts#L324)

***

### setDisabledState()

> **setDisabledState**(`isDisabled`): `void`

#### Parameters

• **isDisabled**: `boolean`

#### Returns

`void`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:340](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/slider/slider.component.ts#L340)

***

### writeValue()

> **writeValue**(`value`): `void`

#### Parameters

• **value**: `any`

#### Returns

`void`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:328](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/slider/slider.component.ts#L328)
