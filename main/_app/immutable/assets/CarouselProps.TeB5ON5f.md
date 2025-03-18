Defined in: [core/src/components/carousel/carousel.ts:92](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/core/src/components/carousel/carousel.ts#L92)

Represents the properties for the carousel component.

## Extends

- `EmblaOptions`.`CarouselCommonPropsState`

## Properties

### align

> **align**: `"start"` \| `"end"` \| `"center"`

Defined in: [core/src/components/carousel/carousel.ts:20](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/core/src/components/carousel/carousel.ts#L20)

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

Defined in: [core/src/components/carousel/carousel.ts:101](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/core/src/components/carousel/carousel.ts#L101)

Aria label for navigation indicators

#### Parameters

##### index

`number`

#### Returns

`string`

***

### ariaNextLabel

> **ariaNextLabel**: `string`

Defined in: [core/src/components/carousel/carousel.ts:109](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/core/src/components/carousel/carousel.ts#L109)

Aria label for next button

***

### ariaPrevLabel

> **ariaPrevLabel**: `string`

Defined in: [core/src/components/carousel/carousel.ts:105](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/core/src/components/carousel/carousel.ts#L105)

Aria label for previous button

***

### container

> **container**: `null` \| `string`

Defined in: [core/src/components/carousel/carousel.ts:26](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/core/src/components/carousel/carousel.ts#L26)

Enables choosing a custom container element which holds the slides. By default, Embla will choose the first direct child element of the root element. Provide a valid CSS selector string.

#### See

[https://www.embla-carousel.com/api/options/#container](https://www.embla-carousel.com/api/options/#container)

#### Inherited from

`EmblaOptions.container`

***

### containScroll

> **containScroll**: `false` \| `"trimSnaps"` \| `"keepSnaps"`

Defined in: [core/src/components/carousel/carousel.ts:33](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/core/src/components/carousel/carousel.ts#L33)

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

Defined in: [core/src/components/carousel/carousel.ts:40](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/core/src/components/carousel/carousel.ts#L40)

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

Defined in: [core/src/components/carousel/carousel.ts:47](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/core/src/components/carousel/carousel.ts#L47)

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

Defined in: [core/src/components/carousel/carousel.ts:54](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/core/src/components/carousel/carousel.ts#L54)

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

Defined in: [core/src/components/carousel/carousel.ts:61](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/core/src/components/carousel/carousel.ts#L61)

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

Defined in: [core/src/components/carousel/carousel.ts:68](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/core/src/components/carousel/carousel.ts#L68)

Enables infinite looping

#### See

[https://www.embla-carousel.com/api/options/#loop](https://www.embla-carousel.com/api/options/#loop)

#### Default Value

`false`

#### Inherited from

`EmblaOptions.loop`

***

### plugins

> **plugins**: `CreatePluginType`\<`LoosePluginType`, \{\}\>[]

Defined in: [core/src/components/carousel/carousel.ts:97](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/core/src/components/carousel/carousel.ts#L97)

Plugins to extend the carousel with additional features

#### Default Value

`[]`

***

### showNavigationArrows

> **showNavigationArrows**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:82](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/core/src/components/carousel/carousel.ts#L82)

If `true`, 'previous' and 'next' navigation arrows will be visible.

#### Inherited from

`CarouselCommonPropsState.showNavigationArrows`

***

### showNavigationIndicators

> **showNavigationIndicators**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:86](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/core/src/components/carousel/carousel.ts#L86)

If `true`, navigation indicators at the bottom of the slide will be visible.

#### Inherited from

`CarouselCommonPropsState.showNavigationIndicators`

***

### skipSnaps

> **skipSnaps**: `boolean`

Defined in: [core/src/components/carousel/carousel.ts:75](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/core/src/components/carousel/carousel.ts#L75)

Allow the carousel to skip scroll snaps if it's dragged vigorously

#### See

[https://www.embla-carousel.com/api/options/#skipsnaps](https://www.embla-carousel.com/api/options/#skipsnaps)

#### Default Value

`false`

#### Inherited from

`EmblaOptions.skipSnaps`
