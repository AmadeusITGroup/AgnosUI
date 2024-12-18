AlertComponent is a UI component that extends BaseWidgetDirective to provide
an alert box with various customizable properties and behaviors.

## Remarks

This component is designed to be used with Bootstrap styles and supports
various Bootstrap contextual classes for different alert types.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`AlertWidget`](../type-aliases/AlertWidget.md)\>

## Properties

### animated

> `readonly` **animated**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true`, alert closing will be animated.

Animation is triggered  when clicked on the close button (×),
via the `.close()` function or the visible prop is changed

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:132](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/angular/bootstrap/src/components/alert/alert.component.ts#L132)

***

### animatedOnInit

> `readonly` **animatedOnInit**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true`, alert opening will be animated.

Animation is triggered  when the `.open()` function is called
or the visible prop is changed

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:122](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/angular/bootstrap/src/components/alert/alert.component.ts#L122)

***

### ariaCloseButtonLabel

> `readonly` **ariaCloseButtonLabel**: `InputSignal`\<`undefined` \| `string`\>

Accessibility close button label

#### Default Value

`'Close'`

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:139](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/angular/bootstrap/src/components/alert/alert.component.ts#L139)

***

### children

> `readonly` **children**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`AlertContext`](../interfaces/AlertContext.md)\>\>

Template for the alert content

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/angular/bootstrap/src/components/alert/alert.component.ts#L144)

***

### className

> `readonly` **className**: `InputSignal`\<`undefined` \| `string`\>

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:188](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/angular/bootstrap/src/components/alert/alert.component.ts#L188)

***

### dismissible

> `readonly` **dismissible**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true`, alert can be dismissed by the user.
The close button (×) will be displayed and you can be notified of the event with the (close) output.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:96](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/angular/bootstrap/src/components/alert/alert.component.ts#L96)

***

### hidden

> `readonly` **hidden**: `OutputEmitterRef`\<`void`\>

Callback called when the alert is hidden.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:171](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/angular/bootstrap/src/components/alert/alert.component.ts#L171)

***

### shown

> `readonly` **shown**: `OutputEmitterRef`\<`void`\>

Callback called when the alert is shown.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:181](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/angular/bootstrap/src/components/alert/alert.component.ts#L181)

***

### structure

> `readonly` **structure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`AlertContext`](../interfaces/AlertContext.md)\>\>

Global template for the alert component

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:150](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/angular/bootstrap/src/components/alert/alert.component.ts#L150)

***

### transition

> `readonly` **transition**: `InputSignal`\<`undefined` \| [`TransitionFn`](../type-aliases/TransitionFn.md)\>

The transition function will be executed when the alert is displayed or hidden.

Depending on the value of `animatedOnInit`, the animation can be optionally skipped during the showing process.

#### Default Value

`fadeTransition`

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:105](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/angular/bootstrap/src/components/alert/alert.component.ts#L105)

***

### type

> `readonly` **type**: `InputSignal`\<`undefined` \| [`BSContextualClass`](../type-aliases/BSContextualClass.md)\>

Type of the alert, following bootstrap types.

#### Default Value

`'primary'`

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:88](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/angular/bootstrap/src/components/alert/alert.component.ts#L88)

***

### visible

> `readonly` **visible**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true` the alert is visible to the user

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:112](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/angular/bootstrap/src/components/alert/alert.component.ts#L112)

***

### visibleChange

> `readonly` **visibleChange**: `OutputEmitterRef`\<`boolean`\>

Callback called when the alert visibility changed.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:161](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/angular/bootstrap/src/components/alert/alert.component.ts#L161)

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

[angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/angular/headless/src/utils/widget.ts#L140)

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

[angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/angular/headless/src/utils/widget.ts#L156)

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

[angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/angular/headless/src/utils/widget.ts#L148)
