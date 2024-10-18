## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`AccordionWidget`](../type-aliases/AccordionWidget.md)\>

## Constructors

### new AccordionDirective()

> **new AccordionDirective**(): [`AccordionDirective`](AccordionDirective.md)

#### Returns

[`AccordionDirective`](AccordionDirective.md)

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`constructor`](BaseWidgetDirective.md#constructors)

## Properties

### \_widget

> `readonly` **\_widget**: [`AngularWidget`](../type-aliases/AngularWidget.md)\<[`AccordionWidget`](../type-aliases/AccordionWidget.md)\>

#### Overrides

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`_widget`](BaseWidgetDirective.md#_widget)

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:411](https://github.com/AmadeusITGroup/AgnosUI/blob/59853bab72c9e2a433a2c345e6f4cb3ebafbb4da/angular/bootstrap/src/components/accordion/accordion.component.ts#L411)

***

### className

> **className**: `undefined` \| `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:308](https://github.com/AmadeusITGroup/AgnosUI/blob/59853bab72c9e2a433a2c345e6f4cb3ebafbb4da/angular/bootstrap/src/components/accordion/accordion.component.ts#L308)

***

### closeOthers

> **closeOthers**: `undefined` \| `boolean`

If `true`, only one accordion-item at the time can stay open.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:301](https://github.com/AmadeusITGroup/AgnosUI/blob/59853bab72c9e2a433a2c345e6f4cb3ebafbb4da/angular/bootstrap/src/components/accordion/accordion.component.ts#L301)

***

### itemAnimated

> **itemAnimated**: `undefined` \| `boolean`

If `true`, accordion-item will be animated.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:346](https://github.com/AmadeusITGroup/AgnosUI/blob/59853bab72c9e2a433a2c345e6f4cb3ebafbb4da/angular/bootstrap/src/components/accordion/accordion.component.ts#L346)

***

### itemBodyClassName

> **itemBodyClassName**: `undefined` \| `string`

CSS classes to add on the accordion-item body DOM element.

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:402](https://github.com/AmadeusITGroup/AgnosUI/blob/59853bab72c9e2a433a2c345e6f4cb3ebafbb4da/angular/bootstrap/src/components/accordion/accordion.component.ts#L402)

***

### itemBodyContainerClassName

> **itemBodyContainerClassName**: `undefined` \| `string`

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:395](https://github.com/AmadeusITGroup/AgnosUI/blob/59853bab72c9e2a433a2c345e6f4cb3ebafbb4da/angular/bootstrap/src/components/accordion/accordion.component.ts#L395)

***

### itemButtonClassName

> **itemButtonClassName**: `undefined` \| `string`

CSS classes to add on the accordion-item toggle button DOM element.

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:387](https://github.com/AmadeusITGroup/AgnosUI/blob/59853bab72c9e2a433a2c345e6f4cb3ebafbb4da/angular/bootstrap/src/components/accordion/accordion.component.ts#L387)

***

### itemClassName

> **itemClassName**: `undefined` \| `string`

CSS classes to add on the accordion-item DOM element.

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:373](https://github.com/AmadeusITGroup/AgnosUI/blob/59853bab72c9e2a433a2c345e6f4cb3ebafbb4da/angular/bootstrap/src/components/accordion/accordion.component.ts#L373)

***

### itemDestroyOnHide

> **itemDestroyOnHide**: `undefined` \| `boolean`

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:339](https://github.com/AmadeusITGroup/AgnosUI/blob/59853bab72c9e2a433a2c345e6f4cb3ebafbb4da/angular/bootstrap/src/components/accordion/accordion.component.ts#L339)

***

### itemHeaderClassName

> **itemHeaderClassName**: `undefined` \| `string`

CSS classes to add on the accordion-item header DOM element.

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:380](https://github.com/AmadeusITGroup/AgnosUI/blob/59853bab72c9e2a433a2c345e6f4cb3ebafbb4da/angular/bootstrap/src/components/accordion/accordion.component.ts#L380)

***

### itemHeadingTag

> **itemHeadingTag**: `undefined` \| `string`

The html tag to use for the accordion-item-header.

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:409](https://github.com/AmadeusITGroup/AgnosUI/blob/59853bab72c9e2a433a2c345e6f4cb3ebafbb4da/angular/bootstrap/src/components/accordion/accordion.component.ts#L409)

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

[angular/bootstrap/src/components/accordion/accordion.component.ts:332](https://github.com/AmadeusITGroup/AgnosUI/blob/59853bab72c9e2a433a2c345e6f4cb3ebafbb4da/angular/bootstrap/src/components/accordion/accordion.component.ts#L332)

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

[angular/bootstrap/src/components/accordion/accordion.component.ts:320](https://github.com/AmadeusITGroup/AgnosUI/blob/59853bab72c9e2a433a2c345e6f4cb3ebafbb4da/angular/bootstrap/src/components/accordion/accordion.component.ts#L320)

***

### itemStructure

> **itemStructure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](../type-aliases/AccordionItemContext.md)\>

Structure of the accordion-item. The default item structure is: accordion-item
contains accordion header and accordion-item body container; the accordion header contains the accordion button
(that contains `header`), while the accordion-item body container contains the accordion body (that contains `children`).
The itemTransition is applied on this element.

It is a prop of the accordion-item.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:366](https://github.com/AmadeusITGroup/AgnosUI/blob/59853bab72c9e2a433a2c345e6f4cb3ebafbb4da/angular/bootstrap/src/components/accordion/accordion.component.ts#L366)

***

### itemTransition

> **itemTransition**: `undefined` \| [`TransitionFn`](../type-aliases/TransitionFn.md)

The transition to use for the accordion-item body-container when the accordion-item is toggled.

#### Default Value

```ts
collapseVerticalTransition
```

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:356](https://github.com/AmadeusITGroup/AgnosUI/blob/59853bab72c9e2a433a2c345e6f4cb3ebafbb4da/angular/bootstrap/src/components/accordion/accordion.component.ts#L356)

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

[angular/headless/src/utils/widget.ts:122](https://github.com/AmadeusITGroup/AgnosUI/blob/59853bab72c9e2a433a2c345e6f4cb3ebafbb4da/angular/headless/src/utils/widget.ts#L122)

***

### state

> `get` **state**(): [`Signal`](https://angular.dev/api/core/Signal)\<[`WidgetState`](../type-aliases/WidgetState.md)\<`W`\>\>

Retrieves the widget state as an Angular Signal

#### Returns

[`Signal`](https://angular.dev/api/core/Signal)\<[`WidgetState`](../type-aliases/WidgetState.md)\<`W`\>\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)

#### Defined in

[angular/headless/src/utils/widget.ts:130](https://github.com/AmadeusITGroup/AgnosUI/blob/59853bab72c9e2a433a2c345e6f4cb3ebafbb4da/angular/headless/src/utils/widget.ts#L130)

***

### widget

> `get` **widget**(): [`ContextWidget`](../type-aliases/ContextWidget.md)\<`W`\>

Retrieves the widget

#### Returns

[`ContextWidget`](../type-aliases/ContextWidget.md)\<`W`\>

the widget

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`widget`](BaseWidgetDirective.md#widget)

#### Defined in

[angular/headless/src/utils/widget.ts:138](https://github.com/AmadeusITGroup/AgnosUI/blob/59853bab72c9e2a433a2c345e6f4cb3ebafbb4da/angular/headless/src/utils/widget.ts#L138)

## Methods

### ngOnChanges()

> **ngOnChanges**(`changes`): `void`

#### Parameters

• **changes**: `SimpleChanges`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngOnChanges`](BaseWidgetDirective.md#ngonchanges)

#### Defined in

[angular/headless/src/utils/widget.ts:143](https://github.com/AmadeusITGroup/AgnosUI/blob/59853bab72c9e2a433a2c345e6f4cb3ebafbb4da/angular/headless/src/utils/widget.ts#L143)

***

### ngOnInit()

> **ngOnInit**(): `void`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngOnInit`](BaseWidgetDirective.md#ngoninit)

#### Defined in

[angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/59853bab72c9e2a433a2c345e6f4cb3ebafbb4da/angular/headless/src/utils/widget.ts#L148)
