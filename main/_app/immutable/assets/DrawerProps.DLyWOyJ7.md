Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:109

Represents the properties for the Drawer component.

## Properties

### animated

> **animated**: `boolean`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:143

If `true` opening and closing will be animated.

#### Default Value

`true`

***

### ariaDescribedBy

> **ariaDescribedBy**: `string`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:157

aria-describedby attribute to use for the drawer element.

#### Default Value

`''`

***

### ariaLabelledBy

> **ariaLabelledBy**: `string`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:150

aria-labelledby attribute to use for the drawer element.

#### Default Value

`''`

***

### backdrop

> **backdrop**: `boolean`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:164

If `true` displays the backdrop element and disables the body scrolling, otherwise the body of the document is navigable

#### Default Value

`true`

***

### backdropClass

> **backdropClass**: `string`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:278

Classes to add on the backdrop DOM element.

#### Default Value

`''`

***

### backdropTransition

> **backdropTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:136

The transition to use for the backdrop behind the drawer (if present).

#### Default Value

`fadeTransition`

***

### bodyScroll

> **bodyScroll**: `boolean`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:171

If `true` allows body scrolling when the drawer is open.

#### Default Value

`false`

***

### children

> **children**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:315

Template for the drawer body

***

### className

> **className**: `string`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:259

CSS classes to be applied on the widget main container

#### Default Value

`'w-full'`

***

### container

> **container**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) \| `null`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:271

Which element should contain the drawer and backdrop DOM elements.
If it is not null, the drawer and backdrop DOM elements are moved to the specified container.
Otherwise, they stay where the widget is located.

#### Default Value

```ts
typeof window !== 'undefined' ? document.body : null
```

***

### focusOnInit

> **focusOnInit**: `boolean`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:178

If `true` focuses the drawer when it is opened.

#### Default Value

`true`

***

### header

> **header**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:310

Template for the drawer header

***

### onHidden()

> **onHidden**: () => `void`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:188

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

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:242

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

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:232

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

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:252

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

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:198

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

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:210

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

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:222

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

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:292

If `true`, the drawer can be resized by the user.

#### Default Value

`false`

***

### size

> **size**: `number` \| `null`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:300

Size of the drawer in pixel once the user start interacting.
It corresponds to the height or the width depending on the drawer orientation

#### Default Value

`null`

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:305

Global template for the drawer component

***

### transition

> **transition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:119

The transition function will be executed when the drawer is displayed or hidden.

#### Default Value

```ts
collapseHorizontalTransition
```

***

### verticalTransition

> **verticalTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:129

The transition function for vertically positioned drawer (top, bottom) that will be executed when the drawer is displayed or hidden.

#### Default Value

```ts
collapseVerticalTransition
```

***

### visible

> **visible**: `boolean`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:285

If `true`, the drawer is shown; otherwise, it is hidden.

#### Default Value

`false`
