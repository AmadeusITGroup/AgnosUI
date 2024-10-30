Represents the state of a Select component.

## Extends

- `SelectState`\<`Item`\>.`SelectExtraProps`\<`Item`\>

## Type Parameters

• **Item**

The type of the items in the select component.

## Properties

### ariaLabel

> **ariaLabel**: `undefined` \| `string`

aria-label used for the input inside the select

#### Default Value

`'Select'`

#### Inherited from

`CoreState.ariaLabel`

#### Defined in

[core/src/components/select/select.ts:29](https://github.com/AmadeusITGroup/AgnosUI/blob/788534989d91b08024260ce80e1bc5b131d238a7/core/src/components/select/select.ts#L29)

***

### badgeClassName

> **badgeClassName**: `string`

Class to be added on selected items (displayed in the input zone)

#### Default Value

`''`

#### Inherited from

`CoreState.badgeClassName`

#### Defined in

[core/src/components/select/select.ts:78](https://github.com/AmadeusITGroup/AgnosUI/blob/788534989d91b08024260ce80e1bc5b131d238a7/core/src/components/select/select.ts#L78)

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

[core-bootstrap/src/components/select/select.ts:37](https://github.com/AmadeusITGroup/AgnosUI/blob/788534989d91b08024260ce80e1bc5b131d238a7/core-bootstrap/src/components/select/select.ts#L37)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreState.className`

#### Defined in

[core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/788534989d91b08024260ce80e1bc5b131d238a7/core/src/components/commonProps.ts#L10)

***

### disabled

> **disabled**: `boolean`

true if the select is disabled

#### Default Value

`false`

#### Inherited from

`CoreState.disabled`

#### Defined in

[core/src/components/select/select.ts:50](https://github.com/AmadeusITGroup/AgnosUI/blob/788534989d91b08024260ce80e1bc5b131d238a7/core/src/components/select/select.ts#L50)

***

### filterText

> **filterText**: `string`

Filtered text to be display in the filter input

#### Default Value

`''`

#### Inherited from

`CoreState.filterText`

#### Defined in

[core/src/components/select/select.ts:43](https://github.com/AmadeusITGroup/AgnosUI/blob/788534989d91b08024260ce80e1bc5b131d238a7/core/src/components/select/select.ts#L43)

***

### highlighted

> **highlighted**: `undefined` \| [`ItemContext`](ItemContext.md)\<`Item`\>

Highlighted item context.
It is designed to define the highlighted item in the dropdown menu

#### Inherited from

`CoreState.highlighted`

#### Defined in

[core/src/components/select/select.ts:206](https://github.com/AmadeusITGroup/AgnosUI/blob/788534989d91b08024260ce80e1bc5b131d238a7/core/src/components/select/select.ts#L206)

***

### id

> **id**: `undefined` \| `string`

id used for the input inside the select

#### Inherited from

`CoreState.id`

#### Defined in

[core/src/components/select/select.ts:22](https://github.com/AmadeusITGroup/AgnosUI/blob/788534989d91b08024260ce80e1bc5b131d238a7/core/src/components/select/select.ts#L22)

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

[core-bootstrap/src/components/select/select.ts:48](https://github.com/AmadeusITGroup/AgnosUI/blob/788534989d91b08024260ce80e1bc5b131d238a7/core-bootstrap/src/components/select/select.ts#L48)

***

### loading

> **loading**: `boolean`

true if a loading process is being done

#### Default Value

`false`

#### Inherited from

`CoreState.loading`

#### Defined in

[core/src/components/select/select.ts:85](https://github.com/AmadeusITGroup/AgnosUI/blob/788534989d91b08024260ce80e1bc5b131d238a7/core/src/components/select/select.ts#L85)

***

### menuClassName

> **menuClassName**: `string`

Class to be added on the dropdown menu container

#### Default Value

`''`

#### Inherited from

`CoreState.menuClassName`

#### Defined in

[core/src/components/select/select.ts:64](https://github.com/AmadeusITGroup/AgnosUI/blob/788534989d91b08024260ce80e1bc5b131d238a7/core/src/components/select/select.ts#L64)

***

### menuItemClassName

> **menuItemClassName**: `string`

Class to be added on menu items

#### Default Value

`''`

#### Inherited from

`CoreState.menuItemClassName`

#### Defined in

[core/src/components/select/select.ts:71](https://github.com/AmadeusITGroup/AgnosUI/blob/788534989d91b08024260ce80e1bc5b131d238a7/core/src/components/select/select.ts#L71)

***

### open

> **open**: `boolean`

true if the select is open

#### Default Value

`false`

#### Inherited from

`CoreState.open`

#### Defined in

[core/src/components/select/select.ts:57](https://github.com/AmadeusITGroup/AgnosUI/blob/788534989d91b08024260ce80e1bc5b131d238a7/core/src/components/select/select.ts#L57)

***

### placement

> **placement**: `undefined` \| `Placement`

Current placement of the dropdown

#### Inherited from

`CoreState.placement`

#### Defined in

[core/src/components/select/select.ts:211](https://github.com/AmadeusITGroup/AgnosUI/blob/788534989d91b08024260ce80e1bc5b131d238a7/core/src/components/select/select.ts#L211)

***

### selected

> **selected**: `Item`[]

List of selected item ids

#### Default Value

`[]`

#### Inherited from

`CoreState.selected`

#### Defined in

[core/src/components/select/select.ts:36](https://github.com/AmadeusITGroup/AgnosUI/blob/788534989d91b08024260ce80e1bc5b131d238a7/core/src/components/select/select.ts#L36)

***

### selectedContexts

> **selectedContexts**: [`ItemContext`](ItemContext.md)\<`Item`\>[]

List of selected items to be display

#### Inherited from

`CoreState.selectedContexts`

#### Defined in

[core/src/components/select/select.ts:200](https://github.com/AmadeusITGroup/AgnosUI/blob/788534989d91b08024260ce80e1bc5b131d238a7/core/src/components/select/select.ts#L200)

***

### visibleItems

> **visibleItems**: [`ItemContext`](ItemContext.md)\<`Item`\>[]

List of item contexts, to be displayed in the menu

#### Inherited from

`CoreState.visibleItems`

#### Defined in

[core/src/components/select/select.ts:195](https://github.com/AmadeusITGroup/AgnosUI/blob/788534989d91b08024260ce80e1bc5b131d238a7/core/src/components/select/select.ts#L195)