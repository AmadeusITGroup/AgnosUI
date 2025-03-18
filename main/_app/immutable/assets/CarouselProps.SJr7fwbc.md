Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:101

Interface representing the properties for a carousel component.

## Type Parameters

• **SlideData** *extends* `object`

The type of data used by each slide in the carousel.

## Properties

### align

> **align**: `"start"` \| `"end"` \| `"center"`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:130

Align the slides relative to the carousel viewport

#### See

[https://www.embla-carousel.com/api/options/#align](https://www.embla-carousel.com/api/options/#align)

#### Default Value

`'center'`

***

### ariaIndicatorLabel()

> **ariaIndicatorLabel**: (`index`) => `string`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:112

Aria label for navigation indicators

#### Parameters

##### index

`number`

#### Returns

`string`

***

### ariaNextLabel

> **ariaNextLabel**: `string`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:122

Aria label for next button

***

### ariaPrevLabel

> **ariaPrevLabel**: `string`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:117

Aria label for previous button

***

### container

> **container**: `null` \| `string`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:137

Enables choosing a custom container element which holds the slides. By default, Embla will choose the first direct child element of the root element. Provide a valid CSS selector string.

#### See

[https://www.embla-carousel.com/api/options/#container](https://www.embla-carousel.com/api/options/#container)

***

### containScroll

> **containScroll**: `false` \| `"trimSnaps"` \| `"keepSnaps"`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:145

Clear leading and trailing empty space that causes excessive scrolling

#### See

[https://www.embla-carousel.com/api/options/#containScroll](https://www.embla-carousel.com/api/options/#containScroll)

#### Default Value

`'trimSnaps'`

***

### direction

> **direction**: `"ltr"` \| `"rtl"`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:153

Choose content direction between `ltr` and `rtl`

#### See

[https://www.embla-carousel.com/api/options/#direction](https://www.embla-carousel.com/api/options/#direction)

#### Default Value

`'ltr'`

***

### dragFree

> **dragFree**: `boolean`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:161

Enables momentum scrolling

#### See

[https://www.embla-carousel.com/api/options/#dragFree](https://www.embla-carousel.com/api/options/#dragFree)

#### Default Value

`false`

***

### dragThreshold

> **dragThreshold**: `number`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:169

Drag threshold in pixels

#### See

[https://www.embla-carousel.com/api/options/#dragThreshold](https://www.embla-carousel.com/api/options/#dragThreshold)

#### Default Value

`10`

***

### duration

> **duration**: `number`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:177

Set scroll duration when triggered by any of the API methods

#### See

[https://www.embla-carousel.com/api/options/#duration](https://www.embla-carousel.com/api/options/#duration)

#### Default Value

`25`

***

### loop

> **loop**: `boolean`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:185

Enables infinite looping

#### See

[https://www.embla-carousel.com/api/options/#loop](https://www.embla-carousel.com/api/options/#loop)

#### Default Value

`false`

***

### plugins

> **plugins**: `CreatePluginType`\<`LoosePluginType`, \{\}\>[]

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:107

Plugins to extend the carousel with additional features

#### Default Value

`[]`

***

### showNavigationArrows

> **showNavigationArrows**: `boolean`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:198

If `true`, 'previous' and 'next' navigation arrows will be visible.

***

### showNavigationIndicators

> **showNavigationIndicators**: `boolean`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:203

If `true`, navigation indicators at the bottom of the slide will be visible.

***

### skipSnaps

> **skipSnaps**: `boolean`

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:193

Allow the carousel to skip scroll snaps if it's dragged vigorously

#### See

[https://www.embla-carousel.com/api/options/#skipsnaps](https://www.embla-carousel.com/api/options/#skipsnaps)

#### Default Value

`false`

***

### slide

> **slide**: [`SlotContent`](../type-aliases/SlotContent.md)\<`SlideData`\>

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:213

The content of each slide in the carousel.

***

### slidesData

> **slidesData**: `SlideData`[]

Defined in: angular/bootstrap/src/components/carousel/carousel.gen.ts:208

The data for each slide in the carousel.
