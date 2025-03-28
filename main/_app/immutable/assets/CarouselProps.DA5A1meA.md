Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:156

Interface representing the properties for a carousel component.

## Type Parameters

### SlideData

`SlideData` *extends* `object`

The type of data used by each slide in the carousel.

## Properties

### align

> **align**: `"start"` \| `"end"` \| `"center"`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:185

Align the slides relative to the carousel viewport

#### See

[https://www.embla-carousel.com/api/options/#align](https://www.embla-carousel.com/api/options/#align)

#### Default Value

`'center'`

***

### ariaIndicatorLabel()

> **ariaIndicatorLabel**: (`index`) => `string`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:167

Aria label for navigation indicators

#### Parameters

##### index

`number`

#### Returns

`string`

***

### ariaLive

> **ariaLive**: `string`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:314

The aria-live attribute value for the carousel container.

#### Default Value

`'polite'`

***

### ariaNextLabel

> **ariaNextLabel**: `string`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:177

Aria label for next button

***

### ariaPrevLabel

> **ariaPrevLabel**: `string`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:172

Aria label for previous button

***

### className

> **className**: `string`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:265

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### container

> **container**: `null` \| `string`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:192

Enables choosing a custom container element which holds the slides. By default, Embla will choose the first direct child element of the root element. Provide a valid CSS selector string.

#### See

[https://www.embla-carousel.com/api/options/#container](https://www.embla-carousel.com/api/options/#container)

***

### containerClass

> **containerClass**: `string`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:272

Class name to apply to the container of the carousel.

#### Default Value

`''`

***

### containScroll

> **containScroll**: `false` \| `"trimSnaps"` \| `"keepSnaps"`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:200

Clear leading and trailing empty space that causes excessive scrolling

#### See

[https://www.embla-carousel.com/api/options/#containScroll](https://www.embla-carousel.com/api/options/#containScroll)

#### Default Value

`'trimSnaps'`

***

### direction

> **direction**: `"ltr"` \| `"rtl"`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:208

Choose content direction between `ltr` and `rtl`

#### See

[https://www.embla-carousel.com/api/options/#direction](https://www.embla-carousel.com/api/options/#direction)

#### Default Value

`'ltr'`

***

### dragFree

> **dragFree**: `boolean`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:216

Enables momentum scrolling

#### See

[https://www.embla-carousel.com/api/options/#dragFree](https://www.embla-carousel.com/api/options/#dragFree)

#### Default Value

`false`

***

### dragThreshold

> **dragThreshold**: `number`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:224

Drag threshold in pixels

#### See

[https://www.embla-carousel.com/api/options/#dragThreshold](https://www.embla-carousel.com/api/options/#dragThreshold)

#### Default Value

`10`

***

### duration

> **duration**: `number`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:232

Set scroll duration when triggered by any of the API methods

#### See

[https://www.embla-carousel.com/api/options/#duration](https://www.embla-carousel.com/api/options/#duration)

#### Default Value

`25`

***

### loop

> **loop**: `boolean`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:240

Enables infinite looping

#### See

[https://www.embla-carousel.com/api/options/#loop](https://www.embla-carousel.com/api/options/#loop)

#### Default Value

`false`

***

### navigation

> **navigation**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`CarouselContext`](../type-aliases/CarouselContext.md)\<`SlideData`\>\>

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:300

The navigation layer of the carousel.

#### Default Value

`undefined`

***

### plugins

> **plugins**: `CreatePluginType`\<`LoosePluginType`, \{\}\>[]

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:162

Plugins to extend the carousel with additional features

#### Default Value

`[]`

***

### showNavigationArrows

> **showNavigationArrows**: `boolean`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:253

If `true`, 'previous' and 'next' navigation arrows will be visible.

***

### showNavigationIndicators

> **showNavigationIndicators**: `boolean`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:258

If `true`, navigation indicators at the bottom of the slide will be visible.

***

### skipSnaps

> **skipSnaps**: `boolean`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:248

Allow the carousel to skip scroll snaps if it's dragged vigorously

#### See

[https://www.embla-carousel.com/api/options/#skipsnaps](https://www.embla-carousel.com/api/options/#skipsnaps)

#### Default Value

`false`

***

### slide

> **slide**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`CarouselSlideContext`](../type-aliases/CarouselSlideContext.md)\<`SlideData`\>\>

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:307

The content of each slide in the carousel.

#### Default Value

`undefined`

***

### slideClass

> **slideClass**: `string` \| (`slideContext`) => `string`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:279

Class name to apply to each slide in the carousel.

#### Default Value

`''`

***

### slidesData

> **slidesData**: `SlideData`[]

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:286

The data for each slide in the carousel.

#### Default Value

`[]`

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`CarouselContext`](../type-aliases/CarouselContext.md)\<`SlideData`\>\>

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:293

The structure of the carousel.

#### Default Value

`undefined`
