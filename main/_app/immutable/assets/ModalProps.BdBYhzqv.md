## Extends

- `ModalProps`.`ModalExtraProps`\<`Data`\>

## Type Parameters

• **Data**

## Properties

### animated

> **animated**: `boolean`

Whether the modal and its backdrop (if present) should be animated when shown or hidden.

#### Default Value

`true`

#### Inherited from

`CoreProps.animated`

#### Defined in

[core/src/components/modal/modal.ts:107](https://github.com/AmadeusITGroup/AgnosUI/blob/93c1bf478bed146928de60aa1958c0cdf16ad74c/core/src/components/modal/modal.ts#L107)

***

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `string`

Value of the aria-label attribute to put on the close button.

#### Default Value

`'Close'`

#### Inherited from

`CoreProps.ariaCloseButtonLabel`

#### Defined in

[core/src/components/modal/modal.ts:44](https://github.com/AmadeusITGroup/AgnosUI/blob/93c1bf478bed146928de60aa1958c0cdf16ad74c/core/src/components/modal/modal.ts#L44)

***

### backdrop

> **backdrop**: `boolean`

Whether a backdrop should be created behind the modal.

#### Default Value

`true`

#### Inherited from

`CoreProps.backdrop`

#### Defined in

[core/src/components/modal/modal.ts:114](https://github.com/AmadeusITGroup/AgnosUI/blob/93c1bf478bed146928de60aa1958c0cdf16ad74c/core/src/components/modal/modal.ts#L114)

***

### backdropClass

> **backdropClass**: `string`

Classes to add on the backdrop DOM element.

#### Default Value

`''`

#### Inherited from

`CoreProps.backdropClass`

#### Defined in

[core/src/components/modal/modal.ts:51](https://github.com/AmadeusITGroup/AgnosUI/blob/93c1bf478bed146928de60aa1958c0cdf16ad74c/core/src/components/modal/modal.ts#L51)

***

### backdropTransition

> **backdropTransition**: `TransitionFn`

The transition to use for the backdrop behind the modal (if present).

#### Default Value

`fadeTransition`

#### Overrides

`CoreProps.backdropTransition`

#### Defined in

[core-bootstrap/src/components/modal/modal.ts:64](https://github.com/AmadeusITGroup/AgnosUI/blob/93c1bf478bed146928de60aa1958c0cdf16ad74c/core-bootstrap/src/components/modal/modal.ts#L64)

***

### children

> **children**: `SlotContent`\<[`ModalContext`](../type-aliases/ModalContext.md)\<`Data`\>\>

Body of the modal.

#### Inherited from

`ModalExtraProps.children`

#### Defined in

[core-bootstrap/src/components/modal/modal.ts:27](https://github.com/AmadeusITGroup/AgnosUI/blob/93c1bf478bed146928de60aa1958c0cdf16ad74c/core-bootstrap/src/components/modal/modal.ts#L27)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreProps.className`

#### Defined in

[core/src/components/commonProps.ts:7](https://github.com/AmadeusITGroup/AgnosUI/blob/93c1bf478bed146928de60aa1958c0cdf16ad74c/core/src/components/commonProps.ts#L7)

***

### closeButton

> **closeButton**: `boolean`

Whether to display the close button.

#### Default Value

`true`

#### Inherited from

`CoreProps.closeButton`

#### Defined in

[core/src/components/modal/modal.ts:58](https://github.com/AmadeusITGroup/AgnosUI/blob/93c1bf478bed146928de60aa1958c0cdf16ad74c/core/src/components/modal/modal.ts#L58)

***

### closeOnOutsideClick

> **closeOnOutsideClick**: `boolean`

Whether the modal should be closed when clicking on the viewport outside the modal.

#### Default Value

`true`

#### Inherited from

`CoreProps.closeOnOutsideClick`

#### Defined in

[core/src/components/modal/modal.ts:131](https://github.com/AmadeusITGroup/AgnosUI/blob/93c1bf478bed146928de60aa1958c0cdf16ad74c/core/src/components/modal/modal.ts#L131)

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

`CoreProps.container`

#### Defined in

[core/src/components/modal/modal.ts:70](https://github.com/AmadeusITGroup/AgnosUI/blob/93c1bf478bed146928de60aa1958c0cdf16ad74c/core/src/components/modal/modal.ts#L70)

***

### contentData

> **contentData**: `Data`

Data to use in content slots

#### Inherited from

`ModalExtraProps.contentData`

#### Defined in

[core-bootstrap/src/components/modal/modal.ts:23](https://github.com/AmadeusITGroup/AgnosUI/blob/93c1bf478bed146928de60aa1958c0cdf16ad74c/core-bootstrap/src/components/modal/modal.ts#L23)

***

### footer

> **footer**: `SlotContent`\<[`ModalContext`](../type-aliases/ModalContext.md)\<`Data`\>\>

Footer of the modal.

#### Inherited from

`ModalExtraProps.footer`

#### Defined in

[core-bootstrap/src/components/modal/modal.ts:32](https://github.com/AmadeusITGroup/AgnosUI/blob/93c1bf478bed146928de60aa1958c0cdf16ad74c/core-bootstrap/src/components/modal/modal.ts#L32)

***

### fullscreen

> **fullscreen**: `boolean`

Option to create a fullscreen modal, according to the bootstrap documentation.

#### Default Value

`false`

#### Inherited from

`ModalExtraProps.fullscreen`

#### Defined in

[core-bootstrap/src/components/modal/modal.ts:54](https://github.com/AmadeusITGroup/AgnosUI/blob/93c1bf478bed146928de60aa1958c0cdf16ad74c/core-bootstrap/src/components/modal/modal.ts#L54)

***

### header

> **header**: `SlotContent`\<[`ModalContext`](../type-aliases/ModalContext.md)\<`Data`\>\>

Header of the modal. The default header includes [title](ModalProps.md#title).

#### Inherited from

`ModalExtraProps.header`

#### Defined in

[core-bootstrap/src/components/modal/modal.ts:37](https://github.com/AmadeusITGroup/AgnosUI/blob/93c1bf478bed146928de60aa1958c0cdf16ad74c/core-bootstrap/src/components/modal/modal.ts#L37)

***

### modalTransition

> **modalTransition**: `TransitionFn`

The transition to use for the modal.

#### Default Value

`fadeTransition`

#### Overrides

`CoreProps.modalTransition`

#### Defined in

[core-bootstrap/src/components/modal/modal.ts:71](https://github.com/AmadeusITGroup/AgnosUI/blob/93c1bf478bed146928de60aa1958c0cdf16ad74c/core-bootstrap/src/components/modal/modal.ts#L71)

***

### onBeforeClose()

> **onBeforeClose**: (`event`) => `void`

Event to be triggered when the modal is about to be closed (i.e. the ModalApi.close|close method was called).

#### Parameters

• **event**: [`ModalBeforeCloseEvent`](ModalBeforeCloseEvent.md)

event giving access to the argument given to the ModalApi.close|close method and allowing
to cancel the close process.

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Inherited from

`CoreProps.onBeforeClose`

#### Defined in

[core/src/components/modal/modal.ts:154](https://github.com/AmadeusITGroup/AgnosUI/blob/93c1bf478bed146928de60aa1958c0cdf16ad74c/core/src/components/modal/modal.ts#L154)

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

#### Inherited from

`CoreProps.onHidden`

#### Defined in

[core/src/components/modal/modal.ts:176](https://github.com/AmadeusITGroup/AgnosUI/blob/93c1bf478bed146928de60aa1958c0cdf16ad74c/core/src/components/modal/modal.ts#L176)

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

#### Inherited from

`CoreProps.onShown`

#### Defined in

[core/src/components/modal/modal.ts:186](https://github.com/AmadeusITGroup/AgnosUI/blob/93c1bf478bed146928de60aa1958c0cdf16ad74c/core/src/components/modal/modal.ts#L186)

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

#### Inherited from

`CoreProps.onVisibleChange`

#### Defined in

[core/src/components/modal/modal.ts:166](https://github.com/AmadeusITGroup/AgnosUI/blob/93c1bf478bed146928de60aa1958c0cdf16ad74c/core/src/components/modal/modal.ts#L166)

***

### structure

> **structure**: `SlotContent`\<[`ModalContext`](../type-aliases/ModalContext.md)\<`Data`\>\>

Structure of the modal.
The default structure uses [header](ModalProps.md#header), [children](ModalProps.md#children) and [footer](ModalProps.md#footer).

#### Inherited from

`ModalExtraProps.structure`

#### Defined in

[core-bootstrap/src/components/modal/modal.ts:43](https://github.com/AmadeusITGroup/AgnosUI/blob/93c1bf478bed146928de60aa1958c0cdf16ad74c/core-bootstrap/src/components/modal/modal.ts#L43)

***

### title

> **title**: `SlotContent`\<[`ModalContext`](../type-aliases/ModalContext.md)\<`Data`\>\>

Title of the modal.

#### Inherited from

`ModalExtraProps.title`

#### Defined in

[core-bootstrap/src/components/modal/modal.ts:48](https://github.com/AmadeusITGroup/AgnosUI/blob/93c1bf478bed146928de60aa1958c0cdf16ad74c/core-bootstrap/src/components/modal/modal.ts#L48)

***

### visible

> **visible**: `boolean`

Whether the modal should be visible when the transition is completed.

#### Default Value

`false`

#### Inherited from

`CoreProps.visible`

#### Defined in

[core/src/components/modal/modal.ts:77](https://github.com/AmadeusITGroup/AgnosUI/blob/93c1bf478bed146928de60aa1958c0cdf16ad74c/core/src/components/modal/modal.ts#L77)
