Defined in: [core-bootstrap/src/components/select/select.ts:62](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core-bootstrap/src/components/select/select.ts#L62)

Represents the properties for the Select component.

## Extends

- `SelectProps`\<`Item`\>.`SelectExtraProps`\<`Item`\>

## Type Parameters

• **Item**

The type of the items in the select component.

## Properties

### allowedPlacements

> **allowedPlacements**: `Placement`[]

Defined in: [core/src/components/select/select.ts:110](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/select/select.ts#L110)

List of allowed placements for the dropdown.
This refers to the [allowedPlacements from floating UI](https://floating-ui.com/docs/autoPlacement#allowedplacements), given the different [Placement possibilities](https://floating-ui.com/docs/computePosition#placement).

#### Default Value

```ts
['bottom-start', 'top-start', 'bottom-end', 'top-end']
```

#### Inherited from

`CoreProps.allowedPlacements`

***

### ariaLabel

> **ariaLabel**: `undefined` \| `string`

Defined in: [core/src/components/select/select.ts:29](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/select/select.ts#L29)

aria-label used for the input inside the select

#### Default Value

`'Select'`

#### Inherited from

`CoreProps.ariaLabel`

***

### badgeClassName

> **badgeClassName**: `string`

Defined in: [core/src/components/select/select.ts:78](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/select/select.ts#L78)

Class to be added on selected items (displayed in the input zone)

#### Default Value

`''`

#### Inherited from

`CoreProps.badgeClassName`

***

### badgeLabel

> **badgeLabel**: `SlotContent`\<[`SelectItemContext`](SelectItemContext.md)\<`Item`\>\>

Defined in: [core-bootstrap/src/components/select/select.ts:37](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core-bootstrap/src/components/select/select.ts#L37)

The template to override the way each badge on the left of the input is displayed.
This define the content of the badge inside the badge container.

#### Default Value

```ts
({itemContext}: SelectItemContext<any>) => itemContext.item
```

#### Inherited from

`SelectExtraProps.badgeLabel`

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreProps.className`

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/select/select.ts:50](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/select/select.ts#L50)

true if the select is disabled

#### Default Value

`false`

#### Inherited from

`CoreProps.disabled`

***

### filterText

> **filterText**: `string`

Defined in: [core/src/components/select/select.ts:43](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/select/select.ts#L43)

Filtered text to be display in the filter input

#### Default Value

`''`

#### Inherited from

`CoreProps.filterText`

***

### id

> **id**: `undefined` \| `string`

Defined in: [core/src/components/select/select.ts:22](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/select/select.ts#L22)

id used for the input inside the select

#### Inherited from

`CoreProps.id`

***

### itemLabel

> **itemLabel**: `SlotContent`\<[`SelectItemContext`](SelectItemContext.md)\<`Item`\>\>

Defined in: [core-bootstrap/src/components/select/select.ts:48](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core-bootstrap/src/components/select/select.ts#L48)

The template to override the way each item is displayed in the list.
This define the content of the badge inside the badge container.

#### Default Value

```ts
({itemContext}: SelectItemContext<any>) => itemContext.item
```

#### Inherited from

`SelectExtraProps.itemLabel`

***

### items

> **items**: `Item`[]

Defined in: [core/src/components/select/select.ts:99](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/select/select.ts#L99)

List of available items for the dropdown

#### Default Value

`[]`

#### Inherited from

`CoreProps.items`

***

### loading

> **loading**: `boolean`

Defined in: [core/src/components/select/select.ts:85](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/select/select.ts#L85)

true if a loading process is being done

#### Default Value

`false`

#### Inherited from

`CoreProps.loading`

***

### menuClassName

> **menuClassName**: `string`

Defined in: [core/src/components/select/select.ts:64](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/select/select.ts#L64)

Class to be added on the dropdown menu container

#### Default Value

`''`

#### Inherited from

`CoreProps.menuClassName`

***

### menuItemClassName

> **menuItemClassName**: `string`

Defined in: [core/src/components/select/select.ts:71](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/select/select.ts#L71)

Class to be added on menu items

#### Default Value

`''`

#### Inherited from

`CoreProps.menuItemClassName`

***

### open

> **open**: `boolean`

Defined in: [core/src/components/select/select.ts:57](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/select/select.ts#L57)

true if the select is open

#### Default Value

`false`

#### Inherited from

`CoreProps.open`

***

### selected

> **selected**: `Item`[]

Defined in: [core/src/components/select/select.ts:36](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/select/select.ts#L36)

List of selected item ids

#### Default Value

`[]`

#### Inherited from

`CoreProps.selected`

## Methods

### itemIdFn()

> **itemIdFn**(`item`): `string`

Defined in: [core/src/components/select/select.ts:121](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/select/select.ts#L121)

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

#### Inherited from

`CoreProps.itemIdFn`

***

### navSelector()

> **navSelector**(`node`): `NodeListOf`\<[`HTMLInputElement`](https://developer.mozilla.org/docs/Web/API/HTMLInputElement) \| [`HTMLSpanElement`](https://developer.mozilla.org/docs/Web/API/HTMLSpanElement)\>

Defined in: [core/src/components/select/select.ts:133](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/select/select.ts#L133)

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

#### Inherited from

`CoreProps.navSelector`

***

### onFilterTextChange()

> **onFilterTextChange**(`text`): `void`

Defined in: [core/src/components/select/select.ts:157](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/select/select.ts#L157)

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

#### Inherited from

`CoreProps.onFilterTextChange`

***

### onOpenChange()

> **onOpenChange**(`isOpen`): `void`

Defined in: [core/src/components/select/select.ts:146](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/select/select.ts#L146)

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

#### Inherited from

`CoreProps.onOpenChange`

***

### onSelectedChange()

> **onSelectedChange**(`selected`): `void`

Defined in: [core/src/components/select/select.ts:167](https://github.com/AmadeusITGroup/AgnosUI/blob/3fa400bd0f8680b02e9b20ac40c5497451c27036/core/src/components/select/select.ts#L167)

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

#### Inherited from

`CoreProps.onSelectedChange`
