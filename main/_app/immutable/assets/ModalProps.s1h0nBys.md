Properties of the modal widget.

## Extends

- `ModalCommonPropsAndState`

## Properties

### animated

> **animated**: `boolean`

Whether the modal and its backdrop (if present) should be animated when shown or hidden.

#### Default Value

`true`

#### Defined in

[core/src/components/modal/modal.ts:107](https://github.com/AmadeusITGroup/AgnosUI/blob/6fe095806624d144f0f5997f051ff06eaf867a50/core/src/components/modal/modal.ts#L107)

***

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `string`

Value of the aria-label attribute to put on the close button.

#### Default Value

`'Close'`

#### Inherited from

`ModalCommonPropsAndState.ariaCloseButtonLabel`

#### Defined in

[core/src/components/modal/modal.ts:44](https://github.com/AmadeusITGroup/AgnosUI/blob/6fe095806624d144f0f5997f051ff06eaf867a50/core/src/components/modal/modal.ts#L44)

***

### backdrop

> **backdrop**: `boolean`

Whether a backdrop should be created behind the modal.

#### Default Value

`true`

#### Defined in

[core/src/components/modal/modal.ts:114](https://github.com/AmadeusITGroup/AgnosUI/blob/6fe095806624d144f0f5997f051ff06eaf867a50/core/src/components/modal/modal.ts#L114)

***

### backdropClass

> **backdropClass**: `string`

Classes to add on the backdrop DOM element.

#### Default Value

`''`

#### Inherited from

`ModalCommonPropsAndState.backdropClass`

#### Defined in

[core/src/components/modal/modal.ts:51](https://github.com/AmadeusITGroup/AgnosUI/blob/6fe095806624d144f0f5997f051ff06eaf867a50/core/src/components/modal/modal.ts#L51)

***

### backdropTransition

> **backdropTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

The transition to use for the backdrop behind the modal (if present).

#### Default Value

```ts
async () => {}
```

#### Defined in

[core/src/components/modal/modal.ts:124](https://github.com/AmadeusITGroup/AgnosUI/blob/6fe095806624d144f0f5997f051ff06eaf867a50/core/src/components/modal/modal.ts#L124)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`ModalCommonPropsAndState.className`

#### Defined in

[core/src/components/commonProps.ts:7](https://github.com/AmadeusITGroup/AgnosUI/blob/6fe095806624d144f0f5997f051ff06eaf867a50/core/src/components/commonProps.ts#L7)

***

### closeButton

> **closeButton**: `boolean`

Whether to display the close button.

#### Default Value

`true`

#### Inherited from

`ModalCommonPropsAndState.closeButton`

#### Defined in

[core/src/components/modal/modal.ts:58](https://github.com/AmadeusITGroup/AgnosUI/blob/6fe095806624d144f0f5997f051ff06eaf867a50/core/src/components/modal/modal.ts#L58)

***

### closeOnOutsideClick

> **closeOnOutsideClick**: `boolean`

Whether the modal should be closed when clicking on the viewport outside the modal.

#### Default Value

`true`

#### Defined in

[core/src/components/modal/modal.ts:131](https://github.com/AmadeusITGroup/AgnosUI/blob/6fe095806624d144f0f5997f051ff06eaf867a50/core/src/components/modal/modal.ts#L131)

***

### container

> **container**: `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Which element should contain the modal and backdrop DOM elements.
If it is not null, the modal and backdrop DOM elements are moved to the specified container.
Otherwise, they stay where the widget is located.

#### Default Value

```ts
typeof window !== 'undefined' ? document.body : null
```

#### Inherited from

`ModalCommonPropsAndState.container`

#### Defined in

[core/src/components/modal/modal.ts:70](https://github.com/AmadeusITGroup/AgnosUI/blob/6fe095806624d144f0f5997f051ff06eaf867a50/core/src/components/modal/modal.ts#L70)

***

### modalTransition

> **modalTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

The transition to use for the modal.

#### Default Value

```ts
async () => {}
```

#### Defined in

[core/src/components/modal/modal.ts:141](https://github.com/AmadeusITGroup/AgnosUI/blob/6fe095806624d144f0f5997f051ff06eaf867a50/core/src/components/modal/modal.ts#L141)

***

### onBeforeClose()

> **onBeforeClose**: (`event`) => `void`

Event to be triggered when the modal is about to be closed (i.e. the [close](ModalApi.md#close) method was called).

#### Parameters

• **event**: [`ModalBeforeCloseEvent`](ModalBeforeCloseEvent.md)

event giving access to the argument given to the [close](ModalApi.md#close) method and allowing
to cancel the close process.

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Defined in

[core/src/components/modal/modal.ts:154](https://github.com/AmadeusITGroup/AgnosUI/blob/6fe095806624d144f0f5997f051ff06eaf867a50/core/src/components/modal/modal.ts#L154)

***

### onHidden()

> **onHidden**: () => `void`

Event to be triggered when the transition is completed and the modal is not visible.

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Defined in

[core/src/components/modal/modal.ts:176](https://github.com/AmadeusITGroup/AgnosUI/blob/6fe095806624d144f0f5997f051ff06eaf867a50/core/src/components/modal/modal.ts#L176)

***

### onShown()

> **onShown**: () => `void`

Event to be triggered when the transition is completed and the modal is visible.

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Defined in

[core/src/components/modal/modal.ts:186](https://github.com/AmadeusITGroup/AgnosUI/blob/6fe095806624d144f0f5997f051ff06eaf867a50/core/src/components/modal/modal.ts#L186)

***

### onVisibleChange()

> **onVisibleChange**: (`visible`) => `void`

Event to be triggered when the visible property changes.

#### Parameters

• **visible**: `boolean`

new value of the visible propery

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Defined in

[core/src/components/modal/modal.ts:166](https://github.com/AmadeusITGroup/AgnosUI/blob/6fe095806624d144f0f5997f051ff06eaf867a50/core/src/components/modal/modal.ts#L166)

***

### visible

> **visible**: `boolean`

Whether the modal should be visible when the transition is completed.

#### Default Value

`false`

#### Inherited from

`ModalCommonPropsAndState.visible`

#### Defined in

[core/src/components/modal/modal.ts:77](https://github.com/AmadeusITGroup/AgnosUI/blob/6fe095806624d144f0f5997f051ff06eaf867a50/core/src/components/modal/modal.ts#L77)
