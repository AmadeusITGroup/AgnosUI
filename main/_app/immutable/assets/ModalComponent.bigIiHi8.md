Modal component.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`ModalWidget`](../type-aliases/ModalWidget.md)\<`Data`\>\>

## Type Parameters

• **Data**

## Implements

- [`AfterContentChecked`](https://angular.dev/api/core/AfterContentChecked)

## Constructors

### new ModalComponent()

> **new ModalComponent**\<`Data`\>(): [`ModalComponent`](ModalComponent.md)\<`Data`\>

#### Returns

[`ModalComponent`](ModalComponent.md)\<`Data`\>

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`constructor`](BaseWidgetDirective.md#constructors)

## Properties

### \_widget

> `readonly` **\_widget**: [`AngularWidget`](../type-aliases/AngularWidget.md)\<[`ModalWidget`](../type-aliases/ModalWidget.md)\<`Data`\>\>

#### Overrides

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`_widget`](BaseWidgetDirective.md#_widget)

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:339](https://github.com/AmadeusITGroup/AgnosUI/blob/b4f2bede2a490910fd65c367a5a39d128a2d68b1/angular/bootstrap/src/components/modal/modal.component.ts#L339)

***

### animated

> **animated**: `undefined` \| `boolean`

Whether the modal and its backdrop (if present) should be animated when shown or hidden.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:167](https://github.com/AmadeusITGroup/AgnosUI/blob/b4f2bede2a490910fd65c367a5a39d128a2d68b1/angular/bootstrap/src/components/modal/modal.component.ts#L167)

***

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `undefined` \| `string`

Value of the aria-label attribute to put on the close button.

#### Default Value

`'Close'`

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:221](https://github.com/AmadeusITGroup/AgnosUI/blob/b4f2bede2a490910fd65c367a5a39d128a2d68b1/angular/bootstrap/src/components/modal/modal.component.ts#L221)

***

### backdrop

> **backdrop**: `undefined` \| `boolean`

Whether a backdrop should be created behind the modal.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:195](https://github.com/AmadeusITGroup/AgnosUI/blob/b4f2bede2a490910fd65c367a5a39d128a2d68b1/angular/bootstrap/src/components/modal/modal.component.ts#L195)

***

### backdropClass

> **backdropClass**: `undefined` \| `string`

Classes to add on the backdrop DOM element.

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:228](https://github.com/AmadeusITGroup/AgnosUI/blob/b4f2bede2a490910fd65c367a5a39d128a2d68b1/angular/bootstrap/src/components/modal/modal.component.ts#L228)

***

### backdropTransition

> **backdropTransition**: `undefined` \| [`TransitionFn`](../type-aliases/TransitionFn.md)

The transition to use for the backdrop behind the modal (if present).

#### Default Value

`fadeTransition`

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:174](https://github.com/AmadeusITGroup/AgnosUI/blob/b4f2bede2a490910fd65c367a5a39d128a2d68b1/angular/bootstrap/src/components/modal/modal.component.ts#L174)

***

### beforeClose

> **beforeClose**: `EventEmitter`\<[`ModalBeforeCloseEvent`](../interfaces/ModalBeforeCloseEvent.md)\>

Event to be triggered when the modal is about to be closed (i.e. the ModalApi.close|close method was called).

#### Param

event giving access to the argument given to the ModalApi.close|close method and allowing
to cancel the close process.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:315](https://github.com/AmadeusITGroup/AgnosUI/blob/b4f2bede2a490910fd65c367a5a39d128a2d68b1/angular/bootstrap/src/components/modal/modal.component.ts#L315)

***

### children

> **children**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](../type-aliases/ModalContext.md)\<`Data`\>\>

