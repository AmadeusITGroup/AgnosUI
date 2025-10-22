Defined in: [core-bootstrap/src/components/modal/modal.ts:67](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core-bootstrap/src/components/modal/modal.ts#L67)

Interface representing the properties for a modal component.

## Extends

- `ModalProps`.`ModalExtraProps`\<`Data`\>

## Type Parameters

### Data

`Data`

The type of data that the modal will handle.

## Properties

### animated

> **animated**: `boolean`

Defined in: [core/src/components/modal/modal.ts:107](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/modal/modal.ts#L107)

Whether the modal and its backdrop (if present) should be animated when shown or hidden.

#### Default Value

`true`

#### Inherited from

`CoreProps.animated`

***

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `string`

Defined in: [core/src/components/modal/modal.ts:44](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/modal/modal.ts#L44)

Value of the aria-label attribute to put on the close button.

#### Default Value

`'Close'`

#### Inherited from

`CoreProps.ariaCloseButtonLabel`

***

### backdrop

> **backdrop**: `boolean`

Defined in: [core/src/components/modal/modal.ts:114](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/modal/modal.ts#L114)

Whether a backdrop should be created behind the modal.

#### Default Value

`true`

#### Inherited from

`CoreProps.backdrop`

***

### backdropClass

> **backdropClass**: `string`

Defined in: [core/src/components/modal/modal.ts:51](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/modal/modal.ts#L51)

Classes to add on the backdrop DOM element.

#### Default Value

`''`

#### Inherited from

`CoreProps.backdropClass`

***

### backdropTransition

> **backdropTransition**: `TransitionFn`

Defined in: [core-bootstrap/src/components/modal/modal.ts:73](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core-bootstrap/src/components/modal/modal.ts#L73)

The transition to use for the backdrop behind the modal (if present).

#### Default Value

`fadeTransition`

#### Overrides

`CoreProps.backdropTransition`

***

### children

> **children**: `SlotContent`\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Defined in: [core-bootstrap/src/components/modal/modal.ts:26](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core-bootstrap/src/components/modal/modal.ts#L26)

Body of the modal.

#### Inherited from

`ModalExtraProps.children`

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreProps.className`

***

### closeButton

> **closeButton**: `boolean`

Defined in: [core/src/components/modal/modal.ts:58](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/modal/modal.ts#L58)

Whether to display the close button.

#### Default Value

`true`

#### Inherited from

`CoreProps.closeButton`

***

### closeOnOutsideClick

> **closeOnOutsideClick**: `boolean`

Defined in: [core/src/components/modal/modal.ts:131](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/modal/modal.ts#L131)

Whether the modal should be closed when clicking on the viewport outside the modal.

#### Default Value

`true`

#### Inherited from

`CoreProps.closeOnOutsideClick`

***

### container

> **container**: `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Defined in: [core/src/components/modal/modal.ts:70](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/modal/modal.ts#L70)

Which element should contain the modal and backdrop DOM elements.
If it is not null, the modal and backdrop DOM elements are moved to the specified container.
Otherwise, they stay where the widget is located.

#### Default Value

```ts
typeof window !== 'undefined' ? document.body : null
```

#### Inherited from

`CoreProps.container`

***

### contentData

> **contentData**: `Data`

Defined in: [core-bootstrap/src/components/modal/modal.ts:22](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core-bootstrap/src/components/modal/modal.ts#L22)

Data to use in content slots

#### Inherited from

`ModalExtraProps.contentData`

***

### footer

> **footer**: `SlotContent`\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Defined in: [core-bootstrap/src/components/modal/modal.ts:31](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core-bootstrap/src/components/modal/modal.ts#L31)

Footer of the modal.

#### Inherited from

`ModalExtraProps.footer`

***

### fullscreen

> **fullscreen**: `boolean`

Defined in: [core-bootstrap/src/components/modal/modal.ts:53](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core-bootstrap/src/components/modal/modal.ts#L53)

Option to create a fullscreen modal, according to the bootstrap documentation.

#### Default Value

`false`

#### Inherited from

`ModalExtraProps.fullscreen`

***

### header

> **header**: `SlotContent`\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Defined in: [core-bootstrap/src/components/modal/modal.ts:36](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core-bootstrap/src/components/modal/modal.ts#L36)

Header of the modal. The default header includes [title](#title).

#### Inherited from

`ModalExtraProps.header`

***

### modalTransition

> **modalTransition**: `TransitionFn`

Defined in: [core-bootstrap/src/components/modal/modal.ts:80](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core-bootstrap/src/components/modal/modal.ts#L80)

The transition to use for the modal.

#### Default Value

`fadeTransition`

#### Overrides

`CoreProps.modalTransition`

***

### onBeforeClose()

> **onBeforeClose**: (`event`) => `void`

Defined in: [core/src/components/modal/modal.ts:154](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/modal/modal.ts#L154)

Event to be triggered when the modal is about to be closed (i.e. the ModalApi.close\|close method was called).

#### Parameters

##### event

[`ModalBeforeCloseEvent`](ModalBeforeCloseEvent.md)

event giving access to the argument given to the ModalApi.close\|close method and allowing
to cancel the close process.

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Inherited from

`CoreProps.onBeforeClose`

***

### onHidden()

> **onHidden**: () => `void`

Defined in: [core/src/components/modal/modal.ts:176](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/modal/modal.ts#L176)

Event to be triggered when the transition is completed and the modal is not visible.

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Inherited from

`CoreProps.onHidden`

***

### onShown()

> **onShown**: () => `void`

Defined in: [core/src/components/modal/modal.ts:186](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/modal/modal.ts#L186)

Event to be triggered when the transition is completed and the modal is visible.

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Inherited from

`CoreProps.onShown`

***

### onVisibleChange()

> **onVisibleChange**: (`visible`) => `void`

Defined in: [core/src/components/modal/modal.ts:166](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/modal/modal.ts#L166)

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

#### Inherited from

`CoreProps.onVisibleChange`

***

### structure

> **structure**: `SlotContent`\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Defined in: [core-bootstrap/src/components/modal/modal.ts:42](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core-bootstrap/src/components/modal/modal.ts#L42)

Structure of the modal.
The default structure uses [header](#header), [children](#children) and [footer](#footer).

#### Inherited from

`ModalExtraProps.structure`

***

### title

> **title**: `SlotContent`\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Defined in: [core-bootstrap/src/components/modal/modal.ts:47](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core-bootstrap/src/components/modal/modal.ts#L47)

Title of the modal.

#### Inherited from

`ModalExtraProps.title`

***

### visible

> **visible**: `boolean`

Defined in: [core/src/components/modal/modal.ts:77](https://github.com/AmadeusITGroup/AgnosUI/blob/3d05135937f85030fde1e63d4ec94c81ca25c36b/core/src/components/modal/modal.ts#L77)

Whether the modal should be visible when the transition is completed.

#### Default Value

`false`

#### Inherited from

`CoreProps.visible`
