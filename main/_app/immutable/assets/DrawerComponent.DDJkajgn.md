Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:113](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/angular/bootstrap/src/components/drawer/drawer.component.ts#L113)

DrawerComponent is an Angular component that extends the BaseWidgetDirective
to provide a customizable drawer widget. This component allows for various
configurations and customizations through its inputs and outputs.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`DrawerWidget`](../type-aliases/DrawerWidget.md)\>

## Properties

### animated

> `readonly` **animated**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:117](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/angular/bootstrap/src/components/drawer/drawer.component.ts#L117)

If `true` opening and closing will be animated.

***

### ariaDescribedBy

> `readonly` **ariaDescribedBy**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:127](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/angular/bootstrap/src/components/drawer/drawer.component.ts#L127)

aria-describedby attribute to use for the drawer element.

***

### ariaLabelledBy

> `readonly` **ariaLabelledBy**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:122](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/angular/bootstrap/src/components/drawer/drawer.component.ts#L122)

aria-labelledby attribute to use for the drawer element.

***

### backdrop

> `readonly` **backdrop**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:181](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/angular/bootstrap/src/components/drawer/drawer.component.ts#L181)

If `true` displays the backdrop element and disables the body scrolling, otherwise the body of the document is navigable

***

### backdropClass

> `readonly` **backdropClass**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:193](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/angular/bootstrap/src/components/drawer/drawer.component.ts#L193)

Classes to add on the backdrop DOM element.

#### Default Value

`''`

***

### backdropTransition

> `readonly` **backdropTransition**: `InputSignal`\<`undefined` \| [`TransitionFn`](../type-aliases/TransitionFn.md)\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:164](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/angular/bootstrap/src/components/drawer/drawer.component.ts#L164)

The transition to use for the backdrop behind the drawer (if present).

#### Default Value

```ts
() => {}
```

***

### bodyScroll

> `readonly` **bodyScroll**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:186](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/angular/bootstrap/src/components/drawer/drawer.component.ts#L186)

If `true` allows body scrolling when the drawer is open.

***

### children

> `readonly` **children**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:317](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/angular/bootstrap/src/components/drawer/drawer.component.ts#L317)

Template for the drawer body

***

### className

> `readonly` **className**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:200](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/angular/bootstrap/src/components/drawer/drawer.component.ts#L200)

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### container

> `readonly` **container**: `InputSignal`\<`undefined` \| `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:176](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/angular/bootstrap/src/components/drawer/drawer.component.ts#L176)

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

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:311](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/angular/bootstrap/src/components/drawer/drawer.component.ts#L311)

Template for the drawer header

***

### height

> `readonly` **height**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:217](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/angular/bootstrap/src/components/drawer/drawer.component.ts#L217)

The height of the drawer in pixels.

***

### heightChange

> `readonly` **heightChange**: `OutputEmitterRef`\<`number`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:241](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/angular/bootstrap/src/components/drawer/drawer.component.ts#L241)

An event emitted when the height is changed.

Event payload is equal to the newly selected height.

#### Default Value

```ts
() => {}
```

***

### hidden

> `readonly` **hidden**: `OutputEmitterRef`\<`void`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:263](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/angular/bootstrap/src/components/drawer/drawer.component.ts#L263)

Event to be triggered when the transition is completed and the drawer is not visible.

#### Default Value

```ts
() => {}
```

***

### resizable

> `readonly` **resizable**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:207](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/angular/bootstrap/src/components/drawer/drawer.component.ts#L207)

If `true`, the drawer can be resized by the user.

#### Default Value

`false`

***

### shown

> `readonly` **shown**: `OutputEmitterRef`\<`void`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:273](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/angular/bootstrap/src/components/drawer/drawer.component.ts#L273)

Event to be triggered when the transition is completed and the drawer is visible.

#### Default Value

```ts
() => {}
```

***

### structure

> `readonly` **structure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`DrawerContext`](../type-aliases/DrawerContext.md)\>\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:305](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/angular/bootstrap/src/components/drawer/drawer.component.ts#L305)

Global template for the drawer component

***

### transition

> `readonly` **transition**: `InputSignal`\<`undefined` \| [`TransitionFn`](../type-aliases/TransitionFn.md)\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:154](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/angular/bootstrap/src/components/drawer/drawer.component.ts#L154)

The transition function will be executed when the drawer is displayed or hidden.

#### Default Value

```ts
() => {}
```

***

### verticalTransition

> `readonly` **verticalTransition**: `InputSignal`\<`undefined` \| [`TransitionFn`](../type-aliases/TransitionFn.md)\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/angular/bootstrap/src/components/drawer/drawer.component.ts#L144)

The transition function for vertically positioned drawer (top, bottom) that will be executed when the drawer is displayed or hidden.

#### Default Value

```ts
() => {}
```

***

### visible

> `readonly` **visible**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:134](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/angular/bootstrap/src/components/drawer/drawer.component.ts#L134)

If `true`, the drawer is shown; otherwise, it is hidden.

#### Default Value

`false`

***

### visibleChange

> `readonly` **visibleChange**: `OutputEmitterRef`\<`boolean`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:253](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/angular/bootstrap/src/components/drawer/drawer.component.ts#L253)

Event to be triggered when the visible property changes.

#### Param

new value of the visible propery

#### Default Value

```ts
() => {}
```

***

### width

> `readonly` **width**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:212](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/angular/bootstrap/src/components/drawer/drawer.component.ts#L212)

The width of the drawer in pixels.

***

### widthChange

> `readonly` **widthChange**: `OutputEmitterRef`\<`number`\>

Defined in: [angular/bootstrap/src/components/drawer/drawer.component.ts:229](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/angular/bootstrap/src/components/drawer/drawer.component.ts#L229)

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

Defined in: [angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/angular/headless/src/utils/widget.ts#L140)

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

Defined in: [angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/angular/headless/src/utils/widget.ts#L156)

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

Defined in: [angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/angular/headless/src/utils/widget.ts#L148)

Retrieves the widget state. Each property of the state is exposed through an Angular [Signal](https://angular.dev/api/core/Signal)

##### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)
