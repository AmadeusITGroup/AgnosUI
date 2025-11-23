Defined in: react/bootstrap/src/components/select/select.gen.ts:183

Represents the properties for the Select component.

## Type Parameters

### Item

`Item`

The type of the items in the select component.

## Properties

### allowedPlacements

> **allowedPlacements**: `Placement`[]

Defined in: react/bootstrap/src/components/select/select.gen.ts:202

List of allowed placements for the dropdown.
This refers to the [allowedPlacements from floating UI](https://floating-ui.com/docs/autoPlacement#allowedplacements), given the different [Placement possibilities](https://floating-ui.com/docs/computePosition#placement).

#### Default Value

```ts
['bottom-start', 'top-start', 'bottom-end', 'top-end']
```

***

### ariaLabel

> **ariaLabel**: `string` \| `undefined`

Defined in: react/bootstrap/src/components/select/select.gen.ts:277

aria-label used for the input inside the select

#### Default Value

`'Select'`

***

### badgeClassName

> **badgeClassName**: `string`

Defined in: react/bootstrap/src/components/select/select.gen.ts:333

Class to be added on selected items (displayed in the input zone)

#### Default Value

`''`

***

### badgeLabel

> **badgeLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SelectItemContext`](SelectItemContext.md)\<`Item`\>\>

Defined in: react/bootstrap/src/components/select/select.gen.ts:359

The template to override the way each badge on the left of the input is displayed.
This define the content of the badge inside the badge container.

#### Default Value

```ts
({itemContext}: SelectItemContext<any>) => itemContext.item
```

***

### className

> **className**: `string`

Defined in: react/bootstrap/src/components/select/select.gen.ts:348

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### disabled

> **disabled**: `boolean`

Defined in: react/bootstrap/src/components/select/select.gen.ts:301

true if the select is disabled

#### Default Value

`false`

***

### filterText

> **filterText**: `string`

Defined in: react/bootstrap/src/components/select/select.gen.ts:293

Filtered text to be display in the filter input

#### Default Value

`''`

***

### id

> **id**: `string` \| `undefined`

Defined in: react/bootstrap/src/components/select/select.gen.ts:269

id used for the input inside the select

***

### itemLabel

> **itemLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SelectItemContext`](SelectItemContext.md)\<`Item`\>\>

Defined in: react/bootstrap/src/components/select/select.gen.ts:371

The template to override the way each item is displayed in the list.
This define the content of the badge inside the badge container.

#### Default Value

```ts
({itemContext}: SelectItemContext<any>) => itemContext.item
```

***

### items

> **items**: `Item`[]

Defined in: react/bootstrap/src/components/select/select.gen.ts:190

List of available items for the dropdown

#### Default Value

`[]`

***

### loading

> **loading**: `boolean`

Defined in: react/bootstrap/src/components/select/select.gen.ts:341

true if a loading process is being done

#### Default Value

`false`

***

### menuClassName

> **menuClassName**: `string`

Defined in: react/bootstrap/src/components/select/select.gen.ts:317

Class to be added on the dropdown menu container

#### Default Value

`''`

***

### menuItemClassName

> **menuItemClassName**: `string`

Defined in: react/bootstrap/src/components/select/select.gen.ts:325

Class to be added on menu items

#### Default Value

`''`

***

### open

> **open**: `boolean`

Defined in: react/bootstrap/src/components/select/select.gen.ts:309

true if the select is open

#### Default Value

`false`

***

### selected

> **selected**: `Item`[]

Defined in: react/bootstrap/src/components/select/select.gen.ts:285

List of selected item ids

#### Default Value

`[]`

## Methods

### itemIdFn()

> **itemIdFn**(`item`): `string`

Defined in: react/bootstrap/src/components/select/select.gen.ts:214

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

Defined in: react/bootstrap/src/components/select/select.gen.ts:227

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

Defined in: react/bootstrap/src/components/select/select.gen.ts:253

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

Defined in: react/bootstrap/src/components/select/select.gen.ts:241

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

Defined in: react/bootstrap/src/components/select/select.gen.ts:264

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
