AccordionItemComponent is a component that represents an item within an accordion.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`AccordionItemWidget`](../type-aliases/AccordionItemWidget.md)\>

## Implements

- [`AfterViewInit`](https://angular.dev/api/core/AfterViewInit)

## Properties

### animated

> `readonly` **animated**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true`, accordion-item will be animated.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:222](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/accordion/accordion.component.ts#L222)

***

### bodyClassName

> `readonly` **bodyClassName**: `InputSignal`\<`undefined` \| `string`\>

CSS classes to add on the accordion-item body DOM element.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:239](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/accordion/accordion.component.ts#L239)

***

### bodyContainerClassName

> `readonly` **bodyContainerClassName**: `InputSignal`\<`undefined` \| `string`\>

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:235](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/accordion/accordion.component.ts#L235)

***

### buttonClassName

> `readonly` **buttonClassName**: `InputSignal`\<`undefined` \| `string`\>

CSS classes to add on the accordion-item collapse DOM element.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:230](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/accordion/accordion.component.ts#L230)

***

### children

> `readonly` **children**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](../interfaces/AccordionItemContext.md)\>\>

Content present in the accordion body.

It is a prop of the accordion-item.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:176](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/accordion/accordion.component.ts#L176)

***

### className

> `readonly` **className**: `InputSignal`\<`undefined` \| `string`\>

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:204](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/accordion/accordion.component.ts#L204)

***

### destroyOnHide

> `readonly` **destroyOnHide**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:208](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/accordion/accordion.component.ts#L208)

***

### disabled

> `readonly` **disabled**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true`, the accordion-item will be disabled.
It will not react to user's clicks, but still will be possible to toggle programmatically.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:213](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/accordion/accordion.component.ts#L213)

***

### header

> `readonly` **header**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](../interfaces/AccordionItemContext.md)\>\>

Content present in the accordion button inside the accordion header.

It is a prop of the accordion-item.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:169](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/accordion/accordion.component.ts#L169)

***

### headerClassName

> `readonly` **headerClassName**: `InputSignal`\<`undefined` \| `string`\>

CSS classes to add on the accordion-item header DOM element.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:226](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/accordion/accordion.component.ts#L226)

***

### headingTag

> `readonly` **headingTag**: `InputSignal`\<`undefined` \| `string`\>

The html tag to use for the accordion-item-header.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:243](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/accordion/accordion.component.ts#L243)

***

### hidden

> `readonly` **hidden**: `OutputEmitterRef`\<`void`\>

An event fired when an item is hidden.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:251](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/accordion/accordion.component.ts#L251)

***

### id

> `readonly` **id**: `InputSignal`\<`undefined` \| `string`\>

The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:193](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/accordion/accordion.component.ts#L193)

***

### shown

> `readonly` **shown**: `OutputEmitterRef`\<`void`\>

An event fired when an item is shown.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:247](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/accordion/accordion.component.ts#L247)

***

### structure

> `readonly` **structure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`AccordionItemContext`](../interfaces/AccordionItemContext.md)\>\>

Structure of the accordion-item. The default item structure is: accordion-item
contains accordion header and accordion-item body container; the accordion header contains the accordion button
(that contains `header`), while the accordion-item body container contains the accordion body (that contains `children`).
The itemTransition is applied on this element.

It is a prop of the accordion-item.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:187](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/accordion/accordion.component.ts#L187)

***

### transition

> `readonly` **transition**: `InputSignal`\<`undefined` \| [`TransitionFn`](../type-aliases/TransitionFn.md)\>

The transition to use for the accordion-item body-container when the accordion-item is toggled.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:197](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/accordion/accordion.component.ts#L197)

***

### visible

> `readonly` **visible**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:218](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/accordion/accordion.component.ts#L218)

***

### visibleChange

> `readonly` **visibleChange**: `OutputEmitterRef`\<`boolean`\>

An event fired when the `visible` value changes.

Event payload is the new value of visible.

#### Defined in

[angular/bootstrap/src/components/accordion/accordion.component.ts:257](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/accordion/accordion.component.ts#L257)

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

[angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/headless/src/utils/widget.ts#L140)

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

[angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/headless/src/utils/widget.ts#L156)

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

[angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/headless/src/utils/widget.ts#L148)

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

[angular/bootstrap/src/components/accordion/accordion.component.ts:286](https://github.com/AmadeusITGroup/AgnosUI/blob/e17789cb356521bdc9f065a2cdcabb94f47bb49a/angular/bootstrap/src/components/accordion/accordion.component.ts#L286)
