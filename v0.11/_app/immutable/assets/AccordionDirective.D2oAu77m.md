Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:309](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/accordion/accordion.component.ts#L309)

Directive for creating an accordion component.

This directive extends the `BaseWidgetDirective` and provides various inputs and outputs
to customize the behavior and appearance of the accordion and its items.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`AccordionWidget`](../type-aliases/AccordionWidget.md)\>

## Properties

### className

> `readonly` **className**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:322](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/accordion/accordion.component.ts#L322)

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### closeOthers

> `readonly` **closeOthers**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:315](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/accordion/accordion.component.ts#L315)

If `true`, only one accordion-item at the time can stay open.

#### Default Value

`false`

***

### itemAnimated

> `readonly` **itemAnimated**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:360](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/accordion/accordion.component.ts#L360)

If `true`, accordion-item will be animated.

#### Default Value

`true`

***

### itemBodyClassName

> `readonly` **itemBodyClassName**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:416](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/accordion/accordion.component.ts#L416)

CSS classes to add on the accordion-item body DOM element.

#### Default Value

`''`

***

### itemBodyContainerClassName

> `readonly` **itemBodyContainerClassName**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:409](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/accordion/accordion.component.ts#L409)

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Default Value

`''`

***

### itemButtonClassName

> `readonly` **itemButtonClassName**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:401](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/accordion/accordion.component.ts#L401)

CSS classes to add on the accordion-item toggle button DOM element.

#### Default Value

`''`

***

### itemClassName

> `readonly` **itemClassName**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:387](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/accordion/accordion.component.ts#L387)

CSS classes to add on the accordion-item DOM element.

#### Default Value

`''`

***

### itemDestroyOnHide

> `readonly` **itemDestroyOnHide**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:353](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/accordion/accordion.component.ts#L353)

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

#### Default Value

`true`

***

### itemHeaderClassName

> `readonly` **itemHeaderClassName**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:394](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/accordion/accordion.component.ts#L394)

CSS classes to add on the accordion-item header DOM element.

#### Default Value

`''`

***

### itemHeadingLevel

> `readonly` **itemHeadingLevel**: `InputSignal`\<`2` \| `1` \| `4` \| `3` \| `6` \| `5` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:423](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/accordion/accordion.component.ts#L423)

The html heading level to use for the accordion-item-header.

#### Default Value

`2`

***

### itemHidden

> `readonly` **itemHidden**: `OutputEmitterRef`\<`string`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:346](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/accordion/accordion.component.ts#L346)

An event fired when an item is hidden.

Event payload is the id of the item.

#### Default Value

```ts
() => {}
```

***

### itemShown

> `readonly` **itemShown**: `OutputEmitterRef`\<`string`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:334](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/accordion/accordion.component.ts#L334)

An event fired when an item is shown.

Event payload is the id of the item.

#### Default Value

```ts
() => {}
```

***

### itemStructure

> `readonly` **itemStructure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](../interfaces/AccordionItemContext.md)\>\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:380](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/accordion/accordion.component.ts#L380)

Structure of the accordion-item. The default item structure is: accordion-item
contains accordion header and accordion-item body container; the accordion header contains the accordion button
(that contains `header`), while the accordion-item body container contains the accordion body (that contains `children`).
The itemTransition is applied on this element.

It is a prop of the accordion-item.

***

### itemTransition

> `readonly` **itemTransition**: `InputSignal`\<[`TransitionFn`](../type-aliases/TransitionFn.md) \| `undefined`\>

Defined in: [angular/bootstrap/src/components/accordion/accordion.component.ts:370](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/accordion/accordion.component.ts#L370)

The transition to use for the accordion-item body-container when the accordion-item is toggled.

#### Default Value

```ts
collapseVerticalTransition
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
