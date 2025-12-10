Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:311](https://github.com/AmadeusITGroup/AgnosUI/blob/c1f70965be611a493853d090804a9df573601300/angular/bootstrap/src/components/accordion/accordion.component.ts#L311)

Directive for creating an accordion component.

This directive extends the `BaseWidgetDirective` and provides various inputs and outputs
to customize the behavior and appearance of the accordion and its items.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`AccordionWidget`](../type-aliases/AccordionWidget.md)\>

## Properties

### className

> `readonly` **className**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:324](https://github.com/AmadeusITGroup/AgnosUI/blob/c1f70965be611a493853d090804a9df573601300/angular/bootstrap/src/components/accordion/accordion.component.ts#L324)

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### closeOthers

> `readonly` **closeOthers**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:317](https://github.com/AmadeusITGroup/AgnosUI/blob/c1f70965be611a493853d090804a9df573601300/angular/bootstrap/src/components/accordion/accordion.component.ts#L317)

If `true`, only one accordion-item at the time can stay open.

#### Default Value

`false`

***

### itemAnimated

> `readonly` **itemAnimated**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:362](https://github.com/AmadeusITGroup/AgnosUI/blob/c1f70965be611a493853d090804a9df573601300/angular/bootstrap/src/components/accordion/accordion.component.ts#L362)

If `true`, accordion-item will be animated.

#### Default Value

`true`

***

### itemBodyClassName

> `readonly` **itemBodyClassName**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:418](https://github.com/AmadeusITGroup/AgnosUI/blob/c1f70965be611a493853d090804a9df573601300/angular/bootstrap/src/components/accordion/accordion.component.ts#L418)

CSS classes to add on the accordion-item body DOM element.

#### Default Value

`''`

***

### itemBodyContainerClassName

> `readonly` **itemBodyContainerClassName**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:411](https://github.com/AmadeusITGroup/AgnosUI/blob/c1f70965be611a493853d090804a9df573601300/angular/bootstrap/src/components/accordion/accordion.component.ts#L411)

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Default Value

`''`

***

### itemButtonClassName

> `readonly` **itemButtonClassName**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:403](https://github.com/AmadeusITGroup/AgnosUI/blob/c1f70965be611a493853d090804a9df573601300/angular/bootstrap/src/components/accordion/accordion.component.ts#L403)

CSS classes to add on the accordion-item toggle button DOM element.

#### Default Value

`''`

***

### itemClassName

> `readonly` **itemClassName**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:389](https://github.com/AmadeusITGroup/AgnosUI/blob/c1f70965be611a493853d090804a9df573601300/angular/bootstrap/src/components/accordion/accordion.component.ts#L389)

CSS classes to add on the accordion-item DOM element.

#### Default Value

`''`

***

### itemDestroyOnHide

> `readonly` **itemDestroyOnHide**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:355](https://github.com/AmadeusITGroup/AgnosUI/blob/c1f70965be611a493853d090804a9df573601300/angular/bootstrap/src/components/accordion/accordion.component.ts#L355)

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

#### Default Value

`true`

***

### itemHeaderClassName

> `readonly` **itemHeaderClassName**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:396](https://github.com/AmadeusITGroup/AgnosUI/blob/c1f70965be611a493853d090804a9df573601300/angular/bootstrap/src/components/accordion/accordion.component.ts#L396)

CSS classes to add on the accordion-item header DOM element.

#### Default Value

`''`

***

### itemHeadingLevel

> `readonly` **itemHeadingLevel**: `InputSignal`\<`1` \| `2` \| `4` \| `3` \| `6` \| `5` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:425](https://github.com/AmadeusITGroup/AgnosUI/blob/c1f70965be611a493853d090804a9df573601300/angular/bootstrap/src/components/accordion/accordion.component.ts#L425)

The html heading level to use for the accordion-item-header.

#### Default Value

`2`

***

### itemHidden

> `readonly` **itemHidden**: `OutputEmitterRef`\<`string`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:348](https://github.com/AmadeusITGroup/AgnosUI/blob/c1f70965be611a493853d090804a9df573601300/angular/bootstrap/src/components/accordion/accordion.component.ts#L348)

An event fired when an item is hidden.

Event payload is the id of the item.

#### Default Value

```ts
() => {}
```

***

### itemShown

> `readonly` **itemShown**: `OutputEmitterRef`\<`string`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:336](https://github.com/AmadeusITGroup/AgnosUI/blob/c1f70965be611a493853d090804a9df573601300/angular/bootstrap/src/components/accordion/accordion.component.ts#L336)

An event fired when an item is shown.

Event payload is the id of the item.

#### Default Value

```ts
() => {}
```

***

### itemStructure

> `readonly` **itemStructure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](../interfaces/AccordionItemContext.md)\>\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:382](https://github.com/AmadeusITGroup/AgnosUI/blob/c1f70965be611a493853d090804a9df573601300/angular/bootstrap/src/components/accordion/accordion.component.ts#L382)

Structure of the accordion-item. The default item structure is: accordion-item
contains accordion header and accordion-item body container; the accordion header contains the accordion button
(that contains `header`), while the accordion-item body container contains the accordion body (that contains `children`).
The itemTransition is applied on this element.

It is a prop of the accordion-item.

***

### itemTransition

> `readonly` **itemTransition**: `InputSignal`\<[`TransitionFn`](../type-aliases/TransitionFn.md) \| `undefined`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:372](https://github.com/AmadeusITGroup/AgnosUI/blob/c1f70965be611a493853d090804a9df573601300/angular/bootstrap/src/components/accordion/accordion.component.ts#L372)

The transition to use for the accordion-item body-container when the accordion-item is toggled.

#### Default Value

```ts
collapseVerticalTransition
```

## Accessors

### api

#### Get Signature

> **get** **api**(): `W`\[`"api"`\]

Defined in: [angular/headless/src/utils/widget.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/c1f70965be611a493853d090804a9df573601300/angular/headless/src/utils/widget.ts#L144)

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

Defined in: [angular/headless/src/utils/widget.ts:160](https://github.com/AmadeusITGroup/AgnosUI/blob/c1f70965be611a493853d090804a9df573601300/angular/headless/src/utils/widget.ts#L160)

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

Defined in: [angular/headless/src/utils/widget.ts:152](https://github.com/AmadeusITGroup/AgnosUI/blob/c1f70965be611a493853d090804a9df573601300/angular/headless/src/utils/widget.ts#L152)

Retrieves the widget state. Each property of the state is exposed through an Angular [Signal](https://angular.dev/api/core/Signal)

##### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)
