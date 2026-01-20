Defined in: [core-bootstrap/src/components/drawer/drawer.ts:46](https://github.com/AmadeusITGroup/AgnosUI/blob/8f711bbe02bc4eee8ede262b8918120254d6f6fd/core-bootstrap/src/components/drawer/drawer.ts#L46)

Represents the state of a Drawer component.

## Extends

- `DrawerState`.`DrawerExtraProps`

## Properties

### backdropClass

> **backdropClass**: `string`

Defined in: [core/src/components/drawer/drawer.ts:53](https://github.com/AmadeusITGroup/AgnosUI/blob/8f711bbe02bc4eee8ede262b8918120254d6f6fd/core/src/components/drawer/drawer.ts#L53)

Classes to add on the backdrop DOM element.

#### Default Value

`''`

#### Inherited from

`CoreState.backdropClass`

***

### backdropHidden

> **backdropHidden**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:213](https://github.com/AmadeusITGroup/AgnosUI/blob/8f711bbe02bc4eee8ede262b8918120254d6f6fd/core/src/components/drawer/drawer.ts#L213)

Whether the backdrop is fully hidden. This can be true either because [backdrop](DrawerProps.md#backdrop) is false or
because [visible](#visible) is false and there is no current transition.

#### Inherited from

`CoreState.backdropHidden`

***

### children

> **children**: `SlotContent`\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>

Defined in: [core-bootstrap/src/components/drawer/drawer.ts:40](https://github.com/AmadeusITGroup/AgnosUI/blob/8f711bbe02bc4eee8ede262b8918120254d6f6fd/core-bootstrap/src/components/drawer/drawer.ts#L40)

Template for the drawer body

#### Inherited from

`DrawerExtraProps.children`

***

### className

> **className**: `string`

Defined in: [core/src/components/drawer/drawer.ts:36](https://github.com/AmadeusITGroup/AgnosUI/blob/8f711bbe02bc4eee8ede262b8918120254d6f6fd/core/src/components/drawer/drawer.ts#L36)

CSS classes to be applied on the widget main container

#### Default Value

`'w-full'`

#### Inherited from

`CoreState.className`

***

### container

> **container**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) \| `null`

Defined in: [core/src/components/drawer/drawer.ts:47](https://github.com/AmadeusITGroup/AgnosUI/blob/8f711bbe02bc4eee8ede262b8918120254d6f6fd/core/src/components/drawer/drawer.ts#L47)

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

Defined in: [core-bootstrap/src/components/drawer/drawer.ts:36](https://github.com/AmadeusITGroup/AgnosUI/blob/8f711bbe02bc4eee8ede262b8918120254d6f6fd/core-bootstrap/src/components/drawer/drawer.ts#L36)

Template for the drawer header

#### Inherited from

`DrawerExtraProps.header`

***

### hidden

> **hidden**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:217](https://github.com/AmadeusITGroup/AgnosUI/blob/8f711bbe02bc4eee8ede262b8918120254d6f6fd/core/src/components/drawer/drawer.ts#L217)

Flag to show whether the drawer is fully hidden.

#### Inherited from

`CoreState.hidden`

***

### resizable

> **resizable**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:65](https://github.com/AmadeusITGroup/AgnosUI/blob/8f711bbe02bc4eee8ede262b8918120254d6f6fd/core/src/components/drawer/drawer.ts#L65)

If `true`, the drawer can be resized by the user.

#### Default Value

`false`

#### Inherited from

`CoreState.resizable`

***

### size

> **size**: `number` \| `null`

Defined in: [core/src/components/drawer/drawer.ts:72](https://github.com/AmadeusITGroup/AgnosUI/blob/8f711bbe02bc4eee8ede262b8918120254d6f6fd/core/src/components/drawer/drawer.ts#L72)

Size of the drawer in pixel once the user start interacting.
It corresponds to the height or the width depending on the drawer orientation

#### Default Value

`null`

#### Inherited from

`CoreState.size`

***

### structure

> **structure**: `SlotContent`\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>

Defined in: [core-bootstrap/src/components/drawer/drawer.ts:32](https://github.com/AmadeusITGroup/AgnosUI/blob/8f711bbe02bc4eee8ede262b8918120254d6f6fd/core-bootstrap/src/components/drawer/drawer.ts#L32)

Global template for the drawer component

#### Inherited from

`DrawerExtraProps.structure`

***

### visible

> **visible**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:59](https://github.com/AmadeusITGroup/AgnosUI/blob/8f711bbe02bc4eee8ede262b8918120254d6f6fd/core/src/components/drawer/drawer.ts#L59)

If `true`, the drawer is shown; otherwise, it is hidden.

#### Default Value

`false`

#### Inherited from

`CoreState.visible`
