Defined in: [core/src/components/drawer/drawer.ts:63](https://github.com/AmadeusITGroup/AgnosUI/blob/0f46de532941cf3d3658ca6c275f10434931ab8a/core/src/components/drawer/drawer.ts#L63)

Interface representing the properties for the Drawer component.

## Extends

- `DrawerCommonPropsAndState`

## Properties

### animated

> **animated**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:96](https://github.com/AmadeusITGroup/AgnosUI/blob/0f46de532941cf3d3658ca6c275f10434931ab8a/core/src/components/drawer/drawer.ts#L96)

If `true` opening and closing will be animated.

#### Default Value

`true`

***

### ariaDescribedBy

> **ariaDescribedBy**: `string`

Defined in: [core/src/components/drawer/drawer.ts:108](https://github.com/AmadeusITGroup/AgnosUI/blob/0f46de532941cf3d3658ca6c275f10434931ab8a/core/src/components/drawer/drawer.ts#L108)

aria-describedby attribute to use for the drawer element.

#### Default Value

`''`

***

### ariaLabelledBy

> **ariaLabelledBy**: `string`

Defined in: [core/src/components/drawer/drawer.ts:102](https://github.com/AmadeusITGroup/AgnosUI/blob/0f46de532941cf3d3658ca6c275f10434931ab8a/core/src/components/drawer/drawer.ts#L102)

aria-labelledby attribute to use for the drawer element.

#### Default Value

`''`

***

### backdrop

> **backdrop**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:126](https://github.com/AmadeusITGroup/AgnosUI/blob/0f46de532941cf3d3658ca6c275f10434931ab8a/core/src/components/drawer/drawer.ts#L126)

If `true` displays the backdrop element and disables the body scrolling, otherwise the body of the document is navigable

#### Default Value

`true`

***

### backdropClass

> **backdropClass**: `string`

Defined in: [core/src/components/drawer/drawer.ts:45](https://github.com/AmadeusITGroup/AgnosUI/blob/0f46de532941cf3d3658ca6c275f10434931ab8a/core/src/components/drawer/drawer.ts#L45)

Classes to add on the backdrop DOM element.

#### Default Value

`''`

#### Inherited from

`DrawerCommonPropsAndState.backdropClass`

***

### backdropTransition

> **backdropTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: [core/src/components/drawer/drawer.ts:90](https://github.com/AmadeusITGroup/AgnosUI/blob/0f46de532941cf3d3658ca6c275f10434931ab8a/core/src/components/drawer/drawer.ts#L90)

The transition to use for the backdrop behind the drawer (if present).

#### Default Value

```ts
() => {}
```

***

### bodyScroll

> **bodyScroll**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:132](https://github.com/AmadeusITGroup/AgnosUI/blob/0f46de532941cf3d3658ca6c275f10434931ab8a/core/src/components/drawer/drawer.ts#L132)

If `true` allows body scrolling when the drawer is open.

#### Default Value

`false`

***

### className

> **className**: `string`

Defined in: [core/src/components/drawer/drawer.ts:28](https://github.com/AmadeusITGroup/AgnosUI/blob/0f46de532941cf3d3658ca6c275f10434931ab8a/core/src/components/drawer/drawer.ts#L28)

CSS classes to be applied on the widget main container

#### Default Value

`'w-full'`

#### Inherited from

`DrawerCommonPropsAndState.className`

***

### container

> **container**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) \| `null`

Defined in: [core/src/components/drawer/drawer.ts:39](https://github.com/AmadeusITGroup/AgnosUI/blob/0f46de532941cf3d3658ca6c275f10434931ab8a/core/src/components/drawer/drawer.ts#L39)

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

Defined in: [core/src/components/drawer/drawer.ts:120](https://github.com/AmadeusITGroup/AgnosUI/blob/0f46de532941cf3d3658ca6c275f10434931ab8a/core/src/components/drawer/drawer.ts#L120)

The height of the drawer in pixels.

#### Default Value

`200`

***

### onHeightChange()

> **onHeightChange**: (`width`) => `void`

Defined in: [core/src/components/drawer/drawer.ts:172](https://github.com/AmadeusITGroup/AgnosUI/blob/0f46de532941cf3d3658ca6c275f10434931ab8a/core/src/components/drawer/drawer.ts#L172)

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

Defined in: [core/src/components/drawer/drawer.ts:141](https://github.com/AmadeusITGroup/AgnosUI/blob/0f46de532941cf3d3658ca6c275f10434931ab8a/core/src/components/drawer/drawer.ts#L141)

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

Defined in: [core/src/components/drawer/drawer.ts:150](https://github.com/AmadeusITGroup/AgnosUI/blob/0f46de532941cf3d3658ca6c275f10434931ab8a/core/src/components/drawer/drawer.ts#L150)

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

Defined in: [core/src/components/drawer/drawer.ts:183](https://github.com/AmadeusITGroup/AgnosUI/blob/0f46de532941cf3d3658ca6c275f10434931ab8a/core/src/components/drawer/drawer.ts#L183)

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

Defined in: [core/src/components/drawer/drawer.ts:161](https://github.com/AmadeusITGroup/AgnosUI/blob/0f46de532941cf3d3658ca6c275f10434931ab8a/core/src/components/drawer/drawer.ts#L161)

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

Defined in: [core/src/components/drawer/drawer.ts:57](https://github.com/AmadeusITGroup/AgnosUI/blob/0f46de532941cf3d3658ca6c275f10434931ab8a/core/src/components/drawer/drawer.ts#L57)

If `true`, the drawer can be resized by the user.

#### Default Value

`false`

#### Inherited from

`DrawerCommonPropsAndState.resizable`

***

### transition

> **transition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: [core/src/components/drawer/drawer.ts:72](https://github.com/AmadeusITGroup/AgnosUI/blob/0f46de532941cf3d3658ca6c275f10434931ab8a/core/src/components/drawer/drawer.ts#L72)

The transition function will be executed when the drawer is displayed or hidden.

#### Default Value

```ts
() => {}
```

***

### verticalTransition

> **verticalTransition**: [`TransitionFn`](../type-aliases/TransitionFn.md)

Defined in: [core/src/components/drawer/drawer.ts:81](https://github.com/AmadeusITGroup/AgnosUI/blob/0f46de532941cf3d3658ca6c275f10434931ab8a/core/src/components/drawer/drawer.ts#L81)

The transition function for vertically positioned drawer (top, bottom) that will be executed when the drawer is displayed or hidden.

#### Default Value

```ts
() => {}
```

***

### visible

> **visible**: `boolean`

Defined in: [core/src/components/drawer/drawer.ts:51](https://github.com/AmadeusITGroup/AgnosUI/blob/0f46de532941cf3d3658ca6c275f10434931ab8a/core/src/components/drawer/drawer.ts#L51)

If `true`, the drawer is shown; otherwise, it is hidden.

#### Default Value

`false`

#### Inherited from

`DrawerCommonPropsAndState.visible`

***

### width

> **width**: `number`

Defined in: [core/src/components/drawer/drawer.ts:114](https://github.com/AmadeusITGroup/AgnosUI/blob/0f46de532941cf3d3658ca6c275f10434931ab8a/core/src/components/drawer/drawer.ts#L114)

The width of the drawer in pixels.

#### Default Value

`200`
