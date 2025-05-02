Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:139](https://github.com/AmadeusITGroup/AgnosUI/blob/016a5eedab93962e50297d9734df8484150eecd6/angular/bootstrap/src/components/carousel/carousel.component.ts#L139)

CarouselComponent is an Angular Component that extends [BaseWidgetDirective](BaseWidgetDirective.md)<[CarouselWidget](../type-aliases/CarouselWidget.md)>
to create a customizable carousel widget. It provides various inputs (see [CarouselProps](../interfaces/CarouselProps.md))
to configure the appearance and behavior of the carousel.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`CarouselWidget`](../type-aliases/CarouselWidget.md)\<`SlideData`\>\>

## Type Parameters

### SlideData

`SlideData` *extends* `object`

## Properties

### align

> `readonly` **align**: `InputSignal`\<`undefined` \| `"start"` \| `"end"` \| `"center"`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:225](https://github.com/AmadeusITGroup/AgnosUI/blob/016a5eedab93962e50297d9734df8484150eecd6/angular/bootstrap/src/components/carousel/carousel.component.ts#L225)

Align the slides relative to the carousel viewport

#### See

[https://www.embla-carousel.com/api/options/#align](https://www.embla-carousel.com/api/options/#align)

#### Default Value

`'center'`

***

### ariaIndicatorLabel

> `readonly` **ariaIndicatorLabel**: `InputSignal`\<`undefined` \| (`index`) => `string`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:143](https://github.com/AmadeusITGroup/AgnosUI/blob/016a5eedab93962e50297d9734df8484150eecd6/angular/bootstrap/src/components/carousel/carousel.component.ts#L143)

Aria label for navigation indicators

***

### ariaLive

> `readonly` **ariaLive**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:268](https://github.com/AmadeusITGroup/AgnosUI/blob/016a5eedab93962e50297d9734df8484150eecd6/angular/bootstrap/src/components/carousel/carousel.component.ts#L268)

The aria-live attribute value for the carousel container.

#### Default Value

`'polite'`

***

### ariaNextLabel

> `readonly` **ariaNextLabel**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:153](https://github.com/AmadeusITGroup/AgnosUI/blob/016a5eedab93962e50297d9734df8484150eecd6/angular/bootstrap/src/components/carousel/carousel.component.ts#L153)

Aria label for next button

***

### ariaPrevLabel

> `readonly` **ariaPrevLabel**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/016a5eedab93962e50297d9734df8484150eecd6/angular/bootstrap/src/components/carousel/carousel.component.ts#L148)

Aria label for previous button

***

### className

> `readonly` **className**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:247](https://github.com/AmadeusITGroup/AgnosUI/blob/016a5eedab93962e50297d9734df8484150eecd6/angular/bootstrap/src/components/carousel/carousel.component.ts#L247)

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### container

> `readonly` **container**: `InputSignal`\<`undefined` \| `null` \| `string`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:232](https://github.com/AmadeusITGroup/AgnosUI/blob/016a5eedab93962e50297d9734df8484150eecd6/angular/bootstrap/src/components/carousel/carousel.component.ts#L232)

Enables choosing a custom container element which holds the slides. By default, Embla will choose the first direct child element of the root element. Provide a valid CSS selector string.

#### See

[https://www.embla-carousel.com/api/options/#container](https://www.embla-carousel.com/api/options/#container)

***

### containerClass

> `readonly` **containerClass**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:254](https://github.com/AmadeusITGroup/AgnosUI/blob/016a5eedab93962e50297d9734df8484150eecd6/angular/bootstrap/src/components/carousel/carousel.component.ts#L254)

Class name to apply to the container of the carousel.

#### Default Value

`''`

***

### containScroll

> `readonly` **containScroll**: `InputSignal`\<`undefined` \| `false` \| `"trimSnaps"` \| `"keepSnaps"`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:240](https://github.com/AmadeusITGroup/AgnosUI/blob/016a5eedab93962e50297d9734df8484150eecd6/angular/bootstrap/src/components/carousel/carousel.component.ts#L240)

Clear leading and trailing empty space that causes excessive scrolling

#### See

[https://www.embla-carousel.com/api/options/#containScroll](https://www.embla-carousel.com/api/options/#containScroll)

#### Default Value

`'trimSnaps'`

***

### direction

> `readonly` **direction**: `InputSignal`\<`undefined` \| `"ltr"` \| `"rtl"`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:161](https://github.com/AmadeusITGroup/AgnosUI/blob/016a5eedab93962e50297d9734df8484150eecd6/angular/bootstrap/src/components/carousel/carousel.component.ts#L161)

Choose content direction between `ltr` and `rtl`

#### See

[https://www.embla-carousel.com/api/options/#direction](https://www.embla-carousel.com/api/options/#direction)

#### Default Value

`'ltr'`

***

### dragFree

> `readonly` **dragFree**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:169](https://github.com/AmadeusITGroup/AgnosUI/blob/016a5eedab93962e50297d9734df8484150eecd6/angular/bootstrap/src/components/carousel/carousel.component.ts#L169)

Enables momentum scrolling

#### See

[https://www.embla-carousel.com/api/options/#dragFree](https://www.embla-carousel.com/api/options/#dragFree)

#### Default Value

`false`

***

### dragThreshold

> `readonly` **dragThreshold**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:177](https://github.com/AmadeusITGroup/AgnosUI/blob/016a5eedab93962e50297d9734df8484150eecd6/angular/bootstrap/src/components/carousel/carousel.component.ts#L177)

Drag threshold in pixels

#### See

[https://www.embla-carousel.com/api/options/#dragThreshold](https://www.embla-carousel.com/api/options/#dragThreshold)

#### Default Value

`10`

***

### duration

> `readonly` **duration**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:185](https://github.com/AmadeusITGroup/AgnosUI/blob/016a5eedab93962e50297d9734df8484150eecd6/angular/bootstrap/src/components/carousel/carousel.component.ts#L185)

Set scroll duration when triggered by any of the API methods

#### See

[https://www.embla-carousel.com/api/options/#duration](https://www.embla-carousel.com/api/options/#duration)

#### Default Value

`25`

***

### loop

> `readonly` **loop**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:193](https://github.com/AmadeusITGroup/AgnosUI/blob/016a5eedab93962e50297d9734df8484150eecd6/angular/bootstrap/src/components/carousel/carousel.component.ts#L193)

Enables infinite looping

#### See

[https://www.embla-carousel.com/api/options/#loop](https://www.embla-carousel.com/api/options/#loop)

#### Default Value

`false`

***

### navigation

> `readonly` **navigation**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`CarouselContext`](../type-aliases/CarouselContext.md)\<`SlideData`\>\>\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:289](https://github.com/AmadeusITGroup/AgnosUI/blob/016a5eedab93962e50297d9734df8484150eecd6/angular/bootstrap/src/components/carousel/carousel.component.ts#L289)

The navigation layer of the carousel.

#### Default Value

`undefined`

***

### plugins

> `readonly` **plugins**: `InputSignal`\<`undefined` \| `CreatePluginType`\<`LoosePluginType`, \{\}\>[]\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:217](https://github.com/AmadeusITGroup/AgnosUI/blob/016a5eedab93962e50297d9734df8484150eecd6/angular/bootstrap/src/components/carousel/carousel.component.ts#L217)

Plugins to extend the carousel with additional features

#### Default Value

`[]`

***

### showNavigationArrows

> `readonly` **showNavigationArrows**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:206](https://github.com/AmadeusITGroup/AgnosUI/blob/016a5eedab93962e50297d9734df8484150eecd6/angular/bootstrap/src/components/carousel/carousel.component.ts#L206)

If `true`, 'previous' and 'next' navigation arrows will be visible.

***

### showNavigationIndicators

> `readonly` **showNavigationIndicators**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:211](https://github.com/AmadeusITGroup/AgnosUI/blob/016a5eedab93962e50297d9734df8484150eecd6/angular/bootstrap/src/components/carousel/carousel.component.ts#L211)

If `true`, navigation indicators at the bottom of the slide will be visible.

***

### skipSnaps

> `readonly` **skipSnaps**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:201](https://github.com/AmadeusITGroup/AgnosUI/blob/016a5eedab93962e50297d9734df8484150eecd6/angular/bootstrap/src/components/carousel/carousel.component.ts#L201)

Allow the carousel to skip scroll snaps if it's dragged vigorously

#### See

[https://www.embla-carousel.com/api/options/#skipsnaps](https://www.embla-carousel.com/api/options/#skipsnaps)

#### Default Value

`false`

***

### slide

> `readonly` **slide**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`CarouselSlideContext`](../type-aliases/CarouselSlideContext.md)\<`SlideData`\>\>\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:296](https://github.com/AmadeusITGroup/AgnosUI/blob/016a5eedab93962e50297d9734df8484150eecd6/angular/bootstrap/src/components/carousel/carousel.component.ts#L296)

The content of each slide in the carousel.

#### Default Value

`undefined`

***

### slideClass

> `readonly` **slideClass**: `InputSignal`\<`undefined` \| `string` \| (`slideContext`) => `string`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:261](https://github.com/AmadeusITGroup/AgnosUI/blob/016a5eedab93962e50297d9734df8484150eecd6/angular/bootstrap/src/components/carousel/carousel.component.ts#L261)

Class name to apply to each slide in the carousel.

#### Default Value

`''`

***

### slidesData

> `readonly` **slidesData**: `InputSignal`\<`undefined` \| `SlideData`[]\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:275](https://github.com/AmadeusITGroup/AgnosUI/blob/016a5eedab93962e50297d9734df8484150eecd6/angular/bootstrap/src/components/carousel/carousel.component.ts#L275)

The data for each slide in the carousel.

#### Default Value

`[]`

***

### structure

> `readonly` **structure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`CarouselContext`](../type-aliases/CarouselContext.md)\<`SlideData`\>\>\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:282](https://github.com/AmadeusITGroup/AgnosUI/blob/016a5eedab93962e50297d9734df8484150eecd6/angular/bootstrap/src/components/carousel/carousel.component.ts#L282)

The structure of the carousel.

#### Default Value

`undefined`

## Accessors

### api

#### Get Signature

> **get** **api**(): `W`\[`"api"`\]

Defined in: [angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/016a5eedab93962e50297d9734df8484150eecd6/angular/headless/src/utils/widget.ts#L140)

Retrieves the widget api

##### Returns

`W`\[`"api"`\]

the widget api

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`api`](BaseWidgetDirective.md#api)

***

### directives

#### Get Signature

> **get** **directives**(): `W`\[`"directives"`\]

Defined in: [angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/016a5eedab93962e50297d9734df8484150eecd6/angular/headless/src/utils/widget.ts#L156)

Retrieves the widget directives

##### Returns

`W`\[`"directives"`\]

the widget directives

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`directives`](BaseWidgetDirective.md#directives)

***

### state

#### Get Signature

> **get** **state**(): [`AngularState`](../type-aliases/AngularState.md)\<`W`\>

Defined in: [angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/016a5eedab93962e50297d9734df8484150eecd6/angular/headless/src/utils/widget.ts#L148)

Retrieves the widget state. Each property of the state is exposed through an Angular [Signal](https://angular.dev/api/core/Signal)

##### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)
