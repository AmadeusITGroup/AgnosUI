> **createNavManager**(): `object`

Returns a new instance of the navigation manager.

The navigation manager simplifies keyboard navigation for a set of DOM elements.
It provides a directive to use on some DOM elements, both to add the keydown event handler and to specify which elements should be managed
(either by directly putting the directive on those elements, or by putting the directive on a parent element and
specifying which child elements should be included through a selector function).

It provides some utilities to move the focus between those elements (focusFirst/focusLast, focusLeft/focusRight, focusPrevious/focusNext).

## Returns

`object`

a new instance of the navigation manager

### directive()

> **directive**: \<`T`\>(`node`, `args`) => `void` \| `object`

#### Type Parameters

• **T** = `any`

#### Parameters

• **node**: [`SSRHTMLElement`](../interfaces/SSRHTMLElement.md)

• **args**: [`NavManagerItemConfig`](../interfaces/NavManagerItemConfig.md)\<`T`\>

#### Returns

`void` \| `object`

### elementsInDomOrder$

> **elementsInDomOrder$**: [`ReadableSignal`](https://amadeusitgroup.github.io/tansu/interfaces/ReadableSignal.html)\<[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)[]\>

### focusFirst()

> **focusFirst**: (`__namedParameters`) => `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

#### Parameters

• **\_\_namedParameters** = `{}`

• **\_\_namedParameters.event?**: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)

#### Returns

`null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

### focusFirstLeft()

> **focusFirstLeft**: (...`args`) => `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

#### Parameters

• ...**args**: [`Object?`]

#### Returns

`null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

### focusFirstRight()

> **focusFirstRight**: (...`args`) => `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

#### Parameters

• ...**args**: [`Object?`]

#### Returns

`null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

### focusIndex()

> **focusIndex**: (`index`, `moveDirection`) => `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

#### Parameters

• **index**: `number`

• **moveDirection**: `-1` \| `0` \| `1` = `0`

#### Returns

`null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

### focusLast()

> **focusLast**: (`__namedParameters`) => `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

#### Parameters

• **\_\_namedParameters** = `{}`

• **\_\_namedParameters.event?**: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)

#### Returns

`null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

### focusLeft()

> **focusLeft**: (...`args`) => `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

#### Parameters

• ...**args**: [`Object?`]

#### Returns

`null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

### focusNext()

> **focusNext**: (`__namedParameters`) => `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

#### Parameters

• **\_\_namedParameters** = `{}`

• **\_\_namedParameters.event?**: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)

• **\_\_namedParameters.referenceElement?**: `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) = `...`

#### Returns

`null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

### focusPrevious()

> **focusPrevious**: (`__namedParameters`) => `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

#### Parameters

• **\_\_namedParameters** = `{}`

• **\_\_namedParameters.event?**: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)

• **\_\_namedParameters.referenceElement?**: `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) = `...`

#### Returns

`null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

### focusRight()

> **focusRight**: (...`args`) => `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

#### Parameters

• ...**args**: [`Object?`]

#### Returns

`null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

### refreshElements()

> **refreshElements**: (`now`) => `void`

#### Parameters

• **now**: `boolean` = `true`

#### Returns

`void`

## Defined in

[core/src/services/navManager.ts:111](https://github.com/AmadeusITGroup/AgnosUI/blob/c5a0486d2f61c08ac52f630e4c765eedf83428c7/core/src/services/navManager.ts#L111)
