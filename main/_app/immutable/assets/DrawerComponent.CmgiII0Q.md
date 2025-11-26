Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:113](https://github.com/AmadeusITGroup/AgnosUI/blob/ffba7a67a1793c9e3e7bcdc430457d6afe3e4c72/angular/bootstrap/src/components/drawer/drawer.component.ts#L113)

DrawerComponent is an Angular component that extends the BaseWidgetDirective
to provide a customizable drawer widget. This component allows for various
configurations and customizations through its inputs and outputs.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`DrawerWidget`](../type-aliases/DrawerWidget.md)\>

## Properties

### animated

> `readonly` **animated**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:119](https://github.com/AmadeusITGroup/AgnosUI/blob/ffba7a67a1793c9e3e7bcdc430457d6afe3e4c72/angular/bootstrap/src/components/drawer/drawer.component.ts#L119)

If `true` opening and closing will be animated.

#### Default Value

`true`

***

### ariaDescribedBy

> `readonly` **ariaDescribedBy**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:133](https://github.com/AmadeusITGroup/AgnosUI/blob/ffba7a67a1793c9e3e7bcdc430457d6afe3e4c72/angular/bootstrap/src/components/drawer/drawer.component.ts#L133)

aria-describedby attribute to use for the drawer element.

#### Default Value

`''`

***

### ariaLabelledBy

> `readonly` **ariaLabelledBy**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:126](https://github.com/AmadeusITGroup/AgnosUI/blob/ffba7a67a1793c9e3e7bcdc430457d6afe3e4c72/angular/bootstrap/src/components/drawer/drawer.component.ts#L126)

aria-labelledby attribute to use for the drawer element.

#### Default Value

`''`

***

### backdrop

> `readonly` **backdrop**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:186](https://github.com/AmadeusITGroup/AgnosUI/blob/ffba7a67a1793c9e3e7bcdc430457d6afe3e4c72/angular/bootstrap/src/components/drawer/drawer.component.ts#L186)

If `true` displays the backdrop element and disables the body scrolling, otherwise the body of the document is navigable

#### Default Value

`true`

***

### backdropClass

> `readonly` **backdropClass**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:200](https://github.com/AmadeusITGroup/AgnosUI/blob/ffba7a67a1793c9e3e7bcdc430457d6afe3e4c72/angular/bootstrap/src/components/drawer/drawer.component.ts#L200)

Classes to add on the backdrop DOM element.

#### Default Value

`''`

***

### backdropTransition

> `readonly` **backdropTransition**: `InputSignal`\<[`TransitionFn`](../type-aliases/TransitionFn.md) \| `undefined`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:167](https://github.com/AmadeusITGroup/AgnosUI/blob/ffba7a67a1793c9e3e7bcdc430457d6afe3e4c72/angular/bootstrap/src/components/drawer/drawer.component.ts#L167)

The transition to use for the backdrop behind the drawer (if present).

#### Default Value

`fadeTransition`

***

### bodyScroll

> `readonly` **bodyScroll**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:193](https://github.com/AmadeusITGroup/AgnosUI/blob/ffba7a67a1793c9e3e7bcdc430457d6afe3e4c72/angular/bootstrap/src/components/drawer/drawer.component.ts#L193)

If `true` allows body scrolling when the drawer is open.

#### Default Value

`false`

***

### children

> `readonly` **children**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:328](https://github.com/AmadeusITGroup/AgnosUI/blob/ffba7a67a1793c9e3e7bcdc430457d6afe3e4c72/angular/bootstrap/src/components/drawer/drawer.component.ts#L328)

Template for the drawer body

***

### className

> `readonly` **className**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:207](https://github.com/AmadeusITGroup/AgnosUI/blob/ffba7a67a1793c9e3e7bcdc430457d6afe3e4c72/angular/bootstrap/src/components/drawer/drawer.component.ts#L207)

CSS classes to be applied on the widget main container

#### Default Value

`'w-full'`

***

### container

> `readonly` **container**: `InputSignal`\<[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) \| `null` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:179](https://github.com/AmadeusITGroup/AgnosUI/blob/ffba7a67a1793c9e3e7bcdc430457d6afe3e4c72/angular/bootstrap/src/components/drawer/drawer.component.ts#L179)

Which element should contain the drawer and backdrop DOM elements.
If it is not null, the drawer and backdrop DOM elements are moved to the specified container.
Otherwise, they stay where the widget is located.

#### Default Value

```ts
typeof window !== 'undefined' ? document.body : null
```

***

### header

> `readonly` **header**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:322](https://github.com/AmadeusITGroup/AgnosUI/blob/ffba7a67a1793c9e3e7bcdc430457d6afe3e4c72/angular/bootstrap/src/components/drawer/drawer.component.ts#L322)

Template for the drawer header

***

### height

> `readonly` **height**: `InputSignalWithTransform`\<`number` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:228](https://github.com/AmadeusITGroup/AgnosUI/blob/ffba7a67a1793c9e3e7bcdc430457d6afe3e4c72/angular/bootstrap/src/components/drawer/drawer.component.ts#L228)

The height of the drawer in pixels.

#### Default Value

`200`

***

### heightChange

> `readonly` **heightChange**: `OutputEmitterRef`\<`number`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:252](https://github.com/AmadeusITGroup/AgnosUI/blob/ffba7a67a1793c9e3e7bcdc430457d6afe3e4c72/angular/bootstrap/src/components/drawer/drawer.component.ts#L252)

An event emitted when the height is changed.

Event payload is equal to the newly selected height.

#### Default Value

```ts
() => {}
```

***

### hidden

> `readonly` **hidden**: `OutputEmitterRef`\<`void`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:274](https://github.com/AmadeusITGroup/AgnosUI/blob/ffba7a67a1793c9e3e7bcdc430457d6afe3e4c72/angular/bootstrap/src/components/drawer/drawer.component.ts#L274)

Event to be triggered when the transition is completed and the drawer is not visible.

#### Default Value

```ts
() => {}
```

***

### resizable

> `readonly` **resizable**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:214](https://github.com/AmadeusITGroup/AgnosUI/blob/ffba7a67a1793c9e3e7bcdc430457d6afe3e4c72/angular/bootstrap/src/components/drawer/drawer.component.ts#L214)

If `true`, the drawer can be resized by the user.

#### Default Value

`false`

***

### shown

> `readonly` **shown**: `OutputEmitterRef`\<`void`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:284](https://github.com/AmadeusITGroup/AgnosUI/blob/ffba7a67a1793c9e3e7bcdc430457d6afe3e4c72/angular/bootstrap/src/components/drawer/drawer.component.ts#L284)

Event to be triggered when the transition is completed and the drawer is visible.

#### Default Value

```ts
() => {}
```

***

### structure

> `readonly` **structure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:316](https://github.com/AmadeusITGroup/AgnosUI/blob/ffba7a67a1793c9e3e7bcdc430457d6afe3e4c72/angular/bootstrap/src/components/drawer/drawer.component.ts#L316)

Global template for the drawer component

***

### transition

> `readonly` **transition**: `InputSignal`\<[`TransitionFn`](../type-aliases/TransitionFn.md) \| `undefined`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:160](https://github.com/AmadeusITGroup/AgnosUI/blob/ffba7a67a1793c9e3e7bcdc430457d6afe3e4c72/angular/bootstrap/src/components/drawer/drawer.component.ts#L160)

The transition function will be executed when the drawer is displayed or hidden.

#### Default Value

```ts
collapseHorizontalTransition
```

***

### verticalTransition

> `readonly` **verticalTransition**: `InputSignal`\<[`TransitionFn`](../type-aliases/TransitionFn.md) \| `undefined`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:150](https://github.com/AmadeusITGroup/AgnosUI/blob/ffba7a67a1793c9e3e7bcdc430457d6afe3e4c72/angular/bootstrap/src/components/drawer/drawer.component.ts#L150)

The transition function for vertically positioned drawer (top, bottom) that will be executed when the drawer is displayed or hidden.

#### Default Value

```ts
collapseVerticalTransition
```

***

### visible

> `readonly` **visible**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/ffba7a67a1793c9e3e7bcdc430457d6afe3e4c72/angular/bootstrap/src/components/drawer/drawer.component.ts#L140)

If `true`, the drawer is shown; otherwise, it is hidden.

#### Default Value

`false`

***

### visibleChange

> `readonly` **visibleChange**: `OutputEmitterRef`\<`boolean`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:264](https://github.com/AmadeusITGroup/AgnosUI/blob/ffba7a67a1793c9e3e7bcdc430457d6afe3e4c72/angular/bootstrap/src/components/drawer/drawer.component.ts#L264)

Event to be triggered when the visible property changes.

#### Param

new value of the visible propery

#### Default Value

```ts
() => {}
```

***

### width

> `readonly` **width**: `InputSignalWithTransform`\<`number` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:221](https://github.com/AmadeusITGroup/AgnosUI/blob/ffba7a67a1793c9e3e7bcdc430457d6afe3e4c72/angular/bootstrap/src/components/drawer/drawer.component.ts#L221)

The width of the drawer in pixels.

#### Default Value

`200`

***

### widthChange

> `readonly` **widthChange**: `OutputEmitterRef`\<`number`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:240](https://github.com/AmadeusITGroup/AgnosUI/blob/ffba7a67a1793c9e3e7bcdc430457d6afe3e4c72/angular/bootstrap/src/components/drawer/drawer.component.ts#L240)

An event emitted when the width is changed.

Event payload is equal to the newly selected width.

#### Default Value

```ts
() => {}
```

## Accessors

### api

#### Get Signature

> **get** **api**(): `W`\[`"api"`\]

Defined in: [angular/headless/src/utils/widget.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/ffba7a67a1793c9e3e7bcdc430457d6afe3e4c72/angular/headless/src/utils/widget.ts#L144)

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

Defined in: [angular/headless/src/utils/widget.ts:160](https://github.com/AmadeusITGroup/AgnosUI/blob/ffba7a67a1793c9e3e7bcdc430457d6afe3e4c72/angular/headless/src/utils/widget.ts#L160)

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

Defined in: [angular/headless/src/utils/widget.ts:152](https://github.com/AmadeusITGroup/AgnosUI/blob/ffba7a67a1793c9e3e7bcdc430457d6afe3e4c72/angular/headless/src/utils/widget.ts#L152)

Retrieves the widget state. Each property of the state is exposed through an Angular [Signal](https://angular.dev/api/core/Signal)

##### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)
