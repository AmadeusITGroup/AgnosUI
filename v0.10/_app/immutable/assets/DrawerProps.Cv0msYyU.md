Defined in: [core/src/components/drawer/drawer.ts:79](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/drawer/drawer.ts#L79)

Interface representing the properties for the Drawer component.

## Extends

- `DrawerCommonPropsAndState`

## Properties

### animated

> **animated**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:112](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/drawer/drawer.ts#L112)

If `true` opening and closing will be animated.

#### Default Value

`true`

***

### ariaDescribedBy

> **ariaDescribedBy**: `string`

Defined in: [core/src/components/drawer/drawer.ts:124](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/drawer/drawer.ts#L124)

aria-describedby attribute to use for the drawer element.

#### Default Value

`''`

***

### ariaLabelledBy

> **ariaLabelledBy**: `string`

Defined in: [core/src/components/drawer/drawer.ts:118](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/drawer/drawer.ts#L118)

aria-labelledby attribute to use for the drawer element.

#### Default Value

`''`

***

### backdrop

> **backdrop**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:130](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/drawer/drawer.ts#L130)

If `true` displays the backdrop element and disables the body scrolling, otherwise the body of the document is navigable

#### Default Value

`true`

***

### backdropClass

> **backdropClass**: `string`

Defined in: [core/src/components/drawer/drawer.ts:54](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/drawer/drawer.ts#L54)

Classes to add on the backdrop DOM element.

#### Default Value

`''`

#### Inherited from

`DrawerCommonPropsAndState.backdropClass`

***

### backdropTransition

> **backdropTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: [core/src/components/drawer/drawer.ts:106](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/drawer/drawer.ts#L106)

The transition to use for the backdrop behind the drawer (if present).

#### Default Value

```ts
() => {}
```

***

### bodyScroll

> **bodyScroll**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:136](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/drawer/drawer.ts#L136)

If `true` allows body scrolling when the drawer is open.

#### Default Value

`false`

***

### className

> **className**: `string`

Defined in: [core/src/components/drawer/drawer.ts:37](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/drawer/drawer.ts#L37)

CSS classes to be applied on the widget main container

#### Default Value

`'w-full'`

#### Inherited from

`DrawerCommonPropsAndState.className`

***

### container

> **container**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) \| `null`

Defined in: [core/src/components/drawer/drawer.ts:48](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/drawer/drawer.ts#L48)

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

### focusOnInit

> **focusOnInit**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:142](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/drawer/drawer.ts#L142)

If `true` focuses the drawer when it is opened.

#### Default Value

`true`

***

### onHidden()

> **onHidden**: () => `void`

Defined in: [core/src/components/drawer/drawer.ts:151](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/drawer/drawer.ts#L151)

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

Defined in: [core/src/components/drawer/drawer.ts:200](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/drawer/drawer.ts#L200)

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

Defined in: [core/src/components/drawer/drawer.ts:191](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/drawer/drawer.ts#L191)

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

Defined in: [core/src/components/drawer/drawer.ts:209](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/drawer/drawer.ts#L209)

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

Defined in: [core/src/components/drawer/drawer.ts:160](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/drawer/drawer.ts#L160)

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

Defined in: [core/src/components/drawer/drawer.ts:171](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/drawer/drawer.ts#L171)

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

Defined in: [core/src/components/drawer/drawer.ts:182](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/drawer/drawer.ts#L182)

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

Defined in: [core/src/components/drawer/drawer.ts:66](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/drawer/drawer.ts#L66)

If `true`, the drawer can be resized by the user.

#### Default Value

`false`

#### Inherited from

`DrawerCommonPropsAndState.resizable`

***

### size

> **size**: `number` \| `null`

Defined in: [core/src/components/drawer/drawer.ts:73](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/drawer/drawer.ts#L73)

Size of the drawer in pixel once the user start interacting.
It corresponds to the height or the width depending on the drawer orientation

#### Default Value

`null`

#### Inherited from

`DrawerCommonPropsAndState.size`

***

### transition

> **transition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: [core/src/components/drawer/drawer.ts:88](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/drawer/drawer.ts#L88)

The transition function will be executed when the drawer is displayed or hidden.

#### Default Value

```ts
() => {}
```

***

### verticalTransition

> **verticalTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: [core/src/components/drawer/drawer.ts:97](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/drawer/drawer.ts#L97)

The transition function for vertically positioned drawer (top, bottom) that will be executed when the drawer is displayed or hidden.

#### Default Value

```ts
() => {}
```

***

### visible

> **visible**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:60](https://github.com/AmadeusITGroup/AgnosUI/blob/93a295c77541c77d010ff470915248ba50dbd9c0/core/src/components/drawer/drawer.ts#L60)

If `true`, the drawer is shown; otherwise, it is hidden.

#### Default Value

`false`

#### Inherited from

`DrawerCommonPropsAndState.visible`
