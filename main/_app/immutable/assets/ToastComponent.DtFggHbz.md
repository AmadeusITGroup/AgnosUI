## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`ToastWidget`](../type-aliases/ToastWidget.md)\>

## Implements

- [`AfterContentChecked`](https://angular.dev/api/core/AfterContentChecked)

## Constructors

### new ToastComponent()

> **new ToastComponent**(): [`ToastComponent`](ToastComponent.md)

#### Returns

[`ToastComponent`](ToastComponent.md)

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`constructor`](BaseWidgetDirective.md#constructors)

## Properties

### \_widget

> `readonly` **\_widget**: [`AngularWidget`](../type-aliases/AngularWidget.md)\<[`ToastWidget`](../type-aliases/ToastWidget.md)\>

#### Overrides

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`_widget`](BaseWidgetDirective.md#_widget)

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:236](https://github.com/AmadeusITGroup/AgnosUI/blob/a96adc22c477553e7ca7e6d99c96773a69904232/angular/bootstrap/src/components/toast/toast.component.ts#L236)

***

### animated

> **animated**: `undefined` \| `boolean`

If `true`, alert closing will be animated.

Animation is triggered  when clicked on the close button (×),
via the `.close()` function or the visible prop is changed

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:153](https://github.com/AmadeusITGroup/AgnosUI/blob/a96adc22c477553e7ca7e6d99c96773a69904232/angular/bootstrap/src/components/toast/toast.component.ts#L153)

***

### animatedOnInit

> **animatedOnInit**: `undefined` \| `boolean`

If `true`, alert opening will be animated.

Animation is triggered  when the `.open()` function is called
or the visible prop is changed

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:142](https://github.com/AmadeusITGroup/AgnosUI/blob/a96adc22c477553e7ca7e6d99c96773a69904232/angular/bootstrap/src/components/toast/toast.component.ts#L142)

***

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `undefined` \| `string`

Accessibility close button label

#### Default Value

`'Close'`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:176](https://github.com/AmadeusITGroup/AgnosUI/blob/a96adc22c477553e7ca7e6d99c96773a69904232/angular/bootstrap/src/components/toast/toast.component.ts#L176)

***

### autoHide

> **autoHide**: `undefined` \| `boolean`

If `true` automatically hides the toast after the delay.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:161](https://github.com/AmadeusITGroup/AgnosUI/blob/a96adc22c477553e7ca7e6d99c96773a69904232/angular/bootstrap/src/components/toast/toast.component.ts#L161)

***

### children

> **children**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ToastContext`](../type-aliases/ToastContext.md)\>

Template for the toast content

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:181](https://github.com/AmadeusITGroup/AgnosUI/blob/a96adc22c477553e7ca7e6d99c96773a69904232/angular/bootstrap/src/components/toast/toast.component.ts#L181)

***

### className

> **className**: `undefined` \| `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:234](https://github.com/AmadeusITGroup/AgnosUI/blob/a96adc22c477553e7ca7e6d99c96773a69904232/angular/bootstrap/src/components/toast/toast.component.ts#L234)

***

### defaultSlots

> `readonly` **defaultSlots**: [`WritableSignal`](https://amadeusitgroup.github.io/tansu/interfaces/WritableSignal.html)\<[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ToastProps`](../interfaces/ToastProps.md)\>, [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ToastProps`](../interfaces/ToastProps.md)\>\>

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:227](https://github.com/AmadeusITGroup/AgnosUI/blob/a96adc22c477553e7ca7e6d99c96773a69904232/angular/bootstrap/src/components/toast/toast.component.ts#L227)

***

### delay

> **delay**: `undefined` \| `number`

Delay in milliseconds before hiding the toast.

#### Default Value

`5000`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:169](https://github.com/AmadeusITGroup/AgnosUI/blob/a96adc22c477553e7ca7e6d99c96773a69904232/angular/bootstrap/src/components/toast/toast.component.ts#L169)

***

### dismissible

> **dismissible**: `undefined` \| `boolean`

If `true`, alert can be dismissed by the user.
The close button (×) will be displayed and you can be notified of the event with the (close) output.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:113](https://github.com/AmadeusITGroup/AgnosUI/blob/a96adc22c477553e7ca7e6d99c96773a69904232/angular/bootstrap/src/components/toast/toast.component.ts#L113)

***

### header

> **header**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ToastContext`](../type-aliases/ToastContext.md)\>

Header template for the toast component

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:194](https://github.com/AmadeusITGroup/AgnosUI/blob/a96adc22c477553e7ca7e6d99c96773a69904232/angular/bootstrap/src/components/toast/toast.component.ts#L194)

***

### hidden

> **hidden**: `EventEmitter`\<`void`\>

Callback called when the alert is hidden.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:215](https://github.com/AmadeusITGroup/AgnosUI/blob/a96adc22c477553e7ca7e6d99c96773a69904232/angular/bootstrap/src/components/toast/toast.component.ts#L215)

***

### shown

> **shown**: `EventEmitter`\<`void`\>

Callback called when the alert is shown.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:225](https://github.com/AmadeusITGroup/AgnosUI/blob/a96adc22c477553e7ca7e6d99c96773a69904232/angular/bootstrap/src/components/toast/toast.component.ts#L225)

***

### slotDefaultFromContent

> **slotDefaultFromContent**: `undefined` \| [`ToastBodyDirective`](ToastBodyDirective.md)

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:183](https://github.com/AmadeusITGroup/AgnosUI/blob/a96adc22c477553e7ca7e6d99c96773a69904232/angular/bootstrap/src/components/toast/toast.component.ts#L183)

***

### slotHeaderFromContent

> **slotHeaderFromContent**: `undefined` \| [`ToastHeaderDirective`](ToastHeaderDirective.md)

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:195](https://github.com/AmadeusITGroup/AgnosUI/blob/a96adc22c477553e7ca7e6d99c96773a69904232/angular/bootstrap/src/components/toast/toast.component.ts#L195)

***

### slotStructureFromContent

> **slotStructureFromContent**: `undefined` \| [`ToastStructureDirective`](ToastStructureDirective.md)

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:189](https://github.com/AmadeusITGroup/AgnosUI/blob/a96adc22c477553e7ca7e6d99c96773a69904232/angular/bootstrap/src/components/toast/toast.component.ts#L189)

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ToastContext`](../type-aliases/ToastContext.md)\>

Global template for the toast component

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:188](https://github.com/AmadeusITGroup/AgnosUI/blob/a96adc22c477553e7ca7e6d99c96773a69904232/angular/bootstrap/src/components/toast/toast.component.ts#L188)

***

### transition

> **transition**: `undefined` \| [`TransitionFn`](../type-aliases/TransitionFn.md)

The transition function will be executed when the alert is displayed or hidden.

Depending on the value of `animatedOnInit`, the animation can be optionally skipped during the showing process.

#### Default Value

`fadeTransition`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:123](https://github.com/AmadeusITGroup/AgnosUI/blob/a96adc22c477553e7ca7e6d99c96773a69904232/angular/bootstrap/src/components/toast/toast.component.ts#L123)

***

### visible

> **visible**: `undefined` \| `boolean`

If `true` the alert is visible to the user

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:131](https://github.com/AmadeusITGroup/AgnosUI/blob/a96adc22c477553e7ca7e6d99c96773a69904232/angular/bootstrap/src/components/toast/toast.component.ts#L131)

***

### visibleChange

> **visibleChange**: `EventEmitter`\<`boolean`\>

Callback called when the alert visibility changed.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:205](https://github.com/AmadeusITGroup/AgnosUI/blob/a96adc22c477553e7ca7e6d99c96773a69904232/angular/bootstrap/src/components/toast/toast.component.ts#L205)

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

[angular/headless/src/utils/widget.ts:123](https://github.com/AmadeusITGroup/AgnosUI/blob/a96adc22c477553e7ca7e6d99c96773a69904232/angular/headless/src/utils/widget.ts#L123)

***

### state

> `get` **state**(): [`Signal`](https://angular.dev/api/core/Signal)\<[`WidgetState`](../type-aliases/WidgetState.md)\<`W`\>\>

Retrieves the widget state as an Angular Signal

#### Returns

[`Signal`](https://angular.dev/api/core/Signal)\<[`WidgetState`](../type-aliases/WidgetState.md)\<`W`\>\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)

#### Defined in

[angular/headless/src/utils/widget.ts:131](https://github.com/AmadeusITGroup/AgnosUI/blob/a96adc22c477553e7ca7e6d99c96773a69904232/angular/headless/src/utils/widget.ts#L131)

***

### widget

> `get` **widget**(): [`ContextWidget`](../type-aliases/ContextWidget.md)\<`W`\>

Retrieves the widget

#### Returns

[`ContextWidget`](../type-aliases/ContextWidget.md)\<`W`\>

the widget

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`widget`](BaseWidgetDirective.md#widget)

#### Defined in

[angular/headless/src/utils/widget.ts:139](https://github.com/AmadeusITGroup/AgnosUI/blob/a96adc22c477553e7ca7e6d99c96773a69904232/angular/headless/src/utils/widget.ts#L139)

## Methods

### ngAfterContentChecked()

> **ngAfterContentChecked**(): `void`

A callback method that is invoked immediately after the
default change detector has completed checking all of the directive's
content.

#### Returns

`void`

#### Implementation of

`AfterContentChecked.ngAfterContentChecked`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:247](https://github.com/AmadeusITGroup/AgnosUI/blob/a96adc22c477553e7ca7e6d99c96773a69904232/angular/bootstrap/src/components/toast/toast.component.ts#L247)

***

### ngOnChanges()

> **ngOnChanges**(`changes`): `void`

#### Parameters

• **changes**: `SimpleChanges`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngOnChanges`](BaseWidgetDirective.md#ngonchanges)

#### Defined in

[angular/headless/src/utils/widget.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/a96adc22c477553e7ca7e6d99c96773a69904232/angular/headless/src/utils/widget.ts#L144)

***

### ngOnInit()

> **ngOnInit**(): `void`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngOnInit`](BaseWidgetDirective.md#ngoninit)

#### Defined in

[angular/headless/src/utils/widget.ts:149](https://github.com/AmadeusITGroup/AgnosUI/blob/a96adc22c477553e7ca7e6d99c96773a69904232/angular/headless/src/utils/widget.ts#L149)
