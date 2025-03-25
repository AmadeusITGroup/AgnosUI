Defined in: [core-bootstrap/src/components/carousel/carousel.ts:50](https://github.com/AmadeusITGroup/AgnosUI/blob/f708c369ab0c2304d079563518578410df48f94d/core-bootstrap/src/components/carousel/carousel.ts#L50)

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

Defined in: [core/src/components/carousel/carousel.ts:127](https://github.com/AmadeusITGroup/AgnosUI/blob/f708c369ab0c2304d079563518578410df48f94d/core/src/components/carousel/carousel.ts#L127)

can carousel scroll to next slide

#### Inherited from

`CoreState.canScrollNext`

***

### canScrollPrev

> **canScrollPrev**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:123](https://github.com/AmadeusITGroup/AgnosUI/blob/f708c369ab0c2304d079563518578410df48f94d/core/src/components/carousel/carousel.ts#L123)

can carousel scroll to previous slide

#### Inherited from

`CoreState.canScrollPrev`

***

### direction

> **direction**: `"ltr"` \| `"rtl"`

Defined in: [core/src/components/carousel/carousel.ts:40](https://github.com/AmadeusITGroup/AgnosUI/blob/f708c369ab0c2304d079563518578410df48f94d/core/src/components/carousel/carousel.ts#L40)

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

Defined in: [core/src/components/carousel/carousel.ts:135](https://github.com/AmadeusITGroup/AgnosUI/blob/f708c369ab0c2304d079563518578410df48f94d/core/src/components/carousel/carousel.ts#L135)

is the carousel initialized

#### Inherited from

`CoreState.initialized`

***

### navigation

> **navigation**: `SlotContent`\<[`CarouselContext`](../type-aliases/CarouselContext.md)\<`SlideData`\>\>

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:38](https://github.com/AmadeusITGroup/AgnosUI/blob/f708c369ab0c2304d079563518578410df48f94d/core-bootstrap/src/components/carousel/carousel.ts#L38)

The navigation layer of the carousel.

#### Inherited from

`CarouselExtraProps.navigation`

***

### scrolling

> **scrolling**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:119](https://github.com/AmadeusITGroup/AgnosUI/blob/f708c369ab0c2304d079563518578410df48f94d/core/src/components/carousel/carousel.ts#L119)

is the carousel currently scrolling

#### Inherited from

`CoreState.scrolling`

***

### selectedScrollSnap

> **selectedScrollSnap**: `number`

Defined in: [core/src/components/carousel/carousel.ts:131](https://github.com/AmadeusITGroup/AgnosUI/blob/f708c369ab0c2304d079563518578410df48f94d/core/src/components/carousel/carousel.ts#L131)

selected scroll snap

#### Inherited from

`CoreState.selectedScrollSnap`

***

### showNavigationArrows

> **showNavigationArrows**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:82](https://github.com/AmadeusITGroup/AgnosUI/blob/f708c369ab0c2304d079563518578410df48f94d/core/src/components/carousel/carousel.ts#L82)

If `true`, 'previous' and 'next' navigation arrows will be visible.

#### Inherited from

`CoreState.showNavigationArrows`

***

### showNavigationIndicators

> **showNavigationIndicators**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:86](https://github.com/AmadeusITGroup/AgnosUI/blob/f708c369ab0c2304d079563518578410df48f94d/core/src/components/carousel/carousel.ts#L86)

If `true`, navigation indicators at the bottom of the slide will be visible.

#### Inherited from

`CoreState.showNavigationIndicators`

***

### slide

> **slide**: `SlotContent`\<[`CarouselSlideContext`](../type-aliases/CarouselSlideContext.md)\<`SlideData`\>\>

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:42](https://github.com/AmadeusITGroup/AgnosUI/blob/f708c369ab0c2304d079563518578410df48f94d/core-bootstrap/src/components/carousel/carousel.ts#L42)

The content of each slide in the carousel.

#### Inherited from

`CarouselExtraProps.slide`

***

### slidesData

> **slidesData**: `SlideData`[]

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:30](https://github.com/AmadeusITGroup/AgnosUI/blob/f708c369ab0c2304d079563518578410df48f94d/core-bootstrap/src/components/carousel/carousel.ts#L30)

The data for each slide in the carousel.

#### Inherited from

`CarouselExtraProps.slidesData`

***

### structure

> **structure**: `SlotContent`\<[`CarouselContext`](../type-aliases/CarouselContext.md)\<`SlideData`\>\>

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:34](https://github.com/AmadeusITGroup/AgnosUI/blob/f708c369ab0c2304d079563518578410df48f94d/core-bootstrap/src/components/carousel/carousel.ts#L34)

The structure of the carousel.

#### Inherited from

`CarouselExtraProps.structure`
