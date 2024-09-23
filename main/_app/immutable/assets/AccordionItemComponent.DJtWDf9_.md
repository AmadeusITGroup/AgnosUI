## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`AccordionItemWidget`](../type-aliases/AccordionItemWidget.md)\>

## Implements

- [`AfterContentChecked`](https://angular.dev/api/core/AfterContentChecked)
- [`AfterViewInit`](https://angular.dev/api/core/AfterViewInit)

## Constructors

### new AccordionItemComponent()

> **new AccordionItemComponent**(): [`AccordionItemComponent`](AccordionItemComponent.md)

#### Returns

[`AccordionItemComponent`](AccordionItemComponent.md)

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`constructor`](BaseWidgetDirective.md#constructors)

## Properties

### \_widget

> `readonly` **\_widget**: [`AngularWidget`](../type-aliases/AngularWidget.md)\<[`AccordionItemWidget`](../type-aliases/AccordionItemWidget.md)\>

#### Overrides

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`_widget`](BaseWidgetDirective.md#_widget)

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:261](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/angular/bootstrap/src/components/accordion/accordion.component.ts#L261)

***

### ad

> `readonly` **ad**: [`AccordionDirective`](AccordionDirective.md)

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:258](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/angular/bootstrap/src/components/accordion/accordion.component.ts#L258)

***

### animated

> **animated**: `undefined` \| `boolean`

If `true`, accordion-item will be animated.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:221](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/angular/bootstrap/src/components/accordion/accordion.component.ts#L221)

***

### bodyClassName

> **bodyClassName**: `undefined` \| `string`

CSS classes to add on the accordion-item body DOM element.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:238](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/angular/bootstrap/src/components/accordion/accordion.component.ts#L238)

***

### bodyContainerClassName

> **bodyContainerClassName**: `undefined` \| `string`

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:234](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/angular/bootstrap/src/components/accordion/accordion.component.ts#L234)

***

### buttonClassName

> **buttonClassName**: `undefined` \| `string`

CSS classes to add on the accordion-item collapse DOM element.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:229](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/angular/bootstrap/src/components/accordion/accordion.component.ts#L229)

***

### children

> **children**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](../type-aliases/AccordionItemContext.md)\>

Content present in the accordion body.

It is a prop of the accordion-item.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:173](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/angular/bootstrap/src/components/accordion/accordion.component.ts#L173)

***

### className

> **className**: `undefined` \| `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:203](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/angular/bootstrap/src/components/accordion/accordion.component.ts#L203)

***

### defaultSlots

> `readonly` **defaultSlots**: [`WritableSignal`](https://amadeusitgroup.github.io/tansu/interfaces/WritableSignal.html)\<[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`AccordionItemProps`](../interfaces/AccordionItemProps.md)\>, [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`AccordionItemProps`](../interfaces/AccordionItemProps.md)\>\>

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:259](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/angular/bootstrap/src/components/accordion/accordion.component.ts#L259)

***

### destroyOnHide

> **destroyOnHide**: `undefined` \| `boolean`

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:207](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/angular/bootstrap/src/components/accordion/accordion.component.ts#L207)

***

### disabled

> **disabled**: `undefined` \| `boolean`

If `true`, the accordion-item will be disabled.
It will not react to user's clicks, but still will be possible to toggle programmatically.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:212](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/angular/bootstrap/src/components/accordion/accordion.component.ts#L212)

***

### header

> **header**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](../type-aliases/AccordionItemContext.md)\>

Content present in the accordion button inside the accordion header.

It is a prop of the accordion-item.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:165](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/angular/bootstrap/src/components/accordion/accordion.component.ts#L165)

***

### headerClassName

> **headerClassName**: `undefined` \| `string`

CSS classes to add on the accordion-item header DOM element.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:225](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/angular/bootstrap/src/components/accordion/accordion.component.ts#L225)

***

### headingTag

> **headingTag**: `undefined` \| `string`

The html tag to use for the accordion-item-header.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:242](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/angular/bootstrap/src/components/accordion/accordion.component.ts#L242)

***

### hidden

> **hidden**: `EventEmitter`\<`void`\>

An event fired when an item is hidden.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:250](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/angular/bootstrap/src/components/accordion/accordion.component.ts#L250)

***

### id

> **id**: `undefined` \| `string`

The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:192](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/angular/bootstrap/src/components/accordion/accordion.component.ts#L192)

***

### shown

> **shown**: `EventEmitter`\<`void`\>

An event fired when an item is shown.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:246](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/angular/bootstrap/src/components/accordion/accordion.component.ts#L246)

***

### slotBodyFromContent

> **slotBodyFromContent**: `undefined` \| [`AccordionBodyDirective`](AccordionBodyDirective.md)

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:175](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/angular/bootstrap/src/components/accordion/accordion.component.ts#L175)

***

### slotHeaderFromContent

> **slotHeaderFromContent**: `undefined` \| [`AccordionHeaderDirective`](AccordionHeaderDirective.md)

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:167](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/angular/bootstrap/src/components/accordion/accordion.component.ts#L167)

***

### slotStructureFromContent

> **slotStructureFromContent**: `undefined` \| [`AccordionItemStructureDirective`](AccordionItemStructureDirective.md)

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:187](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/angular/bootstrap/src/components/accordion/accordion.component.ts#L187)

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](../type-aliases/AccordionItemContext.md)\>

Structure of the accordion-item. The default item structure is: accordion-item
contains accordion header and accordion-item body container; the accordion header contains the accordion button
(that contains `header`), while the accordion-item body container contains the accordion body (that contains `children`).
The itemTransition is applied on this element.

It is a prop of the accordion-item.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:185](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/angular/bootstrap/src/components/accordion/accordion.component.ts#L185)

***

### transition

> **transition**: `undefined` \| [`TransitionFn`](../type-aliases/TransitionFn.md)

The transition to use for the accordion-item body-container when the accordion-item is toggled.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:196](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/angular/bootstrap/src/components/accordion/accordion.component.ts#L196)

***

### visible

> **visible**: `undefined` \| `boolean`

If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:217](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/angular/bootstrap/src/components/accordion/accordion.component.ts#L217)

***

### visibleChange

> **visibleChange**: `EventEmitter`\<`boolean`\>

An event fired when the `visible` value changes.

Event payload is the new value of visible.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:256](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/angular/bootstrap/src/components/accordion/accordion.component.ts#L256)

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

[angular/headless/src/utils/widget.ts:123](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/angular/headless/src/utils/widget.ts#L123)

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

[angular/headless/src/utils/widget.ts:131](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/angular/headless/src/utils/widget.ts#L131)

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

[angular/headless/src/utils/widget.ts:139](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/angular/headless/src/utils/widget.ts#L139)

## Methods

### ngAfterContentChecked()

> **ngAfterContentChecked**(): `void`

A callback method that is invoked immediately after the
default change detector has completed checking all of the directive's
content.

#### Returns

`void`

#### Implementation of

`AfterContentChecked.ngAfterContentChecked`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:274](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/angular/bootstrap/src/components/accordion/accordion.component.ts#L274)

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

[angular/bootstrap/src/components/accordion/accordion.component.ts:282](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/angular/bootstrap/src/components/accordion/accordion.component.ts#L282)

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

[angular/headless/src/utils/widget.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/angular/headless/src/utils/widget.ts#L144)

***

### ngOnInit()

> **ngOnInit**(): `void`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngOnInit`](BaseWidgetDirective.md#ngoninit)

#### Defined in

[angular/headless/src/utils/widget.ts:149](https://github.com/AmadeusITGroup/AgnosUI/blob/faf60d0d2e1713871dfcbf70d656a2998673ad21/angular/headless/src/utils/widget.ts#L149)
