SliderComponent is an Angular component that extends the BaseWidgetDirective
to provide a customizable slider widget. This component allows for various
configurations and customizations through its inputs and outputs.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`SliderWidget`](../type-aliases/SliderWidget.md)\>

## Properties

### ariaLabelHandle

> `readonly` **ariaLabelHandle**: `InputSignal`\<`undefined` \| (`value`, `sortedIndex`, `index`) => `string`\>

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

[angular/bootstrap/src/components/slider/slider.component.ts:217](https://github.com/AmadeusITGroup/AgnosUI/blob/8a8a9a4dc1d3ff264f45110dad1a1504679fe336/angular/bootstrap/src/components/slider/slider.component.ts#L217)

***

### ariaValueText

> `readonly` **ariaValueText**: `InputSignal`\<`undefined` \| (`value`, `sortedIndex`, `index`) => `string`\>

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

[angular/bootstrap/src/components/slider/slider.component.ts:230](https://github.com/AmadeusITGroup/AgnosUI/blob/8a8a9a4dc1d3ff264f45110dad1a1504679fe336/angular/bootstrap/src/components/slider/slider.component.ts#L230)

***

### className

> `readonly` **className**: `InputSignal`\<`undefined` \| `string`\>

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:155](https://github.com/AmadeusITGroup/AgnosUI/blob/8a8a9a4dc1d3ff264f45110dad1a1504679fe336/angular/bootstrap/src/components/slider/slider.component.ts#L155)

***

### disabled

> `readonly` **disabled**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:244](https://github.com/AmadeusITGroup/AgnosUI/blob/8a8a9a4dc1d3ff264f45110dad1a1504679fe336/angular/bootstrap/src/components/slider/slider.component.ts#L244)

***

### handle

> `readonly` **handle**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotHandleContext`](../interfaces/SliderSlotHandleContext.md)\>\>

Slot to change the handlers

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:285](https://github.com/AmadeusITGroup/AgnosUI/blob/8a8a9a4dc1d3ff264f45110dad1a1504679fe336/angular/bootstrap/src/components/slider/slider.component.ts#L285)

***

### label

> `readonly` **label**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotLabelContext`](../interfaces/SliderSlotLabelContext.md)\>\>

Slot to change the default labels of the slider

#### Default Value

```ts
({value}: SliderSlotLabelContext) => '' + value
```

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:273](https://github.com/AmadeusITGroup/AgnosUI/blob/8a8a9a4dc1d3ff264f45110dad1a1504679fe336/angular/bootstrap/src/components/slider/slider.component.ts#L273)

***

### max

> `readonly` **max**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:169](https://github.com/AmadeusITGroup/AgnosUI/blob/8a8a9a4dc1d3ff264f45110dad1a1504679fe336/angular/bootstrap/src/components/slider/slider.component.ts#L169)

***

### min

> `readonly` **min**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:162](https://github.com/AmadeusITGroup/AgnosUI/blob/8a8a9a4dc1d3ff264f45110dad1a1504679fe336/angular/bootstrap/src/components/slider/slider.component.ts#L162)

***

### readonly

> `readonly` **readonly**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:237](https://github.com/AmadeusITGroup/AgnosUI/blob/8a8a9a4dc1d3ff264f45110dad1a1504679fe336/angular/bootstrap/src/components/slider/slider.component.ts#L237)

***

### rtl

> `readonly` **rtl**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

It `true` slider display is inversed

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:190](https://github.com/AmadeusITGroup/AgnosUI/blob/8a8a9a4dc1d3ff264f45110dad1a1504679fe336/angular/bootstrap/src/components/slider/slider.component.ts#L190)

***

### showMinMaxLabels

> `readonly` **showMinMaxLabels**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:204](https://github.com/AmadeusITGroup/AgnosUI/blob/8a8a9a4dc1d3ff264f45110dad1a1504679fe336/angular/bootstrap/src/components/slider/slider.component.ts#L204)

***

### showValueLabels

> `readonly` **showValueLabels**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:197](https://github.com/AmadeusITGroup/AgnosUI/blob/8a8a9a4dc1d3ff264f45110dad1a1504679fe336/angular/bootstrap/src/components/slider/slider.component.ts#L197)

***

### stepSize

> `readonly` **stepSize**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

Unit value between slider steps

#### Default Value

`1`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:176](https://github.com/AmadeusITGroup/AgnosUI/blob/8a8a9a4dc1d3ff264f45110dad1a1504679fe336/angular/bootstrap/src/components/slider/slider.component.ts#L176)

***

### structure

> `readonly` **structure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderContext`](../interfaces/SliderContext.md)\>\>

Slot to change the default display of the slider

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:279](https://github.com/AmadeusITGroup/AgnosUI/blob/8a8a9a4dc1d3ff264f45110dad1a1504679fe336/angular/bootstrap/src/components/slider/slider.component.ts#L279)

***

### values

> `readonly` **values**: `InputSignal`\<`undefined` \| `number`[]\>

Current slider values

#### Default Value

`[0]`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:183](https://github.com/AmadeusITGroup/AgnosUI/blob/8a8a9a4dc1d3ff264f45110dad1a1504679fe336/angular/bootstrap/src/components/slider/slider.component.ts#L183)

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

[angular/bootstrap/src/components/slider/slider.component.ts:263](https://github.com/AmadeusITGroup/AgnosUI/blob/8a8a9a4dc1d3ff264f45110dad1a1504679fe336/angular/bootstrap/src/components/slider/slider.component.ts#L263)

***

### vertical

> `readonly` **vertical**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:251](https://github.com/AmadeusITGroup/AgnosUI/blob/8a8a9a4dc1d3ff264f45110dad1a1504679fe336/angular/bootstrap/src/components/slider/slider.component.ts#L251)

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

[angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/8a8a9a4dc1d3ff264f45110dad1a1504679fe336/angular/headless/src/utils/widget.ts#L140)

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

[angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/8a8a9a4dc1d3ff264f45110dad1a1504679fe336/angular/headless/src/utils/widget.ts#L156)

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

[angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/8a8a9a4dc1d3ff264f45110dad1a1504679fe336/angular/headless/src/utils/widget.ts#L148)

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

[angular/bootstrap/src/components/slider/slider.component.ts:319](https://github.com/AmadeusITGroup/AgnosUI/blob/8a8a9a4dc1d3ff264f45110dad1a1504679fe336/angular/bootstrap/src/components/slider/slider.component.ts#L319)
