Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:229](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/slider/slider.component.ts#L229)

SliderComponent is an Angular component that extends the BaseWidgetDirective
to provide a customizable slider widget. This component allows for various
configurations and customizations through its inputs and outputs.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`SliderWidget`](../type-aliases/SliderWidget.md)\>

## Implements

- [`ControlValueAccessor`](https://angular.dev/api/forms/ControlValueAccessor)

## Properties

### ariaLabel

> `readonly` **ariaLabel**: `InputSignal`\<(`sortedIndex`) => `string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:319](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/slider/slider.component.ts#L319)

Return the value for the 'aria-label' attribute for the handle

#### Param

index of the handle in the sorted list

#### Default Value

```ts
() => 'Value'
```

***

### ariaLabelledBy

> `readonly` **ariaLabelledBy**: `InputSignal`\<(`sortedIndex`) => `string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:330](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/slider/slider.component.ts#L330)

Return the value for the 'aria-labelledBy' attribute for the handle

#### Param

index of the handle in the sorted list

#### Default Value

```ts
() => ''
```

***

### ariaValueText

> `readonly` **ariaValueText**: `InputSignal`\<(`value`, `sortedIndex`) => `string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:342](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/slider/slider.component.ts#L342)

Return the value for the 'aria-valuetext' attribute for the handle

#### Param

value of the handle

#### Param

index of the handle in the sorted list

#### Default Value

```ts
() => ''
```

***

### className

> `readonly` **className**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:235](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/slider/slider.component.ts#L235)

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### disabled

> `readonly` **disabled**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:356](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/slider/slider.component.ts#L356)

If `true` slider value cannot be changed and the slider cannot be focused

#### Default Value

`false`

***

### handle

> `readonly` **handle**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotHandleContext`](../interfaces/SliderSlotHandleContext.md)\>\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:419](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/slider/slider.component.ts#L419)

Slot to change the handlers

***

### label

> `readonly` **label**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotLabelContext`](../interfaces/SliderSlotLabelContext.md)\>\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:407](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/slider/slider.component.ts#L407)

Slot to change the default labels of the slider

#### Default Value

```ts
({value}: SliderSlotLabelContext) => '' + value
```

***

### max

> `readonly` **max**: `InputSignalWithTransform`\<`number` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:249](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/slider/slider.component.ts#L249)

Maximum value that can be assigned to the slider

#### Default Value

`100`

***

### maxRange

> `readonly` **maxRange**: `InputSignalWithTransform`\<`number` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:265](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/slider/slider.component.ts#L265)

Maximum distance between two values
When set to 0, no maximum distance constraint is applied.

#### Default Value

`0`

***

### min

> `readonly` **min**: `InputSignalWithTransform`\<`number` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:242](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/slider/slider.component.ts#L242)

Minimum value that can be assigned to the slider

#### Default Value

`0`

***

### minRange

> `readonly` **minRange**: `InputSignalWithTransform`\<`number` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:257](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/slider/slider.component.ts#L257)

Minimum distance between two values.
When set to 0, no minimum distance constraint is applied.

#### Default Value

`0`

***

### pushRange

> `readonly` **pushRange**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:273](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/slider/slider.component.ts#L273)

When true, if moving a value would break the minRange or maxRange constraint,
it will instead push or pull the neighboring values to keep the allowed range rather than just stopping.

#### Default Value

`false`

***

### readonly

> `readonly` **readonly**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:349](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/slider/slider.component.ts#L349)

If `true` slider value cannot be changed but the slider is still focusable

#### Default Value

`false`

***

### rtl

> `readonly` **rtl**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:294](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/slider/slider.component.ts#L294)

It `true` slider display is inversed

#### Default Value

`false`

***

### showMinMaxLabels

> `readonly` **showMinMaxLabels**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:308](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/slider/slider.component.ts#L308)

If `true` the min and max labels are displayed on the slider

#### Default Value

`true`

***

### showTicks

> `readonly` **showTicks**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:370](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/slider/slider.component.ts#L370)

If `true` the ticks are displayed on the slider

#### Default Value

`false`

***

### showTickValues

> `readonly` **showTickValues**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:385](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/slider/slider.component.ts#L385)

If `true` the tick values are displayed on the slider

#### Default Value

`true`

***

### showValueLabels

> `readonly` **showValueLabels**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:301](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/slider/slider.component.ts#L301)

If `true` the value labels are displayed on the slider

#### Default Value

`true`

***

### stepSize

> `readonly` **stepSize**: `InputSignalWithTransform`\<`number` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:280](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/slider/slider.component.ts#L280)

Unit value between slider steps

#### Default Value

`1`

***

### structure

> `readonly` **structure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderContext`](../interfaces/SliderContext.md)\>\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:413](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/slider/slider.component.ts#L413)

Slot to change the default display of the slider

***

### tick

> `readonly` **tick**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`SliderSlotTickContext`](../interfaces/SliderSlotTickContext.md)\>\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:425](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/slider/slider.component.ts#L425)

Slot to change the ticks

***

### tickInterval

> `readonly` **tickInterval**: `InputSignalWithTransform`\<`number` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:378](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/slider/slider.component.ts#L378)

Unit value between the ticks
If value is set to `0` the [stepSize](#stepsize) is used to space the ticks

#### Default Value

`0`

***

### values

> `readonly` **values**: `InputSignal`\<`number`[] \| `undefined`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:287](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/slider/slider.component.ts#L287)

Current slider values

#### Default Value

`[0]`

***

### valuesChange

> `readonly` **valuesChange**: `OutputEmitterRef`\<`number`[]\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:397](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/slider/slider.component.ts#L397)

An event emitted when slider values are changed

Event payload equals to the updated slider values

#### Default Value

```ts
() => {}
```

***

### vertical

> `readonly` **vertical**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:363](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/slider/slider.component.ts#L363)

If `true` is vertically positioned otherwise it is horizontal

#### Default Value

`false`

## Accessors

### api

#### Get Signature

> **get** **api**(): `W`\[`"api"`\]

Defined in: [angular/headless/src/utils/widget.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/headless/src/utils/widget.ts#L144)

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

Defined in: [angular/headless/src/utils/widget.ts:160](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/headless/src/utils/widget.ts#L160)

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

Defined in: [angular/headless/src/utils/widget.ts:152](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/headless/src/utils/widget.ts#L152)

Retrieves the widget state. Each property of the state is exposed through an Angular [Signal](https://angular.dev/api/core/Signal)

##### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)

## Methods

### onChange()

> **onChange**(`_`): `void`

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:459](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/slider/slider.component.ts#L459)

Control value accessor methods

#### Parameters

##### \_

`any`

#### Returns

`void`

***

### registerOnChange()

> **registerOnChange**(`fn`): `void`

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:463](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/slider/slider.component.ts#L463)

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

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:467](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/slider/slider.component.ts#L467)

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

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:483](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/slider/slider.component.ts#L483)

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

Defined in: [angular/bootstrap/src/components/slider/slider.component.ts:471](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/slider/slider.component.ts#L471)

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
