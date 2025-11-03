Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:142

Interface representing the properties for a carousel component.

## Type Parameters

### SlideData

`SlideData` *extends* `object`

The type of data used by each slide in the carousel.

## Properties

### align

> **align**: `"start"` \| `"end"` \| `"center"`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:180

Align the slides relative to the carousel viewport

#### See

[https://www.embla-carousel.com/api/options/#align](https://www.embla-carousel.com/api/options/#align)

#### Default Value

`'center'`

***

### ariaIndicatorLabel()

> **ariaIndicatorLabel**: (`index`) => `string`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:158

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

***

### ariaLive

> **ariaLive**: `string`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:309

The aria-live attribute value for the carousel container.

#### Default Value

`'polite'`

***

### ariaNextLabel

> **ariaNextLabel**: `string`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:172

Aria label for next button

#### Default Value

`'Select next slide'`

***

### ariaPrevLabel

> **ariaPrevLabel**: `string`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:165

Aria label for previous button

#### Default Value

`'Select previous slide'`

***

### className

> **className**: `string`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:266

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### container

> **container**: `null` \| `string`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:189

Enables choosing a custom container element which holds the slides. By default, Embla will choose the first direct child element of the root element. Provide a valid CSS selector string.

#### See

[https://www.embla-carousel.com/api/options/#container](https://www.embla-carousel.com/api/options/#container)

#### Default Value

`null`

***

### containerClass

> **containerClass**: `string`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:273

Class name to apply to the container of the carousel.

#### Default Value

`''`

***

### containScroll

> **containScroll**: `false` \| `"trimSnaps"` \| `"keepSnaps"`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:197

Clear leading and trailing empty space that causes excessive scrolling

#### See

[https://www.embla-carousel.com/api/options/#containScroll](https://www.embla-carousel.com/api/options/#containScroll)

#### Default Value

`'trimSnaps'`

***

### direction

> **direction**: `"ltr"` \| `"rtl"`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:205

Choose content direction between `ltr` and `rtl`

#### See

[https://www.embla-carousel.com/api/options/#direction](https://www.embla-carousel.com/api/options/#direction)

#### Default Value

`'ltr'`

***

### dragFree

> **dragFree**: `boolean`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:213

Enables momentum scrolling

#### See

[https://www.embla-carousel.com/api/options/#dragFree](https://www.embla-carousel.com/api/options/#dragFree)

#### Default Value

`false`

***

### dragThreshold

> **dragThreshold**: `number`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:221

Drag threshold in pixels

#### See

[https://www.embla-carousel.com/api/options/#dragThreshold](https://www.embla-carousel.com/api/options/#dragThreshold)

#### Default Value

`10`

***

### duration

> **duration**: `number`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:229

Set scroll duration when triggered by any of the API methods

#### See

[https://www.embla-carousel.com/api/options/#duration](https://www.embla-carousel.com/api/options/#duration)

#### Default Value

`25`

***

### loop

> **loop**: `boolean`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:237

Enables infinite looping

#### See

[https://www.embla-carousel.com/api/options/#loop](https://www.embla-carousel.com/api/options/#loop)

#### Default Value

`false`

***

### navigation

> **navigation**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`CarouselContext`](../type-aliases/CarouselContext.md)\<`SlideData`\>\>

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:297

The navigation layer of the carousel.

***

### plugins

> **plugins**: `CreatePluginType`\<`LoosePluginType`, \{ \}\>[]

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:148

Plugins to extend the carousel with additional features

#### Default Value

`[]`

***

### showNavigationArrows

> **showNavigationArrows**: `boolean`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:252

If `true`, 'previous' and 'next' navigation arrows will be visible.

#### Default Value

`true`

***

### showNavigationIndicators

> **showNavigationIndicators**: `boolean`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:259

If `true`, navigation indicators at the bottom of the slide will be visible.

#### Default Value

`true`

***

### skipSnaps

> **skipSnaps**: `boolean`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:245

Allow the carousel to skip scroll snaps if it's dragged vigorously

#### See

[https://www.embla-carousel.com/api/options/#skipsnaps](https://www.embla-carousel.com/api/options/#skipsnaps)

#### Default Value

`false`

***

### slide

> **slide**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`CarouselSlideContext`](../type-aliases/CarouselSlideContext.md)\<`SlideData`\>\>

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:302

The content of each slide in the carousel.

***

### slideClass

> **slideClass**: `string` \| (`slideContext`) => `string`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:280

Class name to apply to each slide in the carousel.

#### Default Value

`''`

***

### slidesData

> **slidesData**: `SlideData`[]

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:287

The data for each slide in the carousel.

#### Default Value

`[]`

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`CarouselContext`](../type-aliases/CarouselContext.md)\<`SlideData`\>\>

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:292

The structure of the carousel.
