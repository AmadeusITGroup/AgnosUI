Defined in: [angular/bootstrap/src/components/toast/toast.component.ts:103](https://github.com/AmadeusITGroup/AgnosUI/blob/718d9c682c7d2e9a85b22f74764f1c62fa594748/angular/bootstrap/src/components/toast/toast.component.ts#L103)

The `ToastComponent` is a UI component that displays a toast notification.
It extends the `BaseWidgetDirective` and provides various configurable properties
and events to control the behavior and appearance of the toast.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`ToastWidget`](../type-aliases/ToastWidget.md)\>

## Properties

### animated

> `readonly` **animated**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/toast/toast.component.ts:146](https://github.com/AmadeusITGroup/AgnosUI/blob/718d9c682c7d2e9a85b22f74764f1c62fa594748/angular/bootstrap/src/components/toast/toast.component.ts#L146)

If `true`, alert closing will be animated.

Animation is triggered  when clicked on the close button (×),
via the `.close()` function or the visible prop is changed

#### Default Value

`true`

***

### animatedOnInit

> `readonly` **animatedOnInit**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/toast/toast.component.ts:136](https://github.com/AmadeusITGroup/AgnosUI/blob/718d9c682c7d2e9a85b22f74764f1c62fa594748/angular/bootstrap/src/components/toast/toast.component.ts#L136)

If `true`, alert opening will be animated.

Animation is triggered  when the `.open()` function is called
or the visible prop is changed

#### Default Value

`false`

***

### ariaCloseButtonLabel

> `readonly` **ariaCloseButtonLabel**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/toast/toast.component.ts:167](https://github.com/AmadeusITGroup/AgnosUI/blob/718d9c682c7d2e9a85b22f74764f1c62fa594748/angular/bootstrap/src/components/toast/toast.component.ts#L167)

Accessibility close button label

#### Default Value

`'Close'`

***

### autoHide

> `readonly` **autoHide**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/toast/toast.component.ts:153](https://github.com/AmadeusITGroup/AgnosUI/blob/718d9c682c7d2e9a85b22f74764f1c62fa594748/angular/bootstrap/src/components/toast/toast.component.ts#L153)

If `true` automatically hides the toast after the delay.

#### Default Value

`true`

***

### children

> `readonly` **children**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`ToastContext`](../interfaces/ToastContext.md)\>\>

Defined in: [angular/bootstrap/src/components/toast/toast.component.ts:172](https://github.com/AmadeusITGroup/AgnosUI/blob/718d9c682c7d2e9a85b22f74764f1c62fa594748/angular/bootstrap/src/components/toast/toast.component.ts#L172)

Template for the toast content

***

### className

> `readonly` **className**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/toast/toast.component.ts:222](https://github.com/AmadeusITGroup/AgnosUI/blob/718d9c682c7d2e9a85b22f74764f1c62fa594748/angular/bootstrap/src/components/toast/toast.component.ts#L222)

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### delay

> `readonly` **delay**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

Defined in: [angular/bootstrap/src/components/toast/toast.component.ts:160](https://github.com/AmadeusITGroup/AgnosUI/blob/718d9c682c7d2e9a85b22f74764f1c62fa594748/angular/bootstrap/src/components/toast/toast.component.ts#L160)

Delay in milliseconds before hiding the toast.

#### Default Value

`5000`

***

### dismissible

> `readonly` **dismissible**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/toast/toast.component.ts:110](https://github.com/AmadeusITGroup/AgnosUI/blob/718d9c682c7d2e9a85b22f74764f1c62fa594748/angular/bootstrap/src/components/toast/toast.component.ts#L110)

If `true`, alert can be dismissed by the user.
The close button (×) will be displayed and you can be notified of the event with the (close) output.

#### Default Value

`true`

***

### header

> `readonly` **header**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`ToastContext`](../interfaces/ToastContext.md)\>\>

Defined in: [angular/bootstrap/src/components/toast/toast.component.ts:184](https://github.com/AmadeusITGroup/AgnosUI/blob/718d9c682c7d2e9a85b22f74764f1c62fa594748/angular/bootstrap/src/components/toast/toast.component.ts#L184)

Header template for the toast component

***

### hidden

> `readonly` **hidden**: `OutputEmitterRef`\<`void`\>

Defined in: [angular/bootstrap/src/components/toast/toast.component.ts:205](https://github.com/AmadeusITGroup/AgnosUI/blob/718d9c682c7d2e9a85b22f74764f1c62fa594748/angular/bootstrap/src/components/toast/toast.component.ts#L205)

Callback called when the alert is hidden.

#### Default Value

```ts
() => {}
```

***

### shown

> `readonly` **shown**: `OutputEmitterRef`\<`void`\>

Defined in: [angular/bootstrap/src/components/toast/toast.component.ts:215](https://github.com/AmadeusITGroup/AgnosUI/blob/718d9c682c7d2e9a85b22f74764f1c62fa594748/angular/bootstrap/src/components/toast/toast.component.ts#L215)

Callback called when the alert is shown.

#### Default Value

```ts
() => {}
```

***

### structure

> `readonly` **structure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`ToastContext`](../interfaces/ToastContext.md)\>\>

Defined in: [angular/bootstrap/src/components/toast/toast.component.ts:178](https://github.com/AmadeusITGroup/AgnosUI/blob/718d9c682c7d2e9a85b22f74764f1c62fa594748/angular/bootstrap/src/components/toast/toast.component.ts#L178)

Global template for the toast component

***

### transition

> `readonly` **transition**: `InputSignal`\<`undefined` \| [`TransitionFn`](../type-aliases/TransitionFn.md)\>

Defined in: [angular/bootstrap/src/components/toast/toast.component.ts:119](https://github.com/AmadeusITGroup/AgnosUI/blob/718d9c682c7d2e9a85b22f74764f1c62fa594748/angular/bootstrap/src/components/toast/toast.component.ts#L119)

The transition function will be executed when the alert is displayed or hidden.

Depending on the value of `animatedOnInit`, the animation can be optionally skipped during the showing process.

#### Default Value

`fadeTransition`

***

### visible

> `readonly` **visible**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/toast/toast.component.ts:126](https://github.com/AmadeusITGroup/AgnosUI/blob/718d9c682c7d2e9a85b22f74764f1c62fa594748/angular/bootstrap/src/components/toast/toast.component.ts#L126)

If `true` the alert is visible to the user

#### Default Value

`true`

***

### visibleChange

> `readonly` **visibleChange**: `OutputEmitterRef`\<`boolean`\>

Defined in: [angular/bootstrap/src/components/toast/toast.component.ts:195](https://github.com/AmadeusITGroup/AgnosUI/blob/718d9c682c7d2e9a85b22f74764f1c62fa594748/angular/bootstrap/src/components/toast/toast.component.ts#L195)

Callback called when the alert visibility changed.

#### Default Value

```ts
() => {}
```

## Accessors

### api

#### Get Signature

> **get** **api**(): `W`\[`"api"`\]

Defined in: [angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/718d9c682c7d2e9a85b22f74764f1c62fa594748/angular/headless/src/utils/widget.ts#L140)

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

Defined in: [angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/718d9c682c7d2e9a85b22f74764f1c62fa594748/angular/headless/src/utils/widget.ts#L156)

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

Defined in: [angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/718d9c682c7d2e9a85b22f74764f1c62fa594748/angular/headless/src/utils/widget.ts#L148)

Retrieves the widget state. Each property of the state is exposed through an Angular [Signal](https://angular.dev/api/core/Signal)

##### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)
