## Extends

- `SelectCommonPropsAndState`\<`Item`\>

## Type Parameters

• **Item**

## Properties

### ariaLabel

> **ariaLabel**: `undefined` \| `string`

aria-label used for the input inside the select

#### Default Value

`'Select'`

#### Inherited from

`SelectCommonPropsAndState.ariaLabel`

#### Defined in

[core/src/components/select/select.ts:29](https://github.com/AmadeusITGroup/AgnosUI/blob/12207af9f71e5a27943fe31e2815ffb99aa90915/core/src/components/select/select.ts#L29)

***

### badgeClassName

> **badgeClassName**: `string`

Class to be added on selected items (displayed in the input zone)

#### Default Value

`''`

#### Inherited from

`SelectCommonPropsAndState.badgeClassName`

#### Defined in

[core/src/components/select/select.ts:78](https://github.com/AmadeusITGroup/AgnosUI/blob/12207af9f71e5a27943fe31e2815ffb99aa90915/core/src/components/select/select.ts#L78)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`SelectCommonPropsAndState.className`

#### Defined in

[core/src/components/commonProps.ts:7](https://github.com/AmadeusITGroup/AgnosUI/blob/12207af9f71e5a27943fe31e2815ffb99aa90915/core/src/components/commonProps.ts#L7)

***

### disabled

> **disabled**: `boolean`

true if the select is disabled

#### Default Value

`false`

#### Inherited from

`SelectCommonPropsAndState.disabled`

#### Defined in

[core/src/components/select/select.ts:50](https://github.com/AmadeusITGroup/AgnosUI/blob/12207af9f71e5a27943fe31e2815ffb99aa90915/core/src/components/select/select.ts#L50)

***

### filterText

> **filterText**: `string`

Filtered text to be display in the filter input

#### Default Value

`''`

#### Inherited from

`SelectCommonPropsAndState.filterText`

#### Defined in

[core/src/components/select/select.ts:43](https://github.com/AmadeusITGroup/AgnosUI/blob/12207af9f71e5a27943fe31e2815ffb99aa90915/core/src/components/select/select.ts#L43)

***

### highlighted

> **highlighted**: `undefined` \| [`ItemContext`](ItemContext.md)\<`Item`\>

Highlighted item context.
It is designed to define the highlighted item in the dropdown menu

#### Defined in

[core/src/components/select/select.ts:200](https://github.com/AmadeusITGroup/AgnosUI/blob/12207af9f71e5a27943fe31e2815ffb99aa90915/core/src/components/select/select.ts#L200)

***

### id

> **id**: `undefined` \| `string`

id used for the input inside the select

#### Inherited from

`SelectCommonPropsAndState.id`

#### Defined in

[core/src/components/select/select.ts:22](https://github.com/AmadeusITGroup/AgnosUI/blob/12207af9f71e5a27943fe31e2815ffb99aa90915/core/src/components/select/select.ts#L22)

***

### loading

> **loading**: `boolean`

true if a loading process is being done

#### Default Value

`false`

#### Inherited from

`SelectCommonPropsAndState.loading`

#### Defined in

[core/src/components/select/select.ts:85](https://github.com/AmadeusITGroup/AgnosUI/blob/12207af9f71e5a27943fe31e2815ffb99aa90915/core/src/components/select/select.ts#L85)

***

### menuClassName

> **menuClassName**: `string`

Class to be added on the dropdown menu container

#### Default Value

`''`

#### Inherited from

`SelectCommonPropsAndState.menuClassName`

#### Defined in

[core/src/components/select/select.ts:64](https://github.com/AmadeusITGroup/AgnosUI/blob/12207af9f71e5a27943fe31e2815ffb99aa90915/core/src/components/select/select.ts#L64)

***

### menuItemClassName

> **menuItemClassName**: `string`

Class to be added on menu items

#### Default Value

`''`

#### Inherited from

`SelectCommonPropsAndState.menuItemClassName`

#### Defined in

[core/src/components/select/select.ts:71](https://github.com/AmadeusITGroup/AgnosUI/blob/12207af9f71e5a27943fe31e2815ffb99aa90915/core/src/components/select/select.ts#L71)

***

### open

> **open**: `boolean`

true if the select is open

#### Default Value

`false`

#### Inherited from

`SelectCommonPropsAndState.open`

#### Defined in

[core/src/components/select/select.ts:57](https://github.com/AmadeusITGroup/AgnosUI/blob/12207af9f71e5a27943fe31e2815ffb99aa90915/core/src/components/select/select.ts#L57)

***

### placement

> **placement**: `undefined` \| `Placement`

Current placement of the dropdown

#### Defined in

[core/src/components/select/select.ts:205](https://github.com/AmadeusITGroup/AgnosUI/blob/12207af9f71e5a27943fe31e2815ffb99aa90915/core/src/components/select/select.ts#L205)

***

### selected

> **selected**: `Item`[]

List of selected item ids

#### Default Value

`[]`

#### Inherited from

`SelectCommonPropsAndState.selected`

#### Defined in

[core/src/components/select/select.ts:36](https://github.com/AmadeusITGroup/AgnosUI/blob/12207af9f71e5a27943fe31e2815ffb99aa90915/core/src/components/select/select.ts#L36)

***

### selectedContexts

> **selectedContexts**: [`ItemContext`](ItemContext.md)\<`Item`\>[]

List of selected items to be display

#### Defined in

[core/src/components/select/select.ts:194](https://github.com/AmadeusITGroup/AgnosUI/blob/12207af9f71e5a27943fe31e2815ffb99aa90915/core/src/components/select/select.ts#L194)

***

### visibleItems

> **visibleItems**: [`ItemContext`](ItemContext.md)\<`Item`\>[]

List of item contexts, to be displayed in the menu

#### Defined in

[core/src/components/select/select.ts:189](https://github.com/AmadeusITGroup/AgnosUI/blob/12207af9f71e5a27943fe31e2815ffb99aa90915/core/src/components/select/select.ts#L189)
