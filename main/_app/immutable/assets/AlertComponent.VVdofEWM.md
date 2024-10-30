AlertComponent is a UI component that extends BaseWidgetDirective to provide
an alert box with various customizable properties and behaviors.

## Remarks

This component is designed to be used with Bootstrap styles and supports
various Bootstrap contextual classes for different alert types.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`AlertWidget`](../type-aliases/AlertWidget.md)\>

## Properties

### animated

> **animated**: `undefined` \| `boolean`

If `true`, alert closing will be animated.

Animation is triggered  when clicked on the close button (×),
via the `.close()` function or the visible prop is changed

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:151](https://github.com/AmadeusITGroup/AgnosUI/blob/e648e411bcc5eb7be14d642d781419fc05c77b60/angular/bootstrap/src/components/alert/alert.component.ts#L151)

***

### animatedOnInit

> **animatedOnInit**: `undefined` \| `boolean`

If `true`, alert opening will be animated.

Animation is triggered  when the `.open()` function is called
or the visible prop is changed

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/e648e411bcc5eb7be14d642d781419fc05c77b60/angular/bootstrap/src/components/alert/alert.component.ts#L140)

***

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `undefined` \| `string`

Accessibility close button label

#### Default Value

`'Close'`

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:158](https://github.com/AmadeusITGroup/AgnosUI/blob/e648e411bcc5eb7be14d642d781419fc05c77b60/angular/bootstrap/src/components/alert/alert.component.ts#L158)

***

### children

> **children**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`AlertContext`](../interfaces/AlertContext.md)\>

Template for the alert content

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:163](https://github.com/AmadeusITGroup/AgnosUI/blob/e648e411bcc5eb7be14d642d781419fc05c77b60/angular/bootstrap/src/components/alert/alert.component.ts#L163)

***

### className

> **className**: `undefined` \| `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:208](https://github.com/AmadeusITGroup/AgnosUI/blob/e648e411bcc5eb7be14d642d781419fc05c77b60/angular/bootstrap/src/components/alert/alert.component.ts#L208)

***

### dismissible

> **dismissible**: `undefined` \| `boolean`

If `true`, alert can be dismissed by the user.
The close button (×) will be displayed and you can be notified of the event with the (close) output.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:111](https://github.com/AmadeusITGroup/AgnosUI/blob/e648e411bcc5eb7be14d642d781419fc05c77b60/angular/bootstrap/src/components/alert/alert.component.ts#L111)

***

### hidden

> **hidden**: `EventEmitter`\<`void`\>

Callback called when the alert is hidden.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:191](https://github.com/AmadeusITGroup/AgnosUI/blob/e648e411bcc5eb7be14d642d781419fc05c77b60/angular/bootstrap/src/components/alert/alert.component.ts#L191)

***

### shown

> **shown**: `EventEmitter`\<`void`\>

Callback called when the alert is shown.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:201](https://github.com/AmadeusITGroup/AgnosUI/blob/e648e411bcc5eb7be14d642d781419fc05c77b60/angular/bootstrap/src/components/alert/alert.component.ts#L201)

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`AlertContext`](../interfaces/AlertContext.md)\>

Global template for the alert component

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:170](https://github.com/AmadeusITGroup/AgnosUI/blob/e648e411bcc5eb7be14d642d781419fc05c77b60/angular/bootstrap/src/components/alert/alert.component.ts#L170)

***

### transition

> **transition**: `undefined` \| [`TransitionFn`](../type-aliases/TransitionFn.md)

The transition function will be executed when the alert is displayed or hidden.

Depending on the value of `animatedOnInit`, the animation can be optionally skipped during the showing process.

#### Default Value

`fadeTransition`

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:121](https://github.com/AmadeusITGroup/AgnosUI/blob/e648e411bcc5eb7be14d642d781419fc05c77b60/angular/bootstrap/src/components/alert/alert.component.ts#L121)

***

### type

> **type**: `undefined` \| [`BSContextualClass`](../type-aliases/BSContextualClass.md)

Type of the alert, following bootstrap types.

#### Default Value

`'primary'`

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:102](https://github.com/AmadeusITGroup/AgnosUI/blob/e648e411bcc5eb7be14d642d781419fc05c77b60/angular/bootstrap/src/components/alert/alert.component.ts#L102)

***

### visible

> **visible**: `undefined` \| `boolean`

If `true` the alert is visible to the user

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:129](https://github.com/AmadeusITGroup/AgnosUI/blob/e648e411bcc5eb7be14d642d781419fc05c77b60/angular/bootstrap/src/components/alert/alert.component.ts#L129)

***

### visibleChange

> **visibleChange**: `EventEmitter`\<`boolean`\>

Callback called when the alert visibility changed.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:181](https://github.com/AmadeusITGroup/AgnosUI/blob/e648e411bcc5eb7be14d642d781419fc05c77b60/angular/bootstrap/src/components/alert/alert.component.ts#L181)

## Accessors

### api

> `get` **api**(): `W`\[`"api"`\]

Retrieves the widget api

#### Returns

`W`\[`"api"`\]

the widget api

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`api`](BaseWidgetDirective.md#api)

#### Defined in

[angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/e648e411bcc5eb7be14d642d781419fc05c77b60/angular/headless/src/utils/widget.ts#L140)

***

### directives

> `get` **directives**(): `W`\[`"directives"`\]

Retrieves the widget directives

#### Returns

`W`\[`"directives"`\]

the widget directives

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`directives`](BaseWidgetDirective.md#directives)

#### Defined in

[angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/e648e411bcc5eb7be14d642d781419fc05c77b60/angular/headless/src/utils/widget.ts#L156)

***

### state

> `get` **state**(): [`AngularState`](../type-aliases/AngularState.md)\<`W`\>

Retrieves the widget state as an Angular [Signal](https://angular.dev/api/core/Signal)

#### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)

#### Defined in

[angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/e648e411bcc5eb7be14d642d781419fc05c77b60/angular/headless/src/utils/widget.ts#L148)
