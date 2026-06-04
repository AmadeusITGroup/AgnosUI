Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:167](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/accordion/accordion.component.ts#L167)

AccordionItemComponent is a component that represents an item within an accordion.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`AccordionItemWidget`](../type-aliases/AccordionItemWidget.md)\>

## Implements

- [`AfterViewInit`](https://angular.dev/api/core/AfterViewInit)

## Properties

### animated

> `readonly` **animated**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:226](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/accordion/accordion.component.ts#L226)

If `true`, accordion-item will be animated.

***

### bodyClassName

> `readonly` **bodyClassName**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:243](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/accordion/accordion.component.ts#L243)

CSS classes to add on the accordion-item body DOM element.

***

### bodyContainerClassName

> `readonly` **bodyContainerClassName**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:239](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/accordion/accordion.component.ts#L239)

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

***

### buttonClassName

> `readonly` **buttonClassName**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:234](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/accordion/accordion.component.ts#L234)

CSS classes to add on the accordion-item collapse DOM element.

***

### children

> `readonly` **children**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](../interfaces/AccordionItemContext.md)\>\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:180](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/accordion/accordion.component.ts#L180)

Content present in the accordion body.

It is a prop of the accordion-item.

***

### className

> `readonly` **className**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:208](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/accordion/accordion.component.ts#L208)

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### destroyOnHide

> `readonly` **destroyOnHide**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:212](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/accordion/accordion.component.ts#L212)

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

***

### disabled

> `readonly` **disabled**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:217](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/accordion/accordion.component.ts#L217)

If `true`, the accordion-item will be disabled.
It will not react to user's clicks, but still will be possible to toggle programmatically.

***

### header

> `readonly` **header**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](../interfaces/AccordionItemContext.md)\>\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:173](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/accordion/accordion.component.ts#L173)

Content present in the accordion button inside the accordion header.

It is a prop of the accordion-item.

***

### headerClassName

> `readonly` **headerClassName**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:230](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/accordion/accordion.component.ts#L230)

CSS classes to add on the accordion-item header DOM element.

***

### headingLevel

> `readonly` **headingLevel**: `InputSignal`\<`2` \| `1` \| `4` \| `3` \| `6` \| `5` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:247](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/accordion/accordion.component.ts#L247)

The html heading level to use for the accordion-item-header.

***

### hidden

> `readonly` **hidden**: `OutputEmitterRef`\<`void`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:255](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/accordion/accordion.component.ts#L255)

An event fired when an item is hidden.

***

### id

> `readonly` **id**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:197](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/accordion/accordion.component.ts#L197)

The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.

***

### shown

> `readonly` **shown**: `OutputEmitterRef`\<`void`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:251](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/accordion/accordion.component.ts#L251)

An event fired when an item is shown.

***

### structure

> `readonly` **structure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](../interfaces/AccordionItemContext.md)\>\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:191](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/accordion/accordion.component.ts#L191)

Structure of the accordion-item. The default item structure is: accordion-item
contains accordion header and accordion-item body container; the accordion header contains the accordion button
(that contains `header`), while the accordion-item body container contains the accordion body (that contains `children`).
The itemTransition is applied on this element.

It is a prop of the accordion-item.

***

### transition

> `readonly` **transition**: `InputSignal`\<[`TransitionFn`](../type-aliases/TransitionFn.md) \| `undefined`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:201](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/accordion/accordion.component.ts#L201)

The transition to use for the accordion-item body-container when the accordion-item is toggled.

***

### visible

> `readonly` **visible**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:222](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/accordion/accordion.component.ts#L222)

If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).

***

### visibleChange

> `readonly` **visibleChange**: `OutputEmitterRef`\<`boolean`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:261](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/accordion/accordion.component.ts#L261)

An event fired when the `visible` value changes.

Event payload is the new value of visible.

## Accessors

### api

#### Get Signature

> **get** **api**(): `W`\[`"api"`\]

Defined in: [angular/headless/src/utils/widget.ts:144](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/headless/src/utils/widget.ts#L144)

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

Defined in: [angular/headless/src/utils/widget.ts:160](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/headless/src/utils/widget.ts#L160)

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

Defined in: [angular/headless/src/utils/widget.ts:152](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/headless/src/utils/widget.ts#L152)

Retrieves the widget state. Each property of the state is exposed through an Angular [Signal](https://angular.dev/api/core/Signal)

##### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)

## Methods

### ngAfterViewInit()

> **ngAfterViewInit**(): `void`

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:289](https://github.com/quentinderoubaix/AgnosUI/blob/7ff6d5c23e95a078ba74f1c16e3d6e3aca197427/angular/bootstrap/src/components/accordion/accordion.component.ts#L289)

A callback method that is invoked immediately after
Angular has completed initialization of a component's view.
It is invoked only once when the view is instantiated.

#### Returns

`void`

#### Implementation of

`AfterViewInit.ngAfterViewInit`
