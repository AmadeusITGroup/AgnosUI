Defined in: [core/src/components/modal/modal.ts:101](https://github.com/AmadeusITGroup/AgnosUI/blob/6e8ba4031b41502f14bae5c19595e06827bc4553/core/src/components/modal/modal.ts#L101)

Properties of the modal widget.

## Extends

- `ModalCommonPropsAndState`

## Properties

### animated

> **animated**: `boolean`

Defined in: [core/src/components/modal/modal.ts:107](https://github.com/AmadeusITGroup/AgnosUI/blob/6e8ba4031b41502f14bae5c19595e06827bc4553/core/src/components/modal/modal.ts#L107)

Whether the modal and its backdrop (if present) should be animated when shown or hidden.

#### Default Value

`true`

***

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `string`

Defined in: [core/src/components/modal/modal.ts:44](https://github.com/AmadeusITGroup/AgnosUI/blob/6e8ba4031b41502f14bae5c19595e06827bc4553/core/src/components/modal/modal.ts#L44)

Value of the aria-label attribute to put on the close button.

#### Default Value

`'Close'`

#### Inherited from

`ModalCommonPropsAndState.ariaCloseButtonLabel`

***

### backdrop

> **backdrop**: `boolean`

Defined in: [core/src/components/modal/modal.ts:114](https://github.com/AmadeusITGroup/AgnosUI/blob/6e8ba4031b41502f14bae5c19595e06827bc4553/core/src/components/modal/modal.ts#L114)

Whether a backdrop should be created behind the modal.

#### Default Value

`true`

***

### backdropClass

> **backdropClass**: `string`

Defined in: [core/src/components/modal/modal.ts:51](https://github.com/AmadeusITGroup/AgnosUI/blob/6e8ba4031b41502f14bae5c19595e06827bc4553/core/src/components/modal/modal.ts#L51)

Classes to add on the backdrop DOM element.

#### Default Value

`''`

#### Inherited from

`ModalCommonPropsAndState.backdropClass`

***

### backdropTransition

> **backdropTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: [core/src/components/modal/modal.ts:124](https://github.com/AmadeusITGroup/AgnosUI/blob/6e8ba4031b41502f14bae5c19595e06827bc4553/core/src/components/modal/modal.ts#L124)

The transition to use for the backdrop behind the modal (if present).

#### Default Value

```ts
() => {}
```

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/6e8ba4031b41502f14bae5c19595e06827bc4553/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`ModalCommonPropsAndState.className`

***

### closeButton

> **closeButton**: `boolean`

Defined in: [core/src/components/modal/modal.ts:58](https://github.com/AmadeusITGroup/AgnosUI/blob/6e8ba4031b41502f14bae5c19595e06827bc4553/core/src/components/modal/modal.ts#L58)

Whether to display the close button.

#### Default Value

`true`

#### Inherited from

`ModalCommonPropsAndState.closeButton`

***

### closeOnOutsideClick

> **closeOnOutsideClick**: `boolean`

Defined in: [core/src/components/modal/modal.ts:131](https://github.com/AmadeusITGroup/AgnosUI/blob/6e8ba4031b41502f14bae5c19595e06827bc4553/core/src/components/modal/modal.ts#L131)

Whether the modal should be closed when clicking on the viewport outside the modal.

#### Default Value

`true`

***

### container

> **container**: `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Defined in: [core/src/components/modal/modal.ts:70](https://github.com/AmadeusITGroup/AgnosUI/blob/6e8ba4031b41502f14bae5c19595e06827bc4553/core/src/components/modal/modal.ts#L70)

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

Defined in: [core/src/components/modal/modal.ts:141](https://github.com/AmadeusITGroup/AgnosUI/blob/6e8ba4031b41502f14bae5c19595e06827bc4553/core/src/components/modal/modal.ts#L141)

The transition to use for the modal.

#### Default Value

```ts
() => {}
```

***

### onBeforeClose()

> **onBeforeClose**: (`event`) => `void`

Defined in: [core/src/components/modal/modal.ts:154](https://github.com/AmadeusITGroup/AgnosUI/blob/6e8ba4031b41502f14bae5c19595e06827bc4553/core/src/components/modal/modal.ts#L154)

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

Defined in: [core/src/components/modal/modal.ts:176](https://github.com/AmadeusITGroup/AgnosUI/blob/6e8ba4031b41502f14bae5c19595e06827bc4553/core/src/components/modal/modal.ts#L176)

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

Defined in: [core/src/components/modal/modal.ts:186](https://github.com/AmadeusITGroup/AgnosUI/blob/6e8ba4031b41502f14bae5c19595e06827bc4553/core/src/components/modal/modal.ts#L186)

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

Defined in: [core/src/components/modal/modal.ts:166](https://github.com/AmadeusITGroup/AgnosUI/blob/6e8ba4031b41502f14bae5c19595e06827bc4553/core/src/components/modal/modal.ts#L166)

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

Defined in: [core/src/components/modal/modal.ts:77](https://github.com/AmadeusITGroup/AgnosUI/blob/6e8ba4031b41502f14bae5c19595e06827bc4553/core/src/components/modal/modal.ts#L77)

Whether the modal should be visible when the transition is completed.

#### Default Value

`false`

#### Inherited from

`ModalCommonPropsAndState.visible`
