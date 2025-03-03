Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:249](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/angular/bootstrap/src/components/slider/slider.component.ts#L249)

SliderComponent is an Angular component that extends the BaseWidgetDirective
to provide a customizable slider widget. This component allows for various
configurations and customizations through its inputs and outputs.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`SliderWidget`](../type-aliases/SliderWidget.md)\>

## Implements

- [`ControlValueAccessor`](https://angular.dev/api/forms/ControlValueAccessor)

## Properties

### ariaLabel

> `readonly` **ariaLabel**: `InputSignal`\<`undefined` \| (`sortedIndex`) => `string`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:315](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/angular/bootstrap/src/components/slider/slider.component.ts#L315)

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

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:326](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/angular/bootstrap/src/components/slider/slider.component.ts#L326)

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

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:338](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/angular/bootstrap/src/components/slider/slider.component.ts#L338)

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

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:255](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/angular/bootstrap/src/components/slider/slider.component.ts#L255)

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### disabled

> `readonly` **disabled**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:352](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/angular/bootstrap/src/components/slider/slider.component.ts#L352)

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

***

### handle

> `readonly` **handle**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotHandleContext`](../interfaces/SliderSlotHandleContext.md)\>\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:415](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/angular/bootstrap/src/components/slider/slider.component.ts#L415)

Slot to change the handlers

***

### label

> `readonly` **label**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotLabelContext`](../interfaces/SliderSlotLabelContext.md)\>\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:403](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/angular/bootstrap/src/components/slider/slider.component.ts#L403)

Slot to change the default labels of the slider

#### Default Value

```ts
({value}: SliderSlotLabelContext) => '' + value
```

***

### max

> `readonly` **max**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:269](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/angular/bootstrap/src/components/slider/slider.component.ts#L269)

Maximum value that can be assigned to the slider

#### Default Value

`100`

***

### min

> `readonly` **min**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:262](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/angular/bootstrap/src/components/slider/slider.component.ts#L262)

Minimum value that can be assigned to the slider

#### Default Value

`0`

***

### readonly

> `readonly` **readonly**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:345](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/angular/bootstrap/src/components/slider/slider.component.ts#L345)

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

***

### rtl

> `readonly` **rtl**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:290](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/angular/bootstrap/src/components/slider/slider.component.ts#L290)

It `true` slider display is inversed

#### Default Value

`false`

***

### showMinMaxLabels

> `readonly` **showMinMaxLabels**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:304](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/angular/bootstrap/src/components/slider/slider.component.ts#L304)

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

***

### showTicks

> `readonly` **showTicks**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:366](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/angular/bootstrap/src/components/slider/slider.component.ts#L366)

If `true` the ticks are displayed on the slider

#### Default Value

`false`

***

### showTickValues

> `readonly` **showTickValues**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:381](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/angular/bootstrap/src/components/slider/slider.component.ts#L381)

If `true` the tick values are displayed on the slider

#### Default Value

`true`

***

### showValueLabels

> `readonly` **showValueLabels**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:297](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/angular/bootstrap/src/components/slider/slider.component.ts#L297)

If `true` the value labels are displayed on the slider

#### Default Value

`true`

***

### stepSize

> `readonly` **stepSize**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:276](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/angular/bootstrap/src/components/slider/slider.component.ts#L276)

Unit value between slider steps

#### Default Value

`1`

***

### structure

> `readonly` **structure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderContext`](../interfaces/SliderContext.md)\>\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:409](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/angular/bootstrap/src/components/slider/slider.component.ts#L409)

Slot to change the default display of the slider

***

### tick

> `readonly` **tick**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotTickContext`](../interfaces/SliderSlotTickContext.md)\>\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:421](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/angular/bootstrap/src/components/slider/slider.component.ts#L421)

Slot to change the ticks

***

### tickInterval

> `readonly` **tickInterval**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:374](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/angular/bootstrap/src/components/slider/slider.component.ts#L374)

Unit value between the ticks
If value is set to `0` the [stepSize](SliderComponent.md#stepsize) is used to space the ticks

#### Default Value

`0`

***

### values

> `readonly` **values**: `InputSignal`\<`undefined` \| `number`[]\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:283](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/angular/bootstrap/src/components/slider/slider.component.ts#L283)

Current slider values

#### Default Value

`[0]`

***

### valuesChange

> `readonly` **valuesChange**: `OutputEmitterRef`\<`number`[]\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:393](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/angular/bootstrap/src/components/slider/slider.component.ts#L393)

An event emitted when slider values are changed

Event payload equals to the updated slider values

#### Default Value

```ts
() => {}
```

***

### vertical

> `readonly` **vertical**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:359](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/angular/bootstrap/src/components/slider/slider.component.ts#L359)

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

## Accessors

### api

#### Get Signature

> **get** **api**(): `W`\[`"api"`\]

Defined in: [angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/angular/headless/src/utils/widget.ts#L140)

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

Defined in: [angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/angular/headless/src/utils/widget.ts#L156)

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

Defined in: [angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/angular/headless/src/utils/widget.ts#L148)

Retrieves the widget state. Each property of the state is exposed through an Angular [Signal](https://angular.dev/api/core/Signal)

##### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)

## Methods

### onChange()

> **onChange**(`_`): `void`

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:457](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/angular/bootstrap/src/components/slider/slider.component.ts#L457)

Control value accessor methods

#### Parameters

##### \_

`any`

#### Returns

`void`

***

### registerOnChange()

> **registerOnChange**(`fn`): `void`

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:461](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/angular/bootstrap/src/components/slider/slider.component.ts#L461)

#### Parameters

##### fn

(`value`) => `any`

The callback function to register

#### Returns

`void`

#### Description

Registers a callback function that is called when the control's value
changes in the UI.

This method is called by the forms API on initialization to update the form
model when values propagate from the view to the model.

When implementing the `registerOnChange` method in your own value accessor,
save the given function so your class calls it at the appropriate time.

#### Usage Notes

### Store the change function

The following example stores the provided function as an internal method.

```ts
registerOnChange(fn: (_: any) => void): void {
  this._onChange = fn;
}
```

When the value changes in the UI, call the registered
function to allow the forms API to update itself:

```ts
host: {
   '(change)': '_onChange($event.target.value)'
}
```

#### Implementation of

`ControlValueAccessor.registerOnChange`

***

### registerOnTouched()

> **registerOnTouched**(`fn`): `void`

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:465](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/angular/bootstrap/src/components/slider/slider.component.ts#L465)

#### Parameters

##### fn

() => `any`

The callback function to register

#### Returns

`void`

#### Description

Registers a callback function that is called by the forms API on initialization
to update the form model on blur.

When implementing `registerOnTouched` in your own value accessor, save the given
function so your class calls it when the control should be considered
blurred or "touched".

#### Usage Notes

### Store the callback function

The following example stores the provided function as an internal method.

```ts
registerOnTouched(fn: any): void {
  this._onTouched = fn;
}
```

On blur (or equivalent), your class should call the registered function to allow
the forms API to update itself:

```ts
host: {
   '(blur)': '_onTouched()'
}
```

#### Implementation of

`ControlValueAccessor.registerOnTouched`

***

### setDisabledState()

> **setDisabledState**(`isDisabled`): `void`

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:481](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/angular/bootstrap/src/components/slider/slider.component.ts#L481)

#### Parameters

##### isDisabled

`boolean`

The disabled status to set on the element

#### Returns

`void`

#### Description

Function that is called by the forms API when the control status changes to
or from 'DISABLED'. Depending on the status, it enables or disables the
appropriate DOM element.

#### Usage Notes

The following is an example of writing the disabled property to a native DOM element:

```ts
setDisabledState(isDisabled: boolean): void {
  this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
}
```

#### Implementation of

`ControlValueAccessor.setDisabledState`

***

### writeValue()

> **writeValue**(`value`): `void`

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:469](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/angular/bootstrap/src/components/slider/slider.component.ts#L469)

#### Parameters

##### value

`any`

#### Returns

`void`

#### Description

Writes a new value to the element.

This method is called by the forms API to write to the view when programmatic
changes from model to view are requested.

#### Usage Notes

### Write a value to the element

The following example writes a value to the native DOM element.

```ts
writeValue(value: any): void {
  this._renderer.setProperty(this._elementRef.nativeElement, 'value', value);
}
```

#### Implementation of

`ControlValueAccessor.writeValue`
