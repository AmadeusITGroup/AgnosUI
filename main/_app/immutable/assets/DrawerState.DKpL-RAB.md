Defined in: [core-bootstrap/src/components/drawer/drawer.ts:46](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core-bootstrap/src/components/drawer/drawer.ts#L46)

Represents the state of a Drawer component.

## Extends

- `DrawerState`.`DrawerExtraProps`

## Properties

### backdropClass

> **backdropClass**: `string`

Defined in: [core/src/components/drawer/drawer.ts:55](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core/src/components/drawer/drawer.ts#L55)

Classes to add on the backdrop DOM element.

#### Default Value

`''`

#### Inherited from

`CoreState.backdropClass`

***

### backdropHidden

> **backdropHidden**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:221](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core/src/components/drawer/drawer.ts#L221)

Whether the backdrop is fully hidden. This can be true either because [backdrop](DrawerProps.md#backdrop) is false or
because [visible](#visible) is false and there is no current transition.

#### Inherited from

`CoreState.backdropHidden`

***

### children

> **children**: `SlotContent`\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>

Defined in: [core-bootstrap/src/components/drawer/drawer.ts:40](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core-bootstrap/src/components/drawer/drawer.ts#L40)

Template for the drawer body

#### Inherited from

`DrawerExtraProps.children`

***

### className

> **className**: `string`

Defined in: [core/src/components/drawer/drawer.ts:38](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core/src/components/drawer/drawer.ts#L38)

CSS classes to be applied on the widget main container

#### Default Value

`'w-full'`

#### Inherited from

`CoreState.className`

***

### container

> **container**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) \| `null`

Defined in: [core/src/components/drawer/drawer.ts:49](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core/src/components/drawer/drawer.ts#L49)

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

Defined in: [core-bootstrap/src/components/drawer/drawer.ts:36](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core-bootstrap/src/components/drawer/drawer.ts#L36)

Template for the drawer header

#### Inherited from

`DrawerExtraProps.header`

***

### hidden

> **hidden**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:225](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core/src/components/drawer/drawer.ts#L225)

Flag to show whether the drawer is fully hidden.

#### Inherited from

`CoreState.hidden`

***

### isVertical

> **isVertical**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:229](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core/src/components/drawer/drawer.ts#L229)

Flag to show whether the drawer is vertically positioned.

#### Inherited from

`CoreState.isVertical`

***

### resizable

> **resizable**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:67](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core/src/components/drawer/drawer.ts#L67)

If `true`, the drawer can be resized by the user.

#### Default Value

`false`

#### Inherited from

`CoreState.resizable`

***

### size

> **size**: `number` \| `null`

Defined in: [core/src/components/drawer/drawer.ts:74](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core/src/components/drawer/drawer.ts#L74)

Size of the drawer in pixel once the user start interacting.
It corresponds to the height or the width depending on the drawer orientation

#### Default Value

`null`

#### Inherited from

`CoreState.size`

***

### structure

> **structure**: `SlotContent`\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>

Defined in: [core-bootstrap/src/components/drawer/drawer.ts:32](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core-bootstrap/src/components/drawer/drawer.ts#L32)

Global template for the drawer component

#### Inherited from

`DrawerExtraProps.structure`

***

### visible

> **visible**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:61](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core/src/components/drawer/drawer.ts#L61)

If `true`, the drawer is shown; otherwise, it is hidden.

#### Default Value

`false`

#### Inherited from

`CoreState.visible`
