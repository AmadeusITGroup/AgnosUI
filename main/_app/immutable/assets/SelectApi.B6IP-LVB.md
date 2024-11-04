Interface representing the API for a Select component.

## Type Parameters

• **Item**

## Methods

### clear()

> **clear**(): `void`

Clear all the selected items

#### Returns

`void`

#### Defined in

[core/src/components/select/select.ts:221](https://github.com/AmadeusITGroup/AgnosUI/blob/2cc7fde51b2918fc68e41eeaf4ecc8684b1460dd/core/src/components/select/select.ts#L221)

***

### clearText()

> **clearText**(): `void`

Clear the filter text

#### Returns

`void`

#### Defined in

[core/src/components/select/select.ts:226](https://github.com/AmadeusITGroup/AgnosUI/blob/2cc7fde51b2918fc68e41eeaf4ecc8684b1460dd/core/src/components/select/select.ts#L226)

***

### close()

> **close**(): `void`

close the select

#### Returns

`void`

#### Defined in

[core/src/components/select/select.ts:280](https://github.com/AmadeusITGroup/AgnosUI/blob/2cc7fde51b2918fc68e41eeaf4ecc8684b1460dd/core/src/components/select/select.ts#L280)

***

### highlight()

> **highlight**(`item`): `void`

Highlight the given item, if there is a corresponding match among the visible list

#### Parameters

• **item**: `Item`

#### Returns

`void`

#### Defined in

[core/src/components/select/select.ts:231](https://github.com/AmadeusITGroup/AgnosUI/blob/2cc7fde51b2918fc68e41eeaf4ecc8684b1460dd/core/src/components/select/select.ts#L231)

***

### highlightFirst()

> **highlightFirst**(): `void`

Highlight the first item among the visible list

#### Returns

`void`

#### Defined in

[core/src/components/select/select.ts:236](https://github.com/AmadeusITGroup/AgnosUI/blob/2cc7fde51b2918fc68e41eeaf4ecc8684b1460dd/core/src/components/select/select.ts#L236)

***

### highlightLast()

> **highlightLast**(): `void`

Highlight the last item among the visible list

#### Returns

`void`

#### Defined in

[core/src/components/select/select.ts:253](https://github.com/AmadeusITGroup/AgnosUI/blob/2cc7fde51b2918fc68e41eeaf4ecc8684b1460dd/core/src/components/select/select.ts#L253)

***

### highlightNext()

> **highlightNext**(): `void`

Highlight the next item among the visible list.
Loop to the first item if needed

#### Returns

`void`

#### Defined in

[core/src/components/select/select.ts:248](https://github.com/AmadeusITGroup/AgnosUI/blob/2cc7fde51b2918fc68e41eeaf4ecc8684b1460dd/core/src/components/select/select.ts#L248)

***

### highlightPrevious()

> **highlightPrevious**(): `void`

Highlight the previous item among the visible list
Loop to the last item if needed

#### Returns

`void`

#### Defined in

[core/src/components/select/select.ts:242](https://github.com/AmadeusITGroup/AgnosUI/blob/2cc7fde51b2918fc68e41eeaf4ecc8684b1460dd/core/src/components/select/select.ts#L242)

***

### open()

> **open**(): `void`

open the select

#### Returns

`void`

#### Defined in

[core/src/components/select/select.ts:276](https://github.com/AmadeusITGroup/AgnosUI/blob/2cc7fde51b2918fc68e41eeaf4ecc8684b1460dd/core/src/components/select/select.ts#L276)

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

[core/src/components/select/select.ts:260](https://github.com/AmadeusITGroup/AgnosUI/blob/2cc7fde51b2918fc68e41eeaf4ecc8684b1460dd/core/src/components/select/select.ts#L260)

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

[core/src/components/select/select.ts:285](https://github.com/AmadeusITGroup/AgnosUI/blob/2cc7fde51b2918fc68e41eeaf4ecc8684b1460dd/core/src/components/select/select.ts#L285)

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

[core/src/components/select/select.ts:271](https://github.com/AmadeusITGroup/AgnosUI/blob/2cc7fde51b2918fc68e41eeaf4ecc8684b1460dd/core/src/components/select/select.ts#L271)

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

[core/src/components/select/select.ts:265](https://github.com/AmadeusITGroup/AgnosUI/blob/2cc7fde51b2918fc68e41eeaf4ecc8684b1460dd/core/src/components/select/select.ts#L265)
