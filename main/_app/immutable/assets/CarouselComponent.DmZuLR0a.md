Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:132](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/angular/bootstrap/src/components/carousel/carousel.component.ts#L132)

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

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:218](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/angular/bootstrap/src/components/carousel/carousel.component.ts#L218)

Align the slides relative to the carousel viewport

#### See

[https://www.embla-carousel.com/api/options/#align](https://www.embla-carousel.com/api/options/#align)

#### Default Value

`'center'`

***

### ariaIndicatorLabel

> `readonly` **ariaIndicatorLabel**: `InputSignal`\<`undefined` \| (`index`) => `string`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:136](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/angular/bootstrap/src/components/carousel/carousel.component.ts#L136)

Aria label for navigation indicators

***

### ariaNextLabel

> `readonly` **ariaNextLabel**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:146](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/angular/bootstrap/src/components/carousel/carousel.component.ts#L146)

Aria label for next button

***

### ariaPrevLabel

> `readonly` **ariaPrevLabel**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:141](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/angular/bootstrap/src/components/carousel/carousel.component.ts#L141)

Aria label for previous button

***

### container

> `readonly` **container**: `InputSignal`\<`undefined` \| `null` \| `string`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:225](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/angular/bootstrap/src/components/carousel/carousel.component.ts#L225)

Enables choosing a custom container element which holds the slides. By default, Embla will choose the first direct child element of the root element. Provide a valid CSS selector string.

#### See

[https://www.embla-carousel.com/api/options/#container](https://www.embla-carousel.com/api/options/#container)

***

### containScroll

> `readonly` **containScroll**: `InputSignal`\<`undefined` \| `false` \| `"trimSnaps"` \| `"keepSnaps"`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:233](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/angular/bootstrap/src/components/carousel/carousel.component.ts#L233)

Clear leading and trailing empty space that causes excessive scrolling

#### See

[https://www.embla-carousel.com/api/options/#containScroll](https://www.embla-carousel.com/api/options/#containScroll)

#### Default Value

`'trimSnaps'`

***

### direction

> `readonly` **direction**: `InputSignal`\<`undefined` \| `"ltr"` \| `"rtl"`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:154](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/angular/bootstrap/src/components/carousel/carousel.component.ts#L154)

Choose content direction between `ltr` and `rtl`

#### See

[https://www.embla-carousel.com/api/options/#direction](https://www.embla-carousel.com/api/options/#direction)

#### Default Value

`'ltr'`

***

### dragFree

> `readonly` **dragFree**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:162](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/angular/bootstrap/src/components/carousel/carousel.component.ts#L162)

Enables momentum scrolling

#### See

[https://www.embla-carousel.com/api/options/#dragFree](https://www.embla-carousel.com/api/options/#dragFree)

#### Default Value

`false`

***

### dragThreshold

> `readonly` **dragThreshold**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:170](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/angular/bootstrap/src/components/carousel/carousel.component.ts#L170)

Drag threshold in pixels

#### See

[https://www.embla-carousel.com/api/options/#dragThreshold](https://www.embla-carousel.com/api/options/#dragThreshold)

#### Default Value

`10`

***

### duration

> `readonly` **duration**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:178](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/angular/bootstrap/src/components/carousel/carousel.component.ts#L178)

Set scroll duration when triggered by any of the API methods

#### See

[https://www.embla-carousel.com/api/options/#duration](https://www.embla-carousel.com/api/options/#duration)

#### Default Value

`25`

***

### loop

> `readonly` **loop**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:186](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/angular/bootstrap/src/components/carousel/carousel.component.ts#L186)

Enables infinite looping

#### See

[https://www.embla-carousel.com/api/options/#loop](https://www.embla-carousel.com/api/options/#loop)

#### Default Value

`false`

***

### navigation

> `readonly` **navigation**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`CarouselContext`](../type-aliases/CarouselContext.md)\<`SlideData`\>\>\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:248](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/angular/bootstrap/src/components/carousel/carousel.component.ts#L248)

The navigation layer of the carousel.

***

### plugins

> `readonly` **plugins**: `InputSignal`\<`undefined` \| `CreatePluginType`\<`LoosePluginType`, \{\}\>[]\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:210](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/angular/bootstrap/src/components/carousel/carousel.component.ts#L210)

Plugins to extend the carousel with additional features

#### Default Value

`[]`

***

### showNavigationArrows

> `readonly` **showNavigationArrows**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:199](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/angular/bootstrap/src/components/carousel/carousel.component.ts#L199)

If `true`, 'previous' and 'next' navigation arrows will be visible.

***

### showNavigationIndicators

> `readonly` **showNavigationIndicators**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:204](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/angular/bootstrap/src/components/carousel/carousel.component.ts#L204)

If `true`, navigation indicators at the bottom of the slide will be visible.

***

### skipSnaps

> `readonly` **skipSnaps**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:194](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/angular/bootstrap/src/components/carousel/carousel.component.ts#L194)

Allow the carousel to skip scroll snaps if it's dragged vigorously

#### See

[https://www.embla-carousel.com/api/options/#skipsnaps](https://www.embla-carousel.com/api/options/#skipsnaps)

#### Default Value

`false`

***

### slide

> `readonly` **slide**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`CarouselSlideContext`](../type-aliases/CarouselSlideContext.md)\<`SlideData`\>\>\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:253](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/angular/bootstrap/src/components/carousel/carousel.component.ts#L253)

The content of each slide in the carousel.

***

### slidesData

> `readonly` **slidesData**: `InputSignal`\<`undefined` \| `SlideData`[]\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:238](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/angular/bootstrap/src/components/carousel/carousel.component.ts#L238)

The data for each slide in the carousel.

***

### structure

> `readonly` **structure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`CarouselContext`](../type-aliases/CarouselContext.md)\<`SlideData`\>\>\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:243](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/angular/bootstrap/src/components/carousel/carousel.component.ts#L243)

The structure of the carousel.

## Accessors

### api

#### Get Signature

> **get** **api**(): `W`\[`"api"`\]

Defined in: [angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/angular/headless/src/utils/widget.ts#L140)

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

Defined in: [angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/angular/headless/src/utils/widget.ts#L156)

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

Defined in: [angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/8f62c905e17d58c3e4e3b3b0f0f98e74caf914c2/angular/headless/src/utils/widget.ts#L148)

Retrieves the widget state. Each property of the state is exposed through an Angular [Signal](https://angular.dev/api/core/Signal)

##### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)
