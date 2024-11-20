SliderComponent is an Angular component that extends the BaseWidgetDirective
to provide a customizable slider widget. This component allows for various
configurations and customizations through its inputs and outputs.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`SliderWidget`](../type-aliases/SliderWidget.md)\>

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

[angular/bootstrap/src/components/slider/slider.component.ts:226](https://github.com/AmadeusITGroup/AgnosUI/blob/bedfbb2e70532d8a9a0858786ea9dca902edea86/angular/bootstrap/src/components/slider/slider.component.ts#L226)

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

[angular/bootstrap/src/components/slider/slider.component.ts:239](https://github.com/AmadeusITGroup/AgnosUI/blob/bedfbb2e70532d8a9a0858786ea9dca902edea86/angular/bootstrap/src/components/slider/slider.component.ts#L239)

***

### className

> **className**: `undefined` \| `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:159](https://github.com/AmadeusITGroup/AgnosUI/blob/bedfbb2e70532d8a9a0858786ea9dca902edea86/angular/bootstrap/src/components/slider/slider.component.ts#L159)

***

### disabled

> **disabled**: `undefined` \| `boolean`

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:255](https://github.com/AmadeusITGroup/AgnosUI/blob/bedfbb2e70532d8a9a0858786ea9dca902edea86/angular/bootstrap/src/components/slider/slider.component.ts#L255)

***

### handle

> **handle**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotHandleContext`](../interfaces/SliderSlotHandleContext.md)\>

Slot to change the handlers

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:298](https://github.com/AmadeusITGroup/AgnosUI/blob/bedfbb2e70532d8a9a0858786ea9dca902edea86/angular/bootstrap/src/components/slider/slider.component.ts#L298)

***

### label

> **label**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotLabelContext`](../interfaces/SliderSlotLabelContext.md)\>

Slot to change the default labels of the slider

#### Default Value

```ts
({value}: SliderSlotLabelContext) => '' + value
```

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:286](https://github.com/AmadeusITGroup/AgnosUI/blob/bedfbb2e70532d8a9a0858786ea9dca902edea86/angular/bootstrap/src/components/slider/slider.component.ts#L286)

***

### max

> **max**: `undefined` \| `number`

Maximum value that can be assigned to the slider

#### Default Value

`100`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:175](https://github.com/AmadeusITGroup/AgnosUI/blob/bedfbb2e70532d8a9a0858786ea9dca902edea86/angular/bootstrap/src/components/slider/slider.component.ts#L175)

***

### min

> **min**: `undefined` \| `number`

Minimum value that can be assigned to the slider

#### Default Value

`0`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:167](https://github.com/AmadeusITGroup/AgnosUI/blob/bedfbb2e70532d8a9a0858786ea9dca902edea86/angular/bootstrap/src/components/slider/slider.component.ts#L167)

***

### readonly

> **readonly**: `undefined` \| `boolean`

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:247](https://github.com/AmadeusITGroup/AgnosUI/blob/bedfbb2e70532d8a9a0858786ea9dca902edea86/angular/bootstrap/src/components/slider/slider.component.ts#L247)

***

### rtl

> **rtl**: `undefined` \| `boolean`

It `true` slider display is inversed

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:199](https://github.com/AmadeusITGroup/AgnosUI/blob/bedfbb2e70532d8a9a0858786ea9dca902edea86/angular/bootstrap/src/components/slider/slider.component.ts#L199)

***

### showMinMaxLabels

> **showMinMaxLabels**: `undefined` \| `boolean`

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:213](https://github.com/AmadeusITGroup/AgnosUI/blob/bedfbb2e70532d8a9a0858786ea9dca902edea86/angular/bootstrap/src/components/slider/slider.component.ts#L213)

***

### showValueLabels

> **showValueLabels**: `undefined` \| `boolean`

If `true` the value labels are displayed on the slider

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:206](https://github.com/AmadeusITGroup/AgnosUI/blob/bedfbb2e70532d8a9a0858786ea9dca902edea86/angular/bootstrap/src/components/slider/slider.component.ts#L206)

***

### stepSize

> **stepSize**: `undefined` \| `number`

Unit value between slider steps

#### Default Value

`1`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:183](https://github.com/AmadeusITGroup/AgnosUI/blob/bedfbb2e70532d8a9a0858786ea9dca902edea86/angular/bootstrap/src/components/slider/slider.component.ts#L183)

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderContext`](../interfaces/SliderContext.md)\>

Slot to change the default display of the slider

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:292](https://github.com/AmadeusITGroup/AgnosUI/blob/bedfbb2e70532d8a9a0858786ea9dca902edea86/angular/bootstrap/src/components/slider/slider.component.ts#L292)

***

### values

> **values**: `undefined` \| `number`[]

Current slider values

#### Default Value

`[0]`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:191](https://github.com/AmadeusITGroup/AgnosUI/blob/bedfbb2e70532d8a9a0858786ea9dca902edea86/angular/bootstrap/src/components/slider/slider.component.ts#L191)

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

[angular/bootstrap/src/components/slider/slider.component.ts:276](https://github.com/AmadeusITGroup/AgnosUI/blob/bedfbb2e70532d8a9a0858786ea9dca902edea86/angular/bootstrap/src/components/slider/slider.component.ts#L276)

***

### vertical

> **vertical**: `undefined` \| `boolean`

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:263](https://github.com/AmadeusITGroup/AgnosUI/blob/bedfbb2e70532d8a9a0858786ea9dca902edea86/angular/bootstrap/src/components/slider/slider.component.ts#L263)

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

[angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/bedfbb2e70532d8a9a0858786ea9dca902edea86/angular/headless/src/utils/widget.ts#L140)

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

[angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/bedfbb2e70532d8a9a0858786ea9dca902edea86/angular/headless/src/utils/widget.ts#L156)

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

[angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/bedfbb2e70532d8a9a0858786ea9dca902edea86/angular/headless/src/utils/widget.ts#L148)

## Methods

### onChange()

> **onChange**(`_`): `void`

Control value accessor methods

#### Parameters

• **\_**: `any`

#### Returns

`void`

#### Defined in

[angular/bootstrap/src/components/slider/slider.component.ts:332](https://github.com/AmadeusITGroup/AgnosUI/blob/bedfbb2e70532d8a9a0858786ea9dca902edea86/angular/bootstrap/src/components/slider/slider.component.ts#L332)
