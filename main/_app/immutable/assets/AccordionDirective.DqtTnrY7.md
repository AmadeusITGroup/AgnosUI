Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:305](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/accordion/accordion.component.ts#L305)

Directive for creating an accordion component.

This directive extends the `BaseWidgetDirective` and provides various inputs and outputs
to customize the behavior and appearance of the accordion and its items.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`AccordionWidget`](../type-aliases/AccordionWidget.md)\>

## Properties

### className

> `readonly` **className**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:318](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/accordion/accordion.component.ts#L318)

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### closeOthers

> `readonly` **closeOthers**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:311](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/accordion/accordion.component.ts#L311)

If `true`, only one accordion-item at the time can stay open.

#### Default Value

`false`

***

### itemAnimated

> `readonly` **itemAnimated**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:356](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/accordion/accordion.component.ts#L356)

If `true`, accordion-item will be animated.

#### Default Value

`true`

***

### itemBodyClassName

> `readonly` **itemBodyClassName**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:412](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/accordion/accordion.component.ts#L412)

CSS classes to add on the accordion-item body DOM element.

#### Default Value

`''`

***

### itemBodyContainerClassName

> `readonly` **itemBodyContainerClassName**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:405](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/accordion/accordion.component.ts#L405)

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Default Value

`''`

***

### itemButtonClassName

> `readonly` **itemButtonClassName**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:397](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/accordion/accordion.component.ts#L397)

CSS classes to add on the accordion-item toggle button DOM element.

#### Default Value

`''`

***

### itemClassName

> `readonly` **itemClassName**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:383](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/accordion/accordion.component.ts#L383)

CSS classes to add on the accordion-item DOM element.

#### Default Value

`''`

***

### itemDestroyOnHide

> `readonly` **itemDestroyOnHide**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:349](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/accordion/accordion.component.ts#L349)

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

#### Default Value

`true`

***

### itemHeaderClassName

> `readonly` **itemHeaderClassName**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:390](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/accordion/accordion.component.ts#L390)

CSS classes to add on the accordion-item header DOM element.

#### Default Value

`''`

***

### itemHeadingTag

> `readonly` **itemHeadingTag**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:419](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/accordion/accordion.component.ts#L419)

The html tag to use for the accordion-item-header.

#### Default Value

`''`

***

### itemHidden

> `readonly` **itemHidden**: `OutputEmitterRef`\<`string`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:342](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/accordion/accordion.component.ts#L342)

An event fired when an item is hidden.

Event payload is the id of the item.

#### Default Value

```ts
() => {}
```

***

### itemShown

> `readonly` **itemShown**: `OutputEmitterRef`\<`string`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:330](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/accordion/accordion.component.ts#L330)

An event fired when an item is shown.

Event payload is the id of the item.

#### Default Value

```ts
() => {}
```

***

### itemStructure

> `readonly` **itemStructure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](../interfaces/AccordionItemContext.md)\>\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:376](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/accordion/accordion.component.ts#L376)

Structure of the accordion-item. The default item structure is: accordion-item
contains accordion header and accordion-item body container; the accordion header contains the accordion button
(that contains `header`), while the accordion-item body container contains the accordion body (that contains `children`).
The itemTransition is applied on this element.

It is a prop of the accordion-item.

***

### itemTransition

> `readonly` **itemTransition**: `InputSignal`\<`undefined` \| [`TransitionFn`](../type-aliases/TransitionFn.md)\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:366](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/accordion/accordion.component.ts#L366)

The transition to use for the accordion-item body-container when the accordion-item is toggled.

#### Default Value

```ts
collapseVerticalTransition
```

## Accessors

### api

#### Get Signature

> **get** **api**(): `W`\[`"api"`\]

Defined in: [angular/headless/src/utils/widget.ts:137](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/headless/src/utils/widget.ts#L137)

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

Defined in: [angular/headless/src/utils/widget.ts:153](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/headless/src/utils/widget.ts#L153)

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

Defined in: [angular/headless/src/utils/widget.ts:145](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/headless/src/utils/widget.ts#L145)

Retrieves the widget state. Each property of the state is exposed through an Angular [Signal](https://angular.dev/api/core/Signal)

##### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)
