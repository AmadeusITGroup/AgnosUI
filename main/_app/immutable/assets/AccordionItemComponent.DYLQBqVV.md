AccordionItemComponent is a component that represents an item within an accordion.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`AccordionItemWidget`](../type-aliases/AccordionItemWidget.md)\>

## Implements

- [`AfterViewInit`](https://angular.dev/api/core/AfterViewInit)

## Properties

### animated

> **animated**: `undefined` \| `boolean`

If `true`, accordion-item will be animated.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:238](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/accordion/accordion.component.ts#L238)

***

### bodyClassName

> **bodyClassName**: `undefined` \| `string`

CSS classes to add on the accordion-item body DOM element.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:255](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/accordion/accordion.component.ts#L255)

***

### bodyContainerClassName

> **bodyContainerClassName**: `undefined` \| `string`

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:251](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/accordion/accordion.component.ts#L251)

***

### buttonClassName

> **buttonClassName**: `undefined` \| `string`

CSS classes to add on the accordion-item collapse DOM element.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:246](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/accordion/accordion.component.ts#L246)

***

### children

> **children**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](../interfaces/AccordionItemContext.md)\>

Content present in the accordion body.

It is a prop of the accordion-item.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:190](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/accordion/accordion.component.ts#L190)

***

### className

> **className**: `undefined` \| `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:220](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/accordion/accordion.component.ts#L220)

***

### destroyOnHide

> **destroyOnHide**: `undefined` \| `boolean`

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:224](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/accordion/accordion.component.ts#L224)

***

### disabled

> **disabled**: `undefined` \| `boolean`

If `true`, the accordion-item will be disabled.
It will not react to user's clicks, but still will be possible to toggle programmatically.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:229](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/accordion/accordion.component.ts#L229)

***

### header

> **header**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](../interfaces/AccordionItemContext.md)\>

Content present in the accordion button inside the accordion header.

It is a prop of the accordion-item.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:182](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/accordion/accordion.component.ts#L182)

***

### headerClassName

> **headerClassName**: `undefined` \| `string`

CSS classes to add on the accordion-item header DOM element.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:242](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/accordion/accordion.component.ts#L242)

***

### headingTag

> **headingTag**: `undefined` \| `string`

The html tag to use for the accordion-item-header.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:259](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/accordion/accordion.component.ts#L259)

***

### hidden

> **hidden**: `EventEmitter`\<`void`\>

An event fired when an item is hidden.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:267](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/accordion/accordion.component.ts#L267)

***

### id

> **id**: `undefined` \| `string`

The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:209](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/accordion/accordion.component.ts#L209)

***

### shown

> **shown**: `EventEmitter`\<`void`\>

An event fired when an item is shown.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:263](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/accordion/accordion.component.ts#L263)

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](../interfaces/AccordionItemContext.md)\>

Structure of the accordion-item. The default item structure is: accordion-item
contains accordion header and accordion-item body container; the accordion header contains the accordion button
(that contains `header`), while the accordion-item body container contains the accordion body (that contains `children`).
The itemTransition is applied on this element.

It is a prop of the accordion-item.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:202](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/accordion/accordion.component.ts#L202)

***

### transition

> **transition**: `undefined` \| [`TransitionFn`](../type-aliases/TransitionFn.md)

The transition to use for the accordion-item body-container when the accordion-item is toggled.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:213](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/accordion/accordion.component.ts#L213)

***

### visible

> **visible**: `undefined` \| `boolean`

If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:234](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/accordion/accordion.component.ts#L234)

***

### visibleChange

> **visibleChange**: `EventEmitter`\<`boolean`\>

An event fired when the `visible` value changes.

Event payload is the new value of visible.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:273](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/accordion/accordion.component.ts#L273)

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

[angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/headless/src/utils/widget.ts#L140)

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

[angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/headless/src/utils/widget.ts#L156)

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

[angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/headless/src/utils/widget.ts#L148)

## Methods

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

[angular/bootstrap/src/components/accordion/accordion.component.ts:303](https://github.com/AmadeusITGroup/AgnosUI/blob/47feb5c8123470f3c321001d5d673005bed6c699/angular/bootstrap/src/components/accordion/accordion.component.ts#L303)
