Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:187](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/angular/bootstrap/src/components/slider/slider.component.ts#L187)

SliderComponent is an Angular component that extends the BaseWidgetDirective
to provide a customizable slider widget. This component allows for various
configurations and customizations through its inputs and outputs.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`SliderWidget`](../type-aliases/SliderWidget.md)\>

## Properties

### ariaLabel

> `readonly` **ariaLabel**: `InputSignal`\<`undefined` \| (`sortedIndex`) => `string`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:253](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/angular/bootstrap/src/components/slider/slider.component.ts#L253)

Return the value for the 'aria-label' attribute for the handle

#### Param

index of the handle in the sorted list

#### Default Value

```ts
() => 'Value'
```

***

### ariaLabelledBy

> `readonly` **ariaLabelledBy**: `InputSignal`\<`undefined` \| (`sortedIndex`) => `string`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:264](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/angular/bootstrap/src/components/slider/slider.component.ts#L264)

Return the value for the 'aria-labelledBy' attribute for the handle

#### Param

index of the handle in the sorted list

#### Default Value

```ts
() => ''
```

***

### ariaValueText

> `readonly` **ariaValueText**: `InputSignal`\<`undefined` \| (`value`, `sortedIndex`) => `string`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:276](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/angular/bootstrap/src/components/slider/slider.component.ts#L276)

Return the value for the 'aria-valuetext' attribute for the handle

#### Param

value of the handle

#### Param

index of the handle in the sorted list

#### Default Value

```ts
(value: number) => ''
```

***

### className

> `readonly` **className**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:193](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/angular/bootstrap/src/components/slider/slider.component.ts#L193)

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### disabled

> `readonly` **disabled**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:290](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/angular/bootstrap/src/components/slider/slider.component.ts#L290)

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

***

### handle

> `readonly` **handle**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotHandleContext`](../interfaces/SliderSlotHandleContext.md)\>\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:331](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/angular/bootstrap/src/components/slider/slider.component.ts#L331)

Slot to change the handlers

***

### label

> `readonly` **label**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotLabelContext`](../interfaces/SliderSlotLabelContext.md)\>\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:319](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/angular/bootstrap/src/components/slider/slider.component.ts#L319)

Slot to change the default labels of the slider

#### Default Value

```ts
({value}: SliderSlotLabelContext) => '' + value
```

***

### max

> `readonly` **max**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:207](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/angular/bootstrap/src/components/slider/slider.component.ts#L207)

Maximum value that can be assigned to the slider

#### Default Value

`100`

***

### min

> `readonly` **min**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:200](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/angular/bootstrap/src/components/slider/slider.component.ts#L200)

Minimum value that can be assigned to the slider

#### Default Value

`0`

***

### readonly

> `readonly` **readonly**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:283](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/angular/bootstrap/src/components/slider/slider.component.ts#L283)

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

***

### rtl

> `readonly` **rtl**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:228](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/angular/bootstrap/src/components/slider/slider.component.ts#L228)

It `true` slider display is inversed

#### Default Value

`false`

***

### showMinMaxLabels

> `readonly` **showMinMaxLabels**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:242](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/angular/bootstrap/src/components/slider/slider.component.ts#L242)

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

***

### showValueLabels

> `readonly` **showValueLabels**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:235](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/angular/bootstrap/src/components/slider/slider.component.ts#L235)

If `true` the value labels are displayed on the slider

#### Default Value

`true`

***

### stepSize

> `readonly` **stepSize**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:214](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/angular/bootstrap/src/components/slider/slider.component.ts#L214)

Unit value between slider steps

#### Default Value

`1`

***

### structure

> `readonly` **structure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderContext`](../interfaces/SliderContext.md)\>\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:325](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/angular/bootstrap/src/components/slider/slider.component.ts#L325)

Slot to change the default display of the slider

***

### values

> `readonly` **values**: `InputSignal`\<`undefined` \| `number`[]\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:221](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/angular/bootstrap/src/components/slider/slider.component.ts#L221)

Current slider values

#### Default Value

`[0]`

***

### valuesChange

> `readonly` **valuesChange**: `OutputEmitterRef`\<`number`[]\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:309](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/angular/bootstrap/src/components/slider/slider.component.ts#L309)

An event emitted when slider values are changed

Event payload equals to the updated slider values

#### Default Value

```ts
() => {}
```

***

### vertical

> `readonly` **vertical**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:297](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/angular/bootstrap/src/components/slider/slider.component.ts#L297)

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

## Accessors

### api

#### Get Signature

> **get** **api**(): `W`\[`"api"`\]

Defined in: [angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/angular/headless/src/utils/widget.ts#L140)

Retrieves the widget api

##### Returns

`W`\[`"api"`\]

the widget api

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`api`](BaseWidgetDirective.md#api)

***

### directives

#### Get Signature

> **get** **directives**(): `W`\[`"directives"`\]

Defined in: [angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/angular/headless/src/utils/widget.ts#L156)

Retrieves the widget directives

##### Returns

`W`\[`"directives"`\]

the widget directives

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`directives`](BaseWidgetDirective.md#directives)

***

### state

#### Get Signature

> **get** **state**(): [`AngularState`](../type-aliases/AngularState.md)\<`W`\>

Defined in: [angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/angular/headless/src/utils/widget.ts#L148)

Retrieves the widget state. Each property of the state is exposed through an Angular [Signal](https://angular.dev/api/core/Signal)

##### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)

## Methods

### onChange()

> **onChange**(`_`): `void`

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:365](https://github.com/AmadeusITGroup/AgnosUI/blob/d0cfae612ad1854a807b312ca0b18201bed9959a/angular/bootstrap/src/components/slider/slider.component.ts#L365)

Control value accessor methods

#### Parameters

##### \_

`any`

#### Returns

`void`
