Defined in: [core/src/components/drawer/drawer.ts:57](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/drawer/drawer.ts#L57)

Interface representing the properties for the Drawer component.

## Extends

- `DrawerCommonPropsAndState`

## Properties

### animated

> **animated**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:88](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/drawer/drawer.ts#L88)

If `true` opening and closing will be animated.

***

### ariaDescribedBy

> **ariaDescribedBy**: `string`

Defined in: [core/src/components/drawer/drawer.ts:96](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/drawer/drawer.ts#L96)

aria-describedby attribute to use for the drawer element.

***

### ariaLabelledBy

> **ariaLabelledBy**: `string`

Defined in: [core/src/components/drawer/drawer.ts:92](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/drawer/drawer.ts#L92)

aria-labelledby attribute to use for the drawer element.

***

### backdrop

> **backdrop**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:108](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/drawer/drawer.ts#L108)

If `true` displays the backdrop element and disables the body scrolling, otherwise the body of the document is navigable

***

### backdropClass

> **backdropClass**: `string`

Defined in: [core/src/components/drawer/drawer.ts:39](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/drawer/drawer.ts#L39)

Classes to add on the backdrop DOM element.

#### Default Value

`''`

#### Inherited from

`DrawerCommonPropsAndState.backdropClass`

***

### backdropTransition

> **backdropTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: [core/src/components/drawer/drawer.ts:84](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/drawer/drawer.ts#L84)

The transition to use for the backdrop behind the drawer (if present).

#### Default Value

```ts
() => {}
```

***

### bodyScroll

> **bodyScroll**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:112](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/drawer/drawer.ts#L112)

If `true` allows body scrolling when the drawer is open.

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`DrawerCommonPropsAndState.className`

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

`DrawerCommonPropsAndState.container`

***

### height

> **height**: `number`

Defined in: [core/src/components/drawer/drawer.ts:104](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/drawer/drawer.ts#L104)

The height of the drawer in pixels.

***

### onHeightChange()

> **onHeightChange**: (`width`) => `void`

Defined in: [core/src/components/drawer/drawer.ts:152](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/drawer/drawer.ts#L152)

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

***

### onHidden()

> **onHidden**: () => `void`

Defined in: [core/src/components/drawer/drawer.ts:121](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/drawer/drawer.ts#L121)

Event to be triggered when the transition is completed and the drawer is not visible.

#### Returns

`void`

#### Default Value

```ts
() => {}
```

***

### onShown()

> **onShown**: () => `void`

Defined in: [core/src/components/drawer/drawer.ts:130](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/drawer/drawer.ts#L130)

Event to be triggered when the transition is completed and the drawer is visible.

#### Returns

`void`

#### Default Value

```ts
() => {}
```

***

### onVisibleChange()

> **onVisibleChange**: (`visible`) => `void`

Defined in: [core/src/components/drawer/drawer.ts:163](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/drawer/drawer.ts#L163)

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

### onWidthChange()

> **onWidthChange**: (`width`) => `void`

Defined in: [core/src/components/drawer/drawer.ts:141](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/drawer/drawer.ts#L141)

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

***

### resizable

> **resizable**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:51](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/drawer/drawer.ts#L51)

If `true`, the drawer can be resized by the user.

#### Default Value

`false`

#### Inherited from

`DrawerCommonPropsAndState.resizable`

***

### transition

> **transition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: [core/src/components/drawer/drawer.ts:66](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/drawer/drawer.ts#L66)

The transition function will be executed when the drawer is displayed or hidden.

#### Default Value

```ts
() => {}
```

***

### verticalTransition

> **verticalTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: [core/src/components/drawer/drawer.ts:75](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/drawer/drawer.ts#L75)

The transition function for vertically positioned drawer (top, bottom) that will be executed when the drawer is displayed or hidden.

#### Default Value

```ts
() => {}
```

***

### visible

> **visible**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:45](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/drawer/drawer.ts#L45)

If `true`, the drawer is shown; otherwise, it is hidden.

#### Default Value

`false`

#### Inherited from

`DrawerCommonPropsAndState.visible`

***

### width

> **width**: `number`

Defined in: [core/src/components/drawer/drawer.ts:100](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/drawer/drawer.ts#L100)

The width of the drawer in pixels.
