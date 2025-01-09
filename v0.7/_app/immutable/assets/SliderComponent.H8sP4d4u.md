SliderComponent is an Angular component that extends the BaseWidgetDirective
to provide a customizable slider widget. This component allows for various
configurations and customizations through its inputs and outputs.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`SliderWidget`](../type-aliases/SliderWidget.md)\>

## Properties

### ariaLabel

> `readonly` **ariaLabel**: `InputSignal`\<`undefined` \| (`sortedIndex`) => `string`\>

Return the value for the 'aria-label' attribute for the handle

#### Param

index of the handle in the sorted list

#### Default Value

```ts
() => 'Value'
```

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:253](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/bootstrap/src/components/slider/slider.component.ts#L253)

***

### ariaLabelledBy

> `readonly` **ariaLabelledBy**: `InputSignal`\<`undefined` \| (`sortedIndex`) => `string`\>

Return the value for the 'aria-labelledBy' attribute for the handle

#### Param

index of the handle in the sorted list

#### Default Value

```ts
() => ''
```

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:264](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/bootstrap/src/components/slider/slider.component.ts#L264)

***

### ariaValueText

> `readonly` **ariaValueText**: `InputSignal`\<`undefined` \| (`value`, `sortedIndex`) => `string`\>

Return the value for the 'aria-valuetext' attribute for the handle

#### Param

value of the handle

#### Param

index of the handle in the sorted list

#### Default Value

```ts
(value: number) => ''
```

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:276](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/bootstrap/src/components/slider/slider.component.ts#L276)

***

### className

> `readonly` **className**: `InputSignal`\<`undefined` \| `string`\>

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:193](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/bootstrap/src/components/slider/slider.component.ts#L193)

***

### disabled

> `readonly` **disabled**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:290](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/bootstrap/src/components/slider/slider.component.ts#L290)

***

### handle

> `readonly` **handle**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotHandleContext`](../interfaces/SliderSlotHandleContext.md)\>\>

Slot to change the handlers

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:331](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/bootstrap/src/components/slider/slider.component.ts#L331)

***

### label

> `readonly` **label**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotLabelContext`](../interfaces/SliderSlotLabelContext.md)\>\>

Slot to change the default labels of the slider

#### Default Value

```ts
({value}: SliderSlotLabelContext) => '' + value
```

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:319](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/bootstrap/src/components/slider/slider.component.ts#L319)

***

### max

> `readonly` **max**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:207](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/bootstrap/src/components/slider/slider.component.ts#L207)

***

### min

> `readonly` **min**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:200](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/bootstrap/src/components/slider/slider.component.ts#L200)

***

### readonly

> `readonly` **readonly**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:283](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/bootstrap/src/components/slider/slider.component.ts#L283)

***

### rtl

> `readonly` **rtl**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

It `true` slider display is inversed

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:228](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/bootstrap/src/components/slider/slider.component.ts#L228)

***

### showMinMaxLabels

> `readonly` **showMinMaxLabels**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:242](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/bootstrap/src/components/slider/slider.component.ts#L242)

***

### showValueLabels

> `readonly` **showValueLabels**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:235](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/bootstrap/src/components/slider/slider.component.ts#L235)

***

### stepSize

> `readonly` **stepSize**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

Unit value between slider steps

#### Default Value

`1`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:214](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/bootstrap/src/components/slider/slider.component.ts#L214)

***

### structure

> `readonly` **structure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderContext`](../interfaces/SliderContext.md)\>\>

Slot to change the default display of the slider

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:325](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/bootstrap/src/components/slider/slider.component.ts#L325)

***

### values

> `readonly` **values**: `InputSignal`\<`undefined` \| `number`[]\>

Current slider values

#### Default Value

`[0]`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:221](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/bootstrap/src/components/slider/slider.component.ts#L221)

***

### valuesChange

> `readonly` **valuesChange**: `OutputEmitterRef`\<`number`[]\>

An event emitted when slider values are changed

Event payload equals to the updated slider values

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:309](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/bootstrap/src/components/slider/slider.component.ts#L309)

***

### vertical

> `readonly` **vertical**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:297](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/bootstrap/src/components/slider/slider.component.ts#L297)

## Accessors

### api

#### Get Signature

> **get** **api**(): `W`\[`"api"`\]

Retrieves the widget api

##### Returns

`W`\[`"api"`\]

the widget api

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`api`](BaseWidgetDirective.md#api)

#### Defined in

[angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/headless/src/utils/widget.ts#L140)

***

### directives

#### Get Signature

> **get** **directives**(): `W`\[`"directives"`\]

Retrieves the widget directives

##### Returns

`W`\[`"directives"`\]

the widget directives

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`directives`](BaseWidgetDirective.md#directives)

#### Defined in

[angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/headless/src/utils/widget.ts#L156)

***

### state

#### Get Signature

> **get** **state**(): [`AngularState`](../type-aliases/AngularState.md)\<`W`\>

Retrieves the widget state. Each property of the state is exposed through an Angular [Signal](https://angular.dev/api/core/Signal)

##### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)

#### Defined in

[angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/headless/src/utils/widget.ts#L148)

## Methods

### onChange()

> **onChange**(`_`): `void`

Control value accessor methods

#### Parameters

##### \_

`any`

#### Returns

`void`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:365](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/bootstrap/src/components/slider/slider.component.ts#L365)
