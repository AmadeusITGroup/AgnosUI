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

angular/bootstrap/src/components/select/select.gen.ts:183

***

### ariaLabel

> **ariaLabel**: `undefined` \| `string`

aria-label used for the input inside the select

#### Default Value

`'Select'`

#### Defined in

angular/bootstrap/src/components/select/select.gen.ts:258

***

### badgeClassName

> **badgeClassName**: `string`

Class to be added on selected items (displayed in the input zone)

#### Default Value

`''`

#### Defined in

angular/bootstrap/src/components/select/select.gen.ts:314

***

### badgeLabel

> **badgeLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SelectItemContext`](../type-aliases/SelectItemContext.md)\<`Item`\>\>

The template to override the way each badge on the left of the input is displayed.
This define the content of the badge inside the badge container.

#### Default Value

```ts
({itemContext}: SelectItemContext<any>) => itemContext.item
```

#### Defined in

angular/bootstrap/src/components/select/select.gen.ts:340

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

angular/bootstrap/src/components/select/select.gen.ts:329

***

### disabled

> **disabled**: `boolean`

true if the select is disabled

#### Default Value

`false`

#### Defined in

angular/bootstrap/src/components/select/select.gen.ts:282

***

### filterText

> **filterText**: `string`

Filtered text to be display in the filter input

#### Default Value

`''`

#### Defined in

angular/bootstrap/src/components/select/select.gen.ts:274

***

### id

> **id**: `undefined` \| `string`

id used for the input inside the select

#### Defined in

angular/bootstrap/src/components/select/select.gen.ts:250

***

### itemLabel

> **itemLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SelectItemContext`](../type-aliases/SelectItemContext.md)\<`Item`\>\>

The template to override the way each item is displayed in the list.
This define the content of the badge inside the badge container.

#### Default Value

```ts
({itemContext}: SelectItemContext<any>) => itemContext.item
```

#### Defined in

angular/bootstrap/src/components/select/select.gen.ts:352

***

### items

> **items**: `Item`[]

List of available items for the dropdown

#### Default Value

`[]`

#### Defined in

angular/bootstrap/src/components/select/select.gen.ts:171

***

### loading

> **loading**: `boolean`

true if a loading process is being done

#### Default Value

`false`

#### Defined in

angular/bootstrap/src/components/select/select.gen.ts:322

***

### menuClassName

> **menuClassName**: `string`

Class to be added on the dropdown menu container

#### Default Value

`''`

#### Defined in

angular/bootstrap/src/components/select/select.gen.ts:298

***

### menuItemClassName

> **menuItemClassName**: `string`

Class to be added on menu items

#### Default Value

`''`

#### Defined in

angular/bootstrap/src/components/select/select.gen.ts:306

***

### open

> **open**: `boolean`

true if the select is open

#### Default Value

`false`

#### Defined in

angular/bootstrap/src/components/select/select.gen.ts:290

***

### selected

> **selected**: `Item`[]

List of selected item ids

#### Default Value

`[]`

#### Defined in

angular/bootstrap/src/components/select/select.gen.ts:266

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

angular/bootstrap/src/components/select/select.gen.ts:195

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

angular/bootstrap/src/components/select/select.gen.ts:208

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

angular/bootstrap/src/components/select/select.gen.ts:234

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

angular/bootstrap/src/components/select/select.gen.ts:222

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

angular/bootstrap/src/components/select/select.gen.ts:245
