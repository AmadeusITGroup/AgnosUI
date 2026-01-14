Defined in: [core/src/components/modal/modal.ts:109](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/modal/modal.ts#L109)

Properties of the modal widget.

## Extends

- `ModalCommonPropsAndState`

## Properties

### animated

> **animated**: `boolean`

Defined in: [core/src/components/modal/modal.ts:115](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/modal/modal.ts#L115)

Whether the modal and its backdrop (if present) should be animated when shown or hidden.

#### Default Value

`true`

***

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `string`

Defined in: [core/src/components/modal/modal.ts:52](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/modal/modal.ts#L52)

Value of the aria-label attribute to put on the close button.

#### Default Value

`'Close'`

#### Inherited from

`ModalCommonPropsAndState.ariaCloseButtonLabel`

***

### backdrop

> **backdrop**: `boolean`

Defined in: [core/src/components/modal/modal.ts:122](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/modal/modal.ts#L122)

Whether a backdrop should be created behind the modal.

#### Default Value

`true`

***

### backdropClass

> **backdropClass**: `string`

Defined in: [core/src/components/modal/modal.ts:59](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/modal/modal.ts#L59)

Classes to add on the backdrop DOM element.

#### Default Value

`''`

#### Inherited from

`ModalCommonPropsAndState.backdropClass`

***

### backdropTransition

> **backdropTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: [core/src/components/modal/modal.ts:132](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/modal/modal.ts#L132)

The transition to use for the backdrop behind the modal (if present).

#### Default Value

```ts
() => {}
```

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`ModalCommonPropsAndState.className`

***

### closeButton

> **closeButton**: `boolean`

Defined in: [core/src/components/modal/modal.ts:66](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/modal/modal.ts#L66)

Whether to display the close button.

#### Default Value

`true`

#### Inherited from

`ModalCommonPropsAndState.closeButton`

***

### closeOnOutsideClick

> **closeOnOutsideClick**: `boolean`

Defined in: [core/src/components/modal/modal.ts:139](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/modal/modal.ts#L139)

Whether the modal should be closed when clicking on the viewport outside the modal.

#### Default Value

`true`

***

### container

> **container**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) \| `null`

Defined in: [core/src/components/modal/modal.ts:78](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/modal/modal.ts#L78)

Which element should contain the modal and backdrop DOM elements.
If it is not null, the modal and backdrop DOM elements are moved to the specified container.
Otherwise, they stay where the widget is located.

#### Default Value

```ts
typeof window !== 'undefined' ? document.body : null
```

#### Inherited from

`ModalCommonPropsAndState.container`

***

### modalTransition

> **modalTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: [core/src/components/modal/modal.ts:149](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/modal/modal.ts#L149)

The transition to use for the modal.

#### Default Value

```ts
() => {}
```

***

### onBeforeClose()

> **onBeforeClose**: (`event`) => `void`

Defined in: [core/src/components/modal/modal.ts:162](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/modal/modal.ts#L162)

Event to be triggered when the modal is about to be closed (i.e. the [close](ModalApi.md#close) method was called).

#### Parameters

##### event

[`ModalBeforeCloseEvent`](ModalBeforeCloseEvent.md)

event giving access to the argument given to the [close](ModalApi.md#close) method and allowing
to cancel the close process.

#### Returns

`void`

#### Default Value

```ts
() => {}
```

***

### onHidden()

> **onHidden**: () => `void`

Defined in: [core/src/components/modal/modal.ts:184](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/modal/modal.ts#L184)

Event to be triggered when the transition is completed and the modal is not visible.

#### Returns

`void`

#### Default Value

```ts
() => {}
```

***

### onShown()

> **onShown**: () => `void`

Defined in: [core/src/components/modal/modal.ts:194](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/modal/modal.ts#L194)

Event to be triggered when the transition is completed and the modal is visible.

#### Returns

`void`

#### Default Value

```ts
() => {}
```

***

### onVisibleChange()

> **onVisibleChange**: (`visible`) => `void`

Defined in: [core/src/components/modal/modal.ts:174](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/modal/modal.ts#L174)

Event to be triggered when the visible property changes.

#### Parameters

##### visible

`boolean`

new value of the visible propery

#### Returns

`void`

#### Default Value

```ts
() => {}
```

***

### visible

> **visible**: `boolean`

Defined in: [core/src/components/modal/modal.ts:85](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/core/src/components/modal/modal.ts#L85)

Whether the modal should be visible when the transition is completed.

#### Default Value

`false`

#### Inherited from

`ModalCommonPropsAndState.visible`
