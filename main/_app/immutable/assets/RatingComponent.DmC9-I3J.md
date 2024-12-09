The `RatingComponent` is an Angular component that allows users to provide a rating.
It extends `BaseWidgetDirective` and implements `ControlValueAccessor` to integrate with Angular forms.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`RatingWidget`](../type-aliases/RatingWidget.md)\>

## Implements

- [`ControlValueAccessor`](https://angular.dev/api/forms/ControlValueAccessor)

## Properties

### ariaLabel

> `readonly` **ariaLabel**: `InputSignal`\<`undefined` \| `string`\>

The aria label

#### Default Value

`'Rating'`

#### Defined in

[angular/bootstrap/src/components/rating/rating.component.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/rating/rating.component.ts#L148)

***

### ariaLabelledBy

> `readonly` **ariaLabelledBy**: `InputSignal`\<`undefined` \| `string`\>

The aria labelled by

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/rating/rating.component.ts:155](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/rating/rating.component.ts#L155)

***

### ariaValueTextFn

> `readonly` **ariaValueTextFn**: `InputSignal`\<`undefined` \| (`rating`, `maxRating`) => `string`\>

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

[angular/bootstrap/src/components/rating/rating.component.ts:78](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/rating/rating.component.ts#L78)

***

### className

> `readonly` **className**: `InputSignal`\<`undefined` \| `string`\>

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/rating/rating.component.ts:141](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/rating/rating.component.ts#L141)

***

### disabled

> `readonly` **disabled**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true`, the rating is disabled.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/rating/rating.component.ts:85](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/rating/rating.component.ts#L85)

***

### hover

> `readonly` **hover**: `OutputEmitterRef`\<`number`\>

An event emitted when the user is hovering over a given rating.

Event payload is equal to the rating being hovered over.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/rating/rating.component.ts:167](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/rating/rating.component.ts#L167)

***

### leave

> `readonly` **leave**: `OutputEmitterRef`\<`number`\>

An event emitted when the user stops hovering over a given rating.

Event payload is equal to the rating of the last item being hovered over.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/rating/rating.component.ts:179](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/rating/rating.component.ts#L179)

***

### maxRating

> `readonly` **maxRating**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

The maximum rating that can be given.

#### Default Value

`10`

#### Defined in

[angular/bootstrap/src/components/rating/rating.component.ts:92](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/rating/rating.component.ts#L92)

***

### rating

> `readonly` **rating**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

The current rating. Could be a decimal value like `3.75`.

#### Default Value

`0`

#### Defined in

[angular/bootstrap/src/components/rating/rating.component.ts:99](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/rating/rating.component.ts#L99)

***

### ratingChange

> `readonly` **ratingChange**: `OutputEmitterRef`\<`number`\>

An event emitted when the rating is changed.

Event payload is equal to the newly selected rating.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/rating/rating.component.ts:191](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/rating/rating.component.ts#L191)

***

### readonly

> `readonly` **readonly**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true`, the rating can't be changed.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/rating/rating.component.ts:106](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/rating/rating.component.ts#L106)

***

### resettable

> `readonly` **resettable**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Define if the rating can be reset.

If set to true, the user can 'unset' the rating value by cliking on the current rating value.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/rating/rating.component.ts:115](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/rating/rating.component.ts#L115)

***

### star

> `readonly` **star**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`StarContext`](../interfaces/StarContext.md)\>\>

The template to override the way each star is displayed.

#### Default Value

```ts
({fill}: StarContext) => String.fromCharCode(fill === 100 ? 9733 : 9734)
```

#### Defined in

[angular/bootstrap/src/components/rating/rating.component.ts:125](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/rating/rating.component.ts#L125)

***

### tabindex

> `readonly` **tabindex**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

Allows setting a custom rating tabindex.
If the component is disabled, `tabindex` will still be set to `-1`.

#### Default Value

`0`

#### Defined in

[angular/bootstrap/src/components/rating/rating.component.ts:134](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/rating/rating.component.ts#L134)

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

[angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/headless/src/utils/widget.ts#L140)

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

[angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/headless/src/utils/widget.ts#L156)

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

[angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/headless/src/utils/widget.ts#L148)

## Methods

### registerOnChange()

> **registerOnChange**(`fn`): `void`

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

#### Defined in

[angular/bootstrap/src/components/rating/rating.component.ts:197](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/rating/rating.component.ts#L197)

***

### registerOnTouched()

> **registerOnTouched**(`fn`): `void`

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

#### Defined in

[angular/bootstrap/src/components/rating/rating.component.ts:201](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/rating/rating.component.ts#L201)

***

### setDisabledState()

> **setDisabledState**(`disabled`): `void`

#### Parameters

##### disabled

`boolean`

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

[angular/bootstrap/src/components/rating/rating.component.ts:205](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/rating/rating.component.ts#L205)

***

### writeValue()

> **writeValue**(`value`): `void`

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

#### Defined in

[angular/bootstrap/src/components/rating/rating.component.ts:193](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/rating/rating.component.ts#L193)
