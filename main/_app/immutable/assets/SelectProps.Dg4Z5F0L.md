Represents the properties for the Select component.

## Extends

- `SelectProps`\<`Item`\>.`SelectExtraProps`\<`Item`\>

## Type Parameters

• **Item**

The type of the items in the select component.

## Properties

### allowedPlacements

> **allowedPlacements**: `Placement`[]

List of allowed placements for the dropdown.
This refers to the [allowedPlacements from floating UI](https://floating-ui.com/docs/autoPlacement#allowedplacements), given the different [Placement possibilities](https://floating-ui.com/docs/computePosition#placement).

#### Default Value

```ts
['bottom-start', 'top-start', 'bottom-end', 'top-end']
```

#### Inherited from

`CoreProps.allowedPlacements`

#### Defined in

[core/src/components/select/select.ts:108](https://github.com/AmadeusITGroup/AgnosUI/blob/2cc7fde51b2918fc68e41eeaf4ecc8684b1460dd/core/src/components/select/select.ts#L108)

***

### ariaLabel

> **ariaLabel**: `undefined` \| `string`

aria-label used for the input inside the select

#### Default Value

`'Select'`

#### Inherited from

`CoreProps.ariaLabel`

#### Defined in

[core/src/components/select/select.ts:29](https://github.com/AmadeusITGroup/AgnosUI/blob/2cc7fde51b2918fc68e41eeaf4ecc8684b1460dd/core/src/components/select/select.ts#L29)

***

### badgeClassName

> **badgeClassName**: `string`

Class to be added on selected items (displayed in the input zone)

#### Default Value

`''`

#### Inherited from

`CoreProps.badgeClassName`

#### Defined in

[core/src/components/select/select.ts:78](https://github.com/AmadeusITGroup/AgnosUI/blob/2cc7fde51b2918fc68e41eeaf4ecc8684b1460dd/core/src/components/select/select.ts#L78)

***

### badgeLabel

> **badgeLabel**: `SlotContent`\<[`SelectItemContext`](SelectItemContext.md)\<`Item`\>\>

The template to override the way each badge on the left of the input is displayed.
This define the content of the badge inside the badge container.

#### Default Value

```ts
({itemContext}: SelectItemContext<any>) => itemContext.item
```

#### Inherited from

`SelectExtraProps.badgeLabel`

#### Defined in

[core-bootstrap/src/components/select/select.ts:37](https://github.com/AmadeusITGroup/AgnosUI/blob/2cc7fde51b2918fc68e41eeaf4ecc8684b1460dd/core-bootstrap/src/components/select/select.ts#L37)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreProps.className`

#### Defined in

[core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/2cc7fde51b2918fc68e41eeaf4ecc8684b1460dd/core/src/components/commonProps.ts#L10)

***

### disabled

> **disabled**: `boolean`

true if the select is disabled

#### Default Value

`false`

#### Inherited from

`CoreProps.disabled`

#### Defined in

[core/src/components/select/select.ts:50](https://github.com/AmadeusITGroup/AgnosUI/blob/2cc7fde51b2918fc68e41eeaf4ecc8684b1460dd/core/src/components/select/select.ts#L50)

***

### filterText

> **filterText**: `string`

Filtered text to be display in the filter input

#### Default Value

`''`

#### Inherited from

`CoreProps.filterText`

#### Defined in

[core/src/components/select/select.ts:43](https://github.com/AmadeusITGroup/AgnosUI/blob/2cc7fde51b2918fc68e41eeaf4ecc8684b1460dd/core/src/components/select/select.ts#L43)

***

### id

> **id**: `undefined` \| `string`

id used for the input inside the select

#### Inherited from

`CoreProps.id`

#### Defined in

[core/src/components/select/select.ts:22](https://github.com/AmadeusITGroup/AgnosUI/blob/2cc7fde51b2918fc68e41eeaf4ecc8684b1460dd/core/src/components/select/select.ts#L22)

***

### itemLabel

> **itemLabel**: `SlotContent`\<[`SelectItemContext`](SelectItemContext.md)\<`Item`\>\>

The template to override the way each item is displayed in the list.
This define the content of the badge inside the badge container.

#### Default Value

```ts
({itemContext}: SelectItemContext<any>) => itemContext.item
```

#### Inherited from

`SelectExtraProps.itemLabel`

#### Defined in

[core-bootstrap/src/components/select/select.ts:48](https://github.com/AmadeusITGroup/AgnosUI/blob/2cc7fde51b2918fc68e41eeaf4ecc8684b1460dd/core-bootstrap/src/components/select/select.ts#L48)

***

### items

> **items**: `Item`[]

List of available items for the dropdown

#### Default Value

`[]`

#### Inherited from

`CoreProps.items`

#### Defined in

[core/src/components/select/select.ts:97](https://github.com/AmadeusITGroup/AgnosUI/blob/2cc7fde51b2918fc68e41eeaf4ecc8684b1460dd/core/src/components/select/select.ts#L97)

***

### loading

> **loading**: `boolean`

true if a loading process is being done

#### Default Value

`false`

#### Inherited from

`CoreProps.loading`

#### Defined in

[core/src/components/select/select.ts:85](https://github.com/AmadeusITGroup/AgnosUI/blob/2cc7fde51b2918fc68e41eeaf4ecc8684b1460dd/core/src/components/select/select.ts#L85)

***

### menuClassName

> **menuClassName**: `string`

Class to be added on the dropdown menu container

#### Default Value

`''`

#### Inherited from

`CoreProps.menuClassName`

#### Defined in

[core/src/components/select/select.ts:64](https://github.com/AmadeusITGroup/AgnosUI/blob/2cc7fde51b2918fc68e41eeaf4ecc8684b1460dd/core/src/components/select/select.ts#L64)

***

### menuItemClassName

> **menuItemClassName**: `string`

Class to be added on menu items

#### Default Value

`''`

#### Inherited from

`CoreProps.menuItemClassName`

#### Defined in

[core/src/components/select/select.ts:71](https://github.com/AmadeusITGroup/AgnosUI/blob/2cc7fde51b2918fc68e41eeaf4ecc8684b1460dd/core/src/components/select/select.ts#L71)

***

### open

> **open**: `boolean`

true if the select is open

#### Default Value

`false`

#### Inherited from

`CoreProps.open`

#### Defined in

[core/src/components/select/select.ts:57](https://github.com/AmadeusITGroup/AgnosUI/blob/2cc7fde51b2918fc68e41eeaf4ecc8684b1460dd/core/src/components/select/select.ts#L57)

***

### selected

> **selected**: `Item`[]

List of selected item ids

#### Default Value

`[]`

#### Inherited from

`CoreProps.selected`

#### Defined in

[core/src/components/select/select.ts:36](https://github.com/AmadeusITGroup/AgnosUI/blob/2cc7fde51b2918fc68e41eeaf4ecc8684b1460dd/core/src/components/select/select.ts#L36)

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

#### Inherited from

`CoreProps.itemIdFn`

#### Defined in

[core/src/components/select/select.ts:119](https://github.com/AmadeusITGroup/AgnosUI/blob/2cc7fde51b2918fc68e41eeaf4ecc8684b1460dd/core/src/components/select/select.ts#L119)

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

#### Inherited from

`CoreProps.navSelector`

#### Defined in

[core/src/components/select/select.ts:131](https://github.com/AmadeusITGroup/AgnosUI/blob/2cc7fde51b2918fc68e41eeaf4ecc8684b1460dd/core/src/components/select/select.ts#L131)

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

#### Inherited from

`CoreProps.onFilterTextChange`

#### Defined in

[core/src/components/select/select.ts:155](https://github.com/AmadeusITGroup/AgnosUI/blob/2cc7fde51b2918fc68e41eeaf4ecc8684b1460dd/core/src/components/select/select.ts#L155)

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

#### Inherited from

`CoreProps.onOpenChange`

#### Defined in

[core/src/components/select/select.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/2cc7fde51b2918fc68e41eeaf4ecc8684b1460dd/core/src/components/select/select.ts#L144)

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

#### Inherited from

`CoreProps.onSelectedChange`

#### Defined in

[core/src/components/select/select.ts:165](https://github.com/AmadeusITGroup/AgnosUI/blob/2cc7fde51b2918fc68e41eeaf4ecc8684b1460dd/core/src/components/select/select.ts#L165)
