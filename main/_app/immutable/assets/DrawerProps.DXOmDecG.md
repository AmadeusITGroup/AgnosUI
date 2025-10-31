Defined in: react/bootstrap/src/components/drawer/drawer.gen.ts:97

Represents the properties for the Drawer component.

## Properties

### animated

> **animated**: `boolean`

Defined in: react/bootstrap/src/components/drawer/drawer.gen.ts:132

If `true` opening and closing will be animated.

***

### ariaDescribedBy

> **ariaDescribedBy**: `string`

Defined in: react/bootstrap/src/components/drawer/drawer.gen.ts:142

aria-describedby attribute to use for the drawer element.

***

### ariaLabelledBy

> **ariaLabelledBy**: `string`

Defined in: react/bootstrap/src/components/drawer/drawer.gen.ts:137

aria-labelledby attribute to use for the drawer element.

***

### backdrop

> **backdrop**: `boolean`

Defined in: react/bootstrap/src/components/drawer/drawer.gen.ts:157

If `true` displays the backdrop element and disables the body scrolling, otherwise the body of the document is navigable

***

### backdropClass

> **backdropClass**: `string`

Defined in: react/bootstrap/src/components/drawer/drawer.gen.ts:237

Classes to add on the backdrop DOM element.

#### Default Value

`''`

***

### backdropTransition

> **backdropTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: react/bootstrap/src/components/drawer/drawer.gen.ts:127

The transition to use for the backdrop behind the drawer (if present).

#### Default Value

```ts
() => {}
```

***

### bodyScroll

> **bodyScroll**: `boolean`

Defined in: react/bootstrap/src/components/drawer/drawer.gen.ts:162

If `true` allows body scrolling when the drawer is open.

***

### children

> **children**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>

Defined in: react/bootstrap/src/components/drawer/drawer.gen.ts:273

Template for the drawer body

***

### className

> **className**: `string`

Defined in: react/bootstrap/src/components/drawer/drawer.gen.ts:258

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### container

> **container**: `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Defined in: react/bootstrap/src/components/drawer/drawer.gen.ts:230

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

Defined in: react/bootstrap/src/components/drawer/drawer.gen.ts:268

Template for the drawer header

***

### height

> **height**: `number`

Defined in: react/bootstrap/src/components/drawer/drawer.gen.ts:152

The height of the drawer in pixels.

***

### onHeightChange()

> **onHeightChange**: (`width`) => `void`

Defined in: react/bootstrap/src/components/drawer/drawer.gen.ts:206

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

Defined in: react/bootstrap/src/components/drawer/drawer.gen.ts:172

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

Defined in: react/bootstrap/src/components/drawer/drawer.gen.ts:182

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

Defined in: react/bootstrap/src/components/drawer/drawer.gen.ts:218

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

Defined in: react/bootstrap/src/components/drawer/drawer.gen.ts:194

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

Defined in: react/bootstrap/src/components/drawer/drawer.gen.ts:251

If `true`, the drawer can be resized by the user.

#### Default Value

`false`

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>

Defined in: react/bootstrap/src/components/drawer/drawer.gen.ts:263

Global template for the drawer component

***

### transition

> **transition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: react/bootstrap/src/components/drawer/drawer.gen.ts:107

The transition function will be executed when the drawer is displayed or hidden.

#### Default Value

```ts
() => {}
```

***

### verticalTransition

> **verticalTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: react/bootstrap/src/components/drawer/drawer.gen.ts:117

The transition function for vertically positioned drawer (top, bottom) that will be executed when the drawer is displayed or hidden.

#### Default Value

```ts
() => {}
```

***

### visible

> **visible**: `boolean`

Defined in: react/bootstrap/src/components/drawer/drawer.gen.ts:244

If `true`, the drawer is shown; otherwise, it is hidden.

#### Default Value

`false`

***

### width

> **width**: `number`

Defined in: react/bootstrap/src/components/drawer/drawer.gen.ts:147

The width of the drawer in pixels.
