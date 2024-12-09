Directive for creating an accordion component.

This directive extends the `BaseWidgetDirective` and provides various inputs and outputs
to customize the behavior and appearance of the accordion and its items.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`AccordionWidget`](../type-aliases/AccordionWidget.md)\>

## Properties

### className

> `readonly` **className**: `InputSignal`\<`undefined` \| `string`\>

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:319](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/accordion/accordion.component.ts#L319)

***

### closeOthers

> `readonly` **closeOthers**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true`, only one accordion-item at the time can stay open.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:312](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/accordion/accordion.component.ts#L312)

***

### itemAnimated

> `readonly` **itemAnimated**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true`, accordion-item will be animated.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:357](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/accordion/accordion.component.ts#L357)

***

### itemBodyClassName

> `readonly` **itemBodyClassName**: `InputSignal`\<`undefined` \| `string`\>

CSS classes to add on the accordion-item body DOM element.

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:413](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/accordion/accordion.component.ts#L413)

***

### itemBodyContainerClassName

> `readonly` **itemBodyContainerClassName**: `InputSignal`\<`undefined` \| `string`\>

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:406](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/accordion/accordion.component.ts#L406)

***

### itemButtonClassName

> `readonly` **itemButtonClassName**: `InputSignal`\<`undefined` \| `string`\>

CSS classes to add on the accordion-item toggle button DOM element.

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:398](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/accordion/accordion.component.ts#L398)

***

### itemClassName

> `readonly` **itemClassName**: `InputSignal`\<`undefined` \| `string`\>

CSS classes to add on the accordion-item DOM element.

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:384](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/accordion/accordion.component.ts#L384)

***

### itemDestroyOnHide

> `readonly` **itemDestroyOnHide**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:350](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/accordion/accordion.component.ts#L350)

***

### itemHeaderClassName

> `readonly` **itemHeaderClassName**: `InputSignal`\<`undefined` \| `string`\>

CSS classes to add on the accordion-item header DOM element.

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:391](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/accordion/accordion.component.ts#L391)

***

### itemHeadingTag

> `readonly` **itemHeadingTag**: `InputSignal`\<`undefined` \| `string`\>

The html tag to use for the accordion-item-header.

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:420](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/accordion/accordion.component.ts#L420)

***

### itemHidden

> `readonly` **itemHidden**: `OutputEmitterRef`\<`string`\>

An event fired when an item is hidden.

Event payload is the id of the item.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:343](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/accordion/accordion.component.ts#L343)

***

### itemShown

> `readonly` **itemShown**: `OutputEmitterRef`\<`string`\>

An event fired when an item is shown.

Event payload is the id of the item.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:331](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/accordion/accordion.component.ts#L331)

***

### itemStructure

> `readonly` **itemStructure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](../interfaces/AccordionItemContext.md)\>\>

Structure of the accordion-item. The default item structure is: accordion-item
contains accordion header and accordion-item body container; the accordion header contains the accordion button
(that contains `header`), while the accordion-item body container contains the accordion body (that contains `children`).
The itemTransition is applied on this element.

It is a prop of the accordion-item.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:377](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/accordion/accordion.component.ts#L377)

***

### itemTransition

> `readonly` **itemTransition**: `InputSignal`\<`undefined` \| [`TransitionFn`](../type-aliases/TransitionFn.md)\>

The transition to use for the accordion-item body-container when the accordion-item is toggled.

#### Default Value

```ts
collapseVerticalTransition
```

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:367](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/bootstrap/src/components/accordion/accordion.component.ts#L367)

## Accessors

### api

#### Get Signature

> **get** **api**(): `W`\[`"api"`\]

Retrieves the widget api

##### Returns

`W`\[`"api"`\]

the widget api

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`api`](BaseWidgetDirective.md#api)

#### Defined in

[angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/headless/src/utils/widget.ts#L140)

***

### directives

#### Get Signature

> **get** **directives**(): `W`\[`"directives"`\]

Retrieves the widget directives

##### Returns

`W`\[`"directives"`\]

the widget directives

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`directives`](BaseWidgetDirective.md#directives)

#### Defined in

[angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/headless/src/utils/widget.ts#L156)

***

### state

#### Get Signature

> **get** **state**(): [`AngularState`](../type-aliases/AngularState.md)\<`W`\>

Retrieves the widget state. Each property of the state is exposed through an Angular [Signal](https://angular.dev/api/core/Signal)

##### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)

#### Defined in

[angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/38c530d7b93d336fdac6226f01aa8ebd162041c2/angular/headless/src/utils/widget.ts#L148)
