Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:102](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/drawer/drawer.component.ts#L102)

DrawerComponent is an Angular component that extends the BaseWidgetDirective
to provide a customizable drawer widget. This component allows for various
configurations and customizations through its inputs and outputs.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`DrawerWidget`](../type-aliases/DrawerWidget.md)\>

## Properties

### animated

> `readonly` **animated**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:108](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/drawer/drawer.component.ts#L108)

If `true` opening and closing will be animated.

#### Default Value

`true`

***

### ariaDescribedBy

> `readonly` **ariaDescribedBy**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:122](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/drawer/drawer.component.ts#L122)

aria-describedby attribute to use for the drawer element.

#### Default Value

`''`

***

### ariaLabelledBy

> `readonly` **ariaLabelledBy**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:115](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/drawer/drawer.component.ts#L115)

aria-labelledby attribute to use for the drawer element.

#### Default Value

`''`

***

### backdrop

> `readonly` **backdrop**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:175](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/drawer/drawer.component.ts#L175)

If `true` displays the backdrop element and disables the body scrolling, otherwise the body of the document is navigable

#### Default Value

`true`

***

### backdropClass

> `readonly` **backdropClass**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:204](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/drawer/drawer.component.ts#L204)

Classes to add on the backdrop DOM element.

#### Default Value

`''`

***

### backdropTransition

> `readonly` **backdropTransition**: `InputSignal`\<[`TransitionFn`](../type-aliases/TransitionFn.md) \| `undefined`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/drawer/drawer.component.ts#L156)

The transition to use for the backdrop behind the drawer (if present).

#### Default Value

`fadeTransition`

***

### bodyScroll

> `readonly` **bodyScroll**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:182](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/drawer/drawer.component.ts#L182)

If `true` allows body scrolling when the drawer is open.

#### Default Value

`false`

***

### children

> `readonly` **children**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:336](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/drawer/drawer.component.ts#L336)

Template for the drawer body

***

### className

> `readonly` **className**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:211](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/drawer/drawer.component.ts#L211)

CSS classes to be applied on the widget main container

#### Default Value

`'w-full'`

***

### container

> `readonly` **container**: `InputSignal`\<[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) \| `null` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:168](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/drawer/drawer.component.ts#L168)

Which element should contain the drawer and backdrop DOM elements.
If it is not null, the drawer and backdrop DOM elements are moved to the specified container.
Otherwise, they stay where the widget is located.

#### Default Value

```ts
typeof window !== 'undefined' ? document.body : null
```

***

### focusOnInit

> `readonly` **focusOnInit**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:197](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/drawer/drawer.component.ts#L197)

If `true` focuses the drawer when it is opened.

#### Default Value

`true`

***

### header

> `readonly` **header**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:330](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/drawer/drawer.component.ts#L330)

Template for the drawer header

***

### hidden

> `readonly` **hidden**: `OutputEmitterRef`\<`void`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:282](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/drawer/drawer.component.ts#L282)

Event to be triggered when the transition is completed and the drawer is not visible.

#### Default Value

```ts
() => {}
```

***

### maximizedChange

> `readonly` **maximizedChange**: `OutputEmitterRef`\<`boolean`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:262](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/drawer/drawer.component.ts#L262)

Event to be triggered when the maximized state changes.

#### Default Value

```ts
() => {}
```

***

### minimizedChange

> `readonly` **minimizedChange**: `OutputEmitterRef`\<`boolean`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:252](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/drawer/drawer.component.ts#L252)

Event to be triggered when the minimized state changes.

#### Default Value

```ts
() => {}
```

***

### resizable

> `readonly` **resizable**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:218](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/drawer/drawer.component.ts#L218)

If `true`, the drawer can be resized by the user.

#### Default Value

`false`

***

### resizingChange

> `readonly` **resizingChange**: `OutputEmitterRef`\<`boolean`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:272](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/drawer/drawer.component.ts#L272)

Event to be triggered when the user starts or stops resizing the drawer.

#### Default Value

```ts
() => {}
```

***

### shown

> `readonly` **shown**: `OutputEmitterRef`\<`void`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:292](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/drawer/drawer.component.ts#L292)

Event to be triggered when the transition is completed and the drawer is visible.

#### Default Value

```ts
() => {}
```

***

### size

> `readonly` **size**: `InputSignalWithTransform`\<`number` \| `null` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:190](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/drawer/drawer.component.ts#L190)

Size of the drawer in pixel once the user start interacting.
It corresponds to the height or the width depending on the drawer orientation

#### Default Value

`null`

***

### sizeChange

> `readonly` **sizeChange**: `OutputEmitterRef`\<`number` \| `null`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:230](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/drawer/drawer.component.ts#L230)

An event emitted when the drawer size changes (width or height depending on the orientation).

Event payload is equal to the newly selected width or height.

#### Default Value

```ts
() => {}
```

***

### structure

> `readonly` **structure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:324](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/drawer/drawer.component.ts#L324)

Global template for the drawer component

***

### transition

> `readonly` **transition**: `InputSignal`\<[`TransitionFn`](../type-aliases/TransitionFn.md) \| `undefined`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:149](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/drawer/drawer.component.ts#L149)

The transition function will be executed when the drawer is displayed or hidden.

#### Default Value

```ts
collapseHorizontalTransition
```

***

### verticalTransition

> `readonly` **verticalTransition**: `InputSignal`\<[`TransitionFn`](../type-aliases/TransitionFn.md) \| `undefined`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:139](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/drawer/drawer.component.ts#L139)

The transition function for vertically positioned drawer (top, bottom) that will be executed when the drawer is displayed or hidden.

#### Default Value

```ts
collapseVerticalTransition
```

***

### visible

> `readonly` **visible**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:129](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/drawer/drawer.component.ts#L129)

If `true`, the drawer is shown; otherwise, it is hidden.

#### Default Value

`false`

***

### visibleChange

> `readonly` **visibleChange**: `OutputEmitterRef`\<`boolean`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:242](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/drawer/drawer.component.ts#L242)

Event to be triggered when the visible property changes.

#### Param

**visible**

new value of the visible propery

#### Default Value

```ts
() => {}
```

## Accessors

### api

#### Get Signature

> **get** **api**(): `W`\[`"api"`\]

Defined in: [angular/headless/src/utils/widget.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/headless/src/utils/widget.ts#L144)

Retrieves the widget api

##### Returns

`W`\[`"api"`\]

the widget api

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`api`](BaseWidgetDirective.md#api)

***

### directives

#### Get Signature

> **get** **directives**(): `W`\[`"directives"`\]

Defined in: [angular/headless/src/utils/widget.ts:160](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/headless/src/utils/widget.ts#L160)

Retrieves the widget directives

##### Returns

`W`\[`"directives"`\]

the widget directives

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`directives`](BaseWidgetDirective.md#directives)

***

### state

#### Get Signature

> **get** **state**(): [`AngularState`](../type-aliases/AngularState.md)\<`W`\>

Defined in: [angular/headless/src/utils/widget.ts:152](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/headless/src/utils/widget.ts#L152)

Retrieves the widget state. Each property of the state is exposed through an Angular [Signal](https://angular.dev/api/core/Signal)

##### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)
