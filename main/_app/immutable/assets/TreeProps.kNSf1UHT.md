Defined in: [core-bootstrap/src/components/tree/tree.ts:45](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core-bootstrap/src/components/tree/tree.ts#L45)

Represents the properties for the Tree component.

## Extends

- `TreeProps`.`TreeExtraProps`

## Properties

### ariaLabel?

> `optional` **ariaLabel**: `string`

Defined in: [core/src/components/tree/tree.ts:69](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/tree/tree.ts#L69)

Optional accessibility label for the tree if there is no explicit label

#### Default Value

`''`

#### Inherited from

`CoreProps.ariaLabel`

***

### ariaLabelToggleFn()

> **ariaLabelToggleFn**: (`label`) => `string`

Defined in: [core/src/components/tree/tree.ts:112](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/tree/tree.ts#L112)

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

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreProps.className`

***

### item

> **item**: `SlotContent`\<[`TreeSlotItemContext`](../type-aliases/TreeSlotItemContext.md)\>

Defined in: [core-bootstrap/src/components/tree/tree.ts:27](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core-bootstrap/src/components/tree/tree.ts#L27)

Slot to change the default tree item

#### Inherited from

`TreeExtraProps.item`

***

### itemContent

> **itemContent**: `SlotContent`\<[`TreeSlotItemContext`](../type-aliases/TreeSlotItemContext.md)\>

Defined in: [core-bootstrap/src/components/tree/tree.ts:31](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core-bootstrap/src/components/tree/tree.ts#L31)

Slot to change the default tree item content

#### Inherited from

`TreeExtraProps.itemContent`

***

### itemToggle

> **itemToggle**: `SlotContent`\<[`TreeSlotItemContext`](../type-aliases/TreeSlotItemContext.md)\>

Defined in: [core-bootstrap/src/components/tree/tree.ts:35](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core-bootstrap/src/components/tree/tree.ts#L35)

Slot to change the default tree item toggle

#### Inherited from

`TreeExtraProps.itemToggle`

***

### nodes

> **nodes**: [`TreeItem`](TreeItem.md)[]

Defined in: [core/src/components/tree/tree.ts:80](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/tree/tree.ts#L80)

Array of the tree nodes to display

#### Default Value

`[]`

#### Inherited from

`CoreProps.nodes`

***

### onExpandToggle()

> **onExpandToggle**: (`node`) => `void`

Defined in: [core/src/components/tree/tree.ts:91](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/tree/tree.ts#L91)

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

Defined in: [core-bootstrap/src/components/tree/tree.ts:23](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core-bootstrap/src/components/tree/tree.ts#L23)

Slot to change the default display of the tree

#### Inherited from

`TreeExtraProps.structure`

## Methods

### navSelector()

> **navSelector**(`node`): `NodeListOf`\<[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)\>

Defined in: [core/src/components/tree/tree.ts:102](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/tree/tree.ts#L102)

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
