Defined in: [core-bootstrap/src/components/carousel/carousel.ts:82](https://github.com/AmadeusITGroup/AgnosUI/blob/bf95b6b4bf40aa942d68cfad273c2dd607ca8a36/core-bootstrap/src/components/carousel/carousel.ts#L82)

Represents the state of a carousel component.

## Extends

- `CarouselState`.`CarouselExtraProps`\<`SlideData`\>

## Type Parameters

### SlideData

`SlideData` *extends* `object`

The type of data used by each slide in the carousel.

## Properties

### ariaLive

> **ariaLive**: `string`

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:74](https://github.com/AmadeusITGroup/AgnosUI/blob/bf95b6b4bf40aa942d68cfad273c2dd607ca8a36/core-bootstrap/src/components/carousel/carousel.ts#L74)

The aria-live attribute value for the carousel container.

#### Default Value

`'polite'`

#### Inherited from

`CarouselExtraProps.ariaLive`

***

### canScrollNext

> **canScrollNext**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/bf95b6b4bf40aa942d68cfad273c2dd607ca8a36/core/src/components/carousel/carousel.ts#L144)

can carousel scroll to next slide

#### Inherited from

`CoreState.canScrollNext`

***

### canScrollPrev

> **canScrollPrev**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/bf95b6b4bf40aa942d68cfad273c2dd607ca8a36/core/src/components/carousel/carousel.ts#L140)

can carousel scroll to previous slide

#### Inherited from

`CoreState.canScrollPrev`

***

### className

> **className**: `string`

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:38](https://github.com/AmadeusITGroup/AgnosUI/blob/bf95b6b4bf40aa942d68cfad273c2dd607ca8a36/core-bootstrap/src/components/carousel/carousel.ts#L38)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CarouselExtraProps.className`

***

### containerClass

> **containerClass**: `string`

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:44](https://github.com/AmadeusITGroup/AgnosUI/blob/bf95b6b4bf40aa942d68cfad273c2dd607ca8a36/core-bootstrap/src/components/carousel/carousel.ts#L44)

Class name to apply to the container of the carousel.

#### Default Value

`''`

#### Inherited from

`CarouselExtraProps.containerClass`

***

### direction

> **direction**: `"ltr"` \| `"rtl"`

Defined in: [core/src/components/carousel/carousel.ts:44](https://github.com/AmadeusITGroup/AgnosUI/blob/bf95b6b4bf40aa942d68cfad273c2dd607ca8a36/core/src/components/carousel/carousel.ts#L44)

Choose content direction between `ltr` and `rtl`

#### See

[https://www.embla-carousel.com/api/options/#direction](https://www.embla-carousel.com/api/options/#direction)

#### Default Value

`'ltr'`

#### Inherited from

[`CarouselProps`](CarouselProps.md).[`direction`](CarouselProps.md#direction)

***

### initialized

> **initialized**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:152](https://github.com/AmadeusITGroup/AgnosUI/blob/bf95b6b4bf40aa942d68cfad273c2dd607ca8a36/core/src/components/carousel/carousel.ts#L152)

is the carousel initialized

#### Inherited from

`CoreState.initialized`

***

### navigation

> **navigation**: `SlotContent`\<[`CarouselContext`](../type-aliases/CarouselContext.md)\<`SlideData`\>\>

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:64](https://github.com/AmadeusITGroup/AgnosUI/blob/bf95b6b4bf40aa942d68cfad273c2dd607ca8a36/core-bootstrap/src/components/carousel/carousel.ts#L64)

The navigation layer of the carousel.

#### Inherited from

`CarouselExtraProps.navigation`

***

### scrolling

> **scrolling**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:136](https://github.com/AmadeusITGroup/AgnosUI/blob/bf95b6b4bf40aa942d68cfad273c2dd607ca8a36/core/src/components/carousel/carousel.ts#L136)

is the carousel currently scrolling

#### Inherited from

`CoreState.scrolling`

***

### selectedScrollSnap

> **selectedScrollSnap**: `number`

Defined in: [core/src/components/carousel/carousel.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/bf95b6b4bf40aa942d68cfad273c2dd607ca8a36/core/src/components/carousel/carousel.ts#L148)

selected scroll snap

#### Inherited from

`CoreState.selectedScrollSnap`

***

### showNavigationArrows

> **showNavigationArrows**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:88](https://github.com/AmadeusITGroup/AgnosUI/blob/bf95b6b4bf40aa942d68cfad273c2dd607ca8a36/core/src/components/carousel/carousel.ts#L88)

If `true`, 'previous' and 'next' navigation arrows will be visible.

#### Default Value

`true`

#### Inherited from

`CoreState.showNavigationArrows`

***

### showNavigationIndicators

> **showNavigationIndicators**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:94](https://github.com/AmadeusITGroup/AgnosUI/blob/bf95b6b4bf40aa942d68cfad273c2dd607ca8a36/core/src/components/carousel/carousel.ts#L94)

If `true`, navigation indicators at the bottom of the slide will be visible.

#### Default Value

`true`

#### Inherited from

`CoreState.showNavigationIndicators`

***

### slide

> **slide**: `SlotContent`\<[`CarouselSlideContext`](../type-aliases/CarouselSlideContext.md)\<`SlideData`\>\>

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:68](https://github.com/AmadeusITGroup/AgnosUI/blob/bf95b6b4bf40aa942d68cfad273c2dd607ca8a36/core-bootstrap/src/components/carousel/carousel.ts#L68)

The content of each slide in the carousel.

#### Inherited from

`CarouselExtraProps.slide`

***

### slideClass

> **slideClass**: `string` \| (`slideContext`) => `string`

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:50](https://github.com/AmadeusITGroup/AgnosUI/blob/bf95b6b4bf40aa942d68cfad273c2dd607ca8a36/core-bootstrap/src/components/carousel/carousel.ts#L50)

Class name to apply to each slide in the carousel.

#### Default Value

`''`

#### Inherited from

`CarouselExtraProps.slideClass`

***

### slidesData

> **slidesData**: `SlideData`[]

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:56](https://github.com/AmadeusITGroup/AgnosUI/blob/bf95b6b4bf40aa942d68cfad273c2dd607ca8a36/core-bootstrap/src/components/carousel/carousel.ts#L56)

The data for each slide in the carousel.

#### Default Value

`[]`

#### Inherited from

`CarouselExtraProps.slidesData`

***

### structure

> **structure**: `SlotContent`\<[`CarouselContext`](../type-aliases/CarouselContext.md)\<`SlideData`\>\>

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:60](https://github.com/AmadeusITGroup/AgnosUI/blob/bf95b6b4bf40aa942d68cfad273c2dd607ca8a36/core-bootstrap/src/components/carousel/carousel.ts#L60)

The structure of the carousel.

#### Inherited from

`CarouselExtraProps.structure`
