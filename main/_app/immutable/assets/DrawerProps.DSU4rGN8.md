Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:96

Represents the properties for the Drawer component.

## Properties

### animated

> **animated**: `boolean`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:130

If `true` opening and closing will be animated.

#### Default Value

`true`

***

### ariaDescribedBy

> **ariaDescribedBy**: `string`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:144

aria-describedby attribute to use for the drawer element.

#### Default Value

`''`

***

### ariaLabelledBy

> **ariaLabelledBy**: `string`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:137

aria-labelledby attribute to use for the drawer element.

#### Default Value

`''`

***

### backdrop

> **backdrop**: `boolean`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:165

If `true` displays the backdrop element and disables the body scrolling, otherwise the body of the document is navigable

#### Default Value

`true`

***

### backdropClass

> **backdropClass**: `string`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:254

Classes to add on the backdrop DOM element.

#### Default Value

`''`

***

### backdropTransition

> **backdropTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:123

The transition to use for the backdrop behind the drawer (if present).

#### Default Value

`fadeTransition`

***

### bodyScroll

> **bodyScroll**: `boolean`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:172

If `true` allows body scrolling when the drawer is open.

#### Default Value

`false`

***

### children

> **children**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:283

Template for the drawer body

***

### className

> **className**: `string`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:235

CSS classes to be applied on the widget main container

#### Default Value

`'w-full'`

***

### container

> **container**: `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:247

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

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:278

Template for the drawer header

***

### height

> **height**: `number`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:158

The height of the drawer in pixels.

#### Default Value

`200`

***

### onHeightChange()

> **onHeightChange**: (`width`) => `void`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:216

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

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:182

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

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:192

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

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:228

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

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:204

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

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:268

If `true`, the drawer can be resized by the user.

#### Default Value

`false`

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:273

Global template for the drawer component

***

### transition

> **transition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:106

The transition function will be executed when the drawer is displayed or hidden.

#### Default Value

```ts
collapseHorizontalTransition
```

***

### verticalTransition

> **verticalTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:116

The transition function for vertically positioned drawer (top, bottom) that will be executed when the drawer is displayed or hidden.

#### Default Value

```ts
collapseVerticalTransition
```

***

### visible

> **visible**: `boolean`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:261

If `true`, the drawer is shown; otherwise, it is hidden.

#### Default Value

`false`

***

### width

> **width**: `number`

Defined in: angular/bootstrap/src/components/drawer/drawer.gen.ts:151

The width of the drawer in pixels.

#### Default Value

`200`
