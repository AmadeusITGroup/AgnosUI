## Extends

- `SelectCommonPropsAndState`\<`Item`\>

## Type Parameters

• **Item**

## Properties

### allowedPlacements

> **allowedPlacements**: `Placement`[]

List of allowed placements for the dropdown.
This refers to the [allowedPlacements from floating UI](https://floating-ui.com/docs/autoPlacement#allowedplacements), given the different [Placement possibilities](https://floating-ui.com/docs/computePosition#placement).

#### Default Value

```ts
['bottom-start', 'top-start', 'bottom-end', 'top-end']
```

#### Defined in

[core/src/components/select/select.ts:105](https://github.com/AmadeusITGroup/AgnosUI/blob/439beaa22383120e3a12feec6cda910a783874a5/core/src/components/select/select.ts#L105)

***

### ariaLabel

> **ariaLabel**: `undefined` \| `string`

aria-label used for the input inside the select

#### Default Value

`'Select'`

#### Inherited from

`SelectCommonPropsAndState.ariaLabel`

#### Defined in

[core/src/components/select/select.ts:29](https://github.com/AmadeusITGroup/AgnosUI/blob/439beaa22383120e3a12feec6cda910a783874a5/core/src/components/select/select.ts#L29)

***

### badgeClassName

> **badgeClassName**: `string`

Class to be added on selected items (displayed in the input zone)

#### Default Value

`''`

#### Inherited from

`SelectCommonPropsAndState.badgeClassName`

#### Defined in

[core/src/components/select/select.ts:78](https://github.com/AmadeusITGroup/AgnosUI/blob/439beaa22383120e3a12feec6cda910a783874a5/core/src/components/select/select.ts#L78)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`SelectCommonPropsAndState.className`

#### Defined in

[core/src/components/commonProps.ts:7](https://github.com/AmadeusITGroup/AgnosUI/blob/439beaa22383120e3a12feec6cda910a783874a5/core/src/components/commonProps.ts#L7)

***

### disabled

> **disabled**: `boolean`

true if the select is disabled

#### Default Value

`false`

#### Inherited from

`SelectCommonPropsAndState.disabled`

#### Defined in

[core/src/components/select/select.ts:50](https://github.com/AmadeusITGroup/AgnosUI/blob/439beaa22383120e3a12feec6cda910a783874a5/core/src/components/select/select.ts#L50)

***

### filterText

> **filterText**: `string`

Filtered text to be display in the filter input

#### Default Value

`''`

#### Inherited from

`SelectCommonPropsAndState.filterText`

#### Defined in

[core/src/components/select/select.ts:43](https://github.com/AmadeusITGroup/AgnosUI/blob/439beaa22383120e3a12feec6cda910a783874a5/core/src/components/select/select.ts#L43)

***

### id

> **id**: `undefined` \| `string`

id used for the input inside the select

#### Inherited from

`SelectCommonPropsAndState.id`

#### Defined in

[core/src/components/select/select.ts:22](https://github.com/AmadeusITGroup/AgnosUI/blob/439beaa22383120e3a12feec6cda910a783874a5/core/src/components/select/select.ts#L22)

***

### items

> **items**: `Item`[]

List of available items for the dropdown

#### Default Value

`[]`

#### Defined in

[core/src/components/select/select.ts:94](https://github.com/AmadeusITGroup/AgnosUI/blob/439beaa22383120e3a12feec6cda910a783874a5/core/src/components/select/select.ts#L94)

***

### loading

> **loading**: `boolean`

true if a loading process is being done

#### Default Value

`false`

#### Inherited from

`SelectCommonPropsAndState.loading`

#### Defined in

[core/src/components/select/select.ts:85](https://github.com/AmadeusITGroup/AgnosUI/blob/439beaa22383120e3a12feec6cda910a783874a5/core/src/components/select/select.ts#L85)

***

### menuClassName

> **menuClassName**: `string`

Class to be added on the dropdown menu container

#### Default Value

`''`

#### Inherited from

`SelectCommonPropsAndState.menuClassName`

#### Defined in

[core/src/components/select/select.ts:64](https://github.com/AmadeusITGroup/AgnosUI/blob/439beaa22383120e3a12feec6cda910a783874a5/core/src/components/select/select.ts#L64)

***

### menuItemClassName

> **menuItemClassName**: `string`

Class to be added on menu items

#### Default Value

`''`

#### Inherited from

`SelectCommonPropsAndState.menuItemClassName`

#### Defined in

[core/src/components/select/select.ts:71](https://github.com/AmadeusITGroup/AgnosUI/blob/439beaa22383120e3a12feec6cda910a783874a5/core/src/components/select/select.ts#L71)

***

### open

> **open**: `boolean`

true if the select is open

#### Default Value

`false`

#### Inherited from

`SelectCommonPropsAndState.open`

#### Defined in

[core/src/components/select/select.ts:57](https://github.com/AmadeusITGroup/AgnosUI/blob/439beaa22383120e3a12feec6cda910a783874a5/core/src/components/select/select.ts#L57)

***

### selected

> **selected**: `Item`[]

List of selected item ids

#### Default Value

`[]`

#### Inherited from

`SelectCommonPropsAndState.selected`

#### Defined in

[core/src/components/select/select.ts:36](https://github.com/AmadeusITGroup/AgnosUI/blob/439beaa22383120e3a12feec6cda910a783874a5/core/src/components/select/select.ts#L36)

## Methods

### itemIdFn()

> **itemIdFn**(`item`): `string`

Custom function to get the id of an item
By default, the item is returned

#### Parameters

• **item**: `Item`

#### Returns

`string`

#### Default Value

```ts
(item: any) => '' + item
```

#### Defined in

[core/src/components/select/select.ts:116](https://github.com/AmadeusITGroup/AgnosUI/blob/439beaa22383120e3a12feec6cda910a783874a5/core/src/components/select/select.ts#L116)

***

### navSelector()

> **navSelector**(`node`): `NodeListOf`\<[`HTMLInputElement`](https://developer.mozilla.org/docs/Web/API/HTMLInputElement) \| [`HTMLSpanElement`](https://developer.mozilla.org/docs/Web/API/HTMLSpanElement)\>

Retrieves navigable elements within an HTML element containing badges and the input.

#### Parameters

• **node**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

HTMLElement that contains the badges and the input

#### Returns

`NodeListOf`\<[`HTMLInputElement`](https://developer.mozilla.org/docs/Web/API/HTMLInputElement) \| [`HTMLSpanElement`](https://developer.mozilla.org/docs/Web/API/HTMLSpanElement)\>

#### Default Value

```ts
(node: HTMLElement) => node.querySelectorAll('.au-select-badge,input')
```

#### Defined in

[core/src/components/select/select.ts:128](https://github.com/AmadeusITGroup/AgnosUI/blob/439beaa22383120e3a12feec6cda910a783874a5/core/src/components/select/select.ts#L128)

***

### onFilterTextChange()

> **onFilterTextChange**(`text`): `void`

Callback called when the text filter change

#### Parameters

• **text**: `string`

Filtered text

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Defined in

[core/src/components/select/select.ts:152](https://github.com/AmadeusITGroup/AgnosUI/blob/439beaa22383120e3a12feec6cda910a783874a5/core/src/components/select/select.ts#L152)

***

### onOpenChange()

> **onOpenChange**(`isOpen`): `void`

Callback called dropdown open state change

#### Parameters

• **isOpen**: `boolean`

updated open state

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Defined in

[core/src/components/select/select.ts:141](https://github.com/AmadeusITGroup/AgnosUI/blob/439beaa22383120e3a12feec6cda910a783874a5/core/src/components/select/select.ts#L141)

***

### onSelectedChange()

> **onSelectedChange**(`selected`): `void`

Callback called when the selection change

#### Parameters

• **selected**: `Item`[]

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Defined in

[core/src/components/select/select.ts:162](https://github.com/AmadeusITGroup/AgnosUI/blob/439beaa22383120e3a12feec6cda910a783874a5/core/src/components/select/select.ts#L162)
