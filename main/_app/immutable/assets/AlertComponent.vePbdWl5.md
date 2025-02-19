Defined in: [angular/bootstrap/src/components/alert/alert.component.ts:82](https://github.com/AmadeusITGroup/AgnosUI/blob/915f6cf7748215ff3ad341befcc303685514ea2f/angular/bootstrap/src/components/alert/alert.component.ts#L82)

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

Defined in: [angular/bootstrap/src/components/alert/alert.component.ts:132](https://github.com/AmadeusITGroup/AgnosUI/blob/915f6cf7748215ff3ad341befcc303685514ea2f/angular/bootstrap/src/components/alert/alert.component.ts#L132)

If `true`, alert closing will be animated.

Animation is triggered  when clicked on the close button (×),
via the `.close()` function or the visible prop is changed

#### Default Value

`true`

***

### animatedOnInit

> `readonly` **animatedOnInit**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/alert/alert.component.ts:122](https://github.com/AmadeusITGroup/AgnosUI/blob/915f6cf7748215ff3ad341befcc303685514ea2f/angular/bootstrap/src/components/alert/alert.component.ts#L122)

If `true`, alert opening will be animated.

Animation is triggered  when the `.open()` function is called
or the visible prop is changed

#### Default Value

`false`

***

### ariaCloseButtonLabel

> `readonly` **ariaCloseButtonLabel**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/alert/alert.component.ts:139](https://github.com/AmadeusITGroup/AgnosUI/blob/915f6cf7748215ff3ad341befcc303685514ea2f/angular/bootstrap/src/components/alert/alert.component.ts#L139)

Accessibility close button label

#### Default Value

`'Close'`

***

### children

> `readonly` **children**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`AlertContext`](../interfaces/AlertContext.md)\>\>

Defined in: [angular/bootstrap/src/components/alert/alert.component.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/915f6cf7748215ff3ad341befcc303685514ea2f/angular/bootstrap/src/components/alert/alert.component.ts#L144)

Template for the alert content

***

### className

> `readonly` **className**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/alert/alert.component.ts:188](https://github.com/AmadeusITGroup/AgnosUI/blob/915f6cf7748215ff3ad341befcc303685514ea2f/angular/bootstrap/src/components/alert/alert.component.ts#L188)

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### dismissible

> `readonly` **dismissible**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/alert/alert.component.ts:96](https://github.com/AmadeusITGroup/AgnosUI/blob/915f6cf7748215ff3ad341befcc303685514ea2f/angular/bootstrap/src/components/alert/alert.component.ts#L96)

If `true`, alert can be dismissed by the user.
The close button (×) will be displayed and you can be notified of the event with the (close) output.

#### Default Value

`true`

***

### hidden

> `readonly` **hidden**: `OutputEmitterRef`\<`void`\>

Defined in: [angular/bootstrap/src/components/alert/alert.component.ts:171](https://github.com/AmadeusITGroup/AgnosUI/blob/915f6cf7748215ff3ad341befcc303685514ea2f/angular/bootstrap/src/components/alert/alert.component.ts#L171)

Callback called when the alert is hidden.

#### Default Value

```ts
() => {}
```

***

### shown

> `readonly` **shown**: `OutputEmitterRef`\<`void`\>

Defined in: [angular/bootstrap/src/components/alert/alert.component.ts:181](https://github.com/AmadeusITGroup/AgnosUI/blob/915f6cf7748215ff3ad341befcc303685514ea2f/angular/bootstrap/src/components/alert/alert.component.ts#L181)

Callback called when the alert is shown.

#### Default Value

```ts
() => {}
```

***

### structure

> `readonly` **structure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`AlertContext`](../interfaces/AlertContext.md)\>\>

Defined in: [angular/bootstrap/src/components/alert/alert.component.ts:150](https://github.com/AmadeusITGroup/AgnosUI/blob/915f6cf7748215ff3ad341befcc303685514ea2f/angular/bootstrap/src/components/alert/alert.component.ts#L150)

Global template for the alert component

***

### transition

> `readonly` **transition**: `InputSignal`\<`undefined` \| [`TransitionFn`](../type-aliases/TransitionFn.md)\>

Defined in: [angular/bootstrap/src/components/alert/alert.component.ts:105](https://github.com/AmadeusITGroup/AgnosUI/blob/915f6cf7748215ff3ad341befcc303685514ea2f/angular/bootstrap/src/components/alert/alert.component.ts#L105)

The transition function will be executed when the alert is displayed or hidden.

Depending on the value of `animatedOnInit`, the animation can be optionally skipped during the showing process.

#### Default Value

`fadeTransition`

***

### type

> `readonly` **type**: `InputSignal`\<`undefined` \| [`BSContextualClass`](../type-aliases/BSContextualClass.md)\>

Defined in: [angular/bootstrap/src/components/alert/alert.component.ts:88](https://github.com/AmadeusITGroup/AgnosUI/blob/915f6cf7748215ff3ad341befcc303685514ea2f/angular/bootstrap/src/components/alert/alert.component.ts#L88)

Type of the alert, following bootstrap types.

#### Default Value

`'primary'`

***

### visible

> `readonly` **visible**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/alert/alert.component.ts:112](https://github.com/AmadeusITGroup/AgnosUI/blob/915f6cf7748215ff3ad341befcc303685514ea2f/angular/bootstrap/src/components/alert/alert.component.ts#L112)

If `true` the alert is visible to the user

#### Default Value

`true`

***

### visibleChange

> `readonly` **visibleChange**: `OutputEmitterRef`\<`boolean`\>

Defined in: [angular/bootstrap/src/components/alert/alert.component.ts:161](https://github.com/AmadeusITGroup/AgnosUI/blob/915f6cf7748215ff3ad341befcc303685514ea2f/angular/bootstrap/src/components/alert/alert.component.ts#L161)

Callback called when the alert visibility changed.

#### Default Value

```ts
() => {}
```

## Accessors

### api

#### Get Signature

> **get** **api**(): `W`\[`"api"`\]

Defined in: [angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/915f6cf7748215ff3ad341befcc303685514ea2f/angular/headless/src/utils/widget.ts#L140)

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

Defined in: [angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/915f6cf7748215ff3ad341befcc303685514ea2f/angular/headless/src/utils/widget.ts#L156)

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

Defined in: [angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/915f6cf7748215ff3ad341befcc303685514ea2f/angular/headless/src/utils/widget.ts#L148)

Retrieves the widget state. Each property of the state is exposed through an Angular [Signal](https://angular.dev/api/core/Signal)

##### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)
