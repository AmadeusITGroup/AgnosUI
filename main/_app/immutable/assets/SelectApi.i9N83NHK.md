Defined in: [core/src/components/select/select.ts:225](https://github.com/AmadeusITGroup/AgnosUI/blob/72c66f3ef2b0d38bd4545fb6166b18d50850f846/core/src/components/select/select.ts#L225)

Interface representing the API for a Select component.

## Type Parameters

• **Item**

The type of the Select Items

## Methods

### clear()

> **clear**(): `void`

Defined in: [core/src/components/select/select.ts:229](https://github.com/AmadeusITGroup/AgnosUI/blob/72c66f3ef2b0d38bd4545fb6166b18d50850f846/core/src/components/select/select.ts#L229)

Clear all the selected items

#### Returns

`void`

***

### clearText()

> **clearText**(): `void`

Defined in: [core/src/components/select/select.ts:234](https://github.com/AmadeusITGroup/AgnosUI/blob/72c66f3ef2b0d38bd4545fb6166b18d50850f846/core/src/components/select/select.ts#L234)

Clear the filter text

#### Returns

`void`

***

### close()

> **close**(): `void`

Defined in: [core/src/components/select/select.ts:288](https://github.com/AmadeusITGroup/AgnosUI/blob/72c66f3ef2b0d38bd4545fb6166b18d50850f846/core/src/components/select/select.ts#L288)

close the select

#### Returns

`void`

***

### highlight()

> **highlight**(`item`): `void`

Defined in: [core/src/components/select/select.ts:239](https://github.com/AmadeusITGroup/AgnosUI/blob/72c66f3ef2b0d38bd4545fb6166b18d50850f846/core/src/components/select/select.ts#L239)

Highlight the given item, if there is a corresponding match among the visible list

#### Parameters

##### item

`Item`

#### Returns

`void`

***

### highlightFirst()

> **highlightFirst**(): `void`

Defined in: [core/src/components/select/select.ts:244](https://github.com/AmadeusITGroup/AgnosUI/blob/72c66f3ef2b0d38bd4545fb6166b18d50850f846/core/src/components/select/select.ts#L244)

Highlight the first item among the visible list

#### Returns

`void`

***

### highlightLast()

> **highlightLast**(): `void`

Defined in: [core/src/components/select/select.ts:261](https://github.com/AmadeusITGroup/AgnosUI/blob/72c66f3ef2b0d38bd4545fb6166b18d50850f846/core/src/components/select/select.ts#L261)

Highlight the last item among the visible list

#### Returns

`void`

***

### highlightNext()

> **highlightNext**(): `void`

Defined in: [core/src/components/select/select.ts:256](https://github.com/AmadeusITGroup/AgnosUI/blob/72c66f3ef2b0d38bd4545fb6166b18d50850f846/core/src/components/select/select.ts#L256)

Highlight the next item among the visible list.
Loop to the first item if needed

#### Returns

`void`

***

### highlightPrevious()

> **highlightPrevious**(): `void`

Defined in: [core/src/components/select/select.ts:250](https://github.com/AmadeusITGroup/AgnosUI/blob/72c66f3ef2b0d38bd4545fb6166b18d50850f846/core/src/components/select/select.ts#L250)

Highlight the previous item among the visible list
Loop to the last item if needed

#### Returns

`void`

***

### open()

> **open**(): `void`

Defined in: [core/src/components/select/select.ts:284](https://github.com/AmadeusITGroup/AgnosUI/blob/72c66f3ef2b0d38bd4545fb6166b18d50850f846/core/src/components/select/select.ts#L284)

open the select

#### Returns

`void`

***

### select()

> **select**(`item`): `void`

Defined in: [core/src/components/select/select.ts:268](https://github.com/AmadeusITGroup/AgnosUI/blob/72c66f3ef2b0d38bd4545fb6166b18d50850f846/core/src/components/select/select.ts#L268)

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

> **toggle**(`isOpen`?): `void`

Defined in: [core/src/components/select/select.ts:293](https://github.com/AmadeusITGroup/AgnosUI/blob/72c66f3ef2b0d38bd4545fb6166b18d50850f846/core/src/components/select/select.ts#L293)

Toggle the dropdown menu

#### Parameters

##### isOpen?

`boolean`

If specified, set the menu in the defined state.

#### Returns

`void`

***

### toggleItem()

> **toggleItem**(`item`, `selected`?): `void`

Defined in: [core/src/components/select/select.ts:279](https://github.com/AmadeusITGroup/AgnosUI/blob/72c66f3ef2b0d38bd4545fb6166b18d50850f846/core/src/components/select/select.ts#L279)

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

Defined in: [core/src/components/select/select.ts:273](https://github.com/AmadeusITGroup/AgnosUI/blob/72c66f3ef2b0d38bd4545fb6166b18d50850f846/core/src/components/select/select.ts#L273)

Unselect the provided item.

#### Parameters

##### item

`Item`

the item to unselect

#### Returns

`void`
