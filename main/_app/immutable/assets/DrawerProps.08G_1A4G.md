Defined in: [components/drawer/drawer.ts:80](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/core/src/components/drawer/drawer.ts#L80)

Interface representing the properties for the Drawer component.

## Extends

- `DrawerCommonPropsAndState`

## Properties

### animated

> **animated**: `boolean`

Defined in: [components/drawer/drawer.ts:113](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/core/src/components/drawer/drawer.ts#L113)

If `true` opening and closing will be animated.

#### Default Value

`true`

***

### ariaDescribedBy

> **ariaDescribedBy**: `string`

Defined in: [components/drawer/drawer.ts:125](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/core/src/components/drawer/drawer.ts#L125)

aria-describedby attribute to use for the drawer element.

#### Default Value

`''`

***

### ariaLabelledBy

> **ariaLabelledBy**: `string`

Defined in: [components/drawer/drawer.ts:119](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/core/src/components/drawer/drawer.ts#L119)

aria-labelledby attribute to use for the drawer element.

#### Default Value

`''`

***

### backdrop

> **backdrop**: `boolean`

Defined in: [components/drawer/drawer.ts:131](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/core/src/components/drawer/drawer.ts#L131)

If `true` displays the backdrop element and disables the body scrolling, otherwise the body of the document is navigable

#### Default Value

`true`

***

### backdropClass

> **backdropClass**: `string`

Defined in: [components/drawer/drawer.ts:55](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/core/src/components/drawer/drawer.ts#L55)

Classes to add on the backdrop DOM element.

#### Default Value

`''`

#### Inherited from

`DrawerCommonPropsAndState.backdropClass`

***

### backdropTransition

> **backdropTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: [components/drawer/drawer.ts:107](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/core/src/components/drawer/drawer.ts#L107)

The transition to use for the backdrop behind the drawer (if present).

#### Default Value

```ts
() => {}
```

***

### bodyScroll

> **bodyScroll**: `boolean`

Defined in: [components/drawer/drawer.ts:137](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/core/src/components/drawer/drawer.ts#L137)

If `true` allows body scrolling when the drawer is open.

#### Default Value

`false`

***

### className

> **className**: `string`

Defined in: [components/drawer/drawer.ts:38](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/core/src/components/drawer/drawer.ts#L38)

CSS classes to be applied on the widget main container

#### Default Value

`'w-full'`

#### Inherited from

`DrawerCommonPropsAndState.className`

***

### container

> **container**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) \| `null`

Defined in: [components/drawer/drawer.ts:49](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/core/src/components/drawer/drawer.ts#L49)

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

Defined in: [components/drawer/drawer.ts:143](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/core/src/components/drawer/drawer.ts#L143)

If `true` focuses the drawer when it is opened.

#### Default Value

`true`

***

### onHidden()

> **onHidden**: () => `void`

Defined in: [components/drawer/drawer.ts:152](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/core/src/components/drawer/drawer.ts#L152)

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

Defined in: [components/drawer/drawer.ts:201](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/core/src/components/drawer/drawer.ts#L201)

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

Defined in: [components/drawer/drawer.ts:192](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/core/src/components/drawer/drawer.ts#L192)

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

Defined in: [components/drawer/drawer.ts:210](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/core/src/components/drawer/drawer.ts#L210)

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

Defined in: [components/drawer/drawer.ts:161](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/core/src/components/drawer/drawer.ts#L161)

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

Defined in: [components/drawer/drawer.ts:172](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/core/src/components/drawer/drawer.ts#L172)

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

Defined in: [components/drawer/drawer.ts:183](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/core/src/components/drawer/drawer.ts#L183)

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

Defined in: [components/drawer/drawer.ts:67](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/core/src/components/drawer/drawer.ts#L67)

If `true`, the drawer can be resized by the user.

#### Default Value

`false`

#### Inherited from

`DrawerCommonPropsAndState.resizable`

***

### size

> **size**: `number` \| `null`

Defined in: [components/drawer/drawer.ts:74](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/core/src/components/drawer/drawer.ts#L74)

Size of the drawer in pixel once the user start interacting.
It corresponds to the height or the width depending on the drawer orientation

#### Default Value

`null`

#### Inherited from

`DrawerCommonPropsAndState.size`

***

### transition

> **transition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: [components/drawer/drawer.ts:89](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/core/src/components/drawer/drawer.ts#L89)

The transition function will be executed when the drawer is displayed or hidden.

#### Default Value

```ts
() => {}
```

***

### verticalTransition

> **verticalTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: [components/drawer/drawer.ts:98](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/core/src/components/drawer/drawer.ts#L98)

The transition function for vertically positioned drawer (top, bottom) that will be executed when the drawer is displayed or hidden.

#### Default Value

```ts
() => {}
```

***

### visible

> **visible**: `boolean`

Defined in: [components/drawer/drawer.ts:61](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/core/src/components/drawer/drawer.ts#L61)

If `true`, the drawer is shown; otherwise, it is hidden.

#### Default Value

`false`

#### Inherited from

`DrawerCommonPropsAndState.visible`
