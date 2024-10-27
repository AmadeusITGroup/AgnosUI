## Type Parameters

• **Item**

## Methods

### clear()

> **clear**(): `void`

Clear all the selected items

#### Returns

`void`

#### Defined in

[core/src/components/select/select.ts:212](https://github.com/AmadeusITGroup/AgnosUI/blob/ca21279d48046b3d197cb29c6421bb3bf3a7a811/core/src/components/select/select.ts#L212)

***

### clearText()

> **clearText**(): `void`

Clear the filter text

#### Returns

`void`

#### Defined in

[core/src/components/select/select.ts:217](https://github.com/AmadeusITGroup/AgnosUI/blob/ca21279d48046b3d197cb29c6421bb3bf3a7a811/core/src/components/select/select.ts#L217)

***

### close()

> **close**(): `void`

close the select

#### Returns

`void`

#### Defined in

[core/src/components/select/select.ts:271](https://github.com/AmadeusITGroup/AgnosUI/blob/ca21279d48046b3d197cb29c6421bb3bf3a7a811/core/src/components/select/select.ts#L271)

***

### highlight()

> **highlight**(`item`): `void`

Highlight the given item, if there is a corresponding match among the visible list

#### Parameters

• **item**: `Item`

#### Returns

`void`

#### Defined in

[core/src/components/select/select.ts:222](https://github.com/AmadeusITGroup/AgnosUI/blob/ca21279d48046b3d197cb29c6421bb3bf3a7a811/core/src/components/select/select.ts#L222)

***

### highlightFirst()

> **highlightFirst**(): `void`

Highlight the first item among the visible list

#### Returns

`void`

#### Defined in

[core/src/components/select/select.ts:227](https://github.com/AmadeusITGroup/AgnosUI/blob/ca21279d48046b3d197cb29c6421bb3bf3a7a811/core/src/components/select/select.ts#L227)

***

### highlightLast()

> **highlightLast**(): `void`

Highlight the last item among the visible list

#### Returns

`void`

#### Defined in

[core/src/components/select/select.ts:244](https://github.com/AmadeusITGroup/AgnosUI/blob/ca21279d48046b3d197cb29c6421bb3bf3a7a811/core/src/components/select/select.ts#L244)

***

### highlightNext()

> **highlightNext**(): `void`

Highlight the next item among the visible list.
Loop to the first item if needed

#### Returns

`void`

#### Defined in

[core/src/components/select/select.ts:239](https://github.com/AmadeusITGroup/AgnosUI/blob/ca21279d48046b3d197cb29c6421bb3bf3a7a811/core/src/components/select/select.ts#L239)

***

### highlightPrevious()

> **highlightPrevious**(): `void`

Highlight the previous item among the visible list
Loop to the last item if needed

#### Returns

`void`

#### Defined in

[core/src/components/select/select.ts:233](https://github.com/AmadeusITGroup/AgnosUI/blob/ca21279d48046b3d197cb29c6421bb3bf3a7a811/core/src/components/select/select.ts#L233)

***

### open()

> **open**(): `void`

open the select

#### Returns

`void`

#### Defined in

[core/src/components/select/select.ts:267](https://github.com/AmadeusITGroup/AgnosUI/blob/ca21279d48046b3d197cb29c6421bb3bf3a7a811/core/src/components/select/select.ts#L267)

***

### select()

> **select**(`item`): `void`

Select the provided item.
The selected list is used to

#### Parameters

• **item**: `Item`

the item to select

#### Returns

`void`

#### Defined in

[core/src/components/select/select.ts:251](https://github.com/AmadeusITGroup/AgnosUI/blob/ca21279d48046b3d197cb29c6421bb3bf3a7a811/core/src/components/select/select.ts#L251)

***

### toggle()

> **toggle**(`isOpen`?): `void`

Toggle the dropdown menu

#### Parameters

• **isOpen?**: `boolean`

If specified, set the menu in the defined state.

#### Returns

`void`

#### Defined in

[core/src/components/select/select.ts:276](https://github.com/AmadeusITGroup/AgnosUI/blob/ca21279d48046b3d197cb29c6421bb3bf3a7a811/core/src/components/select/select.ts#L276)

***

### toggleItem()

> **toggleItem**(`item`, `selected`?): `void`

Toggle the selection of an item

#### Parameters

• **item**: `Item`

the item to toggle

• **selected?**: `boolean`

an optional boolean to enforce the selected/unselected state instead of toggling

#### Returns

`void`

#### Defined in

[core/src/components/select/select.ts:262](https://github.com/AmadeusITGroup/AgnosUI/blob/ca21279d48046b3d197cb29c6421bb3bf3a7a811/core/src/components/select/select.ts#L262)

***

### unselect()

> **unselect**(`item`): `void`

Unselect the provided item.

#### Parameters

• **item**: `Item`

the item to unselect

#### Returns

`void`

#### Defined in

[core/src/components/select/select.ts:256](https://github.com/AmadeusITGroup/AgnosUI/blob/ca21279d48046b3d197cb29c6421bb3bf3a7a811/core/src/components/select/select.ts#L256)
