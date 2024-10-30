The `ToastComponent` is a UI component that displays a toast notification.
It extends the `BaseWidgetDirective` and provides various configurable properties
and events to control the behavior and appearance of the toast.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`ToastWidget`](../type-aliases/ToastWidget.md)\>

## Properties

### animated

> **animated**: `undefined` \| `boolean`

If `true`, alert closing will be animated.

Animation is triggered  when clicked on the close button (×),
via the `.close()` function or the visible prop is changed

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:165](https://github.com/AmadeusITGroup/AgnosUI/blob/32320879d65566f33510054cc017aa01bb1f6f02/angular/bootstrap/src/components/toast/toast.component.ts#L165)

***

### animatedOnInit

> **animatedOnInit**: `undefined` \| `boolean`

If `true`, alert opening will be animated.

Animation is triggered  when the `.open()` function is called
or the visible prop is changed

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:154](https://github.com/AmadeusITGroup/AgnosUI/blob/32320879d65566f33510054cc017aa01bb1f6f02/angular/bootstrap/src/components/toast/toast.component.ts#L154)

***

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `undefined` \| `string`

Accessibility close button label

#### Default Value

`'Close'`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:188](https://github.com/AmadeusITGroup/AgnosUI/blob/32320879d65566f33510054cc017aa01bb1f6f02/angular/bootstrap/src/components/toast/toast.component.ts#L188)

***

### autoHide

> **autoHide**: `undefined` \| `boolean`

If `true` automatically hides the toast after the delay.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:173](https://github.com/AmadeusITGroup/AgnosUI/blob/32320879d65566f33510054cc017aa01bb1f6f02/angular/bootstrap/src/components/toast/toast.component.ts#L173)

***

### children

> **children**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ToastContext`](../interfaces/ToastContext.md)\>

Template for the toast content

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:193](https://github.com/AmadeusITGroup/AgnosUI/blob/32320879d65566f33510054cc017aa01bb1f6f02/angular/bootstrap/src/components/toast/toast.component.ts#L193)

***

### className

> **className**: `undefined` \| `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:244](https://github.com/AmadeusITGroup/AgnosUI/blob/32320879d65566f33510054cc017aa01bb1f6f02/angular/bootstrap/src/components/toast/toast.component.ts#L244)

***

### delay

> **delay**: `undefined` \| `number`

Delay in milliseconds before hiding the toast.

#### Default Value

`5000`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:181](https://github.com/AmadeusITGroup/AgnosUI/blob/32320879d65566f33510054cc017aa01bb1f6f02/angular/bootstrap/src/components/toast/toast.component.ts#L181)

***

### dismissible

> **dismissible**: `undefined` \| `boolean`

If `true`, alert can be dismissed by the user.
The close button (×) will be displayed and you can be notified of the event with the (close) output.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:125](https://github.com/AmadeusITGroup/AgnosUI/blob/32320879d65566f33510054cc017aa01bb1f6f02/angular/bootstrap/src/components/toast/toast.component.ts#L125)

***

### header

> **header**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ToastContext`](../interfaces/ToastContext.md)\>

Header template for the toast component

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:206](https://github.com/AmadeusITGroup/AgnosUI/blob/32320879d65566f33510054cc017aa01bb1f6f02/angular/bootstrap/src/components/toast/toast.component.ts#L206)

***

### hidden

> **hidden**: `EventEmitter`\<`void`\>

Callback called when the alert is hidden.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:227](https://github.com/AmadeusITGroup/AgnosUI/blob/32320879d65566f33510054cc017aa01bb1f6f02/angular/bootstrap/src/components/toast/toast.component.ts#L227)

***

### shown

> **shown**: `EventEmitter`\<`void`\>

Callback called when the alert is shown.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:237](https://github.com/AmadeusITGroup/AgnosUI/blob/32320879d65566f33510054cc017aa01bb1f6f02/angular/bootstrap/src/components/toast/toast.component.ts#L237)

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ToastContext`](../interfaces/ToastContext.md)\>

Global template for the toast component

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:200](https://github.com/AmadeusITGroup/AgnosUI/blob/32320879d65566f33510054cc017aa01bb1f6f02/angular/bootstrap/src/components/toast/toast.component.ts#L200)

***

### transition

> **transition**: `undefined` \| [`TransitionFn`](../type-aliases/TransitionFn.md)

The transition function will be executed when the alert is displayed or hidden.

Depending on the value of `animatedOnInit`, the animation can be optionally skipped during the showing process.

#### Default Value

`fadeTransition`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:135](https://github.com/AmadeusITGroup/AgnosUI/blob/32320879d65566f33510054cc017aa01bb1f6f02/angular/bootstrap/src/components/toast/toast.component.ts#L135)

***

### visible

> **visible**: `undefined` \| `boolean`

If `true` the alert is visible to the user

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:143](https://github.com/AmadeusITGroup/AgnosUI/blob/32320879d65566f33510054cc017aa01bb1f6f02/angular/bootstrap/src/components/toast/toast.component.ts#L143)

***

### visibleChange

> **visibleChange**: `EventEmitter`\<`boolean`\>

Callback called when the alert visibility changed.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:217](https://github.com/AmadeusITGroup/AgnosUI/blob/32320879d65566f33510054cc017aa01bb1f6f02/angular/bootstrap/src/components/toast/toast.component.ts#L217)

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

[angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/32320879d65566f33510054cc017aa01bb1f6f02/angular/headless/src/utils/widget.ts#L140)

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

[angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/32320879d65566f33510054cc017aa01bb1f6f02/angular/headless/src/utils/widget.ts#L156)

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

[angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/32320879d65566f33510054cc017aa01bb1f6f02/angular/headless/src/utils/widget.ts#L148)
