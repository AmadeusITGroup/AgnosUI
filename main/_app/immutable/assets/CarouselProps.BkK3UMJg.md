Defined in: [core-bootstrap/src/components/carousel/carousel.ts:42](https://github.com/AmadeusITGroup/AgnosUI/blob/a8f09f9f0c2e250cefeb740de3961aa92ffacabf/core-bootstrap/src/components/carousel/carousel.ts#L42)

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

Defined in: [core/src/components/carousel/carousel.ts:20](https://github.com/AmadeusITGroup/AgnosUI/blob/a8f09f9f0c2e250cefeb740de3961aa92ffacabf/core/src/components/carousel/carousel.ts#L20)

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

Defined in: [core/src/components/carousel/carousel.ts:101](https://github.com/AmadeusITGroup/AgnosUI/blob/a8f09f9f0c2e250cefeb740de3961aa92ffacabf/core/src/components/carousel/carousel.ts#L101)

Aria label for navigation indicators

#### Parameters

##### index

`number`

#### Returns

`string`

#### Inherited from

`CoreProps.ariaIndicatorLabel`

***

### ariaNextLabel

> **ariaNextLabel**: `string`

Defined in: [core/src/components/carousel/carousel.ts:109](https://github.com/AmadeusITGroup/AgnosUI/blob/a8f09f9f0c2e250cefeb740de3961aa92ffacabf/core/src/components/carousel/carousel.ts#L109)

Aria label for next button

#### Inherited from

`CoreProps.ariaNextLabel`

***

### ariaPrevLabel

> **ariaPrevLabel**: `string`

Defined in: [core/src/components/carousel/carousel.ts:105](https://github.com/AmadeusITGroup/AgnosUI/blob/a8f09f9f0c2e250cefeb740de3961aa92ffacabf/core/src/components/carousel/carousel.ts#L105)

Aria label for previous button

#### Inherited from

`CoreProps.ariaPrevLabel`

***

### container

> **container**: `null` \| `string`

Defined in: [core/src/components/carousel/carousel.ts:26](https://github.com/AmadeusITGroup/AgnosUI/blob/a8f09f9f0c2e250cefeb740de3961aa92ffacabf/core/src/components/carousel/carousel.ts#L26)

Enables choosing a custom container element which holds the slides. By default, Embla will choose the first direct child element of the root element. Provide a valid CSS selector string.

#### See

[https://www.embla-carousel.com/api/options/#container](https://www.embla-carousel.com/api/options/#container)

#### Inherited from

`CoreProps.container`

***

### containScroll

> **containScroll**: `false` \| `"trimSnaps"` \| `"keepSnaps"`

Defined in: [core/src/components/carousel/carousel.ts:33](https://github.com/AmadeusITGroup/AgnosUI/blob/a8f09f9f0c2e250cefeb740de3961aa92ffacabf/core/src/components/carousel/carousel.ts#L33)

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

Defined in: [core/src/components/carousel/carousel.ts:40](https://github.com/AmadeusITGroup/AgnosUI/blob/a8f09f9f0c2e250cefeb740de3961aa92ffacabf/core/src/components/carousel/carousel.ts#L40)

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

Defined in: [core/src/components/carousel/carousel.ts:47](https://github.com/AmadeusITGroup/AgnosUI/blob/a8f09f9f0c2e250cefeb740de3961aa92ffacabf/core/src/components/carousel/carousel.ts#L47)

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

Defined in: [core/src/components/carousel/carousel.ts:54](https://github.com/AmadeusITGroup/AgnosUI/blob/a8f09f9f0c2e250cefeb740de3961aa92ffacabf/core/src/components/carousel/carousel.ts#L54)

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

Defined in: [core/src/components/carousel/carousel.ts:61](https://github.com/AmadeusITGroup/AgnosUI/blob/a8f09f9f0c2e250cefeb740de3961aa92ffacabf/core/src/components/carousel/carousel.ts#L61)

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

Defined in: [core/src/components/carousel/carousel.ts:68](https://github.com/AmadeusITGroup/AgnosUI/blob/a8f09f9f0c2e250cefeb740de3961aa92ffacabf/core/src/components/carousel/carousel.ts#L68)

Enables infinite looping

#### See

[https://www.embla-carousel.com/api/options/#loop](https://www.embla-carousel.com/api/options/#loop)

#### Default Value

`false`

#### Inherited from

`CoreProps.loop`

***

### plugins

> **plugins**: `CreatePluginType`\<`LoosePluginType`, \{\}\>[]

Defined in: [core/src/components/carousel/carousel.ts:97](https://github.com/AmadeusITGroup/AgnosUI/blob/a8f09f9f0c2e250cefeb740de3961aa92ffacabf/core/src/components/carousel/carousel.ts#L97)

Plugins to extend the carousel with additional features

#### Default Value

`[]`

#### Inherited from

`CoreProps.plugins`

***

### showNavigationArrows

> **showNavigationArrows**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:82](https://github.com/AmadeusITGroup/AgnosUI/blob/a8f09f9f0c2e250cefeb740de3961aa92ffacabf/core/src/components/carousel/carousel.ts#L82)

If `true`, 'previous' and 'next' navigation arrows will be visible.

#### Inherited from

`CoreProps.showNavigationArrows`

***

### showNavigationIndicators

> **showNavigationIndicators**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:86](https://github.com/AmadeusITGroup/AgnosUI/blob/a8f09f9f0c2e250cefeb740de3961aa92ffacabf/core/src/components/carousel/carousel.ts#L86)

If `true`, navigation indicators at the bottom of the slide will be visible.

#### Inherited from

`CoreProps.showNavigationIndicators`

***

### skipSnaps

> **skipSnaps**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:75](https://github.com/AmadeusITGroup/AgnosUI/blob/a8f09f9f0c2e250cefeb740de3961aa92ffacabf/core/src/components/carousel/carousel.ts#L75)

Allow the carousel to skip scroll snaps if it's dragged vigorously

#### See

[https://www.embla-carousel.com/api/options/#skipsnaps](https://www.embla-carousel.com/api/options/#skipsnaps)

#### Default Value

`false`

#### Inherited from

`CoreProps.skipSnaps`

***

### slide

> **slide**: `SlotContent`\<`SlideData`\>

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:27](https://github.com/AmadeusITGroup/AgnosUI/blob/a8f09f9f0c2e250cefeb740de3961aa92ffacabf/core-bootstrap/src/components/carousel/carousel.ts#L27)

The content of each slide in the carousel.

#### Inherited from

`CarouselExtraProps.slide`

***

### slidesData

> **slidesData**: `SlideData`[]

Defined in: [core-bootstrap/src/components/carousel/carousel.ts:23](https://github.com/AmadeusITGroup/AgnosUI/blob/a8f09f9f0c2e250cefeb740de3961aa92ffacabf/core-bootstrap/src/components/carousel/carousel.ts#L23)

The data for each slide in the carousel.

#### Inherited from

`CarouselExtraProps.slidesData`
