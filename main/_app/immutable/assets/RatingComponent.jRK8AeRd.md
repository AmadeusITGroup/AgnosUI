The `RatingComponent` is an Angular component that allows users to provide a rating.
It extends `BaseWidgetDirective` and implements `ControlValueAccessor` to integrate with Angular forms.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`RatingWidget`](../type-aliases/RatingWidget.md)\>

## Implements

- [`ControlValueAccessor`](https://angular.dev/api/forms/ControlValueAccessor)

## Properties

### ariaLabel

> **ariaLabel**: `undefined` \| `string`

The aria label

#### Default Value

`'Rating'`

#### Defined in

[angular/bootstrap/src/components/rating/rating.component.ts:150](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/rating/rating.component.ts#L150)

***

### ariaLabelledBy

> **ariaLabelledBy**: `undefined` \| `string`

The aria labelled by

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/rating/rating.component.ts:157](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/rating/rating.component.ts#L157)

***

### ariaValueTextFn

> **ariaValueTextFn**: `undefined` \| (`rating`, `maxRating`) => `string`

Return the value for the 'aria-valuetext' attribute.

#### Param

Current rating value.

#### Param

maxRating value.

#### Default Value

```ts
(rating: number, maxRating: number) => `${rating} out of ${maxRating}`
```

#### Defined in

[angular/bootstrap/src/components/rating/rating.component.ts:80](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/rating/rating.component.ts#L80)

***

### className

> **className**: `undefined` \| `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/rating/rating.component.ts:143](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/rating/rating.component.ts#L143)

***

### disabled

> **disabled**: `undefined` \| `boolean`

If `true`, the rating is disabled.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/rating/rating.component.ts:87](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/rating/rating.component.ts#L87)

***

### hover

> **hover**: `EventEmitter`\<`number`\>

An event emitted when the user is hovering over a given rating.

Event payload is equal to the rating being hovered over.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/rating/rating.component.ts:169](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/rating/rating.component.ts#L169)

***

### leave

> **leave**: `EventEmitter`\<`number`\>

An event emitted when the user stops hovering over a given rating.

Event payload is equal to the rating of the last item being hovered over.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/rating/rating.component.ts:181](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/rating/rating.component.ts#L181)

***

### maxRating

> **maxRating**: `undefined` \| `number`

The maximum rating that can be given.

#### Default Value

`10`

#### Defined in

[angular/bootstrap/src/components/rating/rating.component.ts:94](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/rating/rating.component.ts#L94)

***

### rating

> **rating**: `undefined` \| `number`

The current rating. Could be a decimal value like `3.75`.

#### Default Value

`0`

#### Defined in

[angular/bootstrap/src/components/rating/rating.component.ts:101](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/rating/rating.component.ts#L101)

***

### ratingChange

> **ratingChange**: `EventEmitter`\<`number`\>

An event emitted when the rating is changed.

Event payload is equal to the newly selected rating.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/rating/rating.component.ts:193](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/rating/rating.component.ts#L193)

***

### readonly

> **readonly**: `undefined` \| `boolean`

If `true`, the rating can't be changed.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/rating/rating.component.ts:108](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/rating/rating.component.ts#L108)

***

### resettable

> **resettable**: `undefined` \| `boolean`

Define if the rating can be reset.

If set to true, the user can 'unset' the rating value by cliking on the current rating value.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/rating/rating.component.ts:117](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/rating/rating.component.ts#L117)

***

### star

> **star**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`StarContext`](../interfaces/StarContext.md)\>

The template to override the way each star is displayed.

#### Default Value

```ts
({fill}: StarContext) => String.fromCharCode(fill === 100 ? 9733 : 9734)
```

#### Defined in

[angular/bootstrap/src/components/rating/rating.component.ts:127](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/rating/rating.component.ts#L127)

***

### tabindex

> **tabindex**: `undefined` \| `number`

Allows setting a custom rating tabindex.
If the component is disabled, `tabindex` will still be set to `-1`.

#### Default Value

`0`

#### Defined in

[angular/bootstrap/src/components/rating/rating.component.ts:136](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/rating/rating.component.ts#L136)

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

[angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/headless/src/utils/widget.ts#L140)

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

[angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/headless/src/utils/widget.ts#L156)

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

[angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/headless/src/utils/widget.ts#L148)

## Methods

### registerOnChange()

> **registerOnChange**(`fn`): `void`

#### Parameters

• **fn**

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

#### Defined in

[angular/bootstrap/src/components/rating/rating.component.ts:199](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/rating/rating.component.ts#L199)

***

### registerOnTouched()

> **registerOnTouched**(`fn`): `void`

#### Parameters

• **fn**

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

#### Defined in

[angular/bootstrap/src/components/rating/rating.component.ts:203](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/rating/rating.component.ts#L203)

***

### setDisabledState()

> **setDisabledState**(`disabled`): `void`

#### Parameters

• **disabled**: `boolean`

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

#### Defined in

[angular/bootstrap/src/components/rating/rating.component.ts:207](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/rating/rating.component.ts#L207)

***

### writeValue()

> **writeValue**(`value`): `void`

#### Parameters

• **value**: `any`

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

#### Defined in

[angular/bootstrap/src/components/rating/rating.component.ts:195](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/rating/rating.component.ts#L195)
