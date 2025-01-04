Defined in: [core/src/components/modal/modal.ts:100](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/core/src/components/modal/modal.ts#L100)

Properties of the modal widget.

## Extends

- `ModalCommonPropsAndState`

## Properties

### animated

> **animated**: `boolean`

Defined in: [core/src/components/modal/modal.ts:106](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/core/src/components/modal/modal.ts#L106)

Whether the modal and its backdrop (if present) should be animated when shown or hidden.

#### Default Value

`true`

***

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `string`

Defined in: [core/src/components/modal/modal.ts:43](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/core/src/components/modal/modal.ts#L43)

Value of the aria-label attribute to put on the close button.

#### Default Value

`'Close'`

#### Inherited from

`ModalCommonPropsAndState.ariaCloseButtonLabel`

***

### backdrop

> **backdrop**: `boolean`

Defined in: [core/src/components/modal/modal.ts:113](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/core/src/components/modal/modal.ts#L113)

Whether a backdrop should be created behind the modal.

#### Default Value

`true`

***

### backdropClass

> **backdropClass**: `string`

Defined in: [core/src/components/modal/modal.ts:50](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/core/src/components/modal/modal.ts#L50)

Classes to add on the backdrop DOM element.

#### Default Value

`''`

#### Inherited from

`ModalCommonPropsAndState.backdropClass`

***

### backdropTransition

> **backdropTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: [core/src/components/modal/modal.ts:123](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/core/src/components/modal/modal.ts#L123)

The transition to use for the backdrop behind the modal (if present).

#### Default Value

```ts
async () => {}
```

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`ModalCommonPropsAndState.className`

***

### closeButton

> **closeButton**: `boolean`

Defined in: [core/src/components/modal/modal.ts:57](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/core/src/components/modal/modal.ts#L57)

Whether to display the close button.

#### Default Value

`true`

#### Inherited from

`ModalCommonPropsAndState.closeButton`

***

### closeOnOutsideClick

> **closeOnOutsideClick**: `boolean`

Defined in: [core/src/components/modal/modal.ts:130](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/core/src/components/modal/modal.ts#L130)

Whether the modal should be closed when clicking on the viewport outside the modal.

#### Default Value

`true`

***

### container

> **container**: `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Defined in: [core/src/components/modal/modal.ts:69](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/core/src/components/modal/modal.ts#L69)

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

Defined in: [core/src/components/modal/modal.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/core/src/components/modal/modal.ts#L140)

The transition to use for the modal.

#### Default Value

```ts
async () => {}
```

***

### onBeforeClose()

> **onBeforeClose**: (`event`) => `void`

Defined in: [core/src/components/modal/modal.ts:153](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/core/src/components/modal/modal.ts#L153)

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

Defined in: [core/src/components/modal/modal.ts:175](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/core/src/components/modal/modal.ts#L175)

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

Defined in: [core/src/components/modal/modal.ts:185](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/core/src/components/modal/modal.ts#L185)

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

Defined in: [core/src/components/modal/modal.ts:165](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/core/src/components/modal/modal.ts#L165)

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

Defined in: [core/src/components/modal/modal.ts:76](https://github.com/AmadeusITGroup/AgnosUI/blob/ad84dee0db69751bb15f98666ddd98ea065c3f05/core/src/components/modal/modal.ts#L76)

Whether the modal should be visible when the transition is completed.

#### Default Value

`false`

#### Inherited from

`ModalCommonPropsAndState.visible`
