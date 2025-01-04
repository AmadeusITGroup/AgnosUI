Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:149](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/angular/bootstrap/src/components/slider/slider.component.ts#L149)

SliderComponent is an Angular component that extends the BaseWidgetDirective
to provide a customizable slider widget. This component allows for various
configurations and customizations through its inputs and outputs.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`SliderWidget`](../type-aliases/SliderWidget.md)\>

## Properties

### ariaLabelHandle

> `readonly` **ariaLabelHandle**: `InputSignal`\<`undefined` \| (`value`, `sortedIndex`, `index`) => `string`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:217](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/angular/bootstrap/src/components/slider/slider.component.ts#L217)

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

***

### ariaValueText

> `readonly` **ariaValueText**: `InputSignal`\<`undefined` \| (`value`, `sortedIndex`, `index`) => `string`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:230](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/angular/bootstrap/src/components/slider/slider.component.ts#L230)

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

***

### className

> `readonly` **className**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:155](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/angular/bootstrap/src/components/slider/slider.component.ts#L155)

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### disabled

> `readonly` **disabled**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:244](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/angular/bootstrap/src/components/slider/slider.component.ts#L244)

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

***

### handle

> `readonly` **handle**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotHandleContext`](../interfaces/SliderSlotHandleContext.md)\>\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:285](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/angular/bootstrap/src/components/slider/slider.component.ts#L285)

Slot to change the handlers

***

### label

> `readonly` **label**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotLabelContext`](../interfaces/SliderSlotLabelContext.md)\>\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:273](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/angular/bootstrap/src/components/slider/slider.component.ts#L273)

Slot to change the default labels of the slider

#### Default Value

```ts
({value}: SliderSlotLabelContext) => '' + value
```

***

### max

> `readonly` **max**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:169](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/angular/bootstrap/src/components/slider/slider.component.ts#L169)

Maximum value that can be assigned to the slider

#### Default Value

`100`

***

### min

> `readonly` **min**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:162](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/angular/bootstrap/src/components/slider/slider.component.ts#L162)

Minimum value that can be assigned to the slider

#### Default Value

`0`

***

### readonly

> `readonly` **readonly**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:237](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/angular/bootstrap/src/components/slider/slider.component.ts#L237)

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

***

### rtl

> `readonly` **rtl**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:190](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/angular/bootstrap/src/components/slider/slider.component.ts#L190)

It `true` slider display is inversed

#### Default Value

`false`

***

### showMinMaxLabels

> `readonly` **showMinMaxLabels**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:204](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/angular/bootstrap/src/components/slider/slider.component.ts#L204)

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

***

### showValueLabels

> `readonly` **showValueLabels**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:197](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/angular/bootstrap/src/components/slider/slider.component.ts#L197)

If `true` the value labels are displayed on the slider

#### Default Value

`true`

***

### stepSize

> `readonly` **stepSize**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:176](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/angular/bootstrap/src/components/slider/slider.component.ts#L176)

Unit value between slider steps

#### Default Value

`1`

***

### structure

> `readonly` **structure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderContext`](../interfaces/SliderContext.md)\>\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:279](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/angular/bootstrap/src/components/slider/slider.component.ts#L279)

Slot to change the default display of the slider

***

### values

> `readonly` **values**: `InputSignal`\<`undefined` \| `number`[]\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:183](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/angular/bootstrap/src/components/slider/slider.component.ts#L183)

Current slider values

#### Default Value

`[0]`

***

### valuesChange

> `readonly` **valuesChange**: `OutputEmitterRef`\<`number`[]\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:263](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/angular/bootstrap/src/components/slider/slider.component.ts#L263)

An event emitted when slider values are changed

Event payload equals to the updated slider values

#### Default Value

```ts
() => {}
```

***

### vertical

> `readonly` **vertical**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:251](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/angular/bootstrap/src/components/slider/slider.component.ts#L251)

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

## Accessors

### api

#### Get Signature

> **get** **api**(): `W`\[`"api"`\]

Defined in: [angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/angular/headless/src/utils/widget.ts#L140)

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

Defined in: [angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/angular/headless/src/utils/widget.ts#L156)

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

Defined in: [angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/angular/headless/src/utils/widget.ts#L148)

Retrieves the widget state. Each property of the state is exposed through an Angular [Signal](https://angular.dev/api/core/Signal)

##### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)

## Methods

### onChange()

> **onChange**(`_`): `void`

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:319](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/angular/bootstrap/src/components/slider/slider.component.ts#L319)

Control value accessor methods

#### Parameters

##### \_

`any`

#### Returns

`void`
