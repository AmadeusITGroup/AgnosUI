Interface representing the properties for a modal component.

## Extends

- `ModalProps`.`ModalExtraProps`\<`Data`\>

## Type Parameters

• **Data**

The type of data that the modal will handle.

## Properties

### animated

> **animated**: `boolean`

Whether the modal and its backdrop (if present) should be animated when shown or hidden.

#### Default Value

`true`

#### Inherited from

`CoreProps.animated`

#### Defined in

[core/src/components/modal/modal.ts:106](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/core/src/components/modal/modal.ts#L106)

***

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `string`

Value of the aria-label attribute to put on the close button.

#### Default Value

`'Close'`

#### Inherited from

`CoreProps.ariaCloseButtonLabel`

#### Defined in

[core/src/components/modal/modal.ts:43](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/core/src/components/modal/modal.ts#L43)

***

### backdrop

> **backdrop**: `boolean`

Whether a backdrop should be created behind the modal.

#### Default Value

`true`

#### Inherited from

`CoreProps.backdrop`

#### Defined in

[core/src/components/modal/modal.ts:113](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/core/src/components/modal/modal.ts#L113)

***

### backdropClass

> **backdropClass**: `string`

Classes to add on the backdrop DOM element.

#### Default Value

`''`

#### Inherited from

`CoreProps.backdropClass`

#### Defined in

[core/src/components/modal/modal.ts:50](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/core/src/components/modal/modal.ts#L50)

***

### backdropTransition

> **backdropTransition**: `TransitionFn`

The transition to use for the backdrop behind the modal (if present).

#### Default Value

`fadeTransition`

#### Overrides

`CoreProps.backdropTransition`

#### Defined in

[core-bootstrap/src/components/modal/modal.ts:73](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/core-bootstrap/src/components/modal/modal.ts#L73)

***

### children

> **children**: `SlotContent`\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Body of the modal.

#### Inherited from

`ModalExtraProps.children`

#### Defined in

[core-bootstrap/src/components/modal/modal.ts:26](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/core-bootstrap/src/components/modal/modal.ts#L26)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreProps.className`

#### Defined in

[core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/core/src/components/commonProps.ts#L10)

***

### closeButton

> **closeButton**: `boolean`

Whether to display the close button.

#### Default Value

`true`

#### Inherited from

`CoreProps.closeButton`

#### Defined in

[core/src/components/modal/modal.ts:57](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/core/src/components/modal/modal.ts#L57)

***

### closeOnOutsideClick

> **closeOnOutsideClick**: `boolean`

Whether the modal should be closed when clicking on the viewport outside the modal.

#### Default Value

`true`

#### Inherited from

`CoreProps.closeOnOutsideClick`

#### Defined in

[core/src/components/modal/modal.ts:130](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/core/src/components/modal/modal.ts#L130)

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

[core/src/components/modal/modal.ts:69](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/core/src/components/modal/modal.ts#L69)

***

### contentData

> **contentData**: `Data`

Data to use in content slots

#### Inherited from

`ModalExtraProps.contentData`

#### Defined in

[core-bootstrap/src/components/modal/modal.ts:22](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/core-bootstrap/src/components/modal/modal.ts#L22)

***

### footer

> **footer**: `SlotContent`\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Footer of the modal.

#### Inherited from

`ModalExtraProps.footer`

#### Defined in

[core-bootstrap/src/components/modal/modal.ts:31](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/core-bootstrap/src/components/modal/modal.ts#L31)

***

### fullscreen

> **fullscreen**: `boolean`

Option to create a fullscreen modal, according to the bootstrap documentation.

#### Default Value

`false`

#### Inherited from

`ModalExtraProps.fullscreen`

#### Defined in

[core-bootstrap/src/components/modal/modal.ts:53](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/core-bootstrap/src/components/modal/modal.ts#L53)

***

### header

> **header**: `SlotContent`\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Header of the modal. The default header includes [title](ModalProps.md#title).

#### Inherited from

`ModalExtraProps.header`

#### Defined in

[core-bootstrap/src/components/modal/modal.ts:36](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/core-bootstrap/src/components/modal/modal.ts#L36)

***

### modalTransition

> **modalTransition**: `TransitionFn`

The transition to use for the modal.

#### Default Value

`fadeTransition`

#### Overrides

`CoreProps.modalTransition`

#### Defined in

[core-bootstrap/src/components/modal/modal.ts:80](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/core-bootstrap/src/components/modal/modal.ts#L80)

***

### onBeforeClose()

> **onBeforeClose**: (`event`) => `void`

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

#### Defined in

[core/src/components/modal/modal.ts:153](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/core/src/components/modal/modal.ts#L153)

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

[core/src/components/modal/modal.ts:175](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/core/src/components/modal/modal.ts#L175)

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

[core/src/components/modal/modal.ts:185](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/core/src/components/modal/modal.ts#L185)

***

### onVisibleChange()

> **onVisibleChange**: (`visible`) => `void`

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

#### Defined in

[core/src/components/modal/modal.ts:165](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/core/src/components/modal/modal.ts#L165)

***

### structure

> **structure**: `SlotContent`\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Structure of the modal.
The default structure uses [header](ModalProps.md#header), [children](ModalProps.md#children) and [footer](ModalProps.md#footer).

#### Inherited from

`ModalExtraProps.structure`

#### Defined in

[core-bootstrap/src/components/modal/modal.ts:42](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/core-bootstrap/src/components/modal/modal.ts#L42)

***

### title

> **title**: `SlotContent`\<[`ModalContext`](ModalContext.md)\<`Data`\>\>

Title of the modal.

#### Inherited from

`ModalExtraProps.title`

#### Defined in

[core-bootstrap/src/components/modal/modal.ts:47](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/core-bootstrap/src/components/modal/modal.ts#L47)

***

### visible

> **visible**: `boolean`

Whether the modal should be visible when the transition is completed.

#### Default Value

`false`

#### Inherited from

`CoreProps.visible`

#### Defined in

[core/src/components/modal/modal.ts:76](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/core/src/components/modal/modal.ts#L76)
