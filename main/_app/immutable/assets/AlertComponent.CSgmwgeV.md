## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`AlertWidget`](../type-aliases/AlertWidget.md)\>

## Implements

- [`AfterContentChecked`](https://angular.dev/api/core/AfterContentChecked)

## Constructors

### new AlertComponent()

> **new AlertComponent**(): [`AlertComponent`](AlertComponent.md)

#### Returns

[`AlertComponent`](AlertComponent.md)

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`constructor`](BaseWidgetDirective.md#constructors)

## Properties

### \_widget

> `readonly` **\_widget**: [`AngularWidget`](../type-aliases/AngularWidget.md)\<[`AlertWidget`](../type-aliases/AlertWidget.md)\>

#### Overrides

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`_widget`](BaseWidgetDirective.md#_widget)

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:204](https://github.com/AmadeusITGroup/AgnosUI/blob/fdf5c2834c5ffd5dc08bbeb8bd128a7390d533ba/angular/bootstrap/src/components/alert/alert.component.ts#L204)

***

### animated

> **animated**: `undefined` \| `boolean`

If `true`, alert closing will be animated.

Animation is triggered  when clicked on the close button (×),
via the `.close()` function or the visible prop is changed

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:143](https://github.com/AmadeusITGroup/AgnosUI/blob/fdf5c2834c5ffd5dc08bbeb8bd128a7390d533ba/angular/bootstrap/src/components/alert/alert.component.ts#L143)

***

### animatedOnInit

> **animatedOnInit**: `undefined` \| `boolean`

If `true`, alert opening will be animated.

Animation is triggered  when the `.open()` function is called
or the visible prop is changed

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:132](https://github.com/AmadeusITGroup/AgnosUI/blob/fdf5c2834c5ffd5dc08bbeb8bd128a7390d533ba/angular/bootstrap/src/components/alert/alert.component.ts#L132)

***

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `undefined` \| `string`

Accessibility close button label

#### Default Value

`'Close'`

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:150](https://github.com/AmadeusITGroup/AgnosUI/blob/fdf5c2834c5ffd5dc08bbeb8bd128a7390d533ba/angular/bootstrap/src/components/alert/alert.component.ts#L150)

***

### children

> **children**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`AlertContext`](../type-aliases/AlertContext.md)\>

