## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`AccordionItemWidget`](../type-aliases/AccordionItemWidget.md)\>

## Implements

- [`AfterViewInit`](https://angular.dev/api/core/AfterViewInit)

## Constructors

### new AccordionItemComponent()

> **new AccordionItemComponent**(): [`AccordionItemComponent`](AccordionItemComponent.md)

#### Returns

[`AccordionItemComponent`](AccordionItemComponent.md)

#### Overrides

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`constructor`](BaseWidgetDirective.md#constructors)

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:253](https://github.com/AmadeusITGroup/AgnosUI/blob/b36742dbe4d58fca09ddc2b2eeaf6e5b4580ad05/angular/bootstrap/src/components/accordion/accordion.component.ts#L253)

## Properties

### animated

> **animated**: `undefined` \| `boolean`

If `true`, accordion-item will be animated.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:213](https://github.com/AmadeusITGroup/AgnosUI/blob/b36742dbe4d58fca09ddc2b2eeaf6e5b4580ad05/angular/bootstrap/src/components/accordion/accordion.component.ts#L213)

***

### bodyClassName

> **bodyClassName**: `undefined` \| `string`

CSS classes to add on the accordion-item body DOM element.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:230](https://github.com/AmadeusITGroup/AgnosUI/blob/b36742dbe4d58fca09ddc2b2eeaf6e5b4580ad05/angular/bootstrap/src/components/accordion/accordion.component.ts#L230)

***

### bodyContainerClassName

> **bodyContainerClassName**: `undefined` \| `string`

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:226](https://github.com/AmadeusITGroup/AgnosUI/blob/b36742dbe4d58fca09ddc2b2eeaf6e5b4580ad05/angular/bootstrap/src/components/accordion/accordion.component.ts#L226)

***

### buttonClassName

> **buttonClassName**: `undefined` \| `string`

CSS classes to add on the accordion-item collapse DOM element.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:221](https://github.com/AmadeusITGroup/AgnosUI/blob/b36742dbe4d58fca09ddc2b2eeaf6e5b4580ad05/angular/bootstrap/src/components/accordion/accordion.component.ts#L221)

***

### children

> **children**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](../interfaces/AccordionItemContext.md)\>

Content present in the accordion body.

