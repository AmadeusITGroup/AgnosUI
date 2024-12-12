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

[angular/bootstrap/src/components/toast/toast.component.ts:147](https://github.com/AmadeusITGroup/AgnosUI/blob/bb188aca486c54b1536eeec700e7b5bcd839800a/angular/bootstrap/src/components/toast/toast.component.ts#L147)

***

### animatedOnInit

> `readonly` **animatedOnInit**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true`, alert opening will be animated.

Animation is triggered  when the `.open()` function is called
or the visible prop is changed

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:137](https://github.com/AmadeusITGroup/AgnosUI/blob/bb188aca486c54b1536eeec700e7b5bcd839800a/angular/bootstrap/src/components/toast/toast.component.ts#L137)

***

### ariaCloseButtonLabel

> `readonly` **ariaCloseButtonLabel**: `InputSignal`\<`undefined` \| `string`\>

Accessibility close button label

#### Default Value

`'Close'`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:168](https://github.com/AmadeusITGroup/AgnosUI/blob/bb188aca486c54b1536eeec700e7b5bcd839800a/angular/bootstrap/src/components/toast/toast.component.ts#L168)

***

### autoHide

> `readonly` **autoHide**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true` automatically hides the toast after the delay.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:154](https://github.com/AmadeusITGroup/AgnosUI/blob/bb188aca486c54b1536eeec700e7b5bcd839800a/angular/bootstrap/src/components/toast/toast.component.ts#L154)

***

### children

> `readonly` **children**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`ToastContext`](../interfaces/ToastContext.md)\>\>

Template for the toast content

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:173](https://github.com/AmadeusITGroup/AgnosUI/blob/bb188aca486c54b1536eeec700e7b5bcd839800a/angular/bootstrap/src/components/toast/toast.component.ts#L173)

***

### className

> `readonly` **className**: `InputSignal`\<`undefined` \| `string`\>

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:223](https://github.com/AmadeusITGroup/AgnosUI/blob/bb188aca486c54b1536eeec700e7b5bcd839800a/angular/bootstrap/src/components/toast/toast.component.ts#L223)

***

### delay

> `readonly` **delay**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

Delay in milliseconds before hiding the toast.

#### Default Value

`5000`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:161](https://github.com/AmadeusITGroup/AgnosUI/blob/bb188aca486c54b1536eeec700e7b5bcd839800a/angular/bootstrap/src/components/toast/toast.component.ts#L161)

***

### dismissible

> `readonly` **dismissible**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true`, alert can be dismissed by the user.
The close button (×) will be displayed and you can be notified of the event with the (close) output.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:111](https://github.com/AmadeusITGroup/AgnosUI/blob/bb188aca486c54b1536eeec700e7b5bcd839800a/angular/bootstrap/src/components/toast/toast.component.ts#L111)

***

### header

> `readonly` **header**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`ToastContext`](../interfaces/ToastContext.md)\>\>

Header template for the toast component

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:185](https://github.com/AmadeusITGroup/AgnosUI/blob/bb188aca486c54b1536eeec700e7b5bcd839800a/angular/bootstrap/src/components/toast/toast.component.ts#L185)

***

### hidden

> `readonly` **hidden**: `OutputEmitterRef`\<`void`\>

Callback called when the alert is hidden.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:206](https://github.com/AmadeusITGroup/AgnosUI/blob/bb188aca486c54b1536eeec700e7b5bcd839800a/angular/bootstrap/src/components/toast/toast.component.ts#L206)

***

### shown

> `readonly` **shown**: `OutputEmitterRef`\<`void`\>

Callback called when the alert is shown.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:216](https://github.com/AmadeusITGroup/AgnosUI/blob/bb188aca486c54b1536eeec700e7b5bcd839800a/angular/bootstrap/src/components/toast/toast.component.ts#L216)

***

### structure

> `readonly` **structure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`ToastContext`](../interfaces/ToastContext.md)\>\>

Global template for the toast component

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:179](https://github.com/AmadeusITGroup/AgnosUI/blob/bb188aca486c54b1536eeec700e7b5bcd839800a/angular/bootstrap/src/components/toast/toast.component.ts#L179)

***

### transition

> `readonly` **transition**: `InputSignal`\<`undefined` \| [`TransitionFn`](../type-aliases/TransitionFn.md)\>

The transition function will be executed when the alert is displayed or hidden.

Depending on the value of `animatedOnInit`, the animation can be optionally skipped during the showing process.

#### Default Value

`fadeTransition`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:120](https://github.com/AmadeusITGroup/AgnosUI/blob/bb188aca486c54b1536eeec700e7b5bcd839800a/angular/bootstrap/src/components/toast/toast.component.ts#L120)

***

### visible

> `readonly` **visible**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true` the alert is visible to the user

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:127](https://github.com/AmadeusITGroup/AgnosUI/blob/bb188aca486c54b1536eeec700e7b5bcd839800a/angular/bootstrap/src/components/toast/toast.component.ts#L127)

***

### visibleChange

> `readonly` **visibleChange**: `OutputEmitterRef`\<`boolean`\>

Callback called when the alert visibility changed.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:196](https://github.com/AmadeusITGroup/AgnosUI/blob/bb188aca486c54b1536eeec700e7b5bcd839800a/angular/bootstrap/src/components/toast/toast.component.ts#L196)

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

[angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/bb188aca486c54b1536eeec700e7b5bcd839800a/angular/headless/src/utils/widget.ts#L140)

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

[angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/bb188aca486c54b1536eeec700e7b5bcd839800a/angular/headless/src/utils/widget.ts#L156)

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

[angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/bb188aca486c54b1536eeec700e7b5bcd839800a/angular/headless/src/utils/widget.ts#L148)
