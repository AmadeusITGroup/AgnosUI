Defined in: [core/src/components/carousel/carousel.ts:94](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/carousel/carousel.ts#L94)

Represents the properties for the carousel component.

## Extends

- `EmblaOptions`.`CarouselCommonPropsState`

## Properties

### align

> **align**: `"start"` \| `"end"` \| `"center"`

Defined in: [core/src/components/carousel/carousel.ts:22](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/carousel/carousel.ts#L22)

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

Defined in: [core/src/components/carousel/carousel.ts:103](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/carousel/carousel.ts#L103)

Aria label for navigation indicators

#### Parameters

##### index

`number`

#### Returns

`string`

***

### ariaNextLabel

> **ariaNextLabel**: `string`

Defined in: [core/src/components/carousel/carousel.ts:111](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/carousel/carousel.ts#L111)

Aria label for next button

***

### ariaPrevLabel

> **ariaPrevLabel**: `string`

Defined in: [core/src/components/carousel/carousel.ts:107](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/carousel/carousel.ts#L107)

Aria label for previous button

***

### container

> **container**: `null` \| `string`

Defined in: [core/src/components/carousel/carousel.ts:28](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/carousel/carousel.ts#L28)

Enables choosing a custom container element which holds the slides. By default, Embla will choose the first direct child element of the root element. Provide a valid CSS selector string.

#### See

[https://www.embla-carousel.com/api/options/#container](https://www.embla-carousel.com/api/options/#container)

#### Inherited from

`EmblaOptions.container`

***

### containScroll

> **containScroll**: `false` \| `"trimSnaps"` \| `"keepSnaps"`

Defined in: [core/src/components/carousel/carousel.ts:35](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/carousel/carousel.ts#L35)

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

Defined in: [core/src/components/carousel/carousel.ts:42](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/carousel/carousel.ts#L42)

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

Defined in: [core/src/components/carousel/carousel.ts:49](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/carousel/carousel.ts#L49)

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

Defined in: [core/src/components/carousel/carousel.ts:56](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/carousel/carousel.ts#L56)

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

Defined in: [core/src/components/carousel/carousel.ts:63](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/carousel/carousel.ts#L63)

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

Defined in: [core/src/components/carousel/carousel.ts:70](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/carousel/carousel.ts#L70)

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

Defined in: [core/src/components/carousel/carousel.ts:99](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/carousel/carousel.ts#L99)

Plugins to extend the carousel with additional features

#### Default Value

`[]`

***

### showNavigationArrows

> **showNavigationArrows**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:84](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/carousel/carousel.ts#L84)

If `true`, 'previous' and 'next' navigation arrows will be visible.

#### Inherited from

`CarouselCommonPropsState.showNavigationArrows`

***

### showNavigationIndicators

> **showNavigationIndicators**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:88](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/carousel/carousel.ts#L88)

If `true`, navigation indicators at the bottom of the slide will be visible.

#### Inherited from

`CarouselCommonPropsState.showNavigationIndicators`

***

### skipSnaps

> **skipSnaps**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:77](https://github.com/AmadeusITGroup/AgnosUI/blob/f5a824c1cf8670f33489eab7a6ded79475e216ec/core/src/components/carousel/carousel.ts#L77)

Allow the carousel to skip scroll snaps if it's dragged vigorously

#### See

[https://www.embla-carousel.com/api/options/#skipsnaps](https://www.embla-carousel.com/api/options/#skipsnaps)

#### Default Value

`false`

#### Inherited from

`EmblaOptions.skipSnaps`
