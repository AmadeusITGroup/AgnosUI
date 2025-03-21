Defined in: [core-bootstrap/src/components/carousel/carousel.ts:35](https://github.com/AmadeusITGroup/AgnosUI/blob/8394a8b3d9865fe2e87a4c0ba2a0133eb42ad979/core-bootstrap/src/components/carousel/carousel.ts#L35)

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

Defined in: [core/src/components/carousel/carousel.ts:127](https://github.com/AmadeusITGroup/AgnosUI/blob/8394a8b3d9865fe2e87a4c0ba2a0133eb42ad979/core/src/components/carousel/carousel.ts#L127)

can carousel scroll to next slide

#### Inherited from

`CoreState.canScrollNext`

***

### canScrollPrev

> **canScrollPrev**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:123](https://github.com/AmadeusITGroup/AgnosUI/blob/8394a8b3d9865fe2e87a4c0ba2a0133eb42ad979/core/src/components/carousel/carousel.ts#L123)

can carousel scroll to previous slide

#### Inherited from

`CoreState.canScrollPrev`

***

### direction

> **direction**: `"ltr"` \| `"rtl"`

Defined in: [core/src/components/carousel/carousel.ts:40](https://github.com/AmadeusITGroup/AgnosUI/blob/8394a8b3d9865fe2e87a4c0ba2a0133eb42ad979/core/src/components/carousel/carousel.ts#L40)

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

Defined in: [core/src/components/carousel/carousel.ts:135](https://github.com/AmadeusITGroup/AgnosUI/blob/8394a8b3d9865fe2e87a4c0ba2a0133eb42ad979/core/src/components/carousel/carousel.ts#L135)

is the carousel initialized

#### Inherited from

`CoreState.initialized`

***

### scrolling

> **scrolling**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:119](https://github.com/AmadeusITGroup/AgnosUI/blob/8394a8b3d9865fe2e87a4c0ba2a0133eb42ad979/core/src/components/carousel/carousel.ts#L119)

is the carousel currently scrolling

#### Inherited from

`CoreState.scrolling`

***

### selectedScrollSnap

> **selectedScrollSnap**: `number`

Defined in: [core/src/components/carousel/carousel.ts:131](https://github.com/AmadeusITGroup/AgnosUI/blob/8394a8b3d9865fe2e87a4c0ba2a0133eb42ad979/core/src/components/carousel/carousel.ts#L131)

selected scroll snap

#### Inherited from

`CoreState.selectedScrollSnap`

***

### showNavigationArrows

> **showNavigationArrows**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:82](https://github.com/AmadeusITGroup/AgnosUI/blob/8394a8b3d9865fe2e87a4c0ba2a0133eb42ad979/core/src/components/carousel/carousel.ts#L82)

If `true`, 'previous' and 'next' navigation arrows will be visible.

#### Inherited from

`CoreState.showNavigationArrows`

***

### showNavigationIndicators

> **showNavigationIndicators**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:86](https://github.com/AmadeusITGroup/AgnosUI/blob/8394a8b3d9865fe2e87a4c0ba2a0133eb42ad979/core/src/components/carousel/carousel.ts#L86)

If `true`, navigation indicators at the bottom of the slide will be visible.

#### Inherited from

`CoreState.showNavigationIndicators`

***

### slide

> **slide**: `SlotContent`\<`SlideData`\>

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:27](https://github.com/AmadeusITGroup/AgnosUI/blob/8394a8b3d9865fe2e87a4c0ba2a0133eb42ad979/core-bootstrap/src/components/carousel/carousel.ts#L27)

The content of each slide in the carousel.

#### Inherited from

`CarouselExtraProps.slide`

***

### slidesData

> **slidesData**: `SlideData`[]

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:23](https://github.com/AmadeusITGroup/AgnosUI/blob/8394a8b3d9865fe2e87a4c0ba2a0133eb42ad979/core-bootstrap/src/components/carousel/carousel.ts#L23)

The data for each slide in the carousel.

#### Inherited from

`CarouselExtraProps.slidesData`
