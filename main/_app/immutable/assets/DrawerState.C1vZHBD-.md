Defined in: [core-bootstrap/src/components/drawer/drawer.ts:44](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core-bootstrap/src/components/drawer/drawer.ts#L44)

Represents the state of a Drawer component.

## Extends

- `DrawerState`.`DrawerExtraProps`

## Properties

### backdropClass

> **backdropClass**: `string`

Defined in: [core/src/components/drawer/drawer.ts:39](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/drawer/drawer.ts#L39)

Classes to add on the backdrop DOM element.

#### Default Value

`''`

#### Inherited from

`CoreState.backdropClass`

***

### backdropHidden

> **backdropHidden**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:174](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/drawer/drawer.ts#L174)

Whether the backdrop is fully hidden. This can be true either because [backdrop](DrawerProps.md#backdrop) is false or
because [visible](#visible) is false and there is no current transition.

#### Inherited from

`CoreState.backdropHidden`

***

### children

> **children**: `SlotContent`\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>

Defined in: [core-bootstrap/src/components/drawer/drawer.ts:38](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core-bootstrap/src/components/drawer/drawer.ts#L38)

Template for the drawer body

#### Inherited from

`DrawerExtraProps.children`

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CoreState.className`

***

### container

> **container**: `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Defined in: [core/src/components/drawer/drawer.ts:33](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/drawer/drawer.ts#L33)

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

Defined in: [core-bootstrap/src/components/drawer/drawer.ts:34](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core-bootstrap/src/components/drawer/drawer.ts#L34)

Template for the drawer header

#### Inherited from

`DrawerExtraProps.header`

***

### hidden

> **hidden**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:178](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/drawer/drawer.ts#L178)

Flag to show whether the drawer is fully hidden.

#### Inherited from

`CoreState.hidden`

***

### resizable

> **resizable**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:51](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/drawer/drawer.ts#L51)

If `true`, the drawer can be resized by the user.

#### Default Value

`false`

#### Inherited from

`CoreState.resizable`

***

### structure

> **structure**: `SlotContent`\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>

Defined in: [core-bootstrap/src/components/drawer/drawer.ts:30](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core-bootstrap/src/components/drawer/drawer.ts#L30)

Global template for the drawer component

#### Inherited from

`DrawerExtraProps.structure`

***

### visible

> **visible**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:45](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/drawer/drawer.ts#L45)

If `true`, the drawer is shown; otherwise, it is hidden.

#### Default Value

`false`

#### Inherited from

`CoreState.visible`
