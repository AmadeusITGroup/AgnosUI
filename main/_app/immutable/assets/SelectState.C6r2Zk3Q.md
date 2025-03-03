Defined in: [core-bootstrap/src/components/select/select.ts:56](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/core-bootstrap/src/components/select/select.ts#L56)

Represents the state of a Select component.

## Extends

- `SelectState`\<`Item`\>.`SelectExtraProps`\<`Item`\>

## Type Parameters

• **Item**

The type of the items in the select component.

## Properties

### ariaLabel

> **ariaLabel**: `undefined` \| `string`

Defined in: [core/src/components/select/select.ts:29](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/core/src/components/select/select.ts#L29)

aria-label used for the input inside the select

#### Default Value

`'Select'`

#### Inherited from

`CoreState.ariaLabel`

***

### badgeClassName

> **badgeClassName**: `string`

Defined in: [core/src/components/select/select.ts:78](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/core/src/components/select/select.ts#L78)

Class to be added on selected items (displayed in the input zone)

#### Default Value

`''`

#### Inherited from

`CoreState.badgeClassName`

***

### badgeLabel

> **badgeLabel**: `SlotContent`\<[`SelectItemContext`](SelectItemContext.md)\<`Item`\>\>

Defined in: [core-bootstrap/src/components/select/select.ts:37](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/core-bootstrap/src/components/select/select.ts#L37)

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

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreState.className`

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/select/select.ts:50](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/core/src/components/select/select.ts#L50)

true if the select is disabled

#### Default Value

`false`

#### Inherited from

`CoreState.disabled`

***

### filterText

> **filterText**: `string`

Defined in: [core/src/components/select/select.ts:43](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/core/src/components/select/select.ts#L43)

Filtered text to be display in the filter input

#### Default Value

`''`

#### Inherited from

`CoreState.filterText`

***

### highlighted

> **highlighted**: `undefined` \| [`ItemContext`](ItemContext.md)\<`Item`\>

Defined in: [core/src/components/select/select.ts:212](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/core/src/components/select/select.ts#L212)

Highlighted item context.
It is designed to define the highlighted item in the dropdown menu

#### Inherited from

`CoreState.highlighted`

***

### id

> **id**: `undefined` \| `string`

Defined in: [core/src/components/select/select.ts:22](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/core/src/components/select/select.ts#L22)

id used for the input inside the select

#### Inherited from

`CoreState.id`

***

### itemLabel

> **itemLabel**: `SlotContent`\<[`SelectItemContext`](SelectItemContext.md)\<`Item`\>\>

Defined in: [core-bootstrap/src/components/select/select.ts:48](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/core-bootstrap/src/components/select/select.ts#L48)

The template to override the way each item is displayed in the list.
This define the content of the badge inside the badge container.

#### Default Value

```ts
({itemContext}: SelectItemContext<any>) => itemContext.item
```

#### Inherited from

`SelectExtraProps.itemLabel`

***

### loading

> **loading**: `boolean`

Defined in: [core/src/components/select/select.ts:85](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/core/src/components/select/select.ts#L85)

true if a loading process is being done

#### Default Value

`false`

#### Inherited from

`CoreState.loading`

***

### menuClassName

> **menuClassName**: `string`

Defined in: [core/src/components/select/select.ts:64](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/core/src/components/select/select.ts#L64)

Class to be added on the dropdown menu container

#### Default Value

`''`

#### Inherited from

`CoreState.menuClassName`

***

### menuItemClassName

> **menuItemClassName**: `string`

Defined in: [core/src/components/select/select.ts:71](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/core/src/components/select/select.ts#L71)

Class to be added on menu items

#### Default Value

`''`

#### Inherited from

`CoreState.menuItemClassName`

***

### open

> **open**: `boolean`

Defined in: [core/src/components/select/select.ts:57](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/core/src/components/select/select.ts#L57)

true if the select is open

#### Default Value

`false`

#### Inherited from

`CoreState.open`

***

### placement

> **placement**: `undefined` \| `Placement`

Defined in: [core/src/components/select/select.ts:217](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/core/src/components/select/select.ts#L217)

Current placement of the dropdown

#### Inherited from

`CoreState.placement`

***

### selected

> **selected**: `Item`[]

Defined in: [core/src/components/select/select.ts:36](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/core/src/components/select/select.ts#L36)

List of selected item ids

#### Default Value

`[]`

#### Inherited from

`CoreState.selected`

***

### selectedContexts

> **selectedContexts**: [`ItemContext`](ItemContext.md)\<`Item`\>[]

Defined in: [core/src/components/select/select.ts:206](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/core/src/components/select/select.ts#L206)

List of selected items to be display

#### Inherited from

`CoreState.selectedContexts`

***

### visibleItems

> **visibleItems**: [`ItemContext`](ItemContext.md)\<`Item`\>[]

Defined in: [core/src/components/select/select.ts:201](https://github.com/AmadeusITGroup/AgnosUI/blob/da05d35179fb6b1814dc3da6ae576a9978e2f00f/core/src/components/select/select.ts#L201)

List of item contexts, to be displayed in the menu

#### Inherited from

`CoreState.visibleItems`
