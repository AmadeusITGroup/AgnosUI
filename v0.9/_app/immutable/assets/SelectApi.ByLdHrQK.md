Defined in: [core/src/components/select/select.ts:226](https://github.com/AmadeusITGroup/AgnosUI/blob/d0f2f734218198e2ce8b2214caa12e4370336068/core/src/components/select/select.ts#L226)

Interface representing the API for a Select component.

## Type Parameters

### Item

`Item`

The type of the Select Items

## Methods

### clear()

> **clear**(): `void`

Defined in: [core/src/components/select/select.ts:230](https://github.com/AmadeusITGroup/AgnosUI/blob/d0f2f734218198e2ce8b2214caa12e4370336068/core/src/components/select/select.ts#L230)

Clear all the selected items

#### Returns

`void`

***

### clearText()

> **clearText**(): `void`

Defined in: [core/src/components/select/select.ts:235](https://github.com/AmadeusITGroup/AgnosUI/blob/d0f2f734218198e2ce8b2214caa12e4370336068/core/src/components/select/select.ts#L235)

Clear the filter text

#### Returns

`void`

***

### close()

> **close**(): `void`

Defined in: [core/src/components/select/select.ts:289](https://github.com/AmadeusITGroup/AgnosUI/blob/d0f2f734218198e2ce8b2214caa12e4370336068/core/src/components/select/select.ts#L289)

close the select

#### Returns

`void`

***

### highlight()

> **highlight**(`item`): `void`

Defined in: [core/src/components/select/select.ts:240](https://github.com/AmadeusITGroup/AgnosUI/blob/d0f2f734218198e2ce8b2214caa12e4370336068/core/src/components/select/select.ts#L240)

Highlight the given item, if there is a corresponding match among the visible list

#### Parameters

##### item

`Item`

#### Returns

`void`

***

### highlightFirst()

> **highlightFirst**(): `void`

Defined in: [core/src/components/select/select.ts:245](https://github.com/AmadeusITGroup/AgnosUI/blob/d0f2f734218198e2ce8b2214caa12e4370336068/core/src/components/select/select.ts#L245)

Highlight the first item among the visible list

#### Returns

`void`

***

### highlightLast()

> **highlightLast**(): `void`

Defined in: [core/src/components/select/select.ts:262](https://github.com/AmadeusITGroup/AgnosUI/blob/d0f2f734218198e2ce8b2214caa12e4370336068/core/src/components/select/select.ts#L262)

Highlight the last item among the visible list

#### Returns

`void`

***

### highlightNext()

> **highlightNext**(): `void`

Defined in: [core/src/components/select/select.ts:257](https://github.com/AmadeusITGroup/AgnosUI/blob/d0f2f734218198e2ce8b2214caa12e4370336068/core/src/components/select/select.ts#L257)

Highlight the next item among the visible list.
Loop to the first item if needed

#### Returns

`void`

***

### highlightPrevious()

> **highlightPrevious**(): `void`

Defined in: [core/src/components/select/select.ts:251](https://github.com/AmadeusITGroup/AgnosUI/blob/d0f2f734218198e2ce8b2214caa12e4370336068/core/src/components/select/select.ts#L251)

Highlight the previous item among the visible list
Loop to the last item if needed

#### Returns

`void`

***

### open()

> **open**(): `void`

Defined in: [core/src/components/select/select.ts:285](https://github.com/AmadeusITGroup/AgnosUI/blob/d0f2f734218198e2ce8b2214caa12e4370336068/core/src/components/select/select.ts#L285)

open the select

#### Returns

`void`

***

### select()

> **select**(`item`): `void`

Defined in: [core/src/components/select/select.ts:269](https://github.com/AmadeusITGroup/AgnosUI/blob/d0f2f734218198e2ce8b2214caa12e4370336068/core/src/components/select/select.ts#L269)

Select the provided item.
The selected list is used to

#### Parameters

##### item

`Item`

the item to select

#### Returns

`void`

***

### toggle()

> **toggle**(`isOpen?`): `void`

Defined in: [core/src/components/select/select.ts:294](https://github.com/AmadeusITGroup/AgnosUI/blob/d0f2f734218198e2ce8b2214caa12e4370336068/core/src/components/select/select.ts#L294)

Toggle the dropdown menu

#### Parameters

##### isOpen?

`boolean`

If specified, set the menu in the defined state.

#### Returns

`void`

***

### toggleItem()

> **toggleItem**(`item`, `selected?`): `void`

Defined in: [core/src/components/select/select.ts:280](https://github.com/AmadeusITGroup/AgnosUI/blob/d0f2f734218198e2ce8b2214caa12e4370336068/core/src/components/select/select.ts#L280)

Toggle the selection of an item

#### Parameters

##### item

`Item`

the item to toggle

##### selected?

`boolean`

an optional boolean to enforce the selected/unselected state instead of toggling

#### Returns

`void`

***

### unselect()

> **unselect**(`item`): `void`

Defined in: [core/src/components/select/select.ts:274](https://github.com/AmadeusITGroup/AgnosUI/blob/d0f2f734218198e2ce8b2214caa12e4370336068/core/src/components/select/select.ts#L274)

Unselect the provided item.

#### Parameters

##### item

`Item`

the item to unselect

#### Returns

`void`
