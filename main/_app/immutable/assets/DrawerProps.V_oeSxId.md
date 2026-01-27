Defined in: [core-bootstrap/src/components/drawer/drawer.ts:50](https://github.com/AmadeusITGroup/AgnosUI/blob/6733946b83dc35ee4b8cea5d89b2593b6ec6eb28/core-bootstrap/src/components/drawer/drawer.ts#L50)

Represents the properties for the Drawer component.

## Extends

- `DrawerProps`.`DrawerExtraProps`

## Properties

### animated

> **animated**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:112](https://github.com/AmadeusITGroup/AgnosUI/blob/6733946b83dc35ee4b8cea5d89b2593b6ec6eb28/core/src/components/drawer/drawer.ts#L112)

If `true` opening and closing will be animated.

#### Default Value

`true`

#### Inherited from

`CoreProps.animated`

***

### ariaDescribedBy

> **ariaDescribedBy**: `string`

Defined in: [core/src/components/drawer/drawer.ts:124](https://github.com/AmadeusITGroup/AgnosUI/blob/6733946b83dc35ee4b8cea5d89b2593b6ec6eb28/core/src/components/drawer/drawer.ts#L124)

aria-describedby attribute to use for the drawer element.

#### Default Value

`''`

#### Inherited from

`CoreProps.ariaDescribedBy`

***

### ariaLabelledBy

> **ariaLabelledBy**: `string`

Defined in: [core/src/components/drawer/drawer.ts:118](https://github.com/AmadeusITGroup/AgnosUI/blob/6733946b83dc35ee4b8cea5d89b2593b6ec6eb28/core/src/components/drawer/drawer.ts#L118)

aria-labelledby attribute to use for the drawer element.

#### Default Value

`''`

#### Inherited from

`CoreProps.ariaLabelledBy`

***

### backdrop

> **backdrop**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:130](https://github.com/AmadeusITGroup/AgnosUI/blob/6733946b83dc35ee4b8cea5d89b2593b6ec6eb28/core/src/components/drawer/drawer.ts#L130)

If `true` displays the backdrop element and disables the body scrolling, otherwise the body of the document is navigable

#### Default Value

`true`

#### Inherited from

`CoreProps.backdrop`

***

### backdropClass

> **backdropClass**: `string`

Defined in: [core/src/components/drawer/drawer.ts:54](https://github.com/AmadeusITGroup/AgnosUI/blob/6733946b83dc35ee4b8cea5d89b2593b6ec6eb28/core/src/components/drawer/drawer.ts#L54)

Classes to add on the backdrop DOM element.

#### Default Value

`''`

#### Inherited from

`CoreProps.backdropClass`

***

### backdropTransition

> **backdropTransition**: `TransitionFn`

Defined in: [core-bootstrap/src/components/drawer/drawer.ts:74](https://github.com/AmadeusITGroup/AgnosUI/blob/6733946b83dc35ee4b8cea5d89b2593b6ec6eb28/core-bootstrap/src/components/drawer/drawer.ts#L74)

The transition to use for the backdrop behind the drawer (if present).

#### Default Value

`fadeTransition`

#### Overrides

`CoreProps.backdropTransition`

***

### bodyScroll

> **bodyScroll**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:136](https://github.com/AmadeusITGroup/AgnosUI/blob/6733946b83dc35ee4b8cea5d89b2593b6ec6eb28/core/src/components/drawer/drawer.ts#L136)

If `true` allows body scrolling when the drawer is open.

#### Default Value

`false`

#### Inherited from

`CoreProps.bodyScroll`

***

### children

> **children**: `SlotContent`\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>

Defined in: [core-bootstrap/src/components/drawer/drawer.ts:40](https://github.com/AmadeusITGroup/AgnosUI/blob/6733946b83dc35ee4b8cea5d89b2593b6ec6eb28/core-bootstrap/src/components/drawer/drawer.ts#L40)

Template for the drawer body

#### Inherited from

`DrawerExtraProps.children`

***

### className

> **className**: `string`

Defined in: [core/src/components/drawer/drawer.ts:37](https://github.com/AmadeusITGroup/AgnosUI/blob/6733946b83dc35ee4b8cea5d89b2593b6ec6eb28/core/src/components/drawer/drawer.ts#L37)

CSS classes to be applied on the widget main container

#### Default Value

`'w-full'`

#### Inherited from

`CoreProps.className`

***

### container

> **container**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) \| `null`

Defined in: [core/src/components/drawer/drawer.ts:48](https://github.com/AmadeusITGroup/AgnosUI/blob/6733946b83dc35ee4b8cea5d89b2593b6ec6eb28/core/src/components/drawer/drawer.ts#L48)

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

### focusOnInit

> **focusOnInit**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:142](https://github.com/AmadeusITGroup/AgnosUI/blob/6733946b83dc35ee4b8cea5d89b2593b6ec6eb28/core/src/components/drawer/drawer.ts#L142)

If `true` focuses the drawer when it is opened.

#### Default Value

`true`

#### Inherited from

`CoreProps.focusOnInit`

***

### header

> **header**: `SlotContent`\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>

Defined in: [core-bootstrap/src/components/drawer/drawer.ts:36](https://github.com/AmadeusITGroup/AgnosUI/blob/6733946b83dc35ee4b8cea5d89b2593b6ec6eb28/core-bootstrap/src/components/drawer/drawer.ts#L36)

Template for the drawer header

#### Inherited from

`DrawerExtraProps.header`

***

### onHidden()

> **onHidden**: () => `void`

Defined in: [core/src/components/drawer/drawer.ts:151](https://github.com/AmadeusITGroup/AgnosUI/blob/6733946b83dc35ee4b8cea5d89b2593b6ec6eb28/core/src/components/drawer/drawer.ts#L151)

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

### onMaximizedChange()

> **onMaximizedChange**: (`isMaximized`) => `void`

Defined in: [core/src/components/drawer/drawer.ts:200](https://github.com/AmadeusITGroup/AgnosUI/blob/6733946b83dc35ee4b8cea5d89b2593b6ec6eb28/core/src/components/drawer/drawer.ts#L200)

Event to be triggered when the maximized state changes.

#### Parameters

##### isMaximized

`boolean`

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Inherited from

`CoreProps.onMaximizedChange`

***

### onMinimizedChange()

> **onMinimizedChange**: (`isMinimized`) => `void`

Defined in: [core/src/components/drawer/drawer.ts:191](https://github.com/AmadeusITGroup/AgnosUI/blob/6733946b83dc35ee4b8cea5d89b2593b6ec6eb28/core/src/components/drawer/drawer.ts#L191)

Event to be triggered when the minimized state changes.

#### Parameters

##### isMinimized

`boolean`

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Inherited from

`CoreProps.onMinimizedChange`

***

### onResizingChange()

> **onResizingChange**: (`isResizing`) => `void`

Defined in: [core/src/components/drawer/drawer.ts:209](https://github.com/AmadeusITGroup/AgnosUI/blob/6733946b83dc35ee4b8cea5d89b2593b6ec6eb28/core/src/components/drawer/drawer.ts#L209)

Event to be triggered when the user starts or stops resizing the drawer.

#### Parameters

##### isResizing

`boolean`

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Inherited from

`CoreProps.onResizingChange`

***

### onShown()

> **onShown**: () => `void`

Defined in: [core/src/components/drawer/drawer.ts:160](https://github.com/AmadeusITGroup/AgnosUI/blob/6733946b83dc35ee4b8cea5d89b2593b6ec6eb28/core/src/components/drawer/drawer.ts#L160)

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

### onSizeChange()

> **onSizeChange**: (`size`) => `void`

Defined in: [core/src/components/drawer/drawer.ts:171](https://github.com/AmadeusITGroup/AgnosUI/blob/6733946b83dc35ee4b8cea5d89b2593b6ec6eb28/core/src/components/drawer/drawer.ts#L171)

An event emitted when the drawer size changes (width or height depending on the orientation).

Event payload is equal to the newly selected width or height.

#### Parameters

##### size

`number` | `null`

#### Returns

`void`

#### Default Value

```ts
() => {}
```

#### Inherited from

`CoreProps.onSizeChange`

***

### onVisibleChange()

> **onVisibleChange**: (`visible`) => `void`

Defined in: [core/src/components/drawer/drawer.ts:182](https://github.com/AmadeusITGroup/AgnosUI/blob/6733946b83dc35ee4b8cea5d89b2593b6ec6eb28/core/src/components/drawer/drawer.ts#L182)

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

### resizable

> **resizable**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:66](https://github.com/AmadeusITGroup/AgnosUI/blob/6733946b83dc35ee4b8cea5d89b2593b6ec6eb28/core/src/components/drawer/drawer.ts#L66)

If `true`, the drawer can be resized by the user.

#### Default Value

`false`

#### Inherited from

`CoreProps.resizable`

***

### size

> **size**: `number` \| `null`

Defined in: [core/src/components/drawer/drawer.ts:73](https://github.com/AmadeusITGroup/AgnosUI/blob/6733946b83dc35ee4b8cea5d89b2593b6ec6eb28/core/src/components/drawer/drawer.ts#L73)

Size of the drawer in pixel once the user start interacting.
It corresponds to the height or the width depending on the drawer orientation

#### Default Value

`null`

#### Inherited from

`CoreProps.size`

***

### structure

> **structure**: `SlotContent`\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>

Defined in: [core-bootstrap/src/components/drawer/drawer.ts:32](https://github.com/AmadeusITGroup/AgnosUI/blob/6733946b83dc35ee4b8cea5d89b2593b6ec6eb28/core-bootstrap/src/components/drawer/drawer.ts#L32)

Global template for the drawer component

#### Inherited from

`DrawerExtraProps.structure`

***

### transition

> **transition**: `TransitionFn`

Defined in: [core-bootstrap/src/components/drawer/drawer.ts:59](https://github.com/AmadeusITGroup/AgnosUI/blob/6733946b83dc35ee4b8cea5d89b2593b6ec6eb28/core-bootstrap/src/components/drawer/drawer.ts#L59)

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

Defined in: [core-bootstrap/src/components/drawer/drawer.ts:68](https://github.com/AmadeusITGroup/AgnosUI/blob/6733946b83dc35ee4b8cea5d89b2593b6ec6eb28/core-bootstrap/src/components/drawer/drawer.ts#L68)

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

Defined in: [core/src/components/drawer/drawer.ts:60](https://github.com/AmadeusITGroup/AgnosUI/blob/6733946b83dc35ee4b8cea5d89b2593b6ec6eb28/core/src/components/drawer/drawer.ts#L60)

If `true`, the drawer is shown; otherwise, it is hidden.

#### Default Value

`false`

#### Inherited from

`CoreProps.visible`
