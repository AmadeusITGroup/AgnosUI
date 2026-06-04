Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:136](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/modal/modal.component.ts#L136)

Modal component.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`ModalWidget`](../type-aliases/ModalWidget.md)\<`Data`\>\>

## Type Parameters

### Data

`Data`

## Properties

### animated

> `readonly` **animated**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:142](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/modal/modal.component.ts#L142)

Whether the modal and its backdrop (if present) should be animated when shown or hidden.

#### Default Value

`true`

***

### ariaCloseButtonLabel

> `readonly` **ariaCloseButtonLabel**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:196](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/modal/modal.component.ts#L196)

Value of the aria-label attribute to put on the close button.

#### Default Value

`'Close'`

***

### backdrop

> `readonly` **backdrop**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:170](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/modal/modal.component.ts#L170)

Whether a backdrop should be created behind the modal.

#### Default Value

`true`

***

### backdropClass

> `readonly` **backdropClass**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:203](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/modal/modal.component.ts#L203)

Classes to add on the backdrop DOM element.

#### Default Value

`''`

***

### backdropTransition

> `readonly` **backdropTransition**: `InputSignal`\<[`TransitionFn`](../type-aliases/TransitionFn.md) \| `undefined`\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:149](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/modal/modal.component.ts#L149)

The transition to use for the backdrop behind the modal (if present).

#### Default Value

`fadeTransition`

***

### beforeClose

> `readonly` **beforeClose**: `OutputEmitterRef`\<[`ModalBeforeCloseEvent`](../interfaces/ModalBeforeCloseEvent.md)\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:285](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/modal/modal.component.ts#L285)

Event to be triggered when the modal is about to be closed (i.e. the ModalApi.close\|close method was called).

#### Param

**event**

event giving access to the argument given to the ModalApi.close\|close method and allowing
to cancel the close process.

#### Default Value

```ts
() => {}
```

***

### children

> `readonly` **children**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](../interfaces/ModalContext.md)\<`Data`\>\>\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:248](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/modal/modal.component.ts#L248)

Body of the modal.

***

### className

> `readonly` **className**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:217](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/modal/modal.component.ts#L217)

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### closeButton

> `readonly` **closeButton**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:210](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/modal/modal.component.ts#L210)

Whether to display the close button.

#### Default Value

`true`

***

### closeOnOutsideClick

> `readonly` **closeOnOutsideClick**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:177](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/modal/modal.component.ts#L177)

Whether the modal should be closed when clicking on the viewport outside the modal.

#### Default Value

`true`

***

### container

> `readonly` **container**: `InputSignal`\<[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) \| `null` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:189](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/modal/modal.component.ts#L189)

Which element should contain the modal and backdrop DOM elements.
If it is not null, the modal and backdrop DOM elements are moved to the specified container.
Otherwise, they stay where the widget is located.

#### Default Value

```ts
typeof window !== 'undefined' ? document.body : null
```

***

### contentData

> `readonly` **contentData**: `InputSignal`\<`Data` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:260](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/modal/modal.component.ts#L260)

Data to use in content slots

***

### footer

> `readonly` **footer**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](../interfaces/ModalContext.md)\<`Data`\>\>\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:254](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/modal/modal.component.ts#L254)

Footer of the modal.

***

### fullscreen

> `readonly` **fullscreen**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:224](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/modal/modal.component.ts#L224)

Option to create a fullscreen modal, according to the bootstrap documentation.

#### Default Value

`false`

***

### header

> `readonly` **header**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](../interfaces/ModalContext.md)\<`Data`\>\>\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:236](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/modal/modal.component.ts#L236)

Header of the modal. The default header includes ModalProps.title\|title.

***

### hidden

> `readonly` **hidden**: `OutputEmitterRef`\<`void`\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:295](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/modal/modal.component.ts#L295)

Event to be triggered when the transition is completed and the modal is not visible.

#### Default Value

```ts
() => {}
```

***

### modalTransition

> `readonly` **modalTransition**: `InputSignal`\<[`TransitionFn`](../type-aliases/TransitionFn.md) \| `undefined`\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:156](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/modal/modal.component.ts#L156)

The transition to use for the modal.

#### Default Value

`fadeTransition`

***

### shown

> `readonly` **shown**: `OutputEmitterRef`\<`void`\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:305](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/modal/modal.component.ts#L305)

Event to be triggered when the transition is completed and the modal is visible.

#### Default Value

```ts
() => {}
```

***

### structure

> `readonly` **structure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](../interfaces/ModalContext.md)\<`Data`\>\>\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:230](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/modal/modal.component.ts#L230)

Structure of the modal.
The default structure uses ModalProps.header\|header, ModalProps.children\|children and ModalProps.footer\|footer.

***

### title

> `readonly` **title**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](../interfaces/ModalContext.md)\<`Data`\>\>\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:242](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/modal/modal.component.ts#L242)

Title of the modal.

***

### visible

> `readonly` **visible**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:163](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/modal/modal.component.ts#L163)

Whether the modal should be visible when the transition is completed.

#### Default Value

`false`

***

### visibleChange

> `readonly` **visibleChange**: `OutputEmitterRef`\<`boolean`\>

Defined in: [angular/bootstrap/src/components/modal/modal.component.ts:272](https://github.com/quentinderoubaix/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/modal/modal.component.ts#L272)

Event to be triggered when the visible property changes.

#### Param

**visible**

new value of the visible propery

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
