Defined in: [core-bootstrap/src/components/carousel/carousel.ts:94](https://github.com/AmadeusITGroup/AgnosUI/blob/924f190016a83694ac09d3f3daa116d35b595035/core-bootstrap/src/components/carousel/carousel.ts#L94)

Interface representing the properties for a carousel component.

## Extends

- `CarouselProps`.`CarouselExtraProps`\<`SlideData`\>

## Type Parameters

### SlideData

`SlideData` *extends* `object`

The type of data used by each slide in the carousel.

## Properties

### align

> **align**: `"start"` \| `"center"` \| `"end"`

Defined in: [core/src/components/carousel/carousel.ts:21](https://github.com/AmadeusITGroup/AgnosUI/blob/924f190016a83694ac09d3f3daa116d35b595035/core/src/components/carousel/carousel.ts#L21)

Align the slides relative to the carousel viewport

#### See

[https://www.embla-carousel.com/api/options/#align](https://www.embla-carousel.com/api/options/#align)

#### Default Value

`'center'`

#### Inherited from

`CoreProps.align`

***

### ariaIndicatorLabel()

> **ariaIndicatorLabel**: (`index`) => `string`

Defined in: [core/src/components/carousel/carousel.ts:102](https://github.com/AmadeusITGroup/AgnosUI/blob/924f190016a83694ac09d3f3daa116d35b595035/core/src/components/carousel/carousel.ts#L102)

Aria label for navigation indicators

#### Parameters

##### index

`number`

#### Returns

`string`

#### Inherited from

`CoreProps.ariaIndicatorLabel`

***

### ariaLive

> **ariaLive**: `string`

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:79](https://github.com/AmadeusITGroup/AgnosUI/blob/924f190016a83694ac09d3f3daa116d35b595035/core-bootstrap/src/components/carousel/carousel.ts#L79)

The aria-live attribute value for the carousel container.

#### Default Value

`'polite'`

#### Inherited from

`CarouselExtraProps.ariaLive`

***

### ariaNextLabel

> **ariaNextLabel**: `string`

Defined in: [core/src/components/carousel/carousel.ts:110](https://github.com/AmadeusITGroup/AgnosUI/blob/924f190016a83694ac09d3f3daa116d35b595035/core/src/components/carousel/carousel.ts#L110)

Aria label for next button

#### Inherited from

`CoreProps.ariaNextLabel`

***

### ariaPrevLabel

> **ariaPrevLabel**: `string`

Defined in: [core/src/components/carousel/carousel.ts:106](https://github.com/AmadeusITGroup/AgnosUI/blob/924f190016a83694ac09d3f3daa116d35b595035/core/src/components/carousel/carousel.ts#L106)

Aria label for previous button

#### Inherited from

`CoreProps.ariaPrevLabel`

***

### className

> **className**: `string`

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:37](https://github.com/AmadeusITGroup/AgnosUI/blob/924f190016a83694ac09d3f3daa116d35b595035/core-bootstrap/src/components/carousel/carousel.ts#L37)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CarouselExtraProps.className`

***

### container

> **container**: `null` \| `string`

Defined in: [core/src/components/carousel/carousel.ts:27](https://github.com/AmadeusITGroup/AgnosUI/blob/924f190016a83694ac09d3f3daa116d35b595035/core/src/components/carousel/carousel.ts#L27)

Enables choosing a custom container element which holds the slides. By default, Embla will choose the first direct child element of the root element. Provide a valid CSS selector string.

#### See

[https://www.embla-carousel.com/api/options/#container](https://www.embla-carousel.com/api/options/#container)

#### Inherited from

`CoreProps.container`

***

### containerClass

> **containerClass**: `string`

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:43](https://github.com/AmadeusITGroup/AgnosUI/blob/924f190016a83694ac09d3f3daa116d35b595035/core-bootstrap/src/components/carousel/carousel.ts#L43)

Class name to apply to the container of the carousel.

#### Default Value

`''`

#### Inherited from

`CarouselExtraProps.containerClass`

***

### containScroll

> **containScroll**: `false` \| `"trimSnaps"` \| `"keepSnaps"`

Defined in: [core/src/components/carousel/carousel.ts:34](https://github.com/AmadeusITGroup/AgnosUI/blob/924f190016a83694ac09d3f3daa116d35b595035/core/src/components/carousel/carousel.ts#L34)

Clear leading and trailing empty space that causes excessive scrolling

#### See

[https://www.embla-carousel.com/api/options/#containScroll](https://www.embla-carousel.com/api/options/#containScroll)

#### Default Value

`'trimSnaps'`

#### Inherited from

`CoreProps.containScroll`

***

### direction

> **direction**: `"ltr"` \| `"rtl"`

Defined in: [core/src/components/carousel/carousel.ts:41](https://github.com/AmadeusITGroup/AgnosUI/blob/924f190016a83694ac09d3f3daa116d35b595035/core/src/components/carousel/carousel.ts#L41)

Choose content direction between `ltr` and `rtl`

#### See

[https://www.embla-carousel.com/api/options/#direction](https://www.embla-carousel.com/api/options/#direction)

#### Default Value

`'ltr'`

#### Inherited from

`CoreProps.direction`

***

### dragFree

> **dragFree**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:48](https://github.com/AmadeusITGroup/AgnosUI/blob/924f190016a83694ac09d3f3daa116d35b595035/core/src/components/carousel/carousel.ts#L48)

Enables momentum scrolling

#### See

[https://www.embla-carousel.com/api/options/#dragFree](https://www.embla-carousel.com/api/options/#dragFree)

#### Default Value

`false`

#### Inherited from

`CoreProps.dragFree`

***

### dragThreshold

> **dragThreshold**: `number`

Defined in: [core/src/components/carousel/carousel.ts:55](https://github.com/AmadeusITGroup/AgnosUI/blob/924f190016a83694ac09d3f3daa116d35b595035/core/src/components/carousel/carousel.ts#L55)

Drag threshold in pixels

#### See

[https://www.embla-carousel.com/api/options/#dragThreshold](https://www.embla-carousel.com/api/options/#dragThreshold)

#### Default Value

`10`

#### Inherited from

`CoreProps.dragThreshold`

***

### duration

> **duration**: `number`

Defined in: [core/src/components/carousel/carousel.ts:62](https://github.com/AmadeusITGroup/AgnosUI/blob/924f190016a83694ac09d3f3daa116d35b595035/core/src/components/carousel/carousel.ts#L62)

Set scroll duration when triggered by any of the API methods

#### See

[https://www.embla-carousel.com/api/options/#duration](https://www.embla-carousel.com/api/options/#duration)

#### Default Value

`25`

#### Inherited from

`CoreProps.duration`

***

### loop

> **loop**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:69](https://github.com/AmadeusITGroup/AgnosUI/blob/924f190016a83694ac09d3f3daa116d35b595035/core/src/components/carousel/carousel.ts#L69)

Enables infinite looping

#### See

[https://www.embla-carousel.com/api/options/#loop](https://www.embla-carousel.com/api/options/#loop)

#### Default Value

`false`

#### Inherited from

`CoreProps.loop`

***

### navigation

> **navigation**: `SlotContent`\<[`CarouselContext`](../type-aliases/CarouselContext.md)\<`SlideData`\>\>

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:67](https://github.com/AmadeusITGroup/AgnosUI/blob/924f190016a83694ac09d3f3daa116d35b595035/core-bootstrap/src/components/carousel/carousel.ts#L67)

The navigation layer of the carousel.

#### Default Value

`undefined`

#### Inherited from

`CarouselExtraProps.navigation`

***

### plugins

> **plugins**: `CreatePluginType`\<`LoosePluginType`, \{\}\>[]

Defined in: [core/src/components/carousel/carousel.ts:98](https://github.com/AmadeusITGroup/AgnosUI/blob/924f190016a83694ac09d3f3daa116d35b595035/core/src/components/carousel/carousel.ts#L98)

Plugins to extend the carousel with additional features

#### Default Value

`[]`

#### Inherited from

`CoreProps.plugins`

***

### showNavigationArrows

> **showNavigationArrows**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:83](https://github.com/AmadeusITGroup/AgnosUI/blob/924f190016a83694ac09d3f3daa116d35b595035/core/src/components/carousel/carousel.ts#L83)

If `true`, 'previous' and 'next' navigation arrows will be visible.

#### Inherited from

`CoreProps.showNavigationArrows`

***

### showNavigationIndicators

> **showNavigationIndicators**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:87](https://github.com/AmadeusITGroup/AgnosUI/blob/924f190016a83694ac09d3f3daa116d35b595035/core/src/components/carousel/carousel.ts#L87)

If `true`, navigation indicators at the bottom of the slide will be visible.

#### Inherited from

`CoreProps.showNavigationIndicators`

***

### skipSnaps

> **skipSnaps**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:76](https://github.com/AmadeusITGroup/AgnosUI/blob/924f190016a83694ac09d3f3daa116d35b595035/core/src/components/carousel/carousel.ts#L76)

Allow the carousel to skip scroll snaps if it's dragged vigorously

#### See

[https://www.embla-carousel.com/api/options/#skipsnaps](https://www.embla-carousel.com/api/options/#skipsnaps)

#### Default Value

`false`

#### Inherited from

`CoreProps.skipSnaps`

***

### slide

> **slide**: `SlotContent`\<[`CarouselSlideContext`](../type-aliases/CarouselSlideContext.md)\<`SlideData`\>\>

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:73](https://github.com/AmadeusITGroup/AgnosUI/blob/924f190016a83694ac09d3f3daa116d35b595035/core-bootstrap/src/components/carousel/carousel.ts#L73)

The content of each slide in the carousel.

#### Default Value

`undefined`

#### Inherited from

`CarouselExtraProps.slide`

***

### slideClass

> **slideClass**: `string` \| (`slideContext`) => `string`

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:49](https://github.com/AmadeusITGroup/AgnosUI/blob/924f190016a83694ac09d3f3daa116d35b595035/core-bootstrap/src/components/carousel/carousel.ts#L49)

Class name to apply to each slide in the carousel.

#### Default Value

`''`

#### Inherited from

`CarouselExtraProps.slideClass`

***

### slidesData

> **slidesData**: `SlideData`[]

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:55](https://github.com/AmadeusITGroup/AgnosUI/blob/924f190016a83694ac09d3f3daa116d35b595035/core-bootstrap/src/components/carousel/carousel.ts#L55)

The data for each slide in the carousel.

#### Default Value

`[]`

#### Inherited from

`CarouselExtraProps.slidesData`

***

### structure

> **structure**: `SlotContent`\<[`CarouselContext`](../type-aliases/CarouselContext.md)\<`SlideData`\>\>

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:61](https://github.com/AmadeusITGroup/AgnosUI/blob/924f190016a83694ac09d3f3daa116d35b595035/core-bootstrap/src/components/carousel/carousel.ts#L61)

The structure of the carousel.

#### Default Value

`undefined`

#### Inherited from

`CarouselExtraProps.structure`
