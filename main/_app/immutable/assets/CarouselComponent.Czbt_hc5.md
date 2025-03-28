Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:138](https://github.com/AmadeusITGroup/AgnosUI/blob/b6b4206253ceb685ed4ae155cfcc1880b818a7dc/angular/bootstrap/src/components/carousel/carousel.component.ts#L138)

CarouselComponent is an Angular Component that extends [BaseWidgetDirective](BaseWidgetDirective.md)<[CarouselWidget](../type-aliases/CarouselWidget.md)>
to create a customizable carousel widget. It provides various inputs (see [CarouselProps](../interfaces/CarouselProps.md))
to configure the appearance and behavior of the carousel.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`CarouselWidget`](../type-aliases/CarouselWidget.md)\<`SlideData`\>\>

## Type Parameters

### SlideData

`SlideData` *extends* `object`

## Properties

### align

> `readonly` **align**: `InputSignal`\<`undefined` \| `"start"` \| `"end"` \| `"center"`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:224](https://github.com/AmadeusITGroup/AgnosUI/blob/b6b4206253ceb685ed4ae155cfcc1880b818a7dc/angular/bootstrap/src/components/carousel/carousel.component.ts#L224)

Align the slides relative to the carousel viewport

#### See

[https://www.embla-carousel.com/api/options/#align](https://www.embla-carousel.com/api/options/#align)

#### Default Value

`'center'`

***

### ariaIndicatorLabel

> `readonly` **ariaIndicatorLabel**: `InputSignal`\<`undefined` \| (`index`) => `string`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:142](https://github.com/AmadeusITGroup/AgnosUI/blob/b6b4206253ceb685ed4ae155cfcc1880b818a7dc/angular/bootstrap/src/components/carousel/carousel.component.ts#L142)

Aria label for navigation indicators

***

### ariaLive

> `readonly` **ariaLive**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:267](https://github.com/AmadeusITGroup/AgnosUI/blob/b6b4206253ceb685ed4ae155cfcc1880b818a7dc/angular/bootstrap/src/components/carousel/carousel.component.ts#L267)

The aria-live attribute value for the carousel container.

#### Default Value

`'polite'`

***

### ariaNextLabel

> `readonly` **ariaNextLabel**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:152](https://github.com/AmadeusITGroup/AgnosUI/blob/b6b4206253ceb685ed4ae155cfcc1880b818a7dc/angular/bootstrap/src/components/carousel/carousel.component.ts#L152)

Aria label for next button

***

### ariaPrevLabel

> `readonly` **ariaPrevLabel**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:147](https://github.com/AmadeusITGroup/AgnosUI/blob/b6b4206253ceb685ed4ae155cfcc1880b818a7dc/angular/bootstrap/src/components/carousel/carousel.component.ts#L147)

Aria label for previous button

***

### className

> `readonly` **className**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:246](https://github.com/AmadeusITGroup/AgnosUI/blob/b6b4206253ceb685ed4ae155cfcc1880b818a7dc/angular/bootstrap/src/components/carousel/carousel.component.ts#L246)

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### container

> `readonly` **container**: `InputSignal`\<`undefined` \| `null` \| `string`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:231](https://github.com/AmadeusITGroup/AgnosUI/blob/b6b4206253ceb685ed4ae155cfcc1880b818a7dc/angular/bootstrap/src/components/carousel/carousel.component.ts#L231)

Enables choosing a custom container element which holds the slides. By default, Embla will choose the first direct child element of the root element. Provide a valid CSS selector string.

#### See

[https://www.embla-carousel.com/api/options/#container](https://www.embla-carousel.com/api/options/#container)

***

### containerClass

> `readonly` **containerClass**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:253](https://github.com/AmadeusITGroup/AgnosUI/blob/b6b4206253ceb685ed4ae155cfcc1880b818a7dc/angular/bootstrap/src/components/carousel/carousel.component.ts#L253)

Class name to apply to the container of the carousel.

#### Default Value

`''`

***

### containScroll

> `readonly` **containScroll**: `InputSignal`\<`undefined` \| `false` \| `"trimSnaps"` \| `"keepSnaps"`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:239](https://github.com/AmadeusITGroup/AgnosUI/blob/b6b4206253ceb685ed4ae155cfcc1880b818a7dc/angular/bootstrap/src/components/carousel/carousel.component.ts#L239)

Clear leading and trailing empty space that causes excessive scrolling

#### See

[https://www.embla-carousel.com/api/options/#containScroll](https://www.embla-carousel.com/api/options/#containScroll)

#### Default Value

`'trimSnaps'`

***

### direction

> `readonly` **direction**: `InputSignal`\<`undefined` \| `"ltr"` \| `"rtl"`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:160](https://github.com/AmadeusITGroup/AgnosUI/blob/b6b4206253ceb685ed4ae155cfcc1880b818a7dc/angular/bootstrap/src/components/carousel/carousel.component.ts#L160)

Choose content direction between `ltr` and `rtl`

#### See

[https://www.embla-carousel.com/api/options/#direction](https://www.embla-carousel.com/api/options/#direction)

#### Default Value

`'ltr'`

***

### dragFree

> `readonly` **dragFree**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:168](https://github.com/AmadeusITGroup/AgnosUI/blob/b6b4206253ceb685ed4ae155cfcc1880b818a7dc/angular/bootstrap/src/components/carousel/carousel.component.ts#L168)

Enables momentum scrolling

#### See

[https://www.embla-carousel.com/api/options/#dragFree](https://www.embla-carousel.com/api/options/#dragFree)

#### Default Value

`false`

***

### dragThreshold

> `readonly` **dragThreshold**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:176](https://github.com/AmadeusITGroup/AgnosUI/blob/b6b4206253ceb685ed4ae155cfcc1880b818a7dc/angular/bootstrap/src/components/carousel/carousel.component.ts#L176)

Drag threshold in pixels

#### See

[https://www.embla-carousel.com/api/options/#dragThreshold](https://www.embla-carousel.com/api/options/#dragThreshold)

#### Default Value

`10`

***

### duration

> `readonly` **duration**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:184](https://github.com/AmadeusITGroup/AgnosUI/blob/b6b4206253ceb685ed4ae155cfcc1880b818a7dc/angular/bootstrap/src/components/carousel/carousel.component.ts#L184)

Set scroll duration when triggered by any of the API methods

#### See

[https://www.embla-carousel.com/api/options/#duration](https://www.embla-carousel.com/api/options/#duration)

#### Default Value

`25`

***

### loop

> `readonly` **loop**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:192](https://github.com/AmadeusITGroup/AgnosUI/blob/b6b4206253ceb685ed4ae155cfcc1880b818a7dc/angular/bootstrap/src/components/carousel/carousel.component.ts#L192)

Enables infinite looping

#### See

[https://www.embla-carousel.com/api/options/#loop](https://www.embla-carousel.com/api/options/#loop)

#### Default Value

`false`

***

### navigation

> `readonly` **navigation**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`CarouselContext`](../type-aliases/CarouselContext.md)\<`SlideData`\>\>\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:288](https://github.com/AmadeusITGroup/AgnosUI/blob/b6b4206253ceb685ed4ae155cfcc1880b818a7dc/angular/bootstrap/src/components/carousel/carousel.component.ts#L288)

The navigation layer of the carousel.

#### Default Value

`undefined`

***

### plugins

> `readonly` **plugins**: `InputSignal`\<`undefined` \| `CreatePluginType`\<`LoosePluginType`, \{\}\>[]\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:216](https://github.com/AmadeusITGroup/AgnosUI/blob/b6b4206253ceb685ed4ae155cfcc1880b818a7dc/angular/bootstrap/src/components/carousel/carousel.component.ts#L216)

Plugins to extend the carousel with additional features

#### Default Value

`[]`

***

### showNavigationArrows

> `readonly` **showNavigationArrows**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:205](https://github.com/AmadeusITGroup/AgnosUI/blob/b6b4206253ceb685ed4ae155cfcc1880b818a7dc/angular/bootstrap/src/components/carousel/carousel.component.ts#L205)

If `true`, 'previous' and 'next' navigation arrows will be visible.

***

### showNavigationIndicators

> `readonly` **showNavigationIndicators**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:210](https://github.com/AmadeusITGroup/AgnosUI/blob/b6b4206253ceb685ed4ae155cfcc1880b818a7dc/angular/bootstrap/src/components/carousel/carousel.component.ts#L210)

If `true`, navigation indicators at the bottom of the slide will be visible.

***

### skipSnaps

> `readonly` **skipSnaps**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:200](https://github.com/AmadeusITGroup/AgnosUI/blob/b6b4206253ceb685ed4ae155cfcc1880b818a7dc/angular/bootstrap/src/components/carousel/carousel.component.ts#L200)

Allow the carousel to skip scroll snaps if it's dragged vigorously

#### See

[https://www.embla-carousel.com/api/options/#skipsnaps](https://www.embla-carousel.com/api/options/#skipsnaps)

#### Default Value

`false`

***

### slide

> `readonly` **slide**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`CarouselSlideContext`](../type-aliases/CarouselSlideContext.md)\<`SlideData`\>\>\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:295](https://github.com/AmadeusITGroup/AgnosUI/blob/b6b4206253ceb685ed4ae155cfcc1880b818a7dc/angular/bootstrap/src/components/carousel/carousel.component.ts#L295)

The content of each slide in the carousel.

#### Default Value

`undefined`

***

### slideClass

> `readonly` **slideClass**: `InputSignal`\<`undefined` \| `string` \| (`slideContext`) => `string`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:260](https://github.com/AmadeusITGroup/AgnosUI/blob/b6b4206253ceb685ed4ae155cfcc1880b818a7dc/angular/bootstrap/src/components/carousel/carousel.component.ts#L260)

Class name to apply to each slide in the carousel.

#### Default Value

`''`

***

### slidesData

> `readonly` **slidesData**: `InputSignal`\<`undefined` \| `SlideData`[]\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:274](https://github.com/AmadeusITGroup/AgnosUI/blob/b6b4206253ceb685ed4ae155cfcc1880b818a7dc/angular/bootstrap/src/components/carousel/carousel.component.ts#L274)

The data for each slide in the carousel.

#### Default Value

`[]`

***

### structure

> `readonly` **structure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`CarouselContext`](../type-aliases/CarouselContext.md)\<`SlideData`\>\>\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:281](https://github.com/AmadeusITGroup/AgnosUI/blob/b6b4206253ceb685ed4ae155cfcc1880b818a7dc/angular/bootstrap/src/components/carousel/carousel.component.ts#L281)

The structure of the carousel.

#### Default Value

`undefined`

## Accessors

### api

#### Get Signature

> **get** **api**(): `W`\[`"api"`\]

Defined in: [angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/b6b4206253ceb685ed4ae155cfcc1880b818a7dc/angular/headless/src/utils/widget.ts#L140)

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

Defined in: [angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/b6b4206253ceb685ed4ae155cfcc1880b818a7dc/angular/headless/src/utils/widget.ts#L156)

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

Defined in: [angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/b6b4206253ceb685ed4ae155cfcc1880b818a7dc/angular/headless/src/utils/widget.ts#L148)

Retrieves the widget state. Each property of the state is exposed through an Angular [Signal](https://angular.dev/api/core/Signal)

##### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)
