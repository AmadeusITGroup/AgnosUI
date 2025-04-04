Defined in: [core/src/components/select/select.ts:93](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/select/select.ts#L93)

Props for the Select component.

## Extends

- `SelectCommonPropsAndState`\<`Item`\>

## Type Parameters

### Item

`Item`

The type of the Select Items

## Properties

### allowedPlacements

> **allowedPlacements**: `Placement`[]

Defined in: [core/src/components/select/select.ts:110](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/select/select.ts#L110)

List of allowed placements for the dropdown.
This refers to the [allowedPlacements from floating UI](https://floating-ui.com/docs/autoPlacement#allowedplacements), given the different [Placement possibilities](https://floating-ui.com/docs/computePosition#placement).

#### Default Value

```ts
['bottom-start', 'top-start', 'bottom-end', 'top-end']
```

***

### ariaLabel

> **ariaLabel**: `undefined` \| `string`

Defined in: [core/src/components/select/select.ts:29](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/select/select.ts#L29)

aria-label used for the input inside the select

#### Default Value

`'Select'`

#### Inherited from

`SelectCommonPropsAndState.ariaLabel`

***

### badgeClassName

> **badgeClassName**: `string`

Defined in: [core/src/components/select/select.ts:78](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/select/select.ts#L78)

Class to be added on selected items (displayed in the input zone)

#### Default Value

`''`

#### Inherited from

`SelectCommonPropsAndState.badgeClassName`

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`SelectCommonPropsAndState.className`

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/select/select.ts:50](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/select/select.ts#L50)

true if the select is disabled

#### Default Value

`false`

#### Inherited from

`SelectCommonPropsAndState.disabled`

***

### filterText

> **filterText**: `string`

Defined in: [core/src/components/select/select.ts:43](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/select/select.ts#L43)

Filtered text to be display in the filter input

#### Default Value

`''`

#### Inherited from

`SelectCommonPropsAndState.filterText`

***

### id

> **id**: `undefined` \| `string`

Defined in: [core/src/components/select/select.ts:22](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/select/select.ts#L22)

id used for the input inside the select

#### Inherited from

`SelectCommonPropsAndState.id`

***

### items

> **items**: `Item`[]

Defined in: [core/src/components/select/select.ts:99](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/select/select.ts#L99)

List of available items for the dropdown

#### Default Value

`[]`

***

### loading

> **loading**: `boolean`

Defined in: [core/src/components/select/select.ts:85](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/select/select.ts#L85)

true if a loading process is being done

#### Default Value

`false`

#### Inherited from

`SelectCommonPropsAndState.loading`

***

### menuClassName

> **menuClassName**: `string`

Defined in: [core/src/components/select/select.ts:64](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/select/select.ts#L64)

Class to be added on the dropdown menu container

#### Default Value

`''`

#### Inherited from

`SelectCommonPropsAndState.menuClassName`

***

### menuItemClassName

> **menuItemClassName**: `string`

Defined in: [core/src/components/select/select.ts:71](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/select/select.ts#L71)

Class to be added on menu items

#### Default Value

`''`

#### Inherited from

`SelectCommonPropsAndState.menuItemClassName`

***

### open

> **open**: `boolean`

Defined in: [core/src/components/select/select.ts:57](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/select/select.ts#L57)

true if the select is open

#### Default Value

`false`

#### Inherited from

`SelectCommonPropsAndState.open`

***

### selected

> **selected**: `Item`[]

Defined in: [core/src/components/select/select.ts:36](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/select/select.ts#L36)

List of selected item ids

#### Default Value

`[]`

#### Inherited from

`SelectCommonPropsAndState.selected`

## Methods

### itemIdFn()

> **itemIdFn**(`item`): `string`

Defined in: [core/src/components/select/select.ts:121](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/select/select.ts#L121)

Custom function to get the id of an item
By default, the item is returned

#### Parameters

##### item

`Item`

#### Returns

`string`

#### Default Value

```ts
(item: any) => '' + item
```

***

### navSelector()

> **navSelector**(`node`): `NodeListOf`\<[`HTMLInputElement`](https://developer.mozilla.org/docs/Web/API/HTMLInputElement) \| [`HTMLSpanElement`](https://developer.mozilla.org/docs/Web/API/HTMLSpanElement)\>

Defined in: [core/src/components/select/select.ts:133](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/select/select.ts#L133)

Retrieves navigable elements within an HTML element containing badges and the input.

#### Parameters

##### node

[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

HTMLElement that contains the badges and the input

#### Returns

`NodeListOf`\<[`HTMLInputElement`](https://developer.mozilla.org/docs/Web/API/HTMLInputElement) \| [`HTMLSpanElement`](https://developer.mozilla.org/docs/Web/API/HTMLSpanElement)\>

#### Default Value

```ts
(node: HTMLElement) => node.querySelectorAll('.au-select-badge,input')
```

***

### onFilterTextChange()

> **onFilterTextChange**(`text`): `void`

Defined in: [core/src/components/select/select.ts:157](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/select/select.ts#L157)

Callback called when the text filter change

#### Parameters

##### text

`string`

Filtered text

#### Returns

`void`

#### Default Value

```ts
() => {}
```

***

### onOpenChange()

> **onOpenChange**(`isOpen`): `void`

Defined in: [core/src/components/select/select.ts:146](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/select/select.ts#L146)

Callback called dropdown open state change

#### Parameters

##### isOpen

`boolean`

updated open state

#### Returns

`void`

#### Default Value

```ts
() => {}
```

***

### onSelectedChange()

> **onSelectedChange**(`selected`): `void`

Defined in: [core/src/components/select/select.ts:167](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/select/select.ts#L167)

Callback called when the selection change

#### Parameters

##### selected

`Item`[]

#### Returns

`void`

#### Default Value

```ts
() => {}
```
