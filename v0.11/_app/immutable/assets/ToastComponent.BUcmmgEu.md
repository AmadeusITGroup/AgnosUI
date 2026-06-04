Defined in: [angular/bootstrap/src/components/toast/toast.component.ts:101](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/toast/toast.component.ts#L101)

The `ToastComponent` is a UI component that displays a toast notification.
It extends the `BaseWidgetDirective` and provides various configurable properties
and events to control the behavior and appearance of the toast.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`ToastWidget`](../type-aliases/ToastWidget.md)\>

## Properties

### animated

> `readonly` **animated**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/toast/toast.component.ts:144](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/toast/toast.component.ts#L144)

If `true`, alert closing will be animated.

Animation is triggered  when clicked on the close button (×),
via the `.close()` function or the visible prop is changed

#### Default Value

`true`

***

### animatedOnInit

> `readonly` **animatedOnInit**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/toast/toast.component.ts:134](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/toast/toast.component.ts#L134)

If `true`, alert opening will be animated.

Animation is triggered  when the `.open()` function is called
or the visible prop is changed

#### Default Value

`false`

***

### ariaCloseButtonLabel

> `readonly` **ariaCloseButtonLabel**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/toast/toast.component.ts:165](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/toast/toast.component.ts#L165)

Accessibility close button label

#### Default Value

`'Close'`

***

### autoHide

> `readonly` **autoHide**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/toast/toast.component.ts:151](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/toast/toast.component.ts#L151)

If `true` automatically hides the toast after the delay.

#### Default Value

`true`

***

### children

> `readonly` **children**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`ToastContext`](../interfaces/ToastContext.md)\>\>

Defined in: [angular/bootstrap/src/components/toast/toast.component.ts:170](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/toast/toast.component.ts#L170)

Template for the toast content

***

### className

> `readonly` **className**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/toast/toast.component.ts:220](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/toast/toast.component.ts#L220)

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### delay

> `readonly` **delay**: `InputSignalWithTransform`\<`number` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/toast/toast.component.ts:158](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/toast/toast.component.ts#L158)

Delay in milliseconds before hiding the toast.

#### Default Value

`5000`

***

### dismissible

> `readonly` **dismissible**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/toast/toast.component.ts:108](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/toast/toast.component.ts#L108)

If `true`, alert can be dismissed by the user.
The close button (×) will be displayed and you can be notified of the event with the (close) output.

#### Default Value

`true`

***

### header

> `readonly` **header**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`ToastContext`](../interfaces/ToastContext.md)\>\>

Defined in: [angular/bootstrap/src/components/toast/toast.component.ts:182](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/toast/toast.component.ts#L182)

Header template for the toast component

***

### hidden

> `readonly` **hidden**: `OutputEmitterRef`\<`void`\>

Defined in: [angular/bootstrap/src/components/toast/toast.component.ts:203](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/toast/toast.component.ts#L203)

Callback called when the alert is hidden.

#### Default Value

```ts
() => {}
```

***

### shown

> `readonly` **shown**: `OutputEmitterRef`\<`void`\>

Defined in: [angular/bootstrap/src/components/toast/toast.component.ts:213](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/toast/toast.component.ts#L213)

Callback called when the alert is shown.

#### Default Value

```ts
() => {}
```

***

### structure

> `readonly` **structure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`ToastContext`](../interfaces/ToastContext.md)\>\>

Defined in: [angular/bootstrap/src/components/toast/toast.component.ts:176](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/toast/toast.component.ts#L176)

Global template for the toast component

***

### transition

> `readonly` **transition**: `InputSignal`\<[`TransitionFn`](../type-aliases/TransitionFn.md) \| `undefined`\>

Defined in: [angular/bootstrap/src/components/toast/toast.component.ts:117](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/toast/toast.component.ts#L117)

The transition function will be executed when the alert is displayed or hidden.

Depending on the value of `animatedOnInit`, the animation can be optionally skipped during the showing process.

#### Default Value

`fadeTransition`

***

### visible

> `readonly` **visible**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/toast/toast.component.ts:124](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/toast/toast.component.ts#L124)

If `true` the alert is visible to the user

#### Default Value

`true`

***

### visibleChange

> `readonly` **visibleChange**: `OutputEmitterRef`\<`boolean`\>

Defined in: [angular/bootstrap/src/components/toast/toast.component.ts:193](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/toast/toast.component.ts#L193)

Callback called when the alert visibility changed.

#### Default Value

```ts
() => {}
```

## Accessors

### api

#### Get Signature

> **get** **api**(): `W`\[`"api"`\]

Defined in: [angular/headless/src/utils/widget.ts:144](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/headless/src/utils/widget.ts#L144)

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

Defined in: [angular/headless/src/utils/widget.ts:160](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/headless/src/utils/widget.ts#L160)

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

Defined in: [angular/headless/src/utils/widget.ts:152](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/headless/src/utils/widget.ts#L152)

Retrieves the widget state. Each property of the state is exposed through an Angular [Signal](https://angular.dev/api/core/Signal)

##### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)
