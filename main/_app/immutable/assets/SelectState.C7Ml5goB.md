Defined in: [core-bootstrap/src/components/select/select.ts:56](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core-bootstrap/src/components/select/select.ts#L56)

Represents the state of a Select component.

## Extends

- `SelectState`\<`Item`\>.`SelectExtraProps`\<`Item`\>

## Type Parameters

### Item

`Item`

The type of the items in the select component.

## Properties

### ariaLabel

> **ariaLabel**: `undefined` \| `string`

Defined in: [core/src/components/select/select.ts:30](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/select/select.ts#L30)

aria-label used for the input inside the select

#### Default Value

`'Select'`

#### Inherited from

`CoreState.ariaLabel`

***

### badgeClassName

> **badgeClassName**: `string`

Defined in: [core/src/components/select/select.ts:79](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/select/select.ts#L79)

Class to be added on selected items (displayed in the input zone)

#### Default Value

`''`

#### Inherited from

`CoreState.badgeClassName`

***

### badgeLabel

> **badgeLabel**: `SlotContent`\<[`SelectItemContext`](SelectItemContext.md)\<`Item`\>\>

Defined in: [core-bootstrap/src/components/select/select.ts:37](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core-bootstrap/src/components/select/select.ts#L37)

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

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreState.className`

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/select/select.ts:51](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/select/select.ts#L51)

true if the select is disabled

#### Default Value

`false`

#### Inherited from

`CoreState.disabled`

***

### filterText

> **filterText**: `string`

Defined in: [core/src/components/select/select.ts:44](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/select/select.ts#L44)

Filtered text to be display in the filter input

#### Default Value

`''`

#### Inherited from

`CoreState.filterText`

***

### highlighted

> **highlighted**: `undefined` \| [`ItemContext`](ItemContext.md)\<`Item`\>

Defined in: [core/src/components/select/select.ts:213](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/select/select.ts#L213)

Highlighted item context.
It is designed to define the highlighted item in the dropdown menu

#### Inherited from

`CoreState.highlighted`

***

### id

> **id**: `undefined` \| `string`

Defined in: [core/src/components/select/select.ts:23](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/select/select.ts#L23)

id used for the input inside the select

#### Inherited from

`CoreState.id`

***

### itemLabel

> **itemLabel**: `SlotContent`\<[`SelectItemContext`](SelectItemContext.md)\<`Item`\>\>

Defined in: [core-bootstrap/src/components/select/select.ts:48](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core-bootstrap/src/components/select/select.ts#L48)

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

Defined in: [core/src/components/select/select.ts:86](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/select/select.ts#L86)

true if a loading process is being done

#### Default Value

`false`

#### Inherited from

`CoreState.loading`

***

### menuClassName

> **menuClassName**: `string`

Defined in: [core/src/components/select/select.ts:65](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/select/select.ts#L65)

Class to be added on the dropdown menu container

#### Default Value

`''`

#### Inherited from

`CoreState.menuClassName`

***

### menuItemClassName

> **menuItemClassName**: `string`

Defined in: [core/src/components/select/select.ts:72](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/select/select.ts#L72)

Class to be added on menu items

#### Default Value

`''`

#### Inherited from

`CoreState.menuItemClassName`

***

### open

> **open**: `boolean`

Defined in: [core/src/components/select/select.ts:58](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/select/select.ts#L58)

true if the select is open

#### Default Value

`false`

#### Inherited from

`CoreState.open`

***

### placement

> **placement**: `undefined` \| `Placement`

Defined in: [core/src/components/select/select.ts:218](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/select/select.ts#L218)

Current placement of the dropdown

#### Inherited from

`CoreState.placement`

***

### selected

> **selected**: `Item`[]

Defined in: [core/src/components/select/select.ts:37](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/select/select.ts#L37)

List of selected item ids

#### Default Value

`[]`

#### Inherited from

`CoreState.selected`

***

### selectedContexts

> **selectedContexts**: [`ItemContext`](ItemContext.md)\<`Item`\>[]

Defined in: [core/src/components/select/select.ts:207](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/select/select.ts#L207)

List of selected items to be display

#### Inherited from

`CoreState.selectedContexts`

***

### visibleItems

> **visibleItems**: [`ItemContext`](ItemContext.md)\<`Item`\>[]

Defined in: [core/src/components/select/select.ts:202](https://github.com/AmadeusITGroup/AgnosUI/blob/87b395d41c2e1791e1f7b2fd2da23b3fafc5dfc7/core/src/components/select/select.ts#L202)

List of item contexts, to be displayed in the menu

#### Inherited from

`CoreState.visibleItems`
