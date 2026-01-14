Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:104

Represents the properties for the Drawer component.

## Properties

### animated

> **animated**: `boolean`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:138

If `true` opening and closing will be animated.

#### Default Value

`true`

***

### ariaDescribedBy

> **ariaDescribedBy**: `string`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:152

aria-describedby attribute to use for the drawer element.

#### Default Value

`''`

***

### ariaLabelledBy

> **ariaLabelledBy**: `string`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:145

aria-labelledby attribute to use for the drawer element.

#### Default Value

`''`

***

### backdrop

> **backdrop**: `boolean`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:159

If `true` displays the backdrop element and disables the body scrolling, otherwise the body of the document is navigable

#### Default Value

`true`

***

### backdropClass

> **backdropClass**: `string`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:266

Classes to add on the backdrop DOM element.

#### Default Value

`''`

***

### backdropTransition

> **backdropTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:131

The transition to use for the backdrop behind the drawer (if present).

#### Default Value

`fadeTransition`

***

### bodyScroll

> **bodyScroll**: `boolean`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:166

If `true` allows body scrolling when the drawer is open.

#### Default Value

`false`

***

### children

> **children**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:303

Template for the drawer body

***

### className

> **className**: `string`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:247

CSS classes to be applied on the widget main container

#### Default Value

`'w-full'`

***

### container

> **container**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) \| `null`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:259

Which element should contain the drawer and backdrop DOM elements.
If it is not null, the drawer and backdrop DOM elements are moved to the specified container.
Otherwise, they stay where the widget is located.

#### Default Value

```ts
typeof window !== 'undefined' ? document.body : null
```

***

### header

> **header**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:298

Template for the drawer header

***

### onHidden()

> **onHidden**: () => `void`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:176

Event to be triggered when the transition is completed and the drawer is not visible.

#### Returns

`void`

#### Default Value

```ts
() => {}
```

***

### onMaximizedChange()

> **onMaximizedChange**: (`isMaximized`) => `void`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:230

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

***

### onMinimizedChange()

> **onMinimizedChange**: (`isMinimized`) => `void`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:220

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

***

### onResizingChange()

> **onResizingChange**: (`isResizing`) => `void`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:240

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

***

### onShown()

> **onShown**: () => `void`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:186

Event to be triggered when the transition is completed and the drawer is visible.

#### Returns

`void`

#### Default Value

```ts
() => {}
```

***

### onSizeChange()

> **onSizeChange**: (`size`) => `void`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:198

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

***

### onVisibleChange()

> **onVisibleChange**: (`visible`) => `void`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:210

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

***

### resizable

> **resizable**: `boolean`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:280

If `true`, the drawer can be resized by the user.

#### Default Value

`false`

***

### size

> **size**: `number` \| `null`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:288

Size of the drawer in pixel once the user start interacting.
It corresponds to the height or the width depending on the drawer orientation

#### Default Value

`null`

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:293

Global template for the drawer component

***

### transition

> **transition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:114

The transition function will be executed when the drawer is displayed or hidden.

#### Default Value

```ts
collapseHorizontalTransition
```

***

### verticalTransition

> **verticalTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:124

The transition function for vertically positioned drawer (top, bottom) that will be executed when the drawer is displayed or hidden.

#### Default Value

```ts
collapseVerticalTransition
```

***

### visible

> **visible**: `boolean`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:273

If `true`, the drawer is shown; otherwise, it is hidden.

#### Default Value

`false`
