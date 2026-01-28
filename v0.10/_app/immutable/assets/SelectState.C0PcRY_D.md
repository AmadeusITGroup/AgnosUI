Defined in: [core/src/components/select/select.ts:198](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/select/select.ts#L198)

Represents the state of a Select component.

## Extends

- `SelectCommonPropsAndState`\<`Item`\>

## Type Parameters

### Item

`Item`

The type of the Select Items

## Properties

### ariaLabel

> **ariaLabel**: `string` \| `undefined`

Defined in: [core/src/components/select/select.ts:30](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/select/select.ts#L30)

aria-label used for the input inside the select

#### Default Value

`'Select'`

#### Inherited from

`SelectCommonPropsAndState.ariaLabel`

***

### badgeClassName

> **badgeClassName**: `string`

Defined in: [core/src/components/select/select.ts:79](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/select/select.ts#L79)

Class to be added on selected items (displayed in the input zone)

#### Default Value

`''`

#### Inherited from

`SelectCommonPropsAndState.badgeClassName`

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`SelectCommonPropsAndState.className`

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/select/select.ts:51](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/select/select.ts#L51)

true if the select is disabled

#### Default Value

`false`

#### Inherited from

`SelectCommonPropsAndState.disabled`

***

### filterText

> **filterText**: `string`

Defined in: [core/src/components/select/select.ts:44](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/select/select.ts#L44)

Filtered text to be display in the filter input

#### Default Value

`''`

#### Inherited from

`SelectCommonPropsAndState.filterText`

***

### highlighted

> **highlighted**: [`ItemContext`](ItemContext.md)\<`Item`\> \| `undefined`

Defined in: [core/src/components/select/select.ts:213](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/select/select.ts#L213)

Highlighted item context.
It is designed to define the highlighted item in the dropdown menu

***

### id

> **id**: `string` \| `undefined`

Defined in: [core/src/components/select/select.ts:23](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/select/select.ts#L23)

id used for the input inside the select

#### Inherited from

`SelectCommonPropsAndState.id`

***

### loading

> **loading**: `boolean`

Defined in: [core/src/components/select/select.ts:86](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/select/select.ts#L86)

true if a loading process is being done

#### Default Value

`false`

#### Inherited from

`SelectCommonPropsAndState.loading`

***

### menuClassName

> **menuClassName**: `string`

Defined in: [core/src/components/select/select.ts:65](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/select/select.ts#L65)

Class to be added on the dropdown menu container

#### Default Value

`''`

#### Inherited from

`SelectCommonPropsAndState.menuClassName`

***

### menuItemClassName

> **menuItemClassName**: `string`

Defined in: [core/src/components/select/select.ts:72](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/select/select.ts#L72)

Class to be added on menu items

#### Default Value

`''`

#### Inherited from

`SelectCommonPropsAndState.menuItemClassName`

***

### open

> **open**: `boolean`

Defined in: [core/src/components/select/select.ts:58](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/select/select.ts#L58)

true if the select is open

#### Default Value

`false`

#### Inherited from

`SelectCommonPropsAndState.open`

***

### placement

> **placement**: `Placement` \| `undefined`

Defined in: [core/src/components/select/select.ts:218](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/select/select.ts#L218)

Current placement of the dropdown

***

### selected

> **selected**: `Item`[]

Defined in: [core/src/components/select/select.ts:37](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/select/select.ts#L37)

List of selected item ids

#### Default Value

`[]`

#### Inherited from

`SelectCommonPropsAndState.selected`

***

### selectedContexts

> **selectedContexts**: [`ItemContext`](ItemContext.md)\<`Item`\>[]

Defined in: [core/src/components/select/select.ts:207](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/select/select.ts#L207)

List of selected items to be display

***

### visibleItems

> **visibleItems**: [`ItemContext`](ItemContext.md)\<`Item`\>[]

Defined in: [core/src/components/select/select.ts:202](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/select/select.ts#L202)

List of item contexts, to be displayed in the menu