It is a prop of the accordion-item.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:165](https://github.com/AmadeusITGroup/AgnosUI/blob/b36742dbe4d58fca09ddc2b2eeaf6e5b4580ad05/angular/bootstrap/src/components/accordion/accordion.component.ts#L165)

***

### className

> **className**: `undefined` \| `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:195](https://github.com/AmadeusITGroup/AgnosUI/blob/b36742dbe4d58fca09ddc2b2eeaf6e5b4580ad05/angular/bootstrap/src/components/accordion/accordion.component.ts#L195)

***

### destroyOnHide

> **destroyOnHide**: `undefined` \| `boolean`

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:199](https://github.com/AmadeusITGroup/AgnosUI/blob/b36742dbe4d58fca09ddc2b2eeaf6e5b4580ad05/angular/bootstrap/src/components/accordion/accordion.component.ts#L199)

***

### disabled

> **disabled**: `undefined` \| `boolean`

If `true`, the accordion-item will be disabled.
It will not react to user's clicks, but still will be possible to toggle programmatically.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:204](https://github.com/AmadeusITGroup/AgnosUI/blob/b36742dbe4d58fca09ddc2b2eeaf6e5b4580ad05/angular/bootstrap/src/components/accordion/accordion.component.ts#L204)

***

### header

> **header**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](../interfaces/AccordionItemContext.md)\>

Content present in the accordion button inside the accordion header.

It is a prop of the accordion-item.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:157](https://github.com/AmadeusITGroup/AgnosUI/blob/b36742dbe4d58fca09ddc2b2eeaf6e5b4580ad05/angular/bootstrap/src/components/accordion/accordion.component.ts#L157)

***

### headerClassName

> **headerClassName**: `undefined` \| `string`

CSS classes to add on the accordion-item header DOM element.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:217](https://github.com/AmadeusITGroup/AgnosUI/blob/b36742dbe4d58fca09ddc2b2eeaf6e5b4580ad05/angular/bootstrap/src/components/accordion/accordion.component.ts#L217)

***

### headingTag

> **headingTag**: `undefined` \| `string`

The html tag to use for the accordion-item-header.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:234](https://github.com/AmadeusITGroup/AgnosUI/blob/b36742dbe4d58fca09ddc2b2eeaf6e5b4580ad05/angular/bootstrap/src/components/accordion/accordion.component.ts#L234)

***

### hidden

> **hidden**: `EventEmitter`\<`void`\>

An event fired when an item is hidden.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:242](https://github.com/AmadeusITGroup/AgnosUI/blob/b36742dbe4d58fca09ddc2b2eeaf6e5b4580ad05/angular/bootstrap/src/components/accordion/accordion.component.ts#L242)

***

### id

> **id**: `undefined` \| `string`

The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:184](https://github.com/AmadeusITGroup/AgnosUI/blob/b36742dbe4d58fca09ddc2b2eeaf6e5b4580ad05/angular/bootstrap/src/components/accordion/accordion.component.ts#L184)

***

### shown

> **shown**: `EventEmitter`\<`void`\>

An event fired when an item is shown.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:238](https://github.com/AmadeusITGroup/AgnosUI/blob/b36742dbe4d58fca09ddc2b2eeaf6e5b4580ad05/angular/bootstrap/src/components/accordion/accordion.component.ts#L238)

***

### slotBodyFromContent

> **slotBodyFromContent**: `undefined` \| [`AccordionBodyDirective`](AccordionBodyDirective.md)

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:167](https://github.com/AmadeusITGroup/AgnosUI/blob/b36742dbe4d58fca09ddc2b2eeaf6e5b4580ad05/angular/bootstrap/src/components/accordion/accordion.component.ts#L167)

***

### slotChildren?

> `optional` **slotChildren**: [`TemplateRef`](https://angular.dev/api/core/TemplateRef)\<`void`\>

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:251](https://github.com/AmadeusITGroup/AgnosUI/blob/b36742dbe4d58fca09ddc2b2eeaf6e5b4580ad05/angular/bootstrap/src/components/accordion/accordion.component.ts#L251)

***

### slotHeaderFromContent

> **slotHeaderFromContent**: `undefined` \| [`AccordionHeaderDirective`](AccordionHeaderDirective.md)

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:159](https://github.com/AmadeusITGroup/AgnosUI/blob/b36742dbe4d58fca09ddc2b2eeaf6e5b4580ad05/angular/bootstrap/src/components/accordion/accordion.component.ts#L159)

***

### slotStructureFromContent

> **slotStructureFromContent**: `undefined` \| [`AccordionItemStructureDirective`](AccordionItemStructureDirective.md)

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:179](https://github.com/AmadeusITGroup/AgnosUI/blob/b36742dbe4d58fca09ddc2b2eeaf6e5b4580ad05/angular/bootstrap/src/components/accordion/accordion.component.ts#L179)

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](../interfaces/AccordionItemContext.md)\>

Structure of the accordion-item. The default item structure is: accordion-item
contains accordion header and accordion-item body container; the accordion header contains the accordion button
(that contains `header`), while the accordion-item body container contains the accordion body (that contains `children`).
The itemTransition is applied on this element.

It is a prop of the accordion-item.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:177](https://github.com/AmadeusITGroup/AgnosUI/blob/b36742dbe4d58fca09ddc2b2eeaf6e5b4580ad05/angular/bootstrap/src/components/accordion/accordion.component.ts#L177)

***

### transition

> **transition**: `undefined` \| [`TransitionFn`](../type-aliases/TransitionFn.md)

The transition to use for the accordion-item body-container when the accordion-item is toggled.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:188](https://github.com/AmadeusITGroup/AgnosUI/blob/b36742dbe4d58fca09ddc2b2eeaf6e5b4580ad05/angular/bootstrap/src/components/accordion/accordion.component.ts#L188)

***

### visible

> **visible**: `undefined` \| `boolean`

If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:209](https://github.com/AmadeusITGroup/AgnosUI/blob/b36742dbe4d58fca09ddc2b2eeaf6e5b4580ad05/angular/bootstrap/src/components/accordion/accordion.component.ts#L209)

***

### visibleChange

> **visibleChange**: `EventEmitter`\<`boolean`\>

An event fired when the `visible` value changes.

Event payload is the new value of visible.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:248](https://github.com/AmadeusITGroup/AgnosUI/blob/b36742dbe4d58fca09ddc2b2eeaf6e5b4580ad05/angular/bootstrap/src/components/accordion/accordion.component.ts#L248)

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

[angular/headless/src/utils/widget.ts:134](https://github.com/AmadeusITGroup/AgnosUI/blob/b36742dbe4d58fca09ddc2b2eeaf6e5b4580ad05/angular/headless/src/utils/widget.ts#L134)

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

[angular/headless/src/utils/widget.ts:150](https://github.com/AmadeusITGroup/AgnosUI/blob/b36742dbe4d58fca09ddc2b2eeaf6e5b4580ad05/angular/headless/src/utils/widget.ts#L150)

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

[angular/headless/src/utils/widget.ts:142](https://github.com/AmadeusITGroup/AgnosUI/blob/b36742dbe4d58fca09ddc2b2eeaf6e5b4580ad05/angular/headless/src/utils/widget.ts#L142)

## Methods

### ngAfterContentChecked()

> **ngAfterContentChecked**(): `void`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngAfterContentChecked`](BaseWidgetDirective.md#ngaftercontentchecked)

#### Defined in

[angular/headless/src/utils/widget.ts:165](https://github.com/AmadeusITGroup/AgnosUI/blob/b36742dbe4d58fca09ddc2b2eeaf6e5b4580ad05/angular/headless/src/utils/widget.ts#L165)

***

### ngAfterViewInit()

> **ngAfterViewInit**(): `void`

A callback method that is invoked immediately after
Angular has completed initialization of a component's view.
It is invoked only once when the view is instantiated.

#### Returns

`void`

#### Implementation of

`AfterViewInit.ngAfterViewInit`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:278](https://github.com/AmadeusITGroup/AgnosUI/blob/b36742dbe4d58fca09ddc2b2eeaf6e5b4580ad05/angular/bootstrap/src/components/accordion/accordion.component.ts#L278)

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

[angular/headless/src/utils/widget.ts:155](https://github.com/AmadeusITGroup/AgnosUI/blob/b36742dbe4d58fca09ddc2b2eeaf6e5b4580ad05/angular/headless/src/utils/widget.ts#L155)

***

### ngOnInit()

> **ngOnInit**(): `void`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngOnInit`](BaseWidgetDirective.md#ngoninit)

#### Defined in

[angular/headless/src/utils/widget.ts:160](https://github.com/AmadeusITGroup/AgnosUI/blob/b36742dbe4d58fca09ddc2b2eeaf6e5b4580ad05/angular/headless/src/utils/widget.ts#L160)
