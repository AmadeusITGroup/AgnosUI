Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:138](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/angular/bootstrap/src/components/modal/modal.component.ts#L138)

Modal component.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`ModalWidget`](../type-aliases/ModalWidget.md)\<`Data`\>\>

## Type Parameters

### Data

`Data`

## Properties

### animated

> `readonly` **animated**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/angular/bootstrap/src/components/modal/modal.component.ts#L144)

Whether the modal and its backdrop (if present) should be animated when shown or hidden.

#### Default Value

`true`

***

### ariaCloseButtonLabel

> `readonly` **ariaCloseButtonLabel**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:198](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/angular/bootstrap/src/components/modal/modal.component.ts#L198)

Value of the aria-label attribute to put on the close button.

#### Default Value

`'Close'`

***

### backdrop

> `readonly` **backdrop**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:172](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/angular/bootstrap/src/components/modal/modal.component.ts#L172)

Whether a backdrop should be created behind the modal.

#### Default Value

`true`

***

### backdropClass

> `readonly` **backdropClass**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:205](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/angular/bootstrap/src/components/modal/modal.component.ts#L205)

Classes to add on the backdrop DOM element.

#### Default Value

`''`

***

### backdropTransition

> `readonly` **backdropTransition**: `InputSignal`\<`undefined` \| [`TransitionFn`](../type-aliases/TransitionFn.md)\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:151](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/angular/bootstrap/src/components/modal/modal.component.ts#L151)

The transition to use for the backdrop behind the modal (if present).

#### Default Value

`fadeTransition`

***

### beforeClose

> `readonly` **beforeClose**: `OutputEmitterRef`\<[`ModalBeforeCloseEvent`](../interfaces/ModalBeforeCloseEvent.md)\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:287](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/angular/bootstrap/src/components/modal/modal.component.ts#L287)

Event to be triggered when the modal is about to be closed (i.e. the ModalApi.close\|close method was called).

#### Param

event giving access to the argument given to the ModalApi.close\|close method and allowing
to cancel the close process.

#### Default Value

```ts
() => {}
```

***

### children

> `readonly` **children**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](../interfaces/ModalContext.md)\<`Data`\>\>\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:250](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/angular/bootstrap/src/components/modal/modal.component.ts#L250)

Body of the modal.

***

### className

> `readonly` **className**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:219](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/angular/bootstrap/src/components/modal/modal.component.ts#L219)

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### closeButton

> `readonly` **closeButton**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:212](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/angular/bootstrap/src/components/modal/modal.component.ts#L212)

Whether to display the close button.

#### Default Value

`true`

***

### closeOnOutsideClick

> `readonly` **closeOnOutsideClick**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:179](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/angular/bootstrap/src/components/modal/modal.component.ts#L179)

Whether the modal should be closed when clicking on the viewport outside the modal.

#### Default Value

`true`

***

### container

> `readonly` **container**: `InputSignal`\<`undefined` \| `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:191](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/angular/bootstrap/src/components/modal/modal.component.ts#L191)

Which element should contain the modal and backdrop DOM elements.
If it is not null, the modal and backdrop DOM elements are moved to the specified container.
Otherwise, they stay where the widget is located.

#### Default Value

```ts
typeof window !== 'undefined' ? document.body : null
```

***

### contentData

> `readonly` **contentData**: `InputSignal`\<`undefined` \| `Data`\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:262](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/angular/bootstrap/src/components/modal/modal.component.ts#L262)

Data to use in content slots

***

### footer

> `readonly` **footer**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](../interfaces/ModalContext.md)\<`Data`\>\>\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:256](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/angular/bootstrap/src/components/modal/modal.component.ts#L256)

Footer of the modal.

***

### fullscreen

> `readonly` **fullscreen**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:226](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/angular/bootstrap/src/components/modal/modal.component.ts#L226)

Option to create a fullscreen modal, according to the bootstrap documentation.

#### Default Value

`false`

***

### header

> `readonly` **header**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](../interfaces/ModalContext.md)\<`Data`\>\>\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:238](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/angular/bootstrap/src/components/modal/modal.component.ts#L238)

Header of the modal. The default header includes ModalProps.title\|title.

***

### hidden

> `readonly` **hidden**: `OutputEmitterRef`\<`void`\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:297](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/angular/bootstrap/src/components/modal/modal.component.ts#L297)

Event to be triggered when the transition is completed and the modal is not visible.

#### Default Value

```ts
() => {}
```

***

### modalTransition

> `readonly` **modalTransition**: `InputSignal`\<`undefined` \| [`TransitionFn`](../type-aliases/TransitionFn.md)\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:158](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/angular/bootstrap/src/components/modal/modal.component.ts#L158)

The transition to use for the modal.

#### Default Value

`fadeTransition`

***

### shown

> `readonly` **shown**: `OutputEmitterRef`\<`void`\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:307](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/angular/bootstrap/src/components/modal/modal.component.ts#L307)

Event to be triggered when the transition is completed and the modal is visible.

#### Default Value

```ts
() => {}
```

***

### structure

> `readonly` **structure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](../interfaces/ModalContext.md)\<`Data`\>\>\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:232](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/angular/bootstrap/src/components/modal/modal.component.ts#L232)

Structure of the modal.
The default structure uses ModalProps.header\|header, ModalProps.children\|children and ModalProps.footer\|footer.

***

### title

> `readonly` **title**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](../interfaces/ModalContext.md)\<`Data`\>\>\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:244](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/angular/bootstrap/src/components/modal/modal.component.ts#L244)

Title of the modal.

***

### visible

> `readonly` **visible**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:165](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/angular/bootstrap/src/components/modal/modal.component.ts#L165)

Whether the modal should be visible when the transition is completed.

#### Default Value

`false`

***

### visibleChange

> `readonly` **visibleChange**: `OutputEmitterRef`\<`boolean`\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:274](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/angular/bootstrap/src/components/modal/modal.component.ts#L274)

Event to be triggered when the visible property changes.

#### Param

new value of the visible propery

#### Default Value

```ts
() => {}
```

## Accessors

### api

#### Get Signature

> **get** **api**(): `W`\[`"api"`\]

Defined in: [angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/angular/headless/src/utils/widget.ts#L140)

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

Defined in: [angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/angular/headless/src/utils/widget.ts#L156)

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

Defined in: [angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/2594f3ac31710324e25ebc056257e07a3284788b/angular/headless/src/utils/widget.ts#L148)

Retrieves the widget state. Each property of the state is exposed through an Angular [Signal](https://angular.dev/api/core/Signal)

##### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)
