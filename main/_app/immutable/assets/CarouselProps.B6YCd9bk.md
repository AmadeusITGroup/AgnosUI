Defined in: [core-bootstrap/src/components/carousel/carousel.ts:95](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core-bootstrap/src/components/carousel/carousel.ts#L95)

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

Defined in: [core/src/components/carousel/carousel.ts:22](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/carousel/carousel.ts#L22)

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

Defined in: [core/src/components/carousel/carousel.ts:103](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/carousel/carousel.ts#L103)

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

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:80](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core-bootstrap/src/components/carousel/carousel.ts#L80)

The aria-live attribute value for the carousel container.

#### Default Value

`'polite'`

#### Inherited from

`CarouselExtraProps.ariaLive`

***

### ariaNextLabel

> **ariaNextLabel**: `string`

Defined in: [core/src/components/carousel/carousel.ts:111](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/carousel/carousel.ts#L111)

Aria label for next button

#### Inherited from

`CoreProps.ariaNextLabel`

***

### ariaPrevLabel

> **ariaPrevLabel**: `string`

Defined in: [core/src/components/carousel/carousel.ts:107](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/carousel/carousel.ts#L107)

Aria label for previous button

#### Inherited from

`CoreProps.ariaPrevLabel`

***

### className

> **className**: `string`

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:38](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core-bootstrap/src/components/carousel/carousel.ts#L38)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`CarouselExtraProps.className`

***

### container

> **container**: `null` \| `string`

Defined in: [core/src/components/carousel/carousel.ts:28](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/carousel/carousel.ts#L28)

Enables choosing a custom container element which holds the slides. By default, Embla will choose the first direct child element of the root element. Provide a valid CSS selector string.

#### See

[https://www.embla-carousel.com/api/options/#container](https://www.embla-carousel.com/api/options/#container)

#### Inherited from

`CoreProps.container`

***

### containerClass

> **containerClass**: `string`

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:44](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core-bootstrap/src/components/carousel/carousel.ts#L44)

Class name to apply to the container of the carousel.

#### Default Value

`''`

#### Inherited from

`CarouselExtraProps.containerClass`

***

### containScroll

> **containScroll**: `false` \| `"trimSnaps"` \| `"keepSnaps"`

Defined in: [core/src/components/carousel/carousel.ts:35](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/carousel/carousel.ts#L35)

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

Defined in: [core/src/components/carousel/carousel.ts:42](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/carousel/carousel.ts#L42)

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

Defined in: [core/src/components/carousel/carousel.ts:49](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/carousel/carousel.ts#L49)

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

Defined in: [core/src/components/carousel/carousel.ts:56](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/carousel/carousel.ts#L56)

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

Defined in: [core/src/components/carousel/carousel.ts:63](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/carousel/carousel.ts#L63)

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

Defined in: [core/src/components/carousel/carousel.ts:70](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/carousel/carousel.ts#L70)

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

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:68](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core-bootstrap/src/components/carousel/carousel.ts#L68)

The navigation layer of the carousel.

#### Default Value

`undefined`

#### Inherited from

`CarouselExtraProps.navigation`

***

### plugins

> **plugins**: `CreatePluginType`\<`LoosePluginType`, \{ \}\>[]

Defined in: [core/src/components/carousel/carousel.ts:99](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/carousel/carousel.ts#L99)

Plugins to extend the carousel with additional features

#### Default Value

`[]`

#### Inherited from

`CoreProps.plugins`

***

### showNavigationArrows

> **showNavigationArrows**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:84](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/carousel/carousel.ts#L84)

If `true`, 'previous' and 'next' navigation arrows will be visible.

#### Inherited from

`CoreProps.showNavigationArrows`

***

### showNavigationIndicators

> **showNavigationIndicators**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:88](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/carousel/carousel.ts#L88)

If `true`, navigation indicators at the bottom of the slide will be visible.

#### Inherited from

`CoreProps.showNavigationIndicators`

***

### skipSnaps

> **skipSnaps**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:77](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core/src/components/carousel/carousel.ts#L77)

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

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:74](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core-bootstrap/src/components/carousel/carousel.ts#L74)

The content of each slide in the carousel.

#### Default Value

`undefined`

#### Inherited from

`CarouselExtraProps.slide`

***

### slideClass

> **slideClass**: `string` \| (`slideContext`) => `string`

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:50](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core-bootstrap/src/components/carousel/carousel.ts#L50)

Class name to apply to each slide in the carousel.

#### Default Value

`''`

#### Inherited from

`CarouselExtraProps.slideClass`

***

### slidesData

> **slidesData**: `SlideData`[]

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:56](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core-bootstrap/src/components/carousel/carousel.ts#L56)

The data for each slide in the carousel.

#### Default Value

`[]`

#### Inherited from

`CarouselExtraProps.slidesData`

***

### structure

> **structure**: `SlotContent`\<[`CarouselContext`](../type-aliases/CarouselContext.md)\<`SlideData`\>\>

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:62](https://github.com/AmadeusITGroup/AgnosUI/blob/245c1c3f002028eb053c7617e830b2fa4b97ece2/core-bootstrap/src/components/carousel/carousel.ts#L62)

The structure of the carousel.

#### Default Value

`undefined`

#### Inherited from

`CarouselExtraProps.structure`
