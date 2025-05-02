> **NavManager**\<`T`\> = `object`

Defined in: [core/src/services/navManager.ts:26](https://github.com/AmadeusITGroup/AgnosUI/blob/ee1daf8f80138440fcb1256d6fd0978ad4cd2730/core/src/services/navManager.ts#L26)

Represents a navigation manager that handles focusable elements in the DOM.

## Type Parameters

### T

`T`

The type of the configuration for the navigation manager items.

## Properties

### directive

> **directive**: [`Directive`](Directive.md)\<[`NavManagerItemConfig`](../interfaces/NavManagerItemConfig.md)\<`T`\>, [`SSRHTMLElement`](../interfaces/SSRHTMLElement.md)\>

Defined in: [core/src/services/navManager.ts:34](https://github.com/AmadeusITGroup/AgnosUI/blob/ee1daf8f80138440fcb1256d6fd0978ad4cd2730/core/src/services/navManager.ts#L34)

Directive to attach the nav manager

***

### elementsInDomOrder$

> **elementsInDomOrder$**: [`ReadableSignal`](https://amadeusitgroup.github.io/tansu/interfaces/ReadableSignal.html)\<[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)[]\>

Defined in: [core/src/services/navManager.ts:30](https://github.com/AmadeusITGroup/AgnosUI/blob/ee1daf8f80138440fcb1256d6fd0978ad4cd2730/core/src/services/navManager.ts#L30)

Store containing the navigable elements in DOM order

***

### focusFirst

> **focusFirst**: [`FocusEnd`](FocusEnd.md)

Defined in: [core/src/services/navManager.ts:59](https://github.com/AmadeusITGroup/AgnosUI/blob/ee1daf8f80138440fcb1256d6fd0978ad4cd2730/core/src/services/navManager.ts#L59)

Focus the first element, respecting the ancestor direction.

***

### focusFirstLeft

> **focusFirstLeft**: [`FocusEnd`](FocusEnd.md)

Defined in: [core/src/services/navManager.ts:63](https://github.com/AmadeusITGroup/AgnosUI/blob/ee1daf8f80138440fcb1256d6fd0978ad4cd2730/core/src/services/navManager.ts#L63)

Focus the element at the left-end of the list.

***

### focusFirstRight

> **focusFirstRight**: [`FocusEnd`](FocusEnd.md)

Defined in: [core/src/services/navManager.ts:67](https://github.com/AmadeusITGroup/AgnosUI/blob/ee1daf8f80138440fcb1256d6fd0978ad4cd2730/core/src/services/navManager.ts#L67)

Focus the element at the right-end of the list.

***

### focusIndex()

> **focusIndex**: (`index`, `moveDirection`) => [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) \| `null`

Defined in: [core/src/services/navManager.ts:47](https://github.com/AmadeusITGroup/AgnosUI/blob/ee1daf8f80138440fcb1256d6fd0978ad4cd2730/core/src/services/navManager.ts#L47)

Focus the element at the given idex.
If the element at the given index is not focusable, use the moveDirection to step into the next focusable element.

#### Parameters

##### index

`number`

the index of the element to focus

##### moveDirection

a move direction

`-1` | `0` | `1`

#### Returns

[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) \| `null`

the new focusable element if found, null otherwise

***

### focusLast

> **focusLast**: [`FocusEnd`](FocusEnd.md)

Defined in: [core/src/services/navManager.ts:71](https://github.com/AmadeusITGroup/AgnosUI/blob/ee1daf8f80138440fcb1256d6fd0978ad4cd2730/core/src/services/navManager.ts#L71)

Focus the last element, respecting the ancestor direction.

***

### focusLeft

> **focusLeft**: [`FocusNeighbour`](FocusNeighbour.md)

Defined in: [core/src/services/navManager.ts:75](https://github.com/AmadeusITGroup/AgnosUI/blob/ee1daf8f80138440fcb1256d6fd0978ad4cd2730/core/src/services/navManager.ts#L75)

Focus the next focusable element to the left of the currently focused element.

***

### focusNext

> **focusNext**: [`FocusNeighbour`](FocusNeighbour.md)

Defined in: [core/src/services/navManager.ts:55](https://github.com/AmadeusITGroup/AgnosUI/blob/ee1daf8f80138440fcb1256d6fd0978ad4cd2730/core/src/services/navManager.ts#L55)

Focus the next element, respecting the ancestor direction.

***

### focusPrevious

> **focusPrevious**: [`FocusNeighbour`](FocusNeighbour.md)

Defined in: [core/src/services/navManager.ts:51](https://github.com/AmadeusITGroup/AgnosUI/blob/ee1daf8f80138440fcb1256d6fd0978ad4cd2730/core/src/services/navManager.ts#L51)

Focus the previous element, respecting the ancestor direction.

***

### focusRight

> **focusRight**: [`FocusNeighbour`](FocusNeighbour.md)

Defined in: [core/src/services/navManager.ts:79](https://github.com/AmadeusITGroup/AgnosUI/blob/ee1daf8f80138440fcb1256d6fd0978ad4cd2730/core/src/services/navManager.ts#L79)

Focus the next focusable element to the right of the currently focused element.

***

### refreshElements()

> **refreshElements**: (`now?`) => `void`

Defined in: [core/src/services/navManager.ts:39](https://github.com/AmadeusITGroup/AgnosUI/blob/ee1daf8f80138440fcb1256d6fd0978ad4cd2730/core/src/services/navManager.ts#L39)

Refresh the elements list.

#### Parameters

##### now?

`boolean`

force the instant refresh of the elements

#### Returns

`void`