Body of the modal.

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:276](https://github.com/AmadeusITGroup/AgnosUI/blob/b4f2bede2a490910fd65c367a5a39d128a2d68b1/angular/bootstrap/src/components/modal/modal.component.ts#L276)

***

### className

> **className**: `undefined` \| `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:242](https://github.com/AmadeusITGroup/AgnosUI/blob/b4f2bede2a490910fd65c367a5a39d128a2d68b1/angular/bootstrap/src/components/modal/modal.component.ts#L242)

***

### closeButton

> **closeButton**: `undefined` \| `boolean`

Whether to display the close button.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:235](https://github.com/AmadeusITGroup/AgnosUI/blob/b4f2bede2a490910fd65c367a5a39d128a2d68b1/angular/bootstrap/src/components/modal/modal.component.ts#L235)

***

### closeOnOutsideClick

> **closeOnOutsideClick**: `undefined` \| `boolean`

Whether the modal should be closed when clicking on the viewport outside the modal.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:202](https://github.com/AmadeusITGroup/AgnosUI/blob/b4f2bede2a490910fd65c367a5a39d128a2d68b1/angular/bootstrap/src/components/modal/modal.component.ts#L202)

***

### container

> **container**: `undefined` \| `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Which element should contain the modal and backdrop DOM elements.
If it is not null, the modal and backdrop DOM elements are moved to the specified container.
Otherwise, they stay where the widget is located.

#### Default Value

```ts
typeof window !== 'undefined' ? document.body : null
```

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:214](https://github.com/AmadeusITGroup/AgnosUI/blob/b4f2bede2a490910fd65c367a5a39d128a2d68b1/angular/bootstrap/src/components/modal/modal.component.ts#L214)

***

### contentData

> **contentData**: `undefined` \| `Data`

Data to use in content slots

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:290](https://github.com/AmadeusITGroup/AgnosUI/blob/b4f2bede2a490910fd65c367a5a39d128a2d68b1/angular/bootstrap/src/components/modal/modal.component.ts#L290)

***

### defaultSlots

> `readonly` **defaultSlots**: [`WritableSignal`](https://amadeusitgroup.github.io/tansu/interfaces/WritableSignal.html)\<[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ModalProps`](../interfaces/ModalProps.md)\<`any`\>\>, [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ModalProps`](../interfaces/ModalProps.md)\<`any`\>\>\>

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:337](https://github.com/AmadeusITGroup/AgnosUI/blob/b4f2bede2a490910fd65c367a5a39d128a2d68b1/angular/bootstrap/src/components/modal/modal.component.ts#L337)

***

### footer

> **footer**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](../type-aliases/ModalContext.md)\<`Data`\>\>

Footer of the modal.

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:283](https://github.com/AmadeusITGroup/AgnosUI/blob/b4f2bede2a490910fd65c367a5a39d128a2d68b1/angular/bootstrap/src/components/modal/modal.component.ts#L283)

***

### fullscreen

> **fullscreen**: `undefined` \| `boolean`

Option to create a fullscreen modal, according to the bootstrap documentation.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:249](https://github.com/AmadeusITGroup/AgnosUI/blob/b4f2bede2a490910fd65c367a5a39d128a2d68b1/angular/bootstrap/src/components/modal/modal.component.ts#L249)

***

### header

> **header**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](../type-aliases/ModalContext.md)\<`Data`\>\>

Header of the modal. The default header includes [title](../interfaces/ModalProps.md#title).

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:262](https://github.com/AmadeusITGroup/AgnosUI/blob/b4f2bede2a490910fd65c367a5a39d128a2d68b1/angular/bootstrap/src/components/modal/modal.component.ts#L262)

***

### hidden

> **hidden**: `EventEmitter`\<`void`\>

Event to be triggered when the transition is completed and the modal is not visible.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:325](https://github.com/AmadeusITGroup/AgnosUI/blob/b4f2bede2a490910fd65c367a5a39d128a2d68b1/angular/bootstrap/src/components/modal/modal.component.ts#L325)

***

### modalTransition

> **modalTransition**: `undefined` \| [`TransitionFn`](../type-aliases/TransitionFn.md)

The transition to use for the modal.

#### Default Value

`fadeTransition`

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:181](https://github.com/AmadeusITGroup/AgnosUI/blob/b4f2bede2a490910fd65c367a5a39d128a2d68b1/angular/bootstrap/src/components/modal/modal.component.ts#L181)

***

### shown

> **shown**: `EventEmitter`\<`void`\>

Event to be triggered when the transition is completed and the modal is visible.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:335](https://github.com/AmadeusITGroup/AgnosUI/blob/b4f2bede2a490910fd65c367a5a39d128a2d68b1/angular/bootstrap/src/components/modal/modal.component.ts#L335)

***

### slotDefaultFromContent

> **slotDefaultFromContent**: `undefined` \| [`ModalBodyDirective`](ModalBodyDirective.md)\<`Data`\>

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:278](https://github.com/AmadeusITGroup/AgnosUI/blob/b4f2bede2a490910fd65c367a5a39d128a2d68b1/angular/bootstrap/src/components/modal/modal.component.ts#L278)

***

### slotFooterFromContent

> **slotFooterFromContent**: `undefined` \| [`ModalFooterDirective`](ModalFooterDirective.md)\<`Data`\>

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:285](https://github.com/AmadeusITGroup/AgnosUI/blob/b4f2bede2a490910fd65c367a5a39d128a2d68b1/angular/bootstrap/src/components/modal/modal.component.ts#L285)

***

### slotHeaderFromContent

> **slotHeaderFromContent**: `undefined` \| [`ModalHeaderDirective`](ModalHeaderDirective.md)\<`Data`\>

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:264](https://github.com/AmadeusITGroup/AgnosUI/blob/b4f2bede2a490910fd65c367a5a39d128a2d68b1/angular/bootstrap/src/components/modal/modal.component.ts#L264)

***

### slotStructureFromContent

> **slotStructureFromContent**: `undefined` \| [`ModalStructureDirective`](ModalStructureDirective.md)\<`Data`\>

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:257](https://github.com/AmadeusITGroup/AgnosUI/blob/b4f2bede2a490910fd65c367a5a39d128a2d68b1/angular/bootstrap/src/components/modal/modal.component.ts#L257)

***

### slotTitleFromContent

> **slotTitleFromContent**: `undefined` \| [`ModalTitleDirective`](ModalTitleDirective.md)\<`Data`\>

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:271](https://github.com/AmadeusITGroup/AgnosUI/blob/b4f2bede2a490910fd65c367a5a39d128a2d68b1/angular/bootstrap/src/components/modal/modal.component.ts#L271)

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](../type-aliases/ModalContext.md)\<`Data`\>\>

