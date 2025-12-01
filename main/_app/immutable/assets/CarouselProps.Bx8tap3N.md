Defined in: [core-bootstrap/src/components/carousel/carousel.ts:89](https://github.com/AmadeusITGroup/AgnosUI/blob/2d0744590f7d3c0257002f8f35e88a9f0661f171/core-bootstrap/src/components/carousel/carousel.ts#L89)

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

Defined in: [core/src/components/carousel/carousel.ts:22](https://github.com/AmadeusITGroup/AgnosUI/blob/2d0744590f7d3c0257002f8f35e88a9f0661f171/core/src/components/carousel/carousel.ts#L22)

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

Defined in: [core/src/components/carousel/carousel.ts:114](https://github.com/AmadeusITGroup/AgnosUI/blob/2d0744590f7d3c0257002f8f35e88a9f0661f171/core/src/components/carousel/carousel.ts#L114)

Aria label for navigation indicators

#### Parameters

##### index

`number`

#### Returns

`string`

#### Default Value

```ts
(index: number) => `Select slide ${index + 1}`
```

#### Inherited from

`CoreProps.ariaIndicatorLabel`

***

### ariaLive

> **ariaLive**: `string`

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:74](https://github.com/AmadeusITGroup/AgnosUI/blob/2d0744590f7d3c0257002f8f35e88a9f0661f171/core-bootstrap/src/components/carousel/carousel.ts#L74)

The aria-live attribute value for the carousel container.

#### Default Value

`'polite'`

#### Inherited from

`CarouselExtraProps.ariaLive`

***

### ariaNextLabel

> **ariaNextLabel**: `string`

Defined in: [core/src/components/carousel/carousel.ts:126](https://github.com/AmadeusITGroup/AgnosUI/blob/2d0744590f7d3c0257002f8f35e88a9f0661f171/core/src/components/carousel/carousel.ts#L126)

Aria label for next button

#### Default Value

`'Select next slide'`

#### Inherited from

`CoreProps.ariaNextLabel`

***

### ariaPrevLabel

> **ariaPrevLabel**: `string`

Defined in: [core/src/components/carousel/carousel.ts:120](https://github.com/AmadeusITGroup/AgnosUI/blob/2d0744590f7d3c0257002f8f35e88a9f0661f171/core/src/components/carousel/carousel.ts#L120)

Aria label for previous button

#### Default Value

`'Select previous slide'`

#### Inherited from

`CoreProps.ariaPrevLabel`

***

### className

> **className**: `string`

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:38](https://github.com/AmadeusITGroup/AgnosUI/blob/2d0744590f7d3c0257002f8f35e88a9f0661f171/core-bootstrap/src/components/carousel/carousel.ts#L38)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CarouselExtraProps.className`

***

### container

> **container**: `string` \| `null`

Defined in: [core/src/components/carousel/carousel.ts:30](https://github.com/AmadeusITGroup/AgnosUI/blob/2d0744590f7d3c0257002f8f35e88a9f0661f171/core/src/components/carousel/carousel.ts#L30)

Enables choosing a custom container element which holds the slides. By default, Embla will choose the first direct child element of the root element. Provide a valid CSS selector string.

#### See

[https://www.embla-carousel.com/api/options/#container](https://www.embla-carousel.com/api/options/#container)

#### Default Value

`null`

#### Inherited from

`CoreProps.container`

***

### containerClass

> **containerClass**: `string`

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:44](https://github.com/AmadeusITGroup/AgnosUI/blob/2d0744590f7d3c0257002f8f35e88a9f0661f171/core-bootstrap/src/components/carousel/carousel.ts#L44)

Class name to apply to the container of the carousel.

#### Default Value

`''`

#### Inherited from

`CarouselExtraProps.containerClass`

***

### containScroll

> **containScroll**: `false` \| `"trimSnaps"` \| `"keepSnaps"`

Defined in: [core/src/components/carousel/carousel.ts:37](https://github.com/AmadeusITGroup/AgnosUI/blob/2d0744590f7d3c0257002f8f35e88a9f0661f171/core/src/components/carousel/carousel.ts#L37)

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

Defined in: [core/src/components/carousel/carousel.ts:44](https://github.com/AmadeusITGroup/AgnosUI/blob/2d0744590f7d3c0257002f8f35e88a9f0661f171/core/src/components/carousel/carousel.ts#L44)

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

Defined in: [core/src/components/carousel/carousel.ts:51](https://github.com/AmadeusITGroup/AgnosUI/blob/2d0744590f7d3c0257002f8f35e88a9f0661f171/core/src/components/carousel/carousel.ts#L51)

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

Defined in: [core/src/components/carousel/carousel.ts:58](https://github.com/AmadeusITGroup/AgnosUI/blob/2d0744590f7d3c0257002f8f35e88a9f0661f171/core/src/components/carousel/carousel.ts#L58)

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

Defined in: [core/src/components/carousel/carousel.ts:65](https://github.com/AmadeusITGroup/AgnosUI/blob/2d0744590f7d3c0257002f8f35e88a9f0661f171/core/src/components/carousel/carousel.ts#L65)

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

Defined in: [core/src/components/carousel/carousel.ts:72](https://github.com/AmadeusITGroup/AgnosUI/blob/2d0744590f7d3c0257002f8f35e88a9f0661f171/core/src/components/carousel/carousel.ts#L72)

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

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:64](https://github.com/AmadeusITGroup/AgnosUI/blob/2d0744590f7d3c0257002f8f35e88a9f0661f171/core-bootstrap/src/components/carousel/carousel.ts#L64)

The navigation layer of the carousel.

#### Inherited from

`CarouselExtraProps.navigation`

***

### plugins

> **plugins**: `CreatePluginType`\<`LoosePluginType`, \{ \}\>[]

Defined in: [core/src/components/carousel/carousel.ts:105](https://github.com/AmadeusITGroup/AgnosUI/blob/2d0744590f7d3c0257002f8f35e88a9f0661f171/core/src/components/carousel/carousel.ts#L105)

Plugins to extend the carousel with additional features

#### Default Value

`[]`

#### Inherited from

`CoreProps.plugins`

***

### showNavigationArrows

> **showNavigationArrows**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:88](https://github.com/AmadeusITGroup/AgnosUI/blob/2d0744590f7d3c0257002f8f35e88a9f0661f171/core/src/components/carousel/carousel.ts#L88)

If `true`, 'previous' and 'next' navigation arrows will be visible.

#### Default Value

`true`

#### Inherited from

`CoreProps.showNavigationArrows`

***

### showNavigationIndicators

> **showNavigationIndicators**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:94](https://github.com/AmadeusITGroup/AgnosUI/blob/2d0744590f7d3c0257002f8f35e88a9f0661f171/core/src/components/carousel/carousel.ts#L94)

If `true`, navigation indicators at the bottom of the slide will be visible.

#### Default Value

`true`

#### Inherited from

`CoreProps.showNavigationIndicators`

***

### skipSnaps

> **skipSnaps**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:79](https://github.com/AmadeusITGroup/AgnosUI/blob/2d0744590f7d3c0257002f8f35e88a9f0661f171/core/src/components/carousel/carousel.ts#L79)

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

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:68](https://github.com/AmadeusITGroup/AgnosUI/blob/2d0744590f7d3c0257002f8f35e88a9f0661f171/core-bootstrap/src/components/carousel/carousel.ts#L68)

The content of each slide in the carousel.

#### Inherited from

`CarouselExtraProps.slide`

***

### slideClass

> **slideClass**: `string` \| (`slideContext`) => `string`

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:50](https://github.com/AmadeusITGroup/AgnosUI/blob/2d0744590f7d3c0257002f8f35e88a9f0661f171/core-bootstrap/src/components/carousel/carousel.ts#L50)

Class name to apply to each slide in the carousel.

#### Default Value

`''`

#### Inherited from

`CarouselExtraProps.slideClass`

***

### slidesData

> **slidesData**: `SlideData`[]

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:56](https://github.com/AmadeusITGroup/AgnosUI/blob/2d0744590f7d3c0257002f8f35e88a9f0661f171/core-bootstrap/src/components/carousel/carousel.ts#L56)

The data for each slide in the carousel.

#### Default Value

`[]`

#### Inherited from

`CarouselExtraProps.slidesData`

***

### structure

> **structure**: `SlotContent`\<[`CarouselContext`](../type-aliases/CarouselContext.md)\<`SlideData`\>\>

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:60](https://github.com/AmadeusITGroup/AgnosUI/blob/2d0744590f7d3c0257002f8f35e88a9f0661f171/core-bootstrap/src/components/carousel/carousel.ts#L60)

The structure of the carousel.

#### Inherited from

`CarouselExtraProps.structure`
