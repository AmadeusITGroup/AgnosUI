Defined in: [core-bootstrap/src/components/carousel/carousel.ts:50](https://github.com/AmadeusITGroup/AgnosUI/blob/c7ce40f3d07d5793b9dde4ea674bb3729d98c873/core-bootstrap/src/components/carousel/carousel.ts#L50)

Represents the state of a carousel component.

## Extends

- `CarouselState`.`CarouselExtraProps`\<`SlideData`\>

## Type Parameters

### SlideData

`SlideData` *extends* `object`

The type of data used by each slide in the carousel.

## Properties

### canScrollNext

> **canScrollNext**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:128](https://github.com/AmadeusITGroup/AgnosUI/blob/c7ce40f3d07d5793b9dde4ea674bb3729d98c873/core/src/components/carousel/carousel.ts#L128)

can carousel scroll to next slide

#### Inherited from

`CoreState.canScrollNext`

***

### canScrollPrev

> **canScrollPrev**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:124](https://github.com/AmadeusITGroup/AgnosUI/blob/c7ce40f3d07d5793b9dde4ea674bb3729d98c873/core/src/components/carousel/carousel.ts#L124)

can carousel scroll to previous slide

#### Inherited from

`CoreState.canScrollPrev`

***

### direction

> **direction**: `"ltr"` \| `"rtl"`

Defined in: [core/src/components/carousel/carousel.ts:41](https://github.com/AmadeusITGroup/AgnosUI/blob/c7ce40f3d07d5793b9dde4ea674bb3729d98c873/core/src/components/carousel/carousel.ts#L41)

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

Defined in: [core/src/components/carousel/carousel.ts:136](https://github.com/AmadeusITGroup/AgnosUI/blob/c7ce40f3d07d5793b9dde4ea674bb3729d98c873/core/src/components/carousel/carousel.ts#L136)

is the carousel initialized

#### Inherited from

`CoreState.initialized`

***

### navigation

> **navigation**: `SlotContent`\<[`CarouselContext`](../type-aliases/CarouselContext.md)\<`SlideData`\>\>

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:38](https://github.com/AmadeusITGroup/AgnosUI/blob/c7ce40f3d07d5793b9dde4ea674bb3729d98c873/core-bootstrap/src/components/carousel/carousel.ts#L38)

The navigation layer of the carousel.

#### Inherited from

`CarouselExtraProps.navigation`

***

### scrolling

> **scrolling**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:120](https://github.com/AmadeusITGroup/AgnosUI/blob/c7ce40f3d07d5793b9dde4ea674bb3729d98c873/core/src/components/carousel/carousel.ts#L120)

is the carousel currently scrolling

#### Inherited from

`CoreState.scrolling`

***

### selectedScrollSnap

> **selectedScrollSnap**: `number`

Defined in: [core/src/components/carousel/carousel.ts:132](https://github.com/AmadeusITGroup/AgnosUI/blob/c7ce40f3d07d5793b9dde4ea674bb3729d98c873/core/src/components/carousel/carousel.ts#L132)

selected scroll snap

#### Inherited from

`CoreState.selectedScrollSnap`

***

### showNavigationArrows

> **showNavigationArrows**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:83](https://github.com/AmadeusITGroup/AgnosUI/blob/c7ce40f3d07d5793b9dde4ea674bb3729d98c873/core/src/components/carousel/carousel.ts#L83)

If `true`, 'previous' and 'next' navigation arrows will be visible.

#### Inherited from

`CoreState.showNavigationArrows`

***

### showNavigationIndicators

> **showNavigationIndicators**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:87](https://github.com/AmadeusITGroup/AgnosUI/blob/c7ce40f3d07d5793b9dde4ea674bb3729d98c873/core/src/components/carousel/carousel.ts#L87)

If `true`, navigation indicators at the bottom of the slide will be visible.

#### Inherited from

`CoreState.showNavigationIndicators`

***

### slide

> **slide**: `SlotContent`\<[`CarouselSlideContext`](../type-aliases/CarouselSlideContext.md)\<`SlideData`\>\>

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:42](https://github.com/AmadeusITGroup/AgnosUI/blob/c7ce40f3d07d5793b9dde4ea674bb3729d98c873/core-bootstrap/src/components/carousel/carousel.ts#L42)

The content of each slide in the carousel.

#### Inherited from

`CarouselExtraProps.slide`

***

### slidesData

> **slidesData**: `SlideData`[]

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:30](https://github.com/AmadeusITGroup/AgnosUI/blob/c7ce40f3d07d5793b9dde4ea674bb3729d98c873/core-bootstrap/src/components/carousel/carousel.ts#L30)

The data for each slide in the carousel.

#### Inherited from

`CarouselExtraProps.slidesData`

***

### structure

> **structure**: `SlotContent`\<[`CarouselContext`](../type-aliases/CarouselContext.md)\<`SlideData`\>\>

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:34](https://github.com/AmadeusITGroup/AgnosUI/blob/c7ce40f3d07d5793b9dde4ea674bb3729d98c873/core-bootstrap/src/components/carousel/carousel.ts#L34)

The structure of the carousel.

#### Inherited from

`CarouselExtraProps.structure`
