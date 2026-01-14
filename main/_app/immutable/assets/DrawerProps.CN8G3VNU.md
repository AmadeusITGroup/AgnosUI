Defined in: [core/src/components/drawer/drawer.ts:78](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/drawer/drawer.ts#L78)

Interface representing the properties for the Drawer component.

## Extends

- `DrawerCommonPropsAndState`

## Properties

### animated

> **animated**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:111](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/drawer/drawer.ts#L111)

If `true` opening and closing will be animated.

#### Default Value

`true`

***

### ariaDescribedBy

> **ariaDescribedBy**: `string`

Defined in: [core/src/components/drawer/drawer.ts:123](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/drawer/drawer.ts#L123)

aria-describedby attribute to use for the drawer element.

#### Default Value

`''`

***

### ariaLabelledBy

> **ariaLabelledBy**: `string`

Defined in: [core/src/components/drawer/drawer.ts:117](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/drawer/drawer.ts#L117)

aria-labelledby attribute to use for the drawer element.

#### Default Value

`''`

***

### backdrop

> **backdrop**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:129](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/drawer/drawer.ts#L129)

If `true` displays the backdrop element and disables the body scrolling, otherwise the body of the document is navigable

#### Default Value

`true`

***

### backdropClass

> **backdropClass**: `string`

Defined in: [core/src/components/drawer/drawer.ts:53](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/drawer/drawer.ts#L53)

Classes to add on the backdrop DOM element.

#### Default Value

`''`

#### Inherited from

`DrawerCommonPropsAndState.backdropClass`

***

### backdropTransition

> **backdropTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: [core/src/components/drawer/drawer.ts:105](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/drawer/drawer.ts#L105)

The transition to use for the backdrop behind the drawer (if present).

#### Default Value

```ts
() => {}
```

***

### bodyScroll

> **bodyScroll**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:135](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/drawer/drawer.ts#L135)

If `true` allows body scrolling when the drawer is open.

#### Default Value

`false`

***

### className

> **className**: `string`

Defined in: [core/src/components/drawer/drawer.ts:36](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/drawer/drawer.ts#L36)

CSS classes to be applied on the widget main container

#### Default Value

`'w-full'`

#### Inherited from

`DrawerCommonPropsAndState.className`

***

### container

> **container**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) \| `null`

Defined in: [core/src/components/drawer/drawer.ts:47](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/drawer/drawer.ts#L47)

Which element should contain the drawer and backdrop DOM elements.
If it is not null, the drawer and backdrop DOM elements are moved to the specified container.
Otherwise, they stay where the widget is located.

#### Default Value

```ts
typeof window !== 'undefined' ? document.body : null
```

#### Inherited from

`DrawerCommonPropsAndState.container`

***

### onHidden()

> **onHidden**: () => `void`

Defined in: [core/src/components/drawer/drawer.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/drawer/drawer.ts#L144)

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

Defined in: [core/src/components/drawer/drawer.ts:193](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/drawer/drawer.ts#L193)

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

Defined in: [core/src/components/drawer/drawer.ts:184](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/drawer/drawer.ts#L184)

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

Defined in: [core/src/components/drawer/drawer.ts:202](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/drawer/drawer.ts#L202)

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

Defined in: [core/src/components/drawer/drawer.ts:153](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/drawer/drawer.ts#L153)

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

Defined in: [core/src/components/drawer/drawer.ts:164](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/drawer/drawer.ts#L164)

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

Defined in: [core/src/components/drawer/drawer.ts:175](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/drawer/drawer.ts#L175)

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

Defined in: [core/src/components/drawer/drawer.ts:65](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/drawer/drawer.ts#L65)

If `true`, the drawer can be resized by the user.

#### Default Value

`false`

#### Inherited from

`DrawerCommonPropsAndState.resizable`

***

### size

> **size**: `number` \| `null`

Defined in: [core/src/components/drawer/drawer.ts:72](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/drawer/drawer.ts#L72)

Size of the drawer in pixel once the user start interacting.
It corresponds to the height or the width depending on the drawer orientation

#### Default Value

`null`

#### Inherited from

`DrawerCommonPropsAndState.size`

***

### transition

> **transition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: [core/src/components/drawer/drawer.ts:87](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/drawer/drawer.ts#L87)

The transition function will be executed when the drawer is displayed or hidden.

#### Default Value

```ts
() => {}
```

***

### verticalTransition

> **verticalTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: [core/src/components/drawer/drawer.ts:96](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/drawer/drawer.ts#L96)

The transition function for vertically positioned drawer (top, bottom) that will be executed when the drawer is displayed or hidden.

#### Default Value

```ts
() => {}
```

***

### visible

> **visible**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:59](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/drawer/drawer.ts#L59)

If `true`, the drawer is shown; otherwise, it is hidden.

#### Default Value

`false`

#### Inherited from

`DrawerCommonPropsAndState.visible`
