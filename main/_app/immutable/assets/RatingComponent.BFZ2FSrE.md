Defined in: [angular/bootstrap/src/components/rating/rating.component.ts:64](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/angular/bootstrap/src/components/rating/rating.component.ts#L64)

The `RatingComponent` is an Angular component that allows users to provide a rating.
It extends `BaseWidgetDirective` and implements `ControlValueAccessor` to integrate with Angular forms.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`RatingWidget`](../type-aliases/RatingWidget.md)\>

## Implements

- [`ControlValueAccessor`](https://angular.dev/api/forms/ControlValueAccessor)

## Properties

### ariaLabel

> `readonly` **ariaLabel**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/rating/rating.component.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/angular/bootstrap/src/components/rating/rating.component.ts#L148)

The aria label

#### Default Value

`'Rating'`

***

### ariaLabelledBy

> `readonly` **ariaLabelledBy**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/rating/rating.component.ts:155](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/angular/bootstrap/src/components/rating/rating.component.ts#L155)

The aria labelled by

#### Default Value

`''`

***

### ariaValueTextFn

> `readonly` **ariaValueTextFn**: `InputSignal`\<(`rating`, `maxRating`) => `string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/rating/rating.component.ts:78](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/angular/bootstrap/src/components/rating/rating.component.ts#L78)

Return the value for the 'aria-valuetext' attribute.

#### Param

Current rating value.

#### Param

maxRating value.

#### Default Value

```ts
(rating: number, maxRating: number) => `${rating} out of ${maxRating}`
```

***

### className

> `readonly` **className**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/rating/rating.component.ts:141](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/angular/bootstrap/src/components/rating/rating.component.ts#L141)

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### disabled

> `readonly` **disabled**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/rating/rating.component.ts:85](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/angular/bootstrap/src/components/rating/rating.component.ts#L85)

If `true`, the rating is disabled.

#### Default Value

`false`

***

### hover

> `readonly` **hover**: `OutputEmitterRef`\<`number`\>

Defined in: [angular/bootstrap/src/components/rating/rating.component.ts:167](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/angular/bootstrap/src/components/rating/rating.component.ts#L167)

An event emitted when the user is hovering over a given rating.

Event payload is equal to the rating being hovered over.

#### Default Value

```ts
() => {}
```

***

### leave

> `readonly` **leave**: `OutputEmitterRef`\<`number`\>

Defined in: [angular/bootstrap/src/components/rating/rating.component.ts:179](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/angular/bootstrap/src/components/rating/rating.component.ts#L179)

An event emitted when the user stops hovering over a given rating.

Event payload is equal to the rating of the last item being hovered over.

#### Default Value

```ts
() => {}
```

***

### maxRating

> `readonly` **maxRating**: `InputSignalWithTransform`\<`number` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/rating/rating.component.ts:92](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/angular/bootstrap/src/components/rating/rating.component.ts#L92)

The maximum rating that can be given.

#### Default Value

`10`

***

### rating

> `readonly` **rating**: `InputSignalWithTransform`\<`number` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/rating/rating.component.ts:99](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/angular/bootstrap/src/components/rating/rating.component.ts#L99)

The current rating. Could be a decimal value like `3.75`.

#### Default Value

`0`

***

### ratingChange

> `readonly` **ratingChange**: `OutputEmitterRef`\<`number`\>

Defined in: [angular/bootstrap/src/components/rating/rating.component.ts:191](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/angular/bootstrap/src/components/rating/rating.component.ts#L191)

An event emitted when the rating is changed.

Event payload is equal to the newly selected rating.

#### Default Value

```ts
() => {}
```

***

### readonly

> `readonly` **readonly**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/rating/rating.component.ts:106](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/angular/bootstrap/src/components/rating/rating.component.ts#L106)

If `true`, the rating can't be changed.

#### Default Value

`false`

***

### resettable

> `readonly` **resettable**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/rating/rating.component.ts:115](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/angular/bootstrap/src/components/rating/rating.component.ts#L115)

Define if the rating can be reset.

If set to true, the user can 'unset' the rating value by cliking on the current rating value.

#### Default Value

`true`

***

### star

> `readonly` **star**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`StarContext`](../interfaces/StarContext.md)\>\>

Defined in: [angular/bootstrap/src/components/rating/rating.component.ts:125](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/angular/bootstrap/src/components/rating/rating.component.ts#L125)

The template to override the way each star is displayed.

#### Default Value

```ts
({fill}: StarContext) => String.fromCharCode(fill === 100 ? 9733 : 9734)
```

***

### tabindex

> `readonly` **tabindex**: `InputSignalWithTransform`\<`number` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/rating/rating.component.ts:134](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/angular/bootstrap/src/components/rating/rating.component.ts#L134)

Allows setting a custom rating tabindex.
If the component is disabled, `tabindex` will still be set to `-1`.

#### Default Value

`0`

## Accessors

### api

#### Get Signature

> **get** **api**(): `W`\[`"api"`\]

Defined in: [angular/headless/src/utils/widget.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/angular/headless/src/utils/widget.ts#L144)

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

Defined in: [angular/headless/src/utils/widget.ts:160](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/angular/headless/src/utils/widget.ts#L160)

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

Defined in: [angular/headless/src/utils/widget.ts:152](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/angular/headless/src/utils/widget.ts#L152)

Retrieves the widget state. Each property of the state is exposed through an Angular [Signal](https://angular.dev/api/core/Signal)

##### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)

## Methods

### registerOnChange()

> **registerOnChange**(`fn`): `void`

Defined in: [angular/bootstrap/src/components/rating/rating.component.ts:197](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/angular/bootstrap/src/components/rating/rating.component.ts#L197)

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

Defined in: [angular/bootstrap/src/components/rating/rating.component.ts:201](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/angular/bootstrap/src/components/rating/rating.component.ts#L201)

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

> **setDisabledState**(`disabled`): `void`

Defined in: [angular/bootstrap/src/components/rating/rating.component.ts:205](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/angular/bootstrap/src/components/rating/rating.component.ts#L205)

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

***

### writeValue()

> **writeValue**(`value`): `void`

Defined in: [angular/bootstrap/src/components/rating/rating.component.ts:193](https://github.com/AmadeusITGroup/AgnosUI/blob/a93de40f073020905cec7409f976c410e69e57f5/angular/bootstrap/src/components/rating/rating.component.ts#L193)

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