Template for the alert content

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:155](https://github.com/AmadeusITGroup/AgnosUI/blob/fdf5c2834c5ffd5dc08bbeb8bd128a7390d533ba/angular/bootstrap/src/components/alert/alert.component.ts#L155)

***

### className

> **className**: `undefined` \| `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:202](https://github.com/AmadeusITGroup/AgnosUI/blob/fdf5c2834c5ffd5dc08bbeb8bd128a7390d533ba/angular/bootstrap/src/components/alert/alert.component.ts#L202)

***

### defaultSlots

> `readonly` **defaultSlots**: [`WritableSignal`](https://amadeusitgroup.github.io/tansu/interfaces/WritableSignal.html)\<[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`AlertProps`](../interfaces/AlertProps.md)\>, [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`AlertProps`](../interfaces/AlertProps.md)\>\>

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:195](https://github.com/AmadeusITGroup/AgnosUI/blob/fdf5c2834c5ffd5dc08bbeb8bd128a7390d533ba/angular/bootstrap/src/components/alert/alert.component.ts#L195)

***

### dismissible

> **dismissible**: `undefined` \| `boolean`

If `true`, alert can be dismissed by the user.
The close button (×) will be displayed and you can be notified of the event with the (close) output.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:103](https://github.com/AmadeusITGroup/AgnosUI/blob/fdf5c2834c5ffd5dc08bbeb8bd128a7390d533ba/angular/bootstrap/src/components/alert/alert.component.ts#L103)

***

### hidden

> **hidden**: `EventEmitter`\<`void`\>

Callback called when the alert is hidden.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:183](https://github.com/AmadeusITGroup/AgnosUI/blob/fdf5c2834c5ffd5dc08bbeb8bd128a7390d533ba/angular/bootstrap/src/components/alert/alert.component.ts#L183)

***

### shown

> **shown**: `EventEmitter`\<`void`\>

Callback called when the alert is shown.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:193](https://github.com/AmadeusITGroup/AgnosUI/blob/fdf5c2834c5ffd5dc08bbeb8bd128a7390d533ba/angular/bootstrap/src/components/alert/alert.component.ts#L193)

***

### slotDefaultFromContent

> **slotDefaultFromContent**: `undefined` \| [`AlertBodyDirective`](AlertBodyDirective.md)

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:157](https://github.com/AmadeusITGroup/AgnosUI/blob/fdf5c2834c5ffd5dc08bbeb8bd128a7390d533ba/angular/bootstrap/src/components/alert/alert.component.ts#L157)

***

### slotStructureFromContent

> **slotStructureFromContent**: `undefined` \| [`AlertStructureDirective`](AlertStructureDirective.md)

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:163](https://github.com/AmadeusITGroup/AgnosUI/blob/fdf5c2834c5ffd5dc08bbeb8bd128a7390d533ba/angular/bootstrap/src/components/alert/alert.component.ts#L163)

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`AlertContext`](../type-aliases/AlertContext.md)\>

Global template for the alert component

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:162](https://github.com/AmadeusITGroup/AgnosUI/blob/fdf5c2834c5ffd5dc08bbeb8bd128a7390d533ba/angular/bootstrap/src/components/alert/alert.component.ts#L162)

***

### transition

> **transition**: `undefined` \| [`TransitionFn`](../type-aliases/TransitionFn.md)

The transition function will be executed when the alert is displayed or hidden.

Depending on the value of `animatedOnInit`, the animation can be optionally skipped during the showing process.

#### Default Value

`fadeTransition`

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:113](https://github.com/AmadeusITGroup/AgnosUI/blob/fdf5c2834c5ffd5dc08bbeb8bd128a7390d533ba/angular/bootstrap/src/components/alert/alert.component.ts#L113)

***

### type

> **type**: `undefined` \| [`BSContextualClass`](../type-aliases/BSContextualClass.md)

Type of the alert, following bootstrap types.

#### Default Value

`'primary'`

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:94](https://github.com/AmadeusITGroup/AgnosUI/blob/fdf5c2834c5ffd5dc08bbeb8bd128a7390d533ba/angular/bootstrap/src/components/alert/alert.component.ts#L94)

***

### visible

> **visible**: `undefined` \| `boolean`

If `true` the alert is visible to the user

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:121](https://github.com/AmadeusITGroup/AgnosUI/blob/fdf5c2834c5ffd5dc08bbeb8bd128a7390d533ba/angular/bootstrap/src/components/alert/alert.component.ts#L121)

***

### visibleChange

> **visibleChange**: `EventEmitter`\<`boolean`\>

Callback called when the alert visibility changed.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:173](https://github.com/AmadeusITGroup/AgnosUI/blob/fdf5c2834c5ffd5dc08bbeb8bd128a7390d533ba/angular/bootstrap/src/components/alert/alert.component.ts#L173)

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

[angular/headless/src/utils/widget.ts:123](https://github.com/AmadeusITGroup/AgnosUI/blob/fdf5c2834c5ffd5dc08bbeb8bd128a7390d533ba/angular/headless/src/utils/widget.ts#L123)

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

[angular/headless/src/utils/widget.ts:131](https://github.com/AmadeusITGroup/AgnosUI/blob/fdf5c2834c5ffd5dc08bbeb8bd128a7390d533ba/angular/headless/src/utils/widget.ts#L131)

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

[angular/headless/src/utils/widget.ts:139](https://github.com/AmadeusITGroup/AgnosUI/blob/fdf5c2834c5ffd5dc08bbeb8bd128a7390d533ba/angular/headless/src/utils/widget.ts#L139)

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

[angular/bootstrap/src/components/alert/alert.component.ts:215](https://github.com/AmadeusITGroup/AgnosUI/blob/fdf5c2834c5ffd5dc08bbeb8bd128a7390d533ba/angular/bootstrap/src/components/alert/alert.component.ts#L215)

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

[angular/headless/src/utils/widget.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/fdf5c2834c5ffd5dc08bbeb8bd128a7390d533ba/angular/headless/src/utils/widget.ts#L144)

***

### ngOnInit()

> **ngOnInit**(): `void`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngOnInit`](BaseWidgetDirective.md#ngoninit)

#### Defined in

[angular/headless/src/utils/widget.ts:149](https://github.com/AmadeusITGroup/AgnosUI/blob/fdf5c2834c5ffd5dc08bbeb8bd128a7390d533ba/angular/headless/src/utils/widget.ts#L149)
