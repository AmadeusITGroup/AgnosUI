Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:137](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/carousel/carousel.component.ts#L137)

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

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:223](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/carousel/carousel.component.ts#L223)

Align the slides relative to the carousel viewport

#### See

[https://www.embla-carousel.com/api/options/#align](https://www.embla-carousel.com/api/options/#align)

#### Default Value

`'center'`

***

### ariaIndicatorLabel

> `readonly` **ariaIndicatorLabel**: `InputSignal`\<`undefined` \| (`index`) => `string`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:141](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/carousel/carousel.component.ts#L141)

Aria label for navigation indicators

***

### ariaLive

> `readonly` **ariaLive**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:266](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/carousel/carousel.component.ts#L266)

The aria-live attribute value for the carousel container.

#### Default Value

`'polite'`

***

### ariaNextLabel

> `readonly` **ariaNextLabel**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:151](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/carousel/carousel.component.ts#L151)

Aria label for next button

***

### ariaPrevLabel

> `readonly` **ariaPrevLabel**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:146](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/carousel/carousel.component.ts#L146)

Aria label for previous button

***

### className

> `readonly` **className**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:245](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/carousel/carousel.component.ts#L245)

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### container

> `readonly` **container**: `InputSignal`\<`undefined` \| `null` \| `string`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:230](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/carousel/carousel.component.ts#L230)

Enables choosing a custom container element which holds the slides. By default, Embla will choose the first direct child element of the root element. Provide a valid CSS selector string.

#### See

[https://www.embla-carousel.com/api/options/#container](https://www.embla-carousel.com/api/options/#container)

***

### containerClass

> `readonly` **containerClass**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:252](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/carousel/carousel.component.ts#L252)

Class name to apply to the container of the carousel.

#### Default Value

`''`

***

### containScroll

> `readonly` **containScroll**: `InputSignal`\<`undefined` \| `false` \| `"trimSnaps"` \| `"keepSnaps"`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:238](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/carousel/carousel.component.ts#L238)

Clear leading and trailing empty space that causes excessive scrolling

#### See

[https://www.embla-carousel.com/api/options/#containScroll](https://www.embla-carousel.com/api/options/#containScroll)

#### Default Value

`'trimSnaps'`

***

### direction

> `readonly` **direction**: `InputSignal`\<`undefined` \| `"ltr"` \| `"rtl"`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:159](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/carousel/carousel.component.ts#L159)

Choose content direction between `ltr` and `rtl`

#### See

[https://www.embla-carousel.com/api/options/#direction](https://www.embla-carousel.com/api/options/#direction)

#### Default Value

`'ltr'`

***

### dragFree

> `readonly` **dragFree**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:167](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/carousel/carousel.component.ts#L167)

Enables momentum scrolling

#### See

[https://www.embla-carousel.com/api/options/#dragFree](https://www.embla-carousel.com/api/options/#dragFree)

#### Default Value

`false`

***

### dragThreshold

> `readonly` **dragThreshold**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:175](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/carousel/carousel.component.ts#L175)

Drag threshold in pixels

#### See

[https://www.embla-carousel.com/api/options/#dragThreshold](https://www.embla-carousel.com/api/options/#dragThreshold)

#### Default Value

`10`

***

### duration

> `readonly` **duration**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:183](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/carousel/carousel.component.ts#L183)

Set scroll duration when triggered by any of the API methods

#### See

[https://www.embla-carousel.com/api/options/#duration](https://www.embla-carousel.com/api/options/#duration)

#### Default Value

`25`

***

### loop

> `readonly` **loop**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:191](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/carousel/carousel.component.ts#L191)

Enables infinite looping

#### See

[https://www.embla-carousel.com/api/options/#loop](https://www.embla-carousel.com/api/options/#loop)

#### Default Value

`false`

***

### navigation

> `readonly` **navigation**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`CarouselContext`](../type-aliases/CarouselContext.md)\<`SlideData`\>\>\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:287](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/carousel/carousel.component.ts#L287)

The navigation layer of the carousel.

#### Default Value

`undefined`

***

### plugins

> `readonly` **plugins**: `InputSignal`\<`undefined` \| `CreatePluginType`\<`LoosePluginType`, \{ \}\>[]\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:215](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/carousel/carousel.component.ts#L215)

Plugins to extend the carousel with additional features

#### Default Value

`[]`

***

### showNavigationArrows

> `readonly` **showNavigationArrows**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:204](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/carousel/carousel.component.ts#L204)

If `true`, 'previous' and 'next' navigation arrows will be visible.

***

### showNavigationIndicators

> `readonly` **showNavigationIndicators**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:209](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/carousel/carousel.component.ts#L209)

If `true`, navigation indicators at the bottom of the slide will be visible.

***

### skipSnaps

> `readonly` **skipSnaps**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:199](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/carousel/carousel.component.ts#L199)

Allow the carousel to skip scroll snaps if it's dragged vigorously

#### See

[https://www.embla-carousel.com/api/options/#skipsnaps](https://www.embla-carousel.com/api/options/#skipsnaps)

#### Default Value

`false`

***

### slide

> `readonly` **slide**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`CarouselSlideContext`](../type-aliases/CarouselSlideContext.md)\<`SlideData`\>\>\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:294](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/carousel/carousel.component.ts#L294)

The content of each slide in the carousel.

#### Default Value

`undefined`

***

### slideClass

> `readonly` **slideClass**: `InputSignal`\<`undefined` \| `string` \| (`slideContext`) => `string`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:259](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/carousel/carousel.component.ts#L259)

Class name to apply to each slide in the carousel.

#### Default Value

`''`

***

### slidesData

> `readonly` **slidesData**: `InputSignal`\<`undefined` \| `SlideData`[]\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:273](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/carousel/carousel.component.ts#L273)

The data for each slide in the carousel.

#### Default Value

`[]`

***

### structure

> `readonly` **structure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`CarouselContext`](../type-aliases/CarouselContext.md)\<`SlideData`\>\>\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:280](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/bootstrap/src/components/carousel/carousel.component.ts#L280)

The structure of the carousel.

#### Default Value

`undefined`

## Accessors

### api

#### Get Signature

> **get** **api**(): `W`\[`"api"`\]

Defined in: [angular/headless/src/utils/widget.ts:137](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/headless/src/utils/widget.ts#L137)

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

Defined in: [angular/headless/src/utils/widget.ts:153](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/headless/src/utils/widget.ts#L153)

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

Defined in: [angular/headless/src/utils/widget.ts:145](https://github.com/AmadeusITGroup/AgnosUI/blob/a529aead48596779c63f6c4711a0c11cf69c0b95/angular/headless/src/utils/widget.ts#L145)

Retrieves the widget state. Each property of the state is exposed through an Angular [Signal](https://angular.dev/api/core/Signal)

##### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)
