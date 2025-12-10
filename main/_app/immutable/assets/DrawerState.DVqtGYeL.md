Defined in: [core-bootstrap/src/components/drawer/drawer.ts:45](https://github.com/AmadeusITGroup/AgnosUI/blob/c1f70965be611a493853d090804a9df573601300/core-bootstrap/src/components/drawer/drawer.ts#L45)

Represents the state of a Drawer component.

## Extends

- `DrawerState`.`DrawerExtraProps`

## Properties

### backdropClass

> **backdropClass**: `string`

Defined in: [core/src/components/drawer/drawer.ts:45](https://github.com/AmadeusITGroup/AgnosUI/blob/c1f70965be611a493853d090804a9df573601300/core/src/components/drawer/drawer.ts#L45)

Classes to add on the backdrop DOM element.

#### Default Value

`''`

#### Inherited from

`CoreState.backdropClass`

***

### backdropHidden

> **backdropHidden**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:194](https://github.com/AmadeusITGroup/AgnosUI/blob/c1f70965be611a493853d090804a9df573601300/core/src/components/drawer/drawer.ts#L194)

Whether the backdrop is fully hidden. This can be true either because [backdrop](DrawerProps.md#backdrop) is false or
because [visible](#visible) is false and there is no current transition.

#### Inherited from

`CoreState.backdropHidden`

***

### children

> **children**: `SlotContent`\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>

Defined in: [core-bootstrap/src/components/drawer/drawer.ts:39](https://github.com/AmadeusITGroup/AgnosUI/blob/c1f70965be611a493853d090804a9df573601300/core-bootstrap/src/components/drawer/drawer.ts#L39)

Template for the drawer body

#### Inherited from

`DrawerExtraProps.children`

***

### className

> **className**: `string`

Defined in: [core/src/components/drawer/drawer.ts:28](https://github.com/AmadeusITGroup/AgnosUI/blob/c1f70965be611a493853d090804a9df573601300/core/src/components/drawer/drawer.ts#L28)

CSS classes to be applied on the widget main container

#### Default Value

`'w-full'`

#### Inherited from

`CoreState.className`

***

### container

> **container**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) \| `null`

Defined in: [core/src/components/drawer/drawer.ts:39](https://github.com/AmadeusITGroup/AgnosUI/blob/c1f70965be611a493853d090804a9df573601300/core/src/components/drawer/drawer.ts#L39)

Which element should contain the drawer and backdrop DOM elements.
If it is not null, the drawer and backdrop DOM elements are moved to the specified container.
Otherwise, they stay where the widget is located.

#### Default Value

```ts
typeof window !== 'undefined' ? document.body : null
```

#### Inherited from

`CoreState.container`

***

### header

> **header**: `SlotContent`\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>

Defined in: [core-bootstrap/src/components/drawer/drawer.ts:35](https://github.com/AmadeusITGroup/AgnosUI/blob/c1f70965be611a493853d090804a9df573601300/core-bootstrap/src/components/drawer/drawer.ts#L35)

Template for the drawer header

#### Inherited from

`DrawerExtraProps.header`

***

### hidden

> **hidden**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:198](https://github.com/AmadeusITGroup/AgnosUI/blob/c1f70965be611a493853d090804a9df573601300/core/src/components/drawer/drawer.ts#L198)

Flag to show whether the drawer is fully hidden.

#### Inherited from

`CoreState.hidden`

***

### resizable

> **resizable**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:57](https://github.com/AmadeusITGroup/AgnosUI/blob/c1f70965be611a493853d090804a9df573601300/core/src/components/drawer/drawer.ts#L57)

If `true`, the drawer can be resized by the user.

#### Default Value

`false`

#### Inherited from

`CoreState.resizable`

***

### structure

> **structure**: `SlotContent`\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>

Defined in: [core-bootstrap/src/components/drawer/drawer.ts:31](https://github.com/AmadeusITGroup/AgnosUI/blob/c1f70965be611a493853d090804a9df573601300/core-bootstrap/src/components/drawer/drawer.ts#L31)

Global template for the drawer component

#### Inherited from

`DrawerExtraProps.structure`

***

### visible

> **visible**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:51](https://github.com/AmadeusITGroup/AgnosUI/blob/c1f70965be611a493853d090804a9df573601300/core/src/components/drawer/drawer.ts#L51)

If `true`, the drawer is shown; otherwise, it is hidden.

#### Default Value

`false`

#### Inherited from

`CoreState.visible`
