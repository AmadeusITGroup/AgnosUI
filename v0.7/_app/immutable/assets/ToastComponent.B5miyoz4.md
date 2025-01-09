The `ToastComponent` is a UI component that displays a toast notification.
It extends the `BaseWidgetDirective` and provides various configurable properties
and events to control the behavior and appearance of the toast.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`ToastWidget`](../type-aliases/ToastWidget.md)\>

## Properties

### animated

> `readonly` **animated**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true`, alert closing will be animated.

Animation is triggered  when clicked on the close button (×),
via the `.close()` function or the visible prop is changed

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:146](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/bootstrap/src/components/toast/toast.component.ts#L146)

***

### animatedOnInit

> `readonly` **animatedOnInit**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true`, alert opening will be animated.

Animation is triggered  when the `.open()` function is called
or the visible prop is changed

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:136](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/bootstrap/src/components/toast/toast.component.ts#L136)

***

### ariaCloseButtonLabel

> `readonly` **ariaCloseButtonLabel**: `InputSignal`\<`undefined` \| `string`\>

Accessibility close button label

#### Default Value

`'Close'`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:167](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/bootstrap/src/components/toast/toast.component.ts#L167)

***

### autoHide

> `readonly` **autoHide**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true` automatically hides the toast after the delay.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:153](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/bootstrap/src/components/toast/toast.component.ts#L153)

***

### children

> `readonly` **children**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`ToastContext`](../interfaces/ToastContext.md)\>\>

Template for the toast content

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:172](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/bootstrap/src/components/toast/toast.component.ts#L172)

***

### className

> `readonly` **className**: `InputSignal`\<`undefined` \| `string`\>

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:222](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/bootstrap/src/components/toast/toast.component.ts#L222)

***

### delay

> `readonly` **delay**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

Delay in milliseconds before hiding the toast.

#### Default Value

`5000`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:160](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/bootstrap/src/components/toast/toast.component.ts#L160)

***

### dismissible

> `readonly` **dismissible**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true`, alert can be dismissed by the user.
The close button (×) will be displayed and you can be notified of the event with the (close) output.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:110](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/bootstrap/src/components/toast/toast.component.ts#L110)

***

### header

> `readonly` **header**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`ToastContext`](../interfaces/ToastContext.md)\>\>

Header template for the toast component

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:184](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/bootstrap/src/components/toast/toast.component.ts#L184)

***

### hidden

> `readonly` **hidden**: `OutputEmitterRef`\<`void`\>

Callback called when the alert is hidden.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:205](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/bootstrap/src/components/toast/toast.component.ts#L205)

***

### shown

> `readonly` **shown**: `OutputEmitterRef`\<`void`\>

Callback called when the alert is shown.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:215](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/bootstrap/src/components/toast/toast.component.ts#L215)

***

### structure

> `readonly` **structure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`ToastContext`](../interfaces/ToastContext.md)\>\>

Global template for the toast component

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:178](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/bootstrap/src/components/toast/toast.component.ts#L178)

***

### transition

> `readonly` **transition**: `InputSignal`\<`undefined` \| [`TransitionFn`](../type-aliases/TransitionFn.md)\>

The transition function will be executed when the alert is displayed or hidden.

Depending on the value of `animatedOnInit`, the animation can be optionally skipped during the showing process.

#### Default Value

`fadeTransition`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:119](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/bootstrap/src/components/toast/toast.component.ts#L119)

***

### visible

> `readonly` **visible**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true` the alert is visible to the user

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:126](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/bootstrap/src/components/toast/toast.component.ts#L126)

***

### visibleChange

> `readonly` **visibleChange**: `OutputEmitterRef`\<`boolean`\>

Callback called when the alert visibility changed.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:195](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/bootstrap/src/components/toast/toast.component.ts#L195)

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

[angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/headless/src/utils/widget.ts#L140)

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

[angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/headless/src/utils/widget.ts#L156)

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

[angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/fcaec31fd04bbd96f2fa14406fc19f9c806187dd/angular/headless/src/utils/widget.ts#L148)
