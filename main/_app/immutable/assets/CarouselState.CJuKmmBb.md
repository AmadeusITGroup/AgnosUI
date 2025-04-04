Defined in: [core-bootstrap/src/components/carousel/carousel.ts:87](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core-bootstrap/src/components/carousel/carousel.ts#L87)

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

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:79](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core-bootstrap/src/components/carousel/carousel.ts#L79)

The aria-live attribute value for the carousel container.

#### Default Value

`'polite'`

#### Inherited from

`CarouselExtraProps.ariaLive`

***

### canScrollNext

> **canScrollNext**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:128](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/carousel/carousel.ts#L128)

can carousel scroll to next slide

#### Inherited from

`CoreState.canScrollNext`

***

### canScrollPrev

> **canScrollPrev**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:124](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/carousel/carousel.ts#L124)

can carousel scroll to previous slide

#### Inherited from

`CoreState.canScrollPrev`

***

### className

> **className**: `string`

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:37](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core-bootstrap/src/components/carousel/carousel.ts#L37)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CarouselExtraProps.className`

***

### containerClass

> **containerClass**: `string`

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:43](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core-bootstrap/src/components/carousel/carousel.ts#L43)

Class name to apply to the container of the carousel.

#### Default Value

`''`

#### Inherited from

`CarouselExtraProps.containerClass`

***

### direction

> **direction**: `"ltr"` \| `"rtl"`

Defined in: [core/src/components/carousel/carousel.ts:41](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/carousel/carousel.ts#L41)

Choose content direction between `ltr` and `rtl`

#### See

[https://www.embla-carousel.com/api/options/#direction](https://www.embla-carousel.com/api/options/#direction)

#### Default Value

`'ltr'`

#### Inherited from

`CoreState.direction`

***

### initialized

> **initialized**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:136](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/carousel/carousel.ts#L136)

is the carousel initialized

#### Inherited from

`CoreState.initialized`

***

### navigation

> **navigation**: `SlotContent`\<[`CarouselContext`](../type-aliases/CarouselContext.md)\<`SlideData`\>\>

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:67](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core-bootstrap/src/components/carousel/carousel.ts#L67)

The navigation layer of the carousel.

#### Default Value

`undefined`

#### Inherited from

`CarouselExtraProps.navigation`

***

### scrolling

> **scrolling**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:120](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/carousel/carousel.ts#L120)

is the carousel currently scrolling

#### Inherited from

`CoreState.scrolling`

***

### selectedScrollSnap

> **selectedScrollSnap**: `number`

Defined in: [core/src/components/carousel/carousel.ts:132](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/carousel/carousel.ts#L132)

selected scroll snap

#### Inherited from

`CoreState.selectedScrollSnap`

***

### showNavigationArrows

> **showNavigationArrows**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:83](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/carousel/carousel.ts#L83)

If `true`, 'previous' and 'next' navigation arrows will be visible.

#### Inherited from

`CoreState.showNavigationArrows`

***

### showNavigationIndicators

> **showNavigationIndicators**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:87](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/carousel/carousel.ts#L87)

If `true`, navigation indicators at the bottom of the slide will be visible.

#### Inherited from

`CoreState.showNavigationIndicators`

***

### slide

> **slide**: `SlotContent`\<[`CarouselSlideContext`](../type-aliases/CarouselSlideContext.md)\<`SlideData`\>\>

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:73](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core-bootstrap/src/components/carousel/carousel.ts#L73)

The content of each slide in the carousel.

#### Default Value

`undefined`

#### Inherited from

`CarouselExtraProps.slide`

***

### slideClass

> **slideClass**: `string` \| (`slideContext`) => `string`

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:49](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core-bootstrap/src/components/carousel/carousel.ts#L49)

Class name to apply to each slide in the carousel.

#### Default Value

`''`

#### Inherited from

`CarouselExtraProps.slideClass`

***

### slidesData

> **slidesData**: `SlideData`[]

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:55](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core-bootstrap/src/components/carousel/carousel.ts#L55)

The data for each slide in the carousel.

#### Default Value

`[]`

#### Inherited from

`CarouselExtraProps.slidesData`

***

### structure

> **structure**: `SlotContent`\<[`CarouselContext`](../type-aliases/CarouselContext.md)\<`SlideData`\>\>

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:61](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core-bootstrap/src/components/carousel/carousel.ts#L61)

The structure of the carousel.

#### Default Value

`undefined`

#### Inherited from

`CarouselExtraProps.structure`