Structure of the modal.
The default structure uses [header](../interfaces/ModalProps.md#header), [children](../interfaces/ModalProps.md#children) and [footer](../interfaces/ModalProps.md#footer).

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:255](https://github.com/AmadeusITGroup/AgnosUI/blob/b4f2bede2a490910fd65c367a5a39d128a2d68b1/angular/bootstrap/src/components/modal/modal.component.ts#L255)

***

### title

> **title**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](../type-aliases/ModalContext.md)\<`Data`\>\>

Title of the modal.

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:269](https://github.com/AmadeusITGroup/AgnosUI/blob/b4f2bede2a490910fd65c367a5a39d128a2d68b1/angular/bootstrap/src/components/modal/modal.component.ts#L269)

***

### visible

> **visible**: `undefined` \| `boolean`

Whether the modal should be visible when the transition is completed.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:188](https://github.com/AmadeusITGroup/AgnosUI/blob/b4f2bede2a490910fd65c367a5a39d128a2d68b1/angular/bootstrap/src/components/modal/modal.component.ts#L188)

***

### visibleChange

> **visibleChange**: `EventEmitter`\<`boolean`\>

Event to be triggered when the visible property changes.

#### Param

new value of the visible propery

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:302](https://github.com/AmadeusITGroup/AgnosUI/blob/b4f2bede2a490910fd65c367a5a39d128a2d68b1/angular/bootstrap/src/components/modal/modal.component.ts#L302)

## Accessors

### api

> `get` **api**(): `W`\[`"api"`\]

#### Returns

`W`\[`"api"`\]

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`api`](BaseWidgetDirective.md#api)

#### Defined in

[angular/headless/src/utils/widget.ts:119](https://github.com/AmadeusITGroup/AgnosUI/blob/b4f2bede2a490910fd65c367a5a39d128a2d68b1/angular/headless/src/utils/widget.ts#L119)

***

### state

> `get` **state**(): [`Signal`](https://angular.dev/api/core/Signal)\<[`WidgetState`](../type-aliases/WidgetState.md)\<`W`\>\>

#### Returns

[`Signal`](https://angular.dev/api/core/Signal)\<[`WidgetState`](../type-aliases/WidgetState.md)\<`W`\>\>

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)

#### Defined in

[angular/headless/src/utils/widget.ts:123](https://github.com/AmadeusITGroup/AgnosUI/blob/b4f2bede2a490910fd65c367a5a39d128a2d68b1/angular/headless/src/utils/widget.ts#L123)

***

### widget

> `get` **widget**(): [`ContextWidget`](../type-aliases/ContextWidget.md)\<`W`\>

#### Returns

[`ContextWidget`](../type-aliases/ContextWidget.md)\<`W`\>

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`widget`](BaseWidgetDirective.md#widget)

#### Defined in

[angular/headless/src/utils/widget.ts:127](https://github.com/AmadeusITGroup/AgnosUI/blob/b4f2bede2a490910fd65c367a5a39d128a2d68b1/angular/headless/src/utils/widget.ts#L127)

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

[angular/bootstrap/src/components/modal/modal.component.ts:351](https://github.com/AmadeusITGroup/AgnosUI/blob/b4f2bede2a490910fd65c367a5a39d128a2d68b1/angular/bootstrap/src/components/modal/modal.component.ts#L351)

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

[angular/headless/src/utils/widget.ts:132](https://github.com/AmadeusITGroup/AgnosUI/blob/b4f2bede2a490910fd65c367a5a39d128a2d68b1/angular/headless/src/utils/widget.ts#L132)

***

### ngOnInit()

> **ngOnInit**(): `void`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngOnInit`](BaseWidgetDirective.md#ngoninit)

#### Defined in

[angular/headless/src/utils/widget.ts:137](https://github.com/AmadeusITGroup/AgnosUI/blob/b4f2bede2a490910fd65c367a5a39d128a2d68b1/angular/headless/src/utils/widget.ts#L137)
