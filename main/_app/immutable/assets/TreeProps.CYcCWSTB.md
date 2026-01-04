Defined in: [core-bootstrap/src/components/tree/tree.ts:45](https://github.com/AmadeusITGroup/AgnosUI/blob/0d986b5e0578a13e5314a6d877c347394c887efc/core-bootstrap/src/components/tree/tree.ts#L45)

Represents the properties for the Tree component.

## Extends

- `TreeProps`.`TreeExtraProps`

## Properties

### ariaLabelToggleFn()

> **ariaLabelToggleFn**: (`label`) => `string`

Defined in: [core/src/components/tree/tree.ts:105](https://github.com/AmadeusITGroup/AgnosUI/blob/0d986b5e0578a13e5314a6d877c347394c887efc/core/src/components/tree/tree.ts#L105)

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

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/0d986b5e0578a13e5314a6d877c347394c887efc/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreProps.className`

***

### item

> **item**: `SlotContent`\<[`TreeSlotItemContext`](../type-aliases/TreeSlotItemContext.md)\>

Defined in: [core-bootstrap/src/components/tree/tree.ts:27](https://github.com/AmadeusITGroup/AgnosUI/blob/0d986b5e0578a13e5314a6d877c347394c887efc/core-bootstrap/src/components/tree/tree.ts#L27)

Slot to change the default tree item

#### Inherited from

`TreeExtraProps.item`

***

### itemContent

> **itemContent**: `SlotContent`\<[`TreeSlotItemContext`](../type-aliases/TreeSlotItemContext.md)\>

Defined in: [core-bootstrap/src/components/tree/tree.ts:31](https://github.com/AmadeusITGroup/AgnosUI/blob/0d986b5e0578a13e5314a6d877c347394c887efc/core-bootstrap/src/components/tree/tree.ts#L31)

Slot to change the default tree item content

#### Inherited from

`TreeExtraProps.itemContent`

***

### itemToggle

> **itemToggle**: `SlotContent`\<[`TreeSlotItemContext`](../type-aliases/TreeSlotItemContext.md)\>

Defined in: [core-bootstrap/src/components/tree/tree.ts:35](https://github.com/AmadeusITGroup/AgnosUI/blob/0d986b5e0578a13e5314a6d877c347394c887efc/core-bootstrap/src/components/tree/tree.ts#L35)

Slot to change the default tree item toggle

#### Inherited from

`TreeExtraProps.itemToggle`

***

### nodes

> **nodes**: [`TreeItem`](TreeItem.md)[]

Defined in: [core/src/components/tree/tree.ts:73](https://github.com/AmadeusITGroup/AgnosUI/blob/0d986b5e0578a13e5314a6d877c347394c887efc/core/src/components/tree/tree.ts#L73)

Array of the tree nodes to display

#### Default Value

`[]`

#### Inherited from

`CoreProps.nodes`

***

### onExpandToggle()

> **onExpandToggle**: (`node`) => `void`

Defined in: [core/src/components/tree/tree.ts:84](https://github.com/AmadeusITGroup/AgnosUI/blob/0d986b5e0578a13e5314a6d877c347394c887efc/core/src/components/tree/tree.ts#L84)

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

***

### structure

> **structure**: `SlotContent`\<[`TreeContext`](../type-aliases/TreeContext.md)\>

Defined in: [core-bootstrap/src/components/tree/tree.ts:23](https://github.com/AmadeusITGroup/AgnosUI/blob/0d986b5e0578a13e5314a6d877c347394c887efc/core-bootstrap/src/components/tree/tree.ts#L23)

Slot to change the default display of the tree

#### Inherited from

`TreeExtraProps.structure`

## Methods

### navSelector()

> **navSelector**(`node`): `NodeListOf`\<[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)\>

Defined in: [core/src/components/tree/tree.ts:95](https://github.com/AmadeusITGroup/AgnosUI/blob/0d986b5e0578a13e5314a6d877c347394c887efc/core/src/components/tree/tree.ts#L95)

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
