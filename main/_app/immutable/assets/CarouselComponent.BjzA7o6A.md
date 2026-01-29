Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:138](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/carousel/carousel.component.ts#L138)

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

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:237](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/carousel/carousel.component.ts#L237)

Align the slides relative to the carousel viewport

#### See

[https://www.embla-carousel.com/api/options/#align](https://www.embla-carousel.com/api/options/#align)

#### Default Value

`'center'`

***

### ariaIndicatorLabel

> `readonly` **ariaIndicatorLabel**: `InputSignal`\<(`index`) => `string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:147](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/carousel/carousel.component.ts#L147)

Aria label for navigation indicators

#### Default Value

```ts
(index: number) => `Select slide ${index + 1}`
```

***

### ariaLive

> `readonly` **ariaLive**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:282](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/carousel/carousel.component.ts#L282)

The aria-live attribute value for the carousel container.

#### Default Value

`'polite'`

***

### ariaNextLabel

> `readonly` **ariaNextLabel**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:161](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/carousel/carousel.component.ts#L161)

Aria label for next button

#### Default Value

`'Select next slide'`

***

### ariaPrevLabel

> `readonly` **ariaPrevLabel**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:154](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/carousel/carousel.component.ts#L154)

Aria label for previous button

#### Default Value

`'Select previous slide'`

***

### className

> `readonly` **className**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:261](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/carousel/carousel.component.ts#L261)

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### container

> `readonly` **container**: `InputSignal`\<`string` \| `null` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:246](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/carousel/carousel.component.ts#L246)

Enables choosing a custom container element which holds the slides. By default, Embla will choose the first direct child element of the root element. Provide a valid CSS selector string.

#### See

[https://www.embla-carousel.com/api/options/#container](https://www.embla-carousel.com/api/options/#container)

#### Default Value

`null`

***

### containerClass

> `readonly` **containerClass**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:268](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/carousel/carousel.component.ts#L268)

Class name to apply to the container of the carousel.

#### Default Value

`''`

***

### containScroll

> `readonly` **containScroll**: `InputSignal`\<`false` \| `"trimSnaps"` \| `"keepSnaps"` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:254](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/carousel/carousel.component.ts#L254)

Clear leading and trailing empty space that causes excessive scrolling

#### See

[https://www.embla-carousel.com/api/options/#containScroll](https://www.embla-carousel.com/api/options/#containScroll)

#### Default Value

`'trimSnaps'`

***

### direction

> `readonly` **direction**: `InputSignal`\<`"ltr"` \| `"rtl"` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:169](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/carousel/carousel.component.ts#L169)

Choose content direction between `ltr` and `rtl`

#### See

[https://www.embla-carousel.com/api/options/#direction](https://www.embla-carousel.com/api/options/#direction)

#### Default Value

`'ltr'`

***

### dragFree

> `readonly` **dragFree**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:177](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/carousel/carousel.component.ts#L177)

Enables momentum scrolling

#### See

[https://www.embla-carousel.com/api/options/#dragFree](https://www.embla-carousel.com/api/options/#dragFree)

#### Default Value

`false`

***

### dragThreshold

> `readonly` **dragThreshold**: `InputSignalWithTransform`\<`number` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:185](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/carousel/carousel.component.ts#L185)

Drag threshold in pixels

#### See

[https://www.embla-carousel.com/api/options/#dragThreshold](https://www.embla-carousel.com/api/options/#dragThreshold)

#### Default Value

`10`

***

### duration

> `readonly` **duration**: `InputSignalWithTransform`\<`number` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:193](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/carousel/carousel.component.ts#L193)

Set scroll duration when triggered by any of the API methods

#### See

[https://www.embla-carousel.com/api/options/#duration](https://www.embla-carousel.com/api/options/#duration)

#### Default Value

`25`

***

### loop

> `readonly` **loop**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:201](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/carousel/carousel.component.ts#L201)

Enables infinite looping

#### See

[https://www.embla-carousel.com/api/options/#loop](https://www.embla-carousel.com/api/options/#loop)

#### Default Value

`false`

***

### navigation

> `readonly` **navigation**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`CarouselContext`](../type-aliases/CarouselContext.md)\<`SlideData`\>\>\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:299](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/carousel/carousel.component.ts#L299)

The navigation layer of the carousel.

***

### plugins

> `readonly` **plugins**: `InputSignal`\<`CreatePluginType`\<`LoosePluginType`, \{ \}\>[] \| `undefined`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:229](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/carousel/carousel.component.ts#L229)

Plugins to extend the carousel with additional features

#### Default Value

`[]`

***

### showNavigationArrows

> `readonly` **showNavigationArrows**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:216](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/carousel/carousel.component.ts#L216)

If `true`, 'previous' and 'next' navigation arrows will be visible.

#### Default Value

`true`

***

### showNavigationIndicators

> `readonly` **showNavigationIndicators**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:223](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/carousel/carousel.component.ts#L223)

If `true`, navigation indicators at the bottom of the slide will be visible.

#### Default Value

`true`

***

### skipSnaps

> `readonly` **skipSnaps**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:209](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/carousel/carousel.component.ts#L209)

Allow the carousel to skip scroll snaps if it's dragged vigorously

#### See

[https://www.embla-carousel.com/api/options/#skipsnaps](https://www.embla-carousel.com/api/options/#skipsnaps)

#### Default Value

`false`

***

### slide

> `readonly` **slide**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`CarouselSlideContext`](../type-aliases/CarouselSlideContext.md)\<`SlideData`\>\>\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:304](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/carousel/carousel.component.ts#L304)

The content of each slide in the carousel.

***

### slideClass

> `readonly` **slideClass**: `InputSignal`\<`string` \| (`slideContext`) => `string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:275](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/carousel/carousel.component.ts#L275)

Class name to apply to each slide in the carousel.

#### Default Value

`''`

***

### slidesData

> `readonly` **slidesData**: `InputSignal`\<`SlideData`[] \| `undefined`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:289](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/carousel/carousel.component.ts#L289)

The data for each slide in the carousel.

#### Default Value

`[]`

***

### structure

> `readonly` **structure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`CarouselContext`](../type-aliases/CarouselContext.md)\<`SlideData`\>\>\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:294](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/bootstrap/src/components/carousel/carousel.component.ts#L294)

The structure of the carousel.

## Accessors

### api

#### Get Signature

> **get** **api**(): `W`\[`"api"`\]

Defined in: [angular/headless/src/utils/widget.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/headless/src/utils/widget.ts#L144)

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

Defined in: [angular/headless/src/utils/widget.ts:160](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/headless/src/utils/widget.ts#L160)

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

Defined in: [angular/headless/src/utils/widget.ts:152](https://github.com/AmadeusITGroup/AgnosUI/blob/35ded352c0fe76b45b5c33b88e8486833be21cdb/angular/headless/src/utils/widget.ts#L152)

Retrieves the widget state. Each property of the state is exposed through an Angular [Signal](https://angular.dev/api/core/Signal)

##### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)
