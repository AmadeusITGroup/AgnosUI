Directive for creating an accordion component.

This directive extends the `BaseWidgetDirective` and provides various inputs and outputs
to customize the behavior and appearance of the accordion and its items.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`AccordionWidget`](../type-aliases/AccordionWidget.md)\>

## Properties

### className

> **className**: `undefined` \| `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:336](https://github.com/AmadeusITGroup/AgnosUI/blob/bdd512a7ded9a1a61dfe033b874e0d6bdf7ecb9c/angular/bootstrap/src/components/accordion/accordion.component.ts#L336)

***

### closeOthers

> **closeOthers**: `undefined` \| `boolean`

If `true`, only one accordion-item at the time can stay open.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:329](https://github.com/AmadeusITGroup/AgnosUI/blob/bdd512a7ded9a1a61dfe033b874e0d6bdf7ecb9c/angular/bootstrap/src/components/accordion/accordion.component.ts#L329)

***

### itemAnimated

> **itemAnimated**: `undefined` \| `boolean`

If `true`, accordion-item will be animated.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:374](https://github.com/AmadeusITGroup/AgnosUI/blob/bdd512a7ded9a1a61dfe033b874e0d6bdf7ecb9c/angular/bootstrap/src/components/accordion/accordion.component.ts#L374)

***

### itemBodyClassName

> **itemBodyClassName**: `undefined` \| `string`

CSS classes to add on the accordion-item body DOM element.

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:430](https://github.com/AmadeusITGroup/AgnosUI/blob/bdd512a7ded9a1a61dfe033b874e0d6bdf7ecb9c/angular/bootstrap/src/components/accordion/accordion.component.ts#L430)

***

### itemBodyContainerClassName

> **itemBodyContainerClassName**: `undefined` \| `string`

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:423](https://github.com/AmadeusITGroup/AgnosUI/blob/bdd512a7ded9a1a61dfe033b874e0d6bdf7ecb9c/angular/bootstrap/src/components/accordion/accordion.component.ts#L423)

***

### itemButtonClassName

> **itemButtonClassName**: `undefined` \| `string`

CSS classes to add on the accordion-item toggle button DOM element.

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:415](https://github.com/AmadeusITGroup/AgnosUI/blob/bdd512a7ded9a1a61dfe033b874e0d6bdf7ecb9c/angular/bootstrap/src/components/accordion/accordion.component.ts#L415)

***

### itemClassName

> **itemClassName**: `undefined` \| `string`

CSS classes to add on the accordion-item DOM element.

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:401](https://github.com/AmadeusITGroup/AgnosUI/blob/bdd512a7ded9a1a61dfe033b874e0d6bdf7ecb9c/angular/bootstrap/src/components/accordion/accordion.component.ts#L401)

***

### itemDestroyOnHide

> **itemDestroyOnHide**: `undefined` \| `boolean`

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:367](https://github.com/AmadeusITGroup/AgnosUI/blob/bdd512a7ded9a1a61dfe033b874e0d6bdf7ecb9c/angular/bootstrap/src/components/accordion/accordion.component.ts#L367)

***

### itemHeaderClassName

> **itemHeaderClassName**: `undefined` \| `string`

CSS classes to add on the accordion-item header DOM element.

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:408](https://github.com/AmadeusITGroup/AgnosUI/blob/bdd512a7ded9a1a61dfe033b874e0d6bdf7ecb9c/angular/bootstrap/src/components/accordion/accordion.component.ts#L408)

***

### itemHeadingTag

> **itemHeadingTag**: `undefined` \| `string`

The html tag to use for the accordion-item-header.

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:437](https://github.com/AmadeusITGroup/AgnosUI/blob/bdd512a7ded9a1a61dfe033b874e0d6bdf7ecb9c/angular/bootstrap/src/components/accordion/accordion.component.ts#L437)

***

### itemHidden

> **itemHidden**: `EventEmitter`\<`string`\>

An event fired when an item is hidden.

Event payload is the id of the item.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:360](https://github.com/AmadeusITGroup/AgnosUI/blob/bdd512a7ded9a1a61dfe033b874e0d6bdf7ecb9c/angular/bootstrap/src/components/accordion/accordion.component.ts#L360)

***

### itemShown

> **itemShown**: `EventEmitter`\<`string`\>

An event fired when an item is shown.

Event payload is the id of the item.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:348](https://github.com/AmadeusITGroup/AgnosUI/blob/bdd512a7ded9a1a61dfe033b874e0d6bdf7ecb9c/angular/bootstrap/src/components/accordion/accordion.component.ts#L348)

***

### itemStructure

> **itemStructure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](../interfaces/AccordionItemContext.md)\>

Structure of the accordion-item. The default item structure is: accordion-item
contains accordion header and accordion-item body container; the accordion header contains the accordion button
(that contains `header`), while the accordion-item body container contains the accordion body (that contains `children`).
The itemTransition is applied on this element.

It is a prop of the accordion-item.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:394](https://github.com/AmadeusITGroup/AgnosUI/blob/bdd512a7ded9a1a61dfe033b874e0d6bdf7ecb9c/angular/bootstrap/src/components/accordion/accordion.component.ts#L394)

***

### itemTransition

> **itemTransition**: `undefined` \| [`TransitionFn`](../type-aliases/TransitionFn.md)

The transition to use for the accordion-item body-container when the accordion-item is toggled.

#### Default Value

```ts
collapseVerticalTransition
```

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:384](https://github.com/AmadeusITGroup/AgnosUI/blob/bdd512a7ded9a1a61dfe033b874e0d6bdf7ecb9c/angular/bootstrap/src/components/accordion/accordion.component.ts#L384)

## Accessors

### api

> `get` **api**(): `W`\[`"api"`\]

Retrieves the widget api

#### Returns

`W`\[`"api"`\]

the widget api

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`api`](BaseWidgetDirective.md#api)

#### Defined in

[angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/bdd512a7ded9a1a61dfe033b874e0d6bdf7ecb9c/angular/headless/src/utils/widget.ts#L140)

***

### directives

> `get` **directives**(): `W`\[`"directives"`\]

Retrieves the widget directives

#### Returns

`W`\[`"directives"`\]

the widget directives

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`directives`](BaseWidgetDirective.md#directives)

#### Defined in

[angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/bdd512a7ded9a1a61dfe033b874e0d6bdf7ecb9c/angular/headless/src/utils/widget.ts#L156)

***

### state

> `get` **state**(): [`AngularState`](../type-aliases/AngularState.md)\<`W`\>

Retrieves the widget state as an Angular [Signal](https://angular.dev/api/core/Signal)

#### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)

#### Defined in

[angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/bdd512a7ded9a1a61dfe033b874e0d6bdf7ecb9c/angular/headless/src/utils/widget.ts#L148)
