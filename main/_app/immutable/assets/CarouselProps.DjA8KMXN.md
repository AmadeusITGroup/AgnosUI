Defined in: [core/src/components/carousel/carousel.ts:93](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/carousel/carousel.ts#L93)

Represents the properties for the carousel component.

## Extends

- `EmblaOptions`.`CarouselCommonPropsState`

## Properties

### align

> **align**: `"start"` \| `"end"` \| `"center"`

Defined in: [core/src/components/carousel/carousel.ts:21](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/carousel/carousel.ts#L21)

Align the slides relative to the carousel viewport

#### See

[https://www.embla-carousel.com/api/options/#align](https://www.embla-carousel.com/api/options/#align)

#### Default Value

`'center'`

#### Inherited from

`EmblaOptions.align`

***

### ariaIndicatorLabel()

> **ariaIndicatorLabel**: (`index`) => `string`

Defined in: [core/src/components/carousel/carousel.ts:102](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/carousel/carousel.ts#L102)

Aria label for navigation indicators

#### Parameters

##### index

`number`

#### Returns

`string`

***

### ariaNextLabel

> **ariaNextLabel**: `string`

Defined in: [core/src/components/carousel/carousel.ts:110](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/carousel/carousel.ts#L110)

Aria label for next button

***

### ariaPrevLabel

> **ariaPrevLabel**: `string`

Defined in: [core/src/components/carousel/carousel.ts:106](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/carousel/carousel.ts#L106)

Aria label for previous button

***

### container

> **container**: `null` \| `string`

Defined in: [core/src/components/carousel/carousel.ts:27](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/carousel/carousel.ts#L27)

Enables choosing a custom container element which holds the slides. By default, Embla will choose the first direct child element of the root element. Provide a valid CSS selector string.

#### See

[https://www.embla-carousel.com/api/options/#container](https://www.embla-carousel.com/api/options/#container)

#### Inherited from

`EmblaOptions.container`

***

### containScroll

> **containScroll**: `false` \| `"trimSnaps"` \| `"keepSnaps"`

Defined in: [core/src/components/carousel/carousel.ts:34](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/carousel/carousel.ts#L34)

Clear leading and trailing empty space that causes excessive scrolling

#### See

[https://www.embla-carousel.com/api/options/#containScroll](https://www.embla-carousel.com/api/options/#containScroll)

#### Default Value

`'trimSnaps'`

#### Inherited from

`EmblaOptions.containScroll`

***

### direction

> **direction**: `"ltr"` \| `"rtl"`

Defined in: [core/src/components/carousel/carousel.ts:41](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/carousel/carousel.ts#L41)

Choose content direction between `ltr` and `rtl`

#### See

[https://www.embla-carousel.com/api/options/#direction](https://www.embla-carousel.com/api/options/#direction)

#### Default Value

`'ltr'`

#### Inherited from

`EmblaOptions.direction`

***

### dragFree

> **dragFree**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:48](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/carousel/carousel.ts#L48)

Enables momentum scrolling

#### See

[https://www.embla-carousel.com/api/options/#dragFree](https://www.embla-carousel.com/api/options/#dragFree)

#### Default Value

`false`

#### Inherited from

`EmblaOptions.dragFree`

***

### dragThreshold

> **dragThreshold**: `number`

Defined in: [core/src/components/carousel/carousel.ts:55](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/carousel/carousel.ts#L55)

Drag threshold in pixels

#### See

[https://www.embla-carousel.com/api/options/#dragThreshold](https://www.embla-carousel.com/api/options/#dragThreshold)

#### Default Value

`10`

#### Inherited from

`EmblaOptions.dragThreshold`

***

### duration

> **duration**: `number`

Defined in: [core/src/components/carousel/carousel.ts:62](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/carousel/carousel.ts#L62)

Set scroll duration when triggered by any of the API methods

#### See

[https://www.embla-carousel.com/api/options/#duration](https://www.embla-carousel.com/api/options/#duration)

#### Default Value

`25`

#### Inherited from

`EmblaOptions.duration`

***

### loop

> **loop**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:69](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/carousel/carousel.ts#L69)

Enables infinite looping

#### See

[https://www.embla-carousel.com/api/options/#loop](https://www.embla-carousel.com/api/options/#loop)

#### Default Value

`false`

#### Inherited from

`EmblaOptions.loop`

***

### plugins

> **plugins**: `CreatePluginType`\<`LoosePluginType`, \{ \}\>[]

Defined in: [core/src/components/carousel/carousel.ts:98](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/carousel/carousel.ts#L98)

Plugins to extend the carousel with additional features

#### Default Value

`[]`

***

### showNavigationArrows

> **showNavigationArrows**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:83](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/carousel/carousel.ts#L83)

If `true`, 'previous' and 'next' navigation arrows will be visible.

#### Inherited from

`CarouselCommonPropsState.showNavigationArrows`

***

### showNavigationIndicators

> **showNavigationIndicators**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:87](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/carousel/carousel.ts#L87)

If `true`, navigation indicators at the bottom of the slide will be visible.

#### Inherited from

`CarouselCommonPropsState.showNavigationIndicators`

***

### skipSnaps

> **skipSnaps**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:76](https://github.com/AmadeusITGroup/AgnosUI/blob/b3c2f9659f1020dbc2ea669a0d59b3f0c539ff3d/core/src/components/carousel/carousel.ts#L76)

Allow the carousel to skip scroll snaps if it's dragged vigorously

#### See

[https://www.embla-carousel.com/api/options/#skipsnaps](https://www.embla-carousel.com/api/options/#skipsnaps)

#### Default Value

`false`

#### Inherited from

`EmblaOptions.skipSnaps`
