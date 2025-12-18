Defined in: [core-bootstrap/src/components/drawer/drawer.ts:49](https://github.com/AmadeusITGroup/AgnosUI/blob/6cf3d90dcf6a9c5d1302ee358d04a1ea5b87fa1b/core-bootstrap/src/components/drawer/drawer.ts#L49)

Represents the properties for the Drawer component.

## Extends

- `DrawerProps`.`DrawerExtraProps`

## Properties

### animated

> **animated**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:96](https://github.com/AmadeusITGroup/AgnosUI/blob/6cf3d90dcf6a9c5d1302ee358d04a1ea5b87fa1b/core/src/components/drawer/drawer.ts#L96)

If `true` opening and closing will be animated.

#### Default Value

`true`

#### Inherited from

`CoreProps.animated`

***

### ariaDescribedBy

> **ariaDescribedBy**: `string`

Defined in: [core/src/components/drawer/drawer.ts:108](https://github.com/AmadeusITGroup/AgnosUI/blob/6cf3d90dcf6a9c5d1302ee358d04a1ea5b87fa1b/core/src/components/drawer/drawer.ts#L108)

aria-describedby attribute to use for the drawer element.

#### Default Value

`''`

#### Inherited from

`CoreProps.ariaDescribedBy`

***

### ariaLabelledBy

> **ariaLabelledBy**: `string`

Defined in: [core/src/components/drawer/drawer.ts:102](https://github.com/AmadeusITGroup/AgnosUI/blob/6cf3d90dcf6a9c5d1302ee358d04a1ea5b87fa1b/core/src/components/drawer/drawer.ts#L102)

aria-labelledby attribute to use for the drawer element.

#### Default Value

`''`

#### Inherited from

`CoreProps.ariaLabelledBy`

***

### backdrop

> **backdrop**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:126](https://github.com/AmadeusITGroup/AgnosUI/blob/6cf3d90dcf6a9c5d1302ee358d04a1ea5b87fa1b/core/src/components/drawer/drawer.ts#L126)

If `true` displays the backdrop element and disables the body scrolling, otherwise the body of the document is navigable

#### Default Value

`true`

#### Inherited from

`CoreProps.backdrop`

***

### backdropClass

> **backdropClass**: `string`

Defined in: [core/src/components/drawer/drawer.ts:45](https://github.com/AmadeusITGroup/AgnosUI/blob/6cf3d90dcf6a9c5d1302ee358d04a1ea5b87fa1b/core/src/components/drawer/drawer.ts#L45)

Classes to add on the backdrop DOM element.

#### Default Value

`''`

#### Inherited from

`CoreProps.backdropClass`

***

### backdropTransition

> **backdropTransition**: `TransitionFn`

Defined in: [core-bootstrap/src/components/drawer/drawer.ts:73](https://github.com/AmadeusITGroup/AgnosUI/blob/6cf3d90dcf6a9c5d1302ee358d04a1ea5b87fa1b/core-bootstrap/src/components/drawer/drawer.ts#L73)

The transition to use for the backdrop behind the drawer (if present).

#### Default Value

`fadeTransition`

#### Overrides

`CoreProps.backdropTransition`

***

### bodyScroll

> **bodyScroll**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:132](https://github.com/AmadeusITGroup/AgnosUI/blob/6cf3d90dcf6a9c5d1302ee358d04a1ea5b87fa1b/core/src/components/drawer/drawer.ts#L132)

If `true` allows body scrolling when the drawer is open.

#### Default Value

`false`

#### Inherited from

`CoreProps.bodyScroll`

***

### children

> **children**: `SlotContent`\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>

Defined in: [core-bootstrap/src/components/drawer/drawer.ts:39](https://github.com/AmadeusITGroup/AgnosUI/blob/6cf3d90dcf6a9c5d1302ee358d04a1ea5b87fa1b/core-bootstrap/src/components/drawer/drawer.ts#L39)

Template for the drawer body

#### Inherited from

`DrawerExtraProps.children`

***

### className

> **className**: `string`

Defined in: [core/src/components/drawer/drawer.ts:28](https://github.com/AmadeusITGroup/AgnosUI/blob/6cf3d90dcf6a9c5d1302ee358d04a1ea5b87fa1b/core/src/components/drawer/drawer.ts#L28)

CSS classes to be applied on the widget main container

#### Default Value

`'w-full'`

#### Inherited from

`CoreProps.className`

***

### container

> **container**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) \| `null`

Defined in: [core/src/components/drawer/drawer.ts:39](https://github.com/AmadeusITGroup/AgnosUI/blob/6cf3d90dcf6a9c5d1302ee358d04a1ea5b87fa1b/core/src/components/drawer/drawer.ts#L39)

Which element should contain the drawer and backdrop DOM elements.
If it is not null, the drawer and backdrop DOM elements are moved to the specified container.
Otherwise, they stay where the widget is located.

#### Default Value

```ts
typeof window !== 'undefined' ? document.body : null
```

#### Inherited from

`CoreProps.container`

***

### header

> **header**: `SlotContent`\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>

Defined in: [core-bootstrap/src/components/drawer/drawer.ts:35](https://github.com/AmadeusITGroup/AgnosUI/blob/6cf3d90dcf6a9c5d1302ee358d04a1ea5b87fa1b/core-bootstrap/src/components/drawer/drawer.ts#L35)

Template for the drawer header

#### Inherited from

`DrawerExtraProps.header`

***

### height

> **height**: `number`

Defined in: [core/src/components/drawer/drawer.ts:120](https://github.com/AmadeusITGroup/AgnosUI/blob/6cf3d90dcf6a9c5d1302ee358d04a1ea5b87fa1b/core/src/components/drawer/drawer.ts#L120)

The height of the drawer in pixels.

#### Default Value

`200`

#### Inherited from

`CoreProps.height`

***

### onHeightChange()

> **onHeightChange**: (`width`) => `void`

Defined in: [core/src/components/drawer/drawer.ts:172](https://github.com/AmadeusITGroup/AgnosUI/blob/6cf3d90dcf6a9c5d1302ee358d04a1ea5b87fa1b/core/src/components/drawer/drawer.ts#L172)

An event emitted when the height is changed.

Event payload is equal to the newly selected height.

#### Parameters

##### width

`number`

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Inherited from

`CoreProps.onHeightChange`

***

### onHidden()

> **onHidden**: () => `void`

Defined in: [core/src/components/drawer/drawer.ts:141](https://github.com/AmadeusITGroup/AgnosUI/blob/6cf3d90dcf6a9c5d1302ee358d04a1ea5b87fa1b/core/src/components/drawer/drawer.ts#L141)

Event to be triggered when the transition is completed and the drawer is not visible.

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Inherited from

`CoreProps.onHidden`

***

### onShown()

> **onShown**: () => `void`

Defined in: [core/src/components/drawer/drawer.ts:150](https://github.com/AmadeusITGroup/AgnosUI/blob/6cf3d90dcf6a9c5d1302ee358d04a1ea5b87fa1b/core/src/components/drawer/drawer.ts#L150)

Event to be triggered when the transition is completed and the drawer is visible.

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Inherited from

`CoreProps.onShown`

***

### onVisibleChange()

> **onVisibleChange**: (`visible`) => `void`

Defined in: [core/src/components/drawer/drawer.ts:183](https://github.com/AmadeusITGroup/AgnosUI/blob/6cf3d90dcf6a9c5d1302ee358d04a1ea5b87fa1b/core/src/components/drawer/drawer.ts#L183)

Event to be triggered when the visible property changes.

#### Parameters

##### visible

`boolean`

new value of the visible propery

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Inherited from

`CoreProps.onVisibleChange`

***

### onWidthChange()

> **onWidthChange**: (`width`) => `void`

Defined in: [core/src/components/drawer/drawer.ts:161](https://github.com/AmadeusITGroup/AgnosUI/blob/6cf3d90dcf6a9c5d1302ee358d04a1ea5b87fa1b/core/src/components/drawer/drawer.ts#L161)

An event emitted when the width is changed.

Event payload is equal to the newly selected width.

#### Parameters

##### width

`number`

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Inherited from

`CoreProps.onWidthChange`

***

### resizable

> **resizable**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:57](https://github.com/AmadeusITGroup/AgnosUI/blob/6cf3d90dcf6a9c5d1302ee358d04a1ea5b87fa1b/core/src/components/drawer/drawer.ts#L57)

If `true`, the drawer can be resized by the user.

#### Default Value

`false`

#### Inherited from

`CoreProps.resizable`

***

### structure

> **structure**: `SlotContent`\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>

Defined in: [core-bootstrap/src/components/drawer/drawer.ts:31](https://github.com/AmadeusITGroup/AgnosUI/blob/6cf3d90dcf6a9c5d1302ee358d04a1ea5b87fa1b/core-bootstrap/src/components/drawer/drawer.ts#L31)

Global template for the drawer component

#### Inherited from

`DrawerExtraProps.structure`

***

### transition

> **transition**: `TransitionFn`

Defined in: [core-bootstrap/src/components/drawer/drawer.ts:58](https://github.com/AmadeusITGroup/AgnosUI/blob/6cf3d90dcf6a9c5d1302ee358d04a1ea5b87fa1b/core-bootstrap/src/components/drawer/drawer.ts#L58)

The transition function will be executed when the drawer is displayed or hidden.

#### Default Value

```ts
collapseHorizontalTransition
```

#### Overrides

`CoreProps.transition`

***

### verticalTransition

> **verticalTransition**: `TransitionFn`

Defined in: [core-bootstrap/src/components/drawer/drawer.ts:67](https://github.com/AmadeusITGroup/AgnosUI/blob/6cf3d90dcf6a9c5d1302ee358d04a1ea5b87fa1b/core-bootstrap/src/components/drawer/drawer.ts#L67)

The transition function for vertically positioned drawer (top, bottom) that will be executed when the drawer is displayed or hidden.

#### Default Value

```ts
collapseVerticalTransition
```

#### Overrides

`CoreProps.verticalTransition`

***

### visible

> **visible**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:51](https://github.com/AmadeusITGroup/AgnosUI/blob/6cf3d90dcf6a9c5d1302ee358d04a1ea5b87fa1b/core/src/components/drawer/drawer.ts#L51)

If `true`, the drawer is shown; otherwise, it is hidden.

#### Default Value

`false`

#### Inherited from

`CoreProps.visible`

***

### width

> **width**: `number`

Defined in: [core/src/components/drawer/drawer.ts:114](https://github.com/AmadeusITGroup/AgnosUI/blob/6cf3d90dcf6a9c5d1302ee358d04a1ea5b87fa1b/core/src/components/drawer/drawer.ts#L114)

The width of the drawer in pixels.

#### Default Value

`200`

#### Inherited from

`CoreProps.width`
