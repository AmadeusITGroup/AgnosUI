Defined in: [core-bootstrap/src/components/carousel/carousel.ts:88](https://github.com/AmadeusITGroup/AgnosUI/blob/3ea0d072430e1c2833e4207dda60800f2e54d8a2/core-bootstrap/src/components/carousel/carousel.ts#L88)

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

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:80](https://github.com/AmadeusITGroup/AgnosUI/blob/3ea0d072430e1c2833e4207dda60800f2e54d8a2/core-bootstrap/src/components/carousel/carousel.ts#L80)

The aria-live attribute value for the carousel container.

#### Default Value

`'polite'`

#### Inherited from

`CarouselExtraProps.ariaLive`

***

### canScrollNext

> **canScrollNext**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:129](https://github.com/AmadeusITGroup/AgnosUI/blob/3ea0d072430e1c2833e4207dda60800f2e54d8a2/core/src/components/carousel/carousel.ts#L129)

can carousel scroll to next slide

#### Inherited from

`CoreState.canScrollNext`

***

### canScrollPrev

> **canScrollPrev**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:125](https://github.com/AmadeusITGroup/AgnosUI/blob/3ea0d072430e1c2833e4207dda60800f2e54d8a2/core/src/components/carousel/carousel.ts#L125)

can carousel scroll to previous slide

#### Inherited from

`CoreState.canScrollPrev`

***

### className

> **className**: `string`

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:38](https://github.com/AmadeusITGroup/AgnosUI/blob/3ea0d072430e1c2833e4207dda60800f2e54d8a2/core-bootstrap/src/components/carousel/carousel.ts#L38)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CarouselExtraProps.className`

***

### containerClass

> **containerClass**: `string`

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:44](https://github.com/AmadeusITGroup/AgnosUI/blob/3ea0d072430e1c2833e4207dda60800f2e54d8a2/core-bootstrap/src/components/carousel/carousel.ts#L44)

Class name to apply to the container of the carousel.

#### Default Value

`''`

#### Inherited from

`CarouselExtraProps.containerClass`

***

### direction

> **direction**: `"ltr"` \| `"rtl"`

Defined in: [core/src/components/carousel/carousel.ts:42](https://github.com/AmadeusITGroup/AgnosUI/blob/3ea0d072430e1c2833e4207dda60800f2e54d8a2/core/src/components/carousel/carousel.ts#L42)

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

Defined in: [core/src/components/carousel/carousel.ts:137](https://github.com/AmadeusITGroup/AgnosUI/blob/3ea0d072430e1c2833e4207dda60800f2e54d8a2/core/src/components/carousel/carousel.ts#L137)

is the carousel initialized

#### Inherited from

`CoreState.initialized`

***

### navigation

> **navigation**: `SlotContent`\<[`CarouselContext`](../type-aliases/CarouselContext.md)\<`SlideData`\>\>

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:68](https://github.com/AmadeusITGroup/AgnosUI/blob/3ea0d072430e1c2833e4207dda60800f2e54d8a2/core-bootstrap/src/components/carousel/carousel.ts#L68)

The navigation layer of the carousel.

#### Default Value

`undefined`

#### Inherited from

`CarouselExtraProps.navigation`

***

### scrolling

> **scrolling**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:121](https://github.com/AmadeusITGroup/AgnosUI/blob/3ea0d072430e1c2833e4207dda60800f2e54d8a2/core/src/components/carousel/carousel.ts#L121)

is the carousel currently scrolling

#### Inherited from

`CoreState.scrolling`

***

### selectedScrollSnap

> **selectedScrollSnap**: `number`

Defined in: [core/src/components/carousel/carousel.ts:133](https://github.com/AmadeusITGroup/AgnosUI/blob/3ea0d072430e1c2833e4207dda60800f2e54d8a2/core/src/components/carousel/carousel.ts#L133)

selected scroll snap

#### Inherited from

`CoreState.selectedScrollSnap`

***

### showNavigationArrows

> **showNavigationArrows**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:84](https://github.com/AmadeusITGroup/AgnosUI/blob/3ea0d072430e1c2833e4207dda60800f2e54d8a2/core/src/components/carousel/carousel.ts#L84)

If `true`, 'previous' and 'next' navigation arrows will be visible.

#### Inherited from

`CoreState.showNavigationArrows`

***

### showNavigationIndicators

> **showNavigationIndicators**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:88](https://github.com/AmadeusITGroup/AgnosUI/blob/3ea0d072430e1c2833e4207dda60800f2e54d8a2/core/src/components/carousel/carousel.ts#L88)

If `true`, navigation indicators at the bottom of the slide will be visible.

#### Inherited from

`CoreState.showNavigationIndicators`

***

### slide

> **slide**: `SlotContent`\<[`CarouselSlideContext`](../type-aliases/CarouselSlideContext.md)\<`SlideData`\>\>

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:74](https://github.com/AmadeusITGroup/AgnosUI/blob/3ea0d072430e1c2833e4207dda60800f2e54d8a2/core-bootstrap/src/components/carousel/carousel.ts#L74)

The content of each slide in the carousel.

#### Default Value

`undefined`

#### Inherited from

`CarouselExtraProps.slide`

***

### slideClass

> **slideClass**: `string` \| (`slideContext`) => `string`

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:50](https://github.com/AmadeusITGroup/AgnosUI/blob/3ea0d072430e1c2833e4207dda60800f2e54d8a2/core-bootstrap/src/components/carousel/carousel.ts#L50)

Class name to apply to each slide in the carousel.

#### Default Value

`''`

#### Inherited from

`CarouselExtraProps.slideClass`

***

### slidesData

> **slidesData**: `SlideData`[]

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:56](https://github.com/AmadeusITGroup/AgnosUI/blob/3ea0d072430e1c2833e4207dda60800f2e54d8a2/core-bootstrap/src/components/carousel/carousel.ts#L56)

The data for each slide in the carousel.

#### Default Value

`[]`

#### Inherited from

`CarouselExtraProps.slidesData`

***

### structure

> **structure**: `SlotContent`\<[`CarouselContext`](../type-aliases/CarouselContext.md)\<`SlideData`\>\>

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:62](https://github.com/AmadeusITGroup/AgnosUI/blob/3ea0d072430e1c2833e4207dda60800f2e54d8a2/core-bootstrap/src/components/carousel/carousel.ts#L62)

The structure of the carousel.

#### Default Value

`undefined`

#### Inherited from

`CarouselExtraProps.structure`
