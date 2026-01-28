Defined in: [core/src/components/select/select.ts:94](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/select/select.ts#L94)

Props for the Select component.

## Extends

- `SelectCommonPropsAndState`\<`Item`\>

## Type Parameters

### Item

`Item`

The type of the Select Items

## Properties

### allowedPlacements

> **allowedPlacements**: `Placement`[]

Defined in: [core/src/components/select/select.ts:111](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/select/select.ts#L111)

List of allowed placements for the dropdown.
This refers to the [allowedPlacements from floating UI](https://floating-ui.com/docs/autoPlacement#allowedplacements), given the different [Placement possibilities](https://floating-ui.com/docs/computePosition#placement).

#### Default Value

```ts
['bottom-start', 'top-start', 'bottom-end', 'top-end']
```

***

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

### id

> **id**: `string` \| `undefined`

Defined in: [core/src/components/select/select.ts:23](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/select/select.ts#L23)

id used for the input inside the select

#### Inherited from

`SelectCommonPropsAndState.id`

***

### items

> **items**: `Item`[]

Defined in: [core/src/components/select/select.ts:100](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/select/select.ts#L100)

List of available items for the dropdown

#### Default Value

`[]`

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

### selected

> **selected**: `Item`[]

Defined in: [core/src/components/select/select.ts:37](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/select/select.ts#L37)

List of selected item ids

#### Default Value

`[]`

#### Inherited from

`SelectCommonPropsAndState.selected`

## Methods

### itemIdFn()

> **itemIdFn**(`item`): `string`

Defined in: [core/src/components/select/select.ts:122](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/select/select.ts#L122)

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

Defined in: [core/src/components/select/select.ts:134](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/select/select.ts#L134)

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

Defined in: [core/src/components/select/select.ts:158](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/select/select.ts#L158)

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

Defined in: [core/src/components/select/select.ts:147](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/select/select.ts#L147)

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

Defined in: [core/src/components/select/select.ts:168](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/select/select.ts#L168)

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
