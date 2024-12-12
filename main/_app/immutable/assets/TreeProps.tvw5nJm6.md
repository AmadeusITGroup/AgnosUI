Represents the properties for the Tree component.

## Extends

- `TreeProps`.`TreeExtraProps`

## Properties

### ariaLabel?

> `optional` **ariaLabel**: `string`

Optional accessibility label for the tree if there is no explicit label

#### Default Value

`''`

#### Inherited from

`CoreProps.ariaLabel`

#### Defined in

[core/src/components/tree/tree.ts:68](https://github.com/AmadeusITGroup/AgnosUI/blob/bb188aca486c54b1536eeec700e7b5bcd839800a/core/src/components/tree/tree.ts#L68)

***

### ariaLabelToggleFn()

> **ariaLabelToggleFn**: (`label`) => `string`

Return the value for the 'aria-label' attribute of the toggle

#### Parameters

##### label

`string`

tree item label

#### Returns

`string`

#### Default Value

```ts
(label: string) => `Toggle ${label}`
```

#### Inherited from

`CoreProps.ariaLabelToggleFn`

#### Defined in

[core/src/components/tree/tree.ts:111](https://github.com/AmadeusITGroup/AgnosUI/blob/bb188aca486c54b1536eeec700e7b5bcd839800a/core/src/components/tree/tree.ts#L111)

***

### className

> **className**: `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreProps.className`

#### Defined in

[core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/bb188aca486c54b1536eeec700e7b5bcd839800a/core/src/components/commonProps.ts#L10)

***

### item

> **item**: `SlotContent`\<[`TreeSlotItemContext`](../type-aliases/TreeSlotItemContext.md)\>

Slot to change the default tree item

#### Inherited from

`TreeExtraProps.item`

#### Defined in

[core-bootstrap/src/components/tree/tree.ts:27](https://github.com/AmadeusITGroup/AgnosUI/blob/bb188aca486c54b1536eeec700e7b5bcd839800a/core-bootstrap/src/components/tree/tree.ts#L27)

***

### itemContent

> **itemContent**: `SlotContent`\<[`TreeSlotItemContext`](../type-aliases/TreeSlotItemContext.md)\>

Slot to change the default tree item content

#### Inherited from

`TreeExtraProps.itemContent`

#### Defined in

[core-bootstrap/src/components/tree/tree.ts:31](https://github.com/AmadeusITGroup/AgnosUI/blob/bb188aca486c54b1536eeec700e7b5bcd839800a/core-bootstrap/src/components/tree/tree.ts#L31)

***

### itemToggle

> **itemToggle**: `SlotContent`\<[`TreeSlotItemContext`](../type-aliases/TreeSlotItemContext.md)\>

Slot to change the default tree item toggle

#### Inherited from

`TreeExtraProps.itemToggle`

#### Defined in

[core-bootstrap/src/components/tree/tree.ts:35](https://github.com/AmadeusITGroup/AgnosUI/blob/bb188aca486c54b1536eeec700e7b5bcd839800a/core-bootstrap/src/components/tree/tree.ts#L35)

***

### nodes

> **nodes**: [`TreeItem`](TreeItem.md)[]

Array of the tree nodes to display

#### Default Value

`[]`

#### Inherited from

`CoreProps.nodes`

#### Defined in

[core/src/components/tree/tree.ts:79](https://github.com/AmadeusITGroup/AgnosUI/blob/bb188aca486c54b1536eeec700e7b5bcd839800a/core/src/components/tree/tree.ts#L79)

***

### onExpandToggle()

> **onExpandToggle**: (`node`) => `void`

An event emitted when the user toggles the expand of the TreeItem.

Event payload is equal to the TreeItem clicked.

#### Parameters

##### node

[`NormalizedTreeItem`](NormalizedTreeItem.md)

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Inherited from

`CoreProps.onExpandToggle`

#### Defined in

[core/src/components/tree/tree.ts:90](https://github.com/AmadeusITGroup/AgnosUI/blob/bb188aca486c54b1536eeec700e7b5bcd839800a/core/src/components/tree/tree.ts#L90)

***

### structure

> **structure**: `SlotContent`\<[`TreeContext`](../type-aliases/TreeContext.md)\>

Slot to change the default display of the tree

#### Inherited from

`TreeExtraProps.structure`

#### Defined in

[core-bootstrap/src/components/tree/tree.ts:23](https://github.com/AmadeusITGroup/AgnosUI/blob/bb188aca486c54b1536eeec700e7b5bcd839800a/core-bootstrap/src/components/tree/tree.ts#L23)

## Methods

### navSelector()

> **navSelector**(`node`): `NodeListOf`\<[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)\>

Retrieves expand items of the TreeItem

#### Parameters

##### node

[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

HTML element that is representing the expand item

#### Returns

`NodeListOf`\<[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)\>

#### Default Value

```ts
(node: HTMLElement) => node.querySelectorAll('button')
```

#### Inherited from

`CoreProps.navSelector`

#### Defined in

[core/src/components/tree/tree.ts:101](https://github.com/AmadeusITGroup/AgnosUI/blob/bb188aca486c54b1536eeec700e7b5bcd839800a/core/src/components/tree/tree.ts#L101)
