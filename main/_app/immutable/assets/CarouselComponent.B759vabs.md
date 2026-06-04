Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:136](https://github.com/AmadeusITGroup/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/carousel/carousel.component.ts#L136)

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

> `readonly` **align**: `InputSignal`\<`"start"` \| `"end"` \| `"center"` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:235](https://github.com/AmadeusITGroup/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/carousel/carousel.component.ts#L235)

Align the slides relative to the carousel viewport

#### See

[https://www.embla-carousel.com/api/options/#align](https://www.embla-carousel.com/api/options/#align)

#### Default Value

`'center'`

***

### ariaIndicatorLabel

> `readonly` **ariaIndicatorLabel**: `InputSignal`\<((`index`) => `string`) \| `undefined`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:145](https://github.com/AmadeusITGroup/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/carousel/carousel.component.ts#L145)

Aria label for navigation indicators

#### Default Value

```ts
(index: number) => `Select slide ${index + 1}`
```

***

### ariaLive

> `readonly` **ariaLive**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:280](https://github.com/AmadeusITGroup/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/carousel/carousel.component.ts#L280)

The aria-live attribute value for the carousel container.

#### Default Value

`'polite'`

***

### ariaNextLabel

> `readonly` **ariaNextLabel**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:159](https://github.com/AmadeusITGroup/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/carousel/carousel.component.ts#L159)

Aria label for next button

#### Default Value

`'Select next slide'`

***

### ariaPrevLabel

> `readonly` **ariaPrevLabel**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:152](https://github.com/AmadeusITGroup/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/carousel/carousel.component.ts#L152)

Aria label for previous button

#### Default Value

`'Select previous slide'`

***

### className

> `readonly` **className**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:259](https://github.com/AmadeusITGroup/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/carousel/carousel.component.ts#L259)

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### container

> `readonly` **container**: `InputSignal`\<`string` \| `null` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:244](https://github.com/AmadeusITGroup/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/carousel/carousel.component.ts#L244)

Enables choosing a custom container element which holds the slides. By default, Embla will choose the first direct child element of the root element. Provide a valid CSS selector string.

#### See

[https://www.embla-carousel.com/api/options/#container](https://www.embla-carousel.com/api/options/#container)

#### Default Value

`null`

***

### containerClass

> `readonly` **containerClass**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:266](https://github.com/AmadeusITGroup/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/carousel/carousel.component.ts#L266)

Class name to apply to the container of the carousel.

#### Default Value

`''`

***

### containScroll

> `readonly` **containScroll**: `InputSignal`\<`false` \| `"trimSnaps"` \| `"keepSnaps"` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:252](https://github.com/AmadeusITGroup/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/carousel/carousel.component.ts#L252)

Clear leading and trailing empty space that causes excessive scrolling

#### See

[https://www.embla-carousel.com/api/options/#containScroll](https://www.embla-carousel.com/api/options/#containScroll)

#### Default Value

`'trimSnaps'`

***

### direction

> `readonly` **direction**: `InputSignal`\<`"ltr"` \| `"rtl"` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:167](https://github.com/AmadeusITGroup/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/carousel/carousel.component.ts#L167)

Choose content direction between `ltr` and `rtl`

#### See

[https://www.embla-carousel.com/api/options/#direction](https://www.embla-carousel.com/api/options/#direction)

#### Default Value

`'ltr'`

***

### dragFree

> `readonly` **dragFree**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:175](https://github.com/AmadeusITGroup/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/carousel/carousel.component.ts#L175)

Enables momentum scrolling

#### See

[https://www.embla-carousel.com/api/options/#dragFree](https://www.embla-carousel.com/api/options/#dragFree)

#### Default Value

`false`

***

### dragThreshold

> `readonly` **dragThreshold**: `InputSignalWithTransform`\<`number` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:183](https://github.com/AmadeusITGroup/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/carousel/carousel.component.ts#L183)

Drag threshold in pixels

#### See

[https://www.embla-carousel.com/api/options/#dragThreshold](https://www.embla-carousel.com/api/options/#dragThreshold)

#### Default Value

`10`

***

### duration

> `readonly` **duration**: `InputSignalWithTransform`\<`number` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:191](https://github.com/AmadeusITGroup/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/carousel/carousel.component.ts#L191)

Set scroll duration when triggered by any of the API methods

#### See

[https://www.embla-carousel.com/api/options/#duration](https://www.embla-carousel.com/api/options/#duration)

#### Default Value

`25`

***

### loop

> `readonly` **loop**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:199](https://github.com/AmadeusITGroup/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/carousel/carousel.component.ts#L199)

Enables infinite looping

#### See

[https://www.embla-carousel.com/api/options/#loop](https://www.embla-carousel.com/api/options/#loop)

#### Default Value

`false`

***

### navigation

> `readonly` **navigation**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`CarouselContext`](../type-aliases/CarouselContext.md)\<`SlideData`\>\>\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:297](https://github.com/AmadeusITGroup/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/carousel/carousel.component.ts#L297)

The navigation layer of the carousel.

***

### plugins

> `readonly` **plugins**: `InputSignal`\<`CreatePluginType`\<`LoosePluginType`, \{ \}\>[] \| `undefined`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:227](https://github.com/AmadeusITGroup/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/carousel/carousel.component.ts#L227)

Plugins to extend the carousel with additional features

#### Default Value

`[]`

***

### showNavigationArrows

> `readonly` **showNavigationArrows**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:214](https://github.com/AmadeusITGroup/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/carousel/carousel.component.ts#L214)

If `true`, 'previous' and 'next' navigation arrows will be visible.

#### Default Value

`true`

***

### showNavigationIndicators

> `readonly` **showNavigationIndicators**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:221](https://github.com/AmadeusITGroup/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/carousel/carousel.component.ts#L221)

If `true`, navigation indicators at the bottom of the slide will be visible.

#### Default Value

`true`

***

### skipSnaps

> `readonly` **skipSnaps**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:207](https://github.com/AmadeusITGroup/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/carousel/carousel.component.ts#L207)

Allow the carousel to skip scroll snaps if it's dragged vigorously

#### See

[https://www.embla-carousel.com/api/options/#skipsnaps](https://www.embla-carousel.com/api/options/#skipsnaps)

#### Default Value

`false`

***

### slide

> `readonly` **slide**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`CarouselSlideContext`](../type-aliases/CarouselSlideContext.md)\<`SlideData`\>\>\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:302](https://github.com/AmadeusITGroup/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/carousel/carousel.component.ts#L302)

The content of each slide in the carousel.

***

### slideClass

> `readonly` **slideClass**: `InputSignal`\<`string` \| ((`slideContext`) => `string`) \| `undefined`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:273](https://github.com/AmadeusITGroup/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/carousel/carousel.component.ts#L273)

Class name to apply to each slide in the carousel.

#### Default Value

`''`

***

### slidesData

> `readonly` **slidesData**: `InputSignal`\<`SlideData`[] \| `undefined`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:287](https://github.com/AmadeusITGroup/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/carousel/carousel.component.ts#L287)

The data for each slide in the carousel.

#### Default Value

`[]`

***

### structure

> `readonly` **structure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`CarouselContext`](../type-aliases/CarouselContext.md)\<`SlideData`\>\>\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:292](https://github.com/AmadeusITGroup/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/bootstrap/src/components/carousel/carousel.component.ts#L292)

The structure of the carousel.

## Accessors

### api

#### Get Signature

> **get** **api**(): `W`\[`"api"`\]

Defined in: [angular/headless/src/utils/widget.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/headless/src/utils/widget.ts#L144)

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

Defined in: [angular/headless/src/utils/widget.ts:160](https://github.com/AmadeusITGroup/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/headless/src/utils/widget.ts#L160)

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

Defined in: [angular/headless/src/utils/widget.ts:152](https://github.com/AmadeusITGroup/AgnosUI/blob/63685e6607529b4571cb9fcf72f83fa7e63d14bc/angular/headless/src/utils/widget.ts#L152)

Retrieves the widget state. Each property of the state is exposed through an Angular [Signal](https://angular.dev/api/core/Signal)

##### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)
