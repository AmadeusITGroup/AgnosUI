Defined in: [core/src/components/carousel/carousel.ts:100](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/carousel/carousel.ts#L100)

Represents the properties for the carousel component.

## Extends

- `EmblaOptions`.`CarouselCommonPropsState`

## Properties

### align

> **align**: `"start"` \| `"end"` \| `"center"`

Defined in: [core/src/components/carousel/carousel.ts:22](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/carousel/carousel.ts#L22)

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

Defined in: [core/src/components/carousel/carousel.ts:114](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/carousel/carousel.ts#L114)

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

### ariaNextLabel

> **ariaNextLabel**: `string`

Defined in: [core/src/components/carousel/carousel.ts:126](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/carousel/carousel.ts#L126)

Aria label for next button

#### Default Value

`'Select next slide'`

***

### ariaPrevLabel

> **ariaPrevLabel**: `string`

Defined in: [core/src/components/carousel/carousel.ts:120](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/carousel/carousel.ts#L120)

Aria label for previous button

#### Default Value

`'Select previous slide'`

***

### container

> **container**: `string` \| `null`

Defined in: [core/src/components/carousel/carousel.ts:30](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/carousel/carousel.ts#L30)

Enables choosing a custom container element which holds the slides. By default, Embla will choose the first direct child element of the root element. Provide a valid CSS selector string.

#### See

[https://www.embla-carousel.com/api/options/#container](https://www.embla-carousel.com/api/options/#container)

#### Default Value

`null`

#### Inherited from

`EmblaOptions.container`

***

### containScroll

> **containScroll**: `false` \| `"trimSnaps"` \| `"keepSnaps"`

Defined in: [core/src/components/carousel/carousel.ts:37](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/carousel/carousel.ts#L37)

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

Defined in: [core/src/components/carousel/carousel.ts:44](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/carousel/carousel.ts#L44)

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

Defined in: [core/src/components/carousel/carousel.ts:51](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/carousel/carousel.ts#L51)

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

Defined in: [core/src/components/carousel/carousel.ts:58](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/carousel/carousel.ts#L58)

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

Defined in: [core/src/components/carousel/carousel.ts:65](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/carousel/carousel.ts#L65)

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

Defined in: [core/src/components/carousel/carousel.ts:72](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/carousel/carousel.ts#L72)

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

Defined in: [core/src/components/carousel/carousel.ts:105](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/carousel/carousel.ts#L105)

Plugins to extend the carousel with additional features

#### Default Value

`[]`

***

### showNavigationArrows

> **showNavigationArrows**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:88](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/carousel/carousel.ts#L88)

If `true`, 'previous' and 'next' navigation arrows will be visible.

#### Default Value

`true`

#### Inherited from

`CarouselCommonPropsState.showNavigationArrows`

***

### showNavigationIndicators

> **showNavigationIndicators**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:94](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/carousel/carousel.ts#L94)

If `true`, navigation indicators at the bottom of the slide will be visible.

#### Default Value

`true`

#### Inherited from

`CarouselCommonPropsState.showNavigationIndicators`

***

### skipSnaps

> **skipSnaps**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:79](https://github.com/AmadeusITGroup/AgnosUI/blob/c4afb1fc62e45efb44b3d17975b0b661ac2b13fa/core/src/components/carousel/carousel.ts#L79)

Allow the carousel to skip scroll snaps if it's dragged vigorously

#### See

[https://www.embla-carousel.com/api/options/#skipsnaps](https://www.embla-carousel.com/api/options/#skipsnaps)

#### Default Value

`false`

#### Inherited from

`EmblaOptions.skipSnaps`
