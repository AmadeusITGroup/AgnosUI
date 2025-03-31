Defined in: [core/src/components/select/select.ts:197](https://github.com/AmadeusITGroup/AgnosUI/blob/fa99e689700463313172588f6028f9e2e06e86ae/core/src/components/select/select.ts#L197)

Represents the state of a Select component.

## Extends

- `SelectCommonPropsAndState`\<`Item`\>

## Type Parameters

### Item

`Item`

The type of the Select Items

## Properties

### ariaLabel

> **ariaLabel**: `undefined` \| `string`

Defined in: [core/src/components/select/select.ts:29](https://github.com/AmadeusITGroup/AgnosUI/blob/fa99e689700463313172588f6028f9e2e06e86ae/core/src/components/select/select.ts#L29)

aria-label used for the input inside the select

#### Default Value

`'Select'`

#### Inherited from

`SelectCommonPropsAndState.ariaLabel`

***

### badgeClassName

> **badgeClassName**: `string`

Defined in: [core/src/components/select/select.ts:78](https://github.com/AmadeusITGroup/AgnosUI/blob/fa99e689700463313172588f6028f9e2e06e86ae/core/src/components/select/select.ts#L78)

Class to be added on selected items (displayed in the input zone)

#### Default Value

`''`

#### Inherited from

`SelectCommonPropsAndState.badgeClassName`

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/fa99e689700463313172588f6028f9e2e06e86ae/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`SelectCommonPropsAndState.className`

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/select/select.ts:50](https://github.com/AmadeusITGroup/AgnosUI/blob/fa99e689700463313172588f6028f9e2e06e86ae/core/src/components/select/select.ts#L50)

true if the select is disabled

#### Default Value

`false`

#### Inherited from

`SelectCommonPropsAndState.disabled`

***

### filterText

> **filterText**: `string`

Defined in: [core/src/components/select/select.ts:43](https://github.com/AmadeusITGroup/AgnosUI/blob/fa99e689700463313172588f6028f9e2e06e86ae/core/src/components/select/select.ts#L43)

Filtered text to be display in the filter input

#### Default Value

`''`

#### Inherited from

`SelectCommonPropsAndState.filterText`

***

### highlighted

> **highlighted**: `undefined` \| [`ItemContext`](ItemContext.md)\<`Item`\>

Defined in: [core/src/components/select/select.ts:212](https://github.com/AmadeusITGroup/AgnosUI/blob/fa99e689700463313172588f6028f9e2e06e86ae/core/src/components/select/select.ts#L212)

Highlighted item context.
It is designed to define the highlighted item in the dropdown menu

***

### id

> **id**: `undefined` \| `string`

Defined in: [core/src/components/select/select.ts:22](https://github.com/AmadeusITGroup/AgnosUI/blob/fa99e689700463313172588f6028f9e2e06e86ae/core/src/components/select/select.ts#L22)

id used for the input inside the select

#### Inherited from

`SelectCommonPropsAndState.id`

***

### loading

> **loading**: `boolean`

Defined in: [core/src/components/select/select.ts:85](https://github.com/AmadeusITGroup/AgnosUI/blob/fa99e689700463313172588f6028f9e2e06e86ae/core/src/components/select/select.ts#L85)

true if a loading process is being done

#### Default Value

`false`

#### Inherited from

`SelectCommonPropsAndState.loading`

***

### menuClassName

> **menuClassName**: `string`

Defined in: [core/src/components/select/select.ts:64](https://github.com/AmadeusITGroup/AgnosUI/blob/fa99e689700463313172588f6028f9e2e06e86ae/core/src/components/select/select.ts#L64)

Class to be added on the dropdown menu container

#### Default Value

`''`

#### Inherited from

`SelectCommonPropsAndState.menuClassName`

***

### menuItemClassName

> **menuItemClassName**: `string`

Defined in: [core/src/components/select/select.ts:71](https://github.com/AmadeusITGroup/AgnosUI/blob/fa99e689700463313172588f6028f9e2e06e86ae/core/src/components/select/select.ts#L71)

Class to be added on menu items

#### Default Value

`''`

#### Inherited from

`SelectCommonPropsAndState.menuItemClassName`

***

### open

> **open**: `boolean`

Defined in: [core/src/components/select/select.ts:57](https://github.com/AmadeusITGroup/AgnosUI/blob/fa99e689700463313172588f6028f9e2e06e86ae/core/src/components/select/select.ts#L57)

true if the select is open

#### Default Value

`false`

#### Inherited from

`SelectCommonPropsAndState.open`

***

### placement

> **placement**: `undefined` \| `Placement`

Defined in: [core/src/components/select/select.ts:217](https://github.com/AmadeusITGroup/AgnosUI/blob/fa99e689700463313172588f6028f9e2e06e86ae/core/src/components/select/select.ts#L217)

Current placement of the dropdown

***

### selected

> **selected**: `Item`[]

Defined in: [core/src/components/select/select.ts:36](https://github.com/AmadeusITGroup/AgnosUI/blob/fa99e689700463313172588f6028f9e2e06e86ae/core/src/components/select/select.ts#L36)

List of selected item ids

#### Default Value

`[]`

#### Inherited from

`SelectCommonPropsAndState.selected`

***

### selectedContexts

> **selectedContexts**: [`ItemContext`](ItemContext.md)\<`Item`\>[]

Defined in: [core/src/components/select/select.ts:206](https://github.com/AmadeusITGroup/AgnosUI/blob/fa99e689700463313172588f6028f9e2e06e86ae/core/src/components/select/select.ts#L206)

List of selected items to be display

***

### visibleItems

> **visibleItems**: [`ItemContext`](ItemContext.md)\<`Item`\>[]

Defined in: [core/src/components/select/select.ts:201](https://github.com/AmadeusITGroup/AgnosUI/blob/fa99e689700463313172588f6028f9e2e06e86ae/core/src/components/select/select.ts#L201)

List of item contexts, to be displayed in the menu
