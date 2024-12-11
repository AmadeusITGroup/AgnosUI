Interface representing the API for a Select component.

## Type Parameters

• **Item**

The type of the Select Items

## Methods

### clear()

> **clear**(): `void`

Clear all the selected items

#### Returns

`void`

#### Defined in

[core/src/components/select/select.ts:229](https://github.com/AmadeusITGroup/AgnosUI/blob/c7e05dc86739b8deaf983c1a5a906276d7150d8b/core/src/components/select/select.ts#L229)

***

### clearText()

> **clearText**(): `void`

Clear the filter text

#### Returns

`void`

#### Defined in

[core/src/components/select/select.ts:234](https://github.com/AmadeusITGroup/AgnosUI/blob/c7e05dc86739b8deaf983c1a5a906276d7150d8b/core/src/components/select/select.ts#L234)

***

### close()

> **close**(): `void`

close the select

#### Returns

`void`

#### Defined in

[core/src/components/select/select.ts:288](https://github.com/AmadeusITGroup/AgnosUI/blob/c7e05dc86739b8deaf983c1a5a906276d7150d8b/core/src/components/select/select.ts#L288)

***

### highlight()

> **highlight**(`item`): `void`

Highlight the given item, if there is a corresponding match among the visible list

#### Parameters

##### item

`Item`

#### Returns

`void`

#### Defined in

[core/src/components/select/select.ts:239](https://github.com/AmadeusITGroup/AgnosUI/blob/c7e05dc86739b8deaf983c1a5a906276d7150d8b/core/src/components/select/select.ts#L239)

***

### highlightFirst()

> **highlightFirst**(): `void`

Highlight the first item among the visible list

#### Returns

`void`

#### Defined in

[core/src/components/select/select.ts:244](https://github.com/AmadeusITGroup/AgnosUI/blob/c7e05dc86739b8deaf983c1a5a906276d7150d8b/core/src/components/select/select.ts#L244)

***

### highlightLast()

> **highlightLast**(): `void`

Highlight the last item among the visible list

#### Returns

`void`

#### Defined in

[core/src/components/select/select.ts:261](https://github.com/AmadeusITGroup/AgnosUI/blob/c7e05dc86739b8deaf983c1a5a906276d7150d8b/core/src/components/select/select.ts#L261)

***

### highlightNext()

> **highlightNext**(): `void`

Highlight the next item among the visible list.
Loop to the first item if needed

#### Returns

`void`

#### Defined in

[core/src/components/select/select.ts:256](https://github.com/AmadeusITGroup/AgnosUI/blob/c7e05dc86739b8deaf983c1a5a906276d7150d8b/core/src/components/select/select.ts#L256)

***

### highlightPrevious()

> **highlightPrevious**(): `void`

Highlight the previous item among the visible list
Loop to the last item if needed

#### Returns

`void`

#### Defined in

[core/src/components/select/select.ts:250](https://github.com/AmadeusITGroup/AgnosUI/blob/c7e05dc86739b8deaf983c1a5a906276d7150d8b/core/src/components/select/select.ts#L250)

***

### open()

> **open**(): `void`

open the select

#### Returns

`void`

#### Defined in

[core/src/components/select/select.ts:284](https://github.com/AmadeusITGroup/AgnosUI/blob/c7e05dc86739b8deaf983c1a5a906276d7150d8b/core/src/components/select/select.ts#L284)

***

### select()

> **select**(`item`): `void`

Select the provided item.
The selected list is used to

#### Parameters

##### item

`Item`

the item to select

#### Returns

`void`

#### Defined in

[core/src/components/select/select.ts:268](https://github.com/AmadeusITGroup/AgnosUI/blob/c7e05dc86739b8deaf983c1a5a906276d7150d8b/core/src/components/select/select.ts#L268)

***

### toggle()

> **toggle**(`isOpen`?): `void`

Toggle the dropdown menu

#### Parameters

##### isOpen?

`boolean`

If specified, set the menu in the defined state.

#### Returns

`void`

#### Defined in

[core/src/components/select/select.ts:293](https://github.com/AmadeusITGroup/AgnosUI/blob/c7e05dc86739b8deaf983c1a5a906276d7150d8b/core/src/components/select/select.ts#L293)

***

### toggleItem()

> **toggleItem**(`item`, `selected`?): `void`

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

#### Defined in

[core/src/components/select/select.ts:279](https://github.com/AmadeusITGroup/AgnosUI/blob/c7e05dc86739b8deaf983c1a5a906276d7150d8b/core/src/components/select/select.ts#L279)

***

### unselect()

> **unselect**(`item`): `void`

Unselect the provided item.

#### Parameters

##### item

`Item`

the item to unselect

#### Returns

`void`

#### Defined in

[core/src/components/select/select.ts:273](https://github.com/AmadeusITGroup/AgnosUI/blob/c7e05dc86739b8deaf983c1a5a906276d7150d8b/core/src/components/select/select.ts#L273)
