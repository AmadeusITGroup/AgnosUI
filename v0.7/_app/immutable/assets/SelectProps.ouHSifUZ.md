Represents the properties for the Select component.

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

#### Defined in

react/bootstrap/src/components/select/select.gen.ts:202

***

### ariaLabel

> **ariaLabel**: `undefined` \| `string`

aria-label used for the input inside the select

#### Default Value

`'Select'`

#### Defined in

react/bootstrap/src/components/select/select.gen.ts:277

***

### badgeClassName

> **badgeClassName**: `string`

Class to be added on selected items (displayed in the input zone)

#### Default Value

`''`

#### Defined in

react/bootstrap/src/components/select/select.gen.ts:333

***

### badgeLabel

> **badgeLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SelectItemContext`](SelectItemContext.md)\<`Item`\>\>

The template to override the way each badge on the left of the input is displayed.
This define the content of the badge inside the badge container.

#### Default Value

```ts
({itemContext}: SelectItemContext<any>) => itemContext.item
```

#### Defined in

react/bootstrap/src/components/select/select.gen.ts:359

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

react/bootstrap/src/components/select/select.gen.ts:348

***

### disabled

> **disabled**: `boolean`

true if the select is disabled

#### Default Value

`false`

#### Defined in

react/bootstrap/src/components/select/select.gen.ts:301

***

### filterText

> **filterText**: `string`

Filtered text to be display in the filter input

#### Default Value

`''`

#### Defined in

react/bootstrap/src/components/select/select.gen.ts:293

***

### id

> **id**: `undefined` \| `string`

id used for the input inside the select

#### Defined in

react/bootstrap/src/components/select/select.gen.ts:269

***

### itemLabel

> **itemLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SelectItemContext`](SelectItemContext.md)\<`Item`\>\>

The template to override the way each item is displayed in the list.
This define the content of the badge inside the badge container.

#### Default Value

```ts
({itemContext}: SelectItemContext<any>) => itemContext.item
```

#### Defined in

react/bootstrap/src/components/select/select.gen.ts:371

***

### items

> **items**: `Item`[]

List of available items for the dropdown

#### Default Value

`[]`

#### Defined in

react/bootstrap/src/components/select/select.gen.ts:190

***

### loading

> **loading**: `boolean`

true if a loading process is being done

#### Default Value

`false`

#### Defined in

react/bootstrap/src/components/select/select.gen.ts:341

***

### menuClassName

> **menuClassName**: `string`

Class to be added on the dropdown menu container

#### Default Value

`''`

#### Defined in

react/bootstrap/src/components/select/select.gen.ts:317

***

### menuItemClassName

> **menuItemClassName**: `string`

Class to be added on menu items

#### Default Value

`''`

#### Defined in

react/bootstrap/src/components/select/select.gen.ts:325

***

### open

> **open**: `boolean`

true if the select is open

#### Default Value

`false`

#### Defined in

react/bootstrap/src/components/select/select.gen.ts:309

***

### selected

> **selected**: `Item`[]

List of selected item ids

#### Default Value

`[]`

#### Defined in

react/bootstrap/src/components/select/select.gen.ts:285

## Methods

### itemIdFn()

> **itemIdFn**(`item`): `string`

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

#### Defined in

react/bootstrap/src/components/select/select.gen.ts:214

***

### navSelector()

> **navSelector**(`node`): `NodeListOf`\<[`HTMLInputElement`](https://developer.mozilla.org/docs/Web/API/HTMLInputElement) \| [`HTMLSpanElement`](https://developer.mozilla.org/docs/Web/API/HTMLSpanElement)\>

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

#### Defined in

react/bootstrap/src/components/select/select.gen.ts:227

***

### onFilterTextChange()

> **onFilterTextChange**(`text`): `void`

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

#### Defined in

react/bootstrap/src/components/select/select.gen.ts:253

***

### onOpenChange()

> **onOpenChange**(`isOpen`): `void`

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

#### Defined in

react/bootstrap/src/components/select/select.gen.ts:241

***

### onSelectedChange()

> **onSelectedChange**(`selected`): `void`

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

#### Defined in

react/bootstrap/src/components/select/select.gen.ts:264
