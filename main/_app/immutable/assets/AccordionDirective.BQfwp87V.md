## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`AccordionWidget`](../type-aliases/AccordionWidget.md)\>

## Constructors

### new AccordionDirective()

> **new AccordionDirective**(): [`AccordionDirective`](AccordionDirective.md)

#### Returns

[`AccordionDirective`](AccordionDirective.md)

#### Overrides

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`constructor`](BaseWidgetDirective.md#constructors)

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:407](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/accordion/accordion.component.ts#L407)

## Properties

### className

> **className**: `undefined` \| `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:304](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/accordion/accordion.component.ts#L304)

***

### closeOthers

> **closeOthers**: `undefined` \| `boolean`

If `true`, only one accordion-item at the time can stay open.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:297](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/accordion/accordion.component.ts#L297)

***

### itemAnimated

> **itemAnimated**: `undefined` \| `boolean`

If `true`, accordion-item will be animated.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:342](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/accordion/accordion.component.ts#L342)

***

### itemBodyClassName

> **itemBodyClassName**: `undefined` \| `string`

CSS classes to add on the accordion-item body DOM element.

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:398](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/accordion/accordion.component.ts#L398)

***

### itemBodyContainerClassName

> **itemBodyContainerClassName**: `undefined` \| `string`

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:391](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/accordion/accordion.component.ts#L391)

***

### itemButtonClassName

> **itemButtonClassName**: `undefined` \| `string`

CSS classes to add on the accordion-item toggle button DOM element.

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:383](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/accordion/accordion.component.ts#L383)

***

### itemClassName

> **itemClassName**: `undefined` \| `string`

CSS classes to add on the accordion-item DOM element.

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:369](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/accordion/accordion.component.ts#L369)

***

### itemDestroyOnHide

> **itemDestroyOnHide**: `undefined` \| `boolean`

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:335](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/accordion/accordion.component.ts#L335)

***

### itemHeaderClassName

> **itemHeaderClassName**: `undefined` \| `string`

CSS classes to add on the accordion-item header DOM element.

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:376](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/accordion/accordion.component.ts#L376)

***

### itemHeadingTag

> **itemHeadingTag**: `undefined` \| `string`

The html tag to use for the accordion-item-header.

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:405](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/accordion/accordion.component.ts#L405)

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

[angular/bootstrap/src/components/accordion/accordion.component.ts:328](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/accordion/accordion.component.ts#L328)

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

[angular/bootstrap/src/components/accordion/accordion.component.ts:316](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/accordion/accordion.component.ts#L316)

***

### itemStructure

> **itemStructure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](../type-aliases/AccordionItemContext.md)\>

Structure of the accordion-item. The default item structure is: accordion-item
contains accordion header and accordion-item body container; the accordion header contains the accordion button
(that contains `header`), while the accordion-item body container contains the accordion body (that contains `children`).
The itemTransition is applied on this element.

It is a prop of the accordion-item.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:362](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/accordion/accordion.component.ts#L362)

***

### itemTransition

> **itemTransition**: `undefined` \| [`TransitionFn`](../type-aliases/TransitionFn.md)

The transition to use for the accordion-item body-container when the accordion-item is toggled.

#### Default Value

```ts
collapseVerticalTransition
```

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:352](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/bootstrap/src/components/accordion/accordion.component.ts#L352)

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

[angular/headless/src/utils/widget.ts:134](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/headless/src/utils/widget.ts#L134)

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

[angular/headless/src/utils/widget.ts:150](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/headless/src/utils/widget.ts#L150)

***

### state

> `get` **state**(): [`AngularState`](../type-aliases/AngularState.md)\<`W`\>

Retrieves the widget state as an Angular Signal

#### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)

#### Defined in

[angular/headless/src/utils/widget.ts:142](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/headless/src/utils/widget.ts#L142)

## Methods

### ngAfterContentChecked()

> **ngAfterContentChecked**(): `void`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngAfterContentChecked`](BaseWidgetDirective.md#ngaftercontentchecked)

#### Defined in

[angular/headless/src/utils/widget.ts:165](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/headless/src/utils/widget.ts#L165)

***

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

[angular/headless/src/utils/widget.ts:155](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/headless/src/utils/widget.ts#L155)

***

### ngOnInit()

> **ngOnInit**(): `void`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngOnInit`](BaseWidgetDirective.md#ngoninit)

#### Defined in

[angular/headless/src/utils/widget.ts:160](https://github.com/AmadeusITGroup/AgnosUI/blob/1247f00aeb3fb1fd56e6afe0a13f9741f83bbd3e/angular/headless/src/utils/widget.ts#L160)
