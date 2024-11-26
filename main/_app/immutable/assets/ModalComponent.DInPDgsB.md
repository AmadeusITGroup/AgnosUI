Modal component.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`ModalWidget`](../type-aliases/ModalWidget.md)\<`Data`\>\>

## Type Parameters

• **Data**

## Properties

### animated

> **animated**: `undefined` \| `boolean`

Whether the modal and its backdrop (if present) should be animated when shown or hidden.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:157](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/bootstrap/src/components/modal/modal.component.ts#L157)

***

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `undefined` \| `string`

Value of the aria-label attribute to put on the close button.

#### Default Value

`'Close'`

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:211](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/bootstrap/src/components/modal/modal.component.ts#L211)

***

### backdrop

> **backdrop**: `undefined` \| `boolean`

Whether a backdrop should be created behind the modal.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:185](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/bootstrap/src/components/modal/modal.component.ts#L185)

***

### backdropClass

> **backdropClass**: `undefined` \| `string`

Classes to add on the backdrop DOM element.

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:218](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/bootstrap/src/components/modal/modal.component.ts#L218)

***

### backdropTransition

> **backdropTransition**: `undefined` \| [`TransitionFn`](../type-aliases/TransitionFn.md)

The transition to use for the backdrop behind the modal (if present).

#### Default Value

`fadeTransition`

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:164](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/bootstrap/src/components/modal/modal.component.ts#L164)

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

[angular/bootstrap/src/components/modal/modal.component.ts:305](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/bootstrap/src/components/modal/modal.component.ts#L305)

***

### children

> **children**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](../interfaces/ModalContext.md)\<`Data`\>\>

Body of the modal.

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:266](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/bootstrap/src/components/modal/modal.component.ts#L266)

***

### className

> **className**: `undefined` \| `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:232](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/bootstrap/src/components/modal/modal.component.ts#L232)

***

### closeButton

> **closeButton**: `undefined` \| `boolean`

Whether to display the close button.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:225](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/bootstrap/src/components/modal/modal.component.ts#L225)

***

### closeOnOutsideClick

> **closeOnOutsideClick**: `undefined` \| `boolean`

Whether the modal should be closed when clicking on the viewport outside the modal.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:192](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/bootstrap/src/components/modal/modal.component.ts#L192)

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

[angular/bootstrap/src/components/modal/modal.component.ts:204](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/bootstrap/src/components/modal/modal.component.ts#L204)

***

### contentData

> **contentData**: `undefined` \| `Data`

Data to use in content slots

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:280](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/bootstrap/src/components/modal/modal.component.ts#L280)

***

### footer

> **footer**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](../interfaces/ModalContext.md)\<`Data`\>\>

Footer of the modal.

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:273](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/bootstrap/src/components/modal/modal.component.ts#L273)

***

### fullscreen

> **fullscreen**: `undefined` \| `boolean`

Option to create a fullscreen modal, according to the bootstrap documentation.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:239](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/bootstrap/src/components/modal/modal.component.ts#L239)

***

### header

> **header**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](../interfaces/ModalContext.md)\<`Data`\>\>

Header of the modal. The default header includes ModalProps.title|title.

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:252](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/bootstrap/src/components/modal/modal.component.ts#L252)

***

### hidden

> **hidden**: `EventEmitter`\<`void`\>

Event to be triggered when the transition is completed and the modal is not visible.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:315](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/bootstrap/src/components/modal/modal.component.ts#L315)

***

### modalTransition

> **modalTransition**: `undefined` \| [`TransitionFn`](../type-aliases/TransitionFn.md)

The transition to use for the modal.

#### Default Value

`fadeTransition`

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:171](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/bootstrap/src/components/modal/modal.component.ts#L171)

***

### shown

> **shown**: `EventEmitter`\<`void`\>

Event to be triggered when the transition is completed and the modal is visible.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:325](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/bootstrap/src/components/modal/modal.component.ts#L325)

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](../interfaces/ModalContext.md)\<`Data`\>\>

Structure of the modal.
The default structure uses ModalProps.header|header, ModalProps.children|children and ModalProps.footer|footer.

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:245](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/bootstrap/src/components/modal/modal.component.ts#L245)

***

### title

> **title**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](../interfaces/ModalContext.md)\<`Data`\>\>

Title of the modal.

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:259](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/bootstrap/src/components/modal/modal.component.ts#L259)

***

### visible

> **visible**: `undefined` \| `boolean`

Whether the modal should be visible when the transition is completed.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:178](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/bootstrap/src/components/modal/modal.component.ts#L178)

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

[angular/bootstrap/src/components/modal/modal.component.ts:292](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/bootstrap/src/components/modal/modal.component.ts#L292)

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

[angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/headless/src/utils/widget.ts#L140)

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

[angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/headless/src/utils/widget.ts#L156)

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

[angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/headless/src/utils/widget.ts#L148)
