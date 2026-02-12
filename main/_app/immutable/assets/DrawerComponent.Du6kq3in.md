Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:115](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/angular/bootstrap/src/components/drawer/drawer.component.ts#L115)

DrawerComponent is an Angular component that extends the BaseWidgetDirective
to provide a customizable drawer widget. This component allows for various
configurations and customizations through its inputs and outputs.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`DrawerWidget`](../type-aliases/DrawerWidget.md)\>

## Properties

### animated

> `readonly` **animated**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:121](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/angular/bootstrap/src/components/drawer/drawer.component.ts#L121)

If `true` opening and closing will be animated.

#### Default Value

`true`

***

### ariaDescribedBy

> `readonly` **ariaDescribedBy**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:135](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/angular/bootstrap/src/components/drawer/drawer.component.ts#L135)

aria-describedby attribute to use for the drawer element.

#### Default Value

`''`

***

### ariaLabelledBy

> `readonly` **ariaLabelledBy**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:128](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/angular/bootstrap/src/components/drawer/drawer.component.ts#L128)

aria-labelledby attribute to use for the drawer element.

#### Default Value

`''`

***

### backdrop

> `readonly` **backdrop**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:188](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/angular/bootstrap/src/components/drawer/drawer.component.ts#L188)

If `true` displays the backdrop element and disables the body scrolling, otherwise the body of the document is navigable

#### Default Value

`true`

***

### backdropClass

> `readonly` **backdropClass**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:217](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/angular/bootstrap/src/components/drawer/drawer.component.ts#L217)

Classes to add on the backdrop DOM element.

#### Default Value

`''`

***

### backdropTransition

> `readonly` **backdropTransition**: `InputSignal`\<[`TransitionFn`](../type-aliases/TransitionFn.md) \| `undefined`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:169](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/angular/bootstrap/src/components/drawer/drawer.component.ts#L169)

The transition to use for the backdrop behind the drawer (if present).

#### Default Value

`fadeTransition`

***

### bodyScroll

> `readonly` **bodyScroll**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:195](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/angular/bootstrap/src/components/drawer/drawer.component.ts#L195)

If `true` allows body scrolling when the drawer is open.

#### Default Value

`false`

***

### children

> `readonly` **children**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:349](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/angular/bootstrap/src/components/drawer/drawer.component.ts#L349)

Template for the drawer body

***

### className

> `readonly` **className**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:224](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/angular/bootstrap/src/components/drawer/drawer.component.ts#L224)

CSS classes to be applied on the widget main container

#### Default Value

`'w-full'`

***

### container

> `readonly` **container**: `InputSignal`\<[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) \| `null` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:181](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/angular/bootstrap/src/components/drawer/drawer.component.ts#L181)

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

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:210](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/angular/bootstrap/src/components/drawer/drawer.component.ts#L210)

If `true` focuses the drawer when it is opened.

#### Default Value

`true`

***

### header

> `readonly` **header**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:343](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/angular/bootstrap/src/components/drawer/drawer.component.ts#L343)

Template for the drawer header

***

### hidden

> `readonly` **hidden**: `OutputEmitterRef`\<`void`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:295](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/angular/bootstrap/src/components/drawer/drawer.component.ts#L295)

Event to be triggered when the transition is completed and the drawer is not visible.

#### Default Value

```ts
() => {}
```

***

### maximizedChange

> `readonly` **maximizedChange**: `OutputEmitterRef`\<`boolean`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:275](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/angular/bootstrap/src/components/drawer/drawer.component.ts#L275)

Event to be triggered when the maximized state changes.

#### Default Value

```ts
() => {}
```

***

### minimizedChange

> `readonly` **minimizedChange**: `OutputEmitterRef`\<`boolean`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:265](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/angular/bootstrap/src/components/drawer/drawer.component.ts#L265)

Event to be triggered when the minimized state changes.

#### Default Value

```ts
() => {}
```

***

### resizable

> `readonly` **resizable**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:231](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/angular/bootstrap/src/components/drawer/drawer.component.ts#L231)

If `true`, the drawer can be resized by the user.

#### Default Value

`false`

***

### resizingChange

> `readonly` **resizingChange**: `OutputEmitterRef`\<`boolean`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:285](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/angular/bootstrap/src/components/drawer/drawer.component.ts#L285)

Event to be triggered when the user starts or stops resizing the drawer.

#### Default Value

```ts
() => {}
```

***

### shown

> `readonly` **shown**: `OutputEmitterRef`\<`void`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:305](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/angular/bootstrap/src/components/drawer/drawer.component.ts#L305)

Event to be triggered when the transition is completed and the drawer is visible.

#### Default Value

```ts
() => {}
```

***

### size

> `readonly` **size**: `InputSignalWithTransform`\<`number` \| `null` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:203](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/angular/bootstrap/src/components/drawer/drawer.component.ts#L203)

Size of the drawer in pixel once the user start interacting.
It corresponds to the height or the width depending on the drawer orientation

#### Default Value

`null`

***

### sizeChange

> `readonly` **sizeChange**: `OutputEmitterRef`\<`number` \| `null`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:243](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/angular/bootstrap/src/components/drawer/drawer.component.ts#L243)

An event emitted when the drawer size changes (width or height depending on the orientation).

Event payload is equal to the newly selected width or height.

#### Default Value

```ts
() => {}
```

***

### structure

> `readonly` **structure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:337](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/angular/bootstrap/src/components/drawer/drawer.component.ts#L337)

Global template for the drawer component

***

### transition

> `readonly` **transition**: `InputSignal`\<[`TransitionFn`](../type-aliases/TransitionFn.md) \| `undefined`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:162](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/angular/bootstrap/src/components/drawer/drawer.component.ts#L162)

The transition function will be executed when the drawer is displayed or hidden.

#### Default Value

```ts
collapseHorizontalTransition
```

***

### verticalTransition

> `readonly` **verticalTransition**: `InputSignal`\<[`TransitionFn`](../type-aliases/TransitionFn.md) \| `undefined`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:152](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/angular/bootstrap/src/components/drawer/drawer.component.ts#L152)

The transition function for vertically positioned drawer (top, bottom) that will be executed when the drawer is displayed or hidden.

#### Default Value

```ts
collapseVerticalTransition
```

***

### visible

> `readonly` **visible**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:142](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/angular/bootstrap/src/components/drawer/drawer.component.ts#L142)

If `true`, the drawer is shown; otherwise, it is hidden.

#### Default Value

`false`

***

### visibleChange

> `readonly` **visibleChange**: `OutputEmitterRef`\<`boolean`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:255](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/angular/bootstrap/src/components/drawer/drawer.component.ts#L255)

Event to be triggered when the visible property changes.

#### Param

new value of the visible propery

#### Default Value

```ts
() => {}
```

## Accessors

### api

#### Get Signature

> **get** **api**(): `W`\[`"api"`\]

Defined in: [angular/headless/src/utils/widget.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/angular/headless/src/utils/widget.ts#L144)

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

Defined in: [angular/headless/src/utils/widget.ts:160](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/angular/headless/src/utils/widget.ts#L160)

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

Defined in: [angular/headless/src/utils/widget.ts:152](https://github.com/AmadeusITGroup/AgnosUI/blob/63f5310cfc33061e09e7196fced3a85ef7e19bfe/angular/headless/src/utils/widget.ts#L152)

Retrieves the widget state. Each property of the state is exposed through an Angular [Signal](https://angular.dev/api/core/Signal)

##### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)
